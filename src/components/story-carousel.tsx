"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";
import { ArrowNextIcon, ArrowPrevIcon } from "./icons";

export type StoryFrame = {
  src: string;
  alt: string;
  caption: string;
  meta: string;
};

export default function StoryCarousel({ frames }: { frames: StoryFrame[] }) {
  const [cur, setCur] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  const count = frames.length;

  const next = () => setCur((c) => (c + 1) % count);
  const prev = () => setCur((c) => (c - 1 + count) % count);

  return (
    <div className="fn-carousel rv" ref={ref}>
      <div className="fn-slides">
        {frames.map((frame, i) => (
          <div
            className={i === cur ? "fn-slide on" : "fn-slide"}
            key={frame.src}
          >
            <span className="frame">
              Frame {String(i + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              sizes="60vw"
              loading="lazy"
            />
            <div className="cap">
              <h4>{frame.caption}</h4>
              <div className="meta">{frame.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="fn-dots" role="tablist" aria-label="Story slides">
        {frames.map((_, i) => (
          <button
            key={i}
            className={i === cur ? "on" : ""}
            role="tab"
            aria-selected={i === cur}
            aria-label={`Go to frame ${i + 1}`}
            onClick={() => setCur(i)}
          />
        ))}
      </div>
      <div className="fn-nav">
        <button className="arrow" aria-label="Previous frame" onClick={prev}>
          <ArrowPrevIcon />
        </button>
        <button className="arrow" aria-label="Next frame" onClick={next}>
          <ArrowNextIcon />
        </button>
      </div>
    </div>
  );
}