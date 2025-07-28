import { h } from "preact";
import { useState } from "preact/hooks";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [err,  setErr] = useState("");

  function handleChange(e: Event) {
    const t = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm({ ...form, [t.name]: t.value });
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setErr("");

    /* simple client validation */
    if (!form.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.message.length < 10) {
      setErr("Please complete all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(await res.text());
      setSent(true);
    } catch (e) {
      setErr(e.message || "Something went wrong.");
    }
  }

  if (sent) {
    return (
      <div class="text-center space-y-6">
        <svg
          class="mx-auto w-16 h-16 text-primary-600"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h2 class="text-2xl font-bold">Message sent!</h2>
        <p class="text-gray-600">We’ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-2 text-sm font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onInput={handleChange}
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onInput={handleChange}
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium">Company</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onInput={handleChange}
          class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none"
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium">Message *</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onInput={handleChange}
          class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none"
          required
        />
      </div>

      {err && <p class="text-red-600 text-sm">{err}</p>}

      <button
        type="submit"
        class="bg-primary-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary-700 transition"
      >
        Send Message →
      </button>
    </form>
  );
}
