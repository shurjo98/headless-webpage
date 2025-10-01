// import { h } from "preact"; // Not needed for JSX
import { useState } from "preact/hooks";

interface EmailFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  monthlyRevenue: string;
  emailMarketing: string;
  consent: boolean;
}

// Interface for the existing contact API
interface ContactAPIData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export default function EmailContactForm() {
  const [form, setForm] = useState<EmailFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    monthlyRevenue: "",
    emailMarketing: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setForm({ ...form, [target.name]: value });
    // Clear error when user starts typing
    if (error) setError("");
  }

  function validateForm(): string | null {
    if (!form.firstName.trim()) {
      return "Please enter your first name.";
    }
    
    if (!form.lastName.trim()) {
      return "Please enter your last name.";
    }
    
    if (!form.email.trim()) {
      return "Please enter your business email address.";
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    
    if (!form.company.trim()) {
      return "Please enter your company/store name.";
    }
    
    if (!form.consent) {
      return "Please agree to receive email marketing communications.";
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
      // Transform the form data to match the existing contact API structure
      const contactData: ContactAPIData = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        company: form.company,
        message: `Email Marketing Consultation Request

Company: ${form.company}
Monthly Revenue: ${form.monthlyRevenue || "Not specified"}

Current Email Marketing Challenge:
${form.emailMarketing || "No specific challenges mentioned"}

Marketing Consent: ${form.consent ? "Yes" : "No"}

This is a request for email marketing automation consultation.`
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to send your request. Please try again.");
      }

      setSent(true);
      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        monthlyRevenue: "",
        emailMarketing: "",
        consent: false,
      });
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
          <h2 class="text-2xl font-display font-bold text-neutral-900 mb-2">
            Thank you for your interest!
          </h2>
          <p class="text-neutral-600 mb-4">
            Your email marketing consultation request has been sent successfully. 
            Our email marketing experts will review your information and get back to you within 24 hours 
            with a custom strategy for your ecommerce business.
          </p>
          <p class="text-sm text-neutral-500">
            Check your email for a confirmation and next steps.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          class="text-primary-600 hover:text-primary-700 font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-6">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 text-sm font-semibold text-neutral-900">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onInput={handleChange}
            class="placeholder-gray-500 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
            placeholder="John"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-semibold text-neutral-900">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onInput={handleChange}
            class="placeholder-gray-500 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
            placeholder="Smith"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div>
        <label class="block mb-2 text-sm font-semibold text-neutral-900">
          Business Email *
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onInput={handleChange}
          class="placeholder-gray-500 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
          placeholder="john@yourstore.com"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-semibold text-neutral-900">
          Company/Store Name *
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onInput={handleChange}
          class="placeholder-gray-500 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
          placeholder="Your Ecommerce Store"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-semibold text-neutral-900">
          Monthly Revenue
        </label>
        <select
          name="monthlyRevenue"
          value={form.monthlyRevenue}
          onInput={handleChange}
          class="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
          disabled={isSubmitting}
        >
          <option value="">Select range</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-50k">$10,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-500k">$100,000 - $500,000</option>
          <option value="500k-plus">$500,000+</option>
        </select>
      </div>

      <div>
        <label class="block mb-2 text-sm font-semibold text-neutral-900">
          Current Email Marketing Challenge
        </label>
        <textarea
          name="emailMarketing"
          rows={4}
          value={form.emailMarketing}
          onInput={handleChange}
          class="placeholder-gray-500 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors resize-vertical"
          placeholder="Tell us about your current email marketing challenges, goals, or what you'd like to achieve with automation..."
          disabled={isSubmitting}
        />
        <p class="text-xs text-neutral-500 mt-1">
          Optional - helps us provide better recommendations
        </p>
      </div>

      <div class="flex items-start">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onInput={handleChange}
          class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
          required
          disabled={isSubmitting}
        />
        <label class="ml-3 text-sm text-neutral-600">
          I agree to receive email marketing communications and understand I can unsubscribe at any time. *
        </label>
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
        class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Request...
          </>
        ) : (
          <>
            Get Free Email Marketing Strategy
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      <p class="text-xs text-neutral-500 text-center">
        We typically respond within 24 hours with a custom email marketing strategy for your business.
      </p>
    </form>
  );
}
