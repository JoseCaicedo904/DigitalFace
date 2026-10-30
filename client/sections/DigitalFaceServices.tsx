import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./digitalface-closing-sections.css";
import "@/pages/labs-summit-2026.css";

const MEDIA = "/media/labs-summit-2026/";
const services = [
  {
    number: "01",
    title: "Publicidad digital",
    copy: "Atraemos oportunidades para tu negocio.",
    image: "publicidad-digital.webp",
    alt: "Pieza promocional de DigitalFace con un anuncio en Instagram",
    href: "/es/industries/paid-advertising",
  },
  {
    number: "02",
    title: "Sitios web y landing pages",
    copy: "Experiencias digitales diseñadas para convertir.",
    image: "sitios-web.webp",
    alt: "Diseño de sitio web presentado en el folleto de DigitalFace",
    href: "/es/pay-per-service#websites-and-funnels",
  },
  {
    number: "03",
    title: "CRM y automatización",
    copy: "Organiza tus clientes y automatiza el seguimiento.",
    image: "crm-mensajeria.webp",
    alt: "Ejemplo ilustrativo de seguimiento por WhatsApp del material de DigitalFace",
    href: "/es/pay-per-service",
  },
  {
    number: "04",
    title: "Asistentes con IA",
    copy: "Respuestas inteligentes, atención y agendamiento.",
    image: "asistentes-ia.webp",
    alt: "Ilustración del asistente con inteligencia artificial del folleto de DigitalFace",
    href: "/es/pay-per-service",
  },
] as const;

/** Original Summit services, with optional content retained beneath the cards. */
export function DigitalFaceServicesSection({
  children,
}: {
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const reveal = {
    initial: false as const,
    whileInView: reduced ? undefined : { y: [12, 0], opacity: [0.65, 1] },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.45 },
  };

  return (
    <section
      className="event-services event-section"
      id="soluciones"
      aria-labelledby="services-title"
    >
      <div className="event-shell">
        <div className="event-section-heading">
          <div>
            <span className="event-eyebrow">
              DESPUÉS DE LA JUGADA, LA ESTRATEGIA
            </span>
            <h2 id="services-title">
              Tu negocio puede
              <br />
              llegar más lejos.
            </h2>
          </div>
          <p>
            Conectamos marketing, creatividad, tecnología e inteligencia
            artificial para atraer oportunidades y convertirlas en clientes.
          </p>
        </div>
        <div className="event-services-grid">
          {services.map((service) => (
            <motion.article
              key={service.number}
              {...reveal}
              className="event-service"
            >
              <div className="event-service-image">
                <img
                  src={MEDIA + service.image}
                  alt={service.alt}
                  width={213}
                  height={157}
                  loading="lazy"
                />
              </div>
              <div className="event-service-copy">
                <span className="event-service-number">
                  {service.number} / SOLUCIONES
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <Link
                  to={service.href}
                  aria-label={`Conoce nuestros servicios de ${service.title.toLowerCase()}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </div>
            </motion.article>
          ))}
          <motion.article
            {...reveal}
            className="event-service event-service-production"
          >
            <img
              src={MEDIA + "produccion-digitalface.webp"}
              alt="Equipo de DigitalFace en una grabación real con iluminación y cámara"
              width={750}
              height={1325}
              loading="lazy"
            />
            <div>
              <span className="event-service-number">
                05 / PRODUCCIÓN AUDIOVISUAL Y CONTENIDO
              </span>
              <h3>
                Tu marca también
                <br />
                se cuenta en imágenes.
              </h3>
              <p>Contenido profesional que conecta con tu audiencia.</p>
              <Link
                to="/es/pay-per-service#audiovisual-production"
                className="event-text-link"
              >
                Conoce la producción audiovisual <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.article>
        </div>
        {children}
      </div>
    </section>
  );
}
