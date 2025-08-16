import { asset } from "$fresh/runtime.ts";

type ProductCardProps = {
  image: string;           // e.g. asset("/products/apple-watch.png")
  title: string;
  rating?: number;         // 0–5 (supports halves like 4.5)
  price?: string;          // e.g. "$599"
  href?: string;           // product detail link
  ctaHref?: string;        // button link
  ctaLabel?: string;       // e.g. "Add to cart"
  class?: string;          // extra classes if you want to tweak size
};

// Simple star renderer (full/half/empty)
function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const Icon = ({ cls }: { cls: string }) => (
    <svg class={`w-4 h-4 ${cls}`} aria-hidden="true" viewBox="0 0 22 20" fill="currentColor">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  );
  // crude half-star: use a mask trick for a half fill
  const HalfIcon = () => (
    <span class="relative inline-block w-4 h-4">
      <Icon cls="text-stone-300 dark:text-stone-600 absolute inset-0" />
      <span class="absolute inset-0 overflow-hidden" style="width:50%">
        <Icon cls="text-yellow-400" />
      </span>
    </span>
  );
  return (
    <div class="flex items-center space-x-1 rtl:space-x-reverse">
      {Array.from({ length: full }).map((_, i) => <Icon cls="text-yellow-400" key={`f${i}`} />)}
      {half === 1 && <HalfIcon />}
      {Array.from({ length: empty }).map((_, i) => <Icon cls="text-stone-300 dark:text-stone-600" key={`e${i}`} />)}
    </div>
  );
}

export default function ProductCard({
  image,
  title,
  rating = 0,
  price,
  href = "#",
  ctaHref = "#",
  ctaLabel = "Add to cart",
  class: extra = "",
}: ProductCardProps) {
  return (
    <div
      class={`group w-full max-w-sm rounded-2xl bg-white border border-stone-200 shadow-sm
               dark:bg-stone-900 dark:border-stone-800 hover:shadow-lg transition ${extra}`}
    >
      <a href={href} class="block">
        <img
          class="p-6 rounded-t-2xl w-full h-auto object-contain aspect-[4/3] bg-white dark:bg-stone-900"
          src={image.startsWith("/") ? image : asset(image)}
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </a>

      <div class="px-5 pb-5">
        <a href={href} class="block">
          <h5 class="text-lg md:text-xl font-semibold tracking-tight text-stone-900 dark:text-white">
            {title}
          </h5>
        </a>

        <div class="flex items-center mt-3 mb-5">
          <Stars value={rating} />
          <span class="ms-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm
                        dark:bg-blue-200 dark:text-blue-900">
            {rating.toFixed(1)}
          </span>
        </div>

        <div class="flex items-center justify-between">
          {price ? (
            <span class="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white">{price}</span>
          ) : <span />}

          <a
            href={ctaHref}
            class="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700
                   focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                   font-medium rounded-lg text-sm px-5 py-2.5"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
