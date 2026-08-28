import type { Locale } from "../locale";

/**
 * The About page is company narrative, not product narrative. Nothing here may
 * describe the ATTRACT → CONVERT → MANAGE system, restate the service catalogue
 * or invent credentials. Only two facts about the founders are published:
 * Nicolás has 10+ years in marketing, José has 5+ years plus two master's
 * degrees in quantitative and marketing-oriented fields. No universities, no
 * degree titles, no employers, no client counts.
 */

const en = {
  metadata: {
    title: "About DigitalFace Marketing | Company Story and Structure",
    description:
      "How DigitalFace began in Cali, Colombia, how the company thinks about the work, and how its core leadership works alongside a network of specialists in marketing, development and technology.",
  },
  hero: {
    eyebrow: "About DigitalFace",
    title: "We're DigitalFace.",
    description:
      "A digital company born in Cali, Colombia, from two complementary professional perspectives — one shaped by marketing and commercial work, the other by marketing, data and technology. What started between two brothers now runs as core leadership supported by a broader network of specialists.",
    meta: [
      "Born in Cali, Colombia",
      "Operating from Valle del Cauca",
      "Remote presence in Miami",
    ],
  },
  story: {
    eyebrow: "Our story",
    title: "It started with two brothers and two different perspectives.",
    paragraphs: [
      "DigitalFace began in Cali, Colombia, through the work of two brothers, Nicolás and José Caicedo.",
      "Nicolás brought more than a decade of marketing experience: advertising, audiences, communication, campaigns and the commercial side of growing a business.",
      "José brought more than five years of professional experience, two master's degrees in quantitative and marketing-oriented fields, and a growing specialization in analytics, automation, CRM and software development.",
      "Their perspectives were different. They turned out to be complementary.",
      "As the work got harder, it stopped fitting inside one discipline. Marketing connected to websites. Websites connected to how customers were answered. Answering customers required follow-up. Follow-up required measurement. Repetitive work became worth automating. Some projects needed technical or creative depth that no single person should claim to cover alone.",
      "DigitalFace grew in that direction.",
    ],
    foundersLabel: "The founders",
    founders: [
      {
        initials: "NC",
        name: "Nicolás Caicedo",
        role: "Co-Founder · Marketing & Growth",
        detail: "10+ years in marketing, advertising and client relationships.",
      },
      {
        initials: "JC",
        name: "José Caicedo",
        role: "Co-Founder · Strategy & Technology",
        detail: "Marketing, quantitative analysis, automation and technology.",
      },
    ],
    timelineLabel: "How it moved",
    timeline: [
      {
        step: "01",
        title: "Beginning",
        description: "Marketing, campaigns and direct client work.",
      },
      {
        step: "02",
        title: "Expansion",
        description:
          "Projects started asking for capabilities that did not fit inside one discipline.",
      },
      {
        step: "03",
        title: "Specialization",
        description:
          "Technology, automation, analytics and development became part of the work.",
      },
      {
        step: "04",
        title: "DigitalFace today",
        description:
          "Core leadership, supported by a broader network of specialist expertise.",
      },
    ],
  },
  beliefs: {
    eyebrow: "How we think",
    title: "A few things we believe.",
    items: [
      {
        title: "Understand before building",
        body: "We want to understand the business and the real problem before recommending marketing or technology. Tools should support a strategy, not become one.",
      },
      {
        title: "Useful over impressive",
        body: "Something is not valuable because it looks sophisticated. It is valuable when the business can actually use it.",
      },
      {
        title: "Specialists over pretending",
        body: "Nobody is excellent at every discipline. When work needs deeper expertise, we bring in the right person instead of improvising.",
      },
      {
        title: "Clarity over jargon",
        body: "Clients should understand what is happening inside their own business. Marketing and technology should make an operation clearer, not harder to follow.",
      },
      {
        title: "Someone stays accountable",
        body: "If DigitalFace takes responsibility for an engagement, someone stays responsible for its direction, coordination and quality.",
      },
      {
        title: "Keep learning",
        body: "Marketing and technology keep moving. We would rather keep testing and measuring than assume today's answer stays right forever.",
      },
    ],
  },
  structure: {
    eyebrow: "How DigitalFace works",
    title: "A core team. A broader circle of expertise.",
    description:
      "DigitalFace keeps strategy, direction, client relationships and accountability close to its leadership. When an engagement needs deeper specialization, other professionals and trusted partners become part of the work.",
    secondary:
      "Different problems need different expertise. We prefer that over pretending one person should solve all of them.",
    coreName: "DigitalFace",
    coreLabel: "Core leadership",
    responsibilitiesLabel: "Held by the core",
    responsibilities: [
      "Direction",
      "Strategy",
      "Client relationship",
      "Coordination",
      "Accountability",
    ],
    disciplinesLabel: "Specialist expertise around an engagement",
    disciplines: [
      "Strategy",
      "Paid media",
      "Development",
      "Automation",
      "CRM",
      "AI",
      "Data",
      "Creative",
      "Production",
    ],
    note: "Specialists and trusted partners join an engagement according to what that engagement actually requires.",
  },
  today: {
    eyebrow: "DigitalFace today",
    title: "Built beyond the founders.",
    quote: "DigitalFace has founders. It is not only its founders.",
    paragraphs: [
      "Nicolás and José stay at the core of DigitalFace's direction and client relationships. The company is deliberately built so the expertise around an engagement can expand when it needs to.",
      "Depending on the project, DigitalFace works alongside specialists and trusted partners across media, development, automation, analytics, creative and production.",
      "That structure keeps the company agile without pretending every problem should be handled internally by the same two people.",
    ],
  },
  future: {
    eyebrow: "What we're building",
    title: "We're still building DigitalFace.",
    paragraphs: [
      "DigitalFace is becoming a more specialized, more technical company without losing the close client relationships it started with.",
      "We want to handle harder digital problems while staying close enough to understand how each client's business actually runs.",
      "Growth here is not only about adding people. It is about deeper capabilities, better ways of working, stronger specialist relationships and higher quality in what we deliver.",
      "Our roots stay in Colombia, and remote work keeps letting us work beyond it.",
    ],
    detailsLabel: "Company details",
    details: [
      { label: "Origin", lines: ["Cali, Valle del Cauca", "Colombia"] },
      {
        label: "Operations",
        lines: ["Bugalagrande, Valle del Cauca", "Colombia"],
      },
      {
        label: "Remote presence",
        lines: ["Miami, Florida", "United States"],
      },
      {
        label: "Client attention",
        lines: ["Monday – Saturday", "8:00 AM – 8:00 PM"],
      },
    ],
    closingTitle: "That's DigitalFace.",
    closingBody:
      "A company built from complementary perspectives, strengthened by specialist expertise, and still changing with the businesses and the technology around it.",
    closingCta: "Talk to us",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Sobre DigitalFace Marketing | Historia y estructura de la compañía",
    description:
      "Cómo nació DigitalFace en Cali, Colombia, cómo pensamos el trabajo y cómo el liderazgo interno se apoya en una red de especialistas en marketing, desarrollo y tecnología.",
  },
  hero: {
    eyebrow: "Sobre DigitalFace",
    title: "Somos DigitalFace.",
    description:
      "Una compañía digital que nació en Cali, Colombia, desde dos perspectivas profesionales complementarias: una formada en marketing y trabajo comercial, otra en marketing, datos y tecnología. Lo que empezó entre dos hermanos hoy funciona como un liderazgo interno apoyado en una red más amplia de especialistas.",
    meta: [
      "Nacimos en Cali, Colombia",
      "Operamos desde el Valle del Cauca",
      "Presencia remota en Miami",
    ],
  },
  story: {
    eyebrow: "Nuestra historia",
    title: "Empezó con dos hermanos y dos formas distintas de ver el trabajo.",
    paragraphs: [
      "DigitalFace empezó en Cali, Colombia, con el trabajo de dos hermanos: Nicolás y José Caicedo.",
      "Nicolás llegó con más de diez años de experiencia en marketing: publicidad, audiencias, comunicación, campañas y el lado comercial del crecimiento de un negocio.",
      "José llegó con más de cinco años de experiencia profesional, dos maestrías en áreas cuantitativas y de marketing, y una especialización creciente en analítica, automatización, CRM y desarrollo de software.",
      "Sus perspectivas eran distintas. Resultaron complementarias.",
      "A medida que el trabajo se volvió más exigente, dejó de caber en una sola disciplina. El marketing se conectó con los sitios web. Los sitios web, con la forma de responderle a cada persona. Responder exigía seguimiento. El seguimiento exigía medición. Lo repetitivo empezó a valer la pena automatizarlo. Y algunos proyectos pedían una profundidad técnica o creativa que nadie debería decir que cubre solo.",
      "DigitalFace creció en esa dirección.",
    ],
    foundersLabel: "Los fundadores",
    founders: [
      {
        initials: "NC",
        name: "Nicolás Caicedo",
        role: "Cofundador · Marketing y crecimiento",
        detail:
          "Más de 10 años en marketing, publicidad y relación con clientes.",
      },
      {
        initials: "JC",
        name: "José Caicedo",
        role: "Cofundador · Estrategia y tecnología",
        detail:
          "Marketing, análisis cuantitativo, automatización y tecnología.",
      },
    ],
    timelineLabel: "Cómo avanzó",
    timeline: [
      {
        step: "01",
        title: "Inicio",
        description: "Marketing, campañas y trabajo directo con clientes.",
      },
      {
        step: "02",
        title: "Expansión",
        description:
          "Los proyectos empezaron a pedir capacidades que no cabían en una sola disciplina.",
      },
      {
        step: "03",
        title: "Especialización",
        description:
          "Tecnología, automatización, analítica y desarrollo pasaron a ser parte del trabajo.",
      },
      {
        step: "04",
        title: "DigitalFace hoy",
        description:
          "Liderazgo interno, apoyado en una red más amplia de especialistas.",
      },
    ],
  },
  beliefs: {
    eyebrow: "Cómo pensamos",
    title: "Algunas cosas en las que creemos.",
    items: [
      {
        title: "Entender antes de construir",
        body: "Queremos entender el negocio y el problema real antes de recomendar marketing o tecnología. Las herramientas deben sostener una estrategia, no reemplazarla.",
      },
      {
        title: "Útil antes que impresionante",
        body: "Algo no vale por verse sofisticado. Vale cuando el negocio de verdad puede usarlo.",
      },
      {
        title: "Especialistas en vez de aparentar",
        body: "Nadie es excelente en todas las disciplinas. Cuando el trabajo pide más profundidad, traemos a la persona indicada en vez de improvisar.",
      },
      {
        title: "Claridad antes que tecnicismos",
        body: "El cliente debería entender qué está pasando dentro de su propio negocio. El marketing y la tecnología deben aclarar la operación, no complicarla.",
      },
      {
        title: "Siempre hay un responsable",
        body: "Si DigitalFace asume un proyecto, alguien queda a cargo de su dirección, su coordinación y su calidad.",
      },
      {
        title: "Seguir aprendiendo",
        body: "El marketing y la tecnología no se quedan quietos. Preferimos seguir probando y midiendo antes que asumir que la respuesta de hoy sirve para siempre.",
      },
    ],
  },
  structure: {
    eyebrow: "Cómo trabaja DigitalFace",
    title: "Un equipo base. Un círculo más amplio de especialistas.",
    description:
      "DigitalFace mantiene cerca del liderazgo la estrategia, la dirección, la relación con el cliente y la responsabilidad por el resultado. Cuando un proyecto pide mayor especialización, otros profesionales y aliados de confianza entran al trabajo.",
    secondary:
      "Problemas distintos piden experiencia distinta. Preferimos eso antes que aparentar que una sola persona debería resolverlos todos.",
    coreName: "DigitalFace",
    coreLabel: "Liderazgo interno",
    responsibilitiesLabel: "Lo que sostiene el equipo base",
    responsibilities: [
      "Dirección",
      "Estrategia",
      "Relación con el cliente",
      "Coordinación",
      "Responsabilidad",
    ],
    disciplinesLabel: "Especialistas alrededor de un proyecto",
    disciplines: [
      "Estrategia",
      "Pauta",
      "Desarrollo",
      "Automatización",
      "CRM",
      "IA",
      "Datos",
      "Creatividad",
      "Producción",
    ],
    note: "Los especialistas y aliados de confianza entran a un proyecto según lo que ese proyecto realmente necesita.",
  },
  today: {
    eyebrow: "DigitalFace hoy",
    title: "Construida más allá de sus fundadores.",
    quote: "DigitalFace tiene fundadores. No es solo sus fundadores.",
    paragraphs: [
      "Nicolás y José siguen en el centro de la dirección de DigitalFace y de la relación con los clientes. La compañía está armada a propósito para que la experiencia alrededor de un proyecto pueda ampliarse cuando hace falta.",
      "Según el proyecto, DigitalFace trabaja junto a especialistas y aliados de confianza en pauta, desarrollo, automatización, analítica, creatividad y producción.",
      "Esa estructura mantiene ágil a la compañía sin aparentar que todo problema debería resolverse internamente entre las mismas dos personas.",
    ],
  },
  future: {
    eyebrow: "Lo que estamos construyendo",
    title: "Seguimos construyendo DigitalFace.",
    paragraphs: [
      "DigitalFace se está volviendo una compañía más especializada y más técnica, sin perder la cercanía con los clientes que la formó.",
      "Queremos resolver problemas digitales más difíciles y seguir lo bastante cerca para entender cómo funciona de verdad el negocio de cada cliente.",
      "Crecer, para nosotros, no es solo sumar personas. Es desarrollar mejores capacidades, mejorar la forma de trabajar, construir relaciones más sólidas con especialistas y subir la calidad de lo que entregamos.",
      "Nuestras raíces siguen en Colombia, y el trabajo remoto nos permite cada vez más trabajar más allá de la geografía.",
    ],
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
    closingTitle: "Eso es DigitalFace.",
    closingBody:
      "Una compañía construida desde perspectivas complementarias, fortalecida con especialistas y todavía cambiando junto a los negocios y la tecnología que la rodean.",
    closingCta: "Hablemos",
  },
};

export const aboutContent: Record<Locale, typeof en> = { en, es };
export type AboutContent = typeof en;
