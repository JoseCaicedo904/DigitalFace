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
    },
    capabilitiesDisclaimer:
      "DigitalFace automatiza la comunicación administrativa y los procesos del negocio. La responsabilidad clínica siempre es de los profesionales autorizados.",
    packages: {
      eyebrow: "Dos niveles de crecimiento y un plan a medida",
      description:
        "Todos los paquetes los implementa y administra DigitalFace, con CRM incluido. Abre cualquier punto para ver el alcance real detrás del titular.",
      mostPopular: "Más elegido",
      perMonth: "/mes",
      expandLabel: "Abre cualquier punto",
      idealFor: "Ideal para",
      customProposal: "Solicitar propuesta a la medida",
      noContract:
        "No se requiere contrato anual. Todos los planes funcionan mes a mes.",
      footnote:
        "La inversión en pauta la pagas tú directamente a las plataformas, y cada plan indica el presupuesto que gestiona; presupuestos superiores requieren un ajuste en la tarifa de gestión. El uso de IA por encima del saldo incluido, el envío de correos, la mensajería, la telefonía y consumos poco habituales de terceros se facturan según el alcance aprobado. La producción profesional de foto y video no está incluida.",
    },
    proof: {
      eyebrow: "Sistemas entregados",
      title: "Experiencia real de operación detrás del sistema",
      description:
        "Hoy hay dos sistemas de clientes activos. Muestran las capacidades de comunicación, agendamiento, CRM y traspaso humano que usan estos paquetes.",
      activeLabel: "Cliente activo",
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
          "Convierte las consultas de implantes, carillas y diseño de sonrisa en valoraciones atendidas. DigitalFace opera la pauta, el seguimiento bilingüe, el agendamiento de valoraciones y la recuperación del tratamiento pendiente de clínicas odontológicas en Estados Unidos y Latinoamérica.",
      },
      hero: {
        eyebrow: "DigitalFace para clínicas odontológicas",
        title: "Convierte más consultas dentales en valoraciones agendadas.",
        description:
          "Un solo sistema administrado que conecta la pauta odontológica, la admisión de pacientes nuevos, el agendamiento de valoraciones y el seguimiento del plan de tratamiento, desde la primera consulta hasta la valoración atendida.",
        primaryCta: "Agenda tu diagnóstico odontológico",
        secondaryCta: "Ver el sistema dental",
        visualTitle: "Recorrido de una consulta dental",
        visualStages: [
          "Nueva consulta por carillas registrada",
          "Respuesta bilingüe enviada",
          "Valoración agendada y confirmada",
        ],
        mediaHeadline:
          "Tu equipo sigue en el sillón. La consulta igual se responde, se agenda y se sigue.",
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
        title:
          "El consultorio sigue siendo tuyo. Lo administrativo deja de depender de la memoria.",
        description:
          "Nada de esto cambia cómo tratas. Cambia lo que pasa en las horas alrededor de la cita, cuando tu equipo está en el sillón y la consulta sigue esperando respuesta.",
        moments: [
          {
            title: "La valoración que sí se agenda",
            description:
              "Una consulta por carillas a las 9 de la noche se responde en segundos y entra en la agenda de mañana, no en la lista de pendientes.",
            alt: "Odontólogo comparando la guía de color con un paciente sonriente",
          },
          {
            title: "El sillón que deja de quedarse vacío",
            description:
              "Confirmaciones, recordatorios y reprogramaciones corren solos, así que los huecos del día se cierran antes de que alguien los note.",
            alt: "Lámpara e instrumental en un consultorio odontológico moderno",
          },
          {
            title: "La recepción que deja de perseguir",
            description:
              "Interés de tratamiento, fotos y notas llegan en un mismo registro: tu coordinadora abre un caso en lugar de reconstruirlo.",
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
          "Esta es esa misma consulta dentro del sistema dental: respondida con la clínica cerrada, con la foto, el interés de tratamiento y la pregunta de financiación ya organizados antes de que alguien de tu equipo la abra.",
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
              "El tratamiento por el que pregunta el paciente, y la foto que envió, quedan en la ficha.",
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
        eyebrow: "Compromiso de la valoración",
        title:
          "Una valoración solicitada no es lo mismo que una valoración confirmada.",
        description:
          "Consulta, conversación, interés de tratamiento, agendamiento y, cuando le sirve a tu clínica, un paso más: una reserva, un anticipo o una cuota de valoración que debe acreditarse antes de dar la cita por confirmada.",
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
            title: "Menos reservas sin intención",
            description:
              "Un espacio de valoración que cuesta reservar lo pide quien realmente piensa asistir, así las solicitudes casuales dejan de ocupar sillón.",
          },
          {
            title: "Una agenda sobre la que se puede planear",
            description:
              "Confirmada significa pagada y confirmada, no solo solicitada: el día que ve tu recepción es el día que la clínica realmente va a trabajar.",
          },
          {
            title: "Tu proveedor, tu dinero",
            description:
              "Los pagos pasan por el proveedor de pagos que tu clínica ya usa y llegan a tu cuenta. DigitalFace conecta el agendamiento con él y nunca retiene tus fondos.",
          },
        ],
        note: "Es opcional y se configura por tratamiento: tú decides qué valoraciones piden reserva y de cuánto. La reserva refuerza el compromiso; no es una garantía de asistencia.",
      },
      packagesTitle:
        "Elige el nivel de crecimiento odontológico que corresponde a tu clínica hoy.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Captación de Pacientes Dentales",
          price: "$890",
          setup: "$597 de implementación única",
          description:
            "Genera consultas de implantes, carillas y diseño de sonrisa, captúralas todas en tu CRM y responde automáticamente.",
          idealFor:
            "Clínicas que necesitan un flujo confiable de pacientes nuevos y una forma de dejar de perderlos.",
          highlights: [
            "Un canal prioritario de captación",
            "CRM incluido para admisión de pacientes y seguimiento",
            "Respuesta automática inmediata, agendamiento y recordatorios",
            "Anticipo opcional para confirmar la valoración",
          ],
          details: [
            {
              title: "Captación dental administrada",
              description:
                "Configuramos y administramos un canal prioritario en Meta, Google o TikTok, elegido según tu mezcla de tratamientos, tu mercado y la demanda real de implantes, carillas o diseño de sonrisa.",
            },
            {
              title: "CRM de pacientes incluido",
              description:
                "La captura de leads, la gestión del proceso comercial y el seguimiento van incluidos. Cada consulta queda como una oportunidad organizada, con su origen, su interés de tratamiento, su etapa y su historial completo, para que nadie reconstruya el caso leyendo el chat.",
            },
            {
              title: "Respuesta automática inmediata",
              description:
                "Mensajes automáticos por SMS y correo confirman cada consulta al instante y llevan al paciente hacia agendar su valoración, a cualquier hora.",
            },
            {
              title: "Calendario de citas y recordatorios",
              description:
                "Enlaces de agendamiento, confirmaciones, recordatorios e instrucciones de reprogramación reemplazan casi toda la coordinación manual que hoy hace recepción, y reducen inasistencias evitables.",
            },
            {
              title: "Revisión mensual de desempeño",
              description:
                "Revisamos el origen de las consultas, la actividad de respuesta, las valoraciones agendadas y atendidas y el costo por valoración agendada, y acordamos el siguiente movimiento de campaña.",
            },
          ],
          note: {
            title: "Presupuesto publicitario",
            body: "La gestión incluye presupuestos publicitarios de hasta $1,000 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
          },
          cta: "Empezar con Captación Dental",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Sistema Dental Completo",
          price: "$1,490",
          setup: "$1,097 de implementación única",
          description:
            "Dos canales de captación, un sitio web de conversión, comunicación con IA e infraestructura de campañas, administrados como un solo sistema.",
          idealFor:
            "Clínicas listas para operar todo el sistema de captación y conversión, con IA respondiendo a toda hora.",
          featured: true,
          highlights: [
            "Todo lo de DigitalFace Capture",
            "Sitio web de conversión + hasta 2 formularios",
            "Comunicación con IA con $20 de saldo mensual",
          ],
          details: [
            {
              title: "Todo lo de Capture, más un segundo canal",
              description:
                "Dos canales en Meta, Google o TikTok, administrados en conjunto, moviendo el presupuesto hacia el que esté generando valoraciones atendidas, no solo clics. Debajo sigue incluida toda la base de DigitalFace Capture: captación, CRM, primera respuesta, calendario y reportes.",
            },
            {
              title: "Sitio web de conversión con hasta 2 formularios",
              description:
                "Un sitio web enfocado en conversión con hasta dos formularios de paciente nuevo conectados directamente a tu CRM. No son páginas, ajustes ni desarrollo ilimitados.",
            },
            {
              title: "Comunicación bilingüe con IA",
              description:
                "El asistente responde en inglés y español usando únicamente lo que apruebas: los tratamientos que ofreces, horarios, ubicación, políticas de financiación y lo que tu clínica sí y no cotiza por chat. Cada mes incluye $20 de saldo de uso de IA.",
            },
            {
              title: "Traspaso clínico y de excepciones",
              description:
                "Diagnósticos, viabilidad del tratamiento, excepciones de financiación, reclamos y urgencias pasan a tu equipo, nunca al asistente.",
            },
            {
              title: "Configuración y automatización de email marketing",
              description:
                "Construimos y operamos la automatización de las campañas, incluidas las secuencias de recuperación para pacientes con tratamiento sin agendar. El envío de correos se factura por volumen, y las campañas, plantillas o textos adicionales por fuera del alcance acordado se cotizan aparte.",
            },
            {
              title: "Hasta 4 piezas publicitarias estáticas al mes",
              description:
                "Piezas estáticas de foto o gráfica, adaptadas con textos en inglés y español. La producción de video no está incluida.",
            },
          ],
          note: {
            title: "Presupuesto publicitario",
            body: "La gestión incluye presupuestos publicitarios de hasta $2,500 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
          },
          footnotes: [
            "El uso de IA por encima del saldo de $20 incluido se factura a $0.40 por cada 1M de tokens de entrada y $2.40 por cada 1M de tokens de salida.",
            "El envío de correos se factura a $1.35 por cada 1.000 correos enviados.",
            "La producción de video no está incluida. Podemos conectarte con un aliado de producción externo cuando lo necesites.",
          ],
          cta: "Empezar con el Sistema Dental Completo",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Plan Dental a Medida",
          price: "A medida",
          priceCaption: "Se define y se cotiza según tus requerimientos",
          description:
            "Para clínicas con presupuestos mayores, varias sedes, captación avanzada, automatización compleja o integraciones a medida.",
          idealFor:
            "Clínicas cuyos requerimientos van más allá de un paquete fijo.",
          scopeNote:
            "Son capacidades disponibles, no una lista de inclusiones fijas. Definimos y cotizamos únicamente lo que tu clínica realmente necesita.",
          highlights: [
            "Varios canales de captación y presupuestos mayores",
            "CRM, IA e integraciones avanzadas",
            "Sedes, idiomas adicionales y soporte prioritario",
          ],
          details: [
            {
              title: "Varios canales y presupuestos mayores",
              description:
                "Más de dos canales trabajando juntos, con la mezcla armada según tu mercado, tu presupuesto y los casos que quieres atraer, ya sean implantes, arcada completa o estética. Los presupuestos publicitarios pueden superar los topes que gestionan los planes fijos, con la tarifa de gestión ajustada al alcance que acordemos.",
            },
            {
              title: "Sedes e idiomas adicionales",
              description:
                "Campañas, calendarios, procesos y conversaciones separados por sede, y comunicación más allá del inglés y el español.",
            },
            {
              title: "Arquitectura avanzada de CRM e IA",
              description:
                "Procesos por tipo de tratamiento, más los roles, permisos y reportería con los que realmente trabajan tus coordinadoras de tratamiento. El asistente maneja más conocimiento aprobado, más canales y una lógica de calificación y enrutamiento más compleja que la del estándar.",
            },
            {
              title: "Integraciones, anticipos y reglas de prepago a medida",
              description:
                "Conexiones con tu software de gestión, facturación o herramientas internas, y automatizaciones diseñadas para tu operación específica. Los montos de reserva pueden variar por tratamiento, profesional o sede, con prepago de paquetes y tus propias reglas de devolución o crédito conectadas al proveedor de pagos que ya usas.",
            },
            {
              title: "Reactivación, reportería y soporte prioritario",
              description:
                "Recuperación y reactivación estructurada de tu base de pacientes, atribución desde la campaña hasta la valoración atendida, y un nivel de soporte acordado contigo.",
            },
          ],
          note: {
            title: "Cómo se construye el precio",
            body: "Tus requerimientos, el presupuesto publicitario, los canales, las sedes, las integraciones, el uso de IA, la complejidad de las automatizaciones y el nivel de soporte. Definimos el alcance contigo antes de cotizar.",
          },
          cta: "Armar mi Plan Dental a Medida",
        },
      ],
      faqTitle: "Lo que más nos preguntan las clínicas odontológicas",
      faqDescription:
        "Revisamos tus canales de captación, tus tiempos de respuesta, el flujo de valoraciones, la recuperación del tratamiento pendiente y las conversaciones de financiación antes de recomendarte un paquete.",
      faq: [
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
          question:
            "¿Puede dar seguimiento a los planes de tratamiento que nunca se agendaron?",
          answer:
            "Sí. Los pacientes con tratamiento sin agendar se pueden segmentar en el CRM y entrar a una secuencia de recuperación aprobada. Apenas el paciente responde con una pregunta sobre su propio caso, la conversación pasa a tu equipo.",
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
          "Elige un horario que te acomode para revisar cómo tu clínica atrae pacientes nuevos, convierte consultas en valoraciones atendidas y da seguimiento al tratamiento sin agendar.",
        proposalTitle: "¿Necesitas un flujo dental a la medida?",
        proposalDescription:
          "Pide una propuesta para recepción de fotos, pacientes internacionales, migración de CRM, sedes adicionales u otro proceso propio de tu clínica.",
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
        title:
          "Convierte el interés por un procedimiento en valoraciones calificadas y atendidas.",
        description:
          "Responde en segundos, registra la zona de interés de cada paciente, escala a tu equipo todo lo clínico y lleva las consultas serias hasta una valoración agendada.",
        primaryCta: "Agenda tu diagnóstico estético",
        secondaryCta: "Ver el recorrido del paciente",
        visualTitle: "Recorrido hacia la valoración estética",
        visualStages: [
          "Consulta por procedimiento registrada",
          "Zona de interés organizada",
          "Valoración agendada y preparada",
        ],
        mediaHeadline:
          "Lo administrativo corre solo. Todo lo clínico sigue llegando a tu equipo.",
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
        title:
          "Criterio médico en la consulta. Criterio médico también en la bandeja de entrada.",
        description:
          "La automatización resuelve lo administrativo y se detiene donde debe. Todo lo clínico llega a ti: no a un guion, no a un bot, no a alguien adivinando.",
        moments: [
          {
            title: "La valoración sigue siendo tuya",
            description:
              "Precios, disponibilidad y dudas generales del proceso se responden al instante. Lo clínico se escala al médico, siempre.",
            alt: "Médico evaluando el rostro de una paciente en una consulta estética",
          },
          {
            title: "La valoración llega preparada",
            description:
              "Zona de interés, antecedentes y las fotos que envió el paciente ya están en el registro antes de que se siente.",
            alt: "Profesional examinando el rostro de una paciente en una valoración estética",
          },
          {
            title: "La sala está lista y el proceso también",
            description:
              "Agendamiento, anticipos y seguimiento posterior corren desde una sola vista, no desde cuatro bandejas y una libreta.",
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
      appointmentCommitment: {
        eyebrow: "Compromiso de la valoración",
        title:
          "Una valoración solicitada no es lo mismo que una valoración confirmada.",
        description:
          "Consulta, conversación, interés en el procedimiento, agendamiento y, cuando le sirve a tu centro, un paso más: una cuota de valoración o una reserva de cita que debe acreditarse antes de dar la valoración por confirmada.",
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
            title: "Menos reservas sin intención",
            description:
              "Una valoración con cuota la solicita quien va en serio con el procedimiento, así el interés casual deja de llenar la agenda.",
          },
          {
            title: "Horas de consulta que reflejan compromisos reales",
            description:
              "Confirmada significa pagada y confirmada, no solo solicitada: las horas que bloqueas para valoraciones son horas que un paciente ya comprometió.",
          },
          {
            title: "Tu proveedor, tu dinero",
            description:
              "Los pagos pasan por el proveedor de pagos que tu centro ya usa y llegan a tu cuenta. DigitalFace conecta el agendamiento con él y nunca retiene tus fondos.",
          },
        ],
        note: "Es opcional y se configura por tipo de valoración: tú decides qué citas piden cuota y de cuánto. La cuota de valoración refuerza el compromiso; no es una garantía de asistencia.",
      },
      packagesTitle:
        "Elige el nivel de crecimiento estético que corresponde a tu centro hoy.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Captación de Valoraciones Estéticas",
          price: "$890",
          setup: "$597 de implementación única",
          description:
            "Genera consultas por procedimientos, captúralas todas en tu CRM y responde mientras el paciente sigue comparando.",
          idealFor:
            "Centros que necesitan un flujo estable de consultas por procedimientos y una ruta confiable de la consulta a la valoración.",
          highlights: [
            "Un canal prioritario de captación",
            "CRM incluido para registro de consultas y seguimiento",
            "Respuesta automática inmediata, agendamiento y recordatorios",
            "Cuota de valoración opcional para confirmar la cita",
          ],
          details: [
            {
              title: "Captación estética administrada",
              description:
                "Configuramos y administramos un canal prioritario en Meta, Google o TikTok, elegido según los procedimientos que quieres crecer, tu mercado y la demanda real.",
            },
            {
              title: "CRM de pacientes incluido",
              description:
                "La captura de leads, la gestión del proceso comercial y el seguimiento van incluidos. Cada consulta queda como una oportunidad organizada, con su origen, su zona de interés, su etapa y su historial completo, y todo lo clínico queda marcado para una persona.",
            },
            {
              title: "Respuesta automática inmediata",
              description:
                "Mensajes automáticos por SMS y correo confirman cada consulta al instante y llevan al paciente a solicitar su valoración, a cualquier hora.",
            },
            {
              title: "Calendario de citas y recordatorios",
              description:
                "Enlaces de agendamiento, confirmaciones, recordatorios e instrucciones de reprogramación reemplazan casi toda la coordinación manual que hoy hacen tus coordinadoras.",
            },
            {
              title: "Revisión mensual de desempeño",
              description:
                "Revisamos el origen de las consultas, la actividad de respuesta, las valoraciones agendadas y atendidas y el costo por valoración agendada, y acordamos el siguiente movimiento de campaña.",
            },
          ],
          note: {
            title: "Presupuesto publicitario",
            body: "La gestión incluye presupuestos publicitarios de hasta $1,000 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
          },
          cta: "Empezar con Captación de Valoraciones",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Sistema Estético Completo",
          price: "$1,490",
          setup: "$1,097 de implementación única",
          description:
            "Dos canales de captación, un sitio web de conversión, comunicación con IA e infraestructura de campañas, administrados como un solo sistema.",
          idealFor:
            "Clínicas listas para operar todo el sistema de captación y conversión, con IA respondiendo a toda hora.",
          featured: true,
          highlights: [
            "Todo lo de DigitalFace Capture",
            "Sitio web de conversión + hasta 2 formularios",
            "Comunicación con IA con $20 de saldo mensual",
          ],
          details: [
            {
              title: "Todo lo de Capture, más un segundo canal",
              description:
                "Dos canales en Meta, Google o TikTok, administrados en conjunto, moviendo el presupuesto hacia el que esté generando valoraciones atendidas, no solo clics. Debajo sigue incluida toda la base de DigitalFace Capture: captación, CRM, primera respuesta, calendario y reportes.",
            },
            {
              title: "Sitio web de conversión con hasta 2 formularios",
              description:
                "Un sitio web enfocado en conversión con hasta dos formularios de solicitud de valoración conectados directamente a tu CRM. No son páginas, ajustes ni desarrollo ilimitados.",
            },
            {
              title: "Comunicación bilingüe con IA",
              description:
                "El asistente responde en inglés y español usando únicamente lo que apruebas: los procedimientos que ofreces, las cuotas de valoración, horarios, ubicación, políticas y lo que tu centro sí y no cotiza por chat. Cada mes incluye $20 de saldo de uso de IA.",
            },
            {
              title: "Traspaso clínico y de excepciones",
              description:
                "La viabilidad clínica, las contraindicaciones, los diagnósticos, el consejo médico personalizado y los reclamos se escalan a profesionales calificados.",
            },
            {
              title: "Configuración y automatización de email marketing",
              description:
                "Construimos y operamos la automatización de las campañas, incluido el seguimiento posterior a la valoración y el de quienes nunca agendaron. El envío de correos se factura por volumen, y las campañas, plantillas o textos adicionales por fuera del alcance acordado se cotizan aparte.",
            },
            {
              title: "Hasta 4 piezas publicitarias estáticas al mes",
              description:
                "Piezas estáticas de foto o gráfica, adaptadas con textos en inglés y español. La producción de video no está incluida.",
            },
          ],
          note: {
            title: "Presupuesto publicitario",
            body: "La gestión incluye presupuestos publicitarios de hasta $2,500 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
          },
          footnotes: [
            "El uso de IA por encima del saldo de $20 incluido se factura a $0.40 por cada 1M de tokens de entrada y $2.40 por cada 1M de tokens de salida.",
            "El envío de correos se factura a $1.35 por cada 1.000 correos enviados.",
            "La producción de video no está incluida. Podemos conectarte con un aliado de producción externo cuando lo necesites.",
          ],
          cta: "Empezar con el Sistema Estético Completo",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Plan Estético a Medida",
          price: "A medida",
          priceCaption: "Se define y se cotiza según tus requerimientos",
          description:
            "Para clínicas con presupuestos mayores, varias sedes, captación avanzada, automatización compleja o integraciones a medida.",
          idealFor:
            "Clínicas cuyos requerimientos van más allá de un paquete fijo.",
          scopeNote:
            "Son capacidades disponibles, no una lista de inclusiones fijas. Definimos y cotizamos únicamente lo que tu clínica realmente necesita.",
          highlights: [
            "Varios canales de captación y presupuestos mayores",
            "CRM, IA e integraciones avanzadas",
            "Sedes, idiomas adicionales y soporte prioritario",
          ],
          details: [
            {
              title: "Varios canales y presupuestos mayores",
              description:
                "Más de dos canales trabajando juntos, con la mezcla armada según los procedimientos que quieres crecer, tu mercado y tu presupuesto. Los presupuestos publicitarios pueden superar los topes que gestionan los planes fijos, con la tarifa de gestión ajustada al alcance que acordemos.",
            },
            {
              title: "Sedes e idiomas adicionales",
              description:
                "Campañas, calendarios, procesos y conversaciones separados por sede, y comunicación más allá del inglés y el español.",
            },
            {
              title: "Arquitectura avanzada de CRM e IA",
              description:
                "Procesos por categoría de procedimiento, más los roles, permisos y reportería con los que realmente trabajan tus coordinadoras. El asistente maneja más conocimiento aprobado, más canales y una lógica de calificación y enrutamiento más compleja que la del estándar.",
            },
            {
              title: "Integraciones, anticipos y reglas de prepago a medida",
              description:
                "Conexiones con tu software de gestión, facturación o herramientas internas, y automatizaciones diseñadas para tu operación específica. Los montos de reserva pueden variar por tratamiento, profesional o sede, con prepago de paquetes y tus propias reglas de devolución o crédito conectadas al proveedor de pagos que ya usas.",
            },
            {
              title: "Reactivación, reportería y soporte prioritario",
              description:
                "Reactivación estructurada de valoraciones pasadas y de pacientes que ya deberían volver, atribución desde la campaña hasta la valoración atendida, y un nivel de soporte acordado contigo.",
            },
          ],
          note: {
            title: "Cómo se construye el precio",
            body: "Tus requerimientos, el presupuesto publicitario, los canales, las sedes, las integraciones, el uso de IA, la complejidad de las automatizaciones y el nivel de soporte. Definimos el alcance contigo antes de cotizar.",
          },
          cta: "Armar mi Plan Estético a Medida",
        },
      ],
      faqTitle: "Lo que más nos preguntan los centros de medicina estética",
      faqDescription:
        "Revisamos tus canales de captación, tus tiempos de respuesta, el recorrido de valoración, las reglas de escalamiento y el seguimiento posterior antes de recomendarte un paquete.",
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
          question: "¿El sistema puede responder consultas de redes sociales?",
          answer:
            "Sí. Los formularios, mensajes y comentarios de Facebook e Instagram se pueden conectar cuando están incluidos en el paquete y el alcance de canales elegido.",
        },
        {
          question:
            "¿Puede dar seguimiento a los pacientes que preguntaron y nunca agendaron?",
          answer:
            "Sí. Las consultas que nunca eligieron horario entran a una secuencia de seguimiento aprobada, y los pacientes anteriores se pueden segmentar para recordarles su siguiente visita. Todo lo clínico que responda el paciente pasa a tu equipo antes de contestar.",
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
          "Elige un horario para revisar cómo tu centro capta consultas por procedimientos, escala las preguntas clínicas, agenda valoraciones y hace el seguimiento posterior.",
        proposalTitle: "¿Necesitas un flujo estético a la medida?",
        proposalDescription:
          "Pide una propuesta para varias sedes, pacientes internacionales, admisión por procedimiento, automatización en redes u otro proceso de tu centro.",
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
        title:
          "Convierte el interés por un tratamiento en clientes que agendan y regresan.",
        description:
          "Un sistema que conecta promociones, respuesta inmediata, agendamiento, anticipos, nuevas reservas y reactivación de clientes, para que la agenda se llene y se mantenga llena.",
        primaryCta: "Agenda tu diagnóstico para med spa",
        secondaryCta: "Ver el sistema para med spas",
        visualTitle: "Recorrido de agendamiento del med spa",
        visualStages: [
          "Respuesta a la promoción registrada",
          "Conversación de agendamiento activa",
          "Cita agendada y siguiente reserva lista",
        ],
        mediaHeadline:
          "La promoción llena la agenda. El seguimiento es lo que la mantiene llena.",
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
        title: "La experiencia empieza mucho antes de que alguien entre.",
        description:
          "Para cuando la clienta está en tu camilla, ya te evaluó por lo rápido que respondiste, lo fácil que fue agendar y si alguien se acordó de ella después.",
        moments: [
          {
            title: "La primera respuesta suena a recepción",
            description:
              "Un mensaje a medianoche recibe la misma respuesta cálida y en tu tono que daría tu mejor coordinadora al mediodía.",
            alt: "Equipo de un med spa atendiendo a clientas en la recepción",
          },
          {
            title: "El ritual no se interrumpe",
            description:
              "Nadie sale de un tratamiento a responder una duda de agenda, porque esa duda nunca tuvo que esperar.",
            alt: "Piscina interior de spa iluminada con velas",
          },
          {
            title: "La clienta que vuelve sola",
            description:
              "Reactivación, paquetes y recordatorios de membresía corren en silencio, así que la agenda se vuelve a llenar sin lanzar una campaña.",
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
          "Así se ve uno de esos mensajes cuando el sistema lo toma: la oferta confirmada, un horario elegido y el seguimiento ya listo antes de que alguien en recepción abra la bandeja.",
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
      appointmentCommitment: {
        eyebrow: "Compromiso de la reserva",
        title: "Una cita solicitada no es lo mismo que una cita confirmada.",
        description:
          "Consulta, conversación, interés de tratamiento, agendamiento y, cuando le sirve a tu med spa, un paso más: un anticipo de reserva o una reserva de tratamiento que debe acreditarse antes de dar la cita por confirmada.",
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
            title: "Menos reservas sin intención",
            description:
              "Un espacio de tratamiento que cuesta reservar lo pide quien realmente piensa venir, así las promociones dejan de llenar la agenda de inasistencias.",
          },
          {
            title: "Cabinas que se mantienen productivas",
            description:
              "Confirmada significa pagada y confirmada, no solo solicitada: la cabina y el profesional quedan reservados para una cita comprometida.",
          },
          {
            title: "Tu proveedor, tu dinero",
            description:
              "Los pagos pasan por el proveedor de pagos que tu med spa ya usa y llegan a tu cuenta. DigitalFace conecta el agendamiento con él y nunca retiene tus fondos.",
          },
        ],
        note: "Es opcional y se configura por tratamiento: tú decides qué citas piden anticipo y de cuánto. El anticipo refuerza el compromiso; no es una garantía de asistencia.",
      },
      packagesTitle:
        "Elige el nivel de crecimiento que corresponde a tu med spa hoy.",
      packages: [
        {
          name: "DigitalFace Capture",
          nicheName: "Captación de Clientes para Med Spa",
          price: "$890",
          setup: "$597 de implementación única",
          description:
            "Genera consultas por tratamientos y promociones, captúralas todas en tu CRM y responde antes de que se enfríe el interés.",
          idealFor:
            "Med spas que necesitan un flujo confiable de solicitudes de cita y una agenda que deje de perderlas.",
          highlights: [
            "Un canal prioritario de captación",
            "CRM incluido para solicitudes de cita y seguimiento",
            "Respuesta automática inmediata, agendamiento y recordatorios",
            "Anticipo opcional para confirmar la reserva",
          ],
          details: [
            {
              title: "Captación para med spa administrada",
              description:
                "Configuramos y administramos un canal prioritario en Meta, Google o TikTok, elegido según tus ofertas, tus membresías y los tratamientos que quieres llenar esta temporada.",
            },
            {
              title: "CRM de clientes incluido",
              description:
                "La captura de leads, la gestión del proceso comercial y el seguimiento van incluidos. Cada consulta queda como una oportunidad organizada, con su origen, la oferta de la que vino, su etapa y su historial completo.",
            },
            {
              title: "Respuesta automática inmediata",
              description:
                "Mensajes automáticos por SMS y correo confirman cada consulta al instante y llevan al cliente directo a reservar, a cualquier hora.",
            },
            {
              title: "Calendario de citas y recordatorios",
              description:
                "Enlaces de agendamiento, confirmaciones, recordatorios e instrucciones de reprogramación reemplazan casi toda la coordinación manual que hoy hace recepción, y reducen inasistencias evitables.",
            },
            {
              title: "Revisión mensual de desempeño",
              description:
                "Revisamos el origen de los leads, la actividad de respuesta, las citas agendadas y atendidas y el costo por cita agendada, y acordamos la siguiente promoción.",
            },
          ],
          note: {
            title: "Presupuesto publicitario",
            body: "La gestión incluye presupuestos publicitarios de hasta $1,000 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
          },
          cta: "Empezar con Captación para Med Spa",
        },
        {
          name: "DigitalFace AI",
          nicheName: "Sistema Completo para Med Spa",
          price: "$1,490",
          setup: "$1,097 de implementación única",
          description:
            "Dos canales de captación, un sitio web de conversión, comunicación con IA e infraestructura de campañas, administrados como un solo sistema.",
          idealFor:
            "Med spas listos para operar todo el sistema de captación y conversión, con IA respondiendo a toda hora.",
          featured: true,
          highlights: [
            "Todo lo de DigitalFace Capture",
            "Sitio web de conversión + hasta 2 formularios",
            "Comunicación con IA con $20 de saldo mensual",
          ],
          details: [
            {
              title: "Todo lo de Capture, más un segundo canal",
              description:
                "Dos canales en Meta, Google o TikTok, administrados en conjunto, moviendo el presupuesto hacia el que esté generando citas atendidas, no solo mensajes. Debajo sigue incluida toda la base de DigitalFace Capture: captación, CRM, primera respuesta, calendario y reportes.",
            },
            {
              title: "Sitio web de conversión con hasta 2 formularios",
              description:
                "Un sitio web enfocado en conversión con hasta dos formularios de solicitud de cita conectados directamente a tu CRM. No son páginas, ajustes ni desarrollo ilimitados.",
            },
            {
              title: "Comunicación bilingüe con IA",
              description:
                "El asistente responde en inglés y español usando únicamente lo que apruebas: tratamientos, promociones, condiciones de membresías y paquetes, horarios, ubicación, políticas y reglas de precio. Cada mes incluye $20 de saldo de uso de IA.",
            },
            {
              title: "Traspaso médico y de excepciones",
              description:
                "Las preguntas médicas, las contraindicaciones, los síntomas, los reclamos y las solicitudes para el equipo se escalan a personas, nunca las responde el asistente.",
            },
            {
              title: "Configuración y automatización de email marketing",
              description:
                "Construimos y operamos la automatización de las campañas, incluidas ofertas de temporada, renovación de membresías y secuencias para clientes que llevan tiempo sin venir. El envío de correos se factura por volumen, y las campañas, plantillas o textos adicionales por fuera del alcance acordado se cotizan aparte.",
            },
            {
              title: "Hasta 4 piezas publicitarias estáticas al mes",
              description:
                "Piezas estáticas de foto o gráfica, adaptadas con textos en inglés y español. La producción de video no está incluida.",
            },
          ],
          note: {
            title: "Presupuesto publicitario",
            body: "La gestión incluye presupuestos publicitarios de hasta $2,500 al mes. La inversión publicitaria se paga directamente a las plataformas. Presupuestos publicitarios superiores requieren un ajuste en la tarifa de gestión.",
          },
          footnotes: [
            "El uso de IA por encima del saldo de $20 incluido se factura a $0.40 por cada 1M de tokens de entrada y $2.40 por cada 1M de tokens de salida.",
            "El envío de correos se factura a $1.35 por cada 1.000 correos enviados.",
            "La producción de video no está incluida. Podemos conectarte con un aliado de producción externo cuando lo necesites.",
          ],
          cta: "Empezar con el Sistema Completo para Med Spa",
        },
        {
          name: "The DigitalFace Sales System",
          nicheName: "Plan a Medida para Med Spa",
          price: "A medida",
          priceCaption: "Se define y se cotiza según tus requerimientos",
          description:
            "Para med spas con presupuestos mayores, varias sedes, captación avanzada, automatización compleja o integraciones a medida.",
          idealFor:
            "Med spas cuyos requerimientos van más allá de un paquete fijo.",
          scopeNote:
            "Son capacidades disponibles, no una lista de inclusiones fijas. Definimos y cotizamos únicamente lo que tu med spa realmente necesita.",
          highlights: [
            "Varios canales de captación y presupuestos mayores",
            "CRM, IA e integraciones avanzadas",
            "Sedes, idiomas adicionales y soporte prioritario",
          ],
          details: [
            {
              title: "Varios canales y presupuestos mayores",
              description:
                "Más de dos canales trabajando juntos, con la mezcla armada según tu menú de tratamientos, tus membresías y las temporadas que mueven tu agenda. Los presupuestos publicitarios pueden superar los topes que gestionan los planes fijos, con la tarifa de gestión ajustada al alcance que acordemos.",
            },
            {
              title: "Sedes e idiomas adicionales",
              description:
                "Campañas, calendarios, procesos y conversaciones separados por sede, y comunicación más allá del inglés y el español.",
            },
            {
              title: "Arquitectura avanzada de CRM e IA",
              description:
                "Procesos separados para membresías, paquetes y tratamientos sueltos, más los roles, permisos y reportería con los que realmente trabaja recepción. El asistente maneja más conocimiento aprobado, más canales y una lógica de calificación y enrutamiento más compleja que la del estándar.",
            },
            {
              title: "Integraciones, anticipos y reglas de prepago a medida",
              description:
                "Conexiones con tu software de gestión, facturación o herramientas internas, y automatizaciones diseñadas para tu operación específica. Los montos de reserva pueden variar por tratamiento, profesional o sede, con prepago de paquetes y tus propias reglas de devolución o crédito conectadas al proveedor de pagos que ya usas.",
            },
            {
              title: "Reactivación, reportería y soporte prioritario",
              description:
                "Reactivación estructurada de clientes inactivos y membresías por vencer, atribución desde la oferta hasta la cita atendida, y un nivel de soporte acordado contigo.",
            },
          ],
          note: {
            title: "Cómo se construye el precio",
            body: "Tus requerimientos, el presupuesto publicitario, los canales, las sedes, las integraciones, el uso de IA, la complejidad de las automatizaciones y el nivel de soporte. Definimos el alcance contigo antes de cotizar.",
          },
          cta: "Armar mi Plan a Medida para Med Spa",
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
          question: "¿El equipo puede tomar el control de una conversación?",
          answer:
            "Sí. Tu equipo puede tomar el control cuando un cliente pide hablar con una persona o cuando la conversación se vuelve clínica, delicada, urgente o sale del conocimiento aprobado.",
        },
        {
          question: "¿Puede manejar membresías y paquetes prepagados?",
          answer:
            "Sí, en la parte comercial. El sistema puede registrar qué clientes tienen membresía o sesiones pendientes de un paquete, recordarles reservar y cobrar un anticipo o prepago con tu propio proveedor de pagos. No reemplaza tu punto de venta ni tu historia clínica.",
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
          "Elige un horario que te acomode para revisar cómo tu med spa convierte promociones en citas agendadas, reduce inasistencias y hace volver a sus clientes.",
        proposalTitle: "¿Necesitas un flujo a la medida para tu med spa?",
        proposalDescription:
          "Pide una propuesta para membresías, varias sedes, automatización de reseñas, admisión por tratamiento u otro proceso propio.",
      },
    },
  },
};
