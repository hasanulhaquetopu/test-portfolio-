import Image from "next/image";
import styles from "./page.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const facts = [
  { label: "Name", value: "Hasanul Haque Topu" },
  { label: "Role", value: "Web Developer & UI Designer" },
  { label: "Location", value: "Bangladesh" },
  { label: "Focus", value: "JavaScript, React, Figma" },
  { label: "Email", value: "hasanulhaque100@gmail.com" },
];

const stats = [
  { value: "15+", label: "Projects built" },
  { value: "2+", label: "Years learning" },
  { value: "100%", label: "Curiosity" },
];

const skills = [
  { icon: "</>", title: "Frontend", tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"] },
  { icon: "◐", title: "Design", tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"] },
  { icon: "⚙", title: "Tools", tags: ["Git", "GitHub", "VS Code", "Node.js", "npm"] },
];

const projects = [
  {
    title: "Weather Dashboard",
    text: "Real-time weather app using a public API, with city search and 5-day forecast.",
    tags: ["JavaScript", "API", "CSS"],
    gradient: "linear-gradient(90deg, #6c8cff, #a78bfa)",
  },
  {
    title: "Task Manager",
    text: "A to-do app with drag & drop, filters and local storage persistence.",
    tags: ["React", "LocalStorage"],
    gradient: "linear-gradient(90deg, #34d399, #22d3ee)",
  },
  {
    title: "E-commerce UI",
    text: "A responsive shop landing page designed in Figma and built with Tailwind.",
    tags: ["Figma", "Tailwind"],
    gradient: "linear-gradient(90deg, #f472b6, #fb923c)",
  },
];

const socials = ["GitHub", "LinkedIn", "Dribbble", "Twitter / X"];

const email = "hasanulhaque100@gmail.com";

export const metadata = {
  title: "Hasanul Haque Topu — Portfolio (v1)",
};

export default function PortfolioV1() {
  return (
    <div className={styles.page}>
      <header className={styles.navBar}>
        <div className={styles.nav}>
          <a href="#top" className={styles.logo}>
            <span className={styles.mark}>HT</span>
            <span className={styles.logoName}>Hasanul Haque Topu</span>
          </a>
          <nav className={styles.links}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={`${styles.button} ${styles.primary}`}>
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroText}>
          <div className={styles.status}>
            <Image src="/v1/dot.svg" alt="" width={8} height={8} unoptimized />
            <span>Available for freelance &amp; internships</span>
          </div>
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m Hasanul.
            <br />
            I design &amp; build
            <br />
            clean web experiences.
          </h1>
          <p className={styles.heroLead}>
            JavaScript developer and designer who loves turning ideas into
            interactive, accessible websites. Currently learning deeper into
            modern JS, React and UI design with Figma.
          </p>
          <div className={styles.ctas}>
            <a href="#projects" className={`${styles.button} ${styles.primary}`}>
              View my work
            </a>
            <a href="#contact" className={`${styles.button} ${styles.secondary}`}>
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.glow}>
            <Image src="/v1/glow.svg" alt="" fill unoptimized />
          </div>
          <div className={styles.photo}>
            <Image
              src="/v1/photo.png"
              alt="Hasanul Haque Topu"
              fill
              sizes="460px"
              priority
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>{"</>"}</span>
            <div className={styles.badgeText}>
              <p className={styles.badgeTitle}>Web Developer</p>
              <p className={styles.badgeSub}>JavaScript · React · Figma</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.band} id="about">
        <section className={styles.section}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>ABOUT ME</p>
            <h2 className={styles.title}>A little about who I am</h2>
          </div>
          <div className={styles.aboutRow}>
            <div className={styles.facts}>
              <h3 className={styles.factsTitle}>Quick facts</h3>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.aboutText}>
              <p className={styles.aboutLead}>
                I&apos;m a student developer from Bangladesh passionate about
                the web. I started with HTML and CSS, fell in love with
                JavaScript, and now I spend my days building projects, solving
                problems and learning something new every week.
              </p>
              <p className={styles.aboutBody}>
                When I&apos;m not coding, I&apos;m designing interfaces in
                Figma, exploring new tools, or helping friends ship their first
                websites.
              </p>
              <div className={styles.stats}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.section} id="skills">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>SKILLS</p>
          <h2 className={styles.title}>Tools I work with</h2>
        </div>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <article key={skill.title} className={styles.skill}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <div className={styles.tags}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.band} id="projects">
        <section className={styles.section}>
          <div className={styles.projectsHeader}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>PROJECTS</p>
              <h2 className={styles.title}>Things I&apos;ve built</h2>
            </div>
            <a href="#projects" className={styles.seeAll}>
              See all on GitHub →
            </a>
          </div>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.project}>
                <div
                  className={styles.thumbnail}
                  style={{ backgroundImage: project.gradient }}
                />
                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectText}>{project.text}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={`${styles.tag} ${styles.tagAccent}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a href="#projects">Live demo ↗</a>
                    <a href="#projects" className={styles.muted}>
                      Source code ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.section} id="contact">
        <div className={styles.contactCard}>
          <p className={styles.contactEyebrow}>LET&apos;S WORK TOGETHER</p>
          <h2 className={styles.contactTitle}>Have a project in mind?</h2>
          <p className={styles.contactText}>
            I&apos;m always open to new ideas, collaborations and
            opportunities. Drop me a message and I&apos;ll get back to you
            soon.
          </p>
          <div className={styles.ctas}>
            <a href={`mailto:${email}`} className={`${styles.button} ${styles.primary}`}>
              Say hello ✉
            </a>
            <a href={`mailto:${email}`} className={`${styles.button} ${styles.secondary}`}>
              Book a call
            </a>
          </div>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a key={social} href="#contact">
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footerBar}>
        <div className={styles.footer}>
          <p>© 2026 Hasanul Haque Topu. All rights reserved.</p>
          <p>Designed in Figma · Built with JavaScript</p>
        </div>
      </footer>
    </div>
  );
}
