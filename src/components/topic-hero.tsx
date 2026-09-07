"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import { ArrowDownIcon, ArrowNextIcon, ArrowPrevIcon } from "./icons";

export type HeroSlide = { src: string; alt: string };

type Fieldnote = { tag: string; date: string; text: string; src: string };

type Props = {
  slides: HeroSlide[];
  auto?: number;
  ariaLabel: string;
  crumbsHere: string;
  kickerTop: string;
  kickerSub: string;
  title: React.ReactNode;
  sub: string;
  fieldnote?: Fieldnote;
};

export default function TopicHero({
  slides,
  auto = 6000,
  ariaLabel,
  crumbsHere,
  kickerTop,
  kickerSub,
  title,
  sub,
  fieldnote,
}: Props) {
  const count = slides.length;
  const [cur, setCur] = useState(0);
  const barRef = useRef<HTMLElement>(null);
  const reducedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setCur((c) => (c + 1) % count),
    [count]
  );
  const prev = useCallback(
    () => setCur((c) => (c - 1 + count) % count),
    [count]
  );

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    if (reducedRef.current || count < 2 || !auto) return;
    timerRef.current = setInterval(
      () => setCur((c) => (c + 1) % count),
      auto
    );
  }, [stop, auto, count]);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    start();
    return stop;
  }, [start, stop]);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
    const raf = requestAnimationFrame(() => {
      if (reducedRef.current) return;
      bar.style.transition = `width ${auto}ms linear`;
      bar.style.width = "100%";
    });
    return () => cancelAnimationFrame(raf);
  }, [cur, auto]);

  const handle = useCallback(
    (fn: () => void) => {
      fn();
      start();
    },
    [start]
  );

  useEffect(() => {
    if (count < 2) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handle(next);
      if (event.key === "ArrowLeft") handle(prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, handle, next, prev]);

  return (
    <section className="hero" id="top" aria-label={ariaLabel}>
      <div className="slides" aria-hidden="true">
        {slides.map((slide, i) => (
          <div className={i === cur ? "slide on" : "slide"} key={slide.src}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="progress" aria-hidden="true">
          <i ref={barRef} />
        </div>
      )}

      <div className="hero-inner wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Fountain of Hope</Link>
          <span className="sep">/</span>
          <Link href="/#topics">Topics</Link>
          <span className="sep">/</span>
          <span className="here">{crumbsHere}</span>
        </nav>
        <div className="hero-kicker">
          <span style={{ color: "#FF9CBE", fontWeight: 700 }}>
            {kickerTop}
          </span>
          <span className="dot" aria-hidden="true" />
          <span>{kickerSub}</span>
        </div>
        <h1>{title}</h1>
        <p className="hero-sub">{sub}</p>
        <div className="hero-ctas">
          <a className="btn btn--pink" href="#story">
            Read the story
            <ArrowDownIcon />
          </a>
          <Link className="btn btn--ghost" href="/#topics">
            All topics
          </Link>
        </div>

        {fieldnote && (
          <Reveal className="fieldnote">
            <div className="fn-top">
              <span className="fn-tag">{fieldnote.tag}</span>
              <span className="fn-date">{fieldnote.date}</span>
            </div>
            <p>{fieldnote.text}</p>
            <div className="fn-src">{fieldnote.src}</div>
          </Reveal>
        )}
      </div>

      {count > 1 && (
        <div className="car-out">
          <div className="car-count">
            <b>{cur + 1}</b>/<span>{count}</span>
          </div>
          <div className="car-arrows">
            <button
              className="arrow"
              aria-label="Previous photo"
              onClick={() => handle(prev)}
            >
              <ArrowPrevIcon />
            </button>
            <button
              className="arrow"
              aria-label="Next photo"
              onClick={() => handle(next)}
            >
              <ArrowNextIcon />
            </button>
          </div>
        </div>
      )}

      <div className="scroll-cue">
        <span className="line" />
        Scroll
      </div>
    </section>
  );
}