import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import type { IndustryPhoto } from "@/data/mediaSlots";
import type { GalleryMoment } from "@/pages/industries/industryTypes";

type IndustryGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Exactly three moments, paired positionally with `photos`. */
  moments: GalleryMoment[];
  photos: readonly IndustryPhoto[];
  reducedMotion: boolean;
};

type GalleryTileProps = {
  photo: IndustryPhoto;
  moment: GalleryMoment;
  index: number;
  feature?: boolean;
  className?: string;
  reducedMotion: boolean;
};

/**
 * One photo tile. The picture is oversized on purpose: the extra 16% of height
 * is what the scroll parallax travels through, so the crop never shows an edge.
 */
function GalleryTile({
  photo,
  moment,
  index,
  feature = false,
  className,
  reducedMotion,
}: GalleryTileProps) {
  const tileRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"],
  });
  // Alternating direction keeps the three tiles from drifting as one block.
  const drift = index % 2 === 0 ? ["-6%", "6%"] : ["6%", "-6%"];
  const y = useTransform(scrollYProgress, [0, 1], drift);

  return (
    <motion.article
      ref={tileRef}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: "easeOut" }}
      className={cn(
        "group relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl",
        className,
      )}
    >
      <motion.div
        className="absolute inset-x-0 -top-[8%] h-[116%]"
        style={reducedMotion ? undefined : { y }}
      >
        <img
          src={photo.src}
          alt={moment.alt}
          style={{ objectPosition: photo.position }}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform [transition-duration:1600ms] ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </motion.div>

      {/* Two scrims rather than one: the flat wash keeps the brand tone on the
          whole frame, the gradient buys contrast only where the caption sits. */}
      <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 via-40% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/25 via-transparent to-ocean-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Brand hairline that draws itself across the tile on hover. */}
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-400 via-ocean-300 to-emerald-300 transition-transform duration-700 ease-out group-hover:scale-x-100" />

      <div
        className={cn(
          "relative flex h-full flex-col justify-end p-6",
          feature ? "sm:p-9" : "sm:p-7",
        )}
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ocean-200 backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className={cn(
            "mt-4 font-semibold tracking-tight text-white",
            feature ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
          )}
        >
          {moment.title}
        </h3>
        <p
          className={cn(
            "mt-3 leading-relaxed text-white/75",
            feature ? "max-w-md text-sm sm:text-base" : "text-sm",
          )}
        >
          {moment.description}
        </p>
      </div>
    </motion.article>
  );
}

/**
 * The only place in the funnel that shows the visitor their own room. It sits
 * between the problem list and the system explanation so the abstract promise
 * lands on something physical before the mechanics start.
 */
export function IndustryGallery({
  eyebrow,
  title,
  description,
  moments,
  photos,
  reducedMotion,
}: IndustryGalleryProps) {
  if (moments.length === 0 || photos.length === 0) {
    return null;
  }

  const [featureMoment, ...supportingMoments] = moments;
  const [featurePhoto, ...supportingPhotos] = photos;

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,0.28),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(14,165,233,0.22),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5 xl:h-[40rem]">
          <GalleryTile
            photo={featurePhoto}
            moment={featureMoment}
            index={0}
            feature
            reducedMotion={reducedMotion}
            className="aspect-[4/5] sm:aspect-[16/11] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[24rem]"
          />
          {supportingMoments.map((moment, index) => {
            const photo = supportingPhotos[index];
            if (!photo) {
              return null;
            }
            return (
              <GalleryTile
                key={moment.title}
                photo={photo}
                moment={moment}
                index={index + 1}
                reducedMotion={reducedMotion}
                className="aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-[15rem]"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
