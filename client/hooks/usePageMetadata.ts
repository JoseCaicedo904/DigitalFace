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

/** Shared social preview. Overridable per page once art exists for a given route. */
const DEFAULT_SHARE_IMAGE = "/images/digitalface-post.png";

export type PageMetadataOptions = {
  /** Absolute or root-relative path to the social preview image. */
  image?: string;
  /**
   * Set on pages that must never enter the index. The SPA serves a 200 for unknown
   * URLs, so without this a mistyped link becomes an indexable soft 404.
   */
  noindex?: boolean;
};

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

function removeMeta(attribute: "name" | "property", key: string) {
  document.head
    .querySelectorAll(`meta[${attribute}="${key}"]`)
    .forEach((element) => element.remove());
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
 * Applies localized title, description, canonical URL, hreflang alternates and
 * social preview tags. The active locale always comes from the URL.
 */
export function usePageMetadata(
  title: string,
  description: string,
  options: PageMetadataOptions = {},
) {
  const { locale } = useLocale();
  const { pathname } = useLocation();
  const { image = DEFAULT_SHARE_IMAGE, noindex = false } = options;

  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta("property", "og:title", title);
      upsertMeta("name", "twitter:title", title);
    }

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    const canonicalPath = stripLocaleFromPathname(pathname);
    const canonical = absoluteUrl(localePath(locale, canonicalPath));

    upsertMeta("property", "og:url", canonical);
    // es_LA, not es_ES: the Spanish tree serves Latin America and US Hispanic
    // audiences. This is Open Graph only and never feeds hreflang.
    upsertMeta("property", "og:locale", locale === "es" ? "es_LA" : "en_US");
    upsertMeta(
      "property",
      "og:locale:alternate",
      locale === "es" ? "en_US" : "es_LA",
    );

    const shareImage = image.startsWith("http") ? image : absoluteUrl(image);
    upsertMeta("property", "og:image", shareImage);
    upsertMeta("name", "twitter:image", shareImage);
    upsertMeta("name", "twitter:card", "summary_large_image");

    upsertLink("canonical", canonical);

    LOCALES.forEach((alternate) => {
      upsertLink(
        "alternate",
        absoluteUrl(localePath(alternate, canonicalPath)),
        localeMeta[alternate].htmlLang,
      );
    });

    upsertLink("alternate", absoluteUrl(canonicalPath), "x-default");

    // Removed rather than set to "index": leaving a stale noindex behind after an
    // in-app navigation away from a 404 would deindex a real page.
    if (noindex) {
      upsertMeta("name", "robots", "noindex, follow");
    } else {
      removeMeta("name", "robots");
    }
  }, [title, description, locale, pathname, image, noindex]);
}
