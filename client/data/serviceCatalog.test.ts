import { describe, expect, it } from "vitest";
import {
  SERVICE_IDS,
  getServiceGroupName,
  getServiceName,
  isServiceId,
  resolveCatalog,
  serviceCatalog,
} from "./serviceCatalog";

/**
 * The catalog carries content keys that TypeScript cannot check against the
 * locale files — the groups are typed as separate literal objects, so a key
 * lookup by variable is a cast. A renamed or deleted service would therefore
 * surface as a card labelled with its own slug rather than a build error, in
 * one language only. These tests are that missing check.
 */

const locales = ["en", "es"] as const;

describe("service catalog", () => {
  it("has unique ids", () => {
    expect(new Set(SERVICE_IDS).size).toBe(SERVICE_IDS.length);
  });

  it("uses slugs as ids, since they are also anchors and payload keys", () => {
    for (const id of SERVICE_IDS) {
      expect(id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it.each(locales)("names every service and group in %s", (locale) => {
    for (const id of SERVICE_IDS) {
      const name = getServiceName(id, locale);
      expect(name.trim()).not.toBe("");
      // The fallback is the id itself, which means the content key missed.
      expect(name).not.toBe(id);
      expect(getServiceGroupName(id, locale).trim()).not.toBe("");
    }
  });

  it("offers the same services in both languages", () => {
    const ids = (locale: (typeof locales)[number]) =>
      resolveCatalog(locale).flatMap((group) =>
        group.services.map((service) => service.id),
      );

    expect(ids("es")).toEqual(ids("en"));
    expect(ids("en")).toEqual(SERVICE_IDS);
  });

  it("offers audiovisual production and content creation independently", () => {
    expect(SERVICE_IDS).toContain("audiovisual-production");
    expect(SERVICE_IDS).toContain("content-creation");
    expect(getServiceName("audiovisual-production", "en")).toBe(
      "Audiovisual production",
    );
    expect(getServiceName("audiovisual-production", "es")).toBe(
      "Producción audiovisual",
    );
  });

  it("uses Google Ads as the middle paid-media card and request id", () => {
    const paidMedia = serviceCatalog.find((group) => group.key === "paidMedia");

    expect(
      paidMedia?.services.slice(0, 3).map((service) => service.id),
    ).toEqual(["meta-ads", "google-ads", "tiktok-ads"]);
    expect(isServiceId("google-ads")).toBe(true);
    expect(isServiceId("conversion-tracking")).toBe(false);
  });

  it("groups every service under a catalog section", () => {
    const grouped = serviceCatalog.flatMap((group) =>
      group.services.map((service) => service.id),
    );
    expect([...grouped].sort()).toEqual([...SERVICE_IDS].sort());
  });

  it("recognises its own ids and nothing else", () => {
    expect(isServiceId("meta-ads")).toBe(true);
    expect(isServiceId("not-a-service")).toBe(false);
    expect(isServiceId(42)).toBe(false);
    expect(isServiceId(null)).toBe(false);
  });
});
