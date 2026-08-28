/**
 * Lead intake contract shared by the browser form and the Express proxy.
 *
 * The website's only job is to hand n8n one clean, business-readable payload.
 * n8n owns everything downstream: validation beyond this, enrichment, the
 * private offer code, the email, and the mapping into the CRM. Deliberately no
 * CRM field ids, no CRM vocabulary and no credentials appear anywhere here or
 * in the client.
 */

/** Business outcomes, not products. n8n maps these to whatever the CRM needs. */
export const LEAD_GOALS = [
  "more_leads",
  "convert_leads",
  "crm_follow_up",
  "ai_communication",
  "website",
  "full_growth_system",
  "not_sure",
] as const;

export type LeadGoal = (typeof LEAD_GOALS)[number];

/** Identifies the website itself, so n8n can separate it from other intakes. */
export const LEAD_FORM_SOURCE = "digitalface_website_contact";

/**
 * Which placement produced the lead. Kept as a small closed set so reporting
 * stays clean; every placement passes one of these explicitly.
 */
export const LEAD_PAGE_SOURCES = [
  "homepage",
  "contact",
  "landing_dental_practices",
  "landing_aesthetic_medicine",
  "landing_med_spas",
] as const;

export type LeadPageSource = (typeof LEAD_PAGE_SOURCES)[number];

export interface LeadAttribution {
  currentPageUrl: string;
  pageRoute: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
}

export interface LeadSubmission extends LeadAttribution {
  name: string;
  business: string;
  email: string;
  phone: string;
  /** ISO 3166-1 alpha-2, plus the display name so n8n stays readable. */
  country: string;
  countryName: string;
  website: string;
  primaryGoal: LeadGoal;
  primaryGoalLabel: string;
  message: string;
  locale: string;
  formSource: string;
  pageSource: LeadPageSource;
  submissionTimestamp: string;
}

export interface LeadResponse {
  ok: boolean;
  /**
   * Machine-readable reason, never a human sentence and never anything about
   * the upstream endpoint — the client owns the wording the visitor sees.
   */
  error?: "invalid" | "not_configured" | "upstream_failed";
  fieldErrors?: Record<string, string>;
}

/**
 * Permissive on purpose. Real international numbers arrive with +, spaces,
 * dots, dashes and parentheses, and rejecting them costs real leads. We only
 * insist on enough digits to be a phone number at all.
 */
export function isPlausiblePhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return (
    digits.length >= 7 && digits.length <= 18 && /^[\d\s+().-]+$/.test(value)
  );
}

/** Deliberately simple: the shape check that catches typos, not RFC 5322. */
export function isPlausibleEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

/**
 * Accepts what people actually type ("digitalface.com") as readily as a full
 * URL. Returns the normalized value, or null when it cannot be a website.
 */
export function normalizeWebsite(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(withScheme);
    // A bare word is a valid URL to the parser but is not a website.
    if (!/^[^\s.]+(\.[^\s.]+)+$/.test(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}
