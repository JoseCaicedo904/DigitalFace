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
    industriesIntro: "Choose a growth focus",
    bookCall: "Book a call",
    bookDemo: "Book a demo",
  },
  industries: {
    paidAdvertising: {
      label: "Paid Advertising",
      description:
        "Meta, Google and TikTok acquisition managed around business outcomes",
    },
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
    },
    automation: {
      title: "Automation and chatbots",
    },
    leadOps: {
      title: "Lead operations and CRM",
    },
    websites: {
      title: "Websites and funnels",
    },
  },
  footer: {
    tagline:
      "DigitalFace connects advertising, websites, CRM and AI follow-up for appointment-driven businesses in the US, Canada and Latin America.",
    promise: "No inquiry goes unanswered.",
    navigate: "Navigate",
    industries: "Industries",
    contact: "Contact",
    offices: "Offices",
    emailLabel: "Email",
    hoursLabel: "Service window",
    hoursValue: [
      { day: "Monday – Friday", time: "8:00 AM – 8:00 PM ET" },
      { day: "Saturday", time: "8:00 AM – 6:00 PM ET" },
    ],
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
    industriesIntro: "Elige un enfoque de crecimiento",
    bookCall: "Agenda una llamada",
    bookDemo: "Agenda una demostración",
  },
  industries: {
    paidAdvertising: {
      label: "Publicidad pagada",
      description:
        "Captación en Meta, Google y TikTok gestionada hacia resultados de negocio",
    },
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
    },
    automation: {
      title: "Automatización y chatbots",
    },
    leadOps: {
      title: "Gestión de contactos y CRM",
    },
    websites: {
      title: "Sitios web y embudos",
    },
  },
  footer: {
    tagline:
      "DigitalFace conecta publicidad, sitios web, CRM y seguimiento con IA para negocios que trabajan con citas en Estados Unidos, Canadá y Latinoamérica.",
    promise: "Ninguna consulta se queda sin respuesta.",
    navigate: "Navegación",
    industries: "Industrias",
    contact: "Contacto",
    offices: "Oficinas",
    emailLabel: "Correo",
    hoursLabel: "Horario de atención",
    hoursValue: [
      { day: "Lunes a viernes", time: "8:00 a. m. – 8:00 p. m. ET" },
      { day: "Sábado", time: "8:00 a. m. – 6:00 p. m. ET" },
    ],
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
