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
    title: "One point of contact. The right specialists.",
    description:
      "We coordinate the strategy, technical work and communication. You know who is responsible.",
    secondary:
      "Specialist partners join when your project needs their expertise.",
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
          "Saturday · 8:00 AM – 6:00 PM ET",
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
      "DigitalFace reúne estrategia, tecnología y experiencia especializada en una sola relación con responsabilidad clara. Cómo está organizada la compañía, de qué responde y desde dónde opera.",
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
    title: "Un solo contacto. Los especialistas adecuados.",
    description:
      "Coordinamos la estrategia, el trabajo técnico y la comunicación. Sabes quién responde.",
    secondary: "Sumamos aliados especialistas cuando tu proyecto lo necesita.",
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
          "Sábado · 8:00 a. m. – 6:00 p. m. ET",
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
