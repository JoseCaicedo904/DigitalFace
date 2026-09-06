// @vitest-environment jsdom
import { act } from "react";
import { memoryStorage } from "@/test/storage";
import { createRoot, type Root } from "react-dom/client";
import { Simulate } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ServiceRequestProvider } from "@/components/request/ServiceRequestProvider";
import {
  REQUEST_STORAGE_KEY,
  serializeRequest,
} from "@/components/request/requestStorage";
import { trackEvent } from "@/lib/analytics";
import { LeadForm } from "./LeadForm";
vi.mock("@/lib/analytics", () => ({ trackEvent: vi.fn() }));
let root: Root;
beforeEach(() => {
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  vi.clearAllMocks();
  Object.defineProperty(window, "localStorage", {
    value: memoryStorage(),
    configurable: true,
  });
  Object.defineProperty(window, "sessionStorage", {
    value: memoryStorage(),
    configurable: true,
  });
  document.body.innerHTML = '<div id="test-root"></div>';
});
afterEach(async () => {
  if (root) await act(async () => root.unmount());
  vi.unstubAllGlobals();
});
async function prepare(withRequest = false) {
  if (withRequest)
    window.localStorage.setItem(
      REQUEST_STORAGE_KEY,
      serializeRequest(["meta-ads"]),
    );
  await act(async () => {
    root = createRoot(document.getElementById("test-root")!);
    root.render(
      <MemoryRouter initialEntries={["/contact"]}>
        <LocaleProvider>
          <ServiceRequestProvider>
            <LeadForm pageSource="contact" />
          </ServiceRequestProvider>
        </LocaleProvider>
      </MemoryRouter>,
    );
  });
  for (const [name, value] of Object.entries({
    name: "Synthetic Tester",
    business: "Synthetic Practice",
    email: "synthetic@example.invalid",
    phone: "+12025550123",
    country: "US",
    goal: "more_leads",
  })) {
    const input = document.querySelector<HTMLInputElement>(
      '[name="' + name + '"]',
    )!;
    await act(async () => {
      input.value = value;
      Simulate.change(input);
    });
  }
}
async function submit() {
  await act(async () => {
    Simulate.submit(document.querySelector("form")!);
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}
describe("Lead conversion confirmation", () => {
  it("emits one lead only after a confirmed successful request; never includes form values", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => ({ ok: true }) }),
    );
    await prepare(true);
    await submit();
    expect(trackEvent).toHaveBeenCalledExactlyOnceWith("generate_lead", {
      page_source: "contact",
      lead_type: "service_request",
      service_count: 1,
    });
    expect(window.localStorage.getItem(REQUEST_STORAGE_KEY)).toBeNull();
    expect(JSON.stringify(vi.mocked(trackEvent).mock.calls)).not.toContain(
      "Synthetic",
    );
  });
  it.each([
    { ok: false, json: async () => ({ ok: false }) },
    { ok: true, json: async () => ({ ok: false }) },
  ])("does not count an HTTP/application failure as a lead", async (result) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(result));
    await prepare();
    await submit();
    expect(trackEvent).not.toHaveBeenCalled();
    expect(document.querySelector("form")).not.toBeNull();
  });
  it("does not count a network failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Synthetic network failure")),
    );
    await prepare();
    await submit();
    expect(trackEvent).not.toHaveBeenCalled();
  });
});
