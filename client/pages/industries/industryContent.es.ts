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
      eyebrow: "Elige tu siguiente paso",
      assessmentLabel: "Diagnóstico de crecimiento",
      calendlyTitle: "Espacio del calendario listo",
      calendlyHint:
        "Reemplaza este bloque con el calendario aprobado para que el agendamiento ocurra dentro de esta página.",
      customScopeLabel: "Alcance a la medida",
      formTitle: "Espacio del formulario de propuesta listo",
      formHint:
        "Reemplaza este bloque con el formulario aprobado o un componente de envío conectado.",
      privacyNote:
        "El formulario final debe pedir solo lo necesario para definir el alcance y enlazar a la política de privacidad publicada.",
      calendlyAria: "Espacio reservado para el calendario de agendamiento",
      formAria: "Espacio reservado para el formulario de propuesta",
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
        title: "Descubre dónde está perdiendo pacientes tu clínica.",
        description:
          "Revisamos tus canales de captación, tu proceso de respuesta, el flujo de valoraciones y el seguimiento antes de recomendarte un paquete.",
        assessmentCta: "Agenda tu diagnóstico odontológico",
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
        title:
          "Encuentra los vacíos entre el interés por un procedimiento y la valoración agendada.",
        description:
          "Revisamos tus canales de captación, tu proceso de respuesta, el recorrido de valoración, las reglas de traspaso y el seguimiento antes de recomendarte un paquete.",
        assessmentCta: "Agenda tu diagnóstico estético",
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
        title:
          "Encuentra los vacíos entre el interés por un tratamiento, la reserva y las visitas repetidas.",
        description:
          "Revisamos tus promociones, el flujo de consultas en redes, tu proceso de respuesta, la agenda, la reactivación y el seguimiento antes de recomendarte un paquete.",
        assessmentCta: "Agenda tu diagnóstico para med spa",
        proposalTitle: "¿Necesitas un flujo a la medida para tu med spa?",
        proposalDescription:
          "Pide una propuesta para membresías, varias sedes, automatización de reseñas, admisión por tratamiento u otro proceso propio.",
        proposalCta: "Solicitar propuesta a la medida",
      },
    },
  },
};
