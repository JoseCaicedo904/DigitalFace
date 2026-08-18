import { describe, expect, it } from "vitest";
import {
  localePath,
  prefersSpanishLanguage,
  readCookieValue,
  resolveLocale,
  resolveLocaleFromBrowser,
  stripLocaleFromPathname,
} from "./geo";

const CHROME_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

/** Every field explicit, so each test only states what it is actually varying. */
function decide(overrides: Partial<Parameters<typeof resolveLocale>[0]>) {
  return resolveLocale({
    pathname: "/pricing",
    country: null,
    acceptLanguage: "en-US,en;q=0.9",
    cookieLocale: null,
    queryLang: null,
    userAgent: CHROME_UA,
    ...overrides,
  });
}

describe("resolveLocale — country routing", () => {
  it.each(["CO", "MX", "ES", "AR", "PR", "co", "mx"])(
    "sends %s to Spanish",
    (country) => {
      const result = decide({ pathname: "/pricing", country });
      expect(result.locale).toBe("es");
      expect(result.shouldRedirect).toBe(true);
      expect(result.reason).toBe("geo-country");
    },
  );

  it.each(["US", "GB", "BR", "HT", "PT", "JM", "XX", "", null, undefined])(
    "keeps %s on English",
    (country) => {
      const result = decide({ pathname: "/pricing", country });
      expect(result.locale).toBe("en");
      expect(result.shouldRedirect).toBe(false);
    },
  );

  it("covers all 21 Spanish-speaking countries", () => {
    const codes = [
      "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "ES", "GQ", "GT",
      "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE",
    ];
    for (const country of codes) {
      expect(decide({ pathname: "/", country }).locale).toBe("es");
    }
  });
});

describe("resolveLocale — US Hispanic market", () => {
  it("sends a US visitor with a Spanish-first browser to Spanish", () => {
    const result = decide({
      pathname: "/pricing",
      country: "US",
      acceptLanguage: "es-MX,es;q=0.9",
    });
    expect(result.locale).toBe("es");
    expect(result.shouldRedirect).toBe(true);
    expect(result.reason).toBe("geo-language");
  });

  it("applies the same rule to Canada", () => {
    expect(
      decide({ country: "CA", acceptLanguage: "es-419,es;q=0.9" }).locale,
    ).toBe("es");
  });

  it("keeps a US visitor who merely lists Spanish second on English", () => {
    const result = decide({
      pathname: "/pricing",
      country: "US",
      acceptLanguage: "en-US,en;q=0.9,es;q=0.8",
    });
    expect(result.locale).toBe("en");
    expect(result.shouldRedirect).toBe(false);
  });

  it("does not apply the language rule outside US/CA", () => {
    expect(decide({ country: "GB", acceptLanguage: "es-ES,es;q=0.9" }).locale)
      .toBe("en");
  });
});

describe("resolveLocale — explicit signals outrank the geo guess", () => {
  it("honours a stored English preference from a Spanish-speaking country", () => {
    const result = decide({
      pathname: "/pricing",
      country: "CO",
      cookieLocale: "en",
    });
    expect(result.locale).toBe("en");
    expect(result.shouldRedirect).toBe(false);
    expect(result.reason).toBe("cookie");
  });

  it("honours a stored Spanish preference from the US", () => {
    const result = decide({ pathname: "/pricing", country: "US", cookieLocale: "es" });
    expect(result.locale).toBe("es");
    expect(result.shouldRedirect).toBe(true);
  });

  it("ignores a malformed cookie and falls through to geo", () => {
    const result = decide({ country: "CO", cookieLocale: "fr" });
    expect(result.locale).toBe("es");
    expect(result.reason).toBe("geo-country");
  });

  it("lets ?lang= override both cookie and country", () => {
    const result = decide({
      pathname: "/pricing",
      country: "CO",
      cookieLocale: "es",
      queryLang: "en",
    });
    expect(result.locale).toBe("en");
    expect(result.reason).toBe("query-override");
  });

  it("never bounces an explicit /es link back to English", () => {
    const result = decide({
      pathname: "/es/pricing",
      country: "US",
      cookieLocale: "en",
    });
    expect(result.locale).toBe("es");
    expect(result.shouldRedirect).toBe(false);
    expect(result.reason).toBe("already-localized");
  });
});

describe("resolveLocale — crawlers", () => {
  it.each([
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "facebookexternalhit/1.1",
    "Mozilla/5.0 (compatible; AhrefsBot/7.0)",
    "GPTBot/1.0",
    "ClaudeBot/1.0",
  ])("never redirects %s", (userAgent) => {
    const result = decide({ pathname: "/pricing", country: "CO", userAgent });
    expect(result.shouldRedirect).toBe(false);
    expect(result.reason).toBe("bot");
  });

  it("serves a crawler the Spanish page it asked for", () => {
    const result = decide({
      pathname: "/es/pricing",
      country: "US",
      userAgent: "Googlebot/2.1",
    });
    expect(result.locale).toBe("es");
    expect(result.shouldRedirect).toBe(false);
  });
});

describe("resolveLocale — idempotency", () => {
  it.each(["/es", "/es/pricing", "/es/industries/med-spas"])(
    "does not redirect %s again",
    (pathname) => {
      expect(decide({ pathname, country: "CO" }).shouldRedirect).toBe(false);
    },
  );

  it("maps the English root to /es, not /es/", () => {
    expect(decide({ pathname: "/", country: "CO" }).shouldRedirect).toBe(true);
    expect(localePath("es", "/")).toBe("/es");
  });
});

describe("localePath — redirect targets", () => {
  it.each([
    ["/", "/es"],
    ["/pricing", "/es/pricing"],
    ["/industries/med-spas", "/es/industries/med-spas"],
    ["/es/pricing", "/es/pricing"],
  ])("%s -> %s", (input, expected) => {
    expect(localePath("es", input)).toBe(expected);
  });

  it("round-trips back to English", () => {
    expect(localePath("en", "/es/pricing")).toBe("/pricing");
    expect(localePath("en", "/es")).toBe("/");
  });

  it("strips the locale prefix for canonical URLs", () => {
    expect(stripLocaleFromPathname("/es/about")).toBe("/about");
    expect(stripLocaleFromPathname("/about")).toBe("/about");
    expect(stripLocaleFromPathname("/es")).toBe("/");
  });

  it("does not mistake a slug that merely starts with es", () => {
    expect(stripLocaleFromPathname("/essentials")).toBe("/essentials");
    expect(localePath("es", "/essentials")).toBe("/es/essentials");
  });
});

describe("prefersSpanishLanguage — q-weight parsing", () => {
  it.each([
    ["es", true],
    ["es-MX,es;q=0.9,en;q=0.8", true],
    ["es-419,es;q=0.9", true],
    ["en-US,en;q=0.9,es;q=0.8", false],
    ["en", false],
    ["pt-BR,pt;q=0.9,es;q=0.8", false],
    ["es;q=0.4,en;q=0.9", false],
    ["*", false],
    ["", false],
    [null, false],
  ])("%s -> %s", (header, expected) => {
    expect(prefersSpanishLanguage(header as string | null)).toBe(expected);
  });

  it("ignores a zero-weight Spanish entry", () => {
    expect(prefersSpanishLanguage("es;q=0,en;q=0.5")).toBe(false);
  });
});

describe("readCookieValue", () => {
  it("reads the locale out of a crowded cookie header", () => {
    expect(readCookieValue("_ga=GA1.2.x; df_locale=es; other=1", "df_locale"))
      .toBe("es");
  });

  it("does not match a cookie whose name merely ends the same way", () => {
    expect(readCookieValue("my_df_locale=en", "df_locale")).toBeNull();
  });

  it("returns null for a missing cookie or absent header", () => {
    expect(readCookieValue("_ga=1", "df_locale")).toBeNull();
    expect(readCookieValue(null, "df_locale")).toBeNull();
  });
});

describe("resolveLocaleFromBrowser — dev and non-Vercel fallback", () => {
  it("redirects a Spanish-first browser", () => {
    const result = resolveLocaleFromBrowser({
      pathname: "/pricing",
      acceptLanguage: "es-CO,es,en;q=0.5",
      userAgent: CHROME_UA,
    });
    expect(result.locale).toBe("es");
    expect(result.shouldRedirect).toBe(true);
    expect(result.reason).toBe("browser-language");
  });

  it("leaves an English-first browser alone", () => {
    const result = resolveLocaleFromBrowser({
      pathname: "/pricing",
      acceptLanguage: "en-US,en;q=0.9",
      userAgent: CHROME_UA,
    });
    expect(result.shouldRedirect).toBe(false);
  });

  it("still honours the cookie and skips crawlers", () => {
    expect(
      resolveLocaleFromBrowser({
        pathname: "/pricing",
        acceptLanguage: "es-CO,es",
        cookieLocale: "en",
        userAgent: CHROME_UA,
      }).shouldRedirect,
    ).toBe(false);

    expect(
      resolveLocaleFromBrowser({
        pathname: "/pricing",
        acceptLanguage: "es-CO,es",
        userAgent: "Googlebot/2.1",
      }).reason,
    ).toBe("bot");
  });
});
