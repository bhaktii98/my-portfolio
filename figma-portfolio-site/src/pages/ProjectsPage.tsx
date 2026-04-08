import { AnantaraProjectCard } from "../components/AnantaraProject";
import { BharatYatraProjectCard } from "../components/BharatYatraProject";
import { JalSanchayProjectCard } from "../components/JalSanchayProject";
import { Footer } from "../components/Footer";

const BASE_URL = import.meta.env.BASE_URL;
export const ANANTARA_PDF_HREF = `${BASE_URL}anantara/Anantara.pdf`;
export const BHARATYATRA_PDF_HREF = `${BASE_URL}bharatyatra/BharatYatra.pdf`;
export const JALSANCHAY_PDF_HREF =
  `${BASE_URL}jalsanchay/` + encodeURIComponent("Jal sanchay (1).pdf");

export function ProjectsPage() {
  return (
    <div className="stack-fade-sections">
      <div className="section-head section-head--enter" id="projects">
        <h1 id="projects-page-heading">
          <span className="sans">Featured </span>
          <span className="serif">projects</span>
        </h1>
        <p>
          Product and platform work — click a card to open the project PDF.
        </p>
      </div>

      <section className="fp-showcase" aria-labelledby="projects-page-heading">
        <a
          href={ANANTARA_PDF_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="fp-project-card"
          aria-label="ANantara — open PDF case study"
        >
          <AnantaraProjectCard />
        </a>

        <a
          href={BHARATYATRA_PDF_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="fp-project-card"
          aria-label="BharatYatra — open PDF case study"
        >
          <BharatYatraProjectCard />
        </a>

        <a
          href={JALSANCHAY_PDF_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="fp-project-card"
          aria-label="Jal Sanchay — open PDF case study"
        >
          <JalSanchayProjectCard />
        </a>
      </section>

      <Footer />
    </div>
  );
}
