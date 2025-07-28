import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { HandlerContext, PageProps } from "$fresh/server.ts";
import { studies } from "./index.tsx"; // reuse the same data

type Study = typeof studies[number] & {
  challenge?: string;
  solution?: string[];
  results?: string[];
  testimonial?: string;
};

/* ─── Extend each study with deep‑dive fields ─────────────── */
const fullStudies: Record<string, Study> = {
  fashionhub: {
    ...studies.find((s) => s.slug === "fashionhub")!,
    challenge:
      "Pages took 4–6 seconds to load, killing mobile conversions and SEO rankings.",
    solution: [
      "Composable Fresh frontend on Deno Deploy",
      "Shopify Hydrogen APIs for checkout & catalog",
      "Incremental migration with zero downtime",
    ],
    results: ["↑ 31 % AOV", "↓ 78 % TTFB", "3‑month roll‑out"],
    testimonial:
      "“In under a quarter we went from ‘brown‑outs’ on Black Friday to the fastest store in our segment.” — CTO, FashionHub",
  },
  gearpro: {
    ...studies.find((s) => s.slug === "gearpro")!,
    challenge:
      "Generic recommendations and slow queries were hurting repeat purchases.",
    solution: [
      "Edge‑deployed ML model for real‑time personalization",
      "Recommendation API responded in under 100 ms",
      "A/B testing framework to prove uplift",
    ],
    results: ["↑ 24 % repeat buys", "↓ 19 % abandons", "Edge AI in <100 ms"],
    testimonial:
      "“Customers finally see the right gear in the right size—sales speak for themselves.” — E‑commerce Director, GearPro",
  },
  zenpets: {
    ...studies.find((s) => s.slug === "zenpets")!,
    challenge:
      "Seven regional sites on a brittle PHP monolith made every deploy risky.",
    solution: [
      "Headless rollout per locale, feature‑flagged",
      "Real‑time inventory sync to legacy ERP",
      "SEO migration keeping 12 000 URLs intact",
    ],
    results: ["7 locales", "0 downtime", "↑ 35 % organic traffic"],
    testimonial:
      "“We migrated a decade‑old platform without a single minute of outage.” — Head of Digital, ZenPets",
  },
};

/* ─── Loader ─────────────────────────────────────────────── */
export const handler = {
  GET(_req: Request, ctx: HandlerContext) {
    const { slug } = ctx.params;
    const study = fullStudies[slug];
    return study ? ctx.render(study) : ctx.renderNotFound();
  },
};

export default function StudyPage({ data }: PageProps<Study>) {
  return (
    <>
      <Head>
        <title>{data.client} Case Study | YourCompany</title>
        <meta name="description" content={data.tagline} />
      </Head>

      {/* Hero */}
      <header class="relative h-72 md:h-96">
        <img
          src={data.image}
          alt={`${data.client} hero`}
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 class="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            {data.client}
          </h1>
        </div>
      </header>

      <main class="container mx-auto px-4 md:px-6 lg:px-8 py-20 space-y-16">
        {/* Overview */}
        <section class="text-center max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">{data.tagline}</h2>
          <p class="text-gray-600 leading-relaxed">{data.challenge}</p>
        </section>

        {/* Solution + Results */}
        <section class="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-primary-600">Solution</h3>
            <ul class="space-y-4">
              {data.solution?.map((s) => (
                <li class="flex items-start gap-3">
                  <svg
                    class="flex-none w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-primary-600">Results</h3>
            <ul class="space-y-4">
              {data.results?.map((r) => (
                <li class="bg-primary-50 text-primary-700 font-semibold px-4 py-3 rounded-lg">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonial */}
        <blockquote class="max-w-3xl mx-auto text-xl italic text-gray-800 bg-gray-50 p-8 rounded-3xl shadow-inner">
          {data.testimonial}
        </blockquote>

        {/* CTA */}
        <section class="text-center pt-12">
          <a
            href="/contact"
            class="inline-block bg-primary-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-primary-700 transition"
          >
            Let’s build your success story →
          </a>
        </section>
      </main>
    </>
  );
}
