import { ShieldCheck, Layers, Rocket } from "https://esm.sh/lucide-preact@0.328.0";

function TierCard({ title, benefits, Icon }: { title: string; benefits: string[]; Icon: any }) {
  return (
    <div class="p-8 border border-slate-200 rounded-2xl shadow flex flex-col gap-4">
      <Icon class="h-10 w-10 text-indigo-600" />
      <h3 class="text-xl font-semibold">{title}</h3>
      <ul class="list-disc list-inside text-slate-600 flex-1">
        {benefits.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <a
        href={`/partners/apply/${title.toLowerCase().replace(/\s+/g, "-")}`}
        class="mt-auto inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Become a Partner
      </a>
    </div>
  );
}

export default function PartnersPage() {
  const tiers = [
    {
      title: "Solution Partner",
      Icon: ShieldCheck,
      benefits: ["Priority support", "Lead sharing", "Joint case studies"],
    },
    {
      title: "Technology Partner",
      Icon: Layers,
      benefits: ["API access", "Co‑marketing", "Beta features"],
    },
    {
      title: "Reseller",
      Icon: Rocket,
      benefits: ["Volume discounts", "Training", "Dedicated manager"],
    },
  ];

  return (
    <div class="container mx-auto px-4 py-24 flex flex-col gap-16">
      <section class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Partners</h1>
        <p class="text-lg text-slate-600">Expand your offering and grow faster with Fast & Modern’s partner ecosystem.</p>
      </section>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <TierCard key={tier.title} {...tier} />
        ))}
      </div>
    </div>
  );
}
