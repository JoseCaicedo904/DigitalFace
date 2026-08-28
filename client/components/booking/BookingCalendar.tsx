import { CalendarDays } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * The one DigitalFace booking calendar. The homepage and all three industry
 * funnels embed this same GoHighLevel widget, so the calendar id, the widget
 * URL, the embed script and every sizing rule live here and nowhere else.
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
 * Where the corporate tree's consultation CTAs scroll to. The three industry
 * funnels keep their own long-standing `#book-assessment` anchor.
 */
export const HOME_BOOKING_ANCHOR = "book";
export const HOME_BOOKING_HREF = `#${HOME_BOOKING_ANCHOR}`;

/**
 * LeadConnector's embed script installs one global listener that resizes every
 * booking iframe on the page. Four routes render this component and a SPA never
 * reloads between them, so the script is fetched once per session and then left
 * in the document rather than added and removed per mount: a second copy would
 * answer every resize message twice.
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
 * The widget reports its height in more than one shape depending on the step it
 * is on, so the payload is inspected rather than matched against a single
 * documented message.
 */
function readReportedHeight(payload: unknown, depth = 0): number | null {
  if (depth > 2) return null;

  if (typeof payload === "number") {
    return Number.isFinite(payload) ? payload : null;
  }

  if (typeof payload === "string") {
    const direct = Number(payload);
    if (payload.trim() !== "" && Number.isFinite(direct)) return direct;
    try {
      return readReportedHeight(JSON.parse(payload), depth + 1);
    } catch {
      return null;
    }
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    for (const key of ["height", "docHeight", "scrollHeight", "bodyHeight"]) {
      const value = record[key];
      if (value === undefined) continue;
      const height = readReportedHeight(value, depth + 1);
      if (height !== null) return height;
    }
  }

  return null;
}

export type BookingCalendarProps = {
  /** Accessible name for the embedded widget. */
  title: string;
  className?: string;
};

/** The framed calendar panel on its own, without the surrounding section copy. */
export function BookingCalendar({ title, className }: BookingCalendarProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [autoSizingFailed, setAutoSizingFailed] = useState(false);
  // LeadConnector's own convention is `<calendarId>_<timestamp>`; a fresh
  // suffix per mount keeps the id unique if a page ever shows two calendars.
  const [frameId] = useState(() => `${BOOKING_CALENDAR_ID}_${Date.now()}`);

  useEffect(() => {
    void loadEmbedScript();
  }, []);

  useEffect(() => {
    // Belt and braces around LeadConnector's resizer: the same height messages
    // are read here, accepted only from this iframe's own window, so a blocked
    // or failed script cannot leave a booking step cut off.
    function onMessage(event: MessageEvent) {
      const frame = frameRef.current;
      if (!frame || event.source !== frame.contentWindow) return;
      if (event.origin !== BOOKING_WIDGET_ORIGIN) return;

      const height = readReportedHeight(event.data);
      if (
        height === null ||
        height < MIN_REPORTED_HEIGHT ||
        height > MAX_REPORTED_HEIGHT
      ) {
        return;
      }

      frame.style.height = `${Math.ceil(height)}px`;
      setAutoSizingFailed(false);
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    // If nothing ever reported a height the widget is sizing itself, so the
    // frame is given room for the tallest step instead of a cropped calendar.
    const timer = window.setTimeout(() => {
      const frame = frameRef.current;
      if (frame && !frame.style.height) setAutoSizingFailed(true);
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
            // A floor, never a ceiling: the widget's own height wins as soon as
            // it reports one, and the taller floor only applies if it never does.
            autoSizingFailed
              ? "min-h-[68rem] sm:min-h-[58rem]"
              : "min-h-[44rem] sm:min-h-[46rem]",
          )}
        />
      </div>
    </div>
  );
}

export type BookingSectionProps = {
  /** Anchor the page's consultation CTAs scroll to. */
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  /** Short instruction directly above the calendar. */
  hint?: string;
  calendarTitle: string;
  className?: string;
};

/**
 * The complete booking section: a short headline, one supporting line and the
 * calendar. Nothing else belongs here — every page that renders it has already
 * made its case above, and this is where the visitor acts.
 */
export function BookingSection({
  id,
  eyebrow,
  title,
  description,
  hint,
  calendarTitle,
  className,
}: BookingSectionProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      id={id}
      className={cn(
        "relative isolate scroll-mt-20 overflow-hidden border-t border-white/10 bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3),transparent_55%),radial-gradient(circle_at_85%_100%,rgba(14,165,233,0.18),transparent_45%)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Only the copy animates. The iframe is left out of any transformed
            container so a repaint cannot disturb the widget mid-booking. */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        </motion.div>

        {hint ? (
          <p className="mx-auto mt-9 flex max-w-xl items-center justify-center gap-2 text-center text-sm font-medium text-white/60">
            <CalendarDays
              className="h-4 w-4 shrink-0 text-ocean-200"
              aria-hidden="true"
            />
            {hint}
          </p>
        ) : null}

        <BookingCalendar
          title={calendarTitle}
          className={cn("mx-auto w-full max-w-[64rem]", hint ? "mt-8" : "mt-12")}
        />
      </div>
    </section>
  );
}
