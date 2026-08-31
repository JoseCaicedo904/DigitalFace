import type { Locale } from "../locale";

/**
 * The value a package uses for an allowance row it does not include. The card
 * styles that row as "not included" by comparing against this constant, which
 * is why it is the same glyph in both locales.
 */
export const ALLOWANCE_NOT_INCLUDED = "—";

/**
 * Package names, prices, allowances and setup fees are approved commercial
 * values. They are intentionally identical in both locales.
 *
 * Every package carries the same `allowances` rows, in the same order. The
 * cards render them as a fixed list, so the three plans line up row for row and
 * a visitor can compare them without a separate comparison table. Keep the row
 * order and the row count in sync across the three packages and both locales.
 *
 * `groups` only lists what a package adds on top of the one before it. The
 * inherited scope is stated once, in `inherits`, instead of being repeated as
 * bullets — that is what keeps the third card readable.
 */
const en = {
  metadata: {
    title: "Plans & Pricing for Clinic Growth Systems | DigitalFace Marketing",
    description:
      "DigitalFace Capture, DigitalFace AI and DigitalFace Full Growth for dental, aesthetic and med spa practices: the monthly allowances in each plan, what it costs and what is billed separately.",
  },
  hero: {
    eyebrow: "Plans and pricing",
    title: "Choose the system that fits where your practice is today",
    description:
      "Three managed levels, built around dental, aesthetic medicine and med-spa patient journeys — with every monthly allowance written down.",
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
      "Reserved for our first 10 clients and held for 12 months. Every plan includes managed acquisition, so you get the traffic and the conversion system at the same level.",
    mostPopular: "Most popular",
    perMonth: "/month",
    allowancesLabel: "Included every month",
    scopeLabel: "What we build and run",
    idealForLabel: "Best for",
    adSpendLabel: "Ad budget",
    items: [
      {
        level: "Level 1 · Foundation",
        name: "DigitalFace Capture",
        price: "$790",
        setup: "$597 one-time setup",
        term: "Month to month",
        description:
          "The acquisition and response foundation: one managed channel, connected capture and a clear path to a booked appointment.",
        idealFor:
          "Practices building a dependable inquiry and follow-up foundation.",
        adSpend:
          "From $500/month, paid by you directly to the platform. We never hold or mark up your budget.",
        allowances: [
          { label: "Managed ad channels", value: "1 priority" },
          { label: "Ad creatives adapted", value: "4 / month" },
          { label: "Conversion pages", value: "1 page or form" },
          { label: "AI conversations", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Email sends", value: "5,000 / month" },
          { label: "SMS & WhatsApp", value: "500 / month" },
          { label: "Reactivation campaigns", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Client portal seats", value: "3 users" },
        ],
        inherits: null,
        groups: [
          {
            title: "Acquisition",
            items: [
              "One priority channel — Meta, Google or TikTok — chosen for your offer and your market",
              "Creative adaptation and ad copy written in English and Spanish",
              "Tracking, audiences and pixels set up on accounts that stay in your name",
            ],
          },
          {
            title: "Capture and booking",
            items: [
              "Website forms, chat widget and two-way texting feeding one shared inbox",
              "Self-scheduling calendar with confirmations, reminders and reschedule links",
              "Instant SMS and email reply, plus missed-call text back",
            ],
          },
          {
            title: "Pipeline and reporting",
            items: [
              "CRM pipeline with stages, owners and the full history of every contact",
              "Multi-day follow-up that stops the moment someone replies",
              "Monthly performance review: inquiries, bookings and cost per booked appointment",
            ],
          },
        ],
        ctaLabel: "Start with Capture",
      },
      {
        level: "Level 2 · Always answering",
        name: "DigitalFace AI",
        price: "$1,200",
        setup: "$1,097 one-time setup",
        term: "3-month initial term",
        description:
          "Adds a bilingual AI layer that answers around the clock, organizes intent and moves each opportunity toward the right next step.",
        idealFor:
          "Growing practices that need coverage and qualification after hours and on weekends.",
        adSpend:
          "From $1,000/month, paid by you directly to the platform. We never hold or mark up your budget.",
        allowances: [
          { label: "Managed ad channels", value: "1 priority" },
          { label: "Ad creatives adapted", value: "8 / month" },
          { label: "Conversion pages", value: "2 pages or forms" },
          { label: "AI conversations", value: "2,000 / month" },
          { label: "Email sends", value: "15,000 / month" },
          { label: "SMS & WhatsApp", value: "1,500 / month" },
          { label: "Reactivation campaigns", value: "1 / quarter" },
          { label: "Client portal seats", value: "5 users" },
        ],
        inherits: "Everything in DigitalFace Capture, plus",
        groups: [
          {
            title: "Bilingual AI assistant",
            items: [
              "Answers 24/7 in English and Spanish on web chat, SMS, WhatsApp, Instagram and Messenger",
              "Replies only from information you approve: services, hours, location, policies and pricing rules",
              "Clinical, financial and complaint conversations escalate to your team with an alert",
            ],
          },
          {
            title: "Qualification and booking",
            items: [
              "Treatment interest, language and booking intent organized in the CRM",
              "The assistant guides patients into your real calendar availability",
              "Comment-to-DM auto-replies on Facebook and Instagram ads and posts",
            ],
          },
          {
            title: "Retention and tuning",
            items: [
              "No-show recovery and rebooking sequences",
              "Review requests sent after every completed visit",
              "Monthly AI review of top questions, safe fallbacks and handoffs",
            ],
          },
        ],
        ctaLabel: "Start with AI",
      },
      {
        level: "Level 3 · Full system",
        name: "DigitalFace Full Growth",
        price: "$1,800",
        setup: "$1,597 one-time setup",
        term: "3-month initial term",
        description:
          "Acquisition, AI conversations, reactivation, funnel optimization and growth management in one managed system.",
        idealFor:
          "Established practices ready to run several campaigns and patient journeys at once.",
        adSpend:
          "From $2,000/month, paid by you directly to the platforms. We never hold or mark up your budget.",
        allowances: [
          { label: "Managed ad channels", value: "Up to 2" },
          { label: "Ad creatives adapted", value: "12 / month" },
          { label: "Conversion pages", value: "Up to 4 + A/B tests" },
          { label: "AI conversations", value: "4,000 / month" },
          { label: "Email sends", value: "30,000 / month" },
          { label: "SMS & WhatsApp", value: "3,000 / month" },
          { label: "Reactivation campaigns", value: "1 / month" },
          { label: "Client portal seats", value: "10 users" },
        ],
        inherits: "Everything in DigitalFace AI, plus",
        groups: [
          {
            title: "Multi-channel acquisition",
            items: [
              "Up to two managed channels running together, with budget shifted toward what performs",
              "Several treatments, offers or locations promoted at the same time",
              "A/B testing on hooks, formats and audiences every month",
            ],
          },
          {
            title: "Funnels and web",
            items: [
              "Landing pages and funnel optimization, with managed hosting, SSL and backups included",
              "Conversion testing across pages, forms and booking steps",
              "Live dashboard connecting ad spend, bookings and closed revenue",
            ],
          },
          {
            title: "Growth management",
            items: [
              "One database reactivation campaign per month, segmented by treatment and history",
              "One promotional or newsletter email to your patient list each month",
              "Monthly growth strategy session with your account lead",
              "Priority support with same-business-day response",
            ],
          },
        ],
        ctaLabel: "Start with Full Growth",
      },
    ],
  },
  notes: {
    title: "What the price covers, and what it does not",
    items: [
      {
        title: "Ad spend is separate, and it stays yours",
        body: "The ad budgets above are paid by you directly to the advertising platforms, from your own accounts. We never hold or mark up your budget, and you keep the accounts, the tracking assets and the audiences.",
      },
      {
        title: "AI conversations",
        body: "DigitalFace AI includes 2,000 AI-handled conversations per month and Full Growth includes 4,000. Extra conversations are $0.06 each. We warn you at 80% of any allowance, so nothing arrives as a surprise.",
      },
      {
        title: "Email, SMS and WhatsApp",
        body: "Each plan includes the monthly sending allowance shown on its card, covering follow-up, reminders, reactivation and campaigns. Beyond it, extra emails are $3 per 1,000 and extra SMS or WhatsApp messages are $0.03 each. Carrier registration for business texting is handled during setup.",
      },
      {
        title: "Creative and content",
        body: "Extra creatives beyond your monthly allowance are $45 each. You supply the raw photos and video; we handle the adaptation and the copy in both languages.",
      },
      {
        title: "Hosting and infrastructure",
        body: "When a site or landing page is part of your plan, managed hosting is included with 100 GB of bandwidth and 1,000 build minutes per month, plus SSL and backups. Anything above that is quoted before it changes.",
      },
      {
        title: "Terms and plan changes",
        body: "Capture runs month to month. AI and Full Growth start with a 3-month term so the acquisition and conversion systems have time to stabilize. You can move up a level at any time and the new allowances apply the same day, with no new setup fee.",
      },
    ],
    guarantee:
      "Every plan is backed in writing: 30 days money back on the setup fee, live within 7 business days or the setup is free, no commitment beyond the initial term stated above, and you own every account, asset and automation we build for you.",
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
        title: "Branded client portal",
        description:
          "Your own login with a simple inbox, calendar and pipeline view.",
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
        question: "Do we need to buy new software?",
        answer:
          "No. The system comes with the plan. Your team gets a login and a simple daily workflow.",
      },
      {
        question: "Is this just software?",
        answer:
          "No. It is a done-for-you system that we install, configure and maintain for you.",
      },
      {
        question: "Do you handle the advertising too?",
        answer:
          "Yes. Every plan includes managed acquisition. We choose the priority channel or channel mix based on your audience, your offer, your market and the approved ad budget.",
      },
      {
        question: "What happens if we go over an allowance?",
        answer:
          "Nothing stops. We notify you at 80% of any allowance and bill the overage at the published rate: $0.06 per extra AI conversation, $0.03 per extra SMS or WhatsApp message, $3 per extra 1,000 emails and $45 per extra creative.",
      },
      {
        question: "Can we move between plans?",
        answer:
          "Yes. Move up at any time and the new allowances apply the same day, with no new setup fee. Moving down takes effect at the end of your current term.",
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
      "DigitalFace Capture, DigitalFace AI y DigitalFace Full Growth para clínicas odontológicas, de medicina estética y med spas: los cupos mensuales de cada plan, cuánto cuesta y qué se factura aparte.",
  },
  hero: {
    eyebrow: "Planes y precios",
    title: "Elige el sistema que corresponde al momento de tu clínica",
    description:
      "Tres niveles administrados, construidos alrededor del recorrido de pacientes en odontología, medicina estética y med spas, con todos los cupos mensuales por escrito.",
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
      "Reservado para nuestros primeros 10 clientes y congelado por 12 meses. Todos los planes incluyen la gestión de pauta, así que recibes el tráfico y el sistema de conversión en el mismo nivel.",
    mostPopular: "Más elegido",
    perMonth: "/mes",
    allowancesLabel: "Incluido cada mes",
    scopeLabel: "Lo que construimos y operamos",
    idealForLabel: "Ideal para",
    adSpendLabel: "Inversión en pauta",
    items: [
      {
        level: "Nivel 1 · Base",
        name: "DigitalFace Capture",
        price: "$790",
        setup: "$597 de implementación única",
        term: "Mes a mes",
        description:
          "La base de captación y respuesta: un canal administrado, captura conectada y un camino claro hasta la cita agendada.",
        idealFor:
          "Clínicas que están armando una base confiable de consultas y seguimiento.",
        adSpend:
          "Desde $500 al mes, que pagas directamente a la plataforma. Nunca retenemos ni cobramos comisión sobre tu inversión.",
        allowances: [
          { label: "Canales de pauta", value: "1 prioritario" },
          { label: "Piezas publicitarias", value: "4 / mes" },
          { label: "Páginas de conversión", value: "1 página o formulario" },
          { label: "Conversaciones con IA", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Envíos de correo", value: "5.000 / mes" },
          { label: "SMS y WhatsApp", value: "500 / mes" },
          { label: "Reactivación", value: ALLOWANCE_NOT_INCLUDED },
          { label: "Usuarios del portal", value: "3 usuarios" },
        ],
        inherits: null,
        groups: [
          {
            title: "Captación",
            items: [
              "Un canal prioritario — Meta, Google o TikTok — elegido según tu oferta y tu mercado",
              "Adaptación de piezas y textos publicitarios en inglés y español",
              "Medición, audiencias y píxeles configurados en cuentas que quedan a tu nombre",
            ],
          },
          {
            title: "Captura y agendamiento",
            items: [
              "Formularios del sitio, widget de chat y conversaciones por SMS en una sola bandeja",
              "Calendario de autoagendamiento con confirmaciones, recordatorios y reprogramación",
              "Respuesta inmediata por SMS y correo, más mensaje automático por llamada perdida",
            ],
          },
          {
            title: "Proceso y reportes",
            items: [
              "Proceso comercial en el CRM con etapas, responsables e historial completo de cada contacto",
              "Seguimiento de varios días que se detiene apenas la persona responde",
              "Revisión mensual de desempeño: consultas, citas agendadas y costo por cita",
            ],
          },
        ],
        ctaLabel: "Empezar con Capture",
      },
      {
        level: "Nivel 2 · Siempre respondiendo",
        name: "DigitalFace AI",
        price: "$1,200",
        setup: "$1,097 de implementación única",
        term: "Periodo inicial de 3 meses",
        description:
          "Suma una capa de IA bilingüe que responde a toda hora, organiza la intención y lleva cada oportunidad al siguiente paso correcto.",
        idealFor:
          "Clínicas en crecimiento que necesitan cobertura y calificación fuera del horario y los fines de semana.",
        adSpend:
          "Desde $1,000 al mes, que pagas directamente a la plataforma. Nunca retenemos ni cobramos comisión sobre tu inversión.",
        allowances: [
          { label: "Canales de pauta", value: "1 prioritario" },
          { label: "Piezas publicitarias", value: "8 / mes" },
          { label: "Páginas de conversión", value: "2 páginas o formularios" },
          { label: "Conversaciones con IA", value: "2.000 / mes" },
          { label: "Envíos de correo", value: "15.000 / mes" },
          { label: "SMS y WhatsApp", value: "1.500 / mes" },
          { label: "Reactivación", value: "1 / trimestre" },
          { label: "Usuarios del portal", value: "5 usuarios" },
        ],
        inherits: "Todo lo de DigitalFace Capture, y además",
        groups: [
          {
            title: "Asistente con IA bilingüe",
            items: [
              "Responde 24/7 en inglés y español por chat web, SMS, WhatsApp, Instagram y Messenger",
              "Solo responde con la información que apruebas: servicios, horarios, ubicación, políticas y reglas de precio",
              "Las conversaciones clínicas, financieras y los reclamos pasan a tu equipo con una alerta",
            ],
          },
          {
            title: "Calificación y agendamiento",
            items: [
              "Interés por tratamiento, idioma e intención de agendar organizados en el CRM",
              "El asistente guía a cada paciente hacia la disponibilidad real de tu calendario",
              "Respuestas automáticas de comentario a mensaje directo en anuncios y publicaciones de Facebook e Instagram",
            ],
          },
          {
            title: "Retención y mejora",
            items: [
              "Recuperación de inasistencias y secuencias de reagendamiento",
              "Solicitud de reseñas después de cada visita completada",
              "Revisión mensual de la IA: preguntas frecuentes, respuestas seguras y traspasos",
            ],
          },
        ],
        ctaLabel: "Empezar con AI",
      },
      {
        level: "Nivel 3 · Sistema completo",
        name: "DigitalFace Full Growth",
        price: "$1,800",
        setup: "$1,597 de implementación única",
        term: "Periodo inicial de 3 meses",
        description:
          "Captación, conversaciones con IA, reactivación, optimización del embudo y gestión de crecimiento en un solo sistema.",
        idealFor:
          "Clínicas consolidadas listas para manejar varias campañas y recorridos de paciente a la vez.",
        adSpend:
          "Desde $2,000 al mes, que pagas directamente a las plataformas. Nunca retenemos ni cobramos comisión sobre tu inversión.",
        allowances: [
          { label: "Canales de pauta", value: "Hasta 2" },
          { label: "Piezas publicitarias", value: "12 / mes" },
          { label: "Páginas de conversión", value: "Hasta 4 + pruebas A/B" },
          { label: "Conversaciones con IA", value: "4.000 / mes" },
          { label: "Envíos de correo", value: "30.000 / mes" },
          { label: "SMS y WhatsApp", value: "3.000 / mes" },
          { label: "Reactivación", value: "1 / mes" },
          { label: "Usuarios del portal", value: "10 usuarios" },
        ],
        inherits: "Todo lo de DigitalFace AI, y además",
        groups: [
          {
            title: "Captación multicanal",
            items: [
              "Hasta dos canales administrados en paralelo, moviendo el presupuesto hacia lo que funciona",
              "Varios tratamientos, promociones o sedes promocionados al mismo tiempo",
              "Pruebas A/B de ganchos, formatos y audiencias todos los meses",
            ],
          },
          {
            title: "Embudos y web",
            items: [
              "Landing pages y optimización del embudo, con hosting administrado, SSL y respaldos incluidos",
              "Pruebas de conversión en páginas, formularios y pasos de agendamiento",
              "Tablero en vivo que conecta inversión, citas agendadas y ventas cerradas",
            ],
          },
          {
            title: "Gestión de crecimiento",
            items: [
              "Una campaña de reactivación de base de datos al mes, segmentada por tratamiento e historial",
              "Un correo promocional o boletín a tu base de pacientes cada mes",
              "Sesión mensual de estrategia de crecimiento con tu responsable de cuenta",
              "Soporte prioritario con respuesta el mismo día hábil",
            ],
          },
        ],
        ctaLabel: "Empezar con Full Growth",
      },
    ],
  },
  notes: {
    title: "Qué cubre el precio y qué no",
    items: [
      {
        title: "La inversión en pauta va aparte y sigue siendo tuya",
        body: "Los presupuestos de pauta se pagan directamente a las plataformas desde tus propias cuentas. Nunca retenemos ni cobramos comisión sobre tu inversión, y tú conservas las cuentas, los píxeles y las audiencias.",
      },
      {
        title: "Conversaciones con IA",
        body: "DigitalFace AI incluye 2.000 conversaciones atendidas por IA al mes y Full Growth incluye 4.000. Cada conversación adicional cuesta $0.06. Te avisamos al llegar al 80% de cualquier cupo, así nada llega por sorpresa.",
      },
      {
        title: "Correo, SMS y WhatsApp",
        body: "Cada plan incluye el cupo mensual de envíos que aparece en su tarjeta, entre seguimiento, recordatorios, reactivación y campañas. Por encima de ese cupo, cada 1.000 correos adicionales cuestan $3 y cada SMS o mensaje de WhatsApp adicional cuesta $0.03. El registro ante los operadores para mensajería comercial se gestiona durante la implementación.",
      },
      {
        title: "Piezas creativas y contenido",
        body: "Las piezas adicionales al cupo mensual cuestan $45 cada una. Tú entregas las fotos y videos originales; nosotros hacemos la adaptación y los textos en los dos idiomas.",
      },
      {
        title: "Hosting e infraestructura",
        body: "Cuando el plan incluye un sitio o una landing page, el hosting administrado va incluido con 100 GB de tráfico y 1.000 minutos de compilación al mes, además de SSL y respaldos. Cualquier consumo mayor se cotiza antes de cambiar algo.",
      },
      {
        title: "Condiciones y cambios de plan",
        body: "Capture es mes a mes. AI y Full Growth arrancan con un periodo inicial de 3 meses para que los sistemas de captación y conversión alcancen a estabilizarse. Puedes subir de nivel cuando quieras y los nuevos cupos aplican el mismo día, sin volver a pagar implementación.",
      },
    ],
    guarantee:
      "Todos los planes quedan por escrito: 30 días de devolución sobre el valor de implementación, salida en vivo en 7 días hábiles o la implementación no se cobra, sin compromiso más allá del periodo inicial indicado arriba, y todas las cuentas, activos y automatizaciones que construimos quedan a tu nombre.",
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
        title: "Portal de cliente con tu marca",
        description:
          "Tu propio acceso con bandeja de entrada, calendario y vista del proceso.",
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
        question: "¿Tenemos que comprar software nuevo?",
        answer:
          "No. El sistema viene con el plan. Tu equipo recibe un acceso y una rutina diaria sencilla.",
      },
      {
        question: "¿Esto es solo software?",
        answer:
          "No. Es un sistema llave en mano que nosotros instalamos, configuramos y mantenemos.",
      },
      {
        question: "¿Ustedes también manejan la pauta?",
        answer:
          "Sí. Todos los planes incluyen la gestión de la captación. Elegimos el canal prioritario o la mezcla de canales según tu audiencia, tu oferta, tu mercado y el presupuesto aprobado.",
      },
      {
        question: "¿Qué pasa si superamos un cupo?",
        answer:
          "Nada se detiene. Te avisamos al llegar al 80% de cualquier cupo y facturamos el excedente a la tarifa publicada: $0.06 por conversación adicional con IA, $0.03 por SMS o mensaje de WhatsApp adicional, $3 por cada 1.000 correos adicionales y $45 por pieza creativa adicional.",
      },
      {
        question: "¿Podemos cambiar de plan?",
        answer:
          "Sí. Puedes subir de nivel cuando quieras y los nuevos cupos aplican el mismo día, sin volver a pagar implementación. Bajar de nivel aplica al terminar el periodo vigente.",
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
