import { Head } from "$fresh/runtime.ts";
import Configurator from "../../islands/Configurator.tsx";
import RoiCalculator from "../../islands/RoiCalculator.tsx";
import InstallmentBanner from "../../components/InstallmentBanner.tsx";


export default function ConfiguratorPage() {
  return (
    <>
      <Head>
        <title>Build‑Your‑Own Package | YourCompany</title>
      </Head>

      <header class="pt-28 pb-10 bg-primary-700 text-white text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold">
          Customize your build
        </h1>
        <p class="opacity-80 mt-3">
          Pick a base package, then add the exact features you need.
        </p>
      </header>

      <main class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        {/* Hydrated island lives here */}
        <Configurator />
        <InstallmentBanner />

        

        {/* ─── Why Choose Us ────────────────────────────────────── */}
        <section class="py-20">
          <div class="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-12">
              Why teams choose{" "}
              <img
                src="/images/logo.png" // ← adjust this path
                alt="FM Logo"
                className="inline-block w-24 h-auto ml-4 mb-1 align-middle md:w-32"
              />
            </h2>
            <div class="grid gap-12 md:grid-cols-3">
              {[
                ["< 140 ms", "Average storefront TTFB on global edge"],
                ["99.96 %", "12‑month measured uptime across all clients"],
                ["34 %", "Median conversion‑rate uplift post‑migration"],
              ].map(([stat, label]) => (
                <div key={stat}>
                  <p class="text-primary-600 text-5xl font-extrabold mb-3">
                    {stat}
                  </p>
                  <p class="text-gray-700 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ROI Calculator ──────────────────────────────────────── */}

        {/* <section class="mt-24">
          <h2 class="text-2xl font-bold mb-6">ROI Calculator</h2>
          <RoiCalculator client:load />
        </section> */}

        {/* ─── Contact CTA ──────────────────────────────────────── */}
        <section class="py-24 bg-primary-600 text-center px-4 md:px-6">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to map out your build?
          </h2>
          <p class="text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a 30‑minute discovery call. We’ll validate scope, timelines,
            and ROI—no obligations.
          </p>
          <a
            href="/contact"
            class="inline-block bg-white text-primary-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Schedule My Call →
          </a>
        </section>
      </main>
    </>
  );
}
