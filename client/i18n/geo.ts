/**
 * Locale primitives and the country-detection decision table.
 *
 * This module is deliberately dependency-free and side-effect-free: it is imported
 * both by the Vercel Edge Middleware (`middleware.ts`, which runs in a Web-standard
 * runtime with no DOM, no Node APIs and no `import.meta.env`) and by the browser
 * bundle. Do not import anything into this file.
 *
 * `locale.ts` re-exports the path helpers below so the rest of the app keeps a
 * single import site.
 */

export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Readable by the edge, unlike localStorage. Written whenever a locale is settled. */
export const LOCALE_COOKIE_KEY = "df_locale";

/** One year, in seconds. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * ISO 3166-1 alpha-2 codes served the Spanish tree: Spanish-speaking Latin America
 * plus Spain (and Equatorial Guinea, where Spanish is an official language).
 *
 * Deliberately absent, and therefore served English: BR (Portuguese), PT, HT, JM,
 * BZ, GY, SR, TT. Brazil is the one people expect to see here — 215M Portuguese
 * speakers are better served English than Spanish in a business context.
 */
export const SPANISH_COUNTRIES: ReadonlySet<string> = new Set([
  "AR", // Argentina
  "BO", // Bolivia
  "CL", // Chile
  "CO", // Colombia
  "CR", // Costa Rica
  "CU", // Cuba
  "DO", // Dominican Republic
  "EC", // Ecuador
  "ES", // Spain
  "GQ", // Equatorial Guinea
  "GT", // Guatemala
  "HN", // Honduras
  "MX", // Mexico
  "NI", // Nicaragua
  "PA", // Panama
  "PE", // Peru
  "PR", // Puerto Rico
  "PY", // Paraguay
  "SV", // El Salvador
  "UY", // Uruguay
  "VE", // Venezuela
]);

/**
 * Crawlers and link-preview fetchers are never redirected.
 *
 * Googlebot crawls almost entirely from US IP addresses. Redirecting it by country
 * would send it to English every time and the Spanish tree could go unindexed, so
 * every entry here is a bot that must see exactly the URL it asked for.
 */
const BOT_SIGNATURES = [
  "googlebot",
  "google-inspectiontool",
  "storebot-google",
  "bingbot",
  "duckduckbot",
  "slurp",
  "baiduspider",
  "yandex",
  "applebot",
  "facebookexternalhit",
  "facebot",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "slackbot",
  "telegrambot",
  "discordbot",
  "pinterest",
  "redditbot",
  "embedly",
  "quora link preview",
  "ia_archiver",
  "ahrefsbot",
  "semrushbot",
  "petalbot",
  "mj12bot",
  "dotbot",
  "screaming frog",
  "gptbot",
  "oai-searchbot",
  "chatgpt-user",
  "claudebot",
  "claude-web",
  "anthropic-ai",
  "perplexitybot",
  "bytespider",
  "amazonbot",
  "lighthouse",
  "headlesschrome",
  "vercel-screenshot",
  "vercelbot",
];

export const BOT_PATTERN = new RegExp(BOT_SIGNATURES.join("|"), "i");

export function isBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return BOT_PATTERN.test(userAgent);
}

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** "" -> "/", "pricing" -> "/pricing", "/pricing/" -> "/pricing" */
export function normalizePathname(pathname: string): string {
  if (!pathname) return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withSlash.length > 1 && withSlash.endsWith("/")) {
    return withSlash.slice(0, -1);
  }
  return withSlash;
}

/** Reads the active locale from the URL. The URL is always the source of truth. */
export function getLocaleFromPathname(pathname: string): Locale {
  const [, first] = normalizePathname(pathname).split("/");
  return first === "es" ? "es" : DEFAULT_LOCALE;
}

/** "/es/pricing" -> "/pricing", "/es" -> "/", "/pricing" -> "/pricing" */
export function stripLocaleFromPathname(pathname: string): string {
  const normalized = normalizePathname(pathname);
  if (normalized === "/es") return "/";
  if (normalized.startsWith("/es/")) {
    return normalizePathname(normalized.slice(3));
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
 * True only when the *highest-weighted* Accept-Language entry is Spanish.
 *
 * `en-US,en;q=0.9,es;q=0.8` is an English speaker who also reads Spanish and must
 * return false — naive `includes("es")` checks get this wrong and mislabel a large
 * share of US traffic.
 */
export function prefersSpanishLanguage(
  acceptLanguage: string | null | undefined,
): boolean {
  if (!acceptLanguage) return false;

  let best: { tag: string; q: number } | null = null;

  for (const part of acceptLanguage.split(",")) {
    const [rawTag, ...params] = part.trim().split(";");
    const tag = rawTag.trim().toLowerCase();
    if (!tag || tag === "*") continue;

    let q = 1;
    for (const param of params) {
      const [key, value] = param.split("=");
      if (key?.trim().toLowerCase() === "q") {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) q = parsed;
      }
    }

    if (q <= 0) continue;
    // Strictly greater, so an equal-weight tie keeps the earlier (preferred) entry.
    if (!best || q > best.q) best = { tag, q };
  }

  if (!best) return false;
  return best.tag === "es" || best.tag.startsWith("es-");
}

/** Pulls a single cookie value out of a raw `Cookie:` header. */
export function readCookieValue(
  cookieHeader: string | null | undefined,
  name: string,
): string | null {
  if (!cookieHeader) return null;

  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;
    if (part.slice(0, separator).trim() !== name) continue;

    const value = part.slice(separator + 1).trim();
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }

  return null;
}

export type LocaleDecisionReason =
  | "bot"
  | "query-override"
  | "already-localized"
  | "cookie"
  | "geo-country"
  | "geo-language"
  | "browser-language"
  | "default";

export type LocaleDecision = {
  locale: Locale;
  shouldRedirect: boolean;
  reason: LocaleDecisionReason;
};

type CommonDecisionInput = {
  pathname: string;
  acceptLanguage?: string | null;
  cookieLocale?: string | null;
  queryLang?: string | null;
  userAgent?: string | null;
};

export type EdgeDecisionInput = CommonDecisionInput & {
  /** Value of the `x-vercel-ip-country` header. "XX"/empty means unknown. */
  country?: string | null;
};

/**
 * The single source of truth for the redirect decision at the edge.
 * Rules are evaluated in order; the first match wins.
 */
export function resolveLocale(input: EdgeDecisionInput): LocaleDecision {
  const pathname = normalizePathname(input.pathname || "/");
  const current = getLocaleFromPathname(pathname);

  const settle = (
    locale: Locale,
    reason: LocaleDecisionReason,
  ): LocaleDecision => ({
    locale,
    shouldRedirect: locale !== current,
    reason,
  });

  // 1. Crawlers see exactly what they asked for, always.
  if (isBot(input.userAgent)) {
    return { locale: current, shouldRedirect: false, reason: "bot" };
  }

  // 2. ?lang= is the explicit override, for testing and for forced share links.
  const queryLang = input.queryLang?.trim().toLowerCase();
  if (isLocale(queryLang)) {
    return settle(queryLang, "query-override");
  }

  // 3. An explicit /es URL is the strongest signal a visitor can send. It outranks
  //    the cookie so that a shared Spanish link is never bounced back to English.
  if (current === "es") {
    return { locale: "es", shouldRedirect: false, reason: "already-localized" };
  }

  // 4. A stored choice beats any machine guess.
  const cookieLocale = input.cookieLocale?.trim().toLowerCase();
  if (isLocale(cookieLocale)) {
    return settle(cookieLocale, "cookie");
  }

  const country = (input.country || "").trim().toUpperCase();

  // 5. Spanish-speaking country by IP.
  if (SPANISH_COUNTRIES.has(country)) {
    return settle("es", "geo-country");
  }

  // 6. US/Canada with a Spanish-first browser: the US Hispanic market.
  if (
    (country === "US" || country === "CA") &&
    prefersSpanishLanguage(input.acceptLanguage)
  ) {
    return settle("es", "geo-language");
  }

  return { locale: DEFAULT_LOCALE, shouldRedirect: false, reason: "default" };
}

/**
 * Browser-side fallback for when no edge geo header exists — `npm run dev`, or the
 * site being served from somewhere other than Vercel. Language only; there is no
 * country signal in the browser and no third-party geo API is ever called.
 */
export function resolveLocaleFromBrowser(
  input: CommonDecisionInput,
): LocaleDecision {
  const pathname = normalizePathname(input.pathname || "/");
  const current = getLocaleFromPathname(pathname);

  const settle = (
    locale: Locale,
    reason: LocaleDecisionReason,
  ): LocaleDecision => ({
    locale,
    shouldRedirect: locale !== current,
    reason,
  });

  if (isBot(input.userAgent)) {
    return { locale: current, shouldRedirect: false, reason: "bot" };
  }

  const queryLang = input.queryLang?.trim().toLowerCase();
  if (isLocale(queryLang)) {
    return settle(queryLang, "query-override");
  }

  if (current === "es") {
    return { locale: "es", shouldRedirect: false, reason: "already-localized" };
  }

  const cookieLocale = input.cookieLocale?.trim().toLowerCase();
  if (isLocale(cookieLocale)) {
    return settle(cookieLocale, "cookie");
  }

  if (prefersSpanishLanguage(input.acceptLanguage)) {
    return settle("es", "browser-language");
  }

  return { locale: DEFAULT_LOCALE, shouldRedirect: false, reason: "default" };
}
