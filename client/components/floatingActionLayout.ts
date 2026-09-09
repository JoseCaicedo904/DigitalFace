/**
 * Shared positions for the bottom-right action rail.
 *
 * The third-party website chat owns the lowest viewport slot. WhatsApp sits
 * above it, and the service-request launcher sits one button plus one rem above
 * WhatsApp so the three controls stay physically separated at every width.
 */
export const FLOATING_ACTION_EDGE_INSET =
  "max(1rem, env(safe-area-inset-right))";

export const FLOATING_ACTION_BOTTOM = {
  whatsapp: "calc(env(safe-area-inset-bottom) + 6.25rem)",
  serviceRequest: "calc(env(safe-area-inset-bottom) + 10.75rem)",
} as const;
