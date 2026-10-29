import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const EventCalendar = lazy(() =>
  import("@/components/booking/GhlBookingEmbed").then((module) => ({
    default: module.GhlBookingEmbed,
  })),
);
export const EVENT_CALENDAR_ID = "ELOONibg21k8gZnyNjJU";
// The owner supplied this embed after saving the dedicated GHL form and calendar.
export const EVENT_CALENDAR_READY = true;

export function EventBookingCalendar({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="event-calendar-container">
      <CalendarDays size={38} strokeWidth={1.4} aria-hidden="true" />
      <h3>Encuentra un espacio para tu negocio.</h3>
      <p>
        Elige entre los horarios disponibles. Esta conversación es independiente
        de tu registro y tu premio en la feria.
      </p>
      {open && EVENT_CALENDAR_READY ? (
        <Suspense
          fallback={<p role="status">Cargando horarios disponibles…</p>}
        >
          <EventCalendar
            title="Agenda de consultas DigitalFace — Tuluá Labs Summit"
            calendarId={EVENT_CALENDAR_ID}
          />
        </Suspense>
      ) : EVENT_CALENDAR_READY ? (
        <button
          className="event-button event-button-blue"
          type="button"
          onClick={onOpen}
        >
          Ver horarios disponibles
        </button>
      ) : (
        <Link
          to="/es/book"
          className="event-button event-button-blue"
          onClick={onOpen}
        >
          Agendar una conversación
        </Link>
      )}
      <span>La cita se confirma al completar el agendamiento.</span>
    </div>
  );
}
