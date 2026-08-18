import {
  LOCALE_COOKIE_KEY,
  LOCALE_COOKIE_MAX_AGE,
  isLocale,
  localePath,
  normalizePathname,
  readCookieValue,
  type Locale,
} from "./geo";

/**
 * Locale primitives live in `./geo` because the Vercel Edge Middleware imports them
 * and cannot touch `import.meta.env` or the DOM. They are re-exported here so the
 * rest of the app keeps importing from `@/i18n/locale` as before.
 */
export {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_KEY,
  LOCALE_COOKIE_MAX_AGE,
  LOCALES,
  getLocaleFromPathname,
  isLocale,
  localePath,
  stripLocaleFromPathname,
} from "./geo";
export type { Locale } from "./geo";

/** Only written after the visitor explicitly changes the language. */
export const LOCALE_STORAGE_KEY = "digitalface.locale";

export const SITE_URL = (
  import.meta.env?.VITE_SITE_URL || "https://digitalfacemarketing.com"
).replace(/\/$/, "");

export const localeMeta: Record<
  Locale,
  { htmlLang: string; code: string; name: string; switchLabel: string }
> = {
  en: {
    htmlLang: "en",
    code: "EN",
    name: "English",
    switchLabel: "View this page in English",
  },
  es: {
    htmlLang: "es",
    code: "ES",
    name: "Español",
    switchLabel: "Ver esta página en español",
  },
};

/** Locale-scoped translations share the same URL slugs, so only the prefix changes. */
export const LOCALE_PREFIX: Record<Locale, string> = {
  en: "",
  es: "/es",
};

/**
 * Keeps the visitor on the equivalent page when switching languages,
 * preserving query string and hash.
 */
export function swapLocaleInPath(
  locale: Locale,
  pathname: string,
  search = "",
  hash = "",
): string {
  return `${localePath(locale, pathname)}${search}${hash}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${normalizePathname(path)}`;
}

/**
 * The middleware runs before any JavaScript exists, so it can only read cookies.
 * Every write therefore lands in both stores and `readStoredLocale` reads them back
 * in the same priority order, so the two can never drift apart.
 */
export function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const value = readCookieValue(document.cookie, LOCALE_COOKIE_KEY);
  return isLocale(value) ? value : null;
}

export function writeLocaleCookie(locale: Locale): void {
  if (typeof document === "undefined") return;
  const secure =
    typeof location !== "undefined" && location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function readStoredLocale(): Locale | null {
  const fromCookie = readLocaleCookie();
  if (fromCookie) return fromCookie;

  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  if (typeof window === "undefined") return;

  writeLocaleCookie(locale);

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* Storage can be unavailable in private browsing. Language still works. */
  }
}
