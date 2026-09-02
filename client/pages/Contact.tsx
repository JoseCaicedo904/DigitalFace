import { ContactFormSection } from "@/components/forms/ContactFormSection";
import { SchedulingPanel } from "@/components/booking/SchedulingPanel";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { SignalFieldBackdrop } from "@/sections/SignalFieldBackdrop";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactContent } from "@/i18n/content/contact";
import { Check, Clock3, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { locale, path } = useLocale();
  const t = contactContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#060915] py-24 text-white sm:py-28 lg:py-32">
        <SignalFieldBackdrop />
        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/70">{t.hero.description}</p>
          <p className="mt-2 text-sm font-semibold text-brand-300">
            {t.hero.note}
          </p>
        </div>
      </section>

      {/* Booking is the first thing offered: most visitors who reach Contact
          have already decided to talk. The form below is the alternative for
          anyone who would rather write. */}
      <SchedulingPanel
        id="book"
        locale={locale}
        eyebrow={t.booking.eyebrow}
        title={t.booking.title}
        description={t.booking.description}
        ctaLabel={t.booking.ctaLabel}
        highlights={t.booking.highlights}
        panel={t.booking.panel}
        secondaryLabel={t.booking.secondaryLabel}
        href={bookingHref(path(BOOKING_ROUTE), "contact")}
        formHref="#contact-form"
      />

      <ContactFormSection id="contact-form" pageSource="contact" />

      {/* The guide closes the page: how to reach DigitalFace on the left, what
          follows on the right. One panel with an internal divider rather than
          four cards, so the two halves read as one answer. */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-white shadow-[0_40px_80px_-60px_rgba(15,23,42,0.45)] sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
              {/* Contact details. Tinted, so the two halves separate without a
                  second border. */}
              <div className="relative bg-ink-50/70 p-7 sm:p-10 lg:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(124,58,237,0.09),transparent_58%)]"
                />
                <div className="relative">
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {t.guide.title}
                  </h2>

                  <div className="mt-8 space-y-7">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-brand-100">
                        <Mail
                          aria-hidden="true"
                          strokeWidth={1.6}
                          className="h-5 w-5"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                          {t.cards.email.title}
                        </p>
                        <a
                          href="mailto:sales@digitalfacemarketing.com"
                          className="mt-1.5 block break-words text-base font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-400 sm:text-lg"
                        >
                          sales@digitalfacemarketing.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-brand-100">
                        <MapPin
                          aria-hidden="true"
                          strokeWidth={1.6}
                          className="h-5 w-5"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                          {t.cards.location.title}
                        </p>
                        <p className="mt-1.5 text-base font-semibold text-slate-900 sm:text-lg">
                          {t.cards.location.body}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ink-500">
                          {t.cards.location.hint}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* The reply promise sits with the contact details, which is
                      where a visitor is deciding whether to write. */}
                  <p className="mt-9 flex items-center gap-3 rounded-2xl border border-ink-200/80 bg-white px-4 py-3.5 text-sm font-medium text-ink-600">
                    <Clock3
                      aria-hidden="true"
                      strokeWidth={1.6}
                      className="h-4 w-4 shrink-0 text-brand-500"
                    />
                    {t.cards.response.body}
                  </p>
                </div>
              </div>

              {/* Process, then preparation. */}
              <div className="border-t border-ink-200/70 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {t.form.nextTitle}
                </h3>

                <ol className="mt-7 space-y-6">
                  {t.cards.response.steps.map((step, index, all) => (
                    <li key={step} className="relative flex gap-4">
                      {/* The rail joins the markers into one sequence and stops
                          short of the last, so the list reads as finished. */}
                      {index < all.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-[1.125rem] top-9 w-px -translate-x-1/2 bg-gradient-to-b from-brand-200 to-brand-100"
                        />
                      ) : null}
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600 ring-1 ring-brand-100">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-base leading-relaxed text-ink-600 sm:text-[1.0625rem]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-9 border-t border-ink-200/70 pt-8">
                  <h4 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                    {t.cards.include.title}
                  </h4>
                  <ul className="mt-5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                    {t.cards.include.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink-600 sm:text-base"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                          <Check
                            aria-hidden="true"
                            strokeWidth={2.8}
                            className="h-3 w-3"
                          />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
