// islands/ParallaxMarquee.tsx
import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

type Props = {
  src: string;
  alt?: string;
  children?: ComponentChildren; // overlay content (headline, CTAs, etc.)
  strength?: number;            // parallax strength (0.2–0.5). Default 0.35
  minHeight?: string;           // e.g., "220svh", "260svh"
};

export default function ParallaxMarquee({
  src,
  alt = "",
  children,
  strength = 0.35,
  minHeight = "220svh",
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current!;
      const img = imgRef.current!;
      const rect = el.getBoundingClientRect();
      // Move image at a slower rate than scroll; scale slightly to keep cover edges clean
      const ty = rect.top * strength;
      img.style.transform = `translate3d(0, ${ty}px, 0) scale(1.1)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <section
      ref={sectionRef as any}
      class="relative isolate w-screen -mx-[calc(50vw-50%)] overflow-hidden bg-black text-dark"
      style={{ minHeight }}
      aria-label="Signature marquee"
    >
      {/* Background image (parallax) */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        class="absolute inset-0 h-full w-full object-cover will-change-transform"
        loading="eager"
        decoding="async"
        
      />

      {/* Readability vignette */}
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

      {/* Sticky viewport frame keeps text pinned while you scroll the tall section */}
      <div class="relative sticky top-0 h-[100svh]">
        <div class="mx-auto flex h-full items-end md:items-center px-6 md:px-8 max-w-7xl">
          {children}
        </div>
      </div>
    </section>
  );
}
