const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Decode a URL hash into the DOM id it targets. */
export function anchorIdFromHash(hash: string): string | null {
  const encodedId = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!encodedId) return null;

  try {
    return decodeURIComponent(encodedId);
  } catch {
    return encodedId;
  }
}

/** Scroll to an existing page anchor while respecting reduced-motion settings. */
export function scrollToPageAnchor(
  anchorId: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  if (typeof document === "undefined") return false;

  const target = document.getElementById(anchorId);
  if (!target) return false;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches;

  target.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion ? "auto" : behavior,
  });
  return true;
}
