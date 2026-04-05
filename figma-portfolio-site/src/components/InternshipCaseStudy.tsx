import { Link } from "react-router-dom";
import type { Experience } from "../data/experiences";
import {
  CaseStudyProject,
  type CaseStudyRow,
  type CaseStudyTaped,
} from "./caseStudy/CaseStudyBlocks";

const HCL_TAPED: CaseStudyTaped[] = [
  {
    title: "Responsive UI",
    body: "React and Next.js surfaces sized for real use—not placeholder pages—so fleet views stayed legible on common breakpoints.",
    foot: "Fleet app",
  },
  {
    title: "Django APIs",
    body: "REST-style Python/Django endpoints behind the app so data flow stayed explicit and easy to extend.",
    foot: "HCL",
  },
  {
    title: "GitHub delivery",
    body: "Reviews and integration through GitHub kept the intern scope shippable and visible to the team.",
    foot: "Intern",
  },
];

const ORANGE_TAPED: CaseStudyTaped[] = [
  {
    title: "Cross-platform",
    body: "Flutter and React Native screens and flows built to match how each platform expects navigation and layout.",
    foot: "Mobile",
  },
  {
    title: "Live users",
    body: "Releases aimed at stability for 50+ active users—small regressions matter when people rely on the app daily.",
    foot: "Orrange Essence",
  },
  {
    title: "Design fidelity",
    body: "Built from Figma specs with Bitbucket for source control so handoff stayed traceable.",
    foot: "Intern",
  },
];

type CaseStudyConfig = {
  pageTitle: string;
  projectTitle: string;
  projectSubtitle: string;
  taped: CaseStudyTaped[];
  tapedHeadingId: string;
  tapedTitle: string;
};

function getInternshipConfig(slug: string): CaseStudyConfig | null {
  if (slug === "hcl") {
    return {
      pageTitle: "Full Stack Developer Intern · Fleet web app",
      projectTitle: "Fleet management",
      projectSubtitle:
        "Greenfield full stack — React, Next.js, Django, Python, GitHub.",
      taped: HCL_TAPED,
      tapedHeadingId: "hcl-dh",
      tapedTitle: "HCL · highlights",
    };
  }
  if (slug === "orange-essence") {
    return {
      pageTitle: "Mobile App Intern · Flutter & React Native",
      projectTitle: "Production mobile features",
      projectSubtitle:
        "Shipped flows for 50+ users — Figma specs, Flutter, React Native, Bitbucket.",
      taped: ORANGE_TAPED,
      tapedHeadingId: "orange-dh",
      tapedTitle: "Orrange Essence · highlights",
    };
  }
  return null;
}

type Props = {
  exp: Experience;
};

export function InternshipCaseStudy({ exp }: Props) {
  const cfg = getInternshipConfig(exp.slug);
  if (!cfg) {
    throw new Error(`InternshipCaseStudy: unsupported slug "${exp.slug}"`);
  }

  const { detail } = exp;

  const rows: CaseStudyRow[] = [
    { label: "Objective", content: detail.intro },
    {
      label: "What I built",
      layout: "full",
      content: (
        <ul className="case-study__list case-study__list--built-wide">
          {detail.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ),
    },
    ...(detail.impact
      ? [{ label: "Impact", content: detail.impact } satisfies CaseStudyRow]
      : []),
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
          <h1 className="case-study__page-title">{cfg.pageTitle}</h1>
          <p className="case-study__lede">{exp.overview}</p>
          <p className="case-study__intro-tech">
            <strong>Tech:</strong> {detail.stack.join(", ")}
            {detail.tools?.length ? (
              <>
                {" "}
                — <strong>Tools:</strong> {detail.tools.join(", ")}
              </>
            ) : null}
          </p>
        </header>

        <CaseStudyProject
          num="1."
          title={cfg.projectTitle}
          subtitle={cfg.projectSubtitle}
          rows={rows}
          taped={cfg.taped}
          tapedHeadingId={cfg.tapedHeadingId}
          tapedTitle={cfg.tapedTitle}
          stack={[...detail.stack]}
          tools={detail.tools ? [...detail.tools] : undefined}
        />
      </div>
    </article>
  );
}
