import { pricingContent } from "@/i18n/content/pricing";
import { describe, expect, it } from "vitest";
import { getIndustryData, INDUSTRY_SLUGS } from "./industryData";
import type { Locale } from "@/i18n/locale";

describe("industry package commercial parity", () => {
  it.each<Locale>(["en", "es"])(
    "derives every %s industry package from the main Plans data",
    (locale) => {
      const commercial = pricingContent[locale];

      for (const slug of INDUSTRY_SLUGS) {
        const industry = getIndustryData(locale, slug);

        expect(industry.packages).toHaveLength(
          commercial.packages.items.length,
        );
        expect(industry.commercialTerms.noContract).toBe(
          commercial.packages.noContract,
        );
        expect(industry.commercialTerms.guarantee).toBe(
          commercial.notes.guarantee,
        );
        expect(
          industry.commercialTerms.items.map((item) => item.title),
        ).toEqual(commercial.notes.items.map((item) => item.title));

        industry.packages.forEach((plan, index) => {
          const source = commercial.packages.items[index];
          const availableAddOns =
            commercial.packages.comparison.addOns.items.filter((item) =>
              source.includedFeatures.includes(item.id),
            );

          expect(plan.name).toBe(source.name);
          expect(plan.featured).toBe(source.recommended);
          expect(plan.description).toBe(source.description);
          expect(plan.idealFor).toBe(source.idealFor);
          expect(plan.inherits).toBe(source.inherits);
          expect(plan.adChannelCapacity).toBe(source.adChannelCapacity);
          expect(plan.adChannelPricing).toBe(source.adChannelPricing);
          expect(plan.highlights).toEqual(
            source.features.map((feature) => feature.title),
          );
          expect(plan.scope).toBe(source.scope);
          expect(plan.exclusions).toBe(source.exclusions);
          expect(plan.usageNote).toBe(source.usageNote);
          expect("price" in plan).toBe(false);
          expect("setup" in plan).toBe(false);

          if (availableAddOns.length > 0) {
            expect(plan.details[plan.details.length - 1]?.title).toBe(
              commercial.packages.comparison.addOns.title,
            );
          }
        });
      }
    },
  );
});
