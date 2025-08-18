import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

/* ─── Shared data (you can move this to lib/caseStudies.ts later) ─── */
export const studies = [
  {
    slug: "fashionhub",
    client: "FashionHub",
    tagline: "From slow Magento to 140 ms edge renders",
    blurb:
      "We migrated FashionHub’s monolith to a composable Fresh + Shopify Hydrogen stack—cutting load times by 78 % and boosting mobile conversions.",
    metrics: ["↑ 31 % AOV", "↓ 78 % TTFB", "3‑mo roll‑out"],
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=60",
  },
  {
    slug: "gearpro",
    client: "GearPro",
    tagline: "Personalization at scale for a sports retailer",
    blurb:
      "Edge‑deployed ML recommendations lifted repeat buys and reduced cart abandonment across 4 storefronts.",
    metrics: ["↑ 24 % repeat buys", "↓ 19 % abandons", "Edge AI < 100 ms"],
    image:
      "https://images.unsplash.com/photo-1525065792993-2a7eefe2737e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2VhciUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    slug: "zenpets",
    client: "ZenPets",
    tagline: "Zero‑downtime re‑platform for 7 markets",
    blurb:
      "Parallel‑ran legacy PHP while launching new headless storefronts per locale—so revenue kept flowing even during migration.",
    metrics: ["7 locales", "0 downtime", "↑ 35 % organic traffic"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=60",
  },
] as const;

export default function CaseStudiesIndex() {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta
          name="description"
          content="Real results from our headless commerce builds, migrations, and growth projects."
        />
      </Head>

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section class="pt-28 pb-20 bg-primary-700 text-white text-center px-4 md:px-6">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
          Success Stories
        </h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          How ambitious brands shipped faster, sold more, and slept better—backed
          by our end‑to‑end commerce expertise.
        </p>
      </section>

      {/* ─── Study Grid ────────────────────────────────────── */}
      <section class="container mx-auto px-4 md:px-6 lg:px-8 -mt-24 pb-32 grid gap-12 md:grid-cols-3">
        {studies.map((s) => (
          <a
            href={`/case-studies/${s.slug}`}
            class="group rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <div class="relative h-56 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.client} case study`}
                class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute bottom-4 left-4 flex gap-2">
                {s.metrics.slice(0, 2).map((m) => (
                  <span class="bg-primary-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div class="p-8 flex flex-col flex-grow">
              <h3 class="text-xl font-bold mb-2">{s.client}</h3>
              <p class="text-primary-600 font-medium mb-4">{s.tagline}</p>
              <p class="text-gray-600 leading-relaxed flex-grow">{s.blurb}</p>
              <span class="mt-6 inline-flex items-center gap-1 text-primary-600 font-semibold">
                Read full story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
