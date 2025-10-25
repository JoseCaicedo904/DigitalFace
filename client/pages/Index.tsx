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
} from "lucide-react";

const heroStats = [
  { label: "Qualified lead lift", value: "+110%" },
  { label: "Recovered revenue", value: "+15%" },
  { label: "Conversion improvement", value: "2.5x" },
];

const heroMedia = (
  <div className="flex h-full flex-col justify-between gap-6 p-8">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400">
        Growth playbook highlights
      </p>
      <ul className="mt-4 space-y-3 text-sm text-ink-500">
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-ocean-400" />
          24-7 chatbots capturing leads 30 percent faster across WhatsApp, web, and socials.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
          Paid media sprints across Meta, TikTok, and Google tuned for real ROI, not vanity clicks.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-sunset-400" />
          Conversion-first landing pages that boost signups, trials, and booked calls sin friccion.
        </li>
      </ul>
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white/80 p-6 text-sm text-ink-500 shadow-brand-card">
      <p className="font-semibold text-ink-600">Fast collaboration</p>
      <p className="mt-2">
        Slack, Loom, and live dashboards keep your team in the loop. You get clarity before we ship every launch.
      </p>
    </div>
  </div>
);

const features = [
  {
    title: "Automation systems",
    description:
      "Chatbots plus CRM workflows handle nurture, handoff, and reactivation while your team sleeps.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Full-funnel media",
    description:
      "Creative, targeting, and testing across Meta, TikTok, Google, and LinkedIn built for measurable lift.",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: "Conversion-led web",
    description:
      "Lightning-fast landing pages and websites that look modern, load rapido, and convert visitors into buyers.",
    icon: <MonitorSmartphone className="h-6 w-6" />,
  },
  {
    title: "Roadmaps on repeat",
    description:
      "Monthly growth sprints with shared dashboards so you scale with clarity and zero guesswork.",
    icon: <Workflow className="h-6 w-6" />,
  },
];

const valueProps = [
  {
    badge: "ROI",
    title: "Automation that pays for itself",
    description:
      "Clients regularly see 5x return from automated nurture, abandoned cart flows, and resell-ready ManyChat templates.",
  },
  {
    badge: "ADS",
    title: "Creative that performs",
    description:
      "We pair audience research with rapid creative testing to beat the five-to-one social ad benchmark referenced in the original site.",
  },
  {
    badge: "UX",
    title: "Design that earns trust",
    description:
      "Seventy five percent of credibility comes from design. We build experiences that turn curiosity into committed action.",
  },
  {
    badge: "OPS",
    title: "Team that moves rápido",
    description:
      "Colombia plus Florida coverage means nearly round-the-clock progress with bilingual collaboration baked in.",
  },
];

const testimonials = [
  {
    quote:
      "Recovered 15 percent more revenue once DigitalFace automated our cart and nurture sequences.",
    author: "E-commerce operations lead",
    role: "Retail partner",
  },
  {
    quote:
      "The team doubled our qualified pipeline and dropped CPL by 35 percent with a Meta and LinkedIn blitz.",
    author: "Head of Growth",
    role: "Fintech SaaS client",
  },
  {
    quote:
      "Our free trial conversion jumped from 2 to 5 percent after their redesign. Launch was smooth and data-backed.",
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
        <p>Audit, strategy, build, and optimization packaged into weekly drops so momentum never fades.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <LineChart className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Dashboards that tell the story</p>
        <p>See live metrics for automations, ads, and web experiments. Every decision is grounded in numbers.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
      <ShieldCheck className="h-6 w-6 text-white/90" />
      <div>
        <p className="font-semibold text-white">Privacy and compliance ready</p>
        <p>GDPR and CCPA friendly setups with consent capture, opt-out paths, and data hygiene baked in.</p>
      </div>
    </div>
  </div>
);

export default function Index() {
  usePageMetadata(
    "DigitalFace Marketing | Automation-first growth partner",
    "DigitalFace Marketing blends automation, paid media, and conversion-first web experiences so teams across Colombia and Florida grow faster with clarity."
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="Automation-first studio"
        title="Automate growth. Launch ads. Convert sin friccion."
        description="DigitalFace Marketing fuses chatbots, CRM workflows, and full-funnel creative to keep revenue engines running rapido y con claridad."
        primaryCta={{ label: "Book a strategy session", href: "/contact" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        stats={heroStats}
        media={heroMedia}
      />
      <FeaturesSection
        eyebrow="What we deliver"
        title="Systems, storytelling, and design built to move the needle"
        description="Every engagement blends automation, ads, and conversion design so your growth stack performs together."
        features={features}
      />
      <ValuePropsSection
        eyebrow="Why it works"
        title="Workflow intelligence that scales with you"
        description="We mix human strategy with smart automation so every campaign lands with speed and precision."
        points={valueProps}
        media={valueMedia}
      />
      <TestimonialsSection
        eyebrow="Client snapshots"
        title="Proof from teams who scale with us"
        description="From ecommerce to SaaS, partners trust DigitalFace to build momentum, lower costs, and ship creative that converts."
        items={testimonials}
      />
      <IntegrationsSection
        eyebrow="Plugged into your stack"
        title="Integrates with the platforms you already count on"
        description="We work across the tools mentioned on your previous site plus the emerging players your roadmap demands."
        items={integrations.map((name) => ({ name }))}
      />
      <CtaSection
        eyebrow="Next steps"
        title="Ready to launch your next growth sprint?"
        description="Claim a free strategy session to review opportunities, forecasts, and the roadmap we would run with your team."
        primaryCta={{ label: "Schedule my session", href: "/contact" }}
        secondaryCta={{ label: "See pricing options", href: "/pricing" }}
      />
    </div>
  );
}
