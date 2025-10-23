import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowUpRight, CheckCircle, Mails, Route, Smartphone, Workflow as WorkflowIcon } from "lucide-react";
import { Link } from "react-router-dom";

const workflowTypes = [
  {
    title: "Email & SMS drips",
    description:
      "Welcome series, onboarding flows, post-purchase nurture, and abandoned cart rescues that educate, engage, and convert.",
  },
  {
    title: "Lead scoring & routing",
    description:
      "Assign point values to key actions, label leads as hot/warm/cold, and route them to sales with context the moment they’re ready.",
  },
  {
    title: "Internal task automation",
    description:
      "Automatically create deals, assign tasks, send reminders, and notify stakeholders to keep pipeline velocity high.",
  },
  {
    title: "Multi-channel journeys",
    description:
      "Coordinate email, SMS, chat, paid retargeting, and even direct mail triggers to deliver the right message at the right time.",
  },
  {
    title: "Event & launch sequences",
    description:
      "Pre-launch hype, reminder cadences, and post-event follow-up that turn registrations into sales opportunities.",
  },
];

const benefits = [
  {
    title: "Never miss a follow-up",
    description:
      "Automations ensure every lead receives timely, relevant communication. Consistency builds trust and closes deals faster.",
  },
  {
    title: "Lead nurturing on autopilot",
    description:
      "Warm up prospects with value-driven touchpoints. Companies with automated nurturing see 45% more qualified leads (Cazoomi).",
  },
  {
    title: "Time & cost savings",
    description:
      "Free your team from repetitive manual work. Marketing automation can reduce overhead by 12% while increasing productivity 14.5% (Cazoomi).",
  },
  {
    title: "Enhanced customer experience",
    description:
      "Deliver personalized journeys that respond to actions and preferences—creating raving fans and repeat buyers.",
  },
];

const process = [
  {
    step: "01",
    title: "Journey mapping",
    description:
      "We audit your existing funnel, identify drop-off points, and map the ideal journey from first touch to loyal customer.",
  },
  {
    step: "02",
    title: "Workflow architecture",
    description:
      "We build visual flowcharts detailing triggers, conditions, delays, and messaging so you see exactly how each workflow operates.",
  },
  {
    step: "03",
    title: "Content & setup",
    description:
      "Our team writes emails/SMS copy, designs assets, configures automation logic, and integrates with your CRM or ESP.",
  },
  {
    step: "04",
    title: "Testing & launch",
    description:
      "Quality checks include data validation, fallbacks, and deliverability best practices. Once live, we monitor closely.",
  },
  {
    step: "05",
    title: "Optimization & reporting",
    description:
      "We iterate based on open/click/conversion rates, run A/B tests, and share dashboards that highlight wins and opportunities.",
  },
];

export default function AutomationsWorkflows() {
  usePageMetadata(
    "Marketing Workflow Automation – Streamline Lead Nurturing & Processes | DigitalFace",
    "Automate your marketing workflows with DigitalFace. We design lead nurturing funnels, drip campaigns, and process automations that save time and boost conversion rates."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Workflow automation
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Streamline your marketing. Supercharge your funnel.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing engineers automated workflows that nurture leads, shorten sales cycles, and keep
              teams aligned. From welcome emails to multi-channel nurture, we build journeys that run flawlessly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Request a workflow audit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/pricing">View automation packages</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Key stats
              </p>
              <p className="text-sm text-slate-700">
                • Businesses with automated lead nurturing generate 50% more sales-ready leads at 33% lower cost.
              </p>
              <p className="text-sm text-slate-700">
                • Automating repetitive tasks can make marketers 46% more likely to hit their strategy goals (Cazoomi).
              </p>
              <p className="text-xs text-slate-400">
                Data: Industry reports cited by Cazoomi and DigitalFace case studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Workflows we build
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Every touchpoint, orchestrated with precision.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Our team works across HubSpot, ActiveCampaign, Klaviyo, Mailchimp, Make (Integromat), Zapier, and custom
              stacks. We adapt to your tools—or recommend the right ones if you’re starting fresh.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {workflowTypes.map((type) => (
              <Card key={type.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{type.title}</h3>
                  <p className="text-sm text-slate-600">{type.description}</p>
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
              Why it matters
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Give every lead the red-carpet treatment automatically.
            </h2>
            <p className="text-sm text-slate-600">
              Workflows help you stay organized behind the scenes and unforgettable to your customers. They combine
              personalization, timing, and relevance—so showing up timely becomes effortless.
            </p>
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
          <Card className="border-none bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25">
            <CardContent className="space-y-4 p-8">
              <WorkflowIcon className="h-8 w-8 text-white/80" />
              <h3 className="text-xl font-semibold leading-tight">
                Pair workflows with chatbots & ads for maximum momentum.
              </h3>
              <p className="text-sm text-indigo-100">
                A lead clicks your ad, chats with your bot, and instantly receives a personalized email sequence—all
                while your CRM updates and your team gets notified. That’s the DigitalFace automation trifecta.
              </p>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-5 py-4 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                <Link to="/automations">Explore automation services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              How we work
            </span>
            <h2 className="text-3xl font-semibold">
              Our workflow automation process keeps your business moving forward.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              We combine your customer knowledge with our automation expertise to create journeys that feel personal,
              not robotic.
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
              Platforms & tooling
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Flexible across your stack—no platform left behind.
            </h2>
            <p className="text-sm text-slate-600">
              We implement workflows in the tools you already use, or recommend the best-fit solution for your team.
              Whether we’re integrating HubSpot with Slack or sending Zapier data into Airtable, we speak fluent ops.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Mails className="h-6 w-6 text-indigo-600" />
                  <p className="text-sm font-semibold text-slate-900">HubSpot · ActiveCampaign · Klaviyo · Mailchimp</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Route className="h-6 w-6 text-indigo-600" />
                  <p className="text-sm font-semibold text-slate-900">Make (Integromat) · Zapier · n8n · Custom APIs</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                  <p className="text-sm font-semibold text-slate-900">SMS platforms · WhatsApp Business · Twilio</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-center gap-3 p-6">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                  <p className="text-sm font-semibold text-slate-900">
                    QA suites & analytics dashboards for monitoring performance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="border-none bg-white shadow-lg shadow-indigo-200/50">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Case study highlight
              </p>
              <p className="text-sm text-slate-600">
                SaaS platform saw trial-to-paid conversion rise from 5% to 12% after we implemented a 14-day segmented
                nurture workflow with in-app messaging and sales alerts.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Read the full story
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
                Ready to optimize your funnel?
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Let’s build workflows that nurture leads while you sleep.
              </h2>
              <p className="text-sm text-slate-600">
                Tell us about your customer journey and where leads drop off. We’ll create a workflow roadmap outlining
                quick wins, longer-term automation, and the outcomes you can expect from each.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book a workflow session</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Link to="/automations">Back to automation overview</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-slate-900 text-white shadow-2xl shadow-indigo-600/20">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                  Deliverables snapshot
                </p>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li>• Journey mapping & automation blueprint deck</li>
                  <li>• Copywriting & asset production for emails/SMS</li>
                  <li>• Automation build-out with QA documentation</li>
                  <li>• Performance dashboards & iteration roadmap</li>
                </ul>
                <p className="text-xs text-indigo-200/80">
                  Add-ons: sales enablement playbooks, rep training, ongoing experiment sprints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

