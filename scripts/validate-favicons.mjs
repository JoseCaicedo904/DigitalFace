import assert from "node:assert/strict";
import fs from "node:fs/promises";
import sharp from "sharp";
import { JSDOM } from "jsdom";

const declarations = [
  ["/favicon.ico", "16x16 32x32 48x48", null],
  ["/favicon-48x48.png", "48x48", "image/png"],
  ["/favicon-96x96.png", "96x96", "image/png"],
  ["/favicon-192x192.png", "192x192", "image/png"],
];
for (const [url] of declarations) {
  const source = await fs.readFile("public" + url);
  const built = await fs.readFile("dist/spa" + url);
  assert.deepEqual(built, source, url + ": build must copy the actual image");
  if (url.endsWith(".png")) {
    const size = Number(url.match(/-(\d+)x/)[1]);
    const meta = await sharp(built).metadata();
    assert.equal(meta.format, "png");
    assert.equal(meta.width, size);
    assert.equal(meta.height, size);
    assert.equal(meta.hasAlpha, true);
    await sharp(built).raw().toBuffer();
  } else {
    assert.equal(built.readUInt16LE(0), 0);
    assert.equal(built.readUInt16LE(2), 1);
    assert.equal(built.readUInt16LE(4), 3);
    for (const [index, size] of [16, 32, 48].entries()) {
      const entry = 6 + 16 * index;
      assert.equal(built[entry], size);
      assert.equal(built[entry + 1], size);
      const length = built.readUInt32LE(entry + 8);
      const offset = built.readUInt32LE(entry + 12);
      assert.ok(offset >= 54 && offset + length <= built.length);
      const image = built.subarray(offset, offset + length);
      const meta = await sharp(image).metadata();
      assert.equal(meta.format, "png");
      assert.equal(meta.width, size);
      assert.equal(meta.height, size);
      await sharp(image).raw().toBuffer();
    }
  }
}

const site = JSON.parse(await fs.readFile("shared/site.json", "utf8"));
const routes = site.routes.flatMap(({ path }) => [
  path,
  path === "/" ? "/es" : "/es" + path,
]);
for (const route of [...routes, "/404", "/es/404"]) {
  const file = route === "/" ? "index.html" : route.slice(1) + ".html";
  const dom = new JSDOM(await fs.readFile("dist/spa/" + file, "utf8"));
  const links = [
    ...dom.window.document.head.querySelectorAll('link[rel="icon"]'),
  ];
  assert.equal(links.length, declarations.length, route + ": global icons");
  assert.deepEqual(
    links.map((link) => [
      link.getAttribute("href"),
      link.getAttribute("sizes"),
      link.getAttribute("type"),
    ]),
    declarations,
    route + ": exact icon declarations in initial HTML",
  );
  dom.window.close();
}
console.log(
  "Validated 4 built favicon assets, 3 ICO images, and all 26 prerendered HTML documents.",
);
