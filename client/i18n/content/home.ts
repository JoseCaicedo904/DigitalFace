import type { ConversationDemoContent } from "@/components/demo/conversation";
import type { AdCampaignDemoContent } from "@/components/demo/adCampaign";
import type { CrmPipelineDemoContent } from "@/components/demo/crmPipeline";
import type { AppointmentCommitmentContent } from "@/sections/AppointmentCommitment";
import type { Locale } from "../locale";

/**
 * A fictional, fully scripted exchange. Nothing here describes a real patient,
 * a real practice or a measured result — it illustrates the sequence the rest of
 * the page describes in words.
 */
const conversationDemoEn: ConversationDemoContent = {
  eyebrow: "02 · Convert",
  title: "Let AI answer while you’re busy.",
  description:
    "Your AI chatbot answers approved questions, collects useful details and helps people book. Your team can step in whenever needed.",
  ctaLabel: "Talk About AI Support",
  phoneCaption: "Sample conversation",
  stages: [
    {
      title: "Receive the inquiry",
      description:
        "Bring connected ads, forms, chat and social messages together.",
    },
    {
      title: "Send a quick reply",
      description: "Respond outside office hours, too.",
    },
    {
      title: "Help choose a time",
      description: "Answer common questions and offer the calendar.",
    },
    {
      title: "Keep your team involved",
      description:
        "Staff can take over, with the conversation and booking history.",
    },
  ],
  script: {
    contact: "Your Clinic",
    status: "Replies in seconds",
    typingStatus: "typing…",
    clockLabel: "9:43",
    dayLabel: "Today · 9:41 PM",
    composerPlaceholder: "Message",
    transcriptLabel:
      "Sample conversation between a prospective patient and an automated clinic assistant.",
    patientLabel: "Patient",
    clinicLabel: "Clinic",
    steps: [
      {
        kind: "patient",
        stage: 0,
        time: "9:41 PM",
        pauseMs: 700,
        text: "Hi! I saw your veneers post. Are you taking new patients?",
      },
      {
        kind: "assistant",
        stage: 1,
        time: "9:41 PM",
        pauseMs: 600,
        typingMs: 1400,
        text: "Hi Emily, yes we are. The first step is a 30-minute smile design consultation with the doctor.",
      },
      {
        kind: "patient",
        stage: 2,
        time: "9:42 PM",
        pauseMs: 2200,
        text: "Perfect. I work until 5 though.",
      },
      {
        kind: "slots",
        stage: 2,
        time: "9:42 PM",
        pauseMs: 600,
        typingMs: 1300,
        text: "No problem. Here are the next openings outside your work hours:",
        options: ["Thu · 5:30 PM", "Fri · 6:15 PM", "Sat · 10:00 AM"],
      },
      {
        kind: "choice",
        stage: 2,
        time: "9:43 PM",
        pauseMs: 2500,
        option: 0,
        text: "Thursday at 5:30 works.",
      },
      {
        kind: "confirmation",
        stage: 3,
        time: "9:43 PM",
        pauseMs: 600,
        typingMs: 1200,
        title: "Appointment confirmed",
        when: "Thursday, 5:30 PM",
        service: "Smile design consultation · 30 min",
        note: "You will get a reminder the day before, and our team can join this chat any time.",
      },
    ],
  },
};

const conversationDemoEs: ConversationDemoContent = {
  eyebrow: "02 · Convertir",
  title: "Deja que la IA responda mientras atiendes.",
  description:
    "Tu chatbot de IA responde preguntas aprobadas, reúne información y ayuda a agendar. Tu equipo puede intervenir cuando sea necesario.",
  ctaLabel: "Hablar del apoyo con IA",
  phoneCaption: "Conversación de ejemplo",
  stages: [
    {
      title: "Recibe la consulta",
      description:
        "Reúne las consultas de anuncios, formularios, chat y redes conectados.",
    },
    {
      title: "Responde a tiempo",
      description: "Responde también fuera del horario de atención.",
    },
    {
      title: "Ayuda a elegir horario",
      description: "Contesta preguntas frecuentes y ofrece el calendario.",
    },
    {
      title: "Mantén a tu equipo al tanto",
      description:
        "Tu personal puede intervenir con el historial de la conversación y la cita.",
    },
  ],
  script: {
    contact: "Tu Clínica",
    status: "Responde en segundos",
    typingStatus: "escribiendo…",
    clockLabel: "9:43",
    dayLabel: "Hoy · 9:41 p. m.",
    composerPlaceholder: "Mensaje",
    transcriptLabel:
      "Conversación de ejemplo entre una paciente potencial y el asistente automatizado de una clínica.",
    patientLabel: "Paciente",
    clinicLabel: "Clínica",
    steps: [
      {
        kind: "patient",
        stage: 0,
        time: "9:41 p. m.",
        pauseMs: 700,
        text: "¡Hola! Vi su publicación de carillas. ¿Están recibiendo pacientes nuevos?",
      },
      {
        kind: "assistant",
        stage: 1,
        time: "9:41 p. m.",
        pauseMs: 600,
        typingMs: 1400,
        text: "Hola Emily, sí. El primer paso es una valoración de diseño de sonrisa de 30 minutos con el doctor.",
      },
      {
        kind: "patient",
        stage: 2,
        time: "9:42 p. m.",
        pauseMs: 2200,
        text: "Perfecto. Aunque trabajo hasta las 5.",
      },
      {
        kind: "slots",
        stage: 2,
        time: "9:42 p. m.",
        pauseMs: 600,
        typingMs: 1300,
        text: "Sin problema. Estos son los espacios disponibles fuera de tu horario de trabajo:",
        options: ["Jue · 5:30 p. m.", "Vie · 6:15 p. m.", "Sáb · 10:00 a. m."],
      },
      {
        kind: "choice",
        stage: 2,
        time: "9:43 p. m.",
        pauseMs: 2500,
        option: 0,
        text: "El jueves a las 5:30 me sirve.",
      },
      {
        kind: "confirmation",
        stage: 3,
        time: "9:43 p. m.",
        pauseMs: 600,
        typingMs: 1200,
        title: "Cita confirmada",
        when: "Jueves, 5:30 p. m.",
        service: "Valoración de diseño de sonrisa · 30 min",
        note: "Te llega un recordatorio el día anterior, y nuestro equipo puede entrar a esta conversación cuando lo necesites.",
      },
    ],
  },
};

/**
 * A fictional advertisement, written the way a clinic writes one. No real
 * practice, patient, price or campaign result appears anywhere in it: the demo
 * illustrates the path from a paid post to a contactable opportunity.
 */
const adCampaignDemoEn: AdCampaignDemoContent = {
  eyebrow: "01 · Attract",
  title: "Get in front of the right people.",
  description:
    "Meta Ads and Google Ads put your offer in front of potential customers. A clear page or form gives them a way to respond.",
  ctaLabel: "Talk About My Campaigns",
  phoneCaption: "Sample ad and lead form",
  bridge: "Next: answer the inquiry.",
  stages: [
    {
      title: "Reach your audience",
      description: "Show your services in the markets and languages you serve.",
    },
    {
      title: "Make the offer clear",
      description: "Give people one clear reason to get in touch.",
    },
    {
      title: "Collect their details",
      description: "Ask what they need and how to reach them.",
    },
    {
      title: "Keep the inquiry organized",
      description: "Send the response to your CRM, ready for follow-up.",
    },
  ],
  script: {
    clockLabel: "8:12",
    sponsoredLabel: "Sponsored",
    posts: [
      {
        author: "Valeria P.",
        meta: "2h",
        caption: "Slow Sunday. Coffee, sun and zero plans.",
      },
      {
        author: "Andrés M.",
        meta: "4h",
        caption: "Found the best tacos in the city. Not up for debate.",
      },
      {
        author: "Nico B.",
        meta: "6h",
        caption: "First race of the season, done.",
      },
    ],
    form: {
      subtitle: "Consultation request",
      intentQuestion: "What are you interested in?",
      contactQuestion: "Where can we reach you?",
      nameLabel: "Name",
      phoneLabel: "WhatsApp",
      submitLabel: "Send",
      sentTitle: "Inquiry sent",
      sentNote: "The clinic has your details and will reply shortly.",
      systemLabel: "In your DigitalFace system",
      statuses: [
        "New lead captured",
        "Contact organized",
        "Ready for follow-up",
      ],
    },
    ads: [
      {
        market: "dental",
        business: "Lumina Dental Studio",
        caption:
          "See how your smile could look before you commit to anything. Consultations are open this week.",
        offer: "Smile consultation this week",
        ctaLabel: "Book now",
        creativeEyebrow: "Smile design",
        creativeTitle: "Veneers planned with the doctor",
        options: ["Porcelain veneers", "Dental implants", "Smile consultation"],
        choice: 0,
        lead: { name: "Emily Carter", phone: "+1 (305) 555 0142" },
      },
      {
        market: "aesthetic",
        business: "Nova Aesthetic Clinic",
        caption:
          "Natural results start with a plan, not a promise. Talk to the doctor before you decide anything.",
        offer: "Consultation with the doctor",
        ctaLabel: "Learn more",
        creativeEyebrow: "Aesthetic medicine",
        creativeTitle: "Results that still look like you",
        options: ["Injectables", "Skin treatments", "Body contouring"],
        choice: 1,
        lead: { name: "Daniela Ortiz", phone: "+1 (786) 555 0119" },
      },
      {
        market: "medSpa",
        business: "Solene Med Spa",
        caption:
          "Treatments that fit around your week, evenings and Saturdays included.",
        offer: "Book your first visit",
        ctaLabel: "Book now",
        creativeEyebrow: "Med spa",
        creativeTitle: "Skin care with room in the calendar",
        options: ["Facials", "Laser hair removal", "Memberships"],
        choice: 2,
        lead: { name: "Marcela Ríos", phone: "+1 (954) 555 0173" },
      },
    ],
    transcriptLabel:
      "Sample social advertisement and lead form, shown as an illustration.",
  },
};

const adCampaignDemoEs: AdCampaignDemoContent = {
  eyebrow: "01 · Atraer",
  title: "Llega a las personas indicadas.",
  description:
    "Meta Ads y Google Ads muestran tu oferta a posibles clientes. Una página o formulario claro les facilita el contacto.",
  ctaLabel: "Hablar de mis campañas",
  phoneCaption: "Anuncio y formulario de ejemplo",
  bridge: "Siguiente paso: responder al interesado.",
  stages: [
    {
      title: "Llega a tu público",
      description:
        "Muestra tus servicios en los mercados e idiomas que atiendes.",
    },
    {
      title: "Presenta una oferta clara",
      description: "Dale al interesado una razón clara para contactarte.",
    },
    {
      title: "Recibe sus datos",
      description: "Pregunta qué necesita y cómo puedes contactarlo.",
    },
    {
      title: "Organiza la consulta",
      description: "La respuesta llega a tu CRM, lista para el seguimiento.",
    },
  ],
  script: {
    clockLabel: "8:12",
    sponsoredLabel: "Publicidad",
    posts: [
      {
        author: "Valeria P.",
        meta: "2 h",
        caption: "Domingo tranquilo. Café, sol y cero planes.",
      },
      {
        author: "Andrés M.",
        meta: "4 h",
        caption: "Encontré los mejores tacos de la ciudad. No se discute.",
      },
      {
        author: "Nico B.",
        meta: "6 h",
        caption: "Primera carrera de la temporada, lista.",
      },
    ],
    form: {
      subtitle: "Solicitud de valoración",
      intentQuestion: "¿Qué te interesa?",
      contactQuestion: "¿Dónde te contactamos?",
      nameLabel: "Nombre",
      phoneLabel: "WhatsApp",
      submitLabel: "Enviar",
      sentTitle: "Solicitud enviada",
      sentNote: "La clínica ya tiene tus datos y te responde en un momento.",
      systemLabel: "En tu sistema DigitalFace",
      statuses: [
        "Contacto nuevo registrado",
        "Datos organizados",
        "Listo para seguimiento",
      ],
    },
    ads: [
      {
        market: "dental",
        business: "Lumina Dental Studio",
        caption:
          "Mira cómo quedaría tu sonrisa antes de decidir. Esta semana hay valoraciones disponibles.",
        offer: "Valoración de sonrisa esta semana",
        ctaLabel: "Agendar",
        creativeEyebrow: "Diseño de sonrisa",
        creativeTitle: "Carillas planeadas con el doctor",
        options: ["Carillas", "Implantes", "Valoración de sonrisa"],
        choice: 0,
        lead: { name: "Emily Carter", phone: "+57 320 555 0142" },
      },
      {
        market: "aesthetic",
        business: "Nova Aesthetic Clinic",
        caption:
          "Los resultados naturales empiezan con un plan, no con una promesa. Habla primero con el médico.",
        offer: "Valoración con el médico",
        ctaLabel: "Ver más",
        creativeEyebrow: "Medicina estética",
        creativeTitle: "Resultados que siguen siendo tú",
        options: ["Inyectables", "Tratamientos de piel", "Contorno corporal"],
        choice: 1,
        lead: { name: "Daniela Ortiz", phone: "+57 315 555 0119" },
      },
      {
        market: "medSpa",
        business: "Solene Med Spa",
        caption:
          "Tratamientos que se acomodan a tu semana, con horarios en la tarde y los sábados.",
        offer: "Agenda tu primera visita",
        ctaLabel: "Agendar",
        creativeEyebrow: "Med spa",
        creativeTitle: "Cuidado de piel con espacio en la agenda",
        options: ["Faciales", "Depilación láser", "Membresías"],
        choice: 2,
        lead: { name: "Marcela Ríos", phone: "+57 310 555 0173" },
      },
    ],
    transcriptLabel:
      "Anuncio y formulario de ejemplo, mostrados como ilustración.",
  },
};

/**
 * The same fictional lead shown in the advertising and conversation stories,
 * now presented as an organized opportunity. This is a controlled illustration,
 * not a real patient record or a claim about measured performance.
 */
const crmPipelineDemoEn: CrmPipelineDemoContent = {
  eyebrow: "03 · Manage",
  title: "Know who needs your attention.",
  description:
    "Your CRM keeps contacts, conversations and next steps in one place. See who is new, who wants to book and who needs follow-up.",
  ctaLabel: "Talk About My Follow-Up",
  boardCaption: "Sample lead journey",
  bridge: "Attract, convert and manage. One team handles the connections.",
  stages: [
    {
      title: "New inquiry",
      description: "A new contact appears on the board.",
    },
    {
      title: "Contacted",
      description: "Your team can see the first conversation.",
    },
    {
      title: "Interested",
      description: "The source and treatment interest stay together.",
    },
    {
      title: "Appointment requested",
      description: "See the requested time and what needs confirmation.",
    },
  ],
  script: {
    workspaceLabel: "Opportunity workspace",
    liveLabel: "Organized",
    boardLabel: "Lead progress",
    detailsLabel: "What your team knows",
    activityLabel: "Activity",
    nextStepLabel: "Next step",
    movedLabel: "Moved forward",
    stageLabel: "Stage",
    ofLabel: "of",
    lead: {
      name: "Emily Carter",
      initials: "EC",
      summary: "New patient inquiry",
      channel: "WhatsApp inquiry",
    },
    stages: [
      {
        label: "New inquiry",
        cardStatus: "Just received",
        activity: "Inquiry received",
        nextStep: "Send the first reply",
        details: [{ label: "Source", value: "Meta Ads" }],
      },
      {
        label: "Contacted",
        cardStatus: "Conversation started",
        activity: "Conversation started",
        nextStep: "Confirm treatment interest",
        details: [
          { label: "Source", value: "Meta Ads" },
          { label: "Channel", value: "WhatsApp" },
        ],
      },
      {
        label: "Interested",
        cardStatus: "Interest identified",
        activity: "Treatment interest identified",
        nextStep: "Offer consultation times",
        details: [
          { label: "Source", value: "Meta Ads" },
          { label: "Channel", value: "WhatsApp" },
          { label: "Interest", value: "Porcelain veneers" },
        ],
      },
      {
        label: "Appointment requested",
        cardStatus: "Ready to confirm",
        activity: "Consultation requested",
        nextStep: "Confirm the requested time",
        details: [
          { label: "Source", value: "Meta Ads" },
          { label: "Channel", value: "WhatsApp" },
          { label: "Interest", value: "Porcelain veneers" },
          { label: "Status", value: "Consultation requested" },
        ],
      },
    ],
    transcriptLabel:
      "Sample lead journey showing one inquiry becoming an organized opportunity with a clear next step.",
  },
};

const crmPipelineDemoEs: CrmPipelineDemoContent = {
  eyebrow: "03 · Gestionar",
  title: "Identifica quién necesita tu atención.",
  description:
    "Tu CRM reúne contactos, conversaciones y próximos pasos. Ve quién acaba de llegar, quién quiere agendar y quién necesita seguimiento.",
  ctaLabel: "Hablar de mi seguimiento",
  boardCaption: "Ejemplo del recorrido de un contacto",
  bridge: "Atraer, convertir y gestionar. Un solo equipo conecta todo.",
  stages: [
    {
      title: "Nueva consulta",
      description: "El nuevo contacto aparece en el tablero.",
    },
    {
      title: "Contactado",
      description: "Tu equipo puede ver la primera conversación.",
    },
    {
      title: "Interesado",
      description: "El origen y el tratamiento de interés quedan juntos.",
    },
    {
      title: "Cita solicitada",
      description: "Revisa el horario solicitado y qué falta confirmar.",
    },
  ],
  script: {
    workspaceLabel: "Oportunidades",
    liveLabel: "Organizado",
    boardLabel: "Etapas de la oportunidad",
    detailsLabel: "Lo que sabe tu equipo",
    activityLabel: "Actividad",
    nextStepLabel: "Siguiente paso",
    movedLabel: "Avanzó",
    stageLabel: "Etapa",
    ofLabel: "de",
    lead: {
      name: "Emily Carter",
      initials: "EC",
      summary: "Consulta nueva",
      channel: "Consulta por WhatsApp",
    },
    stages: [
      {
        label: "Consulta nueva",
        cardStatus: "Acaba de llegar",
        activity: "Consulta recibida",
        nextStep: "Enviar la primera respuesta",
        details: [{ label: "Origen", value: "Pauta en Meta" }],
      },
      {
        label: "En conversación",
        cardStatus: "Conversación iniciada",
        activity: "Conversación iniciada",
        nextStep: "Confirmar qué tratamiento le interesa",
        details: [
          { label: "Origen", value: "Pauta en Meta" },
          { label: "Canal", value: "WhatsApp" },
        ],
      },
      {
        label: "Interés confirmado",
        cardStatus: "Interés identificado",
        activity: "Tratamiento de interés identificado",
        nextStep: "Ofrecer horarios de valoración",
        details: [
          { label: "Origen", value: "Pauta en Meta" },
          { label: "Canal", value: "WhatsApp" },
          { label: "Interés", value: "Carillas" },
        ],
      },
      {
        label: "Cita solicitada",
        cardStatus: "Pendiente de confirmación",
        activity: "Valoración solicitada",
        nextStep: "Confirmar el horario solicitado",
        details: [
          { label: "Origen", value: "Pauta en Meta" },
          { label: "Canal", value: "WhatsApp" },
          { label: "Interés", value: "Carillas" },
          { label: "Estado", value: "Valoración solicitada" },
        ],
      },
    ],
    transcriptLabel:
      "Recorrido de ejemplo que muestra cómo una consulta se convierte en una oportunidad organizada con un siguiente paso claro.",
  },
};

/**
 * Translatable copy for the Selected Work section, keyed by the client ids in
 * `client/data/clients.ts`. A client with no key here renders as a name and a
 * logo slot only: nothing is written on a client's behalf before it is approved.
 *
 * `description` states what the business does. `highlight` — reserved for the
 * featured stories — states what DigitalFace supported. Neither claims a result,
 * a metric or a timeframe.
 */
type SelectedWorkEntry = {
  category?: string;
  description?: string;
  highlight?: string;
};

const selectedWorkEntriesEn: Record<string, SelectedWorkEntry> = {
  jennifer: {
    category: "Aesthetic Dentistry · Cali, Colombia",
    description:
      "Cosmetic and restorative dental practice specializing in smile design, veneers, implants and international patient care.",
    highlight: "Patient inquiries, intake details and follow-up, connected.",
  },
  diego: {
    category: "Aesthetic Medicine · Cali, Colombia",
    description:
      "Medical aesthetics practice focused on personalized treatments, natural-looking results and patient follow-up.",
    highlight: "Campaigns and a website connected to appointments and CRM.",
  },
  braveros: {
    category: "Sports & Events · Bugalagrande, Colombia",
    description:
      "Fitness community behind Neon Race, a multi-edition nighttime running event combining sport, entertainment and regional participation.",
    highlight: "Marketing and online sign-ups for a regional running event.",
  },
  saboreo: {
    category: "Food & Hospitality · Bugalagrande, Colombia",
    description:
      "Local fast-food brand known especially for its salchipapas, delivery and casual dining experience. Public listings currently show very strong customer reviews.",
    highlight:
      "Digital marketing to help a local food business attract customers.",
  },
  igrafit: {
    category: "Branding & Visual Production · New Jersey, USA",
    description:
      "Branding and production company specializing in vehicle wraps, signage, printing and custom visual solutions for businesses.",
  },
  traffic: {
    category: "Advertising & Production · Cali, Colombia",
    description:
      "Established advertising company working across graphic design, photography, printing and commercial visual production.",
  },
  "motos-occidente": {
    category: "Automotive · Pereira, Colombia",
    description:
      "Motorcycle business specializing in motorcycles, parts, accessories, maintenance and repair services.",
  },
  "magic-soul": {
    category: "Events & Furniture Rental",
    description:
      "Furniture and event setup brand providing decorative rental solutions for social and commercial events.",
  },
};

const selectedWorkEntriesEs: Record<string, SelectedWorkEntry> = {
  jennifer: {
    category: "Odontología estética · Cali, Colombia",
    description:
      "Consultorio de odontología estética y restaurativa especializado en diseño de sonrisa, carillas, implantes y atención a pacientes internacionales.",
    highlight:
      "Consultas de pacientes, datos iniciales y seguimiento conectados.",
  },
  diego: {
    category: "Medicina estética · Cali, Colombia",
    description:
      "Consultorio de medicina estética enfocado en tratamientos personalizados, resultados de apariencia natural y seguimiento al paciente.",
    highlight: "Campañas y sitio web conectados con citas y CRM.",
  },
  braveros: {
    category: "Deporte y eventos · Bugalagrande, Colombia",
    description:
      "Comunidad fitness detrás de Neon Race, una carrera nocturna de varias ediciones que combina deporte, entretenimiento y participación regional.",
    highlight:
      "Marketing y registros en línea para un evento regional de atletismo.",
  },
  saboreo: {
    category: "Gastronomía · Bugalagrande, Colombia",
    description:
      "Marca local de comida rápida reconocida sobre todo por sus salchipapas, su servicio a domicilio y su experiencia de mesa informal. Sus perfiles públicos muestran hoy reseñas muy positivas.",
    highlight:
      "Marketing digital para atraer clientes a un negocio local de comida.",
  },
  igrafit: {
    category: "Branding y producción visual · Nueva Jersey, EE. UU.",
    description:
      "Empresa de branding y producción especializada en rotulación vehicular, señalética, impresión y soluciones visuales a la medida para negocios.",
  },
  traffic: {
    category: "Publicidad y producción · Cali, Colombia",
    description:
      "Empresa de publicidad con trayectoria en diseño gráfico, fotografía, impresión y producción visual comercial.",
  },
  "motos-occidente": {
    category: "Automotriz · Pereira, Colombia",
    description:
      "Negocio de motos especializado en motocicletas, repuestos, accesorios, mantenimiento y servicios de reparación.",
  },
  "magic-soul": {
    category: "Eventos y alquiler de mobiliario",
    description:
      "Marca de mobiliario y montaje de eventos que ofrece soluciones decorativas en alquiler para eventos sociales y comerciales.",
  },
};
const en = {
  metadata: {
    title:
      "Customer Acquisition & Marketing Automation | DigitalFace Marketing",
    description:
      "DigitalFace connects advertising, AI follow-up and CRM for appointment-driven businesses in Florida, across the US and Latin America. Explore your growth system.",
  },
  hero: {
    eyebrow: "The DigitalFace growth system",
    title: "More inquiries. Better follow-up. More opportunities.",
    description:
      "We bring marketing, AI and CRM together to help turn interest into appointments. DigitalFace handles the setup and ongoing support.",
    primaryCta: "Book a Call",
    secondaryCta: "See How It Works",
    stats: [
      { value: "Instant", label: "First response" },
      { value: "24/7", label: "Follow-up coverage" },
      { value: "One view", label: "Every inquiry tracked" },
    ],
    bannerAlt: "DigitalFace Marketing promotional banner",
    bannerCtaLabel: "Get started today",
    liveTitle: "Live in the first week",
    liveItems: [
      "Every lead source feeding one pipeline.",
      "Instant text and email replies with a booking link.",
      "A dashboard that shows each inquiry and its stage.",
    ],
  },
  systemIntro: {
    eyebrow: "One connected growth system",
    title: "Getting the lead is only the beginning.",
    description:
      "Customer acquisition works when three parts stay connected: create the opportunity, move it forward while interest is high and keep every next step visible.",
    previewLabel: "Attract → Convert → Manage",
    closing: "One team handles the setup and keeps it working.",
    stages: [
      {
        number: "01",
        label: "Attract",
        title: "Get people interested",
        description:
          "Reach relevant people and turn their attention into real inquiries.",
      },
      {
        number: "02",
        label: "Convert",
        title: "Help them book",
        description:
          "Respond, understand the need and guide the conversation toward action.",
      },
      {
        number: "03",
        label: "Manage",
        title: "Keep every lead organized",
        description:
          "Keep every opportunity, conversation, status and next step organized.",
      },
    ],
  },
  industryPaths: {
    eyebrow: "Industry growth systems",
    title: "Start with the system built for your patient journey.",
    description:
      "The same DigitalFace core, rebuilt around the language, workflows and conversion points of the three markets we serve.",
    linkLabel: "See the growth page",
    cards: {
      dental: {
        title: "Dental Practices",
        eyebrow: "Implants · Veneers · Smile design",
        description:
          "A patient acquisition and consultation system built around high-value dental treatment decisions.",
        outcome: "Turn more treatment inquiries into organized consultations.",
      },
      aesthetic: {
        title: "Aesthetic Medicine",
        eyebrow: "Injectables · Body · Skin",
        description:
          "A bilingual path from procedure inquiry to consultation for physicians and aesthetic teams.",
        outcome: "Respond faster while clinical decisions stay with your team.",
      },
      medSpa: {
        title: "Med Spas",
        eyebrow: "Memberships · Packages · Reactivation",
        description:
          "An always-on booking and follow-up system for recurring treatments, promotions and dormant clients.",
        outcome:
          "Turn inquiries and inactive contacts into booked appointments.",
      },
    },
  },
  features: {
    eyebrow: "What the system does",
    title: "An automated sales system, installed for you",
    description:
      "Capture every inquiry, answer it in seconds and move interested people to a booked appointment without hiring more staff.",
    items: [
      {
        title: "Campaigns that create demand",
        description:
          "The right paid channel for your market, your treatments and your stage of growth.",
      },
      {
        title: "Every channel in one place",
        description:
          "Forms, funnels, chat, calls and social inquiries all land in the same system.",
      },
      {
        title: "Replies in seconds",
        description:
          "Automated text and email responses go out the moment someone reaches you.",
      },
      {
        title: "AI that answers and organizes",
        description:
          "A bilingual assistant handles approved questions, captures intent and helps people book.",
      },
      {
        title: "CRM and reporting",
        description:
          "A visual pipeline plus clear reporting, so you always know where each opportunity stands.",
      },
      {
        title: "Done-for-you setup",
        description:
          "We build, test and launch it. Your team never touches the technical side.",
      },
    ],
  },
  systemMedia: {
    eyebrow: "One connected system",
    title: "See the journey, end to end.",
    description:
      "From the first inquiry to the reply, the booking, and the pipeline view your team works from every day.",
    overlayEyebrow: "Inquiry → response → booking → visibility",
    overlayTitle: "Every opportunity moves through one connected journey.",
  },
  journey: {
    eyebrow: "Customer journey",
    title: "From first message to closed opportunity, handled automatically",
    description:
      "Automation carries the repetitive work. Your team steps in where a person actually makes the difference.",
    stepLabel: "Step",
    steps: [
      {
        title: "Someone reaches out",
        description:
          "A prospective patient contacts you through an ad, a form, chat, a call or a social channel.",
      },
      {
        title: "The system answers immediately",
        description:
          "An automated reply goes out by text, email or messaging within seconds, and the opportunity is created.",
      },
      {
        title: "Interest becomes an appointment",
        description:
          "Interested people are guided to your calendar, with confirmations and reminders that protect the booking.",
      },
      {
        title: "Nothing gets lost",
        description:
          "Every conversation and stage is recorded in one pipeline, from first contact to outcome.",
      },
    ],
  },
  adCampaignDemo: adCampaignDemoEn,
  conversationDemo: conversationDemoEn,
  crmPipelineDemo: crmPipelineDemoEn,
  appointmentCommitment: {
    eyebrow: "Appointment commitment",
    title: "Add an optional deposit to your booking.",
    description:
      "Choose a deposit, reservation fee or full prepayment for selected services. Your payment provider collects it before the appointment is marked confirmed.",
    steps: [
      {
        label: "Appointment requested",
        caption: "The customer picks a time from your real availability.",
      },
      {
        label: "Reservation requested",
        caption:
          "A payment request goes out with the booking, only where you want one.",
      },
      {
        label: "Appointment confirmed",
        caption:
          "Once the payment clears, the status updates in your pipeline.",
      },
      {
        label: "Reminders",
        caption: "Confirmations and reminders continue exactly as before.",
      },
      {
        label: "Attended appointment",
        caption: "Your team walks into a slot someone committed to.",
      },
    ],
    points: [
      {
        title: "Ask for commitment",
        description: "A reservation payment can help reduce casual bookings.",
      },
      {
        title: "See what is confirmed",
        description: "Distinguish paid reservations from appointment requests.",
      },
      {
        title: "Keep payments in your account",
        description:
          "Your provider collects the payment. DigitalFace connects the booking step and never holds your funds.",
      },
    ],
    note: "Optional and configured per service: you decide which appointments ask for a deposit and how much. A deposit strengthens commitment; it is not a guarantee of attendance.",
  } satisfies AppointmentCommitmentContent,
  valueProps: {
    eyebrow: "Your sales system",
    title: "Automation that feels personal and never takes a day off",
    description:
      "Built for practices that need consistent follow-up without putting more pressure on the front desk.",
    statusLabel: "System status: live and optimizing",
    stageLabel: "Stage",
    outputsLabel: "System outputs",
    liveLabel: "Live",
    points: [
      {
        badge: "SPEED",
        title: "Instant speed to lead",
        description:
          "Every inquiry gets an answer, so you never lose the first conversation.",
      },
      {
        badge: "AUTOPILOT",
        title: "Follow-up that keeps going",
        description:
          "Sequences keep working until the person books or asks you to stop.",
      },
      {
        badge: "VISIBILITY",
        title: "One clear pipeline",
        description:
          "Know at any moment who is new, booked, a no-show, or closed.",
      },
      {
        badge: "DONE-FOR-YOU",
        title: "Installed, not assembled",
        description:
          "A proven system deployed for your practice, not a custom build from scratch.",
      },
    ],
    mediaCards: [
      {
        title: "Always-on assistant",
        description:
          "Inquiries get a reply and a booking link, including after hours.",
      },
      {
        title: "Show-up rates protected",
        description:
          "Automated confirmations and reminders reduce missed appointments.",
      },
      {
        title: "Fewer lost opportunities",
        description:
          "Missed-call text back and long-term follow-up keep contacts from going cold.",
      },
    ],
  },
  /**
   * Proof of work, not another pitch: which businesses DigitalFace has worked
   * with, and what each of them does. The roster itself (order, names, logo
   * files) lives in `client/data/clients.ts`.
   */
  selectedWork: {
    eyebrow: "Selected work",
    title: "See the businesses we’ve worked with.",
    description: "Healthcare, professional services, events and more.",
    featuredGroupLabel: "Featured success stories",
    selectedGroupLabel: "Selected clients",
    rosterGroupLabel: "More businesses we have worked with",
    featuredBadge: "Success story",
    contributionLabel: "What DigitalFace supported",
    entries: selectedWorkEntriesEn,
  },
  /**
   * The delivered websites, one large browser preview at a time. Which
   * projects appear, where they link and which screenshot they use lives in
   * `client/data/websiteProjects.ts`; `projects` below is keyed by the same id.
   */
  websitePortfolio: {
    eyebrow: "Digital experiences",
    title: "Websites that make the next step clear.",
    description:
      "Web development that helps visitors understand your services and get in touch.",
    projectLabel: "DigitalFace website project",
    visitCta: "Visit live website",
    /** Screen-reader name for the whole showcase. */
    carouselLabel: "DigitalFace website projects",
    previousLabel: "Previous project",
    nextLabel: "Next project",
    /** `{current}` and `{total}` are replaced with the project numbers. */
    positionLabel: "Project {current} of {total}",
    panHint: "Hover to scroll the homepage",
    openHint: "Opens in a new tab",
    projects: {
      jennifer: {
        category: "Aesthetic Dentistry",
        location: "Cali, Colombia",
        description:
          "A dental website that presents treatments and invites local and international patient inquiries.",
        alt: "Dra. Jennifer Sinisterra aesthetic dentistry website homepage",
      },
      diego: {
        category: "Aesthetic Medicine",
        location: "Cali, Colombia",
        description:
          "An aesthetic medicine website that connects treatment information with consultation requests.",
        alt: "Dr. Diego Sinisterra aesthetic medicine website homepage",
      },
    } as Record<
      string,
      {
        category: string;
        location: string;
        description: string;
        alt: string;
      }
    >,
  },
  /**
   * The reassurance beat between the system demonstrations and the proof of
   * work. Deliberately never "partners": a logo means the platform can be wired
   * into a DigitalFace build, which is what the footnote spells out. The roster
   * and its order live in `client/data/techEcosystem.ts`.
   */
  techEcosystem: {
    eyebrow: "Your existing tools",
    title: "Keep your tools. Connect the work.",
    description:
      "We connect your marketing, messaging, CRM and scheduling tools so your team spends less time moving information.",
    categories: "CRM · Messaging · Advertising · AI · Automation · Scheduling",
    /** Screen-reader name for the scrollable rail. */
    railLabel: "Platforms DigitalFace works with",
    previousLabel: "Scroll technologies left",
    nextLabel: "Scroll technologies right",
    /** `{name}` is replaced with the brand name. */
    logoAlt: "{name} logo",
    footnote:
      "Product names and logos are trademarks of their respective owners, shown to indicate compatibility only.",
  },
  integrations: {
    eyebrow: "Lead sources",
    title: "Every channel feeds one system",
    description:
      "Website, chat, calls, ads and social all route into the same pipeline.",
    items: [
      "Website forms",
      "Funnels",
      "Chat widget",
      "SMS and calls",
      "Facebook and Instagram",
      "Google Ads",
      "Google Business",
      "Calendar booking",
      "Email",
      "Messenger",
      "Instagram DMs",
      "CRM pipeline",
    ],
  },
  /** The closing conversion block. One button, no second sales pitch. */
  booking: {
    eyebrow: "Ready when you are",
    title: "What would help your business most?",
    description:
      "Choose the complete system or just the services you need. We’ll help you decide on a call.",
    ctaLabel: "Find My Next Step",
  },
  cta: {
    eyebrow: "Prefer to write?",
    title: "Tell us what you need.",
    description:
      "Share your business goals and we’ll help you choose the next step.",
    primaryCta: "Choose Individual Services",
    secondaryCta: "Compare Plans",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title:
      "Captación de Clientes y Automatización de Marketing | DigitalFace Marketing",
    description:
      "DigitalFace conecta pauta, seguimiento con IA y CRM para negocios que trabajan con citas en Florida, Estados Unidos y Latinoamérica. Conoce tu sistema de crecimiento.",
  },
  hero: {
    eyebrow: "El sistema de crecimiento DigitalFace",
    title: "Más consultas. Mejor seguimiento. Más oportunidades.",
    description:
      "Unimos marketing, IA y CRM para ayudarte a convertir el interés en citas. DigitalFace se encarga de la implementación y el soporte.",
    primaryCta: "Agendar una llamada",
    secondaryCta: "Ver cómo funciona",
    stats: [
      { value: "Inmediata", label: "Primera respuesta" },
      { value: "24/7", label: "Cobertura de seguimiento" },
      { value: "Una vista", label: "Cada consulta registrada" },
    ],
    bannerAlt: "Banner promocional de DigitalFace Marketing",
    bannerCtaLabel: "Empieza hoy",
    liveTitle: "Activo en la primera semana",
    liveItems: [
      "Todas tus fuentes de contactos en un solo proceso.",
      "Respuestas inmediatas por mensaje y correo, con enlace para agendar.",
      "Un tablero que muestra cada consulta y en qué etapa está.",
    ],
  },
  systemIntro: {
    eyebrow: "Un sistema de crecimiento conectado",
    title: "Conseguir el contacto es solo el comienzo.",
    description:
      "La captación funciona cuando tres partes se mantienen conectadas: crear la oportunidad, hacerla avanzar mientras el interés sigue alto y mantener visible cada siguiente paso.",
    previewLabel: "Atraer → Convertir → Gestionar",
    closing: "Un solo equipo lo configura y lo mantiene funcionando.",
    stages: [
      {
        number: "01",
        label: "Atraer",
        title: "Despierta el interés",
        description:
          "Llega a personas relevantes y convierte su atención en consultas reales.",
      },
      {
        number: "02",
        label: "Convertir",
        title: "Ayuda a agendar",
        description:
          "Responde, entiende la necesidad y guía la conversación hacia la acción.",
      },
      {
        number: "03",
        label: "Gestionar",
        title: "Organiza cada contacto",
        description:
          "Organiza cada oportunidad, conversación, estado y siguiente paso.",
      },
    ],
  },
  industryPaths: {
    eyebrow: "Sistemas por industria",
    title: "Empieza con el sistema hecho para tu tipo de paciente.",
    description:
      "El mismo motor DigitalFace, adaptado al lenguaje, los procesos y los puntos de conversión de los tres mercados que atendemos.",
    linkLabel: "Ver la página del sistema",
    cards: {
      dental: {
        title: "Clínicas Odontológicas",
        eyebrow: "Implantes · Carillas · Diseño de sonrisa",
        description:
          "Un sistema de captación y agendamiento pensado para decisiones de tratamiento de alto valor.",
        outcome:
          "Convierte más consultas de tratamiento en valoraciones reales.",
      },
      aesthetic: {
        title: "Medicina Estética",
        eyebrow: "Inyectables · Cuerpo · Piel",
        description:
          "Un recorrido bilingüe desde la consulta por un procedimiento hasta la valoración médica.",
        outcome:
          "Responde más rápido mientras las decisiones clínicas siguen en tu equipo.",
      },
      medSpa: {
        title: "Med Spas",
        eyebrow: "Membresías · Paquetes · Reactivación",
        description:
          "Un sistema de agendamiento y seguimiento permanente para tratamientos recurrentes, promociones y clientes inactivos.",
        outcome:
          "Convierte consultas y contactos inactivos en citas agendadas.",
      },
    },
  },
  features: {
    eyebrow: "Qué hace el sistema",
    title: "Un sistema de ventas automatizado, instalado para ti",
    description:
      "Captura cada consulta, respóndela en segundos y lleva a las personas interesadas hasta una cita agendada sin contratar más personal.",
    items: [
      {
        title: "Campañas que generan demanda",
        description:
          "El canal pago correcto para tu mercado, tus tratamientos y tu etapa de crecimiento.",
      },
      {
        title: "Todos los canales en un solo lugar",
        description:
          "Formularios, embudos, chat, llamadas y mensajes de redes llegan al mismo sistema.",
      },
      {
        title: "Respuestas en segundos",
        description:
          "Los mensajes y correos automáticos salen en el momento en que alguien te escribe.",
      },
      {
        title: "IA que responde y organiza",
        description:
          "Un asistente bilingüe atiende las preguntas aprobadas, registra el interés y ayuda a agendar.",
      },
      {
        title: "CRM y reportes",
        description:
          "Un proceso de oportunidades visual y reportes claros para saber en qué punto está cada caso.",
      },
      {
        title: "Implementación completa",
        description:
          "Nosotros lo construimos, lo probamos y lo lanzamos. Tu equipo no toca la parte técnica.",
      },
    ],
  },
  systemMedia: {
    eyebrow: "Un solo sistema conectado",
    title: "Mira el recorrido completo.",
    description:
      "Desde la primera consulta hasta la respuesta, la cita agendada y la vista que tu equipo usa todos los días.",
    overlayEyebrow: "Consulta → respuesta → cita → visibilidad",
    overlayTitle: "Cada oportunidad avanza por un mismo recorrido conectado.",
  },
  journey: {
    eyebrow: "Recorrido del paciente",
    title: "Del primer mensaje al cierre, gestionado automáticamente",
    description:
      "La automatización se encarga del trabajo repetitivo. Tu equipo entra donde una persona realmente marca la diferencia.",
    stepLabel: "Paso",
    steps: [
      {
        title: "Alguien te contacta",
        description:
          "Un paciente potencial escribe desde un anuncio, un formulario, el chat, una llamada o tus redes.",
      },
      {
        title: "El sistema responde de inmediato",
        description:
          "Sale una respuesta automática por mensaje, correo o WhatsApp en segundos y se crea la oportunidad.",
      },
      {
        title: "El interés se vuelve una cita",
        description:
          "Las personas interesadas llegan a tu calendario, con confirmaciones y recordatorios que protegen la cita.",
      },
      {
        title: "Nada se pierde",
        description:
          "Cada conversación y cada etapa queda registrada en un solo proceso, desde el primer contacto hasta el resultado.",
      },
    ],
  },
  adCampaignDemo: adCampaignDemoEs,
  conversationDemo: conversationDemoEs,
  crmPipelineDemo: crmPipelineDemoEs,
  appointmentCommitment: {
    eyebrow: "Compromiso de cita",
    title: "Suma un anticipo opcional a tus reservas.",
    description:
      "Elige anticipo, cuota de reserva o pago completo para ciertos servicios. Tu proveedor cobra el pago antes de marcar la cita como confirmada.",
    steps: [
      {
        label: "Cita solicitada",
        caption: "La persona elige un horario de tu disponibilidad real.",
      },
      {
        label: "Reserva solicitada",
        caption:
          "Con el agendamiento sale una solicitud de pago, solo donde tú la quieras.",
      },
      {
        label: "Cita confirmada",
        caption:
          "Cuando el pago se acredita, el estado se actualiza en tu proceso.",
      },
      {
        label: "Recordatorios",
        caption:
          "Las confirmaciones y los recordatorios siguen igual que antes.",
      },
      {
        label: "Cita atendida",
        caption:
          "Tu equipo llega a un espacio que alguien se comprometió a usar.",
      },
    ],
    points: [
      {
        title: "Pide un compromiso",
        description:
          "Un pago de reserva puede ayudar a reducir las citas sin compromiso.",
      },
      {
        title: "Ve qué está confirmado",
        description:
          "Distingue las reservas pagadas de las solicitudes de cita.",
      },
      {
        title: "Recibe el dinero en tu cuenta",
        description:
          "Tu proveedor cobra el pago. DigitalFace conecta el agendamiento y nunca retiene tus fondos.",
      },
    ],
    note: "Es opcional y se configura por servicio: tú decides qué citas piden anticipo y de cuánto. El anticipo refuerza el compromiso; no es una garantía de asistencia.",
  } satisfies AppointmentCommitmentContent,
  valueProps: {
    eyebrow: "Tu sistema de ventas",
    title: "Automatización que se siente cercana y nunca descansa",
    description:
      "Pensada para clínicas que necesitan seguimiento constante sin cargar más trabajo a la recepción.",
    statusLabel: "Estado del sistema: activo y en optimización",
    stageLabel: "Etapa",
    outputsLabel: "Resultados del sistema",
    liveLabel: "En vivo",
    points: [
      {
        badge: "RAPIDEZ",
        title: "Respuesta inmediata",
        description:
          "Cada consulta recibe respuesta, así nunca pierdes la primera conversación.",
      },
      {
        badge: "AUTOMÁTICO",
        title: "Seguimiento que no se detiene",
        description:
          "Las secuencias siguen trabajando hasta que la persona agenda o pide no recibir más mensajes.",
      },
      {
        badge: "CONTROL",
        title: "Un proceso claro",
        description:
          "Sabes en cualquier momento quién es nuevo, quién agendó, quién no asistió y quién cerró.",
      },
      {
        badge: "LLAVE EN MANO",
        title: "Instalado, no armado a la carrera",
        description:
          "Un sistema probado que implementamos en tu clínica, no un desarrollo desde cero.",
      },
    ],
    mediaCards: [
      {
        title: "Asistente siempre disponible",
        description:
          "Las consultas reciben respuesta y enlace para agendar, incluso fuera de horario.",
      },
      {
        title: "Menos citas perdidas",
        description:
          "Las confirmaciones y recordatorios automáticos reducen las inasistencias.",
      },
      {
        title: "Menos oportunidades frías",
        description:
          "El mensaje por llamada perdida y el seguimiento a largo plazo evitan que los contactos se enfríen.",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Trabajos seleccionados",
    title: "Conoce los negocios con los que hemos trabajado.",
    description: "Salud, servicios profesionales, eventos y más.",
    featuredGroupLabel: "Casos destacados",
    selectedGroupLabel: "Clientes seleccionados",
    rosterGroupLabel: "Otros negocios con los que hemos trabajado",
    featuredBadge: "Caso destacado",
    contributionLabel: "Lo que acompañó DigitalFace",
    entries: selectedWorkEntriesEs,
  },
  websitePortfolio: {
    eyebrow: "Experiencias digitales",
    title: "Sitios web que facilitan el siguiente paso.",
    description:
      "Desarrollo web para presentar tus servicios y facilitar el contacto.",
    projectLabel: "Proyecto web de DigitalFace",
    visitCta: "Ver el sitio en vivo",
    carouselLabel: "Proyectos web de DigitalFace",
    previousLabel: "Proyecto anterior",
    nextLabel: "Proyecto siguiente",
    positionLabel: "Proyecto {current} de {total}",
    panHint: "Pasa el cursor para recorrer la página",
    openHint: "Se abre en una pestaña nueva",
    projects: {
      jennifer: {
        category: "Odontología estética",
        location: "Cali, Colombia",
        description:
          "Un sitio dental que presenta tratamientos y facilita el contacto de pacientes locales e internacionales.",
        alt: "Página de inicio del sitio web de odontología estética de la Dra. Jennifer Sinisterra",
      },
      diego: {
        category: "Medicina estética",
        location: "Cali, Colombia",
        description:
          "Un sitio de medicina estética que conecta la información de tratamientos con solicitudes de valoración.",
        alt: "Página de inicio del sitio web de medicina estética del Dr. Diego Sinisterra",
      },
    },
  },
  techEcosystem: {
    eyebrow: "Tus herramientas actuales",
    title: "Conectamos las herramientas que ya usas.",
    description:
      "Conectamos marketing, mensajes, CRM y agenda para que tu equipo dedique menos tiempo a pasar información de un lugar a otro.",
    categories: "CRM · Mensajería · Pauta · IA · Automatización · Agendamiento",
    railLabel: "Plataformas con las que trabaja DigitalFace",
    previousLabel: "Desplazar tecnologías a la izquierda",
    nextLabel: "Desplazar tecnologías a la derecha",
    logoAlt: "Logo de {name}",
    footnote:
      "Los nombres y logotipos son marcas de sus respectivos propietarios y se muestran únicamente para indicar compatibilidad.",
  },
  integrations: {
    eyebrow: "Fuentes de contacto",
    title: "Todos los canales alimentan un mismo sistema",
    description:
      "Sitio web, chat, llamadas, anuncios y redes llegan al mismo proceso.",
    items: [
      "Formularios web",
      "Embudos",
      "Chat del sitio",
      "SMS y llamadas",
      "Facebook e Instagram",
      "Google Ads",
      "Perfil de Google",
      "Agendamiento",
      "Correo",
      "Messenger",
      "DM de Instagram",
      "Proceso en el CRM",
    ],
  },
  booking: {
    eyebrow: "Cuando quieras",
    title: "¿Qué le ayudaría más a tu negocio?",
    description:
      "Elige el sistema completo o solo los servicios que necesitas. Te ayudamos a decidir en una llamada.",
    ctaLabel: "Definir mi próximo paso",
  },
  cta: {
    eyebrow: "¿Prefieres escribir?",
    title: "Cuéntanos qué necesitas.",
    description:
      "Cuéntanos qué quieres mejorar en tu negocio y te ayudamos a definir el siguiente paso.",
    primaryCta: "Elegir servicios individuales",
    secondaryCta: "Comparar planes",
  },
};

export const homeContent: Record<Locale, typeof en> = { en, es };
export type HomeContent = typeof en;
