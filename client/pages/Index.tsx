import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { FeaturesSection } from "@/sections/Features";
import { ValuePropsSection } from "@/sections/ValueProps";
import { ClientSystemsSection } from "@/sections/ClientSystems";
import { IntegrationsSection } from "@/sections/Integrations";
import { CtaSection } from "@/sections/CTA";
import { IndustryPathsSection } from "@/sections/IndustryPaths";
import { SystemMediaSection } from "@/sections/SystemMedia";
import { useLocale } from "@/i18n/LocaleProvider";
import { homeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";
import {
  CalendarCheck,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MessageCircle,
  Repeat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const featureIcons = [
  <Megaphone className="h-6 w-6" />,
  <MessageCircle className="h-6 w-6" />,
  <CalendarCheck className="h-6 w-6" />,
  <LayoutDashboard className="h-6 w-6" />,
  <Repeat className="h-6 w-6" />,
  <ShieldCheck className="h-6 w-6" />,
];

const journeyIcons = [MessageCircle, Sparkles, CalendarCheck, LineChart];
const valueMediaIcons = [Sparkles, LineChart, ShieldCheck];

export default function Index() {
  const { locale, path } = useLocale();
  const t = homeContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  const heroMedia = (
    <div className="flex h-full flex-col gap-6 p-8">
      <div className="relative h-64 overflow-hidden rounded-3xl border border-white/15 bg-white/10">
        <img
          src="/images/digitalface-post.png"
          alt={t.hero.bannerAlt}
          className="h-full w-full object-cover"
        />
        <a
          href="#book"
          aria-label={t.hero.bannerCtaLabel}
          className="absolute z-10 block cursor-pointer rounded-full bg-white/0 transition hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
          style={{ top: "77.8%", left: "62.5%", width: "30%", height: "8.5%" }}
        />
      </div>
      <div className="rounded-2xl border border-ink-100 bg-white/85 p-6 text-sm text-ink-500 shadow-brand-card">
        <p className="font-semibold text-ink-600">{t.hero.liveTitle}</p>
        <ul className="mt-3 space-y-2 text-left">
          {t.hero.liveItems.map((item, index) => (
            <li key={item} className="flex items-start gap-2">
              <span
                className={cn(
                  "mt-1 h-2 w-2 shrink-0 rounded-full",
                  index === 0
                    ? "bg-brand-400"
                    : index === 1
                      ? "bg-ocean-400"
                      : "bg-slate-400",
                )}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const valueMedia = (
    <div className="relative text-sm text-white/75 lg:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-ocean-500/10 blur-3xl" />
        <div className="absolute left-6 top-12 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl" />
        <div className="absolute right-8 top-20 h-28 w-28 rounded-full bg-ocean-500/10 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
        <span className="absolute left-[12%] top-[8.6rem] h-1.5 w-1.5 rounded-full bg-brand-400/70 shadow-[0_0_10px_rgba(124,58,237,0.45)]" />
        <span className="absolute left-1/2 top-[6.9rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ocean-400/70 shadow-[0_0_10px_rgba(14,165,233,0.45)]" />
        <span className="absolute right-[12%] top-[10.6rem] h-1.5 w-1.5 rounded-full bg-ocean-400/70 shadow-[0_0_10px_rgba(14,165,233,0.45)]" />
      </div>
      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {t.valueProps.mediaCards.map((card, index) => {
          const Icon = valueMediaIcons[index];
          return (
            <div
              key={card.title}
              className={cn(
                "group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-brand-card transition hover:border-white/20 hover:bg-white/10",
                index === 0
                  ? "lg:translate-y-6"
                  : index === 1
                    ? "lg:-translate-y-2"
                    : "lg:translate-y-10",
              )}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-white">{card.title}</p>
                  <p>{card.description}</p>
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-400/60 via-white/10 to-transparent motion-safe:animate-shimmer" />
                </div>
              </div>
            </div>
          );
        })}
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
        stats={t.hero.stats}
        media={heroMedia}
      />
      <IndustryPathsSection />
      <FeaturesSection
        eyebrow={t.features.eyebrow}
        title={t.features.title}
        description={t.features.description}
        features={t.features.items.map((item, index) => ({
          ...item,
          icon: featureIcons[index],
        }))}
      />
      <SystemMediaSection />
      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.journey.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t.journey.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{t.journey.description}</p>
          </div>
          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute left-5 top-0 h-full w-px bg-ink-200/70 lg:left-1/2 lg:-translate-x-1/2" />
              <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-brand-300/70 via-ocean-300/40 to-transparent opacity-80 lg:left-1/2 lg:-translate-x-1/2" />
              <span className="absolute left-5 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand-400 shadow-[0_0_18px_rgba(124,58,237,0.45)] motion-safe:animate-journey lg:left-1/2" />
              <span className="absolute left-5 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ocean-400/70 shadow-[0_0_12px_rgba(14,165,233,0.45)] motion-safe:animate-journey-slow lg:left-1/2" />
            </div>
            <div className="space-y-0">
              {t.journey.steps.map((step, index) => {
                const Icon = journeyIcons[index];
                const isFinal =
                  t.journey.steps.length % 2 === 1 &&
                  index === t.journey.steps.length - 1;
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={step.title}
                    className={cn(
                      "relative pl-12 lg:pl-0",
                      index > 0 && "-mt-32 lg:-mt-36",
                    )}
                  >
                    <div
                      className={cn(
                        "relative",
                        isFinal
                          ? "lg:mx-auto lg:w-[70%] lg:max-w-[700px]"
                          : isLeft
                            ? "lg:mr-auto lg:w-[calc(50%-2.5rem)]"
                            : "lg:ml-auto lg:w-[calc(50%-2.5rem)]",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-5 top-10 h-px w-6 bg-ink-200/80",
                          isFinal
                            ? "lg:left-1/2 lg:top-[-1.25rem] lg:h-5 lg:w-px lg:-translate-x-1/2"
                            : isLeft
                              ? "lg:left-auto lg:right-[-2.5rem] lg:w-10"
                              : "lg:left-[-2.5rem] lg:w-10",
                        )}
                      />
                      <div className="group relative overflow-hidden rounded-3xl border border-ink-100/80 bg-white/90 p-7 shadow-brand-card transition duration-300 hover:-translate-y-1 hover:border-brand-200/70 hover:shadow-brand-soft">
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-glow-radial opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <div className="relative z-10 flex items-start gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ink-100 bg-white text-brand-600 shadow-sm">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-600">
                              {t.journey.stepLabel} {index + 1}
                            </p>
                            <h3 className="mt-2 min-h-[3rem] text-[1.3rem] font-semibold leading-snug text-slate-900">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="relative z-10 mt-4 text-[0.95rem] leading-relaxed text-ink-500">
                          {step.description}
                        </p>
                        <div className="relative z-10 mt-4 h-px w-full bg-gradient-to-r from-brand-200/70 via-ink-200/50 to-transparent motion-safe:animate-shimmer" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ValuePropsSection
        eyebrow={t.valueProps.eyebrow}
        title={t.valueProps.title}
        description={t.valueProps.description}
        points={t.valueProps.points}
        media={valueMedia}
        variant="system-flow"
        labels={{
          status: t.valueProps.statusLabel,
          stage: t.valueProps.stageLabel,
          outputs: t.valueProps.outputsLabel,
          live: t.valueProps.liveLabel,
        }}
      />
      <ClientSystemsSection content={t.clientSystems} />
      <IntegrationsSection
        eyebrow={t.integrations.eyebrow}
        title={t.integrations.title}
        description={t.integrations.description}
        items={t.integrations.items.map((name) => ({ name }))}
      />
      <CtaSection
        id="book"
        className="scroll-mt-24"
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/pricing") }}
      />
    </div>
  );
}
