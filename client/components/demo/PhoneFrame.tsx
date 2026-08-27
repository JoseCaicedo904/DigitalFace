import type { ReactNode } from "react";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  /** Time shown in the status bar. */
  clock: string;
  children: ReactNode;
  className?: string;
}

/**
 * The handset the homepage demonstrations are staged inside.
 *
 * Decorative by definition: the chassis is hidden from assistive technology and
 * every demo supplies its own written alternative. Sharing it keeps the
 * advertising story and the conversation story reading as one product rather
 * than two unrelated animations.
 */
export function PhoneFrame({ clock, children, className }: PhoneFrameProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative rounded-[2.6rem] border border-ink-200/70 bg-slate-900 p-2 shadow-[0_45px_90px_-45px_rgba(15,23,42,0.65)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
        <span className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900" />

        <div className="flex items-center justify-between px-5 pb-1.5 pt-3 text-[10px] font-semibold text-slate-700">
          <span>{clock}</span>
          <span className="flex items-center gap-1 text-slate-500">
            <Signal className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
            <BatteryFull className="h-3.5 w-3.5" />
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
