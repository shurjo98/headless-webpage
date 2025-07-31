import { h } from "preact";
import { useState } from "preact/hooks";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm({ ...form, [target.name]: target.value });
    // Clear error when user starts typing
    if (error) setError("");
  }

  function validateForm(): string | null {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }
    
    if (!form.email.trim()) {
      return "Please enter your email address.";
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    
    if (!form.message.trim()) {
      return "Please enter your message.";
    }
    
    if (form.message.trim().length < 10) {
      return "Please enter a message with at least 10 characters.";
    }
    
    return null;
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to send message. Please try again.");
      }

      setSent(true);
      // Reset form
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div class="text-center space-y-6">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            class="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-display font-bold text-neutral-900 mb-2">Message sent successfully!</h2>
          <p class="text-neutral-600">We'll get back to you within one business day.</p>
        </div>
        <button
          onClick={() => setSent(false)}
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-2 text-sm font-semibold text-neutral-900">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onInput={handleChange}
            class="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
            placeholder="Your full name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-semibold text-neutral-900">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onInput={handleChange}
            class="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
            placeholder="your.email@company.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label class="block mb-2 text-sm font-semibold text-neutral-900">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onInput={handleChange}
          class="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
          placeholder="Your company name (optional)"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-semibold text-neutral-900">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onInput={handleChange}
          class="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors resize-none"
          placeholder="Tell us about your project, requirements, or any questions you have..."
          required
          disabled={isSubmitting}
        />
        <p class="text-xs text-neutral-500 mt-1">
          Minimum 10 characters
        </p>
      </div>

      {error && (
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex">
            <svg class="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      <p class="text-xs text-neutral-500 text-center">
        We typically respond within 2-4 hours during business hours (PST).
      </p>
    </form>
  );
}
