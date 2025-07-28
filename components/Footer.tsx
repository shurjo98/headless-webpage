/** components/Footer.tsx */
export default function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing",  href: "/pricing" },
        { label: "Docs",     href: "/docs" },
        { label: "API Status", href: "https://status.yourcompany.com" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About",   href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog",    href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Community",   href: "/community" },
        { label: "Tutorials",   href: "/tutorials" },
        { label: "Partners",    href: "/partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Privacy Policy",   href: "/legal/privacy" },
        { label: "Service Level Agreement", href: "/legal/sla" },
      ],
    },
  ] as const;

  return (
    <footer className="bg-surface-100 text-neutral-900 pt-16 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + tagline */}
        <div className="flex flex-col">
          <a href="/" className="inline-block mb-4">
            <img
              src="/images/logo.png"   /* ← your FM logo */
              alt="FM Logo"
              className="h-10 w-auto ml-4"
            />
          </a>
          <p className="text-neutral-600 text-sm max-w-xs">
            Fast &amp; Modern
          </p>
        </div>

        {/* Link sections */}
        {sections.map(({ title, links }) => (
          <div key={title} className="space-y-3 text-sm">
            <h4 className="font-semibold">{title}</h4>
            <ul className="space-y-2">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block hover:text-primary-600 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-surface-100 mt-12 pt-6 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} FM. All rights reserved.
      </div>
    </footer>
  );
}
