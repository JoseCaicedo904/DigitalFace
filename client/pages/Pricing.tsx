import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { pricingContent } from "@/i18n/content/pricing";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

/** The middle plan is the highlighted one in every locale. */
const FEATURED_INDEX = 1;

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
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {t.packages.items.map((pkg, index) => {
              const featured = index === FEATURED_INDEX;
              return (
                <div
                  key={pkg.name}
                  data-featured={featured ? "true" : undefined}
                  className={cn(
                    "pricing-card relative flex h-full flex-col rounded-3xl bg-white/95 p-8",
                    featured ? "border-2" : "border",
                  )}
                >
                  {featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-brand-soft">
                      {t.packages.mostPopular}
                    </span>
                  ) : null}

                  <h2 className="text-2xl font-semibold text-slate-900">
                    {pkg.name}
                  </h2>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight text-slate-900">
                      {pkg.price}
                    </span>
                    <span className="text-sm font-medium text-ink-500">
                      {t.packages.perMonth}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-400">+ {pkg.setup}</p>

                  <p className="mt-4 text-sm text-ink-500">{pkg.description}</p>

                  <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {t.packages.scopeLabel}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {pkg.scope.map((item) => (
                        <span
                          key={item}
                          className="pricing-chip rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-brand-600 ring-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-ink-500">
                      {pkg.adSpend}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {pkg.includes.map((item) => (
                      <p
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink-500"
                      >
                        <CheckCircle2 className="pricing-check mt-0.5 h-4 w-4 flex-shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-ink-100 pt-5">
                    <p className="text-xs uppercase tracking-wide text-ink-400">
                      {t.packages.idealForLabel}
                    </p>
                    <p className="mt-1.5 text-sm text-ink-500">
                      {pkg.idealFor}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <Button
                      asChild
                      className={cn(
                        // `hover:bg-[…]` only restates the card-driven colour so
                        // the Button variant's own hover background cannot win
                        // when the cursor sits directly on the CTA.
                        "pricing-cta h-auto w-full whitespace-normal rounded-xl px-6 py-4 text-center text-sm font-semibold leading-snug hover:bg-[color:var(--pc-cta-bg)]",
                        featured ? null : "border",
                      )}
                    >
                      <Link to={path("/contact")}>{pkg.ctaLabel}</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-ink-100 bg-ink-50/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              {t.notes.title}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
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
