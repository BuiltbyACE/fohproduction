import type { MetadataRoute } from "next";
import { TOPICS } from "@/lib/topics";
import { CANONICAL_ORIGIN } from "@/lib/seo";

// The sitemap always advertises the official production domain, even when this
// build runs on a preview or staging URL.
const toUrl = (path: string) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_ORIGIN}${cleanPath}`;
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