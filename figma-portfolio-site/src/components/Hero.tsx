import { Link } from "react-router-dom";
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
          Designer &amp; full-stack developer — from PRDs and Figma to frontend,
          backend, and shipped product.
        </p>
        <div className="hero__avatars">
          <Link
            to="/about"
            className="hero__avatar"
            aria-label="About — open profile page"
          >
            <img src={assets.avatar1} alt="" width={57} height={57} />
          </Link>
          <Link
            to="/about"
            className="hero__avatar"
            aria-label="About — open profile page"
          >
            <img src={assets.avatar2} alt="" width={57} height={57} />
          </Link>
          <Link
            to="/about"
            className="hero__avatar"
            aria-label="About — open profile page"
          >
            <img src={assets.avatar3} alt="" width={57} height={57} />
          </Link>
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
      </div>
    </section>
  );
}
