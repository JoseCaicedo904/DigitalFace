import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { ImageIcon, PlayCircle, Sparkles } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export type MediaSlotSpec = {
  id: string;
  kind: "image" | "video";
  src: string;
  poster?: string;
  label: string;
  description: string;
  alt: string;
  objectPosition?: string;
};

const spanishAlt: Record<string, string> = {
  C01_CORPORATE_HERO: "Sistema de captación y agendamiento de DigitalFace",
  C02_DENTAL_GATEWAY: "Consultorio odontológico moderno",
  C03_AESTHETIC_GATEWAY: "Entorno de consulta de medicina estética",
  C04_MEDSPA_GATEWAY: "Recepción y consulta en un med spa",
  C05_SYSTEM_OVERVIEW:
    "Proceso de DigitalFace desde la consulta hasta el agendamiento",
  D01_DENTAL_HERO:
    "Odontólogo recibiendo a un paciente sonriente en el consultorio",
  D02_DENTAL_WORKFLOW:
    "Equipo odontológico atendiendo a un paciente en su cita",
  A01_AESTHETIC_HERO:
    "Médico evaluando el rostro de una paciente en una consulta estética",
  A02_AESTHETIC_WORKFLOW:
    "Profesional planificando un tratamiento durante una consulta estética",
  M01_MEDSPA_HERO: "Clienta recibiendo un tratamiento facial en un med spa",
  M02_MEDSPA_WORKFLOW: "Terapeutas de un med spa atendiendo a sus clientes",
  P01_JENNIFER_CASE_STUDY:
    "Inicio del sitio web de la Dra. Jennifer Sinisterra desarrollado por DigitalFace",
  P02_DIEGO_CASE_STUDY:
    "Inicio del sitio web del Dr. Diego Sinisterra desarrollado por DigitalFace",
};

type MediaSlotProps = {
  spec: MediaSlotSpec;
  aspectClassName?: string;
  className?: string;
  compact?: boolean;
  overlay?: ReactNode;
};

export function MediaSlot({
  spec,
  aspectClassName = "aspect-video",
  className,
  compact = false,
  overlay,
}: MediaSlotProps) {
  const { locale } = useLocale();
  const alt = locale === "es" ? spanishAlt[spec.id] || spec.alt : spec.alt;
  const prefersReducedMotion = useReducedMotion();
  const [primaryFailed, setPrimaryFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  useEffect(() => {
    setPrimaryFailed(false);
    setPosterFailed(false);
  }, [spec.src, spec.poster]);

  const shouldShowVideo =
    spec.kind === "video" && !prefersReducedMotion && !primaryFailed;
  const shouldShowImage =
    (spec.kind === "image" && !primaryFailed) ||
    (spec.kind === "video" &&
      Boolean(spec.poster) &&
      (Boolean(prefersReducedMotion) || primaryFailed) &&
      !posterFailed);
  const shouldShowPlaceholder = !shouldShowVideo && !shouldShowImage;
  const imageSrc = spec.kind === "image" ? spec.src : spec.poster;

  return (
    <div
      data-media-slot={spec.id}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-brand-card",
        aspectClassName,
        className,
      )}
    >
      {shouldShowVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: spec.objectPosition ?? "center" }}
          src={spec.src}
          poster={spec.poster}
          aria-label={alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setPrimaryFailed(true)}
        />
      ) : null}

      {shouldShowImage && imageSrc ? (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: spec.objectPosition ?? "center" }}
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => {
            if (spec.kind === "image") {
              setPrimaryFailed(true);
            } else {
              setPosterFailed(true);
            }
          }}
        />
      ) : null}

      {shouldShowPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.28),transparent_52%),linear-gradient(135deg,#0f172a,#020617)] p-5 text-center text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-ocean-200">
            {spec.kind === "video" ? (
              <PlayCircle className="h-5 w-5" />
            ) : (
              <ImageIcon className="h-5 w-5" />
            )}
          </span>
          <p className="relative mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ocean-200">
            DigitalFace
          </p>
          <p className="relative mt-2 text-sm font-semibold text-white">
            {alt}
          </p>
        </div>
      ) : null}

      {!shouldShowPlaceholder && overlay ? (
        <div className="absolute inset-0 z-10">{overlay}</div>
      ) : null}

      {!shouldShowPlaceholder ? (
        <span className="pointer-events-none absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-slate-950/45 text-white/80 opacity-0 backdrop-blur transition group-hover:opacity-100">
          <Sparkles className="h-4 w-4" />
        </span>
      ) : null}
    </div>
  );
}
