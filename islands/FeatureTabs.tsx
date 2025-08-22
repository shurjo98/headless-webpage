// islands/FeatureTabs.tsx
import { h } from "preact";
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
      label: "Catalog",
      title: "One place for all products",
      description:
        "Add products, variants, and prices once. We keep everything in sync across your store and channels.",
      items: [
        "No more spreadsheets",
        "Publish to web, mobile, marketplaces",
        "Live inventory updates",
        "Smart product recommendations",
      ],
      img: "/images/catalog_management.png",
    },
    {
      label: "Storefront",
      title: "Build your store visually",
      description:
        "Start with ready-made blocks. Drag, drop, and publish—no heavy dev work.",
      items: [
        "Customizable sections",
        "See changes on phone & desktop",
        "Save versions and roll back",
      ],
      img: "/images/storefront_design.png",
    },
    {
      label: "Analytics",
      title: "Know what’s working",
      description:
        "Dashboards for sales, traffic, and customers. Create simple custom reports when you need them.",
      items: ["Sales & traffic views", "Custom reports", "Event export"],
      img: "/images/analytics_insights.png",
    },
    {
      label: "Campaigns",
      title: "Send the right message automatically",
      description:
        "Set triggers once—emails, SMS, or push go out based on customer actions.",
      items: ["Behavior-based triggers", "Easy A/B tests", "Email, SMS, push"],
      img: "/images/campaign_automation.png",
    },
    {
      label: "Fulfillment",
      title: "Ship faster with fewer errors",
      description:
        "Manage picking, packing, shipping, and returns from one place.",
      items: ["Inventory sync", "Batch label printing", "Easy returns & exchanges"],
      img: "/images/order_fulfillment_small.png",
    },
    {
      label: "Workflows",
      title: "Automate the busywork",
      description:
        "Create simple rules and approvals. Connect tools with webhooks and APIs.",
      items: ["Rule-based steps", "Webhook/API connectors", "Activity logs"],
      img: "/images/workflow_automation.png",
    },
  ];

  const [active, setActive] = useState(features[0].label);
  const current = features.find((f) => f.label === active)!;

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 text-center">
          Everything you need to sell
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
