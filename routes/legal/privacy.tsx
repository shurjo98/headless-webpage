import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | YourCompany</title>
      </Head>

      <header class="pt-28 pb-16 bg-primary-700 text-white text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          Privacy Policy
        </h1>
        <p class="opacity-80">Last updated July 28, 2025</p>
      </header>

      <main class="container mx-auto px-4 md:px-6 lg:px-8 py-20 prose prose-gray max-w-3xl">
        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Account data</strong> – name, email, billing details.
          </li>
          <li>
            <strong>Usage data</strong> – log files, device information,
            analytics events.
          </li>
          <li>
            <strong>Cookies</strong> – to remember preferences and improve site
            performance.
          </li>
        </ul>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>Provide and maintain the Service.</li>
          <li>Process payments and send invoices.</li>
          <li>Monitor performance and prevent fraud.</li>
          <li>Send product updates and marketing (opt‑out anytime).</li>
        </ul>

        <h2>3. Legal Bases</h2>
        <p>
          We process personal data under contract necessity, legitimate
          interest, and consent (for marketing communications).
        </p>

        <h2>4. Third‑Party Services</h2>
        <p>
          We share data with Stripe (payments), Vercel/Deno Deploy (hosting),
          and Google Analytics. Each provider is contractually bound to
          safeguard your data.
        </p>

        <h2>5. Security</h2>
        <p>
          We use TLS encryption, least‑privilege access, and periodic audits to
          protect your information.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          Account data is kept for the life of your account. Backups and logs
          are purged after 90 days unless legally required to retain longer.
        </p>

        <h2>7. Your Rights</h2>
        <p>You may access, correct, delete, or export your personal data.</p>

        <h2>8. International Transfers</h2>
        <p>
          Data may be processed outside your country. We rely on Standard
          Contractual Clauses for EU transfers.
        </p>

        <h2>9. Children’s Privacy</h2>
        <p>
          The Service is not directed to anyone under 16. We do not knowingly
          collect personal data from children.
        </p>

        <h2>10. Changes</h2>
        <p>We will post any changes to this policy on this page.</p>

        <h2>11. Contact</h2>
        <p>
          Email <a href="mailto:privacy@yourcompany.com">privacy@yourcompany.com</a>.
        </p>
      </main>
    </>
  );
}
