import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/locale";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

/**
 * The scheduling moment on the Contact page.
 *
 * `BookingCTA` still closes the homepage and the funnels, where a single button
 * is the right amount of weight. Contact is where someone has already decided
 * to talk, so the block reads as the scheduler itself: the pitch on the left,
 * and a booking interface on the right that a visitor recognises before any
 * calendar has loaded.
 *
 * The panel is a preview, not an embed. Nothing third-party is fetched on
 * render — the real calendar lives on /book, and the whole panel is one link
 * to it. That keeps the page's cost flat and still shows a scheduler on first
 * paint, which an iframe never does.
 */

export type SchedulingPanelProps = {
  /** Kept so existing `#book` anchors still land here. */
  id?: string;
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  highlights: readonly string[];
  panel: {
    label: string;
    duration: string;
    timezone: string;
    slotsLabel: string;
  };
  secondaryLabel: string;
  /** Locale-aware booking route, built with `bookingHref`. */
  href: string;
  /** In-page anchor for the visitor who would rather write. */
  formHref: string;
  className?: string;
};

/** Intl tags for the two locales the site ships. */
const DATE_TAGS: Record<Locale, string> = { en: "en-US", es: "es-CO" };

/** Half-hours, as decimal hours, matching the published service window. */
const SLOT_HOURS = [9, 10.5, 13, 14.5, 16, 17.5];

const SELECTED_DAY = 2;
const SELECTED_SLOT = 3;

export function SchedulingPanel({
  id,
  locale,
  eyebrow,
  title,
  description,
  ctaLabel,
  highlights,
  panel,
  secondaryLabel,
  href,
  formHref,
  className,
}: SchedulingPanelProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const tag = DATE_TAGS[locale];

  /* Real upcoming dates, so the preview is never stale or obviously fake.
     Sundays are skipped — the published window is Monday to Saturday. */
  const days = useMemo(() => {
    const found: Date[] = [];
    const cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    cursor.setDate(cursor.getDate() + 1);

    while (found.length < 7) {
      if (cursor.getDay() !== 0) found.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }

    return found;
  }, []);

  const monthLabel = useMemo(
    () => days[0].toLocaleDateString(tag, { month: "long", year: "numeric" }),
    [days, tag],
  );

  const slots = useMemo(
    () =>
      SLOT_HOURS.map((hour) => {
        const at = new Date();
        at.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);
        return at.toLocaleTimeString(tag, {
          hour: "numeric",
          minute: "2-digit",
        });
      }),
    [tag],
  );

  return (
    <section
      id={id}
      className={cn(
        /* It follows the dark hero directly now, so the surface change is the
           separation and a top rule would only cut across it. Slightly less
           padding on top than the bottom keeps the block reading as the hero's
           first answer rather than a new chapter. */
        "relative isolate scroll-mt-20 overflow-hidden bg-ink-50 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(124,58,237,0.11),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_100%,rgba(14,165,233,0.1),transparent_52%)]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16"
        >
          <div>
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {eyebrow}
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {description}
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-base leading-relaxed text-ink-600"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Check
                      aria-hidden="true"
                      strokeWidth={2.6}
                      className="h-3.5 w-3.5"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Booking and writing are two different decisions, so they get two
                different weights rather than one button and a sentence. */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                to={href}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-8 py-4 text-base font-bold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:text-lg"
              >
                {ctaLabel}
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </Link>
              <a
                href={formHref}
                className="text-sm font-semibold text-ink-500 underline decoration-ink-300 underline-offset-4 transition-colors hover:text-brand-600 hover:decoration-brand-300"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>

          {/* One link, one accessible name. Everything inside is decoration —
              a screen reader gets "Choose a time", not a grid of fake dates. */}
          <Link
            to={href}
            aria-label={ctaLabel}
            className="group block rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-50"
          >
            <div
              aria-hidden="true"
              className="relative overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-white p-6 shadow-[0_40px_80px_-56px_rgba(15,23,42,0.5)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_48px_90px_-56px_rgba(15,23,42,0.6)] motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent" />

              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <CalendarDays strokeWidth={1.6} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {panel.label}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-400">
                    {panel.duration} · {panel.timezone}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold capitalize text-slate-900">
                  {monthLabel}
                </p>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-ink-200 text-ink-400">
                    <ChevronLeft className="h-4 w-4" />
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-ink-200 text-ink-400">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </span>
              </div>

              {/* Five days on a phone, seven from sm — seven chips below 640px
                  leaves each one too narrow to read. */}
              <ul className="mt-4 grid grid-cols-5 gap-1.5 sm:grid-cols-7 sm:gap-2">
                {days.map((day, index) => (
                  <li
                    key={day.toISOString()}
                    className={cn(index > 4 && "hidden sm:block")}
                  >
                    <div
                      className={cn(
                        "flex flex-col items-center gap-1 rounded-xl border px-1 py-2.5 transition-colors duration-300",
                        index === SELECTED_DAY
                          ? "border-transparent bg-gradient-to-b from-brand-600 to-brand-500 text-white shadow-[0_12px_24px_-14px_rgba(124,58,237,0.9)]"
                          : "border-ink-200/80 bg-white text-ink-500",
                      )}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wide">
                        {day.toLocaleDateString(tag, { weekday: "short" })}
                      </span>
                      <span className="text-sm font-semibold">
                        {day.getDate()}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                {panel.slotsLabel}
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {slots.map((slot, index) => (
                  <li key={slot}>
                    <div
                      className={cn(
                        "rounded-xl border px-3 py-2.5 text-center text-sm font-semibold transition-colors duration-300",
                        index === SELECTED_SLOT
                          ? "border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200"
                          : "border-ink-200/80 bg-white text-ink-600 group-hover:border-ink-300",
                      )}
                    >
                      {slot}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
