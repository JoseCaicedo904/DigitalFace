import site from "@shared/site.json";
import { getLocaleFromPathname, stripLocaleFromPathname } from "@/i18n/geo";

type EventName =
  | "generate_lead"
  | "consultation_click"
  | "contact_click"
  | "service_request_add";
type Parameters = {
  page_source?: string;
  lead_type?: "contact" | "service_request";
  service_id?: string;
  service_count?: number;
  contact_method?: "email" | "phone" | "whatsapp";
};
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
let initialized = false;
let lastPage: string | null = null;

export function canTrack(
  measurementId: string | undefined,
  production: boolean,
  deployEnvironment: string | undefined,
  hostname: string,
) {
  return (
    production &&
    deployEnvironment === "production" &&
    hostname === new URL(site.origin).hostname &&
    /^G-[A-Z0-9]+$/.test(measurementId || "")
  );
}

/** No unknown paths, URL queries, fragments, email addresses or form text in GA4. */
export function analyticsPage(pathname: string) {
  const base = stripLocaleFromPathname(pathname);
  if (!site.routes.some((route) => route.path === base)) return null;
  const locale = getLocaleFromPathname(pathname);
  return {
    page_path: locale === "es" ? (base === "/" ? "/es" : `/es${base}`) : base,
    locale,
  };
}

function initialize() {
  if (typeof window === "undefined") return false;
  const environment = import.meta.env;
  const id = environment.VITE_GA4_MEASUREMENT_ID;
  if (
    !canTrack(
      id,
      environment.PROD,
      environment.VITE_DEPLOY_ENV,
      window.location.hostname,
    )
  )
    return false;
  if (initialized) return true;
  // A separately installed tag needs an intentional migration, not another loader.
  if (
    window.gtag ||
    document.querySelector(
      'script[src*="googletagmanager.com/gtag/js"], script[src*="googletagmanager.com/gtm.js"]',
    )
  )
    return false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Prevent automatic events from reading arbitrary campaign/contact URL data.
    page_location:
      site.origin + (analyticsPage(window.location.pathname)?.page_path || "/"),
    page_referrer: safeReferrer(document.referrer),
  });
  const script = document.createElement("script");
  script.id = "df-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  initialized = true;
  return true;
}

function safeReferrer(value: string) {
  try {
    const url = new URL(value);
    if (!/^https?:$/.test(url.protocol)) return "";
    return url.origin === site.origin
      ? site.origin + (analyticsPage(url.pathname)?.page_path || "/")
      : url.origin + "/";
  } catch {
    return "";
  }
}

/** Called after a resolved route has applied its localized title. */
function recordPageView(pathname: string, title: string) {
  const page = analyticsPage(pathname);
  if (!page) {
    lastPage = null;
    return;
  }
  if (!initialize() || lastPage === page.page_path) return;
  const location = site.origin + page.page_path;
  const referrer = lastPage
    ? site.origin + lastPage
    : safeReferrer(document.referrer);
  // Also updates the context used by engagement events between navigations.
  window.gtag!("set", {
    page_location: location,
    page_title: title,
    page_referrer: referrer,
  });
  window.gtag!("event", "page_view", {
    ...page,
    page_title: title,
    page_location: location,
    page_referrer: referrer,
  });
  lastPage = page.page_path;
}

function recordEvent(name: EventName, parameters: Parameters = {}) {
  if (typeof window === "undefined") return;
  const page = analyticsPage(window.location.pathname);
  if (!page || !initialize()) return;
  // Explicit whitelist so accidentally passing a lead payload never forwards PII.
  const safe: Record<string, string | number> = {
    ...page,
    page_location: site.origin + page.page_path,
  };
  for (const key of [
    "page_source",
    "lead_type",
    "service_id",
    "contact_method",
  ] as const) {
    const value = parameters[key];
    if (typeof value === "string" && /^[a-z][a-z0-9_-]{0,60}$/.test(value))
      safe[key] = value;
  }
  if (
    Number.isInteger(parameters.service_count) &&
    parameters.service_count >= 0 &&
    parameters.service_count <= 100
  )
    safe.service_count = parameters.service_count;
  window.gtag!("event", name, safe);
}

export function trackPageView(pathname: string, title: string) {
  try {
    recordPageView(pathname, title);
  } catch {
    /* Analytics must never break navigation. */
  }
}
export function trackEvent(name: EventName, parameters: Parameters = {}) {
  try {
    recordEvent(name, parameters);
  } catch {
    /* Lead delivery always wins over measurement. */
  }
}
