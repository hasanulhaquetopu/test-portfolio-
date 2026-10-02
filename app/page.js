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
  { value: "1+", label: "Years experience" },
  { value: "6", label: "Projects designed" },
  { value: "4", label: "Industries" },
];

const roles = ["PRODUCT DESIGNER", "UI/UX DESIGNER", "DESIGN SYSTEMS"];

const about =
  "I'm a product and UX designer from Dhaka, Bangladesh, with 1+ year of experience designing B2B SaaS, EdTech, ERP and eCommerce products. I turn dense workflows into clear, consistent interfaces in Figma, build scalable design systems, and work closely with developers from wireframe to handoff.";

const works = [
  {
    title: "Sohojogi",
    chip: "EdTech",
    art: "tasks",
    gradient: "linear-gradient(90deg, #2e2e2e, #080808)",
    href: "https://sohojogi.srcdrive.com/bn",
  },
  {
    title: "EasyCommerce",
    chip: "B2B SaaS",
    art: "shop",
    gradient: "linear-gradient(90deg, #f2c94c, #f2994a)",
    href: "https://easycommerce.dev/",
  },
  {
    title: "ERP Mobile App",
    chip: "Approvals",
    art: "erp",
    gradient: "linear-gradient(90deg, #ff8a5b, #dd360e)",
    href: "https://www.figma.com/design/kS2okb1WLPVZNQmIz357yu/Untitled?node-id=0-1&t=mlswjkWb3Y3JRAQq-1",
  },
  {
    title: "Garments PLM",
    chip: "Web App",
    art: "kit",
    gradient: "linear-gradient(90deg, #9ad1d4, #4a90a4)",
    href: "https://www.figma.com/design/Aif0pAXSFxVIrQ6oxdAtb5/PLM-Design?node-id=0-1&t=vZfzgvbw0aPqz3S3-1",
  },
];

const resume = [
  {
    number: "01",
    date: "Apr 2026 – Present",
    title: "PRODUCT DESIGNER",
    place: "SrcDrive",
    href: "https://srcdrive.com/",
    note: "Part-time",
    text: "Designed the teacher, student and parent mobile apps for Sohojogi, a school management platform used by schools, colleges and madrasas in Bangladesh, and now shaping the UX of its web apps. Also designed an executive companion app for a garments ERP and early concepts for a garments PLM system.",
  },
  {
    number: "02",
    date: "Sep 2025 – May 2026",
    title: "UI/UX DESIGNER",
    place: "Codexpert Inc.",
    href: "https://codexpert.io/",
    text: "Redesigned the EasyCommerce v1.20 dashboard and designed its v1.30 reports module with interactive charts, geo-mapping and order insights. Improved store-builder workflows in CoDesigner and redesigned the Codexpert Services page, working with developers and product managers from wireframes to dev-ready Figma handoff.",
  },
  {
    number: "03",
    date: "2023 – 2026",
    title: "B.SC. IN COMPUTER SCIENCE & ENGINEERING",
    place: "European University of Bangladesh",
    text: "CGPA 3.60 / 4.00",
  },
  {
    number: "04",
    date: "2018 – 2022",
    title: "DIPLOMA IN ELECTRICAL ENGINEERING",
    place: "Pabna Textile Engineering College",
    text: "GPA 3.49 / 4.00",
  },
];

const courses = {
  ostad: "https://drive.google.com/file/d/1am7zRfDMVBtz_pKJIFYN-lN4rmqylvKO/view",
  grameenphone: "https://www.grameenphone.academy/cert/d99150a5cf35",
};

const services = [
  {
    number: "01",
    title: "PRODUCT DESIGN",
    text: "Mobile apps designed end to end, from the first user flows to dev-ready Figma files.",
    tags: ["Mobile Apps", "User Flows", "Prototyping"],
  },
  {
    number: "02",
    title: "WEB APP & SAAS UX",
    text: "Admin consoles, analytics dashboards and other complex web apps made clear and consistent.",
    tags: ["Dashboards", "B2B SaaS", "Responsive"],
  },
  {
    number: "03",
    title: "DESIGN SYSTEMS",
    text: "Scalable design systems in Figma, built on components and variables for a clean developer handoff.",
    tags: ["Components", "Variables", "Auto Layout"],
  },
];

const steps = [
  { number: "01", tag: "Research", title: "DISCOVER", icon: "discover", text: "User research to understand the people, goals and workflows behind the product." },
  { number: "02", tag: "Flows & IA", title: "STRUCTURE", icon: "strategy", text: "User flows and information architecture that make complex tasks simple." },
  { number: "03", tag: "Figma", title: "DESIGN", icon: "design", text: "Wireframes, prototypes and polished UI, refined through usability testing." },
  { number: "04", tag: "Dev-ready", title: "HANDOFF", icon: "delivery", text: "Dev-ready Figma files and close work with developers through to release." },
];

const skills = [
  "FIGMA",
  "FIGJAM",
  "DESIGN SYSTEMS",
  "PROTOTYPING",
  "WIREFRAMING",
  "USER RESEARCH",
  "USER FLOWS",
  "USABILITY TESTING",
];

const socials = [
  { label: "Dribbble", href: "https://dribbble.com/hasanul-haque-topu" },
  { label: "LinkedIn", href: "https://linkedin.com/in/topu-614a01380" },
];

const email = "hasanulhaque100@gmail.com";

const cv = "/Hasanul_Haque_Topu_CV.pdf";

function Button({ href, variant = "dark", children, ...props }) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`} data-magnetic {...props}>
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
              I design mobile apps end to end and shape the UX of complex web
              apps — turning dense workflows into clear, consistent interfaces.
            </p>
            <div className={styles.ctas}>
              <Button href="#contact" variant="accent">
                LET&apos;S TALK
              </Button>
              <Button href={cv} variant="outline" download>
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
          <Button href="#experience">LEARN MORE ABOUT ME</Button>
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
            <Button
              href="https://dribbble.com/hasanul-haque-topu"
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ALL PROJECTS
            </Button>
          </div>
        </div>
        <div className={styles.grid}>
          {works.map((work, i) => (
            <a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className={styles.work}
              data-reveal="up"
              style={{ "--i": i }}
            >
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
            </a>
          ))}
        </div>
      </section>

      <section className={styles.section} id="experience">
        <div className={styles.sectionHeader}>
          <div className={styles.heading}>
            <Eyebrow>RESUME</Eyebrow>
            <h2 className={styles.title} data-reveal="lines">
              <Lines lines={["EXPERIENCE", "& EDUCATION"]} />
            </h2>
          </div>
          <p className={styles.headerNote} data-reveal="up">
            Also trained in UI/UX Design at{" "}
            <a href={courses.ostad} target="_blank" rel="noreferrer">
              Ostad
            </a>{" "}
            and Design Systems at{" "}
            <a href={courses.grameenphone} target="_blank" rel="noreferrer">
              Grameenphone Academy
            </a>
            .
          </p>
        </div>
        <div className={styles.resume}>
          {resume.map((item, i) => (
            <article key={item.number} className={styles.step} data-reveal="up" style={{ "--i": i }}>
              <div className={styles.cardTop}>
                <p className={styles.stepNumber}>{item.number}</p>
                <span className={styles.chip}>{item.date}</span>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepPlace}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.place}
                  </a>
                ) : (
                  item.place
                )}
                {item.note && ` · ${item.note}`}
              </p>
              <p className={styles.stepText}>{item.text}</p>
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
                <span className={styles.chip}>{step.tag}</span>
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
                Product &amp; UI/UX designer in Dhaka, Bangladesh, turning
                complex workflows into clear interfaces.
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
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
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
