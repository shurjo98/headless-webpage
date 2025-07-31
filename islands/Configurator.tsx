/** @jsxImportSource preact */
import { useEffect, useMemo, useState } from "preact/hooks";
import FeatureCard, { Feature } from "../components/FeatureCard.tsx";
import Stepper from "../components/Stepper.tsx";
import FloatingHeadline from "../components/FloatingHeadline.tsx";

/* ── types ─────────────────────────────────────────────── */
type Package = {
  key: string;
  label: string;
  desc?: string;
  priceWeb: number;
  priceApp: number;
  defaults: string[];
};

/* ── helpers ───────────────────────────────────────────── */
const fetchJSON = <T,>(u: string) =>
  fetch(u).then((r) => r.json() as Promise<T>);

const HEADLINES = [
  "Choose a base package",
  "Select your web pages",
  "Select your mobile screens",
  "Review & checkout",
] as const;

const STEPS = [
  { title: "Base package" },
  { title: "Web features" },
  { title: "Mobile features" },
  { title: "Review" },
] as const;

/* ── island ────────────────────────────────────────────── */
export default function Configurator() {
  /* state */
  const [feat, setFeat] = useState<{ web: Feature[]; mobile: Feature[] }>({
    web: [],
    mobile: [],
  });
  const [pkgs, setPkgs] = useState<Record<string, Package>>({});
  const [pkgKey, setPkgKey] = useState("starter");
  const [sel, setSel] = useState<Feature[]>([]);
  const [idx, setIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [term, setTerm] = useState<12 | 24>(12);
  const [stackVisible, setStackVisible] = useState(true);
  const stack = expanded ? sel : [...sel].reverse(); // newest first when collapsed

  /* fetch once */
  useEffect(() => {
    fetchJSON<typeof feat>("/api/features").then(setFeat);
    fetchJSON<Package[]>("/api/packages").then((arr) =>
      setPkgs(Object.fromEntries(arr.map((p) => [p.key, p])))
    );
  }, []);

  /* auto‑select package defaults when pkgKey changes */
  useEffect(() => {
    if (!pkgs[pkgKey] || feat.web.length === 0) return;
    const all = [...feat.web, ...feat.mobile];

    const resolve = (k: string, seen = new Set<string>()): string[] => {
      if (seen.has(k)) return [];
      seen.add(k);
      const p = pkgs[k];
      if (!p) return [];
      return p.defaults.flatMap((id) =>
        id.startsWith("@") ? resolve(id.slice(1), seen) : id
      );
    };

    const ids = resolve(pkgKey);
    setSel(ids.map((id) => all.find((f) => f.id === id)!).filter(Boolean));
  }, [pkgKey, pkgs, feat]);

  /* package‑change with fade animation (only on step 0) */
  function handlePkgChange(newKey: string) {
    if (newKey === pkgKey) return;
    if (idx !== 0) {
      setPkgKey(newKey);
      return;
    }
    setStackVisible(false); // fade out
    setTimeout(() => {
      setPkgKey(newKey); // switch defaults
      setStackVisible(true); // fade in
    }, 250); // must match CSS duration
  }

  /* feature toggle */
  const toggle = (f: Feature) =>
    setSel((prev) =>
      prev.some((x) => x.id === f.id)
        ? prev.filter((x) => x.id !== f.id)
        : [...prev, f]
    );

  /* pricing calc */
  const { base, extras, total } = useMemo(() => {
    const b = (pkgs[pkgKey]?.priceWeb ?? 0) + (pkgs[pkgKey]?.priceApp ?? 0);
    const def = pkgs[pkgKey]?.defaults ?? [];
    const ex = sel.filter((f) => !def.includes(f.id)).reduce(
      (s, f) => s + (f.price ?? 0),
      0,
    );
    return { base: b, extras: ex, total: b + ex };
  }, [pkgKey, pkgs, sel]);

  /* ── UI ──────────────────────────────────────────────── */
  return (
    <div class="flex flex-col lg:flex-row gap-10">
      {/* left — card stack / grid */}
      <div
        class={`relative lg:flex-1 cursor-pointer transition-opacity duration-250
          ${stackVisible ? "opacity-100" : "opacity-0"}
          ${expanded ? "max-h-[70vh] overflow-y-auto p-2" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded
          ? (
            /* scrollable grid */
            <div class="grid auto-cols-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {stack.map((f) => (
                <img
                  key={f.id}
                  src={f.img ??
                    `https://images.unsplash.com/random/800x600?${
                      encodeURIComponent(f.title)
                    }&auto=compress`}
                  alt={f.title}
                  class="w-full h-auto rounded-xl shadow-lg"
                />
              ))}
            </div>
          )
          : (
            /* overlapping stack */
            stack.map((f, i) => (
              <img
                key={f.id}
                src={f.img ??
                  `https://images.unsplash.com/random/800x600?${
                    encodeURIComponent(f.title)
                  }&auto=compress`}
                alt={f.title}
                class="rounded-xl shadow-lg absolute transition-transform duration-300"
                style={{
                  width: "280px",
                  height: "180px",
                  left: "50%",
                  top: "15%",
                  transform: `translate(-50%) rotate(${
                    [-4, 5, -6, 8][i % 4]
                  }deg)`,
                  zIndex: stack.length - i,
                }}
              />
            ))
          )}
      </div>

      {/* right — sidebar */}
      <aside class="w-full lg:w-96 space-y-6">
        <Stepper
          steps={STEPS as unknown as { title: string }[]}
          idx={idx}
          setIdx={setIdx}
        />
        <FloatingHeadline text={HEADLINES[idx]} />

        {/* Step 0 — choose package */}
        {idx === 0 && (
          <div class="space-y-4">
            {Object.values(pkgs).map((p) => (
              <button
                key={p.key}
                class={`w-full border rounded-xl p-4 text-left ${
                  p.key === pkgKey
                    ? "border-primary-600 ring ring-primary-100"
                    : "border-gray-300"
                }`}
                onClick={() => handlePkgChange(p.key)}
              >
                <div class="flex justify-between">
                  <span class="font-medium">{p.label}</span>
                  <span class="font-semibold">
                    {p.priceWeb + p.priceApp > 0
                      ? `$${p.priceWeb + p.priceApp}`
                      : "Custom"}
                  </span>
                </div>
                {p.desc && <p class="text-sm text-gray-600 mt-1">{p.desc}</p>}
              </button>
            ))}
          </div>
        )}

        {/* Step 1 — web features */}
        {idx === 1 && (
          <div class="max-h-[60vh] overflow-y-auto space-y-3 pr-1">
            {feat.web.map((f) => (
              <FeatureCard
                key={f.id}
                feature={f}
                selected={sel.some((s) => s.id === f.id)}
                onToggle={() => toggle(f)}
              />
            ))}
          </div>
        )}

        {/* Step 2 — mobile features */}
        {idx === 2 && (
          <div class="max-h-[60vh] overflow-y-auto space-y-3 pr-1">
            {feat.mobile.map((f) => (
              <FeatureCard
                key={f.id}
                feature={f}
                selected={sel.some((s) => s.id === f.id)}
                onToggle={() => toggle(f)}
              />
            ))}
          </div>
        )}

        {/* Step 3 — review */}
        {idx === 3 && (
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Summary</h3>
            <div class="border rounded-xl p-4 bg-gray-50 space-y-2">
              <div class="flex justify-between">
                <span>Base package</span>
                <span>${base}</span>
              </div>
              <div class="flex justify-between">
                <span>Extras</span>
                <span>${extras}</span>
              </div>
              <div class="flex justify-between font-bold text-primary-700">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <label class="block text-sm font-medium mb-1">Spread over</label>
            <select
              class="w-full border rounded-lg p-2"
              value={term}
              onChange={(e) =>
                setTerm(
                  Number((e.target as HTMLSelectElement).value) as 12 | 24,
                )
              }
            >
              <option value={12}>12 months</option>
              <option value={24}>24 months</option>
            </select>

            <p class="text-gray-600">
              From&nbsp;<span class="font-semibold">
                ${(total / term).toFixed(2)}/mo
              </span>
            </p>

            <button 
              class="w-full bg-primary-600 text-white rounded-full py-3 font-semibold hover:bg-primary-700 transition-colors"
              onClick={() => {
                // Prepare checkout data
                const checkoutData = {
                  package: pkgKey,
                  features: sel.map(f => ({
                    id: f.id,
                    title: f.title,
                    desc: f.desc,
                    price: f.price,
                    category: feat.web.some(wf => wf.id === f.id) ? 'web' : 'mobile'
                  })),
                  term: term,
                  total: total
                };
                
                // Encode data for URL
                const encodedData = encodeURIComponent(JSON.stringify(checkoutData.features));
                
                // Redirect to checkout with data
                window.location.href = `/checkout?package=${pkgKey}&features=${encodedData}&term=${term}`;
              }}
            >
              Checkout →
            </button>
          </div>
        )}

        {/* nav buttons */}
        <div class="flex gap-3 pt-4">
          <button
            class="flex-1 border rounded-full py-2 disabled:opacity-40 mb-10"
            disabled={idx === 0}
            onClick={() => setIdx(idx - 1)}
          >
            Back
          </button>
          {idx < 3 && (
            <button
              class="flex-1 bg-primary-600 text-white rounded-full py-2 mb-10"
              onClick={() => setIdx(idx + 1)}
            >
              Next
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
