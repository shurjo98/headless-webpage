// File: routes/learn-more/unified-commerce.tsx
import { Head } from "$fresh/runtime.ts";
import { Cloud, Globe, Users } from "https://esm.sh/lucide-preact@0.328.0";

export default function UnifiedCommercePage() {
  return (
    <>
      <Head>
        <title>Unified Commerce | Learn More</title>
      </Head>

      {/* Hero */}
      <section
        class="relative bg-cover bg-center py-24"
        style="background-image: url('/images/unified-hero-bg.jpg');"
      >
        <div class="absolute inset-0 bg-primary-800/80"></div>
        <div class="relative container mx-auto px-4 text-center text-black">
          <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">
            Connect Every Touchpoint
          </h1>
          <p class="text-xl font-light max-w-2xl mx-auto drop-shadow-md">
            Unify web, mobile, social, and in‑store data into a single customer
            profile for seamless commerce experiences.
          </p>
        </div>
      </section>
      <section class="bg-neutral-50 py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Pain Points as Cards */}
          <div>
            <h2 class="text-4xl font-display font-bold text-neutral-900 mb-8">
              Fragmented Data?{" "}
              <span class="text-primary-600">Unified Solution.</span>
            </h2>
            <div class="space-y-4">
              {[
                "Siloed inventories across channels",
                "Multiple checkout flows",
                "Disjointed customer insights",
              ].map((point) => (
                <div class="flex items-start gap-4 p-5 bg-white rounded-xl shadow-soft hover:shadow-medium transition">
                  <svg
                    class="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="text-neutral-700 font-light text-lg">{point}</p>
                </div>
              ))}
            </div>
            <p class="mt-8 text-neutral-600 font-light text-lg">
              HeadlessPro’s unified data layer syncs everything in real
              time—eliminating delays, errors, and complexity from your stack.
            </p>
          </div>

          {/* Right: Globe Illustration */}
          <div class="flex justify-center">
            <div class="bg-white p-8 rounded-2xl shadow-soft">
              <Globe class="w-64 h-64 text-primary-500 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="bg-neutral-50 py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-center mb-12">
            Core Features
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: Cloud,
              title: "Real‑Time Sync",
              text:
                "Instant inventory and customer updates across all channels.",
            }, {
              icon: Users,
              title: "Unified Profiles",
              text: "One source of truth for every shopper interaction.",
            }, {
              icon: Globe,
              title: "Global Scalability",
              text: "Built on a distributed edge network for low latency.",
            }].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <Icon class="w-10 h-10 text-primary-600 mb-4" />
                <h3 class="font-semibold mb-2">{title}</h3>
                <p class="text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="container mx-auto px-4 py-24 text-center">
        <a
          href="/demo"
          class="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Request a Live Demo
        </a>
      </section>
    </>
  );
}
