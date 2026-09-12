import type { Locale } from "../locale";

/**
 * The About page describes the COMPANY, not the founders and not the product.
 *
 * Three standing rules for this file:
 * 1. DigitalFace is the protagonist. Founder names appear exactly once, as
 *    company history — no biographies, personal credentials or individual
 *    timelines. Company-level metrics require explicit written approval.
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
      "Meet the team behind DigitalFace: marketing strategy, technology and ongoing support for business growth, delivered remotely from Colombia and Florida.",
  },
  hero: {
    eyebrow: "About DigitalFace",
    title: "Marketing and technology. One team.",
    description:
      "DigitalFace is a digital marketing agency that connects advertising, websites, AI and CRM. You work with one team from planning to ongoing support.",
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
    coreLabel: "Your point of contact",
    disciplinesLabel: "Expertise for your project",
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
    title: "What you can expect from us.",
    items: [
      {
        title: "Your business comes first",
        body: "We choose the tools and judge progress by your goals.",
      },
      {
        title: "Clear answers and ownership",
        body: "You know what we’re doing, why it matters and who handles the next step.",
      },
    ],
  },
  roots: {
    eyebrow: "Our roots",
    title: "Based in Colombia. Connected across borders.",
    paragraphs: [
      "We operate from Cali, Valle del Cauca, Colombia, and work remotely across markets, including Miami, Florida.",
    ],
    foundersNote:
      "Founded by brothers Nicolás and José Caicedo, bringing together marketing, quantitative analysis and technology.",
    stats: [
      { label: "Years of experience", supportingText: "" },
      { label: "Businesses supported", supportingText: "" },
      { label: "Digital solutions implemented", supportingText: "" },
      {
        label: "Markets served",
        supportingText: "Colombia · United States · Latin America",
      },
    ],
    detailsLabel: "Company details",
    details: [
      {
        label: "Origin & operations",
        lines: ["Cali, Valle del Cauca", "Colombia"],
      },
      { label: "Remote presence", lines: ["Miami, Florida", "United States"] },
      {
        label: "Client attention",
        lines: [
          "Monday – Friday",
          "8:00 AM – 8:00 PM ET",
          "Saturday",
          "8:00 AM – 6:00 PM ET",
        ],
      },
    ],
  },
  booking: {
    eyebrow: "Work with DigitalFace",
    title: "Tell us what you want to improve.",
    description:
      "We’ll explain how we can help, what we’d handle and how we’d measure progress.",
    ctaLabel: "Book a call",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Sobre DigitalFace Marketing | Cómo funciona la compañía",
    description:
      "Conoce al equipo de DigitalFace: estrategia de marketing, tecnología y soporte para el crecimiento de negocios, con atención remota desde Colombia y Florida.",
  },
  hero: {
    eyebrow: "Sobre DigitalFace",
    title: "Marketing y tecnología. Un solo equipo.",
    description:
      "DigitalFace es una agencia de marketing digital que conecta publicidad, sitios web, IA y CRM. Un solo equipo te acompaña desde la planificación hasta el soporte.",
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
    coreLabel: "Tu punto de contacto",
    disciplinesLabel: "Especialidades para tu proyecto",
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
    title: "Qué puedes esperar de nosotros.",
    items: [
      {
        title: "Tu negocio marca el rumbo",
        body: "Elegimos las herramientas y evaluamos el avance según tus objetivos.",
      },
      {
        title: "Claridad y responsabilidad",
        body: "Sabes qué hacemos, para qué sirve y quién se encarga del siguiente paso.",
      },
    ],
  },
  roots: {
    eyebrow: "Nuestro origen",
    title: "Desde Colombia, conectados con otros mercados.",
    paragraphs: [
      "Operamos desde Cali, Valle del Cauca, Colombia, y trabajamos de forma remota en varios mercados, incluido Miami, Florida.",
    ],
    foundersNote:
      "Fundada por los hermanos Nicolás y José Caicedo, combinando marketing, análisis cuantitativo y tecnología.",
    stats: [
      { label: "Años de experiencia", supportingText: "" },
      { label: "Negocios apoyados", supportingText: "" },
      { label: "Soluciones digitales implementadas", supportingText: "" },
      {
        label: "Mercados atendidos",
        supportingText: "Colombia · Estados Unidos · Latinoamérica",
      },
    ],
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
        lines: [
          "Lunes a viernes",
          "8:00 a. m. – 8:00 p. m. ET",
          "Sábado",
          "8:00 a. m. – 6:00 p. m. ET",
        ],
      },
    ],
  },
  booking: {
    eyebrow: "Trabaja con DigitalFace",
    title: "Cuéntanos qué quieres mejorar.",
    description:
      "Te explicamos cómo podemos ayudarte, de qué nos encargamos y cómo evaluamos el avance.",
    ctaLabel: "Agenda una llamada",
  },
};

export const aboutContent: Record<Locale, typeof en> = { en, es };
export type AboutContent = typeof en;
