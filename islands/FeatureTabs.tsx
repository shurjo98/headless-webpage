// islands/FeatureTabs.tsx
import { useState } from "preact/hooks";

type Feature = {
  label: string;
  title: string;
  description: string;
  items: string[];
  img: string;
};

export default function FeatureTabs() {
  const features: Feature[] = [
    {
      label: "Smart Promotions",
      title: "Automated discount engine",
      description:
        "Intelligent promotion system that applies the right discounts at the right time based on customer behavior and inventory levels.",
      items: [
        "Cart abandonment recovery",
        "Dynamic pricing rules",
        "VIP customer exclusives",
        "Inventory-driven promotions",
      ],
      img: "/images/catalog_management.png",
    },
    {
      label: "Inventory Sync",
      title: "Real-time stock management",
      description:
        "Multi-channel inventory synchronization with intelligent fulfillment routing and automated reorder triggers.",
      items: [
        "Multi-warehouse sync",
        "Optimal order routing",
        "Low stock alerts",
        "Auto-reorder workflows",
      ],
      img: "/images/storefront_design.png",
    },
    {
      label: "Customer Journeys",
      title: "Automated lifecycle management",
      description:
        "Personalized customer experiences from welcome sequences to churn prevention with AI-driven insights.",
      items: ["Welcome automation", "Churn prediction", "Loyalty programs", "Behavioral triggers"],
      img: "/images/analytics_insights.png",
    },
    {
      label: "Returns Processing",
      title: "Streamlined refund automation",
      description:
        "Instant return eligibility checks, automated refund processing, and smart exchange recommendations.",
      items: ["Instant eligibility", "Auto-refunds", "Return labels", "Exchange suggestions"],
      img: "/images/campaign_automation.png",
    },
    {
      label: "Analytics",
      title: "Automation performance insights",
      description:
        "Real-time dashboards showing how your automations are performing and driving revenue growth.",
      items: ["Automation metrics", "ROI tracking", "Performance alerts", "Custom reports"],
      img: "/images/order_fulfillment_small.png",
    },
    {
      label: "Integration Hub",
      title: "Connect everything seamlessly",
      description:
        "Pre-built connectors and webhook automation to integrate with your existing tools and workflows.",
      items: ["Pre-built connectors", "Webhook automation", "API management", "Custom integrations"],
      img: "/images/workflow_automation.png",
    },
  ];

  const [active, setActive] = useState(features[0].label);
  const current = features.find((f) => f.label === active)!;

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 text-center">
          Automation features that drive growth
        </h3>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Product capabilities"
          className="mb-8 sm:mb-12 flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          {features.map(({ label }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${label}`}
                id={`tab-${label}`}
                onClick={() => setActive(label)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition
                  ${isActive
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div
          id={`panel-${current.label}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.label}`}
          className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5"
        >
          {/* Text first on mobile for faster scanning */}
          <div className="order-1 md:order-none p-6 sm:p-8 lg:p-10">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {current.title}
            </h4>
            <p className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6">
              {current.description}
            </p>
            <ul className="space-y-2.5 text-gray-700 list-disc pl-5">
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Image — normalized ratio so it always fits on mobile */}
          <div className="p-5 sm:p-6 md:p-6 bg-surface-100 flex items-center justify-center">
            <div className="w-full h-80 sm:h-96 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={current.img}
                alt={current.label}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
