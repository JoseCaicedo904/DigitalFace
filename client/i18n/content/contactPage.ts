import { contactContent } from "./contact";

// Contact-only wording; the industry booking panels keep their existing shared copy.
export const contactPageContent = {
  en: {
    ...contactContent.en,
    hero: {
      eyebrow: "Contact",
      title: "Tell us what you need.",
      description:
        "Book a call or send a message. We reply within one business day.",
      note: "Let's talk",
    },
    booking: {
      eyebrow: "Start with a conversation",
      title: "Choose a time. We’ll take it from there.",
      description:
        "In a 30-minute call, we’ll help you find the right next step.",
      ctaLabel: "Book a Call",
      highlights: [
        "Tell us what you want to improve.",
        "We review your needs and show you the options.",
        "You get a plan and a timeline.",
      ],
      panel: {
        label: "DigitalFace consultation",
        duration: "30 min",
        timezone: "Times shown in ET",
        slotsLabel: "Available times",
      },
      secondaryLabel: "Send a Message",
    },
    guide: {
      title: "Contact details",
    },
    formTitle: "Prefer to send a message?",
    formDescription:
      "Tell us about your business and what you need. Any services you selected stay in your request.",
  },
  es: {
    ...contactContent.es,
    hero: {
      eyebrow: "Contacto",
      title: "Cuéntanos qué necesitas.",
      description:
        "Agenda una llamada o envía un mensaje. Respondemos en un día hábil.",
      note: "Hablemos",
    },
    booking: {
      eyebrow: "Empecemos con una conversación",
      title: "Elige un horario. Te ayudamos con lo que sigue.",
      description:
        "En una llamada de 30 minutos, te ayudamos a definir el siguiente paso.",
      ctaLabel: "Agendar una llamada",
      highlights: [
        "Cuéntanos qué quieres mejorar.",
        "Revisamos lo que necesitas y te mostramos las opciones.",
        "Recibes un plan y tiempos claros.",
      ],
      panel: {
        label: "Consulta DigitalFace",
        duration: "30 min",
        timezone: "Horarios en ET",
        slotsLabel: "Horarios disponibles",
      },
      secondaryLabel: "Enviar un mensaje",
    },
    guide: {
      title: "Datos de contacto",
    },
    formTitle: "¿Prefieres escribirnos?",
    formDescription:
      "Cuéntanos sobre tu negocio y qué necesitas. Los servicios que elegiste se mantienen en tu solicitud.",
  },
};
