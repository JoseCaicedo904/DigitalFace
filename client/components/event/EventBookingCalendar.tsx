import { lazy, Suspense, useState } from "react";
import { CalendarDays } from "lucide-react";
import { startEventAppointmentBookingAttempt, trackEvent } from "@/lib/analytics";

const EventCalendar = lazy(() => import("@/components/booking/GhlBookingEmbed").then((module) => ({ default: module.GhlBookingEmbed })));
export const EVENT_CALENDAR_ID = "ELOONibg21k8gZnyNjJU";

export function EventBookingCalendar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="event-calendar-container">
      <CalendarDays size={38} strokeWidth={1.4} aria-hidden="true" />
      <h3>Encuentra un espacio para tu negocio.</h3>
      <p>Elige entre los horarios disponibles. Esta conversación es independiente de tu registro y tu premio en la feria.</p>
      {open ? (
        <Suspense fallback={<p role="status">Cargando horarios disponibles…</p>}>
          <EventCalendar title="Agenda de consultas DigitalFace — Tuluá Labs Summit" calendarId={EVENT_CALENDAR_ID} />
        </Suspense>
      ) : (
        <button className="event-button event-button-blue" type="button" onClick={() => {
          startEventAppointmentBookingAttempt();
          trackEvent("consultation_click", { page_source: "labs_summit_2026" });
          setOpen(true);
        }}>Ver horarios disponibles</button>
      )}
      <span>La cita se confirma al completar el agendamiento.</span>
    </div>
  );
}
