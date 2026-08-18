import { SITE_URL, absoluteUrl, localePath, type Locale } from "@/i18n/locale";

/**
 * Every value below is already published somewhere visible on the site (footer,
 * contact page, industry FAQ). Nothing here may be invented: no ratings, no review
 * counts, no awards, no employee numbers, no client results. If a property cannot
 * be backed by on-page copy, it is left out rather than guessed.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const CONTACT_EMAIL = "sales@digitalfacemarketing.com";

type JsonLd = Record<string, unknown>;

const description: Record<Locale, string> = {
  en: "DigitalFace installs and manages the acquisition, follow-up and booking system behind dental practices, aesthetic medicine and med spas.",
  es: "DigitalFace instala y administra el sistema de captación, seguimiento y agendamiento que usan clínicas odontológicas, centros de medicina estética y med spas.",
};

/** Matches the "Offices" block in the footer. Cali is the only address with a street. */
const caliAddress: JsonLd = {
  "@type": "PostalAddress",
  streetAddress: "Calle 70 # 1-00, La 14 de Calima",
  addressLocality: "Cali",
  addressRegion: "Valle del Cauca",
  addressCountry: "CO",
};

export function organizationSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "DigitalFace Marketing",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png"),
      width: 464,
      height: 860,
    },
    image: absoluteUrl("/images/digitalface-post.png"),
    description: description[locale],
    email: CONTACT_EMAIL,
    address: caliAddress,
    // Miami is listed in the footer as remote-first with no street address, so it is
    // stated as a service area rather than fabricated into a PostalAddress.
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Place", name: "Latin America" },
    ],
    knowsLanguage: ["en", "es"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      availableLanguage: ["en", "es"],
      areaServed: ["US", "CO"],
    },
  };
}

export function websiteSchema(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "DigitalFace Marketing",
    url: absoluteUrl(localePath(locale, "/")),
    inLanguage: locale,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type BreadcrumbEntry = { name: string; path: string };

export function breadcrumbSchema(
  locale: Locale,
  entries: BreadcrumbEntry[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(localePath(locale, entry.path)),
    })),
  };
}

export type FaqEntry = { question: string; answer: string };

/** Only ever built from FAQ copy that is rendered on the same page. */
export function faqSchema(entries: FaqEntry[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}
