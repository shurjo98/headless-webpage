// routes/case-studies/web.tsx
import { asset, Head } from "$fresh/runtime.ts";
import AOSProvider from "../../islands/AOSProvider.tsx";
import ParallaxMarquee from "../../islands/ParallaxMarquee.tsx";
import ParallaxPosterRail from "../../islands/ParallaxPosterRail.tsx"; // <-- comment this + usage if the island was removed
import SnapCarousel from "../../islands/SnapCarousel.tsx";
import Reveal from "../../islands/Reveal.tsx";

/* ---------- page_1 images ---------- */
const PAGE1 = Array.from({ length: 6 }, (_, i) => ({
  src: asset(`/web/page_1/${i + 1}.png`),
  alt: [
    "Hero — fabric smart speaker with large green leaves; retailer logos row",
    "Benefits — four icon blurbs; photo with Polaroid camera, plant, and speaker",
    "Big picture — numbered benefits list next to product photo",
    "Why Choose Sonic — three comparison cards: Sonic, Sonic Light, Sonic Pro",
    "Testimonial — dark moody photo of black speaker and quote",
    "Connect With Us — product and microphone on desk; single CTA",
  ][i],
}));

/* ---------- HERO (uses PAGE1[0]) ---------- */
const HERO = {
  id: "hero",
  title: "Designed for trust.",
  deck:
    "A calm, product-first hero pairs natural texture with a familiar device — and immediate retailer proof below. Clean type, no noise.",
  img: PAGE1[0].src,
};

/* ---------- Narrative sections ---------- */
const SECTIONS = [
  {
    id: "trust-on-arrival",
    title: "Trust on arrival.",
    deck:
      "Nature-lit product photography + generous whitespace reduce banner fatigue and feel honest. The availability bar anchors credibility in seconds.",
    img: PAGE1[0].src,
    bullets: [
      "Familiar device, no gimmicks — signals quality and ease.",
      "Soft shadows + real texture → tactile, premium feel.",
      "Retailer row (Target, Amazon, Walmart) = instant social proof.",
    ],
    caption: "Available at Target, Amazon, and Walmart.",
  },
  {
    id: "benefits",
    title: "Benefits at a glance.",
    deck:
      "Four compact blurbs make the promise scannable. The lifestyle image keeps it human — not technical — which increases comprehension and trust.",
    img: PAGE1[1].src,
    bullets: [
      "Icon + short label → zero learning curve.",
      "Consistent spacing rhythm → easier reading flow.",
      "Lifestyle photo grounds the tech in real life.",
    ],
  },
  {
    id: "big-picture",
    title: "The big picture, simply.",
    deck:
      "Three bold statements tell the whole story without jargon. A left-aligned list with numeric rhythm reduces cognitive load.",
    img: PAGE1[2].src,
    bullets: [
      "01 Clear, high-contrast type — confidence by design.",
      "02 Asymmetric layout guides the eye, not the cursor.",
      "03 Soft container radius adds calm without stealing focus.",
    ],
  },
  {
    id: "lineup",
    title: "Transparent lineup.",
    deck:
      "Sonic, Sonic Light, Sonic Pro — a clean compare grid shows value without pressure. Honest choice architecture builds loyalty long-term.",
    img: PAGE1[3].src,
    bullets: [
      "Three cards, same skeleton → quick mental mapping.",
      "Large titles and short rows — no spec overload.",
      "Neutral palette keeps attention on the differences.",
    ],
  },
  {
    id: "proof",
    title: "Real voices. Real results.",
    deck:
      "A single, substantive quote beats walls of reviews. The moody photo adds gravity; the airy layout keeps it readable.",
    img: PAGE1[4].src,
    bullets: [
      "One strong testimonial > twenty tiny stars.",
      "Type scale and leading tuned for skimming.",
      "Human name + title close the trust gap.",
    ],
    caption: "Testimonial layout designed for clarity and credibility.",
  },
  {
    id: "contact",
    title: "Connect with us.",
    deck:
      "A quiet closer: one image, one line, one action. This restraint feels premium — and trustworthy.",
    img: PAGE1[5].src,
    bullets: [
      "Single primary CTA avoids decision friction.",
      "Comfortable margins = ‘we’re not shouting.’",
      "Footer nav repeats the essentials for assurance.",
    ],
  },
];

/* ---------- page_2 (PulseRun / product detail) ---------- */
const PAGE2 = Array.from({ length: 4 }, (_, i) => ({
  src: asset(`/web/page_2/${i + 1}.png`),
  alt: [
    "PulseRun hero — blue neon scene with featured shoe and Shop CTA",
    "Get to Know — lifestyle tiles, people wearing shoes in real settings",
    "Editorial product mosaic — multiple footwear tiles with overlaid CTAs",
    "Best of the Class — hero shoe on wood with mountain backdrop; feature columns",
  ][i],
}));

/* ---------- page_3 (Pricing) ---------- */
const PAGE3 = Array.from({ length: 3 }, (_, i) => ({
  src: asset(`/web/page_3/${i + 1}.png`),
  alt: [
    "Pricing — headline, brand row, plan toggle, plan cards",
    "Plans & Features — comparison table",
    "Security + FAQ — trust content and footer",
  ][i],
}));

/* ---------- Optional carousels/posters ---------- */
const CAROUSEL: { src: string; alt: string }[] = []; // fill later
const POSTERS: { src: string; alt: string }[] = []; // fill later

export default function WebCaseStudies() {
  return (
    <>
      <Head>
        <title>Web Case Studies — Your Studio</title>
        <meta
          name="description"
          content="Selected web projects: premium visuals, fast UX, measurable outcomes."
        />
      </Head>

      <AOSProvider
        autoTargets={[
          "#intro-web h1",
          "#intro-web p",
          "#pricing h2",
          "#pricing p",
        ]}
        distancePx={28}
        durationMs={900}
        delayStepMs={90}
        rootMargin="0px 0px -12% 0px"
        threshold={0.15}
      />

      <main id="aos-scope" class="bg-white text-neutral-900 overflow-x-clip">
        {/* PAGE INTRO — goes before HERO */}
        <section id="intro-web" class="relative w-full bg-neutral-50">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20 text-center">
            <p class="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Case Studies
            </p>
            <h1 class="mt-2 text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
              Web Design UI Case Studies
            </h1>
            <p class="mt-4 text-neutral-600 max-w-3xl mx-auto">
              Three concepts presented with a trust-first, product-forward
              style. Big, calm layouts and elegant.
            </p>

            {/* quick in-page nav (optional) */}
            <nav class="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#sonic"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition"
              >
                HomePage
              </a>
              <a
                href="#pulse-grid"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 text-neutral-800 hover:border-neutral-400 transition"
              >
                Product Page
              </a>
              <a
                href="#pricing"
                class="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 text-neutral-800 hover:border-neutral-400 transition"
              >
                Pricing
              </a>
            </nav>
          </div>
        </section>

        <section
          id="sonic"
          class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24"
        >
          <header class="text-center">
            <h2 class="text-3xl md:text-5xl font-black tracking-tight">
              Sonic
            </h2>
            <p class="mt-3 text-neutral-600 max-w-3xl mx-auto">
              A calm, product-first showcase. Tight copy, clear images, no
              distractions.
            </p>
          </header>

          {/* simple vertical gallery (no snap, no fancy shadows) */}
          <div class="mt-10 grid gap-16">
            {[
              {
                src: PAGE1[0].src,
                title: "Hero",
                blurb:
                  "Nature-lit hero with retailer proof (Target/Amazon/Walmart) builds credibility in seconds.",
              },
              {
                src: PAGE1[1].src,
                title: "Benefits",
                blurb:
                  "Four compact icon blurbs — fast scan; a human photo keeps it relatable.",
              },
              {
                src: PAGE1[2].src,
                title: "Big Picture",
                blurb:
                  "Three bold statements; left-aligned rhythm reduces cognitive load.",
              },
              {
                src: PAGE1[3].src,
                title: "Lineup",
                blurb:
                  "Sonic / Light / Pro — transparent compare grid without pressure.",
              },
              {
                src: PAGE1[4].src,
                title: "Testimonial",
                blurb:
                  "One strong quote with name/title beats a wall of stars — real voice, real results.",
              },
              {
                src: PAGE1[5].src,
                title: "Connect",
                blurb:
                  "Quiet closer: one image, one line, one action. Restraint feels premium.",
              },
            ].map((s, i) => (
              <article
                key={i}
                class="flex flex-col items-center text-center"
              >
                <h3 class="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p class="mt-2 mb-6 text-neutral-600 max-w-2xl">
                  {s.blurb}
                </p>

                {/* clean frame */}
                <figure class="mx-auto w-full max-w-full sm:max-w-[640px] md:max-w-[960px] lg:max-w-[1200px]">
                  <div class="aspect-[16/10] rounded-2xl ring-1 ring-black/5 shadow-lg bg-white">
                    <img
                      src={s.src}
                      alt={s.title}
                      class="h-full w-full object-contain rounded-2xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption class="sr-only">{s.title}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        {/* PulseRun — static hero (no parallax) */}
        <section id="pulserun-hero" class="bg-neutral-950 text-white">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
            <header class="max-w-2xl">
              <h2 class="text-4xl md:text-6xl font-black tracking-tight">
                PulseRun
              </h2>
              <p class="mt-4 text-white/80 text-lg md:text-xl">
                Built for energy and pace. A calm, high-contrast hero that lets
                the shoe do the talking.
              </p>
            </header>

            {/* centered, crisp image frame */}
            <figure class="mx-auto w-full max-w-full sm:max-w-[640px] md:max-w-[960px] lg:max-w-[1200px]">
              <div class="aspect-[16/9] rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden grid place-items-center">
                <img
                  src={PAGE2[0].src}
                  alt="PulseRun hero"
                  class="h-full w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <figcaption class="sr-only">PulseRun hero</figcaption>
            </figure>
          </div>
        </section>

        {/* Highlights — simple centered grid (replaces glossy posters) */}
        {POSTERS.length > 0 && (
          <section
            class="bg-neutral-950 text-white"
            aria-labelledby="pulserun-highlights"
          >
            <div class="mx-auto max-w-7xl px-6 md:px-8 pb-16 md:pb-24">
              <header class="max-w-2xl">
                <h3
                  id="pulserun-highlights"
                  class="text-2xl md:text-4xl font-bold tracking-tight"
                >
                  Highlights
                </h3>
                <p class="mt-3 text-white/70">
                  Large, quiet panels that keep attention on the product.
                </p>
              </header>

              <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {POSTERS.map((p) => (
                  <figure
                    key={p.src}
                    class="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden"
                  >
                    <div class="aspect-[16/10] grid place-items-center">
                      <img
                        src={p.src}
                        alt={p.alt}
                        class="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption class="sr-only">{p.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lifestyle — calm gallery (no carousel) */}
        <section class="bg-white" aria-labelledby="pulse-lifestyle">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
            <h2
              id="pulse-lifestyle"
              class="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 text-center md:text-left"
            >
              In the wild.
            </h2>
            <p class="mt-3 text-neutral-700 max-w-2xl md:mx-0 mx-auto text-center md:text-left">
              See PulseRun off the studio table — worn and moving. Real scenes
              build real trust.
            </p>

            {/* Simple responsive gallery */}
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: PAGE2[1].src, alt: "Lifestyle collage" },
                { src: PAGE2[2].src, alt: "Editorial product mosaic" },
                {
                  src: PAGE2[3].src,
                  alt: "Best of the Class hero and features",
                },
              ].map((item) => (
                <figure key={item.src} class="group">
                  <div class="aspect-[4/3] rounded-2xl ring-1 ring-black/5 shadow-md bg-white overflow-hidden grid place-items-center">
                    <img
                      src={item.src}
                      alt={item.alt}
                      class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption class="mt-3 text-sm text-neutral-600">
                    {item.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* In motion — static grid (no carousel) */}
        {(CAROUSEL?.length ?? 0) > 0 && (
          <section
            class="bg-neutral-950 text-white"
            aria-labelledby="in-motion"
          >
            <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
              <header class="max-w-2xl">
                <h2
                  id="in-motion"
                  class="text-3xl md:text-5xl font-black tracking-tight"
                >
                  In motion
                </h2>
                <p class="mt-3 text-white/70">
                  Key flows shown side by side — fast, legible, consistent.
                </p>
              </header>

              {/* Simple responsive grid */}
              <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {CAROUSEL.map((p) => (
                  <figure
                    key={p.src}
                    class="rounded-2xl ring-1 ring-white/10 bg-white/5 overflow-hidden"
                  >
                    <div class="aspect-[16/9] grid place-items-center">
                      <img
                        src={p.src}
                        alt={p.alt}
                        class="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption class="px-4 py-3 text-sm text-white/70 border-t border-white/10">
                      {p.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Poster duo — replaces ParallaxPosterRail with a centered grid */}
        <section class="bg-white" aria-labelledby="poster-highlights">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
            <h2 id="poster-highlights" class="sr-only">Highlights</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { src: PAGE2[2].src, alt: "Editorial mosaic" },
                { src: PAGE2[3].src, alt: "Best of the Class" },
              ].map((p) => (
                <figure
                  key={p.src}
                  class="rounded-2xl ring-1 ring-black/5 shadow-md bg-white overflow-hidden"
                >
                  <div class="aspect-[16/10]">
                    <img
                      src={p.src}
                      alt={p.alt}
                      class="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption class="sr-only">{p.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING — simple static grid */}
        <section id="pricing" class="bg-neutral-950 text-white">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
            <p class="text-[11px] uppercase tracking-[0.22em] text-white/55">
              Pricing
            </p>
            <h2
              id="pricing-heading"
              class="mt-2 text-4xl md:text-6xl tracking-tight"
            >
              Pricing that scales with you.
            </h2>
            <p class="mt-4 text-white/70 max-w-2xl">
              Simple tiers. Clear value. No surprises.
            </p>

        

            {/* optional: static screenshots instead of any carousel */}
            <div class="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[PAGE3[0], PAGE3[1], PAGE3[2]].map((p) => (
                <figure
                  key={p.src}
                  class="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden"
                >
                  <div class="aspect-[16/10] grid place-items-center">
                    <img
                      src={p.src}
                      alt={p.alt}
                      class="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption class="sr-only">{p.alt}</figcaption>
                </figure>
              ))}
            </div>

            {/* trust bullets (kept simple) */}
            <ul class="mt-10 grid gap-5 sm:grid-cols-3 text-white/75 text-sm">
              <li class="flex items-start gap-3">
                <span class="mt-0.5">✅</span>{" "}
                Transparent monthly/annual pricing.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5">✅</span>{" "}
                Clear comparison—no spec overload.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5">✅</span> Security & FAQ before checkout.
              </li>
            </ul>
          </div>
        </section>

        {/* ========= END / LUXURY CALL-TO-ACTION ========= */}
        <section
          id="endcap"
          class="relative overflow-hidden bg-neutral-950 text-dark"
        >
          {/* soft radial glows */}
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-40 left-1/2 h-[680px] w-[880px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
            <div class="absolute -bottom-48 right-10 h-[520px] w-[520px] rounded-full bg-gradient-to-t from-fuchsia-400/15 via-purple-400/10 to-transparent blur-3xl" />
            <div class="absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-gradient-to-t from-emerald-400/15 via-teal-400/10 to-transparent blur-3xl" />
          </div>

          <div class="relative mx-auto max-w-7xl px-6 md:px-8 py-24 md:py-40 text-center">
            <h2 class="mt-3 mb-3 text-4xl md:text-6xl font-black tracking-tight">
              Let’s make it feel inevitable.
            </h2>
            <p class="mt-5 mx-auto max-w-2xl text-white/70">
              Premium interfaces that get out of the way—calm visuals, fast
              flows, and a system you can scale.
            </p>

            <div class="mt-12 flex items-center justify-center gap-6">
              {/* Primary – calm white pill */}
              <a
                href="mailto:lucy@fastandmodern.com"
                class="group inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black
           transition hover:bg-white/90 focus:outline-none"
              >
                Start a project
                <svg
                  class="ml-2 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Secondary – quiet text link */}
              <a
                href="#design-system"
                class="group inline-flex items-center text-sm font-medium text-white/70 hover:text-white
           focus:outline-none rounded-full px-2 py-1"
              >
                See our approach
                <svg
                  class="ml-1 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* subtle divider */}
            <div class="mx-auto mt-16 h-px max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* tiny meta / footer */}
          </div>

          {/* optional scroll-to-top button */}
          <div class="pointer-events-none absolute bottom-6 right-6">
            <a
              href="#aos-scope"
              class="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/10  backdrop-blur-sm transition hover:bg-white/15"
              aria-label="Back to top"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}


