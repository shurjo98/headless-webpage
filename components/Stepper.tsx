/** @jsxImportSource preact */
import { h } from "preact";

type Props = {
  steps: { title: string }[];
  idx: number;
  setIdx: (i: number) => void;
};

export default function Stepper({ steps, idx, setIdx }: Props) {
  const pct = (idx / (steps.length - 1)) * 100; // 0 → 100

  /* dot size = w-10 (2.5rem) → half = 1.25rem = Tailwind spacing 5 */
  return (
    <div class="relative mb-6">
      {/* grey track (center‑to‑center) */}
      <div class="absolute left-5 right-5 top-1/2 h-1 -translate-y-1/2 bg-gray-200 rounded" />

      {/* blue progress bar */}
      <div
        class="absolute left-5 top-1/2 h-1 -translate-y-1/2 bg-primary-600 rounded transition-all"
        style={{ width: `${pct}%` }}
      />

      {/* dots */}
      <div class="relative flex gap-12 justify-between">
        {steps.map((_, i) => (
          <button
            key={i}
            class={`w-10 h-10 rounded-full flex items-center justify-center font-bold
              ${
                i === idx
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            onClick={() => i < idx && setIdx(i)}
            style={{ zIndex: 1 }} /* dots above bars */
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
