"use client";

import { useEffect, useRef } from "react";
import Reveal from "./reveal";

const STATS = [
  { to: 300000, label: "reached via community radio" },
  { to: 40, label: "women religious leaders engaged" },
  { to: 10000, label: "children supported in school" },
  { to: 1400, label: "CHVs & CBDs trained" },
];

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
    <span className="count" ref={ref}>
      0
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Impact at a glance">
      <div className="wrap stats-grid">
        {STATS.map((stat) => (
          <Reveal className="stat" key={stat.label}>
            <div className="n">
              <CountUp to={stat.to} />
              <sup>+</sup>
            </div>
            <div className="l">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}