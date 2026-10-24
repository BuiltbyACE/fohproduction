import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
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