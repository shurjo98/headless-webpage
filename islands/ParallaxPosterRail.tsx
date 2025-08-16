// islands/ParallaxPosterRail.tsx
import { useEffect, useRef, useState } from "preact/hooks";

type Item = { src: string; alt?: string; caption?: string };
type Backdrop = "none" | "midnight" | "violet" | "emerald";

export default function ParallaxPosterRail({
  items,
  strength = 0.26,           // 0.18–0.32 works well
  backdrop = "midnight",      // themed glow behind cards
}: {
  items: Item[];
  strength?: number;
  backdrop?: Backdrop;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLFigureElement | null>>([]);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  // Horizontal rail UI
  useEffect(() => {
    const el = trackRef.current!;
    const onRailScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const x = el.scrollLeft;
      setAtStart(x <= 1);
      setAtEnd(x >= max - 1);
      setProgress(max > 0 ? (x / max) * 100 : 0);
    };
    onRailScroll();
    el.addEventListener("scroll", onRailScroll, { passive: true });
    addEventListener("resize", onRailScroll);
    return () => {
      el.removeEventListener("scroll", onRailScroll);
      removeEventListener("resize", onRailScroll);
    };
  }, []);

  // Vertical parallax (cards + backdrop)
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const vh = window.innerHeight || 1;
      // Cards
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const centerOffset = r.top + r.height / 2 - vh / 2; // -..+ range
        const variance = (i - (items.length - 1) / 2) * 0.04; // layered depth
        const y = -(centerOffset * (strength + variance));
        el.style.transform = `translate3d(0, ${y}px, 0) scale(1.04)`;
      });
      // Backdrop layers (slower = farther)
      const rail = trackRef.current?.getBoundingClientRect();
      if (rail) {
        const t = rail.top;
        if (bg1Ref.current) bg1Ref.current.style.transform = `translate3d(0, ${t * 0.12}px, 0)`;
        if (bg2Ref.current) bg2Ref.current.style.transform = `translate3d(0, ${t * 0.06}px, 0)`;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length, strength]);

  const scrollByView = (dir: 1 | -1) => {
    const el = trackRef.current!;
    const delta = Math.max(560, Math.min(el.clientWidth * 0.9, 1000));
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  // Backdrop theme tokens
  const theme = {
    midnight: {
      g1: "from-white/10 via-white/4 to-transparent",
      g2: "from-indigo-400/15 via-fuchsia-400/10 to-transparent",
    },
    violet: {
      g1: "from-fuchsia-400/15 via-violet-400/10 to-transparent",
      g2: "from-white/10 via-white/5 to-transparent",
    },
    emerald: {
      g1: "from-emerald-400/15 via-teal-400/10 to-transparent",
      g2: "from-white/10 via-white/5 to-transparent",
    },
    none: {
      g1: "from-transparent via-transparent to-transparent",
      g2: "from-transparent via-transparent to-transparent",
    },
  }[backdrop];

  return (
    <div class="relative">
      {/* Parallax backdrop layers */}
      <div ref={bg1Ref} class="pointer-events-none absolute inset-0 -z-20">
        <div class={`absolute -top-1/3 left-1/2 h-[720px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-b ${theme.g1} blur-3xl`} />
      </div>
      <div ref={bg2Ref} class="pointer-events-none absolute inset-0 -z-20">
        <div class={`absolute -bottom-1/3 right-10 h-[520px] w-[520px] rounded-full bg-gradient-to-t ${theme.g2} blur-3xl`} />
      </div>

      {/* edge fades */}
      <div class="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent -z-10" />
      <div class="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black to-transparent -z-10" />

      {/* rail */}
      <div
        ref={trackRef}
        class="no-scrollbar flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory py-10"
        aria-label="App screens gallery"
      >
        {items.map((it, i) => (
          <figure
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            class="snap-start shrink-0 w-[96vw] sm:w-[820px] md:w-[1040px] lg:w-[1240px] xl:w-[1400px]
         overflow-hidden rounded-[2.8rem] bg-white/[0.04]
         backdrop-blur-[2px] shadow-[0_80px_240px_-60px_rgba(0,0,0,0.85)] will-change-transform"

            style="contain: content;"
          >
            {/* ambient glow + glossy highlight */}
            <div aria-hidden class="absolute -inset-12 -z-10 rounded-[3rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-[70px]" />
            <div aria-hidden class="pointer-events-none absolute inset-x-0 -top-1/3 h-1/2 bg-gradient-to-b from-white/25 via-white/10 to-transparent" />

            <div class="aspect-[3/4] bg-black">
              <img
                src={it.src}
                alt={it.alt ?? ""}
                class="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {it.caption && (
              <figcaption class="p-5 text-center text-xs text-dark/70">
                {it.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

    
    </div>
  );
}
