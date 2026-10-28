import type { RequestHandler } from "express";
import { createHash } from "node:crypto";
import { z } from "zod";
import {
  EVENT_CAMPAIGN,
  EVENT_CONSENT_VERSION,
  EVENT_SOURCE,
  eventRegistrationSchema,
} from "../../shared/eventRegistration.js";

// A process-local burst guard. Durable identity uniqueness belongs to the receiver.
const bursts = new Map<string, { count: number; until: number }>();
const receiptSchema = z.object({
  ok: z.literal(true),
  persisted: z.literal(true),
  registrationId: z.string().regex(/^[a-zA-Z0-9_-]{8,100}$/),
  duplicate: z.boolean(),
});
const digest = (value: string) =>
  createHash("sha256").update(`${EVENT_CAMPAIGN}:${value}`).digest("hex");

export const handleEventRegistration: RequestHandler = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const origin = req.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== req.get("host"))
        return res.status(403).json({ ok: false, error: "forbidden" });
    } catch {
      return res.status(403).json({ ok: false, error: "forbidden" });
    }
  }
  const now = Date.now();
  for (const [key, entry] of bursts) if (entry.until <= now) bursts.delete(key);
  const ipKey = digest(req.ip || req.socket?.remoteAddress || "unknown");
  const burst = bursts.get(ipKey) || { count: 0, until: now + 60_000 };
  burst.count++;
  if (!bursts.has(ipKey) && bursts.size >= 10_000)
    return res.status(429).json({ ok: false, error: "rate_limited" });
  bursts.set(ipKey, burst);
  if (burst.count > 20) {
    res.setHeader("Retry-After", "60");
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }
  const parsed = eventRegistrationSchema.safeParse(req.body);
  if (!parsed.success) {
    const fieldErrors = Object.fromEntries(
      parsed.error.issues.map((issue) => [issue.path[0], issue.message]),
    );
    return res.status(400).json({ ok: false, error: "invalid", fieldErrors });
  }
  // Deliberately separate from N8N_LEAD_WEBHOOK_URL: ordinary inquiries may trigger
  // unrelated offer/marketing workflows and cannot attest to event registration.
  const endpoint = process.env.EVENT_REGISTRATION_WEBHOOK_URL;
  try {
    if (!endpoint || new URL(endpoint).protocol !== "https:")
      return res.status(503).json({ ok: false, error: "not_configured" });
  } catch {
    return res.status(503).json({ ok: false, error: "not_configured" });
  }
  const { website: _honeypot, ...participant } = parsed.data;
  const company = participant.business
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const submission = {
    ...participant,
    instagram: participant.instagram.replace(/^@/, ""),
    source: EVENT_SOURCE,
    campaign: EVENT_CAMPAIGN,
    locale: "es",
    receivedAt: new Date().toISOString(),
    consentVersion: EVENT_CONSENT_VERSION,
    privacyPolicy: "https://digitalface.app/es/privacy",
    personKey: digest(participant.phone),
    businessKey: digest(company),
    // The receiver must uniquely reserve either identity before acknowledging.
    resultStatus: "pending_staff_validation",
  };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  try {
    const upstream = await fetch(endpoint!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": submission.personKey,
      },
      body: JSON.stringify(submission),
      signal: controller.signal,
      redirect: "error",
    });
    if (!upstream.ok) throw new Error("upstream_failed");
    const receipt = receiptSchema.safeParse(await upstream.json());
    if (!receipt.success) throw new Error("invalid_receipt");
    return res
      .status(200)
      .json({ ok: true, duplicate: receipt.data.duplicate });
  } catch {
    // No endpoint, participant fields, IP, or provider error body in logs.
    return res.status(502).json({ ok: false, error: "upstream_failed" });
  } finally {
    clearTimeout(timer);
  }
};
