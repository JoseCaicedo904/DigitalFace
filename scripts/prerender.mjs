import fs from "node:fs/promises";
import path from "node:path";
import { render } from "../dist/prerender/entry-server.mjs";
const { routes } = JSON.parse(await fs.readFile("shared/site.json", "utf8"));
const template = await fs.readFile("dist/spa/index.html", "utf8");
if (!template.includes("<!--seo-head-->"))
  throw new Error("SEO head marker missing");
const urls = routes.flatMap((route) => [
  route.path,
  route.path === "/" ? "/es" : "/es" + route.path,
]);
for (const url of [...urls, "/404", "/es/404"]) {
  const result = await render(url);
  const isError = !urls.includes(url);
  const html = template
    .replace(
      '<html lang="en">',
      '<html lang="' + result.locale + '" data-prerendered="' + !isError + '">',
    )
    .replace("<!--seo-head-->", result.head)
    .replace(
      '<div id="root"></div>',
      '<div id="root">' + result.body + "</div>",
    );
  const file = path.join(
    "dist/spa",
    url === "/" ? "index.html" : url.slice(1) + ".html",
  );
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
}
console.log(
  "Prerendered " +
    urls.length +
    " real route documents and 2 localized error documents.",
);
