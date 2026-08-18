import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  LOCALES,
  localeMeta,
  storeLocale,
  swapLocaleInPath,
} from "@/i18n/locale";

const copy = {
  en: { group: "Language", current: "Current language" },
  es: { group: "Idioma", current: "Idioma actual" },
} as const;

type LanguageSwitcherProps = {
  /** "light" sits on white surfaces, "dark" sits on slate/inverted surfaces. */
  tone?: "light" | "dark";
  className?: string;
  showIcon?: boolean;
};

export function LanguageSwitcher({
  tone = "light",
  className,
  showIcon = true,
}: LanguageSwitcherProps) {
  const { locale } = useLocale();
  const { pathname, search, hash } = useLocation();
  const labels = copy[locale];

  return (
    <div
      role="group"
      aria-label={labels.group}
      className={cn(
        "inline-flex items-center gap-1 rounded-xl border p-1",
        tone === "dark"
          ? "border-white/20 bg-white/5"
          : "border-ink-200 bg-white/80",
        className,
      )}
    >
      {showIcon ? (
        <Globe
          aria-hidden="true"
          className={cn(
            "ml-1.5 h-3.5 w-3.5",
            tone === "dark" ? "text-white/60" : "text-ink-400",
          )}
        />
      ) : null}
      {LOCALES.map((option) => {
        const isActive = option === locale;
        return (
          <Link
            key={option}
            to={swapLocaleInPath(option, pathname, search, hash)}
            hrefLang={localeMeta[option].htmlLang}
            lang={localeMeta[option].htmlLang}
            aria-label={localeMeta[option].switchLabel}
            aria-current={isActive ? "true" : undefined}
            title={localeMeta[option].name}
            onClick={() => storeLocale(option)}
            className={cn(
              "rounded-lg px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] transition",
              isActive
                ? tone === "dark"
                  ? "bg-white/15 text-white"
                  : "bg-brand-600 text-white shadow-brand-soft"
                : tone === "dark"
                  ? "text-white/60 hover:text-white"
                  : "text-ink-500 hover:text-brand-600",
            )}
          >
            {localeMeta[option].code}
            <span className="sr-only">
              {isActive ? ` — ${labels.current}` : ""}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
