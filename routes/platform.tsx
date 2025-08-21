/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Platform() {
  return (
    <>
      <Head>
        <title>HeadlessPro Platform - API-First Commerce Platform | Enterprise-Grade Solutions</title>
        <meta
          name="description"
          content="Discover HeadlessPro's enterprise-grade API-first commerce platform. Built for scale with GraphQL, edge computing, and modular architecture. Start your free trial today."
        />
        <meta name="keywords" content="headless commerce, API-first, GraphQL, ecommerce platform, enterprise commerce, microservices, edge computing, developer tools" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HeadlessPro Platform - API-First Commerce Platform" />
        <meta property="og:description" content="Enterprise-grade headless commerce platform with GraphQL, edge computing, and modular architecture. Scale your business with our API-first approach." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://headlesspro.com/platform" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HeadlessPro Platform - API-First Commerce Platform" />
        <meta name="twitter:description" content="Enterprise-grade headless commerce platform with GraphQL, edge computing, and modular architecture." />
        <link rel="canonical" href="https://headlesspro.com/platform" />
      </Head>

      {/* ── Enhanced Hero Section ───────────────────────────────────────── */}
      <section class="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white text-center px-4 md:px-6 py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-600 rounded-full opacity-20 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-primary-500 rounded-full opacity-30 animate-float delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-600 rounded-full opacity-10 animate-pulse"></div>
        
        <div class="relative z-10">
          <div class="mb-6">
            <span class="inline-block bg-primary-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              🚀 Enterprise-Grade Platform
            </span>
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            A composable commerce core—
            <span class="block text-primary-200">ready for anything</span>
          </h1>
          <p class="max-w-4xl mx-auto text-lg md:text-xl opacity-90 mb-8 leading-relaxed text-gray-900">
            Modular services, GraphQL everywhere, and edge‑first delivery. Build faster without vendor lock‑in. 
           
          </p>

          {/* Performance metrics */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10 text-gray-900">
            {[
              { metric: "99.99%", label: "Uptime SLA" },
              { metric: "<100ms", label: "API Response" },
              { metric: "10M+", label: "API Calls/Day" },
              { metric: "50+", label: "Integrations" }
            ].map(({ metric, label }) => (
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-primary-200">{metric}</div>
                <div class="text-sm opacity-80">{label}</div>
              </div>
            ))}
          </div>

          {/* dual CTAs */}
          <div class="flex flex-col sm:inline-flex sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="inline-block bg-white text-primary-700 font-semibold
                     px-8 py-4 rounded-full shadow-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Discovery Call →
            </a>
            
          </div>
        </div>
      </section>

      {/* ── Enhanced Architecture Section ───────────── */}
      <section class="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">How it's built</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Our microservices architecture is designed for scale, performance, and developer experience
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "⚡",
                title: "Edge-First Delivery",
                description: "Global CDN with sub-100ms response times across 200+ locations"
              },
              {
                icon: "🔗",
                title: "GraphQL API",
                description: "Single endpoint for all data with real-time subscriptions"
              },
              {
                icon: "🧩",
                title: "Modular Services",
                description: "Independent services that scale and deploy separately"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "SOC 2, GDPR, PCI DSS, and ISO 27001 compliant"
              },
              {
                icon: "🚀",
                title: "Auto-Scaling",
                description: "Handles traffic spikes automatically with zero downtime"
              },
              {
                icon: "🛠️",
                title: "Developer Tools",
                description: "CLI, SDKs, and playgrounds for rapid development"
              }
            ].map(({ icon, title, description }) => (
              <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="text-4xl mb-4">{icon}</div>
                <h3 class="text-xl font-semibold mb-3">{title}</h3>
                <p class="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enhanced Platform modules ───────────────────────────── */}
      <section class="py-20 bg-gray-50 px-4 md:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Platform modules</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, scale, and optimize your commerce experience
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Catalog API",
                blurb: "Central product data, variants & price lists with real-time inventory sync.",
                features: ["Product variants", "Dynamic pricing", "Inventory management", "SEO optimization"]
              },
              {
                title: "Checkout service",
                blurb: "PCI‑compliant, Stripe & PayPal adapters with fraud protection.",
                features: ["Multi-payment methods", "Fraud detection", "Tax calculation", "Order management"]
              },
              {
                title: "CMS blocks",
                blurb: "Headless content with drag‑drop slots and A/B testing capabilities.",
                features: ["Visual editor", "A/B testing", "Multi-language", "Content scheduling"]
              },
              {
                title: "Auth & customer",
                blurb: "OAuth, SSO, and magic‑link login with customer segmentation.",
                features: ["OAuth 2.0", "SSO integration", "Customer profiles", "Segmentation"]
              },
              {
                title: "Webhooks",
                blurb: "Real‑time events for ERP & 3PLs with retry logic and monitoring.",
                features: ["Real-time events", "Retry logic", "Event filtering", "Monitoring"]
              },
              {
                title: "Search & merch",
                blurb: "AI ranking, facets, semantic suggestions with personalization.",
                features: ["AI-powered search", "Faceted search", "Recommendations", "Personalization"]
              },
            ].map(({ title, blurb, features }) => (
              <article
                key={title}
                class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <h3 class="text-xl font-semibold mb-3 text-primary-700">{title}</h3>
                <p class="text-gray-600 flex-1 mb-4">{blurb}</p>
                <ul class="space-y-2">
                  {features.map((feature) => (
                    <li class="flex items-center gap-2 text-sm text-gray-500">
                      <svg
                        class="w-4 h-4 text-primary-600 flex-none"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enhanced Dev‑UX highlights ─────────────────────────── */}
      <section class="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-6">Built for developers (Coming Soon)</h2>
              <p class="text-lg text-gray-600 mb-8">
                Everything you need to build faster, deploy confidently, and scale effortlessly
              </p>
              <ul class="space-y-4">
                {[
                  "Type‑safe SDKs (TypeScript, Python, Go, PHP)",
                  "CLI scaffolds React, Svelte, Next.js, or Vue",
                  "GraphQL playground & schema explorer",
                  "Local emulator for webhooks & testing",
                  "Edge runtime adapters (Deno Deploy, Vercel, Cloudflare)",
                  "Comprehensive documentation & tutorials",
                  "24/7 developer support & community",
                ].map((t) => (
                  <li class="flex items-start gap-3" key={t}>
                    <svg
                      class="w-5 h-5 text-primary-600 flex-none mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span class="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
              
              <div class="mt-8">
                <a
                  href="/docs"
                  class="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Explore Documentation →
                </a>
              </div>
            </div>

            <div class="bg-gray-900 rounded-2xl p-8 shadow-2xl text-green-400">
              <div class="mb-4">
                <span class="text-green-400 text-sm">Terminal</span>
              </div>
              <code class="text-sm leading-relaxed whitespace-pre-wrap text-white">
{`# Spin up a sandbox store
npx headlesspro@latest init my-store

# Start development server
cd my-store && hp dev

# Deploy to production
hp deploy --env production

# Monitor performance
hp analytics --real-time`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customer Success Section ───────────────────────────── */}
     

      {/* ── Integration Showcase ───────────────────────────────── */}
      <section class="py-20 px-4 md:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Seamless integrations</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and services out of the box
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              {
                name: "Stripe",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.126 1.431-1.72 0-4.516-.924-6.378-2.168l-.9 5.555C6.203 22.95 8.977 24 12.165 24c2.5 0 4.508-.624 5.906-1.813 1.498-1.305 2.158-3.236 2.158-5.732 0-4.128-2.524-5.851-6.594-7.305h.301z"/></svg>`,
                color: "#6772E5",
                description: "Payment Processing"
              },
              {
                name: "PayPal",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M20.067 8.478c.492.315.844.825.844 1.478 0 .653-.352 1.163-.844 1.478-.492.315-1.163.473-1.844.473H16.5v-2.951h1.723c.681 0 1.352.158 1.844.473zM7.5 8.478c.492.315.844.825.844 1.478 0 .653-.352 1.163-.844 1.478-.492.315-1.163.473-1.844.473H4v-2.951h1.656c.681 0 1.352.158 1.844.473zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5v-6h-1.5v6h1.5zm3 0v-6h-1.5v6h1.5z"/></svg>`,
                color: "#00457C",
                description: "Digital Payments"
              },
              {
                name: "Shopify",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M15.637 15.637a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.121zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
                color: "#95BF47",
                description: "E-commerce Platform"
              },
              {
                name: "Salesforce",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#00A1E0",
                description: "CRM & Analytics"
              },
              {
                name: "HubSpot",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#FF7A59",
                description: "Marketing & Sales"
              },
              {
                name: "Zapier",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#FF4A00",
                description: "Workflow Automation"
              },
              {
                name: "Mailchimp",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#FFE01B",
                description: "Email Marketing"
              },
              {
                name: "Klaviyo",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#8B5CF6",
                description: "Customer Data Platform"
              },
              {
                name: "Segment",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#0433FF",
                description: "Customer Data Infrastructure"
              },
              {
                name: "Google Analytics",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
                color: "#F9AB00",
                description: "Web Analytics"
              },
              {
                name: "Facebook",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
                color: "#1877F2",
                description: "Social Media Marketing"
              },
              {
                name: "TikTok",
                svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
                color: "#000000",
                description: "Social Commerce"
              }
            ].map((integration) => (
              <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group">
                <div class="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                     style={`background-color: ${integration.color}20; color: ${integration.color}`}>
                  <div dangerouslySetInnerHTML={{ __html: integration.svg }}></div>
                </div>
                <div class="font-semibold text-gray-700 mb-1">{integration.name}</div>
                <div class="text-xs text-gray-500">{integration.description}</div>
              </div>
            ))}
          </div>
          
          {/* Additional integrations row */}
          <div class="mt-12 text-center">
            <p class="text-gray-600 mb-6">And 50+ more integrations including:</p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              {[
                "WooCommerce", "Magento", "BigCommerce", "Squarespace", "Wix",
                "QuickBooks", "Xero", "NetSuite", "SAP", "Oracle",
                "Slack", "Microsoft Teams", "Discord", "Zoom", "Calendly",
                "Intercom", "Zendesk", "Freshdesk", "Help Scout", "Crisp",
                "AWS", "Google Cloud", "Azure", "Vercel", "Netlify",
                "GitHub", "GitLab", "Bitbucket", "Jira", "Trello"
              ].map((tool) => (
                <span class="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enhanced Compliance & final CTAs ───────────────────── */}
      <section class="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-center text-white px-4 md:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div class="absolute top-10 right-10 w-20 h-20 bg-primary-600 rounded-full opacity-20 animate-float"></div>
        <div class="absolute bottom-10 left-10 w-16 h-16 bg-primary-500 rounded-full opacity-30 animate-float delay-1000"></div>
        
        
      </section>
    </>
  );
}
