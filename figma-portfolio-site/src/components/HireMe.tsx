import { useState } from "react";
import { assets } from "../figmaAssets";

const POLAROIDS = [
  { src: assets.hireA, className: "hire__polaroid hp1" },
  { src: assets.hireB, className: "hire__polaroid hp2" },
  { src: assets.hireC, className: "hire__polaroid hp3" },
  { src: assets.hireD, className: "hire__polaroid hp4" },
] as const;

const VALUE_PROPS = [
  {
    title: (
      <>
        I take it from <em>PRD to production</em>
      </>
    ),
    body: (
      <>
        I write <strong>PRDs</strong>, design in <strong>Figma</strong>, and
        ship <strong>frontend and backend</strong>, so the product in the
        browser matches the story we aligned on, without trading{" "}
        <strong>speed</strong> for <strong>quality</strong>.
      </>
    ),
  },
  {
    title: (
      <>
        I design for <em>outcomes</em>, not portfolios
      </>
    ),
    body: (
      <>
        I optimize for <strong>clarity</strong>, smoother <strong>flows</strong>
        , and <strong>experiences</strong> that keep people, with systems
        that behave well in production, not just in mockups.
      </>
    ),
  },
  {
    title: (
      <>
        I ask, listen, and <em>close gaps</em> fast
      </>
    ),
    body: (
      <>
        I talk to <strong>users</strong> and <strong>stakeholders</strong>,
        pair with <strong>engineering</strong> early, and fill{" "}
        <strong>knowledge gaps</strong> quickly so we commit with confidence.
      </>
    ),
  },
  {
    title: (
      <>
        I work across <em>design and code</em>
      </>
    ),
    body: (
      <>
        One rhythm across <strong>product</strong>, <strong>UX</strong>, and{" "}
        <strong>implementation</strong>, with constraints on the table early
        and momentum through <strong>delivery</strong>, not just decks.
      </>
    ),
  },
];

export function HireMe() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="hire" id="hire" aria-labelledby="hire-heading">
      <div className="hire__pitch">
        <h2 id="hire-heading">
          Why <span className="italic">you should</span> Hire me!
        </h2>
        <p>
          Designer and full-stack: product, Figma, and shipped code in one
          workflow.
        </p>
      </div>

      <div className="hire__cards">
        {VALUE_PROPS.map((c, i) => (
          <article key={i} className="hire__value">
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
      </div>

      <div className="hire__polaroids">
        {POLAROIDS.map((p, i) => (
          <div
            key={i}
            className={p.className}
            role="button"
            tabIndex={0}
            onClick={() => setLightbox(p.src)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightbox(p.src);
              }
            }}
          >
            <button
              type="button"
              className="expand"
              aria-label="Expand image"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(p.src);
              }}
            >
              <img src={assets.hireFullscreen} alt="" width={14} height={14} />
            </button>
            <img src={p.src} alt="" />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Expanded work sample"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
