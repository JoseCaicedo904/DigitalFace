// Read-only public HTTP probes. Never calls forms, calendars or private APIs.
import fs from "node:fs";
import { createHash } from "node:crypto";
import { JSDOM } from "jsdom";

const site = JSON.parse(fs.readFileSync("shared/site.json", "utf8"));
const crawler = process.argv.includes("--crawler");
const routes = site.routes.flatMap((r) => [
  r.path,
  r.path === "/" ? "/es" : "/es" + r.path,
]);
const paths = [
  ...routes,
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/favicon-48x48.png",
  "/favicon-96x96.png",
  "/favicon-192x192.png",
  "/images/digitalface-post.png",
  "/seo-audit-missing-2026",
  "/es/seo-audit-missing-2026",
  "/pricing/",
  "/pricing.html",
  "/index.html",
  "/pricing?utm_source=seo_audit",
  "/es/pricing?lang=en",
  "/blog",
  "/services",
];
const urls = [
  ...paths.map((p) => site.origin + p),
  "http://digitalface.app/pricing",
  "https://www.digitalface.app/pricing",
];
const records = [];
for (let i = 0; i < urls.length; i += 4) {
  await Promise.all(
    urls.slice(i, i + 4).map(async (url) => {
      try {
        const response = await fetch(url, {
          redirect: "manual",
          headers: {
            "User-Agent": crawler
              ? "Googlebot"
              : "DigitalFace-SEO-Audit/2026 (read-only)",
            "Accept-Language": "en-US,en;q=0.9",
          },
          signal: AbortSignal.timeout(20000),
        });
        const bytes = Buffer.from(await response.arrayBuffer());
        const type = response.headers.get("content-type") || "";
        const record = {
          url,
          status: response.status,
          contentType: type,
          location: response.headers.get("location"),
          robotsHeader: response.headers.get("x-robots-tag"),
          bytes: bytes.length,
        };
        if (
          (type.includes("text/html") && response.status === 200) ||
          (response.status === 404 && type.includes("text/html"))
        ) {
          const dom = new JSDOM(bytes.toString(), { url });
          const doc = dom.window.document;
          const get = (selector, attr = "content") =>
            doc.querySelector(selector)?.getAttribute(attr) || null;
          Object.assign(record, {
            title: doc.title,
            description: get('meta[name="description"]'),
            lang: doc.documentElement.lang,
            canonical: get('link[rel="canonical"]', "href"),
            robots: get('meta[name="robots"]'),
            h1: [...doc.querySelectorAll("h1")].map((h) =>
              h.textContent.trim(),
            ),
            alternates: [...doc.querySelectorAll("link[hreflang]")].map(
              (l) => ({ lang: l.hreflang, href: l.href }),
            ),
            schemaCount: doc.querySelectorAll(
              'script[type="application/ld+json"]',
            ).length,
            verificationPresent: Boolean(
              doc.querySelector('meta[name="google-site-verification"]'),
            ),
          });
          dom.window.close();
        }
        if (type.includes("image"))
          record.sha256 = createHash("sha256").update(bytes).digest("hex");
        if (url.endsWith("robots.txt")) record.rules = bytes.toString();
        if (url.endsWith("sitemap.xml")) {
          const dom = new JSDOM(bytes.toString(), { contentType: "text/xml" });
          record.urls = [...dom.window.document.querySelectorAll("loc")].map(
            (n) => n.textContent,
          );
          dom.window.close();
        }
        records.push(record);
      } catch (error) {
        records.push({ url, error: error.message });
      }
    }),
  );
}
records.sort((a, b) => a.url.localeCompare(b.url));
fs.writeFileSync(
  `seo-audit/live-http-${crawler ? "crawler-" : ""}2026-09-08.json`,
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      method: `Public GET; no JavaScript execution; ${crawler ? "Googlebot User-Agent diagnostic, not a real Google crawl" : "ordinary English visitor headers"}`,
      records,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify(
    records.map(({ url, status, location, error, canonical, h1 }) => ({
      url,
      status,
      location,
      error,
      canonical,
      h1,
    })),
    null,
    2,
  ),
);
