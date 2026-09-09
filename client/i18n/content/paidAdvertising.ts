import type { Locale } from "../locale";

const en = {
  metadata: {
    title: "Paid Advertising Agency for Meta, Google & TikTok | DigitalFace",
    description:
      "DigitalFace plans and manages Meta, Google and TikTok Ads around qualified inquiries, customer acquisition and measurable conversions across the US, Canada and LATAM.",
  },
  hero: {
    eyebrow: "Paid advertising · Meta · Google · TikTok",
    title: "Paid advertising built around what happens after the click.",
    description:
      "DigitalFace plans, launches and manages paid acquisition around qualified inquiries, customer acquisition and appointments when they matter—not around a dashboard full of activity.",
    primaryCta: "Build my channel plan",
    secondaryCta: "See what we manage",
    budgetNote:
      "Your advertising budget is paid directly to the platform from client-owned accounts. DigitalFace’s strategy and management fee is separate.",
  },
  heroVisual: {
    label: "Acquisition control room",
    status: "Strategy simulation",
    liveLabel: "Active strategy",
    inputLabel: "Channel role",
    systemLabel: "DigitalFace layer",
    systemTitle: "Offer · landing path · tracking",
    outcomeLabel: "Business signal",
    outcomeTitle: "Qualified inquiry · acquisition cost",
    note: "Illustrative strategy map—no campaign result is implied.",
    channels: {
      meta: {
        tab: "Meta",
        role: "Create + capture demand",
        title: "Audience discovery",
        signal: "Creative angle matched to a defined audience",
      },
      google: {
        tab: "Google",
        role: "Capture existing demand",
        title: "High-intent search",
        signal: "Search intent matched to the right offer and page",
      },
      tiktok: {
        tab: "TikTok",
        role: "Create new demand",
        title: "Short-form discovery",
        signal: "Native creative earns attention, then directs action",
      },
    },
  },
  outcomes: {
    eyebrow: "The real product",
    title: "Clicks are inputs. Acquisition is the assignment.",
    description:
      "Platform metrics help us read a campaign. The work is to connect those signals to the commercial action your business actually needs.",
    items: [
      {
        label: "01 · Reach",
        title: "The right audience",
        description:
          "Put a specific offer in front of people whose needs, location and intent fit the business.",
      },
      {
        label: "02 · Response",
        title: "A measurable action",
        description:
          "Give that attention a clear path into a form, call, message, purchase or booking flow.",
      },
      {
        label: "03 · Quality",
        title: "A useful opportunity",
        description:
          "Look beyond lead volume to the inquiries, customers and appointments the team can actually act on.",
      },
      {
        label: "04 · Learning",
        title: "A better next decision",
        description:
          "Use cost, quality and conversion signals to refine the offer, creative, targeting and budget.",
      },
    ],
  },
  channels: {
    eyebrow: "Three platforms. Three jobs.",
    title: "Use each channel for the role it is best equipped to play.",
    description:
      "The same campaign copied into three dashboards is not a channel strategy. DigitalFace matches the platform to how your customer discovers, evaluates and acts.",
    selectionLabel: "Explore a channel",
    bestWhenLabel: "Strong fit when",
    systemRoleLabel: "Its place in the acquisition system",
    principleTitle: "We do not automatically recommend all three.",
    principleBody:
      "The right mix can be one channel, a deliberate sequence, or a multi-channel plan. The decision depends on your customer, offer, market, geography, budget, economics, creative capacity and available demand.",
    platforms: {
      meta: {
        name: "Meta Ads",
        network: "Facebook + Instagram",
        role: "Create and capture demand",
        title: "Put the offer inside the feed your audience already uses.",
        description:
          "Meta is useful when audience signals, visual storytelling and retargeting can turn interest into an inquiry. The creative and offer do the heavy lifting; targeting gives them a relevant place to work.",
        bestWhen: [
          "The customer can be described by meaningful audience and location signals.",
          "The offer becomes clearer through visual proof, explanation or comparison.",
          "There is enough creative material to test more than one angle.",
        ],
        systemRole:
          "Build awareness, generate response and keep the offer present for people who have already shown interest.",
        visual: {
          eyebrow: "Discovery feed",
          adLabel: "Sponsored",
          headline: "One offer. Multiple angles.",
          detail: "Audience signal → creative test → inquiry path",
          labels: ["Audience", "Offer A/B", "Lead path"],
        },
      },
      google: {
        name: "Google Ads",
        network: "Search + related Google inventory",
        role: "Capture existing demand",
        title: "Meet the customer at the moment they are already looking.",
        description:
          "Google is strongest when people actively search for the service, problem or solution. Keyword intent, account structure and landing-page relevance determine whether that demand becomes a useful conversion.",
        bestWhen: [
          "The market already searches for what you sell in meaningful volume.",
          "High-intent terms can be separated from vague or irrelevant traffic.",
          "The landing page can answer the search and make the next step obvious.",
        ],
        systemRole:
          "Capture demand that already exists, protect budget from weak intent and route each search to the most relevant response path.",
        visual: {
          eyebrow: "Intent engine",
          headline: "The right answer to an active search.",
          detail: "Search intent → relevant message → conversion",
          labels: ["Query", "Relevance", "Action"],
        },
      },
      tiktok: {
        name: "TikTok Ads",
        network: "Short-form paid discovery",
        role: "Create discovery and new demand",
        title: "Earn attention before the customer was planning to search.",
        description:
          "TikTok can open demand through fast, native-feeling creative. It makes sense when the offer can be demonstrated, explained or made culturally relevant in short-form video—and when the creative pipeline can keep learning.",
        bestWhen: [
          "The audience already discovers products, services or ideas through video.",
          "The offer has hooks, demonstrations or stories that fit a short format.",
          "The business can support a steady creative testing rhythm.",
        ],
        systemRole:
          "Create attention, test messages quickly and turn discovery into a measurable next step before search demand fully exists.",
        visual: {
          eyebrow: "Creative discovery",
          headline: "Hook. Hold. Direct the next action.",
          detail: "Native creative → attention signal → response",
          labels: ["Hook", "Proof", "Next step"],
        },
      },
    },
  },
  decision: {
    eyebrow: "Channel selection",
    title: "Fit comes before spend.",
    description:
      "A platform recommendation should survive a business conversation, not just a media-plan template.",
    inputs: [
      {
        title: "Customer",
        body: "Who buys, who influences and where they pay attention.",
      },
      {
        title: "Offer",
        body: "What is being sold and why someone should act now.",
      },
      {
        title: "Intent",
        body: "Whether demand already exists or must first be created.",
      },
      {
        title: "Market",
        body: "Geography, language, competition and reachable volume.",
      },
      {
        title: "Economics",
        body: "Budget, margin, sales cycle and acceptable acquisition cost.",
      },
      {
        title: "Creative",
        body: "The assets, proof and testing capacity available to the campaign.",
      },
    ],
    conclusion:
      "We may recommend one priority channel, sequence a second later, or wait until the offer, landing path or tracking is ready. Strategy includes knowing what not to fund yet.",
  },
  management: {
    eyebrow: "Managed acquisition",
    title: "A campaign is a learning system, not a one-time setup.",
    description:
      "DigitalFace owns the operating rhythm from the initial commercial question to the next budget decision.",
    stages: [
      {
        number: "01",
        title: "Frame the business objective",
        description:
          "Define the customer, offer, conversion, geography, economics and decision criteria before choosing tactics.",
        outputs: [
          "Acquisition brief",
          "Channel recommendation",
          "Measurement plan",
        ],
      },
      {
        number: "02",
        title: "Prepare the conversion path",
        description:
          "Review account ownership, tracking, landing experience and the handoff after someone responds.",
        outputs: ["Account readiness", "Tracking setup", "Landing-path review"],
      },
      {
        number: "03",
        title: "Build the campaign architecture",
        description:
          "Structure campaigns, audiences or keywords, messages, creative direction, budgets and testing priorities.",
        outputs: [
          "Campaign build",
          "Copy and creative direction",
          "Testing matrix",
        ],
      },
      {
        number: "04",
        title: "Launch, observe and test",
        description:
          "Monitor delivery, search terms, audiences, creative signals and conversion quality without reacting to noise.",
        outputs: ["Launch control", "Offer and message tests", "Budget checks"],
      },
      {
        number: "05",
        title: "Optimize toward the business",
        description:
          "Use the best available inquiry, sales and appointment data to reallocate budget and choose the next experiment.",
        outputs: ["Ongoing optimization", "Clear reporting", "Next actions"],
      },
    ],
  },
  measurement: {
    eyebrow: "Measurement hierarchy",
    title: "Read platform data. Make business decisions.",
    description:
      "Clicks, impressions and view rates explain how media is behaving. They become valuable when they help improve a commercial outcome.",
    dashboardLabel: "Acquisition signal board",
    primaryTitle: "Optimize toward",
    primary: [
      "Qualified inquiries",
      "Customer acquisition",
      "Appointments when relevant",
      "Cost per acquisition",
    ],
    supportingTitle: "Use as supporting signals",
    supporting: [
      "Reach",
      "Impressions",
      "Clicks",
      "CTR",
      "CPC",
      "Video engagement",
    ],
    supportingNote:
      "These signals show where to investigate. They do not define success on their own.",
    note: "Attribution depends on the platforms, tracking access and the quality of downstream CRM or sales data. Your team must keep real outcomes current; reporting cannot manufacture certainty the data does not contain.",
  },
  scope: {
    eyebrow: "What DigitalFace manages",
    title: "The work between a budget and a useful acquisition channel.",
    description:
      "Scope is shaped around the channel plan, but a managed engagement can cover the full path below.",
    items: [
      {
        title: "Strategy",
        body: "Channel selection, goals, audiences, intent, geography and budget logic.",
      },
      {
        title: "Campaign build",
        body: "Account structure, campaigns, ad groups or sets, audiences, keywords and exclusions.",
      },
      {
        title: "Messages + creative",
        body: "Ad copy, hooks, offers, briefs, variations and a practical testing cadence.",
      },
      {
        title: "Conversion tracking",
        body: "Platform tags, conversion events, analytics checks and attribution within available access.",
      },
      {
        title: "Conversion analysis",
        body: "Landing pages, forms, calls, messages and the handoff into CRM or sales follow-up.",
      },
      {
        title: "Ongoing management",
        body: "Monitoring, testing, budget allocation, optimization, reporting and next-step decisions.",
      },
    ],
    ecosystemTitle:
      "Advertising is the acquisition engine—not the whole company.",
    ecosystemBody:
      "When useful, DigitalFace can connect paid media to landing pages, CRM, automated follow-up, AI conversations and booking. Those capabilities strengthen the advertising system without turning this page into a pitch for services you do not need.",
    ecosystemCta: "See the wider DigitalFace system",
  },
  services: {
    eyebrow: "Choose your starting point",
    title: "Select a channel—or ask us to recommend one.",
    description:
      "Add the platforms you want to discuss. If you are unsure, use the custom-proposal path and we will start with channel fit.",
    cards: {
      meta: {
        name: "Meta Ads",
        role: "Facebook + Instagram",
        description:
          "Audience, creative and retargeting strategy for demand in social feeds.",
      },
      google: {
        name: "Google Ads",
        role: "High-intent search",
        description:
          "Keyword, campaign and landing-page strategy for demand that already exists.",
      },
      tiktok: {
        name: "TikTok Ads",
        role: "Short-form discovery",
        description:
          "Native creative testing for attention, discovery and measurable response.",
      },
    },
    pricingTitle: "Management is scoped after the channel plan.",
    pricingBody:
      "We confirm the platform mix, markets, offers, spend, creative requirements and tracking before quoting. Your proposal reflects the agreed work instead of a one-size-fits-all fee.",
    budgetTitle: "Advertising spend stays separate.",
    budgetBody:
      "You normally pay Meta, Google or TikTok directly from client-owned assets and accounts. DigitalFace’s service fee covers the agreed strategy, setup and management scope.",
    requestCta: "Review my service request",
    proposalCta: "Request a channel recommendation",
  },
  faq: {
    eyebrow: "Paid advertising questions",
    title: "The decisions behind the media plan.",
    items: [
      {
        question: "Do I need Meta, Google and TikTok at the same time?",
        answer:
          "No. We recommend the smallest channel mix that makes strategic and economic sense. That may be one priority platform, a phased sequence or a broader mix when the evidence and budget support it.",
      },
      {
        question: "Is advertising spend included in the DigitalFace fee?",
        answer:
          "No. Advertising spend is separate and is normally paid directly to Meta, Google or TikTok through client-owned accounts. DigitalFace’s strategy and management fee is scoped separately.",
      },
      {
        question: "What does ongoing campaign management include?",
        answer:
          "The agreed scope can include campaign monitoring, search-term or audience review, creative and message testing, budget allocation, conversion analysis, reporting and recommended next actions.",
      },
      {
        question:
          "Can DigitalFace work with our existing advertising accounts?",
        answer:
          "Yes, when access and ownership are clear. We review the current account structure, tracking assets, audiences and history before deciding what should be preserved, repaired or rebuilt.",
      },
      {
        question: "Can you guarantee leads, revenue or ROAS?",
        answer:
          "No. Advertising outcomes depend on the offer, market, budget, competition, creative, conversion path and sales follow-up. We manage and optimize toward agreed outcomes without promising a result the market controls.",
      },
      {
        question: "How do you decide which platform to start with?",
        answer:
          "We evaluate the target customer, offer, geography, existing demand, economics, budget, creative capacity and measurement readiness, then explain why a channel should—or should not—receive the first dollar.",
      },
    ],
  },
  cta: {
    eyebrow: "Turn paid media into a managed channel",
    title:
      "Start with the business outcome. We’ll work backward to the media plan.",
    description:
      "Tell us what you sell, who should buy it and what a valuable conversion looks like. We’ll discuss the right starting channel and the scope required to manage it professionally.",
    primaryCta: "Book a paid advertising call",
    secondaryCta: "Send a custom request",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Agencia de Publicidad en Meta, Google y TikTok | DigitalFace",
    description:
      "DigitalFace planea y gestiona pauta en Meta, Google y TikTok para generar consultas calificadas, captar clientes y medir conversiones en EE. UU., Canadá y Latinoamérica.",
  },
  hero: {
    eyebrow: "Pauta digital · Meta · Google · TikTok",
    title: "Pauta digital pensada para lo que ocurre después del clic.",
    description:
      "DigitalFace planea, activa y gestiona captación paga alrededor de consultas calificadas, clientes y citas cuando son relevantes; no alrededor de un tablero lleno de actividad.",
    primaryCta: "Definir mi plan de canales",
    secondaryCta: "Ver qué gestionamos",
    budgetNote:
      "Tu presupuesto de pauta se paga directamente a la plataforma desde cuentas y activos del cliente. La tarifa de estrategia y gestión de DigitalFace se cobra por separado.",
  },
  heroVisual: {
    label: "Centro de control de captación",
    status: "Simulación estratégica",
    liveLabel: "Estrategia activa",
    inputLabel: "Función del canal",
    systemLabel: "Capa DigitalFace",
    systemTitle: "Oferta · landing · medición",
    outcomeLabel: "Señal de negocio",
    outcomeTitle: "Consulta calificada · costo de captación",
    note: "Mapa estratégico ilustrativo; no representa resultados de campañas.",
    channels: {
      meta: {
        tab: "Meta",
        role: "Crear + capturar demanda",
        title: "Descubrimiento de audiencias",
        signal: "Ángulo creativo conectado con una audiencia definida",
      },
      google: {
        tab: "Google",
        role: "Capturar demanda existente",
        title: "Búsqueda de alta intención",
        signal:
          "Intención de búsqueda conectada con la oferta y página correctas",
      },
      tiktok: {
        tab: "TikTok",
        role: "Crear nueva demanda",
        title: "Descubrimiento en video corto",
        signal:
          "Contenido nativo que gana atención y dirige la siguiente acción",
      },
    },
  },
  outcomes: {
    eyebrow: "El producto real",
    title: "Los clics son insumos. La captación es el trabajo.",
    description:
      "Las métricas de plataforma ayudan a leer una campaña. El trabajo consiste en conectar esas señales con la acción comercial que tu negocio realmente necesita.",
    items: [
      {
        label: "01 · Alcance",
        title: "La audiencia indicada",
        description:
          "Presenta una oferta específica a personas cuyas necesidades, ubicación e intención sí encajan con el negocio.",
      },
      {
        label: "02 · Respuesta",
        title: "Una acción medible",
        description:
          "Convierte la atención en un camino claro hacia un formulario, llamada, mensaje, compra o agendamiento.",
      },
      {
        label: "03 · Calidad",
        title: "Una oportunidad útil",
        description:
          "Mira más allá del volumen para evaluar consultas, clientes y citas que el equipo realmente puede atender.",
      },
      {
        label: "04 · Aprendizaje",
        title: "Una mejor decisión siguiente",
        description:
          "Usa señales de costo, calidad y conversión para mejorar oferta, contenido, segmentación y presupuesto.",
      },
    ],
  },
  channels: {
    eyebrow: "Tres plataformas. Tres funciones.",
    title: "Usa cada canal para el trabajo que mejor sabe hacer.",
    description:
      "Copiar la misma campaña en tres administradores no es una estrategia de canales. DigitalFace conecta cada plataforma con la forma en que tu cliente descubre, evalúa y actúa.",
    selectionLabel: "Explora un canal",
    bestWhenLabel: "Funciona mejor cuando",
    systemRoleLabel: "Su lugar en el sistema de captación",
    principleTitle: "No recomendamos las tres plataformas por defecto.",
    principleBody:
      "La mezcla correcta puede ser un solo canal, una secuencia por etapas o un plan multicanal. La decisión depende del cliente, la oferta, el mercado, la geografía, el presupuesto, la rentabilidad, la capacidad creativa y la demanda disponible.",
    platforms: {
      meta: {
        name: "Meta Ads",
        network: "Facebook + Instagram",
        role: "Crear y capturar demanda",
        title: "Lleva la oferta al feed que tu audiencia ya utiliza.",
        description:
          "Meta es útil cuando las señales de audiencia, la comunicación visual y el retargeting pueden convertir interés en consulta. El contenido y la oferta hacen el trabajo principal; la segmentación les da un lugar relevante para hacerlo.",
        bestWhen: [
          "El cliente puede definirse con señales útiles de audiencia y ubicación.",
          "La oferta se entiende mejor con demostración, explicación o comparación visual.",
          "Hay suficiente material para probar más de un ángulo creativo.",
        ],
        systemRole:
          "Generar conocimiento, provocar respuesta y mantener la oferta presente para quienes ya mostraron interés.",
        visual: {
          eyebrow: "Feed de descubrimiento",
          adLabel: "Publicidad",
          headline: "Una oferta. Varios ángulos.",
          detail: "Señal de audiencia → prueba creativa → consulta",
          labels: ["Audiencia", "Oferta A/B", "Captura"],
        },
      },
      google: {
        name: "Google Ads",
        network: "Búsqueda + inventario relacionado de Google",
        role: "Capturar demanda existente",
        title: "Aparece cuando el cliente ya está buscando.",
        description:
          "Google es más fuerte cuando las personas buscan activamente el servicio, problema o solución. La intención de las palabras clave, la estructura de la cuenta y la relevancia de la landing determinan si esa demanda produce una conversión útil.",
        bestWhen: [
          "El mercado ya busca lo que vendes con un volumen relevante.",
          "Es posible separar términos de alta intención del tráfico ambiguo o irrelevante.",
          "La landing responde a la búsqueda y deja claro el siguiente paso.",
        ],
        systemRole:
          "Capturar demanda existente, proteger el presupuesto de búsquedas débiles y enviar cada intención al camino de respuesta más relevante.",
        visual: {
          eyebrow: "Motor de intención",
          headline: "La respuesta correcta para una búsqueda activa.",
          detail: "Intención → mensaje relevante → conversión",
          labels: ["Búsqueda", "Relevancia", "Acción"],
        },
      },
      tiktok: {
        name: "TikTok Ads",
        network: "Descubrimiento pago en video corto",
        role: "Crear descubrimiento y nueva demanda",
        title: "Gana atención antes de que el cliente piense en buscar.",
        description:
          "TikTok puede abrir demanda con contenido ágil que se siente natural en la plataforma. Tiene sentido cuando la oferta se puede demostrar, explicar o volver culturalmente relevante en video corto y existe capacidad para seguir produciendo y aprendiendo.",
        bestWhen: [
          "La audiencia ya descubre productos, servicios o ideas por medio de video.",
          "La oferta tiene ganchos, demostraciones o historias que funcionan en formato corto.",
          "El negocio puede sostener un ritmo constante de pruebas creativas.",
        ],
        systemRole:
          "Crear atención, probar mensajes rápido y convertir el descubrimiento en un siguiente paso medible antes de que exista una búsqueda activa.",
        visual: {
          eyebrow: "Descubrimiento creativo",
          headline: "Gancho. Atención. Siguiente acción.",
          detail: "Contenido nativo → señal de atención → respuesta",
          labels: ["Gancho", "Prueba", "Siguiente paso"],
        },
      },
    },
  },
  decision: {
    eyebrow: "Selección de canales",
    title: "Primero encaje. Después inversión.",
    description:
      "Una recomendación de plataforma debe sostenerse en una conversación de negocio, no solo en una plantilla de medios.",
    inputs: [
      {
        title: "Cliente",
        body: "Quién compra, quién influye y dónde presta atención.",
      },
      {
        title: "Oferta",
        body: "Qué se vende y por qué alguien debería actuar ahora.",
      },
      {
        title: "Intención",
        body: "Si la demanda ya existe o primero hay que crearla.",
      },
      {
        title: "Mercado",
        body: "Geografía, idioma, competencia y volumen alcanzable.",
      },
      {
        title: "Rentabilidad",
        body: "Presupuesto, margen, ciclo de venta y costo de captación aceptable.",
      },
      {
        title: "Contenido",
        body: "Los activos, la evidencia y la capacidad de prueba disponibles.",
      },
    ],
    conclusion:
      "Podemos recomendar un canal prioritario, sumar un segundo más adelante o esperar hasta que la oferta, la landing o la medición estén listas. La estrategia también consiste en saber qué no conviene financiar todavía.",
  },
  management: {
    eyebrow: "Captación gestionada",
    title:
      "Una campaña es un sistema de aprendizaje, no una configuración única.",
    description:
      "DigitalFace dirige el ritmo operativo desde la pregunta comercial inicial hasta la siguiente decisión de presupuesto.",
    stages: [
      {
        number: "01",
        title: "Definir el objetivo de negocio",
        description:
          "Acordamos cliente, oferta, conversión, geografía, rentabilidad y criterios de decisión antes de elegir tácticas.",
        outputs: [
          "Brief de captación",
          "Recomendación de canal",
          "Plan de medición",
        ],
      },
      {
        number: "02",
        title: "Preparar el camino de conversión",
        description:
          "Revisamos propiedad de cuentas, tracking, experiencia de la landing y qué sucede después de cada respuesta.",
        outputs: [
          "Estado de cuentas",
          "Configuración de tracking",
          "Revisión de la landing",
        ],
      },
      {
        number: "03",
        title: "Construir la arquitectura",
        description:
          "Estructuramos campañas, audiencias o palabras clave, mensajes, dirección creativa, presupuestos y prioridades de prueba.",
        outputs: ["Campañas", "Copy y dirección creativa", "Matriz de pruebas"],
      },
      {
        number: "04",
        title: "Activar, observar y probar",
        description:
          "Monitoreamos entrega, búsquedas, audiencias, señales creativas y calidad de conversión sin reaccionar al ruido.",
        outputs: [
          "Control de lanzamiento",
          "Pruebas de oferta y mensaje",
          "Control de presupuesto",
        ],
      },
      {
        number: "05",
        title: "Optimizar hacia el negocio",
        description:
          "Usamos los mejores datos disponibles de consultas, ventas y citas para reasignar presupuesto y elegir la siguiente prueba.",
        outputs: [
          "Optimización continua",
          "Reportes claros",
          "Próximas acciones",
        ],
      },
    ],
  },
  measurement: {
    eyebrow: "Jerarquía de medición",
    title: "Lee los datos de plataforma. Decide para el negocio.",
    description:
      "Los clics, las impresiones y las reproducciones explican cómo se comporta la pauta. Son valiosos cuando ayudan a mejorar un resultado comercial.",
    dashboardLabel: "Tablero de señales de captación",
    primaryTitle: "Optimizar hacia",
    primary: [
      "Consultas calificadas",
      "Captación de clientes",
      "Citas cuando son relevantes",
      "Costo de captación",
    ],
    supportingTitle: "Usar como señales de apoyo",
    supporting: [
      "Alcance",
      "Impresiones",
      "Clics",
      "CTR",
      "CPC",
      "Interacción con video",
    ],
    supportingNote:
      "Estas señales muestran dónde investigar. Por sí solas no definen el éxito.",
    note: "La atribución depende de las plataformas, el acceso al tracking y la calidad de los datos posteriores en el CRM o las ventas. Tu equipo debe mantener los resultados reales al día; un reporte no puede crear certeza que los datos no contienen.",
  },
  scope: {
    eyebrow: "Qué gestiona DigitalFace",
    title: "El trabajo entre un presupuesto y un canal de captación útil.",
    description:
      "El alcance se diseña según el plan de canales, pero una gestión puede cubrir todo el camino siguiente.",
    items: [
      {
        title: "Estrategia",
        body: "Selección de canales, objetivos, audiencias, intención, geografía y lógica de presupuesto.",
      },
      {
        title: "Construcción de campañas",
        body: "Estructura de cuentas, campañas, grupos, audiencias, palabras clave y exclusiones.",
      },
      {
        title: "Mensajes + creatividad",
        body: "Copy, ganchos, ofertas, briefs, variaciones y un ritmo práctico de pruebas.",
      },
      {
        title: "Tracking de conversiones",
        body: "Etiquetas, eventos, revisión de analítica y atribución dentro del acceso disponible.",
      },
      {
        title: "Análisis de conversión",
        body: "Landings, formularios, llamadas, mensajes y el paso hacia CRM o seguimiento comercial.",
      },
      {
        title: "Gestión continua",
        body: "Monitoreo, pruebas, asignación de presupuesto, optimización, reportes y decisiones siguientes.",
      },
    ],
    ecosystemTitle:
      "La pauta es el motor de captación; no es toda la compañía.",
    ecosystemBody:
      "Cuando tiene sentido, DigitalFace conecta la pauta con landings, CRM, seguimiento automatizado, conversaciones con IA y agendamiento. Esas capacidades fortalecen el sistema publicitario sin convertir esta página en una venta de servicios que no necesitas.",
    ecosystemCta: "Ver el sistema completo de DigitalFace",
  },
  services: {
    eyebrow: "Elige tu punto de partida",
    title: "Selecciona un canal o pídenos una recomendación.",
    description:
      "Añade las plataformas que quieres conversar. Si aún no sabes cuál elegir, usa la propuesta a medida y empezamos por el encaje del canal.",
    cards: {
      meta: {
        name: "Meta Ads",
        role: "Facebook + Instagram",
        description:
          "Audiencias, creatividad y retargeting para generar demanda dentro del feed.",
      },
      google: {
        name: "Google Ads",
        role: "Búsquedas de alta intención",
        description:
          "Palabras clave, campañas y landings para capturar la demanda que ya existe.",
      },
      tiktok: {
        name: "TikTok Ads",
        role: "Descubrimiento en video corto",
        description:
          "Pruebas creativas nativas para generar atención, descubrimiento y respuesta medible.",
      },
    },
    pricingTitle: "La gestión se cotiza después de definir el plan de canales.",
    pricingBody:
      "Confirmamos plataformas, mercados, ofertas, inversión, necesidades creativas y tracking antes de cotizar. Tu propuesta refleja el trabajo acordado en lugar de una tarifa genérica.",
    budgetTitle: "La inversión en pauta se paga por separado.",
    budgetBody:
      "Normalmente pagas Meta, Google o TikTok directamente desde cuentas y activos del cliente. La tarifa de DigitalFace cubre el alcance acordado de estrategia, configuración y gestión.",
    requestCta: "Revisar mi solicitud de servicios",
    proposalCta: "Solicitar recomendación de canales",
  },
  faq: {
    eyebrow: "Preguntas sobre pauta",
    title: "Las decisiones detrás del plan de medios.",
    items: [
      {
        question: "¿Necesito Meta, Google y TikTok al mismo tiempo?",
        answer:
          "No. Recomendamos la mezcla mínima que tenga sentido estratégico y económico. Puede ser una plataforma prioritaria, una secuencia por etapas o un plan más amplio cuando la evidencia y el presupuesto lo justifican.",
      },
      {
        question:
          "¿La inversión en pauta está incluida en la tarifa de DigitalFace?",
        answer:
          "No. La inversión publicitaria se paga por separado y normalmente va directo a Meta, Google o TikTok desde cuentas del cliente. La tarifa de estrategia y gestión de DigitalFace se define aparte.",
      },
      {
        question: "¿Qué incluye la gestión continua de campañas?",
        answer:
          "El alcance acordado puede incluir monitoreo, revisión de búsquedas o audiencias, pruebas creativas y de mensajes, asignación de presupuesto, análisis de conversión, reportes y próximas acciones recomendadas.",
      },
      {
        question:
          "¿DigitalFace puede trabajar con nuestras cuentas publicitarias actuales?",
        answer:
          "Sí, cuando el acceso y la propiedad están claros. Revisamos estructura, activos de medición, audiencias e historial antes de decidir qué se conserva, qué se corrige y qué se debe reconstruir.",
      },
      {
        question: "¿Pueden garantizar leads, ingresos o ROAS?",
        answer:
          "No. Los resultados dependen de la oferta, el mercado, el presupuesto, la competencia, el contenido, el camino de conversión y el seguimiento comercial. Gestionamos y optimizamos hacia objetivos acordados sin prometer un resultado que controla el mercado.",
      },
      {
        question: "¿Cómo deciden con qué plataforma empezar?",
        answer:
          "Evaluamos el cliente objetivo, la oferta, la geografía, la demanda existente, la rentabilidad, el presupuesto, la capacidad creativa y el estado de la medición. Después explicamos por qué un canal debe —o no debe— recibir la primera inversión.",
      },
    ],
  },
  cta: {
    eyebrow: "Convierte la pauta en un canal gestionado",
    title:
      "Empieza por el resultado de negocio. Nosotros volvemos desde ahí hasta el plan de medios.",
    description:
      "Cuéntanos qué vendes, quién debería comprarlo y cómo se ve una conversión valiosa. Hablaremos del canal inicial correcto y del alcance necesario para gestionarlo profesionalmente.",
    primaryCta: "Agendar una llamada sobre pauta",
    secondaryCta: "Enviar una solicitud a medida",
  },
};

export const paidAdvertisingContent: Record<Locale, typeof en> = { en, es };
export type PaidAdvertisingContent = typeof en;
