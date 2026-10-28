import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  Clapperboard,
  Dice6,
  FileText,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { TechEcosystemSection } from "@/sections/TechEcosystem";
import { homeContent } from "@/i18n/content/home";
import { EventRegistrationForm } from "@/components/event/EventRegistrationForm";
import { DiePips, InteractiveDice } from "@/components/event/InteractiveDice";
import { trackEvent } from "@/lib/analytics";
import "./labs-summit-2026.css";

const MEDIA = "/media/labs-summit-2026/";
const INSTAGRAM = "https://www.instagram.com/digitalfacecolombia/";
const WHATSAPP =
  "https://wa.me/573005061366?text=" +
  encodeURIComponent(
    "Hola, conocí a DigitalFace en Tuluá Labs Summit 2026 y quiero hablar sobre mi negocio.",
  );
const prizes = [
  {
    title: "Pack de hooks",
    description: "Hooks que abren conversaciones.",
    icon: MessageCircle,
    detail:
      "Recurso educativo digital para encontrar nuevas formas de iniciar tus contenidos y conectar con tu audiencia.",
  },
  {
    title: "5 sesgos psicológicos para vender más",
    description: "Comprende cómo deciden tus clientes.",
    icon: Brain,
    detail:
      "Recurso educativo digital para conocer cinco sesgos psicológicos y reflexionar sobre las decisiones de compra.",
  },
  {
    title: "Define tu identidad de marca",
    description: "Dale claridad y personalidad a tu negocio.",
    icon: Target,
    detail:
      "Recurso educativo digital para trabajar la identidad y la forma en que comunicas tu marca.",
  },
  {
    title: "De seguidores a comunidad",
    description: "Conecta y activa a tu audiencia.",
    icon: Users,
    detail:
      "Recurso educativo digital para pensar en relaciones con tu comunidad, más allá del número de seguidores.",
  },
  {
    title: "30 días de contenido con propósito",
    description: "Organiza tus ideas y planea tus publicaciones.",
    icon: CalendarDays,
    detail:
      "Recurso educativo digital para organizar un mes de ideas y darle intención a tu contenido.",
  },
  {
    title: "Reel profesional",
    description: "Video de 15 a 20 segundos grabado en la feria.",
    icon: Clapperboard,
    detail:
      "Grabación durante el evento, edición, efectos y subtítulos. Entrega en 24 horas, sujeta a las condiciones informadas en el stand. Sujeto a cupos disponibles; coordina la grabación con nuestro equipo.",
  },
] as const;
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

export default function LabsSummit2026() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(6);
  const [paused, setPaused] = useState(false);
  usePageMetadata(
    "La Jugada del Crecimiento — Tuluá Labs Summit 2026 | DigitalFace",
    "Participa en La Jugada del Crecimiento de DigitalFace en Tuluá Labs Summit 2026. Descubre los seis premios para impulsar tu marca y conoce nuestras soluciones digitales.",
    {
      image: MEDIA + "digitalface-tulua.webp",
      imageAlt:
        "DigitalFace en Tuluá Labs Summit 2026: marketing, tecnología e inteligencia artificial",
    },
  );
  const reveal = {
    initial: false as const,
    whileInView: reduced ? undefined : { y: [12, 0], opacity: [0.65, 1] },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.45 },
  };
  const registrationClick = () =>
    trackEvent("event_registration_click", { page_source: "labs_summit_2026" });
  function select(face: number) {
    setActive(face);
    trackEvent("event_prize_explore", {
      page_source: "labs_summit_2026",
      service_id: `prize-${face}`,
    });
  }
  const bookingClick = () =>
    trackEvent("consultation_click", { page_source: "labs_summit_2026" });
  const contactClick = () =>
    trackEvent("contact_click", {
      page_source: "labs_summit_2026",
      contact_method: "whatsapp",
    });

  return (
    <div className={`event-page${paused ? " event-motion-paused" : ""}`}>
      <section className="event-hero" aria-labelledby="event-title">
        <div className="event-shell">
          <div className="event-fair-lockup">
            <div>
              <span className="event-eyebrow">DIGITALFACE EN LA FERIA</span>
              <p>
                TULUÁ <strong>LABS SUMMIT</strong>{" "}
                <span className="event-year">2026</span>
              </p>
            </div>
            <img
              src={MEDIA + "labs-summit-2026.webp"}
              alt="Identidad oficial suministrada de Labs Summit 2026"
              width={447}
              height={447}
            />
          </div>
          <div className="event-hero-grid">
            <div className="event-hero-copy">
              <span className="event-kicker">
                <span /> UNA EXPERIENCIA PARA TU NEGOCIO
              </span>
              <h1 id="event-title">
                LA JUGADA <br />
                DEL <span>CRECIMIENTO</span>
              </h1>
              <p className="event-hero-subtitle">¡Lanza el dado y gana!</p>
              <p className="event-hero-description">
                Todas las caras tienen un premio para impulsar tu negocio. Ven
                al stand de DigitalFace y haz tu próxima jugada.
              </p>
              <div className="event-hero-actions">
                <a
                  href="#registro"
                  onClick={registrationClick}
                  className="event-button event-button-cyan"
                >
                  Participa y gana <ArrowUpRight size={20} />
                </a>
                <a href="#premios" className="event-text-link">
                  Descubre los premios <ArrowDown size={17} />
                </a>
              </div>
              <div className="event-hero-facts">
                <span>
                  <Dice6 size={16} /> Dado físico en el stand
                </span>
                <span>
                  <Sparkles size={16} /> Todas las caras tienen premio
                </span>
              </div>
            </div>
            <InteractiveDice
              active={active}
              select={select}
              paused={paused}
              setPaused={setPaused}
              title={prizes[active - 1].title}
            />
          </div>
          <nav className="event-section-nav" aria-label="En esta experiencia">
            <a href="#como-participar">Cómo participar</a>
            <a href="#premios">Los 6 premios</a>
            <a href="#registro">Registra tu negocio</a>
            <a href="#soluciones">Soluciones DigitalFace</a>
            <a href="#conversemos">
              Conversemos <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </section>

      <section
        className="event-steps event-section"
        id="como-participar"
        aria-labelledby="steps-title"
      >
        <div className="event-shell">
          <div className="event-section-heading">
            <div>
              <span className="event-eyebrow">TU PRÓXIMA JUGADA</span>
              <h2 id="steps-title">¿Cómo participar?</h2>
            </div>
            <p>
              Tres pasos. Un dado.
              <br />
              Una oportunidad para tu marca.
            </p>
          </div>
          <div className="event-step-grid">
            {[
              {
                number: "01",
                icon: Instagram,
                title: "Sigue a DigitalFace",
                copy: "Encuéntranos en Instagram y conecta con lo que hacemos.",
                href: INSTAGRAM,
                cta: "@digitalfacecolombia",
                external: true,
              },
              {
                number: "02",
                icon: FileText,
                title: "Registra tu negocio",
                copy: "Cuéntanos quién eres y qué necesita tu negocio para crecer.",
                href: "#registro",
                cta: "Ir al registro",
                external: false,
              },
              {
                number: "03",
                icon: Dice6,
                title: "Lanza el dado",
                copy: "En nuestro stand, lanza el dado físico dentro del círculo. La cara que salga determina tu premio.",
                href: "#reglas",
                cta: "Conoce las reglas",
                external: false,
              },
            ].map((step) => (
              <motion.article
                key={step.number}
                {...reveal}
                className="event-step"
              >
                <div className="event-step-top">
                  <span>{step.number}</span>
                  <step.icon size={29} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <a
                  href={step.href}
                  target={step.external ? "_blank" : undefined}
                  rel={step.external ? "noopener noreferrer" : undefined}
                  onClick={step.number === "02" ? registrationClick : undefined}
                >
                  {step.cta}
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
          <div className="event-rule-strip" id="reglas">
            <DiePips face={6} />
            <div>
              <strong>Todas las caras tienen premio.</strong>
              <p>
                Un intento por persona o empresa. El dado debe quedar
                completamente dentro del círculo. El equipo de DigitalFace
                valida la participación y el resultado en el stand.
              </p>
            </div>
            <ShieldCheck size={28} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        className="event-prizes event-section"
        id="premios"
        aria-labelledby="prizes-title"
      >
        <div className="event-shell">
          <div className="event-section-heading">
            <div>
              <span className="event-eyebrow">
                SEIS CARAS. SEIS POSIBILIDADES.
              </span>
              <h2 id="prizes-title">
                Lanza y gana<span className="event-heading-dot">.</span>
              </h2>
            </div>
            <p>
              Cada cara del dado es una oportunidad para aprender, crear o hacer
              crecer tu marca.
            </p>
          </div>
          <div className="event-prize-grid">
            {prizes.map((prize, i) => (
              <article
                className={`event-prize${active === i + 1 ? " is-selected" : ""}${i === 5 ? " event-prize-special" : ""}`}
                key={prize.title}
              >
                {i === 5 ? (
                  <img
                    className="event-prize-photo"
                    src={MEDIA + "produccion-digitalface.webp"}
                    alt="Producción audiovisual de DigitalFace con cámara, iluminación y grabación en celular"
                    width={750}
                    height={1325}
                    loading="lazy"
                  />
                ) : null}
                <button
                  type="button"
                  className="event-prize-button"
                  aria-expanded={active === i + 1}
                  aria-controls={`prize-detail-${i + 1}`}
                  onClick={() => select(i + 1)}
                >
                  <span className="event-prize-top">
                    <span className="event-mini-die">
                      <DiePips face={i + 1} />
                    </span>
                    <span>
                      {i === 5
                        ? "EL PREMIO ESPECIAL"
                        : `RECURSO EDUCATIVO · 0${i + 1}`}
                    </span>
                    <prize.icon
                      size={23}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="event-prize-title">{prize.title}</span>
                  <span className="event-prize-description">
                    {prize.description}
                  </span>
                  <span className="event-prize-discover">
                    {active === i + 1
                      ? "Estás explorando esta cara"
                      : "Explora este premio"}
                    <ChevronDown
                      size={16}
                      className={active === i + 1 ? "is-open" : ""}
                    />
                  </span>
                </button>
                <div
                  className="event-prize-detail"
                  id={`prize-detail-${i + 1}`}
                  hidden={active !== i + 1}
                >
                  <p>{prize.detail}</p>
                </div>
                {i === 5 ? (
                  <p className="event-prize-availability">
                    Sujeto a cupos disponibles.
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <div className="event-prize-delivery">
            <MessageCircle size={21} aria-hidden="true" />
            <p>
              <strong>Los premios educativos se envían por WhatsApp.</strong> El
              Reel requiere disponibilidad y coordinación en el stand. Explorar
              una cara aquí no otorga ni descarga premios.
            </p>
          </div>
        </div>
      </section>

      <section
        className="event-registration event-section"
        id="registro"
        aria-labelledby="registration-title"
      >
        <div className="event-shell event-registration-grid">
          <div className="event-registration-copy">
            <span className="event-eyebrow">DA EL SIGUIENTE PASO</span>
            <h2 id="registration-title">
              Registra tu negocio <span>y participa.</span>
            </h2>
            <p>
              Completa tus datos para participar en La Jugada del Crecimiento.
            </p>
            <div className="event-registration-ticket">
              <span className="event-ticket-icon">
                <Dice6 size={36} />
              </span>
              <div>
                <strong>Tu negocio tiene una jugada pendiente.</strong>
                <p>
                  Después de registrarte, acércate al equipo de DigitalFace para
                  validar tu participación.
                </p>
              </div>
            </div>
            <ul className="event-check-list">
              <li>
                <Check size={17} /> Un intento por persona o empresa.
              </li>
              <li>
                <Check size={17} /> Premio validado por nuestro equipo.
              </li>
              <li>
                <Check size={17} /> Sin compra ni pago para participar.
              </li>
            </ul>
            <a
              className="event-registration-instagram"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={19} /> Recuerda seguir a @digitalfacecolombia{" "}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <EventRegistrationForm />
        </div>
      </section>

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
          <div className="event-brand-story">
            <div>
              <span className="event-eyebrow">
                ESTRATEGIA + CREATIVIDAD + TECNOLOGÍA
              </span>
              <h3>Somos DigitalFace.</h3>
              <p>
                Construimos las piezas digitales que tu negocio necesita: desde
                la primera impresión hasta el seguimiento de cada oportunidad.
              </p>
              <Link to="/es/about" className="event-text-link">
                Conoce nuestro trabajo <ArrowUpRight size={17} />
              </Link>
            </div>
            <video
              controls
              muted
              playsInline
              preload="none"
              poster={MEDIA + "digitalface-video-poster.webp"}
              width={1280}
              height={720}
              aria-label="Presentación visual del logo de DigitalFace, sin audio"
            >
              <source
                src={MEDIA + "digitalface-presentacion.mp4"}
                type="video/mp4"
              />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>
      </section>

      <TechEcosystemSection
        className="event-technologies"
        content={{
          ...homeContent.es.techEcosystem,
          eyebrow: "TECNOLOGÍAS CON LAS QUE TRABAJAMOS",
          title: "La tecnología detrás de tus resultados",
          description:
            "Conectamos herramientas y soluciones para que tu negocio trabaje mejor.",
        }}
      />

      <section
        className="event-scheduling event-section"
        id="conversemos"
        aria-labelledby="scheduling-title"
        data-calendar-slot="digitalface-existing-booking"
      >
        <div className="event-shell event-scheduling-grid">
          <div>
            <span className="event-eyebrow">
              UNA CONVERSACIÓN CON PROPÓSITO
            </span>
            <h2 id="scheduling-title">
              Hablemos del crecimiento de tu negocio.
            </h2>
            <p>
              Descubre cómo DigitalFace puede ayudarte a atraer oportunidades,
              automatizar procesos y convertir más clientes.
            </p>
          </div>
          <div className="event-calendar-container">
            <CalendarDays size={38} strokeWidth={1.4} aria-hidden="true" />
            <h3>Encuentra un espacio para tu negocio.</h3>
            <p>
              Abre nuestra agenda y elige entre los horarios disponibles. Esta
              conversación es independiente de tu registro en la feria.
            </p>
            <Link
              to="/es/book"
              className="event-button event-button-blue"
              onClick={bookingClick}
            >
              Agendar una conversación <ArrowUpRight size={18} />
            </Link>
            <span>La cita se confirma al completar el agendamiento.</span>
          </div>
        </div>
      </section>

      <section
        className="event-contact event-section"
        aria-labelledby="contact-title"
      >
        <div className="event-shell">
          <div className="event-contact-heading">
            <span className="event-kicker">
              <Zap size={17} /> HAZ TU PRÓXIMO MOVIMIENTO
            </span>
            <h2 id="contact-title">
              El crecimiento de tu negocio empieza con una conversación.
            </h2>
            <p>
              Estrategia, creatividad y tecnología trabajando para tu negocio.
            </p>
            <div className="event-contact-actions">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="event-button event-button-cyan"
                onClick={contactClick}
              >
                <MessageCircle size={20} /> Hablemos por WhatsApp
              </a>
              <Link
                to="/es/book"
                className="event-text-link"
                onClick={bookingClick}
              >
                Agendar una conversación <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="event-contact-links">
            <Link to="/es">
              digitalface.app <ArrowUpRight size={16} />
            </Link>
            <a href="mailto:sales@digitalface.app">
              <Mail size={17} /> sales@digitalface.app
            </a>
            <a href="tel:+573005061366">
              <Phone size={17} /> +57 300 506 1366
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <Instagram size={17} /> @digitalfacecolombia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
