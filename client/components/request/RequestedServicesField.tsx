import { useId, useState } from "react";
import { ClipboardList, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import { serviceRequestContent } from "@/i18n/content/serviceRequest";
import { resolveCatalog } from "@/data/serviceCatalog";
import { useServiceRequest } from "./ServiceRequestProvider";
import { REQUEST_SERVICES_ANCHOR } from "./anchor";

/**
 * The selected services, shown at the top of the lead form.
 *
 * It is a summary the visitor can still edit: every service can be removed, and
 * any service they missed can be added here, so reaching the form is never a
 * one-way door back to the catalog. With nothing selected it stays a single
 * quiet line and one button — the form has to work exactly as before for a
 * visitor who arrived without touching the catalog.
 */

export function RequestedServicesField({ dark = false }: { dark?: boolean }) {
  const { locale } = useLocale();
  const copy = serviceRequestContent[locale];
  const t = copy.form;
  const { services, count, add, remove, has } = useServiceRequest();

  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerId = useId();

  const catalog = resolveCatalog(locale)
    .map((group) => ({
      ...group,
      services: group.services.filter((service) => !has(service.id)),
    }))
    .filter((group) => group.services.length > 0);

  const everythingSelected = catalog.length === 0;

  return (
    <div
      id={REQUEST_SERVICES_ANCHOR}
      className={cn(
        "scroll-mt-28 rounded-2xl border p-5 sm:p-6",
        dark
          ? "border-white/20 bg-white/[0.06]"
          : "border-ink-200 bg-ink-50/60",
      )}
    >
      <div className="flex items-center gap-2.5">
        <ClipboardList
          className={cn(
            "h-5 w-5 shrink-0",
            dark ? "text-ocean-200" : "text-brand-600",
          )}
          aria-hidden="true"
        />
        <p
          className={cn(
            "text-sm font-bold uppercase tracking-[0.08em]",
            dark ? "text-white/90" : "text-ink-700",
          )}
        >
          {t.label}
        </p>
      </div>

      {count > 0 ? (
        <>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {services.map((service) => (
              <li key={service.id} className="max-w-full">
                <span
                  className={cn(
                    "inline-flex max-w-full items-center gap-1.5 rounded-full border py-1.5 pl-4 pr-1.5",
                    "text-sm font-semibold leading-snug",
                    dark
                      ? "border-white/25 bg-white/10 text-white"
                      : "border-brand-200 bg-white text-brand-800 shadow-sm",
                  )}
                >
                  <span className="min-w-0 break-words">{service.name}</span>
                  <button
                    type="button"
                    onClick={() => remove(service.id)}
                    aria-label={copy.card.removeAria.replace(
                      "{service}",
                      service.name,
                    )}
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40",
                      dark
                        ? "text-white/70 hover:bg-white/15 hover:text-white"
                        : "text-brand-500 hover:bg-brand-50 hover:text-brand-800",
                    )}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <p
            className={cn(
              "mt-4 text-sm leading-relaxed",
              dark ? "text-white/70" : "text-ink-500",
            )}
          >
            {t.hint}
          </p>
        </>
      ) : (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed",
            dark ? "text-white/70" : "text-ink-500",
          )}
        >
          {t.empty}
        </p>
      )}

      {everythingSelected ? (
        <p
          className={cn(
            "mt-4 text-sm font-medium",
            dark ? "text-white/60" : "text-ink-500",
          )}
        >
          {t.allSelected}
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setPickerOpen((open) => !open)}
          aria-expanded={pickerOpen}
          aria-controls={pickerId}
          className={cn(
            "mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40",
            dark
              ? "border-white/25 bg-white/10 text-white hover:bg-white/[0.16]"
              : "border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50",
          )}
        >
          {pickerOpen ? (
            <X className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          {pickerOpen ? t.closePicker : t.addAnother}
        </button>
      )}

      {pickerOpen && !everythingSelected ? (
        <div
          id={pickerId}
          className={cn(
            "mt-4 max-h-80 space-y-5 overflow-y-auto rounded-2xl border p-4",
            dark
              ? "border-white/15 bg-slate-950/30"
              : "border-ink-200 bg-white",
          )}
        >
          {catalog.map((group) => (
            <div key={group.key}>
              <p
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.16em]",
                  dark ? "text-white/55" : "text-ink-400",
                )}
              >
                {group.title}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {group.services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => add(service.id)}
                    aria-label={copy.card.addAria.replace(
                      "{service}",
                      service.name,
                    )}
                    className={cn(
                      "inline-flex max-w-full items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40",
                      dark
                        ? "border-white/20 bg-white/[0.06] text-white/85 hover:bg-white/15 hover:text-white"
                        : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800",
                    )}
                  >
                    <Plus className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 break-words text-left">
                      {service.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
