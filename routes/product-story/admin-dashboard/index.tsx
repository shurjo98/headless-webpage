// import { h } from "preact";
// import { Head } from "$fresh/runtime.ts";
// import AdminDashboard from "../../../islands/AdminDashboard.tsx";

// // Feature Showcase Component
// function FeatureShowcase() {
//   const features = [
//     {
//       icon: "📊",
//       title: "Real-time Analytics",
//       description: "Monitor your business performance with live dashboards and instant insights."
//     },
//     {
//       icon: "🛒",
//       title: "Order Management",
//       description: "Process orders, track shipments, and manage customer communications seamlessly."
//     },
//     {
//       icon: "👥",
//       title: "Customer Insights",
//       description: "Understand your customers with detailed profiles and behavior analytics."
//     },
//     {
//       icon: "📦",
//       title: "Inventory Control",
//       description: "Keep track of stock levels, set alerts, and manage product catalogs."
//     }
//   ];

//   return (
//     <div class="grid md:grid-cols-2 gap-8 mt-12">
//       {features.map((feature) => (
//         <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//           <div class="text-4xl mb-4">{feature.icon}</div>
//           <h3 class="text-xl font-bold mb-3">{feature.title}</h3>
//           <p class="text-gray-600">{feature.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// // Benefits Section
// function BenefitsSection() {
//   const benefits = [
//     {
//       metric: "50%",
//       description: "Faster decision making with real-time data"
//     },
//     {
//       metric: "3x",
//       description: "Increase in operational efficiency"
//     },
//     {
//       metric: "24/7",
//       description: "Automated monitoring and alerts"
//     },
//     {
//       metric: "100%",
//       description: "Mobile-responsive design"
//     }
//   ];

//   return (
//     <div class="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 mt-16">
//       <div class="container mx-auto px-4 text-center">
//         <h2 class="text-3xl font-bold mb-12">Why Choose Our Admin Dashboard?</h2>
//         <div class="grid md:grid-cols-4 gap-8">
//           {benefits.map((benefit) => (
//             <div>
//               <div class="text-4xl font-bold mb-2">{benefit.metric}</div>
//               <p class="text-primary-100">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // CTA Section
// function CTASection() {
//   return (
//     <div class="bg-gray-50 py-16">
//       <div class="container mx-auto px-4 text-center">
//         <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
//         <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//           Join thousands of businesses that have revolutionized their operations with our powerful admin dashboard.
//         </p>
//         <div class="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="/contact"
//             class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
//           >
//             Start Free Trial
//             <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </a>
//           <a
//             href="/platform"
//             class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 font-semibold rounded-lg transition-all duration-200"
//           >
//             View Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function AdminDashboardStory() {
//   return (
//     <>
//       <Head>
//         <title>Admin Dashboard - Product Story | YourCompany</title>
//         <meta
//           name="description"
//           content="Discover our powerful admin dashboard that transforms how you manage your business. Real-time analytics, order management, and customer insights in one place."
//         />
//       </Head>

//       {/* Hero Section */}
//       <section class="pt-28 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
//         <div class="container mx-auto px-4 text-center">
//           <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             The Admin Dashboard That
//             <span class="text-primary-600 block">Grows With You</span>
//           </h1>
//           <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
//             Experience the future of business management with our intelligent admin dashboard. 
//             Real-time insights, automated workflows, and powerful analytics all in one beautiful interface.
//           </p>
          
//           {/* Interactive Dashboard Preview */}
//           <AdminDashboard />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section class="py-16">
//         <div class="container mx-auto px-4">
//           <div class="text-center mb-12">
//             <h2 class="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
//             <p class="text-xl text-gray-600">Powerful features designed for modern businesses</p>
//           </div>
//           <FeatureShowcase />
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <BenefitsSection />

//       {/* CTA Section */}
//       <CTASection />
//     </>
//   );
// }
