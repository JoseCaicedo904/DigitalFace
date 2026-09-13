import type { Locale } from "../locale";

export type PricingPackage = {
  id: string;
  recommended: boolean;
  includedFeatures: string[];
  level: string;
  name: string;
  shortName: string;
  description: string;
  adChannelCapacity: string;
  adChannelPricing: string;
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
  "ads",
  "optimization",
  "attribution",
];
const aiFeatures = [
  ...captureFeatures,
  "assistant",
  "qualification",
  "assistedBooking",
  "handoff",
  "recovery",
  "deposits",
  "emailGrowth",
  "reputationBuilder",
  "voiceAiReceptionist",
  "cancellationFill",
  "customGhlIntegrations",
  "b2bProspecting",
];
const salesFeatures = [...aiFeatures, "landing", "creatives"];
const planDefinitions = {
  capture: {
    id: "capture",
    recommended: false,
    includedFeatures: captureFeatures,
  },
  ai: { id: "ai", recommended: false, includedFeatures: aiFeatures },
  salesSystem: {
    id: "sales-system",
    recommended: true,
    includedFeatures: salesFeatures,
  },
};
const en = {
  metadata: {
    title: "Plans & Pricing for Clinic Growth Systems | DigitalFace Marketing",
    description:
      "Compare DigitalFace plans for lead capture, AI follow-up and advertising across Meta, Google and TikTok, with channel management quoted by scope and budget.",
  },
  hero: {
    eyebrow: "Plans and pricing",
    title: "Choose the help your practice needs.",
    description:
      "Organize inquiries, add AI support and activate up to three advertising channels. We set up and manage your system.",
  },
  pillars: [
    {
      title: "Defined scope",
      copy: "A proven system with clear deliverables and advertising capacity for each plan.",
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
    eyebrow: "Custom channel pricing",
    intro:
      "Every plan can activate advertising within its channel limit. Each selected channel is scoped and quoted separately according to the budget managed.",
    recommendedLabel: "Recommended",
    ctaLabel: "Book a Plan Consultation",
    ctaContext: "Book a consultation about",
    callNote:
      "We confirm the system scope, channels and custom quote on your call.",
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
          "For teams that need organized follow-up and advertising on up to one selected channel.",
        adChannelCapacity: "Up to 1 selected ad channel",
        adChannelPricing:
          "Meta (Facebook + Instagram), Google or TikTok · Each activated channel is quoted separately and scales with managed ad spend.",
        idealFor:
          "A practice ready to organize inquiries and activate one Meta, Google or TikTok channel.",
        features: [
          {
            title: "Keep every inquiry together",
            body: "Contacts, messages and next steps in one CRM and shared inbox.",
          },
          {
            title: "Reply to new inquiries",
            body: "Connect two inquiry sources and reply automatically by SMS or email.",
          },
          {
            title: "Keep the follow-up going",
            body: "Stay in touch until someone replies or opts out.",
          },
          {
            title: "Make booking easier",
            body: "Let people choose a time and receive appointment reminders.",
          },
          {
            title: "Reply to missed calls",
            body: "Send a text when your connected business number misses a call.",
          },
          {
            title: "See progress. We maintain it.",
            body: "See inquiry progress while we monitor and maintain your system.",
          },
        ],
        scope:
          "1 location · 1 pipeline · 1 calendar · English or Spanish · up to 1 selected ad channel",
        exclusions:
          "Conversational AI, campaign landing pages, custom ad creative production and full website builds are not included.",
        usageNote:
          "CRM and standard hosting included. Each activated ad channel is quoted separately based on its managed budget. Ad spend is paid directly to the selected platform; messaging, email and phone charges are separate at provider cost.",
        details: [
          {
            title: "What implementation covers",
            body: "We configure your pipeline, connect up to 2 existing forms or native lead sources, set up first response, follow-up, booking and missed-call workflows, test them and train your team. Advertising setup for up to one selected channel follows its separately approved scope. Native connections only; data migration and custom integrations are quoted separately.",
          },
          {
            title: "What we manage each month",
            body: "Workflow monitoring, fixes to the delivered system, one performance review and up to 1 hour of requested copy or workflow adjustments. Management of an activated ad channel follows its separate scope and budget-based quote. New workflows are scoped separately. Your staff handles conversations and appointment decisions.",
          },
          {
            title: "Usage and scope",
            body: "There is no included usage credit. Capture supports up to one selected ad channel, quoted separately according to that channel and its managed budget. Ad spend is paid directly to the platform. We agree other provider charges and a monthly usage budget before launch; extra locations, calendars, languages or inquiry sources require a new quote.",
          },
          {
            title: "When to upgrade",
            body: "Choose DigitalFace AI when your team needs help answering, qualifying and guiding inquiries to a confirmed appointment, with capacity for up to two selected ad channels. Deposit workflows and no-show recovery start there.",
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
          "For busy teams that need AI help and advertising on up to two selected channels.",
        adChannelCapacity: "Up to 2 selected ad channels",
        adChannelPricing:
          "Meta (Facebook + Instagram), Google or TikTok · Each activated channel is quoted separately and scales with managed ad spend.",
        idealFor:
          "A busy practice that needs AI follow-up and flexibility to activate one or two advertising channels.",
        features: [
          {
            title: "AI answers in multiple languages",
            body: "Approved questions can be handled in English, Spanish, and other supported languages.",
          },
          {
            title: "Understand patient needs",
            body: "The AI asks the right questions and identifies what someone needs before your team steps in.",
          },
          {
            title: "AI helps book and reschedule",
            body: "Check availability, suggest times, and confirm changes before updating an appointment.",
          },
          {
            title: "Bring your team in",
            body: "The AI hands sensitive or complex conversations to your staff with the context preserved.",
          },
          {
            title: "Reconnect after missed visits",
            body: "Follow up automatically with patients who did not attend and invite them to book again.",
          },
          {
            title: "AI supports optional deposits",
            body: "The AI guides patients through a reservation payment using your connected payment provider.",
          },
        ],
        scope:
          "1 location · 1 pipeline · up to 2 calendars · 1 knowledge base · up to 2 selected ad channels",
        exclusions:
          "Campaign landing pages, custom ad creative production, full website builds, voice AI and bulk email campaigns are not included.",
        usageNote:
          "CRM and standard hosting included. Each activated ad channel is quoted separately based on its managed budget. Ad spend is paid directly to the selected platforms; AI, messaging, email, phone and payment-provider charges are separate at provider cost.",
        details: [
          {
            title: "What implementation covers",
            body: "Capture setup plus one approved knowledge base, web chat and one messaging channel (WhatsApp or SMS), English and Spanish responses, up to 2 calendars, handoff rules, appointment workflows, testing and team training. Advertising setup for up to two selected channels follows their separately approved scopes. Up to 2 existing inquiry sources are connected; custom integrations and migrations are quoted separately.",
          },
          {
            title: "What we manage each month",
            body: "We monitor the system, fix delivered workflows, review conversation quality, tune approved answers and report inquiry-to-booking progress. Management of activated ad channels follows each channel's separate scope and budget-based quote. Includes one monthly review and up to 2 hours of requested knowledge-base or workflow changes; new systems are quoted separately.",
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
            body: "Add the Sales System when you need capacity for up to three selected ad channels, campaign landing pages and channel-specific creative scope. More locations, calendars, knowledge bases, channels or languages require a scoped quote.",
          },
        ],
        inherits: "Everything in Capture, plus",
        shortName: "AI",
      },
      {
        ...planDefinitions.salesSystem,
        level: "03 · Attract & grow",
        name: "The DigitalFace Sales System - Custom Plan",
        description:
          "For practices scaling the complete system across up to three selected advertising channels.",
        adChannelCapacity: "Up to 3 selected ad channels",
        adChannelPricing:
          "Meta (Facebook + Instagram), Google or TikTok · Each activated channel is quoted separately and scales with managed ad spend.",
        idealFor:
          "A practice ready to coordinate acquisition across up to three channels and measure the path from inquiry to attended appointment.",
        features: [
          {
            title: "Coordinate up to three ad channels",
            body: "Activate Meta Ads, Google Ads and TikTok Ads within your custom scope.",
          },
          {
            title: "Build pages around each offer",
            body: "Landing-page scope follows the selected channels and offers approved in your quote.",
          },
          {
            title: "Keep channel creative fresh",
            body: "Creative volume is scoped for each channel and its managed budget.",
          },
          {
            title: "Improve campaigns every week",
            body: "Adjust campaigns based on what is working and what needs attention.",
          },
          {
            title: "See which ads lead to bookings",
            body: "Connect ad activity to inquiries, bookings and recorded attendance.",
          },
          {
            title: "Review results each month",
            body: "Review acquisition and booking performance together.",
          },
        ],
        scope:
          "Custom scope: 1 location · selected offers · up to 3 selected ad channels",
        exclusions:
          "Full websites, professional photo/video, SEO and bulk reactivation are separate projects.",
        usageNote:
          "CRM and standard hosting included. Each activated ad channel is quoted separately based on its managed budget. Ad spend is paid directly to Meta, Google or TikTok; AI, messaging and other provider charges are separate at cost.",
        details: [
          {
            title: "What the custom scope covers",
            body: "DigitalFace AI implementation plus management for up to three selected channels from Meta Ads, Google Ads and TikTok Ads. Tracking, landing-page requirements, creative volume, review cadence and requested changes are defined for each activated channel before launch.",
          },
          {
            title: "Channel pricing and advertising budget",
            body: "Each activated channel has its own custom management quote. The fee scales with the advertising budget managed on that channel, along with campaign complexity and required assets. Adding a channel or increasing its budget can increase the management fee. You pay ad spend directly to each platform.",
          },
          {
            title: "How custom scope is priced",
            body: "We define your implementation and monthly management quote on the consultation. The number of activated channels, budget managed per channel, offers, locations, brands, inquiry volume, pipelines, integrations, reporting and dedicated infrastructure affect the scope. Deliverables, support capacity and fees are agreed in writing before work begins.",
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
      title: "See What’s Included",
      description: "Compare services, limits and setup details.",
      included: "Included",
      notIncluded: "Not included",
      optional: "Optional",
      featureLabel: "Service & what it does",
      scopeLabel: "Starting scope & limits",
      detailsLabel: "Setup & monthly support",
      scrollHint: "Scroll horizontally to see all three plans.",
      scopeNote:
        "Channel limits show the maximum advertising capacity of each plan, not a flat included fee. Every activated channel is quoted separately, and its management price scales with the advertising budget managed. Ad spend is paid directly to the platform.",
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
              body: "Management for Meta, Google or TikTok, quoted separately for every activated channel.",
              optional: true,
            },
            {
              id: "landing",
              title: "Campaign landing page",
              body: "Landing-page scope based on the activated channels and offers.",
              optional: true,
            },
            {
              id: "creatives",
              title: "Static ad creatives",
              body: "Creative volume scoped by channel, campaign needs and managed budget.",
              optional: true,
            },
            {
              id: "optimization",
              title: "Weekly campaign optimization",
              body: "Optimize every activated channel according to its approved scope.",
              optional: true,
            },
            {
              id: "attribution",
              title: "Acquisition & booking review",
              body: "Connect advertising, inquiries, bookings and staff-recorded attendance.",
              optional: true,
            },
          ],
        },
      ],
      addOns: {
        title: "Optional add-ons",
        items: [
          {
            id: "emailGrowth",
            title: "Email Growth",
            body: "Managed email campaigns for approved contact lists.",
            optional: true,
          },
          {
            id: "reputationBuilder",
            title: "Reputation Builder",
            body: "Automated review requests and reputation follow-up.",
            optional: true,
          },
          {
            id: "voiceAiReceptionist",
            title: "Voice AI Receptionist",
            body: "AI phone support for approved questions, qualification and booking.",
            optional: true,
          },
          {
            id: "cancellationFill",
            title: "Cancellation-Fill Automation",
            body: "Invite eligible contacts when appointment times become available.",
            optional: true,
          },
          {
            id: "customGhlIntegrations",
            title: "Custom GHL Integrations",
            body: "Connect GoHighLevel with approved business tools and workflows.",
            optional: true,
          },
          {
            id: "b2bProspecting",
            title: "B2B Prospecting & Enrichment (Scraping)",
            body: "Build business prospect lists from public sources and enrich CRM records.",
            optional: true,
          },
        ],
      },
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
          values: [
            "Up to 1: Meta, Google or TikTok",
            "Up to 2: Meta, Google and/or TikTok",
            "Up to 3: Meta, Google and TikTok",
          ],
        },
        {
          label: "Channel management pricing",
          values: [
            "Custom per channel; scales with managed budget",
            "Custom per channel; scales with managed budget",
            "Custom per channel; scales with managed budget",
          ],
        },
        {
          label: "Campaign landing pages",
          values: ["—", "—", "Custom by channel and offer"],
        },
        {
          label: "Static ad variations",
          values: ["—", "—", "Custom by channel and budget"],
        },
      ],
    },
  },
  notes: {
    title: "Costs and terms, explained",
    items: [
      {
        title: "Advertising channels and custom pricing",
        body: "Choose from Meta Ads, Google Ads and TikTok Ads. Facebook and Instagram together count as one Meta Ads channel. Capture supports up to 1 selected channel, AI up to 2 and Sales System up to 3. Every activated channel is scoped and quoted separately according to its managed budget, campaign complexity and required assets. Adding channels or increasing budget can increase the management fee. Ad spend is paid directly to each platform.",
      },
      {
        title: "AI and communication usage",
        body: "There is no included usage credit. AI, messaging, email and phone usage are billed directly by providers or itemized at provider cost. We agree provider charges and a monthly usage budget before launch. CRM and standard hosting are included.",
      },
      {
        title: "Do we need to buy new software?",
        body: "No. The CRM and the system come with the plan. Your team gets a login and a simple daily workflow.",
      },
      {
        title: "Ads and campaign pages",
        body: "Advertising is available in every plan within its channel limit and separate custom quote. Sales System can also scope campaign landing pages and channel-specific creative production. Additional pages, offers and creative volume are defined per channel. Full websites, professional photo/video, SEO and bulk reactivation remain separate projects; Voice AI and bulk email campaigns remain optional add-ons.",
      },
      {
        title: "Optional appointment deposits",
        body: "Available from DigitalFace AI. Staff approves which appointments request a deposit and how much. Your payment provider sends funds to your account and bills its fees. DigitalFace connects the booking step and never holds your funds. A deposit does not guarantee attendance.",
      },
      {
        title: "Month-to-month, with a defined scope",
        body: "No annual contract or minimum term. Setup is charged once, at the start. Included adjustments are available each week: up to 3 hours for Capture, 4 hours for AI and 6 hours for the Sales System, alongside ongoing maintenance. Advertising channels are quoted separately within each plan's capacity. New workflows and additional locations, calendars, languages or integrations are also quoted separately. You can upgrade at any time.",
      },
    ],
    guarantee:
      "Every plan is backed in writing: No annual contract, no minimum term.",
  },
  includes: {
    eyebrow: "Included in every plan",
    title: "We handle the setup and support.",
    description: "Your team gets a working system and help using it.",
    investmentLabel: "Included",
    items: [
      {
        title: "Ready for your team",
        description:
          "We build, test and launch your system, then train your team.",
      },
      {
        title: "Every inquiry in one place",
        description:
          "CRM setup and marketing automation keep contacts and follow-up organized.",
      },
      {
        title: "Bilingual support",
        description:
          "Updates, fixes and improvements in English and Spanish, Monday to Friday 8:00 AM – 8:00 PM ET and Saturday 8:00 AM – 6:00 PM ET.",
      },
    ],
  },
  cta: {
    eyebrow: "What happens next",
    title: "Find the right plan on a call.",
    description:
      "Tell us what your practice needs. We’ll recommend a plan and confirm your quote.",
    primaryCta: "Book a Call",
    secondaryCta: "See How It Works",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Planes y Precios para Clínicas | DigitalFace Marketing",
    description:
      "Compara los planes DigitalFace de captación, seguimiento con IA y pauta en Meta, Google y TikTok, con gestión cotizada según alcance y presupuesto.",
  },
  hero: {
    eyebrow: "Planes y precios",
    title: "Elige el apoyo que necesita tu clínica.",
    description:
      "Organiza las consultas, suma apoyo con IA y activa hasta tres canales publicitarios. Nosotros configuramos y gestionamos tu sistema.",
  },
  pillars: [
    {
      title: "Alcance definido",
      copy: "Un sistema probado con entregables claros y capacidad publicitaria para cada plan.",
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
    eyebrow: "Precio personalizado por canal",
    intro:
      "Cada plan puede activar pauta dentro de su límite de canales. Cada canal seleccionado se define y cotiza por separado según el presupuesto gestionado.",
    recommendedLabel: "Recomendado",
    ctaLabel: "Agendar una llamada sobre el plan",
    ctaContext: "Agendar una llamada sobre",
    callNote:
      "Confirmamos el alcance, los canales y la cotización personalizada en la llamada.",
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
          "Para equipos que necesitan ordenar el seguimiento y gestionar pauta en hasta un canal seleccionado.",
        adChannelCapacity: "Hasta 1 canal publicitario seleccionado",
        adChannelPricing:
          "Meta (Facebook + Instagram), Google o TikTok · Cada canal activo se cotiza por separado y escala con el presupuesto gestionado.",
        idealFor:
          "Una clínica lista para organizar sus consultas y activar un canal de Meta, Google o TikTok.",
        features: [
          {
            title: "Reúne todas las consultas",
            body: "Contactos, mensajes y próximos pasos en un CRM y una bandeja compartida.",
          },
          {
            title: "Responde al primer contacto",
            body: "Conecta dos fuentes de consultas y responde por SMS o correo.",
          },
          {
            title: "Mantén el seguimiento",
            body: "Mantén el contacto hasta que respondan o pidan dejar de recibir mensajes.",
          },
          {
            title: "Facilita el agendamiento",
            body: "Permite elegir un horario y recibir recordatorios de la cita.",
          },
          {
            title: "Responde a llamadas perdidas",
            body: "Envía un texto cuando tu número conectado pierde una llamada.",
          },
          {
            title: "Ve el avance. Nosotros lo mantenemos.",
            body: "Ve el avance de las consultas mientras cuidamos tu sistema.",
          },
        ],
        scope:
          "1 sede · 1 proceso comercial · 1 calendario · inglés o español · hasta 1 canal publicitario seleccionado",
        exclusions:
          "No incluye IA conversacional, landings de campaña, producción creativa personalizada para pauta ni sitios web completos.",
        usageNote:
          "CRM y hosting estándar incluidos. Cada canal publicitario activo se cotiza por separado según el presupuesto gestionado. La pauta se paga directamente a la plataforma seleccionada; mensajería, correo y telefonía se cobran aparte al costo del proveedor.",
        details: [
          {
            title: "Qué cubre la implementación",
            body: "Configuramos tu proceso comercial, conectamos hasta 2 formularios o fuentes de leads con conexión nativa y montamos la primera respuesta, el seguimiento, el agendamiento y la respuesta a llamadas perdidas. Probamos el sistema y capacitamos a tu equipo. La configuración publicitaria para hasta un canal seleccionado sigue su alcance aprobado por separado. Migraciones e integraciones a medida se cotizan aparte.",
          },
          {
            title: "Qué gestionamos cada mes",
            body: "Monitoreo de los flujos, corrección de fallas del sistema entregado, una revisión de desempeño y hasta 1 hora de ajustes solicitados en textos o flujos. La gestión del canal publicitario activo sigue su alcance y cotización basada en presupuesto. Los flujos nuevos se cotizan aparte. Tu equipo atiende las conversaciones y decide sobre las citas.",
          },
          {
            title: "Consumo y alcance",
            body: "No hay saldo de consumo incluido. Capture admite hasta un canal publicitario seleccionado, cotizado por separado según ese canal y su presupuesto gestionado. La pauta se paga directamente a la plataforma. Antes del lanzamiento acordamos los demás cargos de proveedores y el presupuesto mensual de consumo; sedes, calendarios, idiomas o fuentes de consultas adicionales requieren una nueva cotización.",
          },
          {
            title: "Cuándo subir de nivel",
            body: "Elige DigitalFace AI cuando tu equipo necesite ayuda para responder, calificar el interés y llevar las consultas a una cita confirmada, con capacidad para hasta dos canales publicitarios seleccionados. Los flujos de anticipo y recuperación de inasistencias comienzan allí.",
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
          "Para equipos que necesitan apoyo con IA y pauta en hasta dos canales seleccionados.",
        adChannelCapacity: "Hasta 2 canales publicitarios seleccionados",
        adChannelPricing:
          "Meta (Facebook + Instagram), Google o TikTok · Cada canal activo se cotiza por separado y escala con el presupuesto gestionado.",
        idealFor:
          "Una clínica que necesita seguimiento con IA y flexibilidad para activar uno o dos canales publicitarios.",
        features: [
          {
            title: "La IA responde en varios idiomas",
            body: "Las preguntas aprobadas pueden atenderse en inglés, español y otros idiomas compatibles.",
          },
          {
            title: "Entender lo que necesita el paciente",
            body: "La IA hace las preguntas adecuadas e identifica la necesidad antes de que intervenga tu equipo.",
          },
          {
            title: "La IA ayuda a agendar y reprogramar",
            body: "Consulta disponibilidad, propone horarios y confirma cambios antes de actualizar una cita.",
          },
          {
            title: "Incorporar a tu equipo",
            body: "La IA transfiere conversaciones sensibles o complejas manteniendo el contexto disponible.",
          },
          {
            title: "Retomar citas perdidas",
            body: "Hace seguimiento automático a quienes no asistieron y los invita a agendar nuevamente.",
          },
          {
            title: "La IA facilita depósitos opcionales",
            body: "La IA guía al paciente durante el pago de reserva mediante tu proveedor conectado.",
          },
        ],
        scope:
          "1 sede · 1 proceso comercial · hasta 2 calendarios · 1 base de conocimiento · hasta 2 canales publicitarios seleccionados",
        exclusions:
          "No incluye landings de campaña, producción creativa personalizada para pauta, sitios web completos, IA de voz ni campañas masivas de correo.",
        usageNote:
          "CRM y hosting estándar incluidos. Cada canal publicitario activo se cotiza por separado según el presupuesto gestionado. La pauta se paga directamente a las plataformas seleccionadas; IA, mensajería, correo, telefonía y comisiones de pago se cobran aparte al costo del proveedor.",
        details: [
          {
            title: "Qué cubre la implementación",
            body: "La configuración de Capture más una base de conocimiento aprobada, chat web y un canal de mensajería (WhatsApp o SMS), respuestas en inglés y español, hasta 2 calendarios, reglas de entrega al equipo, flujos de citas, pruebas y capacitación. La configuración publicitaria para hasta dos canales seleccionados sigue sus alcances aprobados por separado. Se conectan hasta 2 fuentes de consultas existentes; integraciones a medida y migraciones se cotizan aparte.",
          },
          {
            title: "Qué gestionamos cada mes",
            body: "Monitoreamos el sistema, corregimos los flujos entregados, revisamos la calidad de las conversaciones, ajustamos respuestas aprobadas y reportamos el avance de consultas a citas. La gestión de los canales publicitarios activos sigue el alcance y la cotización basada en presupuesto de cada canal. Incluye una revisión mensual y hasta 2 horas de cambios solicitados en la base de conocimiento o los flujos; los sistemas nuevos se cotizan aparte.",
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
            body: "Añade el Sales System cuando necesites capacidad para hasta tres canales publicitarios seleccionados, landings de campaña y un alcance creativo específico por canal. Más sedes, calendarios, bases de conocimiento, canales o idiomas requieren una cotización con alcance definido.",
          },
        ],
        inherits: "Todo lo de Capture, más",
        shortName: "AI",
      },
      {
        ...planDefinitions.salesSystem,
        level: "03 · Atrae y crece",
        name: "The DigitalFace Sales System - Custom Plan",
        description:
          "Para clínicas que quieren escalar el sistema completo en hasta tres canales publicitarios seleccionados.",
        adChannelCapacity: "Hasta 3 canales publicitarios seleccionados",
        adChannelPricing:
          "Meta (Facebook + Instagram), Google o TikTok · Cada canal activo se cotiza por separado y escala con el presupuesto gestionado.",
        idealFor:
          "Una clínica lista para coordinar la captación en hasta tres canales y medir desde la consulta hasta la cita atendida.",
        features: [
          {
            title: "Coordina hasta tres canales publicitarios",
            body: "Activa Meta Ads, Google Ads y TikTok Ads dentro de tu alcance personalizado.",
          },
          {
            title: "Crea páginas para cada oferta",
            body: "El alcance de las landings sigue los canales y las ofertas aprobadas en tu cotización.",
          },
          {
            title: "Mantén actualizada la creatividad",
            body: "El volumen creativo se define para cada canal y su presupuesto gestionado.",
          },
          {
            title: "Mejora las campañas cada semana",
            body: "Ajusta las campañas según lo que funciona y lo que necesita atención.",
          },
          {
            title: "Ve qué anuncios generan citas",
            body: "Conecta anuncios con consultas, citas y asistencia registrada.",
          },
          {
            title: "Revisa los resultados cada mes",
            body: "Revisa la captación y el agendamiento en una misma conversación.",
          },
        ],
        scope:
          "Alcance personalizado: 1 sede · ofertas seleccionadas · hasta 3 canales publicitarios seleccionados",
        exclusions:
          "Sitios web completos, foto/video profesional, SEO y reactivación masiva son proyectos aparte.",
        usageNote:
          "CRM y hosting estándar incluidos. Cada canal publicitario activo se cotiza por separado según el presupuesto gestionado. La pauta se paga directamente a Meta, Google o TikTok; IA, mensajería y otros cargos de proveedores se cobran aparte al costo.",
        details: [
          {
            title: "Qué cubre el alcance personalizado",
            body: "La implementación de DigitalFace AI más la gestión de hasta tres canales seleccionados entre Meta Ads, Google Ads y TikTok Ads. La medición, las landings necesarias, el volumen creativo, la frecuencia de revisión y los cambios solicitados se definen para cada canal activo antes del lanzamiento.",
          },
          {
            title: "Precio por canal y presupuesto de pauta",
            body: "Cada canal activo tiene su propia cotización personalizada de gestión. La tarifa escala con el presupuesto publicitario gestionado en ese canal, además de la complejidad de las campañas y los materiales necesarios. Agregar un canal o aumentar su presupuesto puede incrementar la tarifa de gestión. Pagas la pauta directamente a cada plataforma.",
          },
          {
            title: "Cómo cotizamos el alcance a medida",
            body: "Definimos la propuesta de implementación y gestión mensual en la consulta. La cantidad de canales activos, el presupuesto gestionado por canal, las ofertas, sedes, marcas, consultas, procesos comerciales, integraciones, reportes y la infraestructura dedicada afectan el alcance. Acordamos entregables, capacidad de soporte y tarifas por escrito antes de empezar.",
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
      title: "Ver qué incluye cada plan",
      description: "Compara servicios, límites y detalles de implementación.",
      included: "Incluido",
      notIncluded: "No incluido",
      optional: "Opcional",
      featureLabel: "Servicio y para qué sirve",
      scopeLabel: "Alcance inicial y límites",
      detailsLabel: "Implementación y soporte mensual",
      scrollHint: "Desliza horizontalmente para ver los tres planes.",
      scopeNote:
        "Los límites de canales muestran la capacidad publicitaria máxima de cada plan, no una tarifa plana incluida. Cada canal activo se cotiza por separado y su precio de gestión escala con el presupuesto publicitario gestionado. La pauta se paga directamente a la plataforma.",
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
              body: "Gestión de Meta, Google o TikTok, cotizada por separado para cada canal activo.",
              optional: true,
            },
            {
              id: "landing",
              title: "Landing de campaña",
              body: "Alcance de landings según los canales y las ofertas activas.",
              optional: true,
            },
            {
              id: "creatives",
              title: "Anuncios estáticos",
              body: "Volumen creativo definido por canal, necesidades de campaña y presupuesto gestionado.",
              optional: true,
            },
            {
              id: "optimization",
              title: "Optimización semanal",
              body: "Optimiza cada canal activo según su alcance aprobado.",
              optional: true,
            },
            {
              id: "attribution",
              title: "Revisión de captación y citas",
              body: "Conecta pauta, consultas, citas y asistencia registrada por el equipo.",
              optional: true,
            },
          ],
        },
      ],
      addOns: {
        title: "Servicios adicionales opcionales",
        items: [
          {
            id: "emailGrowth",
            title: "Crecimiento por correo",
            body: "Campañas de correo gestionadas para listas de contactos aprobadas.",
            optional: true,
          },
          {
            id: "reputationBuilder",
            title: "Reputación y reseñas",
            body: "Solicitudes automatizadas de reseñas y seguimiento de reputación.",
            optional: true,
          },
          {
            id: "voiceAiReceptionist",
            title: "Recepcionista con IA de voz",
            body: "Atención telefónica con IA para preguntas aprobadas, calificación y agendamiento.",
            optional: true,
          },
          {
            id: "cancellationFill",
            title: "Automatización para cubrir cancelaciones",
            body: "Invita a contactos elegibles cuando se liberan horarios de citas.",
            optional: true,
          },
          {
            id: "customGhlIntegrations",
            title: "Integraciones personalizadas con GHL",
            body: "Conecta GoHighLevel con herramientas y workflows aprobados del negocio.",
            optional: true,
          },
          {
            id: "b2bProspecting",
            title: "Prospección y enriquecimiento B2B (Scraping)",
            body: "Crea listas de empresas desde fuentes públicas y enriquece los registros del CRM.",
            optional: true,
          },
        ],
      },
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
          values: [
            "Hasta 1: Meta, Google o TikTok",
            "Hasta 2: Meta, Google y/o TikTok",
            "Hasta 3: Meta, Google y TikTok",
          ],
        },
        {
          label: "Precio de gestión por canal",
          values: [
            "Personalizado por canal; escala con el presupuesto gestionado",
            "Personalizado por canal; escala con el presupuesto gestionado",
            "Personalizado por canal; escala con el presupuesto gestionado",
          ],
        },
        {
          label: "Landings de campaña",
          values: ["—", "—", "Personalizadas por canal y oferta"],
        },
        {
          label: "Variaciones de anuncios estáticos",
          values: ["—", "—", "Personalizadas por canal y presupuesto"],
        },
      ],
    },
  },
  notes: {
    title: "Costos y condiciones claros",
    items: [
      {
        title: "Canales publicitarios y precio personalizado",
        body: "Elige entre Meta Ads, Google Ads y TikTok Ads. Facebook e Instagram juntos cuentan como un canal de Meta Ads. Capture admite hasta 1 canal seleccionado, AI hasta 2 y Sales System hasta 3. Cada canal activo se define y cotiza por separado según su presupuesto gestionado, la complejidad de las campañas y los materiales necesarios. Agregar canales o aumentar el presupuesto puede incrementar la tarifa de gestión. La pauta se paga directamente a cada plataforma.",
      },
      {
        title: "Uso de IA y comunicaciones",
        body: "No hay saldo de consumo incluido. La IA, los mensajes, el correo y la telefonía se facturan directamente por el proveedor o se detallan a costo de proveedor. Antes de activar el sistema acordamos las tarifas y un presupuesto mensual de consumo. El CRM y el alojamiento estándar están incluidos.",
      },
      {
        title: "¿Necesitamos comprar nuevo software?",
        body: "No. El CRM y el sistema vienen incluidos con el plan. Tu equipo recibe acceso y un flujo de trabajo diario sencillo.",
      },
      {
        title: "Anuncios y páginas de campaña",
        body: "La pauta está disponible en todos los planes dentro de su límite de canales y con una cotización personalizada aparte. Sales System también puede incluir landings de campaña y producción creativa específica por canal. Las páginas, ofertas y el volumen creativo adicionales se definen por canal. Los sitios completos, la foto y el video profesionales, el SEO y la reactivación masiva siguen siendo proyectos aparte; la IA de voz y las campañas masivas de correo siguen disponibles como servicios adicionales.",
      },
      {
        title: "Anticipos opcionales para citas",
        body: "Disponibles desde DigitalFace AI. Tu personal aprueba qué citas requieren anticipo y de cuánto. Tu proveedor de pagos envía el dinero a tu cuenta y cobra sus comisiones. DigitalFace conecta el agendamiento y nunca retiene tus fondos. Un anticipo no garantiza la asistencia.",
      },
      {
        title: "Mes a mes, con un alcance definido",
        body: "Sin contrato anual ni permanencia mínima. La implementación se cobra una sola vez, al inicio. Cada semana se incluyen hasta 3 horas de ajustes para Capture, 4 horas para AI y 6 horas para Sales System, además del mantenimiento continuo. Los canales publicitarios se cotizan por separado dentro de la capacidad de cada plan. Los nuevos workflows y las ubicaciones, calendarios, idiomas o integraciones adicionales también se cotizan por separado. Puedes cambiar a un plan superior en cualquier momento.",
      },
    ],
    guarantee:
      "Cada plan queda respaldado por escrito: Sin contrato anual ni permanencia mínima.",
  },
  includes: {
    eyebrow: "Incluido en todos los planes",
    title: "Nos encargamos de la implementación y el soporte.",
    description: "Tu equipo recibe un sistema listo y ayuda para usarlo.",
    investmentLabel: "Incluido",
    items: [
      {
        title: "Listo para tu equipo",
        description:
          "Construimos, probamos y activamos tu sistema. Después capacitamos a tu equipo.",
      },
      {
        title: "Cada consulta en un solo lugar",
        description:
          "El CRM y la automatización de marketing mantienen los contactos y el seguimiento organizados.",
      },
      {
        title: "Soporte bilingüe",
        description:
          "Actualizaciones, ajustes y mejoras en inglés y español, de lunes a viernes de 8:00 a. m. a 8:00 p. m. ET y sábados de 8:00 a. m. a 6:00 p. m. ET.",
      },
    ],
  },
  cta: {
    eyebrow: "Qué sigue",
    title: "Encuentra tu plan en una llamada.",
    description:
      "Cuéntanos qué necesita tu clínica. Te recomendamos un plan y confirmamos la cotización.",
    primaryCta: "Agendar una llamada",
    secondaryCta: "Ver cómo funciona",
  },
};

export const pricingContent: Record<Locale, typeof en> = { en, es };
export type PricingContent = typeof en;
