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
  eyebrow: "02 · Convert",
  title: "A lead only becomes valuable when someone moves it forward.",
  description:
    "The inquiry from the ad is answered while interest is still high. DigitalFace handles common questions, captures useful context and guides the conversation toward an appointment, with your team ready to step in when needed.",
  ctaLabel: "See how DigitalFace would move your inquiries forward",
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
  eyebrow: "02 · Convertir",
  title: "Un contacto solo tiene valor cuando alguien lo hace avanzar.",
  description:
    "La consulta del anuncio recibe respuesta mientras el interés sigue alto. DigitalFace atiende las preguntas frecuentes, reúne el contexto necesario y guía la conversación hacia una cita, con tu equipo listo para intervenir cuando haga falta.",
  ctaLabel: "Mira cómo DigitalFace haría avanzar tus consultas",
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
  eyebrow: "01 · Attract",
  title: "Create real opportunities, not just impressions and clicks.",
  description:
    "DigitalFace puts your services in front of relevant people and gives each person one clear path from attention to an inquiry your team can work.",
  ctaLabel: "See how DigitalFace would create opportunities",
  phoneCaption: "Sample ad and lead form",
  bridge:
    "The opportunity is in. Now it needs a timely conversation that moves it forward.",
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
  eyebrow: "01 · Atraer",
  title: "Crea oportunidades reales, no solo impresiones y clics.",
  description:
    "DigitalFace pone tus servicios frente a personas relevantes y le da a cada una un camino claro para pasar de la atención a una consulta que tu equipo puede trabajar.",
  ctaLabel: "Mira cómo DigitalFace crearía oportunidades",
  phoneCaption: "Anuncio y formulario de ejemplo",
  bridge:
    "La oportunidad ya llegó. Ahora necesita una conversación oportuna que la haga avanzar.",
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
  eyebrow: "03 · Manage",
  title: "Know exactly where every opportunity stands.",
  description:
    "Once inquiries and conversations are moving, DigitalFace keeps the source, interest, history, status and next step together so your team can see what needs attention without searching through scattered messages.",
  ctaLabel: "See how DigitalFace would keep your team in control",
  boardCaption: "Sample lead journey",
  bridge:
    "Attract, convert and manage: one connected customer journey with a clear next step at every stage.",
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
  eyebrow: "03 · Gestionar",
  title: "Ten claro en qué punto está cada oportunidad.",
  description:
    "Cuando las consultas y conversaciones empiezan a avanzar, DigitalFace mantiene juntos el origen, el interés, el historial, el estado y el siguiente paso para que tu equipo vea qué necesita atención sin buscar entre mensajes dispersos.",
  ctaLabel: "Mira cómo DigitalFace mantendría el control",
  boardCaption: "Ejemplo del recorrido de un contacto",
  bridge:
    "Atraer, convertir y gestionar: un solo recorrido conectado con un siguiente paso claro en cada etapa.",
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
    highlight:
      "Digital ecosystem built around patient acquisition, qualification and follow-up.",
  },
  diego: {
    category: "Aesthetic Medicine · Cali, Colombia",
    description:
      "Medical aesthetics practice focused on personalized treatments, natural-looking results and patient follow-up.",
    highlight:
      "A connected digital journey from campaign and website to appointment and CRM.",
  },
  braveros: {
    category: "Sports & Events · Bugalagrande, Colombia",
    description:
      "Fitness community behind Neon Race, a multi-edition nighttime running event combining sport, entertainment and regional participation.",
    highlight:
      "Digital acquisition and online conversion supporting a growing regional running event.",
  },
  saboreo: {
    category: "Food & Hospitality · Bugalagrande, Colombia",
    description:
      "Local fast-food brand known especially for its salchipapas, delivery and casual dining experience. Public listings currently show very strong customer reviews.",
    highlight:
      "Digital marketing built around a local food brand and its customer acquisition.",
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
      "Ecosistema digital construido alrededor de la captación, la calificación y el seguimiento de pacientes.",
  },
  diego: {
    category: "Medicina estética · Cali, Colombia",
    description:
      "Consultorio de medicina estética enfocado en tratamientos personalizados, resultados de apariencia natural y seguimiento al paciente.",
    highlight:
      "Un recorrido digital conectado, desde la campaña y el sitio web hasta la cita y el CRM.",
  },
  braveros: {
    category: "Deporte y eventos · Bugalagrande, Colombia",
    description:
      "Comunidad fitness detrás de Neon Race, una carrera nocturna de varias ediciones que combina deporte, entretenimiento y participación regional.",
    highlight:
      "Captación digital y conversión en línea para una carrera regional en crecimiento.",
  },
  saboreo: {
    category: "Gastronomía · Bugalagrande, Colombia",
    description:
      "Marca local de comida rápida reconocida sobre todo por sus salchipapas, su servicio a domicilio y su experiencia de mesa informal. Sus perfiles públicos muestran hoy reseñas muy positivas.",
    highlight:
      "Marketing digital construido alrededor de una marca local de comida y su captación de clientes.",
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
    title: "Connected Customer Acquisition Systems | DigitalFace Marketing",
    description:
      "DigitalFace connects advertising, responsive conversations and opportunity management into one customer acquisition system for appointment-driven businesses in the US and Latin America.",
  },
  hero: {
    eyebrow: "The DigitalFace growth system",
    title: "Turn more inquiries into appointments and customers.",
    description:
      "DigitalFace connects advertising, responsive conversations and opportunity management into one system built to move potential customers forward.",
    primaryCta: "Build my growth system",
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
  systemIntro: {
    eyebrow: "One connected growth system",
    title: "Getting the lead is only the beginning.",
    description:
      "Customer acquisition works when three parts stay connected: create the opportunity, move it forward while interest is high and keep every next step visible.",
    previewLabel: "The customer journey",
    closing:
      "Create opportunities. Move them forward. Keep control of the customer journey.",
    stages: [
      {
        number: "01",
        label: "Attract",
        title: "Create opportunities",
        description:
          "Reach relevant people and turn their attention into real inquiries.",
      },
      {
        number: "02",
        label: "Convert",
        title: "Move them forward",
        description:
          "Respond, understand the need and guide the conversation toward action.",
      },
      {
        number: "03",
        label: "Manage",
        title: "Keep control",
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
    title: "Built across different industries.",
    description:
      "From healthcare and professional services to events, automotive, branding and food businesses.",
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
    title: "Web experiences built to turn attention into action.",
    description:
      "Selected DigitalFace website projects designed around clarity, trust and conversion.",
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
          "Premium digital experience for an aesthetic dentistry practice, designed to present treatments clearly and convert local and international patient interest into enquiries.",
        alt: "Dra. Jennifer Sinisterra aesthetic dentistry website homepage",
      },
      diego: {
        category: "Aesthetic Medicine",
        location: "Cali, Colombia",
        description:
          "Conversion-focused digital experience for an aesthetic medicine practice, connecting treatment discovery with patient enquiries and appointment intent.",
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
    title: "Let's talk about what your business needs next.",
    description:
      "Choose a convenient time to discuss your lead generation, conversion, CRM, automation or complete growth system.",
    ctaLabel: "Choose a time",
  },
  cta: {
    eyebrow: "Build your connected system",
    title: "Bring more opportunities in—and give each one a clear next step.",
    description:
      "Tell us how inquiries reach your business today. We will map the advertising, conversation and management system needed to move more of them forward.",
    primaryCta: "Discuss my growth system",
    secondaryCta: "See the plans",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title:
      "Sistemas Conectados de Captación de Clientes | DigitalFace Marketing",
    description:
      "DigitalFace conecta pauta, conversaciones oportunas y gestión de oportunidades en un solo sistema de captación para negocios que trabajan con citas en Estados Unidos y Latinoamérica.",
  },
  hero: {
    eyebrow: "El sistema de crecimiento DigitalFace",
    title: "Convierte más consultas en citas y clientes.",
    description:
      "DigitalFace conecta la pauta, las conversaciones oportunas y la gestión de oportunidades en un solo sistema diseñado para hacer avanzar a tus clientes potenciales.",
    primaryCta: "Construir mi sistema de crecimiento",
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
  systemIntro: {
    eyebrow: "Un sistema de crecimiento conectado",
    title: "Conseguir el contacto es solo el comienzo.",
    description:
      "La captación funciona cuando tres partes se mantienen conectadas: crear la oportunidad, hacerla avanzar mientras el interés sigue alto y mantener visible cada siguiente paso.",
    previewLabel: "El recorrido del cliente",
    closing:
      "Crea oportunidades. Hazlas avanzar. Mantén el control del recorrido del cliente.",
    stages: [
      {
        number: "01",
        label: "Atraer",
        title: "Crear oportunidades",
        description:
          "Llega a personas relevantes y convierte su atención en consultas reales.",
      },
      {
        number: "02",
        label: "Convertir",
        title: "Hacerlas avanzar",
        description:
          "Responde, entiende la necesidad y guía la conversación hacia la acción.",
      },
      {
        number: "03",
        label: "Gestionar",
        title: "Mantener el control",
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
    title: "Construido para diferentes industrias.",
    description:
      "Desde salud y servicios profesionales hasta eventos, automotriz, branding y gastronomía.",
    featuredGroupLabel: "Casos destacados",
    selectedGroupLabel: "Clientes seleccionados",
    rosterGroupLabel: "Otros negocios con los que hemos trabajado",
    featuredBadge: "Caso destacado",
    contributionLabel: "Lo que acompañó DigitalFace",
    entries: selectedWorkEntriesEs,
  },
  websitePortfolio: {
    eyebrow: "Experiencias digitales",
    title: "Experiencias web creadas para convertir la atención en acción.",
    description:
      "Proyectos web seleccionados de DigitalFace, diseñados alrededor de la claridad, la confianza y la conversión.",
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
          "Experiencia digital premium para una consulta de odontología estética, diseñada para presentar los tratamientos con claridad y convertir el interés de pacientes locales e internacionales en consultas.",
        alt: "Página de inicio del sitio web de odontología estética de la Dra. Jennifer Sinisterra",
      },
      diego: {
        category: "Medicina estética",
        location: "Cali, Colombia",
        description:
          "Experiencia digital enfocada en conversión para una consulta de medicina estética, que conecta el descubrimiento de tratamientos con las consultas y la intención de agendar cita.",
        alt: "Página de inicio del sitio web de medicina estética del Dr. Diego Sinisterra",
      },
    },
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
    title: "Hablemos de lo que tu negocio necesita ahora.",
    description:
      "Elige un horario para conversar sobre tu generación de leads, conversión, CRM, automatización o el sistema de crecimiento completo.",
    ctaLabel: "Elige un horario",
  },
  cta: {
    eyebrow: "Construye tu sistema conectado",
    title: "Atrae más oportunidades y dale a cada una un siguiente paso claro.",
    description:
      "Cuéntanos cómo llegan hoy las consultas a tu negocio. Trazaremos el sistema de pauta, conversación y gestión necesario para hacer avanzar más oportunidades.",
    primaryCta: "Hablar sobre mi sistema de crecimiento",
    secondaryCta: "Ver los planes",
  },
};

export const homeContent: Record<Locale, typeof en> = { en, es };
export type HomeContent = typeof en;
