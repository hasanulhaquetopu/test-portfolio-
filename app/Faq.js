"use client";

import { useState } from "react";
import styles from "./page.module.css";

// Plus sign whose vertical bar rotates away to leave a minus.
function FaqIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 8h10" />
      <path className={styles.faqIconBar} d="M8 3v10" />
    </svg>
  );
}

const questions = [
  {
    question: "What services do you offer?",
    answer:
      "Website development, UI/UX design in Figma and landing pages — from design to a live, responsive site.",
  },
  {
    question: "How can I hire you?",
    answer:
      "Send me an email with a few details about your project and I'll reply within 24 hours to plan the next steps.",
  },
  {
    question: "What is your working process?",
    answer:
      "Four simple steps: discover your goals, plan the strategy, design the UI in Figma, then build, test and deliver.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A typical website takes around two to three weeks, depending on its size and how quickly feedback comes in.",
  },
  {
    question: "Which tools do you use?",
    answer:
      "JavaScript, React, HTML5, CSS3 and Tailwind for building, Figma for design, and Git and Node.js for workflow.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.questions}>
      {questions.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
            data-reveal="up"
            style={{ "--i": i }}
          >
            <button
              type="button"
              className={styles.faqButton}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className={styles.faqQuestion}>{item.question}</span>
              <span className={styles.faqToggle}>
                <FaqIcon />
              </span>
            </button>
            {/* Always rendered so the panel can animate its height. */}
            <div id={`faq-answer-${i}`} className={styles.faqPanel}>
              <div className={styles.faqPanelInner}>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
