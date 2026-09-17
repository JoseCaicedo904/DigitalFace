import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { JSDOM } from "jsdom";
import { analyticsPage, canTrack } from "./analytics";
import { sanitizeAnalyticsAttributionQuery } from "./attribution";
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
    expect(analyticsPage("/booking-confirmed")).toEqual({
      page_path: "/booking-confirmed",
      locale: "en",
    });
    expect(analyticsPage("/es/booking-confirmed")).toBeNull();
  });
  it("keeps only approved campaign and click-id query parameters", () => {
    expect(
      sanitizeAnalyticsAttributionQuery(
        "?utm_source=ga4test&utm_medium=cpc&utm_campaign=booking_test&utm_id=campaign-123&utm_content=hero&utm_term=dental+marketing&gclid=gclid-123&gbraid=gbraid-123&wbraid=wbraid-123&email=test%40example.com&phone=%2B15551234567&name=Test&message=private&foo=bar",
      ),
    ).toBe(
      "?utm_source=ga4test&utm_medium=cpc&utm_campaign=booking_test&utm_id=campaign-123&utm_content=hero&utm_term=dental+marketing&gclid=gclid-123&gbraid=gbraid-123&wbraid=wbraid-123",
    );
    expect(
      sanitizeAnalyticsAttributionQuery(
        "?email=test%40example.com&phone=%2B15551234567&foo=bar",
      ),
    ).toBe("");
    expect(sanitizeAnalyticsAttributionQuery("")).toBe("");
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
async function productionAnalytics(
  url = "https://digitalface.app/contact?email=synthetic@example.invalid",
) {
  dom = new JSDOM("<!doctype html><html><head></head><body></body></html>", {
    url,
    referrer: "https://www.google.com/search?q=synthetic-private-term",
  });
  vi.stubGlobal("window", dom.window);
  vi.stubGlobal("document", dom.window.document);
  vi.stubEnv("PROD", true);
  vi.stubEnv("VITE_DEPLOY_ENV", "production");
  vi.stubEnv("VITE_GA4_MEASUREMENT_ID", "G-SYNTHETIC123");
  const attribution = await import("./attribution");
  attribution.captureAttribution();
  return await import("./analytics");
}
describe("GA4 runtime behavior without any network requests", () => {
  it("preserves approved landing attribution across English and Spanish SPA page views", async () => {
    const analytics = await productionAnalytics(
      "https://digitalface.app/?utm_source=ga4test&utm_medium=cpc&utm_campaign=booking_test&utm_id=campaign-123&utm_content=hero&utm_term=dental+marketing&gclid=gclid-123&gbraid=gbraid-123&wbraid=wbraid-123&email=test@example.com&foo=bar",
    );

    analytics.trackPageView("/", "DigitalFace Marketing");
    window.history.replaceState({}, "", "/es");
    analytics.trackPageView("/es", "DigitalFace Marketing en español");

    const calls = window.dataLayer!.map((entry) =>
      Array.from(entry as ArrayLike<unknown>),
    );
    const expectedQuery =
      "?utm_source=ga4test&utm_medium=cpc&utm_campaign=booking_test&utm_id=campaign-123&utm_content=hero&utm_term=dental+marketing&gclid=gclid-123&gbraid=gbraid-123&wbraid=wbraid-123";
    expect(calls.find((entry) => entry[0] === "config")?.[2]).toMatchObject({
      send_page_view: false,
      campaign_id: "campaign-123",
      campaign_source: "ga4test",
      campaign_medium: "cpc",
      campaign_name: "booking_test",
      campaign_content: "hero",
      campaign_term: "dental marketing",
      page_location: `https://digitalface.app/${expectedQuery}`,
    });
    const pageViews = calls.filter(
      (entry) => entry[0] === "event" && entry[1] === "page_view",
    );
    expect(
      pageViews.map(
        (entry) => (entry[2] as { page_location: string }).page_location,
      ),
    ).toEqual([
      `https://digitalface.app/${expectedQuery}`,
      `https://digitalface.app/es${expectedQuery}`,
    ]);
    for (const pageView of pageViews)
      expect(pageView[2]).toMatchObject({
        campaign_id: "campaign-123",
        campaign_source: "ga4test",
        campaign_medium: "cpc",
        campaign_name: "booking_test",
        campaign_content: "hero",
        campaign_term: "dental marketing",
      });
    expect(calls.map((entry) => entry[0]).slice(0, 4)).toEqual([
      "js",
      "config",
      "set",
      "event",
    ]);
    expect(JSON.stringify(calls)).not.toContain("test@example.com");
    expect(JSON.stringify(calls)).not.toContain("foo=bar");
  });
  it("keeps campaign attribution through book and booking confirmation", async () => {
    const analytics = await productionAnalytics(
      "https://digitalface.app/?utm_source=ga4test2&utm_medium=cpc&utm_campaign=booking_test_2&email=test@example.com&foo=bar",
    );

    analytics.trackPageView("/", "DigitalFace Marketing");
    window.history.replaceState({}, "", "/book");
    analytics.trackPageView("/book", "Book");
    analytics.startAppointmentBookingAttempt();
    window.history.replaceState({}, "", "/booking-confirmed");
    analytics.trackPageView("/booking-confirmed", "Appointment confirmed");
    analytics.trackAppointmentBookedOnce();

    const calls = window.dataLayer!.map((entry) =>
      Array.from(entry as ArrayLike<unknown>),
    );
    const pageViews = calls.filter(
      (entry) => entry[0] === "event" && entry[1] === "page_view",
    );
    expect(
      pageViews.map(
        (entry) => (entry[2] as { page_location: string }).page_location,
      ),
    ).toEqual([
      "https://digitalface.app/?utm_source=ga4test2&utm_medium=cpc&utm_campaign=booking_test_2",
      "https://digitalface.app/book?utm_source=ga4test2&utm_medium=cpc&utm_campaign=booking_test_2",
      "https://digitalface.app/booking-confirmed?utm_source=ga4test2&utm_medium=cpc&utm_campaign=booking_test_2",
    ]);
    for (const pageView of pageViews)
      expect(pageView[2]).toMatchObject({
        campaign_source: "ga4test2",
        campaign_medium: "cpc",
        campaign_name: "booking_test_2",
      });
    expect(
      calls.filter(
        (entry) => entry[0] === "event" && entry[1] === "appointment_booked",
      ),
    ).toHaveLength(1);
    expect(JSON.stringify(calls)).not.toContain("test@example.com");
    expect(JSON.stringify(calls)).not.toContain("foo=bar");
  });
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
      calls
        .filter((entry) => entry[0] === "event" && entry[1] === "page_view")
        .map((entry) => (entry[2] as { page_location: string }).page_location),
    ).toEqual([
      "https://digitalface.app/contact",
      "https://digitalface.app/es/contact",
    ]);
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
  it("marks the flow fired before one event, survives five calls and resets on /book", async () => {
    const analytics = await productionAnalytics("https://digitalface.app/book");

    analytics.startAppointmentBookingAttempt();
    window.history.replaceState(
      {},
      "",
      "/booking-confirmed?email=synthetic@example.invalid",
    );
    window.dataLayer = [];
    const originalPush = window.dataLayer.push.bind(window.dataLayer);
    const bookingStatesAtEmit: Array<string | null> = [];
    window.dataLayer.push = (...items: unknown[]) => {
      const entry = Array.from(items[0] as ArrayLike<unknown>);
      if (entry[0] === "event" && entry[1] === "appointment_booked")
        bookingStatesAtEmit.push(
          window.sessionStorage.getItem(
            "digitalface.analytics.appointment_booked.state",
          ),
        );
      return originalPush(...items);
    };
    for (let call = 0; call < 5; call++)
      analytics.trackAppointmentBookedOnce();

    // A fresh module models a page reload while sessionStorage survives.
    vi.resetModules();
    const reloadedAnalytics = await import("./analytics");
    reloadedAnalytics.trackAppointmentBookedOnce();

    // Returning to /book starts a new legitimate booking flow.
    window.history.replaceState({}, "", "/book");
    analytics.startAppointmentBookingAttempt();
    window.history.replaceState({}, "", "/booking-confirmed");
    for (let call = 0; call < 5; call++)
      analytics.trackAppointmentBookedOnce();

    const calls = window.dataLayer!.map((entry) =>
      Array.from(entry as ArrayLike<unknown>),
    );
    const bookingEvents = calls.filter(
      (entry) => entry[0] === "event" && entry[1] === "appointment_booked",
    );
    expect(bookingEvents).toHaveLength(2);
    expect(bookingStatesAtEmit).toEqual(["fired", "fired"]);
    for (const bookingEvent of bookingEvents)
      expect(bookingEvent[2]).toEqual({
        page_path: "/booking-confirmed",
        locale: "en",
        page_location: "https://digitalface.app/booking-confirmed",
      });
    expect(JSON.stringify(bookingEvents)).not.toContain(
      "synthetic@example.invalid",
    );
  });
  it("requires an explicit /book attempt before recording a conversion", async () => {
    const analytics = await productionAnalytics(
      "https://digitalface.app/booking-confirmed",
    );

    analytics.startAppointmentBookingAttempt();
    analytics.trackAppointmentBookedOnce();

    expect(window.dataLayer).toBeUndefined();
    expect(document.querySelector("#df-ga4")).toBeNull();
  });
  it("never records a booking conversion from another route", async () => {
    const analytics = await productionAnalytics();

    analytics.trackAppointmentBookedOnce();

    expect(window.dataLayer).toBeUndefined();
    expect(document.querySelector("#df-ga4")).toBeNull();
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
