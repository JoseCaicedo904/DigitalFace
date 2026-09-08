import { usePageMetadata } from "@/hooks/usePageMetadata";
import { BOOKING_ROUTE } from "@/components/booking/bookingRoute";
import { FeaturesSection } from "@/sections/Features";
import { PatientJourneySection } from "@/sections/PatientJourney";
import { CtaSection } from "@/sections/CTA";
import { useLocale } from "@/i18n/LocaleProvider";
import { featuresContent } from "@/i18n/content/features";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  LayoutDashboard,
  PhoneCall,
} from "lucide-react";

const overviewIcons = [
  <PhoneCall className="h-6 w-6" />,
  <CalendarCheck className="h-6 w-6" />,
  <LayoutDashboard className="h-6 w-6" />,
];

export default function Features() {
  const { locale, path } = useLocale();
  const t = featuresContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <FeaturesSection
        eyebrow={t.overview.eyebrow}
        title={t.overview.title}
        titleAs="h1"
        description={t.overview.description}
        features={t.overview.items.map((item, index) => ({
          ...item,
          icon: overviewIcons[index],
        }))}
      />

      <PatientJourneySection content={t.journey} />

      {/* Service details expand on demand so the patient journey stays easy to scan. */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.modules.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t.modules.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{t.modules.description}</p>
          </div>

          <div className="mt-10 divide-y divide-ink-100 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-brand-card">
            {t.modules.items.map((service) => (
              <details key={service.title} className="group p-6 sm:p-8">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base text-ink-500">
                      {service.description}
                    </p>
                  </div>
                  <ChevronDown
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <ul className="mt-5 grid gap-3 text-sm text-ink-600 md:grid-cols-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_55%)] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-16">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                {t.launch.eyebrow}
              </span>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {t.launch.title}
              </h2>
              <p className="text-lg text-white/70">{t.launch.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase tracking-[0.1em] text-white">
                  {t.launch.timelineBadge}
                </span>
                <div>
                  <p className="text-sm text-white/80">
                    {t.launch.timelineTitle}
                  </p>
                  <p className="text-xs text-white/50">
                    {t.launch.timelineSubtitle}
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                {t.launch.notes.map((note, index) => (
                  <div key={note} className="flex items-start gap-3">
                    <span
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                        index === 0 ? "bg-brand-400" : "bg-brand-400/80"
                      }`}
                    />
                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-12">
              <div className="relative pl-10">
                <div className="absolute left-4 top-1 h-full w-px bg-gradient-to-b from-brand-400/80 via-ocean-400/50 to-white/10" />
                <ol className="space-y-9">
                  {t.launch.steps.map((step) => (
                    <li key={step.badge} className="relative">
                      <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80">
                        {step.badge}
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-4 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  {t.launch.routineLabel}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {t.launch.routine.map((item, index) => (
                    <div key={item} className="contents">
                      {index > 0 ? (
                        <div className="hidden h-px flex-1 bg-white/10 sm:block" />
                      ) : null}
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                            index === 0
                              ? "bg-brand-400"
                              : index === 1
                                ? "bg-ocean-400"
                                : "bg-white/70"
                          }`}
                        />
                        <p className="text-sm text-white">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/70">{t.launch.routineClose}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path(BOOKING_ROUTE) }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/pricing") }}
      />
    </div>
  );
}
