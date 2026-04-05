import { assets } from "../figmaAssets";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__copy">
        <h1 id="hero-heading" className="hero__h1">
          <span className="plain">I&apos;m </span>
          <span className="accent">Bhakti Dangri</span>
        </h1>
        <p className="hero__tagline">
          Need a developer? I&apos;ll build it. Need a designer? I&apos;ve got
          that too.
        </p>
        <div className="hero__avatars" aria-hidden>
          <div className="hero__avatar">
            <img src={assets.avatar1} alt="" width={57} height={57} />
          </div>
          <div className="hero__avatar">
            <img src={assets.avatar2} alt="" width={57} height={57} />
          </div>
          <div className="hero__avatar">
            <img src={assets.avatar3} alt="" width={57} height={57} />
          </div>
        </div>
        <div className="hero__featured">
          <img
            src={assets.featuredLogo}
            alt="Featured on Testsigma"
            width={140}
            height={32}
          />
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__glow-stack">
          <div className="hero__illu">
            <img
              src={assets.heroIllustration}
              alt="Illustration of Bhakti working at a laptop with sketchbooks"
              width={468}
              height={341}
            />
          </div>
        </div>
        <div className="hero__socials">
          <a
            className="hero__social"
            href="https://www.linkedin.com/in/bhaktidangri/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={assets.iconLinkedIn} alt="" width={18} height={18} />
          </a>
          <a
            className="hero__social"
            href="https://www.behance.net/bhaktidangri"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
          >
            <img src={assets.iconBehance} alt="" width={18} height={18} />
          </a>
          <a
            className="hero__social"
            href="https://www.instagram.com/bhaktidangri/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src={assets.iconInstagram} alt="" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
