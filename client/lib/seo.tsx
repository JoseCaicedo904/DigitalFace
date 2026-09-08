import { createContext } from "react";
import site from "@shared/site.json";
import {
  absoluteUrl,
  getLocaleFromPathname,
  localePath,
  stripLocaleFromPathname,
} from "@/i18n/locale";

export type PageMetadataOptions = { image?: string; noindex?: boolean };
export type HeadData = ReturnType<typeof buildHead>;
export type SeoCollector = { head?: HeadData; schemas: Map<string, string> };
/** A fresh collector per build-time render; never shared between requests. */
export const SeoContext = createContext<SeoCollector | null>(null);
export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
export const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function buildHead(
  pathname: string,
  title: string,
  description: string,
  options: PageMetadataOptions = {},
) {
  const locale = getLocaleFromPathname(pathname);
  const base = stripLocaleFromPathname(pathname);
  const route = site.routes.find((entry) => entry.path === base);
  const noindex = options.noindex || !route?.indexable;
  const canonical = route ? absoluteUrl(localePath(locale, route.path)) : null;
  const image = options.image?.startsWith("https://")
    ? options.image
    : absoluteUrl(options.image || "/images/digitalface-post.png");
  const imageAlt =
    locale === "es"
      ? "DigitalFace Marketing: captación y agendamiento para clínicas"
      : "DigitalFace Marketing: patient acquisition and booking for clinics";
  const meta = [
    { name: "description", content: description },
    {
      name: "robots",
      content: noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large",
    },
    { property: "og:site_name", content: "DigitalFace Marketing" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    ...(canonical ? [{ property: "og:url", content: canonical }] : []),
    { property: "og:locale", content: locale === "es" ? "es_LA" : "en_US" },
    {
      property: "og:locale:alternate",
      content: locale === "es" ? "en_US" : "es_LA",
    },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    ...(!options.image
      ? [
          { property: "og:image:width", content: "1536" },
          { property: "og:image:height", content: "1024" },
        ]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
  ];
  const links: Record<string, string>[] = canonical
    ? [
        { rel: "canonical", href: canonical },
        ...(!noindex
          ? ["en", "es", "x-default"].map((lang) => ({
              rel: "alternate",
              hreflang: lang,
              href: absoluteUrl(localePath(lang === "es" ? "es" : "en", base)),
            }))
          : []),
      ]
    : [];
  if (route?.preloadImage && !noindex)
    links.push({
      rel: "preload",
      as: "image",
      href: route.preloadImage,
      fetchpriority: "high",
    });
  const label = title.split(" | ")[0];
  const organization = { "@id": `${site.origin}/#organization` };
  const pageSchema = canonical
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": route.type,
            "@id": `${canonical}#webpage`,
            url: canonical,
            name: title,
            description,
            inLanguage: locale,
            isPartOf: { "@id": `${site.origin}/#website` },
            about: organization,
            ...(route.path !== "/"
              ? { breadcrumb: { "@id": `${canonical}#breadcrumb` } }
              : {}),
            ...(route.service
              ? { mainEntity: { "@id": `${canonical}#service` } }
              : {}),
          },
          ...(route.path !== "/"
            ? [
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonical}#breadcrumb`,
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "DigitalFace",
                      item: absoluteUrl(localePath(locale, "/")),
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: label,
                      item: canonical,
                    },
                  ],
                },
              ]
            : []),
          ...(route.service
            ? [
                {
                  "@type": "Service",
                  "@id": `${canonical}#service`,
                  url: canonical,
                  name: label,
                  description,
                  provider: organization,
                  areaServed: [
                    { "@type": "Country", name: "United States" },
                    { "@type": "Country", name: "Canada" },
                    { "@type": "State", name: "Florida" },
                    { "@type": "Place", name: "Latin America" },
                  ],
                },
              ]
            : []),
        ],
      }
    : null;
  return {
    locale,
    title,
    description,
    canonical,
    noindex,
    meta,
    links,
    pageSchema,
  };
}

export function renderHead(head: HeadData, schemas: Map<string, string>) {
  const attributes = (attrs: Record<string, string>) =>
    Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(" ");
  return [
    `<title>${escapeHtml(head.title)}</title>`,
    ...head.meta.map((attrs) => `<meta data-df-seo="" ${attributes(attrs)}>`),
    ...head.links.map((attrs) => `<link data-df-seo="" ${attributes(attrs)}>`),
    ...(head.pageSchema
      ? [
          `<script id="ld-page" type="application/ld+json">${serializeJsonLd(head.pageSchema)}</script>`,
        ]
      : []),
    ...[...schemas].map(
      ([id, json]) =>
        `<script id="ld-${escapeHtml(id)}" type="application/ld+json">${json}</script>`,
    ),
  ].join("\n");
}

/** Replaces this app's head tags after each client navigation. */
export function applyHead(head: HeadData) {
  document.title = head.title;
  document.documentElement.lang = head.locale;
  document.head
    .querySelectorAll("[data-df-seo]")
    .forEach((node) => node.remove());
  for (const [tag, entries] of [
    ["meta", head.meta],
    ["link", head.links],
  ] as const) {
    for (const attrs of entries) {
      const node = document.createElement(tag);
      node.setAttribute("data-df-seo", "");
      for (const [key, value] of Object.entries(attrs))
        node.setAttribute(key, value);
      document.head.appendChild(node);
    }
  }
  document.getElementById("ld-page")?.remove();
  if (head.pageSchema) {
    const script = document.createElement("script");
    script.id = "ld-page";
    script.type = "application/ld+json";
    script.textContent = serializeJsonLd(head.pageSchema);
    document.head.appendChild(script);
  }
}
