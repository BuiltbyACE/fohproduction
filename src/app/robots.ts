import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Explicitly welcoming the major search and AI crawlers makes the site's
// indexability intent unambiguous. Keep /_next/ crawlable: search engines
// need the CSS/JS assets to render the page correctly.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Diffbot",
];

export default function robots(): MetadataRoute.Robots {
  const crawlRule = {
    allow: "/",
    disallow: ["/api/"],
  };

  const rules: MetadataRoute.Robots["rules"] = [
    { userAgent: "*", ...crawlRule },
    ...AI_CRAWLERS.map((userAgent) => ({ userAgent, ...crawlRule })),
  ];

  const sitemap = SITE_URL ? `${SITE_URL}/sitemap.xml` : "/sitemap.xml";

  return SITE_URL
    ? {
        rules,
        sitemap,
        host: SITE_URL,
      }
    : {
        rules,
        sitemap,
      };
}