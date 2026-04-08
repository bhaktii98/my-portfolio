const BASE_URL = import.meta.env.BASE_URL;
const SIH_2024_SRC =
  `${BASE_URL}achievements/` + encodeURIComponent("SIH-2024 Winner.png");
const SIH_2025_SRC = `${BASE_URL}achievements/SIH-2025.png`;

const ITEMS = [
  {
    src: SIH_2024_SRC,
    title: "National hackathon winner",
    subtitle: "Smart India Hackathon 2024",
    caption:
      "Grand finale winner with team AKATSUKI_AU — ₹1,00,000 prize at Ramaiah University, Bengaluru.",
    alt: "Bhakti holding the SIH 2024 winner cheque on stage at the grand finale.",
  },
  {
    src: SIH_2025_SRC,
    title: "National hackathon winner",
    subtitle: "Smart India Hackathon 2025",
    caption:
      "National-level Smart India Hackathon — SIH 2025.",
    alt: "Smart India Hackathon 2025 — national hackathon.",
  },
] as const;

export function Achievements() {
  return (
    <section
      className="achievements"
      id="achievements"
      aria-labelledby="achievements-heading"
    >
      <div className="section-head">
        <h2 id="achievements-heading">
          <span className="sans">Awards / </span>
          <span className="serif">Achievements</span>
        </h2>
        <p>
          National hackathon wins at Smart India Hackathon — proof on stage and
          with the team.
        </p>
      </div>

      <div className="achievements__grid">
        {ITEMS.map((item) => (
          <figure key={item.src} className="achievements__card">
            <div className="achievements__frame">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
            <figcaption className="achievements__body">
              <p className="achievements__kicker">{item.title}</p>
              <h3 className="achievements__name">{item.subtitle}</h3>
              <p className="achievements__caption">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
