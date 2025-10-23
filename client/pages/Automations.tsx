import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import {
  ArrowRight,
  Bot,
  Database,
  MessageSquare,
  Repeat,
  Rocket,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Work smarter, not harder",
    description:
      "Automations handle repetitive marketing tasks so your team can focus on strategy. Small businesses see +25% marketing ROI after adopting automation (Cazoomi).",
  },
  {
    title: "Instant customer engagement",
    description:
      "Chatbots and triggered flows answer questions, capture leads, and nurture prospects in real time—day or night. Well-built bots can convert up to 70% of conversations (Master of Code).",
  },
  {
    title: "Consistency & accuracy",
    description:
      "Every lead gets the right message at the right time. Automations remove manual errors and ensure no opportunity slips through the cracks.",
  },
  {
    title: "Seamless integration",
    description:
      "We connect your chatbots, forms, ads, and CRM so data flows effortlessly. Your team gains a unified customer view that powers personalization.",
  },
];

const services = [
  {
    icon: Bot,
    title: "Chatbot development",
    description:
      "Custom ManyChat flows for Facebook Messenger, Instagram DM, WhatsApp, Telegram, and web widgets. Scripted to match your brand voice, trained to handle complex branching, and integrated with calendars, CRMs, or e-commerce platforms.",
    highlight: "Purpose: capture & qualify leads, resolve FAQs, recommend products, and drive sales automatically.",
    link: "/automations/chatbots",
  },
  {
    icon: Repeat,
    title: "Workflow automation & drip campaigns",
    description:
      "Email and SMS sequences, lead scoring, and task automation across HubSpot, ActiveCampaign, Klaviyo, Mailchimp, or custom stacks. Every touchpoint is tailored to behaviour and stage.",
    highlight: "Purpose: nurture prospects over time, boost conversions, and keep sales informed without manual follow-up.",
    link: "/automations/workflows",
  },
  {
    icon: Database,
    title: "CRM integration & data sync",
    description:
      "Connect your marketing channels with Salesforce, HubSpot, Zoho, Pipedrive, or bespoke CRMs. We architect data models, field mapping, deduplication rules, and bi-directional syncs.",
    highlight: "Purpose: achieve a single source of truth so marketing and sales operate with the same real-time data.",
    link: "/automations/crm-integration",
  },
  {
    icon: MessageSquare,
    title: "E-commerce automations",
    description:
      "Abandoned cart triggers, post-purchase nurture, loyalty loops, and product recommendation flows for Shopify, WooCommerce, and custom stores.",
    highlight: "Purpose: recover lost revenue, increase lifetime value, and delight customers with timely offers.",
  },
];

const steps = [
  {
    title: "Discovery & audit",
    description:
      "We map your current funnel, identify manual bottlenecks, and surface quick-win automations (e.g., replacing manual DM responses with a qualifying bot).",
  },
  {
    title: "Automation blueprint",
    description:
      "Together we prioritize automations with the fastest revenue impact. We design a flowchart illustrating every trigger, action, integration, and notification.",
  },
  {
    title: "Build & integrate",
    description:
      "Our team scripts chatbot conversations, configures workflows, connects APIs/Zapier/Make, and ensures data syncs with your CRM, calendars, or fulfilment tools.",
  },
  {
    title: "Testing & launch",
    description:
      "We pressure-test every scenario—multiple intents, handoffs to humans, data field validation—before going live. Then we monitor closely to optimize in real time.",
  },
  {
    title: "Optimize & scale",
    description:
      "Automation insights uncover new opportunities. We iterate copy, timing, and branching to maximize conversion, and add new automations as your business grows.",
  },
];

export default function Automations() {
  usePageMetadata(
    "Marketing Automation Services – Chatbots, Workflows, CRM Integration | DigitalFace",
    "Supercharge your marketing with DigitalFace’s automation services. AI chatbots, automated workflows, CRM integrations, and ManyChat templates that save time and boost conversions."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Automate to elevate
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Automations designed to engage customers, qualify leads, and drive revenue 24/7.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing implements intelligent chatbots, workflows, and CRM integrations that keep your
              marketing always-on. Imagine waking up to new leads already nurtured, meetings booked, and customers
              supported—all while your team slept.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Request an automation audit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/automations/templates">Browse ManyChat templates</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Why automation matters
              </p>
              <p className="text-sm text-slate-700">
                • $5.44 average return for every $1 invested in marketing automation (Emarsys)
              </p>
              <p className="text-sm text-slate-700">
                • 67% of companies report more sales via chatbot interactions (Master of Code)
              </p>
              <p className="text-sm text-slate-700">
                • 30% increase in lead conversions when CRM and marketing systems sync (Cazoomi)
              </p>
              <p className="text-xs text-slate-400">*Stats sourced from Emarsys, Master of Code, Cazoomi</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              The automation advantage
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">More ROI, stronger experiences.</h2>
            <p className="max-w-3xl text-base text-slate-600">
              Our philosophy: technology should multiply your marketing, not complicate it. We design automations that
              feel human, respect compliance rules (hello, Meta’s 24-hour window), and deliver meaningful results.
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
        <div className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Automation services
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            Build an automation stack that meets leads where they are and moves them forward.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col justify-between border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <CardContent className="space-y-4 p-8">
                <service.icon className="h-10 w-10 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
                {service.highlight && (
                  <p className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm text-slate-700">
                    {service.highlight}
                  </p>
                )}
                {service.link && (
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Dive deeper
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Our process
            </span>
            <h2 className="text-3xl font-semibold">From audit to always-on excellence.</h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              Every automation engagement is collaborative. We combine your product knowledge with our automation
              expertise to create systems that resonate with prospects and support your team.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="border border-indigo-500/40 bg-white/10 text-indigo-100">
                <CardContent className="space-y-3 p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400 text-base font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-xs text-indigo-100/80">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Done-for-you automations
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Zero to automation hero with our ManyChat template library.
            </h2>
            <p className="text-sm text-slate-600">
              Need wins fast? Deploy our plug-and-play ManyChat templates—including lead gen bots, e-commerce follow-up
              flows, appointment schedulers, and event sign-up assistants. Each template is agency-crafted, battle
              tested, and customizable to your brand. We install, configure, and train your team to manage it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/automations/templates">Browse templates</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                <Link to="/automations/chatbots">Custom chatbot builds</Link>
              </Button>
            </div>
          </div>
          <Card className="border-none bg-white shadow-lg shadow-indigo-200/60">
            <CardContent className="space-y-3 p-8 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Included with every template purchase:</p>
              <ul className="space-y-2">
                <li>• One-click import link + installation support</li>
                <li>• Brand voice and asset customization</li>
                <li>• Integration guidance (CRM, email, calendars)</li>
                <li>• Loom walkthroughs & 30 days of Q&A support</li>
              </ul>
              <p className="text-xs text-slate-400">Optional: layer custom development on top for advanced automation.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Ready to automate?
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Let’s design your automation strategy—from quick wins to full-scale systems.
              </h2>
              <p className="text-sm text-slate-600">
                Share your goals and current tools. We’ll respond with tailored automation ideas, timeline estimates, and
                package options. Together, we’ll turn your marketing into a self-sustaining growth engine.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book an automation session</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Link to="/portfolio">See automation case studies</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-slate-900 text-white shadow-2xl shadow-indigo-600/20">
              <CardContent className="space-y-3 p-8">
                <Rocket className="h-8 w-8 text-indigo-200" />
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                  Popular automation packages
                </p>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li>• Lead Gen Accelerator: chatbot + CRM integration + 3-email welcome flow</li>
                  <li>• E-commerce Lift-Off: abandoned cart, post-purchase, and loyalty automations</li>
                  <li>• Sales Enablement Suite: lead scoring, handoff alerts, and pipeline automations</li>
                </ul>
                <p className="text-xs text-indigo-200/80">
                  Custom scopes available for enterprise or multi-brand ecosystems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

