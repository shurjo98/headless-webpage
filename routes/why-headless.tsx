import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function WhyHeadless() {
  return (
    <>
      <Head>
        <title>Why Headless Commerce | YourCompany</title>
        <meta
          name="description"
          content="Discover how headless commerce boosts speed, flexibility, and omnichannel reach."
        />
      </Head>

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section class="py-20 text-center bg-gray-50 px-4 md:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Modern Commerce Needs Modern Architecture
        </h1>
        <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          Learn why forward‑thinking brands are trading monolithic storefronts for API‑driven, headless experiences.
        </p>
        <a
          href="/contact"
          class="inline-block mt-8 px-8 py-3 bg-primary-600 text-white font-semibold rounded-full shadow hover:bg-primary-700 transition-colors">
          Talk to an Architect
        </a>
      </section>

      {/* ─── 2. TL;DR CARD ───────────────────────────────────────── */}
      <section class="py-12 bg-white px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto bg-primary-50 rounded-3xl p-8 md:p-12 shadow-inner text-center">
          <p class="text-xl md:text-2xl font-medium text-primary-700">
            <strong>Headless commerce</strong> decouples the customer‑facing frontend from the commerce backend. The result? Lightning‑fast UX, omnichannel reach, and limitless design freedom.
          </p>
        </div>
      </section>

      {/* ─── 3. TRADITIONAL VS HEADLESS TABLE ───────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Old‑School Monolith vs. Headless Architecture
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full max-w-5xl mx-auto border-collapse text-left text-gray-800">
            <thead>
              <tr>
                <th class="py-3 px-4"></th>
                <th class="py-3 px-4 font-semibold">Traditional Platform</th>
                <th class="py-3 px-4 font-semibold">Headless Architecture</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frontend", "Locked templates & themes", "Any framework (React, Vue, Svelte)"] ,
                ["Backend", "Tightly coupled; fragile plugins", "Composable micro‑services"],
                ["Page Speed", "Heavy payloads; often >3 s", "Static‑generated or streamed <1 s"],
                ["Release Velocity", "Monolithic deploys", "Independent pipelines"],
                ["Omnichannel", "Web‑only extensions", "Native web, mobile, POS, voice"] ,
                ["Total Cost", "Grows with plugin bloat", "Lower long‑term; pay only for what you use"],
              ].map(([label,left,right]) => (
                <tr key={label} class="border-t last:border-b">
                  <td class="py-3 px-4 font-medium whitespace-nowrap">{label}</td>
                  <td class="py-3 px-4 text-gray-600">{left}</td>
                  <td class="py-3 px-4 text-gray-900 font-semibold">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── 4. HOW IT WORKS (DIAGRAM TEXT) ─────────────────────── */}
      <section class="py-20 bg-white px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How Headless Commerce Works
        </h2>
        <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            ["Presentation Layer", "A fast JAMstack or native frontend serves pixel‑perfect UX."],
            ["Commerce API", "Orders, products, carts & checkout delivered via REST/GraphQL."],
            ["Composable Services", "Plug‑and‑play CMS, PIM, CRM, search, and fulfillment."]
          ].map(([title,desc],i)=>(
            <div key={i} class="space-y-4">
              <div class="mx-auto w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                {i+1}
              </div>
              <h3 class="text-xl font-semibold text-gray-900">{title}</h3>
              <p class="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. BENEFITS ICON GRID ─────────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Key Benefits
        </h2>
        <div class="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["Speed & SEO", "First‑Contentful‑Paint <1 s and Core Web Vitals that rank."],
            ["Design Freedom", "No template limits—craft unique, immersive experiences."],
            ["Channel Agility", "Deploy to web or apps from one API."],
            ["Future‑Proof Stack", "Swap providers without a full re‑platform."],
            ["Developer Happiness", "Modern tooling, CI/CD, version control—not plugin spaghetti."],
            ["Lower TCO", "Reduce plugin fees and maintenance overhead long‑term."]
          ].map(([title,desc]) => (
            <div key={title} class="space-y-3 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition">
              <h3 class="text-xl font-semibold text-primary-700">{title}</h3>
              <p class="text-gray-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. USE‑CASE TABLE ─────────────────────────────────── */}
      <section class="py-20 bg-white px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          When Does Headless Shine?
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full max-w-5xl mx-auto border-collapse text-left text-gray-800">
            <thead>
              <tr>
                <th class="py-3 px-4 font-semibold">Use Case</th>
                <th class="py-3 px-4 font-semibold">Symptoms</th>
                <th class="py-3 px-4 font-semibold">Headless Solution</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Scaling DTC Brand", "Traffic spikes slow pages; template tweaks break checkout", "Static‑generated PWA + edge caching"],
                ["Multi‑Market Expansion", "Plugins struggle with multi‑language & currency", "Locale‑aware content API + pricing rules"],
                ["Omnichannel Retailer", "Separate codebases for web & mobile", "Single GraphQL layer feeding any client"],
                ["Content‑Driven Storytelling", "Blog feels bolted‑on", "Best‑of‑breed CMS like Sanity or Strapi"],
              ].map(([use,symptom,solution]) => (
                <tr key={use} class="border-t last:border-b">
                  <td class="py-3 px-4 font-medium">{use}</td>
                  <td class="py-3 px-4 text-gray-600">{symptom}</td>
                  <td class="py-3 px-4 text-gray-900 font-semibold">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── 7. ROI COUNTERS ───────────────────────────────────── */}
      <section class="py-20 bg-primary-600 text-white text-center px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto grid sm:grid-cols-3 gap-12">
          {[
            ["+28%", "Avg. lift in conversion"],
            ["‑40%", "Reduction in bounce"],
            ["3×", "Faster release cycles"],
          ].map(([stat,label]) => (
            <div key={stat} class="space-y-2">
              <p class="text-4xl md:text-5xl font-extrabold">{stat}</p>
              <p class="text-base md:text-lg font-medium text-white/90">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 8. FAQ ACCORDION ─────────────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked
        </h2>
        <div class="max-w-3xl mx-auto space-y-6">
          {[
            ["Do I need a full re‑platform?", "No. Start with a headless frontend tied to your existing backend, then phase out legacy services at your own pace."],
            ["Is headless only for enterprises?", "SMBs adopt headless early to avoid lock‑in and future‑proof their tech stack."],
            ["Will it cost more?", "Initial build is higher, but maintenance and scale costs drop as you eliminate plugin bloat and tech debt."],
          ].map(([q,a]) => (
            <details key={q} class="border border-gray-200 rounded-xl p-4 bg-white">
              <summary class="cursor-pointer font-medium text-gray-800">{q}</summary>
              <p class="mt-3 text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── 9. CLOSING CTA ───────────────────────────────────── */}
      <section class="py-20 bg-white text-center px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Decouple?
        </h2>
        <p class="mt-4 max-w-xl mx-auto text-lg text-gray-600">
          Our architects can audit your stack and map a phased migration—no downtime required.
        </p>
        <a
          href="/contact"
          class="inline-block mt-8 px-10 py-4 bg-primary-600 text-white font-semibold rounded-full shadow hover:bg-primary-700 transition-colors">
          Book a Free Discovery Call
        </a>
      </section>
    </>
  );
}
