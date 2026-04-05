/**
 * Left “card” visuals for Work / Experience: shared banner + image (hover swap).
 * Files live in public/work/
 */
export const WORK_CARD_IMAGE_A = "/work/banner.png";
export const WORK_CARD_IMAGE_B = "/work/image.png";

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
      "Lead developer for US-based clients across the full lifecycle — from UX research and Figma through build and store release. Delivered WowInventory and WowCare; grew WowCare engagement ~35% for 100+ users.",
    ...cardVisual,
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
    },
  },
];

export function getExperienceBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return experiences.find((e) => e.slug === slug);
}
