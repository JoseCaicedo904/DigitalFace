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
      moreLabel: "More from DigitalFace",
      homeLink: "Patient acquisition systems for clinics",
      systemLink: "How the patient acquisition system works",
      plansLink: "Plans and pricing",
      otherIndustriesLabel: "Other practice types",
    },
    heroVisual: {
      label: "See how it works",
      stage: "Stage",
      bilingual: "English and Spanish",
      handover: "Your team can step in",
    },
    heroMedia: {
      eyebrow: "Handled by DigitalFace",
    },
    capabilitiesDisclaimer:
      "DigitalFace automates administrative communication and business workflows. Licensed professionals keep full clinical responsibility.",
    packages: {
      eyebrow: "Choose your plan",
      description:
        "We set it up and manage it. Choose the help your practice needs.",
      expandLabel: "See what’s included",
      idealFor: "Ideal for",
      customProposal: "Request a Custom Plan",
    },
    proof: {
      eyebrow: "Systems delivered",
      title: "See what we’ve built.",
      description:
        "Two live client systems for patient communication, booking and follow-up.",
      activeLabel: "Active client",
    },
    faq: {
      eyebrow: "Questions before you book",
    },
    booking: {
      eyebrow: "Ready to talk?",
      ctaLabel: "Choose a time",
      customScopeLabel: "Need something more?",
      privacyNote:
        "The final form should collect only what is needed to scope the request, and link to the published privacy policy.",
    },
    mobileCta: "Book a Call",
  },

  clientStories: {
    diego: {
      id: "diego",
      name: "Dr. Diego Sinisterra",
      sector: "Aesthetic Medicine",
      summary:
        "Patient replies and appointment support for an aesthetic practice.",
      delivered: [
        "AI replies in English and Spanish",
        "Appointment booking and follow-up",
        "Facebook and Instagram comment replies",
        "Assigned follow-up, error handling and staff takeover",
      ],
    },
    jennifer: {
      id: "jennifer",
      name: "Dra. Jennifer Sinisterra",
      sector: "Cosmetic dentistry and international patients",
      summary: "Bilingual patient intake, organized for staff review.",
      delivered: [
        "AI replies in English and Spanish",
        "Patient photo and document intake",
        "WhatsApp, shared inbox, CRM and Drive kept in sync",
        "Review tasks and staff takeover",
      ],
    },
  },

  industries: {
    "dental-practices": {
      navLabel: "Dental Practices",
      industryLabel: "Dental Growth System",
      metadata: {
        title: "Dental Marketing & Patient Acquisition | DigitalFace Marketing",
        description:
          "Dental marketing, bilingual follow-up and appointment booking for implant, veneer and smile-design inquiries. DigitalFace connects your ads, AI and CRM.",
      },
      hero: {
        eyebrow: "DigitalFace for Dental Practices",
        title: "Turn dental inquiries into booked consultations.",
        description:
          "Dental marketing, patient follow-up and appointment scheduling, handled for you. Focus on care while we help interested patients take the next step.",
        primaryCta: "Book a Dental Marketing Call",
        secondaryCta: "See How It Works",
        visualTitle: "Dental inquiry journey",
        visualStages: [
          "Veneer inquiry received",
          "Patient gets an answer",
          "Consultation booked",
        ],
        mediaHeadline: "Stay chairside. We handle the follow-up.",
      },
      stats: [
        { value: "24/7", label: "New patient inquiries answered" },
        { value: "EN + ES", label: "Bilingual patient communication" },
        {
          value: "Attended",
          label: "Tracked, not just booked",
        },
      ],
      problem: {
        eyebrow: "The conversion gap",
        title:
          "Your practice may not need more leads. It may need a better way to convert the ones you already get.",
        description:
          "Dental decisions rarely happen in one message. DigitalFace keeps every inquiry organized and moving while your clinical team stays with patients.",
        items: [
          {
            title: "The inquiry cools before anyone answers",
            description:
              "Implant, veneer and smile design questions arrive while your team is chairside, and by the time someone replies the patient has stopped answering or booked elsewhere.",
          },
          {
            title: "Case detail scattered across inboxes",
            description:
              "Photos, treatment interest, intake notes and financing questions end up spread across inboxes instead of sitting on one patient record, answered a different way each time.",
          },
          {
            title: "No-shows and unscheduled treatment",
            description:
              "Inconsistent confirmations, reminders and recall leave gaps in the schedule and treatment plans sitting unbooked.",
          },
          {
            title: "No line from campaign to case acceptance",
            description:
              "The practice sees lead totals, not which campaigns produced attended consultations and accepted treatment plans.",
          },
        ],
      },
      gallery: {
        eyebrow: "Inside the practice",
        title: "Keep treatment interest from slipping away.",
        description:
          "Late replies, scattered notes and missed follow-ups cost your front desk time.",
        moments: [
          {
            title: "Answer while you treat",
            description:
              "Help patients asking about implants, veneers and smile design take the next step.",
            alt: "Dentist comparing a shade guide with a smiling young patient",
          },
          {
            title: "Keep the next visit on track",
            description:
              "Confirmations, reminders and rescheduling help manage gaps in the calendar.",
            alt: "Treatment light and instruments in a modern dental operatory",
          },
          {
            title: "Give your coordinator the full picture",
            description:
              "Keep photos, treatment interest and notes together for patient follow-up.",
            alt: "Dental clinic room where staff attend a patient together",
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
              "Campaign strategy for implants, veneers, smile design and the high-value cases you want more of.",
          },
          {
            title: "AI dental concierge and patient intake",
            description:
              "Bilingual administrative replies built from practice-approved answers, with intake details and patient photos arriving organized for your coordinator and clear handoff rules for anything clinical.",
          },
          {
            title: "Consultation scheduling and case pipeline",
            description:
              "Availability, booking, confirmations, reminders and rescheduling work as one process, and every consultation opportunity keeps a visible stage, a history, an owner and an escalation path.",
          },
          {
            title: "Recall and reactivation",
            description:
              "No-shows, unanswered inquiries and unscheduled treatment get structured follow-up instead of being forgotten.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Attract",
        title: "Reach patients interested in your treatments.",
        description:
          "Activate dental campaigns on Meta Ads, Google Ads or TikTok Ads around the treatment you want to promote, within your plan’s channel limit and custom scope.",
        ctaLabel: "Talk About Dental Campaigns",
        phoneCaption: "Sample ad and consultation request",
        bridge: "Next: answer the treatment inquiry.",
        stages: [
          {
            title: "Show the treatment",
            description:
              "Put implants, veneers or smile design in front of prospective patients.",
          },
          {
            title: "Offer a consultation",
            description: "Give interested patients a clear next step.",
          },
          {
            title: "Capture their interest",
            description:
              "Collect treatment interest, language and contact details.",
          },
          {
            title: "Send it to your team",
            description: "Keep the request ready for follow-up in one place.",
          },
        ],
        script: {
          clockLabel: "8:12",
          sponsoredLabel: "Sponsored",
          posts: [
            {
              author: "Sofía L.",
              meta: "1h",
              caption: "Finally repainted the kitchen. Only took a year.",
            },
            {
              author: "Martín R.",
              meta: "3h",
              caption: "Game night again. Still undefeated.",
            },
            {
              author: "Lucía T.",
              meta: "5h",
              caption: "Beach day with the cousins.",
            },
          ],
          form: {
            subtitle: "Consultation request",
            intentQuestion: "What are you considering?",
            contactQuestion: "Where can the practice reach you?",
            nameLabel: "Name",
            phoneLabel: "WhatsApp",
            submitLabel: "Send",
            sentTitle: "Request sent",
            sentNote:
              "The practice has your details and will write back shortly.",
            systemLabel: "In your DigitalFace system",
            statuses: [
              "New consultation request",
              "Treatment interest saved",
              "Ready for follow-up",
            ],
          },
          ads: [
            {
              market: "dental",
              business: "Lumina Dental Studio",
              caption:
                "You have been thinking about it for a while. Come find out what your smile would actually need.",
              offer: "Smile study with the doctor",
              ctaLabel: "Book now",
              creativeEyebrow: "Smile design",
              creativeTitle: "Know the plan before you start",
              options: ["Veneers", "Whitening", "Not sure yet"],
              choice: 0,
              lead: { name: "Emily Carter", phone: "+1 (305) 555 0142" },
            },
            {
              market: "dental",
              business: "Lumina Dental Studio",
              caption:
                "A missing tooth changes how you eat and how you smile. Ask what an implant would involve in your case.",
              offer: "Implant consultation",
              ctaLabel: "Get info",
              creativeEyebrow: "Dental implants",
              creativeTitle: "Chew and smile like before",
              options: ["One tooth", "Several teeth", "Full arch"],
              choice: 1,
              lead: { name: "Jorge Medina", phone: "+1 (786) 555 0164" },
            },
          ],
          transcriptLabel:
            "Sample dental advertisement and consultation request, shown as an illustration.",
        },
      },
      conversationDemo: {
        eyebrow: "02 · Convert",
        title: "Let AI answer while you’re chairside.",
        description:
          "Your AI chatbot answers approved questions and helps patients book. Photos and clinical questions go to your team.",
        ctaLabel: "Talk About Patient Follow-Up",
        phoneCaption: "Sample conversation",
        stages: [
          {
            title: "Answer after hours",
            description:
              "Respond to implant, veneer and smile design inquiries while the practice is closed.",
          },
          {
            title: "Keep case details together",
            description:
              "Save photos, treatment interest and intake notes on one record.",
          },
          {
            title: "Use your approved answers",
            description:
              "Explain your financing policies, process and availability.",
          },
          {
            title: "Bring in your team",
            description: "Pass clinical and case-specific questions to staff.",
          },
        ],
        script: {
          contact: "Your Practice",
          status: "Replies in seconds",
          typingStatus: "typing…",
          clockLabel: "8:27",
          dayLabel: "Saturday · 8:24 AM",
          composerPlaceholder: "Message",
          transcriptLabel:
            "Sample conversation between a prospective dental patient and an automated practice assistant.",
          patientLabel: "Patient",
          clinicLabel: "Practice",
          steps: [
            {
              kind: "patient",
              stage: 0,
              time: "8:24 AM",
              pauseMs: 700,
              text: "Good morning! I am missing two lower molars. Do you place implants?",
            },
            {
              kind: "assistant",
              stage: 0,
              time: "8:24 AM",
              pauseMs: 600,
              typingMs: 1400,
              text: "Good morning, Andrés. Yes, implants are one of our main treatments. If you send a photo of the area, I will attach it to your file so the doctor sees it before your visit.",
            },
            {
              kind: "patient",
              stage: 1,
              time: "8:25 AM",
              pauseMs: 2400,
              attachment: "lower-molars.jpg",
              text: "Here it is. Do you also have payment plans?",
            },
            {
              kind: "slots",
              stage: 2,
              time: "8:26 AM",
              pauseMs: 600,
              typingMs: 1400,
              text: "Saved to your file, thank you. We do offer financing, and the doctor reviews the plan for your case at the consultation. These times are open:",
              options: ["Mon · 9:00 AM", "Tue · 4:30 PM", "Wed · 11:15 AM"],
            },
            {
              kind: "choice",
              stage: 2,
              time: "8:27 AM",
              pauseMs: 2500,
              option: 1,
              text: "Tuesday at 4:30, please.",
            },
            {
              kind: "confirmation",
              stage: 3,
              time: "8:27 AM",
              pauseMs: 600,
              typingMs: 1200,
              title: "Consultation booked",
              when: "Tuesday, 4:30 PM",
              service: "Implant consultation · 45 min",
              note: "Your photo and your financing question are already on the file, so the doctor reviews your case before you arrive.",
            },
          ],
        },
      },
      crmPipelineDemo: {
        eyebrow: "03 · Manage",
        title: "Know who needs a follow-up.",
        description:
          "See each patient’s treatment interest, messages and next step in one place. Your CRM keeps it organized.",
        ctaLabel: "Talk About Your Practice",
        boardCaption: "Sample patient journey",
        bridge: "Track inquiries through booked and attended consultations.",
        stages: [
          {
            title: "Inquiry received",
            description: "The patient’s request appears, even on weekends.",
          },
          {
            title: "Patient contacted",
            description: "Your front desk can see the first reply.",
          },
          {
            title: "Treatment interest saved",
            description: "The treatment and patient photo stay together.",
          },
          {
            title: "Consultation requested",
            description: "See the requested time and what needs confirmation.",
          },
        ],
        script: {
          workspaceLabel: "Patient opportunities",
          liveLabel: "Organized",
          boardLabel: "Inquiry progress",
          detailsLabel: "What your team knows",
          activityLabel: "Activity",
          nextStepLabel: "Next step",
          movedLabel: "Moved forward",
          stageLabel: "Stage",
          ofLabel: "of",
          lead: {
            name: "Jorge Medina",
            initials: "JM",
            summary: "New treatment inquiry",
            channel: "WhatsApp inquiry",
          },
          stages: [
            {
              label: "New inquiry",
              cardStatus: "Just received",
              activity: "Inquiry received on Saturday",
              nextStep: "Send the first reply",
              details: [{ label: "Source", value: "Meta Ads" }],
            },
            {
              label: "Contacted",
              cardStatus: "Conversation started",
              activity: "Answered while the practice was closed",
              nextStep: "Confirm what the patient needs",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Channel", value: "WhatsApp" },
              ],
            },
            {
              label: "Treatment interest",
              cardStatus: "Interest identified",
              activity: "Treatment interest and photo saved",
              nextStep: "Offer consultation times",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Channel", value: "WhatsApp" },
                { label: "Interest", value: "Dental implant" },
                { label: "Attached", value: "Patient photo" },
              ],
            },
            {
              label: "Consultation requested",
              cardStatus: "Ready to confirm",
              activity: "Consultation time requested",
              nextStep: "Confirm Tuesday at 4:30 and send the reminder",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Interest", value: "Dental implant" },
                { label: "Asked about", value: "Financing" },
                { label: "Requested", value: "Tuesday 4:30 PM" },
              ],
            },
          ],
          transcriptLabel:
            "Sample patient journey showing one dental inquiry becoming an organized consultation opportunity with a clear next step.",
        },
      },
      appointmentCommitment: {
        eyebrow: "Optional · DigitalFace AI and above",
        title: "Confirm consultations with an optional deposit.",
        description:
          "Choose which treatments need a reservation payment before the consultation is confirmed.",
        steps: [
          {
            label: "Consultation requested",
            caption: "The patient picks a time from your real availability.",
          },
          {
            label: "Reservation requested",
            caption:
              "A payment request goes out with the booking, only for the treatments you choose.",
          },
          {
            label: "Consultation confirmed",
            caption:
              "Once the payment clears, the status updates in your pipeline.",
          },
          {
            label: "Reminders",
            caption: "Confirmations and reminders continue exactly as before.",
          },
          {
            label: "Attended consultation",
            caption: "Your clinical team walks into a committed appointment.",
          },
        ],
        points: [
          {
            title: "Ask for commitment",
            description:
              "A reservation payment can help reduce casual bookings.",
          },
          {
            title: "See what is confirmed",
            description:
              "Distinguish paid reservations from appointment requests.",
          },
          {
            title: "Keep payments in your account",
            description:
              "Your payment provider collects the payment. DigitalFace connects the booking step and never holds your funds.",
          },
        ],
        note: "Optional and configured per treatment: you decide which consultations ask for a reservation and how much. A reservation strengthens commitment; it is not a guarantee of attendance.",
      },
      packagesTitle: "Choose your dental plan.",
      packages: [
        {
          id: "capture",
          nicheName: "Organize dental inquiries",
          cta: "Talk About Capture",
        },
        {
          id: "ai",
          nicheName: "Add AI patient follow-up",
          cta: "Talk About DigitalFace AI",
        },
        {
          id: "sales-system",
          nicheName: "Scale dental acquisition",
          cta: "Discuss My Sales System",
        },
      ],
      faqTitle: "Before you book",
      faqDescription: "Quick answers about your team and the system.",
      faq: [
        {
          question: "Can patients send photos?",
          answer:
            "Yes, within your agreed scope. Photos and intake details go to your team for review. The system does not analyze images.",
        },
        {
          question: "Can AI recommend a treatment?",
          answer:
            "No. It shares approved administrative answers. Diagnosis, eligibility and treatment recommendations stay with clinicians.",
        },
        {
          question: "Can staff take over?",
          answer: "Yes. Your team can take ownership and pause the AI.",
        },
        {
          question: "Can you follow up on unscheduled treatment?",
          answer:
            "Yes, within an agreed scope. Existing-patient recall and bulk reactivation are quoted separately. Case-specific clinical questions go to your team.",
        },
        {
          question: "Does it work for international patients?",
          answer:
            "Yes. Bilingual answers, media intake, consultation preparation and staff review can be included in your agreed scope.",
        },
      ],
      booking: {
        title: "Want more dental consultations?",
        description:
          "Book a call. We’ll review your inquiries and recommend a plan.",
        proposalTitle: "Need a custom dental plan?",
        proposalDescription:
          "Tell us about your locations, patient intake or treatment follow-up needs.",
      },
    },

    "aesthetic-medicine": {
      navLabel: "Aesthetic Medicine",
      industryLabel: "Aesthetic Practice Growth System",
      metadata: {
        title: "Aesthetic Clinic Marketing | DigitalFace Marketing",
        description:
          "Marketing and patient follow-up for aesthetic medicine and plastic surgery practices. DigitalFace connects ads, inquiry qualification, CRM and consultation booking.",
      },
      hero: {
        eyebrow: "DigitalFace for Aesthetic Medicine and Plastic Surgery",
        title: "Turn procedure interest into consultations.",
        description:
          "Aesthetic medicine marketing, patient replies and consultation booking, handled for you. Your clinicians stay in charge of medical decisions.",
        primaryCta: "Book an Aesthetic Marketing Call",
        secondaryCta: "See How It Works",
        visualTitle: "Aesthetic consultation journey",
        visualStages: [
          "Procedure inquiry received",
          "Patient interest recorded",
          "Consultation booked",
        ],
        mediaHeadline: "We handle the follow-up. You handle the care.",
      },
      stats: [
        { value: "24/7", label: "Procedure inquiries answered" },
        { value: "Clinician-led", label: "Every clinical question escalated" },
        {
          value: "One record",
          label: "Interest, questions and history",
        },
      ],
      problem: {
        eyebrow: "The consultation gap",
        title:
          "High-value procedure inquiries are too important to lose to a slow reply.",
        description:
          "DigitalFace handles the administrative journey around the consultation and keeps clinical boundaries clear.",
        items: [
          {
            title:
              "The inquiry arrives at ten at night, the questions arrive all day",
            description:
              "Interested patients write after hours and compare two or three practices before anyone opens the inbox, while consultation fee, process, preparation and availability questions consume your coordinators' day.",
          },
          {
            title: "Procedure interest never captured",
            description:
              "The area a patient asked about stays buried in a thread instead of on the record, so the coordinator restarts the conversation.",
          },
          {
            title: "Clinical questions in the wrong hands",
            description:
              "Suitability, safety and questions about a specific case need a reliable route to a qualified person, every single time.",
          },
          {
            title: "No line from campaign to attended consultation",
            description:
              "Patients stop replying, cancel late or simply do not arrive, and the reports show lead totals rather than which inquiries became attended consultations and treatment plans.",
          },
        ],
      },
      gallery: {
        eyebrow: "Inside the practice",
        title: "Less inbox work. More time with patients.",
        description:
          "Keep consultation requests moving while clinical questions reach the right person.",
        moments: [
          {
            title: "Keep medical decisions with clinicians",
            description:
              "AI answers approved pricing and scheduling questions. Your team handles medical advice.",
            alt: "Physician assessing a patient's face during an aesthetic consultation",
          },
          {
            title: "Know what the patient wants",
            description:
              "Review treatment interest, history and submitted photos together.",
            alt: "Clinician examining a patient's face during an aesthetic assessment",
          },
          {
            title: "Keep consultations organized",
            description:
              "See bookings, optional deposits and follow-up in one place.",
            alt: "Modern aesthetic medicine treatment room prepared for a patient",
          },
        ],
      },
      capabilities: {
        eyebrow: "Inside the system",
        title:
          "Built for a practice where everything starts with the consultation",
        description:
          "Campaigns and conversations connect to a controlled appointment journey your team can supervise.",
        items: [
          {
            title: "Procedure acquisition and social inquiries",
            description:
              "Campaigns and conversion paths built around the procedures you want to grow: injectables, skin quality, body or surgical. Configured Facebook and Instagram comments and messages enter the same controlled response path.",
          },
          {
            title: "AI patient concierge and interest capture",
            description:
              "Approved English and Spanish administrative answers long after your coordinators go home, with procedure category, language, timing and consultation interest organized on one patient record.",
          },
          {
            title: "Protected clinical boundaries",
            description:
              "Suitability, diagnosis, symptoms, complications and medical advice are routed to qualified people, never answered by software.",
          },
          {
            title: "Consultation lifecycle",
            description:
              "Availability, booking, confirmation, reminders, cancellation and rescheduling work as one process.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Attract",
        title: "Attract interest in your procedures.",
        description:
          "Activate aesthetic-medicine campaigns on Meta Ads, Google Ads or TikTok Ads, within your plan’s channel limit and custom scope.",
        ctaLabel: "Talk About Aesthetic Campaigns",
        phoneCaption: "Sample ad and consultation request",
        bridge: "Next: help the patient book a consultation.",
        stages: [
          {
            title: "Reach prospective patients",
            description: "Show the procedures your practice wants to grow.",
          },
          {
            title: "Invite a consultation",
            description: "Make a conversation with your team the next step.",
          },
          {
            title: "Record procedure interest",
            description:
              "Save the patient’s question, language and contact details.",
          },
          {
            title: "Prepare the first reply",
            description: "Give coordinators the context they need to respond.",
          },
        ],
        script: {
          clockLabel: "9:24",
          sponsoredLabel: "Sponsored",
          posts: [
            {
              author: "Renata C.",
              meta: "2h",
              caption: "Three days of rain and the dog has opinions about it.",
            },
            {
              author: "Emilio F.",
              meta: "4h",
              caption: "New coffee place downtown. I will be back.",
            },
            {
              author: "Paola G.",
              meta: "7h",
              caption: "Sunset from the balcony, no filter needed.",
            },
          ],
          form: {
            subtitle: "Consultation request",
            intentQuestion: "What are you interested in?",
            contactQuestion: "Where can the clinic reach you?",
            nameLabel: "Name",
            phoneLabel: "WhatsApp",
            submitLabel: "Send",
            sentTitle: "Request sent",
            sentNote:
              "The clinic has your details and a coordinator will reply.",
            systemLabel: "In your DigitalFace system",
            statuses: [
              "New consultation request",
              "Procedure interest saved",
              "Ready for the team",
            ],
          },
          ads: [
            {
              market: "aesthetic",
              business: "Nova Aesthetic Clinic",
              caption:
                "Start with the consultation. The doctor will tell you what is worth doing and what is not.",
              offer: "Consultation with the doctor",
              ctaLabel: "Request consultation",
              creativeEyebrow: "Aesthetic medicine",
              creativeTitle: "An honest plan before anything else",
              options: ["Injectables", "Skin treatments", "Something else"],
              choice: 0,
              lead: { name: "Daniela Ortiz", phone: "+1 (786) 555 0119" },
            },
            {
              market: "aesthetic",
              business: "Nova Aesthetic Clinic",
              caption:
                "You have done the diet and the gym. Ask what is realistic for the part that has not moved.",
              offer: "Body assessment",
              ctaLabel: "Learn more",
              creativeEyebrow: "Body and skin",
              creativeTitle: "What is realistic for your case",
              options: ["Body contouring", "Skin tightening", "Not sure yet"],
              choice: 1,
              lead: { name: "Paula Vega", phone: "+1 (954) 555 0186" },
            },
          ],
          transcriptLabel:
            "Sample aesthetic medicine advertisement and consultation request, shown as an illustration.",
        },
      },
      conversationDemo: {
        eyebrow: "02 · Convert",
        title: "AI handles questions. Clinicians handle care.",
        description:
          "Your AI chatbot explains approved consultation details and helps with appointment scheduling. Medical questions go to your team.",
        ctaLabel: "Talk About Patient Communication",
        phoneCaption: "Sample conversation",
        stages: [
          {
            title: "Answer after hours",
            description: "Respond to procedure inquiries outside office hours.",
          },
          {
            title: "Share approved information",
            description:
              "Explain your consultation process, preparation and policies.",
          },
          {
            title: "Flag medical questions",
            description: "Send safety and candidacy questions to a clinician.",
          },
          {
            title: "Help book the consultation",
            description:
              "Keep the appointment, reminder and open questions together.",
          },
        ],
        script: {
          contact: "Your Practice",
          status: "Replies in seconds",
          typingStatus: "typing…",
          clockLabel: "6:45",
          dayLabel: "Sunday · 6:40 PM",
          composerPlaceholder: "Message",
          transcriptLabel:
            "Sample conversation between a prospective patient and an aesthetic practice, including a handover to the clinical team.",
          patientLabel: "Patient",
          clinicLabel: "Practice",
          steps: [
            {
              kind: "patient",
              stage: 0,
              time: "6:40 PM",
              pauseMs: 700,
              text: "Hi, I am interested in a mommy makeover. How does the first appointment work?",
            },
            {
              kind: "assistant",
              stage: 1,
              time: "6:40 PM",
              pauseMs: 600,
              typingMs: 1400,
              text: "Hi Daniela. It starts with a consultation with the surgeon, around 45 minutes, where you go through your goals, the options and the recovery.",
            },
            {
              kind: "patient",
              stage: 2,
              time: "6:41 PM",
              pauseMs: 2400,
              text: "Is it safe to do it while I am still breastfeeding?",
            },
            {
              kind: "note",
              stage: 2,
              pauseMs: 1500,
              text: "Valentina from the clinical team joined the chat",
            },
            {
              kind: "slots",
              stage: 2,
              time: "6:43 PM",
              pauseMs: 700,
              typingMs: 1600,
              author: "Valentina · Patient coordinator",
              text: "Hi Daniela, that one the surgeon needs to answer for your case, and he will go through it with you in person. These consultation times are open:",
              options: ["Thu · 3:00 PM", "Fri · 5:45 PM", "Mon · 10:30 AM"],
            },
            {
              kind: "choice",
              stage: 3,
              time: "6:44 PM",
              pauseMs: 2500,
              option: 1,
              text: "Friday at 5:45 works for me.",
            },
            {
              kind: "confirmation",
              stage: 3,
              time: "6:45 PM",
              pauseMs: 600,
              typingMs: 1200,
              title: "Consultation confirmed",
              when: "Friday, 5:45 PM",
              service: "Surgical consultation · 45 min",
              note: "Your question is saved on the surgeon's notes for the visit, and a reminder goes out the day before.",
            },
          ],
        },
      },
      crmPipelineDemo: {
        eyebrow: "03 · Manage",
        title: "See every inquiry and who handles it.",
        description:
          "Keep procedure interest, patient messages and consultation requests on one CRM record. Your team knows what comes next.",
        ctaLabel: "Talk About Your Practice",
        boardCaption: "Sample patient journey",
        bridge: "Follow each inquiry through consultation and follow-up.",
        stages: [
          {
            title: "Inquiry received",
            description: "The patient’s request appears, day or night.",
          },
          {
            title: "Patient answered",
            description: "Approved administrative answers stay on the record.",
          },
          {
            title: "Doctor review needed",
            description: "Medical questions are flagged for your team.",
          },
          {
            title: "Consultation requested",
            description:
              "The requested time stays visible during clinical review.",
          },
        ],
        script: {
          workspaceLabel: "Patient opportunities",
          liveLabel: "Organized",
          boardLabel: "Case progress",
          detailsLabel: "What your team knows",
          activityLabel: "Activity",
          nextStepLabel: "Next step",
          movedLabel: "Moved forward",
          stageLabel: "Stage",
          ofLabel: "of",
          lead: {
            name: "Daniela Ortiz",
            initials: "DO",
            summary: "New procedure inquiry",
            channel: "WhatsApp inquiry",
          },
          stages: [
            {
              label: "New inquiry",
              cardStatus: "Just received",
              activity: "Inquiry received after hours",
              nextStep: "Send the first reply",
              details: [{ label: "Source", value: "Meta Ads" }],
            },
            {
              label: "Answered",
              cardStatus: "Questions answered",
              activity: "Consultation process explained",
              nextStep: "Confirm the procedure of interest",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Language", value: "Spanish" },
              ],
            },
            {
              label: "Sent to the doctor",
              cardStatus: "Waiting on the doctor",
              activity: "Clinical question passed to a person",
              nextStep: "Doctor reviews the question before the reply goes out",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Language", value: "Spanish" },
                { label: "Interest", value: "Injectables" },
                { label: "For review", value: "Clinical question" },
              ],
            },
            {
              label: "Consultation requested",
              cardStatus: "Ready to confirm",
              activity: "Consultation time requested",
              nextStep: "Confirm Thursday at 10:00 once the doctor replies",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Interest", value: "Injectables" },
                { label: "Reviewed by", value: "Dr. on call" },
                { label: "Requested", value: "Thursday 10:00 AM" },
              ],
            },
          ],
          transcriptLabel:
            "Sample patient journey showing one procedure inquiry becoming an organized consultation opportunity, with the clinical question routed to a person.",
        },
      },
      appointmentCommitment: {
        eyebrow: "Optional · DigitalFace AI and above",
        title: "Confirm consultations with an optional fee.",
        description:
          "Choose which consultation types require payment before the appointment is confirmed.",
        steps: [
          {
            label: "Consultation requested",
            caption: "The patient picks a time from your real availability.",
          },
          {
            label: "Reservation requested",
            caption:
              "A payment request goes out with the booking, only for the consultations you choose.",
          },
          {
            label: "Consultation confirmed",
            caption:
              "Once the payment clears, the status updates in your pipeline.",
          },
          {
            label: "Reminders",
            caption: "Confirmations and reminders continue exactly as before.",
          },
          {
            label: "Attended consultation",
            caption: "Your provider walks into a committed appointment.",
          },
        ],
        points: [
          {
            title: "Ask for commitment",
            description:
              "A reservation payment can help reduce casual bookings.",
          },
          {
            title: "See what is confirmed",
            description:
              "Distinguish paid reservations from appointment requests.",
          },
          {
            title: "Keep payments in your account",
            description:
              "Your payment provider collects the payment. DigitalFace connects the booking step and never holds your funds.",
          },
        ],
        note: "Optional and configured per consultation type: you decide which appointments ask for a fee and how much. A consultation fee strengthens commitment; it is not a guarantee of attendance.",
      },
      packagesTitle: "Choose your aesthetic practice plan.",
      packages: [
        {
          id: "capture",
          nicheName: "Organize procedure inquiries",
          cta: "Talk About Capture",
        },
        {
          id: "ai",
          nicheName: "Add AI consultation support",
          cta: "Talk About DigitalFace AI",
        },
        {
          id: "sales-system",
          nicheName: "Scale aesthetic acquisition",
          cta: "Discuss My Sales System",
        },
      ],
      faqTitle: "Before you book",
      faqDescription: "Quick answers about your team and the system.",
      faq: [
        {
          question: "Can AI recommend a procedure?",
          answer:
            "No. It shares approved administrative information. Procedure recommendations, candidacy, diagnosis and medical advice stay with clinicians.",
        },
        {
          question: "Can staff take over?",
          answer:
            "Yes. Your team can take ownership when a conversation becomes clinical, urgent or sensitive.",
        },
        {
          question: "Can you connect social media inquiries?",
          answer:
            "Yes. Facebook and Instagram forms, messages and comment responses can be connected when included in your scope.",
        },
        {
          question: "Can you follow up with patients who never booked?",
          answer:
            "Yes. Follow-up can reconnect with inquiries that never booked. Existing-patient reminders and bulk reactivation are scoped separately. Medical questions go to your team.",
        },
        {
          question: "Do you guarantee patient numbers?",
          answer:
            "No. Results depend on demand, budget, your offer, clinical fit, pricing, reputation and your consultation process.",
        },
      ],
      booking: {
        title: "Ready for more consultation inquiries?",
        description:
          "Book a call. We’ll review your patient communication and recommend a plan.",
        proposalTitle: "Need a custom aesthetic plan?",
        proposalDescription:
          "Tell us about your locations, international patients or procedure intake needs.",
      },
    },

    "med-spas": {
      navLabel: "Med Spas",
      industryLabel: "Med Spa Growth System",
      metadata: {
        title: "Med Spa Marketing & Booking System | DigitalFace Marketing",
        description:
          "Help med spa clients book and return. DigitalFace connects paid promotions, AI follow-up, CRM, appointment booking and client reactivation.",
      },
      hero: {
        eyebrow: "DigitalFace for Med Spas",
        title: "Turn med spa interest into repeat visits.",
        description:
          "Med spa marketing, booking replies and client follow-up, handled for you. Keep treatments, packages and memberships moving.",
        primaryCta: "Book a Med Spa Marketing Call",
        secondaryCta: "See How It Works",
        visualTitle: "Med spa booking journey",
        visualStages: [
          "Offer inquiry received",
          "Booking conversation started",
          "Appointment booked",
        ],
        mediaHeadline: "Keep the conversation going after the first visit.",
      },
      stats: [
        { value: "24/7", label: "Booking requests answered" },
        { value: "EN + ES", label: "Bilingual client communication" },
        {
          value: "Rebooking",
          label: "Retention built into the calendar",
        },
      ],
      problem: {
        eyebrow: "The booking gap",
        title:
          "Your team should be treating clients, not chasing every Instagram message by hand.",
        description:
          "DigitalFace keeps promotional interest, booking conversations and retention moving without adding more inbox chaos.",
        items: [
          {
            title: "Every promotion lands in five inboxes at once",
            description:
              "Story replies, comments, direct messages, forms and calls arrive together with no clear owner, and a seasonal offer creates more of them in an afternoon than anyone can answer before the interest fades.",
          },
          {
            title: "Pricing, packages and memberships explained by hand",
            description:
              "Your team retypes the same approved answers about pricing, packages and membership terms across four channels.",
          },
          {
            title: "No-shows and unused appointment slots",
            description:
              "Confirmations, reminders, rescheduling and recovery depend on someone remembering, so rooms and providers sit idle.",
          },
          {
            title: "A client base that never comes back on its own",
            description:
              "Past clients, lapsed memberships and unfinished packages are never segmented for rebooking, and good visits do not reliably turn into reviews, referrals and a booked next appointment.",
          },
        ],
      },
      gallery: {
        eyebrow: "Inside the spa",
        title: "Spend less time chasing booking messages.",
        description:
          "Give new clients a clear next step and past clients a reason to return.",
        moments: [
          {
            title: "Reply while the offer is fresh",
            description:
              "Answer approved questions about pricing, packages and memberships.",
            alt: "Med spa staff welcoming clients at the reception desk",
          },
          {
            title: "Keep treatments uninterrupted",
            description:
              "Help clients book while your team is in the treatment room.",
            alt: "Indoor spa pool lit by candlelight",
          },
          {
            title: "Bring clients back",
            description:
              "Add separately scoped follow-up for unused packages, lapsed memberships and rebooking.",
            alt: "Lounge seating area of a premium med spa",
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
            title: "Promotion campaigns with offer attribution",
            description:
              "Meta Ads (Facebook and Instagram), Google Ads or TikTok Ads, selected within your plan’s channel limit and built around the offer, the season and the local market. Every opportunity carries the treatment, offer and source so you can see which promotions fill the calendar.",
          },
          {
            title: "AI booking concierge",
            description:
              "Approved English and Spanish replies handle pricing, packages and booking intent long after the last client leaves.",
          },
          {
            title: "Appointment lifecycle",
            description:
              "Booking, deposits, reminders, rescheduling, cancellations and no-show recovery all connect to the same calendar.",
          },
          {
            title: "Reactivation, reviews and repeat visits",
            description:
              "Approved segments such as lapsed clients, unfinished packages and expiring memberships get the campaign that fits, and journeys after the visit request a review and prompt the next booking.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Attract",
        title: "Turn your next offer into booking requests.",
        description:
          "Activate med spa campaigns on Meta Ads, Google Ads or TikTok Ads around your priority treatment or offer, within your plan’s channel limit and custom scope.",
        ctaLabel: "Talk About Med Spa Campaigns",
        phoneCaption: "Sample ad and booking request",
        bridge: "Next: answer while the offer is fresh.",
        stages: [
          {
            title: "Reach nearby clients",
            description:
              "Promote the treatments and memberships you want to grow.",
          },
          {
            title: "Make the offer clear",
            description: "Give interested clients one clear next step.",
          },
          {
            title: "Capture the request",
            description: "Save the treatment, language and contact details.",
          },
          {
            title: "Keep it ready for booking",
            description: "Keep each response and its offer together.",
          },
        ],
        script: {
          clockLabel: "1:47",
          sponsoredLabel: "Sponsored",
          posts: [
            {
              author: "Tania M.",
              meta: "45m",
              caption: "Nine kilometers before work. Still can't believe it.",
            },
            {
              author: "Caro V.",
              meta: "2h",
              caption: "The pasta turned out better than the restaurant one.",
            },
            {
              author: "Nadia R.",
              meta: "6h",
              caption: "Birthday brunch with the girls.",
            },
          ],
          form: {
            subtitle: "Booking request",
            intentQuestion: "What would you like to book?",
            contactQuestion: "Where can we text you?",
            nameLabel: "Name",
            phoneLabel: "WhatsApp",
            submitLabel: "Send",
            sentTitle: "Request sent",
            sentNote:
              "The spa has your details and will send you times shortly.",
            systemLabel: "In your DigitalFace system",
            statuses: [
              "New booking request",
              "Treatment interest saved",
              "Ready for follow-up",
            ],
          },
          ads: [
            {
              market: "medSpa",
              business: "Solene Med Spa",
              caption:
                "One facial a month, a price that stays the same, and a time that fits your week.",
              offer: "Monthly facial membership",
              ctaLabel: "Get info",
              creativeEyebrow: "Memberships",
              creativeTitle: "Skin care you actually keep up with",
              options: [
                "Monthly facial",
                "Adding treatments",
                "Just the details",
              ],
              choice: 0,
              lead: { name: "Marcela Ríos", phone: "+1 (954) 555 0173" },
            },
            {
              market: "medSpa",
              business: "Solene Med Spa",
              caption:
                "Stop planning your week around shaving. Ask about starting your sessions before the summer.",
              offer: "Laser package consultation",
              ctaLabel: "Book now",
              creativeEyebrow: "Laser hair removal",
              creativeTitle: "Start the sessions before summer",
              options: ["Legs", "Underarms", "Full body"],
              choice: 2,
              lead: { name: "Andrea Salas", phone: "+1 (305) 555 0198" },
            },
          ],
          transcriptLabel:
            "Sample med spa advertisement and booking request, shown as an illustration.",
        },
      },
      conversationDemo: {
        eyebrow: "02 · Convert",
        title: "Let AI handle the booking questions.",
        description:
          "Your AI chatbot explains approved offers, helps clients choose a time and keeps follow-up moving while you’re busy.",
        ctaLabel: "Talk About Booking Support",
        phoneCaption: "Sample conversation",
        stages: [
          {
            title: "Bring messages together",
            description:
              "Connect the social messages, forms and calls in your agreed scope.",
          },
          {
            title: "Explain the offer",
            description:
              "Answer approved questions about promotions and packages.",
          },
          {
            title: "Help choose a time",
            description:
              "Help with appointment scheduling in the conversation.",
          },
          {
            title: "Keep in touch",
            description:
              "Send appointment reminders and follow up after a missed visit.",
          },
        ],
        script: {
          contact: "Your Med Spa",
          channelLabel: "Instagram",
          status: "Replies in seconds",
          typingStatus: "typing…",
          clockLabel: "1:14",
          dayLabel: "Today · 1:12 PM",
          composerPlaceholder: "Message",
          transcriptLabel:
            "Sample Instagram conversation between a prospective client and an automated med spa assistant.",
          patientLabel: "Client",
          clinicLabel: "Med spa",
          steps: [
            {
              kind: "patient",
              stage: 0,
              time: "1:12 PM",
              pauseMs: 700,
              text: "hey! is the lip filler promo from your story still on?",
            },
            {
              kind: "assistant",
              stage: 1,
              time: "1:12 PM",
              pauseMs: 600,
              typingMs: 1300,
              text: "Hi Marcela! Yes, it runs through Sunday. Same price as the story, and the appointment takes about 30 minutes.",
            },
            {
              kind: "patient",
              stage: 2,
              time: "1:13 PM",
              pauseMs: 2200,
              text: "perfect, anything this week? i finish work at 6",
            },
            {
              kind: "slots",
              stage: 2,
              time: "1:13 PM",
              pauseMs: 600,
              typingMs: 1300,
              text: "We do. These are the evening spots left this week:",
              options: ["Wed · 6:15 PM", "Thu · 6:45 PM", "Fri · 7:00 PM"],
            },
            {
              kind: "choice",
              stage: 2,
              time: "1:14 PM",
              pauseMs: 2500,
              option: 0,
              text: "wednesday works!",
            },
            {
              kind: "confirmation",
              stage: 3,
              time: "1:14 PM",
              pauseMs: 600,
              typingMs: 1200,
              title: "Appointment booked",
              when: "Wednesday, 6:15 PM",
              service: "Lip filler appointment · 30 min",
              note: "A reminder goes out the day before. After your visit we check in and help you book the next one.",
            },
          ],
        },
      },
      crmPipelineDemo: {
        eyebrow: "03 · Manage",
        title: "See who wants to book or come back.",
        description:
          "Keep each offer, conversation and next step in one CRM. Your front desk can see who needs attention.",
        ctaLabel: "Talk About Your Med Spa",
        boardCaption: "Sample client journey",
        bridge: "Track bookings and keep client follow-up moving.",
        stages: [
          {
            title: "Request received",
            description:
              "Connected comments and messages become visible requests.",
          },
          {
            title: "Client answered",
            description: "Your team can see the reply about the offer.",
          },
          {
            title: "Treatment chosen",
            description: "The client’s treatment choice stays on the record.",
          },
          {
            title: "Appointment requested",
            description: "See the requested time and next follow-up.",
          },
        ],
        script: {
          workspaceLabel: "Client opportunities",
          liveLabel: "Organized",
          boardLabel: "Request progress",
          detailsLabel: "What your team knows",
          activityLabel: "Activity",
          nextStepLabel: "Next step",
          movedLabel: "Moved forward",
          stageLabel: "Stage",
          ofLabel: "of",
          lead: {
            name: "Marcela Ríos",
            initials: "MR",
            summary: "New booking request",
            channel: "Instagram message",
          },
          stages: [
            {
              label: "New request",
              cardStatus: "Just received",
              activity: "Message received at lunchtime",
              nextStep: "Send the first reply",
              details: [{ label: "Source", value: "Meta Ads" }],
            },
            {
              label: "Answered",
              cardStatus: "Offer confirmed",
              activity: "Promotion details confirmed",
              nextStep: "Confirm which treatment she wants",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Channel", value: "Instagram" },
              ],
            },
            {
              label: "Treatment chosen",
              cardStatus: "Treatment selected",
              activity: "Membership facial selected",
              nextStep: "Offer times for this week",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Channel", value: "Instagram" },
                { label: "Interest", value: "Monthly facial" },
                { label: "Offer", value: "Membership" },
              ],
            },
            {
              label: "Appointment requested",
              cardStatus: "Ready to confirm",
              activity: "Wednesday appointment requested",
              nextStep: "Confirm Wednesday at 5:00 and set the reminder",
              details: [
                { label: "Source", value: "Meta Ads" },
                { label: "Interest", value: "Monthly facial" },
                { label: "Requested", value: "Wednesday 5:00 PM" },
                { label: "Follow-up", value: "Rebooking reminder" },
              ],
            },
          ],
          transcriptLabel:
            "Sample client journey showing one promotion message becoming an organized booking request with a clear next step.",
        },
      },
      appointmentCommitment: {
        eyebrow: "Optional · DigitalFace AI and above",
        title: "Confirm bookings with an optional deposit.",
        description:
          "Choose which treatments require a reservation payment before the appointment is confirmed.",
        steps: [
          {
            label: "Appointment requested",
            caption: "The client picks a time from your real availability.",
          },
          {
            label: "Reservation requested",
            caption:
              "A payment request goes out with the booking, only for the treatments you choose.",
          },
          {
            label: "Appointment confirmed",
            caption:
              "Once the payment clears, the status updates in your pipeline.",
          },
          {
            label: "Reminders",
            caption: "Confirmations and reminders continue exactly as before.",
          },
          {
            label: "Attended appointment",
            caption: "Your team walks into a slot someone committed to.",
          },
        ],
        points: [
          {
            title: "Ask for commitment",
            description:
              "A reservation payment can help reduce casual bookings.",
          },
          {
            title: "See what is confirmed",
            description:
              "Distinguish paid reservations from appointment requests.",
          },
          {
            title: "Keep payments in your account",
            description:
              "Your payment provider collects the payment. DigitalFace connects the booking step and never holds your funds.",
          },
        ],
        note: "Optional and configured per treatment: you decide which appointments ask for a deposit and how much. A deposit strengthens commitment; it is not a guarantee of attendance.",
      },
      packagesTitle: "Choose your med spa plan.",
      packages: [
        {
          id: "capture",
          nicheName: "Organize booking requests",
          cta: "Talk About Capture",
        },
        {
          id: "ai",
          nicheName: "Add AI booking support",
          cta: "Talk About DigitalFace AI",
        },
        {
          id: "sales-system",
          nicheName: "Scale med spa acquisition",
          cta: "Discuss My Sales System",
        },
      ],
      faqTitle: "Before you book",
      faqDescription: "Quick answers about your team and the system.",
      faq: [
        {
          question: "Can AI explain treatments and offers?",
          answer:
            "Yes, using your approved administrative answers. Clinical suitability, contraindications, diagnosis and medical advice stay with providers.",
        },
        {
          question: "Can you connect Instagram and Facebook?",
          answer:
            "Yes. Forms, selected messaging channels and configured comment responses connect when included in your scope.",
        },
        {
          question: "Can staff take over?",
          answer:
            "Yes. Your team can step in when requested or when a question is clinical, sensitive, urgent or outside the approved answers.",
        },
        {
          question: "Can you follow up on memberships and packages?",
          answer:
            "Yes, as separately scoped work. Track memberships and remaining sessions, send booking reminders and request payments through your provider. It does not replace your point of sale or clinical records.",
        },
        {
          question: "Are professional photos and video included?",
          answer:
            "No. You supply approved photos and video; we adapt the agreed assets for campaigns and booking pages.",
        },
      ],
      booking: {
        title: "Ready for more bookings and return visits?",
        description:
          "Book a call. We’ll review your offers and client follow-up, then recommend a plan.",
        proposalTitle: "Need a custom med spa plan?",
        proposalDescription:
          "Tell us about your memberships, packages, locations or rebooking needs.",
      },
    },
  },
};
