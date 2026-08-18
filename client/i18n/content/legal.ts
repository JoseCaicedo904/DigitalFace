import type { Locale } from "../locale";

type LegalSection = {
  heading: string;
  body: string[];
  list: string[];
  subsections: { title: string; list: string[] }[];
};

type LegalPage = {
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  lastUpdatedLabel: string;
  intro: string;
  sections: LegalSection[];
};

const en: { privacy: LegalPage; terms: LegalPage } = {
  privacy: {
    metadata: {
      title: "Privacy Policy | DigitalFace Marketing",
      description:
        "How DigitalFace Marketing collects, uses, shares and protects personal information.",
    },
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    lastUpdatedLabel: "Last updated",
    intro:
      "This Privacy Policy explains how DigitalFace Marketing collects, uses and shares information when you visit our website or engage our services. We operate remotely and serve clients in the United States and Colombia.",
    sections: [
      {
        heading: "1. Information we collect",
        body: [
          "We collect information that helps us respond to inquiries, deliver services, and improve our website and operations. Categories may include:",
        ],
        list: [
          "Contact and business details such as name, email address, phone number, company name, job title and website.",
          "Project and service details such as goals, budgets, campaign preferences and operational requirements.",
          "Communications such as emails, form submissions, meeting notes, and chat or messaging content.",
          "Usage and device data such as IP address, browser type, device identifiers, pages viewed and referral sources.",
          "Marketing and advertising data such as UTM parameters, conversion events and ad interaction data.",
          "Client data processed on behalf of our customers while delivering services, for example lead data or CRM records. In those cases, our clients control the data.",
        ],
        subsections: [],
      },
      {
        heading: "2. How we collect information",
        body: [],
        list: [
          "Directly from you through forms, email or calls.",
          "Through scheduling tools or embedded booking experiences.",
          "From chat and messaging platforms connected to our services.",
          "Automatically through cookies and analytics tools on our website.",
          "From third party platforms you connect for a project, such as CRM, email, advertising or automation tools.",
        ],
        subsections: [],
      },
      {
        heading: "3. How we use information",
        body: [
          "Where required by law, including Colombia, we rely on your consent, our contractual obligations, our legitimate interests and legal requirements as the legal basis for processing.",
        ],
        list: [
          "Respond to inquiries and provide customer support.",
          "Plan, deliver and manage services and projects.",
          "Process billing, payments and contract administration.",
          "Improve our website, our communications and our service delivery.",
          "Send marketing or service updates when you have opted in or where permitted by law.",
          "Protect against fraud, abuse and security incidents.",
        ],
        subsections: [],
      },
      {
        heading: "4. Sharing and disclosure",
        body: [
          "We do not sell personal information. We may share information with:",
          "Depending on your project, integrations may include CRM platforms, email or SMS providers, analytics services, scheduling tools and advertising platforms. We only share the information needed to deliver the service.",
        ],
        list: [
          "Service providers and subcontractors who help us operate and deliver services, for example hosting, analytics, payment processing, CRM, automation and messaging platforms.",
          "Advertising and analytics platforms used to measure and optimize campaigns, subject to your preferences and choices.",
          "Professional advisors and legal authorities when required to comply with law or protect our rights.",
          "Clients and partners as needed to fulfill a project you request.",
        ],
        subsections: [],
      },
      {
        heading: "5. Cookies and tracking technologies",
        body: [
          "We use cookies and similar technologies to operate our website, remember preferences, analyze traffic and measure marketing performance. You can control cookies through your browser settings and, where available, opt out of analytics or advertising cookies.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "6. Marketing communications",
        body: [
          "You can opt out of marketing emails at any time using the unsubscribe link in our messages, or by contacting us. We may still send non-marketing communications related to your services.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "7. Data retention",
        body: [
          "We keep personal information only as long as necessary to provide services, meet legal obligations, resolve disputes and enforce agreements. Retention periods vary by data type and purpose.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "8. Security",
        body: [
          "We maintain administrative, technical and physical safeguards designed to protect personal information. No system can be guaranteed secure, so please use caution when sharing sensitive data.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "9. International transfers",
        body: [
          "We operate in the United States and Colombia, and may store or process information in either country or wherever our service providers operate. We take steps to protect information during cross-border transfers as required by law.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "10. Your privacy rights",
        body: [
          "You may have rights to access, correct, delete or object to the processing of your personal information. To exercise your rights, contact us at the email below.",
        ],
        list: [],
        subsections: [
          {
            title: "United States, including California",
            list: [
              "Request access to or deletion of personal information.",
              "Request correction of inaccurate information.",
              "Opt out of the sale or sharing of personal information. We do not sell personal information.",
              "Limit the use of sensitive personal information where applicable.",
              "Receive non-discriminatory treatment for exercising privacy rights.",
            ],
          },
          {
            title: "Colombia (Ley 1581 de 2012)",
            list: [
              "Know, update, rectify and delete personal data.",
              "Revoke consent or request suppression.",
              "Request proof of authorization and be informed about how data is used.",
              "File complaints with the Superintendence of Industry and Commerce (SIC).",
            ],
          },
        ],
      },
      {
        heading: "11. Children",
        body: [
          "Our services are not directed to children under 13, and we do not knowingly collect personal information from children.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "12. Updates to this policy",
        body: [
          "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "13. Contact us",
        body: [
          "For privacy questions or requests, contact us at sales@digitalfacemarketing.com.",
        ],
        list: [],
        subsections: [],
      },
    ],
  },
  terms: {
    metadata: {
      title: "Terms of Service | DigitalFace Marketing",
      description:
        "The terms and conditions that govern the use of DigitalFace Marketing services.",
    },
    eyebrow: "Terms of Service",
    title: "Terms of Service",
    lastUpdatedLabel: "Last updated",
    intro:
      "These Terms of Service govern your use of the DigitalFace Marketing website and services. By using our site or engaging our services, you agree to these terms.",
    sections: [
      {
        heading: "1. Services",
        body: [
          "DigitalFace Marketing provides digital services including CRM setup and integrations, automation workflows, chatbots and messaging systems, paid advertising management, SEO and content services, and website, funnel and landing page development. Service scope, timelines and deliverables are defined in a proposal, statement of work or similar agreement.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "2. Client responsibilities",
        body: [],
        list: [
          "Provide accurate information, timely approvals and the required access to accounts, platforms and assets.",
          "Ensure you have the rights to any content, data or materials you provide to us.",
          "Maintain compliance with applicable laws, platform policies and marketing regulations.",
          "Maintain backups and administrative access to your systems.",
        ],
        subsections: [],
      },
      {
        heading: "3. Acceptable use",
        body: [
          "You agree not to use our website or services for unlawful activities, to violate third party rights, or to transmit malicious code, spam or deceptive content. We may suspend or terminate services if we believe your use violates these terms or applicable laws.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "4. Fees, billing and refunds",
        body: [
          "Fees, billing schedules and payment terms are defined in your proposal or agreement. Unless otherwise stated, fees are due upon receipt of invoice. Refunds are not guaranteed and are handled case by case, based on the work completed and the terms of the engagement.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "5. Third party platforms",
        body: [
          "Our services often rely on third party platforms such as CRM, marketing, analytics, advertising, automation and messaging tools. Your use of those platforms is governed by their own terms and policies, and we are not responsible for their performance or availability.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "6. Intellectual property",
        body: [
          "You retain ownership of your pre-existing content, trademarks and data. We retain ownership of our pre-existing materials, templates, methods and know-how. Upon full payment, you receive a license to use the deliverables created specifically for your project, except where third party licenses apply.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "7. Confidentiality",
        body: [
          "We will treat non-public business information shared during a project as confidential and use it only to deliver services. You agree to treat our non-public information the same way.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "8. Results and disclaimers",
        body: [
          "Marketing results vary based on many factors, including budgets, market conditions, platform changes and your internal processes. We do not guarantee specific outcomes or results.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "9. Disclaimer of warranties",
        body: [
          'Our website and services are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose.',
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "10. Limitation of liability",
        body: [
          "To the maximum extent permitted by law, DigitalFace Marketing will not be liable for any indirect, incidental, special or consequential damages. Our total liability for any claim arising out of or relating to the services will not exceed the fees paid for the services giving rise to the claim during the three months before the event.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "11. Indemnification",
        body: [
          "You agree to indemnify and hold us harmless from claims, damages or expenses arising from your use of the services, your content, or your violation of these terms.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "12. Termination",
        body: [
          "Either party may terminate services as outlined in the project agreement, or with reasonable notice if no agreement is in place. Upon termination, you remain responsible for fees incurred through the termination date.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "13. Governing law",
        body: [
          "These terms are governed by the laws of the State of Florida, United States, and the Republic of Colombia, as applicable. If you are a business established in the United States, Florida law applies. If you are established in Colombia, Colombian law applies. Any disputes will be brought before the courts with appropriate jurisdiction in those locations, unless your agreement specifies otherwise.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "14. Updates to these terms",
        body: [
          "We may update these Terms of Service from time to time. Updates will be posted on this page with a revised effective date.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "15. Contact us",
        body: [
          "For questions about these terms, contact us at sales@digitalfacemarketing.com.",
        ],
        list: [],
        subsections: [],
      },
    ],
  },
};

const es: typeof en = {
  privacy: {
    metadata: {
      title: "Política de privacidad | DigitalFace Marketing",
      description:
        "Cómo DigitalFace Marketing recolecta, usa, comparte y protege la información personal.",
    },
    eyebrow: "Política de privacidad",
    title: "Política de privacidad",
    lastUpdatedLabel: "Última actualización",
    intro:
      "Esta Política de privacidad explica cómo DigitalFace Marketing recolecta, usa y comparte información cuando visitas nuestro sitio web o contratas nuestros servicios. Operamos de forma remota y atendemos clientes en Estados Unidos y Colombia.",
    sections: [
      {
        heading: "1. Información que recolectamos",
        body: [
          "Recolectamos la información que nos permite responder consultas, prestar servicios y mejorar nuestro sitio y nuestra operación. Las categorías pueden incluir:",
        ],
        list: [
          "Datos de contacto y del negocio, como nombre, correo electrónico, teléfono, nombre de la empresa, cargo y sitio web.",
          "Datos del proyecto y del servicio, como objetivos, presupuestos, preferencias de campaña y requerimientos operativos.",
          "Comunicaciones, como correos, envíos de formularios, notas de reuniones y contenido de chats o mensajería.",
          "Datos de uso y dispositivo, como dirección IP, tipo de navegador, identificadores de dispositivo, páginas vistas y fuentes de referencia.",
          "Datos de marketing y publicidad, como parámetros UTM, eventos de conversión y datos de interacción con anuncios.",
          "Datos que tratamos por cuenta de nuestros clientes durante la prestación del servicio, por ejemplo información de contactos o registros del CRM. En esos casos, el control de los datos es del cliente.",
        ],
        subsections: [],
      },
      {
        heading: "2. Cómo recolectamos la información",
        body: [],
        list: [
          "Directamente de ti a través de formularios, correo o llamadas.",
          "Mediante herramientas de agendamiento o calendarios integrados.",
          "Desde plataformas de chat y mensajería conectadas a nuestros servicios.",
          "De forma automática mediante cookies y herramientas de analítica en nuestro sitio.",
          "Desde plataformas de terceros que conectas para un proyecto, como CRM, correo, publicidad o automatización.",
        ],
        subsections: [],
      },
      {
        heading: "3. Cómo usamos la información",
        body: [
          "Cuando la ley lo exige, incluida Colombia, tratamos los datos con base en tu autorización, nuestras obligaciones contractuales, nuestro interés legítimo y los requisitos legales aplicables.",
        ],
        list: [
          "Responder consultas y brindar soporte.",
          "Planear, entregar y administrar servicios y proyectos.",
          "Gestionar facturación, pagos y administración de contratos.",
          "Mejorar nuestro sitio, nuestras comunicaciones y la prestación del servicio.",
          "Enviar información comercial o actualizaciones del servicio cuando lo has autorizado o cuando la ley lo permite.",
          "Proteger contra fraude, abuso e incidentes de seguridad.",
        ],
        subsections: [],
      },
      {
        heading: "4. Divulgación y transferencia",
        body: [
          "No vendemos información personal. Podemos compartir información con:",
          "Según tu proyecto, las integraciones pueden incluir plataformas de CRM, proveedores de correo o SMS, servicios de analítica, herramientas de agendamiento y plataformas publicitarias. Solo compartimos la información necesaria para prestar el servicio.",
        ],
        list: [
          "Proveedores y subcontratistas que nos ayudan a operar y prestar los servicios, por ejemplo hosting, analítica, procesamiento de pagos, CRM, automatización y mensajería.",
          "Plataformas de publicidad y analítica usadas para medir y optimizar campañas, según tus preferencias y decisiones.",
          "Asesores profesionales y autoridades cuando sea necesario para cumplir la ley o proteger nuestros derechos.",
          "Clientes y aliados cuando se requiere para ejecutar un proyecto que solicitas.",
        ],
        subsections: [],
      },
      {
        heading: "5. Cookies y tecnologías de seguimiento",
        body: [
          "Usamos cookies y tecnologías similares para operar el sitio, recordar preferencias, analizar el tráfico y medir el desempeño de marketing. Puedes controlar las cookies desde la configuración de tu navegador y, cuando esté disponible, rechazar las cookies de analítica o publicidad.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "6. Comunicaciones comerciales",
        body: [
          "Puedes darte de baja de los correos comerciales en cualquier momento usando el enlace de cancelación de nuestros mensajes o escribiéndonos. Es posible que sigamos enviando comunicaciones no comerciales relacionadas con tus servicios.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "7. Conservación de los datos",
        body: [
          "Conservamos la información personal solo el tiempo necesario para prestar los servicios, cumplir obligaciones legales, resolver disputas y hacer cumplir acuerdos. Los plazos varían según el tipo de dato y su finalidad.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "8. Seguridad",
        body: [
          "Mantenemos medidas administrativas, técnicas y físicas diseñadas para proteger la información personal. Ningún sistema puede garantizarse totalmente seguro, así que te pedimos precaución al compartir datos sensibles.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "9. Transferencias internacionales",
        body: [
          "Operamos en Estados Unidos y Colombia, y podemos almacenar o tratar información en cualquiera de los dos países o donde operen nuestros proveedores. Adoptamos medidas para proteger la información en las transferencias internacionales, conforme a la ley.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "10. Tus derechos",
        body: [
          "Puedes tener derecho a acceder, corregir, eliminar u oponerte al tratamiento de tu información personal. Para ejercerlos, escríbenos al correo indicado más abajo.",
        ],
        list: [],
        subsections: [
          {
            title: "Estados Unidos, incluida California",
            list: [
              "Solicitar acceso a tu información personal o su eliminación.",
              "Solicitar la corrección de información inexacta.",
              "Rechazar la venta o el intercambio de información personal. Nosotros no vendemos información personal.",
              "Limitar el uso de información personal sensible cuando aplique.",
              "Recibir un trato no discriminatorio por ejercer tus derechos de privacidad.",
            ],
          },
          {
            title: "Colombia (Ley 1581 de 2012)",
            list: [
              "Conocer, actualizar, rectificar y suprimir tus datos personales.",
              "Revocar la autorización o solicitar la supresión de los datos.",
              "Solicitar prueba de la autorización y ser informado sobre el uso de tus datos.",
              "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).",
            ],
          },
        ],
      },
      {
        heading: "11. Menores de edad",
        body: [
          "Nuestros servicios no están dirigidos a menores de 13 años y no recolectamos información personal de menores de manera intencional.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "12. Cambios en esta política",
        body: [
          "Podemos actualizar esta Política de privacidad ocasionalmente. Las actualizaciones se publican en esta página con una nueva fecha de vigencia.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "13. Contáctanos",
        body: [
          "Para consultas o solicitudes sobre privacidad, escríbenos a sales@digitalfacemarketing.com.",
        ],
        list: [],
        subsections: [],
      },
    ],
  },
  terms: {
    metadata: {
      title: "Términos del servicio | DigitalFace Marketing",
      description:
        "Los términos y condiciones que rigen el uso de los servicios de DigitalFace Marketing.",
    },
    eyebrow: "Términos del servicio",
    title: "Términos del servicio",
    lastUpdatedLabel: "Última actualización",
    intro:
      "Estos Términos del servicio rigen el uso del sitio web y de los servicios de DigitalFace Marketing. Al usar el sitio o contratar nuestros servicios, aceptas estos términos.",
    sections: [
      {
        heading: "1. Servicios",
        body: [
          "DigitalFace Marketing presta servicios digitales que incluyen configuración e integración de CRM, flujos de automatización, chatbots y sistemas de mensajería, gestión de publicidad paga, servicios de SEO y contenido, y desarrollo de sitios web, embudos y landing pages. El alcance, los tiempos y los entregables se definen en una propuesta, una orden de trabajo o un acuerdo equivalente.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "2. Responsabilidades del cliente",
        body: [],
        list: [
          "Entregar información precisa, aprobaciones oportunas y los accesos necesarios a cuentas, plataformas y activos.",
          "Garantizar que cuentas con los derechos sobre el contenido, los datos o los materiales que nos entregas.",
          "Cumplir la normativa aplicable, las políticas de las plataformas y las regulaciones de marketing.",
          "Mantener respaldos y accesos administrativos a tus propios sistemas.",
        ],
        subsections: [],
      },
      {
        heading: "3. Uso aceptable",
        body: [
          "Te comprometes a no usar nuestro sitio ni nuestros servicios para actividades ilícitas, para vulnerar derechos de terceros o para transmitir código malicioso, spam o contenido engañoso. Podemos suspender o terminar los servicios si consideramos que tu uso incumple estos términos o la ley aplicable.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "4. Tarifas, facturación y reembolsos",
        body: [
          "Las tarifas, los ciclos de facturación y las condiciones de pago se definen en tu propuesta o acuerdo. Salvo que se indique lo contrario, las facturas se pagan al momento de su recepción. Los reembolsos no están garantizados y se evalúan caso por caso, según el trabajo ejecutado y las condiciones del contrato.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "5. Plataformas de terceros",
        body: [
          "Nuestros servicios suelen apoyarse en plataformas de terceros de CRM, marketing, analítica, publicidad, automatización y mensajería. Tu uso de esas plataformas se rige por sus propios términos y políticas, y no somos responsables por su desempeño ni por su disponibilidad.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "6. Propiedad intelectual",
        body: [
          "Conservas la titularidad de tu contenido, marcas y datos preexistentes. Nosotros conservamos la titularidad de nuestros materiales, plantillas, métodos y conocimiento previos. Con el pago total, recibes una licencia para usar los entregables creados específicamente para tu proyecto, salvo cuando apliquen licencias de terceros.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "7. Confidencialidad",
        body: [
          "Tratamos como confidencial la información de negocio no pública compartida durante un proyecto y la usamos únicamente para prestar los servicios. Tú aceptas dar el mismo trato a nuestra información no pública.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "8. Resultados y aclaraciones",
        body: [
          "Los resultados de marketing varían según muchos factores, entre ellos el presupuesto, las condiciones del mercado, los cambios de las plataformas y tus procesos internos. No garantizamos resultados específicos.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "9. Exclusión de garantías",
        body: [
          'Nuestro sitio y nuestros servicios se prestan "tal como están" y "según disponibilidad". En la máxima medida permitida por la ley, excluimos toda garantía, expresa o implícita, incluidas las garantías implícitas de comerciabilidad e idoneidad para un propósito determinado.',
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "10. Limitación de responsabilidad",
        body: [
          "En la máxima medida permitida por la ley, DigitalFace Marketing no será responsable por daños indirectos, incidentales, especiales o consecuenciales. Nuestra responsabilidad total por cualquier reclamación derivada de los servicios no excederá el valor pagado por los servicios que originaron la reclamación durante los tres meses anteriores al hecho.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "11. Indemnidad",
        body: [
          "Aceptas mantenernos indemnes frente a reclamaciones, daños o gastos derivados de tu uso de los servicios, de tu contenido o del incumplimiento de estos términos.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "12. Terminación",
        body: [
          "Cualquiera de las partes puede terminar los servicios según lo previsto en el acuerdo del proyecto o, si no existe acuerdo, con un aviso razonable. Tras la terminación, sigues siendo responsable por los valores causados hasta esa fecha.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "13. Ley aplicable",
        body: [
          "Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos, y de la República de Colombia, según corresponda. Si eres una empresa constituida en Estados Unidos, aplica la ley de Florida. Si estás constituida en Colombia, aplica la ley colombiana. Las controversias se someterán a los tribunales con jurisdicción en esos lugares, salvo que tu acuerdo indique algo distinto.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "14. Cambios en estos términos",
        body: [
          "Podemos actualizar estos Términos del servicio ocasionalmente. Las actualizaciones se publican en esta página con una nueva fecha de vigencia.",
        ],
        list: [],
        subsections: [],
      },
      {
        heading: "15. Contáctanos",
        body: [
          "Para preguntas sobre estos términos, escríbenos a sales@digitalfacemarketing.com.",
        ],
        list: [],
        subsections: [],
      },
    ],
  },
};

export const legalContent: Record<Locale, typeof en> = { en, es };
export type LegalContent = typeof en;
