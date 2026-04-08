/**
 * Left “card” visuals for Work / Experience: shared banner + image (hover swap).
 * Files live in public/work/
 */
const BASE_URL = import.meta.env.BASE_URL;
export const WORK_CARD_IMAGE_A = `${BASE_URL}work/banner.png`;
export const WORK_CARD_IMAGE_B = `${BASE_URL}work/image.png`;

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
    /** Optional closing row for case-study style pages */
    impact?: string;
  };
};

const cardVisual = {
  imageA: WORK_CARD_IMAGE_A,
  imageB: WORK_CARD_IMAGE_B,
} as const;

export const experiences: Experience[] = [
  {
    id: "e1",
    slug: "gisul",
    heading: "Full Stack Developer",
    company: "GISUL, Bengaluru",
    period: "Jan 2026 – Present",
    overview:
      "GISUL learning marketplace (Udemy-style flows + Razorpay) and AAptor enterprise assessments — Next.js frontends, FastAPI / Node / Express services, LLM & GenAI, and payment integrations.",
    ...cardVisual,
    offset: "left",
    detail: {
      intro:
        "Two shipped surfaces: the GISUL learner product (marketing → course → pay) and AAptor (high-volume evaluation, proctoring story, multi-modal assessments).",
      bullets: [
        "GISUL: landing, nav, course pages, and Razorpay checkout with UPI-first rails and staging-safe test mode.",
        "AAptor: auth and compliance-forward entry, workflow cards, and an eight-tile capability grid (DSA, cloud, DevOps, data, design, GenAI, and more).",
        "Backend architecture with FastAPI, Node.js, Express.js, microservices, LLM/GenAI scoring, and optimized APIs.",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "Node.js",
        "Express.js",
        "Razorpay",
        "LLM",
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
      "Lead Developer with US clients: scalable web & mobile; UX research → Figma → PRD → deploy; WowCare +35% engagement, 100+ users; WowInventory + WowCare; payments, APIs, Play & App Store.",
    ...cardVisual,
    offset: "right",
    detail: {
      intro:
        "Lead Developer collaborating with US-based clients on scalable web and mobile products—full lifecycle ownership from research and design through production releases.",
      bullets: [
        "Worked as Lead Developer, collaborating with US-based clients to build scalable web and mobile applications.",
        "Led complete product lifecycle from UX research, Figma design, and PRD creation through development and deployment.",
        "Built and deployed WowInventory and WowCare with a focus on performance, scalability, and seamless UI/UX.",
        "Increased WowCare user engagement by 35%, reaching 100+ users through feature optimization and stronger UX.",
        "Integrated payment gateways, optimized APIs, and shipped successfully to the Play Store and App Store.",
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
    ...cardVisual,
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
      impact:
        "Shipped an end-to-end intern deliverable: usable fleet UI plus Django-backed APIs, reviewed and integrated through GitHub so the work stayed traceable and shippable.",
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
    ...cardVisual,
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
      impact:
        "Contributed to apps in active use by 50+ users—stable release rhythm, Figma-accurate UI, and Bitbucket-based collaboration with the team.",
    },
  },
];

export function getExperienceBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return experiences.find((e) => e.slug === slug);
}

/** About page “Where I’ve Been” — same order as `experiences` (newest first). */
function formatAboutPeriod(period: string): string {
  return period.replace(/\s*[\u2013\u2014-]\s*/g, " — ").replace(/\s+/g, " ").trim();
}

function aboutWorkType(slug: string): string {
  return slug === "hcl" || slug === "orange-essence" ? "Internship" : "Full time";
}

function companyInitials(company: string): string {
  const word = company.split(/[\s,.]+/).find(Boolean) ?? company;
  return word.slice(0, 2).toUpperCase();
}

export const aboutWorkEntries = experiences.map((e) => ({
  key: e.id,
  role: e.heading,
  company: e.company,
  type: aboutWorkType(e.slug),
  period: formatAboutPeriod(e.period),
  initials: companyInitials(e.company),
}));
