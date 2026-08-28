/**
 * The DigitalFace client roster.
 *
 * Only the parts that do not change between languages live here: the order the
 * businesses appear in, their brand names, and which logo file (if any) exists
 * for each of them. Every translatable string — category, description and the
 * highlighted contribution line — lives in `selectedWork.entries` in
 * `client/i18n/content/home.ts`, keyed by the same `id`.
 *
 * A client with no entry in that map simply renders as a name and a logo slot:
 * nothing is invented to fill the gap, and the card stays presentable until
 * approved copy arrives.
 */

export type ClientTier =
  /** Enough approved substance to carry a description and a contribution line. */
  | "featured"
  /** A verified short description, but no claim beyond that. */
  | "selected"
  /** Confirmed work, copy not approved yet. Name (and logo) only. */
  | "roster";

/**
 * How the artwork is drawn, which decides what we put behind it. `light` logos
 * are white or near-white and need a dark tile; `dark` logos need a pale one.
 */
export type LogoTone = "light" | "dark";

export type ClientLogo = {
  /** Path under `public/`, so it is served as-is. */
  src: string;
  tone: LogoTone;
};

export type ClientRecord = {
  id: string;
  /** Brand names are not translated. */
  name: string;
  tier: ClientTier;
  logo: ClientLogo | null;
};

const LOGO_DIR = "/media/clients";

export const clients: ClientRecord[] = [
  {
    id: "jennifer",
    name: "Dra. Jennifer Sinisterra",
    tier: "featured",
    logo: null,
  },
  {
    id: "diego",
    name: "Dr. Diego Sinisterra",
    tier: "featured",
    logo: { src: `${LOGO_DIR}/dr-diego-sinisterra.png`, tone: "light" },
  },
  {
    id: "braveros",
    name: "Braveros Box / Neon Race",
    tier: "featured",
    logo: null,
  },
  {
    id: "saboreo",
    name: "Saboreo",
    tier: "featured",
    logo: { src: `${LOGO_DIR}/saboreo.png`, tone: "dark" },
  },
  {
    id: "igrafit",
    name: "iGrafit",
    tier: "selected",
    logo: { src: `${LOGO_DIR}/igrafit.png`, tone: "dark" },
  },
  {
    id: "traffic",
    name: "Traffic Publicidad",
    tier: "selected",
    logo: { src: `${LOGO_DIR}/traffic-publicidad.jpeg`, tone: "dark" },
  },
  {
    id: "motos-occidente",
    name: "Motos y Partes de Occidente",
    tier: "selected",
    logo: {
      src: `${LOGO_DIR}/motos-y-partes-de-occidente.png`,
      tone: "dark",
    },
  },
  {
    id: "magic-soul",
    name: "Magic Soul",
    tier: "selected",
    logo: { src: `${LOGO_DIR}/magic-soul.png`, tone: "dark" },
  },
  { id: "medisol", name: "Medisol", tier: "roster", logo: null },
  { id: "daunash-beauty", name: "Daunash Beauty", tier: "roster", logo: null },
  { id: "sos-belleza", name: "SOS Belleza", tier: "roster", logo: null },
  { id: "diomara-garcia", name: "Diomara Garcia", tier: "roster", logo: null },
  { id: "vitto", name: "Vitto", tier: "roster", logo: null },
  { id: "tu-planner", name: "Tu Planner", tier: "roster", logo: null },
  {
    id: "urban-campestre",
    name: "Urban Campestre",
    tier: "roster",
    logo: null,
  },
  {
    id: "barranquenos-travel",
    name: "Barranqueños Travel",
    tier: "roster",
    logo: null,
  },
  { id: "vasaenviar", name: "VasaEnviar", tier: "roster", logo: null },
  { id: "genesis", name: "Genesis", tier: "roster", logo: null },
  { id: "vanidosa", name: "Vanidosa", tier: "roster", logo: null },
  {
    id: "love-is-flowers",
    name: "Love Is Flowers",
    tier: "roster",
    logo: null,
  },
  { id: "malibu-bar", name: "Malibu Bar", tier: "roster", logo: null },
  { id: "la-ruta", name: "La Ruta", tier: "roster", logo: null },
];

export const clientsByTier = (tier: ClientTier): ClientRecord[] =>
  clients.filter((client) => client.tier === tier);

/**
 * Two letters pulled from the brand name, used as a quiet stand-in while a logo
 * file is missing. "Dra. Jennifer Sinisterra" becomes "JS", "Vitto" becomes "V".
 */
export function clientInitials(name: string): string {
  const words = name
    .replace(/[/·]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 0 && !/^(dra?|mr|mrs|ms)\.?$/i.test(word));

  if (words.length === 0) return name.slice(0, 2).toUpperCase();

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
