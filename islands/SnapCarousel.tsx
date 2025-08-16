// islands/SnapCarousel.tsx
import { useEffect, useRef, useState } from "preact/hooks";

type Item = { src: string; alt?: string; caption?: string };

export default function SnapCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current!;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const x = el.scrollLeft;
      setAtStart(x <= 1);
      setAtEnd(x >= max - 1);
      setProgress(max > 0 ? (x / max) * 100 : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollByView = (dir: 1 | -1) => {
    const el = trackRef.current!;
    const delta = Math.max(320, Math.min(el.clientWidth * 0.9, 640));
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <div class="relative">
      {/* fade edges */}
      <div class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
      <div class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />

      {/* rail */}
      <div
        ref={trackRef}
        class="no-scrollbar flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 outline-none"
        aria-label="UI screens carousel"
      >
        {items.map((it, i) => (
          <figure
            key={i}
            class="snap-start shrink-0 w-[90vw] sm:w-[620px] md:w-[780px] lg:w-[960px] xl:w-[1200px]
         overflow-hidden rounded-[2.4rem] bg-dark/[0.03] backdrop-blur-[2px]
         shadow-[0_60px_180px_-40px_rgba(0,0,0,0.7)]"
            style="contain: content;"
          >
            {/* TALL holder */}
            <div class="h-[70svh] md:h-[78svh] lg:h-[100svh] w-full bg-black">
              <img
                src={it.src}
                alt={it.alt ?? ""}
                class="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {it.caption && (
              <figcaption class="p-3 text-center text-xs text-white/60">
                {it.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      
    </div>
  );
}
