import { z } from "zod";
import { normalizeInternationalPhone } from "./lead.js";

export const EVENT_SOURCE = "labs_summit_2026";
export const EVENT_CAMPAIGN = "la_jugada_del_crecimiento";
export const EVENT_CONSENT_VERSION = "labs-summit-2026-10-28";
export const EVENT_NEEDS = [
  { id: "advertising", label: "Publicidad digital" },
  { id: "website", label: "Sitio web o landing page" },
  { id: "crm", label: "CRM y automatización" },
  { id: "ai", label: "Asistentes con inteligencia artificial" },
  { id: "content", label: "Producción audiovisual y contenido" },
  { id: "not_sure", label: "Aún no estoy seguro" },
] as const;

export const eventRegistrationSchema = z
  .object({
    name: z.string().trim().min(2, "Escribe tu nombre completo.").max(120),
    business: z
      .string()
      .trim()
      .min(2, "Escribe el nombre de tu negocio.")
      .max(160),
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
      .union([
        z.literal(""),
        z.string().trim().max(200).email("Revisa tu correo electrónico."),
      ])
      .default(""),
    need: z.enum(
      ["advertising", "website", "crm", "ai", "content", "not_sure"],
      { errorMap: () => ({ message: "Selecciona qué necesita tu negocio." }) },
    ),
    participationConsent: z.literal(true, {
      errorMap: () => ({
        message: "Autoriza el tratamiento de datos para participar.",
      }),
    }),
    marketingConsent: z.boolean(),
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
