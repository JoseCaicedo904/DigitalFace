import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { pricingContent } from "@/i18n/content/pricing";
import { cn } from "@/lib/utils";
import { Check, ShieldCheck, Sparkles } from "lucide-react";

const formatUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
}).format;

export default function Pricing() {
  const { locale, path } = useLocale();
  const t = pricingContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg text-ink-500">{t.hero.description}</p>
        </div>
        <div className="container mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-6 text-left shadow-brand-card"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.packages.eyebrow}
            </span>
            <p className="mt-4 text-base text-ink-500">{t.packages.intro}</p>
            {/*
              The commitment answer, given before the prices rather than in the
              small print under them. It reads as one line on desktop and as a
              short block on a phone, which is why the radius changes.
            */}
            <p className="mt-6 inline-flex items-start gap-2 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-3 text-left text-sm font-semibold text-brand-700 sm:items-center sm:rounded-full sm:py-2 sm:text-center">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 sm:mt-0" />
              {t.packages.noContract}
            </p>
          </div>

          <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
            {t.packages.items.map((pkg) => (
              <article
                key={pkg.id}
                aria-labelledby={`pricing-${pkg.id}`}
                data-featured={pkg.recommended ? "true" : undefined}
                className={cn(
                  "pricing-card relative flex h-full min-w-0 flex-col rounded-3xl bg-white/95 p-7 sm:p-8",
                  pkg.recommended ? "border-2" : "border",
                )}
              >
                {pkg.recommended ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-brand-soft">
                    {t.packages.recommendedLabel}
                  </span>
                ) : null}
                <p className="pricing-level text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {pkg.level}
                </p>
                <h2
                  id={`pricing-${pkg.id}`}
                  className="mt-3 text-2xl font-semibold leading-tight text-slate-900 lg:min-h-[62px]"
                >
                  {pkg.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 lg:min-h-[88px]">
                  {pkg.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-medium text-ink-500">
                    {t.packages.managementLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-1.5 gap-y-2">
                    {pkg.startingAt ? (
                      <span className="text-sm font-medium text-ink-500">
                        {t.packages.from}
                      </span>
                    ) : null}
                    <span className="text-[2.75rem] font-semibold leading-none tracking-tight text-slate-900 tabular-nums">
                      {formatUSD(pkg.monthlyFee)}
                    </span>
                    <span className="text-sm font-medium text-ink-500">
                      {t.packages.perMonth}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">
                    {pkg.startingAt ? `${t.packages.from} ` : ""}
                    {formatUSD(pkg.setupFee)}
                    <span className="mt-1 block text-xs font-normal text-ink-500">
                      {t.packages.implementationLabel}
                    </span>
                  </p>
                  <p className="mt-3 text-xs text-ink-500">
                    {t.packages.terms}
                  </p>
                </div>

                <Button
                  asChild
                  className={cn(
                    "pricing-cta mt-6 h-auto w-full whitespace-normal rounded-xl px-5 py-4 text-center text-sm font-semibold leading-snug hover:bg-[color:var(--pc-cta-bg)]",
                    pkg.recommended ? null : "border",
                  )}
                >
                  <Link to={path("/contact")}>{pkg.ctaLabel}</Link>
                </Button>

                <div className="mt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    {t.packages.inclusionsLabel}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-500"
                      >
                        <Check
                          aria-hidden="true"
                          className="pricing-check mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="pricing-inherit mt-5 rounded-xl px-3 py-3 text-xs font-semibold leading-relaxed">
                    {pkg.scope}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-ink-100 bg-ink-50/60 p-4">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    <Sparkles
                      aria-hidden="true"
                      className="pricing-check h-3.5 w-3.5 flex-shrink-0"
                    />
                    {t.packages.usageLabel}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-500">
                    {pkg.usageNote}
                  </p>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink-500">
                  <span className="font-semibold text-slate-900">
                    {t.packages.exclusionsLabel}:{" "}
                  </span>
                  {pkg.exclusions}
                </p>

                <details className="mt-5 border-y border-ink-100 py-1">
                  <summary
                    aria-label={`${t.packages.detailsLabel}: ${pkg.name}`}
                    className="cursor-pointer rounded-lg py-3 text-sm font-semibold text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    {t.packages.detailsLabel}
                  </summary>
                  <div className="space-y-4 pb-4 pt-2">
                    {pkg.details.map((detail) => (
                      <div key={detail.title}>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {detail.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-ink-500">
                          {detail.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </details>
                <div className="mt-auto pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    {t.packages.idealForLabel}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {pkg.idealFor}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-ink-100 bg-ink-50/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              {t.notes.title}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.notes.items.map((note) => (
                <div key={note.title}>
                  <p className="text-sm font-semibold text-slate-900">
                    {note.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-ink-200 pt-5 text-xs leading-relaxed text-ink-500">
              {t.notes.guarantee}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.includes.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t.includes.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              {t.includes.description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.includes.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{item.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {t.includes.investmentLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.faq.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t.faq.title}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {t.faq.items.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm text-ink-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/features") }}
      />
    </div>
  );
}
