import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  /** Tailwind animation name from your config: "slideUp" | "fadeIn" | "popIn" | etc. */
  anim?: "slideUp" | "fadeIn" | "popIn";
  /** Delay in ms before starting the animation once visible */
  delayMs?: number;
  /** Animate only once (default true) */
  once?: boolean;
  class?: string;
};

export default function AnimateOnView({
  children,
  anim = "slideUp",
  delayMs = 0,
  once = true,
  class: cls = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = setTimeout(() => {
              // remove initial opacity and add the Tailwind animation class
              el.classList.remove("opacity-0");
              el.classList.add(`motion-safe:animate-${anim}`);
            }, delayMs);
            if (once) io.unobserve(e.target);
            return () => clearTimeout(id);
          } else if (!once) {
            el.classList.remove(`motion-safe:animate-${anim}`);
            el.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [anim, delayMs, once]);

  // start hidden; Tailwind will run the animation class we add on view
  return (
    <div
      ref={ref}
      class={`opacity-0 will-change-transform ${cls}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
