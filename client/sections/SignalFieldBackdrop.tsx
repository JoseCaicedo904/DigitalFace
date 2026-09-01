import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Backdrop for the Contact hero.
 *
 * The headline is "See the system running", so the atmosphere is a live signal
 * rather than a structure: rings pinging outward from the centre, streaks
 * crossing the field at four depths, and a radar sweep turning once a minute
 * behind all of it. A glow trails the pointer at a distance, which is the one
 * thing here that answers the visitor directly.
 *
 * Deliberately a third visual language: About connects nodes with paths, Pay
 * per Service floats separate tiles, and this one emits. No links, no modules.
 */

/** Rings emerge every 3.4s from a single 17s cycle. */
const PING_DELAYS = [0, -3.4, -6.8, -10.2, -13.6];

type Streak = {
  top: string;
  width: string;
  duration: number;
  delay: number;
  tint: string;
  opacity: string;
  /** The two that survive on a phone. */
  mobile?: boolean;
};

/* Two streaks cross the middle on purpose: the scrim dims them behind the copy
   and lets them brighten again past it, which reads as passing behind. */
const STREAKS: readonly Streak[] = [
  {
    top: "12%",
    width: "w-[22rem]",
    duration: 24,
    delay: 0,
    tint: "rgba(167,139,250,0.85)",
    opacity: "opacity-70",
    mobile: true,
  },
  {
    top: "27%",
    width: "w-[16rem]",
    duration: 31,
    delay: -9,
    tint: "rgba(125,211,252,0.7)",
    opacity: "opacity-50",
  },
  {
    top: "47%",
    width: "w-[26rem]",
    duration: 34,
    delay: -19,
    tint: "rgba(167,139,250,0.6)",
    opacity: "opacity-40",
  },
  {
    top: "71%",
    width: "w-[18rem]",
    duration: 27,
    delay: -5,
    tint: "rgba(125,211,252,0.8)",
    opacity: "opacity-60",
    mobile: true,
  },
  {
    top: "87%",
    width: "w-[20rem]",
    duration: 22,
    delay: -14,
    tint: "rgba(167,139,250,0.75)",
    opacity: "opacity-50",
  },
];

export function SignalFieldBackdrop() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /* The backdrop is pointer-events-none, so the listener lives on the hero
       section that owns it. */
    const section = rootRef.current?.parentElement;
    if (!section || prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;

    function handleMove(event: PointerEvent) {
      if (frame || !section) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const bounds = section.getBoundingClientRect();
        /* Damped to a third of the travel: the glow follows the pointer, it
           does not sit under it. */
        section.style.setProperty(
          "--sig-x",
          ((event.clientX - bounds.left - bounds.width / 2) * 0.34).toFixed(1),
        );
        section.style.setProperty(
          "--sig-y",
          ((event.clientY - bounds.top - bounds.height / 2) * 0.34).toFixed(1),
        );
      });
    }

    function handleLeave() {
      section?.style.setProperty("--sig-x", "0");
      section?.style.setProperty("--sig-y", "0");
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
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#0a0b26_0%,#070d24_44%,#050711_100%)]" />

      {/* Texture: dots here, where the other two heroes use ruled lines. */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:radial-gradient(75%_70%_at_50%_45%,black,transparent)]" />

      {/* One turn a minute, and masked to a soft disc. */}
      <div
        className="absolute left-1/2 top-1/2 -ml-[35rem] -mt-[35rem] hidden h-[70rem] w-[70rem] animate-signal-sweep rounded-full opacity-[0.16] motion-reduce:animate-none sm:block"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(139,92,246,0.55) 38deg, rgba(56,189,248,0.25) 72deg, transparent 108deg, transparent 360deg)",
          maskImage:
            "radial-gradient(circle, black 22%, rgba(0,0,0,0.35) 48%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 22%, rgba(0,0,0,0.35) 48%, transparent 72%)",
        }}
      />

      {/* The ping. Born small and dark at the centre, visible once it clears
          the copy. */}
      <div className="absolute left-1/2 top-1/2 -ml-[11rem] -mt-[11rem] h-[22rem] w-[22rem] sm:-ml-[17rem] sm:-mt-[17rem] sm:h-[34rem] sm:w-[34rem]">
        {PING_DELAYS.map((delay, index) => (
          <span
            key={delay}
            className={cn(
              "absolute inset-0 animate-signal-ping rounded-full border border-brand-400/40 opacity-0 motion-reduce:animate-none",
              index > 2 && "hidden sm:block",
            )}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
        {/* Reduced motion still gets a composed target, not an empty middle. */}
        <span className="absolute inset-[18%] rounded-full border border-white/[0.06]" />
        <span className="absolute inset-[38%] rounded-full border border-white/[0.05]" />
      </div>

      {STREAKS.map((streak) => (
        <span
          key={streak.top}
          className={cn(
            "absolute left-0 h-px animate-signal-stream motion-reduce:animate-none",
            streak.width,
            streak.opacity,
            !streak.mobile && "hidden md:block",
          )}
          style={{
            top: streak.top,
            animationDuration: `${streak.duration}s`,
            animationDelay: `${streak.delay}s`,
            background: `linear-gradient(90deg, transparent, ${streak.tint}, transparent)`,
          }}
        />
      ))}

      {/* Ambient bodies, each drifting through its own small arc. */}
      <div
        className="absolute -left-32 -top-24 h-[32rem] w-[32rem] animate-signal-orb rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.3),transparent_68%)] blur-3xl motion-reduce:animate-none"
        style={{ animationDuration: "34s" }}
      />
      <div
        className="absolute -bottom-40 -right-24 h-[30rem] w-[30rem] animate-signal-orb rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.26),transparent_68%)] blur-3xl motion-reduce:animate-none"
        style={{ animationDuration: "41s", animationDelay: "-12s" }}
      />

      {/* Trails the pointer at a third of its travel, and only ever reads at
          the edges — the scrim above covers the middle. */}
      <div
        className="absolute left-1/2 top-1/2 -ml-[17rem] -mt-[17rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24),transparent_65%)] blur-[70px]"
        style={
          {
            transform:
              "translate3d(calc(var(--sig-x, 0) * 1px), calc(var(--sig-y, 0) * 1px), 0)",
            transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          } as CSSProperties
        }
      />

      {/* The copy is centred, so the protection is too. */}
      <div className="absolute inset-0 bg-[radial-gradient(58%_54%_at_50%_46%,rgba(4,6,18,0.93),rgba(4,6,18,0.66)_46%,transparent_78%)]" />
    </div>
  );
}
