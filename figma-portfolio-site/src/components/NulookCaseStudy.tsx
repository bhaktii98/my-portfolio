import { Link } from "react-router-dom";
import type { Experience } from "../data/experiences";
import {
  CaseStudyProject,
  type CaseStudyRow,
  type CaseStudyShot,
  type CaseStudyTaped,
} from "./caseStudy/CaseStudyBlocks";

const FIGMA_NULOOK =
  "https://www.figma.com/design/6pIeMtrKuiNgROIgPTHK5s/My-nulook?node-id=91-20257&t=wgRxV3MQyxny6EJ6-1";

const NULOOK_SHOTS: CaseStudyShot[] = [
  {
    label: "Home — personalized by mood",
    url: "NuLook · Flutter",
    src: `${import.meta.env.BASE_URL}nulook/nulook-home.png`,
    alt: "NuLook home screen with services, search, and mood-personalized package recommendations",
  },
  {
    label: "Today I am feeling — mood model",
    url: "NuLook · personalization",
    src: `${import.meta.env.BASE_URL}nulook/nulook-mood.png`,
    alt: "NuLook mood sheet letting users re-rank their feed by mood and occasion for the day",
  },
  {
    label: "Design system — Figma",
    url: "NuLook · Figma",
    src: `${import.meta.env.BASE_URL}nulook/nulook-design.png`,
    alt: "NuLook Figma board with onboarding, home, booking, and bookings flows",
  },
];

const NULOOK_TAPED: CaseStudyTaped[] = [
  {
    title: "Mood-first model",
    body: "A persona-driven personalization layer that re-ranks the feed by how the user feels and the occasion — the interaction that anchors the product.",
    foot: "NuLook",
  },
  {
    title: "Flutter · MVVM",
    body: "The complete mobile app built on a clean MVVM architecture, taken from UI/UX wireframes straight through to production deployment.",
    foot: "Mobile",
  },
  {
    title: "FastAPI backend",
    body: "Scalable APIs, authentication, and dynamic personalization on FastAPI, with Firebase backing the real-time product surfaces.",
    foot: "Backend",
  },
];

type Props = {
  exp: Experience;
};

export function NulookCaseStudy({ exp }: Props) {
  const { detail } = exp;

  const rows: CaseStudyRow[] = [
    { label: "Objective", content: detail.intro },
    {
      label: "What I'm building",
      layout: "full",
      content: (
        <ul className="case-study__list case-study__list--built-wide">
          {detail.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Status",
      content: (
        <>
          <strong>Launching May 2026.</strong> The app is in its final pre-launch
          push — <strong>Play Store and App Store links coming soon</strong>. The
          full product design is live on Figma.
        </>
      ),
    },
  ];

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
          <h1 className="case-study__page-title">
            Product Developer · Luxury mood-based booking app
          </h1>
          <p className="case-study__lede">
            I lead <strong>end-to-end development of NuLook</strong> — a luxury
            mood-based salon booking app with{" "}
            <strong>persona-driven personalization</strong>. From{" "}
            <strong>UX research and Figma wireframes</strong> to a production{" "}
            <strong>Flutter app</strong> on MVVM, backed by a{" "}
            <strong>FastAPI</strong> backend.
          </p>
          <p className="case-study__intro-tech">
            <strong>Tech:</strong> Flutter, Firebase, FastAPI, MVVM —{" "}
            <strong>Tools:</strong> Figma
          </p>
          <p className="case-study__intro-status">
            🚀 Launching this month — Play Store &amp; App Store links coming
            soon.
          </p>
        </header>

        <CaseStudyProject
          num="1."
          title="NuLook"
          subtitle="Mood-based salon booking — persona-driven personalization, Flutter MVVM, FastAPI, festive theming."
          rows={rows}
          shots={NULOOK_SHOTS}
          taped={NULOOK_TAPED}
          tapedHeadingId="nulook-dh"
          tapedTitle="NuLook · highlights"
          stack={["Flutter", "Firebase", "FastAPI", "MVVM", "REST APIs"]}
          tools={["Figma"]}
          externalLinks={[{ label: "Figma", href: FIGMA_NULOOK }]}
        />
      </div>
    </article>
  );
}
