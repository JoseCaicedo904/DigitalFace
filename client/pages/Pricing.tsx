import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Productized",
    copy: "A proven sales system with clear deliverables and fast launch.",
  },
  {
    title: "Automation-first",
    copy: "Instant follow-up and booking so speed-to-lead never slips.",
  },
  {
    title: "Owner-friendly",
    copy: "Built for small teams with minimal technical lift.",
  },
  {
    title: "Visible",
    copy: "Track every lead, appointment, and outcome in one pipeline.",
  },
];

const packages = [
  {
    name: "Basic",
    featured: false,
    price: "$790",
    setup: "$597 one-time setup",
    description:
      "Meta ads that bring the leads in, plus the system that answers them instantly.",
    idealFor: "Solo owners and small teams who need follow-up on autopilot.",
    adPlatforms: ["Meta ads"],
    adSpend: "From $500/mo in ad spend, paid by you directly to Meta.",
    includes: [
      "Meta (Facebook + Instagram) ads fully managed",
      "4 ad creatives adapted per month",
      "Multi-channel lead capture",
      "Instant SMS/email response",
      "Appointment booking with reminders",
      "Visual pipeline setup",
      "Bilingual English / Spanish setup",
    ],
    ctaLabel: "Start with Basic",
  },
  {
    name: "Pro",
    featured: true,
    price: "$1,200",
    setup: "$1,097 one-time setup",
    description:
      "Adds TikTok, plus a bilingual AI assistant so no enquiry goes unanswered.",
    idealFor: "Growing businesses with steady lead flow.",
    adPlatforms: ["Meta ads", "TikTok ads"],
    adSpend: "From $1,000/mo in ad spend, paid by you directly to the platforms.",
    includes: [
      "Everything in Basic",
      "TikTok ads added and managed",
      "8 ad creatives adapted per month",
      "AI assistant answering 24/7 in English and Spanish",
      "2,000 AI conversations included each month",
      "Long-term nurture and reactivation",
      "No-show recovery and missed-call text back",
    ],
    ctaLabel: "Start with Pro",
  },
  {
    name: "Premium",
    featured: false,
    price: "$1,800",
    setup: "$1,597 one-time setup",
    description:
      "Adds Google, so you also capture the people already searching for you.",
    idealFor:
      "Teams that want the system and growth management handled for them.",
    adPlatforms: ["Meta ads", "TikTok ads", "Google ads"],
    adSpend: "From $2,000/mo in ad spend, paid by you directly to the platforms.",
    includes: [
      "Everything in Pro",
      "Google Search and retargeting ads managed",
      "12 ad creatives adapted per month",
      "4,000 AI conversations included each month",
      "Landing pages and funnel optimization",
      "Monthly strategy and growth reviews",
      "Priority support and ongoing improvements",
    ],
    ctaLabel: "Start with Premium",
  },
];

const planNotes = [
  {
    title: "Ad spend is separate, and it stays yours",
    body: "The minimums above are paid by you directly to Meta, TikTok and Google, on your own card inside your own Business Manager. We never hold or mark up a dollar of your ad budget, and you keep ownership of the ad account, pixel and audiences.",
  },
  {
    title: "AI conversations",
    body: "Pro includes 2,000 and Premium includes 4,000 AI-handled conversations per month. Additional conversations are $0.06 each. We alert you at 80% of your allowance, so you are never billed by surprise.",
  },
  {
    title: "Hosting and infrastructure",
    body: "Where a site or landing page is part of your plan, managed hosting is included with 100 GB bandwidth and 1,000 build minutes per month, plus SSL and backups. Anything above that is quoted to you before it changes.",
  },
  {
    title: "Creative and terms",
    body: "Extra creatives beyond your monthly allowance are $45 each; you supply raw photos and video, we handle adaptation and copy in both languages. Basic is month to month. Pro and Premium start on a 3-month term because paid campaigns need 4-6 weeks to exit the learning phase.",
  },
];

const planIncludes = [
  {
    title: "Done-for-you setup",
    description:
      "We install, test, and launch the system so you are live fast.",
    investment: "Included",
  },
  {
    title: "Branded client portal",
    description:
      "Your own login with a simple inbox, calendar, and pipeline view.",
    investment: "Included",
  },
  {
    title: "Team onboarding",
    description:
      "Short training so your team knows exactly how to use the system.",
    investment: "Included",
  },
  {
    title: "Ongoing support",
    description:
      "We handle updates, fixes, and improvements as your business grows.",
    investment: "Included",
  },
];

const faq = [
  {
    question: "How fast can we launch?",
    answer:
      "Most businesses go live within 5-7 business days once we have your info.",
  },
  {
    question: "Do I need new software?",
    answer:
      "No. We provide the system and your team gets a simple login and workflow.",
  },
  {
    question: "Is this just software?",
    answer:
      "No. It is a done-for-you system we install, customize, and maintain.",
  },
  {
    question: "Can you drive traffic too?",
    answer:
      "Yes. Every plan includes managed ads: Meta on Basic, Meta and TikTok on Pro, and Google added on Premium.",
  },
];

export default function Pricing() {
  usePageMetadata(
    "Plans | DigitalFace Marketing",
    "Explore Basic, Pro, and Premium plans for the DigitalFace Marketing Sales System.",
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Pricing and plans
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Choose the sales system that fits your business
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Productized, automated, and built for local service businesses that
            need more bookings without more staff.
          </p>
        </div>
        <div className="container mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-6 text-left shadow-brand-card"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Founding pricing
            </span>
            <p className="mt-4 text-base text-ink-500">
              Available to our first 10 clients and locked for 12 months. Every
              plan includes managed advertising, so you get traffic and the
              system that converts it.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl bg-white/95 p-8 shadow-brand-card",
                  pkg.featured
                    ? "border-2 border-brand-500 shadow-brand-soft"
                    : "border border-ink-100",
                )}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-brand-soft">
                    Most popular
                  </span>
                ) : null}

                <h2 className="text-2xl font-semibold text-slate-900">
                  {pkg.name}
                </h2>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-slate-900">
                    {pkg.price}
                  </span>
                  <span className="text-sm font-medium text-ink-500">
                    /month
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-ink-400">+ {pkg.setup}</p>

                <p className="mt-4 text-sm text-ink-500">{pkg.description}</p>

                <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Advertising included
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {pkg.adPlatforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-100"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink-500">
                    {pkg.adSpend}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink-500"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-6 border-t border-ink-100 pt-5">
                  <p className="text-xs uppercase tracking-wide text-ink-400">
                    Ideal for
                  </p>
                  <p className="mt-1.5 text-sm text-ink-500">{pkg.idealFor}</p>
                </div>

                <div className="mt-8 pt-1">
                  <Button
                    asChild
                    className={cn(
                      "w-full rounded-xl px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                      pkg.featured
                        ? "bg-brand-600 text-white shadow-brand-soft hover:bg-brand-700"
                        : "border border-brand-200 bg-white text-brand-600 hover:bg-brand-50",
                    )}
                  >
                    <Link to="/contact">{pkg.ctaLabel}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-ink-100 bg-ink-50/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              What the price covers, and what it does not
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {planNotes.map((note) => (
                <div key={note.title}>
                  <p className="text-sm font-semibold text-slate-900">
                    {note.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-ink-200 pt-5 text-xs leading-relaxed text-ink-500">
              Every plan is backed in writing: 30 days money-back on the setup
              fee, live within 7 business days or the setup is free, no
              long-term lock-in, and you own every asset, account and automation
              we build for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Every plan includes
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Everything you need to run the system
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              We install, train, and support your team so the system keeps
              working without extra stress.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {planIncludes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{item.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {item.investment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              FAQ snapshot
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Answers before you book a demo
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm text-ink-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="What happens next"
        title="See the system built for your business"
        description="Start a conversation and we’ll recommend the best setup for your goals."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "View the system", href: "/features" }}
      />
    </div>
  );
}
