import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { CtaSection } from "@/sections/CTA";
import {
  Bot,
  CalendarDays,
  HeartHandshake,
  LineChart,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Clarity",
    description:
      "Every engagement starts with a shared roadmap covering goals, handoffs, and the metrics that prove success.",
  },
  {
    title: "Momentum",
    description:
      "Weekly sprints, Loom recaps, and live dashboards keep work moving without endless meetings.",
  },
  {
    title: "Accountability",
    description:
      "We own the results with you—documenting decisions, surfacing blockers early, and presenting the next best move.",
  },
];

const specialties = [
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    title: "Paid media + search",
    description:
      "Channel strategists and creatives who plan, launch, and optimize Meta, TikTok, LinkedIn, and Google campaigns tied to revenue KPIs.",
  },
  {
    icon: <Bot className="h-6 w-6 text-brand-500" />,
    title: "Automation architects",
    description:
      "CRM, ManyChat, Make.com, and n8n specialists who turn manual handoffs into reliable flows and alerts.",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-brand-500" />,
    title: "UX + web leads",
    description:
      "Designers and developers focused on fast, conversion-first landing pages, corporate sites, and Shopify builds.",
  },
];

const heroMedia = (
  <div className="flex h-full flex-col gap-6 p-8">
    <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-ink-200 bg-white/70 text-center text-sm font-semibold uppercase tracking-wide text-ink-400">
      [IMAGE_PLACEHOLDER_ABOUT_TEAM]
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white/85 p-6 text-sm text-ink-500 shadow-brand-card">
      <p className="font-semibold text-ink-600">How we show up</p>
      <p className="mt-2">
        We act like an embedded growth team: co-planning with your leadership, sharing context in your tools, and documenting everything we build.
      </p>
    </div>
  </div>
);

const offices = [
  {
    title: "Miami, Florida",
    description: "Remote-first hub supporting North American clients across SaaS, services, and ecommerce.",
    detail: "Strategy, paid media, and stakeholder enablement.",
  },
  {
    title: "Cali, Colombia",
    description: "Automation, creative, and engineering studio partnering with LATAM and global teams.",
    detail: "Chatbots, CRM builds, UX, and integrations.",
  },
];

export default function About() {
  usePageMetadata(
    "About DigitalFace Marketing",
    "Meet DigitalFace Marketing—an automation-led team in Miami and Cali delivering paid media, CRM, web, Shopify, and integration projects."
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="About DigitalFace"
        title="Automation-led partners for revenue, ops, and creative teams."
        description="We align paid media, CRM, chat automation, web, Shopify, and integrations under one operating system so growth feels organized."
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "Explore services", href: "/features" }}
        stats={[
          { label: "Team locations", value: "Miami + Cali" },
          { label: "Average engagement", value: "18 months" },
          { label: "Platforms certified", value: "15+" },
        ]}
        media={heroMedia}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              How we operate
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Principles that keep every project grounded
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Simple language, accountable timelines, and proactive communication are non-negotiable. We keep the work human and the results measurable.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm text-ink-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                Leadership stack
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Specialists who keep automation, media, and web aligned
              </h2>
              <p className="text-lg text-ink-500">
                Strategy, creative, and engineering collaborate daily so launches happen fast and lessons are applied immediately. The same leads who scope the work stay through optimization.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {specialties.map((specialty) => (
                  <div
                    key={specialty.title}
                    className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                  >
                    <div className="rounded-xl bg-secondary px-3 py-2">{specialty.icon}</div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{specialty.title}</h3>
                      <p className="mt-2 text-sm text-ink-500">{specialty.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-ink-100 bg-white/90 p-8 text-sm text-ink-500 shadow-brand-card">
              <div className="flex items-center gap-3 text-ink-600">
                <HeartHandshake className="h-6 w-6 text-brand-500" />
                <p className="font-semibold">Collaboration is the lever</p>
              </div>
              <p>
                We plug into your Slack, PM tool, and dashboards so your team never wonders where work stands. Expect shared documentation, clear owners, and honest feedback.
              </p>
              <p>
                Average response time stays under 24 hours because we cap workloads and prioritize async updates over status meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                Two hubs, one rhythm
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Miami and Cali keep us close to your market
              </h2>
              <p className="text-lg text-white/70">
                Bilingual collaboration, overlapping time zones, and cultural fluency mean faster launches for teams across the Americas.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {offices.map((office) => (
                <div key={office.title} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                  <p className="text-xs uppercase tracking-wide text-white/60">{office.title}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{office.description}</p>
                  <p className="mt-3 text-sm text-white/70">{office.detail}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-wide text-white/60">Reporting cadence</p>
                <p className="mt-2 text-lg font-semibold text-white">Every Monday and Friday</p>
                <p className="mt-3 text-sm text-white/70">
                  <LineChart className="mr-2 inline h-4 w-4" />Recaps highlight impact, blockers, and next experiments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Join forces"
        title="Let us craft your next growth sprint"
        description="Email sales@digitalfacemarketing.com or book a session—we will reply within one business day."
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
