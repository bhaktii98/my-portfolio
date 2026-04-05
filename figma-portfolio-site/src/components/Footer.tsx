const RESUME =
  "https://drive.google.com/file/d/1TJh1e67I5Tt9j9hlMxlzn_arK5mftd-u/view?usp=sharing";
const MAIL = "mailto:dangribhaktii@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/bhakti-dangri-40a1a7250/";

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
        <p className="footer__contact-line">
          <a href={MAIL}>dangribhaktii@gmail.com</a>
          <span className="footer__contact-sep" aria-hidden>
            ·
          </span>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
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
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
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
