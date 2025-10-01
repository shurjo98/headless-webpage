// routes/index.tsx
// Email Automation for Ecommerce - Simple One Page Website
import AOSProvider from "../islands/AOSProvider.tsx";
import EmailContactForm from "../islands/EmailContactForm.tsx";
import Header from "../islands/Header.tsx";

/* -----------------------
   Small helper: anchor button (accessible)
   ----------------------- */
function AnchorButton(
  { href, children, className = "" }: {
    href: string;
    children: preact.ComponentChildren;
    className?: string;
  },
) {
  return (
    <a
      href={href}
      class={"inline-flex items-center " + className}
      role="button"
      aria-pressed="false"
    >
      {children}
    </a>
  );
}

/* -----------------------
   Hero Section - eCommerce Focus
   ----------------------- */
function HeroSection() {
  return (
    <section id="home" class="pt-20 pb-16 bg-gradient-to-b from-neutral-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Save Hours, Grow Revenue:
              <span class="block text-primary-600">Email Automation for eCommerce</span>
            </h1>
            <p class="text-xl text-neutral-600 leading-relaxed mb-8 max-w-lg">
              From simple welcome emails to AI-powered personalized campaigns. 
              Automate your customer journey and watch your revenue grow.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnchorButton
                href="#contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition text-center"
              >
                Start Automating Today
              </AnchorButton>
              <AnchorButton
                href="#automation-types"
                className="border border-neutral-300 text-neutral-700 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition text-center"
              >
                See Automation Types
              </AnchorButton>
            </div>
          </div>
          <div class="flex justify-center">
            <img
              src="/images/Home_Page_3.png"
              alt="Email Automation Platform for eCommerce"
              class="w-full max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------
   Automation Types & Benefits Section
   ----------------------- */
function AutomationTypesSection() {
  return (
    <section id="automation-types" class="py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Powerful eCommerce Email Automations
          </h2>
          <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose from proven automation workflows that drive sales and save you hours every week.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Welcome Series */}
          <div class="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">👋</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-3">Welcome Series</h3>
            <p class="text-neutral-600 text-sm">
              Automatically nurture new subscribers with a sequence of engaging emails that build trust and drive first purchases.
            </p>
          </div>

          {/* Abandoned Cart */}
          <div class="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🛒</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-3">Abandoned Cart Recovery</h3>
            <p class="text-neutral-600 text-sm">
              Recover lost sales with perfectly timed reminders that bring customers back to complete their purchase.
            </p>
          </div>

          {/* Post-Purchase */}
          <div class="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">📦</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-3">Post-Purchase Follow-up</h3>
            <p class="text-neutral-600 text-sm">
              Delight customers with order confirmations, shipping updates, and review requests that build loyalty.
            </p>
          </div>

          {/* Win-Back */}
          <div class="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">💝</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-3">Win-Back Campaigns</h3>
            <p class="text-neutral-600 text-sm">
              Re-engage inactive customers with special offers and personalized recommendations to revive dormant accounts.
            </p>
          </div>

          {/* Product Recommendations */}
          <div class="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🎯</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-3">AI Product Recommendations</h3>
            <p class="text-neutral-600 text-sm">
              Increase average order value with smart product suggestions based on browsing and purchase history.
            </p>
          </div>

          {/* VIP Customer */}
          <div class="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-3">VIP Customer Programs</h3>
            <p class="text-neutral-600 text-sm">
              Reward your best customers with exclusive offers, early access, and personalized experiences.
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center order-2 lg:order-1">
            <img
              src="/images/Home_Page_2.png"
              alt="Email Automation Dashboard"
              class="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div class="order-1 lg:order-2">
            <h3 class="text-2xl font-bold text-neutral-900 mb-4">
              Why eCommerce Stores Choose Our Automations
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <span class="font-semibold text-neutral-900">Save 10+ Hours Per Week</span>
                  <p class="text-neutral-600 text-sm">Set up once, run forever. No more manual email sending.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <span class="font-semibold text-neutral-900">Increase Revenue by 30%</span>
                  <p class="text-neutral-600 text-sm">Recover lost sales and boost customer lifetime value.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <span class="font-semibold text-neutral-900">Personalized at Scale</span>
                  <p class="text-neutral-600 text-sm">AI-powered personalization for every customer interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------
   Step-by-Step Roadmap Section
   ----------------------- */
function RoadmapSection() {
  return (
    <section id="roadmap" class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Your Email Automation Journey
          </h2>
          <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
            Start simple, scale smart. Here's how we help you grow from basic emails to advanced AI-powered campaigns.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Step 1: Start Simple */}
          <div class="bg-white rounded-2xl p-8 text-center relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-2xl font-bold text-neutral-900 mb-4">Start Simple</h3>
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl">🚀</span>
              </div>
              <ul class="text-left space-y-3 text-neutral-600">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Welcome email series
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Basic abandoned cart emails
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Order confirmation emails
                </li>
              </ul>
              <div class="mt-6 text-sm text-neutral-500">
                Perfect for: New stores, 0-1K customers
              </div>
            </div>
          </div>

          {/* Step 2: Scale Medium */}
          <div class="bg-white rounded-2xl p-8 text-center relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-2xl font-bold text-neutral-900 mb-4">Scale Medium</h3>
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl">📈</span>
              </div>
              <ul class="text-left space-y-3 text-neutral-600">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Customer segmentation
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Win-back campaigns
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Post-purchase sequences
                </li>
              </ul>
              <div class="mt-6 text-sm text-neutral-500">
                Perfect for: Growing stores, 1K-10K customers
              </div>
            </div>
          </div>

          {/* Step 3: Go Advanced */}
          <div class="bg-white rounded-2xl p-8 text-center relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-2xl font-bold text-neutral-900 mb-4">Go Advanced</h3>
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl">🤖</span>
              </div>
              <ul class="text-left space-y-3 text-neutral-600">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  AI product recommendations
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Predictive analytics
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Dynamic personalization
                </li>
              </ul>
              <div class="mt-6 text-sm text-neutral-500">
                Perfect for: Established stores, 10K+ customers
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-1">
            <h3 class="text-2xl font-bold text-neutral-900 mb-6">
              Track Your Success Every Step
            </h3>
            <p class="text-lg text-neutral-600 mb-6">
              Our analytics dashboard shows you exactly how your automations are performing, 
              so you can optimize and scale with confidence.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                <span class="text-neutral-700">Revenue attribution by automation</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                <span class="text-neutral-700">Customer journey visualization</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                <span class="text-neutral-700">A/B testing insights</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                <span class="text-neutral-700">ROI tracking and forecasting</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center order-2">
            <img
              src="/images/Home_Page_1.png"
              alt="Email Analytics Dashboard"
              class="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------
   Main page (compose)
   ----------------------- */
export default function Home() {
  return (
    <>
      <AOSProvider
        autoTargets={[
          "#aos-scope h1",
          "#aos-scope h2",
          "#aos-scope h3",
          "#aos-scope p",
          "#aos-scope figure",
          "#aos-scope img",
          "#aos-scope article",
        ]}
        distancePx={28}
        durationMs={900}
        delayStepMs={90}
        rootMargin="0px 0px -12% 0px"
        threshold={0.15}
      />

      <Header />

      <HeroSection />

      <AutomationTypesSection />

      <RoadmapSection />

      {/* Lead Magnet Section */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Get Your Free Email Automation Setup
              </h2>
              <p class="text-lg text-neutral-600 mb-8 leading-relaxed">
                Choose your free gift: Get a complete welcome email sequence setup 
                or receive AI-powered product recommendation templates for your store.
              </p>
              
              {/* Lead Magnet Options */}
              <div class="space-y-6 mb-8">
                <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 class="font-semibold text-neutral-900 mb-1">Free Welcome Email Sequence</h3>
                      <p class="text-sm text-neutral-600">Complete 5-email welcome series templates + setup guide</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 class="font-semibold text-neutral-900 mb-1">AI Recommendations Demo</h3>
                      <p class="text-sm text-neutral-600">Free analysis of your store + personalized automation strategy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                  <span class="text-neutral-700">Setup in 24 hours</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                  <span class="text-neutral-700">No credit card required</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-primary-600"></div>
                  <span class="text-neutral-700">Includes implementation support</span>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <img
                src="/images/Home_Page_4.png"
                alt="Free Email Automation Setup"
                class="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact" class="py-20 bg-neutral-50">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="max-w-2xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-neutral-900 mb-4">
                Claim Your Free Email Automation Gift
              </h2>
              <p class="text-lg text-neutral-600">
                Tell us about your store and we'll send you the perfect automation starter kit within 24 hours.
              </p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-black/5">
              <EmailContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}