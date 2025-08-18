// routes/index.tsx
/** Professional responsive homepage */
import StatCounter from "../islands/StatCounter.tsx";
import { h } from "preact";
import { useState } from "preact/hooks";
import FeatureTabs from "../islands/FeatureTabs.tsx";
import Reveal from "../islands/Reveal.tsx";
import TiltCard from "../islands/TiltCard.tsx";
import AnimateOnView from "../islands/AnimateOnView.tsx";
import EndcapCTA from "../components/EndcapCTA.tsx";
import AOSProvider from "../islands/AOSProvider.tsx";


function HeroSection() {

  
  
  return (
    <section class="relative w-full min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 motion-safe:animate-float">
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
    <AOSProvider
          autoTargets={[
            "#aos-scope h1",
            "#aos-scope h2",
            "#aos-scope h3",
            "#aos-scope p",
            "#aos-scope figure",
            "#aos-scope img",
            "#aos-scope article",
          ]}
          distancePx={28}
          durationMs={900}
          delayStepMs={90}
          rootMargin="0px 0px -12% 0px"
          threshold={0.15}
        />
    
      <HeroSection />

      {/* Commerce Solutions Section */}
      <section class="relative bg-neutral-50 py-16 lg:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-neutral-900 flex items-center justify-center flex-wrap gap-4 ">
            <span class="">Commerce solutions from</span>
            <img
              src="/images/logo.png"
              alt="HeadlessPro Logo"
              class="inline-block w-24 h-auto md:w-32"
            />
          </h2>
          <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-neutral-600 leading-relaxed font-light">
            Our modular platform unites best in class services so you can solve
            your toughest commerce challenges rapidly, reliably, and at global
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
                Give your team an always on commerce copilot automatically
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

      {/* Feature Showcase — Adobe-style editorial tiles */}
      <section class="py-20 lg:py-28">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* === Card A — Omnichannel Sales (dark hero) === */}
            <Reveal>
              <TiltCard>
                <article class="relative overflow-hidden rounded-[28px]
  bg-primary-dark-3 text-primary-color
  min-h-[460px] p-8 md:p-10 shadow-card-1 hover:shadow-card-2
  grid grid-rows-[auto_1fr_auto] gap-0 transition-all">
                  {/* Header (locks at top) */}
                  <div>
                    <h3 class="text-3xl md:text-4xl font-bold leading-tight">
                      See sales across every channel in one view.
                    </h3>
                    <p class="mt-3 max-w-[36ch] text-primary-color/80 line-clamp-2 md:line-clamp-3">
                      Amazon, eBay, TikTok Shop, web & mobile clean breakdowns
                      and trends.
                    </p>
                  </div>

                  {/* Spacer row expands/shrinks so footer never moves */}
                  <div></div>

                  {/* Footer visual (always aligned across cards) */}
                  <figure class="relative rounded-2xl overflow-hidden ring-1 ring-alpha-light">
                    <img
                      src="/images/web_channel_sales_card_v2.png"
                      alt="Omnichannel"
                      class="w-full h-[180px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              </TiltCard>
            </Reveal>

            {/* === Card B — ML Assistant (solid brand block) === */}
            <Reveal delay={60}>
              <TiltCard>
                <article class="relative overflow-hidden rounded-[28px]
         bg-primary-dark-3 text-primary-color
         min-h-[460px] p-8 md:p-10 shadow-card-1 hover:shadow-card-2
         grid grid-rows-[auto_1fr_auto] gap-y-6 transition-all">
                  {/* Top: title + copy (clamped) */}
                  <div>
                    <h3 class="text-3xl md:text-4xl font-bold leading-tight line-clamp-2">
                      Meet our Intelligent Churn Assistant.
                    </h3>
                    <p class="mt-3 max-w-[36ch] text-primary-color/80 line-clamp-3">
                      Find customers at risk and trigger coupons, emails, or SMS
                      winbacks.
                    </p>
                  </div>

                  {/* Middle: flexible spacer keeps footer at bottom */}
                  <div></div>

                  {/* Bottom: visual (no margins; card padding + gap handle spacing) */}
                  <figure class="rounded-2xl overflow-hidden ring-1 ring-alpha-light">
                    <img
                      src="/images/ml_churn_risk_card_clear.png"
                      alt="Churn UI"
                      class="w-full h-[180px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              </TiltCard>
            </Reveal>

            {/* === Card C — Products & Inventory (same structure as A/B) === */}
            <Reveal delay={120}>
              <TiltCard>
                <article class="relative overflow-hidden rounded-[28px] bg-body-light-3 text-body-light-12 min-h-[420px] p-8 md:p-10 pb-44 shadow-card-1 hover:shadow-card-2 transition-all">
                  <h3 class="text-3xl md:text-4xl font-bold leading-tight">
                    Products &amp; inventory at a glance.
                  </h3>

                  <p class="mt-4 max-w-[42ch] text-body-light-10 line-clamp-2 md:line-clamp-3">
                    Track status, stock levels, SKUs, categories, and
                    performance in one clean table.
                  </p>

                  {/* Visual (bottom framed image like A/B) */}
                  <div class="relative mt-10 inset-x-6 bottom-6 rounded-2xl overflow-hidden ring-1 ring-alpha-light">
                    {/* Replace src with your asset path */}
                    <img
                      src="/images/inventory_table.png"
                      alt="Inventory table showing product, SKU, category, status, inventory, units sold"
                      class="w-full h-44 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </article>
              </TiltCard>
            </Reveal>

            {/* === Card D — Recent Orders (light, big list feel) === */}
            <Reveal>
              <TiltCard>
                <article class="rounded-[28px] bg-body-light-2 text-body-light-12
         min-h-[460px] p-8 md:p-10 shadow-card-1 hover:shadow-card-2
         grid grid-rows-[auto_1fr_auto] gap-y-6 transition-all">
                  {/* Top: title + copy (clamped) */}
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold leading-tight">
                      Recent orders
                    </h3>
                    <p class="mt-3 max-w-[42ch] text-body-light-10 line-clamp-3">
                      Track fulfillment at a glance—linkable order IDs, clear
                      status chips, and totals for quick action.
                    </p>
                  </div>

                  {/* Middle: spacer keeps footer locked to bottom */}
                  <div></div>

                  {/* Bottom: visual (fixed height for perfect alignment) */}
                  <figure class="rounded-2xl overflow-hidden ring-1 ring-alpha-light">
                    <img
                      src="/images/recent_orders_polished.png"
                      alt="Recent orders"
                      class="w-full h-[180px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              </TiltCard>
            </Reveal>

            {/* === Card E — Gen content / Marketing (brand purple tile) === */}
            <Reveal delay={60}>
              <TiltCard>
                <article class="rounded-[28px] bg-primary-dark-8 text-primary-color
         min-h-[460px] p-8 md:p-10 shadow-card-1 hover:shadow-card-2
         grid grid-rows-[auto_1fr_auto] gap-y-6 transition-all">
                  {/* Top: title + copy (clamped) */}
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold leading-tight line-clamp-2">
                      Create discount / coupon
                    </h3>
                    <p class="mt-3 text-primary-color/85 max-w-[40ch] line-clamp-3">
                      Generate codes in seconds—set value, validity, and scope.
                    </p>
                  </div>

                  {/* Middle spacer keeps footer locked to bottom */}
                  <div></div>

                  {/* Bottom: visual (fixed height for perfect alignment) */}
                  <figure class="rounded-2xl overflow-hidden ring-1 ring-alpha-light">
                    <img
                      src="/images/create_coupon_simple_centered.png"
                      alt="Create coupon"
                      class="w-full h-[180px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              </TiltCard>
            </Reveal>

            {/* === Card F — CRM (light card) === */}
            <Reveal delay={120}>
              <TiltCard>
                <article class="rounded-[28px] bg-body-light-3 text-body-light-12
         min-h-[460px] p-8 md:p-10 shadow-card-1 hover:shadow-card-2
         grid grid-rows-[auto_1fr_auto] gap-y-6 transition-all">
                  {/* Top: title + copy (clamped) */}
                  <div>
                    <h3 class="text-2xl md:text-3xl font-bold leading-tight line-clamp-2">
                      Customer list
                    </h3>
                    <p class="mt-3 max-w-[42ch] text-body-light-10 line-clamp-3">
                      A clean customer list with avatars, segment chips, and key
                      dates to find and engage the right people fast.
                    </p>
                  </div>

                  {/* Middle: spacer keeps footer locked to bottom */}
                  <div></div>

                  {/* Bottom: visual (fixed height for perfect alignment) */}
                  <figure class="rounded-2xl overflow-hidden ring-1 ring-alpha-light">
                    <img
                      src="/images/customer_list_clean.png"
                      alt="Customer list"
                      class="w-full h-[180px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FM Lab — Case Studies (centered header, image follows) ===== */}
      <section class="py-20 lg:py-28">
        <div class="mt-10 lg:mt-14 relative overflow-hidden shadow-card-2 ring-1 ring-white/10 bg-body-light-3 min-h-[420px] sm:min-h-[560px] lg:min-h-[520px]">
          {/* Background image */}
          <img
            src="/images/case-studies-portrait.jpg"
            alt="FM Lab mobile and web storefront design"
            class="block w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* Blur + legibility overlays */}
          <div class="absolute inset-0 z-10">
            <div class="absolute inset-0 backdrop-blur-md bg-black/10"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-transparent">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
            </div>
          </div>

          {/* Content overlay as a 3-row grid: top label / center hero / bottom CTAs */}
          <div class="absolute inset-0 z-20 grid grid-rows-[auto_1fr_auto] items-center text-center px-4 sm:px-6 py-6 sm:py-10">
            {/* Top label (anchored, small on mobile) */}
            <div class="row-start-1">
              <p class="text-4xl 2lg:text-base tracking-[0.2em] font-semibold text-white/70">
                CASE STUDIES
              </p>
            </div>

            {/* Center hero (logo + headline + subcopy) */}
            <div class="row-start-2 flex flex-col items-center justify-center gap-3 sm:gap-4">
              <h2 class="text-2xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
                <span class="inline-flex items-center gap-2 sm:gap-3 align-middle">
                  <img
                    src="/images/logo.png"
                    alt="FM"
                    class="h-10 sm:h-12 lg:h-14 w-auto drop-shadow"
                  />
                  <span>Lab</span>
                </span>
              </h2>

              <h3 class="text-lg sm:text-2xl font-semibold inline-block
                    bg-gradient-to-r from-white via-primary-100 to-primary-400
                    bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                Design That Sells
              </h3>

              <p class="max-w-[48ch] text-lg lg:text-base text-white/85 px-2">
                FM Lab turns minimal UI and motion into measurable lift across
                mobile and web storefronts.
              </p>
            </div>

            {/* Bottom CTAs (anchored) */}
            <div class="row-start-3">
              <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {/* Liquid-glass outline button */}
                <a
                  href="/case-studies/mobile"
                  class="group relative inline-flex rounded-full"
                >
                  <span class="relative inline-flex items-center justify-center rounded-full
                          px-6 sm:px-7 py-2.5 sm:py-3 text-white
                          border border-white/50
                          backdrop-blur-md bg-white/0
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,.35)]
                          before:absolute before:inset-0 before:rounded-full
                          before:bg-gradient-to-b before:from-white/20 before:to-transparent
                          before:opacity-50
                          hover:border-white/70 hover:before:opacity-80
                          transition">
                    Mobile case study
                  </span>
                </a>

                {/* Gradient-border button (pink → purple) */}
                <a
                  href="/case-studies/web"
                  class="group relative inline-flex rounded-full"
                >
                  <span class="relative inline-flex items-center justify-center rounded-full
                          px-6 sm:px-7 py-2.5 sm:py-3 text-white
                          border border-white/50
                          backdrop-blur-md bg-white/0
                          shadow-[inset_0_1px_0_0_rgba(255,255,255,.35)]
                          before:absolute before:inset-0 before:rounded-full
                          before:bg-gradient-to-b before:from-white/20 before:to-transparent
                          before:opacity-50
                          hover:border-white/70 hover:before:opacity-80
                          transition">
                    Website case study
                  </span>
                </a>
              </div>
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
                More ways <span class="text-primary-600">Headless Engine</span>
                {" "}
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
                  <li key={f.title} class="flex items-start space-x-40">
                    <img
                      src={f.icon}
                      alt=""
                      class="w-10 h-10 mt-1 flex-shrink-0"
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
                    <img src={f.icon} alt="" class="w-12 h-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case‑study prompt ─────────────────────────── */}
      <section class="py-20 px-4 md:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Proven in production
          </h2>
          <p class="text-gray-700 mb-10">
            From Series B rocket ships to Fortune 500 innovators teams use
            Headless Engine to cut build time by <strong>40 %</strong>{" "}
            and boost conversion up to <strong>30 %</strong>.
          </p>
          <a
            href="/contact"
            class="inline-block bg-primary-600 text-white font-semibold
                   px-10 py-5 rounded-full shadow-lg hover:bg-primary-700 transition"
          >
            Request case studies →
          </a>
        </div>
      </section>

      {/* ========= END / LUXURY CALL-TO-ACTION ========= */}

      <EndcapCTA
        title="Ready when you are."
        description="Launch Once, Grow Everywhere."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/case-studies"
        secondaryLabel="See case studies"
      />
    </>
  );
}
