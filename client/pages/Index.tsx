import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { FeaturesSection } from "@/sections/Features";
import { ValuePropsSection } from "@/sections/ValueProps";
import { TestimonialsSection } from "@/sections/Testimonials";
import { IntegrationsSection } from "@/sections/Integrations";
import { CtaSection } from "@/sections/CTA";
import {
  Bot,
  Megaphone,
  MonitorSmartphone,
  Workflow,
  LineChart,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Zap,
} from "lucide-react";

const heroStats = [
  { label: "Average reply time", value: "<24h" },
  { label: "Systems shipped", value: "280+" },
  { label: "Managed ad spend", value: "+" },
];

const heroMedia = (
  <div className="flex h-full flex-col gap-6 p-8">
    <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-ink-200 bg-white/70 text-center text-sm font-semibold uppercase tracking-wide text-ink-400">
      [IMAGE_PLACEHOLDER_HERO]
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white/85 p-6 text-sm text-ink-500 shadow-brand-card">
      <p className="font-semibold text-ink-600">Weekly operating rhythm</p>
      <ul className="mt-3 space-y-2 text-left">
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
          Monday KPI review and sprint goals.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-ocean-400" />
          Midweek creative, automation, and dev drops.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
          Friday results, learnings, and next tests.
        </li>
      </ul>
    </div>
  </div>
);

const features = [
  {
    title: "Social + search ads",
    description:
      "Meta, TikTok, LinkedIn, and Google programs tuned to booked calls and qualified pipeline.",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: "CRM installation",
    description:
      "HubSpot, Bitrix24, and GoHighLevel configured with scoring, automation, and reporting guardrails.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: "Chatbots + scheduling",
    description:
      "ManyChat flows and calendar handoffs that capture, nurture, and confirm meetings 24/7.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Landing pages & corporate sites",
    description:
      "Conversion-first experiences with clear messaging, proof, and analytics baked in.",
    icon: <MonitorSmartphone className="h-6 w-6" />,
  },
  {
    title: "Shopify builds",
    description:
      "Custom storefronts with optimized merchandising, checkout UX, and post-purchase automation.",
    icon: <ShoppingBag className="h-6 w-6" />,
  },
  {
    title: "Automations & integrations",
    description:
      "Make.com and n8n workflows syncing data, notifications, and reporting across your stack.",
    icon: <Zap className="h-6 w-6" />,
  },
];

const valueProps = [
  {
    badge: "CLARITY",
    title: "One roadmap across ads, CRM, and product",
    description:
      "Strategy, production, and optimization run from a shared plan so every sprint compounds.",
  },
  {
    badge: "CADENCE",
    title: "Operating rhythm you can trust",
    description:
      "Weekly checkpoints, transparent dashboards, and proactive recommendations keep teams aligned.",
  },
  {
    badge: "ACCESS",
    title: "Senior leads in every workstream",
    description:
      "Media strategists, automation architects, and UX leads stay in every meeting.",
  },
  {
    badge: "RESULTS",
    title: "Decisions driven by measurable lift",
    description:
      "We anchor every test to qualified pipeline, CAC, LTV, and time saved inside your ops.",
  },
];

const testimonials = [
  {
    quote:
      "DigitalFace rebuilt our paid media and CRM in six weeks and pushed demo volume up 41 percent.",
    author: "Head of Growth",
    role: "B2B SaaS",
  },
  {
    quote:
      "Their automation work removed four manual handoffs. Sales now responds in under 10 minutes.",
    author: "Revenue Operations Lead",
    role: "Professional services",
  },
  {
    quote:
      "Conversion rate jumped from 2% to 4.7% after they rebuilt our landing page system.",
    author: "Product Marketing Director",
    role: "Healthcare platform",
  },
];

const integrations = [
  "ManyChat",
  "HubSpot",
  "Make",
  "Meta Ads",
  "TikTok Ads",
  "Google Ads",
  "Shopify",
  "Klaviyo",
  "Zapier",
  "Slack",
  "Webflow",
  "Typeform",
];

const valueMedia = (
  <div className="space-y-6 text-sm text-white/80">
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <Sparkles className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Blueprints delivered fast</p>
        <p>Audits, roadmaps, and production queues shipped in days—not months.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <LineChart className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Dashboards that tell the story</p>
        <p>Live reporting ties spend, leads, and workflow health together for fast calls.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <ShieldCheck className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Privacy and compliance ready</p>
        <p>Consent, attribution, and data hygiene are handled from the very first sprint.</p>
      </div>
    </div>
  </div>
);

const projects = [
  {
    title: "Demand gen operating system",
    description:
      "Meta, LinkedIn, and Google rebuild plus HubSpot automation produced 42% more demos for a global SaaS team.",
    placeholder: "[PROJECT_IMAGE_OR_VIDEO_1]",
  },
  {
    title: "Commerce automation layer",
    description:
      "Shopify, ManyChat, and Klaviyo flows recovered 18% of abandoned carts and simplified post-purchase ops.",
    placeholder: "[PROJECT_IMAGE_OR_VIDEO_2]",
  },
  {
    title: "Corporate site refresh",
    description:
      "New narrative, component library, and analytics stack doubled time on page for a professional services firm.",
    placeholder: "[PROJECT_IMAGE_OR_VIDEO_3]",
  },
];

export default function Index() {
  usePageMetadata(
    "DigitalFace Marketing | Performance marketing built on automation",
    "DigitalFace Marketing plans and ships paid media, CRM installs, chat automation, websites, Shopify builds, and integrations for revenue teams."
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="DigitalFace Marketing"
        title="Performance marketing that runs on automation."
        description="We build paid media, CRM systems, chat automation, landing pages, Shopify stores, and Make.com or n8n workflows so your team scales with clarity."
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/features" }}
        stats={heroStats}
        media={heroMedia}
      />
      <FeaturesSection
        eyebrow="What we deliver"
        title="Six services, one integrated team"
        description="Every engagement blends media, CRM, chat, web, Shopify, and automation so the entire funnel moves together."
        features={features}
      />
      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Recent work
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Projects ready for deeper walk-throughs
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Use these placeholders to drop in stills or video reels of live builds, campaigns, and automation stacks.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex flex-col rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-brand-card"
              >
                <div className="mb-6 flex h-44 items-center justify-center rounded-2xl border border-dashed border-ink-200 bg-secondary/40 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  {project.placeholder}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                  Case {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-500">{project.description}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Request full case
                  <span aria-hidden="true">?</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ValuePropsSection
        eyebrow="Why it works"
        title="Workflow intelligence that scales with you"
        description="Strategy, creative, and engineering sit on the same calls so nothing is lost between planning and launch."
        points={valueProps}
        media={valueMedia}
      />
      <TestimonialsSection
        eyebrow="Client snapshots"
        title="Proof from teams who scale with us"
        description="Leaders trust us to combine automation, media, and web so revenue teams keep moving."
        items={testimonials}
      />
      <IntegrationsSection
        eyebrow="Plugged into your stack"
        title="Integrates with the platforms you already count on"
        description="From ad platforms to CRMs and workflow builders, we connect the tools your company already runs on."
        items={integrations.map((name) => ({ name }))}
      />
      <CtaSection
        eyebrow="Next steps"
        title="Ready to launch your next sprint?"
        description="Share your goals and we will bring back a plan covering media, systems, creative, and automation."
        primaryCta={{ label: "Schedule my session", href: "/contact" }}
        secondaryCta={{ label: "See pricing options", href: "/pricing" }}
      />
    </div>
  );
}
