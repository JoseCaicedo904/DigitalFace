import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowUpRight, BarChart3, Megaphone, Shuffle, Target, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const platforms = [
  {
    title: "Meta (Facebook & Instagram)",
    description:
      "Audience research, creative production, and full-funnel campaign management—from awareness reels to conversion-focused retargeting.",
  },
  {
    title: "TikTok Ads",
    description:
      "Native-feeling short-form videos, spark ads, and creator collaborations to tap into TikTok’s 95-minute-per-day engagement (SQ Magazine).",
  },
  {
    title: "Google & YouTube",
    description:
      "Intent-driven search campaigns, Performance Max, display retargeting, and storytelling-rich YouTube ads that nurture demand.",
  },
  {
    title: "LinkedIn Ads",
    description:
      "Precision targeting by title, industry, and company size. Sponsored content, lead gen forms, and thought-leadership campaigns for B2B growth.",
  },
  {
    title: "Other channels",
    description:
      "Pinterest for planning moments, X (Twitter) for real-time engagement, and programmatic placements when scale demands it.",
  },
];

const process = [
  {
    title: "Discovery & goal setting",
    description:
      "We align on KPI targets (ROAS, CPL, CAC), messaging pillars, and offers. You’ll know the metrics defining success before we spend $1.",
  },
  {
    title: "Audience & creative strategy",
    description:
      "Messaging frameworks, positioning, and creative briefs guide thumb-stopping assets. We plan A/B tests from day one.",
  },
  {
    title: "Campaign build & tracking",
    description:
      "We configure pixels, ensure server-side conversion APIs, structure campaigns smartly, and set up dashboards for live performance.",
  },
  {
    title: "Optimization & scaling",
    description:
      "Daily monitoring, budget reallocation, creative refreshes, and cross-channel insights keep performance climbing.",
  },
  {
    title: "Reporting & collaboration",
    description:
      "Clear weekly/monthly reports and Loom walkthroughs. You’ll understand what’s working, what’s next, and how it impacts revenue.",
  },
];

const proof = [
  {
    metric: "6× ROAS",
    description: "Fashion e-commerce brand scaled revenue with dynamic product ads + short-form video creative.",
  },
  {
    metric: "40% more bookings",
    description: "Local business filled calendars using geo-targeted Meta lead ads and Google search campaigns.",
  },
  {
    metric: "10× ROI",
    description: "B2B SaaS combined LinkedIn lead gen with remarketing, generating high-value deals from a niche audience.",
  },
];

export default function SocialMediaAds() {
  usePageMetadata(
    "Social Media Advertising Services – ROI-Focused Ads on Meta, TikTok, Google | DigitalFace",
    "Run data-driven ad campaigns with DigitalFace Marketing. Meta, TikTok, Google, LinkedIn advertising that drives clicks, conversions, and measurable ROI."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Social media advertising
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Get seen. Get clicks. Get customers.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing builds ROI-obsessed ad campaigns across Meta, TikTok, Google, LinkedIn, and more.
              We combine creative storytelling with ruthless optimization to keep your pipeline full.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Request an ad strategy call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/portfolio">See campaign results</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Why paid social?
              </p>
              <p className="text-sm text-slate-700">
                • Average ROI on paid social is ~$5.28 per $1 spent (SQ Magazine)
              </p>
              <p className="text-sm text-slate-700">
                • Video ads deliver ~23% higher engagement than static posts
              </p>
              <p className="text-xs text-slate-400">
                When expertly crafted, campaigns become revenue machines. We’re here to build them.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Platforms we master
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Multi-platform expertise with a holistic funnel lens.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              We connect the dots between platform data, landing page performance, and downstream conversion. Every ad
              flight is part of a bigger growth play.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {platforms.map((platform) => (
              <Card key={platform.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{platform.title}</h3>
                  <p className="text-sm text-slate-600">{platform.description}</p>
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
              What sets us apart
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Creative + data + automation = unfair advantage.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-start gap-3 p-6">
                  <Target className="mt-1 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Full-funnel architecture</p>
                    <p className="text-xs text-slate-600">
                      Prospecting, retargeting, nurture—every layer has a role and a KPI.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-start gap-3 p-6">
                  <Shuffle className="mt-1 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Constant experimentation</p>
                    <p className="text-xs text-slate-600">
                      Creative angles, hooks, CTAs, landing pages—we test relentlessly.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-start gap-3 p-6">
                  <BarChart3 className="mt-1 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Real-time dashboards</p>
                    <p className="text-xs text-slate-600">
                      Understand spend, returns, and next steps at a glance.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="flex items-start gap-3 p-6">
                  <Youtube className="mt-1 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Creative studio</p>
                    <p className="text-xs text-slate-600">
                      Motion, UGC-style videos, and graphics built specifically for paid placement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm text-slate-700">
              Bonus: We integrate ads with your chatbots and workflows so every click triggers an automated journey.
            </p>
          </div>
          <Card className="border-none bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25">
            <CardContent className="space-y-4 p-8">
              <Megaphone className="h-8 w-8 text-white/80" />
              <h3 className="text-xl font-semibold leading-tight">
                Need creative? Test our Rapid Ad Lab.
              </h3>
              <p className="text-sm text-indigo-100">
                Receive 6-10 ad variations (video + static) in 10 business days, complete with copy and testing plan.
                Perfect for refreshing fatigued campaigns.
              </p>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-5 py-4 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                <Link to="/contact">Ask about the Ad Lab</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Our process
            </span>
            <h2 className="text-3xl font-semibold">
              Structured collaboration. Proactive optimization. Transparent reporting.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              We treat your ad budget like it’s our own. No set-and-forget. Constant iteration keeps performance rising.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <Card key={item.title} className="border border-indigo-500/40 bg-white/10 text-indigo-100">
                <CardContent className="space-y-3 p-6">
                  <div className="text-sm font-semibold text-indigo-200">{item.title}</div>
                  <p className="text-xs text-indigo-100/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Campaign wins
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            Results we’ve delivered for clients like you.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {proof.map((item) => (
            <Card key={item.metric} className="border-slate-200 bg-white">
              <CardContent className="space-y-2 p-8">
                <p className="text-3xl font-semibold text-indigo-600">{item.metric}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-indigo-50/80">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-indigo-100 bg-white p-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Ready to scale?
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Let’s architect your next breakthrough campaign.
              </h2>
              <p className="text-sm text-slate-600">
                Share your goals, current performance, and ad spend range. We’ll respond with fresh ideas, budget
                recommendations, and a roadmap to hit your targets.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book a performance review</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Link to="/services">Compare all services</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-slate-900 text-white shadow-2xl shadow-indigo-600/20">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                  What you’ll receive
                </p>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li>• Performance audit & opportunity analysis</li>
                  <li>• Creative angle and offer recommendations</li>
                  <li>• Channel mix & budget allocation guide</li>
                  <li>• Timeline and engagement options</li>
                </ul>
                <p className="text-xs text-indigo-200/80">
                  Optional: add-on our Rapid Ad Lab or ongoing creative retainers for continuous refresh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
