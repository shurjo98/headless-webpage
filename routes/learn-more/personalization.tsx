// File: routes/learn-more/personalization.tsx
import { Head } from "$fresh/runtime.ts";
import { ShoppingCart, Tag, Gift } from "https://esm.sh/lucide-preact@0.328.0";

export default function PersonalizationPage() {
  return (
    <>
      <Head><title>Personalized Shopping | Learn More</title></Head>

      {/* Hero */}
      <section class="bg-gradient-to-r from-primary-600 to-primary-400 text-white py-24">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold mb-4">Deliver One‑to‑One Relevance</h1>
          <p class="text-xl font-light max-w-2xl mx-auto">
            Harness AI‑driven recommendations, dynamic pricing, and loyalty rewards to turn every visitor into a lifelong customer.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-semibold text-center mb-12">How It Works</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <ShoppingCart class="w-12 h-12 mx-auto text-primary-600 mb-4" />
            <h3 class="font-semibold mb-2">Data Collection</h3>
            <p class="text-slate-600">Collect real‑time user interactions and purchase history.</p>
          </div>
          <div class="text-center">
            <Tag class="w-12 h-12 mx-auto text-primary-600 mb-4" />
            <h3 class="font-semibold mb-2">Personalization Engine</h3>
            <p class="text-slate-600">Apply AI models to tailor product feeds and pricing rules.</p>
          </div>
          <div class="text-center">
            <Gift class="w-12 h-12 mx-auto text-primary-600 mb-4" />
            <h3 class="font-semibold mb-2">Front‑End Delivery</h3>
            <p class="text-slate-600">Serve customized content via our fast JavaScript SDK or SSR.</p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section class="bg-neutral-50 py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-center mb-12">Key Capabilities</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: ShoppingCart,
              title: "Dynamic Recommendations",
              text: "Contextual product suggestions that boost conversion by up to 30%.",
            },{
              icon: Tag,
              title: "Rule‑Based Pricing",
              text: "Flexible pricing rules for flash sales, bundles, and loyalty tiers.",
            },{
              icon: Gift,
              title: "Loyalty Integrations",
              text: "Seamless rewards and points systems for recurring engagement.",
            }].map(({ icon: Icon, title, text }) => (
              <div key={title} class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <Icon class="w-10 h-10 text-primary-600 mb-4" />
                <h3 class="font-semibold mb-2">{title}</h3>
                <p class="text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Story */}
      <section class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-semibold text-center mb-8">Customer Success Story</h2>
        <blockquote class="max-w-2xl mx-auto italic text-slate-700">
          "Implementing HeadlessPro personalization increased our average order value by 22% within the first month. The flexibility of custom pricing rules was a game‑changer."<br />
          <span class="not-italic font-semibold">– Jane Doe, VP eCommerce at RetailCo</span>
        </blockquote>
      </section>

      {/* Getting Started */}
      <section class="bg-neutral-50 py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-center mb-8">Getting Started</h2>
          <pre class="bg-white p-6 rounded-lg overflow-x-auto text-sm">
{`// Install SDK
npm install @headlesspro/personalization-sdk

// Initialize
import Personalization from '@headlesspro/personalization-sdk';
const client = new Personalization({
  apiKey: 'YOUR_API_KEY',
  locale: 'en-US',
});

// Fetch recommendations
const recs = await client.recommend('homepage');`}
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section class="container mx-auto px-4 py-24 text-center">
        <a href="/signup" class="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
          Start Your Free Trial
        </a>
      </section>
    </>
  );
}