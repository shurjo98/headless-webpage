import { Head } from "$fresh/runtime.ts";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | HeadlessPro</title>
        <meta
          name="description"
          content="End‑to‑end headless commerce development, ML/AI analytics, integrations, and more."
        />
      </Head>

      {/* Hero Section */}
      <section class="relative py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
        <div class="absolute inset-0 bg-abstract opacity-5"></div>
        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-neutral-900 mb-6 tracking-tight">
            Custom Headless Solutions, End‑to‑End
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-neutral-600 leading-relaxed mb-8 font-light">
            From architecture audits to machine‑learning‑powered analytics, we handle every layer of modern commerce.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Your Project
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-200"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section class="py-16 lg:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-neutral-900 mb-16">
              Our Core Services
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  title: "Green‑field Builds",
                  description: "Launch blazing‑fast storefronts powered by Next.js, Fresh, or Remix—tailored to your brand and growth goals."
                },
                {
                  title: "Headless Migrations",
                  description: "Re‑platform from Shopify, Magento, or WooCommerce without downtime. Phased, data‑safe, SEO‑friendly."
                },
                {
                  title: "Backend & API Engineering",
                  description: "GraphQL/REST services for products, carts, orders, loyalty, and subscriptions—deployable to AWS, Vercel, or Deno Deploy."
                },
                {
                  title: "System Integrations",
                  description: "Stripe, PayPal, Amazon SP‑API, TikTok Shop, ERP, PIM, CMS—if it has an API, we'll connect it."
                },
                {
                  title: "Performance & SEO Optimization",
                  description: "Lighthouse 95+ scores, edge caching, Core Web Vitals solidly in the green."
                },
                {
                  title: "ML/AI & Data Analytics",
                  description: "Predict churn, personalize offers, and surface actionable insights with machine‑learning pipelines and real‑time dashboards."
                },
                {
                  title: "Ongoing DevOps & Support",
                  description: "24/7 monitoring, CI/CD pipelines, version upgrades, and feature sprints on retainer."
                }
              ].map((service, index) => (
                <div key={index} class="group p-8 bg-neutral-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 class="text-xl lg:text-2xl font-display font-semibold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p class="text-neutral-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section class="py-16 lg:py-24 bg-neutral-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-neutral-900 mb-16">
              Engagement Models
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Fixed‑Scope Projects",
                  description: "Clear timelines, clear deliverables, no surprises.",
                  icon: "📋"
                },
                {
                  title: "Monthly Retainers",
                  description: "Our team becomes your on‑call dev squad—ideal for iterative roadmaps.",
                  icon: "🔄"
                },
                {
                  title: "Team Augmentation",
                  description: "Need extra horsepower? We embed senior engineers alongside your staff.",
                  icon: "👥"
                }
              ].map((model, index) => (
                <div key={index} class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div class="text-4xl mb-6">{model.icon}</div>
                  <h3 class="text-xl lg:text-2xl font-display font-semibold text-neutral-900 mb-4">
                    {model.title}
                  </h3>
                  <p class="text-neutral-600 leading-relaxed font-light">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section class="py-16 lg:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-neutral-900 mb-16">
              Our 5‑Step Delivery Process
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "Architect & Plan",
                  description: "Technical audit, KPIs, roadmap."
                },
                {
                  step: "2",
                  title: "Design & Prototype",
                  description: "Click‑through Figma plus performance budgets."
                },
                {
                  step: "3",
                  title: "Develop & Integrate",
                  description: "Agile sprints, weekly demos."
                },
                {
                  step: "4",
                  title: "QA & Launch",
                  description: "Automated tests, zero‑downtime deploy."
                },
                {
                  step: "5",
                  title: "Optimize & Grow",
                  description: "A/B tests, ML insights, feature rollouts."
                }
              ].map((process, index) => (
                <div key={index} class="text-center space-y-6">
                  <div class="relative">
                    <div class="mx-auto w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl lg:text-2xl shadow-lg">
                      {process.step}
                    </div>
                    {index < 4 && (
                      <div class="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2 z-0"></div>
                    )}
                  </div>
                  <div class="space-y-4">
                    <h3 class="text-lg lg:text-xl font-display font-semibold text-neutral-900">
                      {process.title}
                    </h3>
                    <p class="text-neutral-600 leading-relaxed text-sm lg:text-base font-light">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p class="text-lg sm:text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto font-light">
            Let's discuss your project and see how we can help you scale your commerce business.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Your Project
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
