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
      label: "Así funciona",
      stage: "Etapa",
      bilingual: "Inglés y español",
      handover: "Tu equipo puede intervenir",
    },
    heroMedia: {
      eyebrow: "A cargo de DigitalFace",
    },
    capabilitiesDisclaimer:
      "DigitalFace automatiza la comunicación administrativa y los procesos del negocio. La responsabilidad clínica siempre es de los profesionales autorizados.",
    packages: {
      eyebrow: "Elige tu plan",
      description:
        "Lo configuramos y gestionamos. Elige el apoyo que necesita tu negocio.",
      mostPopular: "Más elegido",
      perMonth: "/mes",
      expandLabel: "Ver qué incluye",
      idealFor: "Ideal para",
      customProposal: "Pedir un plan a medida",
      noContract:
        "No se requiere contrato anual. Todos los planes funcionan mes a mes.",
      footnote:
        "El CRM y el alojamiento estándar están incluidos. La IA y las comunicaciones se cobran a costo de proveedor, sin saldo incluido. Acordamos un presupuesto de consumo antes de activar el sistema. La publicidad empieza con Sales System; pagas directamente a Meta o Google. La foto y el video profesionales no están incluidos.",
    },
    proof: {
      eyebrow: "Sistemas entregados",
      title: "Mira lo que hemos implementado.",
      description:
        "Dos sistemas activos para comunicación con pacientes, citas y seguimiento.",
      activeLabel: "Cliente activo",
    },
    faq: {
      eyebrow: "Antes de agendar",
    },
    booking: {
      eyebrow: "¿Hablamos?",
      ctaLabel: "Elige un horario",
      customScopeLabel: "¿Necesitas algo más?",
      privacyNote:
        "El formulario final debe pedir solo lo necesario para definir el alcance y enlazar a la política de privacidad publicada.",
    },
    mobileCta: "Agendar una llamada",
  },

  clientStories: {
    diego: {
      id: "diego",
      name: "Dr. Diego Sinisterra",
      sector: "Medicina estética",
      summary:
        "Respuestas a pacientes y apoyo para citas en una consulta estética.",
      delivered: [
        "Respuestas de IA en inglés y español",
        "Agendamiento y seguimiento de citas",
        "Respuestas a comentarios de Facebook e Instagram",
        "Seguimiento asignado, manejo de errores e intervención del equipo",
      ],
    },
    jennifer: {
      id: "jennifer",
      name: "Dra. Jennifer Sinisterra",
      sector: "Odontología estética y pacientes internacionales",
      summary:
        "Recepción bilingüe de datos de pacientes, organizada para revisión.",
      delivered: [
        "Respuestas de IA en inglés y español",
        "Recepción de fotos y documentos",
        "WhatsApp, bandeja compartida, CRM y Drive sincronizados",
        "Tareas de revisión e intervención del equipo",
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
          "Convierte las consultas de implantes, carillas y diseño de sonrisa en valoraciones atendidas. DigitalFace opera la pauta, el seguimiento bilingüe, el agendamiento de valoraciones y la recuperación del tratamiento pendiente de clínicas odontológicas en Estados Unidos y Latinoamérica.",
      },
      hero: {
        eyebrow: "DigitalFace para clínicas odontológicas",
        title: "Convierte el interés dental en citas de valoración.",
        description:
          "Marketing dental, seguimiento y agendamiento de citas a cargo de DigitalFace. Tú atiendes a tus pacientes; nosotros ayudamos a los interesados a dar el siguiente paso.",
        primaryCta: "Agendar una llamada para mi clínica",
        secondaryCta: "Ver cómo funciona",
        visualTitle: "Recorrido de una consulta dental",
        visualStages: [
          "Consulta sobre carillas recibida",
          "Paciente recibe respuesta",
          "Valoración agendada",
        ],
        mediaHeadline:
          "Sigue atendiendo. Nosotros nos encargamos del seguimiento.",
      },
      stats: [
        { value: "24/7", label: "Consultas de pacientes nuevos respondidas" },
        { value: "EN + ES", label: "Comunicación bilingüe con pacientes" },
        {
          value: "Atendida",
          label: "Seguida, no solo agendada",
        },
      ],
      problem: {
        eyebrow: "La brecha de conversión",
        title:
          "Puede que tu clínica no necesite más contactos, sino una mejor forma de convertir los que ya llegan.",
        description:
          "Una decisión odontológica casi nunca se toma en un solo mensaje. DigitalFace mantiene cada consulta organizada y avanzando mientras tu equipo clínico se queda con los pacientes.",
        items: [
          {
            title: "La consulta se enfría antes de que alguien responda",
            description:
              "Las preguntas por implantes, carillas y diseño de sonrisa llegan mientras tu equipo está en el sillón, y cuando alguien contesta el paciente ya dejó de responder o agendó en otra parte.",
          },
          {
            title: "Datos del caso repartidos en bandejas",
            description:
              "Fotos, interés de tratamiento, notas de admisión y preguntas de financiación terminan dispersos en vez de quedar en una sola ficha, y se responden distinto cada vez.",
          },
          {
            title: "Inasistencias y tratamiento sin agendar",
            description:
              "Confirmaciones, recordatorios y recuperación inconsistentes dejan huecos en la agenda y planes de tratamiento sin programar.",
          },
          {
            title: "Sin línea entre campaña y aceptación del caso",
            description:
              "La clínica ve totales de contactos, no qué campañas produjeron valoraciones atendidas y planes de tratamiento aceptados.",
          },
        ],
      },
      gallery: {
        eyebrow: "Dentro de la clínica",
        title: "Que el interés en un tratamiento no se pierda.",
        description:
          "Responder tarde, buscar mensajes y recordar seguimientos le quita tiempo a tu recepción.",
        moments: [
          {
            title: "Responde mientras atiendes",
            description:
              "Ayuda a quienes preguntan por implantes, carillas y diseño de sonrisa a dar el siguiente paso.",
            alt: "Odontólogo comparando la guía de color con un paciente sonriente",
          },
          {
            title: "Organiza la próxima visita",
            description:
              "Confirmaciones, recordatorios y cambios de cita ayudan a organizar la agenda.",
            alt: "Lámpara e instrumental en un consultorio odontológico moderno",
          },
          {
            title: "Dale el contexto a tu coordinador",
            description:
              "Reúne fotos, interés en tratamientos y notas para dar seguimiento.",
            alt: "Sala de una clínica dental donde el equipo atiende a un paciente",
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
              "Estrategia de campañas para implantes, carillas, diseño de sonrisa y los casos de alto valor que quieres atraer.",
          },
          {
            title: "Concierge dental con IA y admisión del paciente",
            description:
              "Respuestas administrativas bilingües con información aprobada por la clínica, con las respuestas de admisión y las fotos del paciente organizadas para tu coordinadora y reglas claras de traspaso para todo lo clínico.",
          },
          {
            title: "Agendamiento de valoraciones y proceso del caso",
            description:
              "Disponibilidad, agendamiento, confirmaciones, recordatorios y reprogramación funcionan como un solo proceso, y cada oportunidad conserva etapa visible, historial, responsable y ruta de escalamiento.",
          },
          {
            title: "Recuperación de tratamiento y reactivación",
            description:
              "Inasistencias, consultas sin respuesta y tratamiento sin agendar reciben un seguimiento estructurado en vez de quedar en el olvido.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Atraer",
        title: "Atrae pacientes interesados en tus tratamientos.",
        description:
          "Sales System suma campañas de marketing dental en Meta Ads o Google Ads para el tratamiento que quieres promocionar.",
        ctaLabel: "Hablar de campañas dentales",
        phoneCaption: "Anuncio y solicitud de ejemplo",
        bridge: "Siguiente paso: responder al paciente.",
        stages: [
          {
            title: "Muestra el tratamiento",
            description: "Promociona implantes, carillas o diseño de sonrisa.",
          },
          {
            title: "Invita a una valoración",
            description: "Ofrece un siguiente paso claro a los interesados.",
          },
          {
            title: "Recibe sus datos",
            description: "Guarda el tratamiento de interés, idioma y contacto.",
          },
          {
            title: "Prepara el seguimiento",
            description: "Deja cada solicitud organizada para tu equipo.",
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
        title: "Deja que la IA responda mientras atiendes.",
        description:
          "Tu chatbot de IA responde preguntas aprobadas y ayuda a agendar. Las fotos y las dudas clínicas llegan a tu equipo.",
        ctaLabel: "Hablar del seguimiento a pacientes",
        phoneCaption: "Conversación de ejemplo",
        stages: [
          {
            title: "Responde fuera de horario",
            description:
              "Atiende consultas sobre implantes y carillas cuando la clínica está cerrada.",
          },
          {
            title: "Reúne los datos del caso",
            description:
              "Guarda fotos, interés en tratamientos y notas en un registro.",
          },
          {
            title: "Usa respuestas aprobadas",
            description:
              "Explica tus políticas de financiación, proceso y disponibilidad.",
          },
          {
            title: "Involucra a tu equipo",
            description:
              "Deriva las dudas clínicas y específicas del caso al personal.",
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
        title: "Identifica quién necesita seguimiento.",
        description:
          "Ve el tratamiento de interés, los mensajes y el siguiente paso de cada paciente. Tu CRM mantiene todo organizado.",
        ctaLabel: "Hablar de mi clínica",
        boardCaption: "Recorrido de paciente de ejemplo",
        bridge: "Sigue las consultas hasta la cita agendada y la asistencia.",
        stages: [
          {
            title: "Solicitud recibida",
            description: "La solicitud aparece, incluso los fines de semana.",
          },
          {
            title: "Paciente contactado",
            description: "Recepción puede ver la primera respuesta.",
          },
          {
            title: "Interés registrado",
            description: "El tratamiento y la foto quedan juntos.",
          },
          {
            title: "Valoración solicitada",
            description: "Revisa el horario solicitado y qué falta confirmar.",
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
                { label: "Preguntó por", value: "Financiación" },
                { label: "Solicitó", value: "Martes 4:30 p. m." },
              ],
            },
          ],
          transcriptLabel:
            "Recorrido de paciente de ejemplo: una consulta odontológica se convierte en una oportunidad de valoración organizada con un siguiente paso claro.",
        },
      },
      appointmentCommitment: {
        eyebrow: "Opcional · Desde DigitalFace AI",
        title: "Confirma valoraciones con un anticipo opcional.",
        description:
          "Elige qué tratamientos requieren un pago de reserva antes de confirmar la valoración.",
        steps: [
          {
            label: "Valoración solicitada",
            caption: "El paciente elige un horario de tu disponibilidad real.",
          },
          {
            label: "Reserva solicitada",
            caption:
              "Con el agendamiento sale una solicitud de pago, solo en los tratamientos que tú elijas.",
          },
          {
            label: "Valoración confirmada",
            caption:
              "Cuando el pago se acredita, el estado se actualiza en tu proceso.",
          },
          {
            label: "Recordatorios",
            caption:
              "Las confirmaciones y los recordatorios siguen igual que antes.",
          },
          {
            label: "Valoración atendida",
            caption: "Tu equipo clínico llega a una cita comprometida.",
          },
        ],
        points: [
          {
            title: "Pide un compromiso",
            description:
              "Un pago de reserva puede ayudar a reducir las citas sin compromiso.",
          },
          {
            title: "Ve qué citas están confirmadas",
            description:
              "Distingue las reservas pagadas de las solicitudes de cita.",
          },
          {
            title: "Recibe el dinero en tu cuenta",
            description:
              "Tu proveedor cobra el pago. DigitalFace conecta el agendamiento y nunca retiene tus fondos.",
          },
        ],
        note: "Es opcional y se configura por tratamiento: tú decides qué valoraciones piden reserva y de cuánto. La reserva refuerza el compromiso; no es una garantía de asistencia.",
      },
      packagesTitle: "Elige el plan para tu clínica dental.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Organiza las consultas dentales",
          price: "$890",
          setup: "$597 de implementación única",
          description:
            "Organiza las consultas sobre implantes, carillas y diseño de sonrisa, con seguimiento automático.",
          idealFor:
            "Para equipos que reciben consultas y necesitan dar seguimiento.",
          highlights: [
            "Cada consulta en un CRM",
            "Respuestas y seguimiento automáticos",
            "Enlaces de cita y recordatorios",
            "Mensaje tras una llamada perdida",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Contactos, mensajes y próximos pasos en un CRM y una bandeja compartida. Conecta dos fuentes de consultas y responde por SMS o correo. Mantén el contacto hasta que respondan o pidan dejar de recibir mensajes. Permite elegir un horario y recibir recordatorios de la cita. Envía un texto cuando tu número conectado pierde una llamada. Ve el avance de las consultas mientras cuidamos tu sistema.",
            },
            {
              title: "Qué cubre la implementación",
              description:
                "Configuramos tu proceso comercial, conectamos hasta 2 formularios o fuentes de leads con conexión nativa y montamos la primera respuesta, el seguimiento, el agendamiento y la respuesta a llamadas perdidas. Probamos el sistema y capacitamos a tu equipo. Migraciones e integraciones a medida se cotizan aparte.",
            },
            {
              title: "Qué gestionamos cada mes",
              description:
                "Monitoreo de los flujos, corrección de fallas del sistema entregado, una revisión de desempeño y hasta 1 hora de ajustes solicitados en textos o flujos. Los flujos nuevos se cotizan aparte. Tu equipo atiende las conversaciones y decide sobre las citas.",
            },
            {
              title: "Consumo y alcance",
              description:
                "No hay saldo de consumo incluido. Antes del lanzamiento acordamos las tarifas de los proveedores y un presupuesto mensual de consumo; los proveedores cobran directamente o detallamos esos cargos al costo. Sedes, calendarios, idiomas o fuentes de consultas adicionales requieren una nueva cotización.",
            },
            {
              title: "Cuándo subir de nivel",
              description:
                "Elige DigitalFace AI cuando tu equipo necesite ayuda para responder, calificar el interés y llevar las consultas a una cita confirmada. Los flujos de anticipo y recuperación de inasistencias comienzan allí.",
            },
            {
              title: "Alcance y límites",
              description:
                "1 sede · 1 proceso comercial · 1 calendario · inglés o español",
            },
            {
              title: "No incluido",
              description:
                "No incluye gestión de pauta, IA conversacional ni desarrollo de sitios web.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. Mensajería, correo y telefonía se cobran aparte al costo del proveedor.",
          },
          cta: "Hablar de Capture",
          footnotes: [],
        },
        {
          name: "DigitalFace AI",
          nicheName: "Suma seguimiento con IA",
          price: "$1,490",
          setup: "$1,097 de implementación única",
          description:
            "Deja que la IA responda consultas dentales y ayude a agendar valoraciones.",
          idealFor:
            "Para equipos que necesitan ayuda para responder y agendar.",
          featured: true,
          highlights: [
            "Todo lo de Capture",
            "Respuestas de IA en inglés y español",
            "Apoyo para agendar e intervención del equipo",
            "Seguimiento a citas perdidas y anticipos opcionales",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Tu chatbot de IA responde preguntas aprobadas en inglés y español. Identifica qué necesita cada persona antes de pasarla a tu equipo. Verifica disponibilidad y solicita confirmación antes de cambiar una cita. Pasa conversaciones sensibles al personal con todo el historial. Contacta a quienes faltaron a su cita e invítalos a reagendar. Permite reservar con un anticipo a través de tu proveedor de pagos.",
            },
            {
              title: "Qué cubre la implementación",
              description:
                "La configuración de Capture más una base de conocimiento aprobada, chat web y un canal de mensajería (WhatsApp o SMS), respuestas en inglés y español, hasta 2 calendarios, reglas de entrega al equipo, flujos de citas, pruebas y capacitación. Se conectan hasta 2 fuentes de consultas existentes; integraciones a medida y migraciones se cotizan aparte.",
            },
            {
              title: "Qué gestionamos cada mes",
              description:
                "Monitoreamos el sistema, corregimos los flujos entregados, revisamos la calidad de las conversaciones, ajustamos respuestas aprobadas y reportamos el avance de consultas a citas. Incluye una revisión mensual y hasta 2 horas de cambios solicitados en la base de conocimiento o los flujos; los sistemas nuevos se cotizan aparte.",
            },
            {
              title: "Límites en el agendamiento",
              description:
                "La IA solo atiende preguntas administrativas e interés comercial. No diagnostica, prescribe, determina elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. Tu equipo conserva la responsabilidad. Los cambios de citas requieren disponibilidad vigente cuando corresponda y confirmación explícita; las solicitudes sensibles pasan al personal.",
            },
            {
              title: "Anticipos y consumo",
              description:
                "Un flujo opcional de anticipo aprobado por tu equipo puede reforzar el compromiso con la cita; no garantiza asistencia. Tu proveedor de pagos deposita el dinero en tu cuenta y cobra sus comisiones. La IA y las comunicaciones no incluyen saldo de consumo; antes del lanzamiento acordamos tarifas y presupuesto mensual, con cobro directo o cargos detallados al costo.",
            },
            {
              title: "Cuándo ampliar el sistema",
              description:
                "Añade el Sales System cuando necesites gestión de pauta y una landing de campaña. Más sedes, calendarios, bases de conocimiento, canales o idiomas requieren una cotización con alcance definido.",
            },
            {
              title: "Alcance y límites",
              description:
                "1 sede · 1 proceso comercial · hasta 2 calendarios · 1 base de conocimiento",
            },
            {
              title: "No incluido",
              description:
                "No incluye pauta, sitios web, IA de voz ni campañas masivas de correo.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. IA, mensajería, correo, telefonía y comisiones de pago se cobran aparte al costo del proveedor.",
          },
          footnotes: [],
          cta: "Hablar de DigitalFace AI",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Suma publicidad dental",
          price: "A medida",
          priceCaption: "Se define y se cotiza según tus requerimientos",
          description:
            "Suma anuncios gestionados y una página para el tratamiento dental que quieres promocionar.",
          idealFor:
            "Para clínicas listas para sumar publicidad y seguir las citas.",
          scopeNote:
            "Este es el alcance inicial. Acordamos el alcance final y la cotización antes de empezar.",
          highlights: [
            "Todo lo de DigitalFace AI",
            "Un canal de Meta Ads o Google Ads",
            "Una página de campaña · 2 rondas de revisión",
            "Hasta 4 variaciones estáticas de anuncios al mes",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Gestionamos un canal prioritario: Meta Ads o Google Ads. Presenta tu oferta en una página enfocada en generar consultas. Crea hasta cuatro variaciones mensuales con tus materiales. Ajusta las campañas según lo que funciona y lo que necesita atención. Conecta anuncios con consultas, citas y asistencia registrada. Revisa la captación y el agendamiento en una misma conversación.",
            },
            {
              title: "Qué cubre el alcance inicial",
              description:
                "La implementación de DigitalFace AI más un canal de campañas en Meta o Google, medición y una landing con hasta 2 rondas de revisión. La gestión mensual incluye optimización semanal, hasta 4 variaciones estáticas con material del cliente, una revisión y hasta 3 horas totales de cambios solicitados en el sistema o la landing.",
            },
            {
              title: "Presupuesto de pauta",
              description:
                "El alcance inicial gestiona hasta $5,000/mes de pauta en un canal de Meta o Google. Pagas directamente a la plataforma. Un segundo canal, TikTok, ofertas adicionales o mayor inversión requieren acordar un ajuste de alcance y gestión.",
            },
            {
              title: "Cómo cotizamos el alcance a medida",
              description:
                "Definimos la propuesta de implementación y gestión mensual en la consulta. Más sedes, marcas, consultas, procesos comerciales, integraciones, reportes o infraestructura dedicada afectan el alcance. Acordamos entregables, capacidad de soporte y tarifas por escrito antes de empezar.",
            },
            {
              title: "Medición y consumo",
              description:
                "Los reportes conectan la pauta con consultas, citas y asistencia registrada por el personal; tu equipo debe mantener los resultados actualizados. No se garantizan citas ni ingresos. La IA y las comunicaciones no incluyen saldo de consumo. Acordamos tarifas y presupuesto mensual antes del lanzamiento, con cobro directo o cargos detallados al costo.",
            },
            {
              title: "Límites de la IA y de las citas",
              description:
                "La IA responde preguntas administrativas aprobadas y califica interés comercial; no diagnostica, prescribe, decide elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. El personal atiende los casos sensibles. Los cambios de citas requieren confirmación explícita y disponibilidad vigente cuando corresponda. Los anticipos opcionales usan tu proveedor; no garantizan asistencia.",
            },
            {
              title: "Alcance y límites",
              description:
                "Alcance inicial: 1 sede · 1 oferta · 1 canal publicitario",
            },
            {
              title: "No incluido",
              description:
                "Sitios web completos, foto/video profesional, SEO y reactivación masiva son proyectos aparte.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. Pagas la pauta directamente a Meta o Google. IA, mensajería y otros cargos de proveedores se cobran aparte al costo.",
          },
          cta: "Hablar de mi Sales System",
          footnotes: [
            "El alcance inicial gestiona hasta $5,000 al mes de pauta. Más presupuesto o canales requieren un ajuste de tarifa acordado.",
          ],
        },
      ],
      faqTitle: "Antes de agendar",
      faqDescription: "Respuestas rápidas sobre tu equipo y el sistema.",
      faq: [
        {
          question: "¿Los pacientes pueden enviar fotos?",
          answer:
            "Sí, según el alcance acordado. Las fotos y los datos llegan a tu equipo para revisión. El sistema no analiza imágenes.",
        },
        {
          question: "¿La IA puede recomendar tratamientos?",
          answer:
            "No. Comparte respuestas administrativas aprobadas. El diagnóstico, la elegibilidad y las recomendaciones quedan a cargo del equipo clínico.",
        },
        {
          question: "¿El equipo puede tomar la conversación?",
          answer: "Sí. Tu equipo puede hacerse cargo y pausar la IA.",
        },
        {
          question: "¿Pueden retomar tratamientos sin agendar?",
          answer:
            "Sí, con un alcance acordado. El seguimiento a pacientes existentes y la reactivación masiva se cotizan aparte. Las dudas clínicas de cada caso pasan a tu equipo.",
        },
        {
          question: "¿Funciona para pacientes internacionales?",
          answer:
            "Sí. Las respuestas bilingües, la recepción de archivos, la preparación de la valoración y la revisión del equipo pueden incluirse en el alcance acordado.",
        },
      ],
      booking: {
        title: "¿Quieres más citas de valoración?",
        description:
          "Agenda una llamada. Revisamos tus consultas y te recomendamos un plan.",
        proposalTitle: "¿Necesitas un plan dental a medida?",
        proposalDescription:
          "Cuéntanos sobre tus sedes, recepción de pacientes o seguimiento de tratamientos.",
      },
    },

    "aesthetic-medicine": {
      navLabel: "Medicina Estética",
      industryLabel: "Sistema de Crecimiento en Medicina Estética",
      metadata: {
        title:
          "Marketing para Medicina Estética y Captación de Pacientes | DigitalFace Marketing",
        description:
          "Convierte el interés por inyectables, calidad de piel y procedimientos quirúrgicos en valoraciones atendidas. DigitalFace opera la pauta, la comunicación bilingüe, el agendamiento y el seguimiento de centros de medicina estética y cirugía plástica, mientras cada decisión clínica sigue en tu equipo.",
      },
      hero: {
        eyebrow: "DigitalFace para medicina estética y cirugía plástica",
        title: "Convierte el interés en procedimientos en valoraciones.",
        description:
          "Marketing para medicina estética, respuestas a pacientes y agendamiento a cargo de DigitalFace. Las decisiones médicas siguen en manos de tus profesionales.",
        primaryCta: "Agendar una llamada para mi consulta",
        secondaryCta: "Ver cómo funciona",
        visualTitle: "Recorrido hacia la valoración estética",
        visualStages: [
          "Consulta sobre procedimiento recibida",
          "Interés del paciente registrado",
          "Valoración agendada",
        ],
        mediaHeadline: "Nosotros damos seguimiento. Tú brindas la atención.",
      },
      stats: [
        { value: "24/7", label: "Consultas por procedimientos respondidas" },
        { value: "Al médico", label: "Toda pregunta clínica se escala" },
        { value: "Una ficha", label: "Interés, preguntas e historial" },
      ],
      problem: {
        eyebrow: "La brecha hacia la valoración",
        title:
          "Una consulta por un procedimiento de alto valor es demasiado importante para perderla por una respuesta tardía.",
        description:
          "DigitalFace maneja todo el recorrido administrativo alrededor de la valoración y mantiene claros los límites clínicos.",
        items: [
          {
            title:
              "La consulta llega a las diez de la noche; las preguntas, todo el día",
            description:
              "Los pacientes interesados escriben fuera de horario y comparan dos o tres centros antes de que alguien abra la bandeja, mientras cuota de valoración, proceso, preparación y disponibilidad consumen el día de tus coordinadoras.",
          },
          {
            title: "El interés nunca queda registrado",
            description:
              "La zona por la que preguntó el paciente queda enterrada en un hilo en vez de quedar en la ficha, y la coordinadora reinicia la conversación.",
          },
          {
            title: "Preguntas clínicas en el lugar equivocado",
            description:
              "Viabilidad, seguridad y preguntas de cada caso necesitan una ruta confiable hacia una persona calificada, siempre.",
          },
          {
            title: "Sin línea de la campaña a la valoración atendida",
            description:
              "Los pacientes dejan de responder, cancelan tarde o no llegan, y los reportes muestran totales de contactos en vez de cuáles se convirtieron en valoraciones atendidas y planes de tratamiento.",
          },
        ],
      },
      gallery: {
        eyebrow: "Dentro de la práctica",
        title: "Menos mensajes pendientes. Más tiempo para atender.",
        description:
          "Da continuidad a las solicitudes y lleva cada duda clínica al profesional indicado.",
        moments: [
          {
            title: "Las decisiones médicas son tuyas",
            description:
              "La IA responde sobre precios y horarios aprobados. Tu equipo da la orientación médica.",
            alt: "Médico evaluando el rostro de una paciente en una consulta estética",
          },
          {
            title: "Conoce el interés del paciente",
            description:
              "Revisa juntos el interés, los antecedentes y las fotos enviadas.",
            alt: "Profesional examinando el rostro de una paciente en una valoración estética",
          },
          {
            title: "Organiza las valoraciones",
            description:
              "Consulta citas, anticipos opcionales y seguimiento en un solo lugar.",
            alt: "Sala moderna de medicina estética preparada para un paciente",
          },
        ],
      },
      capabilities: {
        eyebrow: "Dentro del sistema",
        title: "Hecho para un centro donde todo empieza en la valoración",
        description:
          "Las campañas y las conversaciones se conectan a un recorrido de citas controlado que tu equipo puede supervisar.",
        items: [
          {
            title: "Captación por procedimiento y consultas en redes",
            description:
              "Campañas y rutas de conversión armadas alrededor de los procedimientos que quieres crecer: inyectables, calidad de piel, corporales o quirúrgicos. Los comentarios y mensajes configurados de Facebook e Instagram entran a la misma ruta controlada de respuesta.",
          },
          {
            title: "Concierge de pacientes con IA y registro del interés",
            description:
              "Respuestas administrativas aprobadas en inglés y español mucho después de que tus coordinadoras se van, con categoría del procedimiento, idioma, tiempos e interés organizados en una sola ficha.",
          },
          {
            title: "Límites clínicos protegidos",
            description:
              "Viabilidad, diagnóstico, síntomas, complicaciones y consejo médico se dirigen a personas calificadas, nunca los responde un software.",
          },
          {
            title: "Ciclo completo de la valoración",
            description:
              "Disponibilidad, agendamiento, confirmación, recordatorios, cancelación y reprogramación funcionan como un solo proceso.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Atraer",
        title: "Atrae interés en tus procedimientos.",
        description:
          "Sales System suma Meta Ads o Google Ads para medicina estética, con una invitación clara a agendar una valoración.",
        ctaLabel: "Hablar de campañas para mi consulta",
        phoneCaption: "Anuncio y solicitud de ejemplo",
        bridge: "Siguiente paso: ayudar a agendar la valoración.",
        stages: [
          {
            title: "Llega a posibles pacientes",
            description: "Promociona los procedimientos que quieres impulsar.",
          },
          {
            title: "Invita a una valoración",
            description:
              "Haz de la conversación con tu equipo el siguiente paso.",
          },
          {
            title: "Registra su interés",
            description:
              "Guarda la pregunta, el idioma y los datos de contacto.",
          },
          {
            title: "Prepara la primera respuesta",
            description: "Dale a tu coordinador el contexto para responder.",
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
        title: "La IA responde. Tu equipo decide sobre la atención.",
        description:
          "Tu chatbot de IA explica los detalles aprobados de la valoración y ayuda a agendar. Las dudas médicas llegan a tu equipo.",
        ctaLabel: "Hablar de la atención por mensajes",
        phoneCaption: "Conversación de ejemplo",
        stages: [
          {
            title: "Responde fuera de horario",
            description:
              "Atiende consultas sobre procedimientos fuera del horario de atención.",
          },
          {
            title: "Comparte información aprobada",
            description:
              "Explica el proceso de valoración, la preparación y tus políticas.",
          },
          {
            title: "Deriva las dudas médicas",
            description:
              "Envía las preguntas sobre seguridad y elegibilidad a un profesional.",
          },
          {
            title: "Ayuda a agendar",
            description:
              "Reúne la cita, el recordatorio y las dudas pendientes.",
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
        title: "Ve cada solicitud y quién la atiende.",
        description:
          "Reúne el procedimiento de interés, los mensajes y la valoración solicitada en tu CRM. Tu equipo sabe qué sigue.",
        ctaLabel: "Hablar de mi consulta",
        boardCaption: "Recorrido de paciente de ejemplo",
        bridge: "Da seguimiento desde la primera pregunta hasta la valoración.",
        stages: [
          {
            title: "Solicitud recibida",
            description: "La solicitud aparece de día o de noche.",
          },
          {
            title: "Paciente atendido",
            description: "Las respuestas administrativas quedan registradas.",
          },
          {
            title: "Revisión médica pendiente",
            description: "Las preguntas médicas se señalan para tu equipo.",
          },
          {
            title: "Valoración solicitada",
            description:
              "El horario solicitado sigue visible durante la revisión.",
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
      appointmentCommitment: {
        eyebrow: "Opcional · Desde DigitalFace AI",
        title: "Confirma valoraciones con un pago opcional.",
        description:
          "Elige qué tipos de valoración requieren pago antes de confirmar la cita.",
        steps: [
          {
            label: "Valoración solicitada",
            caption: "El paciente elige un horario de tu disponibilidad real.",
          },
          {
            label: "Reserva solicitada",
            caption:
              "Con el agendamiento sale una solicitud de pago, solo en las valoraciones que tú elijas.",
          },
          {
            label: "Valoración confirmada",
            caption:
              "Cuando el pago se acredita, el estado se actualiza en tu proceso.",
          },
          {
            label: "Recordatorios",
            caption:
              "Las confirmaciones y los recordatorios siguen igual que antes.",
          },
          {
            label: "Valoración atendida",
            caption: "El profesional llega a una cita comprometida.",
          },
        ],
        points: [
          {
            title: "Pide un compromiso",
            description:
              "Un pago de reserva puede ayudar a reducir las citas sin compromiso.",
          },
          {
            title: "Ve qué citas están confirmadas",
            description:
              "Distingue las reservas pagadas de las solicitudes de cita.",
          },
          {
            title: "Recibe el dinero en tu cuenta",
            description:
              "Tu proveedor cobra el pago. DigitalFace conecta el agendamiento y nunca retiene tus fondos.",
          },
        ],
        note: "Es opcional y se configura por tipo de valoración: tú decides qué citas piden cuota y de cuánto. La cuota de valoración refuerza el compromiso; no es una garantía de asistencia.",
      },
      packagesTitle: "Elige el plan para tu consulta estética.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Organiza el interés en procedimientos",
          price: "$890",
          setup: "$597 de implementación única",
          description:
            "Organiza las consultas sobre procedimientos y envía una primera respuesta automática.",
          idealFor:
            "Para equipos que reciben consultas y necesitan dar seguimiento.",
          highlights: [
            "Cada consulta en un CRM",
            "Respuestas y seguimiento automáticos",
            "Enlaces de cita y recordatorios",
            "Mensaje tras una llamada perdida",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Contactos, mensajes y próximos pasos en un CRM y una bandeja compartida. Conecta dos fuentes de consultas y responde por SMS o correo. Mantén el contacto hasta que respondan o pidan dejar de recibir mensajes. Permite elegir un horario y recibir recordatorios de la cita. Envía un texto cuando tu número conectado pierde una llamada. Ve el avance de las consultas mientras cuidamos tu sistema.",
            },
            {
              title: "Qué cubre la implementación",
              description:
                "Configuramos tu proceso comercial, conectamos hasta 2 formularios o fuentes de leads con conexión nativa y montamos la primera respuesta, el seguimiento, el agendamiento y la respuesta a llamadas perdidas. Probamos el sistema y capacitamos a tu equipo. Migraciones e integraciones a medida se cotizan aparte.",
            },
            {
              title: "Qué gestionamos cada mes",
              description:
                "Monitoreo de los flujos, corrección de fallas del sistema entregado, una revisión de desempeño y hasta 1 hora de ajustes solicitados en textos o flujos. Los flujos nuevos se cotizan aparte. Tu equipo atiende las conversaciones y decide sobre las citas.",
            },
            {
              title: "Consumo y alcance",
              description:
                "No hay saldo de consumo incluido. Antes del lanzamiento acordamos las tarifas de los proveedores y un presupuesto mensual de consumo; los proveedores cobran directamente o detallamos esos cargos al costo. Sedes, calendarios, idiomas o fuentes de consultas adicionales requieren una nueva cotización.",
            },
            {
              title: "Cuándo subir de nivel",
              description:
                "Elige DigitalFace AI cuando tu equipo necesite ayuda para responder, calificar el interés y llevar las consultas a una cita confirmada. Los flujos de anticipo y recuperación de inasistencias comienzan allí.",
            },
            {
              title: "Alcance y límites",
              description:
                "1 sede · 1 proceso comercial · 1 calendario · inglés o español",
            },
            {
              title: "No incluido",
              description:
                "No incluye gestión de pauta, IA conversacional ni desarrollo de sitios web.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. Mensajería, correo y telefonía se cobran aparte al costo del proveedor.",
          },
          cta: "Hablar de Capture",
          footnotes: [],
        },
        {
          name: "DigitalFace AI",
          nicheName: "Suma apoyo con IA",
          price: "$1,490",
          setup: "$1,097 de implementación única",
          description:
            "Deja que la IA responda preguntas aprobadas y ayude a agendar valoraciones.",
          idealFor:
            "Para equipos que necesitan ayuda para responder y agendar.",
          featured: true,
          highlights: [
            "Todo lo de Capture",
            "Respuestas de IA en inglés y español",
            "Apoyo para agendar e intervención del equipo",
            "Seguimiento a citas perdidas y anticipos opcionales",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Tu chatbot de IA responde preguntas aprobadas en inglés y español. Identifica qué necesita cada persona antes de pasarla a tu equipo. Verifica disponibilidad y solicita confirmación antes de cambiar una cita. Pasa conversaciones sensibles al personal con todo el historial. Contacta a quienes faltaron a su cita e invítalos a reagendar. Permite reservar con un anticipo a través de tu proveedor de pagos.",
            },
            {
              title: "Qué cubre la implementación",
              description:
                "La configuración de Capture más una base de conocimiento aprobada, chat web y un canal de mensajería (WhatsApp o SMS), respuestas en inglés y español, hasta 2 calendarios, reglas de entrega al equipo, flujos de citas, pruebas y capacitación. Se conectan hasta 2 fuentes de consultas existentes; integraciones a medida y migraciones se cotizan aparte.",
            },
            {
              title: "Qué gestionamos cada mes",
              description:
                "Monitoreamos el sistema, corregimos los flujos entregados, revisamos la calidad de las conversaciones, ajustamos respuestas aprobadas y reportamos el avance de consultas a citas. Incluye una revisión mensual y hasta 2 horas de cambios solicitados en la base de conocimiento o los flujos; los sistemas nuevos se cotizan aparte.",
            },
            {
              title: "Límites en el agendamiento",
              description:
                "La IA solo atiende preguntas administrativas e interés comercial. No diagnostica, prescribe, determina elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. Tu equipo conserva la responsabilidad. Los cambios de citas requieren disponibilidad vigente cuando corresponda y confirmación explícita; las solicitudes sensibles pasan al personal.",
            },
            {
              title: "Anticipos y consumo",
              description:
                "Un flujo opcional de anticipo aprobado por tu equipo puede reforzar el compromiso con la cita; no garantiza asistencia. Tu proveedor de pagos deposita el dinero en tu cuenta y cobra sus comisiones. La IA y las comunicaciones no incluyen saldo de consumo; antes del lanzamiento acordamos tarifas y presupuesto mensual, con cobro directo o cargos detallados al costo.",
            },
            {
              title: "Cuándo ampliar el sistema",
              description:
                "Añade el Sales System cuando necesites gestión de pauta y una landing de campaña. Más sedes, calendarios, bases de conocimiento, canales o idiomas requieren una cotización con alcance definido.",
            },
            {
              title: "Alcance y límites",
              description:
                "1 sede · 1 proceso comercial · hasta 2 calendarios · 1 base de conocimiento",
            },
            {
              title: "No incluido",
              description:
                "No incluye pauta, sitios web, IA de voz ni campañas masivas de correo.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. IA, mensajería, correo, telefonía y comisiones de pago se cobran aparte al costo del proveedor.",
          },
          footnotes: [],
          cta: "Hablar de DigitalFace AI",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Suma publicidad para tu consulta",
          price: "A medida",
          priceCaption: "Se define y se cotiza según tus requerimientos",
          description:
            "Suma anuncios gestionados y una página para tu procedimiento prioritario.",
          idealFor:
            "Para clínicas listas para sumar publicidad y seguir las citas.",
          scopeNote:
            "Este es el alcance inicial. Acordamos el alcance final y la cotización antes de empezar.",
          highlights: [
            "Todo lo de DigitalFace AI",
            "Un canal de Meta Ads o Google Ads",
            "Una página de campaña · 2 rondas de revisión",
            "Hasta 4 variaciones estáticas de anuncios al mes",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Gestionamos un canal prioritario: Meta Ads o Google Ads. Presenta tu oferta en una página enfocada en generar consultas. Crea hasta cuatro variaciones mensuales con tus materiales. Ajusta las campañas según lo que funciona y lo que necesita atención. Conecta anuncios con consultas, citas y asistencia registrada. Revisa la captación y el agendamiento en una misma conversación.",
            },
            {
              title: "Qué cubre el alcance inicial",
              description:
                "La implementación de DigitalFace AI más un canal de campañas en Meta o Google, medición y una landing con hasta 2 rondas de revisión. La gestión mensual incluye optimización semanal, hasta 4 variaciones estáticas con material del cliente, una revisión y hasta 3 horas totales de cambios solicitados en el sistema o la landing.",
            },
            {
              title: "Presupuesto de pauta",
              description:
                "El alcance inicial gestiona hasta $5,000/mes de pauta en un canal de Meta o Google. Pagas directamente a la plataforma. Un segundo canal, TikTok, ofertas adicionales o mayor inversión requieren acordar un ajuste de alcance y gestión.",
            },
            {
              title: "Cómo cotizamos el alcance a medida",
              description:
                "Definimos la propuesta de implementación y gestión mensual en la consulta. Más sedes, marcas, consultas, procesos comerciales, integraciones, reportes o infraestructura dedicada afectan el alcance. Acordamos entregables, capacidad de soporte y tarifas por escrito antes de empezar.",
            },
            {
              title: "Medición y consumo",
              description:
                "Los reportes conectan la pauta con consultas, citas y asistencia registrada por el personal; tu equipo debe mantener los resultados actualizados. No se garantizan citas ni ingresos. La IA y las comunicaciones no incluyen saldo de consumo. Acordamos tarifas y presupuesto mensual antes del lanzamiento, con cobro directo o cargos detallados al costo.",
            },
            {
              title: "Límites de la IA y de las citas",
              description:
                "La IA responde preguntas administrativas aprobadas y califica interés comercial; no diagnostica, prescribe, decide elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. El personal atiende los casos sensibles. Los cambios de citas requieren confirmación explícita y disponibilidad vigente cuando corresponda. Los anticipos opcionales usan tu proveedor; no garantizan asistencia.",
            },
            {
              title: "Alcance y límites",
              description:
                "Alcance inicial: 1 sede · 1 oferta · 1 canal publicitario",
            },
            {
              title: "No incluido",
              description:
                "Sitios web completos, foto/video profesional, SEO y reactivación masiva son proyectos aparte.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. Pagas la pauta directamente a Meta o Google. IA, mensajería y otros cargos de proveedores se cobran aparte al costo.",
          },
          cta: "Hablar de mi Sales System",
          footnotes: [
            "El alcance inicial gestiona hasta $5,000 al mes de pauta. Más presupuesto o canales requieren un ajuste de tarifa acordado.",
          ],
        },
      ],
      faqTitle: "Antes de agendar",
      faqDescription: "Respuestas rápidas sobre tu equipo y el sistema.",
      faq: [
        {
          question: "¿La IA puede recomendar un procedimiento?",
          answer:
            "No. Comparte información administrativa aprobada. Las recomendaciones, la elegibilidad, el diagnóstico y la orientación médica quedan a cargo de los profesionales.",
        },
        {
          question: "¿El personal puede tomar la conversación?",
          answer:
            "Sí. Tu equipo puede hacerse cargo cuando una conversación es clínica, urgente o sensible.",
        },
        {
          question: "¿Pueden conectar las consultas de redes sociales?",
          answer:
            "Sí. Podemos conectar formularios, mensajes y respuestas a comentarios de Facebook e Instagram cuando están incluidos en tu alcance.",
        },
        {
          question: "¿Pueden retomar pacientes que no agendaron?",
          answer:
            "Sí. El seguimiento puede retomar consultas que no se agendaron. Los recordatorios a pacientes existentes y la reactivación masiva se acuerdan aparte. Las dudas médicas pasan a tu equipo.",
        },
        {
          question: "¿Garantizan una cantidad de pacientes?",
          answer:
            "No. Los resultados dependen de la demanda, el presupuesto, tu oferta, la elegibilidad clínica, los precios, la reputación y el proceso de valoración.",
        },
      ],
      booking: {
        title: "¿Quieres más solicitudes de valoración?",
        description:
          "Agenda una llamada. Revisamos tu comunicación con pacientes y te recomendamos un plan.",
        proposalTitle: "¿Necesitas un plan estético a medida?",
        proposalDescription:
          "Cuéntanos sobre tus sedes, pacientes internacionales o recepción de casos.",
      },
    },

    "med-spas": {
      navLabel: "Med Spas",
      industryLabel: "Sistema de Crecimiento para Med Spas",
      metadata: {
        title:
          "Marketing para Med Spas y Agendamiento de Citas | DigitalFace Marketing",
        description:
          "Convierte el interés por un tratamiento en clientes que agendan y regresan. DigitalFace opera las promociones, el agendamiento con IA, los anticipos, las nuevas reservas y la reactivación de clientes de med spas en Estados Unidos y Latinoamérica.",
      },
      hero: {
        eyebrow: "DigitalFace para med spas",
        title: "Convierte el interés en tu med spa en visitas frecuentes.",
        description:
          "Marketing para med spas, respuestas y seguimiento a cargo de DigitalFace. Da continuidad a tus tratamientos, paquetes y membresías.",
        primaryCta: "Agendar una llamada para mi med spa",
        secondaryCta: "Ver cómo funciona",
        visualTitle: "Recorrido de agendamiento del med spa",
        visualStages: [
          "Consulta sobre oferta recibida",
          "Conversación de reserva iniciada",
          "Cita agendada",
        ],
        mediaHeadline: "Mantén el contacto después de la primera visita.",
      },
      stats: [
        { value: "24/7", label: "Solicitudes de cita respondidas" },
        { value: "EN + ES", label: "Comunicación bilingüe con clientes" },
        {
          value: "Recurrencia",
          label: "Retención dentro de la agenda",
        },
      ],
      problem: {
        eyebrow: "La brecha del agendamiento",
        title:
          "Tu equipo debería estar atendiendo clientes, no persiguiendo cada mensaje de Instagram a mano.",
        description:
          "DigitalFace mantiene en movimiento el interés por las promociones, las conversaciones de agendamiento y la retención sin sumar más caos a la bandeja de entrada.",
        items: [
          {
            title: "Cada promoción cae en cinco bandejas a la vez",
            description:
              "Respuestas a historias, comentarios, mensajes directos, formularios y llamadas llegan juntas y sin responsable, y una oferta de temporada genera más en una tarde de los que alguien alcanza a responder antes de que se enfríe el interés.",
          },
          {
            title: "Precios, paquetes y membresías explicados a mano",
            description:
              "Tu equipo vuelve a escribir las mismas respuestas aprobadas sobre precios, paquetes y condiciones de membresía en cuatro canales.",
          },
          {
            title: "Inasistencias y espacios de agenda sin usar",
            description:
              "Confirmaciones, recordatorios, reprogramación y recuperación dependen de que alguien recuerde, y las salas y el personal quedan ociosos.",
          },
          {
            title: "Una base de clientes que no vuelve sola",
            description:
              "Clientes anteriores, membresías vencidas y paquetes sin terminar nunca se segmentan para volver a reservar, y las buenas visitas no se convierten de forma confiable en reseñas, referidos y una siguiente cita.",
          },
        ],
      },
      gallery: {
        eyebrow: "Dentro del spa",
        title: "Dedica menos tiempo a perseguir reservas.",
        description:
          "Dale al nuevo cliente un siguiente paso claro y al que ya te conoce una razón para volver.",
        moments: [
          {
            title: "Responde a tiempo sobre la oferta",
            description:
              "Contesta preguntas aprobadas sobre precios, paquetes y membresías.",
            alt: "Equipo de un med spa atendiendo a clientas en la recepción",
          },
          {
            title: "Atiende sin interrupciones",
            description:
              "Ayuda a reservar mientras tu equipo realiza los tratamientos.",
            alt: "Piscina interior de spa iluminada con velas",
          },
          {
            title: "Invita a tus clientes a volver",
            description:
              "Suma seguimiento para paquetes pendientes, membresías vencidas y próximas visitas, con alcance y cotización aparte.",
            alt: "Zona de descanso de un med spa premium",
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
            title: "Campañas de promoción con atribución de la oferta",
            description:
              "Meta, Instagram, Google u otro canal justificado, armado según la oferta, la temporada y el mercado local, con cada oportunidad llevando el tratamiento, la oferta y el canal que la generó, así sabes qué promociones realmente llenan la agenda.",
          },
          {
            title: "Concierge de agendamiento con IA",
            description:
              "Respuestas aprobadas en inglés y español para precios, paquetes e intención de reserva mucho después de que sale el último cliente.",
          },
          {
            title: "Ciclo completo de la cita",
            description:
              "Agendamiento, anticipos, recordatorios, reprogramación, cancelaciones y recuperación de inasistencias se conectan al mismo calendario.",
          },
          {
            title: "Reactivación, reseñas y visitas recurrentes",
            description:
              "Los segmentos aprobados, como clientes inactivos, paquetes sin terminar o membresías por vencer, reciben la campaña que corresponde, y los recorridos posteriores a la visita piden reseña e impulsan la siguiente reserva.",
          },
        ],
      },
      adCampaignDemo: {
        eyebrow: "01 · Atraer",
        title: "Convierte tu próxima oferta en solicitudes de cita.",
        description:
          "Sales System suma Meta Ads o Google Ads para el tratamiento u oferta principal de tu med spa.",
        ctaLabel: "Hablar de campañas para mi med spa",
        phoneCaption: "Anuncio y solicitud de ejemplo",
        bridge: "Siguiente paso: responder mientras la oferta interesa.",
        stages: [
          {
            title: "Llega a clientes cercanos",
            description:
              "Promociona los tratamientos y membresías que quieres impulsar.",
          },
          {
            title: "Presenta una oferta clara",
            description: "Dale al interesado un siguiente paso sencillo.",
          },
          {
            title: "Recibe la solicitud",
            description: "Guarda el tratamiento, el idioma y el contacto.",
          },
          {
            title: "Prepara la reserva",
            description:
              "Mantén cada respuesta junto a la oferta que la generó.",
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
        title: "Deja las preguntas de reserva en manos de la IA.",
        description:
          "Tu chatbot de IA explica las ofertas aprobadas, ayuda a elegir horario y mantiene el seguimiento mientras atiendes.",
        ctaLabel: "Hablar del apoyo para reservas",
        phoneCaption: "Conversación de ejemplo",
        stages: [
          {
            title: "Reúne los mensajes",
            description:
              "Conecta los mensajes, formularios y llamadas acordados en tu plan.",
          },
          {
            title: "Explica la oferta",
            description:
              "Responde preguntas aprobadas sobre promociones y paquetes.",
          },
          {
            title: "Ayuda a elegir horario",
            description: "Ayuda a agendar dentro de la conversación.",
          },
          {
            title: "Mantén el contacto",
            description:
              "Envía recordatorios y retoma el contacto tras una cita perdida.",
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
        title: "Ve quién quiere reservar o volver.",
        description:
          "Reúne cada oferta, conversación y siguiente paso en tu CRM. Recepción puede ver quién necesita atención.",
        ctaLabel: "Hablar de mi med spa",
        boardCaption: "Recorrido de cliente de ejemplo",
        bridge: "Sigue las reservas y mantén el contacto con tus clientes.",
        stages: [
          {
            title: "Solicitud recibida",
            description:
              "Los comentarios y mensajes conectados se convierten en solicitudes visibles.",
          },
          {
            title: "Cliente atendido",
            description: "Tu equipo puede ver la respuesta sobre la oferta.",
          },
          {
            title: "Tratamiento elegido",
            description: "La elección del cliente queda registrada.",
          },
          {
            title: "Cita solicitada",
            description:
              "Revisa el horario solicitado y el próximo seguimiento.",
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
      appointmentCommitment: {
        eyebrow: "Opcional · Desde DigitalFace AI",
        title: "Confirma reservas con un anticipo opcional.",
        description:
          "Elige qué tratamientos requieren un pago de reserva antes de confirmar la cita.",
        steps: [
          {
            label: "Cita solicitada",
            caption: "El cliente elige un horario de tu disponibilidad real.",
          },
          {
            label: "Reserva solicitada",
            caption:
              "Con el agendamiento sale una solicitud de pago, solo en los tratamientos que tú elijas.",
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
            title: "Ve qué citas están confirmadas",
            description:
              "Distingue las reservas pagadas de las solicitudes de cita.",
          },
          {
            title: "Recibe el dinero en tu cuenta",
            description:
              "Tu proveedor cobra el pago. DigitalFace conecta el agendamiento y nunca retiene tus fondos.",
          },
        ],
        note: "Es opcional y se configura por tratamiento: tú decides qué citas piden anticipo y de cuánto. El anticipo refuerza el compromiso; no es una garantía de asistencia.",
      },
      packagesTitle: "Elige el plan para tu med spa.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Organiza las solicitudes de cita",
          price: "$890",
          setup: "$597 de implementación única",
          description:
            "Organiza las consultas sobre tratamientos y paquetes, con respuestas y recordatorios automáticos.",
          idealFor:
            "Para equipos que reciben consultas y necesitan dar seguimiento.",
          highlights: [
            "Cada consulta en un CRM",
            "Respuestas y seguimiento automáticos",
            "Enlaces de cita y recordatorios",
            "Mensaje tras una llamada perdida",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Contactos, mensajes y próximos pasos en un CRM y una bandeja compartida. Conecta dos fuentes de consultas y responde por SMS o correo. Mantén el contacto hasta que respondan o pidan dejar de recibir mensajes. Permite elegir un horario y recibir recordatorios de la cita. Envía un texto cuando tu número conectado pierde una llamada. Ve el avance de las consultas mientras cuidamos tu sistema.",
            },
            {
              title: "Qué cubre la implementación",
              description:
                "Configuramos tu proceso comercial, conectamos hasta 2 formularios o fuentes de leads con conexión nativa y montamos la primera respuesta, el seguimiento, el agendamiento y la respuesta a llamadas perdidas. Probamos el sistema y capacitamos a tu equipo. Migraciones e integraciones a medida se cotizan aparte.",
            },
            {
              title: "Qué gestionamos cada mes",
              description:
                "Monitoreo de los flujos, corrección de fallas del sistema entregado, una revisión de desempeño y hasta 1 hora de ajustes solicitados en textos o flujos. Los flujos nuevos se cotizan aparte. Tu equipo atiende las conversaciones y decide sobre las citas.",
            },
            {
              title: "Consumo y alcance",
              description:
                "No hay saldo de consumo incluido. Antes del lanzamiento acordamos las tarifas de los proveedores y un presupuesto mensual de consumo; los proveedores cobran directamente o detallamos esos cargos al costo. Sedes, calendarios, idiomas o fuentes de consultas adicionales requieren una nueva cotización.",
            },
            {
              title: "Cuándo subir de nivel",
              description:
                "Elige DigitalFace AI cuando tu equipo necesite ayuda para responder, calificar el interés y llevar las consultas a una cita confirmada. Los flujos de anticipo y recuperación de inasistencias comienzan allí.",
            },
            {
              title: "Alcance y límites",
              description:
                "1 sede · 1 proceso comercial · 1 calendario · inglés o español",
            },
            {
              title: "No incluido",
              description:
                "No incluye gestión de pauta, IA conversacional ni desarrollo de sitios web.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. Mensajería, correo y telefonía se cobran aparte al costo del proveedor.",
          },
          cta: "Hablar de Capture",
          footnotes: [],
        },
        {
          name: "DigitalFace AI",
          nicheName: "Suma apoyo de IA para reservas",
          price: "$1,490",
          setup: "$1,097 de implementación única",
          description:
            "Deja que la IA explique ofertas aprobadas y ayude a reservar o reprogramar.",
          idealFor:
            "Para equipos que necesitan ayuda para responder y agendar.",
          featured: true,
          highlights: [
            "Todo lo de Capture",
            "Respuestas de IA en inglés y español",
            "Apoyo para agendar e intervención del equipo",
            "Seguimiento a citas perdidas y anticipos opcionales",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Tu chatbot de IA responde preguntas aprobadas en inglés y español. Identifica qué necesita cada persona antes de pasarla a tu equipo. Verifica disponibilidad y solicita confirmación antes de cambiar una cita. Pasa conversaciones sensibles al personal con todo el historial. Contacta a quienes faltaron a su cita e invítalos a reagendar. Permite reservar con un anticipo a través de tu proveedor de pagos.",
            },
            {
              title: "Qué cubre la implementación",
              description:
                "La configuración de Capture más una base de conocimiento aprobada, chat web y un canal de mensajería (WhatsApp o SMS), respuestas en inglés y español, hasta 2 calendarios, reglas de entrega al equipo, flujos de citas, pruebas y capacitación. Se conectan hasta 2 fuentes de consultas existentes; integraciones a medida y migraciones se cotizan aparte.",
            },
            {
              title: "Qué gestionamos cada mes",
              description:
                "Monitoreamos el sistema, corregimos los flujos entregados, revisamos la calidad de las conversaciones, ajustamos respuestas aprobadas y reportamos el avance de consultas a citas. Incluye una revisión mensual y hasta 2 horas de cambios solicitados en la base de conocimiento o los flujos; los sistemas nuevos se cotizan aparte.",
            },
            {
              title: "Límites en el agendamiento",
              description:
                "La IA solo atiende preguntas administrativas e interés comercial. No diagnostica, prescribe, determina elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. Tu equipo conserva la responsabilidad. Los cambios de citas requieren disponibilidad vigente cuando corresponda y confirmación explícita; las solicitudes sensibles pasan al personal.",
            },
            {
              title: "Anticipos y consumo",
              description:
                "Un flujo opcional de anticipo aprobado por tu equipo puede reforzar el compromiso con la cita; no garantiza asistencia. Tu proveedor de pagos deposita el dinero en tu cuenta y cobra sus comisiones. La IA y las comunicaciones no incluyen saldo de consumo; antes del lanzamiento acordamos tarifas y presupuesto mensual, con cobro directo o cargos detallados al costo.",
            },
            {
              title: "Cuándo ampliar el sistema",
              description:
                "Añade el Sales System cuando necesites gestión de pauta y una landing de campaña. Más sedes, calendarios, bases de conocimiento, canales o idiomas requieren una cotización con alcance definido.",
            },
            {
              title: "Alcance y límites",
              description:
                "1 sede · 1 proceso comercial · hasta 2 calendarios · 1 base de conocimiento",
            },
            {
              title: "No incluido",
              description:
                "No incluye pauta, sitios web, IA de voz ni campañas masivas de correo.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. IA, mensajería, correo, telefonía y comisiones de pago se cobran aparte al costo del proveedor.",
          },
          footnotes: [],
          cta: "Hablar de DigitalFace AI",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Suma publicidad para tu med spa",
          price: "A medida",
          priceCaption: "Se define y se cotiza según tus requerimientos",
          description:
            "Suma anuncios gestionados y una página para tu tratamiento u oferta principal.",
          idealFor:
            "Para clínicas listas para sumar publicidad y seguir las citas.",
          scopeNote:
            "Este es el alcance inicial. Acordamos el alcance final y la cotización antes de empezar.",
          highlights: [
            "Todo lo de DigitalFace AI",
            "Un canal de Meta Ads o Google Ads",
            "Una página de campaña · 2 rondas de revisión",
            "Hasta 4 variaciones estáticas de anuncios al mes",
          ],
          details: [
            {
              title: "Qué recibes",
              description:
                "Gestionamos un canal prioritario: Meta Ads o Google Ads. Presenta tu oferta en una página enfocada en generar consultas. Crea hasta cuatro variaciones mensuales con tus materiales. Ajusta las campañas según lo que funciona y lo que necesita atención. Conecta anuncios con consultas, citas y asistencia registrada. Revisa la captación y el agendamiento en una misma conversación.",
            },
            {
              title: "Qué cubre el alcance inicial",
              description:
                "La implementación de DigitalFace AI más un canal de campañas en Meta o Google, medición y una landing con hasta 2 rondas de revisión. La gestión mensual incluye optimización semanal, hasta 4 variaciones estáticas con material del cliente, una revisión y hasta 3 horas totales de cambios solicitados en el sistema o la landing.",
            },
            {
              title: "Presupuesto de pauta",
              description:
                "El alcance inicial gestiona hasta $5,000/mes de pauta en un canal de Meta o Google. Pagas directamente a la plataforma. Un segundo canal, TikTok, ofertas adicionales o mayor inversión requieren acordar un ajuste de alcance y gestión.",
            },
            {
              title: "Cómo cotizamos el alcance a medida",
              description:
                "Definimos la propuesta de implementación y gestión mensual en la consulta. Más sedes, marcas, consultas, procesos comerciales, integraciones, reportes o infraestructura dedicada afectan el alcance. Acordamos entregables, capacidad de soporte y tarifas por escrito antes de empezar.",
            },
            {
              title: "Medición y consumo",
              description:
                "Los reportes conectan la pauta con consultas, citas y asistencia registrada por el personal; tu equipo debe mantener los resultados actualizados. No se garantizan citas ni ingresos. La IA y las comunicaciones no incluyen saldo de consumo. Acordamos tarifas y presupuesto mensual antes del lanzamiento, con cobro directo o cargos detallados al costo.",
            },
            {
              title: "Límites de la IA y de las citas",
              description:
                "La IA responde preguntas administrativas aprobadas y califica interés comercial; no diagnostica, prescribe, decide elegibilidad clínica ni aprueba decisiones médicas o financieras sensibles. El personal atiende los casos sensibles. Los cambios de citas requieren confirmación explícita y disponibilidad vigente cuando corresponda. Los anticipos opcionales usan tu proveedor; no garantizan asistencia.",
            },
            {
              title: "Alcance y límites",
              description:
                "Alcance inicial: 1 sede · 1 oferta · 1 canal publicitario",
            },
            {
              title: "No incluido",
              description:
                "Sitios web completos, foto/video profesional, SEO y reactivación masiva son proyectos aparte.",
            },
          ],
          note: {
            title: "Costos de plataforma y consumo",
            body: "CRM y hosting estándar incluidos. Pagas la pauta directamente a Meta o Google. IA, mensajería y otros cargos de proveedores se cobran aparte al costo.",
          },
          cta: "Hablar de mi Sales System",
          footnotes: [
            "El alcance inicial gestiona hasta $5,000 al mes de pauta. Más presupuesto o canales requieren un ajuste de tarifa acordado.",
          ],
        },
      ],
      faqTitle: "Antes de agendar",
      faqDescription: "Respuestas rápidas sobre tu equipo y el sistema.",
      faq: [
        {
          question: "¿La IA puede explicar tratamientos y ofertas?",
          answer:
            "Sí, con respuestas administrativas aprobadas. La elegibilidad clínica, las contraindicaciones, el diagnóstico y la orientación médica quedan a cargo de los profesionales.",
        },
        {
          question: "¿Pueden conectar Instagram y Facebook?",
          answer:
            "Sí. Los formularios, canales de mensajes y respuestas a comentarios configurados se conectan cuando están incluidos en tu alcance.",
        },
        {
          question: "¿El personal puede tomar la conversación?",
          answer:
            "Sí. Tu equipo puede intervenir cuando lo pidan o si la pregunta es clínica, sensible, urgente o fuera de las respuestas aprobadas.",
        },
        {
          question: "¿Pueden dar seguimiento a membresías y paquetes?",
          answer:
            "Sí, como trabajo con alcance y cotización aparte. Puedes seguir membresías y sesiones pendientes, enviar recordatorios y solicitar pagos mediante tu proveedor. No reemplaza tu punto de venta ni la historia clínica.",
        },
        {
          question: "¿Incluyen fotos y video profesionales?",
          answer:
            "No. Tú aportas fotos y video aprobados; nosotros adaptamos los materiales acordados para campañas y páginas de reserva.",
        },
      ],
      booking: {
        title: "¿Quieres más reservas y clientes que vuelvan?",
        description:
          "Agenda una llamada. Revisamos tus ofertas y seguimiento, y te recomendamos un plan.",
        proposalTitle: "¿Necesitas un plan de med spa a medida?",
        proposalDescription:
          "Cuéntanos sobre tus membresías, paquetes, sedes o próximas visitas.",
      },
    },
  },
};
