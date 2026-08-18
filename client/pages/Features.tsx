import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { FeaturesSection } from "@/sections/Features";
import { CtaSection } from "@/sections/CTA";
import { useLocale } from "@/i18n/LocaleProvider";
import { featuresContent } from "@/i18n/content/features";
import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  LayoutDashboard,
  PhoneCall,
  X,
} from "lucide-react";

/** Module artwork lives outside the translated content. */
const moduleImages = [
  "/images/ML 01.png",
  "/images/ML 02.png",
  "/images/ML 03.png",
  "/images/ML 04.png",
  "/images/ML 05.png",
  "/images/ML 06.png",
  "/images/ML 07.png",
];

const overviewIcons = [
  <PhoneCall className="h-6 w-6" />,
  <CalendarCheck className="h-6 w-6" />,
  <LayoutDashboard className="h-6 w-6" />,
];

type ModuleImageProps = {
  src: string;
  alt: string;
  title: string;
  labels: {
    viewLabel: string;
    viewMore: string;
    closeLabel: string;
    previewLabel: string;
  };
};

function ModuleImage({ src, alt, title, labels }: ModuleImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsModalOpen(true);
    requestAnimationFrame(() => setIsModalVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsModalOpen(false);
      closeTimeoutRef.current = null;
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClassName = isVisible
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-6 scale-[0.98] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100";

  return (
    <>
      <div
        ref={containerRef}
        className={`relative transition duration-500 ease-out ${revealClassName}`}
      >
        <button
          type="button"
          onClick={openModal}
          aria-label={`${labels.viewLabel} ${title}`}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          className="group relative w-full cursor-zoom-in rounded-2xl transition-shadow duration-300 ease-out hover:shadow-[0_20px_50px_rgba(15,23,42,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
        >
          <div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden rounded-2xl">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.02] motion-reduce:transform-none"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/20 group-focus-visible:bg-slate-900/20" />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                  {title}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {labels.viewMore}
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </button>
      </div>

      {isModalOpen ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm transition-opacity duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — ${labels.previewLabel}`}
        >
          <div
            className={`relative w-full max-w-5xl transition-transform duration-300 ${
              isModalVisible ? "scale-100" : "scale-95"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 text-white transition hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={labels.closeLabel}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function Features() {
  const { locale, path } = useLocale();
  const t = featuresContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  const moduleLabels = {
    viewLabel: t.modules.viewLabel,
    viewMore: t.modules.viewMore,
    closeLabel: t.modules.closeLabel,
    previewLabel: t.modules.previewLabel,
  };

  return (
    <div className="bg-white">
      <FeaturesSection
        eyebrow={t.overview.eyebrow}
        title={t.overview.title}
        titleAs="h1"
        description={t.overview.description}
        features={t.overview.items.map((item, index) => ({
          ...item,
          icon: overviewIcons[index],
        }))}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          {t.modules.items.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-10 rounded-3xl border border-ink-100 bg-white/95 p-8 shadow-brand-card lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center"
            >
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                  {t.modules.label} 0{index + 1}
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="text-lg text-ink-500">{service.description}</p>
                <ul className="space-y-3 text-sm text-ink-500">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  to={path("/contact")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {t.modules.startLink}
                </Link>
              </div>
              <ModuleImage
                src={moduleImages[index]}
                alt={service.imageAlt}
                title={service.title}
                labels={moduleLabels}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.principles.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t.principles.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              {t.principles.description}
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.principles.items.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_55%)] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-16">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                {t.launch.eyebrow}
              </span>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {t.launch.title}
              </h2>
              <p className="text-lg text-white/70">{t.launch.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase tracking-[0.1em] text-white">
                  {t.launch.timelineBadge}
                </span>
                <div>
                  <p className="text-sm text-white/80">
                    {t.launch.timelineTitle}
                  </p>
                  <p className="text-xs text-white/50">
                    {t.launch.timelineSubtitle}
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                {t.launch.notes.map((note, index) => (
                  <div key={note} className="flex items-start gap-3">
                    <span
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                        index === 0 ? "bg-brand-400" : "bg-brand-400/80"
                      }`}
                    />
                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-12">
              <div className="relative pl-10">
                <div className="absolute left-4 top-1 h-full w-px bg-gradient-to-b from-brand-400/80 via-ocean-400/50 to-white/10" />
                <ol className="space-y-9">
                  {t.launch.steps.map((step) => (
                    <li key={step.badge} className="relative">
                      <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80">
                        {step.badge}
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-4 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  {t.launch.routineLabel}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {t.launch.routine.map((item, index) => (
                    <div key={item} className="contents">
                      {index > 0 ? (
                        <div className="hidden h-px flex-1 bg-white/10 sm:block" />
                      ) : null}
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                            index === 0
                              ? "bg-brand-400"
                              : index === 1
                                ? "bg-ocean-400"
                                : "bg-white/70"
                          }`}
                        />
                        <p className="text-sm text-white">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/70">{t.launch.routineClose}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/pricing") }}
      />
    </div>
  );
}
