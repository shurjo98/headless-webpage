// islands/FeatureTabs.tsx
import { h } from "preact";
import { useState } from "preact/hooks";

export default function FeatureTabs() {
  const features = [
    {
      label: "Catalog management",
      title: "Unified catalog orchestration, delivery, and performance.",
      description:
        "Centralize product data, variants, and pricing in one API‑first hub—then publish to web, mobile, marketplaces, and more, all in real time.",
      items: [
        "Central product repository—no more siloed spreadsheets",
        "Composable APIs—deliver to any front end or channel",
        "Live inventory sync—avoid oversells and stockouts",
        "AI‑driven recommendations—surface the right products",
      ],
      img: "/images/catalog_management.png",
    },
    {
      label: "Storefront design",
      title: "Create pixel‑perfect storefronts in minutes.",
      description:
        "Drag‑and‑drop a library of pre‑built modules or build your own with our headless UI toolkit—no heavy dev lift needed.",
      items: [
        "Library of customizable components",
        "Real‑time preview on mobile & web",
        "Theme versioning & rollback",
      ],
      img: "/images/catalog_management.png",
    },
    {
      label: "Analytics & insights",
      title: "Deep‑dive analytics out of the box.",
      description:
        "Get pre‑built dashboards for conversion, AOV, churn, and cohort analysis—plus the raw data API to build whatever you need.",
      items: [
        "Sales & traffic dashboards",
        "Custom report builder",
        "Event‑level data streams",
      ],
      img: "/images/catalog_management.png",
    },

     {
    label: "Campaign automation",
    title: "Automate personalized campaigns at scale.",
    description:
      "Design, schedule, and trigger targeted campaigns across channels based on real‑time customer behavior and lifecycle stage.",
    items: [
      "Behavioral triggers & dynamic segmentation",
      "A/B testing with performance analytics",
      "Cross‑channel orchestration (email, SMS, push)",
    ],
    img: "/images/catalog_management.png",
  },
  {
    label: "Order fulfillment",
    title: "Streamline order fulfillment end‑to‑end.",
    description:
      "Manage picking, packing, shipping, and returns from a single dashboard—speed up delivery and reduce errors.",
    items: [
      "Real‑time inventory sync across warehouses",
      "Batch label printing & carrier integrations",
      "Automated return & exchange workflows",
    ],
    img: "/images/catalog_management.png",
  },
  {
    label: "Workflow automation",
    title: "Automate back‑office workflows.",
    description:
      "Define custom approval chains, notifications, and third‑party integrations to eliminate manual handoffs and keep everything on track.",
    items: [
      "Rule‑based approval & routing",
      "Webhook & API connector library",
      "Audit logs & process reporting",
    ],
    img: "/images/catalog_management.png",
  },
  ];

  const [active, setActive] = useState(features[0].label);
  const current = features.find((f) => f.label === active)!;

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-semibold text-gray-900 mb-10 text-center">
          Explore all capabilities
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map(({ label }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`text-xl font-medium px-4 py-2 rounded-full transition ${
                active === label
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src={current.img}
              alt={current.label}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10">
            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              {current.title}
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              {current.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
