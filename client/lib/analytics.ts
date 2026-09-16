import site from "@shared/site.json";
import { getLocaleFromPathname, stripLocaleFromPathname } from "@/i18n/geo";
import { routeSupportsLocale } from "@/i18n/locale";
import { readAnalyticsAttributionQuery } from "@/lib/attribution";

type EventName =
  | "generate_lead"
  | "consultation_click"
  | "contact_click"
  | "service_request_add"
  | "appointment_booked";
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
const BOOKING_PATH = "/book";
const APPOINTMENT_BOOKED_PATH = "/booking-confirmed";
const APPOINTMENT_BOOKING_STATE_KEY =
  "digitalface.analytics.appointment_booked.state";
const APPOINTMENT_BOOKING_PENDING = "pending";
const APPOINTMENT_BOOKING_FIRED = "fired";
const ANALYTICS_CAMPAIGN_PARAMETER_MAP = [
  ["utm_id", "campaign_id"],
  ["utm_source", "campaign_source"],
  ["utm_medium", "campaign_medium"],
  ["utm_campaign", "campaign_name"],
  ["utm_term", "campaign_term"],
  ["utm_content", "campaign_content"],
] as const;

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
  const locale = getLocaleFromPathname(pathname);
  if (
    !site.routes.some((route) => route.path === base) ||
    !routeSupportsLocale(pathname, locale)
  )
    return null;
  return {
    page_path: locale === "es" ? (base === "/" ? "/es" : `/es${base}`) : base,
    locale,
  };
}

function analyticsPageLocation(pagePath: string) {
  return site.origin + pagePath + readAnalyticsAttributionQuery();
}

function analyticsCampaignParameters() {
  const attribution = new URLSearchParams(readAnalyticsAttributionQuery());
  const campaign: Record<string, string> = {};

  for (const [
    queryParameter,
    campaignParameter,
  ] of ANALYTICS_CAMPAIGN_PARAMETER_MAP) {
    const value = attribution.get(queryParameter);
    if (value) campaign[campaignParameter] = value;
  }

  return campaign;
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
    // Explicit fields make campaign attribution available to the first hit;
    // relying on an overridden page_location alone did not populate them.
    ...analyticsCampaignParameters(),
    // Exposes only the explicitly approved ad parameters, never arbitrary URL data.
    page_location: analyticsPageLocation(
      analyticsPage(window.location.pathname)?.page_path || "/",
    ),
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
  const location = analyticsPageLocation(page.page_path);
  const campaign = analyticsCampaignParameters();
  const referrer = lastPage
    ? site.origin + lastPage
    : safeReferrer(document.referrer);
  // Also updates the context used by engagement events between navigations.
  window.gtag!("set", {
    ...campaign,
    page_location: location,
    page_title: title,
    page_referrer: referrer,
  });
  window.gtag!("event", "page_view", {
    ...page,
    ...campaign,
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

/** Arms one conversion when this tab starts a new booking flow from /book. */
export function startAppointmentBookingAttempt() {
  if (typeof window === "undefined") return;
  if (stripLocaleFromPathname(window.location.pathname) !== BOOKING_PATH)
    return;

  try {
    window.sessionStorage.setItem(
      APPOINTMENT_BOOKING_STATE_KEY,
      APPOINTMENT_BOOKING_PENDING,
    );
  } catch {
    /* The booking page must still render if session storage is unavailable. */
  }
}

/**
 * Records the confirmed-booking conversion once per booking flow.
 * The fixed route check and parameter-free event keep booking and contact data
 * out of GA4; only the analytics layer's sanitized page context is attached.
 */
export function trackAppointmentBookedOnce() {
  if (typeof window === "undefined") return;
  if (
    analyticsPage(window.location.pathname)?.page_path !==
    APPOINTMENT_BOOKED_PATH
  )
    return;

  try {
    if (
      window.sessionStorage.getItem(APPOINTMENT_BOOKING_STATE_KEY) !==
      APPOINTMENT_BOOKING_PENDING
    )
      return;
    window.sessionStorage.setItem(
      APPOINTMENT_BOOKING_STATE_KEY,
      APPOINTMENT_BOOKING_FIRED,
    );
  } catch {
    // Without session storage, do not risk double-counting a confirmation reload.
    return;
  }

  trackEvent("appointment_booked");
}
