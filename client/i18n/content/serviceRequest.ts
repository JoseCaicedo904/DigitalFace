import type { Locale } from "../locale";

/**
 * Copy for the service request builder.
 *
 * One boundary this file must hold: a visitor is telling us which services they
 * want help with, not buying anything. Nothing here may read as commerce — no
 * cart, no checkout, no order, no totals, in either language.
 */

const en = {
  card: {
    add: "Add to request",
    added: "Added",
    addAria: "Add {service} to your request",
    removeAria: "Remove {service} from your request",
  },

  launcher: {
    label: "Your Request",
    aria: "Your request, {count} services selected",
    ariaOne: "Your request, 1 service selected",
  },

  panel: {
    eyebrow: "Your Request",
    title: "Your Service Request",
    description:
      "Select the services you're interested in. We'll review your request and help define the right scope for your business.",
    count: "{count} services selected",
    countOne: "1 service selected",
    continueCta: "Continue to contact",
    browse: "Browse all services",
    clear: "Clear selection",
    close: "Close",
    emptyTitle: "Nothing selected yet.",
    emptyBody:
      "Add the services you want help with and they will be waiting for you here.",
  },

  form: {
    label: "Services you're interested in",
    hint: "We send these with your message so we can prepare the right scope before we talk.",
    empty:
      "No services selected yet. Add the ones you're interested in, or simply send your message.",
    addAnother: "Add another service",
    closePicker: "Close the service list",
    allSelected: "Every service is already in your request.",
    pickerTitle: "Add a service",
  },
} satisfies Record<string, unknown>;

const es: typeof en = {
  card: {
    add: "Agregar a mi solicitud",
    added: "Agregado",
    addAria: "Agregar {service} a mi solicitud",
    removeAria: "Quitar {service} de mi solicitud",
  },

  launcher: {
    label: "Mi solicitud",
    aria: "Mi solicitud, {count} servicios seleccionados",
    ariaOne: "Mi solicitud, 1 servicio seleccionado",
  },

  panel: {
    eyebrow: "Mi solicitud",
    title: "Mi solicitud de servicios",
    description:
      "Elige los servicios que te interesan. Revisamos tu solicitud y te ayudamos a definir el alcance correcto para tu negocio.",
    count: "{count} servicios seleccionados",
    countOne: "1 servicio seleccionado",
    continueCta: "Continuar a contacto",
    browse: "Ver todos los servicios",
    clear: "Vaciar la selección",
    close: "Cerrar",
    emptyTitle: "Todavía no has elegido servicios.",
    emptyBody:
      "Agrega los servicios en los que quieres ayuda y te esperan aquí.",
  },

  form: {
    label: "Servicios de interés",
    hint: "Los enviamos junto con tu mensaje para preparar el alcance correcto antes de hablar.",
    empty:
      "Todavía no has elegido servicios. Agrega los que te interesan o simplemente envía tu mensaje.",
    addAnother: "Agregar otro servicio",
    closePicker: "Cerrar la lista de servicios",
    allSelected: "Ya agregaste todos los servicios.",
    pickerTitle: "Agregar un servicio",
  },
};

export const serviceRequestContent: Record<Locale, typeof en> = { en, es };
export type ServiceRequestContent = typeof en;
