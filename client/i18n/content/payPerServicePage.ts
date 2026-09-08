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
        description:
          "Reach potential customers with campaigns on Meta, Google and TikTok.",
      },
      automation: {
        ...payPerServiceContent.en.groups.automation,
        title: "Automation & Chatbots",
        description:
          "Answer inquiries with AI chatbots and automate follow-up, booking and routine tasks.",
      },
      leadOps: {
        ...payPerServiceContent.en.groups.leadOps,
        title: "Lead Management & CRM",
        description:
          "Connect your lead sources, CRM pipeline and reporting so your team knows what happens next.",
      },
      websites: {
        ...payPerServiceContent.en.groups.websites,
        title: "Websites & Funnels",
        description:
          "Build business websites and campaign landing pages connected to lead capture and CRM.",
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
        description:
          "Llega a clientes potenciales con campañas en Meta, Google y TikTok.",
      },
      automation: {
        ...payPerServiceContent.es.groups.automation,
        title: "Automatización y chatbots",
        description:
          "Responde consultas con chatbots de IA y automatiza el seguimiento, las citas y las tareas repetitivas.",
      },
      leadOps: {
        ...payPerServiceContent.es.groups.leadOps,
        title: "Gestión de contactos y CRM",
        description:
          "Conecta tus fuentes de contactos, etapas del CRM y reportes para que tu equipo sepa qué sigue.",
      },
      websites: {
        ...payPerServiceContent.es.groups.websites,
        title: "Sitios web y páginas de campaña",
        description:
          "Crea sitios web y páginas de campaña conectados a la captura de contactos y al CRM.",
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
