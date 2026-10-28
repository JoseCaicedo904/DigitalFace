import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  EVENT_NEEDS,
  eventRegistrationSchema,
  type EventRegistrationResponse,
} from "@shared/eventRegistration";
import { trackEvent } from "@/lib/analytics";

export function EventRegistrationForm() {
  const [busy, setBusy] = useState(false);
  const pending = useRef(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<"new" | "existing" | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = eventRegistrationSchema.safeParse({
      name: data.get("name"),
      business: data.get("business"),
      phone: data.get("phone"),
      instagram: data.get("instagram"),
      email: data.get("email"),
      need: data.get("need"),
      participationConsent: data.get("participationConsent") === "on",
      marketingConsent: data.get("marketingConsent") === "on",
      website: data.get("website") || "",
    });
    setMessage("");
    if (!parsed.success) {
      const next = Object.fromEntries(
        parsed.error.issues.map((issue) => [
          String(issue.path[0]),
          issue.message,
        ]),
      );
      setErrors(next);
      const first = form.elements.namedItem(Object.keys(next)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({});
    pending.current = true;
    setBusy(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);
    try {
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: controller.signal,
      });
      const body: EventRegistrationResponse = await response.json();
      if (
        !response.ok ||
        body.ok !== true ||
        typeof body.duplicate !== "boolean"
      ) {
        const reason = body.ok === false ? body.error : "upstream_failed";
        setMessage(
          reason === "rate_limited"
            ? "Espera un minuto antes de volver a intentar. Si ya te registraste, consulta al equipo en el stand."
            : reason === "not_configured"
              ? "El registro en línea aún no está disponible. Acércate al equipo de DigitalFace en el stand para registrar tu negocio."
              : "No pudimos confirmar el registro. Conservamos tus datos en este formulario para que puedas reintentar; también puedes consultar al equipo en el stand.",
        );
        return;
      }
      setSuccess(body.duplicate ? "existing" : "new");
      form.reset();
      if (!body.duplicate)
        trackEvent("event_registration_success", {
          page_source: "labs_summit_2026",
        });
      window.requestAnimationFrame(() => resultRef.current?.focus());
    } catch {
      setMessage(
        "No pudimos confirmar el registro. Revisa tu conexión y vuelve a intentar, o consulta al equipo en el stand.",
      );
    } finally {
      window.clearTimeout(timeout);
      pending.current = false;
      setBusy(false);
    }
  }

  const control = (name: string) => ({
    id: `event-${name}`,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `event-error-${name}` : undefined,
  });
  const error = (name: string) =>
    errors[name] ? (
      <span className="event-field-error" id={`event-error-${name}`}>
        {errors[name]}
      </span>
    ) : null;

  return success ? (
    <div
      className="event-form-success"
      ref={resultRef}
      tabIndex={-1}
      role="status"
    >
      <CheckCircle2 size={48} aria-hidden="true" />
      <h3>
        {success === "existing"
          ? "Tu registro ya está confirmado."
          : "¡Tu negocio está registrado!"}
      </h3>
      <p>
        Acércate al equipo de DigitalFace. Validaremos tu participación antes de
        lanzar el dado físico.
      </p>
      <p className="event-muted">
        Un intento por persona o empresa. El resultado y el premio se validan en
        el stand.
      </p>
      <a className="event-button event-button-blue" href="#premios">
        Vuelve a explorar los premios <ArrowRight size={18} />
      </a>
    </div>
  ) : (
    <form
      className="event-form"
      noValidate
      onSubmit={submit}
      aria-busy={busy}
      data-form-slot="labs-summit-registration"
    >
      <div className="event-form-top">
        <span>DATOS DE PARTICIPACIÓN</span>
        <ShieldCheck size={20} aria-hidden="true" />
      </div>
      <div className="event-form-grid">
        <label>
          Nombre completo <span aria-hidden="true">*</span>
          <input
            {...control("name")}
            autoComplete="name"
            maxLength={120}
            required
            placeholder="Tu nombre y apellido"
          />
          {error("name")}
        </label>
        <label>
          Negocio o marca <span aria-hidden="true">*</span>
          <input
            {...control("business")}
            autoComplete="organization"
            maxLength={160}
            required
            placeholder="¿Cómo se llama tu negocio?"
          />
          {error("business")}
        </label>
        <label>
          WhatsApp con indicativo <span aria-hidden="true">*</span>
          <input
            {...control("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={40}
            required
            placeholder="+57 300 123 4567"
          />
          {error("phone")}
        </label>
        <label>
          Instagram <span className="event-optional">(si tienes)</span>
          <input
            {...control("instagram")}
            autoCapitalize="none"
            autoCorrect="off"
            maxLength={31}
            placeholder="@tunegocio"
          />
          {error("instagram")}
        </label>
        <label className="event-full">
          ¿Qué necesita tu negocio? <span aria-hidden="true">*</span>
          <select {...control("need")} required defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            {EVENT_NEEDS.map((need) => (
              <option key={need.id} value={need.id}>
                {need.label}
              </option>
            ))}
          </select>
          {error("need")}
        </label>
        <label className="event-full">
          Correo electrónico <span className="event-optional">(opcional)</span>
          <input
            {...control("email")}
            type="email"
            autoComplete="email"
            maxLength={200}
            placeholder="tu@negocio.com"
          />
          {error("email")}
        </label>
      </div>
      <div className="event-trap" aria-hidden="true">
        <label>
          Deja este campo vacío
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="event-check">
        <input {...control("participationConsent")} type="checkbox" required />
        <span>
          Autorizo a DigitalFace Marketing a tratar estos datos para gestionar
          mi participación, validar el registro y coordinar mi premio por
          WhatsApp, según la{" "}
          <Link to="/es/privacy" target="_blank" rel="noopener noreferrer">
            Política de privacidad
          </Link>
          . <span aria-hidden="true">*</span>
          {error("participationConsent")}
        </span>
      </label>
      <label className="event-check">
        <input name="marketingConsent" type="checkbox" />
        <span>
          También quiero recibir novedades y propuestas comerciales de
          DigitalFace por WhatsApp y, si lo proporciono, correo electrónico.{" "}
          <span className="event-optional">(Opcional)</span>
        </span>
      </label>
      <p className="event-privacy-note">
        Puedes conocer, actualizar, rectificar o solicitar la supresión de tus
        datos y revocar tu autorización:{" "}
        <a href="mailto:sales@digitalface.app">sales@digitalface.app</a>.
      </p>
      {message ? (
        <p className="event-form-error" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        className="event-button event-button-blue"
        disabled={busy}
      >
        {busy ? (
          <>
            <LoaderCircle className="event-spinner" size={19} /> Confirmando
            registro…
          </>
        ) : (
          <>
            Registrar mi negocio <ArrowRight size={19} />
          </>
        )}
      </button>
      <p className="event-form-footnote">
        Los campos con * son obligatorios. Registrar tu negocio no asigna un
        premio ni reserva una cita.
      </p>
    </form>
  );
}
