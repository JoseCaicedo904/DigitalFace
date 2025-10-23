import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import {
  ArrowUpRight,
  Bot,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  PanelsTopLeft,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceCards = [
  {
    icon: Bot,
    title: "Automation Systems",
    description:
      "AI chatbots, CRM-integrated workflows, and always-on nurture journeys so your marketing runs 24/7.",
    link: "/automations",
    linkLabel: "Explore automations",
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description:
      "Paid media campaigns across Meta, TikTok, Google, LinkedIn, and YouTube engineered for full-funnel ROI.",
    link: "/social-media-ads",
    linkLabel: "See our ad playbook",
  },
  {
    icon: MonitorSmartphone,
    title: "Websites & Landing Pages",
    description:
      "Conversion-first web experiences that look incredible, load fast, and turn visitors into customers.",
    link: "/websites",
    linkLabel: "Design your next site",
  },
];

const proofPoints = [
  {
    title: "Automation-First Approach",
    copy:
      "We streamline your marketing with AI chatbots and workflows so you do more with less. Marketing automation delivers over 5× ROI on average (Emarsys).",
  },
  {
    title: "Targeted Ad Performance",
    copy:
      "Reach the right audience across Meta, TikTok, Google, and more with data-backed creative and constant optimization. Paid social returns ~$5.28 for every $1 invested (SQ Magazine).",
  },
  {
    title: "Conversion-Led Design",
    copy:
      "75% of credibility judgments are made on website design (Rareform New Media). We craft experiences that make every visit count.",
  },
  {
    title: "Resell-Ready Automations",
    copy:
      "Launch growth faster with our library of ManyChat templates for lead gen, e-commerce follow-ups, and appointment booking.",
  },
];

const successStories = [
  {
    metric: "15% extra revenue",
    label: "Recovered sales",
    description:
      "E-commerce retailer recovered 15% more revenue with our ManyChat abandoned cart and product recommendation bots.",
  },
  {
    metric: "110% more leads",
    label: "Lower CPL",
    description:
      "Fintech SaaS doubled qualified pipeline and cut cost-per-lead by 35% through LinkedIn + Meta full-funnel campaigns.",
  },
  {
    metric: "2.5× conversions",
    label: "Website uplift",
    description:
      "Healthcare platform’s free-trial sign-ups jumped from 2% to 5% after our conversion-led redesign launched.",
  },
];

export default function Index() {
  usePageMetadata(
    "DigitalFace Marketing – Automation, Ads & Web Design for Business Growth",
    "Automation-driven marketing agency in Colombia & Florida. DigitalFace Marketing builds chatbots, social media advertising, and conversion-focused websites that accelerate growth."
  );

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-[-12rem] -z-10 flex justify-center opacity-60 blur-3xl">
        <div className="h-[22rem] w-[60rem] rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
              <Sparkles className="h-4 w-4" />
              Automation-first marketing agency
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1]">
              Automate your marketing. <span className="text-indigo-600">Amplify your results.</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              DigitalFace Marketing blends automation systems, social media advertising, and conversion-focused web
              design to help businesses across Colombia and Florida grow smarter, faster, and with measurable impact.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-7 py-6 text-base font-semibold shadow-lg shadow-indigo-600/25 hover:bg-indigo-700"
              >
                <Link to="/contact">
                  Get your free strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-2 border-slate-200 px-6 py-6 text-base font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/portfolio">See client results</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <span className="block text-3xl font-semibold text-indigo-600">5× ROI</span>
                <span className="text-xs uppercase tracking-wide text-slate-500">Average automation returns*</span>
              </div>
              <div>
                <span className="block text-3xl font-semibold text-indigo-600">24/7</span>
                <span className="text-xs uppercase tracking-wide text-slate-500">Lead engagement via chatbots</span>
              </div>
              <div>
                <span className="block text-3xl font-semibold text-indigo-600">+2.5×</span>
                <span className="text-xs uppercase tracking-wide text-slate-500">Conversion lift after redesigns</span>
              </div>
            </div>
          </div>
          <Card className="border-none bg-white/90 shadow-xl shadow-indigo-600/10">
            <CardContent className="space-y-6 p-8">
              <div className="rounded-2xl bg-indigo-50/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                  What partners love about DigitalFace
                </p>
                <ul className="mt-4 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <PanelsTopLeft className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                    All-in-one approach so automation, ads, and web stay perfectly aligned.
                  </li>
                  <li className="flex items-start gap-3">
                    <Workflow className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                    Systems designed to nurture leads automatically and notify sales the moment intent spikes.
                  </li>
                  <li className="flex items-start gap-3">
                    <LineChart className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                    Transparent performance dashboards and proactive optimization every single week.
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Trusted by brands across</p>
                <p className="text-sm font-semibold text-slate-900">Florida · Colombia · LATAM · North America</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          {serviceCards.map((card) => (
            <Card
              key={card.title}
              className="group flex flex-col border-slate-200 bg-white/80 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-600/10"
            >
              <CardContent className="flex flex-1 flex-col space-y-4 p-8">
                <card.icon className="h-10 w-10 text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="flex-1 text-sm text-slate-600">{card.description}</p>
                <Link
                  to={card.link}
                  className="flex items-center text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-700"
                >
                  {card.linkLabel}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Why choose DigitalFace Marketing
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Boutique partnership. Enterprise capability. Automation at the core.
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              We operate like an extension of your team—mixing creative strategy, technical chops, and transparent
              communication. Every deliverable is engineered to move the metric that matters most to you.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <Card key={item.title} className="border-slate-200 bg-white/80">
                  <CardContent className="space-y-2 p-6">
                    <p className="text-base font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              *Sources: Emarsys, SQ Magazine, Rareform New Media, Cazoomi, Master of Code.
            </p>
          </div>
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-500 p-10 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">Automation Playbook</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Every click, conversation, and conversion connected.
            </h3>
            <p className="mt-4 text-sm text-indigo-100">
              Our integrated approach links chatbots, ads, email, SMS, and your CRM so you can see the full journey from
              first impression to closed deal.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  1
                </span>
                Discover hidden friction in your funnel with a free audit.
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  2
                </span>
                Deploy automations + campaigns tailored to your growth goals.
              </li>
              <li className="flex gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                  3
                </span>
                Review transparent dashboards and iterate with us every month.
              </li>
            </ul>
            <Button
              asChild
              variant="secondary"
              className="mt-8 rounded-full bg-white px-6 py-5 text-sm font-semibold text-indigo-700 hover:bg-slate-100"
            >
              <Link to="/services">See the full service lineup</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 text-white sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                Proof it works
              </span>
              <h2 className="text-3xl font-semibold leading-tight">
                Growth stories across e-commerce, SaaS, services, and beyond.
              </h2>
            </div>
            <Button
              asChild
              variant="secondary"
              className="rounded-full border border-indigo-400 bg-transparent px-6 py-5 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/20"
            >
              <Link to="/portfolio">View more case studies</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story) => (
              <Card
                key={story.metric}
                className="border border-indigo-500/40 bg-white/5 text-indigo-100"
              >
                <CardContent className="space-y-4 p-8">
                  <div>
                    <span className="text-4xl font-semibold text-white">{story.metric}</span>
                    <p className="text-xs uppercase tracking-wide text-indigo-300">{story.label}</p>
                  </div>
                  <p className="text-sm text-indigo-100/80">{story.description}</p>
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
              Let’s build your next growth play
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900">
              Ready to automate, advertise, and accelerate?
            </h2>
            <p className="text-sm text-slate-600">
              Book a free strategy session to uncover quick wins, automation ideas, and campaign opportunities tailored
              to your goals. We’ll bring the research—come with your ambitions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-700"
              >
                <Link to="/contact">Book a strategy session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                <Link to="/pricing">View pricing & packages</Link>
              </Button>
            </div>
          </div>
          <Card className="border-none bg-white shadow-xl shadow-indigo-500/10">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                What happens next
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>We review your goals and current marketing stack.</li>
                <li>Our team maps automation + ad + web opportunities.</li>
                <li>You receive a roadmap with timeline, investment, and projected impact.</li>
              </ul>
              <p className="text-xs text-slate-400">
                No pressure, no fluff—just honest recommendations from a team obsessed with results.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

