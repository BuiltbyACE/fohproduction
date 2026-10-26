import { CANONICAL_ORIGIN } from "./seo";

/**
 * Canonical organization facts.
 *
 * This file is the single source of truth for the entity data used by the
 * global JSON-LD graph, the footer, and llms.txt. Keep it in sync with the
 * official public profiles — not with temporary campaign pages.
 */

export const ORG_NAME = "Fountain of Hope";
export const ORG_ALTERNATE_NAMES = [
  "Fountain of Hope Garissa",
  "Fountain of Hope Organisation",
];
export const ORG_URL = CANONICAL_ORIGIN;
export const ORG_EMAIL = "cflgarissa007@gmail.com";
export const ORG_PHONE_DISPLAY = "+254 742 789 903";
export const ORG_PHONE_TEL = "+254742789903";
export const ORG_FOUNDING_DATE = "2017";
export const ORG_FOUNDER = "Fardosa Osman";
export const ORG_SLOGAN = "No mother should die while giving birth.";

export const ORG_DESCRIPTION =
  "Fountain of Hope is a woman-led, community-rooted organization in Garissa County, Kenya. It works with pastoralist communities on maternal and newborn health, girls' education, menstrual health, gender-based violence prevention, family planning advocacy and community resilience.";

export const ORG_FOCUS_AREAS = [
  "Gender-Based Violence Prevention",
  "Pastoralist Community Education",
  "Family Planning Advocacy",
  "Maternal and Newborn Health",
  "Menstrual Hygiene Management",
  "Girls' Education and Retention",
  "Community Resilience",
];

export const ORG_KEYWORDS = [
  "Fountain of Hope",
  "Garissa",
  "Garissa County",
  "Kenya",
  "pastoralist education",
  "girls education Kenya",
  "gender-based violence support",
  "GBV prevention Garissa",
  "family planning advocacy",
  "maternal health Kenya",
  "menstrual hygiene management",
  "community resilience",
  "NGO Kenya",
  "ASAL Kenya",
];

export type SocialProfile = {
  name: string;
  url: string;
  handle?: string;
  /** Descriptive, human-readable label used for aria-label. */
  label: string;
  icon: "facebook" | "x" | "linkedin" | "youtube";
};

/**
 * Verified public profiles only.
 *
 * Official LinkedIn and YouTube URLs were not supplied or independently
 * verified, so they are opt-in environment variables rather than guessed
 * links. Set NEXT_PUBLIC_LINKEDIN_URL / NEXT_PUBLIC_YOUTUBE_URL at build time
 * and they will appear in the footer and in the JSON-LD sameAs array.
 */
const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim();
const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim();

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: "X",
    url: "https://x.com/Fountain_FOH",
    handle: "@Fountain_FOH",
    label: "Fountain of Hope on X (formerly Twitter)",
    icon: "x",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/FOHorg",
    handle: "FOHorg",
    label: "Fountain of Hope on Facebook",
    icon: "facebook",
  },
  ...(linkedInUrl
    ? [
        {
          name: "LinkedIn",
          url: linkedInUrl,
          label: "Fountain of Hope on LinkedIn",
          icon: "linkedin" as const,
        },
      ]
    : []),
  {
    name: "YouTube",
    url: "https://www.youtube.com/watch?v=goSYFXDqkHc",
    label: "Fountain of Hope YouTube Video",
    icon: "youtube" as const,
  },
];

export type PartnerLink = {
  name: string;
  url: string;
  /** Short relationship description for aria-label and schema. */
  relationship: string;
  kind: "partner" | "network" | "public" | "registry";
};

export const PARTNER_LINKS: PartnerLink[] = [
  {
    name: "ActionAid Kenya",
    url: "https://actionaid.org/kenya",
    relationship: "Women's rights and community advocacy network",
    kind: "partner",
  },
  {
    name: "Caritas Garissa",
    url: "https://caritasgarissa.org",
    relationship: "Health, education and justice programmes in Garissa",
    kind: "partner",
  },
  {
    name: "ICRH Kenya",
    url: "https://www.icrhk.org",
    relationship: "Okoa Mama na Mtoto implementing partner",
    kind: "partner",
  },
  {
    name: "Jhpiego",
    url: "https://www.jhpiego.org",
    relationship: "Maternal and newborn health partner",
    kind: "partner",
  },
  {
    name: "ASAL Humanitarian Network",
    url: "https://asalnetwork.org",
    relationship: "Arid and Semi-Arid Lands (ASAL) network",
    kind: "network",
  },
  {
    name: "Garissa County Government",
    url: "https://garissa.go.ke",
    relationship: "County health, education and community partner",
    kind: "public",
  },
];

/**
 * Network memberships rendered as reserved, modular slots in the footer.
 *
 * Add one object here as each network is formalised; the footer and the
 * JSON-LD memberOf relationship both read from this array. No component edit
 * is required.
 */
export const NETWORK_LINKS: PartnerLink[] = PARTNER_LINKS.filter(
  (partner) => partner.kind === "network",
);

export const REGISTRY_LINKS: PartnerLink[] = [
  {
    name: "Public Benefit Organizations Regulatory Authority",
    url: "https://www.pbora.go.ke",
    relationship: "Kenya's charity and non-profit regulator",
    kind: "registry",
  },
  {
    name: "State Department for ASALs and Regional Development",
    url: "https://www.asalrd.go.ke",
    relationship: "National Arid and Semi-Arid Lands policy and development",
    kind: "public",
  },
];
