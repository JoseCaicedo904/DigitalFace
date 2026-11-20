import type { Request } from "express";
import site from "../../shared/site.json" with { type: "json" };
import { LEAD_FORM_SOURCE, type LeadPageSource } from "../../shared/lead.js";
import { readCookieValue } from "../../client/i18n/geo.js";

const META_GRAPH_API_VERSION = "v25.0";
const META_TIMEOUT_MS = 1500;
const LEAD_PATHS = {
  homepage: "/",
  contact: "/contact",
  landing_dental_practices: "/industries/dental-practices",
  landing_aesthetic_medicine: "/industries/aesthetic-medicine",
  landing_med_spas: "/industries/med-spas",
} satisfies Record<LeadPageSource, string>;

export function prepareMetaLead(
  req: Request,
  lead: { pageSource: LeadPageSource; locale: string; formSource: string },
  eventId: string,
) {
  const pixelId = process.env.VITE_META_PIXEL_ID?.trim() ?? "";
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN?.trim();
  if (
    process.env.VERCEL_ENV !== "production" ||
    process.env.VITE_META_CAPI_ENABLED !== "true" ||
    !accessToken ||
    !/^\d{10,20}$/.test(pixelId) ||
    lead.formSource !== LEAD_FORM_SOURCE ||
    req.get("origin") !== site.origin ||
    req.get("sec-gpc") === "1" ||
    req.get("dnt") === "1"
  )
    return null;

  const agent = req.get("user-agent")?.trim();
  const cookies = req.get("cookie");
  const browserId = readCookieValue(cookies, "_fbp");
  const clickId = readCookieValue(cookies, "_fbc");
  const fbp = /^fb\.\d{1,2}\.\d{13}\.\d{1,30}$/.test(browserId ?? "")
    ? browserId
    : null;
  const fbc = /^fb\.\d{1,2}\.\d{13}\.[A-Za-z0-9_-]{1,512}$/.test(clickId ?? "")
    ? clickId
    : null;
  if (!agent || agent.length > 1024 || (!fbp && !fbc)) return null;

  const path = LEAD_PATHS[lead.pageSource];
  const localizedPath =
    lead.locale === "es" ? "/es" + (path === "/" ? "" : path) : path;
  const event = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    event_source_url: site.origin + localizedPath,
    user_data: {
      client_user_agent: agent,
      ...(fbp && { fbp }),
      ...(fbc && { fbc }),
    },
  };

  return async function send() {
    try {
      const body = new URLSearchParams({
        access_token: accessToken,
        data: JSON.stringify([event]),
      });
      const testCode = process.env.META_CAPI_TEST_EVENT_CODE?.trim();
      if (testCode) body.set("test_event_code", testCode);
      const response = await fetch(
        "https://graph.facebook.com/" +
          META_GRAPH_API_VERSION +
          "/" +
          pixelId +
          "/events",
        {
          method: "POST",
          body,
          signal: AbortSignal.timeout(META_TIMEOUT_MS),
          redirect: "error",
        },
      );
      if (!response.ok) {
        console.warn("[meta-capi] Lead event rejected", response.status);
        return;
      }
      const receipt = await response.json();
      if (receipt?.events_received !== 1) {
        console.warn("[meta-capi] Lead event receipt missing");
      }
    } catch {
      // Measurement cannot change the result of an already accepted lead.
      console.warn("[meta-capi] Lead event could not be delivered");
    }
  };
}
