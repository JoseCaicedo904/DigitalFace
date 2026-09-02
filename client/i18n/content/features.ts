import type { JourneyContent } from "@/components/journey/journey";
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
  journey: {
    eyebrow: "How it runs",
    title: "One patient, one evening: the system doing its job",
    description:
      "Everything listed further down exists to make these four moments happen without anyone on your team having to remember them.",
    patientLabel: "Her side",
    systemLabel: "Your side",
    modulesLabel: "Covers",
    acts: [
      {
        badge: "01",
        time: "9:14 PM",
        title: "She finds you and leaves her details",
        patient:
          "María is on her phone after putting the kids to bed. Your ad comes up, she taps it and leaves her name and number. It takes her twenty seconds.",
        system:
          "We run the campaigns that put you in front of her, and every form, message and chat lands in the same place, whichever channel it arrived from.",
        modules: ["Paid traffic", "Lead capture"],
        script: {
          kind: "inbox",
          title: "Today's inquiries",
          countLabel: "new",
          rows: [
            {
              source: "social",
              channel: "Ad campaign",
              name: "María G.",
              time: "9:14 PM",
            },
            {
              source: "form",
              channel: "Website form",
              name: "Andrés P.",
              time: "9:22 PM",
            },
            {
              source: "chat",
              channel: "Site chat",
              name: "Lucía R.",
              time: "9:40 PM",
            },
          ],
          transcriptLabel:
            "Inquiries arriving from every channel into a single list.",
        },
      },
      {
        badge: "02",
        time: "9:15 PM",
        title: "She gets a real answer in seconds",
        patient:
          "Forty seconds later her phone buzzes. It is your practice, answering the question she actually asked, not an autoreply telling her someone will be in touch.",
        system:
          "An immediate reply goes out by text and email, and a follow-up sequence keeps going for days that stops the moment she writes back.",
        modules: ["Instant follow-up"],
        script: {
          kind: "reply",
          contact: "Your practice",
          clockLabel: "Tonight",
          incoming: {
            text: "Hi, I saw your ad. How much is a first consultation?",
            time: "9:14 PM",
          },
          outgoing: {
            text: "Hi María, thanks for reaching out. The first consultation includes a full assessment. Would you like me to check what we have open this week?",
            time: "9:15 PM",
          },
          timerLabel: "Answered in",
          timerValue: "40s",
          patientLabel: "María",
          clinicLabel: "Your practice",
          transcriptLabel:
            "A patient message and the reply that went out forty seconds later.",
        },
      },
      {
        badge: "03",
        time: "9:17 PM",
        title: "She books herself, without a phone call",
        patient:
          "She picks Tuesday at 10:00 from the times she is offered. No calling in the morning, no waiting for the practice to open.",
        system:
          "The calendar only offers hours you actually work. Once she takes one, the confirmation and the reminders go out on their own.",
        modules: ["Booking and reminders"],
        script: {
          kind: "booking",
          title: "Open times",
          dayLabel: "Tuesday",
          slots: ["9:00 AM", "10:00 AM", "11:30 AM", "2:00 PM"],
          bookedIndex: 1,
          bookedName: "María G.",
          bookedLabel: "Booked",
          followUps: ["Confirmation sent", "Reminder 24 hours before"],
          transcriptLabel:
            "Available appointment times, with one taken and the messages that follow it.",
        },
      },
      {
        badge: "04",
        time: "Next morning",
        title: "Your team opens one board and sees everything",
        patient:
          "María arrives on Tuesday. She never had to chase anyone, and neither did your front desk.",
        system:
          "Every inquiry is an opportunity with an owner and a stage. Anyone who went quiet stays in an automatic follow-up, so the ones that normally go cold do not.",
        modules: ["CRM pipeline", "Recovery", "Ongoing optimization"],
        script: {
          kind: "pipeline",
          title: "This week",
          columns: [
            { label: "New", tone: "new", count: "4" },
            { label: "Booked", tone: "booked", count: "7" },
            { label: "No-show", tone: "missed", count: "1" },
            { label: "Closed", tone: "closed", count: "3" },
          ],
          card: { name: "María G.", detail: "Tue 10:00 AM" },
          fromColumn: 0,
          toColumn: 1,
          recoveryLabel:
            "No-shows and missed calls go back into follow-up automatically.",
          transcriptLabel:
            "A pipeline board with one opportunity moving from new to booked.",
        },
      },
    ],
  } satisfies JourneyContent,
  modules: {
    label: "Module",
    eyebrow: "What is included",
    title: "The seven modules behind those four moments",
    description:
      "One managed system, billed as one plan. This is everything it does.",
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
      },
      {
        title: "Booking and reminders",
        description:
          "People book themselves, and more of them actually show up.",
        bullets: [
          "Self-scheduling calendar links",
          "Optional deposit or fee before a booking is confirmed, through your own payment provider",
          "Confirmation and reminder sequences",
          "Reschedule links that reduce missed appointments",
          "Daily agenda notifications for your team",
        ],
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
  journey: {
    eyebrow: "Cómo funciona",
    title: "Una paciente, una noche: el sistema haciendo su trabajo",
    description:
      "Todo lo que aparece más abajo existe para que estos cuatro momentos ocurran sin que nadie de tu equipo tenga que acordarse.",
    patientLabel: "Del lado de ella",
    systemLabel: "Del lado tuyo",
    modulesLabel: "Cubre",
    acts: [
      {
        badge: "01",
        time: "9:14 pm",
        title: "Te encuentra y deja sus datos",
        patient:
          "María está en su teléfono después de acostar a los niños. Aparece tu anuncio, lo toca y deja su nombre y su número. Le toma veinte segundos.",
        system:
          "Nosotros manejamos las campañas que te ponen frente a ella, y cada formulario, mensaje y chat llega al mismo lugar, sin importar por dónde entró.",
        modules: ["Pauta digital", "Captura de contactos"],
        script: {
          kind: "inbox",
          title: "Consultas de hoy",
          countLabel: "nuevas",
          rows: [
            {
              source: "social",
              channel: "Campaña de anuncios",
              name: "María G.",
              time: "9:14 pm",
            },
            {
              source: "form",
              channel: "Formulario del sitio",
              name: "Andrés P.",
              time: "9:22 pm",
            },
            {
              source: "chat",
              channel: "Chat del sitio",
              name: "Lucía R.",
              time: "9:40 pm",
            },
          ],
          transcriptLabel:
            "Consultas que llegan de todos los canales a una sola lista.",
        },
      },
      {
        badge: "02",
        time: "9:15 pm",
        title: "Recibe una respuesta real en segundos",
        patient:
          "Cuarenta segundos después le vibra el teléfono. Es tu clínica, respondiendo la pregunta que hizo, no un mensaje automático diciéndole que alguien la va a contactar.",
        system:
          "Sale una respuesta inmediata por texto y correo, y una secuencia de seguimiento que dura varios días y se detiene apenas ella contesta.",
        modules: ["Respuesta inmediata"],
        script: {
          kind: "reply",
          contact: "Tu clínica",
          clockLabel: "Esta noche",
          incoming: {
            text: "Hola, vi su anuncio. ¿Cuánto cuesta la primera consulta?",
            time: "9:14 pm",
          },
          outgoing: {
            text: "Hola María, gracias por escribirnos. La primera consulta incluye una valoración completa. ¿Quiere que le revise qué horarios tenemos esta semana?",
            time: "9:15 pm",
          },
          timerLabel: "Respondido en",
          timerValue: "40 s",
          patientLabel: "María",
          clinicLabel: "Tu clínica",
          transcriptLabel:
            "Un mensaje de una paciente y la respuesta que salió cuarenta segundos después.",
        },
      },
      {
        badge: "03",
        time: "9:17 pm",
        title: "Agenda ella sola, sin llamar",
        patient:
          "Elige el martes a las 10:00 entre los horarios que le ofrecen. Sin llamar en la mañana, sin esperar a que abra la clínica.",
        system:
          "El calendario solo ofrece las horas que de verdad atiendes. Apenas toma una, la confirmación y los recordatorios salen solos.",
        modules: ["Agendamiento y recordatorios"],
        script: {
          kind: "booking",
          title: "Horarios disponibles",
          dayLabel: "Martes",
          slots: ["9:00 am", "10:00 am", "11:30 am", "2:00 pm"],
          bookedIndex: 1,
          bookedName: "María G.",
          bookedLabel: "Reservado",
          followUps: ["Confirmación enviada", "Recordatorio 24 horas antes"],
          transcriptLabel:
            "Horarios disponibles, con uno tomado y los mensajes que salen después.",
        },
      },
      {
        badge: "04",
        time: "A la mañana siguiente",
        title: "Tu equipo abre un tablero y ve todo",
        patient:
          "María llega el martes. No tuvo que perseguir a nadie, y tu recepción tampoco.",
        system:
          "Cada consulta es una oportunidad con responsable y etapa. Quien se quedó callado sigue en un seguimiento automático, así que las oportunidades que normalmente se enfrían no se enfrían.",
        modules: ["CRM", "Recuperación", "Optimización continua"],
        script: {
          kind: "pipeline",
          title: "Esta semana",
          columns: [
            { label: "Nuevo", tone: "new", count: "4" },
            { label: "Agendado", tone: "booked", count: "7" },
            { label: "No asistió", tone: "missed", count: "1" },
            { label: "Cerrado", tone: "closed", count: "3" },
          ],
          card: { name: "María G.", detail: "Mar 10:00 am" },
          fromColumn: 0,
          toColumn: 1,
          recoveryLabel:
            "Las inasistencias y las llamadas perdidas vuelven al seguimiento automáticamente.",
          transcriptLabel:
            "Un tablero con una oportunidad que pasa de nueva a agendada.",
        },
      },
    ],
  } satisfies JourneyContent,
  modules: {
    label: "Módulo",
    eyebrow: "Qué incluye",
    title: "Los siete módulos detrás de esos cuatro momentos",
    description:
      "Un solo sistema administrado, cobrado como un solo plan. Esto es todo lo que hace.",
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
      },
      {
        title: "Agendamiento y recordatorios",
        description: "Las personas agendan solas y llegan más veces a la cita.",
        bullets: [
          "Enlaces de calendario para agendar sin intermediarios",
          "Anticipo o cuota opcional antes de confirmar la cita, con tu propio proveedor de pagos",
          "Secuencias de confirmación y recordatorio",
          "Enlaces para reprogramar que reducen las inasistencias",
          "Aviso diario de la agenda para tu equipo",
        ],
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
