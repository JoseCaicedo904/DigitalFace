import type { Locale } from "../locale";
import type { LeadGoal } from "@shared/lead";

/**
 * Copy for the shared lead form.
 *
 * Two boundaries this file must hold:
 * 1. The offer is 50% off the FIRST MONTH OF DIGITALFACE SUPPORT only. Setup,
 *    ad spend, platform, usage and third-party costs are excluded, and the
 *    terms line says so in both locales. Never write "50% off DigitalFace".
 * 2. Nothing here names the internals that carry the submission. Visitors read
 *    about DigitalFace, never about the plumbing behind the form.
 */

const en = {
  eyebrow: "Contact DigitalFace",
  title: "Tell us what you want to improve.",
  description:
    "Whether you need more qualified leads, stronger follow-up, AI customer communication, a better website or a complete growth system, tell us where you are today.",

  offerLabel: "New client offer",
  offerTitle: "50% off your first month of DigitalFace support.",
  offerBody:
    "Submit your request and we'll send your private offer code to your email.",
  offerTerms:
    "New clients only. Applies to the first month of eligible DigitalFace management/support. Implementation, advertising, platform and usage costs are excluded. Terms apply.",

  nameLabel: "Name",
  namePlaceholder: "Your name",
  businessLabel: "Business / Practice",
  businessPlaceholder: "Practice or brand name",
  emailLabel: "Email",
  emailPlaceholder: "name@email.com",
  phoneLabel: "WhatsApp / Phone",
  phonePlaceholder: "WhatsApp or phone number",
  countryLabel: "Country",
  countryPlaceholder: "Select your country",
  countryPriorityGroup: "Frequently selected",
  countryAllGroup: "All countries",
  websiteLabel: "Website",
  websiteOptional: "Optional",
  websitePlaceholder: "https://yourwebsite.com",
  goalLabel: "What do you want to improve?",
  goalPlaceholder: "Select a goal",
  messageLabel: "Tell us about your business",
  messageOptional: "Optional",
  messagePlaceholder:
    "Tell us briefly what you're trying to improve, where your inquiries come from, or what is currently slowing your growth.",

  goals: {
    more_leads: "Get More Leads",
    convert_leads: "Convert More Leads",
    crm_follow_up: "CRM & Follow-Up",
    ai_communication: "AI Customer Communication",
    website: "Website / Landing Page",
    full_growth_system: "Full Growth System",
    not_sure: "Not Sure Yet",
  } satisfies Record<LeadGoal, string>,

  submit: "Get My Offer & Contact DigitalFace",
  submitShort: "Get My Offer",
  submitting: "Sending your request…",

  errors: {
    name: "Please enter your name.",
    business: "Please enter your business or practice name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid WhatsApp or phone number.",
    country: "Please select your country.",
    goal: "Please choose what you want to improve.",
    website: "Please enter a valid website address, or leave it empty.",
    summary: "Please check the highlighted fields and try again.",
  },

  failureTitle: "We couldn't send your request.",
  failureBody:
    "Something went wrong on our side and your details were not sent. Your information is still here — please try again.",
  retry: "Try again",

  successLabel: "Request received",
  successTitle: "Thanks, {name}.",
  successBody: "We've received your information.",
  successEmailNote:
    "Check your email for your private DigitalFace offer code. Our team will review your request and contact you shortly.",
} satisfies Record<string, unknown>;

const es: typeof en = {
  eyebrow: "Contacta a DigitalFace",
  title: "Cuéntanos qué quieres mejorar.",
  description:
    "Ya sea que necesites más clientes potenciales calificados, un mejor seguimiento, comunicación con IA, un mejor sitio web o un sistema de crecimiento completo, cuéntanos en qué punto estás hoy.",

  offerLabel: "Oferta para nuevos clientes",
  offerTitle: "50% de descuento en tu primer mes de soporte DigitalFace.",
  offerBody: "Envía tu solicitud y te mandamos tu código privado a tu correo.",
  offerTerms:
    "Solo para clientes nuevos. Aplica al primer mes de gestión/soporte DigitalFace elegible. No incluye implementación, inversión publicitaria, plataformas ni costos de uso. Aplican términos.",

  nameLabel: "Nombre",
  namePlaceholder: "Tu nombre",
  businessLabel: "Negocio / Clínica",
  businessPlaceholder: "Nombre de la clínica o marca",
  emailLabel: "Correo",
  emailPlaceholder: "nombre@correo.com",
  phoneLabel: "WhatsApp / Teléfono",
  phonePlaceholder: "Número de WhatsApp o teléfono",
  countryLabel: "País",
  countryPlaceholder: "Selecciona tu país",
  countryPriorityGroup: "Más frecuentes",
  countryAllGroup: "Todos los países",
  websiteLabel: "Sitio web",
  websiteOptional: "Opcional",
  websitePlaceholder: "https://tusitio.com",
  goalLabel: "¿Qué quieres mejorar?",
  goalPlaceholder: "Selecciona un objetivo",
  messageLabel: "Cuéntanos sobre tu negocio",
  messageOptional: "Opcional",
  messagePlaceholder:
    "Cuéntanos brevemente qué quieres mejorar, de dónde llegan tus consultas o qué está frenando tu crecimiento hoy.",

  goals: {
    more_leads: "Conseguir más clientes potenciales",
    convert_leads: "Convertir más clientes potenciales",
    crm_follow_up: "CRM y seguimiento",
    ai_communication: "Comunicación con clientes usando IA",
    website: "Sitio web / Landing page",
    full_growth_system: "Sistema de crecimiento completo",
    not_sure: "Todavía no lo sé",
  },

  submit: "Quiero mi oferta y contactar a DigitalFace",
  submitShort: "Quiero mi oferta",
  submitting: "Enviando tu solicitud…",

  errors: {
    name: "Escribe tu nombre.",
    business: "Escribe el nombre de tu negocio o clínica.",
    email: "Escribe un correo electrónico válido.",
    phone: "Escribe un número de WhatsApp o teléfono válido.",
    country: "Selecciona tu país.",
    goal: "Elige qué quieres mejorar.",
    website: "Escribe una dirección web válida o deja el campo vacío.",
    summary: "Revisa los campos marcados e inténtalo de nuevo.",
  },

  failureTitle: "No pudimos enviar tu solicitud.",
  failureBody:
    "Algo falló de nuestro lado y tus datos no se enviaron. Tu información sigue aquí: vuelve a intentarlo.",
  retry: "Intentar de nuevo",

  successLabel: "Solicitud recibida",
  successTitle: "Gracias, {name}.",
  successBody: "Recibimos tu información.",
  successEmailNote:
    "Revisa tu correo para encontrar tu código privado de DigitalFace. Nuestro equipo revisará tu solicitud y te contactará muy pronto.",
};

export const leadFormContent: Record<Locale, typeof en> = { en, es };
export type LeadFormContent = typeof en;
