import { describe, expect, it } from "vitest";
import {
  LEAD_GOALS,
  isPlausibleEmail,
  isPlausiblePhone,
  normalizeWebsite,
} from "./lead";

describe("isPlausiblePhone", () => {
  it("accepts the international formats real prospects type", () => {
    for (const value of [
      "+57 320 123 4567",
      "+1 (305) 555-0142",
      "3201234567",
      "+34 600 00 00 00",
      "+52 55 1234 5678",
      "305.555.0142",
    ]) {
      expect(isPlausiblePhone(value), value).toBe(true);
    }
  });

  it("rejects values that cannot be a phone number", () => {
    for (const value of ["", "12345", "call me", "+57 abc 123 4567"]) {
      expect(isPlausiblePhone(value), value).toBe(false);
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
