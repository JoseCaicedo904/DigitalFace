import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Value-driven",
    copy:
      "Pricing maps to outcomes like converted leads, time saved, or revenue recovered, not arbitrary hours.",
  },
  {
    title: "Transparent & flexible",
    copy:
      "Clear scopes, milestone billing, and retainers that scale as you do. No surprise fees, ever.",
  },
  {
    title: "Customizable",
    copy:
      "Mix automation, ads, and web deliverables to match your goals, pacing, and team capacity.",
  },
  {
    title: "ROI mindset",
    copy:
      "We quote using benchmarks like 5x automation ROI, 5.28x paid media return, and 2.5x conversion lifts.",
  },
];

const packages = [
  {
    name: "Automation Starter",
    description:
      "One high-impact chatbot or workflow integrated with your CRM or ESP. Includes strategy and 30 days of optimization.",
    idealFor: "Teams launching their first automation or customizing ManyChat templates.",
    investment: "Projects from $2,500 USD",
    includes: [
      "Discovery workshop and automation blueprint",
      "Build plus QA across key scenarios",
      "Team training and 30-day optimization",
    ],
  },
  {
    name: "Automation Pro",
    description:
      "Multiple automations synchronized across channels with dashboards and ongoing iteration.",
    idealFor: "Brands scaling nurture, sales, and ops flows in parallel.",
    investment: "Projects $6,000 - $12,000 USD or retainers from $2,000/month",
    includes: [
      "Automation roadmap and KPI alignment",
      "Chatbots, email, SMS, and CRM sync",
      "Measurement, optimization, and support sprints",
    ],
  },
  {
    name: "Growth Ads",
    description:
      "Multi-platform ad strategy, creative, conversion tracking, and day-to-day management.",
    idealFor: "Brands investing $3k - $50k/month in paid media who want better returns.",
    investment: "Retainers from $2,500 USD/month (spend billed separately)",
    includes: [
      "Audience research and creative briefs",
      "Campaign builds and daily optimization",
      "Reporting and strategy calls each week",
    ],
  },
  {
    name: "Conversion Website",
    description:
      "Conversion-led site or landing page with copy, design system, development, and analytics.",
    idealFor: "Companies needing a high-performing site or campaign hub.",
    investment: "Projects $5,500 - $18,000 USD depending on scope",
    includes: [
      "Workshop, UX architecture, and copywriting",
      "Custom design plus responsive build",
      "SEO setup, analytics, QA, and launch support",
    ],
  },
];

const retainers = [
  {
    title: "Automation care plans",
    description:
      "Monitoring, seasonal updates, new flows, and performance tuning so bots keep delivering.",
    investment: "From $1,200/month",
  },
  {
    title: "Paid media management",
    description:
      "Always-on optimization, creative refresh, and reporting across Meta, TikTok, Google, and LinkedIn.",
    investment: "From $2,500/month",
  },
  {
    title: "CRO & experimentation",
    description:
      "Testing roadmaps, heatmap reviews, and UX enhancements to keep conversions climbing.",
    investment: "From $1,800/month",
  },
  {
    title: "Full growth partner",
    description:
      "Automation plus ads plus web. We operate as your external growth team with shared KPIs.",
    investment: "Custom retainers $6,000 - $12,000/month",
  },
];

const faq = [
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Projects are billed by milestone and retainers monthly. Need a different cadence? Let us know.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We tailor scope to stage. Many start with a focused automation or ad sprint before expanding.",
  },
  {
    question: "Can we start small and scale?",
    answer:
      "Yes. Launch with a single service and ramp into combined retainers once the data proves traction.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Ecommerce, SaaS, services, healthcare, hospitality, education, and more. We adapt fast to new spaces.",
  },
];

export default function Pricing() {
  usePageMetadata(
    "Pricing | DigitalFace Marketing packages and retainers",
    "Review pricing for DigitalFace Marketing automation systems, paid media management, and conversion-first web projects. Flexible packages and retainers."
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Pricing and packages
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Flexible packages built around performance, not billable hours
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Choose a project sprint or an ongoing partnership. Either way, expect transparent scopes, ROI-focused deliverables, and collaboration that feels effortless.
          </p>
        </div>
        <div className="container mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
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
          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-3xl border border-ink-100 bg-white/95 p-8 shadow-brand-card"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {pkg.name}
                  </h2>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                    {pkg.investment}
                  </p>
                  <p className="text-sm text-ink-500">{pkg.description}</p>
                  <p className="text-xs uppercase tracking-wide text-ink-400">
                    Ideal for
                  </p>
                  <p className="text-sm text-ink-500">{pkg.idealFor}</p>
                </div>
                <div className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink-500"
                    >
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
              Monthly collaborations keep automations sharp, ad performance climbing, and websites converting. Scale up or down with a 30-day notice.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {retainers.map((retainer) => (
              <div
                key={retainer.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {retainer.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">
                  {retainer.description}
                </p>
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
                  <p className="text-sm font-semibold text-slate-900">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm text-ink-500">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="What happens next"
        title="Request a tailored quote and roadmap"
        description="We will audit your current marketing, uncover opportunities, and build an investment range you can act on immediately."
        primaryCta={{ label: "Book a discovery session", href: "/contact" }}
        secondaryCta={{ label: "Review case studies", href: "/features" }}
      />
    </div>
  );
}
