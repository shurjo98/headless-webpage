// routes/index.tsx
/** Floating HeadlessPro Hero */
/** routes/index.tsx – HeroSection with stronger visuals */
import StatCounter from "../islands/StatCounter.tsx";
import { h } from "preact";
import { useState } from "preact/hooks";
import FeatureTabs from "../islands/FeatureTabs.tsx"; // ← our island

function HeroSection() {
  return (
    <section class="relative w-full h-screen bg-primary-50 overflow-hidden">
      {/* Base background blob */}
      <div class="absolute inset-0 bg-abstract opacity-20 pointer-events-none">
      </div>

      {/* Phone: center on xs, offset on sm/md, sized per breakpoint */}
      <img
        src="/images/phone.png"
        className={`absolute transition-all ease-in-out
           left-1/2 -translate-x-1/2
           top-1/2 -translate-y-1/2
           w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3
           sm:top-12 sm:left-12 sm:translate-x-0 sm:translate-y-0
           md:translate-x-0 md:-translate-y-1/4
           animate-float`}
        alt="Storefront on device"
      />

      {/* Dashboard: visible sm+, hidden xs */}
      <img
        src="/images/dashboard.png"
        className="hidden sm:block absolute
          bottom-8 right-8
          w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5
          animate-drift delay-500"
        alt="Analytics dashboard"
      />

      {/* Globe: always visible, sizes by breakpoint, spin on md+ */}
      <img
        src="/images/globe.png"
        className="absolute
          top-4 right-4
          w-12 sm:w-16 md:w-20 lg:w-24
          md:animate-spinSlow
          opacity-80"
        alt="Global reach"
      />

      {/* Micro-icons: appear at md+ with safe spacing */}
      <img
        src="/images/cart.png"
        className="hidden md:block absolute top-8 left-8 w-10 lg:w-12 opacity-40 animate-float delay-1200"
        alt="Cart icon"
      />
      <img
        src="/images/code.png"
        className="hidden md:block absolute bottom-20 left-10 w-8 lg:w-10 opacity-35 animate-drift delay-2000"
        alt="Code icon"
      />

      {/* Bubble Text Container */}

      <div class="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 space-y-6">
        {/* Primary Heading Bubble */}
        <div class="bg-primary-600 text-white px-6 py-4 sm:px-8 sm:py-6 rounded-[2rem] max-w-xs sm:max-w-md md:max-w-lg animate-fadeIn">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
            Launch Once. Grow Everywhere.
          </h1>
        </div>

        {/* Tertiary Message Bubble */}
        <div class="bg-primary-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-[2rem] max-w-xs sm:max-w-md md:max-w-lg animate-fadeIn delay-1000 shadow-lg">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-medium leading-relaxed tracking-wide">
            <span class="font-semibold">All from one</span>{" "}
            <span class="italic opacity-90">headless engine</span>
          </p>
        </div>

        {/* Secondary Message Bubble */}
        <div class="bg-primary-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-[2rem] max-w-xs sm:max-w-md md:max-w-lg animate-fadeIn delay-500">
          <p class="text-lg sm:text-xl md:text-2xl text-center">
            Sell on web, mobile, social & marketplaces
          </p>
        </div>

        {/* Call‑to‑Action Button */}
        <a
          href="/signup"
          class="mt-4 sm:mt-6 inline-block bg-white text-primary-600 font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-full animate-popIn delay-1500 shadow-lg text-base sm:text-lg"
        >
          Get A Quote
        </a>
      </div>
      {/* Scroll-down arrow */}
      <div class="absolute bottom-4 w-full flex justify-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 animate-bounceArrow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* inside your Home component, just below HeroSection: */}
      <section className="relative bg-gray-50 py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 flex items-center justify-center">
            <span>Commerce solutions from</span>
            <img
              src="/images/logo.png" // ← adjust this path
              alt="FM Logo"
              className="inline-block w-24 h-auto ml-4 mb-1 align-middle md:w-32"
            />
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Our modular platform unites best‑in‑class services so you can solve
            your toughest commerce challenges—rapidly, reliably, and at global
            scale.
          </p>
        </div>
      </section>

      {/* 2. “New Release” Spotlight */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase text-primary-600">
              New Release
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Agentic Commerce Orchestrator
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Give your team an always‑on commerce copilot—automatically
              connecting your catalog, promotions, and customer data so every
              purchase journey feels tailored.
            </p>
            <a
              href="/learn-more"
              className="inline-block mt-4 font-medium text-primary-600 hover:underline"
            >
              Learn more →
            </a>
          </div>
          {/* Image column */}
          <div>
            <img
              src="/images/Agentic_Commerce_Orchestrator_Design.png" // ← your real image path
              alt="Agentic Commerce Orchestrator"
              className="w-full h-64 md:h-auto object-cover rounded-lg shadow-inner"
            />
          </div>
        </div>
      </section>

      <FeatureTabs />

      {/* 4. Big Split‑Panel Tiles */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-8">
          {/* Panel 1 */}
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition bg-white text-gray-900">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">
                Personalized shopping experiences
              </h3>
              <p className="text-3xl md:text-4xl font-semibold leading-relaxed text-neutral-600 mb-6">
                Modern shoppers expect one‑to‑one relevance across every
                channel. With [Platform], you can deliver product
                recommendations, dynamic pricing, and loyalty rewards that turn
                browsers into lifelong buyers.
              </p>

              <a
                href="/learn-more"
                className="inline-block px-5 py-2 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/personalized-shopping.png"
                alt="Personalized shopping experiences"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Panel 2 (accent) */}
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition bg-primary-600 text-white">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">
                Unified commerce experience
              </h3>
              <p className="text-3xl md:text-4xl font-bold leading-relaxed text-neutral-600 mb-6">
                Connect every touchpoint—web, app, social, in‑store—and tie them
                back to a single customer profile. Gain 360° visibility into
                orders, returns, and lifetime value, then optimize journeys in
                real time.
              </p>

              <a
                href="/learn-more"
                className="inline-block px-5 py-2 border-2 border-white rounded-full font-medium hover:bg-white/20 transition"
              >
                Learn more →
              </a>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/unified-commerce.png"
                alt="Unified commerce experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Redesigned “More ways [Platform] empowers you” */}
          <section className="py-20 bg-gradient-to-r from-primary-50 to-white">
            <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
              {/* Left side: checklist */}
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-3xl font-extrabold text-gray-900">
                  More ways <span className="text-primary-600">FM</span>
                  {" "}
                  empowers you
                </h3>
                <ul className="space-y-6">
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
                    <li key={f.title} className="flex items-start space-x-4">
                      <img
                        src={f.icon}
                        alt=""
                        className="w-8 h-8 mt-1 flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {f.title}
                        </h4>
                        <p className="text-gray-600">{f.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side: floating icons */}
              <div className="hidden md:block md:w-1/2 relative h-64">
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
                    className="absolute"
                    style={{ top: f.top, left: f.left }}
                  >
                    <div className="p-4 bg-white rounded-full shadow-lg animate-float">
                      <img src={f.icon} alt="" className="w-8 h-8" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Orchestration Process Steps */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="relative">
                {/* Vertical connector line (desktop only) */}
                <div className="hidden md:block absolute left-12 top-8 bottom-8 w-0.5 bg-gray-300" />

                <div className="space-y-16">
                  {[{
                    step: 1,
                    title: "Omnichannel storefront production",
                    text:
                      "Empower marketing and dev teams to spin up new storefronts, landing pages, or micro‑sites in minutes—no more heavy lift on back‑end code or dev sprints.",
                    img: "/images/omnichannel-storefront.png",
                  }, {
                    step: 2,
                    title: "B2B & C2C orchestration",
                    text:
                      "Whether selling direct to consumers or to business accounts, manage multi‑tier catalogs, custom pricing, and approval workflows all from one dashboard.",
                    img: "/images/b2b-b2c.png",
                  }].map(({ step, title, text, img }) => (
                    <div
                      key={step}
                      className="md:flex md:items-center md:space-x-12"
                    >
                      {/* Step Number */}
                      <div className="flex-shrink-0 flex items-center">
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                          {step}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="mt-4 md:mt-0 md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Text */}
                        <div className="order-2 md:order-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            {title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {text}
                          </p>
                          <a
                            href="/learn-more"
                            className="inline-block px-5 py-2 border-2 border-primary-600 rounded-full font-medium text-primary-600 hover:bg-primary-50 transition"
                          >
                            Learn more →
                          </a>
                        </div>
                        {/* Image */}
                        <div className="order-1 md:order-2">
                          <img
                            src={img}
                            alt={title}
                            className="w-full h-48 md:h-40 object-cover rounded-lg shadow"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
