import { Link } from "react-router-dom";
import { SkillsPhysicsStage } from "../components/SkillsPhysicsStage";
import {
  PLAYLIST_HREF,
  figmaAbout as A,
} from "../figmaAboutPageAssets";
import "../styles/aboutFigmaPage.css";

const RESUME =
  "https://drive.google.com/file/d/1Nv1QZcsyUaFVUVMmNG-yBwTQ-paiQSsq/view?usp=sharing";

const JOBS = [
  {
    logo: A.logoRupeezy,
    role: "Product Designer",
    company: "Rupeezy",
    type: "Full time",
    period: "Sept 2025 — Current",
  },
  {
    logo: A.logoTestsigma,
    role: "Product Designer",
    company: "Testsigma",
    type: "Full time",
    period: "July 2024 — Sept 2025",
  },
  {
    logo: A.logoCubexo,
    role: "Product Design Intern",
    company: "Cubexo",
    type: "Full time",
    period: "Jan — July 2024",
  },
] as const;

/** Labels match Figma export (including spelling where captured). */
const SKILLS = [
  "UX Design",
  "Illustrations",
  "Concept developement",
  "UX Audit",
  "Visual Design",
  "Rapid prototyping",
  "Persona mapping",
] as const;

const VINYL = [
  { disc: A.vinylDisc1, cover: A.playlistCover1, label: "indie" },
  { disc: A.vinylDisc2, cover: A.playlistCover2, label: "Workers" },
  { disc: A.vinylDisc3, cover: A.playlistCover3, label: "Moodboard" },
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
    <article className="vf-page">
      <p className="vf-kicker">Happy to see you here :)</p>
      <p className="vf-page__tagline">
        Need a developer? I&apos;ll build it. Need a designer? I&apos;ve got
        that too.
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
          Hi, I&apos;m Bhakti, a developer and designer based in Bangalore. I care
          about creating designs that feel clear, thoughtful, and genuinely
          helpful. I&apos;ve worked on B2B SaaS product and AI platforms, most
          recently on <span className="vf-accent-inline">Atto</span>, an AI
          testing agent at Testsigma.
        </p>
        <p>
          Coming from a computer science background, I enjoy building prototypes
          that feel close to real products — it helps me understand not just how
          something should look, but how it should work and feel.
        </p>
        <p>
          When I&apos;m not designing, I&apos;m probably writing, dancing around
          to music, trying new recipes, or planning my next short trip. I love
          asking questions, noticing the small stuff, and building products that
          make people think,{" "}
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
          {JOBS.map((j) => (
            <article key={j.company + j.period} className="vf-job">
              <div className="vf-job__logo">
                <img src={j.logo} alt="" width={48} height={48} />
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

      <header className="vf-skills-head vf-container">
        <h2>
          Stuff I do really <em>well</em>
        </h2>
        <p>Skills that help me design for people, not personas.</p>
      </header>

      <div className="vf-skills-mission vf-container">
        <p>
          <strong style={{ color: "var(--vf-text)" }}>Your mission:</strong>{" "}
          stack &apos;em all without tipping over.
        </p>
      </div>

      <SkillsPhysicsStage skills={SKILLS} />

      <header className="vf-playlist-head">
        <h2>
          Now Playing <em>&quot;My Life in Tracks&quot;</em>
        </h2>
        <p className="vf-pl-sub">
          Music fuels my design flow, mood boards, and midnight brainstorming.
        </p>
      </header>

      <div className="vf-playlist-grid">
        {VINYL.map((v) => (
          <a
            key={v.label}
            className="vf-vinyl"
            href={PLAYLIST_HREF}
            target="_blank"
            rel="noreferrer"
          >
            <div className="vf-vinyl__stage">
              <div className="vf-vinyl__disc" aria-hidden>
                <img src={v.disc} alt="" width={230} height={230} />
              </div>
              <div className="vf-vinyl__cover">
                <img src={v.cover} alt="" width={188} height={188} />
              </div>
            </div>
            <span className="vf-vinyl__label">{v.label}</span>
          </a>
        ))}
      </div>

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
            <img src={A.orbitCenter} alt="" width={85} height={86} />
          </div>
          <div className="vf-orbit__sat vf-orbit__sat--a" aria-hidden>
            <div className="vf-orbit__sat-inner">
              <img src={A.orbitSpline} alt="" width={56} height={56} />
            </div>
          </div>
          <div className="vf-orbit__sat vf-orbit__sat--b" aria-hidden>
            <div className="vf-orbit__sat-inner">
              <img src={A.orbitIllustrator} alt="" width={56} height={56} />
            </div>
          </div>
          <div className="vf-orbit__sat vf-orbit__sat--c" aria-hidden>
            <div className="vf-orbit__sat-inner">
              <img src={A.orbitSpline} alt="" width={56} height={56} />
            </div>
          </div>
          <div className="vf-orbit__sat vf-orbit__sat--d" aria-hidden>
            <div className="vf-orbit__sat-inner">
              <img src={A.orbitIllustrator} alt="" width={56} height={56} />
            </div>
          </div>
        </div>
      </section>

      <footer className="vf-footer">
        <div className="vf-footer__cta">
          <p>Currently seeking full-time opportunities</p>
          <h2>
            <span className="sans">Let&apos;s </span>
            <span className="hi">Chat!</span>
          </h2>
          <a className="vf-footer__btn" href="mailto:bhaktidangri@gmail.com">
            Say hello
          </a>
        </div>
        <div className="vf-footer__bar">
          <p className="vf-footer__copy">
            © Bhakti Dangri <span className="dim">2025</span>
          </p>
          <div className="vf-footer__links">
            <a href={RESUME} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
            <a href="https://medium.com/" target="_blank" rel="noreferrer">
              Medium
            </a>
          </div>
          <p className="vf-footer__aside">
            Designed with <em>love</em>
          </p>
        </div>
      </footer>

      <Link to="/" className="vf-home-link vf-container">
        ← Back to home
      </Link>
    </article>
  );
}
