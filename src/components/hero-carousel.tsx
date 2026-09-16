"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowNextIcon, ArrowPrevIcon } from "./icons";

const SLIDES = [
  {
    src: "/images/GyucnxiXcAA59gF.jpg",
    alt: "Garissa county health leadership at the Okoa Mama na Mtoto working meeting",
  },
  {
    src: "/images/homehero2.jpg",
    alt: "Fountain of Hope — photograph from the field in Garissa County",
  },
  {
    src: "/images/Gtu4Ql-WcAABazj.jpg",
    alt: "Fountain of Hope — photograph from the field in Garissa County",
  },
];

const AUTO = 6000;

export default function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const barRef = useRef<HTMLElement>(null);
  const reducedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setCur((c) => (c + 1) % SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setCur((c) => (c - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    if (reducedRef.current) return;
    timerRef.current = setInterval(
      () => setCur((c) => (c + 1) % SLIDES.length),
      AUTO
    );
  }, [stop]);

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
      bar.style.transition = `width ${AUTO}ms linear`;
      bar.style.width = "100%";
    });
    return () => cancelAnimationFrame(raf);
  }, [cur]);

  const handle = useCallback(
    (fn: () => void) => {
      fn();
      start();
    },
    [start]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handle(next);
      if (event.key === "ArrowLeft") handle(prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handle, next, prev]);

  return (
    <>
      <div className="slides" aria-hidden="true">
        {SLIDES.map((slide, i) => (
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

      <div className="progress" aria-hidden="true">
        <i ref={barRef} />
      </div>

      <div className="car-out">
        <div className="car-count">
          <b>{cur + 1}</b>/<span>{SLIDES.length}</span>
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

      <div className="scroll-cue">
        <span className="line" />
        Scroll
      </div>
    </>
  );
}