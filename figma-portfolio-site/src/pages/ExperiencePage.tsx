import { Link, Navigate, useParams } from "react-router-dom";
import { AtoconnCaseStudy } from "../components/AtoconnCaseStudy";
import { FreelanceCaseStudy } from "../components/FreelanceCaseStudy";
import { InternshipCaseStudy } from "../components/InternshipCaseStudy";
import { getExperienceBySlug } from "../data/experiences";

export function ExperiencePage() {
  const { slug } = useParams<{ slug: string }>();
  const exp = getExperienceBySlug(slug);

  if (!exp) {
    return <Navigate to="/" replace />;
  }

  if (exp.slug === "freelance") {
    return <FreelanceCaseStudy exp={exp} />;
  }

  if (exp.slug === "atoconn") {
    return <AtoconnCaseStudy exp={exp} />;
  }

  if (exp.slug === "hcl" || exp.slug === "orange-essence") {
    return <InternshipCaseStudy exp={exp} />;
  }

  const { detail } = exp;

  return (
    <article className="experience-page">
      <Link to="/#work" className="experience-page__back">
        ← Work / Experience
      </Link>
      <header className="experience-page__header">
        <p className="experience-page__period">{exp.period}</p>
        <h1>{exp.heading}</h1>
        <p className="experience-page__company">{exp.company}</p>
      </header>
      <p className="experience-page__lead">{detail.intro}</p>
      <ul className="experience-page__bullets">
        {detail.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <section className="experience-page__tags" aria-label="Tech stack">
        <h2>Stack</h2>
        <ul>
          {detail.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      {detail.tools && detail.tools.length > 0 ? (
        <section className="experience-page__tags" aria-label="Tools">
          <h2>Tools</h2>
          <ul>
            {detail.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
