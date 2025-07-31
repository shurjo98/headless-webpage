// File: routes/learn-more/b2b-c2c-orchestration.tsx
import { Head } from "$fresh/runtime.ts";
import { Briefcase, Users, DollarSign } from "https://esm.sh/lucide-preact@0.328.0";

export default function B2BC2COrchestrationPage() {
  return (
    <>
      <Head>
        <title>B2B & C2C Orchestration | Coming Soon</title>
      </Head>

      {/* Hero – Coming Soon */}
      <section class="relative bg-gray-800 py-10 mt-16 mb-20">
        <div class="absolute inset-0 bg-gradient-to-br py-32 from-gray-900 to-primary-700 opacity-90"></div>
        <div class="relative container mx-auto px-4 p text-center text-gray-950 space-y-6">
          <Briefcase class="mx-auto w-16 h-16 drop-shadow-lg animate-pulse py-32" />
          <h1 class="text-5xl font-bold ">B2B & B2C Orchestration</h1>
          <p class="max-w-2xl mx-auto text-lg font-light">
            We’re building a unified commerce engine that powers both retail and enterprise workflows.
            Sign up below to get notified as soon as it’s ready!
          </p>
          <a
            href="/signup?notify=b2b-c2c"
            class="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-full font-semibold transition"
          >
            Notify Me
          </a>
        </div>
      </section>

      {/* Status & Progress */}
      <section class="bg-gray-100 py-20">
        <div class="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <h2 class="text-3xl font-semibold text-gray-900">What’s Next?</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow">
              <Users class="w-8 h-8 text-primary-600 mt-1" />
              <div>
                <h3 class="font-medium">User & Account Sync</h3>
                <p class="text-gray-600">Creating single customer profiles across B2B & B2C.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow">
              <DollarSign class="w-8 h-8 text-primary-600 mt-1" />
              <div>
                <h3 class="font-medium">Tiered Pricing</h3>
                <p class="text-gray-600">Configurable contract catalogs & dynamic price books.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow">
              <Briefcase class="w-8 h-8 text-primary-600 mt-1" />
              <div>
                <h3 class="font-medium">Automated Approvals</h3>
                <p class="text-gray-600">Rule‑based workflows to speed quote-to-cash.</p>
              </div>
            </div>
            <div class="col-span-full text-gray-500 font-light">
              We’re iterating daily—expect a private beta in Q4 2026.
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section class="py-16">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-700 mb-4">
            Want early access or have feedback? Reach out and we’ll keep you in the loop!
          </p>
          <a
            href="/contact"
            class="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-full font-medium hover:bg-primary-50 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
