import {Link} from "@/i18n/navigation";

export function Section6AppendixBWeather() {
  return (
    <>
      <h2 id="appendix-b">Appendix B</h2>
      <h3>Step-by-Step Maintenance, Lubrication &amp; Weather Vane Procedures</h3>
      <p>
        <strong>Operator and Rigger Scope of Work.</strong> This appendix establishes a structured preventive maintenance and lubrication
        program for tower cranes, including <em>weather vane (free slew)</em> positioning during maintenance.
      </p>
      <p>
        Guidance aligns with CSA Z248 and ASME B30.3 under WorkSafeBC. Companion resources:{" "}
        <Link href="/tower-cranes/operator-training-program/inspection-maintenance" className="font-medium text-primary no-underline hover:underline">
          Section 6 – Inspection &amp; maintenance
        </Link>
        , wind and parked configuration in{" "}
        <Link href="/tower-cranes/operator-training-program/load-charts-capacity" className="text-primary no-underline hover:underline">
          Section 3 – Load charts (wind limits)
        </Link>
        , and{" "}
        <Link href="/tower-cranes/operator-training-program/climbing-procedures" className="text-primary no-underline hover:underline">
          Section 5 – Climbing
        </Link>{" "}
        for exposed-height work.
      </p>

      <h4>1. Core Maintenance Principles</h4>
      <ul>
        <li><strong>Preventive, not reactive</strong> – Service before failure.</li>
        <li><strong>Role-specific authority</strong> – Operators and riggers perform only tasks within training and authorization.</li>
        <li><strong>Controlled movement</strong> – The crane must not move unexpectedly during maintenance.</li>
        <li><strong>Documented traceability</strong> – Every lubrication and service action is logged.</li>
        <li><strong>Manufacturer supremacy</strong> – Manufacturer instructions override this appendix where conflicts exist.</li>
      </ul>

      <h4>2. Weather Vane (Free Slew) Control During Maintenance</h4>
      <p>
        <strong>2.1 Fundamental rule:</strong> Weather vane ON = crane rotates freely in wind. Weather vane OFF = slew brake engaged,
        crane locked. During active maintenance, weather vane must be OFF (slew locked) whenever personnel are exposed to moving
        components or working on the crane. When unattended, weather vane must be ON to reduce structural wind loading.
      </p>
      <p>
        <strong>2.2 Weather vane OFF – required during:</strong> Slewing ring greasing; hoist rope lubrication; machinery deck access;
        brake inspection; gearbox oil checks; electrical cabinet servicing; climbing frame inspection; mast bolt verification; hook block
        servicing (best practice). <em>Reason:</em> Free slew can cause unexpected rotation due to gusts—crush and fall hazards.
      </p>
      <p>
        <strong>2.3 Weather vane ON – required when:</strong> Maintenance complete; crane unattended; wind conditions require structural
        load reduction; out of service overnight.
      </p>
      <p>
        <strong>2.4 Post-maintenance procedure:</strong> Remove tools and grease equipment; reinstall guards; confirm all personnel clear;
        park in approved out-of-service position; release slew brake; engage weather vane; log time and status.
      </p>

      <h4>3. Daily Maintenance Tasks</h4>
      <p>
        <strong>3.1 Operator-permitted tasks:</strong> Visual lubrication condition check at drum; observe dryness, rusting, or
        contamination; visually confirm grease at slew gear (if exposed). Weather vane OFF during inspection if deck accessed. Hoist rope
        lubrication (if authorized): weather vane OFF; position rope under minimal tension; apply manufacturer-approved lubricant; log.
        Cab interior: clean controls; inspect HVAC filter (accessible only); confirm LMI visibility.
      </p>
      <p>
        <strong>3.2 Rigger-permitted tasks:</strong> Hook latch lubrication (weather vane prefer OFF); rigging gear maintenance—clean
        slings, store properly, lightly lubricate shackle pins; remove damaged gear; repairs only by qualified facility.
      </p>

      <h4>4. Weekly Maintenance Tasks</h4>
      <p>
        <strong>4.1 Slewing ring greasing (external fittings only):</strong> Weather vane OFF; park crane; engage slew brake; apply
        manufacturer-specified grease; if rotation required, operator performs controlled powered slew—never rely on free slew to
        distribute grease; avoid over-pressurizing fittings; log.
      </p>
      <p>
        <strong>4.2 Trolley rail &amp; wheel inspection:</strong> Remove debris; inspect for metal shavings; confirm smooth travel. Weather
        vane OFF if deck accessed.
      </p>
      <p>
        <strong>4.3 Rigger – lower block cleaning:</strong> Clean block exterior; inspect sheave guards; internal bearing greasing
        typically mechanic-only.
      </p>

      <h4>5. Monthly (Frequent) Maintenance Support</h4>
      <p>
        <strong>5.1 Operator-assisted tasks:</strong> Brake access preparation; machinery deck cleaning; observational support during
        torque checks. Weather vane OFF.
      </p>
      <p>
        <strong>5.2 Technician-required tasks:</strong> Slewing ring bolt torque verification; backlash measurement; brake disassembly;
        gearbox oil sampling; structural bolt sampling; rope replacement; LMI calibration. Weather vane OFF; lockout where applicable.
      </p>

      <h4>6. Rope Maintenance Schedule</h4>
      <p>
        Daily: operator at drum; rigger at hook. Weekly: confirm lubrication; spot corrosion. Monthly: diameter measurement by qualified
        person. Replacement when broken wires exceed criteria; diameter reduction; core failure; severe corrosion. Weather vane OFF during
        any rope servicing.
      </p>

      <h4>7. Post-Climb Maintenance</h4>
      <p>
        After mast insertion: inspect climbing ram for leaks; verify bolt seating; confirm tie-in security; functional testing; grease
        contact surfaces (if specified). Weather vane OFF during inspection; ON only after crane secured out of service.
      </p>

      <h4>8. Seasonal Maintenance (BC Context)</h4>
      <p>
        <strong>Winter:</strong> Cold-rated grease; check water ingress; rope lubrication to prevent freezing corrosion.{" "}
        <strong>Summer / high heat:</strong> Monitor lubricant thinning; brake heat; gearbox oil. Weather vane: OFF during work, ON when
        unattended.
      </p>

      <h4>9. Lockout / Tagout Interface</h4>
      <p>
        If maintenance requires guard removal, electrical access, or brake disassembly: main disconnect locked out; slew brake engaged;
        weather vane disabled. Free slew must never be active during lockout.
      </p>

      <h4>10. Wind Escalation During Maintenance</h4>
      <p>
        If wind increases during servicing: suspend work if unsafe; secure tools; clear deck; engage weather vane if crane must be left
        unattended. Personnel safety overrides structural wind optimization during active work.
      </p>

      <h4>11. Maintenance Logging Requirements</h4>
      <p>
        Every service action must record: date and time; component serviced; lubricant type (if applicable); person performing task;
        weather vane status during work; observed condition; corrective action. Logs must be legible, chronological, retained on site,
        and available for regulatory review.
      </p>

      <h4>12. Summary of Authorized Tasks</h4>
      <p>
        <strong>Operator may:</strong> Inspect structure and drum; lubricate rope (if authorized); grease external slew fittings; perform
        controlled powered slew during greasing; clean cab; assist qualified technician.
      </p>
      <p>
        <strong>Rigger may:</strong> Inspect and lubricate hook latch; maintain rigging gear; inspect lower rope; clean lower block
        exterior; remove defective rigging.
      </p>
      <p>
        <strong>Technician required for:</strong> Brake disassembly; structural torque verification; gearbox service; rope replacement;
        LMI calibration; structural repair.
      </p>

      <h4>Operational Philosophy</h4>
      <p>
        Free slew protects the structure. Locked slew protects people. During maintenance, human safety takes priority—weather vane OFF.
        When unattended, structural wind protection takes priority—weather vane ON. Proper lubrication reduces friction; proper maintenance
        reduces fatigue; proper documentation preserves compliance.
      </p>

      <h3 id="weather-vane-detail">Weather Vane Position During Lubrication and Maintenance</h3>
      <p>
        This section expands Appendix B to define when the crane must be placed in weather vane (free slew) mode and when slew must be
        locked during lubrication and maintenance. Guidance aligns with CSA Z248, consistent with ASME B30.3, and regulatory expectations of
        WorkSafeBC.
      </p>

      <h4>1. Fundamental Principle</h4>
      <p>
        Weather vane mode allows rotation under wind to reduce structural loading. Weather vane ON = crane can move unexpectedly. Weather
        vane OFF = crane locked. During maintenance, uncontrolled movement presents a hazard. The setting depends on the type of work.
      </p>

      <h4>2. Weather Vane OFF (Slew Locked) – Required During Active Maintenance</h4>
      <p>
        Required when personnel are on the machinery deck; accessing grease fittings; guards removed; hands near rotating components;
        work on slew ring; rope lubrication; hook block maintenance directly below crane—free slew could cause sudden rotation, pinch/crush,
        loss of footing, hose whip, structural shock.
      </p>

      <h4>3. Weather Vane ON – When Required</h4>
      <p>
        When maintenance is complete; crane unattended; wind requires structural load reduction; out of service overnight; wind speeds
        approach parked threshold. After maintenance: remove tools; reinstall guards; personnel clear; park in approved position; engage
        weather vane; confirm slew brake released for free rotation; log.
      </p>

      <h4>4. Special Case: Slewing Ring Grease Distribution</h4>
      <p>
        Some manufacturers require slow rotation during greasing. Weather vane remains OFF; operator performs controlled powered slew;
        personnel clear of pinch points; communication maintained. Free slew must never be relied upon to distribute grease.
      </p>

      <h4>5. Wind Threshold Considerations</h4>
      <p>Suspend work if gusts create instability; secure crane; clear deck; re-engage weather vane if crane left unattended.</p>

      <h4>6. Rigger-Specific Considerations</h4>
      <p>
        For hook latch, rope at hook, lower block: weather vane may remain ON only if no overhead work, crane fully out of service, no
        personnel on deck. Best practice: slew brake engaged during active ground-level hook servicing; return to weather vane when
        complete.
      </p>

      <h4>7. Lockout / Tagout</h4>
      <p>Electrical cabinet, brake disassembly, guard removal: main disconnect locked out; slew applied; weather vane disabled. Free slew and lockout must never be active simultaneously.</p>

      <h4>8. Summary Table</h4>
      <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="p-3 font-semibold">Activity</th>
              <th className="p-3 font-semibold">Weather vane</th>
              <th className="p-3 font-semibold">Slew brake</th>
              <th className="p-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody className="text-foreground/90">
            <tr className="border-b border-border">
              <td className="p-3">Rope lubrication</td>
              <td className="p-3">OFF</td>
              <td className="p-3">Engaged</td>
              <td className="p-3">Prevent unexpected rotation</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Slew ring greasing</td>
              <td className="p-3">OFF</td>
              <td className="p-3">Engaged (controlled rotation only)</td>
              <td className="p-3">No free slew</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Machinery deck service</td>
              <td className="p-3">OFF</td>
              <td className="p-3">Engaged</td>
              <td className="p-3">Personnel exposed</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Hook latch lubrication</td>
              <td className="p-3">Prefer OFF</td>
              <td className="p-3">Engaged</td>
              <td className="p-3">Prevent rope movement</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Crane unattended (out of service)</td>
              <td className="p-3">ON</td>
              <td className="p-3">Released</td>
              <td className="p-3">Wind load reduction</td>
            </tr>
            <tr>
              <td className="p-3">Overnight parking</td>
              <td className="p-3">ON</td>
              <td className="p-3">Released</td>
              <td className="p-3">Standard practice</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
