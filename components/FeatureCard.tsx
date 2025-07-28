/** @jsxImportSource preact */
import { h } from "preact";

export type Feature = {
  id: string;
  title: string;
  desc: string;
  price?: number;
};

type Props = {
  feature: Feature;
  selected: boolean;
  onToggle: () => void;
};

export default function FeatureCard({ feature, selected, onToggle }: Props) {
  return (
    <button
      class={`w-full text-left border rounded-xl p-4 flex justify-between transition
        ${selected ? "border-primary-600 ring ring-primary-100" : "border-gray-300"}`}
      onClick={onToggle}
    >
      <div class="pr-4">
        <h5 class="font-medium">{feature.title}</h5>
        <p class="text-xs text-gray-600 line-clamp-2">{feature.desc}</p>
      </div>

      <span class={`text-sm font-semibold self-start ${
        feature.price ? "" : "text-gray-500"
      }`}>
        {feature.price ? `$${feature.price}` : "Included"}
      </span>
    </button>
  );
}
