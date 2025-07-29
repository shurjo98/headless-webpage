/** islands/Header.tsx – Professional responsive header with client-side interactivity */
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";

export default function Header() {
  const open = useSignal(false);
  const linkBase = "block px-4 py-2 text-neutral-900 hover:text-primary-600 transition-colors duration-200 font-medium";

  const toggleMenu = () => {
    if (IS_BROWSER) {
      open.value = !open.value;
    }
  };

  const closeMenu = () => {
    if (IS_BROWSER) {
      open.value = false;
    }
  };

  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    if (!IS_BROWSER) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        open.value = false;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!IS_BROWSER || !open.value) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('header')) {
        open.value = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open.value]);

  return (
    <header class="bg-white/95 backdrop-blur-sm border-b border-surface-100 sticky top-0 z-50">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center">
          <img
            src="/images/logo.png"
            alt="HeadlessPro Logo"
            className="h-8 lg:h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul class="hidden lg:flex items-center space-x-1">
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
          <li class="ml-4">
            <a
              href="/contact"
              class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
            >
              Discovery Call
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          class="lg:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={open.value}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open.value ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open.value && (
        <div class="lg:hidden bg-white border-t border-surface-100 shadow-lg animate-slideIn">
          <div class="px-4 py-2 space-y-1">
            {[
              ["Why Headless", "/why-headless"],
              ["Platform", "/platform"],
              ["Solutions", "/solutions"],
              ["Pricing", "/pricing"],
              ["Docs", "/docs"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                class="block px-4 py-3 text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <div class="pt-4 pb-2">
              <a
                href="/contact"
                class="block text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-200"
                onClick={closeMenu}
              >
                Discovery Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 