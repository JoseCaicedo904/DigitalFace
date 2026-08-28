import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/LeadForm";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactContent } from "@/i18n/content/contact";
import { Clock3, Mail, MapPin, Sparkles } from "lucide-react";

export default function Contact() {
  const { locale, path } = useLocale();
  const t = contactContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg text-ink-500">{t.hero.description}</p>
          <p className="mt-2 text-sm font-semibold text-brand-600">
            {t.hero.note}
          </p>
        </div>
      </section>

      {/* Scheduling comes first; the form below stays for anyone who would
          rather write than book a time. */}
      <BookingCTA
        id="book"
        eyebrow={t.booking.eyebrow}
        title={t.booking.title}
        description={t.booking.description}
        ctaLabel={t.booking.ctaLabel}
        href={bookingHref(path(BOOKING_ROUTE), "contact")}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      {t.cards.email.title}
                    </p>
                  </div>
                  <a
                    href="mailto:sales@digitalfacemarketing.com"
                    className="block break-words text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    sales@digitalfacemarketing.com
                  </a>
                  <p className="text-xs text-ink-400">{t.cards.email.hint}</p>
                </CardContent>
              </Card>
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 shrink-0 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      {t.cards.response.title}
                    </p>
                  </div>
                  <p className="text-sm text-ink-500">
                    {t.cards.response.body}
                  </p>
                  <ol className="space-y-2 text-xs text-ink-400">
                    {t.cards.response.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      {t.cards.location.title}
                    </p>
                  </div>
                  <p className="text-sm text-ink-500">
                    {t.cards.location.body}
                  </p>
                  <p className="text-xs text-ink-400">
                    {t.cards.location.hint}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 shrink-0 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      {t.cards.include.title}
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-ink-400">
                    {t.cards.include.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <LeadForm pageSource="contact" />

            <div className="space-y-3 rounded-2xl border border-ink-100 bg-white/70 p-6 text-sm text-ink-500">
              <div className="flex items-center gap-3 text-ink-600">
                <Sparkles className="h-5 w-5 shrink-0 text-brand-500" />
                <p className="font-semibold">{t.form.nextTitle}</p>
              </div>
              <p>{t.form.nextBody}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
