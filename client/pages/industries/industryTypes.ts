import type { LucideIcon } from "lucide-react";
import type { AdCampaignDemoContent } from "@/components/demo/adCampaign";
import type { ConversationDemoContent } from "@/components/demo/conversation";
import type { CrmPipelineDemoContent } from "@/components/demo/crmPipeline";
import type { SystemJourneyContent } from "@/sections/SystemJourneyIntro";

export type IndustrySlug =
  | "dental-practices"
  | "aesthetic-medicine"
  | "med-spas";

export const INDUSTRY_SLUGS: IndustrySlug[] = [
  "dental-practices",
  "aesthetic-medicine",
  "med-spas",
];

export type IndustryStat = {
  value: string;
  label: string;
};

/** Text-only entry. Icons are attached from the shared icon map. */
export type IndustryTextItem = {
  title: string;
  description: string;
};

export type IndustryItem = IndustryTextItem & {
  icon: LucideIcon;
};

export type JourneyStep = {
  label: string;
  description: string;
};

export type PackageDetail = {
  title: string;
  description: string;
};

export type IndustryPackage = {
  /** Brand name. Identical in every locale. */
  name: string;
  nicheName: string;
  /** A money amount on the fixed plans, a word ("Custom") on the custom plan. */
  price: string;
  /** Fixed plans only. Its absence is what marks a plan as quoted, not priced. */
  setup?: string;
  /** Custom plan only: replaces the "/month" and setup lines under the price. */
  priceCaption?: string;
  description: string;
  idealFor: string;
  featured?: boolean;
  highlights: string[];
  /** Custom plan only: says the highlights are examples, not inclusions. */
  scopeNote?: string;
  details: PackageDetail[];
  /**
   * The commercial guardrail, shown on the card rather than hidden in the
   * accordion: the media-budget ceiling on the fixed plans, and what a quote is
   * built from on the custom plan.
   */
  note: { title: string; body: string };
  /** Usage-based billing small print, shown under the inclusions. */
  footnotes?: string[];
  cta: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

/** Everything an industry funnel says, before icons are merged in. */
export type IndustryLandingText = {
  navLabel: string;
  industryLabel: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    visualStages: string[];
  };
  stats: IndustryStat[];
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    items: IndustryTextItem[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    steps: JourneyStep[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: IndustryTextItem[];
  };
  /** This funnel's own wording for attract, convert and manage. */
  systemIntro: SystemJourneyContent;
  /** The scripted advertising demonstration, in this funnel's own campaign. */
  adCampaignDemo: AdCampaignDemoContent;
  /** The scripted phone demonstration, tailored to this funnel's audience. */
  conversationDemo: ConversationDemoContent;
  /** The scripted lead-organization demonstration, with this funnel's data. */
  crmPipelineDemo: CrmPipelineDemoContent;
  packagesTitle: string;
  packages: IndustryPackage[];
  faqTitle: string;
  /** Subtitle for the FAQ block. Used to lean on the booking copy. */
  faqDescription: string;
  faq: IndustryFaq[];
  /** Copy around the embedded booking calendar. Kept deliberately short. */
  booking: {
    title: string;
    description: string;
    proposalTitle: string;
    proposalDescription: string;
    proposalCta: string;
  };
};

/** Resolved data handed to the landing page component. */
export type IndustryLandingData = Omit<
  IndustryLandingText,
  "problem" | "capabilities"
> & {
  slug: IndustrySlug;
  proofLead: ClientStoryId;
  problem: Omit<IndustryLandingText["problem"], "items"> & {
    items: IndustryItem[];
  };
  capabilities: Omit<IndustryLandingText["capabilities"], "items"> & {
    items: IndustryItem[];
  };
};

export type ClientStoryId = "diego" | "jennifer";

export type ClientStory = {
  id: ClientStoryId;
  name: string;
  sector: string;
  summary: string;
  delivered: string[];
};

/** Chrome and section labels shared by the three closed funnels. */
export type IndustryUiCopy = {
  header: {
    bookAssessment: string;
    logoAlt: string;
  };
  footer: {
    privacy: string;
    terms: string;
    /** Contextual links back into the main site. Descriptive anchors only. */
    moreLabel: string;
    homeLink: string;
    systemLink: string;
    plansLink: string;
    otherIndustriesLabel: string;
  };
  heroVisual: {
    label: string;
    stage: string;
    bilingual: string;
    handover: string;
  };
  heroMedia: {
    eyebrow: string;
    title: string;
  };
  workflowOverlay: string;
  capabilitiesDisclaimer: string;
  packages: {
    eyebrow: string;
    description: string;
    mostPopular: string;
    perMonth: string;
    expandLabel: string;
    idealFor: string;
    customProposal: string;
    /** Commitment answer, stated above the cards rather than in small print. */
    noContract: string;
    footnote: string;
  };
  proposalBand: {
    eyebrow: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    description: string;
    activeLabel: string;
    slotLabel: string;
    slotTitle: string;
    slotDescription: string;
  };
  faq: {
    eyebrow: string;
  };
  booking: {
    eyebrow: string;
    /** Label on the button that leads to the scheduling page. */
    ctaLabel: string;
    customScopeLabel: string;
    privacyNote: string;
  };
  mobileCta: string;
};

export type IndustryLocaleBundle = {
  ui: IndustryUiCopy;
  clientStories: Record<ClientStoryId, ClientStory>;
  industries: Record<IndustrySlug, IndustryLandingText>;
};
