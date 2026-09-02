import type { Locale } from "../locale";

/**
 * The value an allowance row uses when the package does not include that
 * capability. The card styles the row as "not included" by comparing against
 * this constant, which is why it is the same glyph in both locales.
 */
export const ALLOWANCE_NOT_INCLUDED = "—";

export type PricingAllowance = { label: string; value: string };
export type PricingScopeGroup = { title: string; items: string[] };

/**
 * One package card.
 *
 * The three cards are deliberately not three sizes of the same list. Capture
 * and AI are fixed-scope plans with a price, a media-budget ceiling and an
 * allowance table; Custom carries no price, no allowance table and no fixed
 * quantities — only examples of what a scoped engagement can include.
 */
export type PricingPackage = {
  level: string;
  name: string;
  /** Rendered as-is: a money amount on the fixed plans, a word on Custom. */
  price: string;
  /** Fixed plans append the "/month" suffix; Custom does not. */
  perMonth: boolean;
  /** Fixed plans only. */
  setup: string | null;
  term: string | null;
  /** Custom only: replaces the setup/term line under the price. */
  priceCaption: string | null;
  description: string;
  idealFor: string;
  /** Empty on Custom, which has no fixed quantities to compare. */
  allowances: PricingAllowance[];
  inherits: string | null;
  scopeLabel: string;
  /** Custom only: says out loud that the list below is not an inclusion list. */
  scopeNote: string | null;
  groups: PricingScopeGroup[];
  /** Media-budget rules on the fixed plans; what a quote depends on on Custom. */
  note: { title: string; body: string };
  /** Small print for usage-based billing. Rendered under the scope list. */
  footnotes: string[];
  ctaLabel: string;
};

/**
 * Package names, prices, media-budget ceilings and usage rates are approved
 * commercial values. They are intentionally identical in both locales.
 *
 * Two rules keep this file honest, and both are commercial, not editorial:
 *
 * 1. The DigitalFace fee never includes the advertising budget. Every fixed
 *    plan states the media budget it manages and says the spend is paid by the
 *    client directly to the platforms.
 * 2. Anything metered — AI usage, email delivery — is described as a balance or
 *    a rate, never as an allowance that could read as unlimited.
 *
 * Capture and AI share the same `allowances` labels, in the same order, so the
 * two cards compare row for row. Custom has none by design.
 */
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
    mostPopular: "Most popular",
    perMonth: "/month",
    allowancesLabel: "What is included",
    idealForLabel: "Best for",
    noContract:
      "No annual contract required. Every plan runs on a month-to-month basis.",
    items: [
      {
        level: "Level 1 · Foundation",
        name: "DigitalFace Capture",
        price: "$890",
        perMonth: true,
        setup: "$597 one-time setup",
        term: "Month to month",
        priceCaption: null,
        description:
          "The entry level: one managed paid channel, CRM and automatic first response, so every inquiry is captured and organized.",
        idealFor:
          "Businesses that need to start generating inquiries and stop losing them.",
        allowances: [
          { label: "Paid acquisition", value: "1 priority channel" },
          { label: "Ad budget managed", value: "Up to $1,000 / mo" },
          { label: "CRM for lead management", value: "Included" },
          { label: "Deposit-based booking", value: "Optional" },
          { label: "Conversion website", value: ALLOWANCE_NOT_INCLUDED },
          { label: "AI communication", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Email marketing", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Static ad creatives", value: ALLOWANCE_NOT_INCLUDED },
        ],
        inherits: null,
        scopeLabel: "What we build and run",
        scopeNote: null,
        groups: [
          {
            title: "Acquisition",
            items: [
              "One priority paid channel — Meta, Google or TikTok — set up and managed by us",
              "Campaign structure, audiences and ongoing optimization",
              "Conversion tracking and a monthly performance report",
            ],
          },
          {
            title: "CRM and lead capture",
            items: [
              "CRM included for lead capture, pipeline management and follow-up",
              "Every inquiry organized in one pipeline, with its source and stage",
              "Booking connected to your calendar, with confirmations and reminders",
              "Optional deposit or booking fee before an appointment is confirmed, taken through your own payment provider",
            ],
          },
          {
            title: "First response",
            items: [
              "Automatic first response by SMS and email",
              "Basic follow-up that runs until the lead replies",
            ],
          },
        ],
        note: {
          title: "Advertising budget",
          body: "Management includes advertising budgets up to $1,000/month. Media spend is paid directly by you to the advertising platforms. Higher media budgets require an adjusted management fee.",
        },
        footnotes: [],
        ctaLabel: "Start with Capture",
      },
      {
        level: "Level 2 · Growth",
        name: "DigitalFace AI",
        price: "$1,490",
        perMonth: true,
        setup: "$1,097 one-time setup",
        term: "Month to month",
        priceCaption: null,
        description:
          "The complete growth setup: acquisition, CRM, conversion website, AI communication and campaign infrastructure in one managed system.",
        idealFor:
          "Businesses that want the full acquisition and conversion system running for them.",
        allowances: [
          { label: "Paid acquisition", value: "2 priority channels" },
          { label: "Ad budget managed", value: "Up to $2,500 / mo" },
          { label: "CRM for lead management", value: "Included" },
          { label: "Deposit-based booking", value: "Optional" },
          { label: "Conversion website", value: "Site + 2 forms" },
          { label: "AI communication", value: "$20 balance / mo" },
          { label: "Email marketing", value: "Setup + automation" },
          { label: "Static ad creatives", value: "Up to 4 / month" },
        ],
        inherits: "Everything in DigitalFace Capture, plus",
        scopeLabel: "What we build and run",
        scopeNote: null,
        groups: [
          {
            title: "Conversion website",
            items: [
              "Conversion-focused website with up to 2 lead capture forms",
              "Forms connected directly to your CRM and your pipeline",
            ],
          },
          {
            title: "AI communication",
            items: [
              "AI assistant answering in English and Spanish, with a $20 monthly usage balance included",
              "Qualifies interest, answers approved questions and guides people toward booking",
              "Hands the conversation to your team when a person is needed",
            ],
          },
          {
            title: "Campaign infrastructure",
            items: [
              "Two priority paid channels — Meta, Google or TikTok — managed together",
              "Email marketing campaign setup and automation",
              "Up to 4 static photo/graphic ad creatives per month",
              "Automated follow-up and reminders across the journey",
            ],
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
        ctaLabel: "Start with AI",
      },
      {
        level: "Custom",
        name: "The DigitalFace Sales System",
        price: "Custom",
        perMonth: false,
        setup: null,
        term: null,
        priceCaption: "Scoped and quoted around your requirements",
        description:
          "For businesses with larger budgets, several locations, advanced acquisition, complex automation or custom integrations.",
        idealFor: "Businesses whose requirements go beyond a fixed package.",
        allowances: [],
        inherits: null,
        scopeLabel: "Custom scope may include",
        scopeNote:
          "These are available capabilities, not a fixed inclusion list. We scope and quote only what your business actually needs.",
        groups: [
          {
            title: "Acquisition and reach",
            items: [
              "Multiple acquisition channels",
              "Larger advertising budgets",
              "Additional locations",
              "Additional languages",
            ],
          },
          {
            title: "Systems and automation",
            items: [
              "Advanced CRM architecture",
              "Advanced AI communication",
              "Custom integrations",
              "Advanced automations",
              "Deposit and prepayment rules by service, provider or location",
              "Custom funnels and landing experiences",
            ],
          },
          {
            title: "Growth and support",
            items: [
              "Database reactivation",
              "Advanced reporting",
              "Priority support",
            ],
          },
        ],
        note: {
          title: "How the price is built",
          body: "Your requirements, advertising budget, channels, locations, integrations, AI usage, automation complexity and support level. We map the scope with you before quoting anything.",
        },
        footnotes: [],
        ctaLabel: "Build a custom plan",
      },
    ] satisfies PricingPackage[],
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
    mostPopular: "Más elegido",
    perMonth: "/mes",
    allowancesLabel: "Qué incluye",
    idealForLabel: "Ideal para",
    noContract:
      "No se requiere contrato anual. Todos los planes funcionan mes a mes.",
    items: [
      {
        level: "Nivel 1 · Base",
        name: "DigitalFace Capture",
        price: "$890",
        perMonth: true,
        setup: "$597 de implementación única",
        term: "Mes a mes",
        priceCaption: null,
        description:
          "El nivel de entrada: un canal pago administrado, CRM y respuesta automática inmediata, para que ninguna consulta se pierda.",
        idealFor:
          "Negocios que necesitan empezar a generar consultas y dejar de perderlas.",
        allowances: [
          { label: "Captación paga", value: "1 canal prioritario" },
          { label: "Pauta gestionada", value: "Hasta $1,000 / mes" },
          { label: "CRM para gestión de leads", value: "Incluido" },
          { label: "Reserva con anticipo", value: "Opcional" },
          { label: "Sitio web de conversión", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Comunicación con IA", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Email marketing", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Piezas estáticas", value: ALLOWANCE_NOT_INCLUDED },
        ],
        inherits: null,
        scopeLabel: "Lo que construimos y operamos",
        scopeNote: null,
        groups: [
          {
            title: "Captación",
            items: [
              "Un canal pago prioritario — Meta, Google o TikTok — configurado y administrado por nosotros",
              "Estructura de campañas, audiencias y optimización continua",
              "Medición de conversiones y reporte mensual de desempeño",
            ],
          },
          {
            title: "CRM y captura de leads",
            items: [
              "CRM incluido para captura de leads, gestión del proceso comercial y seguimiento",
              "Cada consulta queda organizada en un solo proceso, con su origen y su etapa",
              "Agendamiento conectado a tu calendario, con confirmaciones y recordatorios",
              "Anticipo o cuota de reserva opcional antes de confirmar una cita, cobrado con tu propio proveedor de pagos",
            ],
          },
          {
            title: "Primera respuesta",
            items: [
              "Respuesta automática inmediata por SMS y correo",
              "Seguimiento básico que corre hasta que la persona responde",
            ],
          },
        ],
        note: {
          title: "Presupuesto publicitario",
          body: "La gestión incluye presupuestos publicitarios de hasta $1,000 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
        },
        footnotes: [],
        ctaLabel: "Empezar con Capture",
      },
      {
        level: "Nivel 2 · Crecimiento",
        name: "DigitalFace AI",
        price: "$1,490",
        perMonth: true,
        setup: "$1,097 de implementación única",
        term: "Mes a mes",
        priceCaption: null,
        description:
          "El sistema de crecimiento completo: captación, CRM, sitio web de conversión, comunicación con IA e infraestructura de campañas en un solo lugar.",
        idealFor:
          "Negocios que quieren todo el sistema de captación y conversión funcionando por ellos.",
        allowances: [
          { label: "Captación paga", value: "2 canales prioritarios" },
          { label: "Pauta gestionada", value: "Hasta $2,500 / mes" },
          { label: "CRM para gestión de leads", value: "Incluido" },
          { label: "Reserva con anticipo", value: "Opcional" },
          { label: "Sitio web de conversión", value: "Sitio + 2 formularios" },
          { label: "Comunicación con IA", value: "$20 de saldo / mes" },
          { label: "Email marketing", value: "Setup + automatización" },
          { label: "Piezas estáticas", value: "Hasta 4 / mes" },
        ],
        inherits: "Todo lo de DigitalFace Capture, y además",
        scopeLabel: "Lo que construimos y operamos",
        scopeNote: null,
        groups: [
          {
            title: "Sitio web de conversión",
            items: [
              "Sitio web enfocado en conversión con hasta 2 formularios de captura",
              "Formularios conectados directamente a tu CRM y a tu proceso comercial",
            ],
          },
          {
            title: "Comunicación con IA",
            items: [
              "Asistente con IA que responde en inglés y español, con $20 de saldo de uso incluidos cada mes",
              "Califica el interés, responde lo que apruebas y guía a la persona hacia el agendamiento",
              "Entrega la conversación a tu equipo cuando se necesita una persona",
            ],
          },
          {
            title: "Infraestructura de campañas",
            items: [
              "Dos canales pagos prioritarios — Meta, Google o TikTok — administrados en conjunto",
              "Configuración y automatización de campañas de email marketing",
              "Hasta 4 piezas publicitarias estáticas (foto o gráfica) al mes",
              "Seguimiento y recordatorios automáticos a lo largo del recorrido",
            ],
          },
        ],
        note: {
          title: "Presupuesto publicitario",
          body: "La gestión incluye presupuestos publicitarios de hasta $2,500 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
        },
        footnotes: [
          "El uso de IA por encima del saldo de $20 incluido se factura a $0.40 por cada 1M de tokens de entrada y $2.40 por cada 1M de tokens de salida.",
          "El envío de correos se factura a $1.35 por cada 1.000 correos enviados.",
          "La producción de video no está incluida. Podemos conectarte con un aliado de producción externo cuando lo necesites.",
        ],
        ctaLabel: "Empezar con AI",
      },
      {
        level: "A medida",
        name: "The DigitalFace Sales System",
        price: "A medida",
        perMonth: false,
        setup: null,
        term: null,
        priceCaption: "Se define y se cotiza según tus requerimientos",
        description:
          "Para negocios con presupuestos mayores, varias sedes, captación avanzada, automatización compleja o integraciones a medida.",
        idealFor:
          "Negocios cuyos requerimientos van más allá de un paquete fijo.",
        allowances: [],
        inherits: null,
        scopeLabel: "El alcance a medida puede incluir",
        scopeNote:
          "Son capacidades disponibles, no una lista de inclusiones fijas. Definimos y cotizamos únicamente lo que tu negocio realmente necesita.",
        groups: [
          {
            title: "Captación y alcance",
            items: [
              "Varios canales de captación",
              "Presupuestos publicitarios mayores",
              "Sedes adicionales",
              "Idiomas adicionales",
            ],
          },
          {
            title: "Sistemas y automatización",
            items: [
              "Arquitectura de CRM avanzada",
              "Comunicación con IA avanzada",
              "Integraciones a medida",
              "Automatizaciones avanzadas",
              "Reglas de anticipos y prepagos por servicio, profesional o sede",
              "Embudos y landings a medida",
            ],
          },
          {
            title: "Crecimiento y soporte",
            items: [
              "Reactivación de base de datos",
              "Reportería avanzada",
              "Soporte prioritario",
            ],
          },
        ],
        note: {
          title: "Cómo se construye el precio",
          body: "Tus requerimientos, el presupuesto publicitario, los canales, las sedes, las integraciones, el uso de IA, la complejidad de las automatizaciones y el nivel de soporte. Definimos el alcance contigo antes de cotizar.",
        },
        footnotes: [],
        ctaLabel: "Arma tu plan a medida",
      },
    ],
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
