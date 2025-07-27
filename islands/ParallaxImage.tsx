// islands/ParallaxImage.tsx
import { useSignal } from "@preact/signals";

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: Props) {
  const x = useSignal(0);
  const y = useSignal(0);

  function onPointerMove(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;
    const { left, top, width, height } = el.getBoundingClientRect();
    // normalize [-0.5 .. +0.5]
    const dx = (e.clientX - left) / width  - 0.5;
    const dy = (e.clientY - top)  / height - 0.5;
    x.value = dx * 20;    // max 20px offset
    y.value = dy * 20;
  }

  function reset() {
    x.value = 0;
    y.value = 0;
  }

  return (
    <div
      class={className + " will-change-transform"}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
        transform: `translate3d(${x.value}px, ${y.value}px, 0)`,
      }}
    >
      <img src={src} alt={alt} class="w-full h-auto" draggable={false} />
    </div>
  );
}
