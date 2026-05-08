export function Section9Module95Electrical() {
  return (
    <>
      <h3 id="module-9-5">Module 9.5 – Electrical Hazards</h3>
      <p>
        Overhead conductors share the work envelope with modern cranes. Early electrocutions from boom contact with live lines influenced
        limits of approach and formal electrical hazard regulation. Internationally, Minimum Approach Distance (MAD) principles spread after
        arc-flash and contact fatalities. In Canada, provincial regulators codified MAD; utilities such as BC Hydro provide clearance guidance.
      </p>
      <p>
        In British Columbia, electrical safety is regulated under the Safety Standards Act and OHSR. Technical Safety BC oversees electrical
        legislation for high-voltage systems; WorkSafeBC enforces workplace compliance. Electricity is invisible, instantaneous, and lethal—no
        area is safe without verified planning and control.
      </p>

      <h4>Regulatory Authority</h4>
      <p>
        Technical Safety BC administers provincial electrical safety; WorkSafeBC enforces minimum approach distances under{" "}
        <strong>Part 19</strong> of the OHSR. Utility owners (BC Hydro, municipal providers) maintain independent clearance requirements
        coordinated before crane operation.
      </p>

      <h4>Historical Development of MAD</h4>
      <p>
        By the mid-twentieth century regulators recognized arcing without direct contact. MAD values prevent contact and phase-to-ground arc
        initiation across air gaps—accounting for voltage, arc potential, environment, and worker variability. They are engineered
        buffers—not arbitrary rules.
      </p>

      <h4>Minimum Approach Distances (MAD) — British Columbia</h4>
      <p>The following distances reflect BC regulatory standards based on phase-to-phase voltage. They apply to boom/jib, hoist line, load block, suspended load, tag lines, and any conductive attachment. Measurement is from the nearest energized part to the nearest crane/load point in three dimensions.</p>

      <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[400px] border-collapse text-left text-sm">
          <caption className="mb-2 text-left text-sm font-semibold text-foreground">
            Table 9.5-1 — Minimum Approach Distances
          </caption>
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="p-3 font-semibold">Voltage (phase-to-phase)</th>
              <th className="p-3 font-semibold">Minimum distance</th>
            </tr>
          </thead>
          <tbody className="text-foreground/90">
            <tr className="border-b border-border">
              <td className="p-3">Over 750 V to 75 kV</td>
              <td className="p-3">3 m (10 ft)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Over 75 kV to 250 kV</td>
              <td className="p-3">4.5 m (15 ft)</td>
            </tr>
            <tr>
              <td className="p-3">Over 250 kV to 550 kV</td>
              <td className="p-3">6 m (20 ft)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>If voltage is unknown, assume the higher distance until verified in writing by the utility.</p>

      <h4>Utility Coordination</h4>
      <p>Near overhead or underground conductors: confirm voltage in writing; measure and document clearance; coordinate with utility before work. Utilities may require de-energization, insulating covers, relocation, or engineered encroachment procedure. No operator may rely on visual voltage classification.</p>

      <h4>Dedicated Electrical Hazard Plan</h4>
      <p>
        Shall include: identified voltage levels; applicable MAD; engineered mitigation; spotter assignments; emergency procedures—incorporated
        into the lift plan and pre-task meetings. Absence of documented planning has recurred in fatal crane-to-line incidents.
      </p>

      <h4>Spotter Requirements</h4>
      <p>
        Where clearance is limited but outside MAD, a dedicated electrical spotter may be required: uninterrupted visual monitoring; no
        competing duties; direct communication with operator. Spotters supplement—but do not replace—required separation.
      </p>

      <h4>Critical Rule</h4>
      <p>
        No approach within MAD without written engineered procedure and documented utility coordination. Encroachment requires utility
        authorization, engineered controls, written procedure, and active supervision. Without these, approach is prohibited.
      </p>

      <h4>Wind &amp; Dynamic Considerations</h4>
      <p>
        Wind creates pendulum behavior and boom deflection. Clearance must account for swing amplitude, gusts at tip, line drift, and
        structural flex. Contact often occurs during dynamic movement, not static positioning—MAD must incorporate expected drift.
      </p>

      <h4>Emergency Protocol</h4>
      <p>
        If contact with energized conductor occurs: operator remains in cab if safe; ground personnel stay clear of crane and surrounding soil;
        notify utility and emergency services immediately; do not move crane unless utility instructs. Current can energize structure and soil
        (step potential). If evacuation due to fire: jump clear without simultaneous crane/ground contact; shuffle away to reduce step voltage.
      </p>

      <h4>International &amp; Canadian Context</h4>
      <p>
        Electrical contact remains a leading cause of crane fatalities worldwide. Europe, the U.S., and Canada share engineered separation
        from energized conductors. In Metro Vancouver, overhead distribution often intersects crane envelopes—compliance is routine discipline.
      </p>

      <h4>Professional Standard</h4>
      <p>
        Steel, rope, and loads conduct efficiently. The professional operator must understand: confirmed voltage classification; applicable MAD;
        wind-adjusted dynamic envelope; utility documentation. MAD values are minimums—not targets. Electrical compliance is life preservation.
      </p>
    </>
  );
}
