import { useEffect, useRef } from "react";
import { projects } from "../data/projects";

const FLOATS = [
  { src: projects[0].imageA, className: "life__float lf1" },
  { src: projects[1].imageB, className: "life__float lf2" },
  { src: projects[2].imageA, className: "life__float lf3" },
  { src: projects[3].imageB, className: "life__float lf4" },
];

export function LifeAround() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const floats = el.querySelectorAll<HTMLElement>(".life__float");

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - (rect.top + rect.height / 2) / (vh + rect.height);
      const t = Math.min(1, Math.max(0, progress));

      floats.forEach((node, i) => {
        const amp = 12 + i * 6;
        const dir = i % 2 === 0 ? 1 : -1;
        node.style.transform = `translateY(${dir * (t - 0.5) * amp}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="life"
      id="life"
      aria-labelledby="life-heading"
    >
      <div className="life__sticky">
        <h2 id="life-heading">
          <span className="sans">Life </span>
          <span className="serif">around</span>
          <span className="sans"> me</span>
        </h2>
        <p>Design is personal. This is where it gets real.</p>
      </div>
      <div className="life__floats" aria-hidden>
        {FLOATS.map((f, i) => (
          <div key={i} className={f.className}>
            <img src={f.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
