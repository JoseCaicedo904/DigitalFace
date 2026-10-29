import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { trackEventAppointmentBookedOnce } from "@/lib/analytics";

export default function LabsSummitBookingConfirmed() {
  usePageMetadata(
    "Cita confirmada — Tuluá Labs Summit | DigitalFace",
    "Tu cita con DigitalFace ha sido registrada. Revisa tu correo para consultar la confirmación y los detalles.",
    { noindex: true },
  );
  useEffect(() => {
    trackEventAppointmentBookedOnce();
  }, []);
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <CircleCheckBig
          className="mx-auto h-16 w-16 text-cyan-300"
          aria-hidden="true"
        />
        <h1 className="mt-6 text-4xl font-semibold">
          Tu cita está confirmada.
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Tu cita con DigitalFace ha sido registrada. Revisa tu correo para
          consultar la confirmación y los detalles.
        </p>
        <p className="mt-4 text-base text-white/75">
          El agendamiento es independiente de la validación y entrega de tu
          premio en Tuluá Labs Summit.
        </p>
        <Link
          to="/es/labs-summit-2026"
          className="mt-8 inline-flex rounded-xl bg-cyan-600 px-6 py-4 text-base font-semibold"
        >
          Volver a Tuluá Labs Summit
        </Link>
      </div>
    </section>
  );
}
