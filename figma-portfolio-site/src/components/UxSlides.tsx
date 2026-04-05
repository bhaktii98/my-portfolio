import { useRef } from "react";
import { projects } from "../data/projects";

/**
 * Two-column vertical galleries with mirrored scroll: scrolling one column
 * moves the other in the opposite direction (mirrored vertical scroll strip).
 */
export function UxSlides() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const shots = [
    ...projects.map((p) => p.imageA),
    ...projects.map((p) => p.imageB),
  ];

  const onLeftScroll = () => {
    const L = leftRef.current;
    const R = rightRef.current;
    if (!L || !R) return;
    const maxL = L.scrollHeight - L.clientHeight;
    const maxR = R.scrollHeight - R.clientHeight;
    if (maxL <= 0 || maxR <= 0) return;
    const t = L.scrollTop / maxL;
    R.scrollTop = (1 - t) * maxR;
  };

  const onRightScroll = () => {
    const L = leftRef.current;
    const R = rightRef.current;
    if (!L || !R) return;
    const maxL = L.scrollHeight - L.clientHeight;
    const maxR = R.scrollHeight - R.clientHeight;
    if (maxL <= 0 || maxR <= 0) return;
    const t = R.scrollTop / maxR;
    L.scrollTop = (1 - t) * maxL;
  };

  return (
    <section className="ux" id="ux-slides" aria-labelledby="ux-heading">
      <div className="section-head">
        <h2 id="ux-heading">
          <span className="sans">low-key </span>
          <span className="serif">stars.</span>
        </h2>
        <p>Not spotlighted, but still stellar.</p>
      </div>
      <div className="ux__columns">
        <div
          className="ux__col"
          ref={leftRef}
          onScroll={onLeftScroll}
          tabIndex={0}
          role="region"
          aria-label="UX gallery column A"
        >
          {shots.map((src, i) => (
            <div key={`l-${i}`} className="ux__shot">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <div
          className="ux__col"
          ref={rightRef}
          onScroll={onRightScroll}
          tabIndex={0}
          role="region"
          aria-label="UX gallery column B"
        >
          {[...shots].reverse().map((src, i) => (
            <div key={`r-${i}`} className="ux__shot">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
