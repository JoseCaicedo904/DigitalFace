/**
 * The platforms DigitalFace can connect into one system.
 *
 * These are integrations, not partnerships: a logo here means the platform can
 * be wired into a DigitalFace build, nothing more. Keep the copy in
 * `home.ts -> techEcosystem` free of partner language for that reason.
 *
 * The artwork lives in `public/media/Logos_Partners` as transparent PNGs drawn
 * for a white surface, which is why the rail presents them on one. Do not
 * recolor, grayscale or filter them — each brand is shown as its owner draws it.
 */

const LOGO_DIR = "/media/Logos_Partners";

export type TechLogo = {
  id: string;
  /** Brand name, used to build the localized alt text. */
  name: string;
  src: string;
  /** Intrinsic pixel size, so the rail reserves its space before the PNG lands. */
  width: number;
  height: number;
  /**
   * Optical correction, as a share of the rail's logo height. Every asset is
   * drawn to the same lockup height, so most sit at 1. The exceptions are the
   * artwork whose glyphs run edge to edge with no internal padding, and the
   * very wide wordmarks that would otherwise out-shout their neighbours.
   */
  scale?: number;
};

/**
 * Ordered by what the platform does — CRM, AI, messaging, advertising,
 * operations, web — rather than by filename, so a visitor scrolling the rail
 * passes through recognisable groups. It is presented as one continuous rail;
 * the grouping is ordering logic, not a set of visible sections.
 */
export const techLogos: TechLogo[] = [
  // CRM and sales
  {
    id: "highlevel",
    name: "GoHighLevel",
    src: `${LOGO_DIR}/01-highlevel.png`,
    width: 813,
    height: 210,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    src: `${LOGO_DIR}/02-hubspot.png`,
    width: 565,
    height: 173,
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    src: `${LOGO_DIR}/03-pipedrive.png`,
    width: 456,
    height: 107,
    scale: 0.9,
  },
  {
    id: "kommo",
    name: "Kommo",
    src: `${LOGO_DIR}/04-kommo.png`,
    width: 390,
    height: 158,
  },
  {
    id: "zoho-crm",
    name: "Zoho CRM",
    src: `${LOGO_DIR}/05-zoho-crm.png`,
    width: 683,
    height: 135,
    scale: 0.95,
  },
  {
    id: "activecampaign",
    name: "ActiveCampaign",
    src: `${LOGO_DIR}/06-activecampaign.png`,
    width: 648,
    height: 115,
    scale: 0.92,
  },
  {
    id: "odoo",
    name: "Odoo",
    src: `${LOGO_DIR}/21-Odoo.png`,
    width: 1242,
    height: 392,
    scale: 0.88,
  },

  // AI and automation
  {
    id: "openai",
    name: "OpenAI",
    src: `${LOGO_DIR}/08-openai.png`,
    width: 494,
    height: 173,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    src: `${LOGO_DIR}/09-chatgpt.png`,
    width: 564,
    height: 179,
  },
  {
    id: "n8n",
    name: "n8n",
    src: `${LOGO_DIR}/07-n8n.png`,
    width: 360,
    height: 107,
  },

  // Messaging and customer conversations
  {
    id: "whatsapp-business",
    name: "WhatsApp Business",
    src: `${LOGO_DIR}/10-whatsapp-business.png`,
    width: 869,
    height: 178,
    scale: 0.95,
  },
  {
    id: "messenger",
    name: "Messenger",
    src: `${LOGO_DIR}/11-messenger.png`,
    width: 618,
    height: 178,
  },
  {
    id: "instagram",
    name: "Instagram",
    src: `${LOGO_DIR}/12-instagram.png`,
    width: 587,
    height: 178,
  },
  {
    id: "respond-io",
    name: "Respond.io",
    src: `${LOGO_DIR}/22-Respond.io.png`,
    width: 1228,
    height: 198,
    scale: 0.78,
  },
  {
    id: "chatwoot",
    name: "Chatwoot",
    src: `${LOGO_DIR}/13-chatwoot.png`,
    width: 554,
    height: 173,
  },

  // Advertising
  {
    id: "meta",
    name: "Meta",
    src: `${LOGO_DIR}/14-meta.png`,
    width: 440,
    height: 141,
  },
  {
    id: "google-ads",
    name: "Google Ads",
    src: `${LOGO_DIR}/15-google-ads.png`,
    width: 541,
    height: 166,
  },
  {
    id: "tiktok",
    name: "TikTok",
    src: `${LOGO_DIR}/16-tiktok.png`,
    width: 466,
    height: 183,
  },

  // Scheduling and operations
  {
    id: "calendly",
    name: "Calendly",
    src: `${LOGO_DIR}/17-calendly.png`,
    width: 528,
    height: 178,
  },
  {
    id: "google-drive",
    name: "Google Drive",
    src: `${LOGO_DIR}/20-google-drive.png`,
    width: 591,
    height: 161,
  },

  // Web
  {
    id: "react",
    name: "React",
    src: `${LOGO_DIR}/18-react.png`,
    width: 429,
    height: 166,
  },
  {
    id: "nextjs",
    name: "Next.js",
    src: `${LOGO_DIR}/19-nextjs.png`,
    width: 472,
    height: 173,
  },
];
