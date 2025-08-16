// routes/shop.tsx (or inside your case study page)
import { asset } from "$fresh/runtime.ts";
import ProductCard from "../components/ProductCard.tsx";

export default function ShopGrid() {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-16">
        <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-8">
          Accessories
        </h2>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCard
            image={asset("/products/apple-watch.png")}
            title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
            rating={4.9}
            price="$599"
            href="#"
            ctaHref="#"
            ctaLabel="Add to cart"
          />
          <ProductCard
            image={asset("/products/airpods.png")}
            title="AirPods Pro (2nd gen)"
            rating={4.7}
            price="$249"
          />
          <ProductCard
            image={asset("/products/band.png")}
            title="Sport Loop Band"
            rating={4.5}
            price="$49"
          />
          {/* ...more cards */}
        </div>
      </div>
    </section>
  );
}
