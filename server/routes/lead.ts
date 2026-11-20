import type { RequestHandler } from "express";
import { z } from "zod";
import { META_LEAD_EVENT_ID_PATTERN } from "../../shared/api.js";
import {
  LEAD_GOALS,
  LEAD_PAGE_SOURCES,
  MAX_SELECTED_SERVICES,
  SELECTED_SERVICE_ID_PATTERN,
  normalizeInternationalPhone,
  type LeadResponse,
} from "../../shared/lead.js";
import { prepareMetaLead } from "../lib/metaConversions.js";

/**
 * Server-side proxy between the website form and the DigitalFace lead intake.
 *
 * The browser never sees the intake URL. It posts here, this route validates
 * the shape and forwards one clean JSON body upstream, where all downstream
 * automation — offer code, email, CRM mapping — is owned. Nothing about the
 * upstream endpoint is ever echoed back to the client.
 */

const ATTRIBUTION_MAX = 600;

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().default("");

const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  business: z.string().trim().min(1).max(160),
  email: z.string().trim().min(3).max(200).email(),
  phone: z
    .string()
    .trim()
    .min(5)
    .max(40)
    .transform((value, context) => {
      const normalized = normalizeInternationalPhone(value);
      if (normalized) return normalized;

      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "invalid_phone",
      });
      return z.NEVER;
    }),
  country: z.string().trim().length(2),
  countryName: optionalText(120),
  website: optionalText(400),
  primaryGoal: z.enum(LEAD_GOALS),
  primaryGoalLabel: optionalText(120),
  message: optionalText(4000),
  /*
   * The services the visitor added to their request. Optional so an older
   * cached bundle, or any placement that never shows the catalog, still
   * submits cleanly. Ids are checked for shape only — which services exist is
   * the website's business, and n8n owns the mapping downstream.
   */
  selectedServices: z
    .array(
      z.object({
        id: z.string().trim().min(1).max(80).regex(SELECTED_SERVICE_ID_PATTERN),
        name: z.string().trim().min(1).max(200),
      }),
    )
    .max(MAX_SELECTED_SERVICES)
    .optional()
    .default([]),
  locale: z.string().trim().max(10).optional().default("en"),
  formSource: z.string().trim().min(1).max(80),
  pageSource: z.enum(LEAD_PAGE_SOURCES),

  currentPageUrl: optionalText(ATTRIBUTION_MAX),
  pageRoute: optionalText(ATTRIBUTION_MAX),
  referrer: optionalText(ATTRIBUTION_MAX),
  utmSource: optionalText(200),
  utmMedium: optionalText(200),
  utmCampaign: optionalText(200),
  utmContent: optionalText(200),
  utmTerm: optionalText(200),
  submissionTimestamp: optionalText(40),
  metaConversion: z
    .object({
      consent: z.literal(true),
      eventId: z.string().regex(META_LEAD_EVENT_ID_PATTERN),
    })
    .optional()
    .catch(undefined),
});

/** Upstream should never hold a request open long enough to hang the visitor. */
const UPSTREAM_TIMEOUT_MS = 10_000;

export const handleLeadIntake: RequestHandler = async (req, res) => {
  const parsed = leadSchema.safeParse(req.body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.code;
      }
    }
    const body: LeadResponse = { ok: false, error: "invalid", fieldErrors };
    return res.status(400).json(body);
  }

  const endpoint = process.env.N8N_LEAD_WEBHOOK_URL;

  if (!endpoint) {
    // Fail loudly in the logs and honestly to the visitor: reporting success
    // here would drop a real lead on the floor and promise an email that can
    // never arrive.
    console.error(
      "[lead] N8N_LEAD_WEBHOOK_URL is not set — the submission was not forwarded.",
    );
    const body: LeadResponse = { ok: false, error: "not_configured" };
    return res.status(503).json(body);
  }

  const { metaConversion, ...lead } = parsed.data;
  const submission = {
    ...lead,
    // Server-stamped so the record has a time the client cannot skew.
    receivedAt: new Date().toISOString(),
  };

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });

    if (!upstream.ok) {
      console.error(`[lead] Upstream responded ${upstream.status}.`);
      const body: LeadResponse = { ok: false, error: "upstream_failed" };
      return res.status(502).json(body);
    }

    const body: LeadResponse = { ok: true };
    if (metaConversion) {
      const { formSource, pageSource, locale } = lead;
      const sendMetaLead = prepareMetaLead(
        req,
        { formSource, pageSource, locale },
        metaConversion.eventId,
      );
      // The n8n success response follows successful CRM intake. A generic 2xx
      // still keeps the existing form contract, but cannot create a Meta event.
      if (
        sendMetaLead &&
        (await upstream.json().catch(() => null))?.success === true
      ) {
        body.metaEventId = metaConversion.eventId;
        await sendMetaLead();
      }
    }
    return res.status(200).json(body);
  } catch (error) {
    // Log the reason, never the endpoint.
    console.error(
      "[lead] Failed to forward submission:",
      error instanceof Error ? error.message : "unknown error",
    );
    const body: LeadResponse = { ok: false, error: "upstream_failed" };
    return res.status(502).json(body);
  }
};
