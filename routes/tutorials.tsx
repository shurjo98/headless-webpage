import { GraduationCap } from "https://esm.sh/lucide-preact@0.328.0";

function TutorialCard({ title, level, href }: { title: string; level: string; href: string }) {
  return (
    <a href={href} class="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-md transition block">
      <h3 class="text-lg font-semibold mb-1">{title}</h3>
      <p class="text-sm text-slate-600">Level: {level}</p>
    </a>
  );
}

export default function TutorialsPage() {
  const tutorials = [
    { title: "Deploy your first store in 10 minutes", level: "Beginner" },
    { title: "Adding custom payment gateways", level: "Intermediate" },
    { title: "Building an analytics dashboard", level: "Advanced" },
    { title: "Scaling to a million requests", level: "Advanced" },
  ];

  return (
    <div class="container mx-auto px-4 py-24 flex flex-col gap-16">
      <section class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Tutorials</h1>
        <p class="text-lg text-slate-600">Hands‑on guides to master Fast & Modern.</p>
      </section>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tutorials.map((tut) => (
          <TutorialCard key={tut.title} title={tut.title} level={tut.level} href="#" />
        ))}
      </div>

      <div class="text-center mt-12">
        <a href="#" class="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          <GraduationCap class="h-5 w-5" /> View All Tutorials
        </a>
      </div>
    </div>
  );
}
