/** components/Footer.tsx */
export default function Footer() {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Docs", "API Status"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Contact"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Tutorials", "Partners"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-surface-100 text-neutral-900 pt-16 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + tagline */}
        <div className="flex flex-col">
          <a href="/" className="inline-block mb-4">
            <img
              src="/images/logo.png"   // ← your FM logo here
              alt="FM Logo"
              className="h-10 w-auto ml-4"
            />
          </a>
          <p className="text-neutral-600 text-sm max-w-xs">
            Fast & Modern
          </p>
        </div>

        {/* Link sections */}
        {sections.map(({ title, links }) => (
          <div key={title} className="space-y-3 text-sm">
            <h4 className="font-semibold">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link
                      .toLowerCase()
                      .replace(/\s+/g, "")}`}
                    className="block hover:text-primary-600 transition-colors"
                  >
                    {link}
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
