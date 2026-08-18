import { createContext, useContext, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resolveLocaleFromBrowser } from "./geo";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localeMeta,
  localePath,
  readLocaleCookie,
  storeLocale,
  type Locale,
} from "./locale";

type LocaleContextValue = {
  locale: Locale;
  /** Turns a canonical (English) path into a locale-aware href. */
  path: (path: string) => string;
  /** Picks the value written for the active locale. */
  pick: <T>(values: Record<Locale, T>) => T;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  path: (value) => value,
  pick: (values) => values[DEFAULT_LOCALE],
});

/**
 * Module-level, not component state: it must survive a remount so the detection
 * can never run twice and bounce the visitor around in a loop.
 */
let hasDetectedLocale = false;

/** An in-app click is not a first visit, so it must not trigger detection. */
function arrivedFromSameOrigin(): boolean {
  if (!document.referrer) return false;
  try {
    return new URL(document.referrer).origin === window.location.origin;
  } catch {
    return false;
  }
}

/** navigator.languages is already in preference order, so order carries the weight. */
function browserLanguages(): string {
  if (typeof navigator === "undefined") return "";
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    return navigator.languages.join(",");
  }
  return navigator.language || "";
}

/**
 * Browser-side safety net. The Vercel middleware handles production and runs before
 * any HTML is sent; this only fires where the middleware cannot — `npm run dev`, or
 * the site being served from a host without edge geo. Language only: there is no
 * country signal in the browser, and no third-party geo API is ever called.
 */
function useBrowserLocaleDetection(pathname: string, search: string) {
  const navigate = useNavigate();

  useEffect(() => {
    if (hasDetectedLocale) return;
    hasDetectedLocale = true;

    if (typeof window === "undefined") return;

    const params = new URLSearchParams(search);
    const decision = resolveLocaleFromBrowser({
      pathname,
      acceptLanguage: browserLanguages(),
      cookieLocale: readLocaleCookie(),
      queryLang: params.get("lang"),
      userAgent: navigator.userAgent,
    });

    if (!decision.shouldRedirect) return;

    // A language *guess* must never override an in-app navigation. A stored choice
    // or an explicit ?lang= still applies, because both are the visitor's own doing.
    if (decision.reason === "browser-language" && arrivedFromSameOrigin()) return;

    storeLocale(decision.locale);
    params.delete("lang");
    const query = params.toString();

    navigate(
      `${localePath(decision.locale, pathname)}${query ? `?${query}` : ""}${window.location.hash}`,
      // replace, so the back button is not trapped against the redirect.
      { replace: true },
    );
    // Runs once per page load by design; the guard above enforces it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname, search } = useLocation();
  const locale = getLocaleFromPathname(pathname);

  useBrowserLocaleDetection(pathname, search);

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      path: (target: string) => localePath(locale, target),
      pick: (values) => values[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}

/** Convenience hook for components that only need locale-aware links. */
export function useLocalePath(): (path: string) => string {
  return useLocale().path;
}

/** Resolves a { en, es } dictionary against the active locale. */
export function useTranslation<T>(dictionary: Record<Locale, T>): T {
  return useLocale().pick(dictionary);
}
