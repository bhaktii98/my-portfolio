import { Link } from "react-router-dom";
import type { Experience } from "../data/experiences";
import {
  CaseStudyProject,
  type CaseStudyRow,
  type CaseStudyTaped,
} from "./caseStudy/CaseStudyBlocks";

const BASE_URL = import.meta.env.BASE_URL;
const MARKETPLACE_LANDING = `${BASE_URL}freelance/learning-marketplace.png`;
const MARKETPLACE_PAYMENT = `${BASE_URL}freelance/payment_course.png`;
const AAPTOR_LOGIN = `${BASE_URL}freelance/aaptor.png`;
const AAPTOR_FEATURES = `${BASE_URL}freelance/competencies.png`;

const MARKETPLACE_ROWS: CaseStudyRow[] = [
  {
    label: "Objective",
    content:
      "Give the learning marketplace a real learner journey: marketing entry, course context, and in-app payment so enrollments are not stuck on a static site.",
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

const MARKETPLACE_TAPED: CaseStudyTaped[] = [
  {
    title: "Frontend",
    body: "Next.js UI for the pages users hit before and during enrollment.",
    foot: "Marketplace",
  },
  {
    title: "Backend",
    body: "FastAPI services behind course and checkout-related APIs.",
    foot: "Marketplace",
  },
  {
    title: "Payments",
    body: "Razorpay integration I own from app to live transactions.",
    foot: "Marketplace",
  },
];

const AAPTOR_ROWS: CaseStudyRow[] = [
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

const AAPTOR_TAPED: CaseStudyTaped[] = [
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

type Props = {
  exp: Experience;
};

export function FreelanceCaseStudy({ exp }: Props) {
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
          <h1 className="case-study__page-title">Freelance product work</h1>
          <p className="case-study__lede">
            Two projects I delivered as a freelancer: a{" "}
            <strong>learning marketplace</strong> and <strong>AAptor</strong>{" "}
            (assessments). Below: what I was aiming for, what I built, and the
            impact.
          </p>
        </header>

        <CaseStudyProject
          num="1."
          title="Learning marketplace"
          subtitle="Learning product: Next.js + FastAPI + Razorpay."
          rows={MARKETPLACE_ROWS}
          primaryImg={MARKETPLACE_LANDING}
          primaryAlt="Learning marketplace homepage: logo, Careers and product links, LEARNING PLATFORM badge, hero Grow your skills, Get started free and Sign in"
          primaryLabel="Marketing site"
          primaryUrl="marketing site"
          secondaryImg={MARKETPLACE_PAYMENT}
          secondaryAlt="Course view with Razorpay modal: Payment Options, UPI QR, Verify and Pay, Secured by Razorpay, Test Mode ribbon"
          secondaryLabel="Checkout & payments"
          secondaryUrl="checkout · Razorpay"
          taped={MARKETPLACE_TAPED}
          tapedHeadingId="marketplace-dh"
          tapedTitle="Learning marketplace · highlights"
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
