import type { ConversationDemoContent } from "@/components/demo/conversation";
import type { AdCampaignDemoContent } from "@/components/demo/adCampaign";
import type { CrmPipelineDemoContent } from "@/components/demo/crmPipeline";
import type { Locale } from "../locale";

/**
 * A fictional, fully scripted exchange. Nothing here describes a real patient,
 * a real practice or a measured result — it illustrates the sequence the rest of
 * the page describes in words.
 */
const conversationDemoEn: ConversationDemoContent = {
  eyebrow: "Inside the conversation",
  title: "Watch an after-hours inquiry become a booked appointment.",
  description:
    "Most inquiries arrive when nobody is at the front desk. This is the same message inside a DigitalFace system: answered in seconds, guided through the questions people always ask, and on the calendar before the clinic opens again.",
  ctaLabel: "See it running on the inquiries you already get",
  phoneCaption: "Sample conversation",
  stages: [
    {
      title: "The inquiry lands",
      description:
        "Ads, forms, chat and social messages arrive in one thread, nights and weekends included.",
    },
    {
      title: "The reply goes out in seconds",
      description:
        "Nobody waits until the morning for an answer, and the opportunity is created the moment it arrives.",
    },
    {
      title: "The conversation does the work",
      description:
        "Repeat questions get answered, interest is captured, and the calendar is offered at the right moment.",
    },
    {
      title: "Your team stays in control",
      description:
        "A person can take over at any point, and every booking lands in your pipeline with a reminder attached.",
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
        text: "Hi Camila, yes we are. The first step is a 30-minute smile design consultation with the doctor.",
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
  eyebrow: "Dentro de la conversación",
  title:
    "Mira cómo una consulta fuera de horario termina en una cita agendada.",
  description:
    "La mayoría de las consultas llegan cuando ya no hay nadie en recepción. Este es el mismo mensaje dentro de un sistema DigitalFace: respondido en segundos, guiado por las preguntas de siempre y agendado antes de que la clínica vuelva a abrir.",
  ctaLabel: "Míralo con las consultas que ya recibes",
  phoneCaption: "Conversación de ejemplo",
  stages: [
    {
      title: "La consulta llega",
      description:
        "Anuncios, formularios, chat y mensajes de redes entran en una sola conversación, también de noche y los fines de semana.",
    },
    {
      title: "La respuesta sale en segundos",
      description:
        "Nadie espera hasta el otro día para recibir respuesta, y la oportunidad se crea apenas entra el mensaje.",
    },
    {
      title: "La conversación hace el trabajo",
      description:
        "Responde las preguntas de siempre, registra el interés y ofrece el calendario en el momento correcto.",
    },
    {
      title: "Tu equipo mantiene el control",
      description:
        "Una persona puede tomar la conversación cuando quiera, y cada cita queda en tu proceso con su recordatorio.",
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
        text: "Hola Camila, sí. El primer paso es una valoración de diseño de sonrisa de 30 minutos con el doctor.",
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
  eyebrow: "Before the conversation",
  title: "Watch an ad turn a stranger into a lead your team can call.",
  description:
    "Reach and likes do not fill a calendar. This is what a DigitalFace campaign is built to do: put your treatments in front of people already looking for them, give them one clear step to take, and land their details where your team can act on them.",
  ctaLabel: "See what your campaigns would send into the system",
  phoneCaption: "Sample ad and lead form",
  bridge:
    "That is the first half of the journey. The conversation below picks the same lead up and carries it to a booked appointment.",
  stages: [
    {
      title: "It reaches someone already looking",
      description:
        "Your treatments show up in the feed people check every day, in the market and the language you actually serve.",
    },
    {
      title: "The offer earns a response",
      description:
        "One clear next step instead of a phone number and a hope, so interest turns into action while the person is still paying attention.",
    },
    {
      title: "Interest becomes contact details",
      description:
        "A short form asks what they want and how to reach them. Nothing for your front desk to chase, nothing anyone types twice.",
    },
    {
      title: "The lead arrives ready to work",
      description:
        "Every response lands in the same pipeline as the rest of your inquiries, organized and waiting for the first message.",
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
        lead: { name: "Camila Restrepo", phone: "+1 (305) 555 0142" },
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
  eyebrow: "Antes de la conversación",
  title:
    "Mira cómo un anuncio se convierte en un contacto al que tu equipo puede llamar.",
  description:
    "El alcance y los likes no llenan la agenda. Esto es lo que hace una campaña DigitalFace: pone tus tratamientos frente a personas que ya los están buscando, les da un paso claro y deja sus datos donde tu equipo puede trabajarlos.",
  ctaLabel: "Mira qué le entregaría tu pauta al sistema",
  phoneCaption: "Anuncio y formulario de ejemplo",
  bridge:
    "Esa es la primera mitad del recorrido. La conversación de abajo toma ese mismo contacto y lo lleva hasta una cita agendada.",
  stages: [
    {
      title: "Llega a alguien que ya está buscando",
      description:
        "Tus tratamientos aparecen en el feed que la gente revisa todos los días, en el mercado y el idioma que realmente atiendes.",
    },
    {
      title: "La oferta se gana la respuesta",
      description:
        "Un paso claro en lugar de un número de teléfono y una esperanza, para que el interés se vuelva acción mientras la persona sigue atenta.",
    },
    {
      title: "El interés se vuelve datos de contacto",
      description:
        "Un formulario corto pregunta qué quiere y dónde ubicarla. Nada que perseguir en recepción y nada que alguien tenga que escribir dos veces.",
    },
    {
      title: "El contacto llega listo para trabajar",
      description:
        "Cada respuesta cae en el mismo proceso que el resto de tus consultas, organizada y lista para el primer mensaje.",
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
        lead: { name: "Camila Restrepo", phone: "+57 320 555 0142" },
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
  eyebrow: "After the lead arrives",
  title: "Know exactly where every opportunity stands.",
  description:
    "When someone contacts your business, their source, interest and progress stay together. Your team can see who needs attention and what should happen next, without searching through WhatsApp or email, or relying on someone's memory.",
  ctaLabel: "See how your inquiries would stay organized",
  boardCaption: "Sample lead journey",
  bridge:
    "The opportunity now has a clear status, useful context and a next step. Your team can take over without searching through past messages.",
  stages: [
    {
      title: "New inquiry",
      description: "The opportunity appears as soon as the contact arrives.",
    },
    {
      title: "Contacted",
      description: "The first conversation is visible to the whole team.",
    },
    {
      title: "Interested",
      description: "The source and treatment interest stay with the lead.",
    },
    {
      title: "Appointment requested",
      description: "The team can see exactly what needs to be confirmed next.",
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
      name: "Camila Restrepo",
      initials: "CR",
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
  eyebrow: "Cuando llega el contacto",
  title: "Ten claro en qué punto está cada oportunidad.",
  description:
    "Cuando alguien se comunica con tu negocio, sus datos, su interés y la etapa en la que está quedan organizados en un solo lugar. Tu equipo ve quién necesita atención y qué debe pasar después, sin depender de conversaciones sueltas en WhatsApp, correos ni la memoria del equipo.",
  ctaLabel: "Mira cómo quedarían organizadas tus consultas",
  boardCaption: "Ejemplo del recorrido de un contacto",
  bridge:
    "La oportunidad ya tiene un estado claro, contexto útil y un siguiente paso. Tu equipo puede continuar el seguimiento sin buscar información en conversaciones anteriores.",
  stages: [
    {
      title: "Consulta nueva",
      description: "La oportunidad aparece apenas llega el contacto.",
    },
    {
      title: "En conversación",
      description: "Todo el equipo puede ver que la conversación ya comenzó.",
    },
    {
      title: "Interés confirmado",
      description:
        "El origen y el tratamiento de interés quedan unidos al contacto.",
    },
    {
      title: "Cita solicitada",
      description: "El equipo ve exactamente qué falta por confirmar.",
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
      name: "Camila Restrepo",
      initials: "CR",
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

const en = {
  metadata: {
    title:
      "Patient Acquisition & Booking Systems for Clinics | DigitalFace Marketing",
    description:
      "DigitalFace installs and runs the advertising, instant follow-up, bilingual AI conversations and booking system behind dental practices, aesthetic medicine clinics and med spas in the US and Latin America. Book a call to see it on your numbers.",
  },
  hero: {
    eyebrow: "The DigitalFace Sales System",
    title: "We turn patient inquiries into booked appointments.",
    description:
      "DigitalFace connects your advertising, instant follow-up, bilingual conversations, calendar and pipeline into one system. We install it, and we run it.",
    primaryCta: "Book a call",
    secondaryCta: "See how the system works",
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
  clientSystems: {
    eyebrow: "Systems in production",
    title: "Real systems, running for real practices",
    description:
      "Two client systems are live today. Two spaces stay open for the next verified results.",
    activeLabel: "Active client",
    reservedLabel: "Client slot",
    reservedTitle: "Reserved for the next verified system",
    reservedDescription:
      "This space stays empty until a new client result is confirmed and approved for publication.",
    items: [
      {
        name: "Dr. Diego Sinisterra",
        sector: "Aesthetic Medicine",
        summary:
          "A bilingual patient communication and appointment system, with a Facebook and Instagram comment engine and human takeover built in.",
      },
      {
        name: "Dra. Jennifer Sinisterra",
        sector: "Cosmetic dentistry and international patients",
        summary:
          "A bilingual WhatsApp intake system connecting patient media, CRM visibility and human review.",
      },
    ],
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
  cta: {
    eyebrow: "Next step",
    title: "See the system running on your own numbers",
    description:
      "Book a short call and we will map how DigitalFace would capture, answer and book the opportunities you already receive.",
    primaryCta: "Talk to us",
    secondaryCta: "See the plans",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title:
      "Captación de Pacientes y Agendamiento para Clínicas | DigitalFace Marketing",
    description:
      "DigitalFace instala y opera la pauta, el seguimiento inmediato, las conversaciones bilingües con IA y el agendamiento de clínicas odontológicas, medicina estética y med spas en Estados Unidos y Latinoamérica. Agenda una llamada y míralo con tus números.",
  },
  hero: {
    eyebrow: "El Sistema de Ventas DigitalFace",
    title: "Convertimos consultas de pacientes en citas agendadas.",
    description:
      "DigitalFace conecta tu pauta, el seguimiento inmediato, las conversaciones bilingües, el calendario y el proceso de oportunidades en un solo sistema. Nosotros lo instalamos y lo operamos.",
    primaryCta: "Agenda una llamada",
    secondaryCta: "Mira cómo funciona",
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
  clientSystems: {
    eyebrow: "Sistemas en operación",
    title: "Sistemas reales, funcionando en clínicas reales",
    description:
      "Hoy tenemos dos sistemas de clientes activos. Dos espacios quedan abiertos para los próximos resultados verificados.",
    activeLabel: "Cliente activo",
    reservedLabel: "Espacio de cliente",
    reservedTitle: "Reservado para el próximo sistema verificado",
    reservedDescription:
      "Este espacio queda vacío hasta confirmar y aprobar el resultado de un nuevo cliente.",
    items: [
      {
        name: "Dr. Diego Sinisterra",
        sector: "Medicina estética",
        summary:
          "Un sistema bilingüe de comunicación con pacientes y gestión de citas, con motor de respuesta a comentarios en Facebook e Instagram y traspaso a una persona del equipo.",
      },
      {
        name: "Dra. Jennifer Sinisterra",
        sector: "Odontología estética y pacientes internacionales",
        summary:
          "Un sistema bilingüe de admisión por WhatsApp que conecta el material del paciente, la visibilidad en el CRM y la revisión humana.",
      },
    ],
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
  cta: {
    eyebrow: "Siguiente paso",
    title: "Mira el sistema aplicado a tus propios números",
    description:
      "Agenda una llamada corta y te mostramos cómo DigitalFace capturaría, respondería y agendaría las consultas que ya recibes.",
    primaryCta: "Hablemos",
    secondaryCta: "Ver los planes",
  },
};

export const homeContent: Record<Locale, typeof en> = { en, es };
export type HomeContent = typeof en;
