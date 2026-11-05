import {
  ORG_ALTERNATE_NAMES,
  ORG_DESCRIPTION,
  ORG_EMAIL,
  ORG_FOCUS_AREAS,
  ORG_FOUNDER,
  ORG_FOUNDING_DATE,
  ORG_KEYWORDS,
  ORG_NAME,
  ORG_OFFICES,
  ORG_PHONE_TEL,
  ORG_SLOGAN,
  ORG_URL,
  PARTNER_LINKS,
  NETWORK_LINKS,
  REGISTRY_LINKS,
  SOCIAL_PROFILES,
} from "./organization";
import { canonicalUrl, logoUrl, ogImagePath } from "./seo";
import { TOPICS } from "./topics";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const orgId = `${ORG_URL}/#organization`;
const websiteId = `${ORG_URL}/#website`;
const founderId = `${ORG_URL}/#founder`;

const asalNetwork = NETWORK_LINKS[0];
const xProfile = SOCIAL_PROFILES.find((profile) => profile.icon === "x");

const partnerNodes = [...PARTNER_LINKS, ...REGISTRY_LINKS].map((partner) => ({
  "@type": "Organization",
  "@id": `${ORG_URL}/#${partner.kind}-${slugify(partner.name)}`,
  name: partner.name,
  url: partner.url,
  sameAs: [partner.url],
  description: partner.relationship,
}));

/**
 * Global entity graph.
 *
 * Notes for future maintainers:
 * - `sameAs` on the NGO contains only profiles that represent the *same*
 *   organization. Partner sites are modelled as separate Organization nodes;
 *   putting partners in `sameAs` would incorrectly merge distinct entities.
 * - Add a verified profile to SOCIAL_PROFILES (organization.ts) and it appears
 *   here automatically. Do not add guessed URLs.
 */
export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["NGO", "Organization"],
      "@id": orgId,
      name: ORG_NAME,
      alternateName: ORG_ALTERNATE_NAMES,
      url: ORG_URL,
      description: ORG_DESCRIPTION,
      slogan: ORG_SLOGAN,
      logo: {
        "@type": "ImageObject",
        "@id": `${ORG_URL}/#logo`,
        url: logoUrl,
        contentUrl: logoUrl,
        caption: "Fountain of Hope logo",
      },
      image: logoUrl,
      foundingDate: ORG_FOUNDING_DATE,
      foundingLocation: {
        "@type": "Place",
        name: "Garissa, Kenya",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Garissa",
          addressRegion: "Garissa County",
          addressCountry: "KE",
        },
      },
      founder: { "@id": founderId },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Garissa",
        addressRegion: "Garissa County",
        addressCountry: "KE",
      },
      location: ORG_OFFICES.map(({ name, display, ...address }) => ({
        "@type": "Place",
        name,
        description: display,
        address: {
          "@type": "PostalAddress",
          ...address,
          addressCountry: "KE",
        },
      })),
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "AdministrativeArea", name: "Garissa County" },
        {
          "@type": "Place",
          name: "Arid and Semi-Arid Lands (ASALs), Northern Kenya",
        },
      ],
      knowsAbout: ORG_FOCUS_AREAS,
      keywords: ORG_KEYWORDS.join(", "),
      email: ORG_EMAIL,
      telephone: ORG_PHONE_TEL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "general inquiries",
        email: ORG_EMAIL,
        telephone: ORG_PHONE_TEL,
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
      sameAs: [
        // Always lead with the verified X profile, then any additional
        // verified channels (Facebook, opt-in LinkedIn/YouTube).
        ...(xProfile ? [xProfile.url] : []),
        // YouTube is a single video, not a channel, so it stays an on-page
        // link and is not a profile of the organization.
        ...SOCIAL_PROFILES.filter(
          (profile) => profile.icon !== "x" && profile.icon !== "youtube",
        ).map((profile) => profile.url),
      ],
      ...(asalNetwork
        ? {
            memberOf: {
              "@id": `${ORG_URL}/#network-${slugify(asalNetwork.name)}`,
            },
          }
        : {}),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Community health, education and advocacy programmes",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Okoa Mama na Mtoto — maternal and newborn health advocacy",
              serviceType: "Maternal and newborn health",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Girls' education, menstrual health and school retention",
              serviceType: "Girls' education and menstrual hygiene management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gender-based violence prevention and survivor support",
              serviceType: "Gender-based violence prevention",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Family planning and child-spacing advocacy",
              serviceType: "Family planning advocacy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pastoralist community education and resilience",
              serviceType: "Community education and resilience",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: ORG_FOUNDER,
      jobTitle: "Founder and Director",
      worksFor: { "@id": orgId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: ORG_URL,
      name: ORG_NAME,
      alternateName: ORG_ALTERNATE_NAMES,
      description: ORG_DESCRIPTION,
      inLanguage: "en-KE",
      publisher: { "@id": orgId },
      copyrightHolder: { "@id": orgId },
    },
    ...partnerNodes,
  ],
};

/**
 * Page-level graph for a topic: an Article plus its BreadcrumbList.
 *
 * datePublished is deliberately omitted. The dates on these pages are event
 * dates, not publication dates, and must not be presented as the latter.
 */
export function topicSchema(path: string) {
  const topic = TOPICS.find((item) => item.href === path);
  if (!topic) return null;

  const url = canonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: topic.title,
        description: topic.description,
        image: canonicalUrl(ogImagePath(path)),
        url,
        mainEntityOfPage: url,
        inLanguage: "en-KE",
        isPartOf: { "@id": websiteId },
        author: { "@id": orgId },
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ORG_NAME, item: `${ORG_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Topics",
            item: canonicalUrl("/topics"),
          },
          { "@type": "ListItem", position: 3, name: topic.title, item: url },
        ],
      },
    ],
  };
}
