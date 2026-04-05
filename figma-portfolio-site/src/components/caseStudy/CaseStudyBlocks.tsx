import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type CaseStudyRow = {
  label: string;
  content: ReactNode;
  /** Stacked label + body use full panel width (no narrow label column). */
  layout?: "default" | "full";
};
export type CaseStudyTaped = { title: string; body: string; foot: string };

export type CaseStudyShot = {
  label: string;
  url: string;
  src: string;
  alt: string;
};

export function ReportScreenshot({
  url,
  src,
  alt,
  variant,
}: {
  url: string;
  src: string;
  alt: string;
  variant: "primary" | "secondary" | "scroll";
}) {
  const cls =
    variant === "primary"
      ? "case-study__frame case-study__frame--primary"
      : variant === "secondary"
        ? "case-study__frame case-study__frame--secondary"
        : "case-study__frame case-study__frame--scroll";
  return (
    <div className={cls}>
      <div className="case-study__frame-chrome">
        <div className="case-study__frame-dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="case-study__frame-url-pill">
          <span className="case-study__frame-url" title={url}>
            {url}
          </span>
        </div>
      </div>
      <div className="case-study__frame-body">
        <div className="case-study__frame-img">
          <img src={src} alt={alt} loading="lazy" />
        </div>
      </div>
    </div>
  );
}

type BaseProps = {
  num: string;
  title: string;
  subtitle: string;
  rows: CaseStudyRow[];
  taped: CaseStudyTaped[];
  tapedHeadingId: string;
  tapedTitle: string;
  stack: string[];
  tools?: string[];
  externalLinks?: { label: string; href: string }[];
};

function CaseStudyScrollGallery({
  title,
  shots,
}: {
  title: string;
  shots: CaseStudyShot[];
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    const eps = 4;
    setCanPrev(scrollLeft > eps);
    setCanNext(scrollLeft + clientWidth < scrollWidth - eps);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [shots.length, updateArrows]);

  const scrollStep = (dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".case-study__shot-slide");
    if (!slide) return;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap) || 16;
    const delta = slide.offsetWidth + gap;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <div
      className="case-study__gallery-wrap case-study__gallery-wrap--scroll"
      data-scroll-hint
    >
      <p className="case-study__scroll-hint">
        <span className="case-study__scroll-hint-text">
          Drag to scroll or use the side arrows
        </span>
      </p>
      <div className="case-study__gallery-scroll-row">
        <button
          type="button"
          className="case-study__scroll-btn"
          aria-label={`Previous ${title} screenshot`}
          disabled={!canPrev}
          onClick={() => scrollStep(-1)}
        >
          <span className="case-study__scroll-btn-icon" aria-hidden>
            ‹
          </span>
        </button>
        <div
          ref={stripRef}
          className="case-study__gallery-scroll"
          tabIndex={0}
          role="region"
          aria-label={`${title} screenshots, scroll horizontally`}
        >
          {shots.map((shot, i) => (
            <figure key={shot.src} className="case-study__shot-slide">
              <figcaption className="case-study__shot-cap">
                <span className="case-study__shot-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {shot.label}
              </figcaption>
              <ReportScreenshot
                variant="scroll"
                url={shot.url}
                src={shot.src}
                alt={shot.alt}
              />
            </figure>
          ))}
        </div>
        <button
          type="button"
          className="case-study__scroll-btn"
          aria-label={`Next ${title} screenshot`}
          disabled={!canNext}
          onClick={() => scrollStep(1)}
        >
          <span className="case-study__scroll-btn-icon" aria-hidden>
            ›
          </span>
        </button>
      </div>
    </div>
  );
}

type GridGalleryProps = BaseProps & {
  shots?: undefined;
  primaryImg: string;
  primaryAlt: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryImg: string;
  secondaryAlt: string;
  secondaryLabel: string;
  secondaryUrl: string;
};

type ScrollGalleryProps = BaseProps & {
  shots: CaseStudyShot[];
  primaryImg?: undefined;
  primaryAlt?: undefined;
  primaryLabel?: undefined;
  primaryUrl?: undefined;
  secondaryImg?: undefined;
  secondaryAlt?: undefined;
  secondaryLabel?: undefined;
  secondaryUrl?: undefined;
};

/** Rows + highlights + stack only (no screenshot gallery). */
export type NoGalleryCaseStudyProps = BaseProps & {
  shots?: undefined;
  primaryImg?: undefined;
  primaryAlt?: undefined;
  primaryLabel?: undefined;
  primaryUrl?: undefined;
  secondaryImg?: undefined;
  secondaryAlt?: undefined;
  secondaryLabel?: undefined;
  secondaryUrl?: undefined;
};

export type CaseStudyProjectProps =
  | GridGalleryProps
  | ScrollGalleryProps
  | NoGalleryCaseStudyProps;

export function CaseStudyProject(props: CaseStudyProjectProps) {
  const {
    num,
    title,
    subtitle,
    rows,
    taped,
    tapedHeadingId,
    tapedTitle,
    stack,
    externalLinks,
    tools,
  } = props;

  const isScroll = "shots" in props && props.shots && props.shots.length > 0;
  const isGrid =
    !isScroll &&
    "primaryImg" in props &&
    Boolean(props.primaryImg) &&
    "secondaryImg" in props &&
    Boolean(props.secondaryImg);
  const grid = isGrid ? (props as GridGalleryProps) : null;

  return (
    <div className="case-study__project">
      <div className="case-study__project-panel">
        <header className="case-study__project-head">
          <div className="case-study__project-head-text">
            <h2 className="case-study__title">
              <span className="case-study__title-num">{num}</span> {title}
            </h2>
            <p className="case-study__subtitle">{subtitle}</p>
          </div>
          {externalLinks && externalLinks.length > 0 ? (
            <nav
              className="case-study__head-links"
              aria-label={`${title} external links`}
            >
              {externalLinks.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study__head-link"
                >
                  {l.label} ↗
                </a>
              ))}
            </nav>
          ) : null}
        </header>

        <div className="case-study__rows">
          {rows.map((row) => (
            <div
              key={row.label}
              className={
                row.layout === "full"
                  ? "case-study__row case-study__row--full"
                  : "case-study__row"
              }
            >
              <div className="case-study__row-label">{row.label}</div>
              <div className="case-study__row-body">{row.content}</div>
            </div>
          ))}
        </div>

        {isScroll ? (
          <CaseStudyScrollGallery title={title} shots={props.shots} />
        ) : grid ? (
          <div className="case-study__gallery-wrap">
            <div className="case-study__gallery" aria-label={`${title} screenshots`}>
              <figure className="case-study__shot case-study__shot--primary">
                <figcaption className="case-study__shot-cap">
                  <span className="case-study__shot-num">01</span>
                  {grid.primaryLabel}
                </figcaption>
                <ReportScreenshot
                  variant="primary"
                  url={grid.primaryUrl}
                  src={grid.primaryImg}
                  alt={grid.primaryAlt}
                />
              </figure>
              <figure className="case-study__shot case-study__shot--secondary">
                <figcaption className="case-study__shot-cap">
                  <span className="case-study__shot-num">02</span>
                  {grid.secondaryLabel}
                </figcaption>
                <ReportScreenshot
                  variant="secondary"
                  url={grid.secondaryUrl}
                  src={grid.secondaryImg}
                  alt={grid.secondaryAlt}
                />
              </figure>
            </div>
          </div>
        ) : null}

        <section className="case-study__components" aria-labelledby={tapedHeadingId}>
          <h3 id={tapedHeadingId} className="case-study__components-title">
            {tapedTitle}
          </h3>
          <div className="case-study__taped-grid">
            {taped.map((c) => (
              <div key={c.title} className="case-study-card">
                <p className="case-study-card__title">{c.title}</p>
                <p className="case-study-card__body">{c.body}</p>
                <p className="case-study-card__foot">{c.foot}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-study__stack" aria-label={`${title} stack`}>
          <h3 className="case-study__stack-heading">Stack</h3>
          <ul className="case-study__stack-list">
            {stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {tools && tools.length > 0 ? (
          <section
            className="case-study__stack case-study__stack--tools"
            aria-label={`${title} tools`}
          >
            <h3 className="case-study__stack-heading">Tools</h3>
            <ul className="case-study__stack-list">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
