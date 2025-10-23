import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import {
  ArrowUpRight,
  Database,
  Gauge,
  LinkIcon,
  Plug,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Single customer view",
    description:
      "Unify marketing, sales, and service data. Know how every person discovered you, what they engaged with, and where they are in the lifecycle.",
  },
  {
    title: "Personalization at scale",
    description:
      "Leverage CRM data to send tailored messages automatically. 63% of companies outperform competitors by syncing automation with CRM (Cazoomi).",
  },
  {
    title: "Efficiency & accuracy",
    description:
      "No more exporting CSVs or duplicate records. When data updates in one place, it updates everywhere—reducing errors and manual busywork.",
  },
  {
    title: "Faster sales cycles",
    description:
      "Trigger instant alerts when a prospect shows high intent. Your team reaches out at the perfect moment, closing deals faster.",
  },
  {
    title: "Actionable analytics",
    description:
      "Connect ad spend, automations, and closed revenue. Understand which channels generate your best customers and double down with confidence.",
  },
];

const integrationPoints = [
  {
    title: "Websites & landing pages",
    description:
      "Ensure every form, lead magnet, and pop-up flows straight to your CRM with the right tags, lifecycle stages, and attribution.",
  },
  {
    title: "Chatbots & live chat",
    description:
      "Log conversations, store key answers, and create follow-up tasks automatically so sales has the full context of every lead.",
  },
  {
    title: "Email & automation platforms",
    description:
      "Keep subscriber status, engagement data, and segments in sync across Mailchimp, Klaviyo, ActiveCampaign, or HubSpot Marketing Hub.",
  },
  {
    title: "Ad platforms",
    description:
      "Pipe Facebook/Instagram, TikTok, LinkedIn, and Google lead ads directly into your CRM with UTM and campaign data intact.",
  },
  {
    title: "E-commerce systems",
    description:
      "Sync Shopify, WooCommerce, or custom stores to capture purchase history, LTV, and product preferences for future campaigns.",
  },
  {
    title: "Support & success tools",
    description:
      "Connect helpdesk tickets (Zendesk, Intercom, Freshdesk) so sales sees customer health and can prioritize outreach.",
  },
];

const process = [
  {
    step: "01",
    title: "Stack discovery",
    description:
      "We inventory your marketing, sales, and customer tools, review data fields, and identify gaps or redundancies.",
  },
  {
    step: "02",
    title: "Integration blueprint",
    description:
      "You’ll receive a data architecture plan covering connections, field mapping, deduplication rules, and governance.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We configure native integrations, build workflows with Zapier/Make, or develop custom API scripts where needed.",
  },
  {
    step: "04",
    title: "Testing & security",
    description:
      "We validate data flow, set up error handling, and ensure compliance with GDPR/CCPA policies before go-live.",
  },
  {
    step: "05",
    title: "Enablement & optimization",
    description:
      "Your team gets documentation, dashboards, and training. We monitor performance and refine as new use cases appear.",
  },
];

export default function AutomationsCrm() {
  usePageMetadata(
    "CRM Integration & Automation – Connect Your Marketing with Sales | DigitalFace",
    "Unify your systems with DigitalFace’s CRM integration services. Connect your CRM with chatbots, websites, email, and ads for seamless data flow and higher sales productivity."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              CRM integration
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Break data silos. Connect and convert with a single source of truth.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing integrates your CRM with marketing, sales, and success tools so every touchpoint
              aligns. From Salesforce to HubSpot to Zoho, we make your tech stack play nice—and drive revenue together.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Schedule a CRM consult</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/portfolio">See integration case studies</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Why it matters
              </p>
              <p className="text-sm text-slate-700">
                • Teams that integrate marketing automation with CRM are 63% more likely to outperform competitors.
              </p>
              <p className="text-sm text-slate-700">
                • Companies responding to leads within 1 hour are 7× more likely to qualify them (Harvard Business Review).
              </p>
              <p className="text-xs text-slate-400">Sources: Cazoomi, HBR.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Benefits of a connected CRM
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Align your teams, automate personalization, and report on what truly matters.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              When data flows seamlessly, amazing things happen. Marketers launch smarter campaigns, sales know which
              leads are ready, and leadership sees the full revenue picture.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              What we integrate
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              From web forms to ad platforms, we connect every critical channel.
            </h2>
            <p className="text-sm text-slate-600">
              Our team works with native connectors, middleware tools like Zapier/Make, and custom APIs. Whatever your
              stack, we’ll architect the optimal integration plan.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {integrationPoints.map((point) => (
                <Card key={point.title} className="border-slate-200 bg-white">
                  <CardContent className="space-y-2 p-6">
                    <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                    <p className="text-sm text-slate-600">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-none bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25">
            <CardContent className="space-y-4 p-8">
              <LinkIcon className="h-8 w-8 text-white/80" />
              <h3 className="text-xl font-semibold leading-tight">
                Closed-loop analytics = smarter decisions.
              </h3>
              <p className="text-sm text-indigo-100">
                We connect UTMs, ad platform data, and CRM revenue so you know which campaigns, keywords, and audiences
                drive the biggest wins. Build once, test often, invest wisely.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Implementation process
            </span>
            <h2 className="text-3xl font-semibold">
              Architecture, execution, and enablement—handled end-to-end.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              Integrating a CRM isn’t just technical; it’s organizational. We ensure your team adopts new workflows and
              understands how to leverage insights from day one.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <Card key={item.title} className="border border-indigo-500/40 bg-white/10 text-indigo-100">
                <CardContent className="space-y-3 p-6">
                  <div className="text-sm font-semibold text-indigo-200">{item.step}</div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-indigo-100/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Experience you can trust
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Real-world integrations driving faster response times and bigger pipelines.
            </h2>
            <p className="text-sm text-slate-600">
              We’ve helped real estate teams route Facebook leads to Zoho within seconds, SaaS companies connect product
              usage data to HubSpot, and e-commerce brands sync Shopify events to trigger high-converting automations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Users className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Sales + Marketing alignment</p>
                    <p className="text-xs text-slate-600">
                      Shared dashboards show pipeline stage, last touch, and next action—no more guesswork.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Plug className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Error handling & logging</p>
                    <p className="text-xs text-slate-600">
                      Automations re-try gracefully, alert us quickly, and keep your data clean.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Gauge className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Performance dashboards</p>
                    <p className="text-xs text-slate-600">
                      Track MQL-to-SQL conversion, velocity, and campaign ROI in one place.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <ShieldCheck className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Security & governance</p>
                    <p className="text-xs text-slate-600">
                      Role-based access, documentation, and compliance baked into every integration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="border-none bg-white shadow-lg shadow-indigo-200/50">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Case study snapshot
              </p>
              <p className="text-sm text-slate-600">
                Real estate brokerage connected Facebook Lead Ads → Zapier → Zoho CRM → Slack notifications →
                round-robin assignment. Response time dropped to under 10 minutes and conversion rates climbed.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Explore more wins
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-indigo-50/80">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-indigo-100 bg-white p-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Ready to connect the dots?
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Let’s build the CRM backbone your growth deserves.
              </h2>
              <p className="text-sm text-slate-600">
                Share your current stack and integration wishlist. We’ll reply with a readiness assessment, action plan,
                and phased rollout roadmap tailored to your team.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book integration consult</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Link to="/automations">Return to automation hub</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-slate-900 text-white shadow-2xl shadow-indigo-600/20">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                  Deliverables snapshot
                </p>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li>• Integration blueprint & data dictionary</li>
                  <li>• Configured connections + error handling</li>
                  <li>• Documentation & training sessions</li>
                  <li>• KPI dashboard + ongoing maintenance options</li>
                </ul>
                <p className="text-xs text-indigo-200/80">
                  Optional add-ons: revenue attribution modeling, custom revops dashboards, enablement workshops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

