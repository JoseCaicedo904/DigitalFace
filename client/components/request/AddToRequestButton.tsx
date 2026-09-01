import { useEffect, useState } from "react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import { serviceRequestContent } from "@/i18n/content/serviceRequest";
import type { ServiceId } from "@/data/serviceCatalog";
import { useServiceRequest } from "./ServiceRequestProvider";

/**
 * The per-card control. One button carries both directions: it adds the service
 * and, once added, takes it back out — so a visitor never has to find another
 * surface to undo a click they just made.
 */

/** Long enough to register as confirmation, short enough not to be an effect. */
const CONFIRMATION_MS = 1100;

export function AddToRequestButton({
  serviceId,
  serviceName,
  className,
}: {
  serviceId: ServiceId;
  /** Already translated — used only for the screen-reader label. */
  serviceName: string;
  className?: string;
}) {
  const { locale } = useLocale();
  const t = serviceRequestContent[locale].card;
  const { has, toggle } = useServiceRequest();

  const added = has(serviceId);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (!confirming) return;
    const timer = window.setTimeout(
      () => setConfirming(false),
      CONFIRMATION_MS,
    );
    return () => window.clearTimeout(timer);
  }, [confirming]);

  return (
    <button
      type="button"
      aria-pressed={added}
      aria-label={(added ? t.removeAria : t.addAria).replace(
        "{service}",
        serviceName,
      )}
      onClick={() => {
        setConfirming(!added);
        toggle(serviceId);
      }}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-[15px] font-semibold",
        "min-h-[48px] transition duration-200 active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2",
        added
          ? "border-brand-500 bg-brand-50 text-brand-700 hover:bg-brand-100"
          : "border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50",
        // The only movement: a ring that fades out on its own after the add.
        confirming && "ring-2 ring-brand-200 ring-offset-2",
        className,
      )}
    >
      {added ? (
        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
      ) : (
        <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
      <span>{added ? t.added : t.add}</span>
    </button>
  );
}
