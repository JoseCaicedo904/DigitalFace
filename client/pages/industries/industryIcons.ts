import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Bot,
  CalendarCheck,
  Camera,
  ChartNoAxesCombined,
  ClipboardCheck,
  Megaphone,
  MessageCircleMore,
  MessagesSquare,
  RefreshCcw,
  ShieldCheck,
  Star,
} from "lucide-react";
import type { IndustrySlug } from "./industryTypes";

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
    problem: [MessagesSquare, Camera, CalendarCheck, ChartNoAxesCombined],
    capabilities: [Megaphone, Bot, CalendarCheck, RefreshCcw],
  },
  "aesthetic-medicine": {
    problem: [
      MessageCircleMore,
      ClipboardCheck,
      ShieldCheck,
      ChartNoAxesCombined,
    ],
    capabilities: [Megaphone, Bot, ShieldCheck, CalendarCheck],
  },
  "med-spas": {
    problem: [MessagesSquare, BadgeDollarSign, CalendarCheck, RefreshCcw],
    capabilities: [Megaphone, Bot, CalendarCheck, Star],
  },
};

export const industryProofLead: Record<IndustrySlug, "diego" | "jennifer"> = {
  "dental-practices": "jennifer",
  "aesthetic-medicine": "diego",
  "med-spas": "diego",
};
