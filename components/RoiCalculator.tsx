/** @jsxImportSource preact */
import { h } from "preact";

type Metrics = {
  incrementalRev?: number;
  netBenefit?: number;
  roiPct?: number;
  paybackMonths?: number;
};

type Field = "rev" | "lift" | "plan" | "margin";

type Props = {
  /* controlled inputs */
  monthlyRev: number;
  upliftPct: number;
  planPrice: number;
  marginPct: number;

  /* callbacks from island */
  onChange: (field: Field, value: number) => void;
  onCalc: () => void;

  /* state */
  isValid: boolean;
  results?: Metrics;

  class?: string;
};

export default function RoiCalculator({
  monthlyRev,
  upliftPct,
  planPrice,
  marginPct,
  onChange,
  onCalc,
  isValid,
  results,
  class: cls = "",
}: Props) {
  const fmt = (n?: number) =>
    n == null
      ? "—"
      : n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div class={`space-y-10 ${cls}`}>
      {/* ── Inputs ── */}
      <div class="grid md:grid-cols-2 gap-6">
        {/* Revenue */}
        <NumInput
          label="Current monthly revenue"
          value={monthlyRev}
          min={0}
          step={1000}
          onInput={(v) => onChange("rev", v)}
        />

        {/* Uplift */}
        <RangeInput
          label="Conversion uplift (%)"
          value={upliftPct}
          min={0}
          max={20}
          step={0.1}
          onInput={(v) => onChange("lift", v)}
        />

        {/* Plan */}
        <SelectInput
          label="Plan price"
          value={planPrice}
          onInput={(v) => onChange("plan", v)}
        />

        {/* Margin */}
        <NumInput
          label="Gross margin (%)"
          value={marginPct}
          min={10}
          max={100}
          step={1}
          onInput={(v) => onChange("margin", v)}
        />
      </div>

      {/* ── Button ── */}
      <button
        disabled={!isValid}
        onClick={onCalc}
        class={`w-full md:w-auto px-8 py-4 rounded-full font-semibold shadow-lg transition
          ${
          isValid
            ? "bg-primary-600 text-white hover:bg-primary-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Calculate ROI →
      </button>

      {/* ── Results ── */}
      {results && (
        <div class="grid md:grid-cols-3 gap-6 text-center animate-[fade_0.4s_ease-in]">
          <Metric
            label="Annual incremental revenue"
            value={fmt(results.incrementalRev)}
          />
          <Metric label="Annual net benefit" value={fmt(results.netBenefit)} />
          <Metric
            label="ROI / pay‑back"
            value={`${results.roiPct!.toFixed(0)} % · ${
              results.paybackMonths!.toFixed(1)
            } mo`}
          />
        </div>
      )}
    </div>
  );
}

/* ---------- tiny sub‑components ---------- */
function NumInput(
  { label, value, onInput, ...rest }: {
    label: string;
    value: number;
    onInput: (v: number) => void;
  } & h.JSX.HTMLAttributes<HTMLInputElement>,
) {
  return (
    <label class="block">
      <span class="block text-sm font-medium mb-1">{label}</span>
      <input
        {...rest}
        type="number"
        value={value}
        onInput={(e) =>
          onInput(Number((e.target as HTMLInputElement).value) || 0)}
        class="w-full rounded-lg border-gray-300 focus:ring-primary-600 focus:border-primary-600"
      />
    </label>
  );
}

function RangeInput(
  { label, value, onInput, min, max, step }: {
    label: string;
    value: number;
    onInput: (v: number) => void;
    min: number;
    max: number;
    step: number;
  },
) {
  return (
    <label class="block">
      <span class="block text-sm font-medium mb-1">{label}</span>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onInput={(e) => onInput(Number((e.target as HTMLInputElement).value))}
        class="w-full accent-primary-600"
      />
      <div class="text-sm text-right mt-1">
        {Number.isFinite(value) ? value.toFixed(1) : "0.0"}%
      </div>
    </label>
  );
}

function SelectInput(
  { label, value, onInput }: {
    label: string;
    value: number;
    onInput: (v: number) => void;
  },
) {
  return (
    <label class="block">
      <span class="block text-sm font-medium mb-1">{label}</span>
      <select
        value={value}
        onInput={(e) => onInput(Number((e.target as HTMLSelectElement).value))}
        class="w-full rounded-lg border-gray-300 focus:ring-primary-600 focus:border-primary-600"
      >
        <option value="40000">Starter – $40 k</option>
        <option value="69999">Growth – $69 999</option>
        <option value="0">I already have a plan</option>
      </select>
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div class="bg-gray-50 rounded-xl p-6 shadow-sm">
      <div class="text-sm text-gray-500 mb-1">{label}</div>
      <div class="text-2xl font-bold tabular-nums">{value}</div>
    </div>
  );
}
