import { AnantaraProjectCard } from "../components/AnantaraProject";

export const ANANTARA_PDF_HREF = "/anantara/Anantara.pdf";

export function ProjectsPage() {
  return (
    <>
      <div className="section-head" id="projects">
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
      </section>

      <footer className="projects-index__footer">
        <p>
          More experiments on{" "}
          <a
            href="https://bhaktidangri.framer.website/playground"
            target="_blank"
            rel="noreferrer"
          >
            Framer ↗
          </a>
          .
        </p>
      </footer>
    </>
  );
}
