import type { Locale } from "@/i18n/locale";
import { pricingContent } from "@/i18n/content/pricing";
import { industryIcons, industryProofLead } from "./industryIcons";
import { industryContentEn } from "./industryContent.en";
import { industryContentEs } from "./industryContent.es";
import type {
  ClientStory,
  ClientStoryId,
  IndustryCommercialTerms,
  IndustryItem,
  IndustryLandingData,
  IndustryLandingText,
  IndustryLocaleBundle,
  IndustryPackage,
  IndustryPackagePresentation,
  IndustrySlug,
  IndustryTextItem,
  IndustryUiCopy,
} from "./industryTypes";
import { INDUSTRY_SLUGS } from "./industryTypes";

export type {
  ClientStory,
  ClientStoryId,
  IndustryCommercialTerms,
  IndustryItem,
  IndustryLandingData,
  IndustryLandingText,
  IndustryPackage,
  IndustryPackagePresentation,
  IndustrySlug,
  IndustryUiCopy,
} from "./industryTypes";
export { INDUSTRY_SLUGS } from "./industryTypes";

const bundles: Record<Locale, IndustryLocaleBundle> = {
  en: industryContentEn,
  es: industryContentEs,
};

function attachIcons(
  items: IndustryTextItem[],
  icons: IndustryLandingData["problem"]["items"][number]["icon"][],
): IndustryItem[] {
  return items.map((item, index) => ({
    ...item,
    icon: icons[index] ?? icons[icons.length - 1],
  }));
}

function buildCommercialPackages(
  locale: Locale,
  presentations: IndustryPackagePresentation[],
): IndustryPackage[] {
  const commercial = pricingContent[locale];
  const plans = commercial.packages.items;

  if (presentations.length !== plans.length) {
    throw new Error(
      `Industry package presentation count (${presentations.length}) does not match the main Plans page (${plans.length}).`,
    );
  }

  const presentationsById = new Map(
    presentations.map((presentation) => [presentation.id, presentation]),
  );

  const featureSummaryTitle =
    locale === "en"
      ? "Core plan capabilities"
      : "Funciones principales del plan";

  return plans.map((plan) => {
    const presentation = presentationsById.get(
      plan.id as IndustryPackagePresentation["id"],
    );
    if (!presentation) {
      throw new Error(`Missing industry presentation for plan "${plan.id}".`);
    }
    const addOns = commercial.packages.comparison.addOns.items.filter((item) =>
      plan.includedFeatures.includes(item.id),
    );

    return {
      id: presentation.id,
      name: plan.name,
      nicheName: presentation.nicheName,
      description: plan.description,
      idealFor: plan.idealFor,
      featured: plan.recommended,
      inherits: plan.inherits,
      highlights: plan.features.map((feature) => feature.title),
      adChannelCapacity: plan.adChannelCapacity,
      adChannelPricing: plan.adChannelPricing,
      details: [
        {
          title: featureSummaryTitle,
          description: plan.features
            .map((feature) => `${feature.title}: ${feature.body}`)
            .join(" "),
        },
        ...plan.details.map((detail) => ({
          title: detail.title,
          description: detail.body,
        })),
        ...(addOns.length
          ? [
              {
                title: commercial.packages.comparison.addOns.title,
                description: addOns
                  .map((addOn) => `${addOn.title}: ${addOn.body}`)
                  .join(" "),
              },
            ]
          : []),
      ],
      scope: plan.scope,
      exclusions: plan.exclusions,
      usageNote: plan.usageNote,
      cta: presentation.cta,
    };
  });
}

function buildCommercialTerms(locale: Locale): IndustryCommercialTerms {
  const commercial = pricingContent[locale];

  return {
    recommendedLabel: commercial.packages.recommendedLabel,
    noContract: commercial.packages.noContract,
    title: commercial.notes.title,
    guarantee: commercial.notes.guarantee,
    items: commercial.notes.items.map((item) => ({
      title: item.title,
      description: item.body,
    })),
    scopeLabel: commercial.packages.comparison.scopeLabel,
    exclusionsLabel: commercial.packages.exclusionsLabel,
    usageLabel: commercial.packages.usageLabel,
  };
}

function buildIndustry(
  locale: Locale,
  slug: IndustrySlug,
): IndustryLandingData {
  const text: IndustryLandingText = bundles[locale].industries[slug];
  const icons = industryIcons[slug];

  return {
    ...text,
    slug,
    proofLead: industryProofLead[slug],
    packages: buildCommercialPackages(locale, text.packages),
    commercialTerms: buildCommercialTerms(locale),
    problem: {
      ...text.problem,
      items: attachIcons(text.problem.items, icons.problem),
    },
    capabilities: {
      ...text.capabilities,
      items: attachIcons(text.capabilities.items, icons.capabilities),
    },
  };
}

const cache = new Map<string, IndustryLandingData>();

export function getIndustryData(
  locale: Locale,
  slug: IndustrySlug,
): IndustryLandingData {
  const key = `${locale}:${slug}`;
  let value = cache.get(key);
  if (!value) {
    value = buildIndustry(locale, slug);
    cache.set(key, value);
  }
  return value;
}

export function getIndustryUi(locale: Locale): IndustryUiCopy {
  return bundles[locale].ui;
}

export function getClientStories(
  locale: Locale,
): Record<ClientStoryId, ClientStory> {
  return bundles[locale].clientStories;
}

/** Navigation labels for the corporate header, footer and mobile menu. */
export function getIndustryNavLabels(
  locale: Locale,
): { slug: IndustrySlug; label: string }[] {
  return INDUSTRY_SLUGS.map((slug) => ({
    slug,
    label: bundles[locale].industries[slug].navLabel,
  }));
}

export function industryHref(slug: IndustrySlug): string {
  return `/industries/${slug}`;
}
