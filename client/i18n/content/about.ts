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
    title: "A core team. A broader circle of expertise.",
    description:
      "Different problems require different expertise. DigitalFace keeps strategy, direction, communication and accountability close to the core.",
    secondary:
      "When deeper specialization is needed, trusted specialists and partners become part of the engagement, and DigitalFace stays responsible for keeping the work connected.",
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
    note: "Specialists join an engagement according to what it requires. The client's relationship stays with DigitalFace.",
  },
  standard: {
    eyebrow: "Our standard",
    title: "One relationship. Clear accountability.",
    items: [
      {
        title: "Direction",
        body: "DigitalFace holds the strategic view of the engagement and keeps priorities tied to the business objective.",
      },
      {
        title: "Specialization",
        body: "When a problem needs deeper expertise, the right specialist joins the work instead of every discipline being forced through one person.",
      },
      {
        title: "Coordination",
        body: "The parts of an engagement run as one piece of work, not as a set of disconnected suppliers you have to manage.",
      },
      {
        title: "Accountability",
        body: "DigitalFace stays responsible for the quality, coordination and progress of the work we take on.",
      },
    ],
    outcomeTitle: "The work is only valuable if it moves the business forward.",
    outcomeBody:
      "We don't measure an engagement by how many campaigns, automations or dashboards it produced. We measure it by whether it moved the objective we agreed to pursue. Strategy, specialists and technology are means. The business outcome is the point.",
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
      { label: "Origin", lines: ["Cali, Valle del Cauca", "Colombia"] },
      {
        label: "Operations",
        lines: ["Bugalagrande, Valle del Cauca", "Colombia"],
      },
      { label: "Remote presence", lines: ["Miami, Florida", "United States"] },
      {
        label: "Client attention",
        lines: ["Monday – Saturday", "8:00 AM – 8:00 PM"],
      },
    ],
    closingTitle: "Built around the work.",
    closingBody:
      "DigitalFace brings the strategy, specialists and systems an objective needs and keeps one company accountable for how the pieces work together.",
    closingCta: "Talk to DigitalFace",
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
    title: "Un equipo base. Un círculo más amplio de especialistas.",
    description:
      "Problemas distintos piden experiencia distinta. DigitalFace mantiene cerca del núcleo la estrategia, la dirección, la comunicación y la responsabilidad por el resultado.",
    secondary:
      "Cuando hace falta mayor especialización, especialistas y aliados de confianza entran al proyecto, y DigitalFace sigue a cargo de mantener el trabajo conectado.",
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
    note: "Los especialistas entran a un proyecto según lo que ese proyecto necesita. La relación del cliente sigue siendo con DigitalFace.",
  },
  standard: {
    eyebrow: "Nuestro estándar",
    title: "Una sola relación. Responsabilidad clara.",
    items: [
      {
        title: "Dirección",
        body: "DigitalFace mantiene la visión estratégica del proyecto y conecta las prioridades con el objetivo del negocio.",
      },
      {
        title: "Especialización",
        body: "Cuando un problema pide más profundidad, entra el especialista indicado en vez de forzar todas las disciplinas por una sola persona.",
      },
      {
        title: "Coordinación",
        body: "Las partes de un proyecto funcionan como un solo trabajo, no como proveedores sueltos que tú tienes que administrar.",
      },
      {
        title: "Responsabilidad",
        body: "DigitalFace responde por la calidad, la coordinación y el avance del trabajo que asume.",
      },
    ],
    outcomeTitle: "El trabajo solo vale si mueve el negocio.",
    outcomeBody:
      "No medimos un proyecto por cuántas campañas, automatizaciones o tableros produjo. Lo medimos por si movió el objetivo que acordamos perseguir. La estrategia, los especialistas y la tecnología son medios. El resultado del negocio es el punto.",
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
      { label: "Origen", lines: ["Cali, Valle del Cauca", "Colombia"] },
      {
        label: "Operación",
        lines: ["Bugalagrande, Valle del Cauca", "Colombia"],
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
    closingTitle: "Construida alrededor del trabajo.",
    closingBody:
      "DigitalFace reúne la estrategia, los especialistas y los sistemas que un objetivo necesita, y mantiene a una sola compañía respondiendo por cómo encajan las piezas.",
    closingCta: "Habla con DigitalFace",
  },
};

export const aboutContent: Record<Locale, typeof en> = { en, es };
export type AboutContent = typeof en;
