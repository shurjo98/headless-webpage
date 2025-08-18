// routes/case-studies/fastbites.tsx
import { asset, Head } from "$fresh/runtime.ts";
import AOSProvider from "../../islands/AOSProvider.tsx";
import ParallaxMarquee from "../../islands/ParallaxMarquee.tsx";
import SnapCarousel from "../../islands/SnapCarousel.tsx";
import ParallaxPosterRail from "../../islands/ParallaxPosterRail.tsx";
import EndcapCTA from "../../components/EndcapCTA.tsx";


/* ----------------------------------------------------------------
   Gallery images for the carousel (order is intentional)
----------------------------------------------------------------- */
const ROW = [
  { src: asset("/mobile/fastbites/screen-1-home.png"), alt: "Home" },
  { src: asset("/mobile/fastbites/screen-2-login.png"), alt: "Login" },
  { src: asset("/mobile/fastbites/screen-3-browse.png"), alt: "Browse" },
  {
    src: asset("/mobile/fastbites/screen-4-detail.png"),
    alt: "Product Detail",
  },
  { src: asset("/mobile/fastbites/screen-5-checkout.png"), alt: "Checkout" },
  {
    src: asset("/mobile/fastbites/screen-6-complete.png"),
    alt: "Order Complete",
  },
];

// routes/case-studies/fastbites.tsx (near other data)
// use the folder name you actually have
const MORDEN_ROW = Array.from({ length: 5 }, (_, i) => ({
  src: asset(`/mobile/morden/${i + 1}.png`),
  alt: `Morden ${i + 1}`,
}));

const STRUCTA_ROW = Array.from({ length: 5 }, (_, i) => ({
  src: asset(`/mobile/structa/${i + 1}.png`),
  alt: `Structa ${i + 1}`,
}));

{/* ============== 6.5) MODERNA (luxury rail) ============== */}

/* ----------------------------------------------------------------
   Page
----------------------------------------------------------------- */
export default function FastBitesCase() {
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

      <Head>
        <title>App Design — Case Study</title>
        <meta
          name="description"
          content="A one-hand, 60-second ordering flow. Principles, system, and screens for a warm, fast, trustworthy food-ordering app."
        />
        <style>
          {`
            @media (prefers-reduced-motion: reduce) {
              * { animation: none !important; transition: none !important; }
            }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
          `}
        </style>
      </Head>

      {/* Scope all animations to this container */}
      <main id="aos-scope" class="bg-white text-black">
        {/* PAGE INTRO — goes before the mobile HERO */}
        <section id="intro-mobile" class="relative w-full bg-neutral-50">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20 text-center">
            <p class="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Case Studies
            </p>
            <h1 class="mt-2 text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
              Mobile Design UI Case Studies
            </h1>
            <p class="mt-4 text-neutral-600 max-w-3xl mx-auto">
              Three mobile concepts—Furniture, Burger (FastBites), and
              Coffee—built for speed, clarity, and trust. Quiet chrome, bold
              type, and thumb-first ergonomics.
            </p>

            {/* quick in-page navigation */}
            <nav class="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#screens"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition"
              >
                FastBites (Burger)
              </a>
              <a
                href="#design-system"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 text-neutral-800 hover:border-neutral-400 transition"
              >
                Design System
              </a>
              <a
                href="#design-intelligence"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 text-neutral-800 hover:border-neutral-400 transition"
              >
                Design Intelligence
              </a>
              <a
                href="#morden"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 text-neutral-800 hover:border-neutral-400 transition"
              >
                Morden
              </a>
              <a
                href="#structa"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 text-neutral-800 hover:border-neutral-400 transition"
              >
                Structa
              </a>
            </nav>
          </div>
        </section>

        {
          /* ----------------------------------------------------------
           1) Intro band (full-bleed) — lean copy + hero image
        ----------------------------------------------------------- */
        }
        <section class="relative isolate w-screen -mx-[calc(50vw-50%)] overflow-hidden bg-black text-dark">
          {/* soft glow */}
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-24 left-1/2 h-[520px] w-[640px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
            <div class="absolute -bottom-40 -right-20 h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-2xl" />
          </div>

          <div class="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-12 md:px-8 py-20">
            <div class="md:col-span-5">
              <p class="text-[11px] uppercase tracking-[0.22em] text-white/60">
                Case Study
              </p>
              <h1 class="mt-2 text-4xl md:text-6xl text-white tracking-tight">
                One-hand. Sixty seconds.
              </h1>
              <p class="mt-5 text-white/70">
                We designed a calm, premium flow where decisions are obvious and
                checkout is effortless.
              </p>
            </div>

            <div class="md:col-span-7">
              <figure class="relative overflow-hidden rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src={asset("/mobile/fastbites/hero.png")}
                  alt="FastBites overview"
                  class="w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        {
          /* ----------------------------------------------------------
           2) Principles (calm, light section)
        ----------------------------------------------------------- */
        }
        <section class="px-6 md:px-8 py-16">
          <div class="mx-auto max-w-7xl">
            <h2 class="text-3xl md:text-5xl font-black tracking-tight text-center">
              Design principles
            </h2>
            <ul class="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
              <li class="rounded-xl bg-neutral-100 p-5">
                <p class="font-semibold">Glance → Decide → Checkout</p>
                <p class="text-neutral-700">One idea per screen.</p>
              </li>
              <li class="rounded-xl bg-neutral-100 p-5">
                <p class="font-semibold">Thumb-first ergonomics</p>
                <p class="text-neutral-700">Primary actions live in reach.</p>
              </li>
              <li class="rounded-xl bg-neutral-100 p-5">
                <p class="font-semibold">Honest appetites</p>
                <p class="text-neutral-700">
                  Food on dark; chrome stays quiet.
                </p>
              </li>
              <li class="rounded-xl bg-neutral-100 p-5">
                <p class="font-semibold">Friction where it protects</p>
                <p class="text-neutral-700">
                  Ask for login at the right moment.
                </p>
              </li>
              <li class="rounded-xl bg-neutral-100 p-5 sm:col-span-2">
                <p class="font-semibold">System, not pages</p>
                <p class="text-neutral-700">
                  Tokens, components, motion rules.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {
          /* ----------------------------------------------------------
           3) Design Intelligence (full-bleed black + gradient glass cards)
        ----------------------------------------------------------- */
        }
        <section
          id="design-intelligence"
          class="relative isolate w-screen -mx-[calc(50vw-50%)] overflow-hidden bg-black text-dark"
        >
          {/* soft radial glow accents */}
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-32 left-1/2 h-[520px] w-[640px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
            <div class="absolute -bottom-40 -right-20 h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-2xl" />
          </div>

          <div class="relative mx-auto max-w-7xl px-6 md:px-8 py-24">
            <p class="mt-2 text-5xl md:text-7xl text-white tracking-tight">
              Why it feels effortless
            </p>
            <h2 class="mt-3 text-2xl md:text-6xl text-white tracking-tight">
              Intelligent ways to design experiences.
            </h2>
            <p class="mt-4 max-w-5xl text-white/70">
              Furniture, burger, and coffee previews show the range. These
              choices make the system feel calm, fast, and premium.
            </p>

            <ul class="mt-14 grid gap-6 md:grid-cols-3">
              {/* Card 1 – warm wood / furniture */}
              <li class="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm hover:ring-white/20 transition">
                <div
                  aria-hidden
                  class="absolute inset-0 -z-10 bg-gradient-to-br from-amber-400/20 via-orange-400/10 to-rose-500/20"
                />
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20">
                    <span class="text-2xl">🛋️</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold">Contextual Design</h3>
                    <p class="mt-2 text-sm text-white/70">
                      Showroom-calm for furniture, bold for burgers, warm for
                      coffee.
                    </p>
                  </div>
                </div>
              </li>

              {/* Card 2 – brand storytelling */}
              <li class="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm hover:ring-white/20 transition">
                <div
                  aria-hidden
                  class="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20"
                />
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20">
                    <span class="text-xl">🍔</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold">Visual Storytelling</h3>
                    <p class="mt-2 text-sm text-white/70">
                      Content forward, chrome quiet. Contrast where it guides.
                    </p>
                  </div>
                </div>
              </li>

              {/* Card 3 – calm teal usability */}
              <li class="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm hover:ring-white/20 transition">
                <div
                  aria-hidden
                  class="absolute inset-0 -z-10 bg-gradient-to-br from-teal-400/20 via-emerald-400/10 to-cyan-400/20"
                />
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20">
                    <span class="text-xl">☕</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold">Seamless Usability</h3>
                    <p class="mt-2 text-sm text-white/70">
                      Thumb-first targets and single-purpose screens reduce
                      thinking.
                    </p>
                  </div>
                </div>
              </li>

              {/* Card 4 – performance */}
              <li class="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm hover:ring-white/20 transition">
                <div
                  aria-hidden
                  class="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-indigo-600/20"
                />
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20">
                    <span class="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold">
                      Performance by default
                    </h3>
                    <p class="mt-2 text-sm text-white/70">
                      Lightweight assets and calm motion feel instantaneous.
                    </p>
                  </div>
                </div>
              </li>

              {/* Card 5 – motion */}
              <li class="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm hover:ring-white/20 transition">
                <div
                  aria-hidden
                  class="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-pink-500/20"
                />
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20">
                    <span class="text-xl">✨</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold">Motion with intent</h3>
                    <p class="mt-2 text-sm text-white/70">
                      Consistent easing explains state changes without
                      distraction.
                    </p>
                  </div>
                </div>
              </li>

              {/* Card 6 – accessibility */}
              <li class="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm hover:ring-white/20 transition">
                <div
                  aria-hidden
                  class="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/20 via-lime-400/10 to-amber-300/20"
                />
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20
                  ">
                    <span class="text-xl">♿️</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold">
                      Accessible by default
                    </h3>
                    <p class="mt-2 text-sm text-white/70">
                      Readable type, contrast, large targets, sensible focus
                      order.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {
          /* ----------------------------------------------------------
           4) Tall parallax marquee (premium scroll moment)
        ----------------------------------------------------------- */
        }
        <ParallaxMarquee
          src={asset("/mobile/fastbites/hero.png")} // replace with your large image if needed
          alt="Signature showcase"
          strength={0.35} // 0.2 subtle — 0.5 stronger
          minHeight="260svh" // extra tall
        >
          {/* Minimal headline; one CTA max */}
          <div class="max-w-xl">
            <p class="text-[11px] uppercase tracking-[0.22em] text-white/55">
              FastBites
            </p>
            <h2 class="mt-2 text-5xl md:text-7xl text-white tracking-tight">
              Craft you can taste.
            </h2>
            <a
              href="#screens"
              class="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Browse screens
            </a>
          </div>
        </ParallaxMarquee>

        {
          /* ----------------------------------------------------------
           5) Horizontal screens carousel (full-bleed)
        ----------------------------------------------------------- */
        }
        <section
          id="screens"
          class="relative isolate w-screen -mx-[calc(300vh-100%)] bg-neutral-950 text-dark py-20 md:py-24"
        >
          <div class="mx-auto max-w-7xl px-6 md:px-8">
            <div class="mb-6 md:mb-10">
              <p class="text-[11px] uppercase tracking-[0.22em] text-dark/55">
                Screens
              </p>
              <h2 class="mt-2 text-3xl md:text-5xl font-black tracking-tight">
                See it in motion.
              </h2>
              <p class="mt-3 text-dark/65 max-w-2xl">
                Home, login, browse, detail, checkout, and completion — all
                tuned for speed and clarity.
              </p>
            </div>
            <SnapCarousel items={ROW} />
          </div>
        </section>

        {
          /* ----------------------------------------------------------
           6) Design System (light, structured)
        ----------------------------------------------------------- */
        }
        <section
          id="design-system"
          class="mx-auto max-w-7xl px-6 md:px-8 py-16 text-neutral-900"
        >
          <h2 class="text-4xl md:text-6xl font-black tracking-tight">
            Design system.
          </h2>

          {/* equal-height two-column layout */}
          <div class="mt-8 grid gap-10 md:grid-cols-2 items-stretch">
            {/* LEFT: accordions */}
            <div class="h-full min-h-[640px] md:min-h-[720px]">
              <div class="h-full rounded-[2rem] bg-neutral-100 px-6 py-10 md:px-12 flex flex-col">
                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Foundations
                </p>

                {/* Color */}
                <details
                  open
                  class="[&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 py-6 group"
                >
                  <summary class="flex items-center justify-between cursor-pointer select-none">
                    <div class="flex items-center gap-3">
                      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg">
                        🎨
                      </span>
                      <h3 class="text-xl font-semibold">Color</h3>
                    </div>
                    <svg
                      class="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 15l6-6 6 6"
                      />
                    </svg>
                  </summary>
                  <p class="mt-4 text-neutral-700 leading-relaxed">
                    Coffee warmth, energetic oranges, and calm neutrals.
                  </p>
                </details>

                {/* Type */}
                <details class="[&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 py-6 group">
                  <summary class="flex items-center justify-between cursor-pointer select-none">
                    <div class="flex items-center gap-3">
                      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg">
                        🔤
                      </span>
                      <h3 class="text-xl font-semibold">Type</h3>
                    </div>
                    <svg
                      class="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 15l6-6 6 6"
                      />
                    </svg>
                  </summary>
                  <p class="mt-4 text-neutral-700 leading-relaxed">
                    Bold headings with highly legible UI text (e.g., Manrope +
                    Inter).
                  </p>
                </details>

                {/* Elevation & shape */}
                <details class="[&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 py-6 group">
                  <summary class="flex items-center justify-between cursor-pointer select-none">
                    <div class="flex items-center gap-3">
                      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg">
                        🧊
                      </span>
                      <h3 class="text-xl font-semibold">
                        Elevation &amp; shape
                      </h3>
                    </div>
                    <svg
                      class="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 15l6-6 6 6"
                      />
                    </svg>
                  </summary>
                  <p class="mt-4 text-neutral-700 leading-relaxed">
                    12–16px radii; one ambient shadow; no heavy chrome.
                  </p>
                </details>

                <p class="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Why it wins
                </p>

                {/* It’s a system. */}
                <details
                  open
                  class="[&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 py-6 group"
                >
                  <summary class="flex items-center justify-between cursor-pointer select-none">
                    <div class="flex items-center gap-3">
                      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg">
                        🧩
                      </span>
                      <h3 class="text-xl font-semibold">It’s a system.</h3>
                    </div>
                    <svg
                      class="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 15l6-6 6 6"
                      />
                    </svg>
                  </summary>
                  <p class="mt-4 text-neutral-700 leading-relaxed">
                    Same tokens &amp; components port to web, native, and kiosk.
                  </p>
                </details>

                {/* Respects the thumb. */}
                <details class="[&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 py-6 group">
                  <summary class="flex items-center justify-between cursor-pointer select-none">
                    <div class="flex items-center gap-3">
                      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg">
                        👍
                      </span>
                      <h3 class="text-xl font-semibold">Respects the thumb.</h3>
                    </div>
                    <svg
                      class="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 15l6-6 6 6"
                      />
                    </svg>
                  </summary>
                  <p class="mt-4 text-neutral-700 leading-relaxed">
                    Primary actions sit in the natural reach zone.
                  </p>
                </details>

                {/* Measurable by design. */}
                <details class="[&_summary::-webkit-details-marker]:hidden py-6 group">
                  <summary class="flex items-center justify-between cursor-pointer select-none">
                    <div class="flex items-center gap-3">
                      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg">
                        📈
                      </span>
                      <h3 class="text-xl font-semibold">
                        Measurable by design.
                      </h3>
                    </div>
                    <svg
                      class="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 15l6-6 6 6"
                      />
                    </svg>
                  </summary>
                  <p class="mt-4 text-neutral-700 leading-relaxed">
                    Built for A/B: add-to-cart, completion, time-to-order.
                  </p>
                </details>
              </div>
            </div>

            {/* RIGHT: image fills the same height */}
            <div class="h-full min-h-[640px] md:min-h-[720px]">
              <figure class="h-full overflow-hidden rounded-[2rem] shadow-2xl bg-white flex items-center justify-center">
                <img
                  src={asset("/mobile/fastbites/screen-6-complete.png")}
                  alt="FastBites screen"
                  class="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          id="morden"
          class="relative isolate w-screen -mx-[calc(50vw-50%)] bg-black text-dark py-20 md:py-28"
        >
          <div class="relative mx-auto max-w-7xl px-6 md:px-8">
            <div class="mb-8 text-white">
              <p class="text-[11px] uppercase tracking-[0.22em] text-white/55">
                App Showcase
              </p>
              <h2 class="mt-2 text-3xl md:text-5xl font-black tracking-tight">
                Morden
              </h2>
            
            </div>

            {/* Grid — always visible, no inner scroll */}
            <ul class="grid gap-4 md:gap-6
             grid-cols-2 sm:grid-cols-3 md:grid-cols-5
             place-items-center">
              {MORDEN_ROW.map((item, i) => (
                <li key={i} class="w-full flex justify-center">
                  <figure class="relative overflow-hidden rounded-[1.6rem]
                   bg-white/[0.03] ring-1 ring-white/10
                   shadow-[0_30px_100px_-20px_rgba(0,0,0,0.65)]
                   backdrop-blur-[2px]
                   w-full max-w-[150px] sm:max-w-[170px] md:max-w-[200px]
                   aspect-[9/19] grid place-items-center">
                    {/* subtle glossy strip */}
                    <span class="pointer-events-none absolute inset-x-0 -top-1/3 h-1/2
                         bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                    <img
                      src={item.src}
                      alt={item.alt}
                      class="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STRUCTA — vertical chapter stack */}
        <section
          id="structa-chapters"
          class="relative isolate w-screen -mx-[calc(50vw-50%)] bg-neutral-950 text-dark"
        >
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-10">
            <p class="text-[11px] uppercase tracking-[0.22em] text-dark/55">
              Structa
            </p>
            <h2 class="mt-2 text-3xl md:text-5xl font-black tracking-tight">
              Lorem Epsum
            </h2>
          </div>

          {/* own scroll area = one page per snap; feels like the page */}
          <div class="h-[100svh] overflow-y-auto snap-y snap-mandatory no-scrollbar">
            {[
              {
                src: asset("/mobile/structa/1.png"),
                title: "Home",
                desc:
                  "Welcome.",
              },
              {
                src: asset("/mobile/structa/2.png"),
                title: "New Arrivals",
                desc:
                  "Clean new product focus.",
              },
              {
                src: asset("/mobile/structa/3.png"),
                title: "Explore",
                desc:
                  "Clear filters—content forward, chrome quiet.",
              },
              {
                src: asset("/mobile/structa/4.png"),
                title: "Profile",
                desc:
                  "Calm settings stack with large tap targets and clear hierarchy.",
              },
              {
                src: asset("/mobile/structa/5.png"),
                title: "Order Status",
                desc:
                  "Timeline-style progress for quick scanning and low anxiety.",
              },
            ].map((s, i) => (
              <article
                key={i}
                class="snap-start min-h-[100svh] flex flex-col items-center justify-center px-6 py-16"
              >
                <h3 class="text-2xl md:text-4xl font-semibold tracking-tight mb-3 text-dark/90">
                  {s.title}
                </h3>
                {/* one-line explanation */}
                <p class="mb-8 max-w-xl text-sm md:text-base text-white/70">
                  {s.desc}
                </p>

                <figure class="relative overflow-hidden rounded-[2.4rem] bg-white/[0.04] backdrop-blur-[2px] shadow-[0_80px_240px_-60px_rgba(0,0,0,0.85)]">
                  <div class="w-[92vw] sm:w-[720px] md:w-[960px] lg:w-[1200px] xl:w-[1400px] aspect-[3/4] bg-black">
                    <img
                      src={s.src}
                      alt={s.title}
                      class="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* glossy strip */}
                  <div class="pointer-events-none absolute inset-x-0 -top-1/3 h-1/2 bg-gradient-to-b from-white/25 via-white/10 to-transparent" />
                </figure>
              </article>
            ))}
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

      </main>
    </>
  );
}
