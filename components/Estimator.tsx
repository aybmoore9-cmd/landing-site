"use client";

import { useState } from "react";
import { COVERAGE, HOME_TYPES, estimate, type Coverage, type HomeType } from "@/lib/pricing";

export const ESTIMATE_EVENT = "cmp-estimate";

function Stepper({ label, value, onChange, max }: { label: string; value: number; onChange: (n: number) => void; max: number }) {
  return (
    <div className="est-stepper">
      <span>{label}</span>
      <div>
        <button type="button" aria-label={`Fewer ${label.toLowerCase()}`} onClick={() => onChange(Math.max(0, value - 1))}>−</button>
        <output aria-live="polite">{value}</output>
        <button type="button" aria-label={`More ${label.toLowerCase()}`} onClick={() => onChange(Math.min(max, value + 1))}>+</button>
      </div>
    </div>
  );
}

export default function Estimator() {
  const [home, setHome] = useState<HomeType>("small");
  const [coverage, setCoverage] = useState<Coverage>("front");
  const [bushes, setBushes] = useState(0);
  const [trees, setTrees] = useState(0);
  const [pillars, setPillars] = useState(0);

  const [lo, hi] = estimate({ home, coverage, bushes, trees, pillars });
  const fmt = (n: number) => `$${n.toLocaleString()}`;

  function applyEstimate() {
    const homeLabel = HOME_TYPES.find((h) => h.id === home)?.label;
    const covLabel = COVERAGE.find((c) => c.id === coverage)?.label;
    const parts = [homeLabel, covLabel, bushes && `${bushes} bushes`, trees && `${trees} trees`, pillars && `${pillars} porch pillars`].filter(Boolean);
    const summary = `${fmt(lo)}–${fmt(hi)} (${parts.join(", ")})`;
    window.dispatchEvent(new CustomEvent(ESTIMATE_EVENT, { detail: summary }));
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="estimator">
      <div className="est-controls">
        <fieldset>
          <legend>Type of home</legend>
          <div className="est-options">
            {HOME_TYPES.map((h) => (
              <label key={h.id} className={home === h.id ? "on" : ""}>
                <input type="radio" name="home" value={h.id} checked={home === h.id} onChange={() => setHome(h.id)} />
                {h.label}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>What to light</legend>
          <div className="est-options">
            {COVERAGE.map((c) => (
              <label key={c.id} className={coverage === c.id ? "on" : ""}>
                <input type="radio" name="coverage" value={c.id} checked={coverage === c.id} onChange={() => setCoverage(c.id)} />
                {c.label}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Extras</legend>
          <Stepper label="Bushes" value={bushes} onChange={setBushes} max={20} />
          <Stepper label="Trees up to 10 ft" value={trees} onChange={setTrees} max={6} />
          <Stepper label="Porch pillars" value={pillars} onChange={setPillars} max={8} />
        </fieldset>
      </div>
      <div className="est-result" aria-live="polite">
        <p className="est-label">Estimated price</p>
        <p className="est-price">
          {fmt(lo)} <span>to</span> {fmt(hi)}
        </p>
        <p className="est-note">Includes lights, installation, free bulb fixes, takedown and storage. Your exact price is confirmed after a free measurement.</p>
        <button type="button" className="btn btn-primary btn-block" onClick={applyEstimate}>
          Get my exact quote
        </button>
      </div>
    </div>
  );
}
