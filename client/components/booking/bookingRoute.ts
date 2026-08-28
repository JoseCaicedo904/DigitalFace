/**
 * The single DigitalFace scheduling destination. Every consultation CTA on the
 * site leads here, and the GoHighLevel widget loads on this route and nowhere
 * else.
 *
 * This module deliberately holds no JSX and imports nothing from the embed:
 * the header and all four sales pages need the href, and if they reached for it
 * through the embed module the widget would be pulled back into the main
 * bundle, which is the whole problem this route exists to solve.
 */
export const BOOKING_ROUTE = "/book";

/** Where a booking CTA was pressed. Carried through for context and analytics. */
export type BookingSource =
  | "homepage"
  | "contact"
  | "dental-practices"
  | "aesthetic-medicine"
  | "med-spas";

/**
 * Builds the href for a booking CTA. `basePath` is the locale-aware route —
 * `path(BOOKING_ROUTE)` — so the visitor stays in the language they were
 * reading.
 */
export function bookingHref(basePath: string, from?: BookingSource): string {
  return from ? `${basePath}?from=${from}` : basePath;
}
