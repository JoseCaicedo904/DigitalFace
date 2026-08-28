import type { RequestHandler } from "express";
import { z } from "zod";
import {
  LEAD_GOALS,
  LEAD_PAGE_SOURCES,
  isPlausiblePhone,
  type LeadResponse,
} from "../../shared/lead";

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
    .refine(isPlausiblePhone, "invalid_phone"),
  country: z.string().trim().length(2),
  countryName: optionalText(120),
  website: optionalText(400),
  primaryGoal: z.enum(LEAD_GOALS),
  primaryGoalLabel: optionalText(120),
  message: optionalText(4000),
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

  const submission = {
    ...parsed.data,
    // Server-stamped so the record has a time the client cannot skew.
    receivedAt: new Date().toISOString(),
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));

    if (!upstream.ok) {
      console.error(`[lead] Upstream responded ${upstream.status}.`);
      const body: LeadResponse = { ok: false, error: "upstream_failed" };
      return res.status(502).json(body);
    }

    const body: LeadResponse = { ok: true };
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
