/** @jsxImportSource preact */
import { h } from "preact";
import { useState } from "preact/hooks";

export default function InstallmentCalculator() {
  const [total, setTotal] = useState(10_000);
  const [term,  setTerm]  = useState(12);

  const monthly = total && term ? (total / term).toFixed(0) : "0";

  return (
    <div class="w-full md:w-80 bg-white rounded-3xl shadow-lg p-8">
      <h3 class="text-lg font-semibold mb-4">Example</h3>

      <div class="flex flex-col gap-4">
        {/* total */}
        <label class="flex flex-col">
          <span class="text-sm font-medium mb-1">Project total</span>
          <input
            type="number"
            min="0"
            class="border rounded-lg p-2 focus:outline-primary-600"
            value={total}
            onInput={(e) =>
              setTotal(parseFloat((e.currentTarget as HTMLInputElement).value) || 0)}
          />
        </label>

        {/* term */}
        <label class="flex flex-col">
          <span class="text-sm font-medium mb-1">Term</span>
          <select
            class="border rounded-lg p-2 focus:outline-primary-600"
            value={term}
            onInput={(e) =>
              setTerm(parseInt((e.currentTarget as HTMLSelectElement).value, 10))}
          >
            <option value="12">12 months</option>
            <option value="24">24 months</option>
          </select>
        </label>

        {/* result */}
        <div class="border-t pt-4 text-center">
          <span class="text-sm text-gray-600">From</span>
          <p class="text-3xl font-extrabold text-primary-700">
            ${monthly}<span class="text-lg font-semibold">/mo</span>
          </p>
        </div>
      </div>
    </div>
  );
}
