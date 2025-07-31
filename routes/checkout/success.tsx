import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

interface SuccessData {
  orderId: string;
  package: string;
  total: number;
  paymentMethod: string;
  term: number;
}

export default function CheckoutSuccessPage({ url }: PageProps) {
  const searchParams = url.searchParams;
  const orderId = searchParams.get("orderId") || "ORD-123456789";
  const packageName = searchParams.get("package") || "Starter";
  const total = searchParams.get("total") || "148";
  const paymentMethod = searchParams.get("paymentMethod") || "upfront";
  const term = searchParams.get("term") || "12";

  return (
    <>
      <Head>
        <title>Order Confirmed - HeadlessPro</title>
        <meta name="description" content="Your HeadlessPro order has been confirmed" />
      </Head>

      {/* Success Hero */}
      <section class="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-24">
        <div class="container mx-auto px-4 text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">
            Order Confirmed!
          </h1>
          <p class="max-w-2xl mx-auto text-lg opacity-90">
            Thank you for choosing HeadlessPro. Your order has been successfully processed.
          </p>
        </div>
      </section>

      <main class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          {/* Order Details */}
          <div class="bg-white rounded-2xl shadow-soft p-8 mb-8">
            <h2 class="text-2xl font-display font-bold text-neutral-900 mb-6">
              Order Details
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-neutral-900 mb-2">Order Information</h3>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-neutral-600">Order ID:</span>
                      <span class="font-medium">{orderId}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-neutral-600">Package:</span>
                      <span class="font-medium">{packageName}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-neutral-600">Payment Method:</span>
                      <span class="font-medium capitalize">{paymentMethod}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-neutral-600">Total Amount:</span>
                      <span class="font-medium">${total}</span>
                    </div>
                    {paymentMethod === 'installment' && (
                      <div class="flex justify-between">
                        <span class="text-neutral-600">Monthly Payment:</span>
                        <span class="font-medium">${(parseInt(total) / parseInt(term)).toFixed(2)}/mo</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-neutral-900 mb-2">What's Next?</h3>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 class="font-medium text-neutral-900">Welcome Email</h4>
                      <p class="text-sm text-neutral-600">You'll receive login credentials within 24 hours</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 class="font-medium text-neutral-900">Onboarding Call</h4>
                      <p class="text-sm text-neutral-600">Schedule your setup session with our team</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 class="font-medium text-neutral-900">Go Live</h4>
                      <p class="text-sm text-neutral-600">Launch your headless commerce platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl p-6 shadow-soft text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-semibold text-neutral-900 mb-2">Check Your Email</h3>
              <p class="text-sm text-neutral-600">Look for your welcome email with login instructions</p>
            </div>
            
            <div class="bg-white rounded-xl p-6 shadow-soft text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-semibold text-neutral-900 mb-2">Schedule Onboarding</h3>
              <p class="text-sm text-neutral-600">Book your setup session with our experts</p>
            </div>
            
            <div class="bg-white rounded-xl p-6 shadow-soft text-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-semibold text-neutral-900 mb-2">Access Dashboard</h3>
              <p class="text-sm text-neutral-600">Start building your headless commerce platform</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div class="text-center space-y-4">
            <a
              href="/contact"
              class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Schedule Onboarding Call →
            </a>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs"
                class="inline-block border border-neutral-300 text-neutral-700 font-medium px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Read Documentation
              </a>
              <a
                href="/contact"
                class="inline-block border border-neutral-300 text-neutral-700 font-medium px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Indicators */}
      <section class="bg-neutral-50 py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl font-display font-bold text-neutral-900 mb-8">
            You're in Good Hands
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              ["24/7 Support", "Always here to help"],
              ["99.96% Uptime", "Reliable service"],
              ["30-Day Trial", "Risk-free start"],
              ["Expert Team", "Commerce specialists"]
            ].map(([title, desc]) => (
              <div key={title} class="text-center">
                <div class="text-primary-600 text-xl font-bold mb-2">{title}</div>
                <div class="text-sm text-neutral-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 