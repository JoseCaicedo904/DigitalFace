// @vitest-environment jsdom
import { act } from "react";
import { memoryStorage } from "@/test/storage";
import { hydrateRoot, type Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { beforeAll, afterEach, describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import App from "./App";
let root: Root;
beforeAll(() => {
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  Object.defineProperty(window, "localStorage", {
    value: memoryStorage(),
    configurable: true,
  });
  Object.defineProperty(window, "sessionStorage", {
    value: memoryStorage(),
    configurable: true,
  });
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
  }));
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  );
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  );
  window.scrollTo = vi.fn();
});
afterEach(async () => {
  if (root) await act(async () => root.unmount());
  window.localStorage.clear();
});
describe("Generated HTML hydrates without changing the page contract", () => {
  it.each([
    "/",
    "/es",
    "/pricing",
    "/es/contact",
    "/pay-per-service",
    "/industries/paid-advertising",
    "/es/industries/paid-advertising",
    "/industries/dental-practices",
    "/es/industries/med-spas",
    "/es/industries/aesthetic-medicine",
    "/book",
    "/es/privacy",
  ])("hydrates %s", async (url) => {
    window.history.replaceState({}, "", url);
    const file = "dist/spa/" + (url === "/" ? "index" : url.slice(1)) + ".html";
    const html = fs.readFileSync(file, "utf8");
    const parsed = new DOMParser().parseFromString(html, "text/html");
    document.head.innerHTML = parsed.head.innerHTML;
    document.body.innerHTML = parsed.body.innerHTML;
    const heading = document.querySelector("h1")?.textContent;
    const errors: unknown[] = [];
    await act(async () => {
      root = hydrateRoot(
        document.getElementById("root")!,
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        { onRecoverableError: (error) => errors.push(error) },
      );
      await new Promise((resolve) => setTimeout(resolve, 100));
    });
    expect(errors).toEqual([]);
    expect(document.querySelector("h1")?.textContent).toBe(heading);
    expect(document.querySelectorAll("h1")).toHaveLength(1);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  });
});
