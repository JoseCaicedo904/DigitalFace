import {
  LOCALE_COOKIE_KEY,
  LOCALE_COOKIE_MAX_AGE,
  localePath,
  readCookieValue,
  resolveLocale,
} from "./client/i18n/geo";

/**
 * Vercel Edge Middleware — decides EN vs ES before a single byte of HTML is sent,
 * so the visitor never sees a flash of the wrong language.
 *
 * The decision table itself lives in `client/i18n/geo.ts` (`resolveLocale`) and is
 * unit-tested there. This file only marshals headers in and builds the Response.
 *
 * Runs on Vercel only. `npm run dev` and any non-Vercel host fall back to the
 * browser-side detection in `client/i18n/LocaleProvider.tsx`.
 */
export const config = {
  matcher: [
    "/((?!api/|assets/|_vercel/|robots\\.txt|sitemap\\.xml|favicon\\.ico|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};

/**
 * Second line of defence: if the matcher above is ever loosened or mis-parsed, these
 * paths must still pass through untouched. Redirecting an asset or the sitemap would
 * break the build output and the SEO surface respectively.
 */
const SKIPPED_PREFIXES = ["/api/", "/assets/", "/_vercel/"];
const SKIPPED_PATHS = new Set(["/robots.txt", "/sitemap.xml", "/favicon.ico"]);
const HAS_FILE_EXTENSION = /\.[a-zA-Z0-9]+$/;

function shouldSkip(pathname: string): boolean {
  if (SKIPPED_PATHS.has(pathname)) return true;
  if (HAS_FILE_EXTENSION.test(pathname)) return true;
  return SKIPPED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);

  if (shouldSkip(url.pathname)) return undefined;

  const country = request.headers.get("x-vercel-ip-country");
  const cookieLocale = readCookieValue(
    request.headers.get("cookie"),
    LOCALE_COOKIE_KEY,
  );

  const decision = resolveLocale({
    pathname: url.pathname,
    country,
    acceptLanguage: request.headers.get("accept-language"),
    cookieLocale,
    queryLang: url.searchParams.get("lang"),
    userAgent: request.headers.get("user-agent"),
  });

  if (!decision.shouldRedirect) return undefined;

  const target = new URL(url);
  target.pathname = localePath(decision.locale, url.pathname);
  // `?lang=` is a one-shot override; drop it so the settled URL stays clean.
  target.searchParams.delete("lang");

  const headers = new Headers({
    // 302, never 301: a permanent redirect is cached by browsers and by Google and
    // is close to unrecoverable if the country logic ever needs to change.
    Location: `${target.pathname}${target.search}${url.hash}`,
    // Without these, a CDN could cache one visitor's country and serve it to everyone.
    "Cache-Control": "no-store, must-revalidate",
    Vary: "Accept-Language, Cookie",
    "x-df-locale-reason": decision.reason,
  });

  // Persist the decision so it is made once per visitor, not on every page view.
  headers.append(
    "Set-Cookie",
    `${LOCALE_COOKIE_KEY}=${decision.locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax; Secure`,
  );

  return new Response(null, { status: 302, headers });
}
