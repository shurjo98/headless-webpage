// components/EndcapCTA.tsx
import { h } from "preact";

type Props = {
  id?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** show the thin divider under the CTAs */
  showDivider?: boolean;
  /** show the floating scroll-to-top pill */
  showScrollTop?: boolean;
  /** anchor for the scroll-to-top link */
  scrollTopHref?: string;
  /** extra classes on the <section> */
  class?: string;
  className?: string;
  /** toggle the colored corner glows */
  accentGlows?: boolean;
};

export default function EndcapCTA({
  id = "endcap",
  title = "Let’s make it feel inevitable.",
  description = "Premium interfaces that get out of the way—calm visuals, fast flows, and a system you can scale.",
  primaryLabel = "Start a project",
  primaryHref = "mailto:lucy@fastandmodern.com",
  secondaryLabel = "See our approach",
  secondaryHref = "#design-system",
  showDivider = true,
  showScrollTop = true,
  scrollTopHref = "#aos-scope",
  class: klass,
  className,
  accentGlows = true,
}: Props) {
  const sectionClasses =
    `relative isolate w-screen -mx-[calc(50vw-50%)] overflow-hidden bg-neutral-950 text-dark ${klass ?? ""} ${className ?? ""}`;

  return (
    <section id={id} class={sectionClasses}>
      {/* soft radial glows */}
      {accentGlows && (
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -top-40 left-1/2 h-[680px] w-[880px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
          <div class="absolute -bottom-48 right-10 h-[520px] w-[520px] rounded-full bg-gradient-to-t from-fuchsia-400/15 via-purple-400/10 to-transparent blur-3xl" />
          <div class="absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-gradient-to-t from-emerald-400/15 via-teal-400/10 to-transparent blur-3xl" />
        </div>
      )}

      <div class="relative mx-auto max-w-7xl px-6 md:px-8 py-24 md:py-40 text-center">
        <h2 class="mt-3 mb-3 text-4xl md:text-6xl text-white tracking-tight">
          {title}
        </h2>
        <p class="mt-5 mx-auto max-w-2xl text-white/70">
          {description}
        </p>

        <div class="mt-12 flex items-center justify-center gap-6">
          {/* Primary – calm white pill */}
          <a
            href={primaryHref}
            class="group inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black
                   transition hover:bg-white/90 focus:outline-none"
          >
            {primaryLabel}
            <svg
              class="ml-2 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Secondary – quiet text link */}
          <a
            href={secondaryHref}
            class="group inline-flex items-center text-sm font-medium text-white/70 hover:text-white
                   focus:outline-none rounded-full px-2 py-1"
          >
            {secondaryLabel}
            <svg
              class="ml-1 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {showDivider && (
          <div class="mx-auto mt-16 h-px max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
      </div>

      {showScrollTop && (
        <div class="pointer-events-none absolute bottom-6 right-6">
          <a
            href={scrollTopHref}
            class="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-sm transition hover:bg-white/15"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
}
