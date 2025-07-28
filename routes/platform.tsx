/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Platform() {
  return (
    <>
      <Head>
        <title>HeadlessPro Platform</title>
        <meta
          name="description"
          content="Explore our API‑first commerce platform—architecture, features, and developer tooling."
        />
      </Head>

      {/* ── Hero ───────────────────────────────────────── */}
      <section class="bg-primary-700 text-white text-center px-4 md:px-6 py-24">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          A composable commerce core—ready for anything
        </h1>
        <p class="max-w-3xl mx-auto text-lg md:text-xl opacity-90 mb-8">
          Modular services, GraphQL everywhere, and edge‑first delivery. Build
          faster without vendor lock‑in.
        </p>

        {/* dual CTAs */}
        <div class="flex flex-col sm:inline-flex sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            class="inline-block bg-white text-primary-700 font-semibold
                   px-8 py-4 rounded-full shadow-lg hover:bg-primary-50 transition"
          >
            Start Free Trial →
          </a>
          <a
            href="/contact"
            class="inline-block border border-white text-white/90 font-semibold
                   px-8 py-4 rounded-full hover:bg-white/10 transition"
          >
            Book Discovery Call →
          </a>
        </div>
      </section>

      {/* ── Architecture diagram placeholder ───────────── */}
      <section class="py-20 px-4 md:px-6">
        <h2 class="text-3xl font-bold text-center mb-12">How it’s built</h2>
        <div class="max-w-5xl mx-auto rounded-3xl bg-gray-50 p-12 shadow-lg">
          <p class="text-center text-gray-500">
            [Architecture diagram coming soon]
          </p>
        </div>
      </section>

      {/* ── Platform modules ───────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-16">Platform modules</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            ["Catalog API",        "Central product data, variants & price lists."],
            ["Checkout service",   "PCI‑compliant, Stripe & PayPal adapters."],
            ["CMS blocks",         "Headless content with drag‑drop slots."],
            ["Auth & customer",    "OAuth, SSO, and magic‑link login."],
            ["Webhooks",           "Real‑time events for ERP & 3PLs."],
            ["Search & merch",     "AI ranking, facets, semantic suggestions."],
          ].map(([title, blurb]) => (
            <article
              key={title}
              class="bg-white rounded-2xl p-8 shadow flex flex-col"
            >
              <h3 class="text-xl font-semibold mb-2">{title}</h3>
              <p class="text-gray-600 flex-1">{blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Dev‑UX highlights ─────────────────────────── */}
      <section class="py-20 px-4 md:px-6">
        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-4">Built for developers</h2>
            <ul class="space-y-4">
              {[
                "Type‑safe SDKs (TS, Python, Go)",
                "CLI scaffolds React, Svelte, or Next.js",
                "GraphQL playground & schema explorer",
                "Local emulator for webhooks",
                "Edge runtime adapters (Deno Deploy, Vercel, Cloudflare)",
              ].map((t) => (
                <li class="flex items-start gap-3" key={t}>
                  <svg
                    class="w-5 h-5 text-primary-600 flex-none"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div class="bg-gray-100 rounded-2xl p-8 shadow-inner text-center">
            <code class="text-sm leading-relaxed whitespace-pre-wrap">
{`# Spin up a sandbox store
npx headlesspro@latest init my-store

# Start dev API
cd my-store && hp dev`}
            </code>
          </div>
        </div>
      </section>

      {/* ── Compliance & final CTAs ───────────────────── */}
      <section class="py-20 bg-primary-700 text-center text-white px-4 md:px-6">
        <p class="mb-6 tracking-wide">
          SOC 2 • GDPR • PCI DSS • ISO 27001
        </p>

        <div class="flex flex-col sm:inline-flex sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            class="inline-block bg-white text-primary-700 font-semibold
                   px-10 py-5 rounded-full shadow-lg hover:bg-primary-50 transition"
          >
            Start Free Trial →
          </a>
          <a
            href="/contact"
            class="inline-block border border-white text-white/90 font-semibold
                   px-10 py-5 rounded-full hover:bg-white/10 transition"
          >
            Talk to Solutions Team →
          </a>
        </div>
      </section>
    </>
  );
}
