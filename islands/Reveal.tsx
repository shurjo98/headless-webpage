import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";
import type { JSX } from "preact/jsx-runtime";

type Props = {
  children: ComponentChildren;
  class?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;      // ms
  duration?: number;   // ms  <-- NEW
  once?: boolean;
};

export default function Reveal({
  children,
  class: cls = "",
  as = "div",
  delay = 0,
  duration = 1000,      // default matches tailwind (0.9s)
  once = true,
}: Props) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.remove("opacity-0", "translate-y-5");
      return;
    }

    el.classList.add("opacity-0", "translate-y-5", "will-change-transform");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.animationDelay = `${delay}ms`;
            el.style.animationDuration = `${duration}ms`;               // <- per-element speed
            el.style.animationTimingFunction = "cubic-bezier(0.22,1,0.36,1)";
            el.classList.add("animate-slideUp");
            el.classList.remove("opacity-0", "translate-y-5");
            if (once) io.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, duration, once]);

  return (
    <Tag ref={ref} class={cls}>
      {children}
    </Tag>
  );
}
