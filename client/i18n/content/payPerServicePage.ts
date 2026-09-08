import type { Locale } from "../locale";
import { payPerServiceContent } from "./payPerService";

// Page-only descriptions preserve canonical catalog names in all request flows.
export const payPerServicePageContent: Record<
  Locale,
  typeof payPerServiceContent.en
> = {
  en: {
    ...payPerServiceContent.en,
    hero: {
      eyebrow: "Pay per service",
      title: "Choose only the services you need.",
      description:
        "Pick one service or combine a few. We confirm the scope, build it and launch it for you.",
      primaryCta: "See Services",
      secondaryCta: "See the Complete System",
    },
    catalog: {
      eyebrow: "Service catalog",
      title: "What would help your business?",
      description:
        "Use Add to Request to select services. Send your list through Contact and we’ll confirm the scope and quote.",
      helpsWith: "See What’s Included",
    },
    groups: {
      paidMedia: {
        title: "Paid Media",
        description: "Get in front of the right people.",
        services: {
          meta: {
            title: "Meta Ads",
            description: "Reach potential customers on Facebook and Instagram.",
            outcomes: [
              "Audience research, ad creative and campaign management",
              "Follow-up ads for interested audiences; spend and return reporting",
            ],
            ctaLabel: "Request an ad strategy call",
          },
          tracking: {
            title: "Know Which Ads Work",
            description: "Connect your marketing to the actions people take.",
            outcomesLabel: "See What’s Included",
            outcomes: [
              "Meta and TikTok Pixel setup",
              "Google Ads conversion tracking and Google Analytics 4",
            ],
            ctaLabel: "Set up my tracking",
          },
          tiktok: {
            title: "TikTok Ads",
            description:
              "Promote your offers with short videos made for TikTok.",
            outcomes: [
              "Native video, Spark Ads and creator collaborations",
              "Audience, launch and message testing",
            ],
            ctaLabel: "Ask about TikTok ads",
          },
          google: {
            title: "Google Ads",
            description: "Show up when people search for what you offer.",
            outcomes: [
              "Search and Display campaigns",
              "Follow-up ads that bring interested visitors back",
            ],
            ctaLabel: "Plan a Google ads campaign",
          },
          seo: {
            title: "Get Found in Search",
            description:
              "Help customers find your business without clicking an ad.",
            outcomes: [
              "SEO strategy for relevant searches and organic traffic",
              "Improve the relevance of your campaign pages",
            ],
            ctaLabel: "Request an SEO strategy",
          },
          content: {
            title: "Content That Explains Your Offer",
            description:
              "Help people understand your services and trust your business.",
            outcomes: [
              "Messaging based on what customers want to know",
              "Content for paid, organic and your own channels",
            ],
            ctaLabel: "Plan content creation",
          },
        },
      },
      automation: {
        title: "Automation & Chatbots",
        description: "Let the system handle repeated questions and tasks.",
        services: {
          chatbot: {
            title: "Answer Common Questions",
            description:
              "An AI chatbot or rule-based assistant helps answer, collect details and book.",
            outcomes: [
              "Messenger, Instagram DM, WhatsApp, Telegram and web chat",
              "Around-the-clock replies, organized inquiries and staff takeover",
            ],
            ctaLabel: "Start a chatbot project",
          },
          workflow: {
            title: "Take Repetitive Tasks Off Your List",
            description: "Connect your existing tools to reduce manual work.",
            outcomes: [
              "Automate repeated tasks",
              "Keep data, contacts and teams in sync",
            ],
            ctaLabel: "Request a workflow audit",
          },
          appointment: {
            title: "Keep Appointments on Track",
            description:
              "Automate booking and follow-up through SMS, WhatsApp and email.",
            outcomes: [
              "Instant confirmations; reminders 24 and 2 hours before",
              "Rescheduling, cancellation and no-show follow-up",
            ],
            ctaLabel: "Automate appointments",
          },
          ecommerce: {
            title: "Follow Up After a Shopping Visit",
            description:
              "Support Shopify and WooCommerce customers before and after purchase.",
            outcomes: [
              "Abandoned-cart and post-purchase follow-up",
              "Loyalty offers and product recommendations",
            ],
            ctaLabel: "Ask about e-commerce automation",
          },
          comments: {
            title: "Turn Comments into Conversations",
            description:
              "Reply to Facebook and Instagram comments on posts and ads.",
            outcomes: [
              "Automatic comment replies and inquiry capture",
              "Move interested people into direct messages",
            ],
            ctaLabel: "Automate comment replies",
          },
        },
      },
      leadOps: {
        title: "Lead Management & CRM",
        description: "Keep every lead in one place and know what happens next.",
        services: {
          capture: {
            title: "Collect Your Incoming Leads",
            description:
              "Send forms, messages, calls and ad inquiries to your CRM.",
            outcomes: [
              "Automatic contact capture and assignment",
              "Keep lead details organized and current",
            ],
            ctaLabel: "Set up lead capture",
          },
          booking: {
            title: "Let Visitors Book on Your Website",
            description: "Add a self-booking calendar to your site.",
            outcomes: [
              "Appointment confirmations and reminders",
              "Keep clients and your team informed",
            ],
            ctaLabel: "Set up appointment flows",
          },
          pipeline: {
            title: "See Who Needs Follow-Up",
            description:
              "Set up GoHighLevel CRM so your team knows what to do next.",
            outcomes: [
              "Clear stages and one shared inbox",
              "Assigned owners and follow-up tasks",
            ],
            ctaLabel: "Configure my pipeline",
          },
          integration: {
            title: "Keep Your Tools in Sync",
            description:
              "Connect GoHighLevel, HubSpot, Zoho, Pipedrive or your own CRM.",
            outcomes: [
              "Two-way data updates between systems",
              "Automatic actions based on updated information",
            ],
            ctaLabel: "Schedule a CRM consult",
          },
          reporting: {
            title: "See Where Results Come From",
            description:
              "Bring ad spend, follow-up activity and recorded sales into one report.",
            outcomes: [
              "See which channels work and where leads get stuck",
              "Share a clear weekly view with your team",
            ],
            ctaLabel: "Build a reporting dashboard",
          },
        },
      },
      websites: {
        title: "Websites & Funnels",
        description: "Turn visitors into inquiries.",
        services: {
          corporate: {
            title: "Present Your Business Clearly",
            description:
              "A multi-page website shows your services, team and proof.",
            outcomes: [
              "A professional presentation that builds trust",
              "Clear offers and ways to get in touch",
            ],
            ctaLabel: "Start a web project",
          },
          landing: {
            title: "Give Your Campaign a Clear Next Step",
            description: "A focused landing page for an ad, launch or webinar.",
            outcomes: [
              "Match the page to the offer",
              "Make it easy to send an inquiry",
            ],
            ctaLabel: "Build a landing page",
          },
        },
      },
    },
    cta: {
      eyebrow: "Ready to start?",
      title: "Ready to discuss your request?",
      description:
        "Send your selected services. We’ll reply with scope options, timing and what to expect.",
      primaryCta: "Review My Request",
      secondaryCta: "See the Complete System",
    },
  },
  es: {
    ...payPerServiceContent.es,
    hero: {
      eyebrow: "Servicios por separado",
      title: "Elige solo los servicios que necesitas.",
      description:
        "Elige un servicio o combina varios. Acordamos el alcance, lo implementamos y lo ponemos en marcha.",
      primaryCta: "Ver servicios",
      secondaryCta: "Ver el sistema completo",
    },
    catalog: {
      eyebrow: "Catálogo de servicios",
      title: "¿Qué le ayudaría a tu negocio?",
      description:
        "Usa «Añadir a la solicitud» para elegir servicios. Envía tu lista desde Contacto y confirmamos el alcance y la cotización.",
      helpsWith: "Ver qué incluye",
    },
    groups: {
      paidMedia: {
        title: "Publicidad digital",
        description: "Llega a las personas indicadas.",
        services: {
          meta: {
            title: "Meta Ads",
            description: "Llega a posibles clientes en Facebook e Instagram.",
            outcomes: [
              "Análisis de públicos, piezas y gestión de campañas",
              "Anuncios de seguimiento; reportes de inversión y retorno",
            ],
            ctaLabel: "Agenda una asesoría de pauta",
          },
          tracking: {
            title: "Identifica qué anuncios funcionan",
            description:
              "Relaciona tu marketing con las acciones de quienes te visitan.",
            outcomesLabel: "Ver qué incluye",
            outcomes: [
              "Configuración de Meta Pixel y TikTok Pixel",
              "Conversiones de Google Ads y Google Analytics 4",
            ],
            ctaLabel: "Configura mi medición",
          },
          tiktok: {
            title: "TikTok Ads",
            description:
              "Promociona tus ofertas con videos cortos pensados para TikTok.",
            outcomes: [
              "Video nativo, Spark Ads y colaboraciones con creadores",
              "Pruebas de públicos, lanzamientos y mensajes",
            ],
            ctaLabel: "Pregunta por TikTok Ads",
          },
          google: {
            title: "Google Ads",
            description: "Aparece cuando buscan lo que ofreces.",
            outcomes: [
              "Campañas de búsqueda y Display",
              "Anuncios para retomar visitantes interesados",
            ],
            ctaLabel: "Planea una campaña en Google",
          },
          seo: {
            title: "Haz que te encuentren en buscadores",
            description:
              "Ayuda a que encuentren tu negocio sin depender de anuncios.",
            outcomes: [
              "Estrategia SEO para búsquedas relevantes y tráfico orgánico",
              "Mejora la relevancia de tus páginas de campaña",
            ],
            ctaLabel: "Solicita una estrategia SEO",
          },
          content: {
            title: "Contenido que explica tu oferta",
            description: "Ayuda a entender tus servicios y generar confianza.",
            outcomes: [
              "Mensajes basados en lo que el cliente quiere saber",
              "Contenido para canales pagos, orgánicos y propios",
            ],
            ctaLabel: "Planea tu contenido",
          },
        },
      },
      automation: {
        title: "Automatización y chatbots",
        description:
          "Deja las preguntas y tareas repetitivas en manos del sistema.",
        services: {
          chatbot: {
            title: "Responde preguntas frecuentes",
            description:
              "Un chatbot de IA o por reglas ayuda a responder, reunir datos y agendar.",
            outcomes: [
              "Messenger, Instagram DM, WhatsApp, Telegram y chat web",
              "Respuestas a cualquier hora, consultas organizadas e intervención del equipo",
            ],
            ctaLabel: "Empieza tu proyecto de chatbot",
          },
          workflow: {
            title: "Reduce las tareas repetitivas",
            description:
              "Conecta tus herramientas actuales para reducir el trabajo manual.",
            outcomes: [
              "Automatiza tareas que se repiten",
              "Mantén datos, contactos y equipos sincronizados",
            ],
            ctaLabel: "Solicita una revisión de procesos",
          },
          appointment: {
            title: "Mantén las citas organizadas",
            description:
              "Automatiza citas y seguimiento por SMS, WhatsApp y correo.",
            outcomes: [
              "Confirmaciones inmediatas; recordatorios 24 y 2 horas antes",
              "Reprogramación, cancelación y seguimiento a inasistencias",
            ],
            ctaLabel: "Automatiza tus citas",
          },
          ecommerce: {
            title: "Da seguimiento a tus compradores",
            description:
              "Acompaña a clientes de Shopify y WooCommerce antes y después de comprar.",
            outcomes: [
              "Carritos abandonados y seguimiento después de la compra",
              "Ofertas de fidelización y recomendaciones de productos",
            ],
            ctaLabel: "Pregunta por automatización de e-commerce",
          },
          comments: {
            title: "Convierte comentarios en conversaciones",
            description:
              "Responde comentarios de publicaciones y anuncios en Facebook e Instagram.",
            outcomes: [
              "Respuestas automáticas y captura de consultas",
              "Lleva a los interesados al mensaje directo",
            ],
            ctaLabel: "Automatiza tus comentarios",
          },
        },
      },
      leadOps: {
        title: "Gestión de contactos y CRM",
        description: "Reúne cada contacto y ten claro qué sigue.",
        services: {
          capture: {
            title: "Reúne las consultas que llegan",
            description:
              "Lleva formularios, mensajes, llamadas y consultas de anuncios a tu CRM.",
            outcomes: [
              "Registro y asignación de contactos automáticos",
              "Datos organizados y actualizados",
            ],
            ctaLabel: "Configura la captura de contactos",
          },
          booking: {
            title: "Permite agendar desde tu sitio",
            description:
              "Añade un calendario para que el visitante elija su cita.",
            outcomes: [
              "Confirmaciones y recordatorios",
              "Clientes y equipo al tanto de la agenda",
            ],
            ctaLabel: "Configura tus flujos de citas",
          },
          pipeline: {
            title: "Ve quién necesita seguimiento",
            description:
              "Configura GoHighLevel CRM para que tu equipo sepa qué hacer.",
            outcomes: [
              "Etapas claras y una bandeja compartida",
              "Responsables y tareas de seguimiento",
            ],
            ctaLabel: "Configura mi embudo",
          },
          integration: {
            title: "Mantén tus herramientas conectadas",
            description:
              "Conecta GoHighLevel, HubSpot, Zoho, Pipedrive o tu propio CRM.",
            outcomes: [
              "Actualizaciones de datos en ambos sentidos",
              "Acciones automáticas según la información actualizada",
            ],
            ctaLabel: "Agenda una asesoría de CRM",
          },
          reporting: {
            title: "Ve de dónde vienen los resultados",
            description:
              "Reúne inversión publicitaria, seguimiento y ventas registradas en un reporte.",
            outcomes: [
              "Identifica los canales que funcionan y dónde se frenan las consultas",
              "Comparte una vista semanal clara con tu equipo",
            ],
            ctaLabel: "Arma tu tablero de reportes",
          },
        },
      },
      websites: {
        title: "Sitios web y páginas de campaña",
        description: "Convierte visitas en consultas.",
        services: {
          corporate: {
            title: "Presenta tu negocio con claridad",
            description:
              "Un sitio de varias páginas presenta tus servicios, equipo y trabajo.",
            outcomes: [
              "Una presentación profesional que genera confianza",
              "Ofertas claras y formas de contacto",
            ],
            ctaLabel: "Empieza tu proyecto web",
          },
          landing: {
            title: "Dale un siguiente paso a tu campaña",
            description:
              "Una página enfocada en un anuncio, lanzamiento o webinar.",
            outcomes: [
              "La página corresponde a la oferta",
              "Facilita el envío de una consulta",
            ],
            ctaLabel: "Arma tu landing page",
          },
        },
      },
    },
    cta: {
      eyebrow: "¿Listo para empezar?",
      title: "¿Listo para hablar de tu solicitud?",
      description:
        "Envía los servicios elegidos. Te respondemos con opciones de alcance, tiempos y próximos pasos.",
      primaryCta: "Revisar mi solicitud",
      secondaryCta: "Ver el sistema completo",
    },
  },
};
