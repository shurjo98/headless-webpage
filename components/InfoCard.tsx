import { JSX } from "preact/jsx-runtime";

type InfoCardProps = {
  title: string;
  desc: string;
  icon?: JSX.Element | string;      // emoji or SVG
  cta?: { label: string; href: string };
  class?: string;
};

export default function InfoCard({ title, desc, icon, cta, class: extra = "" }: InfoCardProps) {
  return (
    <div
      class={`w-full max-w-md rounded-2xl border border-white/10 bg-slate-800/80
              p-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm
              text-slate-100 ${extra}`}
    >
      {/* icon */}
      {icon && (
        <div class="mb-4 text-slate-400">
          {typeof icon === "string" ? <span class="text-3xl">{icon}</span> : icon}
        </div>
      )}

      {/* title */}
      <h3 class="text-[28px] md:text-[32px] font-semibold leading-tight tracking-tight">
        {title}
      </h3>

      {/* body */}
      <p class="mt-4 text-lg text-slate-400">
        {desc}
      </p>

      {/* CTA */}
      {cta && (
        <a
          href={cta.href}
          class="mt-6 inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
          {cta.label}
          <svg class="h-4 w-4" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
          </svg>
        </a>
      )}
    </div>
  );
}
