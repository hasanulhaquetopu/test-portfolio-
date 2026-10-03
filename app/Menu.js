"use client";

import { useEffect, useState } from "react";
import { Close, Slashes } from "./Art";
import styles from "./page.module.css";

// The "//" button in the nav and the full-screen menu it opens.
export default function Menu({ links, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.burger}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(true)}
      >
        <Slashes size={36} strokeWidth={1.4} />
      </button>

      <div
        id="site-menu"
        className={`${styles.canvas} ${open ? styles.canvasOpen : ""}`}
        inert={!open}
      >
        <div className={styles.canvasTop}>
          <p className={styles.canvasLogo}>
            HASANUL HAQUE TOPU
            <span className={styles.canvasTag}>PRODUCT &amp; UI/UX DESIGNER</span>
          </p>
          <button
            type="button"
            className={styles.canvasClose}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <Close size={28} />
          </button>
        </div>
        <nav className={styles.canvasLinks}>
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.canvasLink}
              style={{ "--i": i }}
              onClick={() => setOpen(false)}
            >
              <span className={styles.swap}>
                <span>{link.label}</span>
                <span aria-hidden="true">{link.label}</span>
              </span>
            </a>
          ))}
        </nav>
        <div className={styles.canvasBottom}>{children}</div>
      </div>
    </>
  );
}
