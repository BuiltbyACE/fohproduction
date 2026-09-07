"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import { TOPICS } from "@/lib/topics";
import type { Topic } from "@/lib/topics";
import { useReveal } from "@/lib/use-reveal";

function TopicCard({ topic }: { topic: Topic }) {
  const ref = useReveal<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      className="topic-card rv"
      href={topic.href}
      aria-label={`${topic.title}. ${topic.description}`}
    >
      <div className="topic-media">
        <Image src={topic.image} alt={topic.alt} fill sizes="50vw" loading="lazy" />
      </div>
      <div className="topic-body">
        <span className="ttag">{topic.tag}</span>
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
        <span className="topic-link">
          Read the story
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}

export default function TopicsSection() {
  return (
    <div className="topic-grid">
      {TOPICS.map((topic) => (
        <TopicCard key={topic.href} topic={topic} />
      ))}
    </div>
  );
}