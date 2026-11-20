import type { Request, Response } from "express";
import { afterEach, describe, expect, it, vi } from "vitest";
import { handleLeadIntake } from "./lead";

afterEach(() => {
  delete process.env.N8N_LEAD_WEBHOOK_URL;
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("website Lead reporting to Meta", () => {
  const eventId = "c0ffee12-abcd-4123-abcd-0123456789ab";
  const browserId = "fb.1.1760000000000.1234567890";
  const clickId = "fb.1.1760000000000.synthetic-Click";
  const webhook = "https://example.invalid/lead";
  const upstreamSuccess = () => globalThis.Response.json({ success: true });

  async function submit(
    overrides: {
      consent?: boolean;
      receipt?: globalThis.Response;
      headers?: Record<string, string>;
      vercelEnv?: string;
      metaUnavailable?: boolean;
    } = {},
  ) {
    vi.stubEnv("N8N_LEAD_WEBHOOK_URL", webhook);
    vi.stubEnv("VERCEL_ENV", overrides.vercelEnv ?? "production");
    vi.stubEnv("VITE_META_CAPI_ENABLED", "true");
    vi.stubEnv("VITE_META_PIXEL_ID", "100000000000001");
    vi.stubEnv("META_CAPI_ACCESS_TOKEN", "synthetic-access-token");
    vi.stubEnv("META_CAPI_TEST_EVENT_CODE", "TEST123");
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});

    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async (url) => {
      if (url === webhook) return overrides.receipt ?? upstreamSuccess();
      if (overrides.metaUnavailable) throw new Error("Synthetic network error");
      return globalThis.Response.json({ events_received: 1 });
    });
    vi.stubGlobal("fetch", fetchMock);
    const headerValues = {
      origin: "https://digitalface.app",
      cookie: "_fbp=" + browserId + "; _fbc=" + clickId,
      "user-agent": "Synthetic browser",
      ...overrides.headers,
    };
    const req = {
      get: (header: string) => headerValues[header],
      body: {
        name: "Synthetic Tester",
        business: "Synthetic Practice",
        email: "synthetic@example.invalid",
        phone: "+13055551234",
        country: "US",
        primaryGoal: "more_leads",
        message: "Synthetic private message",
        locale: "es",
        formSource: "digitalface_website_contact",
        pageSource: "contact",
        currentPageUrl: "https://digitalface.app/es/contact?private=synthetic",
        metaConversion: { consent: overrides.consent ?? true, eventId },
      },
    } as unknown as Request;
    const res = {} as Response;
    res.status = vi.fn(() => res);
    res.json = vi.fn(() => res);
    await handleLeadIntake(req, res, vi.fn());
    return { fetchMock, res };
  }

  it("sends a minimal event after a positive intake receipt and returns the same event ID", async () => {
    const { fetchMock, res } = await submit();
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [[intakeUrl, intake], [metaUrl, meta]] = fetchMock.mock.calls;
    expect(intakeUrl).toBe(webhook);
    expect(JSON.parse(String(intake.body))).not.toHaveProperty(
      "metaConversion",
    );
    expect(metaUrl).toBe(
      "https://graph.facebook.com/v25.0/100000000000001/events",
    );
    const body = meta.body as URLSearchParams;
    expect(body.get("access_token")).toBe("synthetic-access-token");
    expect(body.get("test_event_code")).toBe("TEST123");
    expect(JSON.parse(body.get("data"))).toEqual([
      {
        event_name: "Lead",
        event_time: expect.any(Number),
        event_id: eventId,
        action_source: "website",
        event_source_url: "https://digitalface.app/es/contact",
        user_data: {
          client_user_agent: "Synthetic browser",
          fbp: browserId,
          fbc: clickId,
        },
      },
    ]);
    expect(res.json).toHaveBeenCalledWith({ ok: true, metaEventId: eventId });
  });

  it.each([
    { consent: false },
    { vercelEnv: "preview" },
    { headers: { origin: "https://other.example" } },
    { headers: { dnt: "1" } },
    { headers: { "sec-gpc": "1" } },
    { headers: { cookie: "_fbp=malformed" } },
    { headers: { "user-agent": "" } },
  ])(
    "preserves ordinary lead success without an ineligible Meta event (%j)",
    async (options) => {
      const { fetchMock, res } = await submit(options);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({ ok: true });
    },
  );

  it("keeps the original success contract for a generic upstream 2xx", async () => {
    const { fetchMock, res } = await submit({
      receipt: globalThis.Response.json({ ok: true }),
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ ok: true });
  });

  it("emits no event when the lead webhook fails", async () => {
    const { fetchMock, res } = await submit({
      receipt: globalThis.Response.json({ success: false }, { status: 502 }),
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(502);
  });

  it("returns lead success when Meta is unavailable", async () => {
    const { fetchMock, res } = await submit({ metaUnavailable: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(res.json).toHaveBeenCalledWith({ ok: true, metaEventId: eventId });
  });
});

describe("handleLeadIntake phone normalization", () => {
  it("forwards only the normalized E.164 value to the existing webhook flow", async () => {
    process.env.N8N_LEAD_WEBHOOK_URL = "https://example.invalid/lead";
    const upstream = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", upstream);

    const request = {
      body: {
        name: "Synthetic Tester",
        business: "Synthetic Practice",
        email: "synthetic@example.invalid",
        phone: "+1 (305) 555-1234",
        country: "US",
        countryName: "United States",
        website: "",
        primaryGoal: "more_leads",
        primaryGoalLabel: "Get More Leads",
        message: "",
        selectedServices: [],
        locale: "en",
        formSource: "digitalface_website_contact",
        pageSource: "contact",
        currentPageUrl: "https://example.invalid/contact",
        pageRoute: "/contact",
        referrer: "",
        utmSource: "",
        utmMedium: "",
        utmCampaign: "",
        utmContent: "",
        utmTerm: "",
        submissionTimestamp: "2026-09-08T12:00:00.000Z",
      },
    } as Request;
    const response = {} as Response;
    response.status = vi.fn(() => response);
    response.json = vi.fn(() => response);

    await handleLeadIntake(request, response, vi.fn());

    const upstreamRequest = upstream.mock.calls[0]?.[1] as RequestInit;
    const forwarded = JSON.parse(String(upstreamRequest.body));
    expect(forwarded.phone).toBe("+13055551234");
    expect(response.status).toHaveBeenCalledWith(200);
  });
});
