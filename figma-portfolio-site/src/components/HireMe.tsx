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
        I move at <em>startup speed</em>!
      </>
    ),
    body: (
      <>
        Prioritize what matters and ship <strong>MVPs</strong> fast, without
        compromising on <strong>clarity</strong>, <strong>usability</strong>,
        or <strong>quality</strong>.
      </>
    ),
  },
  {
    title: (
      <>
        I design for outcomes, not <em>Dribbble</em>
      </>
    ),
    body: (
      <>
        My focus is on reducing <strong>friction</strong>, boosting
        conversions, and creating <strong>experiences</strong> that make users
        stay, not just pretty <strong>pixels</strong>.
      </>
    ),
  },
  {
    title: <>I ask, learn, and grow fast</>,
    body: (
      <>
        Actively seek feedback, talk to <strong>users</strong> and{" "}
        <strong>stakeholders</strong> and quickly fill any knowledge{" "}
        <strong>gaps</strong> to move forward with confidence.
      </>
    ),
  },
  {
    title: (
      <>
        I adapt and get <em>things done</em>
      </>
    ),
    body: (
      <>
        Context-switch with product and eng, align on constraints early, and
        keep momentum through <strong>delivery</strong> — not just decks.
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
        <p>Just a little pitch from Big Bhakti energy</p>
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
