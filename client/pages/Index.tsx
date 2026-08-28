import { LayoutDashboard, Megaphone, MessageCircle } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { homeContent, type HomeContent } from "@/i18n/content/home";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { AdCampaignDemoSection } from "@/sections/AdCampaignDemo";
import { SelectedWorkSection } from "@/sections/SelectedWork";
import { ConversationDemoSection } from "@/sections/ConversationDemo";
import { CrmPipelineDemoSection } from "@/sections/CrmPipelineDemo";
import { LeadForm } from "@/components/forms/LeadForm";
import { Hero } from "@/sections/Hero";
import { SystemJourneyIntro } from "@/sections/SystemJourneyIntro";
import { WebsitePortfolioSection } from "@/sections/WebsitePortfolio";

const heroStageIcons = [Megaphone, MessageCircle, LayoutDashboard];

function HeroSystemPreview({
  content,
}: {
  content: HomeContent["systemIntro"];
}) {
  return (
    <div className="p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
        {content.previewLabel}
      </p>
      <ol className="mt-5 space-y-3">
        {content.stages.map((stage, index) => {
          const Icon = heroStageIcons[index] ?? LayoutDashboard;

          return (
            <li
              key={stage.number}
              className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-ocean-500 text-white shadow-brand-soft">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-white/35">
                    {stage.number}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ocean-200">
                    {stage.label}
                  </p>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">
                  {stage.title}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">
        {content.closing}
      </p>
    </div>
  );
}

export default function Index() {
  const { locale, path } = useLocale();
  const t = homeContent[locale];
  const bookHref = bookingHref(path(BOOKING_ROUTE), "homepage");

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <Hero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={{ label: t.hero.primaryCta, href: bookHref }}
        media={<HeroSystemPreview content={t.systemIntro} />}
      />
      <SystemJourneyIntro content={t.systemIntro} />
      {/* Every consultation CTA on this page leads to the one scheduling
          route, so none of them depend on an embedded widget. */}
      <AdCampaignDemoSection content={t.adCampaignDemo} ctaHref={bookHref} />
      <ConversationDemoSection
        content={t.conversationDemo}
        ctaHref={bookHref}
      />
      <CrmPipelineDemoSection content={t.crmPipelineDemo} ctaHref={bookHref} />
      <SelectedWorkSection content={t.selectedWork} />
      <WebsitePortfolioSection content={t.websitePortfolio} />
      {/* The conversion point. By here the visitor has seen attract, convert,
          manage, the three interactive demonstrations and the delivered work,
          so this is one button rather than a second sales pitch. The `book`
          anchor is kept because links to /#book predate the /book route. */}
      <BookingCTA
        id="book"
        eyebrow={t.booking.eyebrow}
        title={t.booking.title}
        description={t.booking.description}
        ctaLabel={t.booking.ctaLabel}
        href={bookHref}
      />
      {/* Kept, but now clearly secondary to the calendar: the form is the route
          for people who want a scoped reply rather than a scheduled call, and it
          carries its own lead routing. */}
      <section
        id="custom-proposal"
        className="scroll-mt-24 bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LeadForm pageSource="homepage" />
        </div>
      </section>
    </div>
  );
}
