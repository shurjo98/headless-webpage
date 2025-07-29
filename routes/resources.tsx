import { BookOpen, Users, GraduationCap, Handshake } from "https://esm.sh/lucide-preact@0.328.0";

function ResourceCard({ href, title, desc, Icon }: { href: string; title: string; desc: string; Icon: any }) {
  return (
    <a href={href} class="flex items-start gap-4 p-6 border border-slate-200 rounded-2xl shadow hover:shadow-md transition">
      <Icon class="h-8 w-8 text-indigo-600" />
      <div>
        <h3 class="text-lg font-semibold">{title}</h3>
        <p class="text-slate-600">{desc}</p>
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <div class="container mx-auto px-4 py-24 flex flex-col gap-16">
      <section class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Resources</h1>
        <p class="text-lg text-slate-600">Everything you need to succeed with Fast & Modern.</p>
      </section>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ResourceCard href="/help-center" title="Help Center" desc="Quick answers, how‑tos, and troubleshooting guides." Icon={BookOpen} />
        <ResourceCard href="/community" title="Community" desc="Ask questions, share tips, and connect with other builders." Icon={Users} />
        <ResourceCard href="/tutorials" title="Tutorials" desc="Step‑by‑step lessons to master our platform." Icon={GraduationCap} />
        <ResourceCard href="/partners" title="Partners" desc="Find certified partners or join our ecosystem." Icon={Handshake} />
      </div>
    </div>
  );
}
