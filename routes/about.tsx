/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Fast & Modern</title>
        <meta
          name="description"
          content="Learn about Fast & Modern's mission, culture, and journey. We help companies scale without the tech headaches."
        />
      </Head>

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section class="pt-28 pb-20 bg-primary-700 text-white text-center px-4 md:px-6">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
          We decouple problems so you can scale—today and tomorrow.
        </h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Shipping today is good; shipping better tomorrow is mandatory.
        </p>
      </section>

      {/* ─── Our Culture ───────────────────────────────────── */}
      <section class="container mx-auto px-4 md:px-6 lg:px-8 py-20 space-y-10">
        <h2 class="text-3xl font-bold text-gray-900 text-center">
          Our Culture
        </h2>
        <p class="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg text-center">
          At Fast & Modern, we decouple problems, decouple thinking—so that our
          clients can stay laser‑focused on growing their businesses instead of
          wrestling with tech.
        </p>
        <p class="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg text-center">
          We know talent has no ZIP code, responsibility has no borders:
          whether you are pair‑programming from Dhaka, reviewing pull requests
          in Beijing, or pushing a hot‑fix in New York, ownership follows the
          work, not the office.
        </p>
        <p class="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg text-center">
          To keep our ideas and our people fresh, we partner with leading
          universities, diving deep into design, marketing, psychology, and AI
          research that sharpens our products and broadens our perspective. And
          because our customers scale in real time, so do we.
        </p>
      </section>

      {/* ─── Timeline / Journey ─────────────────────────────── */}
      <section class="bg-gray-50 py-20 px-4 md:px-6 lg:px-8">
        <div class="container mx-auto max-w-5xl">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h2>
          <div class="space-y-10">
            <div class="flex items-start gap-6">
              <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 class="text-xl font-semibold">The Beginning</h3>
                <p class="text-gray-700 mt-2">
                  Fast & Modern started with a vision: to remove complexity from
                  building and scaling digital commerce so teams could focus on
                  customers, not infrastructure.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-6">
              <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 class="text-xl font-semibold">Scaling with Clients</h3>
                <p class="text-gray-700 mt-2">
                  As our customers grew, so did we—expanding into multi‑locale
                  commerce, real‑time analytics, and complex enterprise
                  integrations.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-6">
              <div class="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 class="text-xl font-semibold">What’s Next</h3>
                <p class="text-gray-700 mt-2">
                  We’re continuing to build faster, smarter headless commerce
                  products—powered by research and a global team of builders who
                  never stop iterating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ────────────────────────────────────── */}
      <section class="py-24 bg-primary-600 text-center px-4 md:px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Want to work with us?
        </h2>
        <p class="text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our team or partner with us on your next digital commerce
          project—we’re always excited to collaborate with forward‑thinking
          people.
        </p>
        <a
          href="/careers"
          class="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Explore Careers →
        </a>
      </section>
    </>
  );
}
