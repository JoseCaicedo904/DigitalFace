// @vitest-environment jsdom
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { Simulate } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { EventRegistrationForm } from "./EventRegistrationForm";
import { trackEvent } from "@/lib/analytics";
vi.mock("@/lib/analytics", () => ({ trackEvent: vi.fn() }));
let root: Root;
beforeEach(() => {
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  vi.clearAllMocks();
  document.body.innerHTML = '<div id="test-root"></div>';
});
afterEach(async () => {
  if (root) await act(async () => root.unmount());
  vi.unstubAllGlobals();
});
async function prepare(fill = true) {
  await act(async () => {
    root = createRoot(document.getElementById("test-root")!);
    root.render(
      <MemoryRouter>
        <EventRegistrationForm />
      </MemoryRouter>,
    );
  });
  if (fill) {
    for (const [name, value] of Object.entries({
      name: "Synthetic Tester",
      business: "Synthetic Brand",
      role: "Propietario/socio",
      businessActivity: "Synthetic business activity",
      phone: "+13055550123",
      email: "synthetic@example.invalid",
      need: "crm",
      diceResult: "3",
    })) {
      (document.querySelector(`[name="${name}"]`) as HTMLInputElement).value =
        value;
    }
    await act(async () => {
      const code = document.querySelector<HTMLInputElement>(
        '[name="validationCode"]',
      )!;
      code.value = "DFLAB2026";
      Simulate.change(code);
    });
    (
      document.querySelector(
        '[name="participationConsent"]',
      ) as HTMLInputElement
    ).checked = true;
  }
}
async function submit() {
  await act(async () => {
    Simulate.submit(document.querySelector("form")!);
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

describe("event registration acknowledgments", () => {
  it("validates fields, focuses the first error and preserves only the required privacy checkbox", async () => {
    const request = vi.fn();
    vi.stubGlobal("fetch", request);
    await prepare(false);
    await submit();
    expect(request).not.toHaveBeenCalled();
    expect(
      document.querySelectorAll('[aria-invalid="true"]').length,
    ).toBeGreaterThan(3);
    expect(document.activeElement?.id).toBe("event-name");
    expect(document.querySelector('[name="marketingConsent"]')).toBeNull();
    expect(document.body.textContent).not.toContain("También quiero recibir");
    expect(document.querySelectorAll('input[type="checkbox"]')).toHaveLength(1);
    expect(
      document
        .querySelector('[name="participationConsent"]')
        ?.hasAttribute("required"),
    ).toBe(true);
    expect(document.querySelector('a[href="/es/privacy"]')).not.toBeNull();
    expect(
      document.querySelector('[name="phone"]')?.parentElement?.textContent,
    ).toContain("Tel o WhatsApp");
  });
  it.each(["role", "businessActivity", "diceResult", "email"])(
    "blocks submission when %s is missing and focuses its error",
    async (field) => {
      const request = vi.fn();
      vi.stubGlobal("fetch", request);
      await prepare();
      (document.querySelector(`[name="${field}"]`) as HTMLInputElement).value =
        "";
      await submit();
      expect(request).not.toHaveBeenCalled();
      expect(document.activeElement?.id).toBe(`event-${field}`);
      expect(document.querySelector(`#event-error-${field}`)).not.toBeNull();
    },
  );
  it("locks submission for an incorrect code and unlocks only for the exact event code", async () => {
    const request = vi.fn();
    vi.stubGlobal("fetch", request);
    await prepare(false);
    const button = document.querySelector<HTMLButtonElement>(
      'button[type="submit"]',
    )!;
    const code = document.querySelector<HTMLInputElement>(
      '[name="validationCode"]',
    )!;
    expect(button.disabled).toBe(true);
    await act(async () => {
      code.value = "dflab2026";
      Simulate.change(code);
      Simulate.blur(code);
    });
    expect(button.disabled).toBe(true);
    expect(
      document.querySelector("#event-error-validationCode"),
    ).not.toBeNull();
    await submit();
    expect(request).not.toHaveBeenCalled();
    await act(async () => {
      code.value = "DFLAB2026";
      Simulate.change(code);
    });
    expect(button.disabled).toBe(false);
    expect(document.querySelector("#event-error-validationCode")).toBeNull();
  });
  it("records a single event registration only after a successful acknowledged API response", async () => {
    const request = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, duplicate: false }),
    });
    vi.stubGlobal("fetch", request);
    await prepare();
    await submit();
    expect(JSON.parse(request.mock.calls[0][1].body)).toMatchObject({
      email: "synthetic@example.invalid",
      marketingConsent: false,
      participationConsent: true,
      role: "Propietario/socio",
      businessActivity: "Synthetic business activity",
      diceResult: 3,
      validationCode: "DFLAB2026",
    });
    expect(trackEvent).toHaveBeenCalledExactlyOnceWith(
      "event_registration_success",
      { page_source: "labs_summit_2026" },
    );
    expect(JSON.stringify(vi.mocked(trackEvent).mock.calls)).not.toContain(
      "Synthetic",
    );
    expect(document.querySelector('[role="status"]')?.textContent).toContain(
      "está registrado",
    );
  });
  it("does not recount a duplicate registration", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, duplicate: true }),
      }),
    );
    await prepare();
    await submit();
    expect(trackEvent).not.toHaveBeenCalled();
    expect(document.querySelector('[role="status"]')?.textContent).toContain(
      "ya está confirmado",
    );
  });
  it.each([
    { ok: false, json: async () => ({ ok: false, error: "not_configured" }) },
    { ok: true, json: async () => ({ ok: true }) },
    { ok: false, json: async () => ({ ok: false, error: "upstream_failed" }) },
  ])(
    "keeps data available and never claims success for unavailable or ambiguous responses",
    async (response) => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response));
      await prepare();
      await submit();
      expect(document.querySelector('[role="status"]')).toBeNull();
      expect(document.querySelector('[role="alert"]')).not.toBeNull();
      expect(
        (document.querySelector('[name="name"]') as HTMLInputElement).value,
      ).toBe("Synthetic Tester");
      expect(trackEvent).not.toHaveBeenCalled();
    },
  );
});
