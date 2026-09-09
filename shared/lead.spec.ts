import { describe, expect, it } from "vitest";
import {
  LEAD_GOALS,
  isPlausibleEmail,
  normalizeInternationalPhone,
  normalizeNationalPhone,
  normalizeWebsite,
} from "./lead";

describe("normalizeNationalPhone", () => {
  it("combines selected country metadata with a valid national number", () => {
    expect(normalizeNationalPhone("300 506 1366", "CO")).toBe("+573005061366");
    expect(normalizeNationalPhone("305 555 1234", "US")).toBe("+13055551234");
    expect(normalizeNationalPhone("600 00 00 00", "ES")).toBe("+34600000000");
  });

  it("rejects malformed, incomplete and already-prefixed input", () => {
    for (const value of [
      "",
      "12345",
      "call me",
      "+57 300 506 1366",
      "0034 600 00 00 00",
    ]) {
      expect(normalizeNationalPhone(value, "CO"), value).toBeNull();
    }
  });
});

describe("normalizeInternationalPhone", () => {
  it("canonicalizes a valid international number to E.164", () => {
    expect(normalizeInternationalPhone("+1 (305) 555-1234")).toBe(
      "+13055551234",
    );
  });

  it("requires a valid international number", () => {
    for (const value of ["3055551234", "+1 305", "+57 abc 3005061366"]) {
      expect(normalizeInternationalPhone(value), value).toBeNull();
    }
  });
});

describe("isPlausibleEmail", () => {
  it("accepts ordinary addresses", () => {
    expect(isPlausibleEmail("sales@digitalfacemarketing.com")).toBe(true);
    expect(isPlausibleEmail("first.last+tag@sub.domain.co")).toBe(true);
  });

  it("rejects the common typos", () => {
    for (const value of [
      "",
      "name@",
      "@domain.com",
      "name@domain",
      "a b@c.com",
    ]) {
      expect(isPlausibleEmail(value), value).toBe(false);
    }
  });
});

describe("normalizeWebsite", () => {
  it("treats an empty value as absent rather than invalid", () => {
    expect(normalizeWebsite("")).toBe("");
    expect(normalizeWebsite("   ")).toBe("");
  });

  it("adds the scheme people leave out", () => {
    expect(normalizeWebsite("digitalfacemarketing.com")).toBe(
      "https://digitalfacemarketing.com/",
    );
    expect(normalizeWebsite("www.clinica.com.co")).toBe(
      "https://www.clinica.com.co/",
    );
  });

  it("keeps an explicit scheme", () => {
    expect(normalizeWebsite("http://example.com/path")).toBe(
      "http://example.com/path",
    );
  });

  it("rejects values that are not a host", () => {
    expect(normalizeWebsite("not a website")).toBeNull();
    expect(normalizeWebsite("localhost")).toBeNull();
  });
});

describe("lead goals", () => {
  it("stay business outcomes, never product or platform names", () => {
    const forbidden = [
      "ghl",
      "gohighlevel",
      "n8n",
      "webhook",
      "api",
      "chatbot",
      "integration",
    ];
    for (const goal of LEAD_GOALS) {
      for (const term of forbidden) {
        expect(goal.toLowerCase()).not.toContain(term);
      }
    }
  });
});
