"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.css";

// Slide the white pill under the link at `index`.
function movePill(menu, index) {
  const pill = menu.firstElementChild;
  const link = menu.querySelectorAll("a")[index];
  if (!link) return;
  pill.style.width = `${link.offsetWidth}px`;
  pill.style.transform = `translateX(${link.offsetLeft}px)`;
}

export default function NavMenu({ links }) {
  const [active, setActive] = useState(0);
  const menuRef = useRef(null);

  // Scroll spy: the active link is the last section that has passed the
  // upper third of the viewport.
  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = 0;
      sections.forEach((section, i) => {
        if (section && section.getBoundingClientRect().top <= line) current = i;
      });
      setActive(atBottom ? sections.length - 1 : current);
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [links]);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    movePill(menu, active);
    // Link widths change when the web font swaps in.
    const resize = new ResizeObserver(() => movePill(menu, active));
    resize.observe(menu);
    // Enable the pill (and its transition) only once it's in place.
    const frame = requestAnimationFrame(() => menu.setAttribute("data-ready", ""));
    return () => {
      resize.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [active]);

  return (
    <nav
      ref={menuRef}
      className={styles.menu}
      onPointerLeave={(event) => movePill(event.currentTarget, active)}
    >
      <span className={styles.menuPill} aria-hidden="true" />
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          className={`${styles.menuLink} ${i === active ? styles.menuLinkActive : ""}`}
          aria-current={i === active ? "true" : undefined}
          onPointerEnter={() => movePill(menuRef.current, i)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
