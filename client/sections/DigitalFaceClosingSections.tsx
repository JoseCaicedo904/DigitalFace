import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Zap,
} from "lucide-react";
import "./digitalface-closing-sections.css";

const MEDIA = "/media/labs-summit-2026/";
const INSTAGRAM = "https://www.instagram.com/digitalfacecolombia/";
const WHATSAPP =
  "https://wa.me/573005061366?text=" +
  encodeURIComponent(
    "Hola, conocí a DigitalFace en Tuluá Labs Summit 2026 y quiero hablar sobre mi negocio.",
  );

/** Shared verbatim with the Tuluá Labs Summit services section. */
export function DigitalFaceBrandStory() {
  return (
    <div className="event-brand-story">
      <div>
        <span className="event-eyebrow">
          ESTRATEGIA + CREATIVIDAD + TECNOLOGÍA
        </span>
        <h3>Somos DigitalFace.</h3>
        <p>
          Construimos las piezas digitales que tu negocio necesita: desde la
          primera impresión hasta el seguimiento de cada oportunidad.
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
        <source src={MEDIA + "digitalface-presentacion.mp4"} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
    </div>
  );
}

export function DigitalFaceContactSection({
  bookingHref = "#conversemos",
  onBookingClick,
  onContactClick,
}: {
  bookingHref?: string;
  onBookingClick?: () => void;
  onContactClick?: () => void;
}) {
  return (
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
              onClick={onContactClick}
            >
              <MessageCircle size={20} /> Hablemos por WhatsApp
            </a>
            <a
              href={bookingHref}
              className="event-text-link"
              onClick={onBookingClick}
            >
              Agendar una conversación <ArrowUpRight size={18} />
            </a>
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
  );
}
