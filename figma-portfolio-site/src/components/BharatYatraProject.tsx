import { usePortraitVideoFullscreen } from "../hooks/usePortraitVideoFullscreen";

export const BHARATYATRA_VIDEO = "/bharatyatra/BharatYatra.mp4";

const KEY_FEATURES = [
  "Personalized itineraries via recommendation AI",
  "AR for real-time exploration",
  "Language translator & cultural learning tools",
  "Recommendation model based on interest",
  "Monument detection using ML models",
  "Location-based insights",
  "Customizable travel packages",
  "Multimodal language translator",
  "QR monument scanner",
  "Interactive culture page",
  "Local guide integration",
  "Voice chatbot",
  "Cultural learning features",
  "Profile & social integration",
] as const;

function BharatYatraPreviewVideo() {
  const videoRef = usePortraitVideoFullscreen();

  return (
    <div
      className="fp-project__shots fp-project__shots--bharatyatra"
      aria-label="BharatYatra app preview"
    >
      <figure className="fp-shot fp-shot--video fp-shot--anantara-mobile fp-shot--bharatyatra-solo">
        <div className="fp-shot__media fp-shot__media--phone">
          <video
            ref={videoRef}
            src={BHARATYATRA_VIDEO}
            className="fp-shot__video bharatyatra-mobile-video"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="BharatYatra mobile screen recording"
          />
        </div>
        <figcaption>Mobile app preview</figcaption>
      </figure>
    </div>
  );
}

/** List card for /projects — Featured layout; PDF opens in new tab */
export function BharatYatraProjectCard() {
  return (
    <article
      className="fp-project fp-project--reverse fp-project--bharatyatra"
      id="bharatyatra"
    >
      <div className="fp-project__meta">
        <span className="fp-project__badge">Travel · Culture · AI</span>
        <h2 className="fp-project__title">
          <span className="fp-project__name">BharatYatra</span>
          <span className="fp-project__tagline">
            A smart travel app blending culture, tech, and personalization
          </span>
        </h2>
        <p className="fp-project__lead">
          End-to-end travel experiences powered by recommendations, AR, ML, and
          multimodal tools—so discovery feels personal and grounded in place.
        </p>
        <div className="fp-project__features-block">
          <p className="fp-project__features-label">Key features</p>
          <ul className="fp-project__list fp-project__list--feature-grid">
            {KEY_FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <span className="fp-project-card__hint">View PDF →</span>
      </div>
      <BharatYatraPreviewVideo />
    </article>
  );
}
