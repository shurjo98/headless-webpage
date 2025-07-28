import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import ContactForm from "../islands/ContactForm.tsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | YourCompany</title>
        <meta
          name="description"
          content="Book a discovery call or ask anything about our headless‑commerce services."
        />
      </Head>

      {/* Hero */}
      <header class="pt-28 pb-16 bg-primary-700 text-white text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Let’s Talk</h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Tell us about your project and we’ll respond within one business day.
        </p>
      </header>

      {/* Form */}
      <main class="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
