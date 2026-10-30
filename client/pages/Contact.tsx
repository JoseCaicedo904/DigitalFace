import { LeadForm } from "@/components/forms/LeadForm";
import { SchedulingPanel } from "@/components/booking/SchedulingPanel";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { SignalFieldBackdrop } from "@/sections/SignalFieldBackdrop";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactPageContent } from "@/i18n/content/contactPage";
import {
  DigitalFaceBrandStory,
  DigitalFaceContactSection,
} from "@/sections/DigitalFaceClosingSections";
import { trackEvent } from "@/lib/analytics";

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

      <div className="digitalface-closing-sections" lang="es">
        <section aria-label="Somos DigitalFace">
          <div className="event-shell">
            <DigitalFaceBrandStory />
          </div>
        </section>
        <DigitalFaceContactSection
          bookingHref="/es/labs-summit-2026#conversemos"
          onBookingClick={() =>
            trackEvent("consultation_click", { page_source: "contact" })
          }
        />
      </div>
    </div>
  );
}
