import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { pricingContent } from "@/i18n/content/pricing";
import { cn } from "@/lib/utils";
import { CalendarDays, Check, ChevronDown, ShieldCheck } from "lucide-react";
import { BOOKING_ROUTE } from "@/components/booking/bookingRoute";

function FeatureAvailability({
  included,
  optional,
  labels,
}: {
  included: boolean;
  optional: boolean;
  labels: { included: string; notIncluded: string; optional: string };
}) {
  if (!included) {
    return (
      <span>
        <span aria-hidden="true" className="text-ink-300">
          —
        </span>
        <span className="sr-only">{labels.notIncluded}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex flex-wrap items-center justify-center gap-1.5">
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200"
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      {optional ? (
        <span className="text-xs text-ink-500">{labels.optional}</span>
      ) : (
        <span className="sr-only">{labels.included}</span>
      )}
    </span>
  );
}

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
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
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

          <div className="mt-16" data-pricing-cards>
            {/* Subgrid keeps the six feature rows and CTAs aligned without clipping translated copy. */}
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
              {t.packages.items.map((pkg) => (
                <article
                  key={pkg.id}
                  aria-labelledby={`pricing-${pkg.id}`}
                  data-featured={pkg.recommended ? "true" : undefined}
                  className={cn(
                    "pricing-card relative grid min-w-0 content-start rounded-3xl bg-white/95 p-6 lg:row-span-9 lg:grid-rows-[subgrid]",
                    pkg.recommended ? "border-2" : "border",
                  )}
                >
                  {pkg.recommended ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-brand-soft">
                      {t.packages.recommendedLabel}
                    </span>
                  ) : null}
                  <div className="pb-4">
                    <p className="pricing-level text-[11px] font-semibold uppercase tracking-[0.16em]">
                      {pkg.level}
                    </p>
                    <h2
                      id={`pricing-${pkg.id}`}
                      className="mt-2 text-2xl font-semibold leading-tight text-slate-900"
                    >
                      {pkg.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {pkg.description}
                    </p>
                  </div>
                  <p className="pricing-inherit mb-2 self-start rounded-lg px-3 py-2 text-xs font-semibold">
                    {pkg.inherits}
                  </p>
                  <ul className="grid lg:row-span-6 lg:grid-rows-[subgrid]">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-start gap-2.5 border-b border-ink-100 py-3 last:border-b-0"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200"
                        >
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold leading-5 text-slate-900">
                            {feature.title}
                          </h3>
                          <p className="mt-0.5 text-sm leading-5 text-ink-500">
                            {feature.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button
                      asChild
                      className={cn(
                        "pricing-cta h-auto w-full whitespace-normal rounded-xl px-4 py-3 text-center text-sm font-semibold leading-snug hover:bg-[color:var(--pc-cta-bg)]",
                        pkg.recommended ? null : "border",
                      )}
                    >
                      <Link
                        to={path(BOOKING_ROUTE)}
                        aria-label={`${t.packages.ctaContext} ${pkg.name}`}
                        data-plan={pkg.id}
                      >
                        <CalendarDays
                          aria-hidden="true"
                          className="mr-2 h-4 w-4 shrink-0"
                        />
                        {t.packages.ctaLabel}
                      </Link>
                    </Button>
                    <p className="mt-2 text-center text-xs leading-5 text-ink-500">
                      {t.packages.callNote}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <details className="group/comparison mt-6 rounded-2xl border border-ink-100 bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-brand-600">
                  {t.packages.comparison.title}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-brand-600 transition-transform group-open/comparison:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <div className="border-t border-ink-100">
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed text-ink-500">
                    {t.packages.comparison.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4 text-emerald-700"
                      />
                      {t.packages.comparison.included}
                    </span>
                    <span>{t.packages.comparison.optional}</span>
                    <span>
                      <span aria-hidden="true">— </span>
                      {t.packages.comparison.notIncluded}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-ink-500 lg:hidden">
                    {t.packages.comparison.scrollHint}
                  </p>
                </div>
                <div
                  role="region"
                  aria-label={t.packages.comparison.title}
                  tabIndex={0}
                  className="overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
                >
                  <table className="w-full min-w-[720px] table-fixed border-collapse text-sm">
                    <caption className="sr-only">
                      {t.packages.comparison.title}
                    </caption>
                    <thead>
                      <tr className="border-y border-ink-100 bg-ink-50/70">
                        <th
                          scope="col"
                          className="w-[40%] px-5 py-4 text-left font-semibold text-slate-900"
                        >
                          {t.packages.comparison.featureLabel}
                        </th>
                        {t.packages.items.map((pkg) => (
                          <th
                            key={pkg.id}
                            scope="col"
                            className={cn(
                              "px-3 py-4 text-center font-semibold",
                              pkg.recommended
                                ? "bg-brand-50 text-brand-700"
                                : "text-slate-900",
                            )}
                          >
                            {pkg.shortName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    {t.packages.comparison.groups.map((group) => (
                      <tbody key={group.title}>
                        <tr>
                          <th
                            scope="rowgroup"
                            colSpan={4}
                            className="border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink-500"
                          >
                            {group.title}
                          </th>
                        </tr>
                        {group.items.map((feature) => (
                          <tr
                            key={feature.id}
                            className="border-b border-ink-100"
                          >
                            <th
                              scope="row"
                              className="px-5 py-3 text-left font-normal"
                            >
                              <span className="block text-[13px] font-semibold text-slate-900">
                                {feature.title}
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-ink-500">
                                {feature.body}
                              </span>
                            </th>
                            {t.packages.items.map((pkg) => (
                              <td
                                key={pkg.id}
                                className={cn(
                                  "px-3 py-3 text-center",
                                  pkg.recommended && "bg-brand-50/30",
                                )}
                              >
                                <FeatureAvailability
                                  included={pkg.includedFeatures.includes(
                                    feature.id,
                                  )}
                                  optional={feature.optional}
                                  labels={t.packages.comparison}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    ))}
                    <tbody>
                      <tr>
                        <th
                          scope="rowgroup"
                          colSpan={4}
                          className="border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink-500"
                        >
                          {t.packages.comparison.scopeLabel}
                        </th>
                      </tr>
                      {t.packages.comparison.limits.map((limit) => (
                        <tr
                          key={limit.label}
                          className="border-b border-ink-100"
                        >
                          <th
                            scope="row"
                            className="px-5 py-3 text-left text-[13px] font-semibold text-slate-900"
                          >
                            {limit.label}
                          </th>
                          {limit.values.map((value, index) => (
                            <td
                              key={t.packages.items[index].id}
                              className={cn(
                                "px-3 py-3 text-center text-xs leading-5 text-ink-500",
                                t.packages.items[index].recommended &&
                                  "bg-brand-50/30",
                              )}
                            >
                              {value === "—" ? (
                                <FeatureAvailability
                                  included={false}
                                  optional={false}
                                  labels={t.packages.comparison}
                                />
                              ) : (
                                value
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-5">
                  <p className="text-xs leading-relaxed text-ink-500">
                    {t.packages.comparison.scopeNote}
                  </p>
                  <div className="mt-5 grid items-start gap-4 lg:grid-cols-3">
                    {t.packages.items.map((pkg) => (
                      <details
                        key={pkg.id}
                        className="rounded-xl border border-ink-100 p-4"
                      >
                        <summary className="cursor-pointer rounded text-sm font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
                          {pkg.shortName}
                          <span className="mt-1 block text-xs font-normal text-ink-500">
                            {t.packages.comparison.detailsLabel}
                          </span>
                        </summary>
                        <div className="space-y-4 pt-4">
                          <p className="text-xs leading-5 text-ink-500">
                            <strong className="text-slate-900">
                              {t.packages.idealForLabel}:{" "}
                            </strong>
                            {pkg.idealFor}
                          </p>
                          {pkg.details.map((detail) => (
                            <div key={detail.title}>
                              <h3 className="text-[13px] font-semibold text-slate-900">
                                {detail.title}
                              </h3>
                              <p className="mt-1 text-xs leading-5 text-ink-500">
                                {detail.body}
                              </p>
                            </div>
                          ))}
                          <div>
                            <h3 className="text-[13px] font-semibold text-slate-900">
                              {t.packages.usageLabel}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-ink-500">
                              {pkg.usageNote}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-[13px] font-semibold text-slate-900">
                              {t.packages.exclusionsLabel}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-ink-500">
                              {pkg.exclusions}
                            </p>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                  <Link
                    to={path(BOOKING_ROUTE)}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-brand-600 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    <CalendarDays
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                    />
                    {t.packages.ctaLabel}
                  </Link>
                </div>
              </div>
            </details>
          </div>

          <div className="mt-12 rounded-3xl border border-ink-100 bg-ink-50/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              {t.notes.title}
            </p>
            <div className="mt-6 divide-y divide-ink-200">
              {t.notes.items.map((note) => (
                <details key={note.title} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-details-marker]:hidden">
                    {note.title}
                    <ChevronDown
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {note.body}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-6 border-t border-ink-200 pt-5 text-sm leading-relaxed text-ink-500">
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path(BOOKING_ROUTE) }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/features") }}
      />
    </div>
  );
}
