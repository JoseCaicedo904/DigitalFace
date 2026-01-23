import fs from "node:fs";
import path from "node:path";

const appPath = path.resolve(process.cwd(), "client", "App.tsx");
const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
const siteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  "https://digitalfacemarketing.com";

const content = fs.readFileSync(appPath, "utf8");
const tokenRegex = /<\/Route>|<Route\b[^>]*?>/g;
const paths = new Set();
const stack = [];

const normalizePath = (value) => {
  if (!value) return "/";
  let next = value.startsWith("/") ? value : `/${value}`;
  if (next.length > 1 && next.endsWith("/")) {
    next = next.slice(0, -1);
  }
  return next;
};

const joinPaths = (base, segment) => {
  if (!segment) return base || "/";
  if (segment.startsWith("/")) return normalizePath(segment);
  if (!base || base === "/") return normalizePath(`/${segment}`);
  return normalizePath(`${base}/${segment}`);
};

const addPath = (value) => {
  if (!value || value.includes("*")) return;
  paths.add(normalizePath(value));
};

for (const match of content.matchAll(tokenRegex)) {
  const token = match[0];
  if (token.startsWith("</Route")) {
    stack.pop();
    continue;
  }

  const isSelfClosing = /\/>\s*$/.test(token);
  const isIndex = /\bindex\b/.test(token);
  const pathMatch = token.match(/\bpath\s*=\s*"([^"]+)"/);
  const rawPath = pathMatch ? pathMatch[1] : null;
  const parentPath = stack.length ? stack[stack.length - 1] : "";
  const resolvedPath = isIndex
    ? parentPath || "/"
    : rawPath
      ? joinPaths(parentPath, rawPath)
      : null;

  if (isIndex || (isSelfClosing && rawPath)) {
    addPath(resolvedPath);
  }

  if (!isSelfClosing) {
    if (rawPath && !rawPath.includes("*")) {
      stack.push(joinPaths(parentPath, rawPath));
    } else {
      stack.push(parentPath || "/");
    }
  }
}

const getMeta = (routePath) => {
  if (routePath === "/") {
    return { changefreq: "weekly", priority: "1.0" };
  }

  const priorityMap = {
    "/features": "0.8",
    "/pay-per-service": "0.7",
    "/pricing": "0.7",
    "/about": "0.7",
    "/contact": "0.6",
  };

  return {
    changefreq: "monthly",
    priority: priorityMap[routePath] || "0.6",
  };
};

const orderedPaths = [...paths].sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

const urlEntries = orderedPaths
  .map((routePath) => {
    const { changefreq, priority } = getMeta(routePath);
    const loc = `${siteUrl}${routePath}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlEntries,
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(sitemapPath, xml, "utf8");
console.log(`Sitemap written to ${sitemapPath}`);
