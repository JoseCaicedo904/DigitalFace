import { CircleCheckBig } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { trackAppointmentBookedOnce } from "@/lib/analytics";

const description =
  "Your appointment has been successfully booked. We’ve received your reservation and you’ll receive the corresponding confirmation and reminders shortly.";

export default function BookingConfirmed() {
  usePageMetadata(
    "Appointment Confirmed | DigitalFace Marketing",
    description,
    { noindex: true },
  );

  useEffect(() => {
    trackAppointmentBookedOnce();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3),transparent_50%),radial-gradient(circle_at_85%_90%,rgba(14,165,233,0.18),transparent_45%)]"
      />
      <div className="mx-auto flex min-h-[70svh] max-w-6xl items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="w-full max-w-2xl rounded-3xl border border-white/15 bg-white/[0.07] px-6 py-10 text-center shadow-2xl shadow-black/30 backdrop-blur sm:px-10 sm:py-14">
          <CircleCheckBig
            aria-hidden="true"
            className="mx-auto h-14 w-14 text-ocean-200 sm:h-16 sm:w-16"
            strokeWidth={1.75}
          />
          <h1 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Appointment confirmed
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          <Link
            to="/"
            className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-3.5 text-sm font-semibold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
          >
            Back to DigitalFace
          </Link>
        </div>
      </div>
    </section>
  );
}
