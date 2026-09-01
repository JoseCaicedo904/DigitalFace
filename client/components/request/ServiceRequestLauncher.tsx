import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ClipboardList, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import { stripLocaleFromPathname } from "@/i18n/locale";
import { serviceRequestContent } from "@/i18n/content/serviceRequest";
import { getServiceGroupName } from "@/data/serviceCatalog";
import { useServiceRequest } from "./ServiceRequestProvider";
import { REQUEST_SERVICES_ANCHOR } from "./anchor";

/**
 * The global "Your Request" control and the review panel behind it.
 *
 * It appears only once something is selected, and never on the contact page,
 * where the form itself already lists the selection and a floating panel would
 * only duplicate it. The panel is a bottom sheet on a phone and a right-hand
 * rail from `sm` up.
 */

export function ServiceRequestLauncher() {
  const { locale, path } = useLocale();
  const copy = serviceRequestContent[locale];
  const t = copy.panel;
  const { pathname } = useLocation();
  const { services, count, remove, clear, isPanelOpen, openPanel, closePanel } =
    useServiceRequest();

  const onContactPage = stripLocaleFromPathname(pathname) === "/contact";

  // A panel left open across a navigation would land on top of the new page.
  useEffect(() => {
    closePanel();
  }, [pathname, closePanel]);

  const showLauncher = count > 0 && !onContactPage;
  if (!showLauncher && !isPanelOpen) return null;

  const countLabel =
    count === 1 ? t.countOne : t.count.replace("{count}", String(count));

  return (
    <>
      {showLauncher ? (
        <button
          type="button"
          onClick={openPanel}
          aria-haspopup="dialog"
          aria-label={
            count === 1
              ? copy.launcher.ariaOne
              : copy.launcher.aria.replace("{count}", String(count))
          }
          className={cn(
            "fixed right-4 z-40 inline-flex items-center gap-2.5 rounded-2xl",
            "bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6 sm:right-6",
            "bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-4 py-3 sm:px-5 sm:py-3.5",
            "text-[15px] font-semibold text-white shadow-brand-soft",
            "transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2",
          )}
        >
          <ClipboardList className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{copy.launcher.label}</span>
          {/* Remounted on every change so the count arrives with one short
              scale rather than swapping silently. */}
          <span
            key={count}
            aria-hidden="true"
            className="inline-flex h-6 min-w-[1.5rem] animate-in zoom-in-75 items-center justify-center rounded-full bg-white px-1.5 text-[13px] font-bold text-brand-700 duration-200"
          >
            {count}
          </span>
        </button>
      ) : null}

      <Dialog.Root
        open={isPanelOpen}
        onOpenChange={(open) => (open ? openPanel() : closePanel())}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            className={cn(
              "fixed z-[70] flex flex-col bg-white outline-none",
              "shadow-[0_-20px_60px_-30px_rgba(15,23,42,0.55)] sm:shadow-[0_25px_80px_-30px_rgba(15,23,42,0.5)]",
              // Phone: a sheet that rises from the bottom edge.
              "inset-x-0 bottom-0 max-h-[88vh] rounded-t-3xl border-t border-ink-100",
              // From sm up: a full-height rail on the right.
              "sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:max-h-none sm:w-full sm:max-w-md sm:rounded-none sm:rounded-l-3xl sm:border-l sm:border-t-0",
              "duration-300 data-[state=closed]:animate-out data-[state=open]:animate-in",
              "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
              "sm:data-[state=closed]:slide-out-to-bottom-0 sm:data-[state=open]:slide-in-from-bottom-0",
              "sm:data-[state=closed]:slide-out-to-right sm:data-[state=open]:slide-in-from-right",
            )}
          >
            {/* Grab handle: the one affordance that reads as a sheet on a phone. */}
            <span
              aria-hidden="true"
              className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-ink-200 sm:hidden"
            />

            <div className="border-b border-ink-100 px-5 pb-5 pt-5 sm:px-7 sm:pt-7">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
                    <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.eyebrow}
                  </span>
                  <Dialog.Title className="mt-3 text-xl font-semibold leading-tight text-slate-900 sm:text-2xl">
                    {t.title}
                  </Dialog.Title>
                </div>
                <Dialog.Close
                  aria-label={t.close}
                  className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink-200 text-ink-600 transition hover:border-brand-200 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </Dialog.Close>
              </div>
              <Dialog.Description className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-[15px]">
                {t.description}
              </Dialog.Description>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              {count === 0 ? (
                <div className="rounded-2xl border border-dashed border-ink-200 bg-ink-50/60 px-5 py-8 text-center">
                  <p className="text-[15px] font-semibold text-slate-900">
                    {t.emptyTitle}
                  </p>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-500">
                    {t.emptyBody}
                  </p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white px-4 py-3.5 shadow-brand-card"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] font-semibold leading-snug text-slate-900">
                          {service.name}
                        </p>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400">
                          {getServiceGroupName(service.id, locale)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(service.id)}
                        aria-label={copy.card.removeAria.replace(
                          "{service}",
                          service.name,
                        )}
                        className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink-400 transition hover:bg-ink-50 hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-ink-100 bg-white px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 sm:px-7">
              {count > 0 ? (
                <>
                  <p className="text-sm font-semibold text-ink-500">
                    {countLabel}
                  </p>
                  <Link
                    to={`${path("/contact")}#${REQUEST_SERVICES_ANCHOR}`}
                    onClick={closePanel}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-4 text-base font-bold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    {t.continueCta}
                    <ArrowRight
                      className="h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                </>
              ) : null}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <Link
                  to={path("/pay-per-service")}
                  onClick={closePanel}
                  className="text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                >
                  {t.browse}
                </Link>
                {count > 0 ? (
                  <button
                    type="button"
                    onClick={clear}
                    className="text-sm font-medium text-ink-500 transition hover:text-ink-700"
                  >
                    {t.clear}
                  </button>
                ) : null}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
