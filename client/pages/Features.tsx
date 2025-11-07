import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { FeaturesSection } from "@/sections/Features";
import { ValuePropsSection } from "@/sections/ValueProps";
import { CtaSection } from "@/sections/CTA";
import {
  BarChart3,
  CheckCircle2,
  Layers,
  Target,
} from "lucide-react";

const overviewFeatures = [
  {
    title: "Clarity first",
    description:
      "We start with a single roadmap so ads, CRM, web, and automation roll out in sync.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Execution pods",
    description:
      "Media, automation, UX, and dev leads sit in one Slack channel for faster feedback loops.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Reporting that matters",
    description:
      "Dashboards show revenue impact, ops hours saved, and next tests—not vanity stats.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

const services = [
  {
    id: 1,
    title: "Social media + Google Ads",
    description:
      "Channel mixes across Meta, TikTok, LinkedIn, and Google focused on booked calls, qualified form fills, and tracked revenue.",
    bullets: [
      "Strategy sprints covering audiences, offers, and creative hooks",
      "Daily pacing, bids, and routing leads straight into CRM",
      "Creative refresh calendar with rapid variations",
      "Source-of-truth reporting mapped to CAC and pipeline",
    ],
    placeholder: "[IMAGE_PLACEHOLDER_SERVICE_1]",
  },
  {
    id: 2,
    title: "CRM installation + setup",
    description:
      "HubSpot, Bitrix24, or GoHighLevel configured with custom pipelines, automation, notifications, and documentation.",
    bullets: [
      "Architecture workshop and data migration plan",
      "Lifecycle stages, scoring, and handoff workflows",
      "Dashboards for leadership, ops, and sales",
      "Team onboarding with SOPs and loom walkthroughs",
    ],
    placeholder: "[IMAGE_PLACEHOLDER_SERVICE_2]",
  },
  {
    id: 3,
    title: "Chatbots + auto-scheduling",
    description:
      "ManyChat experiences that capture interest on social, web, or SMS and route hot leads to your booking tool.",
    bullets: [
      "Persona-based flows with branching logic",
      "Calendar and CRM sync plus notifications",
      "Compliance-ready opt-ins and double confirmation",
      "Live dashboards monitoring drop-off and conversion",
    ],
    placeholder: "[IMAGE_PLACEHOLDER_SERVICE_3]",
  },
  {
    id: 4,
    title: "Landing pages + corporate websites",
    description:
      "High-speed pages and multi-page sites that communicate value quickly and connect straight to analytics + CRM.",
    bullets: [
      "Messaging hierarchy, UX wireframes, and component library",
      "SEO and analytics baked in from day one",
      "Performance budgets to keep load times sub-two seconds",
      "Experiment backlog with copy and layout tests",
    ],
    placeholder: "[IMAGE_PLACEHOLDER_SERVICE_4]",
  },
  {
    id: 5,
    title: "Shopify e-commerce builds",
    description:
      "Custom themes, apps, and merchandising strategy so every visit feels branded and ready to convert.",
    bullets: [
      "Theme customization and modular sections",
      "App selection, fulfillment, and payment setup",
      "Lifecycle automation with Klaviyo or similar",
      "Conversion monitoring plus optimization roadmap",
    ],
    placeholder: "[IMAGE_PLACEHOLDER_SERVICE_5]",
  },
  {
    id: 6,
    title: "Automations + integrations",
    description:
      "Make.com and n8n workflows that pass data, trigger alerts, and remove repetitive manual steps.",
    bullets: [
      "System inventory and dependency mapping",
      "Workflow diagrams plus monitoring and alerts",
      "API, webhook, and database connections",
      "Documentation so internal teams can extend",
    ],
    placeholder: "[IMAGE_PLACEHOLDER_SERVICE_6]",
  },
];

const valuePoints = [
  {
    badge: "PROCESS",
    title: "Discovery to launch inside 4-6 weeks",
    description:
      "We compress research, build, QA, and training into tight sprints so you see value fast.",
  },
  {
    badge: "OWNERSHIP",
    title: "Your stack, not a black box",
    description:
      "Everything is documented, shared, and built to live inside your existing tools.",
  },
  {
    badge: "PARTNERSHIP",
    title: "Senior leads on every touchpoint",
    description:
      "Strategists, creatives, and engineers stay on the project from kickoff through optimization.",
  },
];

export default function Features() {
  usePageMetadata(
    "Services | DigitalFace Marketing",
    "Explore DigitalFace Marketing services covering paid media, CRM installs, chat automation, landing pages, Shopify builds, and custom integrations."
  );

  return (
    <div className="bg-white">
      <FeaturesSection
        eyebrow="Services"
        title="Marketing systems built for clarity"
        description="Every engagement blends media, CRM, chat, web, Shopify, and automation so growth stays predictable."
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
                  Service 0{service.id}
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="text-lg text-ink-500">
                  {service.description}
                </p>
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
                  Discuss this service
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
        eyebrow="How we work"
        title="Playbooks that keep teams in sync"
        description="We maintain a calm cadence: plan together, build fast, share dashboards, and document everything."
        points={valuePoints}
        media={
          <div className="space-y-6 text-sm text-white/85">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold text-white">Weekly standups</p>
              <p>15-minute syncs or Loom updates keep decisions moving without clogging calendars.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold text-white">Shared dashboards</p>
              <p>Live metrics for media, automation, UX, and dev progress give stakeholders instant context.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold text-white">Documentation dropbox</p>
              <p>SOPs, scripts, and templates live in your workspace so internal teams can build on our work.</p>
            </div>
          </div>
        }
      />

      <CtaSection
        eyebrow="Ready for what's next"
        title="Map your next sprint with our team"
        description="Share goals for paid media, CRM, chat automation, web, Shopify, or integrations—we will respond with a roadmap."
        primaryCta={{ label: "Book a consultation", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
