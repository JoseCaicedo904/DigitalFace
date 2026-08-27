import type { Locale } from "@/i18n/locale";
import {
  industryEmbedSlots,
  industryIcons,
  industryProofLead,
} from "./industryIcons";
import { industryContentEn } from "./industryContent.en";
import { industryContentEs } from "./industryContent.es";
import type {
  ClientStory,
  ClientStoryId,
  IndustryItem,
  IndustryLandingData,
  IndustryLandingText,
  IndustryLocaleBundle,
  IndustrySlug,
  IndustryTextItem,
  IndustryUiCopy,
} from "./industryTypes";
import { INDUSTRY_SLUGS } from "./industryTypes";

export type {
  ClientStory,
  ClientStoryId,
  IndustryItem,
  IndustryLandingData,
  IndustryLandingText,
  IndustryPackage,
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
    problem: {
      ...text.problem,
      items: attachIcons(text.problem.items, icons.problem),
    },
    capabilities: {
      ...text.capabilities,
      items: attachIcons(text.capabilities.items, icons.capabilities),
    },
    booking: {
      ...text.booking,
      ...industryEmbedSlots[slug],
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
