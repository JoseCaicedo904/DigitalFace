import type { JourneyContent } from "@/components/journey/journey";
import type { Locale } from "../locale";

const en = {
  metadata: {
    title: "CRM & Automated Lead Follow-Up | DigitalFace Marketing",
    description:
      "Connect advertising, AI conversations, CRM and appointment booking in one managed system. See how DigitalFace helps your practice follow up and convert inquiries.",
  },
  overview: {
    eyebrow: "Sales System",
    title: "From first interest to the next appointment.",
    description:
      "The DigitalFace Sales System connects ads, AI conversations and follow-up. We build and manage it for your practice.",
    items: [
      {
        title: "Attract",
        description: "Ads and websites help people find you and get in touch.",
      },
      {
        title: "Convert",
        description:
          "AI, forms and booking tools help turn inquiries into appointments.",
      },
      {
        title: "Manage",
        description:
          "Your CRM keeps every contact, conversation and next step organized.",
      },
    ],
  },
  journey: {
    eyebrow: "How it runs",
    title: "Here’s how an inquiry moves forward.",
    description:
      "Follow a sample patient from the ad to the appointment and follow-up.",
    patientLabel: "For the patient",
    systemLabel: "What we handle",
    modulesLabel: "Behind the scenes",
    acts: [
      {
        badge: "01",
        time: "9:14 PM",
        title: "They find you",
        patient: "María sees your ad and leaves her name and number.",
        system:
          "We connect your campaigns, forms, messages and chat to one place.",
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
        title: "They get an answer",
        patient:
          "She gets a reply to her question while she is still interested.",
        system:
          "Automatic texts and emails respond quickly. Follow-up stops when she replies.",
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
        title: "They choose a time",
        patient:
          "She picks an available appointment without waiting for office hours.",
        system:
          "Booking links, confirmations and reminders handle the coordination.",
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
        title: "Your team knows what’s next",
        patient:
          "María comes to her appointment. Her conversation is already on record.",
        system:
          "See the contact, owner and status in your CRM. Follow up with people who haven’t booked.",
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
    label: "Service",
    eyebrow: "See what it can do",
    title: "The support behind each step.",
    description:
      "Open a service for details. Your plan and agreed scope define what we deliver.",
    items: [
      {
        title: "Bring in new inquiries",
        description: "We plan, launch and manage advertising.",
        bullets: [
          "Meta Ads: Facebook and Instagram",
          "Google Search, Display, YouTube and TikTok campaigns",
          "Campaign setup, tracking and ongoing improvements",
        ],
      },
      {
        title: "Keep incoming leads together",
        description: "Connected sources send inquiries straight to your CRM.",
        bullets: [
          "Website forms, campaign pages and surveys",
          "Web chat and two-way text conversations",
          "Facebook, Instagram and Google inquiries recorded automatically",
        ],
      },
      {
        title: "Answer and follow up",
        description: "Marketing automation keeps the conversation moving.",
        bullets: [
          "Immediate SMS and email replies in your team’s voice",
          "Multi-day follow-up that stops when someone answers",
          "Longer-term follow-up for people who aren’t ready yet",
        ],
      },
      {
        title: "Make booking easier",
        description: "Let people choose a time and receive reminders.",
        bullets: [
          "Booking and rescheduling links",
          "Confirmations, reminders and daily agendas for your team",
          "Optional deposits or fees before confirmation, through your payment provider",
        ],
      },
      {
        title: "See every next step",
        description: "One CRM record holds the contact’s history.",
        bullets: [
          "A record created for each inquiry",
          "New, booked, missed and closed stages",
          "Assigned owners, task prompts and conversation notes",
        ],
      },
      {
        title: "Reconnect with missed opportunities",
        description: "Follow up when someone goes quiet or misses a visit.",
        bullets: [
          "No-show follow-up and missed-call texts",
          "Post-appointment messages",
          "Reactivation campaigns for older contacts",
        ],
      },
      {
        title: "Keep improving",
        description: "We support your team and refine the system.",
        bullets: [
          "Monthly message and automation adjustments based on responses",
          "New campaigns when justified",
          "Help with changes, questions and training",
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
    title: "We get it ready in 3 steps.",
    description:
      "We handle the technical work, train your team and stay available for support.",
    timelineBadge: "5-7",
    timelineTitle: "Business days to launch for most practices.",
    timelineSubtitle: "You stay with your patients while we build.",
    notes: [
      "We adapt the setup to your practice.",
      "You approve the key decisions. We handle the build.",
    ],
    steps: [
      {
        badge: "D1",
        title: "Day 1 · Tell us what you need",
        description: "A short call and form give us the basics.",
      },
      {
        badge: "D2",
        title: "Days 2–4 · We build and test",
        description: "We connect the tools and check the complete process.",
      },
      {
        badge: "D5",
        title: "Days 5–7 · Go live with support",
        description:
          "Your system starts running. We handle updates, improvements and questions.",
      },
    ],
    routineLabel: "Your daily routine",
    routine: [
      "Check new messages",
      "Confirm appointments",
      "Show up and treat",
    ],
    routineClose:
      "We maintain the system while your team handles patient care.",
  },
  cta: {
    eyebrow: "See it live",
    title: "See how it would work for your practice.",
    description: "Book a call to discuss your goals and the right scope.",
    primaryCta: "Book a System Walkthrough",
    secondaryCta: "Compare Plans",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "CRM y Seguimiento Automatizado | DigitalFace Marketing",
    description:
      "Conecta publicidad, conversaciones con IA, CRM y agendamiento en un sistema gestionado por DigitalFace para dar seguimiento a las consultas de tu clínica.",
  },
  overview: {
    eyebrow: "Sistema de Ventas",
    title: "Del primer interés a la próxima cita.",
    description:
      "El Sales System de DigitalFace conecta anuncios, conversaciones con IA y seguimiento. Nosotros lo implementamos y gestionamos para tu clínica.",
    items: [
      {
        title: "Atraer",
        description:
          "Los anuncios y tu sitio web ayudan a que te encuentren y contacten.",
      },
      {
        title: "Convertir",
        description:
          "La IA, los formularios y la agenda ayudan a convertir consultas en citas.",
      },
      {
        title: "Gestionar",
        description:
          "Tu CRM organiza contactos, conversaciones y próximos pasos.",
      },
    ],
  },
  journey: {
    eyebrow: "Cómo funciona",
    title: "Así avanza una consulta.",
    description:
      "Sigue este ejemplo desde el anuncio hasta la cita y el seguimiento.",
    patientLabel: "Para el paciente",
    systemLabel: "De qué nos encargamos",
    modulesLabel: "Cómo lo hacemos",
    acts: [
      {
        badge: "01",
        time: "9:14 pm",
        title: "Te encuentran",
        patient: "María ve tu anuncio y deja su nombre y teléfono.",
        system:
          "Conectamos campañas, formularios, mensajes y chat en un solo lugar.",
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
        title: "Reciben una respuesta",
        patient: "Su pregunta recibe respuesta mientras aún tiene interés.",
        system:
          "Los mensajes y correos automáticos responden a tiempo. El seguimiento se detiene cuando ella contesta.",
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
        title: "Eligen un horario",
        patient:
          "Reserva un horario disponible sin esperar a que abra la clínica.",
        system:
          "Los enlaces de cita, confirmaciones y recordatorios facilitan la coordinación.",
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
        title: "Tu equipo sabe qué sigue",
        patient: "María llega a su cita y la conversación ya está registrada.",
        system:
          "Ve el contacto, responsable y estado en tu CRM. Da seguimiento a quienes aún no agendan.",
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
    label: "Servicio",
    eyebrow: "Mira qué puede hacer",
    title: "El apoyo detrás de cada paso.",
    description:
      "Abre cada servicio para ver los detalles. Tu plan y el alcance acordado definen qué entregamos.",
    items: [
      {
        title: "Recibe nuevas consultas",
        description: "Planificamos, activamos y gestionamos publicidad.",
        bullets: [
          "Meta Ads: Facebook e Instagram",
          "Campañas de Google Search, Display, YouTube y TikTok",
          "Configuración, seguimiento y mejoras de campañas",
        ],
      },
      {
        title: "Reúne los contactos que llegan",
        description: "Las fuentes conectadas envían las consultas a tu CRM.",
        bullets: [
          "Formularios, páginas de campaña y encuestas",
          "Chat web y conversaciones por mensaje de texto",
          "Registro automático de consultas de Facebook, Instagram y Google",
        ],
      },
      {
        title: "Responde y da seguimiento",
        description: "La automatización de marketing mantiene el contacto.",
        bullets: [
          "Respuestas inmediatas por SMS y correo con el tono de tu equipo",
          "Seguimiento durante varios días que se detiene cuando responden",
          "Seguimiento a quienes todavía no están listos",
        ],
      },
      {
        title: "Facilita las reservas",
        description:
          "Deja que el paciente elija horario y reciba recordatorios.",
        bullets: [
          "Enlaces para agendar y reprogramar",
          "Confirmaciones, recordatorios y agenda diaria para tu equipo",
          "Anticipos o cuotas opcionales antes de confirmar, mediante tu proveedor de pagos",
        ],
      },
      {
        title: "Ve cada próximo paso",
        description: "Un registro de CRM reúne el historial del contacto.",
        bullets: [
          "Un registro por cada consulta",
          "Estados de nuevo, agendado, inasistencia y cerrado",
          "Responsables asignados, tareas y notas de conversaciones",
        ],
      },
      {
        title: "Retoma las oportunidades pendientes",
        description:
          "Da seguimiento a quienes dejan de responder o faltan a una cita.",
        bullets: [
          "Seguimiento a inasistencias y mensajes tras llamadas perdidas",
          "Mensajes después de la cita",
          "Campañas de reactivación para contactos anteriores",
        ],
      },
      {
        title: "Sigue mejorando",
        description: "Apoyamos a tu equipo y ajustamos el sistema.",
        bullets: [
          "Ajustes mensuales de mensajes y automatizaciones según las respuestas",
          "Nuevas campañas cuando se justifiquen",
          "Ayuda con cambios, preguntas y capacitación",
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
    title: "Lo ponemos en marcha en 3 pasos.",
    description:
      "Nos encargamos del trabajo técnico, capacitamos a tu equipo y seguimos acompañándote.",
    timelineBadge: "5-7",
    timelineTitle: "Días hábiles para salir en vivo en la mayoría de clínicas.",
    timelineSubtitle: "Tú sigues con tus pacientes mientras nosotros armamos.",
    notes: [
      "Adaptamos la configuración a tu clínica.",
      "Tú apruebas las decisiones clave. Nosotros lo implementamos.",
    ],
    steps: [
      {
        badge: "D1",
        title: "Día 1 · Cuéntanos qué necesitas",
        description: "Una llamada corta y un formulario nos dan lo básico.",
      },
      {
        badge: "D2",
        title: "Días 2–4 · Configuramos y probamos",
        description:
          "Conectamos las herramientas y revisamos el proceso completo.",
      },
      {
        badge: "D5",
        title: "Días 5–7 · Empieza con acompañamiento",
        description:
          "Tu sistema entra en funcionamiento. Atendemos ajustes, mejoras y preguntas.",
      },
    ],
    routineLabel: "Tu rutina diaria",
    routine: [
      "Revisar mensajes nuevos",
      "Confirmar las citas",
      "Atender a tus pacientes",
    ],
    routineClose:
      "Mantenemos el sistema mientras tu equipo atiende a los pacientes.",
  },
  cta: {
    eyebrow: "Míralo en vivo",
    title: "Mira cómo funcionaría en tu clínica.",
    description:
      "Agenda una llamada para revisar tus objetivos y el alcance adecuado.",
    primaryCta: "Agendar una demostración",
    secondaryCta: "Comparar planes",
  },
};

export const featuresContent: Record<Locale, typeof en> = { en, es };
export type FeaturesContent = typeof en;
