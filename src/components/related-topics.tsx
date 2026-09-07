"use client";

import Link from "next/link";
import { useReveal } from "@/lib/use-reveal";
import type { Topic } from "@/lib/topics";
import { ArrowRightIcon } from "./icons";

function RelCard({ topic }: { topic: Topic }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link ref={ref} className="rel rv" href={topic.href}>
      <div className="rel-num">→ {topic.tag}</div>
      <h4>{topic.title}</h4>
      <p>{topic.description}</p>
      <span className="lnk">
        Read the story
        <ArrowRightIcon />
      </span>
    </Link>
  );
}

function HomeCard() {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      className="rel rv"
      href="/"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--navy)",
        borderColor: "var(--navy)",
      }}
    >
      <div className="rel-num" style={{ color: "#FF9CBE" }}>
        All topics
      </div>
      <h4 style={{ color: "#fff" }}>
        Back to the Fountain of Hope story
      </h4>
      <p style={{ color: "rgba(255,255,255,.7)" }}>
        Explore the full one-page story and every topic.
      </p>
      <span
        className="lnk"
        style={{ color: "#FF9CBE", marginTop: "auto" }}
      >
        Open the home page
        <ArrowRightIcon />
      </span>
    </Link>
  );
}

export default function RelatedTopics({
  related,
}: {
  related: Topic[];
}) {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section className="related" id="related">
      <div className="wrap">
        <div className="rel-head rv" ref={headRef}>
          <div>
            <span className="eyebrow eyebrow--paper">Keep exploring</span>
            <h2 className="h2">
              More topics from <em>the field.</em>
            </h2>
          </div>
        </div>
        <div className="rel-grid">
          {related.map((topic) => (
            <RelCard key={topic.href} topic={topic} />
          ))}
          <HomeCard />
        </div>
      </div>
    </section>
  );
}