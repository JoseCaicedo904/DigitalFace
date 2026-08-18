import type { LucideIcon } from "lucide-react";

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
  price: string;
  setup: string;
  description: string;
  idealFor: string;
  featured?: boolean;
  highlights: string[];
  details: PackageDetail[];
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
  packagesTitle: string;
  packages: IndustryPackage[];
  faqTitle: string;
  faq: IndustryFaq[];
  booking: {
    title: string;
    description: string;
    assessmentCta: string;
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
  /** Technical integration keys. Never translated. */
  booking: IndustryLandingText["booking"] & {
    calendlySlot: string;
    formSlot: string;
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
    assessmentLabel: string;
    calendlyTitle: string;
    calendlyHint: string;
    customScopeLabel: string;
    formTitle: string;
    formHint: string;
    privacyNote: string;
    calendlyAria: string;
    formAria: string;
  };
  mobileCta: string;
};

export type IndustryLocaleBundle = {
  ui: IndustryUiCopy;
  clientStories: Record<ClientStoryId, ClientStory>;
  industries: Record<IndustrySlug, IndustryLandingText>;
};
