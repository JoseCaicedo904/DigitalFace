import type { LeadAttribution } from "@shared/lead";

/**
 * Lightweight campaign attribution. No analytics framework: this reads the UTM
 * parameters and referrer once per session, keeps them in sessionStorage, and
 * hands them to the lead form later. A separate sanitized query keeps only the
 * approved ad parameters needed by GA4 page locations.
 *
 * The persistence matters — a visitor usually lands on an ad URL and then
 * navigates internally before reaching a form, and by then the UTM parameters
 * are gone from the address bar. First touch wins, so a later internal
 * navigation cannot overwrite the campaign that actually paid for the visit.
 */

const STORAGE_KEY = "digitalface.attribution";
const ANALYTICS_QUERY_STORAGE_KEY = "digitalface.analytics.attribution_query";

const APPROVED_ANALYTICS_QUERY_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

type StoredAttribution = {
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
};

const EMPTY: StoredAttribution = {
  referrer: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
};

function readStore(): StoredAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredAttribution>;
    return { ...EMPTY, ...parsed };
  } catch {
    // Private browsing and blocked storage must not break the form.
    return null;
  }
}

function writeStore(value: StoredAttribution) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* Attribution is a nice-to-have; never let it throw into the form. */
  }
}

function fromCurrentUrl(): StoredAttribution {
  const params = new URLSearchParams(window.location.search);
  const get = (key: string) => params.get(key)?.trim().slice(0, 200) ?? "";

  return {
    // An internal referrer tells us nothing about where the visitor came from.
    referrer:
      document.referrer && !document.referrer.startsWith(window.location.origin)
        ? document.referrer.slice(0, 500)
        : "",
    utmSource: get("utm_source"),
    utmMedium: get("utm_medium"),
    utmCampaign: get("utm_campaign"),
    utmContent: get("utm_content"),
    utmTerm: get("utm_term"),
  };
}

function hasSignal(value: StoredAttribution): boolean {
  return Object.values(value).some(Boolean);
}

/** Keeps only campaign parameters that are approved for GA4 page locations. */
export function sanitizeAnalyticsAttributionQuery(search: string): string {
  const input = new URLSearchParams(search);
  const safe = new URLSearchParams();

  for (const key of APPROVED_ANALYTICS_QUERY_PARAMETERS) {
    for (const value of input.getAll(key)) safe.append(key, value);
  }

  const query = safe.toString();
  return query ? `?${query}` : "";
}

function captureAnalyticsAttributionQuery() {
  const query = sanitizeAnalyticsAttributionQuery(window.location.search);
  if (!query) return;

  try {
    if (!window.sessionStorage.getItem(ANALYTICS_QUERY_STORAGE_KEY)) {
      window.sessionStorage.setItem(ANALYTICS_QUERY_STORAGE_KEY, query);
    }
  } catch {
    /* The current URL still supplies attribution when storage is unavailable. */
  }
}

/** Returns first-touch ad parameters for sanitized GA4 page locations. */
export function readAnalyticsAttributionQuery(): string {
  if (typeof window === "undefined") return "";

  try {
    const stored = window.sessionStorage.getItem(ANALYTICS_QUERY_STORAGE_KEY);
    if (stored) return sanitizeAnalyticsAttributionQuery(stored);
  } catch {
    /* Fall through to the current URL when storage is unavailable. */
  }

  return sanitizeAnalyticsAttributionQuery(window.location.search);
}

/**
 * Call once on app start. Records the landing context only if nothing was
 * captured earlier in the session.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;

  captureAnalyticsAttributionQuery();

  const stored = readStore();
  if (stored && hasSignal(stored)) return;

  const current = fromCurrentUrl();
  if (hasSignal(current)) writeStore(current);
}

/** Attribution plus the page the visitor actually submitted from. */
export function readAttribution(): LeadAttribution {
  if (typeof window === "undefined") {
    return { ...EMPTY, currentPageUrl: "", pageRoute: "" };
  }

  const stored = readStore();
  const current = fromCurrentUrl();
  const resolved = stored && hasSignal(stored) ? stored : current;

  return {
    ...resolved,
    currentPageUrl: window.location.href,
    pageRoute: window.location.pathname,
  };
}
