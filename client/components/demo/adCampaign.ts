/**
 * Shared contract for the DigitalFace advertising demonstration.
 *
 * Types only, no React: content files, the phone component and the marketing
 * section all depend on this leaf module, the same way the conversation
 * demonstration depends on `./conversation`.
 */

/** One of the appointment-driven markets the site is built for. */
export type AdMarket = "dental" | "aesthetic" | "medSpa";

/** A neighbouring post, so the advertisement lands inside a believable feed. */
export type FeedPost = {
  author: string;
  meta: string;
  caption: string;
};

/**
 * One fictional advertisement. No real practice, patient, price or result is
 * named anywhere in this demonstration.
 */
export type AdCreative = {
  /** Chooses the artwork palette, and the market the ad speaks to. */
  market: AdMarket;
  business: string;
  /** Post copy, written the way a clinic writes it. */
  caption: string;
  /** The line beside the button, where a feed shows what is on offer. */
  offer: string;
  ctaLabel: string;
  /** Two short lines set over the artwork, the way a static ad is laid out. */
  creativeEyebrow: string;
  creativeTitle: string;
  /** Answers offered by the form's first question. */
  options: string[];
  /** Which answer the visitor watches being chosen. */
  choice: number;
  /** The fictional person responding to the ad. */
  lead: { name: string; phone: string };
};

export type LeadFormCopy = {
  /** Sits under the business name at the top of the form. */
  subtitle: string;
  intentQuestion: string;
  contactQuestion: string;
  nameLabel: string;
  phoneLabel: string;
  submitLabel: string;
  sentTitle: string;
  sentNote: string;
  /** Heading over the three statuses the practice sees afterwards. */
  systemLabel: string;
  statuses: string[];
};

export type AdCampaignScript = {
  clockLabel: string;
  sponsoredLabel: string;
  /** Ordinary posts around the ad: the first two above it, the last below. */
  posts: FeedPost[];
  /** Each loop plays the next one, so one system covers all three markets. */
  ads: AdCreative[];
  form: LeadFormCopy;
  /** Screen-reader introduction to the written version of the demo. */
  transcriptLabel: string;
};

/** Everything one advertising section needs, minus the link target. */
export type AdCampaignDemoContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  phoneCaption: string;
  /** Hands the story over to the conversation demonstration below it. */
  bridge: string;
  /** Each stage lines up with the `stage` field on the scenes of the phone. */
  stages: { title: string; description: string }[];
  script: AdCampaignScript;
};
