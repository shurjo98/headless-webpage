/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Docs() {
  const sections = [
    ["intro", "Overview"],
    ["quickstart", "Quick‑start"],
    ["auth", "Authentication"],
    ["catalog", "Catalog API"],
    ["checkout", "Checkout API"],
    ["webhooks", "Webhooks"],
    ["sdks", "SDKs & CLI"],
  ] as const;

  return (
    <>
      <Head>
        <title>Developer Docs | HeadlessPro</title>
        <meta
          name="description"
          content="API reference and quick‑start guides for the HeadlessPro composable commerce platform."
        />
      </Head>

      {/* ── Docs layout ───────────────────────────────── */}
      <main class="flex flex-col lg:flex-row max-w-7xl mx-auto">

        {/* Sidebar nav (desktop only) */}
        <nav class="hidden lg:block w-64 border-r border-surface-100 py-10 px-6">
          <ul class="space-y-4 sticky top-24">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  class="text-neutral-700 hover:text-primary-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content column */}
        <article class="flex-1 px-6 py-10 prose md:prose-lg max-w-none">
          {/* --- Overview ------------------------------------------------ */}
          <section id="intro">
            <h1>HeadlessPro Developer Docs</h1>
            <p>
              Build lightning‑fast storefronts—or automate ops—with our
              GraphQL & REST APIs. All endpoints are versioned and
              <strong>100 % JSON</strong>. Start free, scale to billions of
              requests.
            </p>
          </section>

          {/* --- Quick‑start ------------------------------------------- */}
          <section id="quickstart">
            <h2>Quick‑start</h2>
            <p class="leading-relaxed">
              Spin up a sandbox store in under 60 seconds:
            </p>
            <pre><code class="language-shell">{`# 1. Install CLI
npm i -g @headlesspro/cli

# 2. Create a dev store
hp init my-store
cd my-store

# 3. Start local sandbox + GraphQL playground
hp dev`}</code></pre>
            <p>
              Your playground is now at <code>http://localhost:4000/graphql</code>, 
              authenticated with the default <code>HP_TEST_TOKEN</code>.
            </p>
          </section>

          {/* --- Auth --------------------------------------------------- */}
          <section id="auth">
            <h2>Authentication</h2>
            <p>
              Every request requires a bearer token in the
              <code>Authorization: Bearer&nbsp;{`<TOKEN>`}</code> header. You can
              generate Personal Access Tokens in <em>Dashboard → Settings → API
              keys</em>.
            </p>
            <pre><code class="language-bash">{`curl https://api.headlesspro.com/v1/catalog/products \\
  -H "Authorization: Bearer HP_live_xxx" \\
  -H "Content-Type: application/json"`}</code></pre>
          </section>

          {/* --- Catalog API ------------------------------------------- */}
          <section id="catalog">
            <h2>Catalog API</h2>
            <p>
              Create, update, and query products, variants, and price lists.
              Use GraphQL for flexible reads or REST for bulk writes.
            </p>
            <h3>GraphQL example</h3>
            <pre><code class="language-graphql">{`query ProductBySlug($slug: String!) {
  product(slug: $slug) {
    id
    name
    description
    variants {
      sku
      price {
        amount
        currency
      }
    }
  }
}`}</code></pre>
          </section>

          {/* --- Checkout API ------------------------------------------ */}
          <section id="checkout">
            <h2>Checkout API</h2>
            <p>
              Use our PCI‑compliant checkout service or bring your own Stripe
              keys. Web & mobile SDKs handle Apple Pay, Google Pay, and BNPL out
              of the box.
            </p>
          </section>

          {/* --- Webhooks ---------------------------------------------- */}
          <section id="webhooks">
            <h2>Webhooks</h2>
            <p>
              Receive real‑time notifications for orders, inventory changes, or
              customer events. All webhooks are signed with an HMAC SHA‑256
              secret.
            </p>
          </section>

          {/* --- SDKs & CLI ------------------------------------------- */}
          <section id="sdks">
            <h2>SDKs & CLI</h2>
            <p>
              We ship official SDKs for TypeScript, Python, and Go. The CLI
              scaffolds a storefront starter for React, SvelteKit, or Astro.
            </p>
          </section>
        </article>
      </main>

      {/* Sticky “Edit” badge */}
      <a
        href="https://github.com/your‑org/headless‑docs"
        target="_blank"
        class="fixed bottom-6 right-6 bg-gray-900 text-white text-sm
               px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        Edit this page on GitHub
      </a>
    </>
  );
}
