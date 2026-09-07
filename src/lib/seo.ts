import type { Metadata } from "next";

// Single source of truth for the site's origin. Replace with the real
// production URL before launch — canonical, Open Graph, sitemap and robots
// all build from this.
export const SITE_URL = "http://localhost:3111";

export const SITE_NAME = "Fountain of Hope — Garissa County, Kenya";

export const SITE_BLURB =
  "One story, told topic by topic. Fountain of Hope is a woman-led community organization working beside the people of Garissa County in health and education.";

const abs = (path: string) => `${SITE_URL}${path}`;

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