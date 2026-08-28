/**
 * The delivered websites shown in the homepage portfolio showcase.
 *
 * Only the parts that do not change between languages live here: which client
 * the project belongs to, the live URL, and the homepage screenshot with its
 * real pixel size. Every translatable string — category, location, description
 * and the image alt text — lives in `websitePortfolio.projects` in
 * `client/i18n/content/home.ts`, keyed by the same `id`.
 *
 * The `id` is a client id from `client/data/clients.ts`, so a brand name has
 * one source of truth and cannot drift between the two homepage sections.
 */

import { clients } from "@/data/clients";

/**
 * Screenshots live under `public/`, so they are served as-is. The filenames
 * arrived with spaces in them and are kept exactly as they are on disk; they
 * are encoded here rather than renamed so the asset and the reference stay the
 * same file.
 */
const SCREENSHOT_DIR = "/media/Homepages_Websites";

const screenshotSrc = (filename: string) =>
  `${SCREENSHOT_DIR}/${encodeURIComponent(filename)}`;

export type WebsiteProjectScreenshot = {
  src: string;
  /** Real pixel size of the file, used to reserve space and to size the pan. */
  width: number;
  height: number;
};

export type WebsiteProjectRecord = {
  /** Matches a client id in `client/data/clients.ts`. */
  id: string;
  /** Brand names are not translated. */
  name: string;
  /** Where "Visit live website" goes. */
  url: string;
  /** What the browser address bar shows. */
  domain: string;
  screenshot: WebsiteProjectScreenshot;
};

type WebsiteProjectSeed = Omit<WebsiteProjectRecord, "name">;

const seeds: WebsiteProjectSeed[] = [
  {
    id: "jennifer",
    url: "https://drajennifersinisterra.com/",
    domain: "drajennifersinisterra.com",
    screenshot: {
      src: screenshotSrc("HomePage Dra. Jennifer.png"),
      width: 1489,
      height: 873,
    },
  },
  {
    id: "diego",
    url: "https://www.drdiegosinisterra.com/",
    domain: "drdiegosinisterra.com",
    screenshot: {
      /* The file is named for an earlier working title; the capture is the
         Dr. Diego Sinisterra homepage. */
      src: screenshotSrc("Homepage Dr Diego Quintero.png"),
      width: 1710,
      height: 873,
    },
  },
];

export const websiteProjects: WebsiteProjectRecord[] = seeds.map((seed) => {
  const client = clients.find((entry) => entry.id === seed.id);

  if (!client) {
    throw new Error(
      `websiteProjects: "${seed.id}" is not a client id in client/data/clients.ts`,
    );
  }

  return { ...seed, name: client.name };
});

const screenshotAspect = (project: WebsiteProjectRecord) =>
  project.screenshot.width / project.screenshot.height;

/**
 * Every project is framed by the same browser viewport, so moving between them
 * never resizes the section. The frame is exactly as short as the widest
 * screenshot, which is what rules out letterboxing: each image is drawn at the
 * full width of the frame, so it is always at least as tall as the frame is.
 *
 * The floor keeps the frame from turning into a portrait window if the day
 * comes that every screenshot is a tall full-page capture.
 */
export const SHOWCASE_VIEWPORT_ASPECT = Math.max(
  1.5,
  ...websiteProjects.map(screenshotAspect),
);

/**
 * How much of a screenshot hangs below the frame, as a fraction of the image's
 * own height. `0` means it fits the frame exactly; `0.13` means the bottom 13%
 * is out of sight until the preview pans.
 *
 * Because it is derived from the real pixel size, a pan built on it stops the
 * moment the bottom of the image reaches the bottom of the frame — it can never
 * travel on into empty space.
 */
export function screenshotOverflowRatio(project: WebsiteProjectRecord): number {
  return Math.max(0, 1 - screenshotAspect(project) / SHOWCASE_VIEWPORT_ASPECT);
}

/**
 * Below this there is too little below the fold for a pan to read as browsing
 * the page, so the preview simply stays still.
 */
export const MIN_PAN_OVERFLOW_RATIO = 0.04;

/**
 * How long the pan should take, scaled to how far it actually travels: a full
 * page capture with roughly 70% of itself out of frame lands near 10 seconds,
 * while a short crop finishes quickly instead of crawling.
 */
export function panDurationSeconds(overflowRatio: number): number {
  return Math.min(12, Math.max(1.4, overflowRatio * 14.4));
}
