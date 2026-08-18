import fs from "node:fs";
import path from "node:path";

const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
const siteUrl = (
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  "https://digitalfacemarketing.com"
).replace(/\/$/, "");

/**
 * Canonical (English) routes. Spanish lives at the same slugs under /es,
 * so every entry below is emitted twice with hreflang alternates.
 * Keep in sync with the routes declared in client/App.tsx.
 */
const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/features", changefreq: "monthly", priority: "0.8" },
  {
    path: "/industries/dental-practices",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/industries/aesthetic-medicine",
    changefreq: "monthly",
    priority: "0.8",
  },
  { path: "/industries/med-spas", changefreq: "monthly", priority: "0.8" },
  { path: "/pay-per-service", changefreq: "monthly", priority: "0.7" },
  { path: "/pricing", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const localePath = (locale, routePath) => {
  if (locale === "en") return routePath;
  return routePath === "/" ? "/es" : `/es${routePath}`;
};

const verifyAgainstApp = () => {
  const appPath = path.resolve(process.cwd(), "client", "App.tsx");
  if (!fs.existsSync(appPath)) return;

  const source = fs.readFileSync(appPath, "utf8");
  const missing = routes
    .filter(({ path: routePath }) => routePath !== "/")
    .filter(({ path: routePath }) => {
      const segment = routePath.replace(/^\//, "");
      return (
        !source.includes(`path="${segment}"`) &&
        !source.includes(`path="${routePath}"`)
      );
    });

  if (missing.length > 0) {
    console.warn(
      `Sitemap warning: these routes are not declared in App.tsx -> ${missing
        .map((route) => route.path)
        .join(", ")}`,
    );
  }
};

const buildUrlEntry = ({ path: routePath, changefreq, priority }, locale) => {
  const loc = `${siteUrl}${localePath(locale, routePath)}`;
  const alternates = [
    `    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${localePath("en", routePath)}" />`,
    `    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}${localePath("es", routePath)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${localePath("en", routePath)}" />`,
  ];

  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    ...alternates,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
};

verifyAgainstApp();

const urlEntries = ["en", "es"]
  .flatMap((locale) => routes.map((route) => buildUrlEntry(route, locale)))
  .join("\n");

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  urlEntries,
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(sitemapPath, xml, "utf8");
console.log(
  `Sitemap written to ${sitemapPath} (${routes.length * 2} URLs across 2 locales)`,
);
