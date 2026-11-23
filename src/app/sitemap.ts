import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { TOPICS } from "@/lib/topics";
import { CANONICAL_ORIGIN } from "@/lib/seo";

// The sitemap always advertises the official production domain, even when this
// build runs on a preview or staging URL.
const toUrl = (path: string) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_ORIGIN}${cleanPath}`;
};

const git = (...args: string[]) =>
  execFileSync("git", args, { encoding: "utf8", stdio: "pipe" }).trim();

// A shallow clone reports its newest commit for every file, which would be a
// false date. Without full history, lastmod is left out rather than guessed.
function hasFullHistory() {
  try {
    return git("rev-parse", "--is-shallow-repository") === "false";
  } catch {
    return false;
  }
}

const FULL_HISTORY = hasFullHistory();

/** Date of the last commit that edited this route's page file. */
function lastModified(path: string) {
  if (!FULL_HISTORY) return undefined;
  const file = path === "/" ? "src/app/page.tsx" : `src/app${path}/page.tsx`;
  try {
    return git("log", "-1", "--format=%cI", "--", file) || undefined;
  } catch {
    return undefined;
  }
}

const entry = (
  path: string,
  changeFrequency: "weekly" | "monthly",
  priority: number,
): MetadataRoute.Sitemap[number] => ({
  url: toUrl(path),
  lastModified: lastModified(path),
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", "weekly", 1),
    entry("/fountain-of-hope", "monthly", 0.9),
    entry("/our-story", "monthly", 0.9),
    entry("/topics", "monthly", 0.9),
    entry("/support-us", "monthly", 0.8),
    entry("/contact", "monthly", 0.8),
    ...TOPICS.map((topic) => entry(topic.href, "monthly", 0.8)),
  ];
}
