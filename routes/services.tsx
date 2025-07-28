import { Head } from "$fresh/runtime.ts";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | YourCompany</title>
        <meta
          name="description"
          content="End‑to‑end headless commerce development, ML/AI analytics, integrations, and more."
        />
      </Head>

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section class="py-20 text-center bg-gray-50 px-4 md:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Custom Headless Solutions, End‑to‑End
        </h1>
        <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          From architecture audits to machine‑learning‑powered analytics, we handle every layer of modern commerce.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            class="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-full shadow hover:bg-primary-700 transition-colors">
            Start Your Project
          </a>
          <a
            href="/contact"
            class="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors">
            Book a Free Discovery Call
          </a>
        </div>
      </section>

      {/* ─── 2. CORE SERVICES GRID ──────────────────────────────── */}
      <section class="py-20 bg-white px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Services
        </h2>
        <div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            ["Green‑field Builds", "Launch blazing‑fast storefronts powered by Next.js, Fresh, or Remix—tailored to your brand and growth goals."],
            ["Headless Migrations", "Re‑platform from Shopify, Magento, or WooCommerce without downtime. Phased, data‑safe, SEO‑friendly."],
            ["Backend & API Engineering", "GraphQL/REST services for products, carts, orders, loyalty, and subscriptions—deployable to AWS, Vercel, or Deno Deploy."],
            ["System Integrations", "Stripe, PayPal, Amazon SP‑API, TikTok Shop, ERP, PIM, CMS—if it has an API, we’ll connect it."],
            ["Performance & SEO Optimization", "Lighthouse 95+ scores, edge caching, Core Web Vitals solidly in the green."],
            ["ML/AI & Data Analytics", "Predict churn, personalize offers, and surface actionable insights with machine‑learning pipelines and real‑time dashboards."],
            ["Ongoing DevOps & Support", "24/7 monitoring, CI/CD pipelines, version upgrades, and feature sprints on retainer."]
          ].map(([title, desc]) => (
            <div key={title} class="space-y-4 p-6 bg-primary-50/40 rounded-3xl shadow hover:shadow-lg transition">
              <h3 class="text-xl font-semibold text-primary-700">{title}</h3>
              <p class="text-gray-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. ENGAGEMENT MODELS ──────────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Engagement Models
        </h2>
        <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            ["Fixed‑Scope Projects", "Clear timelines, clear deliverables, no surprises."],
            ["Monthly Retainers", "Our team becomes your on‑call dev squad—ideal for iterative roadmaps."],
            ["Team Augmentation", "Need extra horsepower? We embed senior engineers alongside your staff."]
          ].map(([title, desc]) => (
            <div key={title} class="space-y-4 p-8 bg-white rounded-3xl shadow-md hover:shadow-lg transition">
              <h3 class="text-xl font-semibold text-gray-900">{title}</h3>
              <p class="text-gray-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. DELIVERY PROCESS STEPPER ───────────────────────── */}
      <section class="py-20 bg-white px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our 5‑Step Delivery Process
        </h2>
        <div class="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 text-center">
          {[
            ["Architect & Plan", "Technical audit, KPIs, roadmap."],
            ["Design & Prototype", "Click‑through Figma plus performance budgets."],
            ["Develop & Integrate", "Agile sprints, weekly demos."],
            ["QA & Launch", "Automated tests, zero‑downtime deploy."],
            ["Optimize & Grow", "A/B tests, ML insights, feature rollouts."]
          ].map(([title, desc], i) => (
            <div key={title} class="space-y-4">
              <div class="mx-auto w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                {i + 1}
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{title}</h3>
              <p class="text-gray-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. TECHNOLOGY STACK CHIPS ─────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Technology Stack
        </h2>
        <div class="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {["React", "Fresh", "Next.js", "Remix", "Deno", "Node.js", "GraphQL", "AWS", "Vercel", "Sanity", "BigCommerce", "Stripe", "TailwindCSS", "PostgreSQL", "Python ML", "TensorFlow"].map((tech) => (
            <span key={tech} class="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ─── 6. SUCCESS METRICS ────────────────────────────────── */}
      <section class="py-20 bg-primary-600 text-white text-center px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto grid sm:grid-cols-3 gap-12">
          {[
            ["120 ms", "Avg. server response time"],
            ["99.9 %", "Uptime SLA on managed projects"],
            ["32 %", "Median conversion‑rate lift"],
          ].map(([stat, label]) => (
            <div key={stat} class="space-y-2">
              <p class="text-4xl md:text-5xl font-extrabold">{stat}</p>
              <p class="text-base md:text-lg font-medium text-white/90">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. CLIENT QUOTES CAROUSEL (Static for now) ─────────── */}
      <section class="py-20 bg-white px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Clients Say
        </h2>
        <div class="max-w-3xl mx-auto space-y-16">
          {[
            ["They migrated our 8‑year Shopify store to headless in 10 weeks—traffic spiked 3× on launch day and the site never flinched.", "CTO, DTC Apparel Brand"],
            ["Their API team integrated TikTok Shop in two sprints. We’re now omnichannel without juggling five dashboards.", "Head of Digital, CPG Startup"],
          ].map(([quote, author]) => (
            <blockquote key={author} class="relative bg-primary-50/40 p-8 rounded-3xl shadow-md">
              <p class="text-lg md:text-xl text-gray-800 leading-relaxed">“{quote}”</p>
              <footer class="mt-4 text-sm font-medium text-primary-700">— {author}</footer>
            </blockquote>
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
            ["How long does a typical build take?", "8–12 weeks for an MVP; enterprise timelines vary."],
            ["Do you work with early‑stage startups?", "Yes—ask about our MVP bundle designed for rapid validation."],
            ["Can you maintain our legacy platform during migration?", "Absolutely. We run both stacks in parallel until cut‑over."],
          ].map(([q, a]) => (
            <details
              key={q}
              className="group bg-white rounded-lg shadow-sm p-6 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                {q}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 ml-4 transition-transform duration-300 group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── 9. Closing CTA ───────────────────────────────────────── */}
<section className="py-24 bg-primary-600 text-center px-4 md:px-6 lg:px-8">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
    Ready to kick‑start your build?
  </h2>
  <p className="text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
    Whether you’re validating an MVP or scaling a global commerce stack, our
    team can help you ship faster—with zero technical debt.
  </p>
  <a
    href="/contact"
    className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
  >
    Schedule a Discovery Call →
  </a>
</section>

    </>
  );
}
