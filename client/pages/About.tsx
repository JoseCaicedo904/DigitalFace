import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CalendarDays, Globe2, HeartHandshake, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Innovation",
    description:
      "We experiment with AI, automation, and emerging platforms so our clients always stay ahead of the curve.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication, shared dashboards, and honest conversations—because trust is built on openness.",
  },
  {
    title: "Results",
    description:
      "Every deliverable ties back to your north-star metrics. We celebrate wins and quickly iterate when data tells another story.",
  },
];

const teamHighlights = [
  {
    icon: Users,
    title: "Automation Architects",
    copy:
      "Certified ManyChat, HubSpot, and Make specialists designing bots, workflows, and integrations that add up to +30% lead conversion (Cazoomi).",
  },
  {
    icon: CalendarDays,
    title: "Social Media Maestros",
    copy:
      "Media buyers and creative strategists who marry trend-aware storytelling with rigorous testing to beat the ~5:1 social ROI benchmark (SQ Magazine).",
  },
  {
    icon: Globe2,
    title: "Web & Experience Designers",
    copy:
      "UX strategists and developers crafting fast, accessible, conversion-led experiences—knowing 75% of credibility is defined by design (Rareform New Media).",
  },
];

export default function About() {
  usePageMetadata(
    "About Us – DigitalFace Marketing | Your Automation & Growth Partner",
    "Meet DigitalFace Marketing, the automation-first agency operating from Florida and Colombia. Discover our mission, team, and values powering automation, social ads, and web design."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              About DigitalFace Marketing
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Innovators in marketing automation, dedicated to your success.
            </h1>
            <p className="text-lg text-slate-600">
              DigitalFace Marketing was founded to make advanced marketing simple, accessible, and profitable for growth
              marketers and founders. We operate between Colombia and Florida, blending bilingual expertise, startup
              agility, and enterprise-level execution. Our obsession: pairing automation with creativity to unlock
              results that compound.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Book a call with our team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <Link to="/portfolio">See our impact</Link>
              </Button>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/70">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Our mission
              </p>
              <p className="text-base text-slate-700">
                Empower businesses of all sizes to achieve more with less effort by weaving automation, paid media, and
                conversion-focused design into unified systems that drive measurable growth.
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Our vision
              </p>
              <p className="text-base text-slate-700">
                A world where marketing is always on, personalized, and joyful—for brands and customers alike. A world
                where technology creates more human time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Who we are
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              A collective of marketing technologists bridging the gap between ideas and intelligent execution.
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Born in 2020, DigitalFace Marketing emerged to help founders, marketing teams, and operators ride the wave
              of automation instead of being crushed by it. We thrive on complex funnels, global audiences, and problems
              that demand creative systems thinking. We experiment relentlessly, share knowledge with clients, and treat
              your business like it’s our own.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamHighlights.map((item) => (
              <Card key={item.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-3 p-8">
                  <item.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Our values in action
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">The principles guiding every partnership.</h2>
            <p className="text-base text-slate-600">
              “Professional yet approachable” isn’t just a copy line—it’s how we work. Expect proactive updates, quick
              responses, shared Slack channels, Loom walk-throughs, and invites to the brainstorming table. We push
              forward together.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="border-slate-200 bg-white">
                  <CardContent className="space-y-2 p-6">
                    <h3 className="text-base font-semibold text-slate-900">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 text-sm text-slate-700">
              “DigitalFace didn’t just launch campaigns—they helped reimagine how our marketing team works. We gained
              systems, visibility, and a partner who cares as much as we do.” — Client feedback shared in 2025.
            </p>
          </div>
          <Card className="border-indigo-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-500 text-white">
            <CardContent className="space-y-4 p-10">
              <HeartHandshake className="h-10 w-10 text-white/80" />
              <h3 className="text-2xl font-semibold leading-tight">
                Collaboration is our superpower—remote-first, human-centered, and inclusive.
              </h3>
              <p className="text-sm text-indigo-100">
                We host weekly knowledge swaps between offices, support flexible schedules across time zones, and invest
                in ongoing education. Our team bonding fuel: music drops, AI experiments, and the eternal arepas vs.
                donuts debate.
              </p>
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-white px-6 py-5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                <Link to="/services">Explore what we do</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                Global presence
              </span>
              <h2 className="text-3xl font-semibold">
                Two offices. Infinite collaboration. Serving clients across the Americas.
              </h2>
              <p className="text-sm text-indigo-100">
                Our dual presence means we operate almost around the clock and understand both North and Latin American
                markets deeply. Need bilingual campaigns? We’ve got you. Need local insights? We bring them to the
                table.
              </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-indigo-500/40 bg-white/10 p-8 text-indigo-100">
              <div>
                <p className="text-xs uppercase tracking-wide text-indigo-300">Florida, USA</p>
                <p className="text-lg font-semibold text-white">Miami · Remote-first across the East Coast</p>
                <p className="mt-2 text-sm text-indigo-100">
                  Serving growth-stage startups, e-commerce brands, and professional services that value pace and
                  performance.
                </p>
              </div>
              <div className="border-t border-indigo-500/30 pt-6">
                <p className="text-xs uppercase tracking-wide text-indigo-300">Cali, Colombia</p>
                <p className="text-lg font-semibold text-white">Zona Rosa · LATAM innovation hub</p>
                <p className="mt-2 text-sm text-indigo-100">
                  Partnering with ambitious founders and marketing teams across Colombia, Mexico, Peru, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-10 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Join us on this journey
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Your growth fuels our growth. Let’s write the next success story together.
            </h2>
            <p className="text-base text-slate-600">
              Whether you’re exploring automation for the first time or scaling complex ecosystems, DigitalFace
              Marketing is ready to partner with you. Bring the vision; we’ll bring the strategy, the systems, and the
              relentless execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Link to="/contact">Start a conversation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                <Link to="/pricing">Browse pricing & retainers</Link>
              </Button>
            </div>
          </div>
          <Card className="border-none bg-white shadow-lg shadow-indigo-200/50">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Work with us
              </p>
              <p className="text-sm text-slate-600">
                Curious about roles, freelance collaborations, or partnerships? Email{" "}
                <a
                  className="font-semibold text-indigo-600"
                  href="mailto:talent@digitalfacemarketing.com"
                >
                  talent@digitalfacemarketing.com
                </a>{" "}
                —we’re always excited to meet fellow innovators.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

