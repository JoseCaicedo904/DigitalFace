import type { Locale } from "../locale";

const en = {
  metadata: {
    title: "Contact DigitalFace Marketing | Book a Patient Growth Call",
    description:
      "Tell us about your practice and how patient inquiries reach you today. We map your follow-up flow and bring a plan to the call, and we reply within one business day.",
  },
  hero: {
    eyebrow: "Contact",
    title: "See the system running.",
    description:
      "Send us a short message or book a call. We reply within one business day.",
    note: "Let's talk",
  },
  cards: {
    email: {
      title: "Email",
      hint: "Tell us your type of practice, how many inquiries you get and what you want automated.",
    },
    response: {
      title: "Response time",
      body: "We reply within one business day.",
      steps: [
        "1. We review how inquiries reach you today.",
        "2. We show you the system running for your type of practice.",
        "3. You get a plan and a timeline.",
      ],
    },
    location: {
      title: "Where we work",
      body: "Miami, Florida and Cali, Colombia.",
      hint: "Overlapping time zones keep communication easy across North and South America.",
    },
    include: {
      title: "What to include",
      items: [
        "Your type of practice and the treatments you offer.",
        "Where your inquiries come from and roughly how many.",
        "How your team handles follow-up today.",
      ],
    },
  },
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    companyLabel: "Practice",
    companyPlaceholder: "Practice or brand name",
    emailLabel: "Email",
    emailPlaceholder: "name@email.com",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell us about your practice, where your inquiries come from and what you want automated.",
    submit: "Send request",
    nextTitle: "What happens next",
    nextBody:
      "We read your message, map the follow-up flow and bring a clear plan to the call.",
  },
  /** The closing conversion block. One button, no second sales pitch. */
  booking: {
    eyebrow: "Ready when you are",
    title: "Choose a time that works for you.",
    description:
      "Book a short DigitalFace consultation, or use the form above if you would rather we came back to you in writing.",
    ctaLabel: "Choose a time",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Contacto | Agenda una Llamada con DigitalFace Marketing",
    description:
      "Cuéntanos sobre tu clínica y cómo llegan tus consultas de pacientes hoy. Mapeamos tu flujo de seguimiento y llegamos a la llamada con un plan. Respondemos en un día hábil.",
  },
  hero: {
    eyebrow: "Contacto",
    title: "Mira el sistema funcionando.",
    description:
      "Escríbenos un mensaje corto o agenda una llamada. Respondemos en un día hábil.",
    note: "Hablemos",
  },
  cards: {
    email: {
      title: "Correo",
      hint: "Cuéntanos qué tipo de clínica tienes, cuántas consultas recibes y qué quieres automatizar.",
    },
    response: {
      title: "Tiempo de respuesta",
      body: "Respondemos en un día hábil.",
      steps: [
        "1. Revisamos cómo te llegan las consultas hoy.",
        "2. Te mostramos el sistema aplicado a tu tipo de clínica.",
        "3. Recibes un plan y unos tiempos claros.",
      ],
    },
    location: {
      title: "Dónde trabajamos",
      body: "Miami, Florida y Cali, Colombia.",
      hint: "Husos horarios compatibles mantienen la comunicación fluida entre Norteamérica y Latinoamérica.",
    },
    include: {
      title: "Qué incluir en tu mensaje",
      items: [
        "Tu tipo de clínica y los tratamientos que ofreces.",
        "De dónde llegan tus consultas y más o menos cuántas.",
        "Cómo hace el seguimiento tu equipo actualmente.",
      ],
    },
  },
  form: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    companyLabel: "Clínica",
    companyPlaceholder: "Nombre de la clínica o marca",
    emailLabel: "Correo",
    emailPlaceholder: "nombre@correo.com",
    messageLabel: "Mensaje",
    messagePlaceholder:
      "Cuéntanos sobre tu clínica, de dónde llegan tus consultas y qué quieres automatizar.",
    submit: "Enviar solicitud",
    nextTitle: "Qué sigue",
    nextBody:
      "Leemos tu mensaje, mapeamos el flujo de seguimiento y llegamos a la llamada con un plan claro.",
  },
  booking: {
    eyebrow: "Cuando quieras",
    title: "Elige el horario que mejor te funcione.",
    description:
      "Agenda una consulta corta con DigitalFace, o usa el formulario de arriba si prefieres que te respondamos por escrito.",
    ctaLabel: "Elige un horario",
  },
};

export const contactContent: Record<Locale, typeof en> = { en, es };
export type ContactContent = typeof en;
