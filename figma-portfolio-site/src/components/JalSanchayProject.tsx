import { usePortraitVideoFullscreen } from "../hooks/usePortraitVideoFullscreen";

/** Public URLs — filenames contain spaces; encode for reliable loading */
export const JALSANCHAY_VIDEO =
  "/jalsanchay/" + encodeURIComponent("Jal-Sanchay for farmers.mp4");

const KEY_FEATURES = [
  "Profiles & languages (Hindi/English), Firebase auth, React admin dashboard",
  "Beginner mode: plant stages, cost estimates, live weather",
  "Expert mode: water-saving techniques, research, forums, video",
  "Community: reels, articles, discussions, likes, comments, moderation",
  "ML irrigation calculators for Karnataka (soil, method, weather)",
  "Interactive groundwater map and resource insights",
  "Accessibility: screen readers & speech recognition",
  "Gemini-powered chatbot for user questions",
  "Gamification: points redeemable toward government schemes",
  "Awareness: custom water-saving song & visual storytelling",
  "Feedback & support workflows",
] as const;

function JalSanchayPreviewVideo() {
  const videoRef = usePortraitVideoFullscreen();

  return (
    <div
      className="fp-project__shots fp-project__shots--jalsanchay"
      aria-label="Jal Sanchay app preview"
    >
      <figure className="fp-shot fp-shot--video fp-shot--anantara-mobile fp-shot--jalsanchay-solo">
        <div className="fp-shot__media fp-shot__media--phone">
          <video
            ref={videoRef}
            src={JALSANCHAY_VIDEO}
            className="fp-shot__video jalsanchay-mobile-video"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="Jal Sanchay mobile screen recording"
          />
        </div>
        <figcaption>Mobile app preview</figcaption>
      </figure>
    </div>
  );
}

/** Copy left, video right (default grid). Card link opens PDF in new tab. */
export function JalSanchayProjectCard() {
  return (
    <article className="fp-project fp-project--anantara fp-project--jalsanchay" id="jalsanchay">
      <div className="fp-project__meta">
        <span className="fp-project__badge">Water · ML · Community</span>
        <h2 className="fp-project__title">
          <span className="fp-project__name">Jal Sanchay</span>
          <span className="fp-project__tagline">
            Wiki-style knowledge for water conservation and farmer action
          </span>
        </h2>
        <p className="fp-project__lead">
          A mobile-first, multilingual platform blending ML, gamification, and
          community tools—so beginners get simple insights and experts get depth,
          with maps, calculators, and accessible support to turn awareness into
          action.
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
      <JalSanchayPreviewVideo />
    </article>
  );
}
