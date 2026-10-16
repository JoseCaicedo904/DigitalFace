import site from "@shared/site.json";
import { getLocaleFromPathname, stripLocaleFromPathname } from "@/i18n/geo";
import { routeSupportsLocale } from "@/i18n/locale";

/** Public pixel ID selected by the owner; never an access token. */
export const META_PIXEL_ID = "2450656048502915";

type PixelQueue = ((...args: unknown[]) => void) & {
  queue: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  push: PixelQueue;
  loaded: boolean;
  version: string;
  disablePushState: boolean;
};

declare global {
  interface Window {
    fbq?: PixelQueue;
    _fbq?: PixelQueue;
  }
}

let ownedQueue: PixelQueue | undefined;
let ready = false;
let requestedPage: string | null = null;
let lastPage: string | null = null;
let pendingSchedule = false;
const ALLOWED_QUERY_KEYS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "lang",
  "from",
]);

function knownPage(pathname: string): string | null {
  const base = stripLocaleFromPathname(pathname);
  const locale = getLocaleFromPathname(pathname);
  if (
    !site.routes.some((route) => route.path === base) ||
    !routeSupportsLocale(pathname, locale)
  )
    return null;
  return locale === "es" ? (base === "/" ? "/es" : `/es${base}`) : base;
}

/** The SDK reads URLs itself. Skip unsafe contexts rather than pass a fake URL override. */
function safeUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (!/^https?:$/.test(url.protocol) || url.username || url.password)
      return false;
    if (url.origin === site.origin && !knownPage(url.pathname)) return false;
    if (!/^\/[a-z0-9/_-]*$/i.test(url.pathname)) return false;
    if (url.hash && !/^#[a-z][a-z0-9_-]{0,80}$/i.test(url.hash)) return false;
    return [...url.searchParams].every(
      ([key, val]) =>
        ALLOWED_QUERY_KEYS.has(key) &&
        val.length <= 2048 &&
        !/@|%40/i.test(val),
    );
  } catch {
    return false;
  }
}

function eligible(): boolean {
  if (typeof window === "undefined") return false;
  const navigator = window.navigator as Navigator & {
    globalPrivacyControl?: boolean;
  };
  return (
    import.meta.env.PROD &&
    import.meta.env.VITE_DEPLOY_ENV === "production" &&
    window.location.origin === site.origin &&
    /^\d{10,20}$/.test(META_PIXEL_ID) &&
    navigator.globalPrivacyControl !== true &&
    navigator.doNotTrack !== "1" &&
    safeUrl(window.location.href) &&
    (!document.referrer || safeUrl(document.referrer))
  );
}

function flush() {
  if (!ready || !eligible() || window.fbq !== ownedQueue) return;
  const page = knownPage(window.location.pathname);
  if (!page || page !== requestedPage) return;
  if (lastPage !== page) {
    lastPage = page;
    ownedQueue!("trackSingle", META_PIXEL_ID, "PageView");
  }
  if (pendingSchedule && page === "/booking-confirmed") {
    pendingSchedule = false;
    ownedQueue!("trackSingle", META_PIXEL_ID, "Schedule");
  }
}

function initialize(): boolean {
  if (!eligible()) return false;
  if (ownedQueue) return window.fbq === ownedQueue;
  // An independently installed pixel requires an intentional migration.
  if (
    window.fbq ||
    window._fbq ||
    document.querySelector(
      'script[src*="connect.facebook.net/"], script#df-meta-pixel',
    )
  )
    return false;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as PixelQueue;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  // Explicit SPA events below are the only source of PageView events.
  fbq.disablePushState = true;
  window.fbq = window._fbq = ownedQueue = fbq;
  fbq("set", "autoConfig", false, META_PIXEL_ID);
  fbq("init", META_PIXEL_ID);

  const script = document.createElement("script");
  script.id = "df-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.onload = () => {
    ready = true;
    try {
      flush();
    } catch {
      /* A blocked or broken SDK must not break the site. */
    }
  };
  // Wait for the SDK before sending events: queued hits must not pick up a
  // later URL containing contact details while the script downloads.
  document.head.appendChild(script);
  return true;
}

export function trackMetaPageView(pathname: string) {
  try {
    const page = knownPage(pathname);
    if (page !== requestedPage) lastPage = null;
    requestedPage = page;
    if (!requestedPage) {
      lastPage = null;
      return;
    }
    if (initialize()) flush();
  } catch {
    /* Measurement must never interrupt navigation. */
  }
}

/** Called only after the existing booking state changes from pending to fired. */
export function trackMetaAppointmentBooked() {
  try {
    if (
      typeof window === "undefined" ||
      knownPage(window.location.pathname) !== "/booking-confirmed"
    )
      return;
    requestedPage = "/booking-confirmed";
    pendingSchedule = true;
    if (initialize()) flush();
  } catch {
    /* Booking success must not depend on a third-party script. */
  }
}
