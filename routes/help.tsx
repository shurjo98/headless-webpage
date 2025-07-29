export default function HelpCenterPage() {
  const categories = [
    { title: "Getting Started", articles: 12 },
    { title: "Account & Billing", articles: 8 },
    { title: "Integrations", articles: 15 },
    { title: "Troubleshooting", articles: 20 },
  ];

  return (
    <div class="container mx-auto px-4 py-24 flex flex-col gap-16">
      <section class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Help Center</h1>
        <p class="text-lg text-slate-600">Search our knowledge base or browse by category.</p>
        <input
          type="search"
          placeholder="Search articles…"
          class="mt-8 w-full max-w-xl border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </section>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <a href={`#${cat.title.replaceAll(' ', '-')}`} class="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-md transition block">
            <h3 class="text-lg font-semibold mb-2">{cat.title}</h3>
            <p class="text-slate-600">{cat.articles} articles</p>
          </a>
        ))}
      </div>
    </div>
  );
}
