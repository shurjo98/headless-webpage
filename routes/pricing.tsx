/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import RoiCalculator from "../components/RoiCalculator.tsx";
import InstallmentBanner from "../components/InstallmentBanner.tsx";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$40,000",
      cad: "per project",
      tagline: "Ideal for MVPs & early traction",
      features: [
        "Up to 8 weeks dev time",
        "1 sales channel (web or mobile)",
        "Stripe / PayPal checkout",
        "Email support (24‑hr SLA)",
      ],
      cta: "/contact?plan=starter",
    },
    {
      name: "Growth",
      price: "$69,999",
      cad: "per project",
      tagline: "Scale to multiple channels & locales",
      features: [
        "10–12 week rollout",
        "Multi‑locale & multi‑currency",
        "Edge‑rendered storefront (Fresh)",
        "Real‑time analytics dashboard",
        "Priority support (4‑hr SLA)",
      ],
      popular: true,
      cta: "/contact?plan=growth",
    },
    {
      name: "Enterprise",
      price: "Custom",
      cad: "quote",
      tagline: "Complex integrations & SLA guarantees",
      features: [
        "Phased migration / parallel run",
        "Dedicated solutions architect",
        "24 × 7 on‑call & uptime SLA",
        "ML personalization add‑ons",
        "SOC 2 & PCI‑DSS compliance",
      ],
      cta: "/contact?plan=enterprise",
    },
  ] as const;

  return (
    <>
      <Head>
        <title>Pricing | YourCompany</title>
        <meta
          name="description"
          content="Transparent pricing for our headless commerce builds and growth services."
        />
      </Head>

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section class="pt-28 pb-20 bg-primary-700 text-white text-center px-4 md:px-6">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
          Simple, transparent pricing
        </h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Choose a preset plan—or build a custom bundle that fits like a glove.
        </p>
      </section>

      {/* ─── Tier Cards ─────────────────────────────────────── */}
      <section class="container mx-auto px-4 md:px-6 lg:px-8 -mt-24 grid gap-10 md:grid-cols-3 mt-24">
        {tiers.map((t) => (
          <article
            key={t.name}
            class={`relative bg-white rounded-3xl shadow-xl p-10 flex flex-col ${
              t.popular ? "ring-4 ring-primary-600/60" : ""
            }`}
          >
            {t.popular && (
              <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Most Popular
              </span>
            )}

            <h2 class="text-2xl font-bold mb-2">{t.name}</h2>
            <p class="text-primary-600 font-medium mb-6">{t.tagline}</p>

            <div class="text-4xl font-extrabold mb-2">{t.price}</div>
            <div class="text-sm text-gray-500 mb-8">{t.cad}</div>

            <ul class="space-y-4 flex-grow">
              {t.features.map((f) => (
                <li class="flex items-start gap-3" key={f}>
                  <svg
                    class="flex-none w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={t.cta}
              class="mt-10 inline-block bg-primary-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-primary-700 transition"
            >
              {t.price === "Custom" ? "Request a Quote →" : "Get Started →"}
            </a>
          </article>
        ))}

        {/* ─── Configurator CTA Card ───────────────────────── */}
        <article class="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl shadow-xl p-10 flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-bold mb-3">Build Your Own</h2>
            <p class="opacity-90">
              Drag‑and‑drop the exact web &amp; mobile features you need,
              preview pricing in real time, and generate a scoped proposal.
            </p>
          </div>

          <a
            href="/pricing/configurator"
            class="mt-10 inline-block bg-white text-primary-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition self-start"
          >
            Launch Configurator →
          </a>
        </article>
      </section>

      {/* ─── Installment Payment Banner ───────────────────── */}
      <div class="mt-24">
        <InstallmentBanner />
      </div>

      {/* ─── Plan Comparison ───────────────────────────── */}
      <section class="max-w-5xl mx-auto mt-24 px-4 md:px-6">
        <h2 class="sr-only">Compare plans</h2>
        <div class="overflow-x-auto rounded-2xl shadow-lg ring-1 ring-gray-200">
          <table class="w-full text-left text-sm md:text-base border-collapse">
            <thead class="bg-gray-50">
              <tr>
                <th class="py-4 px-6 font-semibold">Feature</th>
                {tiers.map((t) => (
                  <th key={t.name} class="py-4 px-6 font-semibold">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              {[
                ["Dev timeline", ["8 wks", "10‑12 wks", "Phased"]],
                ["Channels", ["1", "Multi‑channel", "Unlimited"]],
                ["Locales / currency", ["—", "Yes", "Yes"]],
                ["24 × 7 SLA", ["—", "—", "✓"]],
              ].map(([row, vals]) => (
                <tr key={row}>
                  <td class="py-4 px-6 font-medium">{row as string}</td>
                  {vals.map((v, i) => <td key={i} class="py-4 px-6">{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── FAQ Snippet ───────────────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8 mt-24">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Pricing FAQ
        </h2>
        <div class="max-w-3xl mx-auto space-y-6">
          {[
            [
              "What counts as a “week” of dev time?",
              "We measure man‑weeks of effort, not elapsed calendar weeks. A typical 8‑week Starter engagement involves ~320 dev‑hours.",
            ],
            [
              "Can I start with Starter and upgrade later?",
              "Absolutely—most clients begin with Starter, launch their MVP, then add Growth features via a change order.",
            ],
            [
              "Do you offer revenue‑share or equity deals?",
              "For early‑stage teams with strong validation we consider hybrid structures—contact us to discuss.",
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              class="group bg-white rounded-lg shadow-sm p-6 transition-colors"
            >
              <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                {q}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 ml-4 transition-transform duration-300 group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── Closing CTA ───────────────────────────────────── */}
      <section class="py-24 bg-primary-600 text-center px-4 md:px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Not sure which plan fits?
        </h2>
        <p class="text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a 30‑minute discovery call and we’ll tailor a roadmap to your
          goals—no obligations.
        </p>
        <a
          href="/contact"
          class="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Schedule My Call →
        </a>
      </section>
    </>
  );
}
