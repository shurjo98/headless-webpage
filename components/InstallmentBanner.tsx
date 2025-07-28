/** @jsxImportSource preact */
import { h } from "preact";
import InstallmentCalculator from "../islands/InstallmentCalculator.tsx";

export default function InstallmentBanner() {
  return (
    <section class="bg-primary-50 py-16">
      <div class="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 mt-10">
        {/* ── Copy block ─────────────────────────────── */}
        <div class="flex-1">
          <h2 class="text-3xl font-bold mb-3 text-primary-700">
            Spread payments over&nbsp;time
          </h2>
          <p class="text-gray-700 mb-6">
            Ship faster without large up‑front CapEx. We partner with
            Stripe Financing to split your build cost into{" "}
            <strong>12 or 24 equal installments</strong>—0&nbsp;% hidden fees.
          </p>
          <ul class="space-y-3">
            {[
              "Instant credit decision (soft check only)",
              "Auto‑pay via bank or card",
              "Pause billing until go‑live*",
            ].map((item) => (
              <li key={item} class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-primary-600 flex-none"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <p class="text-xs text-gray-500 mt-3">
            * pause up to 90 days on eligible projects.
          </p>
        </div>

        {/* ── Interactive calculator ────────────────── */}
        <InstallmentCalculator client:load />
      </div>
    </section>
  );
}
