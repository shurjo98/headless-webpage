// File: routes/learn-more/omnichannel-storefronts.tsx
import { Head } from "$fresh/runtime.ts";
import {
  Calendar,
  Hourglass,
  UserPlus,
} from "https://esm.sh/lucide-preact@0.328.0";

export default function OmnichannelStorefrontsPage() {
  return (
    <>
      <Head>
        <title>Omnichannel Storefronts | Coming Soon</title>
      </Head>

      {/* WIP Hero */}
      <section class="relative bg-cover bg-center py-24">
        <div class="container mx-auto px-4 text-center">
          <Hourglass class="mx-auto mb-6 w-16 h-16 text-primary-600 animate-spin" />
          <h1 class="text-5xl font-bold text-neutral-900 mb-4">
            Omnichannel Storefronts — Coming Soon
          </h1>
          <p class="text-xl text-neutral-600 max-w-2xl mx-auto font-light">
            We're hard at work building our drag‑and‑drop storefront generator
            for campaigns, microsites, and more. Sign up below to join the
            private beta and be the first to launch your custom storefronts in
            minutes.
          </p>
        </div>
      </section>

      {/* Roadmap / Timeline */}
      <section class="bg-white py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-center mb-12">
            Release Roadmap
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <Calendar class="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 class="font-semibold text-lg mb-2">Q3 2026</h3>
              <p class="text-neutral-600 font-light">
                Private beta launch with core storefront templates and CLI
                scaffolding.
              </p>
            </div>
            <div class="text-center">
              <Calendar class="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 class="font-semibold text-lg mb-2">Q4 2026</h3>
              <p class="text-neutral-600 font-light">
                Public release with visual editor, theming support, and
                analytics integration.
              </p>
            </div>
            <div class="text-center">
              <Calendar class="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 class="font-semibold text-lg mb-2">Q1 2027</h3>
              <p class="text-neutral-600 font-light">
                Advanced integrations for headless CMS and A/B testing
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section class="container mx-auto px-4 py-24 text-center">
        <UserPlus class="mx-auto mb-6 w-12 h-12 text-primary-600" />
        <h2 class="text-3xl font-bold mb-4">
          Join the Private Beta
        </h2>
        <p class="text-neutral-600 font-light mb-8">
          Get early access, exclusive support, and shape the future of our
          storefront platform.
        </p>
        <a
          href="/signup?beta=omnichannel"
          class="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Sign Up for Beta
        </a>
      </section>
    </>
  );
}
