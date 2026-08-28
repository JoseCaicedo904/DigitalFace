import type { LeadAttribution } from "@shared/lead";

/**
 * Lightweight campaign attribution. No analytics framework: this reads the UTM
 * parameters and referrer once per session, keeps them in sessionStorage, and
 * hands them to the lead form later.
 *
 * The persistence matters — a visitor usually lands on an ad URL and then
 * navigates internally before reaching a form, and by then the UTM parameters
 * are gone from the address bar. First touch wins, so a later internal
 * navigation cannot overwrite the campaign that actually paid for the visit.
 */

const STORAGE_KEY = "digitalface.attribution";

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

/**
 * Call once on app start. Records the landing context only if nothing was
 * captured earlier in the session.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;

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
