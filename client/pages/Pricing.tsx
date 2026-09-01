import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { ALLOWANCE_NOT_INCLUDED, pricingContent } from "@/i18n/content/pricing";
import { cn } from "@/lib/utils";
import { Check, Megaphone, Plus, ShieldCheck, Sparkles } from "lucide-react";

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
            {t.packages.items.map((pkg, index) => {
              const featured = index === FEATURED_INDEX;
              /**
               * The fixed plans lead with a media-budget rule, so the note gets
               * the megaphone. Custom leads with what a quote is built from.
               */
              const NoteIcon = pkg.perMonth ? Megaphone : Sparkles;
              return (
                <article
                  key={pkg.name}
                  data-featured={featured ? "true" : undefined}
                  className={cn(
                    "pricing-card relative flex h-full flex-col rounded-3xl bg-white/95 p-7 sm:p-8",
                    featured ? "border-2" : "border",
                  )}
                >
                  {featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-brand-soft">
                      {t.packages.mostPopular}
                    </span>
                  ) : null}

                  <p className="pricing-level text-[11px] font-semibold uppercase tracking-[0.18em]">
                    {pkg.level}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 lg:min-h-[62px]">
                    {pkg.name}
                  </h2>
                  {/*
                    The min-height is an alignment device, not a layout rule: it
                    keeps the price block, the CTA and the block below them on
                    the same baseline for the copy lengths we ship. A longer
                    translation simply pushes the card taller.
                  */}
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 lg:min-h-[88px]">
                    {pkg.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-[2.75rem] font-semibold leading-none tracking-tight text-slate-900 tabular-nums">
                      {pkg.price}
                    </span>
                    {pkg.perMonth ? (
                      <span className="text-sm font-medium text-ink-500">
                        {t.packages.perMonth}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs text-ink-400">
                    {pkg.setup && pkg.term
                      ? `+ ${pkg.setup} · ${pkg.term}`
                      : pkg.priceCaption}
                  </p>

                  <Button
                    asChild
                    className={cn(
                      // `hover:bg-[…]` only restates the card-driven colour so
                      // the Button variant's own hover background cannot win
                      // when the cursor sits directly on the CTA.
                      "pricing-cta mt-6 h-auto w-full whitespace-normal rounded-xl px-6 py-4 text-center text-sm font-semibold leading-snug hover:bg-[color:var(--pc-cta-bg)]",
                      featured ? null : "border",
                    )}
                  >
                    <Link to={path("/contact")}>{pkg.ctaLabel}</Link>
                  </Button>

                  {/*
                    Capture and AI carry the same rows in the same order, so the
                    two fixed plans compare by reading across. Custom has no
                    fixed quantities, so it has no table — by design.
                  */}
                  {pkg.allowances.length > 0 ? (
                    <div className="mt-7 rounded-2xl border border-ink-100 bg-ink-50/60 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                        {t.packages.allowancesLabel}
                      </p>
                      <dl className="mt-3">
                        {pkg.allowances.map((allowance) => {
                          const included =
                            allowance.value !== ALLOWANCE_NOT_INCLUDED;
                          return (
                            <div
                              key={allowance.label}
                              className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink-200/70 py-2 last:border-b-0 last:pb-0"
                            >
                              <dt
                                className={cn(
                                  "text-xs",
                                  included ? "text-ink-500" : "text-ink-400",
                                )}
                              >
                                {allowance.label}
                              </dt>
                              <dd
                                className={cn(
                                  "shrink-0 text-right text-[13px] font-semibold tabular-nums",
                                  included
                                    ? "pricing-allowance-value"
                                    : "text-ink-300",
                                )}
                              >
                                {allowance.value}
                              </dd>
                            </div>
                          );
                        })}
                      </dl>
                    </div>
                  ) : null}

                  {/*
                    The commercial guardrail: the media-budget ceiling on the
                    fixed plans, and what a Custom quote is built from. It is a
                    panel of its own so it cannot be skimmed past.
                  */}
                  <div
                    className={cn(
                      "rounded-2xl border border-ink-100 bg-ink-50/60 p-5",
                      // Sits directly under the CTA on Custom, which has no
                      // allowance table above it.
                      pkg.allowances.length > 0 ? "mt-4" : "mt-7",
                    )}
                  >
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      <NoteIcon className="pricing-check h-3.5 w-3.5 flex-shrink-0" />
                      {pkg.note.title}
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed text-ink-500">
                      {pkg.note.body}
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {pkg.scopeLabel}
                    </p>

                    {pkg.scopeNote ? (
                      <p className="mt-2 text-[11px] leading-relaxed text-ink-400">
                        {pkg.scopeNote}
                      </p>
                    ) : null}

                    {pkg.inherits ? (
                      <p className="pricing-inherit mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold">
                        <Plus className="h-3.5 w-3.5 flex-shrink-0" />
                        {pkg.inherits}
                      </p>
                    ) : null}

                    <div className="mt-4 space-y-5">
                      {pkg.groups.map((group) => (
                        <div key={group.title}>
                          <p className="pricing-group-title text-[11px] font-semibold uppercase tracking-[0.14em]">
                            {group.title}
                          </p>
                          <ul className="mt-2 space-y-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-500"
                              >
                                <Check className="pricing-check mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Usage-based billing, kept small and kept on the card. */}
                  {pkg.footnotes.length > 0 ? (
                    <div className="mt-6 space-y-1.5 border-t border-ink-100 pt-4">
                      {pkg.footnotes.map((footnote) => (
                        <p
                          key={footnote}
                          className="text-[11px] leading-relaxed text-ink-400"
                        >
                          {footnote}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-auto border-t border-ink-100 pt-5 text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {t.packages.idealForLabel}
                    </p>
                    <p className="mt-1.5 text-sm text-ink-500">
                      {pkg.idealFor}
                    </p>
                  </div>
                </article>
              );
            })}
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
