import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { JSDOM } from "jsdom";
import { analyticsPage, canTrack } from "./analytics";
describe("Analytics production and privacy boundaries", () => {
  it("requires a real ID, production deployment and exact production hostname", () => {
    expect(
      canTrack("G-SYNTHETIC123", true, "production", "digitalface.app"),
    ).toBe(true);
    for (const args of [
      [undefined, true, "production", "digitalface.app"],
      ["G-SYNTHETIC123", false, "production", "digitalface.app"],
      ["G-SYNTHETIC123", true, "preview", "digitalface.app"],
      ["G-SYNTHETIC123", true, "production", "localhost"],
      ["G-SYNTHETIC123", true, "production", "demo.vercel.app"],
    ] as const)
      expect(canTrack(args[0], args[1], args[2], args[3])).toBe(false);
  });
  it("allows only known route paths and rejects arbitrary URL data", () => {
    expect(analyticsPage("/es/contact/")).toEqual({
      page_path: "/es/contact",
      locale: "es",
    });
    expect(
      analyticsPage("/contact?email=synthetic@example.invalid"),
    ).toBeNull();
    expect(analyticsPage("/unknown/synthetic-private-value")).toBeNull();
  });
});

let dom: JSDOM;
beforeEach(() => {
  vi.resetModules();
});
afterEach(() => {
  dom?.window.close();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});
async function productionAnalytics() {
  dom = new JSDOM("<!doctype html><html><head></head><body></body></html>", {
    url: "https://digitalface.app/contact?email=synthetic@example.invalid",
    referrer: "https://www.google.com/search?q=synthetic-private-term",
  });
  vi.stubGlobal("window", dom.window);
  vi.stubGlobal("document", dom.window.document);
  vi.stubEnv("PROD", true);
  vi.stubEnv("VITE_DEPLOY_ENV", "production");
  vi.stubEnv("VITE_GA4_MEASUREMENT_ID", "G-SYNTHETIC123");
  return await import("./analytics");
}
describe("GA4 runtime behavior without any network requests", () => {
  it("loads once, counts route changes once and omits PII and query strings", async () => {
    const analytics = await productionAnalytics();
    analytics.trackPageView("/contact", "Contact DigitalFace");
    analytics.trackPageView("/contact", "Contact DigitalFace");
    analytics.trackPageView("/es/contact", "Contacto DigitalFace");
    analytics.trackEvent("generate_lead", {
      lead_type: "contact",
      page_source: "contact",
      email: "synthetic@example.invalid",
    } as never);
    expect(document.querySelectorAll("#df-ga4")).toHaveLength(1);
    const calls = window.dataLayer!.map((entry) =>
      Array.from(entry as ArrayLike<unknown>),
    );
    expect(
      calls.filter((entry) => entry[0] === "event" && entry[1] === "page_view"),
    ).toHaveLength(2);
    expect(
      calls.filter(
        (entry) => entry[0] === "event" && entry[1] === "generate_lead",
      ),
    ).toHaveLength(1);
    expect(JSON.stringify(calls)).not.toContain("synthetic@example.invalid");
    expect(JSON.stringify(calls)).not.toContain("synthetic-private-term");
    expect(calls.find((entry) => entry[0] === "config")?.[2]).toMatchObject({
      send_page_view: false,
    });
  });
  it("leaves a pre-existing Google tag alone", async () => {
    const analytics = await productionAnalytics();
    window.gtag = vi.fn();
    analytics.trackPageView("/contact", "Contact");
    expect(document.querySelector("#df-ga4")).toBeNull();
    expect(window.gtag).not.toHaveBeenCalled();
  });
  it("never lets a broken analytics script interrupt a lead or navigation", async () => {
    const analytics = await productionAnalytics();
    analytics.trackPageView("/contact", "Contact");
    window.gtag = () => {
      throw new Error("Synthetic third-party failure");
    };
    expect(() => analytics.trackEvent("generate_lead")).not.toThrow();
    expect(() => analytics.trackPageView("/pricing", "Pricing")).not.toThrow();
  });
});
