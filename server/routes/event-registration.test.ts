import type { Request, Response } from "express";
import { afterEach, describe, expect, it, vi } from "vitest";
import { handleEventRegistration } from "./event-registration";

const participant = {
  name: "Synthetic Participant",
  business: "Synthetic Event Business",
  role: "Propietario/socio",
  businessActivity: "Synthetic business activity",
  phone: "+1 (305) 555-0123",
  instagram: "@synthetic.example",
  email: "",
  need: "crm",
  participationConsent: true,
  marketingConsent: false,
  website: "",
};
let requestNumber = 0;
async function invoke(
  body: unknown = participant,
  origin = "https://example.invalid",
  ip?: string,
) {
  const request = {
    body,
    ip: ip || `synthetic-${++requestNumber}`,
    get: (key: string) => (key === "origin" ? origin : "example.invalid"),
  } as Request;
  const response = { setHeader: vi.fn() } as unknown as Response;
  response.status = vi.fn(() => response);
  response.json = vi.fn(() => response);
  await handleEventRegistration(request, response, vi.fn());
  return response;
}
function configure(
  receipt: unknown = {
    ok: true,
    persisted: true,
    registrationId: "synthetic_123",
    duplicate: false,
  },
  ok = true,
) {
  vi.stubEnv(
    "EVENT_REGISTRATION_WEBHOOK_URL",
    "https://receiver.example.invalid/event",
  );
  const upstream = vi.fn().mockResolvedValue({ ok, json: async () => receipt });
  vi.stubGlobal("fetch", upstream);
  return upstream;
}
afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("event registration integrity", () => {
  it.each([
    { ...participant, participationConsent: false },
    { ...participant, phone: "3001234567" },
    { ...participant, prize: 6 },
    { ...participant, receivedAt: "forged" },
    { ...participant, website: "bot-filled-field" },
    { ...participant, need: "unknown" },
    { ...participant, role: undefined },
    { ...participant, role: "" },
    { ...participant, role: "not_a_role" },
    { ...participant, role: ["Decisor", "Otro"] },
    { ...participant, businessActivity: undefined },
    { ...participant, businessActivity: "  " },
    { ...participant, businessActivity: "x".repeat(501) },
    { ...participant, marketingConsent: true },
  ])(
    "rejects invalid participation, bot fields and forged authority fields",
    async (body) => {
      const fetch = configure();
      expect((await invoke(body)).status).toHaveBeenCalledWith(400);
      expect(fetch).not.toHaveBeenCalled();
    },
  );
  it("keeps optional email optional and commercial consent false; server stamps event identity", async () => {
    const upstream = configure();
    const response = await invoke();
    const forwarded = JSON.parse(upstream.mock.calls[0][1].body);
    expect(forwarded).toMatchObject({
      phone: "+13055550123",
      email: "",
      marketingConsent: false,
      participationConsent: true,
      role: "Propietario/socio",
      businessActivity: "Synthetic business activity",
      instagram: "synthetic.example",
      source: "labs_summit_2026",
      campaign: "la_jugada_del_crecimiento",
      resultStatus: "pending_staff_validation",
    });
    expect(forwarded.receivedAt).toMatch(/^20\d\d-/);
    expect(forwarded.personKey).toMatch(/^[a-f0-9]{64}$/);
    expect(forwarded.businessKey).toMatch(/^[a-f0-9]{64}$/);
    expect(forwarded).not.toHaveProperty("prize");
    expect(forwarded).not.toHaveProperty("website");
    expect(response.json).toHaveBeenCalledWith({ ok: true, duplicate: false });
  });
  it("forwards the new fields with trimmed activity and defaults absent marketing consent to false", async () => {
    const upstream = configure();
    const { marketingConsent: _omitted, ...withoutMarketingConsent } =
      participant;
    const response = await invoke({
      ...withoutMarketingConsent,
      role: "Marketing/ventas",
      businessActivity: "  Synthetic retail activity  ",
    });
    expect(response.status).toHaveBeenCalledWith(200);
    expect(JSON.parse(upstream.mock.calls[0][1].body)).toMatchObject({
      role: "Marketing/ventas",
      businessActivity: "Synthetic retail activity",
      marketingConsent: false,
    });
  });
  it("keeps person and business keys stable on retries and cosmetic company-name changes", async () => {
    const upstream = configure();
    await invoke();
    await invoke({ ...participant, business: " SYNTHETIC  event business! " });
    const a = JSON.parse(upstream.mock.calls[0][1].body);
    const b = JSON.parse(upstream.mock.calls[1][1].body);
    expect(a.personKey).toBe(b.personKey);
    expect(a.businessKey).toBe(b.businessKey);
  });
  it("returns an existing registration receipt without assigning another attempt", async () => {
    configure({
      ok: true,
      persisted: true,
      registrationId: "synthetic_123",
      duplicate: true,
    });
    expect((await invoke()).json).toHaveBeenCalledWith({
      ok: true,
      duplicate: true,
    });
  });
  it.each([
    { ok: true },
    { ok: true, persisted: false },
    { ok: true, persisted: true, registrationId: "synthetic_123" },
  ])(
    "never treats a generic webhook 200 as proof of saved registration",
    async (receipt) => {
      configure(receipt);
      expect((await invoke()).status).toHaveBeenCalledWith(502);
    },
  );
  it("honestly returns unavailable without configuration and does not use the ordinary lead workflow", async () => {
    vi.stubEnv("EVENT_REGISTRATION_WEBHOOK_URL", "");
    vi.stubEnv("N8N_LEAD_WEBHOOK_URL", "https://ordinary.example.invalid/lead");
    const upstream = vi.fn();
    vi.stubGlobal("fetch", upstream);
    expect((await invoke()).status).toHaveBeenCalledWith(503);
    expect(upstream).not.toHaveBeenCalled();
  });
  it("rejects insecure configured receivers", async () => {
    configure();
    vi.stubEnv(
      "EVENT_REGISTRATION_WEBHOOK_URL",
      "http://receiver.example.invalid/event",
    );
    expect((await invoke()).status).toHaveBeenCalledWith(503);
  });
  it("reports upstream failures without disclosing participant or receiver data", async () => {
    configure({}, false);
    const response = await invoke();
    expect(response.status).toHaveBeenCalledWith(502);
    expect(response.json).toHaveBeenCalledWith({
      ok: false,
      error: "upstream_failed",
    });
  });
  it("blocks cross-origin submissions", async () => {
    const upstream = configure();
    expect(
      (await invoke(participant, "https://other.example.invalid")).status,
    ).toHaveBeenCalledWith(403);
    expect(upstream).not.toHaveBeenCalled();
  });
  it("limits bursts without rejecting ordinary shared-event-network traffic immediately", async () => {
    configure();
    for (let i = 0; i < 20; i++)
      expect(
        (await invoke(participant, undefined, "burst-fixture")).status,
      ).toHaveBeenCalledWith(200);
    expect(
      (await invoke(participant, undefined, "burst-fixture")).status,
    ).toHaveBeenCalledWith(429);
  });
});
