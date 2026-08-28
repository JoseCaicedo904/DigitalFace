import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * The one DigitalFace booking calendar.
 *
 * This module is imported by the /book page alone. That is load-bearing rather
 * than tidiness: it is what keeps the iframe and LeadConnector's script out of
 * the main bundle, so the marketing pages never touch an external widget while
 * a visitor is only browsing.
 *
 * The calendar is a Personal Appointment calendar internally, but the public
 * experience is deliberately company-first: visitors book DigitalFace, not a
 * named individual.
 */
export const BOOKING_CALENDAR_ID = "IUvttnNusLus9DuLJNoI";
export const BOOKING_CALENDAR_URL = `https://api.leadconnectorhq.com/widget/booking/${BOOKING_CALENDAR_ID}`;

const BOOKING_WIDGET_ORIGIN = "https://api.leadconnectorhq.com";
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * LeadConnector's embed script binds the widget iframes that exist when it
 * runs, and forwards query parameters and known contacts into them. It is
 * fetched once per session and then left in the document rather than added and
 * removed per mount: a second copy would answer every message twice, and a
 * visitor may well arrive at this route more than once.
 *
 * Height is deliberately not left to it. It only ever sees the iframes present
 * at load time, so a client-side navigation into this route leaves the new
 * calendar unbound — which is why the component sizes itself from the widget's
 * own messages below.
 */
let embedScriptPromise: Promise<void> | null = null;

function loadEmbedScript(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (embedScriptPromise) return embedScriptPromise;

  embedScriptPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT_SRC}"]`,
    );
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    // Resolved on error as well: the widget itself still books appointments
    // without the helper, it just stops auto-sizing, and the fallback height
    // below is what covers that case.
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(script);
  });

  return embedScriptPromise;
}

/** Outside this range a reported height is noise, not the widget's content. */
const MIN_REPORTED_HEIGHT = 320;
const MAX_REPORTED_HEIGHT = 6000;

/**
 * The embed script's bundled iframe-resizer measures the same content a few
 * pixels differently to the booking app itself. Both answers are right enough,
 * so a disagreement this small is left alone rather than written back — two
 * writers trading four pixels would leave the panel twitching.
 */
const HEIGHT_TOLERANCE = 8;

/**
 * On adopting an iframe, the embed script hides it — transparent, inert and
 * parked at `left: -9999px` — and restores it from a callback that only fires
 * for frames present in the initial HTML. A frame React rendered is therefore
 * hidden for good, and because hiding takes it out of flow the panel collapses
 * around it too.
 *
 * Dropping the script is the wrong trade: it also forwards campaign parameters
 * and known contacts into the widget. So the properties it sets are cleared
 * again as soon as the widget is known to be alive. Nothing is lost by showing
 * the frame early — the panel behind it is already white.
 */
const HIDDEN_WHILE_LOADING = [
  "opacity",
  "visibility",
  "pointerEvents",
  "left",
  "position",
] as const;

function revealFrame(frame: HTMLIFrameElement) {
  // The script raises this flag as it hides the frame and is the only thing
  // that can raise it again, so reading it keeps this a no-op on every call but
  // the one that matters — and still correct if the frame is ever re-hidden.
  if (frame.dataset.initialIframeHidden !== "true") return;

  for (const property of HIDDEN_WHILE_LOADING) {
    frame.style[property] = "";
  }
  frame.dataset.initialIframeHidden = "false";
}

const IFRAME_SIZER_PREFIX = "[iFrameSizer]";

type ReportedHeight = {
  height: number;
  /** The booking app's own measurement, as opposed to a bundled resizer's. */
  authoritative: boolean;
};

/**
 * The widget announces its height twice over, in two unrelated protocols:
 *
 *   ["highlevel.setHeight", { height: 826, id: "msgsndr-calendar" }]
 *   "[iFrameSizer]<frameId>:776:1022:mutationObserver"
 *
 * The first is the booking app measuring itself and is the one to trust. The
 * second comes from the iframe-resizer child bundled into the widget, runs
 * consistently short of it, and is only read until the app's own number lands —
 * mixing the two would leave the panel jittering between the two answers.
 */
function readReportedHeight(payload: unknown): ReportedHeight | null {
  if (Array.isArray(payload)) {
    const [name, detail] = payload;
    if (
      name !== "highlevel.setHeight" ||
      !detail ||
      typeof detail !== "object"
    ) {
      return null;
    }
    const height = Number((detail as { height?: unknown }).height);
    return Number.isFinite(height) ? { height, authoritative: true } : null;
  }

  if (typeof payload === "string" && payload.startsWith(IFRAME_SIZER_PREFIX)) {
    // "<frameId>:<height>:<width>:<trigger>" — the frame id holds no colons.
    const height = Number(
      payload.slice(IFRAME_SIZER_PREFIX.length).split(":")[1],
    );
    return Number.isFinite(height) ? { height, authoritative: false } : null;
  }

  return null;
}

export type GhlBookingEmbedProps = {
  /** Accessible name for the embedded widget. */
  title: string;
  className?: string;
};

/** The framed calendar panel. The page around it supplies the copy. */
export function GhlBookingEmbed({ title, className }: GhlBookingEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const hasAuthoritativeHeight = useRef(false);
  const [sizing, setSizing] = useState<"pending" | "measured" | "unmanaged">(
    "pending",
  );
  // LeadConnector's own convention is `<calendarId>_<timestamp>`; a fresh
  // suffix per mount keeps the id unique across repeat visits to this route.
  const [frameId] = useState(() => `${BOOKING_CALENDAR_ID}_${Date.now()}`);

  useEffect(() => {
    void loadEmbedScript();
  }, []);

  useEffect(() => {
    // Only this iframe's own window is listened to, so nothing else on the page
    // — or in another tab's frame — can resize the booking panel.
    function onMessage(event: MessageEvent) {
      const frame = frameRef.current;
      if (!frame || event.source !== frame.contentWindow) return;
      if (event.origin !== BOOKING_WIDGET_ORIGIN) return;

      const reported = readReportedHeight(event.data);
      if (!reported) return;
      if (!reported.authoritative && hasAuthoritativeHeight.current) return;
      if (
        reported.height < MIN_REPORTED_HEIGHT ||
        reported.height > MAX_REPORTED_HEIGHT
      ) {
        return;
      }

      if (reported.authoritative) hasAuthoritativeHeight.current = true;

      // A height message is proof the widget is running, so this is also the
      // moment the embed script's hiding is safe to undo. It is repeated on
      // every message because the script may hide the frame again after the
      // first one.
      revealFrame(frame);

      const target = Math.ceil(reported.height);
      const current = Number.parseFloat(frame.style.height);
      if (
        !Number.isFinite(current) ||
        Math.abs(current - target) > HEIGHT_TOLERANCE
      ) {
        frame.style.height = `${target}px`;
      }

      setSizing("measured");
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    // Last resort. If the widget never reported a height it is sizing itself,
    // so the frame is given room for the tallest booking step rather than a
    // cropped calendar — and shown regardless, so a silent widget cannot leave
    // the embed script's hiding in place over an empty panel.
    const timer = window.setTimeout(() => {
      const frame = frameRef.current;
      if (frame) revealFrame(frame);
      setSizing((current) => (current === "pending" ? "unmanaged" : current));
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[2.75rem] bg-gradient-to-r from-brand-500/25 via-ocean-500/20 to-brand-500/25 blur-2xl"
      />
      {/* The padding is deliberately small: the widget brings its own internal
          spacing, and anything larger eats the width its date grid needs. */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white p-2 shadow-2xl sm:rounded-[2rem] sm:p-3 lg:p-4">
        <iframe
          ref={frameRef}
          id={frameId}
          src={BOOKING_CALENDAR_URL}
          title={title}
          allow="payment"
          scrolling="no"
          className={cn(
            "block w-full rounded-[1.25rem] border-0 bg-white",
            // A floor, never a ceiling. Once the widget is reporting its height
            // the floor drops out of the way so the panel tracks it exactly;
            // until then it holds the calendar's shape, and if the widget never
            // reports at all it holds room for the tallest booking step.
            sizing === "measured" && "min-h-[20rem]",
            sizing === "pending" && "min-h-[44rem] sm:min-h-[46rem]",
            sizing === "unmanaged" && "min-h-[68rem] sm:min-h-[58rem]",
          )}
        />
      </div>
    </div>
  );
}
