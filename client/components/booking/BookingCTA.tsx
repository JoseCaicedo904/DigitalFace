import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/**
 * The conversion block that closes the homepage and each industry funnel.
 *
 * It replaces the calendar that used to be embedded here. Nothing in this file
 * touches GoHighLevel — the whole point is that a marketing page can render its
 * booking CTA without pulling in an external widget — so it is a headline, a
 * line of copy and one deliberately large button pointing at /book.
 *
 * Each page supplies its own wording; the treatment stays identical so the CTA
 * reads as the same moment wherever a visitor meets it.
 */
export type BookingCTAProps = {
  /** Kept so the funnels' long-standing in-page anchors still land somewhere. */
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Locale-aware booking route, built with `bookingHref`. */
  href: string;
  className?: string;
};

export function BookingCTA({
  id,
  eyebrow,
  title,
  description,
  ctaLabel,
  href,
  className,
}: BookingCTAProps) {
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
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
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
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>

          {/* Full width on a phone so it is unmissable, intrinsic from sm up so
              it reads as a button rather than a bar. */}
          <Link
            to={href}
            className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-8 py-5 text-lg font-bold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 sm:w-auto sm:px-12 sm:py-6 sm:text-xl"
          >
            {ctaLabel}
            <ArrowRight
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
