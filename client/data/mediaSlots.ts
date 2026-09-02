import type { MediaSlotSpec } from "@/components/media/MediaSlot";

/** A layout photograph: its path plus the CSS object-position its crop needs. */
export type IndustryPhoto = {
  src: string;
  position: string;
};

export const corporateMedia = {
  hero: {
    id: "C01_CORPORATE_HERO",
    kind: "video",
    src: "/videos/digitalface-hero.mp4",
    poster: "/images/hero-poster.webp",
    label: "Corporate hero film",
    description:
      "A cinematic overview of patient acquisition, fast response, and appointment conversion.",
    alt: "DigitalFace patient-growth system in action",
    objectPosition: "center",
  },
  industryCards: {
    dental: {
      id: "C02_DENTAL_GATEWAY",
      kind: "image",
      src: "/media/corporate/industry-dental.webp",
      label: "Dental practices gateway",
      description: "Premium dental consultation environment.",
      alt: "Modern dental consultation environment",
      objectPosition: "center",
    },
    aesthetic: {
      id: "C03_AESTHETIC_GATEWAY",
      kind: "image",
      src: "/media/corporate/industry-aesthetic.webp",
      label: "Aesthetic medicine gateway",
      description: "Physician-led aesthetic consultation environment.",
      alt: "Modern aesthetic medicine consultation environment",
      objectPosition: "center",
    },
    medSpa: {
      id: "C04_MEDSPA_GATEWAY",
      kind: "image",
      src: "/media/corporate/industry-med-spa.webp",
      label: "Med spa gateway",
      description: "Premium med-spa client experience.",
      alt: "Premium med spa reception and consultation environment",
      objectPosition: "center",
    },
  },
  systemOverview: {
    id: "C05_SYSTEM_OVERVIEW",
    kind: "video",
    src: "/media/corporate/system-overview.mp4",
    poster: "/media/corporate/system-overview-poster.webp",
    label: "The DigitalFace system in motion",
    description:
      "A wide visual bridge showing the journey from new inquiry to booked appointment and tracked opportunity.",
    alt: "DigitalFace lead-to-appointment workflow visualization",
    objectPosition: "center",
  },
} satisfies {
  hero: MediaSlotSpec;
  industryCards: Record<"dental" | "aesthetic" | "medSpa", MediaSlotSpec>;
  systemOverview: MediaSlotSpec;
};

export const industryMedia = {
  "dental-practices": {
    hero: {
      id: "D01_DENTAL_HERO",
      kind: "image",
      src: "/media/dental/hero-banner.webp",
      label: "Dental patient journey",
      description:
        "A premium, reassuring dental consultation moment with room for the page interface to breathe.",
      alt: "Dentist welcoming a smiling patient into the treatment chair",
      objectPosition: "center",
    },
    workflow: {
      id: "D02_DENTAL_WORKFLOW",
      kind: "image",
      src: "/media/dental/workflow-banner.webp",
      label: "Dental consultation workflow",
      description:
        "A natural team-and-patient moment illustrating organized intake and human review.",
      alt: "Dental team working with a patient during a scheduled appointment",
      objectPosition: "center",
    },
  },
  "aesthetic-medicine": {
    hero: {
      id: "A01_AESTHETIC_HERO",
      kind: "image",
      src: "/media/aesthetic/hero-banner.webp",
      label: "Aesthetic consultation",
      description:
        "A physician-led aesthetic consultation focused on trust, listening, and professional guidance.",
      alt: "Aesthetic physician assessing a patient's face during a consultation",
      objectPosition: "center",
    },
    workflow: {
      id: "A02_AESTHETIC_WORKFLOW",
      kind: "image",
      src: "/media/aesthetic/workflow-banner.webp",
      label: "Aesthetic inquiry workflow",
      description:
        "An authentic consultation-team moment with digital intake and clear professional boundaries.",
      alt: "Aesthetic practitioner mapping a treatment on a patient's face",
      objectPosition: "center",
    },
  },
  "med-spas": {
    hero: {
      id: "M01_MEDSPA_HERO",
      kind: "image",
      src: "/media/med-spa/hero-banner.webp",
      label: "Med spa client journey",
      description:
        "An inviting med-spa treatment moment designed around recurring client relationships.",
      alt: "Client receiving a facial treatment at a premium med spa",
      objectPosition: "center 45%",
    },
    workflow: {
      id: "M02_MEDSPA_WORKFLOW",
      kind: "image",
      src: "/media/med-spa/workflow-banner.webp",
      label: "Med spa booking workflow",
      description:
        "A warm client-coordinator interaction illustrating organized booking and reactivation.",
      alt: "Med spa therapists attending clients during treatments",
      objectPosition: "center",
    },
  },
} satisfies Record<
  "dental-practices" | "aesthetic-medicine" | "med-spas",
  { hero: MediaSlotSpec; workflow: MediaSlotSpec }
>;

/**
 * Photography that is layout, not a media slot: the atmospheric plate behind
 * the hero and the three mosaic tiles. Paths only — every word that appears
 * over these images is localized copy and lives in the industry content files.
 */
export const industryPhotography = {
  "dental-practices": {
    backdrop: "/media/dental/hero-backdrop.webp",
    backdropPosition: "center 55%",
    moments: [
      { src: "/media/dental/moment-01.webp", position: "center 30%" },
      { src: "/media/dental/moment-02.webp", position: "center" },
      { src: "/media/dental/moment-03.webp", position: "center" },
    ],
  },
  "aesthetic-medicine": {
    backdrop: "/media/aesthetic/hero-backdrop.webp",
    backdropPosition: "center 60%",
    moments: [
      // A tall studio portrait: without the upward bias the square-ish feature
      // tile crops the face straight off the top.
      { src: "/media/aesthetic/moment-01.webp", position: "center 22%" },
      { src: "/media/aesthetic/moment-02.webp", position: "center" },
      { src: "/media/aesthetic/moment-03.webp", position: "center" },
    ],
  },
  "med-spas": {
    backdrop: "/media/med-spa/hero-backdrop.webp",
    backdropPosition: "center 50%",
    moments: [
      { src: "/media/med-spa/moment-01.webp", position: "center 35%" },
      { src: "/media/med-spa/moment-02.webp", position: "center" },
      { src: "/media/med-spa/moment-03.webp", position: "center" },
    ],
  },
} satisfies Record<
  "dental-practices" | "aesthetic-medicine" | "med-spas",
  {
    backdrop: string;
    backdropPosition: string;
    moments: [IndustryPhoto, IndustryPhoto, IndustryPhoto];
  }
>;

export const clientMedia = {
  jennifer: {
    id: "P01_JENNIFER_CASE_STUDY",
    kind: "image",
    src: "/media/clients/jennifer-case-study.webp",
    label: "Dra. Jennifer case-study portrait",
    description:
      "Reserved for an approved real portrait or identity-preserving edit supplied by the client.",
    alt: "Dra. Jennifer Sinisterra in her professional environment",
    objectPosition: "center 28%",
  },
  diego: {
    id: "P02_DIEGO_CASE_STUDY",
    kind: "image",
    src: "/media/clients/diego-case-study.webp",
    label: "Dr. Diego case-study portrait",
    description:
      "Reserved for an approved real portrait or identity-preserving edit supplied by the client.",
    alt: "Dr. Diego Sinisterra in his professional environment",
    objectPosition: "center 28%",
  },
} satisfies Record<"jennifer" | "diego", MediaSlotSpec>;
