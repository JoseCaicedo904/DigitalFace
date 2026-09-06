import fs from "node:fs";
const { origin, routes } = JSON.parse(
  fs.readFileSync(new URL("../shared/site.json", import.meta.url), "utf8"),
);
const localize = (locale, route) =>
  locale === "en" ? route : route === "/" ? "/es" : "/es" + route;
const entries = routes
  .filter((r) => r.indexable)
  .flatMap((route) =>
    ["en", "es"].map((locale) =>
      [
        "  <url>",
        "    <loc>" + origin + localize(locale, route.path) + "</loc>",
        ...["en", "es", "x-default"].map(
          (lang) =>
            '    <xhtml:link rel="alternate" hreflang="' +
            lang +
            '" href="' +
            origin +
            localize(lang === "es" ? "es" : "en", route.path) +
            '" />',
        ),
        "  </url>",
      ].join("\n"),
    ),
  );
// Omit lastmod: the build date is not the date each page's content changed.
fs.writeFileSync(
  "public/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    entries.join("\n") +
    "\n</urlset>\n",
);
fs.writeFileSync(
  "public/robots.txt",
  "User-agent: *\nAllow: /\n\nSitemap: " + origin + "/sitemap.xml\n",
);
console.log("Generated sitemap: " + entries.length + " canonical URLs.");
