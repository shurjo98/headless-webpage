/** components/Header.tsx – Bigger header + bigger buttons */
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Header() {
  const open = useSignal(false);
  const linkBase =
    "block px-6 py-3 lg:py-0 text-neutral-900 hover:text-primary-600";

  return (
    <header class="bg-white border-b border-surface-100">
      <nav class="container mx-auto px-4 flex items-center justify-between h-24">
        <a href="/" className="flex-shrink-0">
          <img
            src="/images/logo.png" // point to your actual logo file
            alt="FM Logo"
            className="h-12 w-auto" // adjust height to fit your 24‑unit nav
          />
        </a>

        {/* Mobile toggle – larger touch target */}
        <button
          type="button"
          class="lg:hidden text-4xl p-3"
          onClick={() => IS_BROWSER && (open.value = !open.value)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul class="hidden lg:flex items-center gap-8 text-lg">
          <li>
            <a href="/why-headless" class={linkBase}>Why Headless</a>
          </li>
          <li>
            <a href="/platform" class={linkBase}>Platform</a>
          </li>
          <li>
            <a href="/solutions" class={linkBase}>Solutions</a>
          </li>
          <li>
            <a href="/pricing" class={linkBase}>Pricing</a>
          </li>
          <li>
            <a href="/docs" class={linkBase}>Docs</a>
          </li>
          <li>
            <a href="/blog" class={linkBase}>Blog</a>
          </li>
          <li>
            <a
              href="/contact"
              class="ml-4 inline-block bg-primary-500 hover:bg-primary-600  
                     text-white text-lg font-semibold px-8 py-4 rounded-lg  
                     shadow-md transition ease-in-out duration-150"
            >
             Discovery Call
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile drawer */}
      {open.value && (
        <ul class="lg:hidden bg-white border-t border-surface-100">
          {[
            ["Why HeadlessPro", "/why"],
            ["Platform", "/platform"],
            ["Solutions", "/solutions"],
            ["Pricing", "/pricing"],
            ["Docs", "/docs"],
            ["Blog", "/blog"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                class="block px-6 py-4 border-b border-surface-100  
                       text-neutral-900 hover:bg-surface-100 text-lg"
                onClick={() => (open.value = false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li class="p-4">
            <a
              href="/signup"
              class="block text-center bg-primary-500 hover:bg-primary-600  
                     text-white text-lg font-semibold px-8 py-4 rounded-lg  
                     shadow-md transition ease-in-out duration-150"
            >
              Start Free Trial
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
