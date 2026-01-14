import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { CtaSection } from "@/sections/CTA";

const serviceGroups = [
  {
    title: "Paid media and social advertising",
    description:
      "Full-funnel campaigns built to create demand, capture leads, and prove ROI across the channels your customers use most.",
    services: [
      {
        title: "Meta (Facebook and Instagram) ads",
        description:
          "Audience research, creative production, and full-funnel campaign management from awareness to retargeting.",
        outcomes: [
          "Generate qualified leads faster",
          "Retarget warm audiences with clear offers",
          "Track spend and ROI with dashboards",
        ],
        ctaLabel: "Request an ad strategy call",
        ctaHref: "/contact",
      },
      {
        title: "TikTok ads",
        description:
          "Native short-form video, spark ads, and creator collaborations built for the TikTok feed.",
        outcomes: [
          "Reach new audiences with native creative",
          "Drive traffic for launches and offers",
          "Test messaging fast with real data",
        ],
        ctaLabel: "Ask about TikTok ads",
        ctaHref: "/contact",
      },
      {
        title: "Google and YouTube ads",
        description:
          "Intent-driven search, Performance Max, display retargeting, and YouTube storytelling.",
        outcomes: [
          "Capture high-intent demand",
          "Stay top of mind with retargeting",
          "Support launches with video ads",
        ],
        ctaLabel: "Plan a Google and YouTube campaign",
        ctaHref: "/contact",
      },
    ],
  },
  {
    title: "Automation and chatbots",
    description:
      "Always-on systems that handle conversations, nurture leads, and keep your team focused on high-value work.",
    services: [
      {
        title: "Chatbot development (AI and Rule-based)",
        description:
          "Classic or Custom AI chatbot for Messenger, Instagram DM, WhatsApp, Telegram, and web widgets.",
        outcomes: [
          "Respond instantly 24/7",
          "Capture and qualify leads",
          "Book appointments or route to your team",
        ],
        ctaLabel: "Start a chatbot project",
        ctaHref: "/contact",
      },
      {
        title: "Workflow automation and drip campaigns",
        description:
          "Email-SMS sequences, lead scoring, & task automation across GHL, Klaviyo, Mailchimp, ActiveCampaign, or custom stacks.",
        outcomes: [
          "Never miss a follow-up",
          "Nurture leads over time",
          "Keep sales informed without manual work",
        ],
        ctaLabel: "Request a workflow audit",
        ctaHref: "/contact",
      },
      {
        title: "E-commerce automations (Shopify-WooCommerce)",
        description:
          "Abandoned cart triggers, post-purchase nurture, loyalty loops, and product recommendations automations.",
        outcomes: [
          "Recover lost revenue",
          "Increase lifetime value",
          "Delight customers with timely offers, and save time on manual outreach",
        ],
        ctaLabel: "Ask about e-commerce automations",
        ctaHref: "/contact",
      },
      {
        title: "Done-for-you Custom Templates",
        description:
          "Plug-and-play templates for lead gen, appointment scheduling, e-commerce follow-up, and event sign-ups.",
        outcomes: [
          "Launch automations fast",
          "Use proven conversation flows",
          "Get setup and training support",
        ],
        ctaLabel: "Browse template options",
        ctaHref: "/automations/templates",
      },
    ],
  },
  {
    title: "Lead ops and CRM systems",
    description:
      "Connected pipelines, instant follow-up, and clean data so every lead gets handled the right way.",
    services: [
      {
        title: "Lead capture and channel sync",
        description:
          "Connect website forms, funnels, surveys, chat, missed-call text back, and social lead forms into one system.",
        outcomes: [
          "Capture every inquiry",
          "Route leads to the right team",
          "Keep data clean across channels",
        ],
        ctaLabel: "Set up lead capture",
        ctaHref: "/contact",
      },
      {
        title: "Instant follow-up and nurture",
        description:
          "Automated SMS and email replies that respond in seconds and continue until you get a response.",
        outcomes: [
          "Speed-to-lead without extra staff",
          "Consistent nurture over days or weeks",
          "Higher booking rates",
        ],
        ctaLabel: "Launch follow-up automations",
        ctaHref: "/contact",
      },
      {
        title: "Appointment booking and reminders",
        description:
          "Self-scheduling calendars with confirmation and reminder sequences.",
        outcomes: [
          "Reduce no-shows",
          "Fill calendars faster",
          "Keep your team informed daily",
        ],
        ctaLabel: "Set up appointment flows",
        ctaHref: "/contact",
      },
      {
        title: "CRM pipeline setup (GoHighLevel)",
        description:
          "GoHighLevel-based pipeline visibility with stages, assignments, and a simple inbox.",
        outcomes: [
          "See every lead stage clearly",
          "Assign ownership and tasks",
          "Stay organized without a complex CRM",
        ],
        ctaLabel: "Configure my pipeline",
        ctaHref: "/contact",
      },
      {
        title: "CRM integration and data sync",
        description:
          "Integrate Salesforce, HubSpot, Zoho, Pipedrive, and custom CRMs with your marketing stack.",
        outcomes: [
          "Single source of truth",
          "Bi-directional sync and field mapping",
          "Automations triggered by real data",
        ],
        ctaLabel: "Schedule a CRM consult",
        ctaHref: "/contact",
      },
      {
        title: "Reporting and performance dashboards",
        description:
          "Dashboards that connect ad spend, automation activity, and closed revenue.",
        outcomes: [
          "Know which channels drive growth",
          "Spot bottlenecks in the pipeline",
          "Share clear weekly insights",
        ],
        ctaLabel: "Build a reporting dashboard",
        ctaHref: "/contact",
      },
    ],
  },
  {
    title: "Websites and funnels",
    description:
      "Conversion-first digital experiences that turn traffic into leads and customers.",
    services: [
      {
        title: "Corporate and business websites",
        description:
          "Multi-page websites that showcase your services, team, and proof.",
        outcomes: [
          "Build trust fast",
          "Clarify your offer",
          "Convert visitors into inquiries",
        ],
        ctaLabel: "Start a web project",
        ctaHref: "/contact",
      },
      {
        title: "E-commerce storefronts",
        description:
          "Shopify and WooCommerce builds optimized for product discovery and conversion.",
        outcomes: [
          "Improve cart performance",
          "Increase repeat purchases",
          "Connect to automation flows",
        ],
        ctaLabel: "Plan my storefront",
        ctaHref: "/contact",
      },
      {
        title: "Campaign landing pages",
        description:
          "High-converting landing pages for ads, launches, or webinars.",
        outcomes: [
          "Improve conversion rates",
          "Align with ad messaging",
          "Capture leads cleanly",
        ],
        ctaLabel: "Build a landing page",
        ctaHref: "/contact",
      },
      {
        title: "Content hubs and blogs",
        description:
          "SEO-friendly layouts and content workflows that help you publish consistently.",
        outcomes: [
          "Grow organic traffic",
          "Educate prospects",
          "Support long-term demand",
        ],
        ctaLabel: "Design a content hub",
        ctaHref: "/contact",
      },
      {
        title: "Custom digital experiences",
        description:
          "Membership portals, resource centers, interactive microsites, and bespoke builds.",
        outcomes: [
          "Deliver premium experiences",
          "Support unique user journeys",
          "Stand out in your market",
        ],
        ctaLabel: "Explore custom builds",
        ctaHref: "/contact",
      },
    ],
  },
];

export default function PayPerService() {
  usePageMetadata(
    "Pay Per Service | DigitalFace Marketing",
    "Choose individual DigitalFace Marketing services for ads, automation, CRM, and websites without committing to a bundled system.",
  );

  return (
    <div className="bg-white">
      <Hero
        eyebrow="Pay per service"
        title="Pick the exact service you need, without the bundle."
        description="Pay per Service lets you choose a single DigitalFace capability at a time. We scope it, build it, and launch it with clear outcomes so you can move fast."
        primaryCta={{ label: "Book a service consult", href: "/contact" }}
        secondaryCta={{ label: "See the Sales System", href: "/features" }}
        showVideo={false}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Service catalog
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Build a custom stack, one service at a time.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Choose one service or stack a few. Each engagement is scoped as a
              focused project with clear deliverables and outcomes.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {serviceGroups.map((group) => (
              <div key={group.title} className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="text-sm text-ink-500 sm:text-base">
                    {group.description}
                  </p>
                </div>
                <div className="grid auto-rows-fr place-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.services.map((service) => (
                    <div
                      key={service.title}
                      className="flex h-full flex-col self-stretch rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-brand-card"
                    >
                      <div className="flex flex-1 flex-col space-y-5">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-slate-900">
                            {service.title}
                          </h4>
                          <p className="text-sm text-ink-500">
                            {service.description}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-ink-100 bg-secondary/40 p-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-600">
                            Helps with
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-ink-500">
                            {service.outcomes.map((outcome) => (
                              <li
                                key={outcome}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {service.ctaLabel ? (
                        <div className="mt-auto pt-6">
                          <Link
                            to={service.ctaHref}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                          >
                            {service.ctaLabel}
                            <span aria-hidden="true">-&gt;</span>
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Ready to start?"
        title="Tell us which service you need and we will map the next step."
        description="Share your goals and current tools. We will respond with scope options, timelines, and expected outcomes."
        primaryCta={{ label: "Book a service consult", href: "/contact" }}
        secondaryCta={{ label: "See the Sales System", href: "/features" }}
      />
    </div>
  );
}
