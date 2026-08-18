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

export type IndustrySlug =
  | "dental-practices"
  | "aesthetic-medicine"
  | "med-spas";

export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryItem = {
  title: string;
  description: string;
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

export type IndustryLandingData = {
  slug: IndustrySlug;
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
    items: IndustryItem[];
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
    items: IndustryItem[];
  };
  packages: IndustryPackage[];
  proofLead: "diego" | "jennifer";
  faq: IndustryFaq[];
  booking: {
    title: string;
    description: string;
    assessmentCta: string;
    proposalTitle: string;
    proposalDescription: string;
    proposalCta: string;
    calendlySlot: string;
    formSlot: string;
  };
};

const sharedStats: IndustryStat[] = [
  { value: "24/7", label: "Lead coverage" },
  { value: "EN + ES", label: "Bilingual communication" },
  { value: "One view", label: "Every opportunity tracked" },
];

export const dentalData: IndustryLandingData = {
  slug: "dental-practices",
  navLabel: "Dental Practices",
  industryLabel: "Dental Growth System",
  metadata: {
    title: "Dental Practice Growth System | DigitalFace Marketing",
    description:
      "Turn implant, veneer, and dental treatment inquiries into organized consultation opportunities with patient acquisition, AI follow-up, and booking workflows.",
  },
  hero: {
    eyebrow: "DigitalFace for Dental Practices",
    title: "Turn more dental inquiries into booked consultations.",
    description:
      "Connect dental advertising, patient communication, automated follow-up, consultation booking, and pipeline visibility in one managed growth system.",
    primaryCta: "Book a Dental Growth Assessment",
    secondaryCta: "Explore the Dental System",
    visualTitle: "Dental inquiry journey",
    visualStages: [
      "New veneer inquiry captured",
      "Bilingual response delivered",
      "Consultation opportunity created",
    ],
  },
  stats: sharedStats,
  problem: {
    eyebrow: "The conversion gap",
    title:
      "Your practice may not need more leads. It may need a better system for converting them.",
    description:
      "Dental decisions rarely happen in one message. DigitalFace keeps every inquiry organized and moving while your clinical team stays focused on patient care.",
    items: [
      {
        title: "Slow first response",
        description:
          "Implant, veneer, and smile-design inquiries cool down while staff are treating patients.",
        icon: MessagesSquare,
      },
      {
        title: "Scattered patient information",
        description:
          "Photos, treatment interests, notes, and conversations live across disconnected inboxes.",
        icon: Camera,
      },
      {
        title: "Manual consultation follow-up",
        description:
          "Staff repeatedly chase patients who asked questions but never selected a consultation time.",
        icon: RefreshCcw,
      },
      {
        title: "Unclear financing conversations",
        description:
          "General payment information and case-specific questions are not routed consistently.",
        icon: CircleDollarSign,
      },
      {
        title: "Missed consultations",
        description:
          "Inconsistent confirmations, reminders, and rescheduling create avoidable calendar gaps.",
        icon: CalendarCheck,
      },
      {
        title: "Incomplete attribution",
        description:
          "The practice sees lead totals but cannot clearly connect campaigns to consultation outcomes.",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  journey: {
    eyebrow: "Dental patient journey",
    title:
      "From treatment interest to consultation—with the right human involved at the right time.",
    description:
      "The system automates administrative communication and preserves clinical boundaries throughout the patient journey.",
    steps: [
      {
        label: "Inquiry captured",
        description:
          "A patient responds to an implant, veneer, smile-design, or general treatment campaign.",
      },
      {
        label: "Immediate response",
        description:
          "The patient receives an English or Spanish acknowledgment while their opportunity enters the CRM.",
      },
      {
        label: "Interest and information organized",
        description:
          "Treatment interest, relevant administrative details, and uploaded patient media stay connected to the record.",
      },
      {
        label: "Human review when required",
        description:
          "Clinical, case-specific payment, and exception questions are routed to the appropriate team member.",
      },
      {
        label: "Consultation lifecycle managed",
        description:
          "Booking, reminders, rescheduling, no-show recovery, and long-term follow-up continue from one pipeline.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Inside the system",
    title:
      "Built around the way modern dental practices acquire and guide patients.",
    description:
      "DigitalFace combines the conversion infrastructure your practice needs without forcing the team to manage disconnected tools.",
    items: [
      {
        title: "Dental patient acquisition",
        description:
          "Campaign strategy for implants, veneers, smile design, consultations, and selected high-value services.",
        icon: Megaphone,
      },
      {
        title: "AI dental concierge",
        description:
          "Bilingual administrative responses based on approved practice information, with clear human handoff rules.",
        icon: Bot,
      },
      {
        title: "Photo and case intake",
        description:
          "Patient media and intake information stay organized for the team without turning AI into a clinician.",
        icon: Camera,
      },
      {
        title: "Consultation workflows",
        description:
          "Availability, booking, confirmations, reminders, rescheduling, and cancellation flows work together.",
        icon: CalendarCheck,
      },
      {
        title: "Pipeline and human review",
        description:
          "Every opportunity has a visible stage, history, owner, and escalation path.",
        icon: UserCheck,
      },
      {
        title: "Recovery and reactivation",
        description:
          "Unresponsive inquiries, no-shows, and older patient opportunities receive structured follow-up.",
        icon: RefreshCcw,
      },
    ],
  },
  packages: [
    {
      name: "DigitalFace Capture",
      nicheName: "Dental Patient Capture",
      price: "$790",
      setup: "$597 one-time setup",
      description:
        "Generate dental inquiries, organize every opportunity, and follow up automatically.",
      idealFor:
        "Practices that need a dependable acquisition and follow-up foundation before adding AI.",
      highlights: [
        "One priority acquisition channel",
        "Dental conversion page or lead form",
        "CRM, follow-up, booking, and reminders",
      ],
      details: [
        {
          title: "Managed dental acquisition",
          description:
            "We select and manage one priority channel—typically Meta or Google—based on the treatment, market, offer, and patient intent.",
        },
        {
          title: "Treatment-focused conversion path",
          description:
            "One landing page or lead form is aligned to the selected dental service and campaign promise.",
        },
        {
          title: "Unified patient-opportunity pipeline",
          description:
            "Every form, ad lead, and connected inquiry creates an organized opportunity with source and stage visibility.",
        },
        {
          title: "Immediate automated follow-up",
          description:
            "Rule-based SMS, email, or WhatsApp messages acknowledge interest and guide the patient toward the next step.",
        },
        {
          title: "Consultation calendar and reminders",
          description:
            "Booking links, confirmation sequences, reminders, and rescheduling instructions reduce manual coordination.",
        },
        {
          title: "Monthly performance review",
          description:
            "Lead sources, response activity, consultation opportunities, and campaign decisions are reviewed monthly.",
        },
      ],
      cta: "Start Dental Patient Capture",
    },
    {
      name: "DigitalFace AI",
      nicheName: "AI Dental Concierge",
      price: "$1,200",
      setup: "$1,097 one-time setup",
      description:
        "Respond 24/7, organize patient intent, and help more inquiries move toward consultation.",
      idealFor:
        "Dental teams handling steady inquiry volume, repetitive questions, or bilingual patient communication.",
      featured: true,
      highlights: [
        "Everything in DigitalFace Capture",
        "Bilingual AI patient communication",
        "Qualification, booking, and human handoff",
      ],
      details: [
        {
          title: "Everything in DigitalFace Capture",
          description:
            "The complete acquisition, conversion-page, CRM, follow-up, calendar, reminder, and reporting foundation remains included.",
        },
        {
          title: "Approved dental knowledge",
          description:
            "The assistant answers only from practice-approved information about services, location, hours, policies, and administrative FAQs.",
        },
        {
          title: "English and Spanish conversations",
          description:
            "The assistant follows the patient’s language and keeps communication clear and consistent across the current conversation.",
        },
        {
          title: "Treatment-interest organization",
          description:
            "Interest in implants, veneers, smile design, or other configured services is captured and synchronized to the CRM.",
        },
        {
          title: "Consultation assistance",
          description:
            "The assistant can guide patients toward available consultation times and support configured booking workflows.",
        },
        {
          title: "Clinical and exception handoff",
          description:
            "Diagnosis, eligibility, case-specific treatment, financing exceptions, complaints, and urgent concerns are sent to people.",
        },
        {
          title: "AI monitoring and improvement",
          description:
            "Conversation patterns and safe fallbacks are reviewed so the assistant improves without crossing clinical boundaries.",
        },
      ],
      cta: "Add an AI Dental Concierge",
    },
    {
      name: "DigitalFace Full Growth",
      nicheName: "Complete Dental Growth System",
      price: "$1,800",
      setup: "$1,597 one-time setup",
      description:
        "Connect multichannel acquisition, AI conversion, reactivation, and growth management.",
      idealFor:
        "Established practices ready to grow multiple treatments and manage the complete patient-acquisition journey.",
      highlights: [
        "Everything in DigitalFace AI",
        "Up to two acquisition channels",
        "Reactivation, attribution, and growth strategy",
      ],
      details: [
        {
          title: "Everything in DigitalFace AI",
          description:
            "The full acquisition, CRM, automation, AI communication, appointment, handoff, and reporting system remains included.",
        },
        {
          title: "Multichannel patient acquisition",
          description:
            "Up to two channels are selected from Meta, Google, or another justified platform based on treatment demand and budget.",
        },
        {
          title: "Multiple treatment campaigns",
          description:
            "Campaign and conversion paths can support more than one priority treatment or patient segment within the agreed scope.",
        },
        {
          title: "Patient database reactivation",
          description:
            "Approved segments of older inquiries or patients can receive structured campaigns tied to relevant practice offers.",
        },
        {
          title: "No-show and lost-lead recovery",
          description:
            "Configured sequences help recover missed consultations and inquiries that stopped responding before booking.",
        },
        {
          title: "Conversion and attribution review",
          description:
            "We evaluate the path from source to consultation opportunity and improve campaigns, pages, and follow-up logic.",
        },
        {
          title: "Monthly dental growth strategy",
          description:
            "A structured review aligns treatment priorities, campaign decisions, conversion performance, and the next optimization cycle.",
        },
      ],
      cta: "Build My Dental Growth System",
    },
  ],
  proofLead: "jennifer",
  faq: [
    {
      question: "Can the system communicate in English and Spanish?",
      answer:
        "Yes. DigitalFace can configure English and Spanish communication while keeping each patient conversation in the appropriate language.",
    },
    {
      question: "Can patients send photos or case information?",
      answer:
        "Yes. Patient media and intake details can be organized and routed to the team. The system does not analyze images or replace clinical review.",
    },
    {
      question: "Can the AI recommend a treatment?",
      answer:
        "No. The AI handles approved administrative information and treatment-interest capture. Diagnosis, eligibility, and treatment recommendations remain with licensed clinicians.",
    },
    {
      question: "Can our staff take over a conversation?",
      answer:
        "Yes. Human handoff is a core part of the system, and configured labels or ownership controls can pause AI communication when staff take over.",
    },
    {
      question: "Does it work for international patients?",
      answer:
        "Yes. Bilingual FAQs, media intake, consultation preparation, and human review can support international-patient workflows within the agreed scope.",
    },
  ],
  booking: {
    title: "See where your dental practice is losing patient opportunities.",
    description:
      "We will review your acquisition channels, response process, consultation workflow, and follow-up system before recommending a package.",
    assessmentCta: "Book a Dental Growth Assessment",
    proposalTitle: "Need a custom dental workflow?",
    proposalDescription:
      "Request a scoped proposal for photo intake, international patients, a CRM migration, additional locations, or another practice-specific process.",
    proposalCta: "Request a Custom Dental Proposal",
    calendlySlot: "CALENDLY_EMBED_DENTAL",
    formSlot: "CUSTOM_PROPOSAL_FORM_DENTAL",
  },
};

export const aestheticData: IndustryLandingData = {
  slug: "aesthetic-medicine",
  navLabel: "Aesthetic Medicine",
  industryLabel: "Aesthetic Practice Growth System",
  metadata: {
    title: "Aesthetic Medicine Growth System | DigitalFace Marketing",
    description:
      "Turn procedure interest into qualified consultation opportunities with aesthetic patient acquisition, AI communication, and appointment workflows.",
  },
  hero: {
    eyebrow: "DigitalFace for Aesthetic Medicine & Plastic Surgery",
    title: "Turn procedure interest into qualified consultation opportunities.",
    description:
      "Respond faster, organize patient intent, automate administrative follow-up, and guide interested patients toward the right consultation path.",
    primaryCta: "Book an Aesthetic Growth Assessment",
    secondaryCta: "Explore the Patient Journey",
    visualTitle: "Aesthetic consultation journey",
    visualStages: [
      "Procedure inquiry captured",
      "Patient intent organized",
      "Consultation path activated",
    ],
  },
  stats: sharedStats,
  problem: {
    eyebrow: "The patient-conversion gap",
    title:
      "High-value procedure inquiries are too important to lose through slow or inconsistent follow-up.",
    description:
      "DigitalFace handles the administrative journey around the consultation while preserving clear clinical and human boundaries.",
    items: [
      {
        title: "After-hours procedure inquiries",
        description:
          "Interested patients often message when the front desk is unavailable and expect a fast acknowledgment.",
        icon: MessageCircleMore,
      },
      {
        title: "Repetitive administrative questions",
        description:
          "Location, consultation, financing, availability, and preparation questions consume staff time.",
        icon: ClipboardCheck,
      },
      {
        title: "Unstructured procedure interest",
        description:
          "Patient goals and procedure categories are buried inside messages instead of organized in the CRM.",
        icon: Route,
      },
      {
        title: "Clinical questions in the wrong hands",
        description:
          "Safety, eligibility, symptoms, and case-specific recommendations require reliable human escalation.",
        icon: ShieldCheck,
      },
      {
        title: "Consultation drop-off",
        description:
          "Interested patients stop responding before selecting, confirming, or attending a consultation.",
        icon: CalendarCheck,
      },
      {
        title: "Campaign-to-consultation blindness",
        description:
          "Marketing reports lead totals without showing which inquiries become consultation opportunities.",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  journey: {
    eyebrow: "Aesthetic patient journey",
    title:
      "Administrative automation supports the consultation—clinical decisions remain with clinicians.",
    description:
      "Every step is designed to improve responsiveness and organization without asking AI to determine medical suitability.",
    steps: [
      {
        label: "Procedure interest captured",
        description:
          "A patient responds to a surgical or nonsurgical campaign, website, social channel, or referral path.",
      },
      {
        label: "Immediate bilingual acknowledgment",
        description:
          "The inquiry is acknowledged, recorded, and routed into the practice’s configured opportunity pipeline.",
      },
      {
        label: "Administrative questions answered",
        description:
          "Approved information about the practice, consultation process, location, and policies is delivered consistently.",
      },
      {
        label: "Clinical questions escalated",
        description:
          "Safety, symptoms, candidacy, treatment recommendations, and exceptions are directed to authorized people.",
      },
      {
        label: "Consultation and follow-up managed",
        description:
          "Booking, reminders, rescheduling, missed appointments, and long-term interest remain visible and actionable.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Inside the system",
    title:
      "A patient-acquisition system built around consultation-driven aesthetic care.",
    description:
      "DigitalFace connects campaigns and conversations to a controlled appointment journey your team can supervise.",
    items: [
      {
        title: "Procedure acquisition campaigns",
        description:
          "Campaigns and conversion paths are aligned to selected surgical or nonsurgical procedure priorities.",
        icon: Megaphone,
      },
      {
        title: "AI patient concierge",
        description:
          "Approved English and Spanish administrative communication is available beyond front-desk hours.",
        icon: Bot,
      },
      {
        title: "Intent and readiness capture",
        description:
          "Procedure category, language, consultation interest, and configured administrative facts stay organized.",
        icon: ClipboardCheck,
      },
      {
        title: "Protected clinical boundaries",
        description:
          "Clinical eligibility, diagnosis, symptoms, complications, and medical advice are routed to qualified people.",
        icon: ShieldCheck,
      },
      {
        title: "Consultation lifecycle",
        description:
          "Availability, booking, confirmation, reminders, cancellation, and rescheduling work as one process.",
        icon: CalendarCheck,
      },
      {
        title: "Social inquiry automation",
        description:
          "Configured Facebook and Instagram comments or messages can enter controlled response and follow-up paths.",
        icon: MessagesSquare,
      },
    ],
  },
  packages: [
    {
      name: "DigitalFace Capture",
      nicheName: "Aesthetic Consultation Capture",
      price: "$790",
      setup: "$597 one-time setup",
      description:
        "Generate procedure inquiries, organize every opportunity, and automate the first follow-up.",
      idealFor:
        "Aesthetic practices that need a dependable acquisition and consultation-follow-up foundation.",
      highlights: [
        "One priority acquisition channel",
        "Procedure-focused conversion path",
        "CRM, follow-up, booking, and reminders",
      ],
      details: [
        {
          title: "Managed aesthetic acquisition",
          description:
            "We select and manage one priority channel based on the procedure, market demand, creative assets, and patient intent.",
        },
        {
          title: "Procedure-focused conversion page",
          description:
            "One landing page or lead form presents the selected consultation opportunity with clear expectations and next steps.",
        },
        {
          title: "Centralized inquiry pipeline",
          description:
            "Every connected form and ad inquiry becomes a visible opportunity with source, stage, owner, and interaction history.",
        },
        {
          title: "Immediate administrative follow-up",
          description:
            "Rule-based messages acknowledge the inquiry and direct patients toward approved consultation information.",
        },
        {
          title: "Consultation calendar and reminders",
          description:
            "Configured booking links, confirmations, reminders, rescheduling, and cancellation instructions reduce manual work.",
        },
        {
          title: "Monthly campaign review",
          description:
            "We review lead sources, response activity, consultation opportunities, and the next campaign optimization decisions.",
        },
      ],
      cta: "Start Consultation Capture",
    },
    {
      name: "DigitalFace AI",
      nicheName: "AI Patient Concierge",
      price: "$1,200",
      setup: "$1,097 one-time setup",
      description:
        "Respond 24/7, organize patient intent, support booking, and hand sensitive conversations to staff.",
      idealFor:
        "Practices receiving steady procedure inquiries or managing repetitive bilingual patient conversations.",
      featured: true,
      highlights: [
        "Everything in DigitalFace Capture",
        "Bilingual AI patient communication",
        "Consultation support and clinical handoff",
      ],
      details: [
        {
          title: "Everything in DigitalFace Capture",
          description:
            "The acquisition, conversion page, CRM, automated follow-up, calendar, reminder, and reporting foundation remains included.",
        },
        {
          title: "Approved practice knowledge",
          description:
            "The assistant uses approved information about the practice, procedures, consultation process, location, and administrative policies.",
        },
        {
          title: "English and Spanish response",
          description:
            "The conversation follows the patient’s language without switching unpredictably or mixing languages.",
        },
        {
          title: "Procedure-interest capture",
          description:
            "Configured procedure categories, consultation intent, and safe administrative facts synchronize with the CRM.",
        },
        {
          title: "Consultation booking support",
          description:
            "The assistant guides interested patients toward configured availability and booking workflows.",
        },
        {
          title: "Human clinical escalation",
          description:
            "Safety, symptoms, candidacy, medical advice, complaints, and unusual cases are directed to authorized team members.",
        },
        {
          title: "Conversation improvement",
          description:
            "Safe fallbacks, common questions, and handoff reasons are reviewed to improve clarity and operational performance.",
        },
      ],
      cta: "Add an AI Patient Concierge",
    },
    {
      name: "DigitalFace Full Growth",
      nicheName: "Aesthetic Practice Growth System",
      price: "$1,800",
      setup: "$1,597 one-time setup",
      description:
        "Combine multichannel patient acquisition, AI conversion, reactivation, and growth management.",
      idealFor:
        "Established aesthetic practices ready to scale procedure campaigns and the complete consultation journey.",
      highlights: [
        "Everything in DigitalFace AI",
        "Up to two acquisition channels",
        "Reactivation, attribution, and growth strategy",
      ],
      details: [
        {
          title: "Everything in DigitalFace AI",
          description:
            "The full acquisition, CRM, automation, AI communication, appointment, clinical handoff, and reporting system remains included.",
        },
        {
          title: "Multichannel acquisition",
          description:
            "Up to two justified channels are selected according to procedure demand, patient intent, geography, creative, and budget.",
        },
        {
          title: "Multiple consultation campaigns",
          description:
            "Campaign and conversion paths can support more than one approved procedure priority within the agreed scope.",
        },
        {
          title: "Patient-interest reactivation",
          description:
            "Older inquiries can be segmented and re-engaged with practice-approved consultation opportunities.",
        },
        {
          title: "Social comment-to-conversation flows",
          description:
            "Selected Facebook and Instagram engagement can enter controlled reply, direct-message, and lead-capture workflows.",
        },
        {
          title: "Conversion and attribution review",
          description:
            "We connect campaign sources to consultation opportunity stages and improve pages, messages, and follow-up logic.",
        },
        {
          title: "Monthly aesthetic growth strategy",
          description:
            "Procedure priorities, campaign performance, consultation flow, and the next optimization cycle are reviewed together.",
        },
      ],
      cta: "Build My Aesthetic Growth System",
    },
  ],
  proofLead: "diego",
  faq: [
    {
      question: "Can the AI tell a patient which procedure is right for them?",
      answer:
        "No. The AI may provide approved administrative information and capture interest. Procedure recommendations, candidacy, diagnosis, and medical advice remain with qualified clinicians.",
    },
    {
      question: "Can staff take over sensitive conversations?",
      answer:
        "Yes. Human handoff and ownership controls are built into the operating model so the team can take over when clinical, urgent, or sensitive issues arise.",
    },
    {
      question: "Can it manage booking and rescheduling?",
      answer:
        "Yes, when connected to a supported calendar and configured availability. The exact booking, confirmation, cancellation, and rescheduling scope is defined during implementation.",
    },
    {
      question: "Can the system respond to social-media inquiries?",
      answer:
        "Yes. Facebook and Instagram lead, message, or comment workflows can be connected when they are included in the selected package and channel scope.",
    },
    {
      question: "Does DigitalFace promise a number of patients or procedures?",
      answer:
        "No. DigitalFace builds and manages the acquisition and conversion system, but outcomes also depend on market demand, budget, offers, clinical fit, pricing, reputation, and the practice’s consultation process.",
    },
  ],
  booking: {
    title:
      "Find the conversion gaps between procedure interest and consultation.",
    description:
      "We will review your acquisition channels, response process, consultation journey, handoff rules, and follow-up system before recommending a package.",
    assessmentCta: "Book an Aesthetic Growth Assessment",
    proposalTitle: "Need a custom aesthetic workflow?",
    proposalDescription:
      "Request a scoped proposal for multiple locations, international patients, procedure-specific intake, social automation, or another practice process.",
    proposalCta: "Request a Custom Aesthetic Proposal",
    calendlySlot: "CALENDLY_EMBED_AESTHETIC",
    formSlot: "CUSTOM_PROPOSAL_FORM_AESTHETIC",
  },
};

export const medSpaData: IndustryLandingData = {
  slug: "med-spas",
  navLabel: "Med Spas",
  industryLabel: "Med Spa Growth System",
  metadata: {
    title: "Med Spa Growth System | DigitalFace Marketing",
    description:
      "Turn treatment interest into booked and returning clients with med-spa advertising, AI booking, reactivation, and reputation workflows.",
  },
  hero: {
    eyebrow: "DigitalFace for Med Spas",
    title: "Turn treatment interest into booked and returning clients.",
    description:
      "Connect med-spa advertising, rapid lead response, AI communication, appointment booking, reactivation, and performance tracking.",
    primaryCta: "Book a Med Spa Growth Assessment",
    secondaryCta: "Explore the Med Spa System",
    visualTitle: "Med spa booking journey",
    visualStages: [
      "Treatment inquiry captured",
      "Booking conversation active",
      "Appointment and follow-up ready",
    ],
  },
  stats: sharedStats,
  problem: {
    eyebrow: "The booking gap",
    title:
      "Your team should be treating clients—not chasing every Instagram inquiry manually.",
    description:
      "DigitalFace keeps promotional interest, appointment conversations, and retention workflows moving without adding more inbox chaos.",
    items: [
      {
        title: "Scattered social inquiries",
        description:
          "Treatment questions arrive through ads, comments, direct messages, forms, and calls without one clear owner.",
        icon: MessagesSquare,
      },
      {
        title: "Promotion leads go cold",
        description:
          "High-intent prospects lose interest when offers are not acknowledged and followed up quickly.",
        icon: Sparkles,
      },
      {
        title: "Repeated pricing and treatment FAQs",
        description:
          "Staff spend hours answering the same approved administrative questions across multiple channels.",
        icon: BadgeDollarSign,
      },
      {
        title: "Calendar gaps and no-shows",
        description:
          "Confirmation, reminder, rescheduling, and recovery processes depend on staff remembering every step.",
        icon: CalendarCheck,
      },
      {
        title: "Dormant client database",
        description:
          "Previous clients and older leads are not segmented for seasonal offers, rebooking, or reactivation.",
        icon: RefreshCcw,
      },
      {
        title: "Inconsistent review requests",
        description:
          "Positive experiences do not reliably become reputation-building feedback and repeat visits.",
        icon: Star,
      },
    ],
  },
  journey: {
    eyebrow: "Med spa client journey",
    title: "From promotion response to appointment, review, and rebooking.",
    description:
      "The system coordinates acquisition and retention while your providers and front desk remain in control of sensitive conversations.",
    steps: [
      {
        label: "Treatment interest captured",
        description:
          "A prospect responds to a promotion, social post, advertisement, website, message, or referral path.",
      },
      {
        label: "Immediate response",
        description:
          "The inquiry receives an English or Spanish acknowledgment and enters the med-spa opportunity pipeline.",
      },
      {
        label: "Approved questions answered",
        description:
          "Configured information about treatments, promotions, location, policies, and availability is communicated consistently.",
      },
      {
        label: "Appointment supported",
        description:
          "The client is guided toward booking, confirmation, reminders, rescheduling, or staff takeover when needed.",
      },
      {
        label: "Retention continues",
        description:
          "Review requests, rebooking, missed-appointment recovery, and approved reactivation campaigns extend the relationship.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Inside the system",
    title:
      "Designed for the fast-moving mix of promotions, appointments, and repeat treatments.",
    description:
      "DigitalFace connects social demand to a visible client journey and keeps retention opportunities from disappearing.",
    items: [
      {
        title: "Treatment-promotion campaigns",
        description:
          "Meta, Instagram, Google, or another justified channel is selected around the offer and local market.",
        icon: Megaphone,
      },
      {
        title: "AI booking concierge",
        description:
          "Approved English and Spanish responses support common questions and appointment intent beyond business hours.",
        icon: Bot,
      },
      {
        title: "Promotion and interest tracking",
        description:
          "The system records which treatment, campaign, or offer brought each opportunity into the pipeline.",
        icon: Route,
      },
      {
        title: "Appointment lifecycle",
        description:
          "Booking, reminders, rescheduling, cancellations, missed appointments, and recovery are connected.",
        icon: CalendarCheck,
      },
      {
        title: "Client reactivation",
        description:
          "Approved segments can receive relevant seasonal, membership, package, or rebooking campaigns.",
        icon: RefreshCcw,
      },
      {
        title: "Reputation and repeat visits",
        description:
          "Configured post-visit journeys can request feedback, support rebooking, and keep client history visible.",
        icon: Star,
      },
    ],
  },
  packages: [
    {
      name: "DigitalFace Capture",
      nicheName: "Med Spa Client Capture",
      price: "$790",
      setup: "$597 one-time setup",
      description:
        "Generate treatment inquiries, organize every lead, and automate the path toward booking.",
      idealFor:
        "Med spas that need a dependable promotion, lead-capture, and appointment-follow-up foundation.",
      highlights: [
        "One priority acquisition channel",
        "Treatment promotion landing path",
        "CRM, follow-up, booking, and reminders",
      ],
      details: [
        {
          title: "Managed med-spa acquisition",
          description:
            "We select and manage one priority channel—often Meta or Google—based on the offer, local demand, assets, and budget.",
        },
        {
          title: "Treatment-promotion conversion path",
          description:
            "One landing page or lead form is aligned to the selected treatment, offer, and booking expectation.",
        },
        {
          title: "Unified client-opportunity pipeline",
          description:
            "Connected ad and form inquiries enter one visible pipeline with source, treatment interest, and status.",
        },
        {
          title: "Immediate automated follow-up",
          description:
            "Rule-based messages acknowledge interest and direct prospects toward approved information and booking.",
        },
        {
          title: "Appointment confirmation and reminders",
          description:
            "Booking links, confirmations, reminders, rescheduling, and cancellation instructions reduce calendar friction.",
        },
        {
          title: "Monthly promotion review",
          description:
            "We review acquisition sources, booking opportunities, response activity, and the next campaign decisions.",
        },
      ],
      cta: "Start Med Spa Client Capture",
    },
    {
      name: "DigitalFace AI",
      nicheName: "AI Booking Concierge",
      price: "$1,200",
      setup: "$1,097 one-time setup",
      description:
        "Answer approved treatment questions, organize intent, support booking, and transfer conversations to staff.",
      idealFor:
        "Med spas with steady social inquiry volume, repetitive questions, or an overloaded front desk.",
      featured: true,
      highlights: [
        "Everything in DigitalFace Capture",
        "Bilingual AI booking communication",
        "Treatment interest, booking, and handoff",
      ],
      details: [
        {
          title: "Everything in DigitalFace Capture",
          description:
            "The acquisition, promotion page, CRM, automated follow-up, calendar, reminder, and reporting foundation remains included.",
        },
        {
          title: "Approved med-spa knowledge",
          description:
            "The assistant uses configured information about treatments, promotions, location, hours, pricing policies, and availability.",
        },
        {
          title: "English and Spanish conversations",
          description:
            "The assistant responds in the prospect’s language and keeps the current conversation linguistically consistent.",
        },
        {
          title: "Treatment-interest capture",
          description:
            "Configured treatment categories, offer interest, language, and booking intent are organized in the CRM.",
        },
        {
          title: "Appointment assistance",
          description:
            "The assistant can guide interested prospects toward configured availability and booking workflows.",
        },
        {
          title: "Human and clinical handoff",
          description:
            "Medical questions, contraindications, symptoms, complaints, exceptions, and staff requests are escalated.",
        },
        {
          title: "AI monitoring and improvement",
          description:
            "Common questions, safe fallbacks, and handoff patterns are reviewed to improve the client experience.",
        },
      ],
      cta: "Add an AI Booking Concierge",
    },
    {
      name: "DigitalFace Full Growth",
      nicheName: "Complete Med Spa Growth System",
      price: "$1,800",
      setup: "$1,597 one-time setup",
      description:
        "Connect multichannel promotion, AI booking, reactivation, reputation, and growth management.",
      idealFor:
        "Established med spas ready to scale multiple treatments and improve acquisition and retention together.",
      highlights: [
        "Everything in DigitalFace AI",
        "Up to two acquisition channels",
        "Reactivation, reputation, and growth strategy",
      ],
      details: [
        {
          title: "Everything in DigitalFace AI",
          description:
            "The complete acquisition, CRM, automation, AI communication, appointment, handoff, and reporting system remains included.",
        },
        {
          title: "Multichannel treatment acquisition",
          description:
            "Up to two justified channels are selected according to the treatment mix, local market, creative assets, and budget.",
        },
        {
          title: "Multiple treatment campaigns",
          description:
            "Campaign and conversion paths can support more than one approved treatment or promotion within the agreed scope.",
        },
        {
          title: "Client database reactivation",
          description:
            "Older leads and clients can be segmented for relevant treatment, seasonal, membership, or rebooking campaigns.",
        },
        {
          title: "Review and rebooking workflows",
          description:
            "Post-visit journeys can request feedback, encourage the appropriate next appointment, and preserve history.",
        },
        {
          title: "Social comment-to-conversation flows",
          description:
            "Selected Facebook and Instagram engagement can enter controlled reply, direct-message, and lead-capture paths.",
        },
        {
          title: "Monthly med-spa growth strategy",
          description:
            "Treatment priorities, campaign performance, booking conversion, retention, and the next optimization cycle are reviewed together.",
        },
      ],
      cta: "Build My Med Spa Growth System",
    },
  ],
  proofLead: "diego",
  faq: [
    {
      question:
        "Can the system answer questions about treatments and promotions?",
      answer:
        "Yes, when the answers are approved by the med spa and administrative in nature. Clinical suitability, contraindications, diagnosis, and personalized medical advice remain with qualified providers.",
    },
    {
      question: "Can it handle Instagram and Facebook inquiries?",
      answer:
        "Yes. Lead forms, selected messaging paths, and configured comment workflows can connect to the system when included in scope.",
    },
    {
      question: "Can it reactivate previous clients?",
      answer:
        "Yes. Approved CRM segments can receive relevant campaigns for seasonal offers, treatment rebooking, memberships, or other configured opportunities.",
    },
    {
      question: "Can staff take over a conversation?",
      answer:
        "Yes. Staff can take ownership when a prospect requests a person or when a conversation becomes clinical, sensitive, urgent, or outside the approved knowledge.",
    },
    {
      question: "Do you create professional photos and videos?",
      answer:
        "Professional production is not included. The med spa supplies approved raw photos and video; DigitalFace adapts agreed assets for campaigns and conversion paths.",
    },
  ],
  booking: {
    title:
      "Find the gaps between treatment interest, booking, and repeat visits.",
    description:
      "We will review your promotions, social lead flow, response process, calendar, reactivation, and client follow-up before recommending a package.",
    assessmentCta: "Book a Med Spa Growth Assessment",
    proposalTitle: "Need a custom med-spa workflow?",
    proposalDescription:
      "Request a scoped proposal for memberships, multiple locations, review automation, treatment-specific intake, or another custom process.",
    proposalCta: "Request a Custom Med Spa Proposal",
    calendlySlot: "CALENDLY_EMBED_MED_SPA",
    formSlot: "CUSTOM_PROPOSAL_FORM_MED_SPA",
  },
};

export const industryDataBySlug: Record<IndustrySlug, IndustryLandingData> = {
  "dental-practices": dentalData,
  "aesthetic-medicine": aestheticData,
  "med-spas": medSpaData,
};
