"use client";

import { useEffect, useRef } from "react";

type Props = {
  from: number;
  to: number;
};

export default function FpImpact({ from, to }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = (value: number) => {
      el.textContent = value.toFixed(1);
    };

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          if (reduced) {
            render(to);
            return;
          }
          const t0 = performance.now();
          const duration = 1900;
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            render(from + (to - from) * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to]);

  return <span ref={ref}>{from.toFixed(1)}</span>;
}