// routes/case-studies/web.tsx
import { asset, Head } from "$fresh/runtime.ts";
import AOSProvider from "../../islands/AOSProvider.tsx";
import ParallaxMarquee from "../../islands/ParallaxMarquee.tsx";
import ParallaxPosterRail from "../../islands/ParallaxPosterRail.tsx"; // <-- comment this + usage if the island was removed
import SnapCarousel from "../../islands/SnapCarousel.tsx";
import Reveal from "../../islands/Reveal.tsx";
import EndcapCTA from "../../components/EndcapCTA.tsx";

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
          "#aos-scope h1",
          "#aos-scope h2",
          "#aos-scope p",
          "#aos-scope li",
          "#aos-scope figure",
        ]}
        distancePx={28}
        durationMs={900}
        delayStepMs={90}
        rootMargin="0px 0px -12% 0px"
        threshold={0.15}
      />

      <main id="aos-scope" class="bg-white text-neutral-900">
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

        {/* SONIC — one page per snap (Structa style) */}
        <section
          id="sonic"
          class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24"
        >
          <h2 class="text-3xl md:text-5xl font-black tracking-tight">Sonic</h2>
          <p class="mt-3 text-neutral-600 max-w-2xl">
            Oversized, glossy web screens on a calm backdrop — a trust-first
            layout that lets the craft breathe.
          </p>

          {/* own scroll area = one page per snap; feels like the page */}
          <div class="mt-8 h-[100svh] overflow-y-auto snap-y snap-mandatory no-scrollbar">
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
                  "Four compact icon blurbs — fast scan, human photo keeps it relatable.",
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
                class="snap-start min-h-[100svh] flex flex-col items-center justify-center px-6 py-16"
              >
                <h3 class="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p class="mt-2 mb-8 text-neutral-600 text-center max-w-2xl">
                  {s.blurb}
                </p>

                {/* big glossy frame */}
                <figure class="relative overflow-hidden rounded-[2.4rem] bg-white/[0.04] backdrop-blur-[2px] shadow-[0_80px_240px_-60px_rgba(0,0,0,0.85)]">
                  {/* Wide pages look best with a landscape frame; object-contain keeps them crisp */}
                  <div class="w-[92vw] sm:w-[960px] lg:w-[1200px] xl:w-[1400px] aspect-[16/10] bg-white">
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

        {/* PulseRun intro */}
        {/* Drop this where you want PulseRun to start */}
        <ParallaxMarquee
          src={PAGE2[0].src}
          alt="PulseRun hero"
          strength={0.28}
          minHeight="120svh"
        >
          <div class="max-w-2xl">
            <h2 class="mt-4 text-5xl md:text-7xl font-black tracking-tight text-white">
              PulseRun
            </h2>
            <p class="mt-5 text-neutral-300/95 text-lg md:text-xl text-white/90">
              Built for energy and pace. A calm, high-contrast hero that lets
              the shoe do the talking.
            </p>
          </div>
        </ParallaxMarquee>

        {/* Optional glossy panels (only if POSTERS filled) */}
        {POSTERS.length > 0 && (
          <section class="relative isolate w-screen -mx-[calc(50vw-50%)] bg-neutral-950 text-white py-16 md:py-24">
            <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,.18),transparent_60%)]" />
            <div class="relative mx-auto max-w-7xl px-6 md:px-8">
              <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
                Highlights
              </h2>
              <p class="mt-3 text-white/70 max-w-2xl">
                Large, glossy panels that let the craft breathe.
              </p>
              <div class="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
                {POSTERS.map((p) => (
                  <figure
                    key={p.src}
                    class="snap-start shrink-0 w-[84vw] sm:w-[720px] md:w-[960px] lg:w-[1120px] rounded-[2rem] overflow-hidden bg-white ring-1 ring-white/10 shadow-[0_80px_200px_-60px_rgba(0,0,0,0.75)] relative"
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      class="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption class="sr-only">{p.alt}</figcaption>
                    <div class="pointer-events-none absolute inset-x-0 -top-1/3 h-1/2 bg-gradient-to-b from-white/25 via-white/10 to-transparent" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lifestyle / carousel */}
        <section class="bg-white" aria-labelledby="pulse-lifestyle">
          <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
            <h2
              id="pulse-lifestyle"
              class="text-3xl md:text-5xl font-black tracking-tight"
            >
              In the wild.
            </h2>
            <p class="mt-3 text-neutral-700 max-w-2xl">
              See PulseRun off the studio table — worn and moving. Real scenes
              build real trust.
            </p>
            <div class="mt-8">
              <SnapCarousel
                items={[
                  { src: PAGE2[1].src, alt: "Lifestyle collage" },
                  { src: PAGE2[2].src, alt: "Editorial product mosaic" },
                  {
                    src: PAGE2[3].src,
                    alt: "Best of the Class hero and features",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Optional screen carousel */}
        {CAROUSEL.length > 0 && (
          <section class="bg-neutral-950 text-white">
            <div class="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
              <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
                In motion
              </h2>
              <p class="mt-3 text-white/65 max-w-2xl">
                Key flows shown side by side — fast, legible, consistent.
              </p>
              <div class="mt-10">
                <SnapCarousel items={CAROUSEL} />
              </div>
            </div>
          </section>
        )}

        <ParallaxPosterRail
          items={[
            { src: PAGE2[2].src, alt: "Editorial mosaic" },
            { src: PAGE2[3].src, alt: "Best of the Class" },
          ]}
        />

        {/* PRICING SHOWCASE */}
        <section
          id="pricing"
          class="relative isolate w-screen -mx-[calc(50vw-50%)] bg-neutral-950 text-dark"
          aria-labelledby="pricing-heading"
        >
          {/* soft radial glow for premium feel */}
          <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,.14),transparent_60%)]" />
          <div class="relative mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
            <p class="text-[11px] uppercase tracking-[0.22em] text-white/55">
              Pricing
            </p>
            <h2
              id="pricing-heading"
              class="mt-2 text-4xl md:text-6xl text-white tracking-tight"
            >
              Pricing that scales with you.
            </h2>
            <p class="mt-4 text-white/70 max-w-2xl">
              Simple tiers. Clear value. No surprises. Designed for a one-glance
              decision.
            </p>

            {/* quick plan cues (trust-first copy; keeps it human) */}
            <ul class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/85">
              <li class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <span class="font-semibold">Free</span>{" "}
                — for individuals shipping ideas.
              </li>
              <li class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <span class="font-semibold">Plus</span>{" "}
                — most popular for weekly releases.
              </li>
              <li class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <span class="font-semibold">Business</span>{" "}
                — control & compliance for teams.
              </li>
            </ul>

            {/* big glossy screens */}
            <div class="mt-10">
              <SnapCarousel
                items={[
                  { src: PAGE3[0].src, alt: PAGE3[0].alt },
                  { src: PAGE3[1].src, alt: PAGE3[1].alt },
                  { src: PAGE3[2].src, alt: PAGE3[2].alt },
                ]}
              />
            </div>

            {/* trust bullets under the screens */}
            <div class="mt-12 grid gap-5 sm:grid-cols-3 text-white/75 text-sm">
              <div class="flex items-start gap-3">
                <span class="mt-0.5">✅</span>
                <p>Transparent monthly/annual toggle with honest plan cards.</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-0.5">✅</span>
                <p>Readable comparison table — fast scan, no spec overload.</p>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-0.5">✅</span>
                <p>
                  Security & FAQ appear before the paywall — trust before ask.
                </p>
              </div>
            </div>
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
