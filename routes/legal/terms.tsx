import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | YourCompany</title>
      </Head>

      {/* Hero */}
      <header class="pt-28 pb-16 bg-primary-700 text-white text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          Terms of Service
        </h1>
        <p class="opacity-80">Last updated July 28, 2025</p>
      </header>

      {/* Content */}
      <main class="container mx-auto px-4 md:px-6 lg:px-8 py-20 prose prose-gray max-w-3xl">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using any service (“Service”) provided by
          <strong> YourCompany Inc.</strong> (“we,” “our,” “us”), you agree to be
          bound by these Terms of Service (“Terms”). If you do not agree, do not
          use the Service.
        </p>

        <h2>2. Service Description</h2>
        <p>
          We build, host, and maintain headless commerce applications and
          related software. Specific deliverables and timelines are defined in
          your Statement of Work (“SOW”).
        </p>

        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate information and timely feedback.</li>
          <li>
            Comply with all applicable laws, including data‑protection
            regulations.
          </li>
          <li>
            Maintain the confidentiality of any credentials issued to you.
          </li>
        </ul>

        <h2>4. Fees &amp; Payment</h2>
        <p>
          Fees are payable as stated in the relevant SOW or invoice. Late
          payments accrue 1.5 % interest per month or the maximum allowed by
          law.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          We retain ownership of all pre‑existing IP. Deliverables created
          specifically for you under an SOW are assigned to you upon full
          payment, unless otherwise stated.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY OR FITNESS FOR A
          PARTICULAR PURPOSE.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, our total liability shall not
          exceed the fees you paid us in the 12 months preceding the claim.
        </p>

        <h2>8. Termination</h2>
        <p>
          Either party may terminate for material breach with 30 days’ written
          notice if the breach is not cured.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California,
          without regard to conflict‑of‑law principles.
        </p>

        <h2>10. Modifications</h2>
        <p>
          We may update these Terms. Material changes will be notified at least
          30 days in advance.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions? Email 
          <a href="mailto:legal@yourcompany.com">legal@yourcompany.com</a>.
        </p>
      </main>
    </>
  );
}
