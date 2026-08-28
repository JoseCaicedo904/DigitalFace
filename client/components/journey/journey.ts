/**
 * Shared contract for the patient-journey story on the features page.
 *
 * Types only, no React: the localized content, the four stage visuals and the
 * section that lays them out all depend on this leaf module, matching how the
 * homepage demonstrations in `components/demo` are organized.
 *
 * Every string a visitor can read lives in the content file, so the visuals
 * translate with the rest of the page instead of carrying baked-in text.
 */

/** Where an inquiry came from. Drives the icon, never a third-party logo. */
export type InboxSource = "social" | "form" | "chat" | "search";

/** Act 1 — separate channels arriving as one list. */
export type InboxScript = {
  kind: "inbox";
  title: string;
  /** Sits beside the live counter, e.g. "new inquiries". */
  countLabel: string;
  rows: {
    source: InboxSource;
    channel: string;
    name: string;
    time: string;
  }[];
  transcriptLabel: string;
};

/** Act 2 — the answer that arrives before the visitor has moved on. */
export type ReplyScript = {
  kind: "reply";
  contact: string;
  clockLabel: string;
  incoming: { text: string; time: string };
  outgoing: { text: string; time: string };
  /** The claim the whole act rests on, shown as a stamp on the reply. */
  timerLabel: string;
  timerValue: string;
  patientLabel: string;
  clinicLabel: string;
  transcriptLabel: string;
};

/** Act 3 — the appointment the practice never had to chase. */
export type BookingScript = {
  kind: "booking";
  title: string;
  dayLabel: string;
  slots: string[];
  /** Index into `slots` that fills while the visitor watches. */
  bookedIndex: number;
  bookedName: string;
  bookedLabel: string;
  /** What the system sends once the slot is taken. */
  followUps: string[];
  transcriptLabel: string;
};

/** Colour role for a pipeline column, resolved to brand tokens by the visual. */
export type PipelineTone = "new" | "booked" | "missed" | "closed";

/** Act 4 — one board where the whole practice can see the same thing. */
export type PipelineScript = {
  kind: "pipeline";
  title: string;
  columns: { label: string; tone: PipelineTone; count: string }[];
  card: { name: string; detail: string };
  /** Indexes into `columns`; the card animates between the two. */
  fromColumn: number;
  toColumn: number;
  recoveryLabel: string;
  transcriptLabel: string;
};

export type JourneyScript =
  | InboxScript
  | ReplyScript
  | BookingScript
  | PipelineScript;

export type JourneyAct = {
  /** Short ordinal shown on the timeline rail, e.g. "01". */
  badge: string;
  /** Clock reading that anchors the act to a moment in one evening. */
  time: string;
  title: string;
  /** What the patient experiences, in her words. */
  patient: string;
  /** What the system did to make that happen, in yours. */
  system: string;
  /** Names of the modules this act covers, shown as chips. */
  modules: string[];
  script: JourneyScript;
};

/** Everything the journey section needs, minus its link target. */
export type JourneyContent = {
  eyebrow: string;
  title: string;
  description: string;
  patientLabel: string;
  systemLabel: string;
  modulesLabel: string;
  acts: JourneyAct[];
};
