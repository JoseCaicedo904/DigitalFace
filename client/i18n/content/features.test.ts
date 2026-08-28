import { describe, expect, it } from "vitest";
import { featuresContent } from "./features";
import type { JourneyAct } from "@/components/journey/journey";

/**
 * The journey scripts carry indexes that point into their own arrays, and the
 * visuals read those indexes without bounds-checking them. TypeScript cannot
 * catch an index that drifts past the end of a list when someone edits the copy,
 * so the cheap guard lives here instead.
 */

const locales = ["en", "es"] as const;

function actsOf(locale: (typeof locales)[number]): JourneyAct[] {
  return featuresContent[locale].journey.acts;
}

describe("features journey content", () => {
  it("tells the same story in both locales", () => {
    const shape = (locale: (typeof locales)[number]) =>
      actsOf(locale).map((act) => ({
        badge: act.badge,
        kind: act.script.kind,
      }));

    expect(shape("es")).toEqual(shape("en"));
  });

  it.each(locales)("has no empty copy in %s", (locale) => {
    for (const act of actsOf(locale)) {
      expect(act.title.trim()).not.toBe("");
      expect(act.patient.trim()).not.toBe("");
      expect(act.system.trim()).not.toBe("");
      expect(act.modules.length).toBeGreaterThan(0);
      expect(act.modules.every((module) => module.trim() !== "")).toBe(true);
    }
  });

  it.each(locales)("keeps every script index in range in %s", (locale) => {
    for (const act of actsOf(locale)) {
      const script = act.script;

      if (script.kind === "booking") {
        expect(script.slots.length).toBeGreaterThan(0);
        expect(script.bookedIndex).toBeGreaterThanOrEqual(0);
        expect(script.bookedIndex).toBeLessThan(script.slots.length);
        expect(script.followUps.length).toBeGreaterThan(0);
      }

      if (script.kind === "pipeline") {
        const last = script.columns.length - 1;
        expect(script.columns.length).toBeGreaterThan(0);
        expect(script.fromColumn).toBeGreaterThanOrEqual(0);
        expect(script.fromColumn).toBeLessThanOrEqual(last);
        expect(script.toColumn).toBeGreaterThanOrEqual(0);
        expect(script.toColumn).toBeLessThanOrEqual(last);
        /** The card has to actually move, or the act shows nothing happening. */
        expect(script.fromColumn).not.toBe(script.toColumn);
      }

      if (script.kind === "inbox") {
        expect(script.rows.length).toBeGreaterThan(0);
      }
    }
  });

  it.each(locales)("gives every visual a written alternative in %s", (locale) => {
    for (const act of actsOf(locale)) {
      expect(act.script.transcriptLabel.trim()).not.toBe("");
    }
  });

  it.each(locales)("still lists all seven modules in %s", (locale) => {
    const { items } = featuresContent[locale].modules;
    expect(items).toHaveLength(7);
    for (const item of items) {
      expect(item.bullets.length).toBeGreaterThan(0);
    }
  });
});
