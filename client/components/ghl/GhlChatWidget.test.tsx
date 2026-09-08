// @vitest-environment jsdom
import { act, useEffect } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { memoryStorage } from "@/test/storage";
import {
  cleanupGhlChatWidget,
  GhlChatWidget,
  getGhlChatWidgetId,
  LEADCONNECTOR_CHAT_LOADER_SRC,
  LEADCONNECTOR_CHAT_RESOURCES_URL,
  loadGhlChatWidget,
} from "./GhlChatWidget";

let root: Root | null = null;

function loaderScripts() {
  return document.querySelectorAll<HTMLScriptElement>(
    `script[src="${LEADCONNECTOR_CHAT_LOADER_SRC}"][data-widget-id]`,
  );
}

function chatWidgetElements() {
  return document.querySelectorAll("chat-widget, div[data-chat-widget]");
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
        <GhlChatWidget />
      </LocaleProvider>
    </MemoryRouter>,
  );
}

beforeEach(() => {
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
  cleanupGhlChatWidget();
  document.head.innerHTML = "";
  document.body.innerHTML = "";
  vi.unstubAllGlobals();
});

describe("GHL chat widget locale loading", () => {
  it("maps English and Spanish locales to their LeadConnector widget IDs", () => {
    expect(getGhlChatWidgetId("en")).toBe("6a90d792d45d62178fa73863");
    expect(getGhlChatWidgetId("es")).toBe("6a9f73133dadf9f23da1ceec");
  });

  it("injects one official LeadConnector loader script for a route locale", async () => {
    await act(async () => {
      renderHarness("/contact");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const [script] = Array.from(loaderScripts());
    expect(loaderScripts()).toHaveLength(1);
    expect(script.getAttribute("data-widget-id")).toBe(
      "6a90d792d45d62178fa73863",
    );
    expect(script.getAttribute("data-resources-url")).toBe(
      LEADCONNECTOR_CHAT_RESOURCES_URL,
    );
  });

  it("removes the previous widget before loading the Spanish widget", () => {
    loadGhlChatWidget(getGhlChatWidgetId("en"));
    document.body.appendChild(document.createElement("chat-widget"));

    loadGhlChatWidget(getGhlChatWidgetId("es"));

    const [script] = Array.from(loaderScripts());
    expect(loaderScripts()).toHaveLength(1);
    expect(script.getAttribute("data-widget-id")).toBe(
      "6a9f73133dadf9f23da1ceec",
    );
    expect(chatWidgetElements()).toHaveLength(0);
  });

  it("does not accumulate scripts or widget elements during a language switch", async () => {
    await act(async () => {
      renderHarness("/contact");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    document.body.appendChild(document.createElement("chat-widget"));

    await act(async () => {
      renderHarness("/es/contact");
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const [script] = Array.from(loaderScripts());
    expect(loaderScripts()).toHaveLength(1);
    expect(script.getAttribute("data-widget-id")).toBe(
      "6a9f73133dadf9f23da1ceec",
    );
    expect(chatWidgetElements()).toHaveLength(0);
  });
});
