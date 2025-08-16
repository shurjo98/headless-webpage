import { useRef } from "preact/hooks";

type Item = { img: string; title: string; desc: string };

export default function Carousel({
  items,
  class: cls = "",
  cardWidth = { base: "w-[88%]", sm: "sm:w-[70%]", md: "md:w-[46%]", lg: "lg:w-[32%]" },
}: {
  items: Item[];
  class?: string;
  cardWidth?: { base: string; sm?: string; md?: string; lg?: string };
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div class={`relative ${cls}`}>
      {/* scroller */}
      <div
        ref={scrollerRef}
        class="
          -mx-6 px-6 md:-mx-8 md:px-8
          overflow-x-auto scroll-smooth scrollbar-hide
          snap-x snap-mandatory
          [mask-image:linear-gradient(to_right,transparent,black_2rem,black_calc(100%-2rem),transparent)]
        "
      >
        <div class="flex gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              class={`snap-start shrink-0 ${cardWidth.base} ${cardWidth.sm ?? ""} ${cardWidth.md ?? ""} ${cardWidth.lg ?? ""}`}
            >
              <figure class="overflow-hidden rounded-3xl bg-neutral-900">
                <img
                  src={it.img}
                  alt={it.title}
                  class="block w-full h-80 md:h-[22rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <h4 class="mt-4 text-lg font-semibold leading-snug">{it.title}</h4>
              <p class="mt-2 text-sm text-neutral-400 leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        aria-label="Previous"
        onClick={() => scrollByStep(-1)}
        class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20
               text-white h-10 w-10 grid place-items-center backdrop-blur transition"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => scrollByStep(1)}
        class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20
               text-white h-10 w-10 grid place-items-center backdrop-blur transition"
      >
        ›
      </button>
    </div>
  );
}
