import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface CheckoutData {
  packageKey: string;
  packageLabel: string;
  selectedFeatures: Array<{
    id: string;
    title: string;
    desc: string;
    price?: number;
    category: 'web' | 'mobile';
  }>;
  pricing: {
    basePrice: number;
    extrasPrice: number;
    totalPrice: number;
    term: 12 | 24;
    monthlyPrice: number;
  };
}

export const handler: Handlers<CheckoutData> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    
    // Get data from URL parameters (passed from Configurator)
    const packageKey = searchParams.get("package") || "starter";
    const features = searchParams.get("features") || "[]";
    const term = parseInt(searchParams.get("term") || "12") as 12 | 24;
    
    try {
      const selectedFeatures = JSON.parse(decodeURIComponent(features));
      
      // Calculate pricing
      const basePrices = {
        starter: { web: 99, app: 49 },
        professional: { web: 199, app: 99 },
        enterprise: { web: 499, app: 199 }
      };
      
      const packageInfo = {
        starter: { label: "Starter", desc: "Perfect for small businesses" },
        professional: { label: "Professional", desc: "Ideal for growing companies" },
        enterprise: { label: "Enterprise", desc: "For large-scale operations" }
      };
      
      const basePrice = (basePrices[packageKey as keyof typeof basePrices]?.web || 0) + 
                       (basePrices[packageKey as keyof typeof basePrices]?.app || 0);
      
      const extrasPrice = selectedFeatures.reduce((sum: number, feature: any) => 
        sum + (feature.price || 0), 0);
      
      const totalPrice = basePrice + extrasPrice;
      const monthlyPrice = totalPrice / term;
      
      const data: CheckoutData = {
        packageKey,
        packageLabel: packageInfo[packageKey as keyof typeof packageInfo]?.label || "Custom",
        selectedFeatures,
        pricing: {
          basePrice,
          extrasPrice,
          totalPrice,
          term,
          monthlyPrice
        }
      };
      
      return ctx.render(data);
    } catch (error) {
      // If data is invalid, redirect back to configurator
      return Response.redirect("/pricing/configurator", 302);
    }
  }
};

export default function CheckoutPage({ data }: PageProps<CheckoutData>) {
  const { packageKey, packageLabel, selectedFeatures, pricing } = data;
  
  // Group features by category
  const webFeatures = selectedFeatures.filter(f => f.category === 'web');
  const mobileFeatures = selectedFeatures.filter(f => f.category === 'mobile');
  
  return (
    <>
      <Head>
        <title>Checkout - HeadlessPro</title>
        <meta name="description" content="Complete your HeadlessPro package purchase" />
      </Head>

      {/* Hero Section */}
      <section class="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">
            Complete Your Purchase
          </h1>
          <p class="max-w-2xl mx-auto text-lg opacity-90">
            Review your selected package and features before proceeding to payment.
          </p>
        </div>
      </section>

      <main class="container mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-3 gap-12">
          
          {/* Order Summary */}
          <div class="lg:col-span-2 space-y-8">
            <div class="bg-white rounded-2xl shadow-soft p-8">
              <h2 class="text-2xl font-display font-bold text-neutral-900 mb-6">
                Order Summary
              </h2>
              
              {/* Package Selection */}
              <div class="border-b border-neutral-200 pb-6 mb-6">
                <h3 class="text-lg font-semibold text-neutral-900 mb-3">
                  Selected Package
                </h3>
                <div class="bg-primary-50 border border-primary-200 rounded-xl p-4">
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-semibold text-primary-900">{packageLabel} Package</h4>
                      <p class="text-sm text-primary-700">
                        {packageKey === 'starter' && 'Perfect for small businesses'}
                        {packageKey === 'professional' && 'Ideal for growing companies'}
                        {packageKey === 'enterprise' && 'For large-scale operations'}
                      </p>
                    </div>
                    <span class="text-lg font-bold text-primary-900">
                      ${pricing.basePrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Web Features */}
              {webFeatures.length > 0 && (
                <div class="border-b border-neutral-200 pb-6 mb-6">
                  <h3 class="text-lg font-semibold text-neutral-900 mb-3">
                    Web Features ({webFeatures.length})
                  </h3>
                  <div class="space-y-3">
                    {webFeatures.map((feature) => (
                      <div key={feature.id} class="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                        <div>
                          <h4 class="font-medium text-neutral-900">{feature.title}</h4>
                          <p class="text-sm text-neutral-600">{feature.desc}</p>
                        </div>
                        <span class="text-sm font-semibold text-neutral-700">
                          {feature.price ? `$${feature.price}` : 'Included'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Features */}
              {mobileFeatures.length > 0 && (
                <div class="border-b border-neutral-200 pb-6 mb-6">
                  <h3 class="text-lg font-semibold text-neutral-900 mb-3">
                    Mobile Features ({mobileFeatures.length})
                  </h3>
                  <div class="space-y-3">
                    {mobileFeatures.map((feature) => (
                      <div key={feature.id} class="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                        <div>
                          <h4 class="font-medium text-neutral-900">{feature.title}</h4>
                          <p class="text-sm text-neutral-600">{feature.desc}</p>
                        </div>
                        <span class="text-sm font-semibold text-neutral-700">
                          {feature.price ? `$${feature.price}` : 'Included'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Breakdown */}
              <div class="bg-neutral-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-neutral-900 mb-4">
                  Pricing Breakdown
                </h3>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-neutral-600">Base Package</span>
                    <span class="font-medium">${pricing.basePrice}</span>
                  </div>
                  {pricing.extrasPrice > 0 && (
                    <div class="flex justify-between">
                      <span class="text-neutral-600">Additional Features</span>
                      <span class="font-medium">${pricing.extrasPrice}</span>
                    </div>
                  )}
                  <div class="border-t border-neutral-200 pt-3">
                    <div class="flex justify-between text-lg font-bold text-primary-700">
                      <span>Total</span>
                      <span>${pricing.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}

          </div>

          {/* Checkout Form */}
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-soft p-8 sticky top-8">
              <h2 class="text-2xl font-display font-bold text-neutral-900 mb-6">
                Complete Purchase
              </h2>
              
              <form class="space-y-6" id="checkoutForm">
                {/* Contact Information */}
                <div>
                  <h3 class="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        class="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        class="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-neutral-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        class="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 class="text-lg font-semibold text-neutral-900 mb-4">Payment Method</h3>
                  <div class="space-y-3">
                    <label class="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-300 transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="upfront" 
                        class="mr-3 w-6 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500" 
                        defaultChecked 
                      />
                      <div class="flex-1">
                        <div class="font-medium text-neutral-900">Pay Upfront</div>
                        <div class="text-sm text-neutral-600">${pricing.totalPrice} one-time</div>
                      </div>
                    </label>
                    <label class="flex items-center p-4 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-300 transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="installment" 
                        class="mr-3 w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500" 
                      />
                      <div class="flex-1">
                        <div class="font-medium text-neutral-900">Installment Plan</div>
                        <div class="text-sm text-neutral-600">${pricing.monthlyPrice.toFixed(2)}/mo for {pricing.term} months</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms */}
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input type="checkbox" required class="mt-1 mr-3" />
                    <span class="text-sm text-neutral-600">
                      I agree to the <a href="/legal/terms" class="text-primary-600 hover:underline">Terms of Service</a> and <a href="/legal/privacy" class="text-primary-600 hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                  <label class="flex items-start">
                    <input type="checkbox" name="newsletter" class="mt-1 mr-3" />
                    <span class="text-sm text-neutral-600">
                      I would like to receive updates about new features and special offers
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  id="submitBtn"
                >
                  Complete Purchase - ${pricing.totalPrice}
                </button>

                <p class="text-xs text-neutral-500 text-center">
                  Your payment is secured by SSL encryption. You can cancel anytime.
                </p>
              </form>

              <script dangerouslySetInnerHTML={{
                __html: `
                  // Payment method selection with visual feedback
                  document.querySelectorAll('input[name="payment"]').forEach(radio => {
                    radio.addEventListener('change', function() {
                      // Remove active state from all labels
                      document.querySelectorAll('input[name="payment"]').forEach(r => {
                        r.closest('label').classList.remove('border-primary-600', 'bg-primary-50');
                        r.closest('label').classList.add('border-neutral-300');
                      });
                      
                      // Add active state to selected label
                      if (this.checked) {
                        this.closest('label').classList.remove('border-neutral-300');
                        this.closest('label').classList.add('border-primary-600', 'bg-primary-50');
                      }
                    });
                  });
                  
                  // Initialize the first radio button as selected
                  document.addEventListener('DOMContentLoaded', function() {
                    const firstRadio = document.querySelector('input[name="payment"]');
                    if (firstRadio) {
                      firstRadio.checked = true;
                      firstRadio.closest('label').classList.add('border-primary-600', 'bg-primary-50');
                    }
                  });
                  
                  document.getElementById('checkoutForm').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const submitBtn = document.getElementById('submitBtn');
                    const originalText = submitBtn.innerHTML;
                    submitBtn.innerHTML = 'Processing...';
                    submitBtn.disabled = true;
                    
                    try {
                      const formData = new FormData(this);
                      const paymentMethod = formData.get('payment');
                      
                      const checkoutData = {
                        package: '${packageKey}',
                        features: ${JSON.stringify(selectedFeatures)},
                        term: ${pricing.term},
                        total: ${pricing.totalPrice},
                        customer: {
                          name: formData.get('name'),
                          email: formData.get('email'),
                          company: formData.get('company')
                        },
                        paymentMethod: paymentMethod
                      };
                      
                      const response = await fetch('/api/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(checkoutData)
                      });
                      
                      const result = await response.json();
                      
                      if (result.success) {
                        // Redirect to success page with order details
                        const successUrl = new URL('/checkout/success', window.location.origin);
                        successUrl.searchParams.set('orderId', result.orderId);
                        successUrl.searchParams.set('package', '${packageLabel}');
                        successUrl.searchParams.set('total', '${pricing.totalPrice}');
                        successUrl.searchParams.set('paymentMethod', paymentMethod);
                        successUrl.searchParams.set('term', '${pricing.term}');
                        
                        window.location.href = successUrl.toString();
                      } else {
                        alert('Payment failed: ' + result.message);
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                      }
                    } catch (error) {
                      console.error('Checkout error:', error);
                      alert('An error occurred during checkout. Please try again.');
                      submitBtn.innerHTML = originalText;
                      submitBtn.disabled = false;
                    }
                  });
                `
              }} />
            </div>
          </div>
        </div>
      </main>

      {/* Trust Indicators
      <section class="bg-neutral-50 py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl font-display font-bold text-neutral-900 mb-8">
            Trusted by Thousands of Businesses
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              ["SOC 2 Type II", "Certified Security"],
              ["99.96% Uptime", "Reliable Service"],
              ["24/7 Support", "Always Available"],
              ["30-Day Trial", "Risk-Free Start"]
            ].map(([title, desc]) => (
              <div key={title} class="text-center">
                <div class="text-primary-600 text-2xl font-bold mb-2">{title}</div>
                <div class="text-sm text-neutral-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
} 