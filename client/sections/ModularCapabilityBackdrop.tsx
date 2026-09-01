import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Blocks,
  Bot,
  Megaphone,
  MonitorSmartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Backdrop for the Pay per Service hero.
 *
 * The page's claim is that a capability can be bought on its own, so the
 * atmosphere is made of separate pieces rather than connections: individual
 * tiles floating at three depths, each on its own clock, one lighting at a time
 * as if being chosen. Nothing joins them — no links, no nodes — which is what
 * keeps this page distinct from the About hero's connected network.
 *
 * Three tiles also drift toward each other and apart again over 26s: alone by
 * default, briefly a system, still separable. Everything is CSS and DOM, no
 * canvas and no new dependency.
 */

type CapabilityModule = {
  /** Background panels carry no icon — they are depth, not capability. */
  icon: LucideIcon | null;
  left: string;
  top: string;
  size: string;
  tilt: number;
  /** Seconds. Staggered so no two tiles breathe together. */
  float: number;
  floatDelay: number;
  /** Negative seconds into the shared 42s cycle; one tile lit at a time. */
  activateDelay?: number;
  /** Pixels toward the group's centre during the assembly window. */
  assemble?: { x: number; y: number };
  /** The handful that survive down to a phone. */
  mobile?: boolean;
};

/** Larger, crisper, and the only tiles that take part in the assembly. */
const FOREGROUND: readonly CapabilityModule[] = [
  {
    icon: Megaphone,
    left: "57%",
    top: "9%",
    size: "h-[7rem] w-[9rem]",
    tilt: -3,
    float: 19,
    floatDelay: -3,
    activateDelay: 0,
    assemble: { x: 34, y: 62 },
    mobile: true,
  },
  {
    icon: Bot,
    left: "77%",
    top: "40%",
    size: "h-[7rem] w-[8.5rem]",
    tilt: 2.5,
    float: 22,
    floatDelay: -9,
    activateDelay: -6,
    assemble: { x: -58, y: -20 },
  },
  {
    icon: Workflow,
    left: "60%",
    top: "67%",
    size: "h-[7rem] w-[9rem]",
    tilt: -1.5,
    float: 17,
    floatDelay: -6,
    activateDelay: -12,
    assemble: { x: 26, y: -54 },
    mobile: true,
  },
];

/** Smaller and dimmer — the same idea one plane back. */
const MIDGROUND: readonly CapabilityModule[] = [
  {
    icon: MonitorSmartphone,
    left: "70%",
    top: "2%",
    size: "h-[5.75rem] w-[7rem]",
    tilt: 3,
    float: 24,
    floatDelay: -12,
    activateDelay: -18,
  },
  {
    icon: BarChart3,
    left: "88%",
    top: "15%",
    size: "h-[5.5rem] w-[6.5rem]",
    tilt: -2,
    float: 20,
    floatDelay: -2,
    activateDelay: -24,
  },
  {
    icon: Users,
    left: "50%",
    top: "37%",
    size: "h-[5.5rem] w-[6.75rem]",
    tilt: 2,
    float: 23,
    floatDelay: -15,
    activateDelay: -30,
  },
  {
    icon: Blocks,
    left: "86%",
    top: "65%",
    size: "h-[5.75rem] w-[7rem]",
    tilt: -3,
    float: 21,
    floatDelay: -7,
    activateDelay: -36,
    mobile: true,
  },
];

/** Empty frames. Structure only, at the edge of visibility. */
const PANELS: readonly CapabilityModule[] = [
  {
    icon: null,
    left: "44%",
    top: "19%",
    size: "h-[4.5rem] w-[5.5rem]",
    tilt: 4,
    float: 28,
    floatDelay: -5,
  },
  {
    icon: null,
    left: "93%",
    top: "41%",
    size: "h-[5rem] w-[6rem]",
    tilt: -4,
    float: 32,
    floatDelay: -18,
  },
  {
    icon: null,
    left: "66%",
    top: "87%",
    size: "h-[4rem] w-[5rem]",
    tilt: 3,
    float: 26,
    floatDelay: -11,
  },
  {
    icon: null,
    left: "38%",
    top: "59%",
    size: "h-[4rem] w-[4.5rem]",
    tilt: -2,
    float: 30,
    floatDelay: -22,
  },
];

function CapabilityTile({
  module,
  tone,
}: {
  module: CapabilityModule;
  tone: "front" | "mid" | "back";
}) {
  const Icon = module.icon;

  return (
    <div
      className={cn("absolute", !module.mobile && "hidden md:block")}
      style={
        {
          left: module.left,
          top: module.top,
          "--assemble-x": `${module.assemble?.x ?? 0}px`,
          "--assemble-y": `${module.assemble?.y ?? 0}px`,
        } as CSSProperties
      }
    >
      {/* Assembly outside, breathing inside: two transforms that must not
          land on the same element. */}
      <div
        className={cn(
          module.assemble &&
            "animate-module-assemble motion-reduce:animate-none",
        )}
      >
        <div
          className="animate-module-float motion-reduce:animate-none"
          style={{
            animationDuration: `${module.float}s`,
            animationDelay: `${module.floatDelay}s`,
          }}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border",
              module.size,
              tone === "front" &&
                "border-white/[0.1] bg-white/[0.04] backdrop-blur-[2px]",
              tone === "mid" &&
                "border-white/[0.07] bg-white/[0.025] backdrop-blur-[2px]",
              /* Already soft from its own blur — a backdrop filter here would
                 be paid for and never seen. */
              tone === "back" &&
                "border-white/[0.05] bg-white/[0.015] blur-[1px]",
            )}
            style={{ transform: `rotate(${module.tilt}deg)` }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/20 to-transparent"
            />

            {module.activateDelay === undefined ? null : (
              <>
                {/* Behind the icon, so the icon reads as the thing lighting. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1 top-1 h-12 w-12 animate-module-activate rounded-full opacity-0 blur-md motion-reduce:animate-none"
                  style={{
                    animationDelay: `${module.activateDelay}s`,
                    background:
                      "radial-gradient(circle, rgba(167,139,250,0.55), transparent 70%)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 animate-module-activate rounded-2xl opacity-0 motion-reduce:animate-none"
                  style={{
                    animationDelay: `${module.activateDelay}s`,
                    boxShadow:
                      "inset 0 0 0 1px rgba(167,139,250,0.5), 0 0 30px -8px rgba(139,92,246,0.7)",
                    background:
                      "radial-gradient(120% 90% at 28% 0%, rgba(139,92,246,0.16), transparent 66%)",
                  }}
                />
              </>
            )}

            {Icon ? (
              <>
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className={cn(
                    "absolute left-4 top-4 h-5 w-5",
                    tone === "front" ? "text-white/45" : "text-white/30",
                  )}
                />
                {/* Two bars, not a label: enough to read as a capability, far
                    short of a readable interface. */}
                <span className="absolute bottom-[1.35rem] left-4 h-1 w-10 rounded-full bg-white/[0.09]" />
                <span className="absolute bottom-3 left-4 h-1 w-6 rounded-full bg-white/[0.06]" />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Depth planes read their shift from two custom properties on the section. */
function plane(depthX: number, depthY: number): CSSProperties {
  return {
    transform: `translate3d(calc(var(--pps-x, 0) * ${depthX}px), calc(var(--pps-y, 0) * ${depthY}px), 0)`,
    transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
  };
}

export function ModularCapabilityBackdrop() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /* The backdrop is pointer-events-none and sits behind the copy, so the
       listener goes on the hero section that owns it. */
    const section = rootRef.current?.parentElement;
    if (!section || prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;

    function handleMove(event: PointerEvent) {
      if (frame || !section) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const bounds = section.getBoundingClientRect();
        section.style.setProperty(
          "--pps-x",
          ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3),
        );
        section.style.setProperty(
          "--pps-y",
          ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3),
        );
      });
    }

    function handleLeave() {
      section?.style.setProperty("--pps-x", "0");
      section?.style.setProperty("--pps-y", "0");
    }

    section.addEventListener("pointermove", handleMove);
    section.addEventListener("pointerleave", handleLeave);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Ambient light, kept to the right so the headline column stays dark. */}
      <div className="absolute -right-32 -top-40 h-[38rem] w-[38rem] animate-hero-drift rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.26),transparent_68%)] blur-3xl motion-reduce:animate-none" />
      <div
        className="absolute -bottom-52 right-4 h-[34rem] w-[34rem] animate-hero-drift rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent_68%)] blur-3xl motion-reduce:animate-none"
        style={{ animationDirection: "reverse", animationDuration: "31s" }}
      />

      {/* Alignment structure: a modular grid that only exists on the right. */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_right,transparent_28%,black_62%,black)]" />
      <div className="absolute inset-y-0 left-[63%] hidden w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent lg:block" />
      <div className="absolute inset-x-0 top-[34%] hidden h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent lg:block" />

      <div className="absolute inset-0" style={plane(-4, -3)}>
        {PANELS.map((module) => (
          <CapabilityTile
            key={`${module.left}-${module.top}`}
            module={module}
            tone="back"
          />
        ))}
      </div>
      <div className="absolute inset-0 hidden lg:block" style={plane(3, 2)}>
        {MIDGROUND.map((module) => (
          <CapabilityTile
            key={`${module.left}-${module.top}`}
            module={module}
            tone="mid"
          />
        ))}
      </div>
      <div className="absolute inset-0" style={plane(6, 4)}>
        {FOREGROUND.map((module) => (
          <CapabilityTile
            key={`${module.left}-${module.top}`}
            module={module}
            tone="front"
          />
        ))}
      </div>

      {/* The headline column wins. Everything above fades out under this. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(2,6,23)_0%,rgba(2,6,23,0.93)_34%,rgba(2,6,23,0.6)_56%,transparent_80%)]" />
    </div>
  );
}
