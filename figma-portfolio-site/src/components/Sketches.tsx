import { assets } from "../figmaAssets";
import { projects } from "../data/projects";

export function Sketches() {
  const slides = [
    assets.sketchMain,
    projects[2].imageA,
    projects[1].imageB,
    projects[3].imageA,
    assets.sketchMain,
  ];

  return (
    <section className="sketches" id="sketches" aria-labelledby="sketches-heading">
      <div className="section-head">
        <h2 id="sketches-heading">
          <span className="sans">Sketched &amp; </span>
          <span className="serif">Said</span>
        </h2>
        <p>
          That&apos;s how I make sense to the world Enjoy! Little Bhakti will
          be a little proud to showcase to the world
        </p>
      </div>
      <div className="sketches__rail" role="list">
        {slides.map((src, i) => (
          <div key={i} className="sketch-card" role="listitem">
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
