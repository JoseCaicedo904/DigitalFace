import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { CtaSection } from "@/sections/CTA";
import { CalendarDays, Globe2, HeartHandshake, Users } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We experiment with AI, automation, and emerging platforms so your brand is always ahead of the trend line.",
  },
  {
    title: "Transparency",
    description:
      "Shared dashboards, open comms, and clear pricing keep every sprint visible, measurable, and calm.",
  },
  {
    title: "Results",
    description:
      "Every launch ladders up to the metrics you care about. If the data shifts, the plan pivots with it.",
  },
];

const specialties = [
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    title: "Automation architects",
    description:
      "Certified ManyChat, HubSpot, and Make specialists building bots and workflows that push lead conversion past the plus 30 percent benchmark noted on the original site.",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-brand-500" />,
    title: "Paid media maestros",
    description:
      "Media buyers and creative strategists blending trend-aware storytelling with relentless testing to beat the five to one social ROI metric.",
  },
  {
    icon: <Globe2 className="h-6 w-6 text-brand-500" />,
    title: "UX and web makers",
    description:
      "Conversion-first designers and developers who respect that seventy five percent of credibility comes from your site experience.",
  },
];

export default function About() {
  usePageMetadata(
    "About DigitalFace Marketing | Automation-first growth studio",
    "Meet the bilingual team behind DigitalFace Marketing. We design automation, ads, and web experiences that deliver measurable growth for Colombia and Florida brands."
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="About DigitalFace"
        title="Humans building automation-first growth for ambitious teams."
        description="Founded between Cali and Miami, DigitalFace Marketing blends bilingual strategy, creative, and engineering to deliver automation, ads, and web experiences that scale sin friccion."
        primaryCta={{ label: "Book a call with our team", href: "/contact" }}
        secondaryCta={{ label: "See pricing options", href: "/pricing" }}
        stats={[
          { label: "Two hubs", value: "Colombia + Florida" },
          { label: "Average partnership", value: "18 months" },
          { label: "Automation ROI", value: "5x+" },
        ]}
        media={
          <div className="flex h-full flex-col justify-between gap-6 p-8">
            <div className="rounded-2xl border border-ink-100 bg-white/85 p-6 text-sm text-ink-500 shadow-brand-card">
              <p className="font-semibold text-ink-600">Our mission</p>
              <p className="mt-2">
                Empower teams of any size to do more with less effort by weaving automation, paid media, and conversion design into one measurable system.
              </p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white/70 p-6 text-sm text-ink-500 shadow-brand-card">
              <p className="font-semibold text-ink-600">Our vision</p>
              <p className="mt-2">
                Marketing that runs around the clock, feels personal, and frees humans to focus on strategy, storytelling, and community.
              </p>
            </div>
          </div>
        }
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              How we operate
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Principles that guide every partnership
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Professional yet approachable, proactive yet flexible. Expect weekly updates, Loom walkthroughs, and shared Slack channels so your team stays in lockstep with ours.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                Leadership stack
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Specialists who blend automation, media, and design into one growth engine
              </h2>
              <p className="text-lg text-ink-500">
                Strategy, creative, and engineering collaborate daily so every launch is cohesive. The same minds who ideate are the ones who build and optimize, giving you faster timelines and tighter feedback loops.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {specialties.map((specialty) => (
                  <div
                    key={specialty.title}
                    className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white/90 p-6 shadow-brand-card"
                  >
                    <div className="rounded-xl bg-secondary px-3 py-2">
                      {specialty.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {specialty.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-500">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-ink-100 bg-white/90 p-8 text-sm text-ink-500 shadow-brand-card">
              <div className="flex items-center gap-3 text-ink-600">
                <HeartHandshake className="h-6 w-6 text-brand-500" />
                <p className="font-semibold">Collaboration is our oxygen</p>
              </div>
              <p>
                Weekly knowledge swaps between offices, flexible schedules across time zones, and ongoing training keep ideas flowing. Our favorite debates: arepas or donuts, and which AI tool wins this week.
              </p>
              <p>
                Partnerships span 18 months on average because we stay embedded, iterate quickly, and celebrate every win with your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                Two offices, one rhythm
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Miami and Cali give us range, speed, and cultural fluency
              </h2>
              <p className="text-lg text-white/70">
                Need bilingual campaigns? We have you. Need local insight for LATAM or the US? Already on it. Remote collaboration tools keep us connected, while in-person sessions spark the creative leaps.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Florida, USA
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Miami - Remote across the East Coast
                </p>
                <p className="mt-3 text-sm text-white/70">
                  Serving growth stage startups, ecommerce, and professional services that value pace and performance.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Cali, Colombia
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Zona Rosa innovation hub
                </p>
                <p className="mt-3 text-sm text-white/70">
                  Partnering with ambitious founders and marketing teams across Colombia, Mexico, Peru, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Join forces"
        title="Let us craft your next growth story"
        description="Drop us a line at hello@digitalfacemarketing.com or book a strategy session to map quick wins, automation ideas, and long term momentum."
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore pricing", href: "/pricing" }}
      />
    </div>
  );
}
