import { TOPICS } from "@/lib/topics";
import { SITE_BLURB } from "@/lib/seo";
import {
  EXTERNAL_STORY_LINKS,
  ORG_EMAIL,
  ORG_FOCUS_AREAS,
  ORG_NAME,
  ORG_PHONE_DISPLAY,
  ORG_URL,
  PARTNER_LINKS,
  REGISTRY_LINKS,
  SOCIAL_PROFILES,
} from "@/lib/organization";

export const dynamic = "force-static";

/**
 * llms.txt — a concise, machine-readable map of the organization and its
 * published stories for AI answer engines and research crawlers.
 * Spec: https://llmstxt.org/
 */
export function GET() {
  const base = ORG_URL;
  const absolute = (path: string) => `${base}${path}`;

  const lines = [
    `# ${ORG_NAME}`,
    "",
    `> ${SITE_BLURB}`,
    "",
    "Fountain of Hope is a woman-led, community-rooted NGO based in Garissa County, Kenya. It works with pastoralist communities on maternal and newborn health, girls' education, menstrual health, gender-based violence prevention, family planning advocacy and community resilience.",
    "",
    "## Official links",
    `- Website: ${base}`,
    `- Our story: ${absolute("/our-story")}`,
    `- Sitemap: ${absolute("/sitemap.xml")}`,
    ...SOCIAL_PROFILES.map(
      (profile) => `- ${profile.name}: ${profile.url}`
    ),
    "",
    "## Focus areas",
    ...ORG_FOCUS_AREAS.map((area) => `- ${area}`),
    "",
    "## Program stories and field notes",
    ...TOPICS.map(
      (topic) =>
        `- [${topic.title}](${absolute(topic.href)}): ${topic.description}`
    ),
    "",
    "## Partners and networks",
    ...PARTNER_LINKS.map(
      (partner) => `- [${partner.name}](${partner.url}): ${partner.relationship}`
    ),
    "",
    "## External coverage",
    ...EXTERNAL_STORY_LINKS.map(
      (story) => `- [${story.name}](${story.url}): ${story.relationship}`
    ),
    "",
    "## Registries and public institutions",
    ...REGISTRY_LINKS.map(
      (registry) =>
        `- [${registry.name}](${registry.url}): ${registry.relationship}`
    ),
    "",
    "## Contact",
    `- Email: ${ORG_EMAIL}`,
    `- Phone: ${ORG_PHONE_DISPLAY}`,
    "- Location: Garissa County, North Eastern Kenya",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
