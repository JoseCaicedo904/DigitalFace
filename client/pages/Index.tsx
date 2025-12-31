import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { FeaturesSection } from "@/sections/Features";
import { ValuePropsSection } from "@/sections/ValueProps";
import { TestimonialsSection } from "@/sections/Testimonials";
import { IntegrationsSection } from "@/sections/Integrations";
import { CtaSection } from "@/sections/CTA";
import {
  CalendarCheck,
  LayoutDashboard,
  LineChart,
  Megaphone,
  MessageCircle,
  Repeat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const heroStats = [
  { label: "Lead response", value: "Instant" },
  { label: "Follow-up coverage", value: "24/7" },
  { label: "Pipeline clarity", value: "Every lead" },
];

const heroMedia = (
  <div className="flex h-full flex-col gap-6 p-8">
    <div className="relative h-64 overflow-hidden rounded-3xl border border-white/15 bg-white/10">
      <img
        src="/images/digitalface-post.png"
        alt="DigitalFace Marketing promotional banner"
        className="h-full w-full object-cover"
      />
      <a
        href="#book"
        aria-label="Get Started Today"
        className="absolute z-10 block cursor-pointer rounded-full bg-white/0 transition hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
        style={{ top: "77.8%", left: "62.5%", width: "30%", height: "8.5%" }}
      />
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white/85 p-6 text-sm text-ink-500 shadow-brand-card">
      <p className="font-semibold text-ink-600">What goes live fast</p>
      <ul className="mt-3 space-y-2 text-left">
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
          Lead sources connected into one pipeline.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-ocean-400" />
          Instant text/email replies with booking links.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
          Dashboard visibility for every lead and stage.
        </li>
      </ul>
    </div>
  </div>
);

const features = [
  {
    title: "Lead generation campaigns",
    description:
      "Facebook, Instagram and Google Ads to bring leads every day.",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: "Lead capture everywhere",
    description:
      "Website forms, funnels, chat, calls, and social leads all feed one system.",
    icon: <MessageCircle className="h-6 w-6" />,
  },
  {
    title: "Instant automated follow up",
    description:
      "Text and email replies fire in seconds (AI automations).",
    icon: <CalendarCheck className="h-6 w-6" />,
  },
  {
    title: "Virtual receptionist",
    description:
      "We answer and make calls, qualify leads, and book appointments for you.",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    title: "GHL CRM and dashboards",
    description:
      "Pipeline visibility inside GHL, plus clean dashboards to track results.",
    icon: <Repeat className="h-6 w-6" />,
  },
  {
    title: "Done for you installation",
    description:
      "We set everything up fast, with zero technical burden.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

const valueProps = [
  {
    badge: "SPEED",
    title: "Instant speed-to-lead",
    description:
      "Every inquiry gets an immediate response so you never miss the first conversation.",
  },
  {
    badge: "AUTOPILOT",
    title: "Follow-up that never stops",
    description:
      "Automations nurture leads until they book or opt out, without extra staff.",
  },
  {
    badge: "VISIBILITY",
    title: "Pipeline clarity in one place",
    description:
      "Know exactly who is new, booked, no-show, or closed at any moment.",
  },
  {
    badge: "DONE-FOR-YOU",
    title: "Productized and deployed fast",
    description:
      "A proven system installed for your business without custom builds.",
  },
];

const testimonials = [
  {
    quote:
      "We started booking consultations within the first week. The follow-up is finally consistent.",
    author: "Practice Owner",
    role: "Dental Clinic",
  },
  {
    quote:
      "The missed-call texts alone saved leads we used to lose every day.",
    author: "General Manager",
    role: "Home Services",
  },
  {
    quote:
      "Our calendar fills itself now. We show up and close more without chasing leads.",
    author: "Owner",
    role: "Med Spa",
  },
  {
    quote:
      "The pipeline view keeps the whole team on the same page. Nothing falls through.",
    author: "Sales Lead",
    role: "Fitness Studio",
  },
];

const integrations = [
  "Website Forms",
  "Funnels",
  "Chat Widget",
  "SMS & Phone",
  "Facebook & Instagram",
  "Google Ads",
  "Google Business",
  "Calendar Booking",
  "Email",
  "Messenger",
  "Instagram DMs",
  "CRM Pipeline",
];

const valueMedia = (
  <div className="space-y-6 text-sm text-white/80">
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <Sparkles className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">24/7 automated assistant</p>
        <p>Leads get an instant reply and booking link even after hours.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <LineChart className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Show-up rates protected</p>
        <p>Automated confirmations and reminders cut no-shows.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <ShieldCheck className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Lead loss prevention</p>
        <p>Missed-call texts and long-term nurturing keep leads from going cold.</p>
      </div>
    </div>
  </div>
);
const steps = [
  {
    title: "Leads come in from anywhere",
    description:
      "Website forms, chat, calls, ads, and social all feed one pipeline.",
    placeholder: "Step 1",
  },
  {
    title: "The system responds instantly",
    description:
      "Automated SMS and email replies go out in seconds.",
    placeholder: "Step 2",
  },
  {
    title: "Appointments book themselves",
    description:
      "Prospects choose a time with confirmations and reminders.",
    placeholder: "Step 3",
  },
  {
    title: "Your team steps in when needed",
    description:
      "Handle real conversations only after the system warms the lead.",
    placeholder: "Step 4",
  },
  {
    title: "Deals are tracked and closed",
    description:
      "Every lead moves through a visual pipeline with clear next steps.",
    placeholder: "Step 5",
  },
];

export default function Index() {
  usePageMetadata(
    "DigitalFace Marketing Sales System | Automated sales for local businesses",
    "Done-for-you automated sales system that captures leads, follows up instantly, and books appointments for local service businesses.",
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="DigitalFace Marketing Sales System"
        title="A done-for-you automated sales engine for local service businesses."
        description="We install a proven system that captures every lead, responds instantly by text and email, and books appointments while you work."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See the system in action", href: "/features" }}
        stats={heroStats}
        media={heroMedia}
      />
      <FeaturesSection
        eyebrow="System outcomes"
        title="An automated sales system, installed for you"
        description="Capture every inquiry, follow up instantly, and move leads to booked appointments without extra staff."
        features={features}
      />
      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              How it works
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Leads in. Appointments booked. Pipeline clear.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              A simple, repeatable flow that keeps your team focused on real conversations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-brand-card"
              >
                <div className="mb-6 flex h-44 items-center justify-center rounded-2xl border border-dashed border-ink-200 bg-secondary/40 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  {step.placeholder}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-500">
                  {step.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  See a live demo
                  <span aria-hidden="true">?</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ValuePropsSection
        eyebrow="Your sales system"
        title="Automation that feels personal, runs nonstop"
        description="Built for local service businesses that need consistent follow-up without hiring more staff."
        points={valueProps}
        media={valueMedia}
      />
      <TestimonialsSection
        eyebrow="Client snapshots"
        title="Local businesses closing more leads"
        description="Owners see faster response, more bookings, and a pipeline they can trust."
        items={testimonials}
      />
      <IntegrationsSection
        eyebrow="Lead sources"
        title="Every channel feeds one system"
        description="Website, chat, calls, ads, and social all route into a single pipeline."
        items={integrations.map((name) => ({ name }))}
      />
      <CtaSection
        id="book"
        className="scroll-mt-24"
        eyebrow="Next steps"
        title="See the system in action"
        description="Book a quick demo and we will show how it captures leads and books appointments for your business."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "View plans", href: "/pricing" }}
      />
    </div>
  );
}

