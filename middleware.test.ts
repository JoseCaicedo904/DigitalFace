import { describe, expect, it } from "vitest";
import middleware from "./middleware";

const CHROME_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

function request(
  path: string,
  headers: Record<string, string | undefined> = {},
) {
  const merged: Record<string, string> = {
    "user-agent": CHROME_UA,
    "accept-language": "en-US,en;q=0.9",
  };
  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) delete merged[key];
    else merged[key] = value;
  }
  return new Request(`https://digitalfacemarketing.com${path}`, {
    headers: merged,
  });
}

describe("middleware — redirect response", () => {
  it("302s a Colombian visitor to the Spanish tree", () => {
    const response = middleware(
      request("/pricing", { "x-vercel-ip-country": "CO" }),
    );

    expect(response?.status).toBe(302);
    expect(response?.headers.get("Location")).toBe("/es/pricing");
  });

  it("never uses a permanent redirect", () => {
    const response = middleware(request("/", { "x-vercel-ip-country": "MX" }));
    expect(response?.status).not.toBe(301);
    expect(response?.status).toBe(302);
  });

  it("preserves UTM parameters so ad attribution survives", () => {
    const response = middleware(
      request("/pricing?utm_source=meta&utm_campaign=x", {
        "x-vercel-ip-country": "CO",
      }),
    );

    expect(response?.headers.get("Location")).toBe(
      "/es/pricing?utm_source=meta&utm_campaign=x",
    );
  });

  it("drops the one-shot ?lang= override from the settled URL", () => {
    const response = middleware(
      request("/pricing?lang=es&utm_source=meta", {
        "x-vercel-ip-country": "US",
      }),
    );

    expect(response?.headers.get("Location")).toBe(
      "/es/pricing?utm_source=meta",
    );
  });

  it("persists the decision in a cookie the edge can read next time", () => {
    const response = middleware(
      request("/pricing", { "x-vercel-ip-country": "AR" }),
    );
    const cookie = response?.headers.get("Set-Cookie") ?? "";

    expect(cookie).toContain("df_locale=es");
    expect(cookie).toContain("Path=/");
    expect(cookie).toContain("SameSite=Lax");
    expect(cookie).toContain("Secure");
  });

  it("forbids caching so one visitor's country is never served to another", () => {
    const response = middleware(
      request("/pricing", { "x-vercel-ip-country": "CO" }),
    );

    expect(response?.headers.get("Cache-Control")).toContain("no-store");
    expect(response?.headers.get("Vary")).toContain("Cookie");
    expect(response?.headers.get("Vary")).toContain("Accept-Language");
  });
});

describe("middleware — pass-through", () => {
  it("leaves a US visitor alone", () => {
    expect(
      middleware(request("/pricing", { "x-vercel-ip-country": "US" })),
    ).toBeUndefined();
  });

  it("leaves Brazil on English", () => {
    expect(
      middleware(request("/pricing", { "x-vercel-ip-country": "BR" })),
    ).toBeUndefined();
  });

  it("leaves a visitor already on /es alone", () => {
    expect(
      middleware(request("/es/pricing", { "x-vercel-ip-country": "CO" })),
    ).toBeUndefined();
  });

  it("honours an existing English cookie from Colombia", () => {
    expect(
      middleware(
        request("/pricing", {
          "x-vercel-ip-country": "CO",
          cookie: "_ga=GA1.2.x; df_locale=en",
        }),
      ),
    ).toBeUndefined();
  });

  it("never redirects Googlebot", () => {
    expect(
      middleware(
        request("/pricing", {
          "x-vercel-ip-country": "CO",
          "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)",
        }),
      ),
    ).toBeUndefined();
  });

  it("passes through when Vercel sends no geo header", () => {
    expect(middleware(request("/pricing"))).toBeUndefined();
  });
});

describe("middleware — paths that must never be touched", () => {
  it.each([
    "/api/ping",
    "/assets/index-a1b2c3.js",
    "/assets/index-a1b2c3.css",
    "/robots.txt",
    "/sitemap.xml",
    "/favicon.ico",
    "/images/hero.webp",
    "/videos/demo.mp4",
    "/_vercel/insights/script.js",
  ])("skips %s", (path) => {
    expect(
      middleware(request(path, { "x-vercel-ip-country": "CO" })),
    ).toBeUndefined();
  });
});

describe("middleware — idempotency", () => {
  it("settles after exactly one redirect", () => {
    const first = middleware(
      request("/pricing", { "x-vercel-ip-country": "CO" }),
    );
    const location = first?.headers.get("Location") as string;

    const second = middleware(
      request(location, {
        "x-vercel-ip-country": "CO",
        cookie: "df_locale=es",
      }),
    );

    expect(second).toBeUndefined();
  });
});
