import type { MediaSlotSpec } from "@/components/media/MediaSlot";

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
      kind: "video",
      src: "/media/dental/hero-loop.mp4",
      poster: "/media/dental/hero-poster.webp",
      label: "Dental patient journey film",
      description:
        "A premium, reassuring dental consultation story with room for the page interface to breathe.",
      alt: "Patient arriving for a modern dental consultation",
      objectPosition: "center",
    },
    workflow: {
      id: "D02_DENTAL_WORKFLOW",
      kind: "image",
      src: "/media/dental/workflow-banner.webp",
      label: "Dental consultation workflow",
      description:
        "A natural team-and-patient moment illustrating organized intake and human review.",
      alt: "Dental coordinator guiding a patient through consultation intake",
      objectPosition: "center",
    },
  },
  "aesthetic-medicine": {
    hero: {
      id: "A01_AESTHETIC_HERO",
      kind: "video",
      src: "/media/aesthetic/hero-loop.mp4",
      poster: "/media/aesthetic/hero-poster.webp",
      label: "Aesthetic consultation film",
      description:
        "A physician-led aesthetic consultation story focused on trust, listening, and professional guidance.",
      alt: "Physician-led aesthetic medicine consultation",
      objectPosition: "center",
    },
    workflow: {
      id: "A02_AESTHETIC_WORKFLOW",
      kind: "image",
      src: "/media/aesthetic/workflow-banner.webp",
      label: "Aesthetic inquiry workflow",
      description:
        "An authentic consultation-team moment with digital intake and clear professional boundaries.",
      alt: "Aesthetic medicine team organizing a consultation inquiry",
      objectPosition: "center",
    },
  },
  "med-spas": {
    hero: {
      id: "M01_MEDSPA_HERO",
      kind: "video",
      src: "/media/med-spa/hero-loop.mp4",
      poster: "/media/med-spa/hero-poster.webp",
      label: "Med spa client journey film",
      description:
        "An inviting med-spa arrival and booking story designed around recurring client relationships.",
      alt: "Client arriving for a premium med spa appointment",
      objectPosition: "center",
    },
    workflow: {
      id: "M02_MEDSPA_WORKFLOW",
      kind: "image",
      src: "/media/med-spa/workflow-banner.webp",
      label: "Med spa booking workflow",
      description:
        "A warm client-coordinator interaction illustrating organized booking and reactivation.",
      alt: "Med spa coordinator welcoming and assisting a client",
      objectPosition: "center",
    },
  },
} satisfies Record<
  "dental-practices" | "aesthetic-medicine" | "med-spas",
  { hero: MediaSlotSpec; workflow: MediaSlotSpec }
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
