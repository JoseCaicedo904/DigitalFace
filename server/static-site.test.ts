import express from "express";
import path from "node:path";
import type { Server } from "node:http";
import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { staticSite } from "./static-site";
import site from "../shared/site.json";
let server: Server;
let origin: string;
beforeAll(async () => {
  const app = express();
  app.use(staticSite(path.resolve("dist/spa")));
  await new Promise<void>((resolve) => {
    server = app.listen(0, "127.0.0.1", () => resolve());
  });
  const address = server.address();
  origin =
    "http://127.0.0.1:" +
    (typeof address === "object" && address ? address.port : "");
});
afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server.close((err) => (err ? reject(err) : resolve())),
  );
});
describe("Generated production HTTP documents", () => {
  it("serves the actual localized HTML on every direct route", async () => {
    for (const route of site.routes)
      for (const lang of ["en", "es"]) {
        const url =
          lang === "en"
            ? route.path
            : route.path === "/"
              ? "/es"
              : "/es" + route.path;
        const response = await fetch(origin + url);
        expect(response.status, url).toBe(200);
        const html = await response.text();
        expect(html).toContain('href="' + site.origin + url + '"');
        expect(html).toContain('<html lang="' + lang + '"');
        expect(html).toMatch(/<h1[ >]/);
      }
  });
  it("returns 404 for unknown pages and assets without homepage canonical signals", async () => {
    for (const url of [
      "/not-a-page",
      "/es/not-a-page",
      "/assets/not-a-file.js",
      "/api/missing",
    ]) {
      const response = await fetch(origin + url);
      expect(response.status, url).toBe(404);
      const html = await response.text();
      expect(html).not.toContain('rel="canonical"');
      if (!url.includes("/assets/") && !url.includes("/api/"))
        expect(html).toContain("noindex, follow");
    }
  });
  it("normalizes trailing slashes and HTML aliases once while retaining campaign parameters", async () => {
    for (const url of ["/pricing/", "/pricing.html"]) {
      const response = await fetch(origin + url + "?utm_source=synthetic", {
        redirect: "manual",
      });
      expect(response.status).toBe(308);
      expect(response.headers.get("location")).toBe(
        "/pricing?utm_source=synthetic",
      );
      expect(
        (
          await fetch(origin + response.headers.get("location"), {
            redirect: "manual",
          })
        ).status,
      ).toBe(200);
    }
  });
  it("serves XML and robots as files", async () => {
    const xml = await fetch(origin + "/sitemap.xml");
    expect(xml.headers.get("content-type")).toContain("xml");
    expect((await xml.text()).match(/<loc>/g)).toHaveLength(24);
    expect(await (await fetch(origin + "/robots.txt")).text()).toContain(
      "Sitemap: https://digitalface.app/sitemap.xml",
    );
  });
});
