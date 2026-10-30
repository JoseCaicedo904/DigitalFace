import { createRequire } from "node:module";
import fs from "node:fs/promises";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const {
  chromium,
} = require("C:/Users/jose_/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const { JSDOM } = require("jsdom");
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      reducedMotion: "reduce",
    });
    await context.route("**/*", (r) =>
      [
        "127.0.0.1",
        "localhost",
        "fonts.googleapis.com",
        "fonts.gstatic.com",
      ].includes(new URL(r.request().url()).hostname)
        ? r.continue()
        : r.abort(),
    );
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error" && !m.text().includes("net::ERR_FAILED"))
        errors.push(m.text());
    });
    for (const path of ["/", "/es", "/es/labs-summit-2026"]) {
      const errorStart = errors.length;
      const response = await page.goto("http://127.0.0.1:8093" + path, {
        waitUntil: "networkidle",
      });
      await page.locator(".event-brand-story").waitFor();
      const state = await page.evaluate(() => ({
        h1: document.querySelectorAll("h1").length,
        footers: document.querySelectorAll("footer").length,
        closing: document.querySelectorAll(".digitalface-closing-sections")
          .length,
        overflow: document.documentElement.scrollWidth > innerWidth,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        videoPreload: document.querySelector(".event-brand-story video")
          .preload,
      }));
      assert.equal(response.status(), 200);
      assert.equal(state.h1, 1);
      assert.equal(state.footers, 1);
      assert.equal(state.closing, path.includes("summit") ? 0 : 1);
      assert.equal(state.overflow, false);
      assert.equal(state.canonical, "https://digitalface.app" + path);
      assert.equal(state.videoPreload, "none");
      results.push({
        width,
        path,
        ...state,
        hydrationErrors: errors.length - errorStart,
      });
      console.log(JSON.stringify(results.at(-1)));
    }
    await context.close();
  }
  const site = JSON.parse(await fs.readFile("shared/site.json", "utf8"));
  for (const route of site.routes)
    for (const locale of route.locales || ["en", "es"]) {
      const path =
        locale === "en"
          ? route.path
          : route.path === "/"
            ? "/es"
            : "/es" + route.path;
      const html = await fs.readFile(
        "dist/spa/" + (path === "/" ? "index" : path.slice(1)) + ".html",
        "utf8",
      );
      const doc = new JSDOM(html).window.document;
      assert.equal(
        doc.querySelectorAll(".digitalface-closing-sections").length,
        route.id === "home" ? 1 : 0,
        `Unexpected insertion on ${path}`,
      );
    }
  await fs.writeFile(
    "seo-audit/homepage-closing-sections/production-smoke.json",
    JSON.stringify(
      { results, all29RoutesScoped: true, submissions: false },
      null,
      2,
    ),
  );
  console.log(
    "Production layout/scope checks complete; per-route hydration counts recorded.",
  );
} finally {
  await browser.close();
}
