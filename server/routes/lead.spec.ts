import type { Request, Response } from "express";
import { afterEach, describe, expect, it, vi } from "vitest";
import { handleLeadIntake } from "./lead";

afterEach(() => {
  delete process.env.N8N_LEAD_WEBHOOK_URL;
  vi.unstubAllGlobals();
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
