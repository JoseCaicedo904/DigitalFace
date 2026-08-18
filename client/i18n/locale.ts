export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

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

function normalize(pathname: string): string {
  if (!pathname) return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withSlash.length > 1 && withSlash.endsWith("/")) {
    return withSlash.slice(0, -1);
  }
  return withSlash;
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Reads the active locale from the URL. The URL is always the source of truth. */
export function getLocaleFromPathname(pathname: string): Locale {
  const [, first] = normalize(pathname).split("/");
  return first === "es" ? "es" : DEFAULT_LOCALE;
}

/** "/es/pricing" -> "/pricing", "/es" -> "/", "/pricing" -> "/pricing" */
export function stripLocaleFromPathname(pathname: string): string {
  const normalized = normalize(pathname);
  if (normalized === "/es") return "/";
  if (normalized.startsWith("/es/")) {
    return normalize(normalized.slice(3));
  }
  return normalized;
}

/** Builds a locale-aware href from a canonical (English) path. */
export function localePath(locale: Locale, path: string): string {
  const base = stripLocaleFromPathname(path || "/");
  if (locale === DEFAULT_LOCALE) return base;
  return base === "/" ? "/es" : `/es${base}`;
}

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
  return `${SITE_URL}${normalize(path)}`;
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored && isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* Storage can be unavailable in private browsing. Language still works. */
  }
}
