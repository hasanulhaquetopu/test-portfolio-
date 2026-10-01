"use client";

import { useEffect, useRef } from "react";

// Page wrapper that drives everything CSS can't do alone: scroll reveals,
// the scroll progress bar and the pointer-following effects. All of it is
// opt-in through data attributes, so the markup stays readable without JS.
export default function Motion({ children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    const cleanups = [];
    const listen = (target, type, handler, options) => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    // Scroll progress + "scrolled" flag for the sticky nav.
    const bar = root.querySelector("[data-progress]");
    let scrollFrame = 0;
    const updateScroll = () => {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      root.toggleAttribute("data-scrolled", window.scrollY > 8);
    };
    const onScroll = () => {
      scrollFrame ||= requestAnimationFrame(updateScroll);
    };
    listen(window, "scroll", onScroll, { passive: true });
    listen(window, "resize", onScroll);
    onScroll();
    cleanups.push(() => cancelAnimationFrame(scrollFrame));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    // Scroll reveals. Anything already on screen is marked "instant" so it
    // never flashes out and back in; the rest animates as it enters.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          observer.unobserve(entry.target);
        }
      },
      // No bottom rootMargin: content at the very end of the page could then
      // never intersect and would stay hidden.
      { threshold: 0.15 },
    );
    for (const el of root.querySelectorAll("[data-reveal]")) {
      if (el.hasAttribute("data-in")) continue;
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.setAttribute("data-in", "instant");
      } else {
        observer.observe(el);
      }
    }
    root.setAttribute("data-motion", "on");
    cleanups.push(() => observer.disconnect());

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      // Magnetic buttons: lean towards the pointer while it's over them.
      let magnet = null;
      let magnetRect = null;
      const release = () => {
        if (!magnet) return;
        magnet.style.setProperty("--mx", "0px");
        magnet.style.setProperty("--my", "0px");
        magnet = null;
      };

      // Parallax: expose the pointer position as --px / --py in [-1, 1].
      const zones = [...root.querySelectorAll("[data-parallax]")];
      const setVar = (el, name, value) => {
        if (el.style.getPropertyValue(name) !== value) el.style.setProperty(name, value);
      };
      let pointerFrame = 0;
      let lastEvent = null;
      const updatePointer = () => {
        pointerFrame = 0;
        const { target, clientX, clientY } = lastEvent;

        const next = target.closest?.("[data-magnetic]") ?? null;
        if (next !== magnet) {
          release();
          magnet = next;
          magnetRect = next?.getBoundingClientRect();
        }
        if (magnet) {
          const x = clientX - magnetRect.left - magnetRect.width / 2;
          const y = clientY - magnetRect.top - magnetRect.height / 2;
          magnet.style.setProperty("--mx", `${(x * 0.25).toFixed(1)}px`);
          magnet.style.setProperty("--my", `${(y * 0.35).toFixed(1)}px`);
        }

        for (const zone of zones) {
          const rect = zone.getBoundingClientRect();
          const inside =
            clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom;
          const px = inside ? ((clientX - rect.left) / rect.width) * 2 - 1 : 0;
          const py = inside ? ((clientY - rect.top) / rect.height) * 2 - 1 : 0;
          setVar(zone, "--px", px.toFixed(2));
          setVar(zone, "--py", py.toFixed(2));
        }
      };
      listen(root, "pointermove", (event) => {
        lastEvent = event;
        pointerFrame ||= requestAnimationFrame(updatePointer);
      });
      listen(root, "pointerleave", () => {
        release();
        for (const zone of zones) {
          setVar(zone, "--px", "0.00");
          setVar(zone, "--py", "0.00");
        }
      });
      cleanups.push(() => cancelAnimationFrame(pointerFrame));

      // Spotlight fills grow from where the pointer enters and shrink back
      // to where it leaves.
      const aim = (event) => {
        const el = event.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--sx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--sy", `${event.clientY - rect.top}px`);
      };
      for (const el of root.querySelectorAll("[data-spot]")) {
        listen(el, "pointerenter", aim);
        listen(el, "pointerleave", aim);
      }
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
