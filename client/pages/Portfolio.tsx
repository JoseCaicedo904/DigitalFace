import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowUpRight, BarChart3, Bot, Megaphone, MonitorSmartphone, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "E-commerce chatbot boosts sales",
    metrics: ["+15% revenue recovered", "80% FAQ deflection"],
    description:
      "TrendyHome Decor deployed our ManyChat assistant to guide shoppers, answer questions, and re-engage abandoned carts. The flow captured emails, pushed data into Klaviyo, and triggered targeted offers.",
    learnings:
      "Personalized reminders and product recommendations increased average order value while freeing the support inbox.",
    serviceTag: "Automation · ManyChat",
  },
  {
    title: "Multi-channel ads double B2B leads",
    metrics: ["+110% qualified leads", "-35% cost per lead"],
    description:
      "FinServePro, a fintech SaaS, combined LinkedIn Sponsored Content, Facebook lookalikes, and retargeting sequences. We produced funnel-stage creative and synced leads to HubSpot for automated nurture.",
    learnings:
      "Cross-platform testing and strong offer positioning led to pipeline growth with decision-makers ready to buy.",
    serviceTag: "Paid Media · Lead Gen",
  },
  {
    title: "Website redesign lifts trial conversions",
    metrics: ["Bounce rate ↓20%", "Free trials 2% → 5%"],
    description:
      "HealthSync’s SaaS site was rebuilt with messaging clarity, social proof, and a guided conversion path. We improved load speed, mobile UX, and integrated calendar booking for demos.",
    learnings:
      "Combining UX upgrades with automation-ready forms increased sign-ups and gave sales richer context at handoff.",
    serviceTag: "Web Design · CRO",
  },
  {
    title: "Automation + ads fill gym classes",
    metrics: ["300 leads in 30 days", "30% membership conversion"],
    description:
      "FitLife Gym ran geo-targeted Facebook lead ads funnelling into a ManyChat SMS bot that booked class slots, sent reminders, and offered follow-ups.",
    learnings:
      "Automation handled scheduling logistics while ads delivered constant demand, leading to sustainable membership growth.",
    serviceTag: "Automation · Paid Media",
  },
];

const highlights = [
  {
    icon: Bot,
    title: "Automation results",
    bullets: [
      "24/7 lead capture and qualification",
      "CRM-integrated workflows fueling sales outreach",
      "Templates resold by partners for passive revenue",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid media wins",
    bullets: [
      "6× ROAS for fashion brand scaling DTC sales",
      "40% more bookings from local service campaigns",
      "10× ROI for B2B LinkedIn + Meta retargeting combo",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Web performance lifts",
    bullets: [
      "Conversion rate boosts between 1.5× and 3×",
      "SEO-friendly builds indexing within weeks",
      "Landing pages aligning with paid search for higher Quality Scores",
    ],
  },
];

export default function Portfolio() {
  usePageMetadata(
    "Our Portfolio – Success Stories & Results | DigitalFace Marketing",
    "Explore DigitalFace Marketing's portfolio of automation, advertising, and web projects. See case studies proving measurable growth."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Portfolio & case studies
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Proof it works: automation, ads, and web experiences delivering measurable growth.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            DigitalFace Marketing partners with brands across Colombia, Florida, and beyond. The common thread: data-led
            strategy, automation-first execution, and results worth celebrating.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Link to="/contact">Start your project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              <Link to="/services">See everything we offer</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Recent highlights
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              A snapshot of the impact we create.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Card
                key={study.title}
                className="border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <CardContent className="space-y-4 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
                    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                      {study.serviceTag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-indigo-600">
                    {study.metrics.map((metric) => (
                      <span key={metric} className="rounded-full bg-indigo-50 px-3 py-1">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">{study.description}</p>
                  <p className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-xs text-slate-700">
                    {study.learnings}
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
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Automation · Advertising · Web
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Integrated victories across the core pillars of growth.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.title} className="border-slate-200 bg-white">
                  <CardContent className="space-y-3 p-6">
                    <item.icon className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-none bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25">
            <CardContent className="space-y-4 p-8">
              <BarChart3 className="h-8 w-8 text-white/80" />
              <h3 className="text-xl font-semibold leading-tight">
                Want deeper insight? Request a custom case study deck.
              </h3>
              <p className="text-sm text-indigo-100">
                We’ll pull examples tailored to your industry, goals, and platforms—complete with timelines, team
                structure, and investment levels.
              </p>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-5 py-4 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                <Link to="/contact">Ask for the deck</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Behind every result
            </span>
            <h2 className="text-3xl font-semibold">
              Our process ensures we don’t just launch—we continuously optimize.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              From discovery workshops to weekly performance stand-ups, we operate as a collaborative partner invested in
              your success.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Workflow,
                title: "Strategize",
                description: "Dig into your analytics, audience insights, and positioning to build a growth hypothesis.",
              },
              {
                icon: Megaphone,
                title: "Execute",
                description: "Build automations, launch campaigns, design experiences—always with QA and documentation.",
              },
              {
                icon: MonitorSmartphone,
                title: "Optimize",
                description:
                  "Weekly reviews, rapid experiments, and data-backed recommendations keep compounding results.",
              },
            ].map((item) => (
              <Card key={item.title} className="border border-indigo-500/40 bg-white/10 text-indigo-100">
                <CardContent className="space-y-3 p-6">
                  <item.icon className="h-6 w-6 text-white/80" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-indigo-100/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-10 text-slate-900">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Let’s build your success story
              </span>
              <h2 className="text-3xl font-semibold">
                Ready to automate, advertise, or redesign? We’re ready to help.
              </h2>
              <p className="text-sm text-slate-600">
                Share your growth goals and we’ll directionally map the systems, campaigns, or experiences to make them
                happen. Expect honesty, clarity, and a partner that cares deeply about outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book a consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Link to="/pricing">Review pricing & packages</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-white shadow-lg shadow-indigo-200/50">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  Next steps
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Discovery call to align on goals and KPIs</li>
                  <li>• Custom proposal including timeline and deliverables</li>
                  <li>• Kickoff with shared project spaces and success metrics</li>
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Explore service details
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

