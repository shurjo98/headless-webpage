import { Head } from "$fresh/runtime.ts";
// routes/careers.tsx (same for about.tsx, etc.)
import { Button } from "../components/ui/button.tsx";
import { Card, CardContent } from "../components/ui/card.tsx";

// ✅ works out‑of‑the‑box with Deno 2
import {
  Award,
  Globe,
  HeartHandshake,
  Laptop2,
  LineChart,
  PlayCircle,
  Rocket,
  Sun,
  TrendingUp,
  Users,
  Wallet,
} from "npm:lucide-preact@0.292.0";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | YourCompany</title>
        <meta
          name="description"
          content="Join a fully‑distributed team building the future of headless commerce. See open roles, perks, and our hiring process."
        />
      </Head>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section class="bg-gradient-to-b from-white to-slate-100 py-24 px-4 text-center">
        <div class="container mx-auto max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
            Build Commerce That Scales the World’s Ambition
          </h1>
          <p class="text-lg text-slate-700 mb-8">
            We’re a crew of builders, dreamers, and doers chasing
            one mission:{" "}
            <em>
              untangle commerce so brands can move at the speed of culture.
            </em>
          </p>
          <Button size="lg">View Open Roles</Button>
        </div>
      </section>

      {/* ─── WHY WORK HERE ────────────────────────────────────── */}
      <section class="container mx-auto px-4 py-20">
        <h2 class="text-2xl font-semibold mb-12 text-center">Why Work Here</h2>
        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-lg leading-relaxed text-slate-700">
          <p>
            Responsibility has no borders at Fast & Modern. From Beijing to
            Brooklyn, every teammate owns problems end‑to‑end and ships
            solutions that reach millions. We invest in{" "}
            <strong>deep work</strong>, radical candor, and continuous
            learning—because great software is a marathon of short, focused
            sprints.
          </p>
          <p>
            Whether you’re pair‑programming at dawn or designing after the kids
            are asleep, we trust you to find your flow and{" "}
            <strong>bias to ship</strong>. In return, we back you with generous
            benefits, async rituals that respect time zones, and an open culture
            where ideas rise by merit, not title.
          </p>
        </div>
      </section>


      {/* ─── DEI STATEMENT ────────────────────────────────────── */}
      <section class="bg-gradient-to-r from-emerald-100 to-teal-50 py-20 px-4 text-center">
        <div class="container mx-auto max-w-4xl space-y-6">
          <h2 class="text-2xl font-semibold">Diversity, Equity & Inclusion</h2>
          <p class="text-slate-700 text-lg leading-relaxed">
            Ideas thrive when voices are diverse. We are committed to building a
            team that reflects the myriad backgrounds of the users we serve.
            Fast & Modern provides equal opportunities and a{" "}
            <strong>
              bias‑free hiring process
            </strong>—because innovation demands inclusion.
          </p>
        </div>
      </section>

      {/* ─── CURRENT OPENINGS (ATS FEED PLACEHOLDER) ───────────── */}
      <section class="container mx-auto px-4 py-20">
        <h2 class="text-2xl font-semibold text-center mb-12">
          Current Openings
        </h2>
        {/* Replace fetch below with live ATS (e.g., Greenhouse) in production */}
        <div class="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: "Senior Full‑Stack Engineer",
              location: "Remote • GMT‑5 to +3",
              id: "fs‑senior",
            },
            {
              title: "Product Designer",
              location: "Remote • Americas",
              id: "pd‑remote",
            },
            {
              title: "Customer Success Manager",
              location: "Remote • EMEA",
              id: "cs‑emea",
            },
          ].map((role) => (
            <Card key={role.id} class="shadow-md hover:shadow-lg transition">
              <CardContent class="p-6 md:flex md:items-center md:justify-between">
                <div>
                  <h3 class="font-semibold text-lg mb-1">{role.title}</h3>
                  <p class="text-slate-600 text-sm">{role.location}</p>
                </div>
                <Button
                  as="a"
                  href={`https://jobs.example.com/${role.id}`}
                  size="sm"
                  class="mt-4 md:mt-0"
                >
                  Apply →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── INTERVIEW PROCESS ────────────────────────────────── */}
      <section class="bg-slate-50 py-20 px-4">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold text-center mb-12">
            Interview Process
          </h2>
          <div class="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto text-center">
            {[
              ["Apply", "Upload resume or share LinkedIn"],
              ["Screen", "30‑min intro call"],
              ["Challenge", "Role‑based take‑home or live pair"],
              ["Team Panel", "Meet future teammates & ask questions"],
              ["Offer", "We aim to decide within 10 days"],
            ].map(([step, desc], i) => (
              <div key={step} class="space-y-3">
                <div class="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary-600 text-white font-semibold">
                  {i + 1}
                </div>
                <h3 class="font-medium text-slate-800">{step}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section class="py-24 px-4 text-center">
        <div class="container mx-auto max-w-3xl space-y-8">
          <h2 class="text-3xl font-bold">Ready to Build With Us?</h2>
          <div class="flex justify-center gap-4 flex-wrap">
            <Button size="lg">Explore Open Roles</Button>
            <Button size="lg" variant="outline" as="a" href="/talent-community">
              Join Talent Community
            </Button>
          </div>
          {/* Talent sign‑up form (mailing list) */}
          <form
            action="https://example.us10.list-manage.com/subscribe/post"
            method="POST"
            class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Mailchimp / other provider hidden inputs here */}
            <input
              type="email"
              name="EMAIL"
              placeholder="you@awesome.dev"
              required
              class="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <Button type="submit">Notify Me</Button>
          </form>
        </div>
      </section>
    </>
  );
}
