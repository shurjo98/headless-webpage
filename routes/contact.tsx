import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import ContactForm from "../islands/ContactForm.tsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | HeadlessPro</title>
        <meta
          name="description"
          content="Book a discovery call or ask anything about our headless‑commerce services."
        />
      </Head>

      {/* Hero Section */}
      <section class="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div class="absolute inset-0 bg-abstract opacity-10"></div>
        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight tracking-tight">
            Let's Talk
          </h1>
          <p class="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed font-light">
            Tell us about your project and we'll respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section class="py-16 lg:py-24 bg-neutral-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Contact Information */}
              <div class="lg:col-span-1 space-y-8">
                <div>
                  <h2 class="text-2xl lg:text-3xl font-display font-bold text-neutral-900 mb-6">
                    Get in Touch
                  </h2>
                  <p class="text-neutral-600 leading-relaxed mb-8 font-light">
                    Ready to scale your commerce business? Let's discuss how we can help you launch faster and grow everywhere.
                  </p>
                </div>

                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-neutral-900 mb-1">Email</h3>
                      <p class="text-neutral-600 font-light">lucy@fastandmodern.com</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-neutral-900 mb-1">Phone</h3>
                      <p class="text-neutral-600 font-light">+1 (929) 578-3968</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-neutral-900 mb-1">Office</h3>
                      <p class="text-neutral-600 font-light"> No. 18 Zhongguancun Street<br />
    Haidian District, Beijing, China 100080</p>
                    </div>
                  </div>
                </div>

                <div class="pt-6 border-t border-neutral-200">
                  <h3 class="font-semibold text-neutral-900 mb-4">Response Time</h3>
                  <p class="text-sm text-neutral-600 font-light">
                    We typically respond within 2-4 hours during business hours (PST).
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div class="lg:col-span-2">
                <div class="bg-white rounded-2xl shadow-soft p-8 lg:p-12">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
