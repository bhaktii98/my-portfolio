import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Experience } from "../data/experiences";

const GISUL_LANDING = "/gisul/gisul.png";
const GISUL_PAYMENT = "/gisul/payment_course.png";
const AAPTOR_LOGIN = "/gisul/aaptor.png";
const AAPTOR_FEATURES = "/gisul/competencies.png";

type Row = { label: string; content: ReactNode };
type Taped = { title: string; body: string; foot: string };

const GISUL_ROWS: Row[] = [
  {
    label: "Objective",
    content:
      "Give GISUL a real learner journey: marketing entry, course context, and in-app payment so enrollments are not stuck on a static site.",
  },
  {
    label: "What I built",
    content: (
      <ul className="case-study__list">
        <li>
          <strong>Next.js</strong> frontend for landing, nav, and course
          surfaces.
        </li>
        <li>
          <strong>Python FastAPI</strong> backend for the APIs that back those
          flows.
        </li>
        <li>
          <strong>Razorpay</strong> wired for checkout (UPI, cards, and the full
          method rail) in production.
        </li>
      </ul>
    ),
  },
  {
    label: "Impact",
    content:
      "I shipped one continuous flow from landing to payment. Checkout is UPI-first for the market we serve, and the course view stays visible during pay so it still feels like one product.",
  },
];

const GISUL_TAPED: Taped[] = [
  {
    title: "Frontend",
    body: "Next.js UI for the pages users hit before and during enrollment.",
    foot: "GISUL",
  },
  {
    title: "Backend",
    body: "FastAPI services behind course and checkout-related APIs.",
    foot: "GISUL",
  },
  {
    title: "Payments",
    body: "Razorpay integration I own from app to live transactions.",
    foot: "GISUL",
  },
];

const AAPTOR_ROWS: Row[] = [
  {
    label: "Objective",
    content:
      "Ship AAptor as the enterprise assessment side: auth, capability story on the site, and services that hold up when hiring volume is huge.",
  },
  {
    label: "What I built",
    content: (
      <ul className="case-study__list">
        <li>
          <strong>FastAPI</strong>, <strong>Node.js</strong>, and{" "}
          <strong>Express.js</strong> services laid out for a microservices-style
          split.
        </li>
        <li>
          <strong>LLM and GenAI</strong> pieces for evaluation and fit signals
          (roles and projects).
        </li>
        <li>
          <strong>Payment gateway</strong> work and <strong>API performance</strong>{" "}
          tuning where money and traffic hit the same stack.
        </li>
        <li>
          <strong>Next.js</strong> for product UI that sits on top of those APIs.
        </li>
      </ul>
    ),
  },
  {
    label: "Impact",
    content:
      "I connected the product story to real systems: lots of assessment modes on the frontend, real auth and org flows, and backends that stay fast when hiring volume spikes.",
  },
];

const AAPTOR_TAPED: Taped[] = [
  {
    title: "Services",
    body: "FastAPI plus Node/Express split so teams can grow pieces without one giant monolith.",
    foot: "AAptor",
  },
  {
    title: "AI layer",
    body: "LLM and GenAI in the loop for scoring and fit recommendations.",
    foot: "AAptor",
  },
  {
    title: "Reliability",
    body: "Payments where needed and API work so latency does not break the assessment flow.",
    foot: "AAptor",
  },
];

function LaptopFrame({
  url,
  src,
  alt,
}: {
  url: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="case-study__lap">
      <div className="case-study__lap-lid">
        <div className="case-study__lap-bezel">
          <div className="case-study__lap-camera" aria-hidden>
            <span className="case-study__lap-camera-dot" />
          </div>
          <div className="case-study__lap-browser">
            <div className="case-study__lap-browser-bar">
              <span className="case-study__lap-traffic">
                <span className="case-study__lap-traffic-dot case-study__lap-traffic-dot--r" />
                <span className="case-study__lap-traffic-dot case-study__lap-traffic-dot--y" />
                <span className="case-study__lap-traffic-dot case-study__lap-traffic-dot--g" />
              </span>
              <span className="case-study__lap-browser-url" title={url}>
                {url}
              </span>
            </div>
            <div className="case-study__lap-screen">
              <img src={src} alt={alt} loading="lazy" />
              <div className="case-study__lap-shine" aria-hidden />
            </div>
          </div>
        </div>
      </div>
      <div className="case-study__lap-hinge" aria-hidden />
      <div className="case-study__lap-base" aria-hidden />
    </div>
  );
}

function CaseStudyProject({
  num,
  title,
  subtitle,
  rows,
  primaryImg,
  primaryAlt,
  primaryLabel,
  primaryUrl,
  secondaryImg,
  secondaryAlt,
  secondaryLabel,
  secondaryUrl,
  taped,
  tapedHeadingId,
  tapedTitle,
  stack,
}: {
  num: string;
  title: string;
  subtitle: string;
  rows: Row[];
  primaryImg: string;
  primaryAlt: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryImg: string;
  secondaryAlt: string;
  secondaryLabel: string;
  secondaryUrl: string;
  taped: Taped[];
  tapedHeadingId: string;
  tapedTitle: string;
  stack: string[];
}) {
  return (
    <div className="case-study__project">
      <div className="case-study__project-panel">
        <header className="case-study__hero case-study__hero--sub">
          <h2 className="case-study__title">
            <span className="case-study__title-num">{num}</span> {title}
          </h2>
          <p className="case-study__subtitle">{subtitle}</p>
        </header>

        <div className="case-study__rows">
          {rows.map((row) => (
            <div key={row.label} className="case-study__row">
              <div className="case-study__row-label">{row.label}</div>
              <div className="case-study__row-body">{row.content}</div>
            </div>
          ))}
        </div>

        <div className="case-study__gallery" aria-label={`${title} screenshots`}>
          <figure className="case-study__shot">
            <figcaption className="case-study__shot-cap">{primaryLabel}</figcaption>
            <LaptopFrame
              url={primaryUrl}
              src={primaryImg}
              alt={primaryAlt}
            />
          </figure>
          <figure className="case-study__shot">
            <figcaption className="case-study__shot-cap">{secondaryLabel}</figcaption>
            <LaptopFrame
              url={secondaryUrl}
              src={secondaryImg}
              alt={secondaryAlt}
            />
          </figure>
        </div>

        <section className="case-study__components" aria-labelledby={tapedHeadingId}>
          <h3 id={tapedHeadingId} className="case-study__components-title">
            {tapedTitle}
          </h3>
          <div className="case-study__taped-grid">
            {taped.map((c) => (
              <div key={c.title} className="case-study-card">
                <p className="case-study-card__title">{c.title}</p>
                <p className="case-study-card__body">{c.body}</p>
                <p className="case-study-card__foot">{c.foot}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-study__stack" aria-label={`${title} stack`}>
          <h3 className="case-study__stack-heading">Stack</h3>
          <ul className="case-study__stack-list">
            {stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

type Props = {
  exp: Experience;
};

export function GisulCaseStudy({ exp }: Props) {
  return (
    <article className="case-study">
      <div className="case-study__inner">
        <Link to="/#work" className="case-study__back">
          ← Work / Experience
        </Link>

        <header className="case-study__hero case-study__hero--page case-study__intro-card">
          <p className="case-study__pill">Case study</p>
          <p className="case-study__meta">
            {exp.period} · {exp.company}
          </p>
          <h1 className="case-study__page-title">Shipped at GISUL</h1>
          <p className="case-study__lede">
            I work on <strong>GISUL</strong> (learning) and{" "}
            <strong>AAptor</strong> (assessments). Below: what I was aiming for,
            what I built, and the impact.
          </p>
        </header>

        <CaseStudyProject
          num="1."
          title="GISUL"
          subtitle="Learning product: Next.js + FastAPI + Razorpay."
          rows={GISUL_ROWS}
          primaryImg={GISUL_LANDING}
          primaryAlt="GISUL homepage: purple logo, Careers and product links, LEARNING PLATFORM badge, hero Grow your skills with GISUL, Get started free and Sign in"
          primaryLabel="Marketing site"
          primaryUrl="gisul.com"
          secondaryImg={GISUL_PAYMENT}
          secondaryAlt="GISUL course view with Razorpay modal: Payment Options, UPI QR, Verify and Pay, Secured by Razorpay, Test Mode ribbon"
          secondaryLabel="Checkout & payments"
          secondaryUrl="checkout · Razorpay"
          taped={GISUL_TAPED}
          tapedHeadingId="gisul-dh"
          tapedTitle="GISUL · highlights"
          stack={[
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "Node.js",
            "Razorpay",
          ]}
        />

        <CaseStudyProject
          num="2."
          title="AAptor"
          subtitle="Assessments: FastAPI, Node, Express, LLM/GenAI, Next.js."
          rows={AAPTOR_ROWS}
          primaryImg={AAPTOR_FEATURES}
          primaryAlt="AAptor features grid: General Assessment, DSA, Custom MCQ, AI/ML Playground, Cloud Infrastructure, DevOps, Data Engineering, UI/UX Design with tags"
          primaryLabel="Product capabilities"
          primaryUrl="aaptor.com · features"
          secondaryImg={AAPTOR_LOGIN}
          secondaryAlt="AAptor login: Welcome back, evaluate 10k+ candidates, org ID, Access Dashboard, compliance badges; workflow cards for assessment, proctoring, shortlist"
          secondaryLabel="Access & workflow story"
          secondaryUrl="aaptor.com · sign in"
          taped={AAPTOR_TAPED}
          tapedHeadingId="aaptor-dh"
          tapedTitle="AAptor · highlights"
          stack={[
            "FastAPI",
            "Node.js",
            "Express.js",
            "Microservices",
            "LLM",
            "GenAI",
            "Next.js",
          ]}
        />
      </div>
    </article>
  );
}
