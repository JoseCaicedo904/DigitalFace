import { z } from "zod";
import { normalizeInternationalPhone } from "./lead.js";

export const EVENT_SOURCE = "labs_summit_2026";
export const EVENT_CAMPAIGN = "la_jugada_del_crecimiento";
export const EVENT_CONSENT_VERSION = "labs-summit-2026-10-28";
// Shared event gate; it does not authenticate staff or award a prize.
export const EVENT_VALIDATION_CODE = "DFLAB2026";
export const EVENT_NEEDS = [
  { id: "advertising", label: "Publicidad digital" },
  { id: "website", label: "Sitio web o landing page" },
  { id: "crm", label: "CRM y automatización" },
  { id: "ai", label: "Asistentes con inteligencia artificial" },
  { id: "content", label: "Producción audiovisual y contenido" },
  { id: "not_sure", label: "Aún no estoy seguro" },
] as const;
export const EVENT_ROLES = [
  "Propietario/socio",
  "Decisor",
  "Marketing/ventas",
  "Colaborador",
  "Otro",
] as const;

export const eventRegistrationSchema = z
  .object({
    name: z.string().trim().min(2, "Escribe tu nombre completo.").max(120),
    business: z
      .string()
      .trim()
      .min(2, "Escribe el nombre de tu negocio.")
      .max(160),
    role: z.enum(EVENT_ROLES, {
      errorMap: () => ({ message: "Selecciona tu rol dentro del negocio." }),
    }),
    businessActivity: z
      .string()
      .trim()
      .min(2, "Describe brevemente la actividad de tu negocio.")
      .max(500, "Usa máximo 500 caracteres para describir tu negocio."),
    phone: z
      .string()
      .trim()
      .max(40)
      .transform((value, context) => {
        const normalized = normalizeInternationalPhone(value);
        if (normalized) return normalized;
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Incluye un WhatsApp válido con indicativo, por ejemplo +57.",
        });
        return z.NEVER;
      }),
    instagram: z
      .string()
      .trim()
      .max(31)
      .regex(
        /^@?[a-zA-Z0-9._]{1,30}$|^$/,
        "Escribe tu usuario, sin el enlace de Instagram.",
      )
      .default(""),
    email: z
      .string()
      .trim()
      .min(1, "Escribe el correo donde recibirás tu premio.")
      .max(200)
      .email("Revisa tu correo electrónico."),
    need: z.preprocess(
      // Older cached forms may send one string. The receiver always gets an array.
      (value) => (typeof value === "string" ? [value] : value),
      z
        .array(
          z.enum(
            ["advertising", "website", "crm", "ai", "content", "not_sure"],
            {
              errorMap: () => ({
                message: "Selecciona opciones válidas para tu negocio.",
              }),
            },
          ),
          {
            errorMap: () => ({
              message: "Selecciona al menos una necesidad de tu negocio.",
            }),
          },
        )
        .min(1, "Selecciona al menos una necesidad de tu negocio.")
        .max(EVENT_NEEDS.length)
        .refine((values) => new Set(values).size === values.length, {
          message: "Selecciona cada opción solo una vez.",
        }),
    ),
    diceResult: z.preprocess(
      (value) =>
        typeof value === "string" && /^[1-6]$/.test(value)
          ? Number(value)
          : value,
      z
        .number({
          errorMap: () => ({ message: "Selecciona un resultado del 1 al 6." }),
        })
        .int("Selecciona un resultado del 1 al 6.")
        .min(1, "Selecciona un resultado del 1 al 6.")
        .max(6, "Selecciona un resultado del 1 al 6."),
    ),
    validationCode: z.literal(EVENT_VALIDATION_CODE, {
      errorMap: () => ({ message: "El código de validación no es correcto." }),
    }),
    participationConsent: z.literal(true, {
      errorMap: () => ({
        message: "Autoriza el tratamiento de datos para participar.",
      }),
    }),
    // Preserve the receiver's contract without granting an unoffered opt-in.
    marketingConsent: z.literal(false).default(false),
    website: z.string().max(0).default(""), // Honeypot; never a business URL.
  })
  .strict(); // No client-supplied prize, timestamp, consent version or campaign.

export type EventRegistrationInput = z.input<typeof eventRegistrationSchema>;
export type EventRegistrationResponse =
  | { ok: true; duplicate: boolean }
  | {
      ok: false;
      error:
        | "invalid"
        | "not_configured"
        | "upstream_failed"
        | "rate_limited"
        | "forbidden";
      fieldErrors?: Record<string, string>;
    };
