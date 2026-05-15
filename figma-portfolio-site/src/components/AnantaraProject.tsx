import { usePortraitVideoFullscreen } from "../hooks/usePortraitVideoFullscreen";

const ANANTARA_VIDEO_WEB = `${import.meta.env.BASE_URL}anantara/${encodeURIComponent(
  "ANANTAARAA _ Web Platform and 1 more page - Personal - Microsoft_ Edge 2025-12-28 23-16-31.mp4",
)}`;
const ANANTARA_VIDEO_MOBILE = `${import.meta.env.BASE_URL}anantara/${encodeURIComponent(
  "Mobile_ANANTAARA (1).mp4",
)}`;

function AnantaraPreviewVideos() {
  const mobileVideoRef = usePortraitVideoFullscreen();

  return (
    <div
      className="fp-project__shots fp-project__shots--anantara"
      aria-label="ANantara product previews"
    >
      <figure className="fp-shot fp-shot--video fp-shot--anantara-web">
        <div className="fp-shot__media fp-shot__media--web">
          <video
            src={ANANTARA_VIDEO_WEB}
            className="fp-shot__video"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="ANantara web platform screen recording"
          />
        </div>
        <figcaption>Web platform preview</figcaption>
      </figure>
      <figure className="fp-shot fp-shot--video fp-shot--anantara-mobile">
        <div className="fp-shot__media fp-shot__media--phone">
          <video
            ref={mobileVideoRef}
            src={ANANTARA_VIDEO_MOBILE}
            className="fp-shot__video anantara-mobile-video"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="ANantara mobile app screen recording"
          />
        </div>
        <figcaption>Mobile preview</figcaption>
      </figure>
    </div>
  );
}

/** List card for /projects — same layout as the Featured projects cards. */
export function AnantaraProjectCard() {
  return (
    <article className="fp-project fp-project--anantara" id="anantara">
      <div className="fp-project__meta">
        <span className="fp-project__badge">Heritage &amp; STEM · Astro-tech</span>
        <h2 className="fp-project__title">
          <span className="fp-project__name">ANantara</span>
          <span className="fp-project__tagline">
            Interactive 3D platform for Jantar Mantar Yantras
          </span>
        </h2>
        <p className="fp-project__lead">
          A web and mobile platform for scientists, educators, students, and
          heritage enthusiasts to study, design, validate, and physically
          construct the geometric Yantras of Jantar Mantar—from anywhere in the
          world—with AI, simulation, and AR/VR.
        </p>
        <ul className="fp-project__list">
          <li>
            Turns location-bound heritage instruments into a learn-by-building
            digital experience.
          </li>
          <li>
            Seven core modules: design &amp; simulation, AR/VR observatory,
            AI classroom, exports (PDF/STL/fold sheets), Panchang &amp; Kundali,
            sky visualizer, and community.
          </li>
          <li>
            Stack spans Node/Express/Mongo, React, Flutter, Firebase, and
            immersive AR/VR.
          </li>
        </ul>
        <span className="fp-project-card__hint">View PDF →</span>
      </div>
      <AnantaraPreviewVideos />
    </article>
  );
}
