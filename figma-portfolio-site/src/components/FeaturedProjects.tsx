const BASE_URL = import.meta.env.BASE_URL;
const MARKETPLACE_HERO = `${BASE_URL}freelance/learning-marketplace.png`;
const MARKETPLACE_PAYMENT = `${BASE_URL}freelance/payment_course.png`;
const AAPTOR_LOGIN = `${BASE_URL}freelance/aaptor.png`;
const AAPTOR_FEATURES = `${BASE_URL}freelance/competencies.png`;

export function FeaturedProjects() {
  return (
    <>
      <div className="section-head" id="projects">
        <h2 id="fp-heading">
          <span className="sans">Featured </span>
          <span className="serif">projects</span>
        </h2>
        <p>
          Product work shipped in production — learning platforms, payments, and
          AI evaluation at scale.
        </p>
      </div>
      <section className="fp-showcase" aria-labelledby="fp-heading">
        <article className="fp-project">
          <div className="fp-project__meta">
            <span className="fp-project__badge">Learning platform</span>
            <h3 className="fp-project__title">
              <span className="fp-project__name">Learning marketplace</span>
              <span className="fp-project__tagline">
                Udemy-style courses, checkout, and learner UX
              </span>
            </h3>
            <p className="fp-project__lead">
              A full learning experience: course discovery, structured content,
              and enrollment flows inspired by marketplaces like Udemy. I shaped
              the marketing and product surfaces — from hero and navigation to
              course pages — so the product feels familiar, trustworthy, and
              fast to use.
            </p>
            <ul className="fp-project__list">
              <li>
                Clear hierarchy and SaaS polish on landing and navigation so new
                users understand the value immediately.
              </li>
              <li>
                Course detail and content patterns that scale as the catalog grows.
              </li>
              <li>
                Integrated Razorpay checkout (UPI, cards, summaries) with a modal
                flow tuned for low friction at pay time.
              </li>
            </ul>
          </div>
          <div
            className="fp-project__shots"
            aria-label="Learning marketplace screenshots"
          >
            <figure className="fp-shot">
              <img
                src={MARKETPLACE_HERO}
                alt="Learning marketplace landing page with hero, navigation, and call to action"
                loading="lazy"
                width={1200}
                height={800}
              />
              <figcaption>Landing &amp; navigation</figcaption>
            </figure>
            <figure className="fp-shot">
              <img
                src={MARKETPLACE_PAYMENT}
                alt="Learning marketplace course page with Razorpay payment modal showing UPI and payment options"
                loading="lazy"
                width={1200}
                height={800}
              />
              <figcaption>Course checkout &amp; payments</figcaption>
            </figure>
          </div>
        </article>

        <article className="fp-project fp-project--reverse">
          <div className="fp-project__meta">
            <span className="fp-project__badge">Enterprise AI</span>
            <h3 className="fp-project__title">
              <span className="fp-project__name">AAptor</span>
              <span className="fp-project__tagline">
                AI-powered performance evaluation for teams &amp; hiring
              </span>
            </h3>
            <p className="fp-project__lead">
              AAptor helps enterprises and MNCs evaluate candidates at scale and
              align people with the right projects. The experience pairs a credible
              auth and dashboard entry point with a rich assessment surface —
              proctoring, skill coverage, and match signals — so stakeholders see
              outcomes, not just scores.
            </p>
            <ul className="fp-project__list">
              <li>
                Designed scalable backend architecture using FastAPI, Node.js, and
                Express.js with a microservices-oriented split for growth and
                isolation of concerns.
              </li>
              <li>
                Built LLM and Generative AI systems to assess responses, surface
                insights, and recommend best-fit roles and project placement.
              </li>
              <li>
                Integrated secure payment gateways and tightened APIs for latency
                and reliability under high load.
              </li>
            </ul>
          </div>
          <div className="fp-project__shots" aria-label="AAptor screenshots">
            <figure className="fp-shot">
              <img
                src={AAPTOR_LOGIN}
                alt="AAptor login screen with welcome message and workflow cards for bulk assessment and proctoring"
                loading="lazy"
                width={1200}
                height={800}
              />
              <figcaption>Login &amp; evaluation workflow</figcaption>
            </figure>
            <figure className="fp-shot">
              <img
                src={AAPTOR_FEATURES}
                alt="AAptor features grid showing assessment types including DSA, DevOps, cloud, and design"
                loading="lazy"
                width={1200}
                height={800}
              />
              <figcaption>Assessment &amp; capability surface</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </>
  );
}
