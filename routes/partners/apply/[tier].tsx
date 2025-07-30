// File: routes/partners/apply/[tier].tsx
import { Head } from "$fresh/runtime.ts";
import type { Handlers, PageProps } from "$fresh/server.ts";
// ← Denomailer import
import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";
import {
  ShieldCheck,
  Layers,
  Rocket,
} from "https://esm.sh/lucide-preact@0.328.0";

// ─── SMTP CONFIG ───────────────────────────────────────────────
const SMTP_HOST = Deno.env.get("SMTP_HOST")!;   // e.g. "mail.fastandmodern.com"
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT")!); // e.g. 465
const SMTP_USER = Deno.env.get("SMTP_USER")!;   // your SMTP username
const SMTP_PASS = Deno.env.get("SMTP_PASS")!;   // your SMTP password
const TO_EMAIL  = "lucy@fastandmodern.com";

export const handler: Handlers<{ status: string | null }> = {
  async POST(req, ctx) {
    const form = await req.formData();
    const company     = form.get("company")     as string;
    const contactName = form.get("contactName") as string;
    const email       = form.get("email")       as string;
    const bio         = form.get("bio")         as string;

    // ─── SEND VIA denomailer ──────────────────────────────────────
    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOST,
        port:     SMTP_PORT,
        tls:      true,
        auth: {
          username: SMTP_USER,
          password: SMTP_PASS,
        },
      },
    });

    await client.send({
      from:    SMTP_USER,
      to:      [TO_EMAIL],
      subject: `Partner Application: ${company} (${ctx.params.tier})`,
      content: `
New partner application received:

Tier:          ${ctx.params.tier}
Company:       ${company}
Contact Name:  ${contactName}
Email:         ${email}

Bio:
${bio}
      `,
    });
    await client.close();
    // ───────────────────────────────────────────────────────────

    // Redirect back with a “sent” flag
    const origin = new URL(req.url).origin;
    return Response.redirect(
      `${origin}/partners/apply/${ctx.params.tier}?status=sent`,
      302,
    );
  },

  GET(req, ctx) {
    const url = new URL(req.url);
    return ctx.render({ status: url.searchParams.get("status") });
  },
};

export default function PartnerApplyPage(
  { data, params }: PageProps<{ status: string | null }>,
) {
  const tierKey  = params.tier;
  const tierName = tierKey.replace(/-/g, " ");
  const tierConfig: Record<string, {
    Icon: typeof ShieldCheck;
    headline: string;
    benefits: string[];
  }> = {
    "solution-partner": {
      Icon: ShieldCheck,
      headline: "Collaborate on Solutions and Case Studies",
      benefits: [
        "Priority technical support",
        "Joint marketing campaigns",
        "Co‑authored case studies",
      ],
    },
    "technology-partner": {
      Icon: Layers,
      headline: "Integrate and Innovate",
      benefits: [
        "Early API access",
        "Beta feature previews",
        "Co‑marketing opportunities",
      ],
    },
    reseller: {
      Icon: Rocket,
      headline: "Scale with Volume Discounts",
      benefits: [
        "Competitive volume pricing",
        "Certified training programs",
        "Dedicated partner manager",
      ],
    },
  };

  const tier = tierConfig[tierKey] || tierConfig["solution-partner"];
  const Icon = tier.Icon;

  return (
    <>
      <Head>
        <title>Apply to Become a {tierName}</title>
        <meta
          name="description"
          content={`Join our ${tierName} program and unlock benefits like ${tier.benefits.join(
            ", ",
          )}.`}
        />
      </Head>

      {/* Hero */}
      <section class="bg-gradient-to-r from-primary-600 to-primary-400 text-white py-24">
        <div class="container mx-auto px-4 text-center">
          <Icon class="mx-auto mb-6 w-16 h-16" />
          <h1 class="text-5xl font-bold mb-4">
            Apply to Become a {tierName}
          </h1>
          <p class="max-w-2xl mx-auto text-lg font-light">
            {tier.headline}. Fill out the form below to join our Partner Program.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-semibold text-center mb-12">
          What You’ll Get
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tier.benefits.map((b) => (
            <div
              key={b}
              class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow"
            >
              <Icon class="w-8 h-8 text-primary-600 mt-1" />
              <p class="text-slate-700">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section class="bg-neutral-50 py-20 px-4">
        <div class="container mx-auto max-w-3xl">
          <h2 class="text-3xl font-semibold mb-6 text-center">
            Program Requirements
          </h2>
          <ul class="list-disc list-inside text-slate-700 space-y-3">
            <li>Minimum 2 years in business or 5 completed projects</li>
            <li>Dedicated technical contact for integrations</li>
            <li>Agreement to our Partner Code of Conduct</li>
            <li>Quarterly business review calls</li>
          </ul>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-semibold text-center mb-12">
          Onboarding Steps
        </h2>
        <div class="flex flex-col md:flex-row justify-between gap-12 max-w-4xl mx-auto text-center">
          {[
            ["1. Submit Application", "Complete the form below"],
            ["2. Review & Approval", "We’ll evaluate your fit"],
            ["3. Kickoff Call", "Align on technical setup"],
            ["4. Go Live", "Start co‑selling & collaborating"],
          ].map(([step, desc]) => (
            <div key={step} class="flex-1">
              <div class="text-2xl font-bold text-primary-600 mb-2">
                {step}
              </div>
              <p class="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section class="container mx-auto px-4 py-20 max-w-xl">
        {data.status === "sent" ? (
          <p class="text-green-600 text-center">
            🎉 Your application has been submitted! We’ll be in touch shortly.
          </p>
        ) : (
          <form
            method="POST"
            encType="multipart/form-data"
            class="space-y-6"
          >
            <div>
              <label class="block mb-1 font-medium">Company Name</label>
              <input
                type="text"
                name="company"
                required
                class="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label class="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="contactName"
                required
                class="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label class="block mb-1 font-medium">Work Email</label>
              <input
                type="email"
                name="email"
                required
                class="w-full border rounded-lg p-3"
              />
            </div>
            <div>  
              <label class="block mb-1 font-medium">Brief Company Bio</label>
              <textarea
                name="bio"
                rows={4}
                required
                class="w-full border rounded-lg p-3"
              />
            </div>
            <button
              type="submit"
              class="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              Submit Application
            </button>
          </form>
        )}
      </section>
    </>
  );
}
