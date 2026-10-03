"use client";

import { useEffect, useRef } from "react";

// Counts from 0 up to a value like "15+" the first time it scrolls into
// view. The server renders the final value, so it reads correctly without JS.
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);

  useEffect(() => {
    const text = ref.current.firstChild;
    const end = parseInt(value, 10);
    const suffix = value.replace(/^\d+/, "");
    if (!end || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 4;
          text.nodeValue = Math.round(end * eased) + suffix;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      text.nodeValue = value;
    };
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
}
