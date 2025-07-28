/** @jsxImportSource preact */
import { h } from "preact";
import { useState, useMemo } from "preact/hooks";
import RoiCalculator from "../components/RoiCalculator.tsx";

export default function RoiCalculatorIsland() {
  const [rev,    setRev]    = useState(50_000);
  const [lift,   setLift]   = useState(3);
  const [plan,   setPlan]   = useState(40_000);
  const [margin, setMargin] = useState(60);

  const [results, setResults] = useState<null | ReturnType<typeof calc>>(null);

  const isValid = rev > 0 && lift >= 0 && plan >= 0 && margin > 0;

  const onChange = (field: "rev" | "lift" | "plan" | "margin", v: number) => {
    if (field === "rev")    setRev(v);
    if (field === "lift")   setLift(v);
    if (field === "plan")   setPlan(v);
    if (field === "margin") setMargin(v);
  };

  const onCalc = () => {
    if (isValid) setResults(calc(rev, lift, plan, margin));
  };

  return (
    <RoiCalculator
      /* inputs */
      monthlyRev={rev}
      upliftPct={lift}
      planPrice={plan}
      marginPct={margin}
      /* handlers */
      onChange={onChange}
      onCalc={onCalc}
      /* extras */
      isValid={isValid}
      results={results ?? undefined}
    />
  );
}

/* ---------- math ---------- */
function calc(rev: number, lift: number, plan: number, margin: number) {
  const annual   = rev * 12;
  const inc      = annual * (lift / 100);
  const gross    = inc * (margin / 100);
  const benefit  = gross - plan;
  return {
    incrementalRev: inc,
    netBenefit:     benefit,
    roiPct:         plan ? (benefit / plan) * 100 : 0,
    paybackMonths:  plan ? plan / (gross / 12) : 0,
  };
}
