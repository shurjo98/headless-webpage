import { useRef, useState } from "preact/hooks";

export default function CaseCarousel({ shots }: { shots: string[] }) {
  const [i, setI] = useState(0);     // current slide index
  const [dx, setDx] = useState(0);   // drag delta in px (for live drag)
  const start = useRef<number | null>(null);

  function endDrag() {
    if (dx < -80 && i < shots.length - 1) setI(i + 1);
    else if (dx > 80 && i > 0) setI(i - 1);
    setDx(0);
    start.current = null;
  }

  return (
    <div
      class="relative h-[520px] w-full overflow-hidden rounded-2xl bg-stone-100"
      onPointerDown={(e) => (start.current = e.clientX)}
      onPointerMove={(e) => {
        if (start.current !== null) setDx(e.clientX - start.current);
      }}
      onPointerUp={endDrag}
      onPointerLeave={() => start.current !== null && endDrag()}
    >
      {/* Background (parallax 0.7x) */}
      <div
        class="absolute inset-0 flex will-change-transform transition-transform duration-200 ease-out pointer-events-none"
        // shift by slide width in %, plus live drag in px
        style={{ transform: `translateX(calc(${(-i * 100)}% + ${dx * 0.7}px))` }}
        aria-hidden="true"
      >
        {shots.map((s) => (
          <img
            key={`bg-${s}`}
            src={s}
            alt=""
            class="min-w-full h-full object-cover opacity-40"
            loading="lazy"
          />
        ))}
      </div>

      {/* Foreground slides (1:1) */}
      <div
        class="absolute inset-0 flex will-change-transform transition-transform duration-200 ease-out"
        style={{ transform: `translateX(calc(${(-i * 100)}% + ${dx}px))` }}
      >
        {shots.map((s, idx) => (
          <figure key={s} class="min-w-full grid place-items-center p-6">
            <img
              src={s}
              alt={`FastBites screen ${idx + 1}`}
              class="max-h-full rounded-xl bg-white object-contain ring-1 ring-black/10"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {shots.map((_, idx) => (
          <button
            aria-label={`Go to slide ${idx + 1}`}
            class={`h-2 w-2 rounded-full ${i === idx ? "bg-black" : "bg-black/30"}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}
