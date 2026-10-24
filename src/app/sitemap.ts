import type { MetadataRoute } from "next";
import { TOPICS } from "@/lib/topics";
import { SITE_URL } from "@/lib/seo";

const toUrl = (path: string) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (!SITE_URL) {
    // Relative URLs are not ideal for sitemaps, but avoid build failure.
    // Set NEXT_PUBLIC_SITE_URL in production.
    return cleanPath;
  }
  return `${SITE_URL}${cleanPath}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: toUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toUrl("/our-story"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const topics: MetadataRoute.Sitemap = TOPICS.map((topic) => ({
    url: toUrl(topic.href),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...home, ...topics];
}