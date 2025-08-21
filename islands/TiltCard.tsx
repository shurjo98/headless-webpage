import { h } from "preact";
import { useRef } from "preact/hooks";

type Props = {
  children: preact.ComponentChildren;
  maxTilt?: number; // degrees
  class?: string;
};

export default function TiltCard({ children, maxTilt = 6, class: cls = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rx = (+dy * maxTilt).toFixed(2);
    const ry = (-dx * maxTilt).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove as any}
      onMouseLeave={onLeave}
      class={`will-change-transform transition-transform duration-200 ${cls}`}
      style={{ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" }}
    >
      {children}
    </div>
  );
}
