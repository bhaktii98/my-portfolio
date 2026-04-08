import { Link } from "react-router-dom";
import type { Experience } from "../data/experiences";
import {
  CaseStudyProject,
  type CaseStudyRow,
  type CaseStudyShot,
  type CaseStudyTaped,
} from "./caseStudy/CaseStudyBlocks";

const WOWCARE_SHOTS: CaseStudyShot[] = [
  {
    label: "Staff dashboard",
    url: "WowCare · phone",
    src: `${import.meta.env.BASE_URL}atoconn/wowcare.png`,
    alt: "WowCare staff dashboard with My Day, sign-in, classrooms and enrollment stats",
  },
  {
    label: "Students & classroom",
    url: "WowCare · mobile UI",
    src: `${import.meta.env.BASE_URL}atoconn/wowcare2.png`,
    alt: "WowCare students list, classroom tabs, attendance and messaging actions",
  },
  {
    label: "Staff · tablet",
    url: "WowCare · tablet",
    src: `${import.meta.env.BASE_URL}atoconn/wowcaretab.png`,
    alt: "WowCare tablet staff view with roster, search, and classroom navigation",
  },
];

const WOWINV_SHOTS: CaseStudyShot[] = [
  {
    label: "Purchases & overview",
    url: "WowInventory · Flutter",
    src: `${import.meta.env.BASE_URL}atoconn/wowinventory.png`,
    alt: "WowInventory purchase flow with ordered tab, metrics, and bottom navigation",
  },
  {
    label: "Requests & analytics",
    url: "WowInventory · requests",
    src: `${import.meta.env.BASE_URL}atoconn/inventory.png`,
    alt: "WowInventory requests screen with total count, status bar, and search",
  },
  {
    label: "Purchase detail",
    url: "WowInventory · orders",
    src: `${import.meta.env.BASE_URL}atoconn/inventory-2.png`,
    alt: "WowInventory purchase list with vendors and product filters",
  },
];

const PLAY_WOWCARE =
  "https://play.google.com/store/apps/details?id=com.wiseowlworld.schoolerpwowapp";
const PLAY_WOWINVENTORY =
  "https://play.google.com/store/apps/details?id=com.wiseowlworld.wowinventory";
const FIGMA_WOW =
  "https://www.figma.com/design/vP5t8vXOI7Zz8cabcbqoo9/Dev-mode-on?node-id=0-1&t=UqDuH3oGD1Uxq4C1-1";

const ATOCONN_TOOLS = [
  "GitHub",
  "Docker",
  "Jira",
  "ClickUp",
  "Figma",
] as const;

const WOWCARE_ROWS: CaseStudyRow[] = [
  {
    label: "Objective",
    content:
      "Deliver WowCare as a production childcare platform for US providers: staff dashboards, attendance, classrooms, messaging, and payments—built for performance, scale, and day-to-day operations.",
  },
  {
    label: "What I built",
    layout: "full",
    content: (
      <ul className="case-study__list case-study__list--built-wide">
        <li>
          <strong>Flutter</strong> app UI with UX research and Figma-backed
          iteration so busy staff get clear, fast flows.
        </li>
        <li>
          <strong>Java</strong> services and <strong>REST APIs</strong> behind
          features; ongoing API optimization for reliability and load.
        </li>
        <li>
          <strong>Payment gateways</strong> integrated for US client
          requirements, aligned with PRD and release planning.
        </li>
        <li>
          Delivery with <strong>Jira</strong>, <strong>ClickUp</strong>, and{" "}
          <strong>GitHub</strong>—from PRD through Play Store and App Store
          releases.
        </li>
      </ul>
    ),
  },
  {
    label: "Impact",
    content: (
      <>
        <strong>+35% user engagement</strong> on WowCare through feature
        optimization and stronger UX. Grew to <strong>100+ active users</strong>.
        Payments, tuned APIs, and store-ready polish supported successful{" "}
        <strong>Play Store and App Store</strong> deployments.
      </>
    ),
  },
];

const WOWCARE_TAPED: CaseStudyTaped[] = [
  {
    title: "Staff & ops UI",
    body: "Dashboard, attendance, classrooms, and messaging patterns built for real childcare workflows—not generic CRUD.",
    foot: "WowCare",
  },
  {
    title: "Money path",
    body: "Payment integration and backend support so billing flows stay reliable for US clients.",
    foot: "WowCare",
  },
  {
    title: "Store-ready",
    body: "Performance and polish aimed at retention: iteration until metrics and reviews reflected quality.",
    foot: "WowCare",
  },
];

const WOWINV_ROWS: CaseStudyRow[] = [
  {
    label: "Objective",
    content:
      "Deliver WowInventory as a single app for childcare centers to track stock, requests, purchases, vendors, and classroom assignments—without spreadsheet chaos.",
  },
  {
    label: "What I built",
    layout: "full",
    content: (
      <ul className="case-study__list case-study__list--built-wide">
        <li>
          Owned the product <strong>end to end</strong>: PRDs,{" "}
          <strong>Figma</strong> specs, and <strong>Flutter</strong> implementation.
        </li>
        <li>
          Real-time <strong>inventory and request</strong> flows: approvals,
          purchase orders, low-stock signals, and usage visibility.
        </li>
        <li>
          <strong>Products, vendors, classrooms</strong>, and analytics-style
          summaries so directors see spend and usage at a glance.
        </li>
        <li>
          Supporting stack where needed: <strong>Firebase</strong>,{" "}
          <strong>React.js</strong> touchpoints, <strong>Java</strong> / APIs,{" "}
          <strong>Docker</strong>, <strong>GitHub</strong>.
        </li>
      </ul>
    ),
  },
  {
    label: "Impact",
    content:
      "Shipped WowInventory end to end with the same bar for performance, scalability, and UI/UX as WowCare—one app for supply and purchasing, released to the Play Store with Firebase, APIs, and Docker-backed workflows in GitHub.",
  },
];

const WOWINV_TAPED: CaseStudyTaped[] = [
  {
    title: "Requests & POs",
    body: "Request and purchase flows with clear states so staff know what is pending, ordered, or completed.",
    foot: "WowInventory",
  },
  {
    title: "Stock truth",
    body: "Live stock and classroom assignment so usage matches what classrooms actually consume.",
    foot: "WowInventory",
  },
  {
    title: "Solo ownership",
    body: "PRD → Figma → Flutter → release: one thread of accountability across the whole product.",
    foot: "WowInventory",
  },
];

type Props = {
  exp: Experience;
};

export function AtoconnCaseStudy({ exp }: Props) {
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
            Lead Developer · US clients · WowCare &amp; WowInventory
          </h1>
          <p className="case-study__lede">
            I worked as <strong>Lead Developer</strong> with US-based clients on{" "}
            <strong>WowCare</strong> and <strong>WowInventory</strong> scalable
            mobile products from research and Figma through production. <strong>Led complete product lifecycle from UX research, Figma design, PRD creation to development and deployment. </strong>
             Increased WowCare user engagement by 35%, achieving 100+ users through feature optimization and better UX
          </p>
          <p className="case-study__intro-tech">
            <strong>Tech:</strong> Flutter, Java, Next.js, MERN —{" "}
            <strong>Tools:</strong> GitHub, Docker, Jira, ClickUp, Figma
          </p>
        </header>

        <CaseStudyProject
          num="1."
          title="WowCare"
          subtitle="Childcare management — +35% engagement, 100+ users, payments, Play & App Store."
          rows={WOWCARE_ROWS}
          shots={WOWCARE_SHOTS}
          taped={WOWCARE_TAPED}
          tapedHeadingId="wowcare-dh"
          tapedTitle="WowCare · highlights"
          stack={[
            "Flutter",
            "Java",
            "Next.js",
            "MERN",
            "REST APIs",
            "Payment gateways",
            "Firebase",
          ]}
          tools={[...ATOCONN_TOOLS]}
          externalLinks={[
            { label: "Play Store", href: PLAY_WOWCARE },
            { label: "Figma", href: FIGMA_WOW },
          ]}
        />

        <CaseStudyProject
          num="2."
          title="WowInventory"
          subtitle="Childcare inventory — PRD → Figma → Flutter; performance, scale, Play release."
          rows={WOWINV_ROWS}
          shots={WOWINV_SHOTS}
          taped={WOWINV_TAPED}
          tapedHeadingId="wowinv-dh"
          tapedTitle="WowInventory · highlights"
          stack={[
            "Flutter",
            "Java",
            "Next.js",
            "MERN",
            "Figma",
            "PRD / product",
            "REST APIs",
            "Firebase",
            "React.js",
          ]}
          tools={[...ATOCONN_TOOLS]}
          externalLinks={[
            { label: "Play Store", href: PLAY_WOWINVENTORY },
            { label: "Figma", href: FIGMA_WOW },
          ]}
        />
      </div>
    </article>
  );
}
