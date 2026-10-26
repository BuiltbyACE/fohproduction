import type { Metadata } from "next";

// Single source of truth for the site's origin. Set NEXT_PUBLIC_SITE_URL
// in production (e.g. https://fountainofhope.or.ke) — canonical, Open Graph,
// sitemap and robots all build from this.
export const CANONICAL_ORIGIN = "https://fountainofhope.or.ke";

function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_ORIGIN ||
    process.env.VERCEL_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL;

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

export const SITE_NAME = "Fountain of Hope — Garissa County, Kenya";

export const SITE_BLURB =
  "Fountain of Hope is a woman-led community organization in Garissa County, Kenya working beside communities in maternal health, menstrual hygiene, education, and community resilience.";

const abs = (path: string) => {
  if (!SITE_URL) {
    // If no origin is configured, return path as-is for relative URLs
    // but this should be avoided in production.
    return path.startsWith("/") ? path : `/${path}`;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
};

export const logoUrl = abs("/fohlogo.png");

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
  const canonical = abs(path);
  const ogImage = abs(image);
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