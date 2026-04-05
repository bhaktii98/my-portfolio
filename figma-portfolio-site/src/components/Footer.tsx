const RESUME =
  "https://drive.google.com/file/d/1Nv1QZcsyUaFVUVMmNG-yBwTQ-paiQSsq/view";
const MAIL = "mailto:bhaktidangri@gmail.com";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__cta">
        <p>Currently seeking full-time opportunities</p>
        <h2>
          <span className="bold">Don&apos;t Shy</span>
          <span className="hi">, Say Hi!</span>
        </h2>
        <a className="footer__btn" href={MAIL}>
          Let&apos;s Talk
        </a>
      </div>
      <div className="footer__bar">
        <p className="footer__copy">
          <span className="muted">©️ </span>
          <span>2026 Bhakti Dangri Design</span>
        </p>
        <div className="footer__links">
          <a href={RESUME} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/bhaktidangri/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer__aside">
          <p>
            Made With <em>love &amp; metal music</em>
          </p>
          <p>
            because <em>coffee</em> doesn&apos;t work <em>anymore</em>
          </p>
        </div>
      </div>
    </footer>
  );
}
