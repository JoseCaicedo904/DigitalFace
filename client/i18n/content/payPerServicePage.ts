import type { Locale } from "../locale";
import { payPerServiceContent } from "./payPerService";

// Keep the page-level framing concise while preserving the original card copy.
export const payPerServicePageContent: Record<
  Locale,
  typeof payPerServiceContent.en
> = {
  en: {
    ...payPerServiceContent.en,
    hero: {
      eyebrow: "Pay per service",
      title: "Choose only the services you need.",
      description:
        "Pick one service or combine a few. We confirm the scope, build it and launch it for you.",
      primaryCta: "See Services",
      secondaryCta: "See the Complete System",
    },
    catalog: {
      ...payPerServiceContent.en.catalog,
      eyebrow: "Service catalog",
      title: "What would help your business?",
      description:
        "Use Add to Request to select services. Send your list through Contact and we’ll confirm the scope and quote.",
    },
    groups: {
      paidMedia: {
        ...payPerServiceContent.en.groups.paidMedia,
        title: "Paid Media",
        description: "Get in front of the right people.",
      },
      automation: {
        ...payPerServiceContent.en.groups.automation,
        title: "Automation & Chatbots",
        description: "Let the system handle repeated questions and tasks.",
      },
      leadOps: {
        ...payPerServiceContent.en.groups.leadOps,
        title: "Lead Management & CRM",
        description: "Keep every lead in one place and know what happens next.",
      },
      websites: {
        ...payPerServiceContent.en.groups.websites,
        title: "Websites & Funnels",
        description: "Turn visitors into inquiries.",
      },
    },
    cta: {
      eyebrow: "Ready to start?",
      title: "Ready to discuss your request?",
      description:
        "Send your selected services. We’ll reply with scope options, timing and what to expect.",
      primaryCta: "Review My Request",
      secondaryCta: "See the Complete System",
    },
  },
  es: {
    ...payPerServiceContent.es,
    hero: {
      eyebrow: "Servicios individuales",
      title: "Elige solo los servicios que necesitas.",
      description:
        "Elige un servicio o combina varios. Acordamos el alcance, lo implementamos y lo ponemos en marcha.",
      primaryCta: "Ver servicios",
      secondaryCta: "Ver el sistema completo",
    },
    catalog: {
      ...payPerServiceContent.es.catalog,
      eyebrow: "Catálogo de servicios",
      title: "¿Qué le ayudaría a tu negocio?",
      description:
        "Usa «Añadir a la solicitud» para elegir servicios. Envía tu lista desde Contacto y confirmamos el alcance y la cotización.",
    },
    groups: {
      paidMedia: {
        ...payPerServiceContent.es.groups.paidMedia,
        title: "Publicidad digital",
        description: "Llega a las personas indicadas.",
      },
      automation: {
        ...payPerServiceContent.es.groups.automation,
        title: "Automatización y chatbots",
        description:
          "Deja las preguntas y tareas repetitivas en manos del sistema.",
      },
      leadOps: {
        ...payPerServiceContent.es.groups.leadOps,
        title: "Gestión de contactos y CRM",
        description: "Reúne cada contacto y ten claro qué sigue.",
      },
      websites: {
        ...payPerServiceContent.es.groups.websites,
        title: "Sitios web y páginas de campaña",
        description: "Convierte visitas en consultas.",
      },
    },
    cta: {
      eyebrow: "¿Listo para empezar?",
      title: "¿Listo para hablar de tu solicitud?",
      description:
        "Envía los servicios elegidos. Te respondemos con opciones de alcance, tiempos y próximos pasos.",
      primaryCta: "Revisar mi solicitud",
      secondaryCta: "Ver el sistema completo",
    },
  },
};
