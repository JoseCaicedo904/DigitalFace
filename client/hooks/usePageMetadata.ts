import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  LOCALES,
  absoluteUrl,
  localeMeta,
  localePath,
  stripLocaleFromPathname,
} from "@/i18n/locale";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) {
      element.setAttribute("hreflang", hreflang);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

/**
 * Applies localized title, description, canonical URL and hreflang alternates.
 * The active locale always comes from the URL.
 */
export function usePageMetadata(title: string, description: string) {
  const { locale } = useLocale();
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta("property", "og:title", title);
    }

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
    }

    const canonicalPath = stripLocaleFromPathname(pathname);
    const canonical = absoluteUrl(localePath(locale, canonicalPath));

    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:locale", locale === "es" ? "es_ES" : "en_US");
    upsertLink("canonical", canonical);

    LOCALES.forEach((alternate) => {
      upsertLink(
        "alternate",
        absoluteUrl(localePath(alternate, canonicalPath)),
        localeMeta[alternate].htmlLang,
      );
    });

    upsertLink("alternate", absoluteUrl(canonicalPath), "x-default");
  }, [title, description, locale, pathname]);
}
