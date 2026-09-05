import type { Locale } from "../locale";

export type PricingPackage = {
  id: string;
  recommended: boolean;
  includedFeatures: string[];
  level: string;
  name: string;
  shortName: string;
  description: string;
  inherits: string;
  idealFor: string;
  features: { title: string; body: string }[];
  scope: string;
  exclusions: string;
  usageNote: string;
  details: { title: string; body: string }[];
};

/** Shared inclusion rules for the main cards and comparison, in both locales. */
const captureFeatures = [
  "crm",
  "capture",
  "response",
  "followup",
  "booking",
  "missedcall",
  "reporting",
  "onboarding",
];
const aiFeatures = [
  ...captureFeatures,
  "assistant",
  "qualification",
  "assistedBooking",
  "handoff",
  "recovery",
  "deposits",
];
const salesFeatures = [
  ...aiFeatures,
  "ads",
  "landing",
  "creatives",
  "optimization",
  "attribution",
];
const planDefinitions = {
  capture: {
    id: "capture",
    recommended: false,
    includedFeatures: captureFeatures,
  },
  ai: { id: "ai", recommended: true, includedFeatures: aiFeatures },
  salesSystem: {
    id: "sales-system",
    recommended: false,
    includedFeatures: salesFeatures,
  },
};
const en = {
  metadata: {
    title: "Plans & Pricing for Clinic Growth Systems | DigitalFace Marketing",
    description:
      "DigitalFace Capture, DigitalFace AI and The DigitalFace Sales System: what each plan includes, the advertising budget each one manages, and how AI and email usage are billed.",
  },
  hero: {
    eyebrow: "Plans and pricing",
    title: "Choose the system that fits where your practice is today",
    description:
      "Two managed levels with a defined scope, plus a custom option for businesses that need more — with the media-budget rules and the running costs stated up front.",
  },
  pillars: [
    {
      title: "Productized",
      copy: "A proven system with defined deliverables and a fast launch.",
    },
    {
      title: "Automation first",
      copy: "Instant follow-up and booking, so response time never slips.",
    },
    {
      title: "Built for small teams",
      copy: "Designed for practices without a technical department.",
    },
    {
      title: "Fully visible",
      copy: "Track every inquiry, appointment and outcome in one pipeline.",
    },
  ],
  packages: {
    eyebrow: "Founding pricing",
    intro:
      "Founding pricing is reserved for our first 10 clients and held for 12 months. Every plan includes managed acquisition and CRM. Your advertising budget is always paid by you, directly to the platforms.",
    recommendedLabel: "Recommended",
    ctaLabel: "Schedule a consultation",
    ctaContext: "Schedule a consultation about",
    callNote: "We define your scope and quote on the call.",
    exclusionsLabel: "Not included",
    usageLabel: "Platform & usage",
    idealForLabel: "Best for",
    noContract:
      "No annual contract required. Every plan runs on a month-to-month basis.",
    items: [
      {
        ...planDefinitions.capture,
        level: "01 · Capture & follow up",
        name: "DigitalFace Capture",
        description:
          "Organize incoming inquiries and keep your follow-up moving.",
        idealFor:
          "A practice with steady inquiries and a team ready to handle the conversations.",
        features: [
          {
            title: "CRM & shared inbox",
            body: "Keep contacts, conversations and next steps in one place.",
          },
          {
            title: "Lead capture & first response",
            body: "Connect two inquiry sources and reply automatically by SMS or email.",
          },
          {
            title: "Automated follow-up",
            body: "Stay in touch until someone replies or opts out.",
          },
          {
            title: "Booking & reminders",
            body: "Let people choose a time and receive appointment reminders.",
          },
          {
            title: "Missed-call text-back",
            body: "Send a text when your connected business number misses a call.",
          },
          {
            title: "Reporting & maintenance",
            body: "See inquiry progress while we monitor and maintain your system.",
          },
        ],
        scope: "1 location · 1 pipeline · 1 calendar · English or Spanish",
        exclusions:
          "Paid ads, conversational AI and website builds are not included.",
        usageNote:
          "CRM and standard hosting included. Messaging, email and phone charges are separate at provider cost.",
        details: [
          {
            title: "What implementation covers",
            body: "We configure your pipeline, connect up to 2 existing forms or native lead sources, set up first response, follow-up, booking and missed-call workflows, test them and train your team. Native connections only; data migration and custom integrations are quoted separately.",
          },
          {
            title: "What we manage each month",
            body: "Workflow monitoring, fixes to the delivered system, one performance review and up to 1 hour of requested copy or workflow adjustments. New workflows are scoped separately. Your staff handles conversations and appointment decisions.",
          },
          {
            title: "Usage and scope",
            body: "There is no included usage credit. We agree the provider charges and a monthly usage budget before launch; costs are billed directly by providers or itemized at cost. Extra locations, calendars, languages or inquiry sources require a new quote.",
          },
          {
            title: "When to upgrade",
            body: "Choose DigitalFace AI when your team needs help answering, qualifying and guiding inquiries to a confirmed appointment. Deposit workflows and no-show recovery start there.",
          },
        ],
        inherits: "Your follow-up foundation",
        shortName: "Capture",
      },
      {
        ...planDefinitions.ai,
        level: "02 · Respond & book",
        name: "DigitalFace AI",
        description:
          "Answer questions and help interested people reach a booked appointment.",
        idealFor:
          "A busy practice losing opportunities to slow replies and manual follow-up.",
        features: [
          {
            title: "Bilingual AI assistant",
            body: "Answer approved questions in English and Spanish through chat and messaging.",
          },
          {
            title: "Lead qualification",
            body: "Find out what people need before your team takes over.",
          },
          {
            title: "Booking & rescheduling",
            body: "Check availability and ask for confirmation before changing an appointment.",
          },
          {
            title: "Human handoff",
            body: "Bring your team into sensitive conversations with the full history.",
          },
          {
            title: "No-show recovery",
            body: "Follow up with people who missed a visit and invite them back.",
          },
          {
            title: "Optional booking deposits",
            body: "Let clients secure an appointment through your payment provider.",
          },
        ],
        scope: "1 location · 1 pipeline · up to 2 calendars · 1 knowledge base",
        exclusions:
          "Paid ads, website builds, voice AI and bulk email campaigns are not included.",
        usageNote:
          "CRM and standard hosting included. AI, messaging, email, phone and payment-provider charges are separate at provider cost.",
        details: [
          {
            title: "What implementation covers",
            body: "Capture setup plus one approved knowledge base, web chat and one messaging channel (WhatsApp or SMS), English and Spanish responses, up to 2 calendars, handoff rules, appointment workflows, testing and team training. Up to 2 existing inquiry sources are connected; custom integrations and migrations are quoted separately.",
          },
          {
            title: "What we manage each month",
            body: "We monitor the system, fix delivered workflows, review conversation quality, tune approved answers and report inquiry-to-booking progress. Includes one monthly review and up to 2 hours of requested knowledge-base or workflow changes; new systems are quoted separately.",
          },
          {
            title: "Appointment boundaries",
            body: "AI handles administrative questions and commercial interest only. It does not diagnose, prescribe, determine clinical eligibility or approve sensitive medical or financial decisions. Staff retains responsibility. Booking changes require current availability where relevant and explicit confirmation; sensitive requests go to staff.",
          },
          {
            title: "Deposits and usage",
            body: "An optional, staff-approved deposit workflow can strengthen booking commitment; attendance is not guaranteed. Your payment provider sends funds to your account and bills its fees. AI and communication usage have no included credit; we agree provider charges and a monthly usage budget before launch, with direct billing or itemized pass-through at cost.",
          },
          {
            title: "When to expand",
            body: "Add the Sales System when you need managed acquisition and a campaign landing page. More locations, calendars, knowledge bases, channels or languages require a scoped quote.",
          },
        ],
        inherits: "Everything in Capture, plus",
        shortName: "AI",
      },
      {
        ...planDefinitions.salesSystem,
        level: "03 · Attract & grow",
        name: "The DigitalFace Sales System",
        description:
          "Connect paid advertising to a managed response and booking process.",
        idealFor:
          "A practice ready to fund advertising and measure the path from inquiry to attended appointment.",
        features: [
          {
            title: "Meta or Google Ads",
            body: "Manage one priority advertising channel around your offer.",
          },
          {
            title: "Campaign landing page",
            body: "Give visitors one focused page to understand your offer and inquire.",
          },
          {
            title: "Static ad creatives",
            body: "Create up to four monthly ad variations using your materials.",
          },
          {
            title: "Weekly optimization",
            body: "Adjust campaigns based on what is working and what needs attention.",
          },
          {
            title: "Conversion tracking",
            body: "Connect ad activity to inquiries, bookings and recorded attendance.",
          },
          {
            title: "Monthly growth review",
            body: "Review acquisition and booking performance together.",
          },
        ],
        scope: "Starting scope: 1 location · 1 offer · 1 ad channel",
        exclusions:
          "Full websites, professional photo/video, SEO and bulk reactivation are separate projects.",
        usageNote:
          "CRM and standard hosting included. Ad spend is paid directly to Meta or Google. AI, messaging and other provider charges are separate at cost.",
        details: [
          {
            title: "What the starting scope covers",
            body: "DigitalFace AI implementation plus one Meta or Google campaign channel, tracking and one landing page with up to 2 revision rounds. Monthly management includes weekly campaign optimization, up to 4 static variations using client-supplied assets, one review and up to 3 total hours of requested system or landing-page changes.",
          },
          {
            title: "Advertising budget",
            body: "The starting scope manages up to $5,000/month in ad spend on one Meta or Google channel. You pay the advertising platform directly. A second channel, TikTok, additional offers or higher spend requires an agreed scope and management-fee adjustment.",
          },
          {
            title: "How custom scope is priced",
            body: "We define your implementation and monthly management quote on the consultation. Additional locations, brands, inquiry volume, pipelines, integrations, reporting or dedicated infrastructure affect the scope. Deliverables, support capacity and fees are agreed in writing before work begins.",
          },
          {
            title: "Measurement and usage",
            body: "Reporting connects advertising to inquiries, bookings and staff-recorded attendance; your team must keep outcomes current. No appointment or revenue guarantee. AI and communication usage have no included credit. We agree provider charges and a monthly usage budget before launch, billed directly or itemized at cost.",
          },
          {
            title: "AI and appointment boundaries",
            body: "AI answers approved administrative questions and qualifies commercial interest; it does not diagnose, prescribe, decide clinical eligibility or approve sensitive medical or financial decisions. Staff handles sensitive cases. Appointment changes require explicit confirmation and current availability where relevant. Optional deposits use your provider; attendance is not guaranteed.",
          },
        ],
        inherits: "Everything in AI, plus",
        shortName: "Sales System",
      },
    ],
    comparison: {
      title: "Compare plans & scope",
      description:
        "See what each plan includes, then schedule a call to agree your scope and quote.",
      included: "Included",
      notIncluded: "Not included",
      optional: "Optional",
      featureLabel: "Service & what it does",
      scopeLabel: "Starting scope & limits",
      detailsLabel: "Implementation & operating details",
      scrollHint: "Scroll horizontally to see all three plans.",
      scopeNote:
        "Adjustments are the total allowance per plan, alongside maintenance of the delivered system. Additional locations, offers, channels, integrations and new workflows are scoped on your call.",
      groups: [
        {
          title: "Follow-up essentials",
          items: [
            {
              id: "crm",
              title: "CRM & shared inbox",
              body: "Contacts, conversations and assigned follow-up in one place.",
              optional: false,
            },
            {
              id: "capture",
              title: "Lead capture",
              body: "Connect existing inquiry sources to your contact list.",
              optional: false,
            },
            {
              id: "response",
              title: "Automatic first response",
              body: "Acknowledge new inquiries by SMS or email.",
              optional: false,
            },
            {
              id: "followup",
              title: "Automated follow-up",
              body: "Keep in touch until a reply or opt-out.",
              optional: false,
            },
            {
              id: "booking",
              title: "Booking & reminders",
              body: "Self-booking links, confirmations and visit reminders.",
              optional: false,
            },
            {
              id: "missedcall",
              title: "Missed-call text-back",
              body: "A text response when one connected number misses a call.",
              optional: false,
            },
            {
              id: "reporting",
              title: "Reporting & maintenance",
              body: "Monthly progress review, workflow monitoring and fixes.",
              optional: false,
            },
            {
              id: "onboarding",
              title: "Setup, training & hosting",
              body: "System configuration, testing, team training and standard hosting.",
              optional: false,
            },
          ],
        },
        {
          title: "AI response & booking",
          items: [
            {
              id: "assistant",
              title: "Bilingual AI assistant",
              body: "Approved answers through web chat and WhatsApp or SMS.",
              optional: false,
            },
            {
              id: "qualification",
              title: "Lead qualification",
              body: "Record what someone needs so your team can follow through.",
              optional: false,
            },
            {
              id: "assistedBooking",
              title: "AI booking & rescheduling",
              body: "Check availability and request confirmation before booking changes.",
              optional: false,
            },
            {
              id: "handoff",
              title: "Human handoff",
              body: "Pass conversations to your team with the history attached.",
              optional: false,
            },
            {
              id: "recovery",
              title: "No-show recovery",
              body: "Invite people who missed an appointment to reschedule.",
              optional: false,
            },
            {
              id: "deposits",
              title: "Appointment deposits",
              body: "Optional booking commitment through your payment provider.",
              optional: true,
            },
          ],
        },
        {
          title: "Paid acquisition",
          items: [
            {
              id: "ads",
              title: "Paid advertising",
              body: "One priority Meta or Google channel in the starting scope.",
              optional: false,
            },
            {
              id: "landing",
              title: "Campaign landing page",
              body: "One focused page for one priority offer.",
              optional: false,
            },
            {
              id: "creatives",
              title: "Static ad creatives",
              body: "Up to four monthly variations using client-supplied materials.",
              optional: false,
            },
            {
              id: "optimization",
              title: "Weekly campaign optimization",
              body: "Adjust campaigns using their performance data.",
              optional: false,
            },
            {
              id: "attribution",
              title: "Acquisition & booking review",
              body: "Connect advertising, inquiries, bookings and staff-recorded attendance.",
              optional: false,
            },
          ],
        },
      ],
      limits: [
        {
          label: "Locations",
          values: ["1", "1", "1 in starting scope"],
        },
        {
          label: "Sales pipelines",
          values: ["1", "1", "1 in starting scope"],
        },
        {
          label: "Appointment calendars",
          values: ["1", "Up to 2", "Up to 2"],
        },
        {
          label: "Existing inquiry sources",
          values: ["Up to 2", "Up to 2", "Up to 2"],
        },
        {
          label: "Languages",
          values: [
            "English or Spanish",
            "English and Spanish",
            "English and Spanish",
          ],
        },
        {
          label: "AI conversation channels",
          values: [
            "—",
            "Web chat + WhatsApp or SMS",
            "Web chat + WhatsApp or SMS",
          ],
        },
        {
          label: "Approved business knowledge",
          values: ["—", "1 knowledge base", "1 knowledge base"],
        },
        {
          label: "Paid advertising channels",
          values: ["—", "—", "1: Meta or Google"],
        },
        {
          label: "Ad budget managed",
          values: ["—", "—", "Up to $5,000/month; media spend separate"],
        },
        {
          label: "Campaign landing pages",
          values: ["—", "—", "1 offer · 2 initial revision rounds"],
        },
        {
          label: "Static ad variations",
          values: ["—", "—", "Up to 4/month"],
        },
        {
          label: "Requested adjustments",
          values: [
            "Up to 1 hour/month",
            "Up to 2 total hours/month",
            "Up to 3 total hours/month",
          ],
        },
      ],
    },
  },
  notes: {
    title: "What the price covers, and what it does not",
    items: [
      {
        title: "The DigitalFace fee is not your advertising budget",
        body: "Capture manages advertising budgets up to $1,000/month and DigitalFace AI up to $2,500/month. That spend is paid by you, directly to the advertising platforms, from your own accounts. Higher media budgets require an adjusted management fee. We never hold or mark up your budget, and you keep the accounts, the tracking assets and the audiences.",
      },
      {
        title: "AI usage",
        body: "DigitalFace AI includes a $20 AI usage balance every month. Usage after that balance is billed at $0.40 per 1M input tokens and $2.40 per 1M output tokens. AI communication is metered, never unlimited.",
      },
      {
        title: "Email marketing",
        body: "The plan covers campaign setup and the automation that runs it. Email delivery is billed at $1.35 per 1,000 emails sent. Additional campaigns, templates or copywriting beyond the agreed scope are quoted separately.",
      },
      {
        title: "Creative production",
        body: "Included creatives are static photo and graphic ad pieces: up to 4 per month on DigitalFace AI. Video production is not included. We can connect you with an external production partner when you need it.",
      },
      {
        title: "CRM and website scope",
        body: "CRM is included for lead capture, pipeline management and follow-up — not for unlimited custom CRM development. The website is a conversion site with up to 2 lead capture forms, not unlimited pages, revisions or custom development. Managed hosting, SSL and backups are included with it.",
      },
      {
        title: "Appointment deposits",
        body: "Deposit-based confirmation is available from DigitalFace Capture onward, and it is optional: you decide which appointments ask for a deposit, a reservation fee or full prepayment, and how much. The payment is taken through your own payment provider and settles into your account. We connect the booking workflow to it — DigitalFace never holds, processes or marks up your money, and your provider's transaction fees are billed by them.",
      },
      {
        title: "No annual contract",
        body: "Every plan runs on a month-to-month basis. There is no annual contract and no minimum term, on Capture, on DigitalFace AI and on Custom engagements. The setup fee is charged once, at the start. You can move up a level at any time and we adjust the scope with you.",
      },
    ],
    guarantee:
      "Every plan is backed in writing: 30 days money back on the setup fee, live within 7 business days or the setup is free, no annual contract and no minimum term, and you own every account, asset and automation we build for you.",
  },
  includes: {
    eyebrow: "Included in every plan",
    title: "Everything you need to actually run the system",
    description:
      "We install it, train your team and support it, so it keeps working without becoming your problem.",
    investmentLabel: "Included",
    items: [
      {
        title: "Done-for-you setup",
        description:
          "We build, test and launch the system so you go live fast.",
      },
      {
        title: "CRM for lead management",
        description:
          "Lead capture, pipeline management and follow-up, included with every plan.",
      },
      {
        title: "Team onboarding",
        description:
          "A short training session so your team knows exactly how to use it.",
      },
      {
        title: "Bilingual support",
        description:
          "Updates, fixes and improvements in English and Spanish, Monday to Friday 8:00 AM – 8:00 PM ET and Saturday 8:00 AM – 6:00 PM ET.",
      },
    ],
  },
  faq: {
    eyebrow: "Quick answers",
    title: "What owners ask before booking a call",
    items: [
      {
        question: "How fast can we launch?",
        answer:
          "Most practices go live within 5 to 7 business days once we have your information and access.",
      },
      {
        question: "Do we sign an annual contract?",
        answer:
          "No. Every plan runs on a month-to-month basis, with no annual contract and no minimum term. The setup fee is charged once, at the start.",
      },
      {
        question: "Do we need to buy new software?",
        answer:
          "No. The CRM and the system come with the plan. Your team gets a login and a simple daily workflow.",
      },
      {
        question:
          "Can we ask for a deposit before an appointment is confirmed?",
        answer:
          "Yes, from DigitalFace Capture onward. The booking step can request a deposit, a reservation fee or full prepayment, and the appointment is marked confirmed once the payment clears. It is optional and set per service, the payment runs through your own payment provider and lands in your account, and it is a commitment tool rather than a guarantee of attendance.",
      },
      {
        question: "Is the advertising budget included in the price?",
        answer:
          "No. The monthly fee is our management fee. You pay the advertising platforms directly, from your own accounts. Capture manages budgets up to $1,000/month and DigitalFace AI up to $2,500/month; higher budgets require an adjusted management fee.",
      },
      {
        question: "How are AI and email usage billed?",
        answer:
          "DigitalFace AI includes a $20 AI usage balance each month. Usage beyond it is billed at $0.40 per 1M input tokens and $2.40 per 1M output tokens. Email delivery is billed at $1.35 per 1,000 emails sent.",
      },
      {
        question: "Does the plan include video production?",
        answer:
          "No. Included creatives are static photo and graphic ad pieces. When you need video, we can connect you with an external production partner.",
      },
      {
        question: "When does a Custom plan make sense?",
        answer:
          "When you need several channels, larger media budgets, more than one location, additional languages, custom integrations or advanced automation. We scope those requirements and quote them specifically for your business.",
      },
    ],
  },
  cta: {
    eyebrow: "What happens next",
    title: "See the system built around your practice",
    description:
      "Start a conversation and we will recommend the setup that matches your goals.",
    primaryCta: "Contact us",
    secondaryCta: "See the system",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Planes y Precios para Clínicas | DigitalFace Marketing",
    description:
      "DigitalFace Capture, DigitalFace AI y The DigitalFace Sales System: qué incluye cada plan, qué presupuesto publicitario gestiona cada uno y cómo se factura el uso de IA y de correo.",
  },
  hero: {
    eyebrow: "Planes y precios",
    title: "Elige el sistema que corresponde al momento de tu clínica",
    description:
      "Dos niveles administrados con alcance definido, más una opción a medida para quienes necesitan más, con las reglas de la pauta y los costos variables claros desde el principio.",
  },
  pillars: [
    {
      title: "Estandarizado",
      copy: "Un sistema probado, con entregables definidos y una puesta en marcha rápida.",
    },
    {
      title: "Automatización primero",
      copy: "Respuesta y agendamiento inmediatos para que el tiempo de reacción nunca se caiga.",
    },
    {
      title: "Hecho para equipos pequeños",
      copy: "Pensado para clínicas que no tienen un área técnica.",
    },
    {
      title: "Todo a la vista",
      copy: "Sigue cada consulta, cita y resultado en un solo proceso.",
    },
  ],
  packages: {
    eyebrow: "Precio fundador",
    intro:
      "El precio fundador está reservado para nuestros primeros 10 clientes y congelado por 12 meses. Todos los planes incluyen la gestión de la captación y el CRM. La inversión publicitaria siempre la pagas tú, directamente a las plataformas.",
    recommendedLabel: "Recomendado",
    ctaLabel: "Agenda una consulta",
    ctaContext: "Agenda una consulta sobre",
    callNote: "Definimos el alcance y la propuesta en la llamada.",
    exclusionsLabel: "No incluye",
    usageLabel: "Plataforma y consumo",
    idealForLabel: "Ideal para",
    noContract:
      "No se requiere contrato anual. Todos los planes funcionan mes a mes.",
    items: [
      {
        ...planDefinitions.capture,
        level: "01 · Captura y seguimiento",
        name: "DigitalFace Capture",
        description:
          "Organiza las consultas que recibes y mantén el seguimiento al día.",
        idealFor:
          "Una clínica con consultas constantes y un equipo disponible para atender las conversaciones.",
        features: [
          {
            title: "CRM y bandeja compartida",
            body: "Reúne contactos, conversaciones y próximos pasos en un solo lugar.",
          },
          {
            title: "Captura y primera respuesta",
            body: "Conecta dos fuentes de consultas y responde por SMS o correo.",
          },
          {
            title: "Seguimiento automático",
            body: "Mantén el contacto hasta que respondan o pidan dejar de recibir mensajes.",
          },
          {
            title: "Agendamiento y recordatorios",
            body: "Permite elegir un horario y recibir recordatorios de la cita.",
          },
          {
            title: "SMS tras llamadas perdidas",
            body: "Envía un texto cuando tu número conectado pierde una llamada.",
          },
          {
            title: "Reportes y mantenimiento",
            body: "Ve el avance de las consultas mientras cuidamos tu sistema.",
          },
        ],
        scope: "1 sede · 1 proceso comercial · 1 calendario · inglés o español",
        exclusions:
          "No incluye gestión de pauta, IA conversacional ni desarrollo de sitios web.",
        usageNote:
          "CRM y hosting estándar incluidos. Mensajería, correo y telefonía se cobran aparte al costo del proveedor.",
        details: [
          {
            title: "Qué cubre la implementación",
            body: "Configuramos tu proceso comercial, conectamos hasta 2 formularios o fuentes de leads con conexión nativa y montamos la primera respuesta, el seguimiento, el agendamiento y la respuesta a llamadas perdidas. Probamos el sistema y capacitamos a tu equipo. Migraciones e integraciones a medida se cotizan aparte.",
          },
          {
            title: "Qué gestionamos cada mes",
            body: "Monitoreo de los flujos, corrección de fallas del sistema entregado, una revisión de desempeño y hasta 1 hora de ajustes solicitados en textos o flujos. Los flujos nuevos se cotizan aparte. Tu equipo atiende las conversaciones y decide sobre las citas.",
          },
          {
            title: "Consumo y alcance",
            body: "No hay saldo de consumo incluido. Antes del lanzamiento acordamos las tarifas de los proveedores y un presupuesto mensual de consumo; los proveedores cobran directamente o detallamos esos cargos al costo. Sedes, calendarios, idiomas o fuentes de consultas adicionales requieren una nueva cotización.",
          },
          {
            title: "Cuándo subir de nivel",
            body: "Elige DigitalFace AI cuando tu equipo necesite ayuda para responder, calificar el interés y llevar las consultas a una cita confirmada. Los flujos de anticipo y recuperación de inasistencias comienzan allí.",
          },
        ],
        inherits: "Tu base de seguimiento",
        shortName: "Capture",
      },
      {
        ...planDefinitions.ai,
        level: "02 · Responde y agenda",
        name: "DigitalFace AI",
        description:
          "Responde preguntas y ayuda a las personas interesadas a agendar una cita.",
        idealFor:
          "Una clínica que pierde oportunidades por respuestas tardías y seguimiento manual.",
        features: [
          {
            title: "Asistente de IA bilingüe",
            body: "Responde preguntas aprobadas en inglés y español por chat y mensajería.",
          },
          {
            title: "Calificación del interés",
            body: "Identifica qué necesita cada persona antes de pasarla a tu equipo.",
          },
          {
            title: "Agendamiento y reprogramación",
            body: "Verifica disponibilidad y solicita confirmación antes de cambiar una cita.",
          },
          {
            title: "Entrega a tu equipo",
            body: "Pasa conversaciones sensibles al personal con todo el historial.",
          },
          {
            title: "Recuperación de inasistencias",
            body: "Contacta a quienes faltaron a su cita e invítalos a reagendar.",
          },
          {
            title: "Anticipos de cita opcionales",
            body: "Permite reservar con un anticipo a través de tu proveedor de pagos.",
          },
        ],
        scope:
          "1 sede · 1 proceso comercial · hasta 2 calendarios · 1 base de conocimiento",
        exclusions:
          "No incluye pauta, sitios web, IA de voz ni campañas masivas de correo.",
        usageNote:
          "CRM y hosting estándar incluidos. IA, mensajería, correo, telefonía y comisiones de pago se cobran aparte al costo del proveedor.",
        details: [
          {
            title: "Qué cubre la implementación",
            body: "La configuración de Capture más una base de conocimiento aprobada, chat web y un canal de mensajería (WhatsApp o SMS), respuestas en inglés y español, hasta 2 calendarios, reglas de entrega al equipo, flujos de citas, pruebas y capacitación. Se conectan hasta 2 fuentes de consultas existentes; integraciones a medida y migraciones se cotizan aparte.",
          },
          {
            title: "Qué gestionamos cada mes",
            body: "Monitoreamos el sistema, corregimos los flujos entregados, revisamos la calidad de las conversaciones, ajustamos respuestas aprobadas y reportamos el avance de consultas a citas. Incluye una revisión mensual y hasta 2 horas de cambios solicitados en la base de conocimiento o los flujos; los sistemas nuevos se cotizan aparte.",
          },
          {
            title: "Límites en el agendamiento",
            body: "La IA solo atiende preguntas administrativas e interés comercial. No diagnostica, prescribe, determina elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. Tu equipo conserva la responsabilidad. Los cambios de citas requieren disponibilidad vigente cuando corresponda y confirmación explícita; las solicitudes sensibles pasan al personal.",
          },
          {
            title: "Anticipos y consumo",
            body: "Un flujo opcional de anticipo aprobado por tu equipo puede reforzar el compromiso con la cita; no garantiza asistencia. Tu proveedor de pagos deposita el dinero en tu cuenta y cobra sus comisiones. La IA y las comunicaciones no incluyen saldo de consumo; antes del lanzamiento acordamos tarifas y presupuesto mensual, con cobro directo o cargos detallados al costo.",
          },
          {
            title: "Cuándo ampliar el sistema",
            body: "Añade el Sales System cuando necesites gestión de pauta y una landing de campaña. Más sedes, calendarios, bases de conocimiento, canales o idiomas requieren una cotización con alcance definido.",
          },
        ],
        inherits: "Todo lo de Capture, más",
        shortName: "AI",
      },
      {
        ...planDefinitions.salesSystem,
        level: "03 · Atrae y crece",
        name: "The DigitalFace Sales System",
        description:
          "Conecta la pauta con un proceso administrado de respuesta y agendamiento.",
        idealFor:
          "Una clínica lista para invertir en pauta y medir desde la consulta hasta la cita atendida.",
        features: [
          {
            title: "Pauta en Meta o Google",
            body: "Gestiona un canal publicitario prioritario alrededor de tu oferta.",
          },
          {
            title: "Landing de campaña",
            body: "Presenta tu oferta en una página enfocada en generar consultas.",
          },
          {
            title: "Anuncios estáticos",
            body: "Crea hasta cuatro variaciones mensuales con tus materiales.",
          },
          {
            title: "Optimización semanal",
            body: "Ajusta las campañas según lo que funciona y lo que necesita atención.",
          },
          {
            title: "Medición de conversiones",
            body: "Conecta anuncios con consultas, citas y asistencia registrada.",
          },
          {
            title: "Revisión mensual de crecimiento",
            body: "Revisa la captación y el agendamiento en una misma conversación.",
          },
        ],
        scope: "Alcance inicial: 1 sede · 1 oferta · 1 canal publicitario",
        exclusions:
          "Sitios web completos, foto/video profesional, SEO y reactivación masiva son proyectos aparte.",
        usageNote:
          "CRM y hosting estándar incluidos. Pagas la pauta directamente a Meta o Google. IA, mensajería y otros cargos de proveedores se cobran aparte al costo.",
        details: [
          {
            title: "Qué cubre el alcance inicial",
            body: "La implementación de DigitalFace AI más un canal de campañas en Meta o Google, medición y una landing con hasta 2 rondas de revisión. La gestión mensual incluye optimización semanal, hasta 4 variaciones estáticas con material del cliente, una revisión y hasta 3 horas totales de cambios solicitados en el sistema o la landing.",
          },
          {
            title: "Presupuesto de pauta",
            body: "El alcance inicial gestiona hasta $5,000/mes de pauta en un canal de Meta o Google. Pagas directamente a la plataforma. Un segundo canal, TikTok, ofertas adicionales o mayor inversión requieren acordar un ajuste de alcance y gestión.",
          },
          {
            title: "Cómo cotizamos el alcance a medida",
            body: "Definimos la propuesta de implementación y gestión mensual en la consulta. Más sedes, marcas, consultas, procesos comerciales, integraciones, reportes o infraestructura dedicada afectan el alcance. Acordamos entregables, capacidad de soporte y tarifas por escrito antes de empezar.",
          },
          {
            title: "Medición y consumo",
            body: "Los reportes conectan la pauta con consultas, citas y asistencia registrada por el personal; tu equipo debe mantener los resultados actualizados. No se garantizan citas ni ingresos. La IA y las comunicaciones no incluyen saldo de consumo. Acordamos tarifas y presupuesto mensual antes del lanzamiento, con cobro directo o cargos detallados al costo.",
          },
          {
            title: "Límites de la IA y de las citas",
            body: "La IA responde preguntas administrativas aprobadas y califica interés comercial; no diagnostica, prescribe, decide elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. El personal atiende los casos sensibles. Los cambios de citas requieren confirmación explícita y disponibilidad vigente cuando corresponda. Los anticipos opcionales usan tu proveedor; no garantizan asistencia.",
          },
        ],
        inherits: "Todo lo de AI, más",
        shortName: "Sales System",
      },
    ],
    comparison: {
      title: "Compara planes y alcance",
      description:
        "Revisa qué incluye cada plan y agenda una llamada para definir el alcance y la propuesta.",
      included: "Incluido",
      notIncluded: "No incluido",
      optional: "Opcional",
      featureLabel: "Servicio y para qué sirve",
      scopeLabel: "Alcance inicial y límites",
      detailsLabel: "Implementación y operación",
      scrollHint: "Desliza horizontalmente para ver los tres planes.",
      scopeNote:
        "Los ajustes son el total por plan, además del mantenimiento del sistema entregado. Más sedes, ofertas, canales, integraciones y flujos nuevos se definen en la llamada.",
      groups: [
        {
          title: "Base de seguimiento",
          items: [
            {
              id: "crm",
              title: "CRM y bandeja compartida",
              body: "Contactos, conversaciones y responsables en un solo lugar.",
              optional: false,
            },
            {
              id: "capture",
              title: "Captura de leads",
              body: "Conecta tus fuentes de consultas a la lista de contactos.",
              optional: false,
            },
            {
              id: "response",
              title: "Primera respuesta automática",
              body: "Confirma que recibiste la consulta por SMS o correo.",
              optional: false,
            },
            {
              id: "followup",
              title: "Seguimiento automático",
              body: "Mantén el contacto hasta una respuesta o solicitud de baja.",
              optional: false,
            },
            {
              id: "booking",
              title: "Agendamiento y recordatorios",
              body: "Enlaces de reserva, confirmaciones y recordatorios de la visita.",
              optional: false,
            },
            {
              id: "missedcall",
              title: "SMS tras llamada perdida",
              body: "Un mensaje cuando un número conectado pierde una llamada.",
              optional: false,
            },
            {
              id: "reporting",
              title: "Reportes y mantenimiento",
              body: "Revisión mensual del avance, monitoreo y corrección de flujos.",
              optional: false,
            },
            {
              id: "onboarding",
              title: "Configuración, capacitación y hosting",
              body: "Configuración, pruebas, capacitación y hosting estándar.",
              optional: false,
            },
          ],
        },
        {
          title: "Respuesta y agendamiento con IA",
          items: [
            {
              id: "assistant",
              title: "Asistente de IA bilingüe",
              body: "Respuestas aprobadas por chat web y WhatsApp o SMS.",
              optional: false,
            },
            {
              id: "qualification",
              title: "Calificación del interés",
              body: "Registra qué necesita cada persona para que tu equipo continúe.",
              optional: false,
            },
            {
              id: "assistedBooking",
              title: "Agendamiento asistido por IA",
              body: "Verifica disponibilidad y pide confirmación para cambios de citas.",
              optional: false,
            },
            {
              id: "handoff",
              title: "Entrega al equipo",
              body: "Pasa conversaciones al personal con su historial.",
              optional: false,
            },
            {
              id: "recovery",
              title: "Recuperación de inasistencias",
              body: "Invita a reagendar a quienes faltaron a una cita.",
              optional: false,
            },
            {
              id: "deposits",
              title: "Anticipos de cita",
              body: "Compromiso de reserva opcional mediante tu proveedor de pagos.",
              optional: true,
            },
          ],
        },
        {
          title: "Captación con pauta",
          items: [
            {
              id: "ads",
              title: "Gestión de pauta",
              body: "Un canal prioritario de Meta o Google en el alcance inicial.",
              optional: false,
            },
            {
              id: "landing",
              title: "Landing de campaña",
              body: "Una página enfocada en una oferta prioritaria.",
              optional: false,
            },
            {
              id: "creatives",
              title: "Anuncios estáticos",
              body: "Hasta cuatro variaciones mensuales con materiales del cliente.",
              optional: false,
            },
            {
              id: "optimization",
              title: "Optimización semanal",
              body: "Ajusta las campañas según sus datos de desempeño.",
              optional: false,
            },
            {
              id: "attribution",
              title: "Revisión de captación y citas",
              body: "Conecta pauta, consultas, citas y asistencia registrada por el equipo.",
              optional: false,
            },
          ],
        },
      ],
      limits: [
        {
          label: "Sedes",
          values: ["1", "1", "1 en el alcance inicial"],
        },
        {
          label: "Procesos comerciales",
          values: ["1", "1", "1 en el alcance inicial"],
        },
        {
          label: "Calendarios de citas",
          values: ["1", "Hasta 2", "Hasta 2"],
        },
        {
          label: "Fuentes de consultas existentes",
          values: ["Hasta 2", "Hasta 2", "Hasta 2"],
        },
        {
          label: "Idiomas",
          values: ["Inglés o español", "Inglés y español", "Inglés y español"],
        },
        {
          label: "Canales de conversación con IA",
          values: [
            "—",
            "Chat web + WhatsApp o SMS",
            "Chat web + WhatsApp o SMS",
          ],
        },
        {
          label: "Información aprobada del negocio",
          values: ["—", "1 base de conocimiento", "1 base de conocimiento"],
        },
        {
          label: "Canales publicitarios",
          values: ["—", "—", "1: Meta o Google"],
        },
        {
          label: "Presupuesto de pauta gestionado",
          values: ["—", "—", "Hasta $5,000/mes; pauta aparte"],
        },
        {
          label: "Landings de campaña",
          values: ["—", "—", "1 oferta · 2 rondas iniciales de revisión"],
        },
        {
          label: "Variaciones de anuncios estáticos",
          values: ["—", "—", "Hasta 4/mes"],
        },
        {
          label: "Ajustes solicitados",
          values: [
            "Hasta 1 hora/mes",
            "Hasta 2 horas totales/mes",
            "Hasta 3 horas totales/mes",
          ],
        },
      ],
    },
  },
  notes: {
    title: "Qué cubre el precio y qué no",
    items: [
      {
        title: "La tarifa de DigitalFace no es tu inversión publicitaria",
        body: "Capture gestiona presupuestos publicitarios de hasta $1,000 al mes y DigitalFace AI hasta $2,500 al mes. Esa inversión se paga directamente a las plataformas, desde tus propias cuentas. Presupuestos superiores requieren un ajuste en la tarifa de gestión. Nunca retenemos ni cobramos comisión sobre tu inversión, y tú conservas las cuentas, los píxeles y las audiencias.",
      },
      {
        title: "Uso de IA",
        body: "DigitalFace AI incluye $20 de saldo de uso de IA cada mes. El consumo por encima de ese saldo se factura a $0.40 por cada 1M de tokens de entrada y $2.40 por cada 1M de tokens de salida. La comunicación con IA es medida, nunca ilimitada.",
      },
      {
        title: "Email marketing",
        body: "El plan cubre la configuración de las campañas y la automatización que las opera. El envío de correos se factura a $1.35 por cada 1.000 correos enviados. Campañas, plantillas o textos adicionales por fuera del alcance acordado se cotizan aparte.",
      },
      {
        title: "Producción creativa",
        body: "Las piezas incluidas son estáticas, de foto o gráfica: hasta 4 al mes en DigitalFace AI. La producción de video no está incluida. Podemos conectarte con un aliado de producción externo cuando lo necesites.",
      },
      {
        title: "Alcance del CRM y del sitio web",
        body: "El CRM está incluido para captura de leads, gestión del proceso comercial y seguimiento, no para desarrollo de CRM a medida sin límite. El sitio web es un sitio de conversión con hasta 2 formularios de captura, no páginas, ajustes o desarrollo ilimitados. El hosting administrado, el SSL y los respaldos van incluidos con él.",
      },
      {
        title: "Anticipos de cita",
        body: "La confirmación con anticipo está disponible desde DigitalFace Capture y es opcional: tú decides qué citas piden anticipo, cuota de reserva o pago completo, y de cuánto. El cobro se hace con tu propio proveedor de pagos y el dinero llega a tu cuenta. Nosotros conectamos el agendamiento con él: DigitalFace nunca retiene, procesa ni marca tu dinero, y las comisiones de tu proveedor las cobra tu proveedor.",
      },
      {
        title: "Sin contrato anual",
        body: "Todos los planes funcionan mes a mes. No hay contrato anual ni permanencia mínima, ni en Capture, ni en DigitalFace AI, ni en los proyectos a medida. La implementación se cobra una sola vez, al inicio. Puedes subir de nivel cuando quieras y ajustamos el alcance contigo.",
      },
    ],
    guarantee:
      "Todos los planes quedan por escrito: 30 días de devolución sobre el valor de implementación, salida en vivo en 7 días hábiles o la implementación no se cobra, sin contrato anual ni permanencia mínima, y todas las cuentas, activos y automatizaciones que construimos quedan a tu nombre.",
  },
  includes: {
    eyebrow: "Incluido en todos los planes",
    title: "Todo lo necesario para operar el sistema de verdad",
    description:
      "Lo instalamos, capacitamos a tu equipo y lo sostenemos, para que siga funcionando sin volverse tu problema.",
    investmentLabel: "Incluido",
    items: [
      {
        title: "Implementación completa",
        description:
          "Construimos, probamos y lanzamos el sistema para que salgas rápido.",
      },
      {
        title: "CRM para gestión de leads",
        description:
          "Captura de leads, gestión del proceso comercial y seguimiento, incluidos en todos los planes.",
      },
      {
        title: "Capacitación del equipo",
        description:
          "Una sesión corta para que tu equipo sepa exactamente cómo usarlo.",
      },
      {
        title: "Soporte bilingüe",
        description:
          "Actualizaciones, ajustes y mejoras en inglés y español, de lunes a viernes de 8:00 a. m. a 8:00 p. m. ET y sábados de 8:00 a. m. a 6:00 p. m. ET.",
      },
    ],
  },
  faq: {
    eyebrow: "Respuestas rápidas",
    title: "Lo que preguntan los dueños antes de agendar",
    items: [
      {
        question: "¿Qué tan rápido podemos salir en vivo?",
        answer:
          "La mayoría de clínicas queda activa en 5 a 7 días hábiles desde que tenemos la información y los accesos.",
      },
      {
        question: "¿Se firma un contrato anual?",
        answer:
          "No. Todos los planes funcionan mes a mes, sin contrato anual ni permanencia mínima. La implementación se cobra una sola vez, al inicio.",
      },
      {
        question: "¿Tenemos que comprar software nuevo?",
        answer:
          "No. El CRM y el sistema vienen con el plan. Tu equipo recibe un acceso y una rutina diaria sencilla.",
      },
      {
        question: "¿Podemos pedir un anticipo antes de confirmar una cita?",
        answer:
          "Sí, desde DigitalFace Capture. El agendamiento puede solicitar un anticipo, una cuota de reserva o el pago completo, y la cita queda confirmada cuando el pago se acredita. Es opcional y se define por servicio, el cobro corre por tu propio proveedor de pagos y el dinero llega a tu cuenta, y es una herramienta de compromiso, no una garantía de asistencia.",
      },
      {
        question: "¿La inversión publicitaria está incluida en el precio?",
        answer:
          "No. La tarifa mensual es nuestra tarifa de gestión. La pauta se paga directamente a las plataformas, desde tus propias cuentas. Capture gestiona presupuestos de hasta $1,000 al mes y DigitalFace AI hasta $2,500 al mes; presupuestos superiores requieren un ajuste en la tarifa de gestión.",
      },
      {
        question: "¿Cómo se factura el uso de IA y de correo?",
        answer:
          "DigitalFace AI incluye $20 de saldo de uso de IA cada mes. El consumo por encima se factura a $0.40 por cada 1M de tokens de entrada y $2.40 por cada 1M de tokens de salida. El envío de correos se factura a $1.35 por cada 1.000 correos enviados.",
      },
      {
        question: "¿El plan incluye producción de video?",
        answer:
          "No. Las piezas incluidas son estáticas, de foto o gráfica. Cuando necesitas video, podemos conectarte con un aliado de producción externo.",
      },
      {
        question: "¿Cuándo tiene sentido un plan a medida?",
        answer:
          "Cuando necesitas varios canales, presupuestos publicitarios mayores, más de una sede, idiomas adicionales, integraciones a medida o automatización avanzada. Definimos esos requerimientos y los cotizamos específicamente para tu negocio.",
      },
    ],
  },
  cta: {
    eyebrow: "Qué sigue",
    title: "Mira el sistema armado alrededor de tu clínica",
    description:
      "Escríbenos y te recomendamos la configuración que corresponde a tus objetivos.",
    primaryCta: "Contáctanos",
    secondaryCta: "Ver el sistema",
  },
};

export const pricingContent: Record<Locale, typeof en> = { en, es };
export type PricingContent = typeof en;
