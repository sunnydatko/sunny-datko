import { useEffect, useRef, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/* Decorative botanical sprig (lavender-like) that sways gently        */
/* ------------------------------------------------------------------ */
const BotanicalSprig = ({
  style,
  className,
}: {
  style?: CSSProperties;
  className?: string;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 60 220"
    fill="none"
    stroke="rgba(167,138,178,0.55)"
    strokeWidth={1.1}
    strokeLinecap="round"
    aria-hidden
  >
    {/* main stem */}
    <path d="M30 220 C 30 150, 30 110, 30 40" />
    {/* leaves */}
    <path d="M30 168 C 14 158, 8 168, 6 180" />
    <path d="M30 150 C 46 140, 52 150, 54 162" />
    <path d="M30 128 C 16 120, 10 128, 8 140" />
    {/* lavender buds toward the top */}
    {[40, 52, 64, 76, 88, 100].map((y, i) => (
      <g key={y} transform={`translate(0 ${y})`}>
        <circle cx={30} cy={0} r={i < 2 ? 2.6 : 2.2} fill="rgba(167,138,178,0.35)" />
        <line x1={30} y1={-3} x2={24} y2={-7} />
        <line x1={30} y1={-3} x2={36} y2={-7} />
      </g>
    ))}
  </svg>
);

/* ------------------------------------------------------------------ */
/* Slow-drifting plum / olive auras + parallax + botanicals            */
/* ------------------------------------------------------------------ */
const GradientAura = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.06}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="ambient-layer" aria-hidden>
      <div ref={ref} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <div className="ambient-aura plum" />
        <div className="ambient-aura olive" />
        <div className="ambient-aura plum-deep" />
        <BotanicalSprig
          className="sway"
          style={{ position: "absolute", bottom: -10, left: "3vw", width: 90, height: 240, opacity: 0.12 }}
        />
        <BotanicalSprig
          className="sway sway-slow"
          style={{
            position: "absolute",
            bottom: -10,
            right: "4vw",
            width: 80,
            height: 220,
            opacity: 0.1,
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Floating particles + constellation lines (canvas)                   */
/* ------------------------------------------------------------------ */
type Particle = { x: number; y: number; vx: number; vy: number; r: number };

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    const LINK_DIST = 130;

    const count = () => {
      const base = Math.round((window.innerWidth * window.innerHeight) / 26000);
      return Math.max(26, Math.min(70, base));
    };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: count() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.5 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,241,236,0.45)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(167,138,178,${(1 - dist / LINK_DIST) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    init();
    if (reduced) draw();
    else loop();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(init, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-particles" aria-hidden />;
};

/* ------------------------------------------------------------------ */
/* Plum glow that smoothly trails the cursor (fine pointers only)      */
/* ------------------------------------------------------------------ */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
    };
    const loop = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div ref={ref} className="ambient-cursor-glow" style={{ opacity: 0 }} aria-hidden />;
};

/* ------------------------------------------------------------------ */
/* Reveal-on-scroll: toggles .is-visible on any .reveal element        */
/* ------------------------------------------------------------------ */
const ScrollReveal = () => {
  useEffect(() => {
    const reduced =
      prefersReducedMotion() || !("IntersectionObserver" in window);
    const seen = new WeakSet<Element>();

    const io = reduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );

    // Scan for .reveal elements. Home is lazy-loaded, so new elements can
    // appear after mount — a MutationObserver keeps us in sync.
    const scan = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (io) io.observe(el);
        else el.classList.add("is-visible");
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
};

/* ------------------------------------------------------------------ */
const Ambient = () => {
  const { pathname } = useLocation();
  const isCaseStudy = pathname.startsWith("/case-study/");
  if (typeof document === "undefined") return null;
  return (
    <>
      {!isCaseStudy &&
        createPortal(
          <>
            <GradientAura />
            <ParticleField />
            <CursorGlow />
            <div className="ambient-noise" aria-hidden />
          </>,
          document.body
        )}
      <ScrollReveal />
    </>
  );
};

export default Ambient;
