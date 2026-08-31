import type { Locale } from "../locale";

/**
 * The About page describes the COMPANY, not the founders and not the product.
 *
 * Three standing rules for this file:
 * 1. DigitalFace is the protagonist. Founder names appear exactly once, as
 *    company history — no biographies, credentials, years of experience or
 *    individual timelines.
 * 2. No invented scale. DigitalFace has no departments, employees or offices
 *    beyond what is published elsewhere on the site. Specialists are partners
 *    brought into an engagement, and the copy must keep saying so.
 * 3. No outcome guarantee. `legal.ts` states that DigitalFace does not
 *    guarantee specific results; the outcome copy here expresses how the work
 *    is judged, never a promise. The written commercial commitments live on the
 *    Pricing page and stay there.
 */

const en = {
  metadata: {
    title: "About DigitalFace Marketing | How the Company Works",
    description:
      "DigitalFace brings strategy, technology and specialist expertise together under one accountable relationship. How the company is organized, what it takes responsibility for, and where it operates from.",
  },
  hero: {
    eyebrow: "About DigitalFace",
    title: "Specialized expertise. One DigitalFace.",
    description:
      "DigitalFace brings strategy, technology and specialized expertise together under one accountable relationship. We connect the essential parts of business growth into a coordinated approach that gives our clients greater clarity, stronger execution and a more effective path from opportunity to customer.",
    meta: [
      "Based in Colombia",
      "Working remotely across markets",
      "English and Spanish",
    ],
  },
  network: {
    eyebrow: "How DigitalFace works",
    title: "One direction. Specialized depth.",
    description:
      "Different challenges require different strengths. DigitalFace keeps strategy, communication and accountability at the center.",
    secondary:
      "For our clients, that means one relationship, one standard of execution and the expertise needed to move with confidence.",
    coreName: "DigitalFace",
    coreLabel: "Strategic core",
    disciplinesLabel: "Specialist expertise around an engagement",
    disciplines: [
      "Strategy",
      "Paid media",
      "Web & development",
      "Automation & AI",
      "CRM & data",
      "Creative & production",
    ],
  },
  principles: {
    eyebrow: "How we think",
    title: "Four things that guide the work.",
    items: [
      {
        title: "Business before tools",
        body: "Technology earns its place when it improves the business, not because it is fashionable.",
      },
      {
        title: "Specialists when specialization matters",
        body: "We bring deeper expertise into the work when the problem genuinely calls for it.",
      },
      {
        title: "Clarity and accountability",
        body: "You should understand what is happening and know who is responsible for moving it forward.",
      },
      {
        title: "Results over activity",
        body: "More campaigns, meetings and dashboards are not better work. Progress toward the objective is.",
      },
    ],
  },
  roots: {
    eyebrow: "Our roots",
    title: "Built in Colombia. Working beyond borders.",
    paragraphs: [
      "DigitalFace originated in Cali, Valle del Cauca, and operates today from Colombia while collaborating remotely across markets, including Miami.",
      "The company grew out of complementary backgrounds in marketing, quantitative thinking and technology, and has kept expanding through specialist partnerships as client requirements became more demanding.",
    ],
    foundersNote:
      "DigitalFace was founded by brothers Nicolás and José Caicedo, whose complementary backgrounds in marketing, quantitative analysis and technology shaped the company's early direction.",
    detailsLabel: "Company details",
    details: [
      {
        label: "Origin & operations",
        lines: ["Cali, Valle del Cauca", "Colombia"],
      },
      { label: "Remote presence", lines: ["Miami, Florida", "United States"] },
      {
        label: "Client attention",
        lines: ["Monday – Saturday", "8:00 AM – 8:00 PM"],
      },
    ],
  },
  booking: {
    eyebrow: "Work with DigitalFace",
    title: "Ready to attract, convert and manage opportunities better?",
    description:
      "Tell us the objective. In one conversation we cover what it would take, what DigitalFace would be responsible for and how progress gets measured.",
    ctaLabel: "Book a call",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Sobre DigitalFace Marketing | Cómo funciona la compañía",
    description:
      "DigitalFace reúne estrategia, tecnología y experiencia especializada en una sola relación con responsabilidad clara. Cómo está organizada la compañía, de qué responde y desde dónde opera.",
  },
  hero: {
    eyebrow: "Sobre DigitalFace",
    title: "Experiencia especializada. Un solo DigitalFace.",
    description:
      "DigitalFace reúne estrategia, tecnología y experiencia especializada en una sola relación con responsabilidad clara. Conectamos las piezas esenciales del crecimiento en un enfoque coordinado que le da a nuestros clientes mayor claridad, mejor ejecución y un camino más efectivo de la oportunidad al cliente.",
    meta: [
      "Con base en Colombia",
      "Trabajo remoto en varios mercados",
      "Español e inglés",
    ],
  },
  network: {
    eyebrow: "Cómo trabaja DigitalFace",
    title: "Una sola dirección. Experiencia especializada.",
    description:
      "Cada desafío requiere fortalezas distintas. DigitalFace mantiene la estrategia, la comunicación y la responsabilidad en el centro.",
    secondary:
      "Para nuestros clientes, eso significa una sola relación, un mismo estándar de ejecución y la experiencia necesaria para avanzar con confianza.",
    coreName: "DigitalFace",
    coreLabel: "Núcleo estratégico",
    disciplinesLabel: "Especialistas alrededor de un proyecto",
    disciplines: [
      "Estrategia",
      "Pauta",
      "Web y desarrollo",
      "Automatización e IA",
      "CRM y datos",
      "Creativo y producción",
    ],
  },
  principles: {
    eyebrow: "Cómo pensamos",
    title: "Cuatro cosas que guían el trabajo.",
    items: [
      {
        title: "El negocio antes que las herramientas",
        body: "La tecnología se gana su lugar cuando mejora el negocio, no por estar de moda.",
      },
      {
        title: "Especialistas cuando la especialización importa",
        body: "Sumamos experiencia más profunda cuando el problema realmente lo pide.",
      },
      {
        title: "Claridad y responsabilidad",
        body: "Debes entender qué está pasando y saber quién responde por hacerlo avanzar.",
      },
      {
        title: "Resultados antes que actividad",
        body: "Más campañas, reuniones y tableros no significan mejor trabajo. El avance hacia el objetivo sí.",
      },
    ],
  },
  roots: {
    eyebrow: "Nuestro origen",
    title: "Construida en Colombia. Trabajando más allá de las fronteras.",
    paragraphs: [
      "DigitalFace nació en Cali, Valle del Cauca, y hoy opera desde Colombia mientras colabora de forma remota en varios mercados, incluido Miami.",
      "La compañía creció desde formaciones complementarias en marketing, pensamiento cuantitativo y tecnología, y ha seguido ampliándose con alianzas de especialistas a medida que los proyectos se volvieron más exigentes.",
    ],
    foundersNote:
      "DigitalFace fue fundada por los hermanos Nicolás y José Caicedo, cuyas formaciones complementarias en marketing, análisis cuantitativo y tecnología marcaron la dirección inicial de la compañía.",
    detailsLabel: "Datos de la compañía",
    details: [
      {
        label: "Origen y operación",
        lines: ["Cali, Valle del Cauca", "Colombia"],
      },
      {
        label: "Presencia remota",
        lines: ["Miami, Florida", "Estados Unidos"],
      },
      {
        label: "Atención a clientes",
        lines: ["Lunes a sábado", "8:00 a. m. – 8:00 p. m."],
      },
    ],
  },
  booking: {
    eyebrow: "Trabaja con DigitalFace",
    title: "¿Listo para atraer, convertir y gestionar mejor tus oportunidades?",
    description:
      "Cuéntanos el objetivo. En una sola conversación vemos qué implica, de qué responde DigitalFace y cómo se mide el avance.",
    ctaLabel: "Agenda una llamada",
  },
};

export const aboutContent: Record<Locale, typeof en> = { en, es };
export type AboutContent = typeof en;
