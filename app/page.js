import { Fragment } from "react";
import Image from "next/image";
import {
  AboutPattern,
  ArrowRight,
  ArrowUpRight,
  Chevron,
  Dribbble,
  LinkedIn,
  Pentagon,
  ServiceArt,
  Silk,
  StatGlyph,
  TickerGlyph,
  ToolGlyph,
  WorkArt,
} from "./Art";
import Menu from "./Menu";
import Scroll from "./Scroll";
import styles from "./page.module.css";

const email = "hasanulhaque100@gmail.com";

const cv = "/Hasanul_Haque_Topu_CV.pdf";

const dribbble = "https://dribbble.com/hasanul-haque-topu";

const logo = "// HASANUL";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const pageLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Dribbble", href: dribbble, Icon: Dribbble },
  { label: "LinkedIn", href: "https://linkedin.com/in/topu-614a01380", Icon: LinkedIn },
];

const about =
  "I’M A PRODUCT & UI/UX DESIGNER FROM DHAKA, TURNING DENSE WORKFLOWS INTO CLEAR, CONSISTENT INTERFACES";

const courses = {
  ostad: "https://drive.google.com/file/d/1am7zRfDMVBtz_pKJIFYN-lN4rmqylvKO/view",
  grameenphone: "https://www.grameenphone.academy/cert/d99150a5cf35",
};

// Newest first, so the work comes before the education.
const timeline = [
  {
    year: "2026",
    tag: "SRCDRIVE",
    color: "#ffcb68",
    art: "sun",
    text: "Product Designer at SrcDrive since Apr 2026, part-time: the Sohojogi teacher, student and parent apps, an executive app for a garments ERP and early concepts for a garments PLM system.",
  },
  {
    year: "2025",
    tag: "CODEXPERT",
    color: "#b8ff8f",
    art: "wave",
    text: "Joined Codexpert Inc. as a UI/UX Designer (Sep 2025 – May 2026): redesigned the EasyCommerce dashboard, designed its reports module and improved CoDesigner’s store-builder workflows.",
  },
  {
    year: "2023",
    tag: "B.SC. IN CSE",
    color: "#dba9ff",
    art: "lines",
    text: "Began a B.Sc. in Computer Science & Engineering at European University of Bangladesh, running to 2026 with a CGPA of 3.60 / 4.00.",
  },
  {
    year: "2018",
    tag: "DIPLOMA",
    color: "#ff8f64",
    art: "book",
    text: "Started a Diploma in Electrical Engineering at Pabna Textile Engineering College, finishing in 2022 with a GPA of 3.49 / 4.00.",
  },
];

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    text: "User research to understand the people, goals and workflows behind the product.",
  },
  {
    number: "02",
    title: "STRUCTURE",
    text: "User flows and information architecture that make complex tasks simple.",
  },
  {
    number: "03",
    title: "DESIGN",
    text: "Wireframes, prototypes and polished UI, refined through usability testing.",
  },
  {
    number: "04",
    title: "HANDOFF",
    text: "Dev-ready Figma files and close work with developers through to release.",
  },
];

const works = [
  {
    title: "SOHOJOGI SCHOOL MANAGEMENT APPS",
    text: "Teacher, student and parent mobile apps for a school management platform used by schools, colleges and madrasas in Bangladesh.",
    cta: "Visit Site",
    href: "https://sohojogi.srcdrive.com/bn",
    art: "tasks",
    colors: ["#a998ff", "#8572ee"],
  },
  {
    title: "EASYCOMMERCE DASHBOARD & REPORTS",
    text: "A redesigned v1.20 dashboard for a B2B eCommerce plugin, and a v1.30 reports module with interactive charts, geo-mapping and order insights.",
    cta: "Visit Site",
    href: "https://easycommerce.dev/",
    art: "shop",
    colors: ["#ff8f64", "#ff7a45"],
  },
  {
    title: "GARMENTS ERP EXECUTIVE APP",
    text: "A companion app for senior management that turns multi-step Proforma Invoice approvals and sales-order tracking into a fast mobile flow.",
    cta: "View Design",
    href: "https://www.figma.com/design/kS2okb1WLPVZNQmIz357yu/Untitled?node-id=0-1&t=mlswjkWb3Y3JRAQq-1",
    art: "erp",
    colors: ["#ff7477", "#ff595e"],
  },
  {
    title: "GARMENTS PLM SYSTEM",
    text: "Early design concepts for a web-based product lifecycle management system for garment manufacturers.",
    cta: "View Design",
    href: "https://www.figma.com/design/Aif0pAXSFxVIrQ6oxdAtb5/PLM-Design?node-id=0-1&t=vZfzgvbw0aPqz3S3-1",
    art: "kit",
    colors: ["#b7c670", "#9fad4c"],
  },
];

const tickerWords = ["TOOLKIT", "DESIGNED IN FIGMA", "DEV-READY HANDOFF"];

// `area` places each box on the desktop grid: row / column / rows / columns.
const tools = [
  { label: "Figma", glyph: "frame", area: "2 / 4 / span 2 / span 2" },
  { label: "Prototyping", glyph: "cursor", area: "3 / 15 / span 2 / span 2" },
  { label: "Design Systems", glyph: "components", area: "3 / 19 / span 2 / span 2" },
  { label: "User Research", glyph: "search", area: "6 / 17 / span 2 / span 2" },
  { label: "Usability Testing", glyph: "check", area: "8 / 20 / span 2 / span 2" },
  { label: "FigJam", glyph: "note", area: "9 / 2 / span 2 / span 2" },
];

const services = [
  {
    title: "PRODUCT DESIGN",
    text: "Mobile apps designed end to end, from the first user flows to dev-ready Figma files.",
    tags: ["Mobile Apps", "User Flows", "Wireframes", "Prototyping", "Dev Handoff"],
    art: "flower",
  },
  {
    title: "WEB APP & SAAS UI/UX",
    text: "Admin consoles, analytics dashboards and other complex web apps made clear and consistent.",
    tags: ["Dashboards", "B2B SaaS", "Admin Consoles", "Analytics", "Responsive"],
    art: "screen",
  },
  {
    title: "DESIGN SYSTEMS",
    text: "Scalable design systems in Figma, built on components and variables for a clean developer handoff.",
    tags: ["Components", "Variables", "Auto Layout", "Figma", "Developer Handoff"],
    art: "ring",
  },
];

const fields = [
  { label: "EDTECH", color: "#a2ff8f" },
  { label: "B2B SAAS", color: "#ee6a00", light: true },
  { label: "ERP", color: "#d2171f", light: true },
  { label: "ECOMMERCE", color: "#e6ff00" },
  { label: "MOBILE APPS", color: "#8f4dff", light: true },
  { label: "DASHBOARDS", color: "#f0047f", light: true },
  { label: "DESIGN SYSTEMS", color: "#4a14e0", light: true },
  { label: "WEB APPS", color: "#ffc300" },
  { label: "PLM", color: "#8cc63f" },
  { label: "FIGMA", color: "#121212", light: true },
];

const faqs = [
  {
    question: "How can I hire you?",
    answer:
      "Send me an email with a few details about your project and I’ll reply within 24 hours to plan the next steps.",
  },
  {
    question: "Which industries have you worked in?",
    answer:
      "B2B SaaS, EdTech, ERP and eCommerce — including a school management platform, a garments ERP app and a WordPress eCommerce plugin.",
  },
  {
    question: "Which tools do you use?",
    answer:
      "Figma — Auto Layout, components, variables and prototyping — along with FigJam and AI-assisted design tools.",
  },
  {
    question: "Do you design in Bangla and English?",
    answer:
      "Yes. Bangla is my native language and I work professionally in English, and I’ve designed bilingual interfaces and print templates in both.",
  },
];

const callout = "Let’s Connect And Let’s Work Together";

// Two stacked copies of a label: on hover the first slides out and the
// second slides in.
function Swap({ children }) {
  return (
    <span className={styles.swap}>
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

function Button({ href, small, children, ...props }) {
  return (
    <a href={href} className={`${styles.button} ${small ? styles.buttonSmall : ""}`} {...props}>
      <span className={styles.buttonGaps} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className={styles.buttonLine} aria-hidden="true" />
      <Swap>{children}</Swap>
    </a>
  );
}

// Splits a heading into letters that each slide into place. Words stay
// whole so lines only ever break between them.
function Chars({ text }) {
  const words = text.split(" ");
  const starts = [];
  let offset = 0;
  for (const word of words) {
    starts.push(offset);
    offset += word.length + 1;
  }

  return (
    <span style={{ "--n": text.length }} aria-hidden="true">
      {words.map((word, w) => (
        <Fragment key={w}>
          <span className={styles.wordBox}>
            {[...word].map((char, c) => (
              <span key={c} className={styles.char} style={{ "--i": starts[w] + c }}>
                {char}
              </span>
            ))}
          </span>{" "}
        </Fragment>
      ))}
    </span>
  );
}

function Stripes({ className = "" }) {
  return (
    <div className={`${styles.stripes} ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

function Socials() {
  return (
    <div className={styles.follow}>
      <p className={styles.followLabel}>Follow me</p>
      <span className={styles.followLine} />
      <div className={styles.followIcons}>
        {socials.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Scroll className={styles.page}>
      <div className={styles.preloader} aria-hidden="true">
        <p className={styles.preloaderLogo}>{logo}</p>
        <Stripes className={styles.preloaderStripes} />
      </div>

      <header className={styles.nav}>
        <div className={styles.navRow}>
          <a href="#home" className={styles.brand}>
            {logo}
          </a>
          <nav className={styles.navMenu}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                <span className={styles.navDot} />
                <Swap>{link.label}</Swap>
              </a>
            ))}
          </nav>
          <Menu links={pageLinks}>
            <a href={`mailto:${email}`} className={styles.underline}>
              {email}
            </a>
            <Socials />
          </Menu>
        </div>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroPhoto}>
          <Image
            src="/v3/photo.png"
            alt="Hasanul Haque Topu"
            fill
            sizes="(max-width: 991px) 92vw, 52vw"
            quality={90}
            preload
          />
        </div>
        <h1 className={styles.heroTitle} aria-label="Hasanul Haque Topu">
          <Chars text="HASANUL HAQUE TOPU" />
        </h1>
        <div className={styles.heroBody}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroSub}>
              <span>PRODUCT &amp;</span> <span>UI/UX DESIGNER</span>
            </h2>
            <p className={styles.heroInfo}>
              I design mobile apps end to end and shape the UI/UX of complex web apps — turning
              dense workflows into clear, consistent interfaces.
            </p>
          </div>
          <div className={styles.heroProof}>
            <Socials />
            <div className={styles.stat}>
              <StatGlyph />
              <div>
                <p className={styles.statValue}>6 PROJECTS</p>
                <p className={styles.statLabel}>Across 4 industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.container}>
          <div className={styles.aboutHeader}>
            <div className={styles.aboutLeft}>
              <div className={styles.caption}>
                <span className={styles.captionDot} />
                <p className={styles.captionText}>About the Designer</p>
              </div>
              <h2 className={styles.aboutTitle}>{about}</h2>
              <Button href={cv} download>
                DOWNLOAD CV
              </Button>
            </div>
            <AboutPattern />
          </div>
        </div>
      </section>

      <section className={styles.works} id="works">
        <div className={styles.container}>
          <div className={styles.giantHeader}>
            <h2 className={styles.giant} data-scroll="enter" aria-label="Featured works">
              <Chars text="FEATURED WORKS" />
            </h2>
            <span className={`${styles.floatTag} ${styles.tagWorks}`}>REAL PRODUCTS</span>
          </div>
          <div
            className={styles.workTrack}
            data-scroll="pin"
            style={{ "--last": works.length - 1 }}
          >
            <div className={styles.workStack}>
              {works.map((work, i) => (
                <article
                  key={work.title}
                  className={styles.work}
                  style={{
                    "--k": i,
                    "--left": work.colors[0],
                    "--right": work.colors[1],
                    zIndex: works.length - i,
                  }}
                >
                  <div className={styles.workLeft}>
                    <h3 className={styles.workTitle}>
                      <a href={work.href} target="_blank" rel="noreferrer">
                        {work.title}
                      </a>
                    </h3>
                    <p className={styles.workText}>{work.text}</p>
                    <Button href={work.href} small target="_blank" rel="noreferrer">
                      {work.cta}
                    </Button>
                  </div>
                  <div className={styles.workRight}>
                    <div className={styles.workVisual}>
                      <WorkArt kind={work.art} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.toolkit} aria-label="Toolkit">
        <div className={styles.toolkitGrid}>
          <div className={styles.ticker}>
            <div className={styles.tickerTrack}>
              {[0, 1].map((copy) => (
                <div key={copy} className={styles.tickerRow} aria-hidden={copy > 0}>
                  {tickerWords.map((word) => (
                    <Fragment key={word}>
                      <span className={styles.tickerText}>{word}</span>
                      <TickerGlyph />
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <figure className={styles.statement}>
            <blockquote className={styles.statementText}>
              “I turn dense workflows into clear, consistent interfaces — from wireframe to
              handoff.”
            </blockquote>
            <figcaption className={styles.statementAuthor}>
              <p className={styles.statementName}>Hasanul Haque Topu</p>
              <p>Product &amp; UI/UX Designer</p>
            </figcaption>
          </figure>
          {tools.map((tool) => (
            <div key={tool.label} className={styles.tool} style={{ "--area": tool.area }}>
              <ToolGlyph kind={tool.glyph} />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.container}>
          <div className={styles.giantHeader}>
            <h2 className={styles.giant} data-scroll="enter" aria-label="Design services">
              <Chars text="DESIGN SERVICES" />
            </h2>
            <span className={`${styles.floatTag} ${styles.tagServices}`}>HOW I CAN HELP</span>
          </div>
          {services.map((service) => (
            <article key={service.title} className={styles.service}>
              <div className={styles.serviceInner}>
                <div className={styles.serviceContent}>
                  <h3
                    className={styles.serviceTitle}
                    data-scroll="enter"
                    aria-label={service.title}
                  >
                    <Chars text={service.title} />
                  </h3>
                  <p className={styles.serviceText}>{service.text}</p>
                  <p className={styles.serviceSub}>Services included:</p>
                  <ul className={styles.serviceTags}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <ServiceArt kind={service.art} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <Stripes className={styles.stripesLinen} />

      <section className={styles.reel}>
        <div className={styles.reelTrack} data-scroll="pin">
          <div className={styles.reelFrame}>
            <div className={styles.reelPanel}>
              <Silk />
              <a
                href={dribbble}
                target="_blank"
                rel="noreferrer"
                className={styles.reelButton}
                aria-label="See all projects on Dribbble"
              >
                <ArrowUpRight size={36} />
              </a>
              <p className={styles.reelCaption} aria-hidden="true">
                See all projects on Dribbble
              </p>
            </div>
            <p className={`${styles.reelText} ${styles.reelTextLeft}`} aria-hidden="true">
              MORE
            </p>
            <p className={`${styles.reelText} ${styles.reelTextRight}`} aria-hidden="true">
              WORK
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ring} data-scroll="view">
        <div className={styles.ringContent}>
          <span className={styles.ringBadge}>6 PROJECTS</span>
          <h2 className={styles.ringTitle}>
            ACROSS FOUR <span className={styles.gradientText}>INDUSTRIES</span>
          </h2>
          <Button href="#works">SEE MY WORK</Button>
        </div>
        <ul className={styles.ringWheel}>
          {fields.map((field, i) => (
            <li key={field.label} className={styles.ringItem} style={{ "--k": i }}>
              <span
                className={styles.ringTile}
                style={{ background: field.color, color: field.light ? "#fff" : "#121212" }}
              >
                {field.label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.process} id="process">
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <h2
              className={styles.processTitle}
              data-scroll="enter"
              aria-label="Discover, design, and hand off"
            >
              <Chars text="DISCOVER, DESIGN, AND HAND OFF" />
            </h2>
            <p className={styles.processInfo}>
              A simple, transparent process so you always know what comes next.
            </p>
          </div>
          <div className={styles.steps}>
            <span className={styles.stepsLine} />
            {steps.map((step, i) => (
              <article
                key={step.number}
                className={styles.step}
                tabIndex={0}
                data-reveal
                style={{ "--i": i }}
              >
                <span className={styles.stepMarker}>
                  <Pentagon />
                </span>
                <div className={styles.stepCard}>
                  <p className={styles.stepCount}>Step {step.number}</p>
                  <h3 className={styles.stepTitle}>
                    <span>{step.title}</span>
                    <span aria-hidden="true">{step.title}</span>
                  </h3>
                  <div className={styles.stepInfoWrap}>
                    <p className={styles.stepInfo}>{step.text}</p>
                  </div>
                  <span className={styles.stepToggle}>
                    <Chevron size={28} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div className={styles.container}>
          <div className={styles.giantHeader}>
            <h2 className={styles.giant} data-scroll="enter" aria-label="Quick answers">
              <Chars text="QUICK ANSWERS" />
            </h2>
            <span className={`${styles.floatTag} ${styles.tagFaq}`}>GOOD TO KNOW</span>
          </div>
          <div className={styles.fan}>
            {faqs.map((faq, i) => (
              <article
                key={faq.question}
                className={styles.fanCard}
                tabIndex={0}
                data-reveal
                style={{ "--i": i }}
              >
                <p className={styles.fanCount}>Q/0{i + 1}</p>
                <div>
                  <h3 className={styles.fanQuestion}>{faq.question}</h3>
                  <p className={styles.fanAnswer}>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.journey} id="journey">
        <div className={styles.container}>
          <div className={styles.journeyHeader}>
            <div className={styles.caption}>
              <span className={styles.captionDot} />
              <p className={styles.captionText}>Experience and Education</p>
            </div>
            <p className={styles.journeyNote}>
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
        </div>

        <div className={styles.yearTrack} data-scroll="pin">
          <div className={styles.yearFrame}>
            <div className={styles.years} data-pan>
              {timeline.map((item) => (
                <article key={item.year} className={styles.year}>
                  <div className={styles.yearHead}>
                    <span className={styles.yearTag} style={{ background: item.color }}>
                      {item.tag}
                    </span>
                    <h3 className={styles.yearText}>{item.year}</h3>
                    <span className={styles.yearDash} />
                  </div>
                  <div className={styles.yearContent}>
                    <p className={styles.yearInfo}>{item.text}</p>
                    <div
                      className={`${styles.yearArt} ${styles[`yearArt_${item.art}`]}`}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact" data-scroll="view">
        <div className={styles.ctaRow} aria-hidden="true">
          {[0, 1, 2].map((copy) => (
            <p key={copy} className={styles.ctaText}>
              {callout}
            </p>
          ))}
        </div>
        <div className={`${styles.ctaRow} ${styles.ctaRowReverse}`} aria-hidden="true">
          {[0, 1, 2].map((copy) => (
            <p key={copy} className={`${styles.ctaText} ${styles.ctaStroke}`}>
              {callout}
            </p>
          ))}
        </div>
        <a href={`mailto:${email}`} className={styles.ctaButton}>
          <span className={styles.ctaGaps} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <Swap>LET’S TALK</Swap>
          <span className={styles.ctaArrow}>
            <ArrowRight size={32} />
          </span>
        </a>
      </section>

      <Stripes className={styles.stripesFooter} />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerCols}>
              <div className={styles.footerCol}>
                <p className={styles.footerHeading}>Contact</p>
                <p className={styles.footerAddress}>Dhaka, Bangladesh</p>
                <a href={`mailto:${email}`} className={styles.underline}>
                  {email}
                </a>
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerHeading}>Pages</p>
                {pageLinks.map((link) => (
                  <a key={link.label} href={link.href} className={styles.footerLink}>
                    <Swap>{link.label}</Swap>
                  </a>
                ))}
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerHeading}>Social</p>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.footerLink}
                  >
                    <Swap>{social.label}</Swap>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.footerCta}>
              <p className={styles.footerHeading}>Get my resume</p>
              <div className={styles.footerForm}>
                <span className={styles.footerField}>Hasanul_Haque_Topu_CV.pdf</span>
                <a href={cv} download className={styles.footerSubmit}>
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerLogo}>{logo}</p>
            <div className={styles.footerLegal}>
              <p>© 2026 Hasanul Haque Topu. All rights reserved.</p>
              <p>Designed in Figma</p>
            </div>
          </div>
        </div>
      </footer>
    </Scroll>
  );
}
