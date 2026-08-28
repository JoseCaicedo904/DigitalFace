import type { IndustryLocaleBundle } from "./industryTypes";

export const industryContentEs: IndustryLocaleBundle = {
  ui: {
    header: {
      bookAssessment: "Agendar diagnóstico",
      logoAlt: "DigitalFace Marketing",
    },
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      moreLabel: "Más de DigitalFace",
      homeLink: "Sistemas de captación de pacientes para clínicas",
      systemLink: "Cómo funciona el sistema de captación de pacientes",
      plansLink: "Planes y precios",
      otherIndustriesLabel: "Otros tipos de clínica",
    },
    heroVisual: {
      label: "Vista del sistema en vivo",
      stage: "Etapa",
      bilingual: "Inglés y español",
      handover: "Listo para traspaso a tu equipo",
    },
    heroMedia: {
      eyebrow: "Confianza antes de la conversión",
      title:
        "Un momento visual de alto nivel, construido sobre el recorrido real del paciente.",
    },
    workflowOverlay:
      "La tecnología organiza la oportunidad. Tu equipo se queda con la relación.",
    capabilitiesDisclaimer:
      "DigitalFace automatiza la comunicación administrativa y los procesos del negocio. La responsabilidad clínica siempre es de los profesionales autorizados.",
    packages: {
      eyebrow: "Tres niveles de crecimiento",
      description:
        "Todos los paquetes los implementa y administra DigitalFace. Abre cualquier punto para ver el alcance real detrás del titular.",
      mostPopular: "Más elegido",
      perMonth: "/mes",
      expandLabel: "Abre cualquier punto",
      idealFor: "Ideal para",
      customProposal: "Solicitar propuesta a la medida",
      footnote:
        "La inversión en pauta la pagas tú directamente. La mensajería, el consumo de IA, la telefonía y consumos poco habituales de terceros pueden facturarse aparte según el alcance aprobado. La producción profesional de foto y video no está incluida.",
    },
    proposalBand: {
      eyebrow: "Más allá del paquete estándar",
    },
    proof: {
      eyebrow: "Sistemas entregados",
      title: "Experiencia real de operación detrás del sistema",
      description:
        "Hoy hay dos sistemas de clientes activos. Muestran las capacidades de comunicación, agendamiento, CRM y traspaso humano que usan estos paquetes.",
      activeLabel: "Cliente activo",
      slotLabel: "Espacio de cliente",
      slotTitle: "Reservado para la próxima historia de crecimiento",
      slotDescription:
        "Este espacio queda vacío hasta verificar y aprobar el resultado de un nuevo cliente.",
    },
    faq: {
      eyebrow: "Antes de agendar",
    },
    booking: {
      eyebrow: "¿Hablamos?",
      ctaLabel: "Elige un horario",
      customScopeLabel: "Alcance a la medida",
      privacyNote:
        "El formulario final debe pedir solo lo necesario para definir el alcance y enlazar a la política de privacidad publicada.",
    },
    mobileCta: "Agendar diagnóstico",
  },

  clientStories: {
    diego: {
      id: "diego",
      name: "Dr. Diego Sinisterra",
      sector: "Medicina estética",
      summary:
        "Un sistema conectado de comunicación con pacientes y gestión de citas, construido alrededor del proceso de valoración estética.",
      delivered: [
        "Comunicación bilingüe con pacientes mediante IA",
        "Agendamiento y automatización del ciclo de citas",
        "Motor de respuesta a comentarios en Facebook e Instagram",
        "Control en el CRM, manejo de errores y traspaso al equipo",
      ],
    },
    jennifer: {
      id: "jennifer",
      name: "Dra. Jennifer Sinisterra",
      sector: "Odontología estética y pacientes internacionales",
      summary:
        "Un sistema bilingüe de admisión de pacientes que conecta las conversaciones de WhatsApp, la visibilidad en el CRM, la recepción de material y la revisión humana.",
      delivered: [
        "Comunicación con IA en inglés y español",
        "Recepción de fotos y documentos del paciente",
        "Sincronización entre Chatwoot, CRM y Drive",
        "Tareas de revisión humana y traspaso controlado de la IA",
      ],
    },
  },

  industries: {
    "dental-practices": {
      navLabel: "Clínicas Odontológicas",
      industryLabel: "Sistema de Crecimiento Odontológico",
      metadata: {
        title:
          "Marketing para Clínicas Dentales y Captación de Pacientes | DigitalFace Marketing",
        description:
          "Convierte las consultas de implantes, carillas y diseño de sonrisa en valoraciones agendadas. DigitalFace opera la pauta, el seguimiento bilingüe con IA y el agendamiento de clínicas odontológicas en Estados Unidos y Latinoamérica.",
      },
      hero: {
        eyebrow: "DigitalFace para clínicas odontológicas",
        title: "Convierte más consultas dentales en valoraciones agendadas.",
        description:
          "Un solo sistema administrado que conecta la pauta odontológica, la comunicación con el paciente, el seguimiento automático, el agendamiento de valoraciones y la visibilidad del proceso.",
        primaryCta: "Agenda tu diagnóstico odontológico",
        secondaryCta: "Ver el sistema dental",
        visualTitle: "Recorrido de una consulta dental",
        visualStages: [
          "Nueva consulta por carillas registrada",
          "Respuesta bilingüe enviada",
          "Oportunidad de valoración creada",
        ],
      },
      stats: [
        { value: "24/7", label: "Cobertura de consultas" },
        { value: "EN + ES", label: "Comunicación bilingüe" },
        { value: "Una vista", label: "Cada oportunidad registrada" },
      ],
      problem: {
        eyebrow: "La brecha de conversión",
        title:
          "Puede que tu clínica no necesite más contactos, sino una mejor forma de convertir los que ya llegan.",
        description:
          "Una decisión odontológica casi nunca se toma en un solo mensaje. DigitalFace mantiene cada consulta organizada y avanzando mientras tu equipo clínico se queda con los pacientes.",
        items: [
          {
            title: "Primera respuesta lenta",
            description:
              "Las consultas por implantes, carillas y diseño de sonrisa se enfrían mientras tu equipo está en el sillón.",
          },
          {
            title: "Información del paciente dispersa",
            description:
              "Fotos, intereses de tratamiento, notas y conversaciones terminan repartidos en bandejas de entrada desconectadas.",
          },
          {
            title: "Seguimiento manual de valoraciones",
            description:
              "El equipo persigue a pacientes que preguntaron algo pero nunca eligieron un horario para su valoración.",
          },
          {
            title: "Conversaciones de financiación sin criterio",
            description:
              "La información general de pagos y las preguntas de cada caso no se manejan igual dos veces seguidas.",
          },
          {
            title: "Valoraciones perdidas",
            description:
              "Confirmaciones, recordatorios y reprogramaciones inconsistentes dejan huecos evitables en la agenda.",
          },
          {
            title: "Sin línea entre campaña y valoración",
            description:
              "La clínica ve totales de contactos pero no logra conectar las campañas con las valoraciones agendadas.",
          },
        ],
      },
      journey: {
        eyebrow: "Recorrido del paciente odontológico",
        title:
          "Del interés en un tratamiento a la valoración, con la persona correcta en el momento correcto.",
        description:
          "El sistema automatiza la conversación administrativa y mantiene intactos los límites clínicos en todo el recorrido.",
        steps: [
          {
            label: "Consulta registrada",
            description:
              "Un paciente responde a una campaña de implantes, carillas, diseño de sonrisa o tratamiento general.",
          },
          {
            label: "Respuesta inmediata",
            description:
              "El paciente recibe una respuesta en inglés o español mientras la oportunidad entra al CRM.",
          },
          {
            label: "Interés organizado",
            description:
              "El interés de tratamiento, los datos administrativos y el material que envía el paciente quedan unidos al registro.",
          },
          {
            label: "Revisión humana cuando se requiere",
            description:
              "Las preguntas clínicas, los temas de pago de cada caso y las excepciones pasan a la persona correcta del equipo.",
          },
          {
            label: "Ciclo de la valoración administrado",
            description:
              "Agendamiento, recordatorios, reprogramación, recuperación de inasistencias y seguimiento largo salen de un mismo proceso.",
          },
        ],
      },
      capabilities: {
        eyebrow: "Dentro del sistema",
        title:
          "Construido alrededor de cómo una clínica moderna atrae y acompaña a sus pacientes",
        description:
          "La infraestructura de conversión que tu clínica necesita, sin pedirle a tu equipo que administre herramientas sueltas.",
        items: [
          {
            title: "Captación de pacientes odontológicos",
            description:
              "Estrategia de campañas para implantes, carillas, diseño de sonrisa, valoraciones y servicios de alto valor seleccionados.",
          },
          {
            title: "Concierge dental con IA",
            description:
              "Respuestas administrativas bilingües basadas en información aprobada por la clínica, con reglas claras de traspaso.",
          },
          {
            title: "Recepción de fotos y casos",
            description:
              "El material y los datos del paciente quedan organizados para tu equipo, sin convertir la IA en un clínico.",
          },
          {
            title: "Flujos de valoración",
            description:
              "Disponibilidad, agendamiento, confirmaciones, recordatorios, reprogramación y cancelaciones funcionan juntos.",
          },
          {
            title: "Proceso visible y revisión humana",
            description:
              "Cada oportunidad tiene etapa visible, historial, responsable y una ruta de escalamiento.",
          },
          {
            title: "Recuperación y reactivación",
            description:
              "Las consultas sin respuesta, las inasistencias y los pacientes antiguos reciben un seguimiento estructurado.",
          },
        ],
      },
      systemIntro: {
        eyebrow: "Un sistema de pacientes conectado",
        title: "Recibir la consulta es apenas el comienzo.",
        description:
          "Una clínica llena sus sillas cuando tres partes siguen conectadas: llegar a personas que ya están evaluando un tratamiento, responderles mientras el interés está vivo y mantener visible cada oportunidad de valoración hasta que quede agendada.",
        closing:
          "Genera consultas de tratamiento. Llévalas hasta la valoración. Mantén visible el recorrido del paciente.",
        stages: [
          {
            number: "01",
            label: "Atraer",
            title: "Genera consultas de tratamiento",
            description:
              "Llega a personas que ya están investigando implantes, carillas y diseño de sonrisa, y convierte esa atención en una consulta real.",
          },
          {
            number: "02",
            label: "Convertir",
            title: "Llévalas hasta la valoración",
            description:
              "Responde en segundos, organiza lo que el paciente está pidiendo y guíalo hacia un horario de valoración.",
          },
          {
            number: "03",
            label: "Gestionar",
            title: "Mantén el control de la clínica",
            description:
              "Origen, interés de tratamiento, historial, estado y siguiente paso quedan juntos para tu recepción.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Atraer",
        title:
          "Mira cómo un anuncio de carillas se vuelve una solicitud de valoración.",
        description:
          "Una campaña dental es fácil de juzgar por los clics. Lo que define el mes es el minuto siguiente: si la persona recibe una razón para responder y si lo que dice llega a un lugar donde tu equipo pueda trabajarlo.",
        ctaLabel: "Agenda tu diagnóstico odontológico",
        phoneCaption: "Anuncio y solicitud de ejemplo",
        bridge:
          "La solicitud queda en tu proceso con el tratamiento anotado. Abajo, esa misma consulta recibe respuesta y termina agendada.",
        stages: [
          {
            title: "Llega a alguien que ya está evaluando el tratamiento",
            description:
              "Implantes, carillas y diseño de sonrisa aparecen frente a personas que ya los estaban buscando, en inglés o en español.",
          },
          {
            title: "La oferta da un motivo para tocar el anuncio",
            description:
              "Una valoración que el paciente puede imaginar, en lugar de un teléfono para llamar después, cuando el interés ya se enfrió.",
          },
          {
            title: "El interés de tratamiento viene incluido",
            description:
              "El paciente dice qué está evaluando y dónde ubicarlo, así nadie empieza la conversación desde cero.",
          },
          {
            title: "La solicitud queda lista para tu equipo",
            description:
              "Entra al mismo proceso que el resto de las consultas, con el tratamiento, el idioma y el contacto ya anotados.",
          },
        ],
        script: {
          clockLabel: "8:12",
          sponsoredLabel: "Publicidad",
          posts: [
            {
              author: "Sofía L.",
              meta: "1 h",
              caption: "Por fin pinté la cocina. Solo me tomó un año.",
            },
            {
              author: "Martín R.",
              meta: "3 h",
              caption: "Otra noche de juegos. Seguimos invictos.",
            },
            {
              author: "Lucía T.",
              meta: "5 h",
              caption: "Día de playa con los primos.",
            },
          ],
          form: {
            subtitle: "Solicitud de valoración",
            intentQuestion: "¿Qué estás evaluando?",
            contactQuestion: "¿Dónde te contacta la clínica?",
            nameLabel: "Nombre",
            phoneLabel: "WhatsApp",
            submitLabel: "Enviar",
            sentTitle: "Solicitud enviada",
            sentNote:
              "La clínica ya tiene tus datos y te escribe en un momento.",
            systemLabel: "En tu sistema DigitalFace",
            statuses: [
              "Nueva solicitud de valoración",
              "Interés de tratamiento guardado",
              "Listo para seguimiento",
            ],
          },
          ads: [
            {
              market: "dental",
              business: "Lumina Dental Studio",
              caption:
                "Llevas tiempo pensándolo. Ven y descubre qué necesitaría realmente tu sonrisa.",
              offer: "Estudio de sonrisa con el doctor",
              ctaLabel: "Agendar",
              creativeEyebrow: "Diseño de sonrisa",
              creativeTitle: "Conoce el plan antes de empezar",
              options: ["Carillas", "Blanqueamiento", "Todavía no lo sé"],
              choice: 0,
              lead: { name: "Emily Carter", phone: "+57 320 555 0142" },
            },
            {
              market: "dental",
              business: "Lumina Dental Studio",
              caption:
                "Un diente que falta cambia cómo comes y cómo sonríes. Pregunta qué implicaría un implante en tu caso.",
              offer: "Valoración de implantes",
              ctaLabel: "Más información",
              creativeEyebrow: "Implantes dentales",
              creativeTitle: "Vuelve a morder y a sonreír igual",
              options: ["Un diente", "Varios dientes", "Arcada completa"],
              choice: 1,
              lead: { name: "Jorge Medina", phone: "+57 315 555 0164" },
            },
          ],
          transcriptLabel:
            "Anuncio odontológico y solicitud de valoración de ejemplo, mostrados como ilustración.",
        },
      },
      conversationDemo: {
        eyebrow: "02 · Convertir",
        title:
          "Una pregunta por implantes un sábado en la mañana, agendada antes del lunes.",
        description:
          "Las decisiones dentales casi nunca se cierran en un mensaje. Esta es la misma consulta dentro del sistema dental: respondida con la clínica cerrada, con la foto, el interés de tratamiento y la pregunta de financiación ya organizados antes de que alguien de tu equipo la abra.",
        ctaLabel: "Agenda tu diagnóstico odontológico",
        phoneCaption: "Conversación de ejemplo",
        stages: [
          {
            title: "El interés de tratamiento recibe respuesta",
            description:
              "Las consultas por implantes, carillas y diseño de sonrisa quedan atendidas aunque tu equipo esté en el sillón.",
          },
          {
            title: "La foto y los datos quedan juntos",
            description:
              "Imágenes, interés de tratamiento y notas de admisión llegan a una sola ficha, no a tres bandejas de entrada.",
          },
          {
            title: "Las preguntas administrativas se responden igual siempre",
            description:
              "Financiación, proceso y disponibilidad salen desde lo que tu clínica aprobó, cada vez.",
          },
          {
            title: "Al doctor le llega el caso, no el trabajo repetitivo",
            description:
              "Las preguntas clínicas y las de cada caso llegan a tu equipo con la valoración ya agendada.",
          },
        ],
        script: {
          contact: "Tu Clínica",
          status: "Responde en segundos",
          typingStatus: "escribiendo…",
          clockLabel: "8:27",
          dayLabel: "Sábado · 8:24 a. m.",
          composerPlaceholder: "Mensaje",
          transcriptLabel:
            "Conversación de ejemplo entre un paciente potencial y el asistente automatizado de una clínica odontológica.",
          patientLabel: "Paciente",
          clinicLabel: "Clínica",
          steps: [
            {
              kind: "patient",
              stage: 0,
              time: "8:24 a. m.",
              pauseMs: 700,
              text: "¡Buenos días! Me faltan dos molares abajo. ¿Ustedes hacen implantes?",
            },
            {
              kind: "assistant",
              stage: 0,
              time: "8:24 a. m.",
              pauseMs: 600,
              typingMs: 1400,
              text: "Buenos días, Andrés. Sí, los implantes son uno de nuestros tratamientos principales. Si nos envías una foto de la zona, la dejo en tu ficha para que el doctor la vea antes de tu cita.",
            },
            {
              kind: "patient",
              stage: 1,
              time: "8:25 a. m.",
              pauseMs: 2400,
              attachment: "molares-inferiores.jpg",
              text: "Aquí está. ¿También manejan planes de pago?",
            },
            {
              kind: "slots",
              stage: 2,
              time: "8:26 a. m.",
              pauseMs: 600,
              typingMs: 1400,
              text: "Ya quedó en tu ficha, gracias. Sí manejamos financiación, y el doctor revisa contigo el plan para tu caso en la valoración. Estos horarios están libres:",
              options: [
                "Lun · 9:00 a. m.",
                "Mar · 4:30 p. m.",
                "Mié · 11:15 a. m.",
              ],
            },
            {
              kind: "choice",
              stage: 2,
              time: "8:27 a. m.",
              pauseMs: 2500,
              option: 1,
              text: "El martes a las 4:30, por favor.",
            },
            {
              kind: "confirmation",
              stage: 3,
              time: "8:27 a. m.",
              pauseMs: 600,
              typingMs: 1200,
              title: "Valoración agendada",
              when: "Martes, 4:30 p. m.",
              service: "Valoración de implantes · 45 min",
              note: "Tu foto y tu pregunta de financiación ya están en la ficha, así el doctor revisa tu caso antes de que llegues.",
            },
          ],
        },
      },
      crmPipelineDemo: {
        eyebrow: "03 · Gestionar",
        title: "Ten claro en qué punto está cada consulta de tratamiento.",
        description:
          "Después de responder, tu equipo todavía necesita ver el caso. El origen, el tratamiento, la foto, la pregunta de pago y el horario solicitado quedan en una sola ficha, así nadie tiene que reconstruir la historia leyendo el chat.",
        ctaLabel: "Agenda tu diagnóstico odontológico",
        boardCaption: "Recorrido de paciente de ejemplo",
        bridge:
          "Atraer, convertir y gestionar: un solo recorrido del paciente con un siguiente paso claro en cada etapa.",
        stages: [
          {
            title: "Consulta nueva",
            description:
              "La oportunidad aparece apenas el paciente escribe, también el fin de semana.",
          },
          {
            title: "Contactado",
            description:
              "La primera respuesta queda a la vista de recepción sin abrir el chat.",
          },
          {
            title: "Interés de tratamiento",
            description:
              "Lo que el paciente quiere, y lo que envió, queda anotado en la ficha.",
          },
          {
            title: "Valoración solicitada",
            description:
              "El equipo ve el horario pedido y sabe exactamente qué confirmar.",
          },
        ],
        script: {
          workspaceLabel: "Oportunidades de pacientes",
          liveLabel: "Organizado",
          boardLabel: "Avance de la consulta",
          detailsLabel: "Lo que tu equipo ya sabe",
          activityLabel: "Actividad",
          nextStepLabel: "Siguiente paso",
          movedLabel: "Avanzó",
          stageLabel: "Etapa",
          ofLabel: "de",
          lead: {
            name: "Jorge Medina",
            initials: "JM",
            summary: "Nueva consulta de tratamiento",
            channel: "Consulta por WhatsApp",
          },
          stages: [
            {
              label: "Consulta nueva",
              cardStatus: "Recién recibida",
              activity: "Consulta recibida un sábado",
              nextStep: "Enviar la primera respuesta",
              details: [{ label: "Origen", value: "Meta Ads" }],
            },
            {
              label: "Contactado",
              cardStatus: "Conversación iniciada",
              activity: "Respondida con la clínica cerrada",
              nextStep: "Confirmar qué necesita el paciente",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Canal", value: "WhatsApp" },
              ],
            },
            {
              label: "Interés de tratamiento",
              cardStatus: "Interés identificado",
              activity: "Interés y foto guardados",
              nextStep: "Ofrecer horarios de valoración",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Canal", value: "WhatsApp" },
                { label: "Interés", value: "Implante dental" },
                { label: "Adjunto", value: "Foto del paciente" },
              ],
            },
            {
              label: "Valoración solicitada",
              cardStatus: "Lista para confirmar",
              activity: "Horario de valoración solicitado",
              nextStep:
                "Confirmar el martes a las 4:30 y enviar el recordatorio",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Interés", value: "Implante dental" },
                { label: "Preguntó por", value: "Formas de pago" },
                { label: "Solicitó", value: "Martes 4:30 p. m." },
              ],
            },
          ],
          transcriptLabel:
            "Recorrido de paciente de ejemplo: una consulta odontológica se convierte en una oportunidad de valoración organizada con un siguiente paso claro.",
        },
      },
      packagesTitle:
        "Elige el nivel de crecimiento odontológico que corresponde a tu clínica hoy.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Captación de Pacientes Dentales",
          price: "$790",
          setup: "$597 de implementación única",
          description:
            "Genera consultas dentales, organiza cada oportunidad y haz seguimiento automático.",
          idealFor:
            "Clínicas que necesitan una base confiable de captación y seguimiento antes de sumar IA.",
          highlights: [
            "Un canal prioritario de captación",
            "Página o formulario de conversión dental",
            "CRM, seguimiento, agendamiento y recordatorios",
          ],
          details: [
            {
              title: "Captación odontológica administrada",
              description:
                "Elegimos y administramos un canal prioritario, normalmente Meta o Google, según el tratamiento, el mercado, la oferta y la intención del paciente.",
            },
            {
              title: "Ruta de conversión por tratamiento",
              description:
                "Una landing page o formulario alineado al servicio dental elegido y a la promesa que hace el anuncio.",
            },
            {
              title: "Un solo proceso de oportunidades",
              description:
                "Cada formulario, consulta de anuncio y canal conectado crea una oportunidad organizada, con fuente y etapa visibles.",
            },
            {
              title: "Seguimiento automático inmediato",
              description:
                "Mensajes por SMS, correo o WhatsApp confirman la consulta y guían al paciente hacia el siguiente paso.",
            },
            {
              title: "Calendario de valoraciones y recordatorios",
              description:
                "Enlaces para agendar, secuencias de confirmación, recordatorios e instrucciones de reprogramación reducen la coordinación manual.",
            },
            {
              title: "Revisión mensual de resultados",
              description:
                "Revisamos fuentes de contacto, actividad de respuesta, oportunidades de valoración y las decisiones de campaña que siguen.",
            },
          ],
          cta: "Empezar con Captación Dental",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Concierge Dental con IA",
          price: "$1,200",
          setup: "$1,097 de implementación única",
          description:
            "Responde a toda hora, organiza el interés del paciente y lleva más consultas hacia una valoración.",
          idealFor:
            "Equipos odontológicos con volumen constante de consultas, preguntas repetitivas o comunicación bilingüe.",
          featured: true,
          highlights: [
            "Todo lo incluido en DigitalFace Capture",
            "Comunicación bilingüe con IA",
            "Calificación, agendamiento y traspaso humano",
          ],
          details: [
            {
              title: "Todo lo incluido en DigitalFace Capture",
              description:
                "Se mantiene toda la base de captación, página de conversión, CRM, seguimiento, calendario, recordatorios y reportes.",
            },
            {
              title: "Conocimiento dental aprobado",
              description:
                "El asistente responde únicamente con información aprobada por la clínica sobre servicios, ubicación, horarios, políticas y temas administrativos.",
            },
            {
              title: "Conversaciones en inglés y español",
              description:
                "El asistente sigue el idioma del paciente y mantiene la conversación consistente de principio a fin.",
            },
            {
              title: "Organización del interés de tratamiento",
              description:
                "El interés en implantes, carillas, diseño de sonrisa o cualquier servicio configurado se registra y sincroniza con el CRM.",
            },
            {
              title: "Apoyo para agendar la valoración",
              description:
                "El asistente guía al paciente hacia los horarios disponibles y acompaña el flujo de agendamiento configurado.",
            },
            {
              title: "Traspaso clínico y de excepciones",
              description:
                "Diagnóstico, viabilidad, tratamiento de cada caso, excepciones de pago, quejas y temas urgentes pasan a una persona.",
            },
            {
              title: "Monitoreo y mejora de la IA",
              description:
                "Revisamos patrones de conversación y respuestas seguras para que el asistente mejore sin cruzar límites clínicos.",
            },
          ],
          cta: "Sumar el Concierge Dental con IA",
        },
        {
          name: "DigitalFace Full Growth",
          nicheName: "Sistema Dental Completo",
          price: "$1,800",
          setup: "$1,597 de implementación única",
          description:
            "Conecta captación multicanal, conversión con IA, reactivación y gestión de crecimiento.",
          idealFor:
            "Clínicas consolidadas listas para impulsar varios tratamientos y administrar todo el recorrido de captación.",
          highlights: [
            "Todo lo incluido en DigitalFace AI",
            "Hasta dos canales de captación",
            "Reactivación, atribución y estrategia de crecimiento",
          ],
          details: [
            {
              title: "Todo lo incluido en DigitalFace AI",
              description:
                "Se mantiene el sistema completo de captación, CRM, automatización, comunicación con IA, citas, traspaso y reportes.",
            },
            {
              title: "Captación multicanal de pacientes",
              description:
                "Hasta dos canales entre Meta, Google u otra plataforma justificada, según la demanda del tratamiento y el presupuesto.",
            },
            {
              title: "Varias campañas de tratamiento",
              description:
                "Las campañas y rutas de conversión pueden cubrir más de un tratamiento prioritario o segmento de paciente dentro del alcance acordado.",
            },
            {
              title: "Reactivación de la base de pacientes",
              description:
                "Segmentos aprobados de consultas antiguas o pacientes reciben campañas estructuradas con ofertas relevantes de la clínica.",
            },
            {
              title: "Recuperación de inasistencias y contactos fríos",
              description:
                "Secuencias configuradas recuperan valoraciones perdidas y consultas que dejaron de responder antes de agendar.",
            },
            {
              title: "Revisión de conversión y atribución",
              description:
                "Seguimos el camino desde la fuente hasta la oportunidad de valoración y mejoramos campañas, páginas y lógica de seguimiento.",
            },
            {
              title: "Estrategia mensual de crecimiento",
              description:
                "Una sesión de trabajo sobre prioridades de tratamiento, decisiones de campaña, conversión y el siguiente ciclo de optimización.",
            },
          ],
          cta: "Construir mi Sistema Dental",
        },
      ],
      faqTitle: "Lo que más nos preguntan las clínicas odontológicas",
      faqDescription:
        "Revisamos tus canales de captación, tu proceso de respuesta, el flujo de valoraciones y el seguimiento antes de recomendarte un paquete.",
      faq: [
        {
          question: "¿El sistema puede comunicarse en inglés y español?",
          answer:
            "Sí. Configuramos la comunicación en inglés y español, y mantenemos cada conversación en el idioma que eligió el paciente.",
        },
        {
          question:
            "¿Los pacientes pueden enviar fotos o información del caso?",
          answer:
            "Sí. El material y los datos del paciente se organizan y se dirigen a tu equipo. El sistema no analiza imágenes ni reemplaza la revisión clínica.",
        },
        {
          question: "¿La IA puede recomendar un tratamiento?",
          answer:
            "No. La IA maneja información administrativa aprobada y registra el interés de tratamiento. El diagnóstico, la viabilidad y las recomendaciones siguen siendo del profesional autorizado.",
        },
        {
          question:
            "¿Nuestro equipo puede tomar el control de una conversación?",
          answer:
            "Sí. El traspaso humano es parte del sistema. Las etiquetas y los controles de responsable pausan la comunicación con IA apenas entra tu equipo.",
        },
        {
          question: "¿Funciona con pacientes internacionales?",
          answer:
            "Sí. Las preguntas frecuentes bilingües, la recepción de material, la preparación de la valoración y la revisión humana pueden cubrir pacientes internacionales dentro del alcance acordado.",
        },
      ],
      booking: {
        title: "Hablemos de tu sistema de captación de pacientes.",
        description:
          "Elige un horario que te acomode para revisar cómo tu clínica odontológica atrae, convierte y gestiona hoy sus oportunidades de pacientes.",
        proposalTitle: "¿Necesitas un flujo dental a la medida?",
        proposalDescription:
          "Pide una propuesta para recepción de fotos, pacientes internacionales, migración de CRM, sedes adicionales u otro proceso propio de tu clínica.",
        proposalCta: "Solicitar propuesta dental a la medida",
      },
    },

    "aesthetic-medicine": {
      navLabel: "Medicina Estética",
      industryLabel: "Sistema de Crecimiento en Medicina Estética",
      metadata: {
        title:
          "Marketing para Medicina Estética y Captación de Pacientes | DigitalFace Marketing",
        description:
          "Convierte el interés por un procedimiento en valoraciones calificadas. DigitalFace opera la pauta, la comunicación bilingüe con IA y la gestión de citas de centros de medicina estética y cirugía plástica, mientras las decisiones clínicas siguen en tu equipo.",
      },
      hero: {
        eyebrow: "DigitalFace para medicina estética y cirugía plástica",
        title:
          "Convierte el interés por un procedimiento en valoraciones calificadas.",
        description:
          "Responde más rápido, organiza lo que pide cada paciente, automatiza el seguimiento administrativo y guía a los interesados hacia la valoración correcta.",
        primaryCta: "Agenda tu diagnóstico estético",
        secondaryCta: "Ver el recorrido del paciente",
        visualTitle: "Recorrido hacia la valoración estética",
        visualStages: [
          "Consulta por procedimiento registrada",
          "Intención del paciente organizada",
          "Ruta de valoración activada",
        ],
      },
      stats: [
        { value: "24/7", label: "Cobertura de consultas" },
        { value: "EN + ES", label: "Comunicación bilingüe" },
        { value: "Una vista", label: "Cada oportunidad registrada" },
      ],
      problem: {
        eyebrow: "La brecha hacia la valoración",
        title:
          "Una consulta por un procedimiento de alto valor es demasiado importante para perderla por una respuesta tardía.",
        description:
          "DigitalFace maneja todo el recorrido administrativo alrededor de la valoración y mantiene claros los límites clínicos.",
        items: [
          {
            title: "Consultas fuera de horario",
            description:
              "Los pacientes interesados escriben cuando la recepción está cerrada y esperan respuesta de todos modos.",
          },
          {
            title: "Las mismas preguntas, todos los días",
            description:
              "Ubicación, proceso de valoración, financiación, disponibilidad y preparación consumen el día de tu equipo.",
          },
          {
            title: "Interés sin estructura",
            description:
              "Lo que realmente busca cada paciente queda enterrado en un hilo de mensajes en lugar de organizado en el CRM.",
          },
          {
            title: "Preguntas clínicas en el lugar equivocado",
            description:
              "Seguridad, viabilidad, síntomas y recomendaciones de cada caso necesitan escalar de forma confiable a una persona.",
          },
          {
            title: "Abandono antes de la valoración",
            description:
              "Pacientes interesados dejan de responder antes de elegir, confirmar o asistir a la valoración.",
          },
          {
            title: "Sin visibilidad de campaña a valoración",
            description:
              "Los reportes muestran totales de contactos sin mostrar cuáles se convirtieron en oportunidades de valoración.",
          },
        ],
      },
      journey: {
        eyebrow: "Recorrido del paciente estético",
        title:
          "La automatización acompaña la valoración. Las decisiones clínicas siguen siendo del médico.",
        description:
          "Cada paso mejora la respuesta y la organización sin pedirle a la IA que juzgue si un paciente es apto.",
        steps: [
          {
            label: "Interés en el procedimiento registrado",
            description:
              "Un paciente responde a una campaña quirúrgica o no quirúrgica, a tu sitio, a una red social o a una referencia.",
          },
          {
            label: "Respuesta bilingüe inmediata",
            description:
              "La consulta se responde, se registra y entra al proceso de oportunidades del centro.",
          },
          {
            label: "Preguntas administrativas resueltas",
            description:
              "La información aprobada sobre el centro, el proceso de valoración, la ubicación y las políticas se entrega siempre igual.",
          },
          {
            label: "Preguntas clínicas escaladas",
            description:
              "Seguridad, síntomas, viabilidad, recomendaciones de tratamiento y excepciones pasan a personas autorizadas.",
          },
          {
            label: "Valoración y seguimiento administrados",
            description:
              "Agendamiento, recordatorios, reprogramación, citas perdidas e interés a largo plazo quedan visibles y accionables.",
          },
        ],
      },
      capabilities: {
        eyebrow: "Dentro del sistema",
        title:
          "Un sistema de captación pensado para una atención basada en la valoración",
        description:
          "Las campañas y las conversaciones se conectan a un recorrido de citas controlado que tu equipo puede supervisar.",
        items: [
          {
            title: "Campañas por procedimiento",
            description:
              "Campañas y rutas de conversión alineadas a los procedimientos quirúrgicos o no quirúrgicos que quieres hacer crecer.",
          },
          {
            title: "Concierge de pacientes con IA",
            description:
              "Comunicación administrativa aprobada en inglés y español, disponible mucho más allá del horario de recepción.",
          },
          {
            title: "Registro de intención y disposición",
            description:
              "Categoría del procedimiento, idioma, interés en la valoración y datos administrativos configurados quedan organizados.",
          },
          {
            title: "Límites clínicos protegidos",
            description:
              "Viabilidad, diagnóstico, síntomas, complicaciones y consejo médico se dirigen a personas calificadas.",
          },
          {
            title: "Ciclo completo de la valoración",
            description:
              "Disponibilidad, agendamiento, confirmación, recordatorios, cancelación y reprogramación funcionan como un solo proceso.",
          },
          {
            title: "Automatización de consultas en redes",
            description:
              "Los comentarios y mensajes configurados de Facebook e Instagram entran a rutas controladas de respuesta y seguimiento.",
          },
        ],
      },
      systemIntro: {
        eyebrow: "Un sistema de valoraciones conectado",
        title: "Recibir la consulta es lo fácil. Sostenerla no lo es.",
        description:
          "El interés en un procedimiento se convierte en valoración cuando tres partes siguen conectadas: llegar a pacientes que ya están comparando, responder de inmediato lo administrativo y mantener cada caso visible para que nada quede esperando a alguien que está en cirugía.",
        closing:
          "Genera consultas de procedimientos. Llévalas hasta la valoración. Deja las decisiones clínicas en tu equipo.",
        stages: [
          {
            number: "01",
            label: "Atraer",
            title: "Genera consultas de procedimientos",
            description:
              "Llega a pacientes que están investigando los procedimientos que quieres crecer y convierte ese interés en una consulta real.",
          },
          {
            number: "02",
            label: "Convertir",
            title: "Llévalas hasta la valoración",
            description:
              "Responde de inmediato lo administrativo, pasa la pregunta clínica a una persona y aun así ofrece un horario.",
          },
          {
            number: "03",
            label: "Gestionar",
            title: "Mantén cada caso visible",
            description:
              "Origen, interés, historial, estado y siguiente paso quedan juntos para tus coordinadoras.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Atraer",
        title: "Mira cómo un anuncio de un procedimiento llega ya organizado.",
        description:
          "Quien está evaluando un procedimiento casi nunca llama. Toca el anuncio, pregunta y compara. Cuando la pauta y el seguimiento viven en el mismo sistema, ese interés queda registrado con el procedimiento anotado, antes de que alguien en la clínica escriba una sola palabra.",
        ctaLabel: "Agenda tu diagnóstico estético",
        phoneCaption: "Anuncio y solicitud de ejemplo",
        bridge:
          "Así nace la consulta. Lo que pase en los siguientes minutos decide si termina en una valoración.",
        stages: [
          {
            title: "Llega a alguien que ya está comparando",
            description:
              "Tus procedimientos aparecen frente a personas que los están investigando ahora, no ante un público que nunca lo ha pensado.",
          },
          {
            title: "El anuncio ofrece una valoración, no un procedimiento",
            description:
              "El siguiente paso es hablar con tu equipo, que es el compromiso que sí acepta un paciente serio.",
          },
          {
            title: "El interés queda registrado",
            description:
              "Lo que el paciente pregunta, y en qué idioma, llega anotado en el registro y no perdido en un hilo de mensajes.",
          },
          {
            title: "La consulta queda lista para revisión",
            description:
              "Entra al proceso que usan tus coordinadoras, así la primera respuesta ya tiene contexto y las preguntas clínicas llegan a una persona.",
          },
        ],
        script: {
          clockLabel: "9:24",
          sponsoredLabel: "Publicidad",
          posts: [
            {
              author: "Renata C.",
              meta: "2 h",
              caption: "Tres días de lluvia y el perro ya tiene su opinión.",
            },
            {
              author: "Emilio F.",
              meta: "4 h",
              caption: "Café nuevo en el centro. Voy a volver.",
            },
            {
              author: "Paola G.",
              meta: "7 h",
              caption: "Atardecer desde el balcón, sin filtro.",
            },
          ],
          form: {
            subtitle: "Solicitud de valoración",
            intentQuestion: "¿Qué te interesa?",
            contactQuestion: "¿Dónde te contacta la clínica?",
            nameLabel: "Nombre",
            phoneLabel: "WhatsApp",
            submitLabel: "Enviar",
            sentTitle: "Solicitud enviada",
            sentNote:
              "La clínica ya tiene tus datos y una coordinadora te responde.",
            systemLabel: "En tu sistema DigitalFace",
            statuses: [
              "Nueva solicitud de valoración",
              "Interés de procedimiento guardado",
              "Listo para el equipo",
            ],
          },
          ads: [
            {
              market: "aesthetic",
              business: "Nova Aesthetic Clinic",
              caption:
                "Empieza por la valoración. El médico te dice con calma qué vale la pena hacer y qué no.",
              offer: "Valoración con el médico",
              ctaLabel: "Pedir valoración",
              creativeEyebrow: "Medicina estética",
              creativeTitle: "Un plan honesto antes de todo",
              options: ["Inyectables", "Tratamientos de piel", "Otra cosa"],
              choice: 0,
              lead: { name: "Daniela Ortiz", phone: "+57 320 555 0119" },
            },
            {
              market: "aesthetic",
              business: "Nova Aesthetic Clinic",
              caption:
                "Ya hiciste la dieta y el gimnasio. Pregunta qué es realista para esa zona que no cede.",
              offer: "Valoración corporal",
              ctaLabel: "Ver más",
              creativeEyebrow: "Cuerpo y piel",
              creativeTitle: "Qué es realista en tu caso",
              options: [
                "Contorno corporal",
                "Firmeza de piel",
                "Todavía no lo sé",
              ],
              choice: 1,
              lead: { name: "Paula Vega", phone: "+57 310 555 0186" },
            },
          ],
          transcriptLabel:
            "Anuncio de medicina estética y solicitud de valoración de ejemplo, mostrados como ilustración.",
        },
      },
      conversationDemo: {
        eyebrow: "02 · Convertir",
        title:
          "Mira al sistema responder lo que le corresponde y ceder lo que no.",
        description:
          "El valor de la automatización en medicina estética no es que responda todo. Es que responde lo administrativo al instante, reconoce una pregunta clínica y la pone frente a una persona mientras la valoración igual queda agendada.",
        ctaLabel: "Agenda tu diagnóstico estético",
        phoneCaption: "Conversación de ejemplo",
        stages: [
          {
            title: "La consulta no espera al horario de oficina",
            description:
              "Una pregunta por un procedimiento un domingo en la noche recibe la misma respuesta inmediata que una llamada un martes.",
          },
          {
            title: "Información aprobada, entregada igual dos veces",
            description:
              "El proceso de valoración, la preparación y las políticas salen desde lo que tu práctica autorizó.",
          },
          {
            title: "Las preguntas clínicas van a una persona",
            description:
              "Seguridad, candidatura y temas propios de cada caso se escalan a tu equipo en lugar de responderse con automatización.",
          },
          {
            title: "La valoración queda protegida",
            description:
              "La cita, el recordatorio y la pregunta pendiente de la paciente llegan a tu equipo antes de la visita.",
          },
        ],
        script: {
          contact: "Tu Práctica",
          status: "Responde en segundos",
          typingStatus: "escribiendo…",
          clockLabel: "6:45",
          dayLabel: "Domingo · 6:40 p. m.",
          composerPlaceholder: "Mensaje",
          transcriptLabel:
            "Conversación de ejemplo entre una paciente potencial y una práctica de medicina estética, con traspaso al equipo clínico.",
          patientLabel: "Paciente",
          clinicLabel: "Práctica",
          steps: [
            {
              kind: "patient",
              stage: 0,
              time: "6:40 p. m.",
              pauseMs: 700,
              text: "Hola, me interesa un mommy makeover. ¿Cómo funciona la primera cita?",
            },
            {
              kind: "assistant",
              stage: 1,
              time: "6:40 p. m.",
              pauseMs: 600,
              typingMs: 1400,
              text: "Hola Daniela. Empieza con una valoración con el cirujano, de unos 45 minutos, donde revisan tus objetivos, las opciones y la recuperación.",
            },
            {
              kind: "patient",
              stage: 2,
              time: "6:41 p. m.",
              pauseMs: 2400,
              text: "¿Es seguro hacerlo si todavía estoy lactando?",
            },
            {
              kind: "note",
              stage: 2,
              pauseMs: 1500,
              text: "Valentina, del equipo clínico, entró a la conversación",
            },
            {
              kind: "slots",
              stage: 2,
              time: "6:43 p. m.",
              pauseMs: 700,
              typingMs: 1600,
              author: "Valentina · Coordinadora de pacientes",
              text: "Hola Daniela, esa la responde el cirujano según tu caso y la revisa contigo en persona. Estos horarios de valoración están libres:",
              options: [
                "Jue · 3:00 p. m.",
                "Vie · 5:45 p. m.",
                "Lun · 10:30 a. m.",
              ],
            },
            {
              kind: "choice",
              stage: 3,
              time: "6:44 p. m.",
              pauseMs: 2500,
              option: 1,
              text: "El viernes a las 5:45 me sirve.",
            },
            {
              kind: "confirmation",
              stage: 3,
              time: "6:45 p. m.",
              pauseMs: 600,
              typingMs: 1200,
              title: "Valoración confirmada",
              when: "Viernes, 5:45 p. m.",
              service: "Valoración quirúrgica · 45 min",
              note: "Tu pregunta queda en las notas del cirujano para la cita, y el recordatorio sale el día anterior.",
            },
          ],
        },
      },
      crmPipelineDemo: {
        eyebrow: "03 · Gestionar",
        title: "Mira cada caso y de quién está esperando respuesta.",
        description:
          "Las coordinadoras pierden tiempo reconstruyendo lo que el paciente ya preguntó. Aquí el origen, el interés, la pregunta que necesita a un médico y el horario solicitado quedan en una sola ficha, así la clínica siempre sabe a quién le toca.",
        ctaLabel: "Agenda tu diagnóstico estético",
        boardCaption: "Recorrido de paciente de ejemplo",
        bridge:
          "Atraer, convertir y gestionar: un solo recorrido del paciente donde el criterio clínico siempre queda en tu equipo.",
        stages: [
          {
            title: "Consulta nueva",
            description:
              "La oportunidad se crea apenas el paciente pregunta, de día o de noche.",
          },
          {
            title: "Respondida",
            description:
              "Lo administrativo queda resuelto y la respuesta queda registrada.",
          },
          {
            title: "Pasada al médico",
            description:
              "La pregunta clínica queda marcada para una persona en lugar de responderla el sistema.",
          },
          {
            title: "Valoración solicitada",
            description:
              "El horario pedido queda visible mientras la revisión clínica sigue abierta.",
          },
        ],
        script: {
          workspaceLabel: "Oportunidades de pacientes",
          liveLabel: "Organizado",
          boardLabel: "Avance del caso",
          detailsLabel: "Lo que tu equipo ya sabe",
          activityLabel: "Actividad",
          nextStepLabel: "Siguiente paso",
          movedLabel: "Avanzó",
          stageLabel: "Etapa",
          ofLabel: "de",
          lead: {
            name: "Daniela Ortiz",
            initials: "DO",
            summary: "Nueva consulta de procedimiento",
            channel: "Consulta por WhatsApp",
          },
          stages: [
            {
              label: "Consulta nueva",
              cardStatus: "Recién recibida",
              activity: "Consulta recibida fuera de horario",
              nextStep: "Enviar la primera respuesta",
              details: [{ label: "Origen", value: "Meta Ads" }],
            },
            {
              label: "Respondida",
              cardStatus: "Preguntas resueltas",
              activity: "Proceso de valoración explicado",
              nextStep: "Confirmar el procedimiento de interés",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Idioma", value: "Español" },
              ],
            },
            {
              label: "Pasada al médico",
              cardStatus: "Esperando al médico",
              activity: "Pregunta clínica enviada a una persona",
              nextStep: "El médico revisa la pregunta antes de responder",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Idioma", value: "Español" },
                { label: "Interés", value: "Inyectables" },
                { label: "Para revisar", value: "Pregunta clínica" },
              ],
            },
            {
              label: "Valoración solicitada",
              cardStatus: "Lista para confirmar",
              activity: "Horario de valoración solicitado",
              nextStep:
                "Confirmar el jueves a las 10:00 cuando responda el médico",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Interés", value: "Inyectables" },
                { label: "Revisado por", value: "Médico de turno" },
                { label: "Solicitó", value: "Jueves 10:00 a. m." },
              ],
            },
          ],
          transcriptLabel:
            "Recorrido de paciente de ejemplo: una consulta de procedimiento se convierte en una oportunidad de valoración organizada, con la pregunta clínica enviada a una persona.",
        },
      },
      packagesTitle:
        "Elige el nivel de crecimiento estético que corresponde a tu centro hoy.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Captación de Valoraciones Estéticas",
          price: "$790",
          setup: "$597 de implementación única",
          description:
            "Genera consultas por procedimientos, organiza cada oportunidad y automatiza el primer seguimiento.",
          idealFor:
            "Centros estéticos que necesitan una base confiable de captación y seguimiento de valoraciones.",
          highlights: [
            "Un canal prioritario de captación",
            "Ruta de conversión por procedimiento",
            "CRM, seguimiento, agendamiento y recordatorios",
          ],
          details: [
            {
              title: "Captación estética administrada",
              description:
                "Elegimos y administramos un canal prioritario según el procedimiento, la demanda del mercado, el material creativo y la intención del paciente.",
            },
            {
              title: "Página de conversión por procedimiento",
              description:
                "Una landing page o formulario que presenta la valoración con expectativas claras y pasos siguientes definidos.",
            },
            {
              title: "Un solo proceso centralizado",
              description:
                "Cada formulario y consulta de anuncio se convierte en una oportunidad visible con fuente, etapa, responsable e historial.",
            },
            {
              title: "Seguimiento administrativo inmediato",
              description:
                "Mensajes automáticos confirman la consulta y dirigen al paciente a la información aprobada sobre la valoración.",
            },
            {
              title: "Calendario de valoraciones y recordatorios",
              description:
                "Enlaces para agendar, confirmaciones, recordatorios, reprogramación y cancelación reducen el trabajo manual.",
            },
            {
              title: "Revisión mensual de campañas",
              description:
                "Revisamos fuentes de contacto, actividad de respuesta, oportunidades de valoración y las siguientes decisiones de optimización.",
            },
          ],
          cta: "Empezar con Captación de Valoraciones",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Concierge de Pacientes con IA",
          price: "$1,200",
          setup: "$1,097 de implementación única",
          description:
            "Responde a toda hora, organiza la intención del paciente, acompaña el agendamiento y pasa los temas sensibles a tu equipo.",
          idealFor:
            "Centros con consultas constantes por procedimientos o mucha carga de conversaciones bilingües repetitivas.",
          featured: true,
          highlights: [
            "Todo lo incluido en DigitalFace Capture",
            "Comunicación bilingüe con IA",
            "Apoyo a la valoración y traspaso clínico",
          ],
          details: [
            {
              title: "Todo lo incluido en DigitalFace Capture",
              description:
                "Se mantiene la base de captación, página de conversión, CRM, seguimiento automático, calendario, recordatorios y reportes.",
            },
            {
              title: "Conocimiento aprobado del centro",
              description:
                "El asistente usa información aprobada sobre el centro, los procedimientos, el proceso de valoración, la ubicación y las políticas.",
            },
            {
              title: "Respuestas en inglés y español",
              description:
                "La conversación sigue el idioma del paciente sin cambiar de forma inesperada ni mezclar los dos.",
            },
            {
              title: "Registro del interés por procedimiento",
              description:
                "Las categorías configuradas, la intención de valoración y los datos administrativos seguros se sincronizan con el CRM.",
            },
            {
              title: "Apoyo al agendamiento de la valoración",
              description:
                "El asistente guía a los pacientes interesados hacia la disponibilidad y los flujos de agendamiento configurados.",
            },
            {
              title: "Escalamiento clínico humano",
              description:
                "Seguridad, síntomas, viabilidad, consejo médico, quejas y casos poco comunes pasan a personas autorizadas del equipo.",
            },
            {
              title: "Mejora de las conversaciones",
              description:
                "Revisamos respuestas seguras, preguntas frecuentes y motivos de traspaso para mantener la experiencia clara y confiable.",
            },
          ],
          cta: "Sumar el Concierge de Pacientes",
        },
        {
          name: "DigitalFace Full Growth",
          nicheName: "Sistema Estético Completo",
          price: "$1,800",
          setup: "$1,597 de implementación única",
          description:
            "Combina captación multicanal, conversión con IA, reactivación y gestión de crecimiento.",
          idealFor:
            "Centros consolidados listos para escalar campañas por procedimiento y todo el recorrido hacia la valoración.",
          highlights: [
            "Todo lo incluido en DigitalFace AI",
            "Hasta dos canales de captación",
            "Reactivación, atribución y estrategia de crecimiento",
          ],
          details: [
            {
              title: "Todo lo incluido en DigitalFace AI",
              description:
                "Se mantiene el sistema completo de captación, CRM, automatización, comunicación con IA, citas, traspaso clínico y reportes.",
            },
            {
              title: "Captación multicanal",
              description:
                "Hasta dos canales justificados según la demanda del procedimiento, la intención del paciente, la zona, el material creativo y el presupuesto.",
            },
            {
              title: "Varias campañas de valoración",
              description:
                "Las campañas y rutas de conversión pueden cubrir más de un procedimiento prioritario dentro del alcance acordado.",
            },
            {
              title: "Reactivación de interesados",
              description:
                "Las consultas antiguas se pueden segmentar y volver a activar con oportunidades de valoración aprobadas por el centro.",
            },
            {
              title: "De comentario a conversación",
              description:
                "La interacción seleccionada en Facebook e Instagram entra a flujos controlados de respuesta, mensaje directo y captura.",
            },
            {
              title: "Revisión de conversión y atribución",
              description:
                "Conectamos las fuentes de campaña con las etapas de valoración y mejoramos páginas, mensajes y lógica de seguimiento.",
            },
            {
              title: "Estrategia mensual de crecimiento",
              description:
                "Prioridades de procedimiento, desempeño de campañas, flujo de valoraciones y el siguiente ciclo de optimización, revisados en conjunto.",
            },
          ],
          cta: "Construir mi Sistema Estético",
        },
      ],
      faqTitle: "Lo que más nos preguntan los centros de medicina estética",
      faqDescription:
        "Revisamos tus canales de captación, tu proceso de respuesta, el recorrido de valoración, las reglas de traspaso y el seguimiento antes de recomendarte un paquete.",
      faq: [
        {
          question:
            "¿La IA puede decirle a un paciente qué procedimiento le conviene?",
          answer:
            "No. La IA entrega información administrativa aprobada y registra el interés. Las recomendaciones, la viabilidad, el diagnóstico y el consejo médico siguen siendo del profesional autorizado.",
        },
        {
          question:
            "¿El equipo puede tomar el control de conversaciones sensibles?",
          answer:
            "Sí. El traspaso humano y el control de responsables son parte del modelo, así tu equipo entra apenas la conversación se vuelve clínica, urgente o delicada.",
        },
        {
          question: "¿Puede manejar agendamiento y reprogramación?",
          answer:
            "Sí, cuando se conecta a un calendario compatible con disponibilidad configurada. El alcance exacto de agendamiento, confirmación, cancelación y reprogramación se define en la implementación.",
        },
        {
          question: "¿El sistema puede responder consultas de redes sociales?",
          answer:
            "Sí. Los formularios, mensajes y comentarios de Facebook e Instagram se pueden conectar cuando están incluidos en el paquete y el alcance de canales elegido.",
        },
        {
          question: "¿Prometen una cantidad de pacientes o procedimientos?",
          answer:
            "No. Nosotros construimos y administramos el sistema de captación y conversión. Los resultados también dependen de la demanda, el presupuesto, las ofertas, la pertinencia clínica, los precios, la reputación y tu propio proceso de valoración.",
        },
      ],
      booking: {
        title: "Hablemos de tu sistema de crecimiento de pacientes.",
        description:
          "Elige un horario para revisar cómo tu centro puede mejorar la generación de leads, la respuesta, el seguimiento, las citas y la visibilidad de ventas.",
        proposalTitle: "¿Necesitas un flujo estético a la medida?",
        proposalDescription:
          "Pide una propuesta para varias sedes, pacientes internacionales, admisión por procedimiento, automatización en redes u otro proceso de tu centro.",
        proposalCta: "Solicitar propuesta estética a la medida",
      },
    },

    "med-spas": {
      navLabel: "Med Spas",
      industryLabel: "Sistema de Crecimiento para Med Spas",
      metadata: {
        title:
          "Marketing para Med Spas y Agendamiento de Citas | DigitalFace Marketing",
        description:
          "Convierte el interés por un tratamiento en clientes que agendan y regresan. DigitalFace opera la pauta, el agendamiento con IA, la reactivación de membresías y las reseñas de med spas en Estados Unidos y Latinoamérica.",
      },
      hero: {
        eyebrow: "DigitalFace para med spas",
        title:
          "Convierte el interés por un tratamiento en clientes que agendan y regresan.",
        description:
          "Un sistema que conecta la pauta del med spa, la respuesta inmediata, las conversaciones con IA, el agendamiento, la reactivación y la medición de resultados.",
        primaryCta: "Agenda tu diagnóstico para med spa",
        secondaryCta: "Ver el sistema para med spas",
        visualTitle: "Recorrido de agendamiento del med spa",
        visualStages: [
          "Consulta por tratamiento registrada",
          "Conversación de agendamiento activa",
          "Cita y seguimiento listos",
        ],
      },
      stats: [
        { value: "24/7", label: "Cobertura de consultas" },
        { value: "EN + ES", label: "Comunicación bilingüe" },
        { value: "Una vista", label: "Cada oportunidad registrada" },
      ],
      problem: {
        eyebrow: "La brecha del agendamiento",
        title:
          "Tu equipo debería estar atendiendo clientes, no persiguiendo cada mensaje de Instagram a mano.",
        description:
          "DigitalFace mantiene en movimiento el interés por las promociones, las conversaciones de agendamiento y la retención sin sumar más caos a la bandeja de entrada.",
        items: [
          {
            title: "Consultas repartidas por todos lados",
            description:
              "Las preguntas llegan por anuncios, comentarios, mensajes directos, formularios y llamadas, sin un responsable claro.",
          },
          {
            title: "Las promociones se enfrían",
            description:
              "Las personas más interesadas pierden el impulso cuando la oferta no recibe respuesta y seguimiento rápido.",
          },
          {
            title: "Las mismas preguntas de precio cada día",
            description:
              "Tu equipo dedica horas a responder las mismas preguntas administrativas aprobadas en varios canales.",
          },
          {
            title: "Huecos de agenda e inasistencias",
            description:
              "Confirmaciones, recordatorios, reprogramación y recuperación dependen de que alguien recuerde cada paso.",
          },
          {
            title: "Base de clientes dormida",
            description:
              "Los clientes anteriores y los contactos antiguos nunca se segmentan para ofertas de temporada, recompra o reactivación.",
          },
          {
            title: "Reseñas dejadas al azar",
            description:
              "Las buenas experiencias no se convierten de forma confiable en reseñas, referidos y visitas repetidas.",
          },
        ],
      },
      journey: {
        eyebrow: "Recorrido del cliente del med spa",
        title: "De la promoción a la cita, la reseña y la siguiente reserva.",
        description:
          "El sistema coordina la captación y la retención mientras tu equipo mantiene el control de las conversaciones delicadas.",
        steps: [
          {
            label: "Interés por un tratamiento registrado",
            description:
              "Alguien responde a una promoción, una publicación, un anuncio, tu sitio, un mensaje o una referencia.",
          },
          {
            label: "Respuesta inmediata",
            description:
              "La consulta recibe respuesta en inglés o español y entra al proceso de oportunidades del med spa.",
          },
          {
            label: "Preguntas aprobadas resueltas",
            description:
              "La información configurada sobre tratamientos, promociones, ubicación, políticas y disponibilidad sale siempre igual.",
          },
          {
            label: "Agendamiento acompañado",
            description:
              "Se guía al cliente hacia la reserva, la confirmación, los recordatorios, la reprogramación o el traspaso al equipo.",
          },
          {
            label: "La retención continúa",
            description:
              "Solicitudes de reseña, nuevas reservas, recuperación de inasistencias y campañas de reactivación extienden la relación.",
          },
        ],
      },
      capabilities: {
        eyebrow: "Dentro del sistema",
        title:
          "Hecho para el ritmo rápido de promociones, citas y tratamientos recurrentes",
        description:
          "La demanda que llega por redes se conecta a un recorrido visible y las oportunidades de retención dejan de desaparecer.",
        items: [
          {
            title: "Campañas de promoción de tratamientos",
            description:
              "Meta, Instagram, Google u otro canal justificado, elegido según la oferta y el mercado local.",
          },
          {
            title: "Concierge de agendamiento con IA",
            description:
              "Respuestas aprobadas en inglés y español para preguntas frecuentes e intención de reserva fuera del horario.",
          },
          {
            title: "Seguimiento de promociones e interés",
            description:
              "El sistema registra qué tratamiento, campaña u oferta trajo cada oportunidad al proceso.",
          },
          {
            title: "Ciclo completo de la cita",
            description:
              "Agendamiento, recordatorios, reprogramación, cancelaciones, inasistencias y recuperación quedan conectados.",
          },
          {
            title: "Reactivación de clientes",
            description:
              "Los segmentos aprobados reciben campañas de temporada, membresías, paquetes o nuevas reservas.",
          },
          {
            title: "Reseñas y visitas recurrentes",
            description:
              "Los recorridos posteriores a la visita piden opinión, impulsan la siguiente cita y mantienen visible el historial.",
          },
        ],
      },
      systemIntro: {
        eyebrow: "Un sistema de agendamiento conectado",
        title: "Recibir el mensaje es apenas el comienzo.",
        description:
          "Un med spa llena su agenda cuando tres partes siguen conectadas: poner la oferta correcta frente a personas que viven cerca, responderles antes de que se enfríe el interés y mantener visible cada solicitud para que recepción sepa siempre quién sigue esperando.",
        closing:
          "Genera interés en tus tratamientos. Conviértelo en citas. Mantén la agenda bajo control.",
        stages: [
          {
            number: "01",
            label: "Atraer",
            title: "Genera interés en tus tratamientos",
            description:
              "Pon membresías, paquetes y tratamientos frente a personas que están lo bastante cerca para venir este mes.",
          },
          {
            number: "02",
            label: "Convertir",
            title: "Conviértelo en una cita",
            description:
              "Responde mientras la oferta sigue fresca, confirma qué quiere la persona y guíala a un horario que le sirva.",
          },
          {
            number: "03",
            label: "Gestionar",
            title: "Mantén la agenda a la vista",
            description:
              "Cada solicitud, su oferta, su estado y su siguiente paso en un solo lugar y no en cinco bandejas.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Atraer",
        title: "Mira cómo una promoción se vuelve una solicitud de cita.",
        description:
          "Un anuncio de med spa genera un pico de interés en pocas horas, casi siempre mientras tu equipo está atendiendo. Esto es lo que pasa con ese interés cuando la pauta está conectada al agendamiento y no termina en un hilo de comentarios.",
        ctaLabel: "Agenda tu diagnóstico para med spa",
        phoneCaption: "Anuncio y solicitud de ejemplo",
        bridge:
          "Todas las respuestas llegan a un solo lugar y no a cinco bandejas. Ahora necesita respuesta mientras la oferta sigue fresca.",
        stages: [
          {
            title: "Llega a gente que vive cerca y quiere agendar",
            description:
              "Tus tratamientos y membresías aparecen para personas que están cerca del spa y listas para reservar algo este mes.",
          },
          {
            title: "La oferta es fácil de aceptar",
            description:
              "Un paso claro en lugar de un hilo de comentarios que la recepción tiene que responder mensaje por mensaje.",
          },
          {
            title: "La solicitud dice qué quiere",
            description:
              "Tratamiento, idioma y contacto llegan juntos, así la respuesta puede ser un horario en vez de otra pregunta.",
          },
          {
            title: "Nada se queda en una bandeja",
            description:
              "Cada respuesta cae en un solo proceso con la oferta anotada, lista para agendar, recordar y preparar la visita siguiente.",
          },
        ],
        script: {
          clockLabel: "1:47",
          sponsoredLabel: "Publicidad",
          posts: [
            {
              author: "Tania M.",
              meta: "45 min",
              caption:
                "Nueve kilómetros antes del trabajo. Todavía no lo creo.",
            },
            {
              author: "Caro V.",
              meta: "2 h",
              caption: "La pasta me quedó mejor que la del restaurante.",
            },
            {
              author: "Nadia R.",
              meta: "6 h",
              caption: "Brunch de cumpleaños con las amigas.",
            },
          ],
          form: {
            subtitle: "Solicitud de cita",
            intentQuestion: "¿Qué te gustaría agendar?",
            contactQuestion: "¿A dónde te escribimos?",
            nameLabel: "Nombre",
            phoneLabel: "WhatsApp",
            submitLabel: "Enviar",
            sentTitle: "Solicitud enviada",
            sentNote:
              "El spa ya tiene tus datos y te manda los horarios en un momento.",
            systemLabel: "En tu sistema DigitalFace",
            statuses: [
              "Nueva solicitud de cita",
              "Interés de tratamiento guardado",
              "Listo para seguimiento",
            ],
          },
          ads: [
            {
              market: "medSpa",
              business: "Solene Med Spa",
              caption:
                "Un facial al mes, un precio que no cambia y un horario que sí te sirve.",
              offer: "Membresía mensual de faciales",
              ctaLabel: "Más información",
              creativeEyebrow: "Membresías",
              creativeTitle: "El cuidado de piel que sí mantienes",
              options: [
                "Facial mensual",
                "Sumar tratamientos",
                "Solo la información",
              ],
              choice: 0,
              lead: { name: "Marcela Ríos", phone: "+57 310 555 0173" },
            },
            {
              market: "medSpa",
              business: "Solene Med Spa",
              caption:
                "Deja de organizar tu semana alrededor de la afeitada. Pregunta por empezar tus sesiones antes del verano.",
              offer: "Valoración de paquete láser",
              ctaLabel: "Agendar",
              creativeEyebrow: "Depilación láser",
              creativeTitle: "Empieza las sesiones antes del verano",
              options: ["Piernas", "Axilas", "Cuerpo completo"],
              choice: 2,
              lead: { name: "Andrea Salas", phone: "+57 320 555 0198" },
            },
          ],
          transcriptLabel:
            "Anuncio de med spa y solicitud de cita de ejemplo, mostrados como ilustración.",
        },
      },
      conversationDemo: {
        eyebrow: "02 · Convertir",
        title: "Un mensaje al mediodía, agendado para el miércoles.",
        description:
          "Una promoción genera un pico de mensajes justo a la hora en que tu equipo está atendiendo. Así se ve uno de ellos cuando el sistema lo toma: la oferta confirmada, un horario elegido y el seguimiento ya listo antes de que alguien en recepción abra la bandeja.",
        ctaLabel: "Agenda tu diagnóstico para med spa",
        phoneCaption: "Conversación de ejemplo",
        stages: [
          {
            title: "Todos los canales llegan a un solo lugar",
            description:
              "Respuestas a historias, comentarios, mensajes directos, formularios y llamadas dejan de vivir en cinco bandejas distintas.",
          },
          {
            title: "La oferta se responde mientras hay interés",
            description:
              "Los datos aprobados de la promoción salen en segundos, no cuando se va la última clienta del día.",
          },
          {
            title: "La cita se agenda dentro de la conversación",
            description:
              "Sin perseguir un enlace, sin ir y venir por horarios y sin nadie esperando una llamada que no llega.",
          },
          {
            title: "La relación continúa",
            description:
              "Los recordatorios protegen la cita, y el seguimiento trae de vuelta a la clienta para la siguiente.",
          },
        ],
        script: {
          contact: "Tu Med Spa",
          channelLabel: "Instagram",
          status: "Responde en segundos",
          typingStatus: "escribiendo…",
          clockLabel: "1:14",
          dayLabel: "Hoy · 1:12 p. m.",
          composerPlaceholder: "Mensaje",
          transcriptLabel:
            "Conversación de ejemplo por Instagram entre una clienta potencial y el asistente automatizado de un med spa.",
          patientLabel: "Clienta",
          clinicLabel: "Med spa",
          steps: [
            {
              kind: "patient",
              stage: 0,
              time: "1:12 p. m.",
              pauseMs: 700,
              text: "hola! sigue la promo de relleno de labios de la historia?",
            },
            {
              kind: "assistant",
              stage: 1,
              time: "1:12 p. m.",
              pauseMs: 600,
              typingMs: 1300,
              text: "¡Hola Marcela! Sí, va hasta el domingo. Al mismo precio de la historia, y la cita toma unos 30 minutos.",
            },
            {
              kind: "patient",
              stage: 2,
              time: "1:13 p. m.",
              pauseMs: 2200,
              text: "perfecto, tienen algo esta semana? salgo de trabajar a las 6",
            },
            {
              kind: "slots",
              stage: 2,
              time: "1:13 p. m.",
              pauseMs: 600,
              typingMs: 1300,
              text: "Sí. Estos son los espacios de la tarde que quedan esta semana:",
              options: [
                "Mié · 6:15 p. m.",
                "Jue · 6:45 p. m.",
                "Vie · 7:00 p. m.",
              ],
            },
            {
              kind: "choice",
              stage: 2,
              time: "1:14 p. m.",
              pauseMs: 2500,
              option: 0,
              text: "el miércoles me queda!",
            },
            {
              kind: "confirmation",
              stage: 3,
              time: "1:14 p. m.",
              pauseMs: 600,
              typingMs: 1200,
              title: "Cita agendada",
              when: "Miércoles, 6:15 p. m.",
              service: "Relleno de labios · 30 min",
              note: "El recordatorio sale el día anterior. Después de tu cita te escribimos y te ayudamos a agendar la siguiente.",
            },
          ],
        },
      },
      crmPipelineDemo: {
        eyebrow: "03 · Gestionar",
        title: "Un solo lugar para ver quién está esperando un horario.",
        description:
          "Una promoción puede traer más mensajes en una tarde de los que recepción alcanza a seguir. Aquí cada solicitud conserva su oferta, su canal, su estado y su siguiente paso, así nada se pierde entre una respuesta de historia y la agenda.",
        ctaLabel: "Agenda tu diagnóstico para med spa",
        boardCaption: "Recorrido de cliente de ejemplo",
        bridge:
          "Atraer, convertir y gestionar: un solo recorrido del cliente que sigue funcionando después de la primera visita.",
        stages: [
          {
            title: "Solicitud nueva",
            description:
              "Respuestas de historias, comentarios y mensajes se vuelven una sola solicitud visible.",
          },
          {
            title: "Respondida",
            description:
              "La oferta queda confirmada mientras tu equipo sigue atendiendo.",
          },
          {
            title: "Tratamiento elegido",
            description:
              "Lo que la clienta quiere agendar queda anotado en la solicitud.",
          },
          {
            title: "Cita solicitada",
            description:
              "Recepción ve el horario por confirmar y el seguimiento ya programado.",
          },
        ],
        script: {
          workspaceLabel: "Oportunidades de clientes",
          liveLabel: "Organizado",
          boardLabel: "Avance de la solicitud",
          detailsLabel: "Lo que tu equipo ya sabe",
          activityLabel: "Actividad",
          nextStepLabel: "Siguiente paso",
          movedLabel: "Avanzó",
          stageLabel: "Etapa",
          ofLabel: "de",
          lead: {
            name: "Marcela Ríos",
            initials: "MR",
            summary: "Nueva solicitud de cita",
            channel: "Mensaje de Instagram",
          },
          stages: [
            {
              label: "Solicitud nueva",
              cardStatus: "Recién recibida",
              activity: "Mensaje recibido a la hora del almuerzo",
              nextStep: "Enviar la primera respuesta",
              details: [{ label: "Origen", value: "Meta Ads" }],
            },
            {
              label: "Respondida",
              cardStatus: "Oferta confirmada",
              activity: "Detalles de la promoción confirmados",
              nextStep: "Confirmar qué tratamiento quiere",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Canal", value: "Instagram" },
              ],
            },
            {
              label: "Tratamiento elegido",
              cardStatus: "Tratamiento seleccionado",
              activity: "Facial de membresía seleccionado",
              nextStep: "Ofrecer horarios de esta semana",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Canal", value: "Instagram" },
                { label: "Interés", value: "Facial mensual" },
                { label: "Oferta", value: "Membresía" },
              ],
            },
            {
              label: "Cita solicitada",
              cardStatus: "Lista para confirmar",
              activity: "Cita del miércoles solicitada",
              nextStep:
                "Confirmar el miércoles a las 5:00 y programar el recordatorio",
              details: [
                { label: "Origen", value: "Meta Ads" },
                { label: "Interés", value: "Facial mensual" },
                { label: "Solicitó", value: "Miércoles 5:00 p. m." },
                { label: "Seguimiento", value: "Recordatorio de reagenda" },
              ],
            },
          ],
          transcriptLabel:
            "Recorrido de cliente de ejemplo: un mensaje desde una promoción se convierte en una solicitud de cita organizada con un siguiente paso claro.",
        },
      },
      packagesTitle:
        "Elige el nivel de crecimiento que corresponde a tu med spa hoy.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Captación de Clientes para Med Spa",
          price: "$790",
          setup: "$597 de implementación única",
          description:
            "Genera consultas por tratamientos, organiza cada contacto y automatiza el camino hacia la reserva.",
          idealFor:
            "Med spas que necesitan una base confiable de promoción, captura y seguimiento de citas.",
          highlights: [
            "Un canal prioritario de captación",
            "Ruta de promoción de tratamientos",
            "CRM, seguimiento, agendamiento y recordatorios",
          ],
          details: [
            {
              title: "Captación administrada para med spa",
              description:
                "Elegimos y administramos un canal prioritario, normalmente Meta o Google, según la oferta, la demanda local, el material y el presupuesto.",
            },
            {
              title: "Ruta de conversión de la promoción",
              description:
                "Una landing page o formulario alineado al tratamiento elegido, la oferta y la expectativa de reserva.",
            },
            {
              title: "Un solo proceso de oportunidades",
              description:
                "Las consultas conectadas de anuncios y formularios entran a un mismo proceso con fuente, interés y estado.",
            },
            {
              title: "Seguimiento automático inmediato",
              description:
                "Los mensajes automáticos confirman el interés y llevan a la persona a la información aprobada y a la reserva.",
            },
            {
              title: "Confirmaciones y recordatorios",
              description:
                "Enlaces para agendar, confirmaciones, recordatorios, reprogramación y cancelación reducen la fricción de la agenda.",
            },
            {
              title: "Revisión mensual de promociones",
              description:
                "Revisamos fuentes de captación, oportunidades de reserva, actividad de respuesta y las siguientes decisiones de campaña.",
            },
          ],
          cta: "Empezar con Captación para Med Spa",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Concierge de Agendamiento con IA",
          price: "$1,200",
          setup: "$1,097 de implementación única",
          description:
            "Responde preguntas aprobadas sobre tratamientos, organiza el interés, acompaña la reserva y pasa conversaciones a tu equipo.",
          idealFor:
            "Med spas con volumen constante de consultas en redes, preguntas repetitivas o una recepción saturada.",
          featured: true,
          highlights: [
            "Todo lo incluido en DigitalFace Capture",
            "Comunicación bilingüe con IA",
            "Interés, agendamiento y traspaso al equipo",
          ],
          details: [
            {
              title: "Todo lo incluido en DigitalFace Capture",
              description:
                "Se mantiene la base de captación, página de promoción, CRM, seguimiento automático, calendario, recordatorios y reportes.",
            },
            {
              title: "Conocimiento aprobado del med spa",
              description:
                "El asistente usa información configurada sobre tratamientos, promociones, ubicación, horarios, políticas de precio y disponibilidad.",
            },
            {
              title: "Conversaciones en inglés y español",
              description:
                "El asistente responde en el idioma del cliente y mantiene la conversación consistente de principio a fin.",
            },
            {
              title: "Registro del interés por tratamiento",
              description:
                "Las categorías configuradas, el interés en la oferta, el idioma y la intención de reserva quedan organizados en el CRM.",
            },
            {
              title: "Apoyo con las citas",
              description:
                "El asistente guía a los clientes interesados hacia la disponibilidad y los flujos de agendamiento configurados.",
            },
            {
              title: "Traspaso humano y clínico",
              description:
                "Preguntas médicas, contraindicaciones, síntomas, quejas, excepciones y solicitudes de hablar con alguien se escalan al equipo.",
            },
            {
              title: "Monitoreo y mejora de la IA",
              description:
                "Revisamos preguntas frecuentes, respuestas seguras y patrones de traspaso para seguir mejorando la experiencia.",
            },
          ],
          cta: "Sumar el Concierge de Agendamiento",
        },
        {
          name: "DigitalFace Full Growth",
          nicheName: "Sistema Completo para Med Spa",
          price: "$1,800",
          setup: "$1,597 de implementación única",
          description:
            "Conecta promoción multicanal, agendamiento con IA, reactivación, reseñas y gestión de crecimiento.",
          idealFor:
            "Med spas consolidados listos para escalar varios tratamientos y trabajar captación y retención al mismo tiempo.",
          highlights: [
            "Todo lo incluido en DigitalFace AI",
            "Hasta dos canales de captación",
            "Reactivación, reseñas y estrategia de crecimiento",
          ],
          details: [
            {
              title: "Todo lo incluido en DigitalFace AI",
              description:
                "Se mantiene el sistema completo de captación, CRM, automatización, comunicación con IA, citas, traspaso y reportes.",
            },
            {
              title: "Captación multicanal de tratamientos",
              description:
                "Hasta dos canales justificados según la mezcla de tratamientos, el mercado local, el material creativo y el presupuesto.",
            },
            {
              title: "Varias campañas de tratamiento",
              description:
                "Las campañas y rutas de conversión pueden cubrir más de un tratamiento o promoción aprobada dentro del alcance acordado.",
            },
            {
              title: "Reactivación de la base de clientes",
              description:
                "Los contactos antiguos y clientes anteriores se segmentan para campañas de tratamiento, temporada, membresía o nueva reserva.",
            },
            {
              title: "Flujos de reseña y nueva reserva",
              description:
                "Los recorridos posteriores a la visita piden opinión, impulsan la siguiente cita y conservan el historial del cliente.",
            },
            {
              title: "De comentario a conversación",
              description:
                "La interacción seleccionada en Facebook e Instagram entra a rutas controladas de respuesta, mensaje directo y captura.",
            },
            {
              title: "Estrategia mensual de crecimiento",
              description:
                "Prioridades de tratamiento, desempeño de campañas, conversión a reserva, retención y el siguiente ciclo de optimización.",
            },
          ],
          cta: "Construir mi Sistema para Med Spa",
        },
      ],
      faqTitle: "Lo que más nos preguntan los med spas",
      faqDescription:
        "Revisamos tus promociones, el flujo de consultas en redes, tu proceso de respuesta, la agenda, la reactivación y el seguimiento antes de recomendarte un paquete.",
      faq: [
        {
          question:
            "¿El sistema puede responder preguntas sobre tratamientos y promociones?",
          answer:
            "Sí, cuando las respuestas están aprobadas por el med spa y son de carácter administrativo. La pertinencia clínica, las contraindicaciones, el diagnóstico y el consejo médico personalizado siguen siendo del profesional.",
        },
        {
          question: "¿Puede manejar consultas de Instagram y Facebook?",
          answer:
            "Sí. Los formularios, las rutas de mensajería seleccionadas y los flujos de comentarios configurados se conectan al sistema cuando están incluidos en el alcance.",
        },
        {
          question: "¿Puede reactivar clientes anteriores?",
          answer:
            "Sí. Los segmentos aprobados del CRM pueden recibir campañas de ofertas de temporada, nuevas reservas de tratamiento, membresías u otras oportunidades configuradas.",
        },
        {
          question: "¿El equipo puede tomar el control de una conversación?",
          answer:
            "Sí. Tu equipo puede tomar el control cuando un cliente pide hablar con una persona o cuando la conversación se vuelve clínica, delicada, urgente o sale del conocimiento aprobado.",
        },
        {
          question: "¿Ustedes producen fotos y videos profesionales?",
          answer:
            "La producción profesional no está incluida. El med spa entrega las fotos y videos originales aprobados, y nosotros adaptamos el material acordado para campañas y rutas de conversión.",
        },
      ],
      booking: {
        title: "Hablemos de tu sistema de crecimiento.",
        description:
          "Elige un horario que te acomode para revisar cómo DigitalFace puede ayudar a tu med spa a atraer, convertir y gestionar más oportunidades de pacientes.",
        proposalTitle: "¿Necesitas un flujo a la medida para tu med spa?",
        proposalDescription:
          "Pide una propuesta para membresías, varias sedes, automatización de reseñas, admisión por tratamiento u otro proceso propio.",
        proposalCta: "Solicitar propuesta a la medida",
      },
    },
  },
};
