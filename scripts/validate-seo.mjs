import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

const site = JSON.parse(fs.readFileSync("shared/site.json", "utf8"));
const output = "dist/spa";
const localized = (locale, base) =>
  locale === "en" ? base : base === "/" ? "/es" : "/es" + base;
const all = site.routes.flatMap((route) =>
  ["en", "es"].map((locale) => ({
    ...route,
    locale,
    url: localized(locale, route.path),
  })),
);
const documents = new Map();
const records = [];
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};
const cleanText = (value) => value.replace(/\s+/g, " ").trim();
for (const route of all) {
  const file = path.join(
    output,
    route.url === "/" ? "index.html" : route.url.slice(1) + ".html",
  );
  assert.ok(fs.existsSync(file), "Missing generated route: " + route.url);
  const html = fs.readFileSync(file, "utf8");
  const dom = new JSDOM(html, { url: site.origin + route.url });
  const doc = dom.window.document;
  documents.set(route.url, doc);
  const find = (selector, attribute = "content") =>
    doc.querySelector(selector)?.getAttribute(attribute) || "";
  const title = cleanText(doc.title);
  const description = find('meta[name="description"]');
  const canonical = find('link[rel="canonical"]', "href");
  const h1s = [...doc.querySelectorAll("h1")].map((h) =>
    cleanText(h.textContent),
  );
  check(
    doc.querySelectorAll("title").length === 1 && title.length > 10,
    route.url + ": exactly one useful title required",
  );
  check(
    doc.querySelectorAll('meta[name="description"]').length === 1 &&
      description.length > 30,
    route.url + ": missing/duplicate description",
  );
  check(
    doc.querySelectorAll('link[rel="canonical"]').length === 1 &&
      canonical === site.origin + route.url,
    route.url + ": incorrect canonical",
  );
  check(
    h1s.length === 1 && h1s[0].length > 5,
    route.url + ": exactly one meaningful H1 required",
  );
  check(
    doc.querySelectorAll("main").length === 1,
    route.url + ": exactly one main landmark required",
  );
  check(
    doc.documentElement.lang === route.locale,
    route.url + ": wrong html language",
  );
  check(
    find('meta[name="robots"]').includes("noindex") === !route.indexable,
    route.url + ": wrong index state",
  );
  check(
    find('meta[property="og:url"]') === canonical,
    route.url + ": wrong social URL",
  );
  for (const [selector, expected] of [
    ['meta[property="og:title"]', title],
    ['meta[name="twitter:title"]', title],
    ['meta[property="og:description"]', description],
    ['meta[name="twitter:description"]', description],
    ['meta[property="og:type"]', "website"],
  ])
    check(
      find(selector) === expected,
      route.url + ": inconsistent " + selector,
    );
  for (const selector of [
    'meta[property="og:image"]',
    'meta[name="twitter:image"]',
  ]) {
    const image = find(selector);
    check(
      image.startsWith(site.origin + "/") &&
        fs.existsSync(
          path.join(output, decodeURIComponent(new URL(image).pathname)),
        ),
      route.url + ": missing social image",
    );
  }
  const alternates = Object.fromEntries(
    [...doc.querySelectorAll('link[rel="alternate"][hreflang]')].map((link) => [
      link.hreflang,
      link.href,
    ]),
  );
  check(
    Object.keys(alternates).length === 3,
    route.url + ": expected en/es/x-default alternates",
  );
  for (const lang of ["en", "es", "x-default"])
    check(
      alternates[lang] ===
        site.origin + localized(lang === "es" ? "es" : "en", route.path),
      route.url + ": incorrect hreflang " + lang,
    );
  const schemas = [
    ...doc.querySelectorAll('script[type="application/ld+json"]'),
  ].flatMap((script) => {
    const value = JSON.parse(script.textContent);
    return Array.isArray(value) ? value : value["@graph"] || [value];
  });
  check(
    schemas.some((schema) => schema["@type"] === "Organization"),
    route.url + ": missing company entity",
  );
  check(
    schemas.some((schema) => schema["@id"] === canonical + "#webpage"),
    route.url + ": missing page entity",
  );
  const schemaText = JSON.stringify(schemas);
  for (const type of ["Organization", "WebSite"])
    check(
      schemas.filter((s) => s["@type"] === type).length === 1,
      route.url + ": duplicate/missing " + type,
    );
  for (const schema of schemas.filter((s) => s["@type"] === "Organization")) {
    const logo = new URL(schema.logo.url);
    check(
      logo.origin === site.origin &&
        fs.existsSync(path.join(output, decodeURIComponent(logo.pathname))),
      route.url + ": missing organization logo",
    );
  }
  check(
    !/aggregateRating|foundingDate|numberOfEmployees/.test(schemaText),
    route.url + ": unsupported schema claim",
  );
  check(
    !schemaText.includes("https://digitalfacemarketing.com"),
    route.url + ": legacy schema host",
  );
  const bodyText = cleanText(doc.body.textContent);
  for (const faq of schemas.filter((s) => s["@type"] === "FAQPage"))
    for (const question of faq.mainEntity) {
      check(
        bodyText.includes(cleanText(question.name)) &&
          bodyText.includes(cleanText(question.acceptedAnswer.text)),
        route.url + ": FAQ schema is not visible in the document",
      );
    }
  const ids = [...doc.querySelectorAll("[id]")].map((el) => el.id);
  check(new Set(ids).size === ids.length, route.url + ": duplicate HTML IDs");
  const images = [...doc.querySelectorAll("img")].map((img) => {
    const src = img.getAttribute("src");
    check(img.hasAttribute("alt"), route.url + ": image missing alt: " + src);
    if (src?.startsWith("/"))
      check(
        fs.existsSync(path.join(output, decodeURIComponent(src))),
        route.url + ": missing image: " + src,
      );
    return {
      src,
      alt: img.getAttribute("alt"),
      loading: img.getAttribute("loading") || "eager",
      width: img.getAttribute("width"),
      height: img.getAttribute("height"),
      class: img.className,
    };
  });
  for (const input of doc.querySelectorAll("input, select, textarea")) {
    if (
      ["hidden", "submit", "button"].includes(input.getAttribute("type")) ||
      input.closest('[aria-hidden="true"]')
    )
      continue;
    check(
      input.labels?.length ||
        input.getAttribute("aria-label") ||
        input.getAttribute("aria-labelledby"),
      route.url + ": unlabeled form control " + input.id,
    );
  }
  check(
    !doc.querySelector('script[src*="googletagmanager"]'),
    route.url + ": unexpected static GA4 tag",
  );
  check(
    route.id === "book" || !doc.querySelector("iframe"),
    route.url + ": booking widget leaked onto marketing page",
  );
  const headings = [
    ...doc.querySelectorAll("main h1,main h2,main h3,main h4,main h5,main h6"),
  ].map((h) => ({
    level: Number(h.tagName.slice(1)),
    text: cleanText(h.textContent),
  }));
  const headingJumps = headings.filter(
    (h, i) => i > 0 && h.level > headings[i - 1].level + 1,
  );
  check(headingJumps.length === 0, route.url + ": skipped heading level");
  for (const media of doc.querySelectorAll(
    "video[src], video[poster], source[src]",
  )) {
    for (const attr of ["src", "poster"]) {
      const src = media.getAttribute(attr);
      if (src?.startsWith("/"))
        check(
          fs.existsSync(path.join(output, decodeURIComponent(src))),
          route.url + ": missing media " + src,
        );
    }
  }
  const preloads = [...doc.querySelectorAll('link[rel="preload"][as="image"]')];
  check(
    preloads.length === (route.preloadImage ? 1 : 0),
    route.url + ": unexpected image preload count",
  );
  for (const preload of preloads) {
    const src = preload.getAttribute("href");
    check(
      src === route.preloadImage && fs.existsSync(path.join(output, src)),
      route.url + ": invalid hero preload",
    );
    check(
      [...doc.querySelectorAll("img, video")].some(
        (el) =>
          el.getAttribute("src") === src || el.getAttribute("poster") === src,
      ),
      route.url + ": preload does not match rendered media",
    );
  }
  const links = [...doc.querySelectorAll("a[href]")].map((a) => ({
    href: a.getAttribute("href"),
    text:
      cleanText(a.textContent) ||
      a.getAttribute("aria-label") ||
      a.querySelector("img")?.alt ||
      "",
  }));
  records.push({
    ...route,
    title,
    description,
    h1: h1s[0],
    canonical,
    indexStatus: route.indexable ? "index, follow" : "noindex, follow",
    alternates,
    schema: schemas.map((s) => s["@type"]),
    headings,
    headingJumps,
    links,
    images,
    htmlBytes: Buffer.byteLength(html),
  });
}

for (const key of ["title", "description", "h1", "canonical"]) {
  const values = records.map((r) => r[key]);
  check(
    new Set(values).size === values.length,
    "Duplicate " + key + " across public routes",
  );
}
for (const record of records) {
  record.incoming = [];
  record.outgoing = [];
  for (const link of record.links) {
    const url = new URL(link.href, record.canonical);
    if (url.origin !== site.origin) continue;
    check(
      link.text.length > 0,
      record.url + ": unnamed internal link " + link.href,
    );
    const linkLocale =
      url.pathname === "/es" || url.pathname.startsWith("/es/") ? "es" : "en";
    if (
      linkLocale !== record.locale &&
      !["/sitemap.xml", "/robots.txt"].includes(url.pathname)
    )
      check(
        record.alternates[linkLocale] === url.origin + url.pathname,
        record.url +
          ": internal link switches language unexpectedly " +
          link.href,
      );
    if (["/sitemap.xml", "/robots.txt"].includes(url.pathname)) continue;
    const target = documents.get(url.pathname);
    check(Boolean(target), record.url + ": broken internal route " + link.href);
    if (target && url.hash)
      check(
        Boolean(target.getElementById(decodeURIComponent(url.hash.slice(1)))),
        record.url + ": missing anchor " + link.href,
      );
    if (target && url.pathname !== record.url)
      record.outgoing.push(url.pathname);
  }
  record.outgoing = [...new Set(record.outgoing)];
}
for (const record of records) {
  record.incoming = records
    .filter((from) => from.outgoing.includes(record.url))
    .map((from) => from.url);
  check(record.incoming.length > 0, record.url + ": orphaned page");
}
const xml = new JSDOM(
  fs.readFileSync(path.join(output, "sitemap.xml"), "utf8"),
  { contentType: "text/xml" },
).window.document;
const sitemap = [...xml.querySelectorAll("loc")].map(
  (node) => node.textContent,
);
assert.deepEqual(
  [...sitemap].sort(),
  records
    .filter((r) => r.indexable)
    .map((r) => r.canonical)
    .sort(),
  "Sitemap and indexable routes drifted",
);
check(new Set(sitemap).size === sitemap.length, "Duplicate sitemap URL");
const robots = fs.readFileSync(path.join(output, "robots.txt"), "utf8");
check(
  robots.includes("Sitemap: " + site.origin + "/sitemap.xml") &&
    !/^Disallow:\s*\/\s*$/m.test(robots),
  "Invalid robots.txt",
);
for (const errorFile of ["404.html", "es/404.html"]) {
  const error = new JSDOM(fs.readFileSync(path.join(output, errorFile), "utf8"))
    .window.document;
  check(
    error.querySelector('meta[name="robots"]')?.content.includes("noindex"),
    errorFile + ": error must be noindex",
  );
  check(
    !error.querySelector(
      'link[rel="canonical"], link[hreflang], script[type="application/ld+json"]',
    ),
    errorFile + ": error masquerades as a real page",
  );
}
fs.mkdirSync("seo-audit", { recursive: true });
fs.writeFileSync(
  "seo-audit/generated-route-audit.json",
  JSON.stringify(records, null, 2) + "\n",
);
if (failures.length)
  throw new Error("SEO validation failed:\n" + failures.join("\n"));
console.log(
  `SEO validation passed: ${records.length} routes; metadata, HTML, JSON-LD, sitemap, reciprocal languages, internal routes/anchors, form labels and image sources.`,
);
for (const record of records.filter((r) => r.headingJumps.length))
  console.log(
    "Heading review: " + record.url + " " + JSON.stringify(record.headingJumps),
  );
