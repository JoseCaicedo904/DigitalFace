import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Clock,
  MessageCircle,
  MonitorDot,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "24/7 instant response",
    description:
      "Never keep customers waiting again. Our bots deliver immediate answers, collect information, and route to humans when needed—day or night.",
  },
  {
    title: "Lead generation on autopilot",
    description:
      "Qualify prospects with smart questioning, capture contact info, and even book appointments directly to your calendar.",
  },
  {
    title: "Platform versatility",
    description:
      "Messenger, Instagram, WhatsApp, Telegram, website widgets—one bot can power multiple channels while keeping context.",
  },
  {
    title: "Personalized & contextual",
    description:
      "Bots recognise returning users, remember preferences, and trigger tailored follow-ups that feel surprisingly human.",
  },
  {
    title: "Cost-effective scale",
    description:
      "Automate up to 80% of routine questions so your team can tackle the high-value conversations that truly need a human touch.",
  },
];

const examples = [
  {
    title: "Customer Support Bot",
    description:
      "Handles FAQs, order tracking, returns, and routes complex issues to your support team with full conversation transcripts attached.",
    result: "Result: 50% reduction in support tickets and response time slashed from hours to seconds.",
  },
  {
    title: "Sales Funnel Bot",
    description:
      "Welcomes website visitors, captures lead info, qualifies via needs-based questions, then books demos or hands off warm leads to your reps.",
    result:
      "Result: Sales teams spend time with decision-makers ready to talk, while the bot nurtures early-stage prospects.",
  },
  {
    title: "Event/Launch Bot",
    description:
      "Registers attendees through conversational flows, sends reminders across channels, shares replay links, and captures feedback.",
    result: "Result: Higher attendance, more engaged participants, and seamless post-event follow-up.",
  },
  {
    title: "Interactive Quiz Bot",
    description:
      "Engages Instagram or Messenger audiences with fun quizzes that segment users automatically and deliver tailored offers.",
    result: "Result: 60%+ completion rates and an always-growing email/CRM list.",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy & persona mapping",
    description:
      "We identify chatbot goals (support, lead gen, sales, events) and map conversation paths aligned with user intent and brand voice.",
  },
  {
    step: "02",
    title: "Conversation design",
    description:
      "Our copywriters craft natural, on-brand dialogues with personality, empathy, and conversion tactics baked in.",
  },
  {
    step: "03",
    title: "Build & integration",
    description:
      "We develop flows in ManyChat (or your preferred platform), integrate with CRMs, calendars, e-commerce systems, and configure NLP handling.",
  },
  {
    step: "04",
    title: "Testing & compliance",
    description:
      "We QA every path, ensure Meta/WhatsApp compliance, add fallbacks, and prepare human handoff rules before launch.",
  },
  {
    step: "05",
    title: "Optimization & insights",
    description:
      "Once live, we monitor performance, review logs, and iterate weekly to boost completion rates, sales, and customer satisfaction.",
  },
];

export default function AutomationsChatbots() {
  usePageMetadata(
    "Chatbot Development Services – Engage Customers 24/7 | DigitalFace",
    "Build intelligent chatbots with DigitalFace Marketing. Messenger, Instagram, WhatsApp, and website bots that boost engagement, generate leads, and automate support."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Chatbot development
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Engage and convert customers—even while you sleep.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing designs AI-powered chatbots that delight customers, capture qualified leads, and
              accelerate sales. Tap into conversational marketing across Messenger, Instagram, WhatsApp, and your
              website—without adding headcount.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Start a chatbot project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/automations/templates">See ready-made templates</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Performance snapshot
              </p>
              <p className="text-sm text-slate-700">
                • 73% of users expect chat on websites (Master of Code)
              </p>
              <p className="text-sm text-slate-700">
                • 67% more sales attributed to chatbot conversations (Master of Code)
              </p>
              <p className="text-sm text-slate-700">
                • 80% support question deflection for common FAQs
              </p>
              <p className="text-xs text-slate-400">
                Source: Master of Code, internal DigitalFace case studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Why your business needs a chatbot
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Customers are already chatting—let’s make every conversation count.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Chatbots extend your team’s reach, speed, and availability. They’re your tireless reps who greet every
              visitor, answer questions with a smile, and never miss a chance to collect a lead.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            What our chatbots can do
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            From support heroes to sales closers—choose your automation superpower.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {examples.map((example) => (
            <Card
              key={example.title}
              className="border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <CardContent className="space-y-3 p-8">
                <h3 className="text-xl font-semibold text-slate-900">{example.title}</h3>
                <p className="text-sm text-slate-600">{example.description}</p>
                <p className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-xs text-slate-700">
                  {example.result}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Our chatbot process
            </span>
            <h2 className="text-3xl font-semibold">
              Structured for speed, engineered for excellence, optimized forever.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              Launching a chatbot is like onboarding a new colleague. We make sure they understand your tone, customers,
              and product knowledge—then we keep training them to be even better.
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
              Experience matters
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              ManyChat Agency Partner status, backed by hundreds of automated conversations monthly.
            </h2>
            <p className="text-sm text-slate-600">
              We’ve seen what it takes to make bots feel human and convert like crazy. From building natural language
              understanding to setting up fail-safes and analytics, we’ve got your back.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Clock className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">80%+ open rates</p>
                    <p className="text-xs text-slate-600">
                      Broadcast messages delivered through chat outperform email dramatically.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <BadgeCheck className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Policy compliant</p>
                    <p className="text-xs text-slate-600">
                      We operate within Meta’s rules, ensuring sustainability and trust.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <MonitorDot className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Full analytics</p>
                    <p className="text-xs text-slate-600">
                      See drop-offs, popular paths, and growth opportunities in custom dashboards.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <ThumbsUp className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Human handoff ready</p>
                    <p className="text-xs text-slate-600">
                      When a conversation needs a real teammate, the bot knows exactly what to do.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="border-none bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25">
            <CardContent className="space-y-4 p-8">
              <Bot className="h-8 w-8 text-white/80" />
              <h3 className="text-2xl font-semibold leading-tight">
                Ongoing care plans keep your bot sharp, compliant, and converting.
              </h3>
              <ul className="space-y-2 text-sm text-indigo-100">
                <li>• Monthly log reviews and flow optimizations</li>
                <li>• Seasonal campaign updates (promos, launches, events)</li>
                <li>• Metrics dashboard & Loom insights</li>
                <li>• Rapid support via Slack or email</li>
              </ul>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-5 py-4 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                <Link to="/pricing">See chatbot retainers</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Let’s build your chatbot
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Ready to deploy your own AI assistant? We’re ready to architect it.
              </h2>
              <p className="text-sm text-slate-600">
                Tell us about your audience, goals, and current tech. We’ll respond with a tailored plan outlining
                timelines, investment, and expected impact. No fluff—just a roadmap to conversational success.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book my chatbot consult</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Link to="/portfolio">See chatbot wins</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-white shadow-lg shadow-indigo-200/50">
              <CardContent className="space-y-4 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  What you’ll get
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Strategy workshop + messaging framework</li>
                  <li>• End-to-end chatbot build & integrations</li>
                  <li>• Team onboarding & training resources</li>
                  <li>• 30-day optimization window post-launch</li>
                </ul>
                <p className="text-xs text-slate-400">
                  Optional add-ons: multilingual flows, AI-powered semantic search, advanced analytics dashboards.
                </p>
                <Link
                  to="/automations/templates"
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Need a quick launch? Grab a template
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

