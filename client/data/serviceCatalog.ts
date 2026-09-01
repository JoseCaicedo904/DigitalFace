import { payPerServiceContent } from "@/i18n/content/payPerService";
import type { PayPerServiceContent } from "@/i18n/content/payPerService";
import type { Locale } from "@/i18n/locale";

/**
 * The single registry of individually requestable DigitalFace services.
 *
 * Ids are technical and language-independent: they are the anchor ids on
 * /pay-per-service, the deep-link targets used by the header mega menu, and the
 * stable keys sent to n8n. Visible names are never stored or transmitted as an
 * identity — they are resolved from the locale content at render time, so a
 * copy edit or a language switch can never orphan a selection.
 */

export type ServiceGroupKey = keyof PayPerServiceContent["groups"];

type CatalogGroup = {
  key: ServiceGroupKey;
  /** Section anchor on the Pay per Service page. */
  id: string;
  services: readonly { id: string; contentKey: string }[];
};

export const serviceCatalog = [
  {
    key: "paidMedia",
    id: "paid-media",
    services: [
      { id: "meta-ads", contentKey: "meta" },
      { id: "conversion-tracking", contentKey: "tracking" },
      { id: "tiktok-ads", contentKey: "tiktok" },
      { id: "google-ads", contentKey: "google" },
      { id: "seo-strategy", contentKey: "seo" },
      { id: "content-creation", contentKey: "content" },
    ],
  },
  {
    key: "automation",
    id: "automation-and-chatbots",
    services: [
      { id: "chatbot-development", contentKey: "chatbot" },
      { id: "workflow-automation", contentKey: "workflow" },
      { id: "appointment-automation", contentKey: "appointment" },
      { id: "ecommerce-automation", contentKey: "ecommerce" },
      { id: "comment-auto-reply", contentKey: "comments" },
    ],
  },
  {
    key: "leadOps",
    id: "lead-ops-crm",
    services: [
      { id: "lead-capture", contentKey: "capture" },
      { id: "appointment-booking", contentKey: "booking" },
      { id: "crm-pipeline", contentKey: "pipeline" },
      { id: "crm-integration", contentKey: "integration" },
      { id: "reporting-dashboards", contentKey: "reporting" },
    ],
  },
  {
    key: "websites",
    id: "websites-and-funnels",
    services: [
      { id: "corporate-websites", contentKey: "corporate" },
      { id: "campaign-landing-pages", contentKey: "landing" },
    ],
  },
] as const satisfies readonly CatalogGroup[];

export type ServiceId =
  (typeof serviceCatalog)[number]["services"][number]["id"];

type CatalogEntry = {
  id: ServiceId;
  contentKey: string;
  groupKey: ServiceGroupKey;
  /** Section anchor the service card lives under. */
  groupAnchor: string;
};

const entries = new Map<string, CatalogEntry>();
for (const group of serviceCatalog) {
  for (const service of group.services) {
    entries.set(service.id, {
      id: service.id,
      contentKey: service.contentKey,
      groupKey: group.key,
      groupAnchor: group.id,
    });
  }
}

/** Catalog order, which is also the order the page renders. */
export const SERVICE_IDS: ServiceId[] = [...entries.keys()] as ServiceId[];

export function isServiceId(value: unknown): value is ServiceId {
  return typeof value === "string" && entries.has(value);
}

/** Shape shared by every service in every group of the locale content. */
type ServiceCopy = {
  title: string;
  description: string;
  outcomesLabel?: string;
  outcomes: string[];
  ctaLabel: string;
};

/**
 * The content files type each group's services as its own literal object, so a
 * lookup by a variable key needs one narrowing here rather than at every call
 * site. Every key comes from the catalog above, and the test suite proves each
 * one resolves in both locales.
 */
function servicesOf(
  locale: Locale,
  groupKey: ServiceGroupKey,
): Record<string, ServiceCopy> {
  return payPerServiceContent[locale].groups[groupKey].services as Record<
    string,
    ServiceCopy
  >;
}

/** The service's own title, in the visitor's language. */
export function getServiceName(id: ServiceId, locale: Locale): string {
  const entry = entries.get(id);
  if (!entry) return id;
  return servicesOf(locale, entry.groupKey)[entry.contentKey]?.title ?? id;
}

/** The category it sits under, used as the quiet second line on a request row. */
export function getServiceGroupName(id: ServiceId, locale: Locale): string {
  const entry = entries.get(id);
  if (!entry) return "";
  return payPerServiceContent[locale].groups[entry.groupKey].title;
}

/** Canonical (English) path to the card itself; callers add the locale prefix. */
export function serviceHref(id: ServiceId): string {
  return `/pay-per-service#${id}`;
}

export type ResolvedService = { id: ServiceId; name: string };

export function resolveServices(
  ids: readonly ServiceId[],
  locale: Locale,
): ResolvedService[] {
  return ids.map((id) => ({ id, name: getServiceName(id, locale) }));
}

/** The whole catalog, grouped and translated — for pickers outside the page. */
export function resolveCatalog(locale: Locale) {
  return serviceCatalog.map((group) => ({
    key: group.key,
    title: payPerServiceContent[locale].groups[group.key].title,
    services: group.services.map((service) => ({
      id: service.id as ServiceId,
      name: getServiceName(service.id, locale),
    })),
  }));
}
