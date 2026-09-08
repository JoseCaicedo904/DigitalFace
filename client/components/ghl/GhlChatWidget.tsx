import { useEffect } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locale";

export const LEADCONNECTOR_CHAT_LOADER_SRC =
  "https://widgets.leadconnectorhq.com/loader.js";
export const LEADCONNECTOR_CHAT_RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

export const GHL_CHAT_WIDGET_IDS: Record<Locale, string> = {
  en: "6a90d792d45d62178fa73863",
  es: "6a9f73133dadf9f23da1ceec",
};

const MANAGED_SCRIPT_ATTRIBUTE = "data-df-ghl-chat-widget-loader";
const LOADER_SCRIPT_SELECTOR = [
  `script[${MANAGED_SCRIPT_ATTRIBUTE}]`,
  `script[src="${LEADCONNECTOR_CHAT_LOADER_SRC}"][data-widget-id]`,
].join(", ");
const CHAT_WIDGET_ELEMENT_SELECTOR = "chat-widget, div[data-chat-widget]";

let activeLoadId = 0;
let requestedWidgetId: string | null = null;

export function getGhlChatWidgetId(locale: Locale): string {
  return GHL_CHAT_WIDGET_IDS[locale];
}

export function cleanupGhlChatWidget() {
  if (typeof document === "undefined") return;
  requestedWidgetId = null;
  activeLoadId += 1;
  removeLeadConnectorChatDom();
}

function removeElements(selector: string) {
  document.querySelectorAll(selector).forEach((element) => element.remove());
}

function removeLeadConnectorChatDom() {
  removeElements(LOADER_SCRIPT_SELECTOR);
  removeElements(CHAT_WIDGET_ELEMENT_SELECTOR);
}

function keepOnlyLatestChatElement() {
  const elements = Array.from(
    document.querySelectorAll(CHAT_WIDGET_ELEMENT_SELECTOR),
  );
  elements.slice(0, -1).forEach((element) => element.remove());
}

function keepOnlyCurrentLoader(script: HTMLScriptElement) {
  document
    .querySelectorAll<HTMLScriptElement>(LOADER_SCRIPT_SELECTOR)
    .forEach((existing) => {
      if (existing !== script) existing.remove();
    });
}

function appendLeadConnectorLoader(widgetId: string, loadId: number) {
  const script = document.createElement("script");
  script.src = LEADCONNECTOR_CHAT_LOADER_SRC;
  script.setAttribute("data-resources-url", LEADCONNECTOR_CHAT_RESOURCES_URL);
  script.setAttribute("data-widget-id", widgetId);
  script.setAttribute(MANAGED_SCRIPT_ATTRIBUTE, "true");

  script.addEventListener(
    "load",
    () => {
      window.setTimeout(() => {
        if (requestedWidgetId !== widgetId || activeLoadId !== loadId) {
          reloadRequestedWidget();
          return;
        }

        keepOnlyCurrentLoader(script);
        keepOnlyLatestChatElement();
      }, 0);
    },
    { once: true },
  );

  document.body.appendChild(script);
}

function reloadRequestedWidget() {
  const widgetId = requestedWidgetId;
  removeLeadConnectorChatDom();
  if (!widgetId) return;

  const loadId = ++activeLoadId;
  appendLeadConnectorLoader(widgetId, loadId);
}

export function loadGhlChatWidget(widgetId: string): () => void {
  if (typeof document === "undefined") return () => undefined;

  requestedWidgetId = widgetId;
  const loadId = ++activeLoadId;
  removeLeadConnectorChatDom();
  appendLeadConnectorLoader(widgetId, loadId);

  return () => {
    if (requestedWidgetId !== widgetId || activeLoadId !== loadId) return;
    requestedWidgetId = null;
    activeLoadId += 1;
    removeLeadConnectorChatDom();
  };
}

export function GhlChatWidget() {
  const { locale } = useLocale();

  useEffect(() => loadGhlChatWidget(getGhlChatWidgetId(locale)), [locale]);

  return null;
}
