import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

const productStories = [
  {
    title: "Admin Dashboard",
    description: "Powerful business management with real-time analytics, order processing, and customer insights.",
    image: "/images/dashboard.png",
    href: "/product-story/admin-dashboard",
    features: ["Real-time Analytics", "Order Management", "Customer Insights", "Inventory Control"],
    metrics: ["50% faster decisions", "3x efficiency", "24/7 monitoring"]
  },
  {
    title: "Mobile App",
    description: "Seamless mobile experience with offline capabilities and push notifications.",
    image: "/images/phone.png",
    href: "/product-story/mobile-app",
    features: ["Offline Support", "Push Notifications", "Biometric Auth", "AR Shopping"],
    metrics: ["2x engagement", "40% faster checkout", "90% retention"]
  },
  {
    title: "E-commerce Platform",
    description: "Complete headless commerce solution with multi-channel selling capabilities.",
    image: "/images/globe.png",
    href: "/product-story/ecommerce-platform",
    features: ["Multi-channel", "Headless Architecture", "API-first", "Scalable"],
    metrics: ["5x performance", "99.9% uptime", "Global CDN"]
  },
  {
    title: "Analytics Suite",
    description: "Advanced analytics and reporting with AI-powered insights and predictions.",
    image: "/images/analytics.png",
    href: "/product-story/analytics-suite",
    features: ["AI Insights", "Predictive Analytics", "Custom Reports", "Real-time Data"],
    metrics: ["30% revenue increase", "AI predictions", "Custom dashboards"]
  }
];

export default function ProductStoriesIndex() {
  return (
    <>
      <Head>
        <title>Product Stories | YourCompany</title>
        <meta
          name="description"
          content="Explore our product stories and see how our solutions transform businesses. Interactive demos and real-world examples."
        />
      </Head>

      {/* Hero Section */}
      <section class="pt-28 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Product Stories
            <span class="text-primary-600 block">That Inspire</span>
          </h1>
          <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover how our innovative solutions are transforming businesses across industries. 
            Each product story showcases real capabilities with interactive demos.
          </p>
        </div>
      </section>

      {/* Product Stories Grid */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8">
            {productStories.map((story) => (
              <a
                href={story.href}
                class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image */}
                <div class="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div class="p-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {story.title}
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Features */}
                  <div class="mb-6">
                    <h4 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      {story.features.map((feature) => (
                        <span class="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div class="mb-6">
                    <h4 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Impact
                    </h4>
                    <div class="space-y-2">
                      {story.metrics.map((metric) => (
                        <div class="flex items-center text-sm text-gray-600">
                          <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div class="flex items-center justify-between">
                    <span class="text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                      Explore Story
                    </span>
                    <svg
                      class="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to See Your Story?</h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a product story together. Our team will work with you to showcase 
            how our solutions can transform your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Your Story
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/platform"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 font-semibold rounded-lg transition-all duration-200"
            >
              View Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
