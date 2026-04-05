import { SkillsPhysicsStage } from "../components/SkillsPhysicsStage";
import { aboutWorkEntries } from "../data/experiences";
import { figmaAbout as A } from "../figmaAboutPageAssets";
import "../styles/aboutFigmaPage.css";

const RESUME =
  "https://drive.google.com/file/d/1TJh1e67I5Tt9j9hlMxlzn_arK5mftd-u/view?usp=sharing";
const CONTACT_EMAIL = "dangribhaktii@gmail.com";
const LINKEDIN_HREF =
  "https://www.linkedin.com/in/bhakti-dangri-40a1a7250/";

const DAILY_DRIVER_HUB = {
  src: "/icons/vscode.png",
  label: "Visual Studio Code",
} as const;

const DAILY_DRIVER_ORBIT = [
  { classSuffix: "a" as const, src: "/icons/clickup.png", label: "ClickUp" },
  { classSuffix: "b" as const, src: "/icons/docker.png", label: "Docker" },
  { classSuffix: "c" as const, src: "/icons/figma.png", label: "Figma" },
  { classSuffix: "d" as const, src: "/icons/jira.png", label: "Jira" },
] as const;

const SKILLS = [
  /* Design & product */
  "UX Design",
  "Illustrations",
  "Concept development",
  "UX Audit",
  "Visual Design",
  "Rapid prototyping",
  "Persona mapping",
  /* Languages */
  "Python",
  "Java",
  "Dart",
  "SQL",
  "HTML/CSS",
  "C++",
  "TypeScript",
  "Kotlin",
  /* Frameworks */
  "Flutter",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  /* AI / ML */
  "LLM",
  "RAG",
  "Generative AI",
  "Machine Learning",
  /* Databases */
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  /* Tools */
  "Git",
  "GitHub",
  "Docker",
  "Jira",
  "ClickUp",
  "Figma",
  "Power BI",
  "Tableau",
] as const;

function HeroQuote({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 474 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 42 C80 8 120 72 200 42 S320 12 400 42 S440 58 472 42"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function AboutPage() {
  return (
    <article className="vf-page stack-fade-sections">
      <p className="vf-kicker">Happy to see you here :)</p>
      <p className="vf-page__tagline">
        Designer &amp; full-stack developer — from PRDs and Figma to frontend,
        backend, and shipped product.
      </p>

      <div className="vf-hero-row">
        <HeroQuote className="vf-hero-quote vf-hero-quote--flip" />
        <div className="vf-portrait">
          <img
            src={A.heroPortrait}
            alt="Bhakti Dangri"
            width={380}
            height={522}
            loading="eager"
            decoding="async"
          />
        </div>
        <HeroQuote className="vf-hero-quote" />
      </div>

      <div className="vf-intro vf-container">
        <p>
          Hi, I&apos;m Bhakti, a designer and full-stack developer based in
          Bangalore. I care about work that feels clear, thoughtful, and
          genuinely useful. I&apos;ve owned products end to end: writing PRDs,
          designing in Figma, and building what ships frontend and backend across
          B2B and B2C SaaS. I&apos;m at{" "}
          <span className="vf-accent-inline">GISUL</span> in Bengaluru now;
          before that I led full-stack delivery and handled product lifecycle at{" "}
          <span className="vf-accent-inline">Atoconn</span> in Mumbai.
        </p>
        <p>
          My computer science background keeps me close to how things actually
          work. I like prototypes and production code that feel like real
          products, so I stay honest about both the interface and what&apos;s
          happening under the hood.
        </p>
        <p>
          When I&apos;m not building, I&apos;m usually writing, dancing to music,
          trying new recipes, or planning my next short trip. I love good
          questions, small details, and products that make people think,{" "}
          <span className="vf-accent-inline">&quot;this just works.&quot;</span>
        </p>
      </div>

      <div className="vf-polaroids" aria-hidden>
        <div className="vf-polaroid vf-polaroid--r1">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid1} alt="" width={180} height={180} />
          </div>
        </div>
        <div className="vf-polaroid vf-polaroid--r2">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid2} alt="" width={180} height={180} />
          </div>
        </div>
        <div className="vf-polaroid vf-polaroid--r3">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid3} alt="" width={180} height={180} />
          </div>
        </div>
        <div className="vf-polaroid vf-polaroid--r4">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid4} alt="" width={180} height={180} />
          </div>
        </div>
      </div>

      <section className="vf-work" aria-labelledby="vf-been">
        <h2 id="vf-been" className="vf-work__title">
          Where I&apos;ve <em>Been</em>
        </h2>
        <div className="vf-job-list">
          {aboutWorkEntries.map((j) => (
            <article key={j.key} className="vf-job">
              <div className="vf-job__logo" aria-hidden>
                <span className="vf-job__logo-initials">{j.initials}</span>
              </div>
              <div className="vf-job__mid">
                <div>
                  <p className="vf-job__role">{j.role}</p>
                  <p className="vf-job__sub">
                    <span>{j.company}</span>
                    <span className="vf-job__dot" aria-hidden />
                    <span>{j.type}</span>
                  </p>
                </div>
                <p className="vf-job__date">{j.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <header className="vf-skills-head vf-skills-head--compact vf-container">
        <h2>
          Stuff I do really <em>well</em>
        </h2>
        <p>
          Design and craft, plus languages, frameworks, and tools I ship with.
        </p>
      </header>

      <SkillsPhysicsStage skills={SKILLS} />

      <section className="vf-orbit-section" aria-labelledby="vf-drivers">
        <h2 id="vf-drivers">
          My Daily <em>Drivers</em>
        </h2>
        <p>Tools I use every single day.</p>

        <div className="vf-orbit">
          <div className="vf-orbit__ring vf-orbit__ring--o" aria-hidden />
          <div className="vf-orbit__ring vf-orbit__ring--m" aria-hidden />
          <div className="vf-orbit__ring vf-orbit__ring--i" aria-hidden />
          <div className="vf-orbit__hub">
            <img
              src={DAILY_DRIVER_HUB.src}
              alt={DAILY_DRIVER_HUB.label}
              width={85}
              height={86}
            />
          </div>
          {DAILY_DRIVER_ORBIT.map((t) => (
            <div
              key={t.classSuffix}
              className={`vf-orbit__sat vf-orbit__sat--${t.classSuffix}`}
            >
              <div className="vf-orbit__sat-inner">
                <img src={t.src} alt={t.label} width={56} height={56} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="vf-footer">
        <div className="vf-footer__cta">
          <p>Currently seeking full-time opportunities</p>
          <h2>
            <span className="sans">Let&apos;s </span>
            <span className="hi">Chat!</span>
          </h2>
          <a
            className="vf-footer__btn"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            Say hello
          </a>
          <p className="vf-footer__chat-sub">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span className="vf-footer__chat-dot" aria-hidden />
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="vf-footer__bar">
          <p className="vf-footer__copy">
            © Bhakti Dangri <span className="dim">2026</span>
          </p>
          <div className="vf-footer__links">
            <a href={RESUME} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="vf-footer__aside">
            Designed with <em>love</em>
          </p>
        </div>
      </footer>
    </article>
  );
}
