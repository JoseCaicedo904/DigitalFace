import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowUpRight, Bot, Megaphone, MonitorSmartphone, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Bot,
    title: "Automation Systems",
    description:
      "AI chatbots, automated workflows, CRM integrations, and e-commerce automations that keep your marketing running 24/7. Expect faster response times, +30% lead conversion (Cazoomi), and richer customer journeys.",
    bullets: [
      "Chatbots for Messenger, Instagram, WhatsApp, and web",
      "Lead nurture email/SMS sequences & lead scoring",
      "CRM integrations (HubSpot, Salesforce, Zoho, custom)",
      "E-commerce flows—abandoned cart, upsell, re-engagement",
    ],
    link: "/automations",
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description:
      "Full-funnel paid media across Meta, TikTok, Google, LinkedIn, and YouTube. We concept creative, launch campaigns, and optimize daily to beat the ~5:1 social ROI benchmark (SQ Magazine).",
    bullets: [
      "Audience research, offer development, creative production",
      "A/B testing, conversion tracking, and bid optimization",
      "Cross-platform scaling with aligned funnel strategy",
      "Reporting that connects ad spend to revenue outcomes",
    ],
    link: "/social-media-ads",
  },
  {
    icon: MonitorSmartphone,
    title: "Websites & Landing Pages",
    description:
      "Conversion-first websites and landing pages that look exceptional, load fast, and turn visitors into customers. We take design seriously—75% of credibility hinges on your site (Rareform New Media).",
    bullets: [
      "UX strategy, copywriting, and design systems",
      "Responsive builds on WordPress, Webflow, or Shopify",
      "SEO fundamentals, analytics, and performance optimizations",
      "Landing pages tailored to campaigns and funnels",
    ],
    link: "/websites",
  },
];

const qualityPoints = [
  {
    title: "Strategy first",
    description:
      "Every engagement starts with a workshop to understand goals, audience, tech stack, and success metrics. The result: a clear roadmap and KPIs we track together.",
  },
  {
    title: "Dedicated project leadership",
    description:
      "Work directly with a strategist who coordinates automation, ad, and web squads. Expect weekly updates, shared dashboards, and a direct Slack line.",
  },
  {
    title: "Quality assurance & optimization",
    description:
      "From chatbot conversation testing to cross-browser checks, we ship with care. Post-launch we iterate fast—ads, flows, and UI enhancements stay in motion.",
  },
  {
    title: "Transparent reporting",
    description:
      "See what we see. Performance dashboards highlight wins, learning experiments, and next steps so you always understand where growth is coming from.",
  },
];

export default function Services() {
  usePageMetadata(
    "Our Services – Automation, Social Media Ads & Web Design | DigitalFace",
    "Discover DigitalFace Marketing’s services: marketing automation, social media advertising, and conversion-focused website design. Unified systems built for growth."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Integrated services
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Integrated digital marketing services engineered for automation-first growth.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            DigitalFace Marketing covers the full spectrum—from systems that run on autopilot to campaigns that capture
            demand and websites that convert it. Engage us for a single initiative or activate the full trio for a
            synchronized growth engine.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <Link to="/contact">Build my custom plan</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              <Link to="/pricing">View pricing framework</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="flex flex-col border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <CardContent className="flex flex-1 flex-col gap-5 p-8">
                <category.icon className="h-10 w-10 text-indigo-600" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-slate-900">{category.title}</h2>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {category.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-auto flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  to={category.link}
                >
                  Explore this service
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              How it all connects
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Chatbots capture leads, ads drive qualified traffic, and your website converts—together.
            </h2>
            <p className="text-base text-slate-600">
              Marketing performs best when every channel shares data and serves the same goal. Engage multiple services
              and we’ll link automations, ads, and web experiences into a seamless journey:
            </p>
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                • A paid ad clicks through to a conversion-optimized landing page that syncs to your CRM.
              </p>
              <p>
                • The chatbot greets new leads, answers FAQs, and books meetings while they’re hot.
              </p>
              <p>
                • Workflows nurture prospects with relevant content and alert sales the moment intent spikes.
              </p>
              <p>
                • Insights from each channel feed back into creative iterations, copy updates, and sequence refinements.
              </p>
            </div>
            <p className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm text-slate-700">
              Result? A marketing machine that’s faster, more consistent, and more profitable than fragmented tactics.
            </p>
          </div>
          <Card className="border-indigo-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-500 text-white">
            <CardContent className="space-y-4 p-10">
              <Workflow className="h-10 w-10 text-white/80" />
              <h3 className="text-2xl font-semibold leading-tight">
                Unified dashboards track the entire funnel—from first click to closed revenue.
              </h3>
              <p className="text-sm text-indigo-100">
                No more guessing which channel drove the sale. We connect analytics, ad platforms, ManyChat, and your
                CRM to deliver revenue attribution you can trust.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                Quality & support
              </span>
              <h2 className="text-3xl font-semibold">
                We sweat the details, stay proactive, and communicate often.
              </h2>
              <p className="text-sm text-indigo-100">
                Consider us your automation and performance co-founders. We move fast but never sacrifice craft—because
                customer journeys deserve excellence at every touchpoint.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <Card key={point.title} className="border border-indigo-500/30 bg-white/10 text-indigo-100">
                  <CardContent className="space-y-2 p-6">
                    <h3 className="text-base font-semibold text-white">{point.title}</h3>
                    <p className="text-xs text-indigo-100/80">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-10 text-slate-900">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Ready for lift-off?
              </span>
              <h2 className="text-3xl font-semibold">
                Tell us where you want to grow— we’ll map the automation, ads, and web mix to get you there.
              </h2>
              <p className="text-sm text-slate-600">
                The first call is on us. We’ll analyze your current presence, surface quick wins, and recommend a phased
                approach that matches your goals and resources.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Schedule a consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Link to="/portfolio">Browse case studies</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-white shadow-lg shadow-indigo-200/60">
              <CardContent className="space-y-3 p-8 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">What we need from you:</p>
                <ul className="space-y-2">
                  <li>• Your growth goals and KPIs</li>
                  <li>• Current tech stack and marketing assets</li>
                  <li>• Access for audits (ads, CRM, site) if available</li>
                </ul>
                <p className="text-xs text-slate-400">
                  Within five business days you’ll receive a roadmap, timeline, and investment options tailored to your
                  ambitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

