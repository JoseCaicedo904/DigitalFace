import { createRequire } from "node:module";
import fs from "node:fs/promises";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const {
  chromium,
} = require("C:/Users/jose_/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const output = "seo-audit/homepage-closing-sections";
const origin = process.argv[2] || "http://127.0.0.1:8080";
const baseline = JSON.parse(
  await fs.readFile(`${output}/source-baseline.json`, "utf8"),
);
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

async function snapshot(page) {
  return page.evaluate(() =>
    [".event-brand-story", ".event-contact"].map((selector) => {
      const root = document.querySelector(selector);
      const properties = [
        "fontFamily",
        "fontSize",
        "fontWeight",
        "lineHeight",
        "letterSpacing",
        "color",
        "backgroundColor",
        "padding",
        "margin",
        "gap",
        "gridTemplateColumns",
        "display",
        "border",
        "borderRadius",
        "aspectRatio",
        "objectFit",
      ];
      return {
        selector,
        html: root.outerHTML,
        styles: [root, ...root.querySelectorAll("*")].map((element) => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName,
            styles: Object.fromEntries(properties.map((p) => [p, style[p]])),
            width: rect.width,
            height: rect.height,
          };
        }),
      };
    }),
  );
}

function compareSections(actual, expected, label, compareHtml = true) {
  assert.equal(actual.length, expected.length, label);
  actual.forEach((section, i) => {
    if (compareHtml)
      assert.equal(section.html, expected[i].html, `${label} markup`);
    assert.equal(
      section.styles.length,
      expected[i].styles.length,
      `${label} nodes`,
    );
    section.styles.forEach((element, j) => {
      const reference = expected[i].styles[j];
      assert.deepEqual(
        element.styles,
        reference.styles,
        `${label} ${section.selector} node ${j} computed styles`,
      );
      for (const dimension of ["width", "height"])
        assert.ok(
          Math.abs(element[dimension] - reference[dimension]) < 0.1,
          `${label} ${section.selector} node ${j} ${dimension}: ${element[dimension]} vs ${reference[dimension]}`,
        );
    });
  });
}

try {
  for (const { width, sections: original } of baseline) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      reducedMotion: "reduce",
    });
    // Isolate layout/interaction checks from third-party chat and analytics.
    // Live calendar loading is checked separately without creating a booking.
    await context.route("**/*", (route) =>
      [
        "127.0.0.1",
        "localhost",
        "fonts.googleapis.com",
        "fonts.gstatic.com",
      ].includes(new URL(route.request().url()).hostname)
        ? route.continue()
        : route.abort(),
    );
    const page = await context.newPage();
    const pageErrors = [];
    const localFailures = [];
    const consoleErrors = [];
    page.on("pageerror", (e) => pageErrors.push(e.message));
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        !message.text().includes("net::ERR_FAILED")
      )
        consoleErrors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.url().startsWith(origin) && response.status() >= 400)
        localFailures.push({ url: response.url(), status: response.status() });
    });
    await page.goto(`${origin}/es/labs-summit-2026`, {
      waitUntil: "networkidle",
    });
    await page.locator(".event-brand-story").waitFor({ state: "visible" });
    await page.evaluate(() => document.fonts.ready);
    const source = await snapshot(page);
    compareSections(source, original, `${width}px source`);

    // The original CTA still reveals the same lazy calendar at the same anchor.
    assert.equal(await page.locator("#conversemos iframe").count(), 0);
    await page.locator(".event-contact-actions a").nth(1).click();
    await page.locator("#conversemos iframe").waitFor({ state: "attached" });
    assert.match(
      await page.locator("#conversemos iframe").getAttribute("src"),
      /ELOONibg21k8gZnyNjJU/,
    );

    for (const path of ["/", "/es"]) {
      await page.goto(origin + path, { waitUntil: "networkidle" });
      await page.locator(".event-brand-story").waitFor({ state: "visible" });
      await page.evaluate(() => document.fonts.ready);
      const current = await snapshot(page);
      compareSections(current, source, `${width}px ${path}`, false);
      const state = await page.evaluate(() => {
        const closing = document.querySelector(".digitalface-closing-sections");
        const [story, contact] = closing.children;
        const video = closing.querySelector("video");
        const clipping = [...closing.querySelectorAll("h2,h3,p,a,video")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return (
              r.width > 0 &&
              (r.left < -1 ||
                r.right > innerWidth + 1 ||
                el.scrollWidth > el.clientWidth + 2)
            );
          })
          .map((el) => el.tagName + "." + el.className);
        return {
          previousSection: closing.previousElementSibling.id,
          consecutive:
            Math.abs(
              story.getBoundingClientRect().bottom -
                contact.getBoundingClientRect().top,
            ) < 1,
          children: closing.children.length,
          language: closing.lang,
          overflow: document.documentElement.scrollWidth > innerWidth,
          clipping,
          h1: document.querySelectorAll("h1").length,
          footers: document.querySelectorAll("footer").length,
          links: [...closing.querySelectorAll("a")].map((a) => ({
            href: a.getAttribute("href"),
            target: a.target,
            rel: a.rel,
          })),
          video: {
            preload: video.preload,
            controls: video.controls,
            muted: video.muted,
            inline: video.playsInline,
            poster: video.getAttribute("poster"),
          },
        };
      });
      assert.equal(state.previousSection, "custom-proposal");
      assert.equal(state.children, 2);
      assert.equal(state.consecutive, true);
      assert.equal(state.language, "es");
      assert.equal(state.overflow, false);
      assert.deepEqual(state.clipping, []);
      assert.equal(state.h1, 1);
      assert.equal(state.footers, 1);
      assert.equal(state.video.preload, "none");
      assert.ok(
        state.video.controls && state.video.muted && state.video.inline,
      );
      const sourceLinks = await page.evaluate(() =>
        [
          ...document.querySelectorAll(".event-brand-story a,.event-contact a"),
        ].map((a) => a.getAttribute("href")),
      );
      assert.equal(sourceLinks[0], "/es/about");
      assert.match(sourceLinks[1], /^https:\/\/wa.me\/573005061366\?text=/);
      assert.equal(sourceLinks[2], "/es/labs-summit-2026#conversemos");
      assert.deepEqual(sourceLinks.slice(3), [
        "/es",
        "mailto:sales@digitalface.app",
        "tel:+573005061366",
        "https://www.instagram.com/digitalfacecolombia/",
      ]);

      const playback = await page
        .locator(".event-brand-story video")
        .evaluate(async (video) => {
          await video.play();
          await new Promise((resolve) => setTimeout(resolve, 350));
          const result = {
            time: video.currentTime,
            width: video.videoWidth,
            height: video.videoHeight,
            error: video.error?.code || null,
            playing: !video.paused,
          };
          video.pause();
          video.currentTime = 0;
          return result;
        });
      assert.ok(playback.time > 0 && playback.playing && playback.width > 0);
      assert.equal(playback.error, null);

      // Exercise every link without sending messages or launching mail/phone apps.
      await page.evaluate(() => {
        window.__closingClicks = [];
        document
          .querySelector(".digitalface-closing-sections")
          .addEventListener(
            "click",
            (event) => {
              const a = event.target.closest("a");
              if (a) {
                event.preventDefault();
                window.__closingClicks.push(a.getAttribute("href"));
              }
            },
            true,
          );
      });
      const links = page.locator(".digitalface-closing-sections a");
      for (let i = 0; i < (await links.count()); i++)
        await links.nth(i).click();
      assert.deepEqual(
        await page.evaluate(() => window.__closingClicks),
        sourceLinks,
      );
      if (path === "/" && [390, 1440].includes(width)) {
        await page.addStyleTag({
          content: "header,.fixed{visibility:hidden!important}",
        });
        await page
          .locator(".digitalface-closing-sections")
          .screenshot({ path: `${output}/homepage-${width}.png` });
      }
      results.push({
        width,
        path,
        ...state,
        playback,
        sourceUnchanged: true,
        stylesMatch: true,
      });
    }
    assert.deepEqual(pageErrors, [], `Application errors at ${width}px`);
    assert.deepEqual(consoleErrors, [], `Console errors at ${width}px`);
    assert.deepEqual(localFailures, [], `Missing assets at ${width}px`);
    console.log(
      `PASS ${width}px: source preserved; both home locales match; video, all links, layout and console checked.`,
    );
    await context.close();
  }
  // Check the real homepage scheduling destination without completing a booking.
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.route("**/*", (route) =>
    ["127.0.0.1", "localhost"].includes(new URL(route.request().url()).hostname)
      ? route.continue()
      : route.abort(),
  );
  await page.goto(origin + "/");
  await page.locator(".event-contact-actions a").nth(1).click();
  await page.waitForURL("**/es/labs-summit-2026#conversemos");
  await page.getByRole("button", { name: "Ver horarios disponibles" }).click();
  await page.locator("#conversemos iframe").waitFor({ state: "attached" });
  assert.match(
    await page.locator("#conversemos iframe").getAttribute("src"),
    /ELOONibg21k8gZnyNjJU/,
  );
  await context.close();
  await fs.writeFile(
    `${output}/verification.json`,
    JSON.stringify(
      { origin, results, schedulingHandoff: true, externalSubmissions: false },
      null,
      2,
    ),
  );
  console.log(
    "PASS homepage scheduling handoff to original lazy event calendar.",
  );
} finally {
  await browser.close();
}
