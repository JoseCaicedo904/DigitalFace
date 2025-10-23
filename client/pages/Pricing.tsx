import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Bot, Megaphone, MonitorSmartphone, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const pricingHighlights = [
  {
    title: "Value-driven",
    description:
      "We price based on the outcomes we deliver—like boosted conversions or time saved—not arbitrary hours. Expect ROI-focused proposals.",
  },
  {
    title: "Transparent & flexible",
    description:
      "No surprise fees or long-term lock-ins. We scope projects clearly and offer retainers that can scale up or down as you grow.",
  },
  {
    title: "Customizable",
    description:
      "Mix-and-match services (automation, ads, web) to build the plan that fits your goals, budgets, and timelines.",
  },
  {
    title: "ROI mindset",
    description:
      "Automation can return 5×, social ads 5.28×, redesigns 2.5× conversions—we quote with performance benchmarks in mind.",
  },
];

const packages = [
  {
    icon: Bot,
    name: "Automation Starter",
    description:
      "One chatbot or workflow automation, integrated with your CRM or email platform. Includes strategy session and 30-day optimization.",
    idealFor: "Businesses launching their first automation or testing ManyChat templates.",
    investment: "Project-based starting around $2,500 USD",
    includes: [
      "Discovery workshop & automation blueprint",
      "Chatbot or workflow build with integrations",
      "Copywriting & QA across scenarios",
      "Team training + 30-day optimization support",
    ],
  },
  {
    icon: Workflow,
    name: "Automation Pro",
    description:
      "Multiple automations working together—chatbots, workflows, CRM integration—with ongoing measurement and improvements.",
    idealFor: "Brands ready to automate lead gen, nurture, and operations in parallel.",
    investment: "Projects typically $6,000–$12,000 USD (or retainer from $2,000/month)",
    includes: [
      "Automation roadmap covering KPIs and phasing",
      "Custom chatbots + email/SMS workflows",
      "CRM integrations & data synchronization",
      "Dashboards, optimization sprints, ongoing support",
    ],
  },
  {
    icon: Megaphone,
    name: "Growth Ads",
    description:
      "Multi-platform ad strategy, creative production, and day-to-day management with full performance reporting.",
    idealFor: "Brands investing $3k–$50k/month in paid media and seeking better returns.",
    investment: "Monthly retainers from $2,500 USD (ad spend billed separately)",
    includes: [
      "Audience research, messaging, creative briefs",
      "Campaign build-out & conversion tracking setup",
      "Daily optimization, creative refresh, testing plan",
      "Weekly reporting + strategy calls",
    ],
  },
  {
    icon: MonitorSmartphone,
    name: "Conversion Website",
    description:
      "End-to-end website or landing page design with conversion-focused copy, responsive development, and SEO fundamentals.",
    idealFor: "Companies needing a high-performing site or campaign hub.",
    investment: "Projects typically $5,500–$18,000 USD (depending on scope)",
    includes: [
      "Strategy workshop, UX architecture, copywriting",
      "Custom design system + responsive development",
      "SEO setup, analytics tagging, QA & launch",
      "Loom walkthroughs + 30-day post-launch support",
    ],
  },
];

const retainers = [
  {
    title: "Automation Care Plans",
    description:
      "Ongoing monitoring, log reviews, seasonal updates, and new flow development so your bots and workflows keep performing.",
    details: "From $1,200/month depending on number of automations and integrations.",
  },
  {
    title: "Paid Media Management",
    description:
      "Continuous campaign optimization, creative production, and reporting across Meta, TikTok, Google, and LinkedIn.",
    details: "From $2,500/month (ad spend not included).",
  },
  {
    title: "CRO & Website Experiments",
    description:
      "Monthly testing roadmaps, heatmap analysis, and UX enhancements to keep conversions climbing after launch.",
    details: "From $1,800/month.",
  },
  {
    title: "Full Growth Partner",
    description:
      "Automation + ads + web strategy bundled. We operate as your external growth team with shared KPIs.",
    details: "Custom retainers typically $6k–$12k/month.",
  },
];

export default function Pricing() {
  usePageMetadata(
    "Pricing & Packages – DigitalFace Marketing Services",
    "Discover pricing for DigitalFace Marketing’s automation, social media advertising, and web design services. Flexible packages and custom retainers."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Pricing & packages
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Flexible plans for every stage of growth.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Whether you’re launching your first automation or scaling a multi-channel marketing engine, we tailor our
            engagement to match your ambition. Below is a starting point—let’s talk to finalize the perfect fit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Link to="/contact">Request a custom quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              <Link to="/services">Compare services in detail</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {pricingHighlights.map((item) => (
              <Card key={item.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Sample project pricing
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            Pick your starting point—then we’ll tailor it together.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className="border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <CardContent className="space-y-4 p-8">
                <div className="flex items-center gap-3">
                  <pkg.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-2xl font-semibold text-slate-900">{pkg.name}</h3>
                </div>
                <p className="text-sm text-slate-600">{pkg.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                  Ideal for: {pkg.idealFor}
                </p>
                <p className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm text-slate-700">
                  {pkg.investment}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {pkg.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Retainer options
            </span>
            <h2 className="text-3xl font-semibold">
              Engage us long-term for compounding results.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              Retainers give you ongoing access to our team alongside proactive strategy, dashboards, and experimentation
              to keep momentum high.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {retainers.map((retainer) => (
              <Card key={retainer.title} className="border border-indigo-500/40 bg-white/10 text-indigo-100">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-white">{retainer.title}</h3>
                  <p className="text-xs text-indigo-100/80">{retainer.description}</p>
                  <p className="text-sm font-semibold text-indigo-200">{retainer.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <Card className="border-slate-200 bg-indigo-50/80">
          <CardContent className="grid gap-8 p-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                What to expect
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                The first conversation is free—and packed with ideas.
              </h2>
              <p className="text-sm text-slate-600">
                We’ll audit your current marketing, identify opportunities, and provide a roadmap with phased pricing
                options. Even if we don’t work together, you’ll walk away with clarity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book a discovery session</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Link to="/portfolio">Review our results</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-white shadow-lg shadow-indigo-200/50">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  You’ll receive
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Proposal with clear deliverables and timeline</li>
                  <li>• Recommended mix of automation, ads, and web</li>
                  <li>• Investment ranges and ROI expectations</li>
                  <li>• Options for project work or ongoing partnership</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              FAQ snapshot
            </span>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Do you offer payment plans?",
                  answer:
                    "Yes—project fees are typically split across milestones, and retainers are billed monthly. Need a different structure? Let’s talk.",
                },
                {
                  question: "Do you work with startups?",
                  answer:
                    "Absolutely. We tailor scope to stage. Startups often begin with a focused automation or ad sprint before expanding.",
                },
                {
                  question: "Can we start small and scale?",
                  answer:
                    "Definitely. Many clients begin with a single service (like a chatbot or landing page) before growing into full retainers.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "E-commerce, SaaS, professional services, healthcare, hospitality, education, local businesses—and more. We adapt quickly.",
                },
              ].map((faq) => (
                <Card key={faq.question} className="border-slate-200 bg-white">
                  <CardContent className="space-y-2 p-6">
                    <p className="text-sm font-semibold text-slate-900">{faq.question}</p>
                    <p className="text-sm text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
