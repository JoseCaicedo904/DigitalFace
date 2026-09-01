import { describe, expect, it } from "vitest";
import { SERVICE_IDS } from "@/data/serviceCatalog";
import {
  REQUEST_MAX_AGE_MS,
  addServiceId,
  parseStoredRequest,
  removeServiceId,
  serializeRequest,
} from "./requestStorage";

const NOW = Date.UTC(2026, 0, 15);

describe("service request selection", () => {
  it("never adds the same service twice", () => {
    const once = addServiceId([], "meta-ads");
    expect(addServiceId(once, "meta-ads")).toEqual(["meta-ads"]);
  });

  it("keeps the selection in catalog order, whatever order it was built in", () => {
    const selection = ["campaign-landing-pages", "meta-ads", "crm-pipeline"]
      .reverse()
      .reduce<
        ReturnType<typeof addServiceId>
      >((ids, id) => addServiceId(ids, id as (typeof SERVICE_IDS)[number]), []);

    expect(selection).toEqual([
      "meta-ads",
      "crm-pipeline",
      "campaign-landing-pages",
    ]);
  });

  it("removes only the service asked for", () => {
    const selection = addServiceId(addServiceId([], "meta-ads"), "google-ads");
    expect(removeServiceId(selection, "meta-ads")).toEqual(["google-ads"]);
    expect(removeServiceId(selection, "seo-strategy")).toEqual(selection);
  });
});

describe("service request persistence", () => {
  it("survives a round trip", () => {
    const ids = ["meta-ads", "crm-pipeline"] as const;
    expect(parseStoredRequest(serializeRequest(ids, NOW), NOW)).toEqual([
      ...ids,
    ]);
  });

  it("returns nothing for missing, malformed or foreign values", () => {
    expect(parseStoredRequest(null)).toEqual([]);
    expect(parseStoredRequest("")).toEqual([]);
    expect(parseStoredRequest("{not json")).toEqual([]);
    expect(parseStoredRequest(JSON.stringify({ ids: ["meta-ads"] }))).toEqual(
      [],
    );
    expect(
      parseStoredRequest(
        JSON.stringify({ v: 99, ids: ["meta-ads"], savedAt: NOW }),
        NOW,
      ),
    ).toEqual([]);
  });

  it("drops ids that are no longer services", () => {
    const raw = JSON.stringify({
      v: 1,
      ids: ["meta-ads", "retired-service", 7],
      savedAt: NOW,
    });
    expect(parseStoredRequest(raw, NOW)).toEqual(["meta-ads"]);
  });

  it("drops duplicates that were written by an older build", () => {
    const raw = JSON.stringify({
      v: 1,
      ids: ["meta-ads", "meta-ads"],
      savedAt: NOW,
    });
    expect(parseStoredRequest(raw, NOW)).toEqual(["meta-ads"]);
  });

  it("forgets a selection once it goes stale", () => {
    const raw = serializeRequest(["meta-ads"], NOW);
    expect(parseStoredRequest(raw, NOW + REQUEST_MAX_AGE_MS - 1000)).toEqual([
      "meta-ads",
    ]);
    expect(parseStoredRequest(raw, NOW + REQUEST_MAX_AGE_MS + 1000)).toEqual(
      [],
    );
  });
});
