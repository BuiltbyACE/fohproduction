"use client";

import Image from "next/image";
import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import { useReveal } from "@/lib/use-reveal";
import { ArrowRightIcon } from "./icons";

export default function MoreStories() {
  const headRef = useReveal<HTMLDivElement>();
  const more = TOPICS.slice(3);

  return (
    <>
      <div className="more-head rv" ref={headRef}>
        <div>
          <span className="eyebrow eyebrow--light">
            More stories from the field
          </span>
          <h3>
            Keep <em>reading.</em>
          </h3>
        </div>
        <p>
          New topics as we pull them from our field notes and @Fountain_FOH
          posts.
        </p>
      </div>
      <div className="more-strip">
        {more.map((t) => (
          <MoreCard key={t.href} topic={t} />
        ))}
      </div>
    </>
  );
}

function MoreCard({ topic }: { topic: (typeof TOPICS)[number] }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link href={topic.href} className="more-card rv" ref={ref}>
      <div className="more-thumb">
        <Image src={topic.image} alt={topic.alt} fill sizes="150px" loading="lazy" />
      </div>
      <div className="more-body">
        <span className="mtag">{topic.tag}</span>
        <h4>{topic.title}</h4>
        <span className="mlnk">
          Read the story <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}