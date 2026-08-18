import { createContext, useContext, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localeMeta,
  localePath,
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

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const locale = getLocaleFromPathname(pathname);

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
