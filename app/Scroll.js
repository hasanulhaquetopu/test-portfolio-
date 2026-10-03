"use client";

import { useEffect, useRef } from "react";

const clamp = (value) => Math.min(Math.max(value, 0), 1);

// How far through its scroll range an element is, from 0 to 1.
const progress = {
  // From entering at the bottom of the viewport to sitting in its upper half.
  enter: (rect, height) => clamp((height - rect.top) / (height * 0.6)),
  // Across its whole trip through the viewport.
  view: (rect, height) => clamp((height - rect.top) / (height + rect.height)),
  // Along a tall track whose content is pinned with position: sticky.
  pin: (rect, height) => clamp(-rect.top / Math.max(rect.height - height, 1)),
};

// Page wrapper for the scroll-linked motion. Elements opt in with
// data-scroll="enter | view | pin" and get their progress as --p, which the
// stylesheet turns into transforms. Without JS, or with reduced motion,
// nothing is pinned and everything sits in its final state.
export default function Scroll({ children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = [...root.querySelectorAll("[data-scroll]")].map((el) => ({
      el,
      measure: progress[el.dataset.scroll],
      value: null,
      text: "",
    }));
    const rows = [...root.querySelectorAll("[data-pan]")];
    root.setAttribute("data-motion", "on");

    // Horizontal rows slide by however much wider they are than their frame.
    const measureRows = () => {
      for (const row of rows) {
        const overflow = row.offsetWidth - row.parentElement.clientWidth;
        row.style.setProperty("--shift", Math.max(overflow, 0));
      }
    };

    // Values ease towards their target so wheel scrolling doesn't look stepped.
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = window.innerHeight;
      let moving = false;
      for (const item of items) {
        const target = item.measure(item.el.getBoundingClientRect(), height);
        const eased = item.value === null ? target : item.value + (target - item.value) * 0.16;
        const settled = Math.abs(target - eased) < 0.0005;
        item.value = settled ? target : eased;
        moving ||= !settled;
        const text = item.value.toFixed(4);
        if (text !== item.text) {
          item.text = text;
          item.el.style.setProperty("--p", text);
        }
      }
      if (moving) frame = requestAnimationFrame(update);
    };
    const request = () => {
      frame ||= requestAnimationFrame(update);
    };
    const onResize = () => {
      measureRows();
      request();
    };

    // Fade-up reveals for anything marked data-reveal.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    for (const el of root.querySelectorAll("[data-reveal]")) observer.observe(el);

    // Row widths change when the web fonts swap in.
    const resize = new ResizeObserver(onResize);
    for (const row of rows) resize.observe(row);

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      root.removeAttribute("data-motion");
      for (const item of items) item.el.style.removeProperty("--p");
      for (const row of rows) row.style.removeProperty("--shift");
    };
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
