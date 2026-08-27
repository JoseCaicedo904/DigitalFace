/**
 * Shared contract for the DigitalFace lead-organization demonstration.
 *
 * Types only, no React: localized content, the animated workspace and the
 * marketing section all depend on this leaf module, matching the other
 * homepage demonstrations.
 */

export type CrmLeadDetail = {
  label: string;
  value: string;
};

export type CrmPipelineStage = {
  /** The short label at the top of the pipeline column. */
  label: string;
  /** The changing badge shown on the lead card. */
  cardStatus: string;
  /** One plain-language event added to the activity history. */
  activity: string;
  /** The action the team should take from this point. */
  nextStep: string;
  /** Cumulative information known about the lead at this stage. */
  details: CrmLeadDetail[];
};

export type CrmPipelineScript = {
  workspaceLabel: string;
  liveLabel: string;
  boardLabel: string;
  detailsLabel: string;
  activityLabel: string;
  nextStepLabel: string;
  movedLabel: string;
  stageLabel: string;
  ofLabel: string;
  lead: {
    name: string;
    initials: string;
    summary: string;
    channel: string;
  };
  stages: CrmPipelineStage[];
  /** Screen-reader introduction to the complete, nonanimated alternative. */
  transcriptLabel: string;
};

/** Everything one lead-organization section needs, minus its link target. */
export type CrmPipelineDemoContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  boardCaption: string;
  bridge: string;
  /** Marketing explanation synchronized with the animated pipeline stages. */
  stages: { title: string; description: string }[];
  script: CrmPipelineScript;
};
