import { CalendarDays } from "lucide-react";
import { GhlBookingEmbed } from "@/components/booking/GhlBookingEmbed";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { bookContent } from "@/i18n/content/book";

/**
 * The single DigitalFace scheduling page, and the only route that loads the
 * GoHighLevel widget.
 *
 * App.tsx imports it lazily, so the iframe and LeadConnector's script are
 * fetched when a visitor deliberately comes here to book and never while they
 * are reading a marketing page.
 *
 * Kept short on purpose. The visitor has already decided; the page's whole job
 * is to give the calendar room and get out of its way.
 */
export default function Book() {
  const { locale } = useLocale();
  const t = bookContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3),transparent_50%),radial-gradient(circle_at_85%_90%,rgba(14,165,233,0.18),transparent_45%)]"
      />
      {/* Wider than the site's usual content column: this page exists to give
          the date and time interface room, so the container is sized to the
          calendar rather than to reading copy. */}
      <div className="mx-auto max-w-[80rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {t.eyebrow}
          </span>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            {t.description}
          </p>
        </div>

        <p className="mx-auto mt-9 flex max-w-xl items-center justify-center gap-2 text-center text-sm font-medium text-white/60">
          <CalendarDays
            className="h-4 w-4 shrink-0 text-ocean-200"
            aria-hidden="true"
          />
          {t.hint}
        </p>

        <GhlBookingEmbed
          title={t.calendarTitle}
          className="mx-auto mt-8 w-full max-w-[76rem]"
        />
      </div>
    </div>
  );
}
