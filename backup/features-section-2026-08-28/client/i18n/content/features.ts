import type { Locale } from "../locale";

const en = {
  metadata: {
    title: "Patient Acquisition & Follow-Up System | DigitalFace Marketing",
    description:
      "How the DigitalFace system captures every patient inquiry and turns it into a booked appointment: paid traffic, lead capture, instant follow-up, booking, CRM, recovery and ongoing optimization.",
  },
  overview: {
    eyebrow: "Sales System",
    title:
      "The DigitalFace Sales System: from patient inquiry to booked appointment",
    description:
      "One managed engine for practices that live on their calendar. Capture every inquiry, answer it instantly and book more appointments.",
    items: [
      {
        title: "No inquiry goes unanswered",
        description: "Every message is captured and gets an immediate reply.",
      },
      {
        title: "Appointments on autopilot",
        description:
          "Self-booking, confirmations and reminders keep the calendar full.",
      },
      {
        title: "A pipeline you can read",
        description:
          "Every opportunity and its stage, visible in one dashboard.",
      },
    ],
  },
  modules: {
    label: "Module",
    startLink: "Start here",
    viewMore: "View more",
    viewLabel: "View",
    closeLabel: "Close image preview",
    previewLabel: "preview",
    items: [
      {
        title: "Paid traffic that creates demand",
        description:
          "We plan, launch and manage the campaigns that bring qualified people into your system.",
        bullets: [
          "Facebook and Instagram campaigns on Meta",
          "Google Search, Display and YouTube",
          "TikTok campaigns for top-of-funnel reach",
          "Setup, tracking and ongoing optimization",
        ],
        imageAlt: "Paid traffic that creates demand",
      },
      {
        title: "Lead capture from every channel",
        description:
          "Every inquiry flows into one system, so nothing depends on someone remembering.",
        bullets: [
          "Website forms, funnels and surveys connected",
          "Chat widget and two-way text conversations",
          "Every inquiry recorded in your CRM automatically",
          "Facebook, Instagram and Google lead sync",
        ],
        imageAlt: "Lead capture from every channel",
      },
      {
        title: "Instant follow-up and nurture",
        description:
          "Automated messages answer in seconds and keep the conversation alive.",
        bullets: [
          "Immediate SMS and email replies",
          "Multi-day follow-up that stops the moment someone answers",
          "Messages written to sound like your team, not a robot",
          "Long-term nurture for people who are not ready yet",
        ],
        imageAlt: "Instant follow-up and nurture",
      },
      {
        title: "Booking and reminders",
        description:
          "People book themselves, and more of them actually show up.",
        bullets: [
          "Self-scheduling calendar links",
          "Confirmation and reminder sequences",
          "Reschedule links that reduce missed appointments",
          "Daily agenda notifications for your team",
        ],
        imageAlt: "Booking and reminders",
      },
      {
        title: "CRM pipeline visibility",
        description:
          "A simple visual pipeline shows exactly where every opportunity stands.",
        bullets: [
          "An opportunity created automatically for each inquiry",
          "Stages for new, booked, no-show and closed",
          "Owner assignments and task prompts",
          "Notes and full history in one record",
        ],
        imageAlt: "CRM pipeline visibility",
      },
      {
        title: "Recovery and reactivation",
        description: "Win back the opportunities that normally go cold.",
        bullets: [
          "No-show recovery messages",
          "Missed-call text back",
          "Post-appointment follow-up sequences",
          "Reactivation campaigns for older contacts",
        ],
        imageAlt: "Recovery and reactivation",
      },
      {
        title: "Ongoing optimization",
        description: "We keep the system sharp as your practice grows.",
        bullets: [
          "Monthly tuning of messages and workflows",
          "Adjustments based on real response data",
          "New campaigns added when they are justified",
          "Support for changes and questions",
        ],
        imageAlt: "Ongoing optimization",
      },
    ],
  },
  principles: {
    eyebrow: "How we operate",
    title: "Three principles that keep the system simple",
    description:
      "Clear communication, steady automation and real support. We do not negotiate on those.",
    items: [
      {
        title: "Clarity",
        description:
          "The system stays simple and visible, so a small team can actually run it.",
      },
      {
        title: "Automation",
        description:
          "We automate the busywork so your team can focus on the work that matters.",
      },
      {
        title: "Support",
        description:
          "We stay hands-on with updates, improvements and training.",
      },
    ],
  },
  launch: {
    eyebrow: "Launch plan",
    title: "A productized setup with a clear timeline",
    description:
      "The same delivery process every time. Clear steps, and a fast start.",
    timelineBadge: "5-7",
    timelineTitle: "Business days to launch for most practices.",
    timelineSubtitle: "You stay with your patients while we build.",
    notes: [
      "The same proven playbook, adapted to your practice.",
      "We run the setup. You step in only where we need a decision.",
    ],
    steps: [
      {
        badge: "D1",
        title: "Day 1: share the basics",
        description: "One short call and a quick form. We take it from there.",
      },
      {
        badge: "D2",
        title: "Days 2-4: build and test",
        description:
          "We set everything up, run the checks and make sure it holds.",
      },
      {
        badge: "D5",
        title: "Days 5-7: go live",
        description:
          "The system turns on and inquiries start moving through it.",
      },
      {
        badge: "ON",
        title: "Ongoing: we stay with you",
        description:
          "We keep it tuned, handle updates and answer questions quickly.",
      },
    ],
    routineLabel: "Your daily routine",
    routine: [
      "Check new messages",
      "Confirm appointments",
      "Show up and treat",
    ],
    routineClose: "That is the routine. We handle the rest.",
  },
  cta: {
    eyebrow: "See it live",
    title: "Want to see how the system runs?",
    description: "Book a short call and we will walk you through it.",
    primaryCta: "Talk with us",
    secondaryCta: "See the plans",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title:
      "Sistema de Captación y Seguimiento de Pacientes | DigitalFace Marketing",
    description:
      "Cómo el sistema DigitalFace captura cada consulta de paciente y la convierte en una cita agendada: pauta digital, captura de contactos, respuesta inmediata, agendamiento, CRM, recuperación y optimización continua.",
  },
  overview: {
    eyebrow: "Sistema de Ventas",
    title:
      "El Sistema de Ventas DigitalFace: de la consulta del paciente a la cita agendada",
    description:
      "Un solo motor administrado para negocios que viven de su calendario. Captura cada consulta, respóndela al instante y agenda más citas.",
    items: [
      {
        title: "Ninguna consulta se queda sin respuesta",
        description:
          "Cada mensaje queda registrado y recibe una respuesta inmediata.",
      },
      {
        title: "Citas en piloto automático",
        description:
          "Autoagendamiento, confirmaciones y recordatorios mantienen el calendario lleno.",
      },
      {
        title: "Un proceso que se entiende",
        description:
          "Cada oportunidad y su etapa, visibles en un solo tablero.",
      },
    ],
  },
  modules: {
    label: "Módulo",
    startLink: "Empieza aquí",
    viewMore: "Ver más",
    viewLabel: "Ver",
    closeLabel: "Cerrar vista previa de la imagen",
    previewLabel: "vista previa",
    items: [
      {
        title: "Pauta digital que genera demanda",
        description:
          "Planeamos, lanzamos y administramos las campañas que traen personas calificadas a tu sistema.",
        bullets: [
          "Campañas de Facebook e Instagram en Meta",
          "Google Search, Display y YouTube",
          "Campañas en TikTok para alcance inicial",
          "Configuración, medición y optimización continua",
        ],
        imageAlt: "Pauta digital que genera demanda",
      },
      {
        title: "Captura de contactos desde todos los canales",
        description:
          "Cada consulta entra a un mismo sistema, sin depender de que alguien se acuerde.",
        bullets: [
          "Formularios, embudos y encuestas conectados",
          "Chat del sitio y conversaciones de texto en dos vías",
          "Cada consulta registrada automáticamente en tu CRM",
          "Sincronización con Facebook, Instagram y Google",
        ],
        imageAlt: "Captura de contactos desde todos los canales",
      },
      {
        title: "Respuesta inmediata y seguimiento",
        description:
          "Los mensajes automáticos responden en segundos y mantienen viva la conversación.",
        bullets: [
          "Respuestas inmediatas por SMS y correo",
          "Seguimiento de varios días que se detiene apenas la persona responde",
          "Mensajes escritos con el tono de tu equipo, no de un robot",
          "Seguimiento a largo plazo para quienes todavía no deciden",
        ],
        imageAlt: "Respuesta inmediata y seguimiento",
      },
      {
        title: "Agendamiento y recordatorios",
        description: "Las personas agendan solas y llegan más veces a la cita.",
        bullets: [
          "Enlaces de calendario para agendar sin intermediarios",
          "Secuencias de confirmación y recordatorio",
          "Enlaces para reprogramar que reducen las inasistencias",
          "Aviso diario de la agenda para tu equipo",
        ],
        imageAlt: "Agendamiento y recordatorios",
      },
      {
        title: "Visibilidad del proceso en el CRM",
        description:
          "Un proceso visual y sencillo muestra en qué punto está cada oportunidad.",
        bullets: [
          "Una oportunidad creada automáticamente por cada consulta",
          "Etapas de nuevo, agendado, no asistió y cerrado",
          "Asignación de responsables y tareas",
          "Notas e historial completo en un mismo registro",
        ],
        imageAlt: "Visibilidad del proceso en el CRM",
      },
      {
        title: "Recuperación y reactivación",
        description: "Recupera las oportunidades que normalmente se enfrían.",
        bullets: [
          "Mensajes para recuperar citas no asistidas",
          "Mensaje automático por llamada perdida",
          "Secuencias de seguimiento después de la cita",
          "Campañas de reactivación para contactos antiguos",
        ],
        imageAlt: "Recuperación y reactivación",
      },
      {
        title: "Optimización continua",
        description: "Mantenemos el sistema afinado mientras tu clínica crece.",
        bullets: [
          "Ajuste mensual de mensajes y flujos",
          "Cambios basados en datos reales de respuesta",
          "Nuevas campañas cuando el caso lo justifica",
          "Soporte para cambios y preguntas",
        ],
        imageAlt: "Optimización continua",
      },
    ],
  },
  principles: {
    eyebrow: "Cómo trabajamos",
    title: "Tres principios que mantienen el sistema simple",
    description:
      "Comunicación clara, automatización estable y soporte real. En eso no negociamos.",
    items: [
      {
        title: "Claridad",
        description:
          "El sistema se mantiene simple y visible para que un equipo pequeño pueda operarlo.",
      },
      {
        title: "Automatización",
        description:
          "Automatizamos lo repetitivo para que tu equipo se concentre en lo que importa.",
      },
      {
        title: "Soporte",
        description:
          "Seguimos presentes con actualizaciones, mejoras y capacitación.",
      },
    ],
  },
  launch: {
    eyebrow: "Plan de lanzamiento",
    title: "Una implementación estandarizada con tiempos claros",
    description:
      "El mismo proceso de entrega cada vez. Pasos claros y un arranque rápido.",
    timelineBadge: "5-7",
    timelineTitle: "Días hábiles para salir en vivo en la mayoría de clínicas.",
    timelineSubtitle: "Tú sigues con tus pacientes mientras nosotros armamos.",
    notes: [
      "El mismo método probado, adaptado a tu clínica.",
      "Nosotros hacemos la configuración. Tú entras solo donde se necesita una decisión.",
    ],
    steps: [
      {
        badge: "D1",
        title: "Día 1: comparte lo básico",
        description:
          "Una llamada corta y un formulario rápido. Desde ahí seguimos nosotros.",
      },
      {
        badge: "D2",
        title: "Días 2-4: construcción y pruebas",
        description:
          "Configuramos todo, hacemos las pruebas y verificamos que funcione.",
      },
      {
        badge: "D5",
        title: "Días 5-7: salida en vivo",
        description:
          "El sistema se activa y las consultas empiezan a moverse dentro de él.",
      },
      {
        badge: "ON",
        title: "Después: seguimos contigo",
        description:
          "Lo mantenemos afinado, aplicamos actualizaciones y respondemos rápido.",
      },
    ],
    routineLabel: "Tu rutina diaria",
    routine: [
      "Revisar mensajes nuevos",
      "Confirmar las citas",
      "Atender a tus pacientes",
    ],
    routineClose: "Esa es la rutina. Del resto nos encargamos nosotros.",
  },
  cta: {
    eyebrow: "Míralo en vivo",
    title: "¿Quieres ver cómo funciona el sistema?",
    description: "Agenda una llamada corta y te lo mostramos paso a paso.",
    primaryCta: "Hablemos",
    secondaryCta: "Ver los planes",
  },
};

export const featuresContent: Record<Locale, typeof en> = { en, es };
export type FeaturesContent = typeof en;
