import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { FeaturesSection } from "@/sections/Features";
import { ValuePropsSection } from "@/sections/ValueProps";
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
    description:
      "Every inquiry is captured and responded to instantly.",
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
    description:
      "See every lead stage in one simple dashboard.",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
];

const services = [
  {
    id: 1,
    title: "Lead capture from every channel",
    description:
      "Every inquiry flows into one system so you never miss a lead.",
    bullets: [
      "Website forms, funnels, and surveys connected",
      "Chat widget and two-way SMS conversations",
      "Missed-call text back on your business number",
      "Facebook, Instagram, and Google lead sync",
    ],
    placeholder: "[SYSTEM_MODULE_01]",
  },
  {
    id: 2,
    title: "Instant follow-up + nurture",
    description:
      "Automated texts and emails respond in seconds and keep leads warm.",
    bullets: [
      "Immediate SMS and email replies",
      "Multi-day follow-up that stops on response",
      "Personalized messages that feel human",
      "Long-term nurture for leads not ready yet",
    ],
    placeholder: "[SYSTEM_MODULE_02]",
  },
  {
    id: 3,
    title: "Appointment booking + reminders",
    description:
      "Prospects book themselves and show up more often.",
    bullets: [
      "Self-scheduling calendar links",
      "Confirmation and reminder sequences",
      "Reschedule links to reduce no-shows",
      "Daily agenda notifications for your team",
    ],
    placeholder: "[SYSTEM_MODULE_03]",
  },
  {
    id: 4,
    title: "CRM pipeline visibility",
    description:
      "A simple visual pipeline shows every lead stage.",
    bullets: [
      "Auto-created opportunities for every inquiry",
      "Stages for New Lead, Booked, No-Show, Closed",
      "Owner assignments and task prompts",
      "Notes and history in one place",
    ],
    placeholder: "[SYSTEM_MODULE_04]",
  },
  {
    id: 5,
    title: "Recovery + reactivation",
    description:
      "Win back leads that usually go cold.",
    bullets: [
      "No-show recovery texts",
      "Missed-call follow-up",
      "Post-appointment follow-up sequences",
      "Reactivation campaigns for older leads",
    ],
    placeholder: "[SYSTEM_MODULE_05]",
  },
  {
    id: 6,
    title: "Ongoing optimization",
    description:
      "We keep the system sharp as your business grows.",
    bullets: [
      "Monthly tuning of messages and workflows",
      "Updates based on response data",
      "New campaigns added as needed",
      "Support for changes and questions",
    ],
    placeholder: "[SYSTEM_MODULE_06]",
  },
];

const valuePoints = [
  {
    badge: "PRODUCTIZED",
    title: "A proven system, not a custom project",
    description:
      "We deploy a repeatable blueprint tailored to your business fast.",
  },
  {
    badge: "DONE-FOR-YOU",
    title: "We install and maintain it",
    description:
      "Setup, testing, and ongoing updates are handled by our team.",
  },
  {
    badge: "POWERED",
    title: "Powered by GoHighLevel",
    description:
      "Our proprietary system runs on a GoHighLevel backbone, branded for you.",
  },
  {
    badge: "OWNER-FRIENDLY",
    title: "Simple for small teams",
    description:
      "Your staff steps in only when a real conversation is needed.",
  },
];

export default function Features() {
  usePageMetadata(
    "Sales System | DigitalFace Marketing",
    "Explore the DigitalFace Marketing Sales System, a done-for-you automated sales engine for local service businesses."
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

      <ValuePropsSection
        eyebrow="Launch plan"
        title="Productized setup with a clear timeline"
        description="We handle the technical lift so your team can focus on conversations and conversions."
        points={valuePoints}
        media={
          <div className="space-y-6 text-sm text-white/85">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold text-white">Launch in days</p>
              <p>Most businesses are live within 5-7 business days once we have your info.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold text-white">Simple daily workflow</p>
              <p>Check the inbox, review the pipeline, and show up to booked appointments.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold text-white">Support included</p>
              <p>We monitor, tune, and update the system as your business grows.</p>
            </div>
          </div>
        }
      />

      <CtaSection
        eyebrow="See it live"
        title="Ready to watch the system work?"
        description="Book a quick demo and we will show the full lead capture, follow-up, and booking flow."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "View plans", href: "/pricing" }}
      />
    </div>
  );
}
