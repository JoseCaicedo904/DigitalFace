import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { FeaturesSection } from "@/sections/Features";
import { CtaSection } from "@/sections/CTA";
import {
  CalendarCheck,
  CheckCircle2,
  LayoutDashboard,
  PhoneCall,
} from "lucide-react";

const overviewFeatures = [
  {
    title: "Never lose a lead",
    description: "Every inquiry is captured and responded to instantly.",
    icon: <PhoneCall className="h-6 w-6" />,
  },
  {
    title: "Appointments on autopilot",
    description:
      "Self-booking with confirmations and reminders keeps your calendar full.",
    icon: <CalendarCheck className="h-6 w-6" />,
  },
  {
    title: "Pipeline clarity",
    description: "See every lead stage in one simple dashboard.",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
];

const services = [
  {
    id: 1,
    title: "Paid traffic to generate demand",
    description:
      "We launch and manage digital ad campaigns to bring qualified prospects into your system.",
    bullets: [
      "Facebook and Instagram ad campaigns (Meta)",
      "Google Search, Display, and YouTube ads",
      "TikTok ads for top-of-funnel awareness",
      "Campaign setup, tracking, and optimization",
    ],
    placeholder: "[SYSTEM_MODULE_01]",
  },
  {
    id: 2,
    title: "Lead capture from every channel",
    description:
      "Every inquiry flows into one system so you never miss a lead.",
    bullets: [
      "Website forms, funnels, and surveys connected",
      "Chat widget and two-way text conversations",
      "Every lead automatically recorded in your CRM",
      "Facebook, Instagram, and Google lead sync",
    ],
    placeholder: "[SYSTEM_MODULE_02]",
  },
  {
    id: 3,
    title: "Instant follow-up + nurture",
    description:
      "Automated texts and emails respond in seconds and keep leads warm.",
    bullets: [
      "Immediate SMS and email replies",
      "Multi-day follow-up that stops on response",
      "Personalized messages that feel human",
      "Long-term nurture for leads not ready yet",
    ],
    placeholder: "[SYSTEM_MODULE_03]",
  },
  {
    id: 4,
    title: "Appointment booking + reminders",
    description: "Prospects book themselves and show up more often.",
    bullets: [
      "Self-scheduling calendar links",
      "Confirmation and reminder sequences",
      "Reschedule links to reduce no-shows",
      "Daily agenda notifications for your team",
    ],
    placeholder: "[SYSTEM_MODULE_04]",
  },
  {
    id: 5,
    title: "CRM pipeline visibility",
    description: "A simple visual pipeline shows every lead stage.",
    bullets: [
      "Auto-created opportunities for every inquiry",
      "Stages for New Lead, Booked, No-Show, Closed Client",
      "Owner assignments and task prompts",
      "Notes and history in one place",
    ],
    placeholder: "[SYSTEM_MODULE_05]",
  },
  {
    id: 6,
    title: "Recovery + reactivation",
    description: "Win back leads that usually go cold.",
    bullets: [
      "No-show recovery texts",
      "Missed-call follow-up",
      "Post-appointment follow-up sequences",
      "Reactivation campaigns for older leads",
    ],
    placeholder: "[SYSTEM_MODULE_06]",
  },
  {
    id: 7,
    title: "Ongoing optimization",
    description: "We keep the system sharp as your business grows.",
    bullets: [
      "Monthly tuning of messages and workflows",
      "Updates based on response data",
      "New campaigns added as needed",
      "Support for changes and questions",
    ],
    placeholder: "[SYSTEM_MODULE_07]",
  },
];

export default function Features() {
  usePageMetadata(
    "Sales System | DigitalFace Marketing",
    "Explore the DigitalFace Marketing Sales System, a done-for-you automated sales engine for local service businesses.",
  );

  return (
    <div className="bg-white">
      <FeaturesSection
        eyebrow="Sales System"
        title="The DigitalFace Marketing Sales System"
        description="A done-for-you sales engine for local service businesses. Capture every lead, follow up instantly, and book more appointments."
        features={overviewFeatures}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-10 rounded-3xl border border-ink-100 bg-white/95 p-8 shadow-brand-card lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center"
            >
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                  Module 0{service.id}
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="text-lg text-ink-500">{service.description}</p>
                <ul className="space-y-3 text-sm text-ink-500">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  See the system in action
                  <span aria-hidden="true">?</span>
                </Link>
              </div>
              <div className="flex h-full min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-ink-200 bg-secondary/40 text-xs font-semibold uppercase tracking-wide text-ink-400">
                {service.placeholder}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_55%)] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-16">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                Launch plan
              </span>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Productized setup with a clear timeline
              </h2>
              <p className="text-lg text-white/70">
                A repeatable system, delivered the same way every time. Clear
                steps. Fast start.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  3-7
                </span>
                <div>
                  <p className="text-sm text-white/80">
                    Business days to launch for most teams.
                  </p>
                  <p className="text-xs text-white/50">
                    You stay focused on customers while we build.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                  <p>Same proven playbook. Tailored to your business.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400/80" />
                  <p>We run the setup. You step in only when needed.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-12">
              <div className="relative pl-10">
                <div className="absolute left-4 top-1 h-full w-px bg-gradient-to-b from-brand-400/80 via-ocean-400/50 to-white/10" />
                <ol className="space-y-9">
                  <li className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      D1
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Day 1: Share your basics
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      One short call and a quick form. We take it from there.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      D2
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Days 2-3: Build and test
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      We set it up, run checks, and make sure it is ready.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      D4
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Days 4-7: Go live
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      Your system turns on and appointments start coming in.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      ON
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Ongoing: Support stays with you
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      We keep it sharp, handle updates, and answer questions
                      fast.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="space-y-4 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Your simple daily flow
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                    <p className="text-sm text-white">Check new messages</p>
                  </div>
                  <div className="hidden sm:block h-px flex-1 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-ocean-400" />
                    <p className="text-sm text-white">Confirm appointments</p>
                  </div>
                  <div className="hidden sm:block h-px flex-1 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                    <p className="text-sm text-white">Show up and serve</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">
                  That is the routine. We handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="See it live"
        title="Ready to see how the system works?"
        description="Book a quick call and we’ll walk you through it."
        primaryCta={{ label: "Talk with us", href: "/contact" }}
        secondaryCta={{ label: "View plans", href: "/pricing" }}
      />
    </div>
  );
}
