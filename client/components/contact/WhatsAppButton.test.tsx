// @vitest-environment jsdom
import { act, useEffect } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { memoryStorage } from "@/test/storage";
import { Analytics } from "@/components/seo/Analytics";
import { trackEvent } from "@/lib/analytics";
import {
  buildWhatsAppUrl,
  getWhatsAppLabel,
  getWhatsAppMessage,
  WhatsAppButton,
  WHATSAPP_NUMBER,
  WHATSAPP_NUMBER_DISPLAY,
} from "./WhatsAppButton";

vi.mock("@/lib/analytics", () => ({ trackEvent: vi.fn() }));

let root: Root | null = null;

function whatsappButtons() {
  return document.querySelectorAll<HTMLAnchorElement>(
    'a[data-contact-channel="whatsapp"]',
  );
}

function RouteTarget({ to }: { to: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
}

function renderHarness(to: string) {
  root!.render(
    <MemoryRouter initialEntries={["/contact"]}>
      <LocaleProvider>
        <RouteTarget to={to} />
        <Analytics />
        <WhatsAppButton />
      </LocaleProvider>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  Object.defineProperty(window, "localStorage", {
    value: memoryStorage(),
    configurable: true,
  });
  Object.defineProperty(window, "sessionStorage", {
    value: memoryStorage(),
    configurable: true,
  });
  document.body.innerHTML = '<div id="test-root"></div>';
  root = createRoot(document.getElementById("test-root")!);
});

afterEach(async () => {
  if (root) await act(async () => root!.unmount());
  root = null;
  document.body.innerHTML = "";
  vi.unstubAllGlobals();
});

describe("WhatsApp contact button", () => {
  it("builds localized wa.me URLs with the DigitalFace number", () => {
    expect(WHATSAPP_NUMBER_DISPLAY).toBe("+57 300 506 1366");
    expect(WHATSAPP_NUMBER).toBe("573005061366");

    const english = new URL(buildWhatsAppUrl("en"));
    expect(`${english.origin}${english.pathname}`).toBe(
      "https://wa.me/573005061366",
    );
    expect(english.searchParams.get("text")).toBe(
      "Hi DigitalFace, I'm interested in learning more about your services.",
    );

    const spanish = new URL(buildWhatsAppUrl("es"));
    expect(`${spanish.origin}${spanish.pathname}`).toBe(
      "https://wa.me/573005061366",
    );
    expect(spanish.searchParams.get("text")).toBe(
      "Hola DigitalFace, estoy interesado en conocer más sobre sus servicios.",
    );
  });

  it("renders one English button on English routes", async () => {
    await act(async () => {
      renderHarness("/contact");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const [button] = Array.from(whatsappButtons());
    expect(whatsappButtons()).toHaveLength(1);
    expect(button.getAttribute("aria-label")).toBe(getWhatsAppLabel("en"));
    expect(new URL(button.href).searchParams.get("text")).toBe(
      getWhatsAppMessage("en"),
    );
  });

  it("updates the message and label after switching to Spanish", async () => {
    await act(async () => {
      renderHarness("/contact");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await act(async () => {
      renderHarness("/es/contact");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const [button] = Array.from(whatsappButtons());
    expect(whatsappButtons()).toHaveLength(1);
    expect(button.getAttribute("aria-label")).toBe(getWhatsAppLabel("es"));
    expect(new URL(button.href).searchParams.get("text")).toBe(
      getWhatsAppMessage("es"),
    );
  });

  it.each(["/contact", "/es/contact"])(
    "emits one WhatsApp contact signal for a click on the real button on %s",
    async (route) => {
      await act(async () => renderHarness(route));
      const [button] = Array.from(whatsappButtons());
      button.addEventListener("click", (event) => event.preventDefault(), {
        once: true,
      });
      await act(async () => {
        button.querySelector("svg")!.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            button: 0,
          }),
        );
      });
      expect(trackEvent).toHaveBeenCalledExactlyOnceWith("contact_click", {
        contact_method: "whatsapp",
      });
    },
  );
});
