import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { CtaSection } from "@/sections/CTA";
import { useLocale } from "@/i18n/LocaleProvider";
import { aboutContent } from "@/i18n/content/about";
import {
  HeartHandshake,
  LayoutDashboard,
  MessageCircle,
  LineChart,
  Settings,
} from "lucide-react";

const specialtyIcons = [
  <Settings className="h-6 w-6 text-brand-500" />,
  <MessageCircle className="h-6 w-6 text-brand-500" />,
  <LayoutDashboard className="h-6 w-6 text-brand-500" />,
];

export default function About() {
  const { locale, path } = useLocale();
  const t = aboutContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  const heroMedia = (
    <div className="flex h-full flex-col gap-6 p-8">
      <div
        data-media-slot="A_ABOUT_TEAM"
        className="flex h-64 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-ink-200 bg-white/70 px-6 text-center text-ink-400"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em]">
          {t.hero.mediaLabel}
        </p>
        <p className="text-xs normal-case text-ink-400">{t.hero.mediaHint}</p>
      </div>
      <div className="rounded-2xl border border-ink-100 bg-white/85 p-6 text-sm text-ink-500 shadow-brand-card">
        <p className="font-semibold text-ink-600">{t.hero.showUpTitle}</p>
        <p className="mt-2">{t.hero.showUpBody}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={{ label: t.hero.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.hero.secondaryCta, href: path("/features") }}
        showVideo={false}
        stats={t.hero.stats}
        media={heroMedia}
      />

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                {t.focus.eyebrow}
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                {t.focus.title}
              </h2>
              <p className="text-lg text-ink-500">{t.focus.description}</p>
              <div className="grid gap-6 sm:grid-cols-2">
                {t.focus.specialties.map((specialty, index) => (
                  <div
                    key={specialty.title}
                    className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                  >
                    <div className="shrink-0 rounded-xl bg-secondary px-3 py-2">
                      {specialtyIcons[index]}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {specialty.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-500">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:h-full lg:min-h-0 lg:self-stretch">
              <div className="space-y-6 rounded-3xl border border-ink-100 bg-white/90 p-8 text-sm text-ink-500 shadow-brand-card">
                <div className="flex items-center gap-3 text-ink-600">
                  <HeartHandshake className="h-6 w-6 shrink-0 text-brand-500" />
                  <p className="font-semibold">{t.focus.collaborationTitle}</p>
                </div>
                <p>{t.focus.collaborationBodyOne}</p>
                <p>{t.focus.collaborationBodyTwo}</p>
              </div>
              <div
                data-media-slot="A_ABOUT_WORKSPACE"
                className="flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl border border-dashed border-ink-200 bg-slate-100/80 px-6 text-center text-ink-400 shadow-brand-card aspect-[4/5] sm:aspect-[3/4] lg:flex-1 lg:aspect-auto lg:min-h-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  {t.focus.mediaLabel}
                </p>
                <p className="max-w-xs text-xs normal-case">
                  {t.focus.mediaHint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                {t.offices.eyebrow}
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {t.offices.title}
              </h2>
              <p className="text-lg text-white/70">{t.offices.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {t.offices.items.map((office) => (
                <div
                  key={office.title}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6"
                >
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    {office.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {office.description}
                  </p>
                  <p className="mt-3 text-sm text-white/70">{office.detail}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-wide text-white/60">
                  {t.offices.cadenceLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {t.offices.cadenceTitle}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  <LineChart className="mr-2 inline h-4 w-4" />
                  {t.offices.cadenceDetail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/pricing") }}
      />
    </div>
  );
}
