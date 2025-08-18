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
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Frosted card */}
          <div class="group relative isolate overflow-hidden rounded-[28px]
             ring-1 ring-white/10
             shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_30px_70px_-30px_rgba(0,0,0,0.45)]
             min-h-[420px] sm:min-h-[560px] lg:min-h-[520px]
             transition-transform duration-500 will-change-transform
             motion-safe:hover:scale-[1.01]">
            {/* Background image */}
            <img
              src="/images/case-studies-portrait.jpg"
              alt="FM Lab mobile and web storefront design"
              class="absolute inset-0 -z-10 h-full w-full object-cover
               transition-transform duration-700 ease-[cubic-bezier(.2,.6,.2,1)]
               motion-safe:group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />

            {/* Frost + gradients (legibility) */}
            <div class="absolute inset-0 -z-10">
              {/* Blur layer only when supported (keeps Safari happy) */}
              <div class="absolute inset-0 supports-[backdrop-filter]:backdrop-blur-xl supports-[backdrop-filter]:bg-white/5 bg-black/20">
              </div>
              {/* Top glossy edge */}
              <div class="pointer-events-none absolute inset-x-0 top-0 h-24
                    bg-gradient-to-b from-white/30 via-white/10 to-transparent">
              </div>
              {/* Bottom fade for text contrast */}
              <div class="pointer-events-none absolute inset-x-0 bottom-0 h-40
                    bg-gradient-to-t from-black/50 via-black/20 to-transparent">
              </div>
            </div>

            {/* Content — centered */}
            {/* Content — Apple typography & colors */}
            <div class="absolute inset-0 z-20 grid place-items-center px-4">
              <div class="flex flex-col items-center text-center gap-5 max-w-[50ch]">
                {/* Logo row stays as-is */}
                <h2 class="text-2xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
                  <span class="inline-flex items-center gap-2 sm:gap-3 align-middle">
                    <img
                      src="/images/logo.png"
                      alt="FM"
                      class="h-10 sm:h-12 lg:h-14 w-auto drop-shadow mr-3"
                    />{" "}
                    <span>Lab</span>
                  </span>
                </h2>

                {/* Headline: tight, semi-bold, pure white */}
                <h2 class="text-[clamp(28px,5vw,54px)] font-semibold tracking-tight leading-[1.06] text-white">
                  Design That Sells
                </h2>

                {/* Body: slightly softer white, comfy line-height */}
                <p class="text-[clamp(16px,2.1vw,20px)] font-medium leading-relaxed text-white/85">
                  FM Lab turns minimal UI and motion into measurable lift across
                  mobile and web storefronts.
                </p>

                {/* CTAs: primary = filled white, secondary = glass */}
                <div class="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  {/* Primary */}
                  <a
                    href="/case-studies/mobile"
                    class="inline-flex rounded-full px-6 sm:px-7 py-2.5 sm:py-3
                bg-white text-neutral-900 font-semibold
                ring-1 ring-black/5
                shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_6px_20px_-8px_rgba(0,0,0,.25)]
                hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF] transition hover:bg-sky-700"
                  >
                    Mobile case study
                  </a>

                  {/* Secondary */}
                  <a
                    href="/case-studies/web"
                    class="inline-flex rounded-full px-6 sm:px-7 py-2.5 sm:py-3
                text-white font-semibold
                ring-1 ring-white/50 bg-white/10 backdrop-blur-xl
                hover:bg-white/14 hover:ring-white/70
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF] transition hover:bg-sky-700"
                  >
                    Website case study
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle focus ring on hover (Apple-esque) */}
            <div class="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/0 group-hover:ring-white/20 transition">
            </div>
          </div>
        </div>
      </section>

      {/* More ways HeadlessPro empowers you */}
      {/* ===== Apple-style “More ways … empowers you” ===== */}
      <section class="py-20 lg:py-28 bg-gradient-to-r from-neutral-50 to-white">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
          <div class="md:grid md:grid-cols-2 md:gap-16 md:items-start">
            {/* Left: title + features */}
            <div class="space-y-8">
              <h3 class="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                More ways{" "}
                <span class="bg-gradient-to-r from-[#0A84FF] to-[#64D2FF] bg-clip-text text-transparent">
                  Headless Engine
                </span>{" "}
                empowers you
              </h3>

              <ul class="space-y-6">
                {[
                  {
                    icon: "/images/recommendations.png",
                    title: "Smart Recommendations",
                    text:
                      "AI-driven product suggestions that boost order value.",
                  },
                  {
                    icon: "/images/analytics.png",
                    title: "Real-Time Analytics",
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
                  <li key={f.title} class="group flex items-start gap-5">
                    {/* Icon chip (glass, subtle shadow) */}
                    <div class="grid place-items-center h-12 w-12 rounded-2xl
                       bg-white/70 backdrop-blur-xl ring-1 ring-black/5
                       shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_10px_30px_-12px_rgba(0,0,0,.25)]
                       transition-transform motion-safe:group-hover:-translate-y-0.5 flex-none">
                      <img src={f.icon} alt="" class="h-6 w-6" />
                    </div>

                    <div class="space-y-1">
                      <h4 class="text-xl font-semibold tracking-tight text-neutral-900">
                        {f.title}
                      </h4>
                      <p class="text-neutral-600">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: airy floating chips (decorative) */}
            <div class="relative mt-14 md:mt-0 h-90 md:h-auto">
              <div class="hidden md:block relative h-full">
                {[
                  {
                    icon: "/images/recommendations.png",
                    top: "12%",
                    left: "18%",
                  },
                  { icon: "/images/automation.png", top: "46%", left: "56%" },
                  { icon: "/images/analytics.png", top: "22%", left: "78%" },
                ].map((f, i) => (
                  <div
                    key={i}
                    class="absolute"
                    style={{ top: f.top, left: f.left }}
                  >
                    <div class="p-4 rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5
                          shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_12px_40px_-18px_rgba(0,0,0,.28)]
                          motion-safe:animate-[float_6s_ease-in-out_infinite]">
                      <img src={f.icon} alt="" class="h-20 w-20" />
                    </div>
                  </div>
                ))}
              </div>
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
