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
      phone: "+13055550123",
      need: "crm",
    })) {
      (document.querySelector(`[name="${name}"]`) as HTMLInputElement).value =
        value;
    }
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
  it("validates fields, focuses the first error and keeps marketing optional and unchecked", async () => {
    const request = vi.fn();
    vi.stubGlobal("fetch", request);
    await prepare(false);
    await submit();
    expect(request).not.toHaveBeenCalled();
    expect(
      document.querySelectorAll('[aria-invalid="true"]').length,
    ).toBeGreaterThan(3);
    expect(document.activeElement?.id).toBe("event-name");
    expect(
      (document.querySelector('[name="marketingConsent"]') as HTMLInputElement)
        .checked,
    ).toBe(false);
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
      email: "",
      marketingConsent: false,
      participationConsent: true,
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
