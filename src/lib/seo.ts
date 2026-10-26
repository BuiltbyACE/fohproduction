import type { Metadata } from "next";

// Single source of truth for the site's public production origin. Canonical
// URLs, JSON-LD, sitemap and robots always use this origin — never a preview,
// staging or mirror deployment URL.
export const CANONICAL_ORIGIN = "https://fountainofhope.or.ke";

function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (envUrl && typeof envUrl === "string" && envUrl.trim()) {
    const url = envUrl.trim().startsWith("http") ? envUrl.trim() : `https://${envUrl.trim()}`;
    return url.replace(/\/$/, "");
  }

  // Fallback for local/dev environments when env not set
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  // Production fallback to the verified official origin. This keeps canonical,
  // sitemap, Open Graph and JSON-LD URLs absolute even if the deployment is
  // missing NEXT_PUBLIC_SITE_URL at build time.
  return CANONICAL_ORIGIN;
}

export const SITE_URL = getSiteUrl();

const cleanPath = (path: string) => (path.startsWith("/") ? path : `/${path}`);

/**
 * Absolute URL on the official production domain. Use this for anything that
 * tells search engines which page is authoritative (canonical, og:url, logos,
 * sitemap, robots, JSON-LD), so staging subdomains can never compete.
 */
export const canonicalUrl = (path: string) =>
  `${CANONICAL_ORIGIN}${cleanPath(path)}`;

export const logoUrl = canonicalUrl("/fohlogo.png");

export const SITE_NAME = "Fountain of Hope — Garissa County, Kenya";

export const SITE_BLURB =
  "Fountain of Hope is a woman-led community organization in Garissa County, Kenya working beside communities in maternal health, menstrual hygiene, education, and community resilience.";

type PageMeta = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

export function makeMetadata({
  path,
  title,
  description,
  image = "/images/GqpdGYJXcAAivls.jpg",
  type = "article",
}: PageMeta): Metadata {
  const canonical = canonicalUrl(path);
  const ogImage = canonicalUrl(image);
  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_KE",
      type,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default makeMetadata;