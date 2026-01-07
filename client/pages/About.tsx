import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { CtaSection } from "@/sections/CTA";
import {
  HeartHandshake,
  LayoutDashboard,
  MessageCircle,
  LineChart,
  Settings,
} from "lucide-react";

const values = [
  {
    title: "Clarity",
    description:
      "We keep the system simple, visible, and easy for small-to-middle teams to run.",
  },
  {
    title: "Automation",
    description: "We automate the busywork so you can focus on real work.",
  },
  {
    title: "Support",
    description: "We stay hands-on with updates, improvements, and training.",
  },
];

const specialties = [
  {
    icon: <Settings className="h-6 w-6 text-brand-500" />,
    title: "System implementation",
    description:
      "We install the DigitalFace Marketing Sales System and tailor it to your business.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-brand-500" />,
    title: "Automation and follow-up",
    description:
      "Instant texts, emails, reminders, and nurturing keep leads warm.",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-brand-500" />,
    title: "Pipeline visibility",
    description:
      "A clear pipeline and inbox so your team always knows what to do next.",
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
        We act like your systems team. We build, launch, and keep your sales
        engine running.
      </p>
    </div>
  </div>
);

const offices = [
  {
    title: "Miami, Florida",
    description: "Client success and system strategy for North America.",
    detail: "Onboarding, implementation, and growth planning.",
  },
  {
    title: "Cali, Colombia",
    description: "Automation and delivery hub for system updates.",
    detail: "Workflows, messaging, and ongoing optimization.",
  },
];

export default function About() {
  usePageMetadata(
    "About DigitalFace Marketing",
    "Learn about the DigitalFace Marketing Sales System and the team that installs and supports it.",
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="About DigitalFace"
        title="We build your Marketing Sales System."
        description="A productized, done-for-you sales engine for local service businesses that want more bookings without more staff."
        primaryCta={{ label: "Get started", href: "/contact" }}
        secondaryCta={{ label: "See the system", href: "/features" }}
        showVideo={false}
        stats={[
          { label: "Typical launch", value: "3-7 days" },
          { label: "Support response", value: "<1 day" },
          { label: "Focus", value: "Local services" },
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
              Principles that keep the system simple
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Clear communication, steady automation, and real support are
              non-negotiable.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>
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
                Our focus
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Specialists who keep your sales system running
              </h2>
              <p className="text-lg text-ink-500">
                We build, automate, and optimize the follow-up process so you
                can stay focused on clients.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {specialties.map((specialty) => (
                  <div
                    key={specialty.title}
                    className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                  >
                    <div className="rounded-xl bg-secondary px-3 py-2">
                      {specialty.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {specialty.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-500">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:h-full lg:min-h-0 lg:self-stretch">
              <div className="space-y-6 rounded-3xl border border-ink-100 bg-white/90 p-8 text-sm text-ink-500 shadow-brand-card">
                <div className="flex items-center gap-3 text-ink-600">
                  <HeartHandshake className="h-6 w-6 text-brand-500" />
                  <p className="font-semibold">Collaboration is the lever</p>
                </div>
                <p>
                  We stay close to your team so the system stays tuned to your
                  real-world workflow.
                </p>
                <p>
                  You get visibility and guidance without the complexity of a
                  full agency stack.
                </p>
              </div>
              <div className="flex w-full items-center justify-center overflow-hidden rounded-3xl border border-dashed border-ink-200 bg-slate-100/80 px-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-400 shadow-brand-card aspect-[4/5] sm:aspect-[3/4] lg:flex-1 lg:aspect-auto lg:min-h-0">
                [IMAGE_PLACEHOLDER_ABOUT]
              </div>
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
                Overlapping time zones and bilingual collaboration keep launches
                fast and support responsive.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.title}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6"
                >
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    {office.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {office.description}
                  </p>
                  <p className="mt-3 text-sm text-white/70">{office.detail}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Reporting cadence
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Weekly check-ins
                </p>
                <p className="mt-3 text-sm text-white/70">
                  <LineChart className="mr-2 inline h-4 w-4" />
                  Updates highlight wins, blockers, and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Join forces"
        title="Let us install your sales system"
        description="Book an appointment and we’ll walk you through a system tailored to your business."
        primaryCta={{ label: "Get started", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
