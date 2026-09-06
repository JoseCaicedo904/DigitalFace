import express from "express";
import path from "node:path";
import site from "../shared/site.json";

/** Shared by the local production server and non-visual HTTP tests. */
export function staticSite(distPath: string) {
  const router = express.Router();
  const paths = new Set(
    site.routes.flatMap((route) => [
      route.path,
      route.path === "/" ? "/es" : "/es" + route.path,
    ]),
  );
  router.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    const clean =
      req.path
        .replace(/\/index\.html$/, "/")
        .replace(/\.html$/, "")
        .replace(/\/+$/, "") || "/";
    if (!paths.has(clean)) return next();
    if (req.path !== clean)
      return res.redirect(308, clean + req.url.slice(req.path.length));
    res.sendFile(
      path.join(
        distPath,
        clean === "/" ? "index.html" : clean.slice(1) + ".html",
      ),
    );
  });
  router.use(express.static(distPath, { index: false, redirect: false }));
  router.use((req, res) => {
    if (
      req.path.startsWith("/api") ||
      req.path.startsWith("/assets/") ||
      /\.[a-z0-9]+$/i.test(req.path)
    )
      return res.status(404).json({ error: "Not found" });
    res
      .status(404)
      .sendFile(
        path.join(
          distPath,
          req.path === "/es" || req.path.startsWith("/es/")
            ? "es/404.html"
            : "404.html",
        ),
      );
  });
  return router;
}
