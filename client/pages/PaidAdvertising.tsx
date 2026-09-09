import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Crosshair,
  FlaskConical,
  Gauge,
  Layers3,
  LineChart,
  MapPinned,
  MessageSquareText,
  MousePointerClick,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/ui/cta-link";
import { AddToRequestButton } from "@/components/request/AddToRequestButton";
import { REQUEST_SERVICES_ANCHOR } from "@/components/request/anchor";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  ChannelRoleExplorer,
  FlowArrow,
  PaidMediaCommandCenter,
  type PaidChannel,
} from "@/components/paid-ads/PaidMediaExperience";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { getServiceName, type ServiceId } from "@/data/serviceCatalog";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { paidAdvertisingContent } from "@/i18n/content/paidAdvertising";
import { faqSchema } from "@/lib/structuredData";
import { CtaSection } from "@/sections/CTA";

const outcomeIcons = [UsersRound, MousePointerClick, Target, LineChart];
const decisionIcons = [
  UsersRound,
  MessageSquareText,
  SearchCheck,
  MapPinned,
  CircleDollarSign,
  FlaskConical,
];
const scopeIcons = [Compass, Layers3, Sparkles, Crosshair, Route, Gauge];

const platformAssets: Record<
  PaidChannel,
  {
    serviceId: ServiceId;
    logo: string;
    width: number;
    height: number;
    accent: string;
  }
> = {
  meta: {
    serviceId: "meta-ads",
    logo: "/media/Logos_Partners/14-meta.png",
    width: 438,
    height: 127,
    accent: "from-blue-500 to-brand-500",
  },
  google: {
    serviceId: "google-ads",
    logo: "/media/Logos_Partners/15-google-ads.png",
    width: 493,
    height: 154,
    accent: "from-amber-400 via-emerald-500 to-blue-500",
  },
  tiktok: {
    serviceId: "tiktok-ads",
    logo: "/media/Logos_Partners/16-tiktok.png",
    width: 465,
    height: 186,
    accent: "from-cyan-400 to-rose-400",
  },
};

const platformOrder: PaidChannel[] = ["meta", "google", "tiktok"];

export default function PaidAdvertising() {
  const { locale, path } = useLocale();
  const t = paidAdvertisingContent[locale];
  const reducedMotion = Boolean(useReducedMotion());
  const bookHref = bookingHref(path(BOOKING_ROUTE), "paid-advertising");
  const requestHref = `${path("/contact")}#${REQUEST_SERVICES_ANCHOR}`;

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <StructuredData id="paid-advertising-faq" data={faqSchema(t.faq.items)} />

      <section className="relative isolate overflow-hidden bg-[#050711] py-16 text-white sm:py-20 lg:min-h-[calc(100vh-5rem)] lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />
          <div className="absolute -left-40 -top-56 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.3),transparent_67%)] blur-3xl" />
          <div className="absolute -bottom-64 -right-32 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.24),transparent_68%)] blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center lg:gap-16">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-200 backdrop-blur">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-ocean-300"
                  aria-hidden="true"
                />
                {t.hero.eyebrow}
              </span>
              <h1 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                {t.hero.description}
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  className="h-auto whitespace-normal rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-7 py-4 text-center text-base font-semibold leading-snug text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <CtaLink href="#channel-plan">
                    {t.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </CtaLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto whitespace-normal rounded-xl border-white/25 bg-white/[0.06] px-7 py-4 text-center text-base font-semibold leading-snug text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <CtaLink href="#management">{t.hero.secondaryCta}</CtaLink>
                </Button>
              </div>

              <p className="mt-7 flex max-w-xl items-start gap-3 text-sm leading-relaxed text-white/50">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-ocean-200"
                  aria-hidden="true"
                />
                {t.hero.budgetNote}
              </p>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.08 }}
              className="relative"
            >
              <div
                className="absolute inset-8 rounded-[3rem] bg-brand-500/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl">
                <PaidMediaCommandCenter content={t.heroVisual} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-ink-100 bg-slate-950 py-16 text-white sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
              {t.outcomes.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.outcomes.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              {t.outcomes.description}
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.outcomes.items.map((item, index) => {
              const Icon = outcomeIcons[index] ?? Target;
              return (
                <motion.li
                  key={item.title}
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative bg-slate-950 p-6 sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-ocean-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        id="channel-plan"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.channels.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.channels.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
              {t.channels.description}
            </p>
          </div>
          <ChannelRoleExplorer content={t.channels} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-white to-ink-50 py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-200/25 blur-3xl"
        />
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                {t.decision.eyebrow}
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t.decision.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.decision.description}
              </p>
              <p className="mt-7 rounded-2xl border border-brand-100 bg-white p-5 text-sm font-medium leading-relaxed text-brand-800 shadow-brand-card">
                {t.decision.conclusion}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.decision.inputs.map((input, index) => {
                const Icon = decisionIcons[index] ?? Compass;
                return (
                  <motion.article
                    key={input.title}
                    initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={
                      reducedMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: (index % 2) * 0.06 }}
                    className="group rounded-3xl border border-ink-100 bg-white p-6 shadow-brand-card transition hover:-translate-y-1 hover:border-brand-200"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-ocean-50 text-brand-600 transition group-hover:from-brand-600 group-hover:to-ocean-500 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {input.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {input.body}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="management"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.management.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.management.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
              {t.management.description}
            </p>
          </div>

          <ol className="mt-14 grid gap-4 lg:flex lg:items-stretch">
            {t.management.stages.map((stage, index) => (
              <li key={stage.number} className="contents">
                <motion.article
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative flex h-full flex-col rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-ink-50/70 p-5 shadow-brand-card lg:min-h-[25rem] lg:min-w-0 lg:flex-1 xl:p-6"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand-500">
                    {stage.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-tight text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {stage.description}
                  </p>
                  <ul className="mt-auto space-y-2 pt-6">
                    {stage.outputs.map((output) => (
                      <li
                        key={output}
                        className="flex gap-2 text-xs leading-relaxed text-ink-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </motion.article>
                {index < t.management.stages.length - 1 ? <FlowArrow /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#060915] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.24),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.18),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                {t.measurement.eyebrow}
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.measurement.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
                {t.measurement.description}
              </p>
              <p className="mt-7 border-l-2 border-ocean-300/60 pl-5 text-sm leading-relaxed text-white/50">
                {t.measurement.note}
              </p>
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-ocean-500">
                    <BarChart3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {t.measurement.dashboardLabel}
                  </p>
                </div>
                <span className="flex gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-rose-400/70" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.07] p-5">
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    {t.measurement.primaryTitle}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {t.measurement.primary.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-semibold text-white/85"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-200">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {t.measurement.supportingTitle}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.measurement.supporting.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
                    {t.measurement.supportingNote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.scope.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.scope.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
              {t.scope.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.scope.items.map((item, index) => {
              const Icon = scopeIcons[index] ?? Sparkles;
              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-ink-100 bg-white p-7 shadow-brand-card transition hover:border-brand-200 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-ocean-50 text-brand-600 transition group-hover:from-brand-600 group-hover:to-ocean-500 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-ocean-50 p-7 sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-60 w-60 rounded-full bg-ocean-200/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {t.scope.ecosystemTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {t.scope.ecosystemBody}
                </p>
              </div>
              <Link
                to={path("/features")}
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-700"
              >
                {t.scope.ecosystemCta}
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-ink-50 via-white to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.services.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
              {t.services.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {platformOrder.map((channel) => {
              const card = t.services.cards[channel];
              const asset = platformAssets[channel];
              return (
                <article
                  key={channel}
                  id={asset.serviceId}
                  className="relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-brand-card"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${asset.accent}`}
                  />
                  <div className="flex min-h-10 items-center">
                    <img
                      src={asset.logo}
                      alt=""
                      width={asset.width}
                      height={asset.height}
                      className="h-7 w-auto max-w-[9rem] object-contain"
                    />
                  </div>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                    {card.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                    {card.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                    {card.description}
                  </p>
                  <div className="mt-7">
                    <AddToRequestButton
                      serviceId={asset.serviceId}
                      serviceName={getServiceName(asset.serviceId, locale)}
                    />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-brand-card">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <CircleDollarSign className="h-5 w-5" aria-hidden="true" />
                </span>
                {t.services.pricingTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                {t.services.pricingBody}
              </p>
            </div>
            <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-brand-card">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                {t.services.budgetTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                {t.services.budgetBody}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-auto w-full whitespace-normal rounded-xl bg-brand-600 px-7 py-4 text-center text-base font-semibold text-white shadow-brand-soft sm:w-auto"
            >
              <Link to={requestHref}>{t.services.requestCta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto w-full whitespace-normal rounded-xl border-brand-200 px-7 py-4 text-center text-base font-semibold text-brand-700 sm:w-auto"
            >
              <Link to={path("/contact")}>{t.services.proposalCta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.faq.title}
          </h2>
          <div className="mt-10 divide-y divide-ink-100 overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-brand-card">
            {t.faq.items.map((item) => (
              <details key={item.question} className="group px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <ChevronDown
                      className="h-4 w-4 transition group-open:rotate-180 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="max-w-3xl pb-2 pt-4 text-sm leading-relaxed text-ink-500">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: bookHref }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/contact") }}
      />
    </div>
  );
}
