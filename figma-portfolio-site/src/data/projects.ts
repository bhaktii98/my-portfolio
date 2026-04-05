import { assets } from "../figmaAssets";

export type Project = {
  id: string;
  title: string;
  year: string;
  description: string;
  href: string;
  imageA: string;
  imageB: string;
  offset: "left" | "right";
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "FIGMA-TO-TESTS — Instantly turn designs into test coverage.",
    year: "'25",
    description:
      "Built an AI-powered workflow that converts Figma designs into test cases, bridging the gap between design and QA. Accelerates test creation, improves design-test alignment, and reduces release friction.",
    href: "https://www.figma.com/proto/hlxQgJSUSgDjuOW6YASRGi/GenAI-Case-Study-By-Vidushi",
    imageA: assets.project1a,
    imageB: assets.project1b,
    offset: "left",
  },
  {
    id: "p2",
    title: "Test automation at scale — visibility for every run.",
    year: "'24",
    description:
      "Dashboard and review flows for enterprise test automation: status at a glance, reviewer queues, and clear pass/fail signals across teams.",
    href: "https://www.figma.com/proto/Ds6r0dKRcgBIH3a9Pa8gP2/CaseStudy-by-Vidushi",
    imageA: assets.project2a,
    imageB: assets.project2b,
    offset: "right",
  },
  {
    id: "p3",
    title: "Plant Pathologist — care and identification, mobile-first.",
    year: "'24",
    description:
      "End-to-end UX for plant health: scanning, condition states, and calm, editorial visuals that stay out of the way outdoors.",
    href: "https://www.behance.net/gallery/203384091/PlantPathologist-UIUX-CaseStudy",
    imageA: assets.project3a,
    imageB: assets.project3b,
    offset: "left",
  },
  {
    id: "p4",
    title: "Bhraman — travel planning from itinerary to touchdown.",
    year: "'24",
    description:
      "Designed an intelligent platform that centralizes itinerary building, bookings, budget management, and real-time trip control — crafted for seamless, stress-free travel experiences at every stage.",
    href: "https://www.behance.net/gallery/204128649/Bhraman-A-Complete-Travel-Planning-App",
    imageA: assets.project4a,
    imageB: assets.project4b,
    offset: "right",
  },
];
