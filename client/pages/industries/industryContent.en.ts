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
      label: "Live system view",
      stage: "Stage",
      bilingual: "English and Spanish",
      handover: "Human takeover ready",
    },
    heroMedia: {
      eyebrow: "Trust before conversion",
    },
    capabilitiesDisclaimer:
      "DigitalFace automates administrative communication and business workflows. Licensed professionals keep full clinical responsibility.",
    packages: {
      eyebrow: "Two growth levels and a custom plan",
      description:
        "Every package is implemented and managed by DigitalFace, with CRM included. Open any inclusion to see the operating scope behind the headline.",
      mostPopular: "Most popular",
      perMonth: "/month",
      expandLabel: "Open any inclusion",
      idealFor: "Ideal for",
      customProposal: "Request a custom proposal",
      noContract:
        "No annual contract required. Every plan runs on a month-to-month basis.",
      footnote:
        "Advertising budget is paid directly by you to the platforms, and each plan states the budget it manages; higher budgets require an adjusted management fee. AI usage beyond the included balance, email delivery, messaging, telephony and unusual third-party consumption are billed according to the approved scope. Professional photo and video production is not included.",
    },
    proof: {
      eyebrow: "Systems delivered",
      title: "Real operating experience behind the system",
      description:
        "Two client systems are live today. They show the communication, appointment, CRM and human handoff capabilities used across these packages.",
      activeLabel: "Active client",
    },
    faq: {
      eyebrow: "Questions before you book",
    },
    booking: {
      eyebrow: "Ready to talk?",
      ctaLabel: "Choose a time",
      customScopeLabel: "Custom scope",
      privacyNote:
        "The final form should collect only what is needed to scope the request, and link to the published privacy policy.",
    },
    mobileCta: "Book growth assessment",
  },

  clientStories: {
    diego: {
      id: "diego",
      name: "Dr. Diego Sinisterra",
      sector: "Aesthetic Medicine",
      summary:
        "A connected patient communication and appointment system built around aesthetic consultation workflows.",
      delivered: [
        "Bilingual AI patient communication",
        "Appointment booking and lifecycle automation",
        "Facebook and Instagram comment response engine",
        "CRM ownership, error handling and human takeover",
      ],
    },
    jennifer: {
      id: "jennifer",
      name: "Dra. Jennifer Sinisterra",
      sector: "Cosmetic dentistry and international patients",
      summary:
        "A bilingual patient intake system connecting WhatsApp conversations, CRM visibility, media intake and human review.",
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
        title: "Dental Marketing & Patient Acquisition | DigitalFace Marketing",
        description:
          "Turn implant, veneer and smile design inquiries into attended consultations. DigitalFace runs the advertising, bilingual follow-up, consultation booking and recall workflow for dental practices in the US and Latin America.",
      },
      hero: {
        eyebrow: "DigitalFace for Dental Practices",
        title: "Turn more dental inquiries into booked consultations.",
        description:
          "One managed system connecting dental advertising, new patient intake, consultation booking and treatment plan follow-up, from the first inquiry to an attended consultation.",
        primaryCta: "Book a Dental Growth Assessment",
        secondaryCta: "See the dental system",
        visualTitle: "Dental inquiry journey",
        visualStages: [
          "New veneer inquiry captured",
          "Bilingual response delivered",
          "Consultation booked and confirmed",
        ],
        mediaHeadline:
          "Your team stays chairside. The inquiry still gets answered, booked and followed up.",
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
        title:
          "The clinical room stays yours. The administrative one stops running on memory.",
        description:
          "Nothing here changes how you treat. It changes what happens in the hours around the appointment, when your team is chairside and the inquiry is still waiting.",
        moments: [
          {
            title: "The consultation that actually gets booked",
            description:
              "A veneer question asked at 9 p.m. is answered in seconds and lands on tomorrow's schedule instead of tomorrow's to-do list.",
            alt: "Dentist comparing a shade guide with a smiling young patient",
          },
          {
            title: "The chair that stops sitting empty",
            description:
              "Confirmations, reminders and rescheduling run on their own, so the gaps in the day close before anyone notices them.",
            alt: "Treatment light and instruments in a modern dental operatory",
          },
          {
            title: "The front desk that stops chasing",
            description:
              "Treatment interest, photos and notes arrive attached to one record, so your coordinator opens a case instead of rebuilding it.",
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
        title: "Watch a veneer ad become a consultation request.",
        description:
          "A dental campaign is easy to judge by clicks. What decides the month is the minute after the click: whether the person gets a reason to answer, and whether what they say arrives somewhere your team can actually work it.",
        ctaLabel: "Book a Dental Growth Assessment",
        phoneCaption: "Sample ad and consultation request",
        bridge:
          "The request is in your pipeline with the treatment attached. Below, that same inquiry gets answered and booked.",
        stages: [
          {
            title: "It reaches someone weighing the treatment",
            description:
              "Implants, veneers and smile design appear in front of people who have already been looking them up, in English or Spanish.",
          },
          {
            title: "The offer gives a reason to tap",
            description:
              "A consultation the patient can picture, instead of a phone number to call back later when the interest has cooled.",
          },
          {
            title: "The treatment interest comes with it",
            description:
              "The patient says what they are considering and where to reach them, so nobody starts the conversation from zero.",
          },
          {
            title: "The request is ready for your team",
            description:
              "It lands in the same pipeline as every other inquiry, with the treatment, the language and the contact already attached.",
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
        title:
          "A Saturday morning implant question, on the schedule before Monday.",
        description:
          "This is that same inquiry inside the dental growth system: answered while the practice is closed, with the photo, the treatment interest and the financing question already organized before anyone on your team opens it.",
        ctaLabel: "Book a Dental Growth Assessment",
        phoneCaption: "Sample conversation",
        stages: [
          {
            title: "Treatment interest gets an answer",
            description:
              "Implant, veneer and smile design inquiries are acknowledged whether or not your team is chairside.",
          },
          {
            title: "The photo and the details stay together",
            description:
              "Images, treatment interest and intake notes land on one patient record instead of three inboxes.",
          },
          {
            title: "Administrative questions answered consistently",
            description:
              "Financing, process and availability questions come from what your practice approved, every time.",
          },
          {
            title: "The doctor gets the case, not the busywork",
            description:
              "Clinical questions and anything specific to the case reach your team with the consultation already booked.",
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
        title: "Know where every treatment inquiry stands.",
        description:
          "Once the inquiry is answered, your team still needs to see it. The source, the treatment, the photo, the financing question and the requested time stay on one card, so nobody rebuilds the story from a message thread.",
        ctaLabel: "Book a Dental Growth Assessment",
        boardCaption: "Sample patient journey",
        bridge:
          "Attract, convert and manage: one connected patient journey with a clear next step at every stage.",
        stages: [
          {
            title: "New inquiry",
            description:
              "The opportunity appears the moment the patient writes, weekends included.",
          },
          {
            title: "Contacted",
            description:
              "The first reply is visible to the front desk without opening the chat.",
          },
          {
            title: "Treatment interest",
            description:
              "The treatment the patient is asking about, and the photo they sent, stay on the record.",
          },
          {
            title: "Consultation requested",
            description:
              "The team can see the requested time and exactly what to confirm.",
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
        eyebrow: "Consultation commitment",
        title: "A requested consultation is not the same as a confirmed one.",
        description:
          "Inquiry, conversation, treatment interest and booking. Then, when it fits your practice, one more step: a consultation reservation, deposit or fee that has to clear before the consultation is marked confirmed.",
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
            title: "Fewer casual bookings",
            description:
              "A consultation slot that costs something to hold is asked for by patients who mean to attend, so casual requests stop taking chair time.",
          },
          {
            title: "A schedule you can plan around",
            description:
              "Confirmed means paid and confirmed, not just requested, so the day your front desk sees is the day the practice is actually working.",
          },
          {
            title: "Your provider, your money",
            description:
              "Payments run through the payment provider your practice already uses and settle into your account. DigitalFace connects the booking workflow to it and never holds your funds.",
          },
        ],
        note: "Optional and configured per treatment: you decide which consultations ask for a reservation and how much. A reservation strengthens commitment; it is not a guarantee of attendance.",
      },
      packagesTitle: "Choose the dental growth level that fits you today.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Dental Patient Capture",
          price: "$890",
          setup: "$597 one-time setup",
          description:
            "Generate implant, veneer and smile design inquiries, capture every one in your CRM and answer automatically.",
          idealFor:
            "Practices that need a dependable flow of new patient inquiries and a way to stop losing them.",
          highlights: [
            "One priority acquisition channel",
            "CRM included for patient intake and follow-up",
            "Automatic first response, booking and reminders",
            "Optional deposit to confirm a consultation",
          ],
          details: [
            {
              title: "Managed dental acquisition",
              description:
                "We set up and manage one priority channel on Meta, Google or TikTok, chosen for your treatment mix, your market and real demand for implants, veneers or smile design.",
            },
            {
              title: "Patient CRM included",
              description:
                "Lead capture, pipeline management and follow-up are included. Every inquiry becomes an organized opportunity with its source, its treatment interest, its stage and its full history, so nobody rebuilds the case from a message thread.",
            },
            {
              title: "Automatic first response",
              description:
                "Rule-based SMS and email replies acknowledge every inquiry immediately and point the patient toward booking a consultation, day or night.",
            },
            {
              title: "Consultation calendar and reminders",
              description:
                "Booking links, confirmations, reminders and rescheduling instructions replace most of the manual coordination your front desk does today, and cut avoidable no-shows.",
            },
            {
              title: "Monthly performance review",
              description:
                "We review inquiry sources, response activity, booked and attended consultations, and cost per booked consultation, then agree the next campaign move.",
            },
          ],
          note: {
            title: "Advertising budget",
            body: "Management includes advertising budgets up to $1,000/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
          },
          cta: "Start Dental Patient Capture",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Complete Dental Growth System",
          price: "$1,490",
          setup: "$1,097 one-time setup",
          description:
            "Two acquisition channels, a conversion website, AI communication and campaign infrastructure, managed as one system.",
          idealFor:
            "Practices ready to run the full acquisition and conversion system, with AI answering around the clock.",
          featured: true,
          highlights: [
            "Everything in DigitalFace Capture",
            "Conversion website + up to 2 forms",
            "AI communication with a $20 monthly usage balance",
          ],
          details: [
            {
              title: "Everything in Capture, plus a second channel",
              description:
                "Two channels across Meta, Google or TikTok, managed together, with budget shifted toward whichever is producing attended consultations, not just clicks. The acquisition, CRM, first response, calendar and reporting foundation from DigitalFace Capture stays included underneath.",
            },
            {
              title: "Conversion website with up to 2 forms",
              description:
                "A conversion-focused website with up to two new patient forms wired straight into your CRM. Not unlimited pages, revisions or custom development.",
            },
            {
              title: "Bilingual AI communication",
              description:
                "The assistant answers in English and Spanish, using only what you approve: the treatments you offer, hours, location, financing policies and what your practice will and will not quote in a chat. A $20 AI usage balance is included every month.",
            },
            {
              title: "Clinical and exception handoff",
              description:
                "Diagnosis, treatment eligibility, financing exceptions, complaints and urgent concerns go to your team, never to the assistant.",
            },
            {
              title: "Email marketing setup and automation",
              description:
                "We build and run the campaign automation, recall sequences for patients with unscheduled treatment included. Email delivery is billed by volume, and additional campaigns, templates or copywriting beyond the agreed scope are quoted separately.",
            },
            {
              title: "Up to 4 static ad creatives per month",
              description:
                "Static photo and graphic ad pieces, adapted with copy in English and Spanish. Video production is not included.",
            },
          ],
          note: {
            title: "Advertising budget",
            body: "Management includes advertising budgets up to $2,500/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
          },
          footnotes: [
            "AI usage after the included $20 balance is billed at $0.40 per 1M input tokens and $2.40 per 1M output tokens.",
            "Email delivery is billed at $1.35 per 1,000 emails sent.",
            "Video production is not included. We can connect you with an external production partner when needed.",
          ],
          cta: "Start the Complete Dental System",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Custom Dental Growth Plan",
          price: "Custom",
          priceCaption: "Scoped and quoted around your requirements",
          description:
            "For practices with larger budgets, several locations, advanced acquisition, complex automation or custom integrations.",
          idealFor: "Practices whose requirements go beyond a fixed package.",
          scopeNote:
            "These are available capabilities, not a fixed inclusion list. We scope and quote only what your practice actually needs.",
          highlights: [
            "Multiple acquisition channels and larger budgets",
            "Advanced CRM, AI and custom integrations",
            "Additional locations, languages and priority support",
          ],
          details: [
            {
              title: "Multiple channels and larger budgets",
              description:
                "More than two channels working together, with the mix built around your market, your budget and the cases you want more of, whether that is implants, full arch or cosmetic. Media budgets run above the ceilings the fixed plans manage, with the management fee adjusted to the scope we agree.",
            },
            {
              title: "Additional locations and languages",
              description:
                "Separate campaigns, calendars, pipelines and conversations per location, and communication beyond English and Spanish.",
            },
            {
              title: "Advanced CRM and AI architecture",
              description:
                "Custom pipelines per treatment type, plus the roles, permissions and reporting your treatment coordinators actually work from. The assistant carries deeper approved knowledge, more channels and more complex qualification and routing than the standard one.",
            },
            {
              title: "Custom integrations, deposits and prepayment rules",
              description:
                "Connections to your practice management, billing or internal tools, and automations designed for your specific operation. Reservation amounts can differ by treatment, provider or location, with package prepayment and your own refund or credit rules connected to the payment provider you already use.",
            },
            {
              title: "Reactivation, reporting and priority support",
              description:
                "Structured recall and reactivation of your existing patient base, attribution from campaign to attended consultation, and a support level agreed with you.",
            },
          ],
          note: {
            title: "How the price is built",
            body: "Your requirements, advertising budget, channels, locations, integrations, AI usage, automation complexity and support level. We map the scope with you before quoting anything.",
          },
          cta: "Build a Custom Dental Plan",
        },
      ],
      faqTitle: "What dental practices usually ask us",
      faqDescription:
        "We review your acquisition channels, response times, consultation workflow, recall process and financing conversations before recommending a package.",
      faq: [
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
          question:
            "Can you follow up on treatment plans that were never scheduled?",
          answer:
            "Yes. Patients with unscheduled treatment can be segmented in the CRM and placed into an approved recall or follow-up sequence. The moment a patient replies with a question about their own case, the conversation is handed to your team.",
        },
        {
          question: "Does it work for international patients?",
          answer:
            "Yes. Bilingual FAQs, media intake, consultation preparation and human review can support international patient workflows within the agreed scope.",
        },
      ],
      booking: {
        title: "Let's talk about your patient acquisition system.",
        description:
          "Choose a convenient time to review how your practice attracts new patients, turns inquiries into attended consultations and follows up on unscheduled treatment.",
        proposalTitle: "Need a custom dental workflow?",
        proposalDescription:
          "Ask for a scoped proposal covering photo intake, international patients, a CRM migration, extra locations or another process specific to your practice.",
      },
    },

    "aesthetic-medicine": {
      navLabel: "Aesthetic Medicine",
      industryLabel: "Aesthetic Practice Growth System",
      metadata: {
        title:
          "Aesthetic Medicine Marketing & Patient Acquisition | DigitalFace Marketing",
        description:
          "Turn injectable, skin quality and surgical procedure interest into attended consultations. DigitalFace runs the advertising, bilingual communication, consultation booking and follow-up for aesthetic medicine and plastic surgery practices, while every clinical decision stays with your team.",
      },
      hero: {
        eyebrow: "DigitalFace for Aesthetic Medicine and Plastic Surgery",
        title:
          "Turn procedure interest into qualified, attended consultations.",
        description:
          "Answer in seconds, capture each patient's area of interest, escalate anything clinical to your team and guide serious inquiries toward a booked consultation.",
        primaryCta: "Book an Aesthetic Growth Assessment",
        secondaryCta: "See the patient journey",
        visualTitle: "Aesthetic consultation journey",
        visualStages: [
          "Procedure inquiry captured",
          "Area of interest organized",
          "Consultation booked and prepared",
        ],
        mediaHeadline:
          "The administrative work runs on its own. Every clinical question still reaches your team.",
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
        title: "Physician-led in the room. Physician-led in the inbox, too.",
        description:
          "Automation handles what is administrative and stops where it should. Anything clinical reaches you, not a script, not a bot, not a coordinator guessing.",
        moments: [
          {
            title: "The consultation stays yours",
            description:
              "Pricing, availability and general process questions are answered instantly. Clinical questions are escalated to the physician, every time.",
            alt: "Physician assessing a patient's face during an aesthetic consultation",
          },
          {
            title: "The assessment arrives prepared",
            description:
              "Area of interest, history and any photos the patient sent are already on the record before they sit down.",
            alt: "Clinician examining a patient's face during an aesthetic assessment",
          },
          {
            title: "The room is ready and so is the pipeline",
            description:
              "Bookings, deposits and follow-up after the consultation run from one view instead of four inboxes and a notebook.",
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
        title: "Watch a procedure ad arrive as an organized inquiry.",
        description:
          "Someone weighing a procedure rarely calls. They tap, they ask and they compare. When the campaign and the follow-up belong to the same system, that interest is captured with the procedure attached, before anyone at the practice has typed a word.",
        ctaLabel: "Book an Aesthetic Growth Assessment",
        phoneCaption: "Sample ad and consultation request",
        bridge:
          "That is how the inquiry is created. What happens in the next few minutes decides whether it becomes a consultation.",
        stages: [
          {
            title: "It reaches someone already comparing",
            description:
              "Your procedures appear in front of people researching them now, not an audience that has never thought about it.",
          },
          {
            title: "The ad offers a consultation, not a procedure",
            description:
              "The next step is a conversation with your team, which is the commitment a serious patient is willing to make.",
          },
          {
            title: "The procedure interest is captured",
            description:
              "What the patient is asking about, and in which language, arrives attached to the record instead of buried in a thread.",
          },
          {
            title: "The inquiry is ready for review",
            description:
              "It enters the pipeline your coordinators work from, so the first reply already has context and clinical questions reach a person.",
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
        title:
          "Watch the system answer what it should, and hand over what it should not.",
        description:
          "The point of automation in aesthetic medicine is not that it answers everything. It is that it answers the administrative questions instantly, recognizes a clinical one, and puts it in front of a person while the consultation still gets booked.",
        ctaLabel: "Book an Aesthetic Growth Assessment",
        phoneCaption: "Sample conversation",
        stages: [
          {
            title: "The inquiry never waits for office hours",
            description:
              "A Sunday evening question about a procedure gets the same immediate answer as a Tuesday morning call.",
          },
          {
            title: "Approved information, delivered the same way twice",
            description:
              "Consultation process, preparation and policy answers come from what your practice signed off on.",
          },
          {
            title: "Clinical questions go to a person",
            description:
              "Safety, candidacy and questions about a specific case are escalated to your team instead of answered by automation.",
          },
          {
            title: "The consultation is protected",
            description:
              "The booking, the reminder and the patient's open question all reach your team before the visit.",
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
        title: "See every case, and who it is waiting on.",
        description:
          "Coordinators lose time reconstructing what a patient already asked. Here the source, the procedure interest, the question that needs a clinician and the requested consultation stay on one card, so the practice always knows whose turn it is.",
        ctaLabel: "Book an Aesthetic Growth Assessment",
        boardCaption: "Sample patient journey",
        bridge:
          "Attract, convert and manage: one connected patient journey where clinical judgment always stays with your team.",
        stages: [
          {
            title: "New inquiry",
            description:
              "The opportunity is created the moment the patient asks, day or night.",
          },
          {
            title: "Answered",
            description:
              "The administrative questions are handled and the reply is on the record.",
          },
          {
            title: "Sent to the doctor",
            description:
              "A clinical question is flagged for a person instead of being answered by software.",
          },
          {
            title: "Consultation requested",
            description:
              "The requested time is visible while the clinical review is still open.",
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
        eyebrow: "Consultation commitment",
        title: "A requested consultation is not the same as a confirmed one.",
        description:
          "Inquiry, conversation, procedure interest and booking. Then, when it fits your practice, one more step: a consultation fee or appointment reservation that has to clear before the consultation is marked confirmed.",
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
            title: "Fewer casual bookings",
            description:
              "A consultation that carries a fee is requested by patients who are serious about the procedure, so casual interest stops filling the agenda.",
          },
          {
            title: "Provider time that reflects real commitments",
            description:
              "Confirmed means paid and confirmed, not just requested, so the hours you block for consultations are hours a patient has committed to.",
          },
          {
            title: "Your provider, your money",
            description:
              "Payments run through the payment provider your practice already uses and settle into your account. DigitalFace connects the booking workflow to it and never holds your funds.",
          },
        ],
        note: "Optional and configured per consultation type: you decide which appointments ask for a fee and how much. A consultation fee strengthens commitment; it is not a guarantee of attendance.",
      },
      packagesTitle: "Choose the aesthetic growth level that fits you today.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Aesthetic Consultation Capture",
          price: "$890",
          setup: "$597 one-time setup",
          description:
            "Generate procedure inquiries, capture every one in your CRM and answer while the patient is still comparing.",
          idealFor:
            "Practices that need a steady flow of procedure inquiries and a reliable route from inquiry to consultation.",
          highlights: [
            "One priority acquisition channel",
            "CRM included for inquiry capture and follow-up",
            "Automatic first response, booking and reminders",
            "Optional consultation fee to confirm the appointment",
          ],
          details: [
            {
              title: "Managed aesthetic acquisition",
              description:
                "We set up and manage one priority channel on Meta, Google or TikTok, chosen for the procedures you want to grow, your market and real demand.",
            },
            {
              title: "Patient CRM included",
              description:
                "Lead capture, pipeline management and follow-up are included. Every inquiry becomes an organized opportunity with its source, its area of interest, its stage and its full history, and anything clinical is flagged for a person.",
            },
            {
              title: "Automatic first response",
              description:
                "Rule-based SMS and email replies acknowledge every inquiry immediately and point the patient toward requesting a consultation, day or night.",
            },
            {
              title: "Consultation calendar and reminders",
              description:
                "Booking links, confirmations, reminders and rescheduling instructions replace most of the manual coordination your coordinators do today.",
            },
            {
              title: "Monthly performance review",
              description:
                "We review inquiry sources, response activity, booked and attended consultations, and cost per booked consultation, then agree the next campaign move.",
            },
          ],
          note: {
            title: "Advertising budget",
            body: "Management includes advertising budgets up to $1,000/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
          },
          cta: "Start Consultation Capture",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Complete Aesthetic Growth System",
          price: "$1,490",
          setup: "$1,097 one-time setup",
          description:
            "Two acquisition channels, a conversion website, AI communication and campaign infrastructure, managed as one system.",
          idealFor:
            "Practices ready to run the full acquisition and conversion system, with AI answering around the clock.",
          featured: true,
          highlights: [
            "Everything in DigitalFace Capture",
            "Conversion website + up to 2 forms",
            "AI communication with a $20 monthly usage balance",
          ],
          details: [
            {
              title: "Everything in Capture, plus a second channel",
              description:
                "Two channels across Meta, Google or TikTok, managed together, with budget shifted toward whichever is producing attended consultations, not just clicks. The acquisition, CRM, first response, calendar and reporting foundation from DigitalFace Capture stays included underneath.",
            },
            {
              title: "Conversion website with up to 2 forms",
              description:
                "A conversion-focused website with up to two consultation request forms wired straight into your CRM. Not unlimited pages, revisions or custom development.",
            },
            {
              title: "Bilingual AI communication",
              description:
                "The assistant answers in English and Spanish, using only what you approve: the procedures you offer, consultation fees, hours, location, policies and what your practice will and will not quote in a chat. A $20 AI usage balance is included every month.",
            },
            {
              title: "Clinical and exception handoff",
              description:
                "Clinical suitability, contraindications, diagnosis, personalized medical advice and complaints are escalated to qualified providers.",
            },
            {
              title: "Email marketing setup and automation",
              description:
                "We build and run the campaign automation, follow-up after the consultation and sequences for inquiries that never booked included. Email delivery is billed by volume, and additional campaigns, templates or copywriting beyond the agreed scope are quoted separately.",
            },
            {
              title: "Up to 4 static ad creatives per month",
              description:
                "Static photo and graphic ad pieces, adapted with copy in English and Spanish. Video production is not included.",
            },
          ],
          note: {
            title: "Advertising budget",
            body: "Management includes advertising budgets up to $2,500/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
          },
          footnotes: [
            "AI usage after the included $20 balance is billed at $0.40 per 1M input tokens and $2.40 per 1M output tokens.",
            "Email delivery is billed at $1.35 per 1,000 emails sent.",
            "Video production is not included. We can connect you with an external production partner when needed.",
          ],
          cta: "Start the Complete Aesthetic System",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Custom Aesthetic Growth Plan",
          price: "Custom",
          priceCaption: "Scoped and quoted around your requirements",
          description:
            "For practices with larger budgets, several locations, advanced acquisition, complex automation or custom integrations.",
          idealFor: "Practices whose requirements go beyond a fixed package.",
          scopeNote:
            "These are available capabilities, not a fixed inclusion list. We scope and quote only what your practice actually needs.",
          highlights: [
            "Multiple acquisition channels and larger budgets",
            "Advanced CRM, AI and custom integrations",
            "Additional locations, languages and priority support",
          ],
          details: [
            {
              title: "Multiple channels and larger budgets",
              description:
                "More than two channels working together, with the mix built around the procedures you want to grow, your market and your budget. Media budgets run above the ceilings the fixed plans manage, with the management fee adjusted to the scope we agree.",
            },
            {
              title: "Additional locations and languages",
              description:
                "Separate campaigns, calendars, pipelines and conversations per location, and communication beyond English and Spanish.",
            },
            {
              title: "Advanced CRM and AI architecture",
              description:
                "Custom pipelines per procedure category, plus the roles, permissions and reporting your patient coordinators actually work from. The assistant carries deeper approved knowledge, more channels and more complex qualification and routing than the standard one.",
            },
            {
              title: "Custom integrations, deposits and prepayment rules",
              description:
                "Connections to your practice management, billing or internal tools, and automations designed for your specific operation. Reservation amounts can differ by treatment, provider or location, with package prepayment and your own refund or credit rules connected to the payment provider you already use.",
            },
            {
              title: "Reactivation, reporting and priority support",
              description:
                "Structured reactivation of past consultations and patients due for their next visit, attribution from campaign to attended consultation, and a support level agreed with you.",
            },
          ],
          note: {
            title: "How the price is built",
            body: "Your requirements, advertising budget, channels, locations, integrations, AI usage, automation complexity and support level. We map the scope with you before quoting anything.",
          },
          cta: "Build a Custom Aesthetic Plan",
        },
      ],
      faqTitle: "What aesthetic practices usually ask us",
      faqDescription:
        "We review your acquisition channels, response times, consultation journey, escalation rules and follow-up after the consultation before recommending a package.",
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
          question: "Can the system respond to social media inquiries?",
          answer:
            "Yes. Facebook and Instagram lead, message or comment workflows can be connected when they are included in the selected package and channel scope.",
        },
        {
          question:
            "Can it follow up with patients who inquired but never booked?",
          answer:
            "Yes. Inquiries that never chose a time enter an approved follow-up sequence, and past patients can be segmented for a reminder about their next visit. Anything the patient replies with that is clinical is routed to your team before an answer goes out.",
        },
        {
          question: "Do you promise a number of patients or procedures?",
          answer:
            "No. We build and manage the acquisition and conversion system. Results also depend on market demand, budget, offers, clinical fit, pricing, reputation and your own consultation process.",
        },
      ],
      booking: {
        title: "Let's talk about your patient growth system.",
        description:
          "Choose a time to review how your practice captures procedure inquiries, escalates clinical questions, books consultations and follows up afterwards.",
        proposalTitle: "Need a custom aesthetic workflow?",
        proposalDescription:
          "Ask for a scoped proposal covering multiple locations, international patients, intake for specific procedures, social automation or another process in your practice.",
      },
    },

    "med-spas": {
      navLabel: "Med Spas",
      industryLabel: "Med Spa Growth System",
      metadata: {
        title: "Med Spa Marketing & Booking System | DigitalFace Marketing",
        description:
          "Turn treatment interest into booked and returning clients. DigitalFace runs the promotions, AI booking, deposits, rebooking and client reactivation workflow for med spas in the US and Latin America.",
      },
      hero: {
        eyebrow: "DigitalFace for Med Spas",
        title: "Turn treatment interest into booked and returning clients.",
        description:
          "One system connecting promotions, fast replies, appointment booking, deposits, rebooking and client reactivation, so the calendar fills and stays full.",
        primaryCta: "Book a Med Spa Growth Assessment",
        secondaryCta: "See the med spa system",
        visualTitle: "Med spa booking journey",
        visualStages: [
          "Promotion reply captured",
          "Booking conversation active",
          "Appointment booked, rebooking set",
        ],
        mediaHeadline:
          "The promotion fills the calendar. The follow-up is what keeps it full.",
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
        title: "The experience starts long before anyone walks in.",
        description:
          "By the time a client is on your table, they have already judged you on how fast you replied, how easy it was to book, and whether anyone remembered them afterward.",
        moments: [
          {
            title: "The first reply feels like the front desk",
            description:
              "A message at midnight gets the same warm, on-brand answer your best coordinator would give at noon.",
            alt: "Med spa staff welcoming clients at the reception desk",
          },
          {
            title: "The ritual stays uninterrupted",
            description:
              "Nobody steps out of a treatment to answer a booking question, because the booking question never had to wait.",
            alt: "Indoor spa pool lit by candlelight",
          },
          {
            title: "The client who comes back on her own",
            description:
              "Reactivation, packages and membership reminders run quietly in the background, so the calendar refills without a campaign.",
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
              "Meta, Instagram, Google or another justified channel, built around the offer, the season and the local market, with every opportunity carrying the treatment, the offer and the channel behind it so you know which promotions actually fill the calendar.",
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
        title: "Watch an offer turn into a booking request.",
        description:
          "A med spa ad creates a spike of interest in a few hours, usually while your team is with clients. This is what happens to that interest when the campaign is connected to the booking system instead of ending in a comment thread.",
        ctaLabel: "Book a Med Spa Growth Assessment",
        phoneCaption: "Sample ad and booking request",
        bridge:
          "Every response arrives in one place instead of five inboxes. Now it needs an answer while the offer is still fresh.",
        stages: [
          {
            title: "It reaches people close enough to come in",
            description:
              "Your treatments and memberships show up for people who live near the spa and are ready to book something this month.",
          },
          {
            title: "The offer is easy to say yes to",
            description:
              "One clear step instead of a comment thread the front desk has to answer message by message.",
          },
          {
            title: "The request says what they want",
            description:
              "Treatment, language and contact arrive together, so the reply can be about a time instead of a question.",
          },
          {
            title: "Nothing sits in an inbox",
            description:
              "Every response lands in one pipeline with the offer attached, ready for booking, reminders and the visit after this one.",
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
        title: "A story reply at lunchtime, on the schedule for Wednesday.",
        description:
          "This is one of those messages when the system picks it up: the offer confirmed, a time chosen, and the follow-up already set before anyone at the front desk opens the inbox.",
        ctaLabel: "Book a Med Spa Growth Assessment",
        phoneCaption: "Sample conversation",
        stages: [
          {
            title: "Every channel lands in one place",
            description:
              "Story replies, comments, direct messages, forms and calls stop living in five separate inboxes.",
          },
          {
            title: "The offer gets answered while interest is hot",
            description:
              "Approved promotion details go out in seconds instead of after your last client of the day leaves.",
          },
          {
            title: "The booking happens inside the conversation",
            description:
              "No link to chase, no back and forth about times, nobody waiting on a callback that never comes.",
          },
          {
            title: "The relationship keeps going",
            description:
              "Reminders protect the appointment, and the follow-up brings the client back for the next one.",
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
        title: "One place to see who is waiting on a time.",
        description:
          "A promotion can bring in more messages in an afternoon than the front desk can track. Here every request keeps its offer, its channel, its status and its next step, so nothing is lost between a story reply and the appointment book.",
        ctaLabel: "Book a Med Spa Growth Assessment",
        boardCaption: "Sample client journey",
        bridge:
          "Attract, convert and manage: one connected client journey that keeps working after the first visit.",
        stages: [
          {
            title: "New request",
            description:
              "Story replies, comments and messages become one visible request.",
          },
          {
            title: "Answered",
            description:
              "The offer is confirmed while your team is still with clients.",
          },
          {
            title: "Treatment chosen",
            description:
              "What the client wants to book stays attached to the request.",
          },
          {
            title: "Appointment requested",
            description:
              "The front desk sees the time to confirm and the follow-up already set.",
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
        eyebrow: "Booking commitment",
        title: "A requested appointment is not the same as a confirmed one.",
        description:
          "Inquiry, conversation, treatment interest and booking. Then, when it fits your med spa, one more step: a booking deposit or treatment reservation that has to clear before the appointment is marked confirmed.",
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
            title: "Fewer casual bookings",
            description:
              "A treatment slot that costs something to hold is asked for by clients who mean to come in, so promotions stop filling the calendar with no-shows.",
          },
          {
            title: "Treatment rooms that stay productive",
            description:
              "Confirmed means paid and confirmed, not just requested, so a room and a provider are held for an appointment someone committed to.",
          },
          {
            title: "Your provider, your money",
            description:
              "Payments run through the payment provider your med spa already uses and settle into your account. DigitalFace connects the booking workflow to it and never holds your funds.",
          },
        ],
        note: "Optional and configured per treatment: you decide which appointments ask for a deposit and how much. A deposit strengthens commitment; it is not a guarantee of attendance.",
      },
      packagesTitle: "Choose the med spa growth level that fits you today.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Med Spa Client Capture",
          price: "$890",
          setup: "$597 one-time setup",
          description:
            "Generate treatment and promotion inquiries, capture every one in your CRM and answer before the interest fades.",
          idealFor:
            "Med spas that need a dependable flow of booking requests and a calendar that stops leaking them.",
          highlights: [
            "One priority acquisition channel",
            "CRM included for booking requests and follow-up",
            "Automatic first response, booking and reminders",
            "Optional deposit to confirm a booking",
          ],
          details: [
            {
              title: "Managed med spa acquisition",
              description:
                "We set up and manage one priority channel on Meta, Google or TikTok, chosen for your offers, your memberships and the treatments you want to fill this season.",
            },
            {
              title: "Client CRM included",
              description:
                "Lead capture, pipeline management and follow-up are included. Every inquiry becomes an organized opportunity with its lead source, the offer it came from, its stage and its full history.",
            },
            {
              title: "Automatic first response",
              description:
                "Rule-based SMS and email replies acknowledge every inquiry immediately and point the client straight at booking, day or night.",
            },
            {
              title: "Appointment calendar and reminders",
              description:
                "Booking links, confirmations, reminders and rescheduling instructions replace most of the manual coordination your front desk does today, and cut avoidable no-shows.",
            },
            {
              title: "Monthly performance review",
              description:
                "We review lead sources, response activity, booked and attended appointments, and cost per booked appointment, then agree the next promotion.",
            },
          ],
          note: {
            title: "Advertising budget",
            body: "Management includes advertising budgets up to $1,000/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
          },
          cta: "Start Med Spa Client Capture",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Complete Med Spa Growth System",
          price: "$1,490",
          setup: "$1,097 one-time setup",
          description:
            "Two acquisition channels, a conversion website, AI communication and campaign infrastructure, managed as one system.",
          idealFor:
            "Med spas ready to run the full acquisition and conversion system, with AI answering around the clock.",
          featured: true,
          highlights: [
            "Everything in DigitalFace Capture",
            "Conversion website + up to 2 forms",
            "AI communication with a $20 monthly usage balance",
          ],
          details: [
            {
              title: "Everything in Capture, plus a second channel",
              description:
                "Two channels across Meta, Google or TikTok, managed together, with budget shifted toward whichever is producing attended appointments, not just messages. The acquisition, CRM, first response, calendar and reporting foundation from DigitalFace Capture stays included underneath.",
            },
            {
              title: "Conversion website with up to 2 forms",
              description:
                "A conversion-focused website with up to two booking request forms wired straight into your CRM. Not unlimited pages, revisions or custom development.",
            },
            {
              title: "Bilingual AI communication",
              description:
                "The assistant answers in English and Spanish, using only what you approve: treatments, promotions, membership and package terms, hours, location, policies and pricing rules. A $20 AI usage balance is included every month.",
            },
            {
              title: "Medical and exception handoff",
              description:
                "Medical questions, contraindications, symptoms, complaints and staff requests are escalated to your team, never answered by the assistant.",
            },
            {
              title: "Email marketing setup and automation",
              description:
                "We build and run the campaign automation, seasonal offers, membership renewals and rebooking sequences for clients who have not been in for a while. Email delivery is billed by volume, and additional campaigns, templates or copywriting beyond the agreed scope are quoted separately.",
            },
            {
              title: "Up to 4 static ad creatives per month",
              description:
                "Static photo and graphic ad pieces, adapted with copy in English and Spanish. Video production is not included.",
            },
          ],
          note: {
            title: "Advertising budget",
            body: "Management includes advertising budgets up to $2,500/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
          },
          footnotes: [
            "AI usage after the included $20 balance is billed at $0.40 per 1M input tokens and $2.40 per 1M output tokens.",
            "Email delivery is billed at $1.35 per 1,000 emails sent.",
            "Video production is not included. We can connect you with an external production partner when needed.",
          ],
          cta: "Start the Complete Med Spa System",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Custom Med Spa Growth Plan",
          price: "Custom",
          priceCaption: "Scoped and quoted around your requirements",
          description:
            "For med spas with larger budgets, several locations, advanced acquisition, complex automation or custom integrations.",
          idealFor: "Med spas whose requirements go beyond a fixed package.",
          scopeNote:
            "These are available capabilities, not a fixed inclusion list. We scope and quote only what your med spa actually needs.",
          highlights: [
            "Multiple acquisition channels and larger budgets",
            "Advanced CRM, AI and custom integrations",
            "Additional locations, languages and priority support",
          ],
          details: [
            {
              title: "Multiple channels and larger budgets",
              description:
                "More than two channels working together, with the mix built around your treatment menu, your memberships and the seasons that move your calendar. Media budgets run above the ceilings the fixed plans manage, with the management fee adjusted to the scope we agree.",
            },
            {
              title: "Additional locations and languages",
              description:
                "Separate campaigns, calendars, pipelines and conversations per location, and communication beyond English and Spanish.",
            },
            {
              title: "Advanced CRM and AI architecture",
              description:
                "Separate pipelines for memberships, packages and one-off treatments, plus the roles, permissions and reporting your front desk actually works from. The assistant carries deeper approved knowledge, more channels and more complex qualification and routing than the standard one.",
            },
            {
              title: "Custom integrations, deposits and prepayment rules",
              description:
                "Connections to your practice management, billing or internal tools, and automations designed for your specific operation. Reservation amounts can differ by treatment, provider or location, with package prepayment and your own refund or credit rules connected to the payment provider you already use.",
            },
            {
              title: "Reactivation, reporting and priority support",
              description:
                "Structured reactivation of lapsed clients and expiring memberships, attribution from offer to attended appointment, and a support level agreed with you.",
            },
          ],
          note: {
            title: "How the price is built",
            body: "Your requirements, advertising budget, channels, locations, integrations, AI usage, automation complexity and support level. We map the scope with you before quoting anything.",
          },
          cta: "Build a Custom Med Spa Plan",
        },
      ],
      faqTitle: "What med spas usually ask us",
      faqDescription:
        "We review your promotions, social inquiry flow, response process, calendar, reactivation and client follow-up before recommending a package.",
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
          question: "Can staff take over a conversation?",
          answer:
            "Yes. Your team can take ownership whenever a client asks for a person, or when a conversation becomes clinical, sensitive, urgent or falls outside the approved knowledge.",
        },
        {
          question: "Can it handle memberships and prepaid packages?",
          answer:
            "Yes, on the commercial side. The system can track which clients are on a membership or still have sessions left in a package, remind them to book, and take a deposit or prepayment through your own payment provider. It does not replace your point of sale or your clinical records.",
        },
        {
          question: "Do you produce professional photos and video?",
          answer:
            "Professional production is not included. The med spa supplies approved raw photos and video, and we adapt the agreed assets for campaigns and conversion paths.",
        },
      ],
      booking: {
        title: "Let's talk about your growth system.",
        description:
          "Choose a convenient time to review how your med spa turns promotions into booked appointments, cuts no-shows and brings clients back.",
        proposalTitle: "Need a custom med spa workflow?",
        proposalDescription:
          "Ask for a scoped proposal covering memberships, multiple locations, review automation, intake for specific treatments or another custom process.",
      },
    },
  },
};
