import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { MediaSlot } from "@/components/media/MediaSlot";
import { ContactFormSection } from "@/components/forms/ContactFormSection";
import { AdCampaignDemoSection } from "@/sections/AdCampaignDemo";
import { AppointmentCommitment } from "@/sections/AppointmentCommitment";
import { ConversationDemoSection } from "@/sections/ConversationDemo";
import { CrmPipelineDemoSection } from "@/sections/CrmPipelineDemo";
import { IndustryGallery } from "@/sections/IndustryGallery";
import { SchedulingPanel } from "@/components/booking/SchedulingPanel";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structuredData";
import { commonContent } from "@/i18n/content/common";
// The scheduler preview speaks for itself before any calendar loads, so its own
// labels are shared with the contact page rather than restated per funnel.
import { contactContent } from "@/i18n/content/contact";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import {
  clientMedia,
  industryMedia,
  industryPhotography,
} from "@/data/mediaSlots";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Languages,
  LineChart,
  Megaphone,
  MessageSquareText,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  getClientStories,
  getIndustryData,
  getIndustryNavLabels,
  getIndustryUi,
  industryHref,
} from "./industryData";
import type {
  IndustryLandingData,
  IndustryPackage,
  IndustrySlug,
  IndustryUiCopy,
} from "./industryTypes";
import type { LeadPageSource } from "@shared/lead";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  reducedMotion: boolean;
};

type PackageCardProps = {
  plan: IndustryPackage;
  ui: IndustryUiCopy;
  reducedMotion: boolean;
  bookHref: string;
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Reveal({
  children,
  className,
  delay = 0,
  reducedMotion,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={cn(
          "inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
          inverted
            ? "border-white/20 bg-white/5 text-ocean-200"
            : "border-brand-100 bg-brand-50 text-brand-600",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-6 text-3xl font-semibold tracking-tight sm:text-4xl",
          inverted ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-relaxed sm:text-lg",
          inverted ? "text-white/70" : "text-ink-500",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function PackageCard({ plan, ui, reducedMotion, bookHref }: PackageCardProps) {
  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-7 shadow-brand-card sm:p-8",
        plan.featured
          ? "border-2 border-brand-500 shadow-brand-soft"
          : "border border-ink-100",
      )}
    >
      {plan.featured ? (
        <span className="absolute right-6 top-0 rounded-b-xl bg-gradient-to-r from-brand-600 to-ocean-500 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
          {ui.packages.mostPopular}
        </span>
      ) : null}

      <div className="pr-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {plan.name}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900">
          {plan.nicheName}
        </h3>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight text-slate-900">
          {plan.price}
        </span>
        {plan.setup ? (
          <span className="text-sm font-medium text-ink-500">
            {ui.packages.perMonth}
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-xs font-medium text-ink-400">
        {plan.setup ? `+ ${plan.setup}` : plan.priceCaption}
      </p>
      <p className="mt-5 min-h-[4.5rem] text-sm leading-relaxed text-ink-500">
        {plan.description}
      </p>

      {plan.scopeNote ? (
        <p className="mt-5 text-xs leading-relaxed text-ink-400">
          {plan.scopeNote}
        </p>
      ) : null}

      <div
        className={cn(
          "space-y-3 rounded-2xl border border-brand-100 bg-brand-50/70 p-5",
          plan.scopeNote ? "mt-3" : "mt-6",
        )}
      >
        {plan.highlights.map((item) => {
          /* A tick would read as "included" on a plan that promises nothing. */
          const Marker = plan.scopeNote ? Plus : CheckCircle2;
          return (
            <p
              key={item}
              className="flex items-start gap-2.5 text-sm text-ink-600"
            >
              <Marker className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>{item}</span>
            </p>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-ink-100 bg-ink-50/70 p-5">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
          {plan.setup ? (
            <Megaphone className="h-3.5 w-3.5 shrink-0 text-brand-600" />
          ) : (
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-600" />
          )}
          {plan.note.title}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-ink-500">
          {plan.note.body}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
          {ui.packages.expandLabel}
        </p>
        <Accordion type="single" collapsible className="mt-2">
          {plan.details.map((detail, index) => (
            <AccordionItem
              key={detail.title}
              value={`${plan.name}-${index}`}
              className="border-ink-100"
            >
              <AccordionTrigger className="gap-4 text-left text-sm font-semibold text-slate-900 hover:no-underline">
                {detail.title}
              </AccordionTrigger>
              <AccordionContent className="pr-6 text-sm leading-relaxed text-ink-500">
                {detail.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {plan.footnotes?.length ? (
        <div className="mt-6 space-y-1.5 border-t border-ink-100 pt-4">
          {plan.footnotes.map((footnote) => (
            <p
              key={footnote}
              className="text-[11px] leading-relaxed text-ink-400"
            >
              {footnote}
            </p>
          ))}
        </div>
      ) : null}

      <div className="mt-6 border-t border-ink-100 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
          {ui.packages.idealFor}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          {plan.idealFor}
        </p>
      </div>

      <div className="mt-auto space-y-3 pt-7">
        <Button
          asChild
          className={cn(
            "h-auto w-full whitespace-normal rounded-xl px-5 py-4 text-center text-sm font-semibold leading-snug",
            plan.featured
              ? "bg-gradient-to-r from-brand-600 to-ocean-500 text-white shadow-brand-soft"
              : "bg-slate-950 text-white hover:bg-slate-800",
          )}
        >
          <Link to={bookHref}>
            {plan.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <a
          href="#custom-proposal"
          className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 px-5 py-3 text-center text-sm font-semibold text-ink-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
        >
          {ui.packages.customProposal}
          <FileText className="h-4 w-4 shrink-0" />
        </a>
      </div>
    </motion.article>
  );
}

function ClosedLandingHeader({
  data,
  ui,
  bookHref,
}: {
  data: IndustryLandingData;
  ui: IndustryUiCopy;
  bookHref: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png"
            alt={ui.header.logoAlt}
            width={42}
            height={42}
            className="h-10 w-10 shrink-0 rounded-xl object-contain shadow-brand-soft"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
              DigitalFace Marketing
            </p>
            <p className="hidden truncate text-xs text-ink-500 sm:block">
              {data.industryLabel}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher showIcon={false} className="p-0.5" />
          <Link
            to={bookHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-ocean-500 px-3.5 py-2.5 text-xs font-semibold text-white shadow-brand-soft transition hover:-translate-y-0.5 sm:px-5 sm:text-sm"
          >
            {ui.header.bookAssessment}
            <ArrowRight className="hidden h-4 w-4 sm:block" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function ClosedLandingFooter({
  data,
  ui,
}: {
  data: IndustryLandingData;
  ui: IndustryUiCopy;
}) {
  const { locale, path } = useLocale();

  // Until now these funnels only linked out to /privacy and /terms, which left them
  // close to orphaned: crawlers could reach them but could not leave, and no link
  // equity flowed back to the pages that rank. The body of the funnel is unchanged.
  const siblingIndustries = getIndustryNavLabels(locale).filter(
    (industry) => industry.slug !== data.slug,
  );

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              {ui.footer.moreLabel}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  className="text-white/75 transition hover:text-white"
                  to={path("/")}
                >
                  {ui.footer.homeLink}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/75 transition hover:text-white"
                  to={path("/features")}
                >
                  {ui.footer.systemLink}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/75 transition hover:text-white"
                  to={path("/pricing")}
                >
                  {ui.footer.plansLink}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              {ui.footer.otherIndustriesLabel}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {siblingIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    className="text-white/75 transition hover:text-white"
                    to={path(industryHref(industry.slug))}
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-6 border-t border-white/10 px-4 pb-28 pt-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:pb-10 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl object-contain"
          />
          <div>
            <p className="text-sm font-semibold">DigitalFace Marketing</p>
            <p className="text-xs text-white/55">{data.industryLabel}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-xs text-white/60">
          <span>© {new Date().getFullYear()} DigitalFace Marketing</span>
          <Link className="transition hover:text-white" to={path("/privacy")}>
            {ui.footer.privacy}
          </Link>
          <Link className="transition hover:text-white" to={path("/terms")}>
            {ui.footer.terms}
          </Link>
          <LanguageSwitcher tone="dark" showIcon={false} className="p-0.5" />
        </div>
      </div>
    </footer>
  );
}

/** Keeps each landing page distinguishable in lead reporting. */
const LEAD_PAGE_SOURCE_BY_SLUG: Record<IndustrySlug, LeadPageSource> = {
  "dental-practices": "landing_dental_practices",
  "aesthetic-medicine": "landing_aesthetic_medicine",
  "med-spas": "landing_med_spas",
};

export default function IndustryLandingPage({ slug }: { slug: IndustrySlug }) {
  const { locale, path } = useLocale();
  // One scheduling destination for the whole site; `from` records which funnel
  // the visitor came through.
  const bookHref = bookingHref(path(BOOKING_ROUTE), slug);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);

  const data = getIndustryData(locale, slug);
  const ui = getIndustryUi(locale);
  const contact = contactContent[locale];
  const stories = getClientStories(locale);
  const primaryStory = stories[data.proofLead];
  const secondaryStory =
    stories[data.proofLead === "diego" ? "jennifer" : "diego"];
  const pageMedia = industryMedia[data.slug];
  const pagePhotos = industryPhotography[data.slug];

  usePageMetadata(data.metadata.title, data.metadata.description);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* These funnels render outside MainLayout, so they carry their own schema.
          The FAQ block below is built from the same entries the page renders. */}
      <StructuredData
        id={`industry-${slug}`}
        data={[
          organizationSchema(locale),
          websiteSchema(locale),
          breadcrumbSchema(locale, [
            { name: commonContent[locale].nav.home, path: "/" },
            { name: data.navLabel, path: `/industries/${slug}` },
          ]),
          faqSchema(data.faq),
        ]}
      />
      <ClosedLandingHeader data={data} ui={ui} bookHref={bookHref} />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
          {/* The room this funnel is written for, held far enough back that the
              headline never fights it: a slow push-in, a flat wash for tone and
              a left-weighted gradient so the copy column keeps full contrast. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
          >
            <motion.img
              src={pagePhotos.backdrop}
              alt=""
              className="h-full w-full object-cover opacity-60"
              style={{ objectPosition: pagePhotos.backdropPosition }}
              initial={reducedMotion ? false : { scale: 1.14 }}
              animate={reducedMotion ? undefined : { scale: 1 }}
              transition={{ duration: 22, ease: "easeOut" }}
              decoding="async"
            />
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.36),transparent_48%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.25),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full border border-ocean-300/20 bg-ocean-400/10 blur-2xl"
            animate={
              reducedMotion
                ? undefined
                : { y: [0, 20, 0], x: [0, -12, 0], scale: [1, 1.06, 1] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:px-8">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -28 }}
              animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-200 backdrop-blur">
                {data.hero.eyebrow}
              </span>
              <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                {data.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {data.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-auto whitespace-normal rounded-xl bg-gradient-to-r from-brand-600 to-ocean-500 px-7 py-4 text-center text-base font-semibold leading-snug text-white shadow-brand-soft transition hover:-translate-y-0.5"
                >
                  <Link to={bookHref}>
                    {data.hero.primaryCta}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto whitespace-normal rounded-xl border-white/25 bg-white/5 px-7 py-4 text-center text-base font-semibold leading-snug text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="#system">{data.hero.secondaryCta}</a>
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {data.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                  >
                    <p className="text-xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={
                reducedMotion ? false : { opacity: 0, x: 28, scale: 0.97 }
              }
              animate={
                reducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }
              }
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-r from-brand-500/25 to-ocean-500/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-200">
                      {ui.heroVisual.label}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                      {data.hero.visualTitle}
                    </h2>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-ocean-200">
                    <LineChart className="h-5 w-5" />
                  </span>
                </div>

                <div className="relative mt-8 space-y-4">
                  <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-brand-400 via-ocean-400 to-emerald-400" />
                  {data.hero.visualStages.map((stage, index) => (
                    <motion.div
                      key={stage}
                      className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-4"
                      animate={
                        reducedMotion
                          ? undefined
                          : { x: [0, index % 2 === 0 ? 5 : -5, 0] }
                      }
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.35,
                      }}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-slate-900",
                          index === 0
                            ? "bg-brand-500"
                            : index === 1
                              ? "bg-ocean-500"
                              : "bg-emerald-500",
                        )}
                      >
                        {index === 0 ? (
                          <MessageSquareText className="h-4 w-4" />
                        ) : index === 1 ? (
                          <Sparkles className="h-4 w-4" />
                        ) : (
                          <CalendarDays className="h-4 w-4" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">
                          {stage}
                        </p>
                        <p className="mt-1 text-xs text-white/50">
                          {ui.heroVisual.stage} {index + 1}
                        </p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/65">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Languages className="mb-2 h-4 w-4 text-ocean-200" />
                    {ui.heroVisual.bilingual}
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <HeartHandshake className="mb-2 h-4 w-4 text-brand-200" />
                    {ui.heroVisual.handover}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal reducedMotion={reducedMotion}>
              <SectionHeading
                eyebrow={data.problem.eyebrow}
                title={data.problem.title}
                description={data.problem.description}
              />
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.problem.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    reducedMotion={reducedMotion}
                    delay={index * 0.04}
                  >
                    <motion.article
                      whileHover={reducedMotion ? undefined : { y: -6 }}
                      className="group h-full rounded-3xl border border-ink-100 bg-white p-7 shadow-brand-card transition hover:border-brand-200"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">
                        {item.description}
                      </p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Placed after the problem list and before the mechanics: the visitor
            has just read what is going wrong, so the photographs land on their
            own room rather than decorating an explanation they have not read. */}
        <IndustryGallery
          eyebrow={data.gallery.eyebrow}
          title={data.gallery.title}
          description={data.gallery.description}
          moments={data.gallery.moments}
          photos={pagePhotos.moments}
          reducedMotion={reducedMotion}
        />

        {/* Attract, convert and manage used to be announced by a card row here
            and then demonstrated three times immediately below it, in the same
            words. The demonstrations are the stronger telling, so they carry
            the model themselves — and the hero's "see the system" link lands on
            the first of them rather than on a summary of them. */}
        <AdCampaignDemoSection
          id="system"
          content={data.adCampaignDemo}
          ctaHref={bookHref}
        />

        <ConversationDemoSection
          content={data.conversationDemo}
          ctaHref={bookHref}
        />

        <CrmPipelineDemoSection
          content={data.crmPipelineDemo}
          ctaHref={bookHref}
        />

        {/* The board above ends on "appointment requested", which is exactly
            where the next question arrives: how do you know they will turn up?
            The reservation step is answered here, inside the journey it belongs
            to, rather than as a payments pitch of its own. */}
        <AppointmentCommitment content={data.appointmentCommitment} />

        {/* The wide plate used to sit directly under the hero, where it restated
            the promise over a second photograph before the visitor had read an
            argument. It earns more here: the demonstrations are done, so the
            headline lands as the conclusion of what was just shown and opens the
            dark half of the page. */}
        <section className="bg-slate-950 pt-16 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MediaSlot
              spec={pageMedia.hero}
              aspectClassName="aspect-[16/10] sm:aspect-[21/8]"
              className="border-white/15 shadow-2xl"
              overlay={
                <div className="flex h-full items-end bg-gradient-to-t from-slate-950/85 via-slate-950/5 to-transparent p-6 sm:p-9">
                  <div className="max-w-2xl text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-200">
                      {data.navLabel} · {ui.heroMedia.eyebrow}
                    </p>
                    <p className="mt-3 text-xl font-semibold sm:text-3xl">
                      {data.hero.mediaHeadline}
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-24 bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal reducedMotion={reducedMotion}>
              <SectionHeading
                eyebrow={data.capabilities.eyebrow}
                title={data.capabilities.title}
                description={data.capabilities.description}
                inverted
              />
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.capabilities.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    reducedMotion={reducedMotion}
                    delay={index * 0.04}
                  >
                    <motion.article
                      whileHover={
                        reducedMotion ? undefined : { y: -6, scale: 1.01 }
                      }
                      className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-ocean-300/30 hover:bg-white/10"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-ocean-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">
                        {item.description}
                      </p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal
              reducedMotion={reducedMotion}
              className="mt-10 rounded-2xl border border-ocean-300/20 bg-ocean-400/10 p-5 text-center text-sm text-white/75"
            >
              <ShieldCheck className="mr-2 inline h-5 w-5 text-ocean-200" />
              {ui.capabilitiesDisclaimer}
            </Reveal>
          </div>
        </section>

        <section
          id="packages"
          className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal reducedMotion={reducedMotion}>
              <SectionHeading
                eyebrow={ui.packages.eyebrow}
                title={data.packagesTitle}
                description={ui.packages.description}
              />
            </Reveal>
            <Reveal reducedMotion={reducedMotion} className="mt-6 text-center">
              <p className="inline-flex items-start gap-2 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-3 text-left text-sm font-semibold text-brand-700 sm:items-center sm:rounded-full sm:py-2 sm:text-center">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" />
                {ui.packages.noContract}
              </p>
            </Reveal>
            <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">
              {data.packages.map((plan, index) => (
                <Reveal
                  key={plan.nicheName}
                  reducedMotion={reducedMotion}
                  delay={index * 0.08}
                  className="h-full"
                >
                  <PackageCard
                    plan={plan}
                    ui={ui}
                    reducedMotion={reducedMotion}
                    bookHref={bookHref}
                  />
                </Reveal>
              ))}
            </div>
            <Reveal
              reducedMotion={reducedMotion}
              className="mt-10 rounded-3xl border border-ink-100 bg-ink-50/70 p-6 text-center text-sm leading-relaxed text-ink-500"
            >
              {ui.packages.footnote}
            </Reveal>
          </div>
        </section>

        {/* The full-width proposal band that used to sit here repeated, word for
            word, the heading and description the proposal form itself carries
            further down. The cards above already link to that form. */}
        <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal reducedMotion={reducedMotion}>
              <SectionHeading
                eyebrow={ui.proof.eyebrow}
                title={ui.proof.title}
                description={ui.proof.description}
              />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[primaryStory, secondaryStory].map((story, index) => (
                <Reveal
                  key={story.id}
                  reducedMotion={reducedMotion}
                  delay={index * 0.08}
                >
                  <article className="h-full rounded-3xl border border-brand-100 bg-white p-7 shadow-brand-card sm:p-8">
                    <MediaSlot
                      spec={clientMedia[story.id]}
                      aspectClassName="aspect-[16/8]"
                      className="mb-7 border-ink-100 shadow-none"
                      compact
                    />
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {ui.proof.activeLabel}
                      </span>
                      <span className="text-xs font-medium text-ink-400">
                        {story.sector}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                      {story.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {story.summary}
                    </p>
                    <div className="mt-6 space-y-3">
                      {story.delivered.map((item) => (
                        <p
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-ink-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal reducedMotion={reducedMotion}>
              <SectionHeading
                eyebrow={ui.faq.eyebrow}
                title={data.faqTitle}
                description={data.faqDescription}
              />
            </Reveal>
            <Reveal reducedMotion={reducedMotion} className="mt-12">
              <Accordion
                type="single"
                collapsible
                className="rounded-3xl border border-ink-100 bg-white px-6 shadow-brand-card sm:px-8"
              >
                {data.faq.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${index}`}
                    className="border-ink-100"
                  >
                    <AccordionTrigger className="gap-5 py-6 text-left text-base font-semibold text-slate-900 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-3xl pb-6 pr-8 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* The funnel closes on the same scheduling subsection the contact page
            closes on. The long-standing `book-assessment` anchor is kept so
            older links into this page still land on the conversion block. */}
        <SchedulingPanel
          id="book-assessment"
          locale={locale}
          eyebrow={ui.booking.eyebrow}
          title={data.booking.title}
          description={data.booking.description}
          ctaLabel={ui.booking.ctaLabel}
          highlights={contact.booking.highlights}
          panel={contact.booking.panel}
          secondaryLabel={contact.booking.secondaryLabel}
          href={bookHref}
          formHref="#custom-proposal"
        />

        {/* Scheduling a call and asking for a scoped proposal are different
            requests, so the form keeps its own anchor and its own lead routing
            below the calendar rather than competing with it beside one. */}
        <ContactFormSection
          id="custom-proposal"
          pageSource={LEAD_PAGE_SOURCE_BY_SLUG[slug]}
          eyebrow={ui.booking.customScopeLabel}
          title={data.booking.proposalTitle}
          description={data.booking.proposalDescription}
        />
      </main>

      <ClosedLandingFooter data={data} ui={ui} />

      <Link
        to={bookHref}
        className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-ocean-500 px-5 py-4 text-sm font-semibold text-white shadow-2xl md:hidden"
      >
        {ui.mobileCta}
        <ArrowRight className="h-4 w-4 shrink-0" />
      </Link>
    </div>
  );
}
