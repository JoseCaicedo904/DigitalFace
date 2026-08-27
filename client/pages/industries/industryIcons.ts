import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Bot,
  CalendarCheck,
  Camera,
  ChartNoAxesCombined,
  CircleDollarSign,
  ClipboardCheck,
  Megaphone,
  MessageCircleMore,
  MessagesSquare,
  RefreshCcw,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";
import type { IndustryAdDemoSlot, IndustrySlug } from "./industryTypes";

/**
 * Icons live outside the translated content so both locales stay visually
 * identical and a translation can never drift away from its icon.
 * Order matches the item order in each locale's content file.
 */
export const industryIcons: Record<
  IndustrySlug,
  { problem: LucideIcon[]; capabilities: LucideIcon[] }
> = {
  "dental-practices": {
    problem: [
      MessagesSquare,
      Camera,
      RefreshCcw,
      CircleDollarSign,
      CalendarCheck,
      ChartNoAxesCombined,
    ],
    capabilities: [
      Megaphone,
      Bot,
      Camera,
      CalendarCheck,
      UserCheck,
      RefreshCcw,
    ],
  },
  "aesthetic-medicine": {
    problem: [
      MessageCircleMore,
      ClipboardCheck,
      Route,
      ShieldCheck,
      CalendarCheck,
      ChartNoAxesCombined,
    ],
    capabilities: [
      Megaphone,
      Bot,
      ClipboardCheck,
      ShieldCheck,
      CalendarCheck,
      MessagesSquare,
    ],
  },
  "med-spas": {
    problem: [
      MessagesSquare,
      Sparkles,
      BadgeDollarSign,
      CalendarCheck,
      RefreshCcw,
      Star,
    ],
    capabilities: [Megaphone, Bot, Route, CalendarCheck, RefreshCcw, Star],
  },
};

/** Calendly and form embed keys. Technical identifiers, never translated. */
export const industryEmbedSlots: Record<
  IndustrySlug,
  { calendlySlot: string; formSlot: string }
> = {
  "dental-practices": {
    calendlySlot: "CALENDLY_EMBED_DENTAL",
    formSlot: "CUSTOM_PROPOSAL_FORM_DENTAL",
  },
  "aesthetic-medicine": {
    calendlySlot: "CALENDLY_EMBED_AESTHETIC",
    formSlot: "CUSTOM_PROPOSAL_FORM_AESTHETIC",
  },
  "med-spas": {
    calendlySlot: "CALENDLY_EMBED_MED_SPA",
    formSlot: "CUSTOM_PROPOSAL_FORM_MED_SPA",
  },
};

export const industryProofLead: Record<IndustrySlug, "diego" | "jennifer"> = {
  "dental-practices": "jennifer",
  "aesthetic-medicine": "diego",
  "med-spas": "diego",
};

/**
 * Placement of the advertising demonstration inside each funnel.
 *
 * Dental argues that the practice needs a better path rather than more leads,
 * so its campaign story runs after the journey and hands straight into the
 * conversation. The other two answer a gap named in their problem section, and
 * the med spa page keeps its ad away from the promotion story its conversation
 * demo already tells.
 */
export const industryAdDemoSlot: Record<IndustrySlug, IndustryAdDemoSlot> = {
  "dental-practices": "before-conversation",
  "aesthetic-medicine": "after-problem",
  "med-spas": "after-problem",
};
