import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { JSDOM } from "jsdom";

let dom: JSDOM;
beforeEach(() => vi.resetModules());
afterEach(() => {
  dom?.window.close();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

async function productionPixel(
  url = "https://digitalface.app/",
  referrer = "https://www.google.com/",
) {
  dom = new JSDOM("<!doctype html><html><head></head><body></body></html>", {
    url,
    referrer,
  });
  vi.stubGlobal("window", dom.window);
  vi.stubGlobal("document", dom.window.document);
  vi.stubEnv("PROD", true);
  vi.stubEnv("VITE_DEPLOY_ENV", "production");
  vi.stubEnv("VITE_GA4_MEASUREMENT_ID", "");
  return await import("./metaPixel");
}

function finishSdkLoad() {
  const calls = vi.fn();
  window.fbq!.callMethod = calls;
  document
    .querySelector("#df-meta-pixel")!
    .dispatchEvent(new dom.window.Event("load"));
  return calls;
}

describe("Meta pixel without external requests", () => {
  it("uses the selected pixel, disables automatic collection and loads once", async () => {
    const pixel = await productionPixel();
    pixel.trackMetaPageView("/");
    pixel.trackMetaPageView("/");
    expect(document.querySelectorAll("#df-meta-pixel")).toHaveLength(1);
    expect(
      (document.querySelector("#df-meta-pixel") as HTMLScriptElement).src,
    ).toBe("https://connect.facebook.net/en_US/fbevents.js");
    expect(window.fbq!.disablePushState).toBe(true);
    expect(window.fbq!.queue).toEqual([
      ["set", "autoConfig", false, "2450656048502915"],
      ["init", "2450656048502915"],
    ]);
    const calls = finishSdkLoad();
    expect(calls.mock.calls).toEqual([
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
    ]);
    pixel.trackMetaPageView("/");
    window.history.replaceState({}, "", "/es/contact?from=home");
    pixel.trackMetaPageView("/es/contact");
    pixel.trackMetaPageView("/es/contact");
    expect(calls.mock.calls).toEqual([
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
    ]);
  });

  it.each([
    "https://digitalface.app/contact?email=synthetic%40example.invalid",
    "https://digitalface.app/contact?phone=15555550123",
    "https://digitalface.app/contact?utm_content=synthetic%40example.invalid",
    "https://digitalface.app/contact#synthetic%40example.invalid",
    "https://digitalface.app/unknown/synthetic-private-value",
    "https://digitalface.app/es/booking-confirmed",
    "https://preview.vercel.app/",
    "https://www.digitalface.app/",
    "http://localhost:8080/",
  ])(
    "does not load or send from an unsafe or nonproduction URL: %s",
    async (url) => {
      const pixel = await productionPixel(url);
      pixel.trackMetaPageView(window.location.pathname);
      pixel.trackMetaAppointmentBooked();
      expect(document.querySelector("#df-meta-pixel")).toBeNull();
      expect(window.fbq).toBeUndefined();
    },
  );

  it.each(["preview", "local"])(
    "does not track a %s deployment on the real hostname",
    async (deployment) => {
      const pixel = await productionPixel();
      vi.stubEnv("VITE_DEPLOY_ENV", deployment);
      pixel.trackMetaPageView("/");
      expect(window.fbq).toBeUndefined();
    },
  );

  it("does not track a development build on the production hostname", async () => {
    const pixel = await productionPixel();
    vi.stubEnv("PROD", false);
    pixel.trackMetaPageView("/");
    expect(window.fbq).toBeUndefined();
  });

  it.each(["globalPrivacyControl", "doNotTrack"])(
    "honors the browser's %s signal",
    async (signal) => {
      const pixel = await productionPixel();
      Object.defineProperty(window.navigator, signal, {
        value: signal === "doNotTrack" ? "1" : true,
      });
      pixel.trackMetaPageView("/");
      expect(window.fbq).toBeUndefined();
    },
  );

  it("allows normal ad attribution but rejects a referrer with contact data", async () => {
    const pixel = await productionPixel(
      "https://digitalface.app/?fbclid=synthetic-click&utm_source=facebook&lang=en",
    );
    pixel.trackMetaPageView("/");
    expect(window.fbq).toBeDefined();
    const calls = finishSdkLoad();
    expect(calls).toHaveBeenCalledTimes(1);
    Object.defineProperty(document, "referrer", {
      value: "https://example.invalid/return?email=synthetic%40example.invalid",
    });
    window.history.replaceState({}, "", "/contact");
    pixel.trackMetaPageView("/contact");
    expect(calls).toHaveBeenCalledTimes(1);
  });

  it("waits for the SDK and never flushes an old event with a later unsafe URL", async () => {
    const pixel = await productionPixel();
    pixel.trackMetaPageView("/");
    window.history.replaceState(
      {},
      "",
      "/contact?email=synthetic%40example.invalid",
    );
    pixel.trackMetaPageView("/contact");
    const calls = finishSdkLoad();
    expect(calls).not.toHaveBeenCalled();
    window.history.replaceState({}, "", "/contact");
    pixel.trackMetaPageView("/contact");
    expect(calls.mock.calls).toEqual([
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
    ]);
    expect(JSON.stringify(window.fbq!.queue)).not.toContain("synthetic");
  });

  it("counts a return to a known route after an excluded route", async () => {
    const pixel = await productionPixel();
    pixel.trackMetaPageView("/");
    const calls = finishSdkLoad();
    window.history.replaceState({}, "", "/unknown");
    pixel.trackMetaPageView("/unknown");
    window.history.replaceState({}, "", "/");
    pixel.trackMetaPageView("/");
    expect(calls.mock.calls).toEqual([
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
    ]);
  });

  it.each(["queue", "script"])(
    "leaves a separately installed pixel %s alone",
    async (existing) => {
      const pixel = await productionPixel();
      const existingQueue = vi.fn();
      if (existing === "queue") window.fbq = existingQueue as never;
      else {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(script);
      }
      pixel.trackMetaPageView("/");
      expect(document.querySelector("#df-meta-pixel")).toBeNull();
      expect(existingQueue).not.toHaveBeenCalled();
    },
  );

  it("cannot interrupt navigation when the loaded SDK throws", async () => {
    const pixel = await productionPixel();
    pixel.trackMetaPageView("/");
    const calls = finishSdkLoad();
    calls.mockImplementation(() => {
      throw new Error("Synthetic SDK failure");
    });
    window.history.replaceState({}, "", "/contact");
    expect(() => pixel.trackMetaPageView("/contact")).not.toThrow();
  });
});

describe("Completed-booking integration", () => {
  it("sends Schedule only once per armed confirmation, independently of GA4", async () => {
    const pixel = await productionPixel("https://digitalface.app/book");
    const analytics = await import("./analytics");
    analytics.trackPageView("/book", "Book");
    const calls = finishSdkLoad();
    analytics.startAppointmentBookingAttempt();
    analytics.trackEvent("consultation_click");
    analytics.trackEvent("generate_lead");
    analytics.trackAppointmentBookedOnce();
    expect(
      calls.mock.calls.filter((args) => args[2] === "Schedule"),
    ).toHaveLength(0);

    window.history.replaceState({}, "", "/booking-confirmed");
    analytics.trackPageView("/booking-confirmed", "Confirmed");
    for (let attempt = 0; attempt < 5; attempt++)
      analytics.trackAppointmentBookedOnce();
    expect(
      window.sessionStorage.getItem(
        "digitalface.analytics.appointment_booked.state",
      ),
    ).toBe("fired");
    expect(calls.mock.calls.filter((args) => args[2] === "Schedule")).toEqual([
      ["trackSingle", pixel.META_PIXEL_ID, "Schedule"],
    ]);

    vi.resetModules();
    (await import("./analytics")).trackAppointmentBookedOnce();
    expect(
      calls.mock.calls.filter((args) => args[2] === "Schedule"),
    ).toHaveLength(1);

    window.history.replaceState({}, "", "/es/book");
    analytics.startAppointmentBookingAttempt();
    window.history.replaceState({}, "", "/booking-confirmed");
    analytics.trackAppointmentBookedOnce();
    expect(
      calls.mock.calls.filter((args) => args[2] === "Schedule"),
    ).toHaveLength(2);
    expect(window.dataLayer).toBeUndefined();
    expect(calls.mock.calls.every((args) => args.length === 3)).toBe(true);
  });

  it("does not count direct confirmation visits as bookings", async () => {
    await productionPixel("https://digitalface.app/booking-confirmed");
    const analytics = await import("./analytics");
    analytics.trackPageView("/booking-confirmed", "Confirmed");
    const calls = finishSdkLoad();
    analytics.trackAppointmentBookedOnce();
    expect(
      calls.mock.calls.filter((args) => args[2] === "Schedule"),
    ).toHaveLength(0);
  });

  it("retains a legitimate confirmation while the SDK downloads", async () => {
    const pixel = await productionPixel("https://digitalface.app/book");
    const analytics = await import("./analytics");
    analytics.trackPageView("/book", "Book");
    analytics.startAppointmentBookingAttempt();
    window.history.replaceState({}, "", "/booking-confirmed");
    analytics.trackAppointmentBookedOnce();
    const calls = finishSdkLoad();
    expect(calls.mock.calls).toEqual([
      ["trackSingle", pixel.META_PIXEL_ID, "PageView"],
      ["trackSingle", pixel.META_PIXEL_ID, "Schedule"],
    ]);
  });
});
