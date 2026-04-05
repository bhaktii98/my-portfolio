import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  experiences,
  type Experience,
} from "../data/experiences";

export function MainPlots() {
  const [active, setActive] = useState<Experience>(experiences[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.target.id) {
            const id = e.target.id.replace("experience-", "");
            const exp = experiences.find((x) => x.id === id);
            if (exp) setActive(exp);
          }
        }
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: [0, 0.25, 0.5] },
    );

    const id = requestAnimationFrame(() => {
      for (const exp of experiences) {
        const el = document.getElementById(`experience-${exp.id}`);
        if (el) obs.observe(el);
      }
    });

    return () => {
      cancelAnimationFrame(id);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="section-head" id="work">
        <h2 id="plots-heading">
          <span className="sans">Work / </span>
          <span className="serif">Experience</span>
        </h2>
        <p>
          Scroll the cards — each one is a role. Open a card to read the full
          story, stack, and impact.
        </p>
      </div>
      <section className="plots" aria-labelledby="plots-heading">
        <div className="plots__grid">
          <div className="plots__rail">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`experience-${exp.id}`}
                className={
                  exp.offset === "right"
                    ? "plots__card-wrap plots__card-wrap--right"
                    : "plots__card-wrap"
                }
              >
                <Link
                  className="plots__card plots__card--work-banner"
                  to={`/experience/${exp.slug}`}
                >
                  <img src={exp.imageA} alt="" />
                  <div className="plots__hover-sheet" aria-hidden>
                    <p className="plots__hover-sheet__text">{exp.overview}</p>
                    <p className="plots__hover-sheet__at">
                      @ {exp.company}
                    </p>
                  </div>
                  <span className="sr-only">
                    {exp.heading} at {exp.company} — open details
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <aside className="plots__sticky" aria-live="polite">
            <div className="plots__detail">
              <h3>{active.heading}</h3>
              <p className="plots__company">{active.company}</p>
              <div className="plots__meta">
                <span className="plots__year">{active.period}</span>
                <span className="plots__line" aria-hidden />
              </div>
              <p>{active.overview}</p>
              <Link to={`/experience/${active.slug}`}>
                Explore this role →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
