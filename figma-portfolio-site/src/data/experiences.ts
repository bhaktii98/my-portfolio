import { assets } from "../figmaAssets";

export type Experience = {
  id: string;
  slug: string;
  heading: string;
  company: string;
  period: string;
  overview: string;
  imageA: string;
  imageB: string;
  offset: "left" | "right";
  detail: {
    intro: string;
    bullets: string[];
    stack: string[];
    tools?: string[];
  };
};

export const experiences: Experience[] = [
  {
    id: "e1",
    slug: "gisul",
    heading: "Full Stack Developer",
    company: "GISUL, Bengaluru",
    period: "Jan 2026 – Present",
    overview:
      "Shipping an AI-powered performance evaluation platform — backend in FastAPI, Node.js, and Express.js, Next.js on the frontend, plus LLM, RAG, and GenAI features and payment integrations.",
    imageA: assets.project1a,
    imageB: assets.project1b,
    offset: "left",
    detail: {
      intro:
        "Full-stack ownership on a modern performance product: APIs, UI, and intelligent workflows.",
      bullets: [
        "Designed and implemented backend services with FastAPI, Node.js, and Express.js.",
        "Built the Next.js frontend and integrated LLM / RAG and Generative AI capabilities.",
        "Connected payment gateway flows for production use.",
      ],
      stack: [
        "Next.js",
        "FastAPI",
        "MERN",
        "Node.js",
        "Express.js",
        "LLM",
        "RAG",
        "GenAI",
      ],
    },
  },
  {
    id: "e2",
    slug: "atoconn",
    heading: "Software Developer (Fullstack)",
    company: "Atoconn System Labs Pvt. Ltd, Mumbai",
    period: "Apr 2025 – Dec 2025",
    overview:
      "Lead developer for US-based clients across the full lifecycle — from UX research and Figma through build and store release. Delivered WowInventory and WowCare; grew WowCare engagement ~35% for 100+ users.",
    imageA: assets.project2a,
    imageB: assets.project2b,
    offset: "right",
    detail: {
      intro:
        "Owned product delivery end-to-end for client apps: design collaboration, implementation, and deployment.",
      bullets: [
        "Led development for cross-platform products including WowInventory and WowCare.",
        "Improved WowCare engagement by ~35% across 100+ active users.",
        "Integrated payment flows and shipped to Google Play and the App Store.",
        "Partnered on UX research, Figma specs, and iterative delivery with stakeholders.",
      ],
      stack: ["Flutter", "Java", "Next.js", "MERN"],
      tools: ["GitHub", "Docker", "Jira", "ClickUp", "Figma"],
    },
  },
  {
    id: "e3",
    slug: "hcl",
    heading: "Full Stack Developer Intern",
    company: "HCL Technologies",
    period: "Mar 2025 – May 2025",
    overview:
      "Built a fleet management web application from scratch with React and Next.js on the client and Django + Python APIs on the server.",
    imageA: assets.project3a,
    imageB: assets.project3b,
    offset: "left",
    detail: {
      intro:
        "Greenfield intern project: full-stack web app for fleet operations and visibility.",
      bullets: [
        "Implemented responsive UI with React and Next.js.",
        "Developed REST-style backend APIs using Django and Python.",
        "Collaborated via GitHub for reviews and integration.",
      ],
      stack: ["React", "Next.js", "Django", "Python"],
      tools: ["GitHub"],
    },
  },
  {
    id: "e4",
    slug: "orange-essence",
    heading: "Mobile App Intern",
    company: "Orrange Essence Technologies",
    period: "Apr 2025 – May 2025",
    overview:
      "Cross-platform mobile apps with Flutter and React Native — shipped features for 50+ active users with design handoff in Figma.",
    imageA: assets.project4a,
    imageB: assets.project4b,
    offset: "right",
    detail: {
      intro:
        "Mobile-focused internship building production-ready screens and flows.",
      bullets: [
        "Developed cross-platform experiences in Flutter and React Native.",
        "Supported a user base of 50+ active users with stable releases.",
        "Worked from Figma specs and used Bitbucket for source control.",
      ],
      stack: ["React Native", "Flutter"],
      tools: ["Figma", "Bitbucket"],
    },
  },
];

export function getExperienceBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return experiences.find((e) => e.slug === slug);
}
