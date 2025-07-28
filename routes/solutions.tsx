/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Solutions | HeadlessPro</title>
        <meta
          name="description"
          content="See how HeadlessPro adapts to retail, B2B and subscription commerce—then pick the engagement model that fits your team."
        />
      </Head>

      {/* ── Hero ───────────────────────────────────────── */}
      <section class="bg-primary-700 text-white text-center px-4 md:px-6 py-24">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          Solutions for every commerce model
        </h1>
        <p class="max-w-3xl mx-auto text-lg md:text-xl opacity-90 mb-8">
          Whether you sell direct‑to‑consumer, run complex B2B catalogs, or bill
          recurring subscriptions—our platform + services adapt to fit.
        </p>

        {/* hybrid CTAs */}
        <div class="flex flex-col sm:inline-flex sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            class="inline-block bg-white text-primary-700 font-semibold
                   px-8 py-4 rounded-full shadow-lg hover:bg-primary-50 transition"
          >
            Book Discovery Call →
          </a>
          <a
            href="/signup"
            class="inline-block border border-white text-white/90 font-semibold
                   px-8 py-4 rounded-full hover:bg-white/10 transition"
          >
            Start Free Trial →
          </a>
        </div>
      </section>

      {/* ── Industry cards ─────────────────────────────── */}
      <section class="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <h2 class="text-3xl font-bold text-center mb-16">
          Pick your playbook
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* D2C Retail */}
          <article class="bg-white rounded-3xl shadow-lg p-10 flex flex-col">
            <h3 class="text-2xl font-semibold mb-3">D2C Retail</h3>
            <p class="text-gray-600 flex-1 mb-6">
              Launch campaign sites fast, localize prices in real‑time, and
              deliver <em>sub‑second</em> storefronts at global scale.
            </p>
            <ul class="space-y-3 mb-8">
              {[
                "Lightning‑fast PDPs on the edge",
                "AI product recommendations out‑of‑the‑box",
                "Seamless checkout: Apple Pay, Google Pay, BNPL",
              ].map((t) => (
                <li class="flex items-start gap-2" key={t}>
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
            <a
              href="/contact?vertical=d2c"
              class="mt-auto inline-block bg-primary-600 text-white font-semibold
                     px-6 py-3 rounded-full shadow hover:bg-primary-700 transition"
            >
              Talk retail →
            </a>
          </article>

          {/* B2B / Wholesale */}
          <article class="bg-white rounded-3xl shadow-lg p-10 flex flex-col">
            <h3 class="text-2xl font-semibold mb-3">B2B / Wholesale</h3>
            <p class="text-gray-600 flex-1 mb-6">
              Contract pricing, multi‑buyer carts, and punch‑out that plugs
              into SAP Ariba or Coupa—without six‑month integrations.
            </p>
            <ul class="space-y-3 mb-8">
              {[
                "Account‑level catalogs & price books",
                "Bulk order API & CSV uploads",
                "Credit‑line & PO checkout flow",
              ].map((t) => (
                <li class="flex items-start gap-2" key={t}>
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
            <a
              href="/contact?vertical=b2b"
              class="mt-auto inline-block bg-primary-600 text-white font-semibold
                     px-6 py-3 rounded-full shadow hover:bg-primary-700 transition"
            >
              Talk B2B →
            </a>
          </article>

          {/* Subscription / SaaS */}
          <article class="bg-white rounded-3xl shadow-lg p-10 flex flex-col">
            <h3 class="text-2xl font-semibold mb-3">Subscription & SaaS</h3>
            <p class="text-gray-600 flex-1 mb-6">
              Meter usage, handle renewals, and localize taxes—while letting
              customers self‑manage upgrades and seat counts.
            </p>
            <ul class="space-y-3 mb-8">
              {[
                "Usage‑based billing via Stripe Metering",
                "Customer portal SDK for upgrades",
                "Dunning & retention email hooks",
              ].map((t) => (
                <li class="flex items-start gap-2" key={t}>
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
            <a
              href="/contact?vertical=saas"
              class="mt-auto inline-block bg-primary-600 text-white font-semibold
                     px-6 py-3 rounded-full shadow hover:bg-primary-700 transition"
            >
              Talk subscriptions →
            </a>
          </article>
        </div>
      </section>

      {/* ── Case‑study prompt ─────────────────────────── */}
      <section class="py-20 px-4 md:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Proven in production
          </h2>
          <p class="text-gray-700 mb-10">
            From Series‑B rocket ships to Fortune 500 innovators—teams use
            HeadlessPro to cut build time by <strong>40 %</strong> and boost
            conversion up to <strong>30 %</strong>.
          </p>
          <a
            href="/contact"
            class="inline-block bg-primary-600 text-white font-semibold
                   px-10 py-5 rounded-full shadow-lg hover:bg-primary-700 transition"
          >
            Request case studies →
          </a>
        </div>
      </section>

      {/* ── Final hybrid CTA strip ────────────────────── */}
      <section class="py-20 bg-primary-700 text-center text-white px-4 md:px-6">
        <p class="mb-6 tracking-wide">
          Ready to see it in action?
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
            Book Discovery Call →
          </a>
        </div>
      </section>
    </>
  );
}
