import type { Locale } from "../locale";

/**
 * Shared chrome copy: navigation, mega menu, footer and layout labels.
 * The English object defines the shape; Spanish must satisfy it exactly,
 * so a missing translation becomes a TypeScript error instead of a leak.
 */
const en = {
  nav: {
    home: "Home",
    about: "About",
    features: "Sales System",
    industries: "Industries",
    payPerService: "Pay per Service",
    pricing: "Plans",
    contact: "Contact",
    menuToggle: "Open or close the navigation menu",
    industriesIntro: "Choose your patient growth system",
    bookCall: "Book a call",
    bookDemo: "Book a demo",
  },
  industries: {
    dental: {
      description: "Implants, veneers and high-value treatment inquiries",
    },
    aesthetic: {
      description: "Consultation growth for physicians and aesthetic teams",
    },
    medSpa: {
      description: "Bookings, packages, memberships and reactivation",
    },
  },
  megaNav: {
    paidMedia: {
      title: "Paid media and social advertising",
      links: {
        meta: "Meta ads",
        tiktok: "TikTok ads",
        google: "Google ads",
        seo: "SEO strategy",
        content: "Content creation",
      },
    },
    automation: {
      title: "Automation and chatbots",
      links: {
        chatbot: "Chatbot development",
        workflow: "Workflow automation",
        appointment: "Appointment and calendar automation",
        ecommerce: "E-commerce automation",
        comments: "Facebook and Instagram comment replies",
      },
    },
    leadOps: {
      title: "Lead operations and CRM",
      links: {
        capture: "Lead capture and CRM sync",
        booking: "Appointment booking and reminders",
        pipeline: "CRM pipeline setup",
        integration: "CRM integration and data sync",
        reporting: "Reporting and performance dashboards",
      },
    },
    websites: {
      title: "Websites and funnels",
      links: {
        corporate: "Corporate and business websites",
        ecommerce: "E-commerce storefronts",
        landing: "Campaign landing pages",
      },
    },
  },
  footer: {
    tagline:
      "DigitalFace installs and manages the acquisition, follow-up and booking system behind dental practices, aesthetic medicine and med spas.",
    promise: "No inquiry goes unanswered.",
    navigate: "Navigate",
    industries: "Industries",
    contact: "Contact",
    offices: "Offices",
    emailLabel: "Email",
    hoursLabel: "Service window",
    hoursValue: "Monday to Saturday, reply within one business day",
    locationsLabel: "Locations",
    locationsValue: "Miami, FL and Cali, CO",
    miamiTitle: "Miami, Florida",
    miamiDetail: "Remote-first across the East Coast",
    caliTitle: "Cali, Colombia",
    caliDetail: "Calle 70 # 1-00, La 14 de Calima, Cali, Colombia",
    rights: "DigitalFace Marketing. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    sitemap: "Sitemap",
    region: "Colombia - Florida",
    logoAlt: "DigitalFace Marketing logo",
  },
  loading: "Loading DigitalFace…",
} satisfies Record<string, unknown>;

const es: typeof en = {
  nav: {
    home: "Inicio",
    about: "Nosotros",
    features: "Sistema de Ventas",
    industries: "Industrias",
    payPerService: "Servicios por separado",
    pricing: "Planes",
    contact: "Contacto",
    menuToggle: "Abrir o cerrar el menú de navegación",
    industriesIntro: "Elige tu sistema de captación de pacientes",
    bookCall: "Agenda una llamada",
    bookDemo: "Agenda una demostración",
  },
  industries: {
    dental: {
      description: "Implantes, carillas y tratamientos de alto valor",
    },
    aesthetic: {
      description: "Más consultas para médicos y equipos estéticos",
    },
    medSpa: {
      description: "Agendamiento, paquetes, membresías y reactivación",
    },
  },
  megaNav: {
    paidMedia: {
      title: "Pauta digital y publicidad en redes",
      links: {
        meta: "Anuncios en Meta",
        tiktok: "Anuncios en TikTok",
        google: "Anuncios en Google",
        seo: "Estrategia SEO",
        content: "Creación de contenido",
      },
    },
    automation: {
      title: "Automatización y chatbots",
      links: {
        chatbot: "Desarrollo de chatbots",
        workflow: "Automatización de procesos",
        appointment: "Automatización de citas y calendario",
        ecommerce: "Automatización para e-commerce",
        comments: "Respuestas a comentarios en Facebook e Instagram",
      },
    },
    leadOps: {
      title: "Gestión de contactos y CRM",
      links: {
        capture: "Captura de contactos y sincronización con el CRM",
        booking: "Agendamiento de citas y recordatorios",
        pipeline: "Configuración del embudo en el CRM",
        integration: "Integración de CRM y sincronización de datos",
        reporting: "Reportes y tableros de rendimiento",
      },
    },
    websites: {
      title: "Sitios web y embudos",
      links: {
        corporate: "Sitios web corporativos y de negocio",
        ecommerce: "Tiendas de e-commerce",
        landing: "Landing pages para campañas",
      },
    },
  },
  footer: {
    tagline:
      "DigitalFace instala y administra el sistema de captación, seguimiento y agendamiento que usan clínicas odontológicas, centros de medicina estética y med spas.",
    promise: "Ninguna consulta se queda sin respuesta.",
    navigate: "Navegación",
    industries: "Industrias",
    contact: "Contacto",
    offices: "Oficinas",
    emailLabel: "Correo",
    hoursLabel: "Horario de atención",
    hoursValue: "De lunes a sábado, respuesta en un día hábil",
    locationsLabel: "Ubicaciones",
    locationsValue: "Miami, FL y Cali, CO",
    miamiTitle: "Miami, Florida",
    miamiDetail: "Equipo remoto en toda la costa este",
    caliTitle: "Cali, Colombia",
    caliDetail: "Calle 70 # 1-00, La 14 de Calima, Cali, Colombia",
    rights: "DigitalFace Marketing. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    sitemap: "Mapa del sitio",
    region: "Colombia - Florida",
    logoAlt: "Logotipo de DigitalFace Marketing",
  },
  loading: "Cargando DigitalFace…",
};

export const commonContent: Record<Locale, typeof en> = { en, es };
export type CommonContent = typeof en;
