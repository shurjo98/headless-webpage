// islands/AOSProvider.tsx
import { useEffect } from "preact/hooks";

type Props = {
  autoTargets?: string[];
  distancePx?: number;   // how far it slides up (default 32)
  durationMs?: number;   // transition time (default 1200)
  delayStepMs?: number;  // sibling stagger (default 100)
  threshold?: number;    // default 0.15
  rootMargin?: string;   // default "0px 0px -12% 0px"
};

export default function AOSProvider({
  autoTargets = [],
  distancePx = 32,
  durationMs = 1200,
  delayStepMs = 100,
  threshold = 0.15,
  rootMargin = "0px 0px -12% 0px",
}: Props) {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes: HTMLElement[] = [];
    autoTargets.forEach((sel) =>
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => nodes.push(el))
    );
    if (!nodes.length) return;

    nodes.forEach((el) => {
      if (reduce) {
        el.style.opacity = "1";
        el.style.transform = "none";
        return;
      }

      // Initial, tasteful hidden state:
      // opacity 0, slide down a bit, tiny scale, slight blur.
      el.classList.add(
        // keep these literal so Tailwind JIT generates them
        "opacity-0",
        "transition-[opacity,transform,filter]",
        "ease-[cubic-bezier(0.16,1,0.3,1)]", // gentle, elastic-ish ease-out
        "duration-[1200ms]",                 // long and smooth
        "filter",
        "blur-[2px]",
        "transform-gpu"
      );

      // translateY + scale use inline style so we can combine them
      el.style.transform = `translateY(${distancePx}px) scale(.98)`;
      el.style.willChange = "opacity, transform, filter";

      // If you want exact ms, set it inline too (works with the class above)
      el.style.transitionDuration = `${durationMs}ms`;
    });

    if (reduce) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;

          // stagger by sibling order
          const sibs = Array.from(el.parentElement?.children ?? []);
          const idx = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = `${idx * delayStepMs}ms`;

          // Reveal: fade in, remove blur, slide + scale to resting
          el.classList.remove("opacity-0", "blur-[2px]");
          el.classList.add("opacity-100", "blur-0");
          el.style.transform = "translateY(0) scale(1)";

          io.unobserve(el);
        });
      },
      { threshold, rootMargin }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [autoTargets, distancePx, durationMs, delayStepMs, threshold, rootMargin]);

  return null;
}
