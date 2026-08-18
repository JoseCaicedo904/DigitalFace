import type { Locale } from "../locale";

const en = {
  metadata: {
    title: "About DigitalFace Marketing",
    description:
      "Who we are, how we install the DigitalFace Sales System, and how we support the practices that run on it.",
  },
  hero: {
    eyebrow: "About DigitalFace",
    title: "We build and run your sales system.",
    description:
      "A productized, done-for-you engine that turns inquiries into booked appointments for practices that live on their calendar.",
    primaryCta: "Get started",
    secondaryCta: "See the system",
    stats: [
      { value: "5-7 days", label: "Typical launch" },
      { value: "1 day", label: "Support response" },
      { value: "EN + ES", label: "Bilingual delivery" },
    ],
    mediaLabel: "Team photo slot",
    mediaHint: "Reserved for an approved photo of the DigitalFace team.",
    showUpTitle: "How we work with you",
    showUpBody:
      "Think of us as your systems team. We build it, launch it and keep it running.",
  },
  focus: {
    eyebrow: "What we do",
    title: "Specialists who keep your sales system running",
    description:
      "We build, automate and tune the follow-up process so your team can stay with patients.",
    specialties: [
      {
        title: "System implementation",
        description:
          "We install the DigitalFace Sales System and adapt it to how your practice actually works.",
      },
      {
        title: "Automation and follow-up",
        description:
          "Instant messages, emails, reminders and long-term sequences keep every opportunity warm.",
      },
      {
        title: "Pipeline visibility",
        description:
          "A clear pipeline and a single inbox, so your team always knows what to do next.",
      },
    ],
    collaborationTitle: "We stay close to your team",
    collaborationBodyOne:
      "We work alongside your coordinators so the system matches your real workflow, not a template.",
    collaborationBodyTwo:
      "You get the visibility and the guidance without managing an agency stack.",
    mediaLabel: "Workspace photo slot",
    mediaHint: "Reserved for an approved photo of the DigitalFace workspace.",
  },
  offices: {
    eyebrow: "Two hubs, one rhythm",
    title: "Miami and Cali keep us close to your market",
    description:
      "Overlapping time zones and a bilingual team keep launches fast and support responsive.",
    items: [
      {
        title: "Miami, Florida",
        description: "Client success and system strategy for North America.",
        detail: "Onboarding, implementation and growth planning.",
      },
      {
        title: "Cali, Colombia",
        description: "Automation and delivery hub for system updates.",
        detail: "Workflows, messaging and ongoing optimization.",
      },
    ],
    cadenceLabel: "Reporting cadence",
    cadenceTitle: "Weekly check-ins",
    cadenceDetail:
      "Each update covers what worked, what is blocked and what comes next.",
  },
  cta: {
    eyebrow: "Work with us",
    title: "Let us install your sales system",
    description:
      "Book a call and we will walk you through a setup built around your practice.",
    primaryCta: "Get started",
    secondaryCta: "See the plans",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Sobre DigitalFace Marketing",
    description:
      "Quiénes somos, cómo instalamos el Sistema de Ventas DigitalFace y cómo acompañamos a las clínicas que lo usan.",
  },
  hero: {
    eyebrow: "Sobre DigitalFace",
    title: "Construimos y operamos tu sistema de ventas.",
    description:
      "Un sistema listo para implementar que convierte consultas en citas agendadas, hecho para negocios que viven de su calendario.",
    primaryCta: "Empezar",
    secondaryCta: "Ver el sistema",
    stats: [
      { value: "5-7 días", label: "Puesta en marcha" },
      { value: "1 día", label: "Respuesta de soporte" },
      { value: "EN + ES", label: "Entrega bilingüe" },
    ],
    mediaLabel: "Espacio para foto del equipo",
    mediaHint: "Reservado para una foto aprobada del equipo DigitalFace.",
    showUpTitle: "Cómo trabajamos contigo",
    showUpBody:
      "Somos tu equipo de sistemas. Lo construimos, lo lanzamos y lo mantenemos funcionando.",
  },
  focus: {
    eyebrow: "Qué hacemos",
    title: "Especialistas en mantener tu sistema de ventas funcionando",
    description:
      "Construimos, automatizamos y ajustamos el seguimiento para que tu equipo se quede con los pacientes.",
    specialties: [
      {
        title: "Implementación del sistema",
        description:
          "Instalamos el Sistema de Ventas DigitalFace y lo adaptamos a cómo trabaja tu clínica de verdad.",
      },
      {
        title: "Automatización y seguimiento",
        description:
          "Mensajes inmediatos, correos, recordatorios y secuencias largas mantienen viva cada oportunidad.",
      },
      {
        title: "Visibilidad del proceso",
        description:
          "Un proceso claro y una sola bandeja de entrada para que tu equipo sepa siempre qué sigue.",
      },
    ],
    collaborationTitle: "Trabajamos cerca de tu equipo",
    collaborationBodyOne:
      "Nos coordinamos con tus asesoras para que el sistema siga tu flujo real de trabajo, no una plantilla.",
    collaborationBodyTwo:
      "Tienes control y acompañamiento sin tener que administrar una agencia completa.",
    mediaLabel: "Espacio para foto del lugar de trabajo",
    mediaHint:
      "Reservado para una foto aprobada del espacio de trabajo de DigitalFace.",
  },
  offices: {
    eyebrow: "Dos sedes, un mismo ritmo",
    title: "Miami y Cali nos mantienen cerca de tu mercado",
    description:
      "Husos horarios compatibles y un equipo bilingüe hacen que los lanzamientos sean rápidos y el soporte ágil.",
    items: [
      {
        title: "Miami, Florida",
        description: "Acompañamiento y estrategia para Norteamérica.",
        detail: "Arranque, implementación y planeación de crecimiento.",
      },
      {
        title: "Cali, Colombia",
        description: "Centro de automatización y actualizaciones del sistema.",
        detail: "Flujos, mensajería y optimización continua.",
      },
    ],
    cadenceLabel: "Ritmo de reportes",
    cadenceTitle: "Revisión semanal",
    cadenceDetail:
      "Cada informe muestra qué funcionó, qué está frenado y qué sigue.",
  },
  cta: {
    eyebrow: "Trabajemos juntos",
    title: "Déjanos instalar tu sistema de ventas",
    description:
      "Agenda una llamada y te mostramos una configuración pensada para tu clínica.",
    primaryCta: "Empezar",
    secondaryCta: "Ver los planes",
  },
};

export const aboutContent: Record<Locale, typeof en> = { en, es };
export type AboutContent = typeof en;
