import { Fragment } from "react";
import Image from "next/image";
import {
  ArrowSwap,
  PulseDot,
  Scribble,
  SpinBadge,
  Star,
  StepIcon,
  WorkArt,
} from "./Art";
import CountUp from "./CountUp";
import Faq from "./Faq";
import Motion from "./Motion";
import NavMenu from "./NavMenu";
import styles from "./page.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "15+", label: "Projects done" },
  { value: "2+", label: "Years learning" },
  { value: "10+", label: "Happy clients" },
];

const roles = ["WEB DEVELOPER", "UI DESIGNER", "FRONTEND ENGINEER"];

const about =
  "I'm a JavaScript developer and designer from Bangladesh. I help people and brands turn ideas into modern websites — from the first Figma sketch to a fast, responsive, accessible product in the browser.";

const works = [
  { title: "Weather Dashboard", chip: "Web App", art: "weather", gradient: "linear-gradient(90deg, #ff8a5b, #dd360e)" },
  { title: "Task Manager", chip: "React App", art: "tasks", gradient: "linear-gradient(90deg, #2e2e2e, #080808)" },
  { title: "Shop Landing Page", chip: "UI Design", art: "shop", gradient: "linear-gradient(90deg, #f2c94c, #f2994a)" },
  { title: "Portfolio Kit", chip: "Figma System", art: "kit", gradient: "linear-gradient(90deg, #9ad1d4, #4a90a4)" },
];

const services = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    text: "Responsive, fast websites built with modern JavaScript, React and clean code.",
    tags: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "UI/UX DESIGN",
    text: "User-focused interfaces and prototypes designed in Figma, ready for developers.",
    tags: ["Figma", "Wireframes", "Prototypes"],
  },
  {
    number: "03",
    title: "LANDING PAGES",
    text: "High-converting landing pages for products, portfolios and small businesses.",
    tags: ["Webflow", "Tailwind", "SEO"],
  },
];

const steps = [
  { number: "01", days: "3 Days", title: "DISCOVER", icon: "discover", text: "Understand your goals, audience and requirements." },
  { number: "02", days: "4 Days", title: "STRATEGY", icon: "strategy", text: "Plan structure, content and the right tech stack." },
  { number: "03", days: "5 Days", title: "DESIGN", icon: "design", text: "Craft the UI in Figma and refine it with your feedback." },
  { number: "04", days: "3 Days", title: "DELIVERY", icon: "delivery", text: "Build, test and launch a fast, polished website." },
];

const skills = ["JAVASCRIPT", "REACT", "FIGMA", "HTML5", "CSS3", "TAILWIND", "NODE.JS", "GIT"];

const socials = ["GitHub", "LinkedIn", "Dribbble", "Behance"];

const email = "hasanulhaque100@gmail.com";

function Button({ href, variant = "dark", children }) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`} data-magnetic>
      <span className={styles.buttonLabel}>{children}</span>
      <ArrowSwap />
    </a>
  );
}

function Eyebrow({ children }) {
  return (
    <div className={styles.eyebrow} data-reveal="up">
      <PulseDot />
      <span>{children}</span>
    </div>
  );
}

// Each line sits in its own clipping box so it can slide up into view.
function Lines({ lines }) {
  return lines.map((line, i) => (
    <span key={line} className={styles.line}>
      <span className={styles.lineInner} style={{ "--i": i }}>
        {line}
      </span>
    </span>
  ));
}

function Words({ text }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      <span className={styles.word} style={{ "--i": i }}>
        {word}
      </span>{" "}
    </Fragment>
  ));
}

function SkillRow({ hidden }) {
  return (
    <div className={styles.marqueeGroup} aria-hidden={hidden}>
      {skills.map((skill) => (
        <span key={skill} className={styles.marqueeItem}>
          <span className={styles.marqueeWord}>{skill}</span>
          <Star className={styles.marqueeStar} />
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <Motion className={styles.page}>
      <div className={styles.navBar}>
        <header className={styles.nav}>
          <a href="#home" className={styles.logo}>
            HASANUL<span className={styles.accent}>.</span>
          </a>
          <NavMenu links={navLinks} />
          <Button href="#projects">SEE MY WORK</Button>
        </header>
        <span className={styles.progress} data-progress aria-hidden="true" />
      </div>

      <section className={styles.hero} id="home" data-parallax>
        <div className={styles.heroRow}>
          <div className={styles.heroText}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span className={styles.greetingText}>Hello there, I&apos;m</span>
            </div>
            <h1 className={styles.heroTitle}>
              <Lines lines={["HASANUL", "HAQUE TOPU"]} />
              <Scribble />
            </h1>
            <p className={styles.heroLead}>
              I design and build thoughtful digital experiences — clean
              interfaces, fast websites and products people enjoy using.
            </p>
            <div className={styles.ctas}>
              <Button href="#contact" variant="accent">
                LET&apos;S TALK
              </Button>
              <Button href="#contact" variant="outline">
                DOWNLOAD CV
              </Button>
            </div>
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <p className={styles.statValue}>
                    <CountUp value={stat.value} />
                  </p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroPhoto}>
              <div className={styles.heroCircle}>
                <Image src="/v2/circle.svg" alt="" fill unoptimized />
              </div>
              <div className={styles.heroImage}>
                <Image
                  src="/v2/photo.png"
                  alt="Hasanul Haque Topu"
                  fill
                  sizes="500px"
                  priority
                />
              </div>
              <div className={styles.roleTag}>
                <PulseDot color="#22c55e" />
                <span>Available for work</span>
              </div>
            </div>
            <Star className={styles.heroStar} />
            <SpinBadge />
          </div>
        </div>
      </section>

      <section className={styles.intro} id="about">
        <Eyebrow>ABOUT ME</Eyebrow>
        <h2 className={styles.introTitle} data-reveal="lines">
          <Lines lines={["DIGITAL PORTFOLIO"]} />
        </h2>
        <div className={styles.roles}>
          {roles.map((role, i) => (
            <span key={role} className={styles.role} data-reveal="pop" style={{ "--i": i }}>
              {role}
            </span>
          ))}
        </div>
        <p className={styles.introText} data-reveal="words">
          <Words text={about} />
        </p>
        <div data-reveal="up">
          <Button href="#services">LEARN MORE ABOUT ME</Button>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionHeader}>
          <div className={styles.heading}>
            <Eyebrow>PORTFOLIO</Eyebrow>
            <h2 className={styles.title} data-reveal="lines">
              <Lines lines={["FEATURED WORKS"]} />
            </h2>
          </div>
          <div data-reveal="up">
            <Button href="#projects" variant="outline">
              VIEW ALL PROJECTS
            </Button>
          </div>
        </div>
        <div className={styles.grid}>
          {works.map((work, i) => (
            <article key={work.title} className={styles.work} data-reveal="up" style={{ "--i": i }}>
              <div
                className={styles.workImage}
                style={{ backgroundImage: work.gradient }}
              >
                <WorkArt kind={work.art} />
                <span className={styles.workView}>
                  <ArrowSwap />
                </span>
              </div>
              <div className={styles.workMeta}>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <span className={styles.chip}>{work.chip}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionInner}>
          <div className={styles.heading}>
            <Eyebrow>MY SERVICES</Eyebrow>
            <h2 className={`${styles.title} ${styles.titleLight}`} data-reveal="lines">
              <Lines lines={["HOW CAN I HELP YOU"]} />
            </h2>
          </div>
          <div className={`${styles.grid} ${styles.serviceGrid}`}>
            {services.map((service, i) => (
              <article
                key={service.title}
                className={`${styles.service} ${i === 0 ? styles.serviceActive : ""}`}
                data-reveal="up"
                data-spot
                style={{ "--i": i }}
              >
                <div className={styles.cardTop}>
                  <p className={styles.serviceNumber}>{service.number}</p>
                  <span className={styles.serviceArrow}>
                    <ArrowSwap />
                  </span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceText}>{service.text}</p>
                <div className={styles.serviceTags}>
                  {service.tags.map((tag) => (
                    <span key={tag} className={styles.darkChip}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.heading}>
            <Eyebrow>PROCESS</Eyebrow>
            <h2 className={styles.title} data-reveal="lines">
              <Lines lines={["MY WORK PROCESS"]} />
            </h2>
          </div>
          <p className={styles.headerNote} data-reveal="up">
            A simple, transparent process so you always know what&apos;s
            happening and what comes next.
          </p>
        </div>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <article key={step.number} className={styles.step} data-reveal="up" style={{ "--i": i }}>
              <div className={styles.cardTop}>
                <p className={styles.stepNumber}>{step.number}</p>
                <span className={styles.chip}>{step.days}</span>
              </div>
              <div className={styles.cardTop}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <StepIcon kind={step.icon} />
              </div>
              <p className={styles.stepText}>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <SkillRow />
          <SkillRow hidden />
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.faqRow}>
          <div className={styles.faqLeft}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className={styles.title} data-reveal="lines">
              <Lines lines={["YOUR COMMON", "INQUIRIES"]} />
            </h2>
            <p className={styles.faqNote} data-reveal="up">
              Can&apos;t find what you&apos;re looking for? Send me a message
              and I&apos;ll reply within 24 hours.
            </p>
            <div data-reveal="up">
              <Button href={`mailto:${email}`} variant="accent">
                CONTACT ME
              </Button>
            </div>
          </div>
          <Faq />
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerHeading}>
              <Eyebrow>HAVE A PROJECT IN MIND?</Eyebrow>
              <h2 className={styles.footerTitle} data-reveal="lines">
                <Lines lines={["LET'S WORK", "TOGETHER"]} />
              </h2>
              <div data-reveal="up">
                <a href={`mailto:${email}`} className={styles.footerEmail}>
                  {email}
                </a>
              </div>
            </div>
            <div data-reveal="up">
              <Button href={`mailto:${email}`} variant="accent">
                CONTACT ME
              </Button>
            </div>
          </div>

          <div className={styles.footerLinks} data-reveal="up">
            <div className={styles.brand}>
              <a href="#home" className={styles.brandLogo}>
                HASANUL<span className={styles.accent}>.</span>
              </a>
              <p className={styles.brandText}>
                Web developer &amp; UI designer crafting clean digital
                experiences.
              </p>
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>PAGES</p>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className={styles.footerCol}>
              <p className={styles.footerColTitle}>SOCIAL</p>
              {socials.map((social) => (
                <a key={social} href="#contact">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 Hasanul Haque Topu. All rights reserved.</p>
            <p>Designed in Figma</p>
          </div>
        </div>
      </footer>
    </Motion>
  );
}
