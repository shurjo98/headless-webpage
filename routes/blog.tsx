/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

type Post = {
  slug:  string;
  title: string;
  desc:  string;
  date:  string;          // ISO yyyy‑mm‑dd
  tag:   "Engineering" | "Product" | "Commerce";
};

const posts: Post[] = [
  {
    slug:  "edge-rendering-at-scale",
    title: "Edge rendering at scale: lessons from 1 B req/month",
    desc:  "How we cut P99 TTFB by 42 % moving to edge‑native React islands.",
    date:  "2025-07-15",
    tag:   "Engineering",
  },
  {
    slug:  "b2b-checkout-patterns",
    title: "Design patterns for B2B checkout",
    desc:  "PO numbers, credit lines, and multi‑buyer carts—real examples.",
    date:  "2025-07-02",
    tag:   "Product",
  },
  {
    slug:  "ai-product-recs",
    title: "Boosting AOV with AI product recommendations",
    desc:  "A/B results from a fashion merchant: +18 % AOV in 3 weeks.",
    date:  "2025-06-18",
    tag:   "Commerce",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | FM</title>
        <meta
          name="description"
          content="Engineering deep‑dives, product updates, and commerce best‑practices from the HeadlessPro team."
        />
      </Head>

      {/* ── Hero + filter ─────────────────────────────── */}
      <section class="bg-primary-700 text-white text-center px-4 md:px-6 py-24">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">FM Blog</h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Engineering insights &amp; commerce growth stories—twice a month.
        </p>

        {/* simple filter/search (static for now) */}
        <form class="max-w-md mx-auto mt-10 relative">
          <input
            type="search"
            placeholder="Search articles…"
            class="w-full rounded-full px-6 py-4 text-neutral-800
                   placeholder-gray-400 focus:outline-none"
            disabled          /* wire up later */
          />
          <span class="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400">⌘ K</span>
        </form>
      </section>

      {/* ── Post grid ─────────────────────────────────── */}
      <section class="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.map((p) => (
            <article
              key={p.slug}
              class="bg-white rounded-3xl shadow hover:shadow-lg transition p-8 flex flex-col"
            >
              <span class="text-xs uppercase tracking-wide text-primary-600 font-semibold">
                {p.tag}
              </span>
              <h2 class="text-xl font-semibold mt-2 mb-3">
                <a href={`/blog/${p.slug}`} class="hover:text-primary-600">
                  {p.title}
                </a>
              </h2>
              <p class="text-gray-600 flex-1">{p.desc}</p>
              <time dateTime={p.date} class="text-sm text-gray-400 mt-6">
                {new Date(p.date).toLocaleDateString("en-US", {
                  month: "short",
                  day:   "numeric",
                  year:  "numeric",
                })}
              </time>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────── */}
      <section class="py-20 px-4 md:px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Get articles like these in your inbox
        </h2>
        <p class="text-gray-700 mb-8">
          No spam—just best practices and teardown essays every other Tuesday.
        </p>

        <form
          action="https://example.us21.list-manage.com/subscribe/post"
          method="POST"
          target="_blank"
          class="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
        >
          {/* be sure to replace with your actual list endpoint */}
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="you@example.com"
            class="flex-1 rounded-full px-6 py-4 border border-gray-300
                   focus:outline-primary-600"
          />
          <button
            type="submit"
            class="rounded-full bg-primary-600 text-white px-8 py-4
                   font-semibold hover:bg-primary-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
