import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowUpRight, Loader2, MonitorSmartphone, PenTool, ShieldCheck, Sparkle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Corporate & business websites",
    description:
      "Multi-page websites that showcase your services, team, and proof. Perfect for professional services, agencies, SaaS, and local businesses.",
  },
  {
    title: "E-commerce storefronts",
    description:
      "Shopify and WooCommerce builds optimized for product discovery, cart conversion, and lifetime value with automation-ready integrations.",
  },
  {
    title: "Campaign landing pages",
    description:
      "High-converting landing pages for ads, launches, or webinars. We obsess over copy, layout, and CTA placement to maximize conversions.",
  },
  {
    title: "Content hubs & blogs",
    description:
      "SEO-friendly layouts, intuitive taxonomy, and creation workflows that empower your team to publish quickly and rank consistently.",
  },
  {
    title: "Custom digital experiences",
    description:
      "Membership portals, resource centers, interactive microsites, and bespoke systems tailored around your audience strategy.",
  },
];

const features = [
  {
    icon: MonitorSmartphone,
    title: "Responsive by design",
    description:
      "Mobile-first layouts ensure flawless experiences on every device. With more than 50% of traffic mobile, we make sure visitors feel at home.",
  },
  {
    icon: Loader2,
    title: "Fast & SEO-friendly",
    description:
      "Lightweight code, image optimization, schema markup, and Core Web Vitals best practices keep load times low and rankings high.",
  },
  {
    icon: PenTool,
    title: "Conversion-first UX",
    description:
      "Clear messaging, directional design, and social proof build trust. Remember—75% of credibility is judged on your site design (Rareform).",
  },
  {
    icon: ShieldCheck,
    title: "Secure & scalable",
    description:
      "SSL, backups, uptime monitoring, and handover documentation keep your investment protected and easy to maintain.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & strategy",
    description:
      "We learn your goals, audiences, and current analytics. Expect workshops on messaging, sitemap architecture, and success metrics.",
  },
  {
    step: "02",
    title: "UX & copy blueprint",
    description:
      "Wireframes, content outlines, and brand direction ensure we’re aligned before pixels or code. Collaboration happens in Figma/Notion.",
  },
  {
    step: "03",
    title: "Design & development",
    description:
      "Our designers craft polished UI systems while developers bring them to life in WordPress, Webflow, or Shopify—fully responsive.",
  },
  {
    step: "04",
    title: "Launch readiness",
    description:
      "We handle QA, device/browser testing, SEO fundamentals, analytics setup, and 301 redirects to safeguard rankings.",
  },
  {
    step: "05",
    title: "Training & iteration",
    description:
      "You’ll receive Loom walkthroughs, documentation, and the option for ongoing CRO experiments post-launch.",
  },
];

const results = [
  {
    title: "SaaS free-trial lift",
    description:
      "Healthcare SaaS saw bounce rate drop 20% and trial conversions jump from 2% → 5% after our redesign and messaging refresh.",
  },
  {
    title: "Retail revenue boost",
    description:
      "Boutique fashion brand’s Shopify conversion rate increased from 1.8% → 3.0% thanks to optimized product pages and checkout flows.",
  },
  {
    title: "Service inquiry surge",
    description:
      "Professional services firm doubled qualified form submissions within 60 days of launch by aligning content, proof, and CTA pathways.",
  },
];

export default function Websites() {
  usePageMetadata(
    "Website Design & Development – Conversion-Focused Websites | DigitalFace",
    "Partner with DigitalFace Marketing for conversion-focused website design. Modern, responsive, SEO-friendly sites and landing pages built to drive growth."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Website design & development
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Your website should be your hardest-working salesperson.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing builds conversion-first websites and landing pages that look incredible, load fast,
              and move visitors to action. Because first impressions happen in 0.05 seconds—and we intend to win them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Start a web project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/portfolio">View our web launches</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Why design matters
              </p>
              <p className="text-sm text-slate-700">
                • 75% of consumers judge credibility by website design (Rareform)
              </p>
              <p className="text-sm text-slate-700">
                • A 1-second speed improvement can boost conversions significantly
              </p>
              <p className="text-xs text-slate-400">
                We keep performance, accessibility, and brand storytelling top of mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Websites we build
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              From brand hubs to high-velocity landing pages, we’ve got you.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Choose a single project or partner with us on ongoing experiments. We deliver strategy, copy, design, and
              development under one roof.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
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
              Built for growth
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Strategic copy, delightful design, and engineering that scales.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.title} className="border-slate-200 bg-white">
                  <CardContent className="flex items-start gap-3 p-6">
                    <feature.icon className="mt-1 h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
                      <p className="text-xs text-slate-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm text-slate-700">
              Bonus: We integrate chatbots, analytics, and CRM forms so automations kick in the moment someone converts.
            </p>
          </div>
          <Card className="border-none bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25">
            <CardContent className="space-y-4 p-8">
              <Sparkle className="h-8 w-8 text-white/80" />
              <h3 className="text-xl font-semibold leading-tight">
                Need a design system refresh?
              </h3>
              <p className="text-sm text-indigo-100">
                We create scalable component libraries in Figma and code, ensuring future pages stay on-brand and ship
                fast.
              </p>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-5 py-4 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                <Link to="/contact">Ask about design systems</Link>
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
              Structured collaboration from kickoff to launch day—and beyond.
            </h2>
            <p className="max-w-3xl text-sm text-indigo-100">
              We make redesigns stress-free with transparent comms, shared timelines, and clear approvals at each
              milestone.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <Card key={step.title} className="border border-indigo-500/40 bg-white/10 text-indigo-100">
                <CardContent className="space-y-3 p-6">
                  <div className="text-sm font-semibold text-indigo-200">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-xs text-indigo-100/80">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Wins we’re proud of
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            Websites engineered to convert—and the metrics to prove it.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((result) => (
            <Card key={result.title} className="border-slate-200 bg-white">
              <CardContent className="space-y-2 p-8">
                <p className="text-lg font-semibold text-indigo-600">{result.title}</p>
                <p className="text-sm text-slate-600">{result.description}</p>
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
                Ready for launch?
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Let’s design a website that earns trust and drives conversions.
              </h2>
              <p className="text-sm text-slate-600">
                Tell us about your current site, your goals, and your must-haves. We’ll respond with insights, timeline
                expectations, and a proposal tailored to your growth stage.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  <Link to="/contact">Book a discovery call</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <Link to="/services">Compare our services</Link>
                </Button>
              </div>
            </div>
            <Card className="border-none bg-slate-900 text-white shadow-2xl shadow-indigo-600/20">
              <CardContent className="space-y-3 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                  Deliverables snapshot
                </p>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li>• Strategy workshop & sitemap architecture</li>
                  <li>• Copywriting, design, and development</li>
                  <li>• SEO setup, analytics, and tag plan</li>
                  <li>• Handover docs + 30-day post-launch support</li>
                </ul>
                <p className="text-xs text-indigo-200/80">
                  Optional: CRO retainers, marketing automation integrations, website care plans.
                </p>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-sm font-semibold text-indigo-200 hover:text-white"
                >
                  Explore web case studies
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
