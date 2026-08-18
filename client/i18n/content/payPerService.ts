import type { Locale } from "../locale";

const en = {
  metadata: {
    title:
      "Marketing & Automation Services for Clinics | DigitalFace Marketing",
    description:
      "Hire one DigitalFace capability at a time instead of a full system: Meta and Google ads, chatbots, workflow automation, CRM setup, reporting, websites and funnels.",
  },
  hero: {
    eyebrow: "Pay per service",
    title: "Take the one piece you need, without the bundle.",
    description:
      "Pick a single DigitalFace capability. We scope it, build it and launch it with clear deliverables, so you can move fast.",
    primaryCta: "Book a service call",
    secondaryCta: "See the Sales System",
  },
  catalog: {
    eyebrow: "Service catalog",
    title: "Build your stack one service at a time.",
    description:
      "Take one service or combine a few. Each engagement is scoped as a focused project with clear deliverables.",
    helpsWith: "Helps with",
  },
  groups: {
    paidMedia: {
      title: "Paid media and social advertising",
      description:
        "Full-funnel campaigns built to create demand, capture inquiries and show you where the return comes from.",
      services: {
        meta: {
          title: "Meta ads (Facebook and Instagram)",
          description:
            "Audience research, creative production and full-funnel campaign management, from first impression to retargeting.",
          outcomes: [
            "Generate qualified inquiries faster",
            "Retarget warm audiences with a clear offer",
            "Track spend and return in one dashboard",
          ],
          ctaLabel: "Request an ad strategy call",
        },
        tiktok: {
          title: "TikTok ads",
          description:
            "Native short-form video, spark ads and creator collaborations built for how the TikTok feed actually behaves.",
          outcomes: [
            "Reach new audiences with native creative",
            "Drive traffic for launches and offers",
            "Test messaging fast with real data",
          ],
          ctaLabel: "Ask about TikTok ads",
        },
        google: {
          title: "Google ads",
          description:
            "Search, display and retargeting campaigns that capture demand at the moment someone is actively looking.",
          outcomes: [
            "Capture high-intent demand at the moment of search",
            "Keep traffic steady through search and display",
            "Stay present with well-targeted retargeting",
          ],
          ctaLabel: "Plan a Google ads campaign",
        },
        seo: {
          title: "SEO strategy",
          description:
            "Search optimization designed to grow organic visibility, attract qualified traffic and support demand over time.",
          outcomes: [
            "Grow visibility for the keywords that matter",
            "Attract qualified organic traffic over time",
            "Strengthen the relevance of your paid landing pages",
          ],
          ctaLabel: "Request an SEO strategy",
        },
        content: {
          title: "Content creation",
          description:
            "Content built to educate, build trust and convert across paid, organic and owned channels.",
          outcomes: [
            "Write messaging that matches real buying intent",
            "Support campaigns with conversion-focused content",
            "Build authority across your channels",
          ],
          ctaLabel: "Plan content creation",
        },
      },
    },
    automation: {
      title: "Automation and chatbots",
      description:
        "Always-on systems that carry conversations, follow up and keep your team on high-value work.",
      services: {
        chatbot: {
          title: "Chatbot development (AI and rule-based)",
          description:
            "A rule-based or custom AI assistant for Messenger, Instagram DM, WhatsApp, Telegram and web chat.",
          outcomes: [
            "Respond instantly, around the clock",
            "Capture and organize every inquiry",
            "Book appointments or hand off to your team",
          ],
          ctaLabel: "Start a chatbot project",
        },
        workflow: {
          title: "Specialized workflow automation",
          description:
            "Automations that connect your tools, tidy up operations and remove repetitive manual work.",
          outcomes: [
            "Automate the tasks nobody should be doing by hand",
            "Keep data, contacts and teams in sync",
            "Reduce manual work without replacing your tools",
          ],
          ctaLabel: "Request a workflow audit",
        },
        appointment: {
          title: "Appointment and calendar automation",
          description:
            "Booking, confirmations, reminders, rescheduling and no-show recovery across SMS, WhatsApp and email.",
          outcomes: [
            "Instant booking confirmations",
            "Automated reminders 24 hours and 2 hours before",
            "Rescheduling and cancellation flows for clients and staff",
          ],
          ctaLabel: "Automate appointments",
        },
        ecommerce: {
          title: "E-commerce automation (Shopify and WooCommerce)",
          description:
            "Abandoned cart triggers, post-purchase follow-up, loyalty loops and product recommendation flows.",
          outcomes: [
            "Recover revenue that was already in the cart",
            "Increase lifetime value",
            "Send timely offers with less manual outreach",
          ],
          ctaLabel: "Ask about e-commerce automation",
        },
        comments: {
          title: "Auto-reply for Facebook and Instagram comments",
          description:
            "Automatic replies triggered by comments on your posts and ads, designed to move the conversation into a direct message.",
          outcomes: [
            "Reply instantly to comments on ads and posts",
            "Capture inquiries without manual moderation",
            "Move public comments into private conversations",
          ],
          ctaLabel: "Automate comment replies",
        },
      },
    },
    leadOps: {
      title: "Lead operations and CRM",
      description:
        "Connected pipelines, instant follow-up and clean data, so every inquiry is handled the same way.",
      services: {
        capture: {
          title: "Lead capture and CRM sync across every channel",
          description:
            "Connect all your inquiry sources to your CRM, so every form, message, call and ad inquiry lands in one place.",
          outcomes: [
            "Capture every inquiry inside your CRM",
            "Route each one to the right person automatically",
            "Keep your CRM clean and current",
          ],
          ctaLabel: "Set up lead capture",
        },
        booking: {
          title: "Appointment booking and reminders",
          description:
            "Self-scheduling calendars with confirmation and reminder sequences, embedded in your website.",
          outcomes: [
            "Reduce missed appointments",
            "Fill the calendar faster",
            "Keep your team informed every day",
          ],
          ctaLabel: "Set up appointment flows",
        },
        pipeline: {
          title: "CRM pipeline setup (GoHighLevel)",
          description:
            "A GoHighLevel pipeline with clear stages, assigned owners and a single unified inbox.",
          outcomes: [
            "See every stage at a glance",
            "Assign ownership and tasks",
            "Keep the whole team organized in one place",
          ],
          ctaLabel: "Configure my pipeline",
        },
        integration: {
          title: "CRM integration and unified data sync",
          description:
            "Connect GoHighLevel, HubSpot, Zoho, Pipedrive or a custom system to the rest of your marketing stack.",
          outcomes: [
            "One central place for your data",
            "Two-way sync between systems",
            "Automations triggered by real data",
          ],
          ctaLabel: "Schedule a CRM consult",
        },
        reporting: {
          title: "Reporting and performance dashboards",
          description:
            "Dashboards that connect ad spend, automation activity and closed revenue across the funnel.",
          outcomes: [
            "See which channels actually drive growth",
            "Spot where the pipeline gets stuck",
            "Share a clear weekly read with your team",
          ],
          ctaLabel: "Build a reporting dashboard",
        },
      },
    },
    websites: {
      title: "Websites and funnels",
      description:
        "Conversion-first digital experiences that turn traffic into inquiries and customers.",
      services: {
        corporate: {
          title: "Corporate and business websites",
          description:
            "Multi-page websites that present your services, your team and your proof.",
          outcomes: [
            "Build trust quickly",
            "Make your offer easy to understand",
            "Turn visitors into inquiries",
          ],
          ctaLabel: "Start a web project",
        },
        ecommerce: {
          title: "E-commerce storefronts",
          description:
            "Shopify builds optimized for product discovery and checkout conversion.",
          outcomes: [
            "Improve cart performance",
            "Increase repeat purchases",
            "Connect the store to your automation flows",
          ],
          ctaLabel: "Plan my storefront",
        },
        landing: {
          title: "Campaign landing pages",
          description:
            "Conversion-focused landing pages for ads, launches and webinars.",
          outcomes: [
            "Improve conversion rates",
            "Match the page to the ad promise",
            "Capture inquiries cleanly",
          ],
          ctaLabel: "Build a landing page",
        },
      },
    },
  },
  cta: {
    eyebrow: "Ready to start?",
    title: "Tell us which service you need and we will map the next step.",
    description:
      "Share your goals and your current tools. We will come back with scope options, timelines and what to expect.",
    primaryCta: "Book a service call",
    secondaryCta: "See the Sales System",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title:
      "Servicios de Marketing y Automatización para Clínicas | DigitalFace Marketing",
    description:
      "Contrata una sola capacidad de DigitalFace a la vez en lugar del sistema completo: pauta en Meta y Google, chatbots, automatización de procesos, CRM, reportes, sitios web y embudos.",
  },
  hero: {
    eyebrow: "Servicios por separado",
    title: "Llévate solo la pieza que necesitas.",
    description:
      "Elige una sola capacidad de DigitalFace. La definimos, la construimos y la lanzamos con entregables claros para que avances rápido.",
    primaryCta: "Agenda una llamada",
    secondaryCta: "Ver el Sistema de Ventas",
  },
  catalog: {
    eyebrow: "Catálogo de servicios",
    title: "Arma tu estructura servicio por servicio.",
    description:
      "Toma un servicio o combina varios. Cada trabajo se define como un proyecto puntual con entregables claros.",
    helpsWith: "Sirve para",
  },
  groups: {
    paidMedia: {
      title: "Pauta digital y publicidad en redes",
      description:
        "Campañas de embudo completo para generar demanda, capturar consultas y mostrarte de dónde viene el retorno.",
      services: {
        meta: {
          title: "Anuncios en Meta (Facebook e Instagram)",
          description:
            "Investigación de audiencias, producción creativa y gestión de campañas de embudo completo, desde la primera impresión hasta el retargeting.",
          outcomes: [
            "Generar consultas calificadas más rápido",
            "Volver a impactar audiencias tibias con una oferta clara",
            "Ver inversión y retorno en un solo tablero",
          ],
          ctaLabel: "Agenda una asesoría de pauta",
        },
        tiktok: {
          title: "Anuncios en TikTok",
          description:
            "Video corto nativo, spark ads y colaboraciones con creadores, pensados para cómo funciona el feed de TikTok.",
          outcomes: [
            "Llegar a nuevas audiencias con contenido nativo",
            "Generar tráfico para lanzamientos y promociones",
            "Probar mensajes rápido con datos reales",
          ],
          ctaLabel: "Pregunta por TikTok Ads",
        },
        google: {
          title: "Anuncios en Google",
          description:
            "Campañas de búsqueda, display y retargeting que capturan la demanda justo cuando alguien está buscando.",
          outcomes: [
            "Capturar demanda de alta intención en el momento de la búsqueda",
            "Mantener tráfico constante entre búsqueda y display",
            "Seguir presente con retargeting bien segmentado",
          ],
          ctaLabel: "Planea una campaña en Google",
        },
        seo: {
          title: "Estrategia SEO",
          description:
            "Optimización de búsqueda para crecer en visibilidad orgánica, atraer tráfico calificado y sostener la demanda en el tiempo.",
          outcomes: [
            "Ganar visibilidad en las palabras clave que importan",
            "Atraer tráfico orgánico calificado con el tiempo",
            "Reforzar la relevancia de tus páginas de pauta",
          ],
          ctaLabel: "Solicita una estrategia SEO",
        },
        content: {
          title: "Creación de contenido",
          description:
            "Contenido para educar, generar confianza y convertir en canales pagos, orgánicos y propios.",
          outcomes: [
            "Escribir mensajes alineados con la intención real de compra",
            "Acompañar las campañas con contenido enfocado en conversión",
            "Construir autoridad en tus canales",
          ],
          ctaLabel: "Planea tu contenido",
        },
      },
    },
    automation: {
      title: "Automatización y chatbots",
      description:
        "Sistemas siempre activos que sostienen conversaciones, hacen seguimiento y liberan a tu equipo para lo importante.",
      services: {
        chatbot: {
          title: "Desarrollo de chatbots (IA y por reglas)",
          description:
            "Un asistente por reglas o con IA a la medida para Messenger, DM de Instagram, WhatsApp, Telegram y chat web.",
          outcomes: [
            "Responder al instante a cualquier hora",
            "Capturar y organizar cada consulta",
            "Agendar citas o pasar la conversación a tu equipo",
          ],
          ctaLabel: "Empieza tu proyecto de chatbot",
        },
        workflow: {
          title: "Automatización de procesos específicos",
          description:
            "Automatizaciones que conectan tus herramientas, ordenan la operación y eliminan el trabajo manual repetitivo.",
          outcomes: [
            "Automatizar tareas que nadie debería hacer a mano",
            "Mantener datos, contactos y equipos sincronizados",
            "Reducir trabajo manual sin cambiar tus herramientas",
          ],
          ctaLabel: "Solicita una revisión de procesos",
        },
        appointment: {
          title: "Automatización de citas y calendario",
          description:
            "Agendamiento, confirmaciones, recordatorios, reprogramación y recuperación de inasistencias por SMS, WhatsApp y correo.",
          outcomes: [
            "Confirmaciones inmediatas al agendar",
            "Recordatorios automáticos 24 y 2 horas antes",
            "Flujos de reprogramación y cancelación para clientes y equipo",
          ],
          ctaLabel: "Automatiza tus citas",
        },
        ecommerce: {
          title: "Automatización para e-commerce (Shopify y WooCommerce)",
          description:
            "Carritos abandonados, seguimiento posterior a la compra, ciclos de fidelización y recomendaciones de producto.",
          outcomes: [
            "Recuperar ventas que ya estaban en el carrito",
            "Aumentar el valor de cada cliente en el tiempo",
            "Enviar ofertas oportunas con menos trabajo manual",
          ],
          ctaLabel: "Pregunta por automatización de e-commerce",
        },
        comments: {
          title: "Respuesta automática a comentarios en Facebook e Instagram",
          description:
            "Respuestas automáticas activadas por comentarios en tus publicaciones y anuncios, para llevar la conversación al mensaje directo.",
          outcomes: [
            "Responder al instante los comentarios de anuncios y publicaciones",
            "Capturar consultas sin moderar manualmente",
            "Llevar comentarios públicos a conversaciones privadas",
          ],
          ctaLabel: "Automatiza tus comentarios",
        },
      },
    },
    leadOps: {
      title: "Gestión de contactos y CRM",
      description:
        "Procesos conectados, respuesta inmediata y datos limpios para que cada consulta se atienda igual de bien.",
      services: {
        capture: {
          title: "Captura de contactos y sincronización con el CRM",
          description:
            "Conecta todas tus fuentes de consultas al CRM para que cada formulario, mensaje, llamada y anuncio llegue a un solo lugar.",
          outcomes: [
            "Registrar cada consulta dentro de tu CRM",
            "Asignar cada caso a la persona correcta de forma automática",
            "Mantener tu CRM limpio y actualizado",
          ],
          ctaLabel: "Configura la captura de contactos",
        },
        booking: {
          title: "Agendamiento de citas y recordatorios",
          description:
            "Calendarios de autoagendamiento con secuencias de confirmación y recordatorio integradas en tu sitio.",
          outcomes: [
            "Reducir las inasistencias",
            "Llenar el calendario más rápido",
            "Mantener a tu equipo informado cada día",
          ],
          ctaLabel: "Configura tus flujos de citas",
        },
        pipeline: {
          title: "Configuración del embudo en el CRM (GoHighLevel)",
          description:
            "Un proceso en GoHighLevel con etapas claras, responsables asignados y una bandeja de entrada unificada.",
          outcomes: [
            "Ver cada etapa de un vistazo",
            "Asignar responsables y tareas",
            "Mantener a todo el equipo organizado en un solo lugar",
          ],
          ctaLabel: "Configura mi embudo",
        },
        integration: {
          title: "Integración de CRM y sincronización de datos",
          description:
            "Conecta GoHighLevel, HubSpot, Zoho, Pipedrive o un sistema propio con el resto de tus herramientas de marketing.",
          outcomes: [
            "Un solo lugar central para tus datos",
            "Sincronización en dos vías entre sistemas",
            "Automatizaciones activadas por datos reales",
          ],
          ctaLabel: "Agenda una asesoría de CRM",
        },
        reporting: {
          title: "Reportes y tableros de rendimiento",
          description:
            "Tableros que conectan la inversión en pauta, la actividad de las automatizaciones y las ventas cerradas.",
          outcomes: [
            "Saber qué canales impulsan el crecimiento",
            "Detectar dónde se traba el proceso",
            "Compartir una lectura semanal clara con tu equipo",
          ],
          ctaLabel: "Arma tu tablero de reportes",
        },
      },
    },
    websites: {
      title: "Sitios web y embudos",
      description:
        "Experiencias digitales pensadas para convertir el tráfico en consultas y clientes.",
      services: {
        corporate: {
          title: "Sitios web corporativos y de negocio",
          description:
            "Sitios de varias páginas que presentan tus servicios, tu equipo y tus resultados.",
          outcomes: [
            "Generar confianza rápido",
            "Hacer tu propuesta fácil de entender",
            "Convertir visitantes en consultas",
          ],
          ctaLabel: "Empieza tu proyecto web",
        },
        ecommerce: {
          title: "Tiendas de e-commerce",
          description:
            "Desarrollos en Shopify optimizados para el descubrimiento de producto y la conversión en el checkout.",
          outcomes: [
            "Mejorar el rendimiento del carrito",
            "Aumentar la recompra",
            "Conectar la tienda con tus automatizaciones",
          ],
          ctaLabel: "Planea tu tienda",
        },
        landing: {
          title: "Landing pages para campañas",
          description:
            "Páginas enfocadas en conversión para anuncios, lanzamientos y webinars.",
          outcomes: [
            "Mejorar la tasa de conversión",
            "Alinear la página con la promesa del anuncio",
            "Capturar consultas de forma ordenada",
          ],
          ctaLabel: "Arma tu landing page",
        },
      },
    },
  },
  cta: {
    eyebrow: "¿Listo para empezar?",
    title: "Cuéntanos qué servicio necesitas y definimos el siguiente paso.",
    description:
      "Comparte tus objetivos y las herramientas que usas hoy. Te respondemos con alcance, tiempos y qué esperar.",
    primaryCta: "Agenda una llamada",
    secondaryCta: "Ver el Sistema de Ventas",
  },
};

export const payPerServiceContent: Record<Locale, typeof en> = { en, es };
export type PayPerServiceContent = typeof en;
