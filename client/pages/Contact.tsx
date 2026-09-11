import { LeadForm } from "@/components/forms/LeadForm";
import { SchedulingPanel } from "@/components/booking/SchedulingPanel";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { SignalFieldBackdrop } from "@/sections/SignalFieldBackdrop";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactPageContent } from "@/i18n/content/contactPage";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { locale, path } = useLocale();
  const t = contactPageContent[locale];
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
        </div>
      </section>

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

      <section
        id="contact-form"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <LeadForm
            pageSource="contact"
            title={t.formTitle}
            description={t.formDescription}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-ink-50/70 p-7 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.45)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {t.guide.title}
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <Mail
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-ink-600">
                    {t.cards.email.title}
                  </h3>
                  <a
                    href="mailto:sales@digitalface.app"
                    className="mt-2 block break-words text-base font-semibold text-brand-600 underline underline-offset-4"
                  >
                    sales@digitalface.app
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                />
                <div>
                  <h3 className="text-sm font-semibold text-ink-600">
                    {t.cards.location.title}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    {t.cards.location.body}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {t.cards.location.hint}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
