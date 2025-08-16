// routes/index.tsx
/** Professional responsive homepage */
import StatCounter from "../islands/StatCounter.tsx";
import { h } from "preact";
import { useState } from "preact/hooks";
import FeatureTabs from "../islands/FeatureTabs.tsx";

function HeroSection() {
  return (
    <section class="relative w-full min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 bg-abstract opacity-10 pointer-events-none">
      </div>

      {/* Floating elements */}
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float">
      </div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-float delay-1000">
      </div>
      <div class="absolute bottom-40 left-20 w-12 h-12 bg-primary-400 rounded-full opacity-25 animate-float delay-2000">
      </div>

      {/* Main content */}
      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left column - Content */}
          <div class="text-center lg:text-left space-y-8">
            <div class="space-y-6">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-neutral-900 leading-tight tracking-tight">
                Launch Once.
                <span class="block text-primary-600">Grow Everywhere.</span>
              </h1>
              <p class="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                The complete{" "}
                <span class="font-semibold text-primary-600">
                  headless commerce platform
                </span>{" "}
                that scales with your business.
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Get Started Free
                  <svg
                    class="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="/platform"
                  class="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 hover:border-primary-600 text-neutral-700 hover:text-primary-600 font-semibold rounded-lg transition-all duration-200"
                >
                  View Platform
                </a>
              </div>

              <p class="text-sm text-neutral-500 font-medium">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>

          {/* Right column - Visual */}
          <div class="relative">
            <div class="relative z-10">
              <img
                src="/images/phone.png"
                alt="HeadlessPro mobile app"
                class="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto animate-float"
              />
            </div>

            {/* Floating dashboard preview */}
            <div class="absolute -top-8 -right-8 lg:-right-16 z-20 hidden lg:block">
              <img
                src="/images/dashboard.png"
                alt="Analytics dashboard"
                class="w-64 h-auto animate-drift delay-500 opacity-90"
              />
            </div>

            {/* Decorative elements */}
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-60 animate-bounceSlow">
            </div>
            <div class="absolute top-1/2 -right-4 w-8 h-8 bg-primary-300 rounded-full opacity-40 animate-float delay-1000">
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center space-y-2 text-neutral-400">
          <span class="text-sm font-medium">Scroll to explore</span>
          <svg
            class="w-6 h-6 animate-bounceArrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Commerce Solutions Section */}
      <section class="relative bg-neutral-50 py-16 lg:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-neutral-900 flex items-center justify-center flex-wrap gap-4">
            <span>Commerce solutions from</span>
            <img
              src="/images/logo.png"
              alt="HeadlessPro Logo"
              class="inline-block w-24 h-auto md:w-32"
            />
          </h2>
          <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-neutral-600 leading-relaxed font-light">
            Our modular platform unites best‑in‑class services so you can solve
            your toughest commerce challenges—rapidly, reliably, and at global
            scale.
          </p>
        </div>
      </section>

      {/* New Release Spotlight */}
      <section class="bg-white py-16 lg:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <p class="text-sm font-semibold uppercase text-primary-600 tracking-wide">
                New Release
              </p>
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight">
                Agentic Commerce Orchestrator
              </h3>
              <p class="text-lg text-neutral-600 leading-relaxed font-light">
                Give your team an always‑on commerce copilot—automatically
                connecting your catalog, promotions, and customer data so every
                purchase journey feels tailored.
              </p>
              <a
                href="/why-headless"
                class="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                Why headless?
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div>
              <img
                src="/images/Agentic_Commerce_Orchestrator_Design.png"
                alt="Agentic Commerce Orchestrator"
                class="w-full h-64 md:h-auto object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureTabs />

      {/* Big Split-Panel Tiles */}
      <section class="py-16 lg:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Panel 1 */}
          <div class="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 bg-white text-neutral-900">
            <div class="md:w-1/2 p-8 lg:p-12">
              <h3 class="text-2xl lg:text-3xl font-display font-bold mb-6">
                Personalized shopping experiences
              </h3>
              <p class="text-lg lg:text-xl leading-relaxed text-neutral-600 mb-8 font-light">
                Modern shoppers expect one‑to‑one relevance across every
                channel. With HeadlessPro, you can deliver product
                recommendations, dynamic pricing, and loyalty rewards that turn
                browsers into lifelong buyers.
              </p>

              <a
                href="/learn-more/personalization"
                class="inline-flex items-center px-6 py-3 border-2 border-neutral-900 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-200"
              >
                Learn more
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/personalized-shopping.png"
                alt="Personalized shopping experiences"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Panel 2 (accent) */}
          <div class="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 bg-primary-600 text-white">
            <div class="md:w-1/2 p-8 lg:p-12">
              <h3 class="text-2xl lg:text-3xl font-display font-bold mb-6">
                Unified commerce experience
              </h3>
              <p class="text-lg lg:text-xl leading-relaxed text-white/90 mb-8 font-light">
                Connect every touchpoint—web, app, social, in‑store—and tie them
                back to a single customer profile. Gain 360° visibility into
                orders, returns, and lifetime value, then optimize journeys in
                real time.
              </p>

              <a
                href="/learn-more/unified-commerce"
                class="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Learn more
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/unified-commerce.png"
                alt="Unified commerce experience"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More ways HeadlessPro empowers you */}
      <section class="py-16 lg:py-24 bg-gradient-to-r from-primary-50 to-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="md:flex md:items-center md:space-x-12">
            {/* Left side: checklist */}
            <div class="md:w-1/2 space-y-8">
              <h3 class="text-3xl lg:text-4xl font-display font-bold text-neutral-900">
                More ways <span class="text-primary-600">HeadlessPro</span>{" "}
                empowers you
              </h3>
              <ul class="space-y-6">
                {[
                  {
                    icon: "/images/recommendations.png",
                    title: "Smart Recommendations",
                    text:
                      "AI‑driven product suggestions that boost order value.",
                  },
                  {
                    icon: "/images/analytics.png",
                    title: "Real‑Time Analytics",
                    text:
                      "Live dashboards to track revenue, churn, and cohorts.",
                  },
                  {
                    icon: "/images/automation.png",
                    title: "Workflow Automation",
                    text:
                      "Trigger emails, inventory syncs, and promos automatically.",
                  },
                ].map((f) => (
                  <li key={f.title} class="flex items-start space-x-4">
                    <img
                      src={f.icon}
                      alt=""
                      class="w-8 h-8 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 class="text-xl font-semibold text-neutral-900">
                        {f.title}
                      </h4>
                      <p class="text-neutral-600 font-light">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: floating icons */}
            <div class="hidden md:block md:w-1/2 relative h-64">
              {[
                {
                  icon: "/images/recommendations.png",
                  top: "10%",
                  left: "20%",
                },
                { icon: "/images/analytics.png", top: "30%", left: "70%" },
                { icon: "/images/automation.png", top: "65%", left: "40%" },
              ].map((f, i) => (
                <div
                  key={i}
                  class="absolute"
                  style={{ top: f.top, left: f.left }}
                >
                  <div class="p-4 bg-white rounded-full shadow-soft animate-float">
                    <img src={f.icon} alt="" class="w-8 h-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orchestration Process Steps (simple + beginner friendly) */}
      <section class="py-16 lg:py-24 bg-neutral-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative">
            {/* Vertical connector line (desktop only) */}
            <div class="hidden md:block absolute left-12 top-8 bottom-8 w-0.5 bg-neutral-300" />

            <div class="space-y-16">
              {/* ========== STEP 1 ========== */}
              <div class="md:flex md:items-center md:space-x-12">
                {/* Step number circle */}
                <div class="flex-shrink-0 flex items-center">
                  <div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>

                {/* Content row: text (left) + image (right) */}
                <div class="mt-4 md:mt-0 md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Text block */}
                  <div class="order-2 md:order-1">
                    <h3 class="text-2xl font-display font-semibold text-neutral-900 mb-3">
                      Omnichannel storefront production
                    </h3>
                    <p class="text-neutral-600 leading-relaxed mb-6 font-light">
                      Empower marketing and dev teams to spin up new
                      storefronts, landing pages, or micro-sites in minutes—no
                      more heavy lift on back-end code or dev sprints.
                    </p>

                    {/* BUTTON: App design case study (MOBILE) */}
                    {/* Fresh routes: routes/case-studies/mobie.tsx → /case-studies/mobie */}
                    <a
                      href="/case-studies/mobile"
                      class="inline-flex items-center px-6 py-3 border-2 border-neutral-900 rounded-lg font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200"
                    >
                      App design case study
                      <svg
                        class="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Image */}
                  <div class="order-1 md:order-2">
                    <img
                      src="/images/omnichannel-storefront.png"
                      alt="Omnichannel storefront production"
                      class="w-full h-48 md:h-40 object-cover rounded-2xl shadow-soft"
                    />
                  </div>
                </div>
              </div>

              {/* ========== STEP 2 ========== */}
              <div class="md:flex md:items-center md:space-x-12">
                {/* Step number circle */}
                <div class="flex-shrink-0 flex items-center">
                  <div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>

                {/* Content row: text (left) + image (right) */}
                <div class="mt-4 md:mt-0 md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Text block */}
                  <div class="order-2 md:order-1">
                    <h3 class="text-2xl font-display font-semibold text-neutral-900 mb-3">
                      B2B &amp; C2C orchestration
                    </h3>
                    <p class="text-neutral-600 leading-relaxed mb-6 font-light">
                      Whether selling direct to consumers or to business
                      accounts, manage multi-tier catalogs, custom pricing, and
                      approval workflows from one dashboard.
                    </p>

                    {/* BUTTON: Web design case study */}
                    {/* Change /case-studies/web to wherever your web case study lives. */}
                    <a
                      href="/case-studies/web"
                      class="inline-flex items-center px-6 py-3 border-2 border-neutral-900 rounded-lg font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200"
                    >
                      Web design case study
                      <svg
                        class="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Image */}
                  <div class="order-1 md:order-2">
                    <img
                      src="/images/b2b-b2c.png"
                      alt="B2B & C2C orchestration"
                      class="w-full h-48 md:h-40 object-cover rounded-2xl shadow-soft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
