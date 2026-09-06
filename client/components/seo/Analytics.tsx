import { useEffect } from "react";
import { stripLocaleFromPathname } from "@/i18n/geo";
import { trackEvent } from "@/lib/analytics";

/** One delegated listener covers existing real links, including keyboard clicks. */
export function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (
        url.origin === window.location.origin &&
        stripLocaleFromPathname(url.pathname) === "/book"
      ) {
        // Read source before React Router updates the address bar.
        trackEvent("consultation_click");
      } else if (url.protocol === "mailto:") {
        trackEvent("contact_click", { contact_method: "email" });
      } else if (url.protocol === "tel:") {
        trackEvent("contact_click", { contact_method: "phone" });
      } else if (["wa.me", "api.whatsapp.com"].includes(url.hostname)) {
        trackEvent("contact_click", { contact_method: "whatsapp" });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
