import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import {
  startEventAppointmentBookingAttempt,
  trackEvent,
} from "@/lib/analytics";

const EventCalendar = lazy(() =>
  import("@/components/booking/GhlBookingEmbed").then((module) => ({
    default: module.GhlBookingEmbed,
  })),
);
export const EVENT_CALENDAR_ID = "ELOONibg21k8gZnyNjJU";
// Enable together with GHL activation after the dedicated booking form is ready.
export const EVENT_CALENDAR_READY = false;

export function EventBookingCalendar() {
  const [open, setOpen] = useState(false);
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
          onClick={() => {
            startEventAppointmentBookingAttempt();
            trackEvent("consultation_click", {
              page_source: "labs_summit_2026",
            });
            setOpen(true);
          }}
        >
          Ver horarios disponibles
        </button>
      ) : (
        <Link
          to="/es/book"
          className="event-button event-button-blue"
          onClick={() =>
            trackEvent("consultation_click", {
              page_source: "labs_summit_2026",
            })
          }
        >
          Agendar una conversación
        </Link>
      )}
      <span>La cita se confirma al completar el agendamiento.</span>
    </div>
  );
}
