import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Outcome-based",
    copy:
      "We quote against pipeline lift, revenue impact, or ops hours saved—not arbitrary time blocks.",
  },
  {
    title: "Transparent",
    copy:
      "Milestone scopes, shared timelines, and weekly budget tracking remove surprises.",
  },
  {
    title: "Flexible",
    copy:
      "Start with a sprint, expand into retainers, or pause with 30 days notice as priorities shift.",
  },
  {
    title: "Senior-led",
    copy:
      "Every package includes direct access to the strategists and builders doing the work.",
  },
];

const packages = [
  {
    name: "Paid media sprint",
    description:
      "Four to six weeks to audit, rebuild, and relaunch Meta, TikTok, LinkedIn, and Google campaigns with new creative + reporting.",
    idealFor: "Teams needing quick wins or a reset before scaling spend.",
    investment: "Projects from ,500 USD",
    includes: [
      "Channel and creative blueprint with testing roadmap",
      "Full rebuild of campaigns, pixels, and conversion tracking",
      "Daily optimization plus performance dashboard",
    ],
  },
  {
    name: "CRM + automation build",
    description:
      "Implementation of HubSpot, Bitrix24, or GoHighLevel with pipelines, scoring, workflows, and training.",
    idealFor: "Revenue teams upgrading from spreadsheets or messy legacy setups.",
    investment: ",500 - ,000 USD depending on scope",
    includes: [
      "Architecture, migration, and data hygiene",
      "Workflow, chatbot, and notification automation",
      "Dashboards plus enablement sessions",
    ],
  },
  {
    name: "Web + landing system",
    description:
      "Conversion-focused landing pages or corporate sites with copy, design, development, and analytics.",
    idealFor: "Companies that need faster storytelling and measurable UX.",
    investment: ",000 - ,000 USD",
    includes: [
      "Messaging + UX workshop and wireframes",
      "Custom design system and responsive build",
      "Speed, SEO, and experiment setup",
    ],
  },
  {
    name: "Shopify growth studio",
    description:
      "Custom storefront or optimization sprint covering theme work, apps, CRO, and lifecycle flows.",
    idealFor: "Ecommerce teams improving AOV, retention, or launch timelines.",
    investment: "Projects from ,500 USD",
    includes: [
      "Theme customization and merchandising support",
      "App integrations, fulfillment, and automation",
      "Post-launch optimization roadmap",
    ],
  },
];

const retainers = [
  {
    title: "Automation care",
    description:
      "Monitoring, seasonal updates, and net-new flows across CRM, ManyChat, Make.com, or n8n.",
    investment: "From ,800/month",
  },
  {
    title: "Paid media management",
    description:
      "Always-on optimization, creative refresh, and reporting for social and search campaigns.",
    investment: "From ,200/month (ad spend separate)",
  },
  {
    title: "Conversion lab",
    description:
      "Landing page, website, and Shopify experimentation with CRO roadmaps.",
    investment: "From ,400/month",
  },
  {
    title: "Full-stack growth partner",
    description:
      "Combined media, CRM, automation, and web support with shared KPIs.",
    investment: ",000 - ,000/month",
  },
];

const faq = [
  {
    question: "How do we start?",
    answer:
      "We audit your current stack, share a roadmap within a week, and lock in scope plus milestones together.",
  },
  {
    question: "Can we mix services?",
    answer:
      "Yes. Most clients blend paid media, CRM, and automation or pair Shopify work with retention flows.",
  },
  {
    question: "Do you offer short-term help?",
    answer:
      "Project sprints are ideal for quick impact. We can extend into retainers once the foundation is live.",
  },
  {
    question: "What about internal handoff?",
    answer:
      "Every engagement ends with documentation, training, and access to files so your team can continue operating.",
  },
];

export default function Pricing() {
  usePageMetadata(
    "Pricing | DigitalFace Marketing",
    "Review DigitalFace Marketing pricing for paid media, CRM, chat automation, web, Shopify, and automation retainers."
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Pricing and packages
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Choose the engagement that fits your roadmap
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Sprint-style projects handle focused builds. Retainers keep campaigns, automations, and websites improving every month.
          </p>
        </div>
        <div className="container mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-6 text-left shadow-brand-card"
              >
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 text-sm text-ink-500">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-3xl border border-ink-100 bg-white/95 p-8 shadow-brand-card"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-slate-900">{pkg.name}</h2>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                    {pkg.investment}
                  </p>
                  <p className="text-sm text-ink-500">{pkg.description}</p>
                  <p className="text-xs uppercase tracking-wide text-ink-400">Ideal for</p>
                  <p className="text-sm text-ink-500">{pkg.idealFor}</p>
                </div>
                <div className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm text-ink-500">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Retainers
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Stay in motion with ongoing support
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Monthly collaborations keep automations sharp, ad performance climbing, and websites converting. Scale up or pause with a 30-day notice.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {retainers.map((retainer) => (
              <div
                key={retainer.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">{retainer.title}</h3>
                <p className="mt-3 text-sm text-ink-500">{retainer.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {retainer.investment}
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
              FAQ snapshot
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Answers before we hop on a call
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                >
                  <p className="text-sm font-semibold text-slate-900">{item.question}</p>
                  <p className="mt-2 text-sm text-ink-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="What happens next"
        title="Request a tailored quote and roadmap"
        description="Email sales@digitalfacemarketing.com or send the contact form. We will respond within one business day."
        primaryCta={{ label: "Book a discovery session", href: "/contact" }}
        secondaryCta={{ label: "Review services", href: "/features" }}
      />
    </div>
  );
}
