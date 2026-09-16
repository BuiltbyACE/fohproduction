import type { MetadataRoute } from "next";
import { TOPICS } from "@/lib/topics";
import { SITE_URL } from "@/lib/seo";

const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/our-story`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const topics: MetadataRoute.Sitemap = TOPICS.map((topic) => ({
    url: `${SITE_URL}${topic.href}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...home, ...topics];
}