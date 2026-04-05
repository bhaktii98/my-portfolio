import Matter from "matter-js";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "bhakti-about-skills-physics-v1";

const INITIAL_FRAC: Record<string, { x: number; y: number }> = {
  "UX Design": { x: 0.42, y: 0.38 },
  Illustrations: { x: 0.2, y: 0.48 },
  "Concept developement": { x: 0.12, y: 0.32 },
  "UX Audit": { x: 0.55, y: 0.52 },
  "Visual Design": { x: 0.78, y: 0.45 },
  "Rapid prototyping": { x: 0.68, y: 0.28 },
  "Persona mapping": { x: 0.32, y: 0.58 },
};

const INITIAL_ANGLE: Record<string, number> = {
  "UX Design": -0.42,
  Illustrations: 0.06,
  "Concept developement": 0.38,
  "UX Audit": 0.02,
  "Visual Design": 0.48,
  "Rapid prototyping": Math.PI / 2 - 0.12,
  "Persona mapping": Math.PI - 0.08,
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

function loadSaved(): Record<
  string,
  { x: number; y: number; angle: number }
> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Record<
      string,
      { x: number; y: number; angle: number }
    >;
  } catch {
    return null;
  }
}

function saveLayout(
  skills: readonly string[],
  bodies: Map<string, Matter.Body>,
  w: number,
  h: number,
) {
  if (w < 8 || h < 8) return;
  const out: Record<string, { x: number; y: number; angle: number }> = {};
  for (const s of skills) {
    const b = bodies.get(s);
    if (!b) continue;
    out[s] = {
      x: b.position.x / w,
      y: b.position.y / h,
      angle: b.angle,
    };
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(out));
  } catch {
    /* ignore */
  }
}

type Props = { skills: readonly string[] };

export function SkillsPhysicsStage({ skills }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef(new Map<string, HTMLSpanElement>());
  const bodiesRef = useRef(new Map<string, Matter.Body>());
  const rafRef = useRef(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const [measured, setMeasured] = useState<Record<
    string,
    { w: number; h: number }
  > | null>(null);
  const [draggingLabel, setDraggingLabel] = useState<string | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const savedStatic = useMemo(
    () => (reducedMotion ? loadSaved() : null),
    [reducedMotion],
  );

  const setLabelRef = useCallback((id: string, el: HTMLSpanElement | null) => {
    if (el) labelRefs.current.set(id, el);
    else labelRefs.current.delete(id);
  }, []);

  useLayoutEffect(() => {
    if (reducedMotion) {
      setMeasured({});
      return;
    }
    const stage = stageRef.current;
    if (!stage) return;
    const dims: Record<string, { w: number; h: number }> = {};
    for (const s of skills) {
      const el = labelRefs.current.get(s);
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w < 4 || h < 4) return;
      dims[s] = { w, h };
    }
    setMeasured(dims);
  }, [skills, reducedMotion]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion) return;
    if (!measured || Object.keys(measured).length === 0) return;

    const { width: W, height: H } = stage.getBoundingClientRect();
    if (W < 40 || H < 40) return;
    dimensionsRef.current = { w: W, h: H };

    const engine = Matter.Engine.create({
      enableSleeping: true,
      gravity: { x: 0, y: 0.95, scale: 0.001 },
    });
    engine.constraintIterations = 4;
    engine.positionIterations = 12;
    engine.velocityIterations = 10;

    const wallT = 80;
    const ground = Matter.Bodies.rectangle(
      W / 2,
      H + wallT / 2 - 4,
      W + wallT * 2,
      wallT,
      { isStatic: true, friction: 0.92 },
    );
    const leftWall = Matter.Bodies.rectangle(
      -wallT / 2 + 4,
      H / 2,
      wallT,
      H * 2,
      { isStatic: true, friction: 0.45 },
    );
    const rightWall = Matter.Bodies.rectangle(
      W + wallT / 2 - 4,
      H / 2,
      wallT,
      H * 2,
      { isStatic: true, friction: 0.45 },
    );

    const saved = loadSaved();
    const bodies: Matter.Body[] = [];

    for (const s of skills) {
      const dim = measured[s];
      if (!dim) continue;
      const { w, h } = dim;
      const frac = INITIAL_FRAC[s] ?? { x: 0.5, y: 0.45 };
      let x = frac.x * W;
      let y = frac.y * H * 0.55 + H * 0.18;
      let angle = INITIAL_ANGLE[s] ?? 0;

      const sv = saved?.[s];
      if (
        sv &&
        typeof sv.x === "number" &&
        typeof sv.y === "number" &&
        typeof sv.angle === "number"
      ) {
        x = sv.x * W;
        y = sv.y * H;
        angle = sv.angle;
      }

      const chamfer = Matter.Common.clamp(
        Math.min(w, h) * 0.36,
        4,
        Math.min(w, h) / 2 - 2,
      );
      const body = Matter.Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: chamfer },
        friction: 0.58,
        frictionStatic: 0.85,
        frictionAir: 0.042,
        restitution: 0.05,
        density: 0.0024,
        label: s,
      });
      Matter.Body.setAngle(body, angle);
      bodies.push(body);
      bodiesRef.current.set(s, body);
    }

    Matter.Composite.add(engine.world, [...bodies, ground, leftWall, rightWall]);

    const mouse = Matter.Mouse.create(stage);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.34,
        damping: 0.07,
        render: { visible: false },
      },
    });
    Matter.Composite.add(engine.world, mouseConstraint);

    const onStart = (e: Matter.IEvent<Matter.MouseConstraint>) => {
      const b = (e as Matter.IEvent<Matter.MouseConstraint> & { body?: Matter.Body })
        .body;
      if (b?.label) setDraggingLabel(String(b.label));
    };
    const onEnd = () => {
      setDraggingLabel(null);
      saveLayout(skills, bodiesRef.current, W, H);
    };

    Matter.Events.on(mouseConstraint, "startdrag", onStart);
    Matter.Events.on(mouseConstraint, "enddrag", onEnd);

    const syncDom = () => {
      for (const s of skills) {
        const b = bodiesRef.current.get(s);
        const el = labelRefs.current.get(s);
        if (!b || !el) continue;
        el.style.visibility = "visible";
        el.style.left = `${b.position.x}px`;
        el.style.top = `${b.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${b.angle}rad)`;
      }
    };

    const loop = () => {
      Matter.Engine.update(engine, 1000 / 60);
      syncDom();
      rafRef.current = requestAnimationFrame(loop);
    };
    syncDom();
    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      Matter.Events.off(mouseConstraint, "startdrag", onStart);
      Matter.Events.off(mouseConstraint, "enddrag", onEnd);
      Matter.Mouse.clearSourceEvents(mouse);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
      bodiesRef.current.clear();
    };
  }, [measured, skills, reducedMotion]);

  const resetPhysics = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    const { w: W, h: H } = dimensionsRef.current;
    if (W < 40 || H < 40) {
      window.location.reload();
      return;
    }
    for (const s of skills) {
      const b = bodiesRef.current.get(s);
      if (!b) continue;
      const frac = INITIAL_FRAC[s] ?? { x: 0.5, y: 0.45 };
      const x = frac.x * W;
      const y = frac.y * H * 0.55 + H * 0.18;
      const angle = INITIAL_ANGLE[s] ?? 0;
      Matter.Body.setPosition(b, { x, y });
      Matter.Body.setAngle(b, angle);
      Matter.Body.setVelocity(b, { x: 0, y: 0 });
      Matter.Body.setAngularVelocity(b, 0);
      Matter.Sleeping.set(b, false);
    }
  }, [skills]);

  return (
    <>
      <p className="vf-skills-drag-hint">
        Drag the chips — they bump, tilt, and stack without overlapping.
      </p>
      <div className="vf-skills-toolbar">
        <button type="button" className="vf-skills-reset" onClick={resetPhysics}>
          Reset scatter
        </button>
      </div>
      <div
        ref={stageRef}
        className="vf-skills-stage vf-skills-stage--physics"
        aria-label="Skills — physics chips, drag to move"
      >
        {skills.map((s, i) => {
          const frac = INITIAL_FRAC[s] ?? { x: 0.5, y: 0.45 };
          const angle = INITIAL_ANGLE[s] ?? 0;
          const sv = savedStatic?.[s];

          if (reducedMotion) {
            const x = sv?.x ?? frac.x;
            const y = sv?.y ?? frac.y * 0.55 + 0.18;
            const a = sv?.angle ?? angle;
            return (
              <span
                key={s}
                ref={(el) => setLabelRef(s, el)}
                className="vf-skill-pill vf-skill-pill--physics"
                style={{
                  left: `${x * 100}%`,
                  top: `${y * 100}%`,
                  transform: `translate(-50%, -50%) rotate(${a}rad)`,
                  zIndex: 10 + i,
                  visibility: "visible",
                }}
                tabIndex={-1}
                aria-label={s}
              >
                {s}
              </span>
            );
          }

          return (
            <span
              key={s}
              ref={(el) => setLabelRef(s, el)}
              className={
                "vf-skill-pill vf-skill-pill--physics" +
                (draggingLabel === s ? " vf-skill-pill--physics-drag" : "")
              }
              style={{
                visibility: "hidden",
                zIndex: draggingLabel === s ? 50 : 10 + i,
              }}
              tabIndex={-1}
              aria-label={`${s} — draggable`}
            >
              {s}
            </span>
          );
        })}
      </div>
    </>
  );
}
