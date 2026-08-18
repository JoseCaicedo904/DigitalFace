import type { IndustryLocaleBundle } from "./industryTypes";

export const industryContentEn: IndustryLocaleBundle = {
  ui: {
    header: {
      bookAssessment: "Book assessment",
      logoAlt: "DigitalFace Marketing",
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
    },
    heroVisual: {
      label: "Live system view",
      stage: "Stage",
      bilingual: "English and Spanish",
      handover: "Human takeover ready",
    },
    heroMedia: {
      eyebrow: "Trust before conversion",
      title: "A premium visual moment, built around the real patient journey.",
    },
    workflowOverlay:
      "Technology organizes the opportunity. Your team owns the relationship.",
    capabilitiesDisclaimer:
      "DigitalFace automates administrative communication and business workflows. Licensed professionals keep full clinical responsibility.",
    packages: {
      eyebrow: "Three growth levels",
      description:
        "Every package is implemented and managed by DigitalFace. Open any inclusion to see the operating scope behind the headline.",
      mostPopular: "Most popular",
      perMonth: "/month",
      expandLabel: "Open any inclusion",
      idealFor: "Ideal for",
      customProposal: "Request a custom proposal",
      footnote:
        "Advertising budget is paid directly by you. Messaging, AI usage, telephony and unusual third-party consumption may be billed separately according to the approved scope. Professional photo and video production is not included.",
    },
    proposalBand: {
      eyebrow: "Beyond the standard package",
    },
    proof: {
      eyebrow: "Systems delivered",
      title: "Real operating experience behind the system",
      description:
        "Two client systems are live today. They show the communication, appointment, CRM and human-handoff capabilities used across these packages.",
      activeLabel: "Active client",
      slotLabel: "Client slot",
      slotTitle: "Reserved for the next growth story",
      slotDescription:
        "This space stays empty until a new client result is verified and approved for publication.",
    },
    faq: {
      eyebrow: "Questions before you book",
    },
    booking: {
      eyebrow: "Choose your next step",
      assessmentLabel: "Growth assessment",
      calendlyTitle: "Booking calendar slot ready",
      calendlyHint:
        "Replace this block with the approved Calendly embed to keep scheduling inside this page.",
      customScopeLabel: "Custom scope",
      formTitle: "Custom proposal form slot ready",
      formHint:
        "Replace this block with the approved form embed or a connected submission component.",
      privacyNote:
        "The final form should collect only what is needed to scope the request, and link to the published privacy policy.",
      calendlyAria: "Booking calendar placeholder",
      formAria: "Custom proposal form placeholder",
    },
    mobileCta: "Book growth assessment",
  },

  clientStories: {
    diego: {
      id: "diego",
      name: "Dr. Diego Sinisterra",
      sector: "Aesthetic Medicine",
      summary:
        "A connected patient-communication and appointment system built around aesthetic consultation workflows.",
      delivered: [
        "Bilingual AI patient communication",
        "Appointment booking and lifecycle automation",
        "Facebook and Instagram comment-response engine",
        "CRM ownership, error handling and human takeover",
      ],
    },
    jennifer: {
      id: "jennifer",
      name: "Dra. Jennifer Sinisterra",
      sector: "Cosmetic dentistry and international patients",
      summary:
        "A bilingual patient-intake system connecting WhatsApp conversations, CRM visibility, media intake and human review.",
      delivered: [
        "AI communication in English and Spanish",
        "Patient photo and document intake",
        "Chatwoot, CRM and Drive synchronization",
        "Human review tasks and controlled AI handoff",
      ],
    },
  },

  industries: {
    "dental-practices": {
      navLabel: "Dental Practices",
      industryLabel: "Dental Growth System",
      metadata: {
        title: "Dental Practice Growth System | DigitalFace Marketing",
        description:
          "Turn implant, veneer and treatment inquiries into organized consultations with managed acquisition, bilingual AI follow-up and booking workflows.",
      },
      hero: {
        eyebrow: "DigitalFace for Dental Practices",
        title: "Turn more dental inquiries into booked consultations.",
        description:
          "One managed system connecting dental advertising, patient communication, automated follow-up, consultation booking and pipeline visibility.",
        primaryCta: "Book a Dental Growth Assessment",
        secondaryCta: "See the dental system",
        visualTitle: "Dental inquiry journey",
        visualStages: [
          "New veneer inquiry captured",
          "Bilingual response delivered",
          "Consultation opportunity created",
        ],
      },
      stats: [
        { value: "24/7", label: "Inquiry coverage" },
        { value: "EN + ES", label: "Bilingual communication" },
        { value: "One view", label: "Every opportunity tracked" },
      ],
      problem: {
        eyebrow: "The conversion gap",
        title:
          "Your practice may not need more leads. It may need a better way to convert the ones you already get.",
        description:
          "Dental decisions rarely happen in one message. DigitalFace keeps every inquiry organized and moving while your clinical team stays with patients.",
        items: [
          {
            title: "Slow first response",
            description:
              "Implant, veneer and smile-design inquiries cool off while your team is chairside.",
          },
          {
            title: "Patient information everywhere",
            description:
              "Photos, treatment interests, notes and conversations end up spread across disconnected inboxes.",
          },
          {
            title: "Manual consultation follow-up",
            description:
              "Staff keep chasing patients who asked a question but never picked a consultation time.",
          },
          {
            title: "Unclear financing conversations",
            description:
              "General payment information and case-specific questions are not routed the same way twice.",
          },
          {
            title: "Missed consultations",
            description:
              "Inconsistent confirmations, reminders and rescheduling leave avoidable gaps in the schedule.",
          },
          {
            title: "No line from campaign to consultation",
            description:
              "The practice sees lead totals but cannot connect campaigns to booked consultations.",
          },
        ],
      },
      journey: {
        eyebrow: "Dental patient journey",
        title:
          "From treatment interest to consultation, with the right person involved at the right moment.",
        description:
          "The system automates the administrative conversation and keeps clinical boundaries intact throughout.",
        steps: [
          {
            label: "Inquiry captured",
            description:
              "A patient responds to an implant, veneer, smile-design or general treatment campaign.",
          },
          {
            label: "Immediate response",
            description:
              "The patient gets an acknowledgment in English or Spanish while the opportunity enters the CRM.",
          },
          {
            label: "Interest organized",
            description:
              "Treatment interest, administrative details and uploaded patient media stay attached to the record.",
          },
          {
            label: "Human review when required",
            description:
              "Clinical questions, case-specific payment topics and exceptions go to the right team member.",
          },
          {
            label: "Consultation lifecycle managed",
            description:
              "Booking, reminders, rescheduling, no-show recovery and long-term follow-up run from one pipeline.",
          },
        ],
      },
      capabilities: {
        eyebrow: "Inside the system",
        title:
          "Built around the way modern dental practices attract and guide patients",
        description:
          "The conversion infrastructure your practice needs, without asking your team to manage disconnected tools.",
        items: [
          {
            title: "Dental patient acquisition",
            description:
              "Campaign strategy for implants, veneers, smile design, consultations and selected high-value services.",
          },
          {
            title: "AI dental concierge",
            description:
              "Bilingual administrative replies based on practice-approved information, with clear handoff rules.",
          },
          {
            title: "Photo and case intake",
            description:
              "Patient media and intake details stay organized for your team, without turning AI into a clinician.",
          },
          {
            title: "Consultation workflows",
            description:
              "Availability, booking, confirmations, reminders, rescheduling and cancellations all work together.",
          },
          {
            title: "Pipeline and human review",
            description:
              "Every opportunity has a visible stage, a history, an owner and an escalation path.",
          },
          {
            title: "Recovery and reactivation",
            description:
              "Unanswered inquiries, no-shows and older patient opportunities get structured follow-up.",
          },
        ],
      },
      packagesTitle: "Choose the dental growth level that fits you today.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Dental Patient Capture",
          price: "$790",
          setup: "$597 one-time setup",
          description:
            "Generate dental inquiries, organize every opportunity and follow up automatically.",
          idealFor:
            "Practices that need a dependable acquisition and follow-up foundation before adding AI.",
          highlights: [
            "One priority acquisition channel",
            "Dental conversion page or lead form",
            "CRM, follow-up, booking and reminders",
          ],
          details: [
            {
              title: "Managed dental acquisition",
              description:
                "We select and manage one priority channel, usually Meta or Google, based on the treatment, market, offer and patient intent.",
            },
            {
              title: "Treatment-focused conversion path",
              description:
                "One landing page or lead form aligned to the selected dental service and the promise made in the ad.",
            },
            {
              title: "One patient-opportunity pipeline",
              description:
                "Every form, ad inquiry and connected channel creates an organized opportunity with visible source and stage.",
            },
            {
              title: "Immediate automated follow-up",
              description:
                "Rule-based SMS, email or WhatsApp messages acknowledge the inquiry and guide the patient to the next step.",
            },
            {
              title: "Consultation calendar and reminders",
              description:
                "Booking links, confirmation sequences, reminders and rescheduling instructions cut manual coordination.",
            },
            {
              title: "Monthly performance review",
              description:
                "We review lead sources, response activity, consultation opportunities and the next campaign decisions.",
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
            "Answer around the clock, organize patient intent and move more inquiries toward a consultation.",
          idealFor:
            "Dental teams with steady inquiry volume, repetitive questions or bilingual patient communication.",
          featured: true,
          highlights: [
            "Everything in DigitalFace Capture",
            "Bilingual AI patient communication",
            "Qualification, booking and human handoff",
          ],
          details: [
            {
              title: "Everything in DigitalFace Capture",
              description:
                "The full acquisition, conversion page, CRM, follow-up, calendar, reminder and reporting foundation stays included.",
            },
            {
              title: "Approved dental knowledge",
              description:
                "The assistant answers only from practice-approved information about services, location, hours, policies and administrative questions.",
            },
            {
              title: "English and Spanish conversations",
              description:
                "The assistant follows the patient's language and keeps the conversation consistent from start to finish.",
            },
            {
              title: "Treatment-interest organization",
              description:
                "Interest in implants, veneers, smile design or any configured service is captured and synced to the CRM.",
            },
            {
              title: "Consultation assistance",
              description:
                "The assistant guides patients toward available consultation times and supports the configured booking workflow.",
            },
            {
              title: "Clinical and exception handoff",
              description:
                "Diagnosis, eligibility, case-specific treatment, financing exceptions, complaints and urgent concerns go to people.",
            },
            {
              title: "AI monitoring and improvement",
              description:
                "We review conversation patterns and safe fallbacks so the assistant improves without crossing clinical boundaries.",
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
            "Connect multichannel acquisition, AI conversion, reactivation and growth management.",
          idealFor:
            "Established practices ready to grow several treatments and manage the full patient-acquisition journey.",
          highlights: [
            "Everything in DigitalFace AI",
            "Up to two acquisition channels",
            "Reactivation, attribution and growth strategy",
          ],
          details: [
            {
              title: "Everything in DigitalFace AI",
              description:
                "The complete acquisition, CRM, automation, AI communication, appointment, handoff and reporting system stays included.",
            },
            {
              title: "Multichannel patient acquisition",
              description:
                "Up to two channels selected from Meta, Google or another justified platform, based on treatment demand and budget.",
            },
            {
              title: "Multiple treatment campaigns",
              description:
                "Campaigns and conversion paths can support more than one priority treatment or patient segment within the agreed scope.",
            },
            {
              title: "Patient database reactivation",
              description:
                "Approved segments of older inquiries or patients receive structured campaigns tied to relevant practice offers.",
            },
            {
              title: "No-show and lost-lead recovery",
              description:
                "Configured sequences recover missed consultations and inquiries that went quiet before booking.",
            },
            {
              title: "Conversion and attribution review",
              description:
                "We follow the path from source to consultation opportunity and improve campaigns, pages and follow-up logic.",
            },
            {
              title: "Monthly dental growth strategy",
              description:
                "A working session on treatment priorities, campaign decisions, conversion performance and the next optimization cycle.",
            },
          ],
          cta: "Build My Dental Growth System",
        },
      ],
      faqTitle: "What dental practices usually ask us",
      faq: [
        {
          question: "Can the system communicate in English and Spanish?",
          answer:
            "Yes. We configure English and Spanish communication and keep each patient conversation in the language the patient chose.",
        },
        {
          question: "Can patients send photos or case information?",
          answer:
            "Yes. Patient media and intake details are organized and routed to your team. The system does not analyze images or replace clinical review.",
        },
        {
          question: "Can the AI recommend a treatment?",
          answer:
            "No. The AI handles approved administrative information and captures treatment interest. Diagnosis, eligibility and treatment recommendations stay with licensed clinicians.",
        },
        {
          question: "Can our staff take over a conversation?",
          answer:
            "Yes. Human handoff is part of the system. Configured labels and ownership controls pause AI communication the moment your team steps in.",
        },
        {
          question: "Does it work for international patients?",
          answer:
            "Yes. Bilingual FAQs, media intake, consultation preparation and human review can support international-patient workflows within the agreed scope.",
        },
      ],
      booking: {
        title: "See where your practice is losing patient opportunities.",
        description:
          "We review your acquisition channels, response process, consultation workflow and follow-up before recommending a package.",
        assessmentCta: "Book a Dental Growth Assessment",
        proposalTitle: "Need a custom dental workflow?",
        proposalDescription:
          "Ask for a scoped proposal covering photo intake, international patients, a CRM migration, extra locations or another process specific to your practice.",
        proposalCta: "Request a Custom Dental Proposal",
      },
    },

    "aesthetic-medicine": {
      navLabel: "Aesthetic Medicine",
      industryLabel: "Aesthetic Practice Growth System",
      metadata: {
        title: "Aesthetic Medicine Growth System | DigitalFace Marketing",
        description:
          "Turn procedure interest into qualified consultations with managed acquisition, bilingual AI communication and appointment workflows.",
      },
      hero: {
        eyebrow: "DigitalFace for Aesthetic Medicine and Plastic Surgery",
        title:
          "Turn procedure interest into qualified consultation opportunities.",
        description:
          "Respond faster, organize what each patient is asking for, automate the administrative follow-up and guide interested patients toward the right consultation.",
        primaryCta: "Book an Aesthetic Growth Assessment",
        secondaryCta: "See the patient journey",
        visualTitle: "Aesthetic consultation journey",
        visualStages: [
          "Procedure inquiry captured",
          "Patient intent organized",
          "Consultation path activated",
        ],
      },
      stats: [
        { value: "24/7", label: "Inquiry coverage" },
        { value: "EN + ES", label: "Bilingual communication" },
        { value: "One view", label: "Every opportunity tracked" },
      ],
      problem: {
        eyebrow: "The consultation gap",
        title:
          "High-value procedure inquiries are too important to lose to a slow reply.",
        description:
          "DigitalFace handles the administrative journey around the consultation and keeps clinical boundaries clear.",
        items: [
          {
            title: "Inquiries arrive after hours",
            description:
              "Interested patients write when the front desk is closed, and they expect an answer anyway.",
          },
          {
            title: "The same questions, over and over",
            description:
              "Location, consultation process, financing, availability and preparation questions consume your team's day.",
          },
          {
            title: "Unstructured procedure interest",
            description:
              "What each patient actually wants stays buried in a message thread instead of organized in the CRM.",
          },
          {
            title: "Clinical questions in the wrong hands",
            description:
              "Safety, eligibility, symptoms and case-specific recommendations need reliable escalation to a person.",
          },
          {
            title: "Drop-off before the consultation",
            description:
              "Interested patients stop replying before choosing, confirming or attending a consultation.",
          },
          {
            title: "No visibility from campaign to consultation",
            description:
              "Reports show lead totals without showing which inquiries turned into consultation opportunities.",
          },
        ],
      },
      journey: {
        eyebrow: "Aesthetic patient journey",
        title:
          "Automation supports the consultation. Clinical decisions stay with clinicians.",
        description:
          "Every step improves responsiveness and organization without asking AI to judge medical suitability.",
        steps: [
          {
            label: "Procedure interest captured",
            description:
              "A patient responds to a surgical or nonsurgical campaign, your website, a social channel or a referral.",
          },
          {
            label: "Immediate bilingual acknowledgment",
            description:
              "The inquiry is answered, recorded and routed into the practice's opportunity pipeline.",
          },
          {
            label: "Administrative questions answered",
            description:
              "Approved information about the practice, consultation process, location and policies is delivered consistently.",
          },
          {
            label: "Clinical questions escalated",
            description:
              "Safety, symptoms, candidacy, treatment recommendations and exceptions go to authorized people.",
          },
          {
            label: "Consultation and follow-up managed",
            description:
              "Booking, reminders, rescheduling, missed appointments and long-term interest stay visible and actionable.",
          },
        ],
      },
      capabilities: {
        eyebrow: "Inside the system",
        title:
          "A patient-acquisition system built for consultation-driven care",
        description:
          "Campaigns and conversations connect to a controlled appointment journey your team can supervise.",
        items: [
          {
            title: "Procedure acquisition campaigns",
            description:
              "Campaigns and conversion paths aligned to the surgical or nonsurgical procedures you actually want to grow.",
          },
          {
            title: "AI patient concierge",
            description:
              "Approved English and Spanish administrative communication, available well beyond front-desk hours.",
          },
          {
            title: "Intent and readiness capture",
            description:
              "Procedure category, language, consultation interest and configured administrative facts stay organized.",
          },
          {
            title: "Protected clinical boundaries",
            description:
              "Eligibility, diagnosis, symptoms, complications and medical advice are routed to qualified people.",
          },
          {
            title: "Consultation lifecycle",
            description:
              "Availability, booking, confirmation, reminders, cancellation and rescheduling work as one process.",
          },
          {
            title: "Social inquiry automation",
            description:
              "Configured Facebook and Instagram comments or messages enter controlled response and follow-up paths.",
          },
        ],
      },
      packagesTitle: "Choose the aesthetic growth level that fits you today.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Aesthetic Consultation Capture",
          price: "$790",
          setup: "$597 one-time setup",
          description:
            "Generate procedure inquiries, organize every opportunity and automate the first follow-up.",
          idealFor:
            "Aesthetic practices that need a dependable acquisition and consultation follow-up foundation.",
          highlights: [
            "One priority acquisition channel",
            "Procedure-focused conversion path",
            "CRM, follow-up, booking and reminders",
          ],
          details: [
            {
              title: "Managed aesthetic acquisition",
              description:
                "We select and manage one priority channel based on the procedure, market demand, creative assets and patient intent.",
            },
            {
              title: "Procedure-focused conversion page",
              description:
                "One landing page or lead form presenting the consultation opportunity with clear expectations and next steps.",
            },
            {
              title: "One centralized inquiry pipeline",
              description:
                "Every connected form and ad inquiry becomes a visible opportunity with source, stage, owner and history.",
            },
            {
              title: "Immediate administrative follow-up",
              description:
                "Rule-based messages acknowledge the inquiry and point patients to approved consultation information.",
            },
            {
              title: "Consultation calendar and reminders",
              description:
                "Booking links, confirmations, reminders, rescheduling and cancellation instructions reduce manual work.",
            },
            {
              title: "Monthly campaign review",
              description:
                "We review lead sources, response activity, consultation opportunities and the next optimization decisions.",
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
            "Answer around the clock, organize patient intent, support booking and hand sensitive conversations to your team.",
          idealFor:
            "Practices with steady procedure inquiries or a heavy load of repetitive bilingual conversations.",
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
                "The acquisition, conversion page, CRM, automated follow-up, calendar, reminder and reporting foundation stays included.",
            },
            {
              title: "Approved practice knowledge",
              description:
                "The assistant uses approved information about the practice, procedures, consultation process, location and policies.",
            },
            {
              title: "English and Spanish responses",
              description:
                "The conversation follows the patient's language without switching unpredictably or mixing the two.",
            },
            {
              title: "Procedure-interest capture",
              description:
                "Configured procedure categories, consultation intent and safe administrative facts sync with the CRM.",
            },
            {
              title: "Consultation booking support",
              description:
                "The assistant guides interested patients toward configured availability and booking workflows.",
            },
            {
              title: "Human clinical escalation",
              description:
                "Safety, symptoms, candidacy, medical advice, complaints and unusual cases go to authorized team members.",
            },
            {
              title: "Conversation improvement",
              description:
                "We review safe fallbacks, common questions and handoff reasons to keep the experience clear and reliable.",
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
            "Combine multichannel acquisition, AI conversion, reactivation and growth management.",
          idealFor:
            "Established aesthetic practices ready to scale procedure campaigns and the full consultation journey.",
          highlights: [
            "Everything in DigitalFace AI",
            "Up to two acquisition channels",
            "Reactivation, attribution and growth strategy",
          ],
          details: [
            {
              title: "Everything in DigitalFace AI",
              description:
                "The complete acquisition, CRM, automation, AI communication, appointment, clinical handoff and reporting system stays included.",
            },
            {
              title: "Multichannel acquisition",
              description:
                "Up to two justified channels selected according to procedure demand, patient intent, geography, creative and budget.",
            },
            {
              title: "Multiple consultation campaigns",
              description:
                "Campaigns and conversion paths can support more than one approved procedure priority within the agreed scope.",
            },
            {
              title: "Patient-interest reactivation",
              description:
                "Older inquiries can be segmented and re-engaged with practice-approved consultation opportunities.",
            },
            {
              title: "Comment-to-conversation flows",
              description:
                "Selected Facebook and Instagram engagement enters controlled reply, direct-message and capture workflows.",
            },
            {
              title: "Conversion and attribution review",
              description:
                "We connect campaign sources to consultation stages and improve pages, messages and follow-up logic.",
            },
            {
              title: "Monthly aesthetic growth strategy",
              description:
                "Procedure priorities, campaign performance, consultation flow and the next optimization cycle, reviewed together.",
            },
          ],
          cta: "Build My Aesthetic Growth System",
        },
      ],
      faqTitle: "What aesthetic practices usually ask us",
      faq: [
        {
          question:
            "Can the AI tell a patient which procedure is right for them?",
          answer:
            "No. The AI shares approved administrative information and captures interest. Procedure recommendations, candidacy, diagnosis and medical advice stay with qualified clinicians.",
        },
        {
          question: "Can staff take over sensitive conversations?",
          answer:
            "Yes. Human handoff and ownership controls are part of the model, so your team can step in the moment a conversation becomes clinical, urgent or sensitive.",
        },
        {
          question: "Can it manage booking and rescheduling?",
          answer:
            "Yes, when connected to a supported calendar with configured availability. The exact booking, confirmation, cancellation and rescheduling scope is defined during implementation.",
        },
        {
          question: "Can the system respond to social media inquiries?",
          answer:
            "Yes. Facebook and Instagram lead, message or comment workflows can be connected when they are included in the selected package and channel scope.",
        },
        {
          question: "Do you promise a number of patients or procedures?",
          answer:
            "No. We build and manage the acquisition and conversion system. Results also depend on market demand, budget, offers, clinical fit, pricing, reputation and your own consultation process.",
        },
      ],
      booking: {
        title:
          "Find the gaps between procedure interest and a booked consultation.",
        description:
          "We review your acquisition channels, response process, consultation journey, handoff rules and follow-up before recommending a package.",
        assessmentCta: "Book an Aesthetic Growth Assessment",
        proposalTitle: "Need a custom aesthetic workflow?",
        proposalDescription:
          "Ask for a scoped proposal covering multiple locations, international patients, procedure-specific intake, social automation or another process in your practice.",
        proposalCta: "Request a Custom Aesthetic Proposal",
      },
    },

    "med-spas": {
      navLabel: "Med Spas",
      industryLabel: "Med Spa Growth System",
      metadata: {
        title: "Med Spa Growth System | DigitalFace Marketing",
        description:
          "Turn treatment interest into booked and returning clients with managed advertising, AI booking, reactivation and review workflows.",
      },
      hero: {
        eyebrow: "DigitalFace for Med Spas",
        title: "Turn treatment interest into booked and returning clients.",
        description:
          "One system connecting med-spa advertising, fast response, AI conversations, appointment booking, reactivation and performance tracking.",
        primaryCta: "Book a Med Spa Growth Assessment",
        secondaryCta: "See the med spa system",
        visualTitle: "Med spa booking journey",
        visualStages: [
          "Treatment inquiry captured",
          "Booking conversation active",
          "Appointment and follow-up ready",
        ],
      },
      stats: [
        { value: "24/7", label: "Inquiry coverage" },
        { value: "EN + ES", label: "Bilingual communication" },
        { value: "One view", label: "Every opportunity tracked" },
      ],
      problem: {
        eyebrow: "The booking gap",
        title:
          "Your team should be treating clients, not chasing every Instagram message by hand.",
        description:
          "DigitalFace keeps promotional interest, booking conversations and retention moving without adding more inbox chaos.",
        items: [
          {
            title: "Inquiries scattered everywhere",
            description:
              "Questions arrive through ads, comments, direct messages, forms and calls with no clear owner.",
          },
          {
            title: "Promotion leads go cold",
            description:
              "High-intent prospects lose interest when an offer is not acknowledged and followed up quickly.",
          },
          {
            title: "The same pricing questions daily",
            description:
              "Your team spends hours answering the same approved administrative questions across channels.",
          },
          {
            title: "Calendar gaps and no-shows",
            description:
              "Confirmations, reminders, rescheduling and recovery all depend on someone remembering every step.",
          },
          {
            title: "A dormant client database",
            description:
              "Past clients and older contacts are never segmented for seasonal offers, rebooking or reactivation.",
          },
          {
            title: "Reviews left to chance",
            description:
              "Good experiences do not reliably turn into reviews, referrals and repeat visits.",
          },
        ],
      },
      journey: {
        eyebrow: "Med spa client journey",
        title: "From promotion response to appointment, review and rebooking.",
        description:
          "The system coordinates acquisition and retention while your providers and front desk stay in control of sensitive conversations.",
        steps: [
          {
            label: "Treatment interest captured",
            description:
              "Someone responds to a promotion, social post, ad, your website, a message or a referral.",
          },
          {
            label: "Immediate response",
            description:
              "The inquiry gets an acknowledgment in English or Spanish and enters the med-spa pipeline.",
          },
          {
            label: "Approved questions answered",
            description:
              "Configured information about treatments, promotions, location, policies and availability goes out consistently.",
          },
          {
            label: "Appointment supported",
            description:
              "The client is guided toward booking, confirmation, reminders, rescheduling or a staff takeover when needed.",
          },
          {
            label: "Retention continues",
            description:
              "Review requests, rebooking, missed-appointment recovery and approved reactivation campaigns extend the relationship.",
          },
        ],
      },
      capabilities: {
        eyebrow: "Inside the system",
        title:
          "Built for the fast mix of promotions, appointments and repeat treatments",
        description:
          "Social demand connects to a visible client journey, and retention opportunities stop disappearing.",
        items: [
          {
            title: "Treatment promotion campaigns",
            description:
              "Meta, Instagram, Google or another justified channel selected around the offer and the local market.",
          },
          {
            title: "AI booking concierge",
            description:
              "Approved English and Spanish replies handle common questions and booking intent beyond business hours.",
          },
          {
            title: "Promotion and interest tracking",
            description:
              "The system records which treatment, campaign or offer brought each opportunity into the pipeline.",
          },
          {
            title: "Appointment lifecycle",
            description:
              "Booking, reminders, rescheduling, cancellations, missed appointments and recovery all connect.",
          },
          {
            title: "Client reactivation",
            description:
              "Approved segments receive relevant seasonal, membership, package or rebooking campaigns.",
          },
          {
            title: "Reviews and repeat visits",
            description:
              "Configured post-visit journeys request feedback, support rebooking and keep client history visible.",
          },
        ],
      },
      packagesTitle: "Choose the med spa growth level that fits you today.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Med Spa Client Capture",
          price: "$790",
          setup: "$597 one-time setup",
          description:
            "Generate treatment inquiries, organize every contact and automate the path to a booking.",
          idealFor:
            "Med spas that need a dependable promotion, capture and appointment follow-up foundation.",
          highlights: [
            "One priority acquisition channel",
            "Treatment promotion landing path",
            "CRM, follow-up, booking and reminders",
          ],
          details: [
            {
              title: "Managed med spa acquisition",
              description:
                "We select and manage one priority channel, often Meta or Google, based on the offer, local demand, assets and budget.",
            },
            {
              title: "Treatment promotion conversion path",
              description:
                "One landing page or lead form aligned to the selected treatment, the offer and the booking expectation.",
            },
            {
              title: "One client-opportunity pipeline",
              description:
                "Connected ad and form inquiries enter one visible pipeline with source, treatment interest and status.",
            },
            {
              title: "Immediate automated follow-up",
              description:
                "Rule-based messages acknowledge the inquiry and point people to approved information and booking.",
            },
            {
              title: "Confirmations and reminders",
              description:
                "Booking links, confirmations, reminders, rescheduling and cancellation instructions reduce calendar friction.",
            },
            {
              title: "Monthly promotion review",
              description:
                "We review acquisition sources, booking opportunities, response activity and the next campaign decisions.",
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
            "Answer approved treatment questions, organize intent, support booking and pass conversations to your team.",
          idealFor:
            "Med spas with steady social inquiry volume, repetitive questions or an overloaded front desk.",
          featured: true,
          highlights: [
            "Everything in DigitalFace Capture",
            "Bilingual AI booking communication",
            "Treatment interest, booking and handoff",
          ],
          details: [
            {
              title: "Everything in DigitalFace Capture",
              description:
                "The acquisition, promotion page, CRM, automated follow-up, calendar, reminder and reporting foundation stays included.",
            },
            {
              title: "Approved med spa knowledge",
              description:
                "The assistant uses configured information about treatments, promotions, location, hours, pricing policies and availability.",
            },
            {
              title: "English and Spanish conversations",
              description:
                "The assistant answers in the client's language and keeps the conversation consistent throughout.",
            },
            {
              title: "Treatment-interest capture",
              description:
                "Configured treatment categories, offer interest, language and booking intent are organized in the CRM.",
            },
            {
              title: "Appointment assistance",
              description:
                "The assistant guides interested clients toward configured availability and booking workflows.",
            },
            {
              title: "Human and clinical handoff",
              description:
                "Medical questions, contraindications, symptoms, complaints, exceptions and staff requests are escalated.",
            },
            {
              title: "AI monitoring and improvement",
              description:
                "We review common questions, safe fallbacks and handoff patterns to keep improving the client experience.",
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
            "Connect multichannel promotion, AI booking, reactivation, reviews and growth management.",
          idealFor:
            "Established med spas ready to scale several treatments and work on acquisition and retention together.",
          highlights: [
            "Everything in DigitalFace AI",
            "Up to two acquisition channels",
            "Reactivation, reviews and growth strategy",
          ],
          details: [
            {
              title: "Everything in DigitalFace AI",
              description:
                "The complete acquisition, CRM, automation, AI communication, appointment, handoff and reporting system stays included.",
            },
            {
              title: "Multichannel treatment acquisition",
              description:
                "Up to two justified channels selected according to the treatment mix, local market, creative assets and budget.",
            },
            {
              title: "Multiple treatment campaigns",
              description:
                "Campaigns and conversion paths can support more than one approved treatment or promotion within the agreed scope.",
            },
            {
              title: "Client database reactivation",
              description:
                "Older contacts and past clients are segmented for relevant treatment, seasonal, membership or rebooking campaigns.",
            },
            {
              title: "Review and rebooking workflows",
              description:
                "Post-visit journeys request feedback, encourage the right next appointment and preserve client history.",
            },
            {
              title: "Comment-to-conversation flows",
              description:
                "Selected Facebook and Instagram engagement enters controlled reply, direct-message and capture paths.",
            },
            {
              title: "Monthly med spa growth strategy",
              description:
                "Treatment priorities, campaign performance, booking conversion, retention and the next optimization cycle, reviewed together.",
            },
          ],
          cta: "Build My Med Spa Growth System",
        },
      ],
      faqTitle: "What med spas usually ask us",
      faq: [
        {
          question:
            "Can the system answer questions about treatments and promotions?",
          answer:
            "Yes, when the answers are approved by the med spa and administrative in nature. Clinical suitability, contraindications, diagnosis and personalized medical advice stay with qualified providers.",
        },
        {
          question: "Can it handle Instagram and Facebook inquiries?",
          answer:
            "Yes. Lead forms, selected messaging paths and configured comment workflows connect to the system when they are included in scope.",
        },
        {
          question: "Can it reactivate previous clients?",
          answer:
            "Yes. Approved CRM segments can receive campaigns for seasonal offers, treatment rebooking, memberships or other configured opportunities.",
        },
        {
          question: "Can staff take over a conversation?",
          answer:
            "Yes. Your team can take ownership whenever a client asks for a person, or when a conversation becomes clinical, sensitive, urgent or falls outside the approved knowledge.",
        },
        {
          question: "Do you produce professional photos and video?",
          answer:
            "Professional production is not included. The med spa supplies approved raw photos and video, and we adapt the agreed assets for campaigns and conversion paths.",
        },
      ],
      booking: {
        title:
          "Find the gaps between treatment interest, booking and repeat visits.",
        description:
          "We review your promotions, social inquiry flow, response process, calendar, reactivation and client follow-up before recommending a package.",
        assessmentCta: "Book a Med Spa Growth Assessment",
        proposalTitle: "Need a custom med spa workflow?",
        proposalDescription:
          "Ask for a scoped proposal covering memberships, multiple locations, review automation, treatment-specific intake or another custom process.",
        proposalCta: "Request a Custom Med Spa Proposal",
      },
    },
  },
};
