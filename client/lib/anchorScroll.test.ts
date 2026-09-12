// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { anchorIdFromHash, scrollToPageAnchor } from "./anchorScroll";

beforeEach(() => {
  document.body.innerHTML = '<section id="google-campaigns"></section>';
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn(() => ({ matches: false })),
  });
});

describe("page anchor scrolling", () => {
  it("decodes a URL hash into its DOM anchor", () => {
    expect(anchorIdFromHash("#campaign%2Dlanding%2Dpages")).toBe(
      "campaign-landing-pages",
    );
    expect(anchorIdFromHash("")).toBe(null);
  });

  it("smooth-scrolls an existing anchor", () => {
    const target = document.getElementById("google-campaigns")!;
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;

    expect(scrollToPageAnchor("google-campaigns")).toBe(true);
    expect(scrollIntoView).toHaveBeenCalledWith({
      block: "start",
      behavior: "smooth",
    });
  });

  it("uses instant scrolling when reduced motion is requested", () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
    } as MediaQueryList);
    const target = document.getElementById("google-campaigns")!;
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;

    scrollToPageAnchor("google-campaigns");

    expect(scrollIntoView).toHaveBeenCalledWith({
      block: "start",
      behavior: "auto",
    });
  });

  it("does nothing when the anchor is not rendered", () => {
    expect(scrollToPageAnchor("missing-service")).toBe(false);
  });
});
