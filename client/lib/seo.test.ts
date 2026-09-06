import { afterEach, describe, expect, it, vi } from "vitest";
import { JSDOM } from "jsdom";
import { applyHead, buildHead, renderHead, serializeJsonLd } from "./seo";
import site from "@shared/site.json";
afterEach(() => vi.unstubAllGlobals());
describe("SEO navigation and static head", () => {
  it("keeps every translated route canonical and reciprocal", () => {
    for (const route of site.routes)
      for (const locale of ["en", "es"]) {
        const path =
          locale === "en"
            ? route.path
            : route.path === "/"
              ? "/es"
              : "/es" + route.path;
        const head = buildHead(
          path + (path === "/" ? "" : "/"),
          "A distinct page",
          "Its real description",
        );
        expect(head.canonical).toBe(site.origin + path);
        expect(head.links.filter((l) => l.rel === "alternate")).toHaveLength(3);
        expect(head.noindex).toBe(false);
      }
  });
  it("clears old schema and alternates on a 404 and recovers on a valid navigation", () => {
    const initial = buildHead("/es/pricing", "Planes", "Precios");
    const dom = new JSDOM(
      "<!doctype html><html><head>" +
        renderHead(initial, new Map()) +
        "</head><body></body></html>",
    );
    vi.stubGlobal("document", dom.window.document);
    applyHead(buildHead("/missing/private-value", "Missing", "Missing page"));
    expect(
      document.querySelector('meta[name="robots"]')?.getAttribute("content"),
    ).toContain("noindex");
    expect(
      document.querySelector("link[rel=canonical],link[hreflang],#ld-page"),
    ).toBeNull();
    applyHead(buildHead("/contact", "Contact", "Talk to DigitalFace"));
    applyHead(buildHead("/contact", "Contact", "Talk to DigitalFace"));
    expect(
      document.querySelector('meta[name="robots"]')?.getAttribute("content"),
    ).not.toContain("noindex");
    expect(document.querySelectorAll("link[rel=canonical]")).toHaveLength(1);
    expect(document.querySelectorAll("#ld-page")).toHaveLength(1);
    expect(document.documentElement.lang).toBe("en");
    dom.window.close();
  });
  it("does not allow JSON-LD to terminate a script", () => {
    const value = { text: "</script><script>alert(1)</script>" };
    const serialized = serializeJsonLd(value);
    expect(serialized).not.toContain("</script>");
    expect(JSON.parse(serialized)).toEqual(value);
  });
});
