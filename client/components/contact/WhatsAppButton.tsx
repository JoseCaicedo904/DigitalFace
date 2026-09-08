import { MessageCircle, Phone } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locale";

export const WHATSAPP_NUMBER_DISPLAY = "+57 300 506 1366";
export const WHATSAPP_NUMBER = "573005061366";

export const WHATSAPP_MESSAGES: Record<Locale, string> = {
  en: "Hi DigitalFace, I'm interested in learning more about your services.",
  es: "Hola DigitalFace, estoy interesado en conocer más sobre sus servicios.",
};

const WHATSAPP_LABELS: Record<Locale, string> = {
  en: "Chat on WhatsApp",
  es: "Hablar por WhatsApp",
};

export function getWhatsAppMessage(locale: Locale): string {
  return WHATSAPP_MESSAGES[locale];
}

export function getWhatsAppLabel(locale: Locale): string {
  return WHATSAPP_LABELS[locale];
}

export function buildWhatsAppUrl(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    getWhatsAppMessage(locale),
  )}`;
}

function WhatsAppIcon() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-7 w-7 items-center justify-center"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
      <Phone className="absolute h-3.5 w-3.5 translate-y-0.5" strokeWidth={3} />
    </span>
  );
}

export function WhatsAppButton() {
  const { locale } = useLocale();
  const label = getWhatsAppLabel(locale);

  return (
    <a
      href={buildWhatsAppUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      data-contact-channel="whatsapp"
      className="group fixed z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(15,23,42,0.24)] ring-1 ring-white/40 transition duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-[0_22px_50px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "calc(env(safe-area-inset-bottom) + 6.25rem)",
      }}
    >
      <span className="sr-only">{label}</span>
      <WhatsAppIcon />
      <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/15 bg-slate-950/95 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm group-hover:block group-focus-visible:block sm:block sm:opacity-0 sm:transition sm:duration-200 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
        {label}
      </span>
    </a>
  );
}
