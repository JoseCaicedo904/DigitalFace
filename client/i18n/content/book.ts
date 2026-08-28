import type { Locale } from "../locale";

/**
 * The dedicated scheduling page. Deliberately short: the visitor arrived here
 * having already decided to book, so the page's only job is to get them to a
 * time.
 */
const en = {
  metadata: {
    title: "Book a DigitalFace Consultation | DigitalFace Marketing",
    description:
      "Schedule a short consultation with DigitalFace to discuss lead generation, conversion, CRM, automation and AI for your business.",
  },
  eyebrow: "Book a consultation",
  title: "Choose a time that works for you.",
  description:
    "Schedule a short conversation with DigitalFace to discuss your current growth, lead conversion, CRM, automation or AI needs.",
  hint: "Choose your preferred date and time below.",
  /** Accessible name for the embedded widget. Company-first, never a person. */
  calendarTitle: "Book a DigitalFace consultation",
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Agenda una Consulta con DigitalFace | DigitalFace Marketing",
    description:
      "Agenda una consulta corta con DigitalFace para hablar de generación de leads, conversión, CRM, automatización e IA para tu negocio.",
  },
  eyebrow: "Agenda una consulta",
  title: "Elige el horario que mejor te funcione.",
  description:
    "Agenda una conversación corta con DigitalFace para hablar de tu crecimiento actual, conversión de leads, CRM, automatización o IA.",
  hint: "Elige abajo tu fecha y hora preferidas.",
  calendarTitle: "Agenda una consulta con DigitalFace",
};

export const bookContent: Record<Locale, typeof en> = { en, es };
export type BookContent = typeof en;
