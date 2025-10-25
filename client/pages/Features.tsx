import { usePageMetadata } from "@/hooks/usePageMetadata";
import { FeaturesSection } from "@/sections/Features";
import { ValuePropsSection } from "@/sections/ValueProps";
import { CtaSection } from "@/sections/CTA";
import {
  Bot,
  Megaphone,
  MonitorSmartphone,
  Workflow,
  Brain,
  PanelsTopLeft,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const coreFeatures = [
  {
    title: "Automation systems",
    description:
      "Chatbots, nurture sequences, and CRM integrations choreographed to capture, qualify, and reactivate leads automatically.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Paid media engine",
    description:
      "Full funnel campaigns across Meta, TikTok, Google, and LinkedIn with testing cadences built for compounding ROI.",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: "Conversion-first web",
    description:
      "Design systems, landing pages, and microsites engineered for speed, clarity, and persuasive storytelling.",
    icon: <MonitorSmartphone className="h-6 w-6" />,
  },
  {
    title: "Growth enablement",
    description:
      "Playbooks, dashboards, and training that keep your in-house team empowered long after launch day.",
    icon: <Workflow className="h-6 w-6" />,
  },
];

const playbooks = [
  {
    icon: <Brain className="h-5 w-5 text-brand-500" />,
    title: "Strategy blueprint",
    bullets: [
      "Growth audit covering messaging, funnel leak points, and tech stack readiness.",
      "Forecast model mapping KPIs to automation, ads, and CRO improvements.",
    ],
  },
  {
    icon: <PanelsTopLeft className="h-5 w-5 text-brand-500" />,
    title: "Execution sprints",
    bullets: [
      "Two-week build cycles followed by review, launch, and optimization windows.",
      "Shared dashboards show automation performance, media spend, and conversion lift in real time.",
    ],
  },
  {
    icon: <Rocket className="h-5 w-5 text-brand-500" />,
    title: "Enablement loop",
    bullets: [
      "Live training, SOPs, and Loom walkthroughs delivered with every release.",
      "Retainer support or hand-off ready kits so you can scale internally sin friccion.",
    ],
  },
];

const automationWins = [
  "Lead nurture and abandoned cart flows that recovered the 15 percent revenue lift quoted on the original site.",
  "CRM sync and scoring that improved pipeline quality by 110 percent for fintech and B2B teams.",
  "Template library of ManyChat flows ready to deploy for lead gen, e-commerce, and appointment booking.",
];

const mediaWins = [
  "Cross-channel creative testing that consistently beats the five to one social ROI benchmark.",
  "Always-on optimization with weekly creative refreshes so campaigns never stagnate.",
  "Reporting that ties spend to pipeline impact, not vanity clicks.",
];

const webWins = [
  "UX frameworks that push trial conversion from two to five percent, as highlighted in the previous site.",
  "Performance-first builds on Webflow, Shopify, or custom stacks with <200ms first paint targets.",
  "Experimentation roadmaps with heatmap reviews, copy tests, and personalization ideas every month.",
];

export default function Features() {
  usePageMetadata(
    "Features | DigitalFace Marketing automation, ads, and web capabilities",
    "Explore DigitalFace Marketing's automation systems, paid media engine, and conversion-first web services that power growth for Colombia and Florida teams."
  );

  return (
    <div className="bg-white">
      <FeaturesSection
        eyebrow="Capabilities"
        title="Three capabilities, one integrated growth engine"
        description="Your audience should experience a seamless journey. We connect automation, media, and web so you can scale faster and smarter."
        features={coreFeatures}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Automation systems built to convert 24-7
              </h2>
              <p className="text-lg text-ink-500">
                We build conversational journeys, triggers, and CRM sync so leads get the right follow up within seconds. Expect faster response times, cleaner data, and deals that move without manual chasing.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {automationWins.map((win) => (
                  <li
                    key={win}
                    className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white/90 p-6 text-sm text-ink-500 shadow-brand-card"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-500" />
                    {win}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Paid media engineered for measurable lift
              </h2>
              <p className="text-lg text-ink-500">
                From audience research to creative iterations, we operate as your in-house growth squad. Every test ladder connects to KPIs, so you always know what is working.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {mediaWins.map((win) => (
                  <li
                    key={win}
                    className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white/90 p-6 text-sm text-ink-500 shadow-brand-card"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-500" />
                    {win}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Web experiences that turn interest into action
              </h2>
              <p className="text-lg text-ink-500">
                We craft sites and landing pages that balance storytelling with conversion psychology. Expect fast load times, accessibility, and analytics baked in from day one.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {webWins.map((win) => (
                  <li
                    key={win}
                    className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white/90 p-6 text-sm text-ink-500 shadow-brand-card"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-500" />
                    {win}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ValuePropsSection
        eyebrow="How we work"
        title="Playbooks that keep momentum high"
        description="Each engagement runs through learn, build, launch, and optimize cycles. The cadence keeps results compounding and teams aligned."
        points={playbooks.map((playbook) => ({
          badge: playbook.title.split(" ")[0],
          title: playbook.title,
          description: playbook.bullets.join(" "),
        }))}
        media={
          <div className="space-y-6 text-sm text-white/85">
            {playbooks.map((playbook) => (
              <div
                key={playbook.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6"
              >
                <div className="flex items-center gap-3 text-white">
                  <div className="rounded-xl bg-white/10 p-2">
                    {playbook.icon}
                  </div>
                  <p className="font-semibold">{playbook.title}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {playbook.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ocean-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
      />

      <CtaSection
        eyebrow="Next move"
        title="Tell us where you need momentum"
        description="We will review your funnel, surface quick wins, and outline an automation, ads, and web sprint tailored to your goals."
        primaryCta={{ label: "Book a discovery session", href: "/contact" }}
        secondaryCta={{ label: "Explore pricing tiers", href: "/pricing" }}
      />
    </div>
  );
}
