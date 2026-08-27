/**
 * Shared contract for the DigitalFace conversation demonstration.
 *
 * Types only, no React: content files, the phone component and the marketing
 * section all depend on this leaf module, so nothing has to import a component
 * just to describe a script.
 */

type StepBase = {
  /** Which stage of the surrounding marketing story this message belongs to. */
  stage: number;
  /** Silence before the message starts. */
  pauseMs?: number;
};

type Timed = { time: string };

export type ConversationStep =
  /** From the person contacting the business. `attachment` shows a file chip. */
  | (StepBase & Timed & { kind: "patient"; text: string; attachment?: string })
  /**
   * From the business. `author` labels the bubble when a real teammate has
   * taken the conversation over.
   */
  | (StepBase &
      Timed & {
        kind: "assistant";
        text: string;
        author?: string;
        typingMs?: number;
      })
  | (StepBase &
      Timed & {
        kind: "slots";
        text: string;
        options: string[];
        author?: string;
        typingMs?: number;
      })
  /** The person picking one of the offered options. */
  | (StepBase & Timed & { kind: "choice"; text: string; option: number })
  | (StepBase &
      Timed & {
        kind: "confirmation";
        title: string;
        when: string;
        service: string;
        note: string;
        typingMs?: number;
      })
  /** A centred system line, the way a messenger announces a handover. */
  | (StepBase & { kind: "note"; text: string });

export type ConversationScript = {
  /** Name shown in the thread header, from the contacting person's side. */
  contact: string;
  /** Optional channel chip, for stories that hinge on where the message came from. */
  channelLabel?: string;
  status: string;
  typingStatus: string;
  clockLabel: string;
  dayLabel: string;
  composerPlaceholder: string;
  /** Screen-reader introduction to the transcript. */
  transcriptLabel: string;
  patientLabel: string;
  clinicLabel: string;
  steps: ConversationStep[];
};

/** Everything one demonstration section needs, minus the link target. */
export type ConversationDemoContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  phoneCaption: string;
  /** Each stage lines up with the `stage` field on the script steps. */
  stages: { title: string; description: string }[];
  script: ConversationScript;
};
