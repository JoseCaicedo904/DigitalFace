import type { Locale } from "../locale";

const en = {
  metadata: {
    title: "Page not found | DigitalFace Marketing",
    description:
      "This page does not exist. Head back to the DigitalFace Marketing home page.",
  },
  code: "404",
  title: "We could not find that page",
  description:
    "The link may be outdated, or the page may have moved. Everything else is one click away.",
  homeCta: "Back to home",
  contactCta: "Contact us",
} satisfies Record<string, unknown>;

const es: typeof en = {
  metadata: {
    title: "Página no encontrada | DigitalFace Marketing",
    description:
      "Esta página no existe. Vuelve al inicio de DigitalFace Marketing.",
  },
  code: "404",
  title: "No encontramos esa página",
  description:
    "Puede que el enlace esté desactualizado o que la página haya cambiado de lugar. El resto del sitio está a un clic.",
  homeCta: "Volver al inicio",
  contactCta: "Contáctanos",
};

export const notFoundContent: Record<Locale, typeof en> = { en, es };
export type NotFoundContent = typeof en;
