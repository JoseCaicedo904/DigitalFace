import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowUpRight, Download, MessageSquare, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  {
    title: "Lead Generation Bot",
    description:
      "Turns cold traffic into qualified leads via quizzes, freebies, or value exchanges. Captures name, email, phone, and key intent signals before sending to your CRM or email list.",
    bestFor: "Service providers, consultants, agencies, real estate, B2B teams.",
  },
  {
    title: "E-commerce Sales & Follow-Up Bot",
    description:
      "Helps shoppers find the right product, answers purchase questions, and recovers abandoned carts with reminders and incentives.",
    bestFor: "Shopify/Shopline stores, DTC brands, and omnichannel retailers.",
  },
  {
    title: "Appointment Scheduler Bot",
    description:
      "Qualifies prospects, checks availability, and books appointments directly into your calendar—complete with confirmations and reminders.",
    bestFor: "Clinics, salons, agencies, consultants, automotive, local services.",
  },
  {
    title: "Event & Webinar Signup Bot",
    description:
      "Registers attendees, sends countdown reminders across channels, and follows up with replays, offers, or surveys after the event.",
    bestFor: "Course creators, SaaS demos, coaches, communities, live launch teams.",
  },
  {
    title: "Interactive Quiz Bot",
    description:
      "Engages audiences with personality or product-match quizzes, segments responses, and delivers personalized recommendations instantly.",
    bestFor: "Fitness, education, beauty, lifestyle, and high-engagement brands.",
  },
  {
    title: "Customer FAQ & Feedback Bot",
    description:
      "Handles top questions, shares knowledge base content, gathers satisfaction scores, and escalates conversations to humans when needed.",
    bestFor: "Support teams seeking scale without sacrificing a human feeling.",
  },
];

const inclusions = [
  "One-click import into your ManyChat account",
  "Brand voice customization across copy, tone, and visuals",
  "Integration setup (email platform, CRM, calendars, Google Sheets)",
  "Compliance-ready opt-ins and unsubscribe handling",
  "Loom walkthrough + PDF playbook",
  "30 days of support for tweaks and Q&A",
];

const rights = [
  {
    title: "Master Resell Rights (MRR)",
    description:
      "Repackage the template under your brand, sell it as part of your offers, or include it in your digital products with ease.",
  },
  {
    title: "Private Label Rights (PLR)",
    description:
      "White-label capabilities allow you to fully customize messaging, logos, and visuals—perfect for agencies and consultants.",
  },
  {
    title: "Agency License",
    description:
      "Deploy templates across multiple client projects. Accelerate delivery while keeping margins strong and quality consistent.",
  },
];

export default function ManyChatTemplates() {
  usePageMetadata(
    "Done-for-You ManyChat Templates – Instant Chatbot Automations | DigitalFace",
    "Launch automation fast with DigitalFace’s ready-made ManyChat templates. Lead gen, e-commerce, appointment, and event chatbots branded for your business."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              Done-for-you automations
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Pre-built ManyChat templates that launch revenue automations in days, not weeks.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing’s template library packages our winning chatbot strategies into plug-and-play flows.
              Install, customize, and start generating leads, bookings, or sales with minimal lift. It’s like hiring our
              automation team—but in a fraction of the time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-rose-500 px-6 py-5 text-sm font-semibold text-white hover:bg-rose-600"
              >
                <Link to="/contact">Request template catalog</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/automations">Need custom automation?</Link>
              </Button>
            </div>
          </div>
          <Card className="border-rose-100 bg-rose-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
                Perfect for
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Agencies bundling automation services</li>
                <li>• Entrepreneurs reselling digital assets</li>
                <li>• In-house teams needing a proven head start</li>
                <li>• Creators launching offers or community funnels</li>
              </ul>
              <p className="text-xs text-slate-400">
                Templates include documentation and rights to resell (where indicated) as your own branded asset.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              Template library
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Choose the automation that matches your #1 growth goal.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Each template is based on battle-tested flows we’ve implemented for clients. Swap copy, update branding,
              connect your tools, and go live. We’ll guide you through every step.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {templates.map((template) => (
              <Card
                key={template.title}
                className="border-slate-200 bg-white transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-200/40"
              >
                <CardContent className="space-y-3 p-8">
                  <h3 className="text-xl font-semibold text-slate-900">{template.title}</h3>
                  <p className="text-sm text-slate-600">{template.description}</p>
                  <p className="rounded-xl border border-rose-100 bg-rose-50/70 p-4 text-xs text-slate-700">
                    {template.bestFor}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              What’s included
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Templates are just the beginning—we deliver the full launch kit.
            </h2>
            <p className="text-sm text-slate-600">
              Forget generic flows that leave you guessing. Each DigitalFace template ships with the training and
              support you’d expect from a white-glove automation team.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {inclusions.map((item) => (
                <Card key={item} className="border-slate-200 bg-white">
                  <CardContent className="flex items-start gap-3 p-6">
                    <MessageSquare className="mt-1 h-5 w-5 text-rose-500" />
                    <p className="text-sm text-slate-600">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-none bg-rose-500 text-white shadow-2xl shadow-rose-200/50">
            <CardContent className="space-y-4 p-8">
              <Download className="h-8 w-8 text-white/80" />
              <h3 className="text-xl font-semibold leading-tight">
                Launch in three simple steps:
              </h3>
              <ol className="space-y-2 text-sm text-rose-100">
                <li>1. Choose the template(s) that fit your goal.</li>
                <li>2. Receive install link, customization session, and integration support.</li>
                <li>3. Hit go—with DigitalFace on standby for optimization.</li>
              </ol>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-5 py-4 text-sm font-semibold text-rose-600 hover:bg-rose-100"
              >
                <Link to="/contact">Get pricing & bundles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-rose-200">
              Licensing options
            </span>
            <h2 className="text-3xl font-semibold">
              Resell-ready templates with rights that empower your business model.
            </h2>
            <p className="max-w-3xl text-sm text-rose-100">
              Whether you’re bundling automations with your services or launching a digital products storefront, our
              licensing options give you the flexibility to monetize with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {rights.map((right) => (
              <Card key={right.title} className="border border-rose-400/30 bg-white/10 text-rose-100">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                  <p className="text-xs text-rose-100/80">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              Why DigitalFace templates?
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Built by ManyChat pros. Enhanced by automation strategists. Trusted by growth teams.
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-start gap-3 p-6">
                  <Rocket className="mt-1 h-5 w-5 text-rose-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Rapid deployment</p>
                    <p className="text-xs text-slate-600">
                      Launch revenue-ready bots within 48 hours (most configs), supported by our team.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-start gap-3 p-6">
                  <Shield className="mt-1 h-5 w-5 text-rose-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Policy-compliant flows</p>
                    <p className="text-xs text-slate-600">
                      Messenger/WhatsApp compliant with opt-ins, time windows, and fallbacks built-in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-slate-600">
              Need something more bespoke? Use a template as your foundation and we’ll customize flows, add AI/NLP, or
              integrate complex systems to match your brand’s ambitions.
            </p>
          </div>
          <Card className="border-none bg-white shadow-lg shadow-rose-200/50">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                Popular bundles
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Launch Kit: Lead Gen + Appointment Scheduler</li>
                <li>• E-commerce Scale: Product Finder + Abandoned Cart + Loyalty Booster</li>
                <li>• Event Power Pack: Registration + Reminder + Follow-up flows</li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-semibold text-rose-500 hover:text-rose-600"
              >
                Ask for bundle pricing
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-rose-50/80">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-rose-100 bg-white p-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                Ready to deploy?
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Tell us the outcome you want—we’ll match the template that gets you there fastest.
              </h2>
              <p className="text-sm text-slate-600">
                Drop your details and we’ll send over a curated list of templates, pricing, and customization ideas
                tailored to your goals. Prefer to resell? We’ll include licensing guidance too.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-rose-500 px-6 py-5 text-sm font-semibold text-white hover:bg-rose-600"
                >
                  <Link to="/contact">Get the template guide</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Link to="/automations">Back to automation services</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-slate-900 text-white shadow-2xl shadow-rose-200/50">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-rose-200">
                  What you’ll receive
                </p>
                <ul className="space-y-2 text-sm text-rose-100">
                  <li>• Template preview videos & documentation</li>
                  <li>• Pricing for single templates or bundles</li>
                  <li>• Implementation timeline & support outline</li>
                  <li>• Licensing overview (MRR/PLR/agency options)</li>
                </ul>
                <p className="text-xs text-rose-100/80">
                  Need ongoing optimization? Ask about our template management retainers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

