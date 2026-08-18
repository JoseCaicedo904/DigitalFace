import type { Locale } from "../locale";

/**
 * Package names, prices and setup fees are approved commercial values.
 * They are intentionally identical in both locales.
 */
const en = {
  metadata: {
    title: "Plans | DigitalFace Marketing",
    description:
      "DigitalFace Capture, DigitalFace AI and DigitalFace Full Growth: what each plan includes, what it costs and what is billed separately.",
  },
  hero: {
    eyebrow: "Plans and pricing",
    title: "Choose the system that fits where your practice is today",
    description:
      "Three managed levels, built around dental, aesthetic medicine and med-spa patient journeys.",
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
    scopeLabel: "Growth system scope",
    idealForLabel: "Ideal for",
    items: [
      {
        name: "DigitalFace Capture",
        price: "$790",
        setup: "$597 one-time setup",
        description:
          "The acquisition and response foundation: one priority channel, connected capture and a clear path to a booked appointment.",
        idealFor:
          "Practices building a dependable inquiry and follow-up foundation.",
        scope: ["1 priority acquisition channel", "Capture and booking"],
        adSpend:
          "Recommended media budget from $500/month, paid by you directly to the platform.",
        includes: [
          "One priority paid channel, managed by us",
          "4 ad creatives adapted per month",
          "Connected lead-capture experience",
          "Instant SMS and email response",
          "Appointment booking with reminders",
          "Visual pipeline setup",
          "English and Spanish setup",
        ],
        ctaLabel: "Start with Capture",
      },
      {
        name: "DigitalFace AI",
        price: "$1,200",
        setup: "$1,097 one-time setup",
        description:
          "Adds a bilingual AI layer that answers, organizes intent and moves each opportunity toward the right next step.",
        idealFor:
          "Growing practices that need coverage and qualification around the clock.",
        scope: ["Everything in Capture", "Bilingual AI conversations"],
        adSpend:
          "Recommended media budget from $1,000/month, paid by you directly to the platform.",
        includes: [
          "Everything in DigitalFace Capture",
          "One priority paid channel, managed by us",
          "8 ad creatives adapted per month",
          "AI assistant answering 24/7 in English and Spanish",
          "2,000 AI conversations included each month",
          "Long-term follow-up and reactivation",
          "No-show recovery, missed-call text back and human handoff",
        ],
        ctaLabel: "Start with AI",
      },
      {
        name: "DigitalFace Full Growth",
        price: "$1,800",
        setup: "$1,597 one-time setup",
        description:
          "Acquisition, AI conversations, reactivation, funnel optimization and growth management in one managed system.",
        idealFor:
          "Established practices ready to run several campaigns and patient journeys at once.",
        scope: ["Everything in AI", "Up to 2 acquisition channels"],
        adSpend:
          "Recommended media budget from $2,000/month, paid by you directly to the platforms.",
        includes: [
          "Everything in DigitalFace AI",
          "Up to 2 priority paid channels, managed by us",
          "12 ad creatives adapted per month",
          "4,000 AI conversations included each month",
          "Landing pages and funnel optimization",
          "Reactivation campaigns and monthly growth reviews",
          "Priority support and ongoing improvements",
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
        body: "The media budgets above are paid by you directly to the advertising platforms, from your own accounts. We never hold or mark up your budget, and you keep the accounts, the tracking assets and the audiences.",
      },
      {
        title: "AI conversations",
        body: "DigitalFace AI includes 2,000 AI-handled conversations per month and Full Growth includes 4,000. Extra conversations are $0.06 each. We warn you at 80% of your allowance, so nothing arrives as a surprise.",
      },
      {
        title: "Hosting and infrastructure",
        body: "When a site or landing page is part of your plan, managed hosting is included with 100 GB of bandwidth and 1,000 build minutes per month, plus SSL and backups. Anything above that is quoted before it changes.",
      },
      {
        title: "Creative and terms",
        body: "Extra creatives beyond your monthly allowance are $45 each. You supply the raw photos and video; we handle the adaptation and the copy in both languages. Capture runs month to month. AI and Full Growth start with a 3-month term so the acquisition and conversion systems have time to stabilize.",
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
        title: "Ongoing support",
        description:
          "We handle updates, fixes and improvements as your practice grows.",
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
          "Yes. Every plan includes managed acquisition. We choose the priority channel or channel mix based on your audience, your offer, your market and the approved media budget.",
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
    title: "Planes | DigitalFace Marketing",
    description:
      "DigitalFace Capture, DigitalFace AI y DigitalFace Full Growth: qué incluye cada plan, cuánto cuesta y qué se factura aparte.",
  },
  hero: {
    eyebrow: "Planes y precios",
    title: "Elige el sistema que corresponde al momento de tu clínica",
    description:
      "Tres niveles administrados, construidos alrededor del recorrido de pacientes en odontología, medicina estética y med spas.",
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
    scopeLabel: "Alcance del sistema",
    idealForLabel: "Ideal para",
    items: [
      {
        name: "DigitalFace Capture",
        price: "$790",
        setup: "$597 de implementación única",
        description:
          "La base de captación y respuesta: un canal prioritario, captura conectada y un camino claro hasta la cita agendada.",
        idealFor:
          "Clínicas que están armando una base confiable de consultas y seguimiento.",
        scope: ["1 canal prioritario de captación", "Captura y agendamiento"],
        adSpend:
          "Presupuesto de pauta recomendado desde $500 al mes, que pagas directamente a la plataforma.",
        includes: [
          "Un canal pago prioritario, administrado por nosotros",
          "4 piezas publicitarias adaptadas al mes",
          "Experiencia de captura de contactos conectada",
          "Respuesta inmediata por SMS y correo",
          "Agendamiento de citas con recordatorios",
          "Configuración del proceso visual de oportunidades",
          "Configuración en inglés y español",
        ],
        ctaLabel: "Empezar con Capture",
      },
      {
        name: "DigitalFace AI",
        price: "$1,200",
        setup: "$1,097 de implementación única",
        description:
          "Suma una capa de IA bilingüe que responde, organiza la intención y lleva cada oportunidad al siguiente paso correcto.",
        idealFor:
          "Clínicas en crecimiento que necesitan cobertura y calificación a toda hora.",
        scope: ["Todo lo de Capture", "Conversaciones bilingües con IA"],
        adSpend:
          "Presupuesto de pauta recomendado desde $1,000 al mes, que pagas directamente a la plataforma.",
        includes: [
          "Todo lo incluido en DigitalFace Capture",
          "Un canal pago prioritario, administrado por nosotros",
          "8 piezas publicitarias adaptadas al mes",
          "Asistente con IA que responde 24/7 en inglés y español",
          "2.000 conversaciones con IA incluidas cada mes",
          "Seguimiento a largo plazo y reactivación",
          "Recuperación de inasistencias, mensaje por llamada perdida y traspaso a una persona",
        ],
        ctaLabel: "Empezar con AI",
      },
      {
        name: "DigitalFace Full Growth",
        price: "$1,800",
        setup: "$1,597 de implementación única",
        description:
          "Captación, conversaciones con IA, reactivación, optimización del embudo y gestión de crecimiento en un solo sistema.",
        idealFor:
          "Clínicas consolidadas listas para manejar varias campañas y recorridos de paciente a la vez.",
        scope: ["Todo lo de AI", "Hasta 2 canales de captación"],
        adSpend:
          "Presupuesto de pauta recomendado desde $2,000 al mes, que pagas directamente a las plataformas.",
        includes: [
          "Todo lo incluido en DigitalFace AI",
          "Hasta 2 canales pagos prioritarios, administrados por nosotros",
          "12 piezas publicitarias adaptadas al mes",
          "4.000 conversaciones con IA incluidas cada mes",
          "Landing pages y optimización del embudo",
          "Campañas de reactivación y revisión mensual de crecimiento",
          "Soporte prioritario y mejoras continuas",
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
        body: "DigitalFace AI incluye 2.000 conversaciones atendidas por IA al mes y Full Growth incluye 4.000. Cada conversación adicional cuesta $0.06. Te avisamos al llegar al 80% del cupo, así nada llega por sorpresa.",
      },
      {
        title: "Hosting e infraestructura",
        body: "Cuando el plan incluye un sitio o una landing page, el hosting administrado va incluido con 100 GB de tráfico y 1.000 minutos de compilación al mes, además de SSL y respaldos. Cualquier consumo mayor se cotiza antes de cambiar algo.",
      },
      {
        title: "Piezas creativas y condiciones",
        body: "Las piezas adicionales al cupo mensual cuestan $45 cada una. Tú entregas las fotos y videos originales; nosotros hacemos la adaptación y los textos en los dos idiomas. Capture es mes a mes. AI y Full Growth arrancan con un periodo inicial de 3 meses para que los sistemas de captación y conversión alcancen a estabilizarse.",
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
        title: "Soporte continuo",
        description:
          "Nos encargamos de actualizaciones, ajustes y mejoras mientras tu clínica crece.",
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
