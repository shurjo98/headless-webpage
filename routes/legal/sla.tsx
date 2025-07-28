import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function SLA() {
  return (
    <>
      <Head>
        <title>Service Level Agreement | YourCompany</title>
      </Head>

      <header class="pt-28 pb-16 bg-primary-700 text-white text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          Service Level Agreement (SLA)
        </h1>
        <p class="opacity-80">Last updated July 28, 2025</p>
      </header>

      <main class="container mx-auto px-4 md:px-6 lg:px-8 py-20 prose prose-gray max-w-3xl">
        <h2>1. Uptime Commitment</h2>
        <p>
          We guarantee 99.9 % monthly uptime for production APIs and storefront
          renderers, excluding Planned Maintenance (see §4).
        </p>

        <h2>2. Support Response Times</h2>
        <table>
          <thead>
            <tr>
              <th>Severity</th>
              <th>Example</th>
              <th>Response Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Critical</strong></td>
              <td>Checkout unavailable</td>
              <td>&lt; 1 hour, 24 × 7</td>
            </tr>
            <tr>
              <td><strong>High</strong></td>
              <td>Major feature degraded</td>
              <td>&lt; 4 hours (business days)</td>
            </tr>
            <tr>
              <td><strong>Normal</strong></td>
              <td>Minor bug / cosmetic</td>
              <td>&lt; 1 business day</td>
            </tr>
          </tbody>
        </table>

        <h2>3. Service Credits</h2>
        <p>
          If monthly uptime falls below 99.9 %, you are eligible for a credit
          equal to 10 % of that month’s fee. Credits are capped at 50 % for the
          month and must be claimed within 30 days.
        </p>

        <h2>4. Planned Maintenance</h2>
        <p>
          We schedule maintenance windows outside 22:00–06:00 UTC and provide
          48 hours’ notice. Downtime during these windows does not count against
          uptime metrics.
        </p>

        <h2>5. Exclusions</h2>
        <ul>
          <li>Issues caused by factors outside our reasonable control.</li>
          <li>
            Customer‑originated actions (e.g., mis‑configuring APIs or breaking
            the build).
          </li>
          <li>Beta or preview features marked “as‑is.”</li>
        </ul>

        <h2>6. Contact</h2>
        <p>
          To report an incident, email 
          <a href="mailto:support@yourcompany.com">support@yourcompany.com</a> or
          open a ticket in the customer portal.
        </p>
      </main>
    </>
  );
}
