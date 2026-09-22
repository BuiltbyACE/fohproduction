"use client";

import { useEffect, useRef } from "react";
import Reveal from "./reveal";
import { IMPACT_HIGHLIGHTS } from "@/lib/portfolio-data";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const duration = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            el.textContent = Math.round(to * eased).toLocaleString("en-US");
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span className="hi-num" ref={ref}>
      0
    </span>
  );
}

export default function HomeImpact() {
  return (
    <section className="hi" aria-label="Track record highlights">
      <div className="wrap">
        <Reveal className="hi-head">
          <span className="eyebrow eyebrow--paper">
            The work behind the story
          </span>
          <h2>
            Years of work, measured in{" "}
            <em>communities reached.</em>
          </h2>
          <p>
            From maternal health and education to child protection and
            community advocacy — Fountain of Hope&apos;s work is grounded in
            documented interventions and community partnerships.
          </p>
        </Reveal>

        <div className="hi-grid">
          {IMPACT_HIGHLIGHTS.map((item) => (
            <Reveal className="hi-card" key={item.label}>
              <div className="hi-val">
                <CountUp to={item.value} />
              </div>
              <p className="hi-label">{item.label}</p>
              <span className="hi-source">{item.source}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
