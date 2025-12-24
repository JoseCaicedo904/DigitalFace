import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CtaSection } from "@/sections/CTA";
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
    description:
      "Core sales system installed and launched for your business.",
    idealFor: "Solo owners and small teams who need follow-up on autopilot.",
    investment: "Monthly subscription",
    includes: [
      "Multi-channel lead capture",
      "Instant SMS/email response",
      "Appointment booking with reminders",
      "Visual pipeline setup",
    ],
  },
  {
    name: "Pro",
    description:
      "Advanced automations and nurturing that increase show rates and conversions.",
    idealFor: "Growing businesses with steady lead flow.",
    investment: "Monthly subscription",
    includes: [
      "Everything in Basic",
      "Long-term nurture and reactivation",
      "No-show recovery and missed-call text back",
      "Performance tuning and reporting",
    ],
  },
  {
    name: "Premium",
    description:
      "Full managed growth plus traffic for businesses that want hands-off scale.",
    idealFor: "Teams that want the system and growth management handled for them.",
    investment: "Custom monthly subscription",
    includes: [
      "Everything in Pro",
      "Managed traffic and funnel optimization",
      "Monthly strategy and growth reviews",
      "Priority support and ongoing improvements",
    ],
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
      "Yes. Premium includes managed growth and traffic into the system.",
  },
];

export default function Pricing() {
  usePageMetadata(
    "Plans | DigitalFace Marketing",
    "Explore Basic, Pro, and Premium plans for the DigitalFace Marketing Sales System."
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
            Productized, automated, and built for local service businesses that need more bookings without more staff.
          </p>
        </div>
        <div className="container mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-6 text-left shadow-brand-card"
              >
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 text-sm text-ink-500">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-3xl border border-ink-100 bg-white/95 p-8 shadow-brand-card"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-slate-900">{pkg.name}</h2>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                    {pkg.investment}
                  </p>
                  <p className="text-sm text-ink-500">{pkg.description}</p>
                  <p className="text-xs uppercase tracking-wide text-ink-400">Ideal for</p>
                  <p className="text-sm text-ink-500">{pkg.idealFor}</p>
                </div>
                <div className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm text-ink-500">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
              We install, train, and support your team so the system keeps working without extra stress.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {planIncludes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
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
                  <p className="text-sm font-semibold text-slate-900">{item.question}</p>
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
        description="Book a demo and we will recommend the best plan for your goals."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "View the system", href: "/features" }}
      />
    </div>
  );
}
