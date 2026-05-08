import {Link} from "@/i18n/navigation";

export function Section17LoadHandlingSwingControl() {
  return (
    <>
      <h2 id="section-17">Section 17 – Load Handling, Swing Control, and Structural Deflection</h2>

      <h3 id="section-17-purpose">Purpose</h3>
      <p>
        Tower cranes lift on <strong>flexible ropes</strong>—loads respond to gravity, inertia, wind, and elasticity. Height and radius amplify motion;
        abrupt handling drives incidents. Skilled operation pairs smooth control with physics literacy (pendulum, walking loads, COG, dynamics,
        wind sail, communication)—consistent with <cite>CSA Z248</cite> and <cite>ASME B30.3</cite>.
      </p>
      <p>
        Reinforce math in{" "}
        <Link href="/tower-cranes/operator-training-program/mathematics" className="font-medium text-primary no-underline hover:underline">
          Section 2 – Mathematics
        </Link>
        , rigging geometry in{" "}
        <Link href="/rigging" className="text-primary no-underline hover:underline">
          rigging topics
        </Link>
        , site overlap in{" "}
        <Link href="/tower-cranes/operator-training-program/overlap-right-of-way" className="text-primary no-underline hover:underline">
          Section 8 – Overlap &amp; right of way
        </Link>
        , and signals/ground interface in{" "}
        <Link href="/tower-cranes/operator-training-program/public-safety-traffic-emergency" className="text-primary no-underline hover:underline">
          Section 18 – Public safety &amp; traffic
        </Link>
        .
      </p>

      <h3 id="module-17-1">Module 17.1 – Basic Load Dynamics</h3>
      <p>
        Suspended loads do not follow the crane instantly—inertia resists acceleration; when the crane stops, the load continues until tension and
        gravity restore equilibrium—<strong>swing</strong>. Triggers include trolley or slewing, gusts, shock starts/stops, poor rigging symmetry, or
        shifting contents in buckets.
      </p>
      <p>
        Control strategy: <strong>smooth</strong> acceleration and deceleration; coordinate hoist, trolley, and slew; communicate continuously;
        watch wind on large sail areas. Skilled operators <em>predict</em> motion before it grows—proactive, not only reactive.
      </p>

      <h3 id="module-17-2">Module 17.2 – The Pendulum Effect</h3>
      <p>
        The hook is the effective pivot; the hoist line and rigging form the arm; the load is the mass. Inertia lags the start of crane motion;
        gravity pulls the bob toward vertical—resulting oscillation damps over time unless re-energized by jerky inputs.
      </p>
      <p>
        <strong>Longer line / rigging:</strong> longer pendulum period (slower cycle), but the load can travel farther sideways if swing develops—
        common with deep picks, tall buildings, or spreader bars. Plan extra stabilization time.
      </p>

      <h3 id="module-17-3">Module 17.3 – Catching the Swing</h3>
      <p>
        To reduce swing, <strong>move the trolley toward the swing direction</strong> so the hook traces above the load&rsquo;s arc—increasing line
        tension draws the load back toward vertical by moving the suspension point. You are effectively steering the pivot of the pendulum.
      </p>
      <p>
        <strong>Timing:</strong> moving late or the wrong way worsens oscillation; long lines mean seconds per cycle—observe, predict, then apply
        measured trolley input. Abrupt trolley can add energy—smooth corrections only.
      </p>

      <h3 id="module-17-4">Module 17.4 – Walking the Load</h3>
      <p>
        Instead of single large slew or trolley throws, <strong>walk</strong> the load with small, simultaneous adjustments to hoist, trolley, and
        slew—steady motion across congested sites, into openings, or to floor edges without building large swing arcs.
      </p>
      <p>
        Demands continuous signals and crew awareness—load may pass near structure or people; walking trades speed for control and placement
        accuracy.
      </p>

      <h3 id="module-17-5">Module 17.5 – Concrete Bucket Operations</h3>
      <p>
        Bucket mass decreases as concrete discharges—rope, jib, and tower elastically <strong>unload</strong>. Stored strain returns; the hook and
        bucket can <strong>rise slightly</strong> without an intentional hoist command—normal elastic behavior.
      </p>
      <p>
        Operators expect gradual lightening; make small hoist corrections; avoid aggressive lowering near empty weight that could snatch or spill.
        Coordinate with crew for safe chute and hopper clearance—anticipation beats overcorrection.
      </p>

      <h3 id="module-17-6">Module 17.6 – Structural Deflection of the Jib</h3>
      <p>
        The jib is a cantilever—under load it deflects downward elastically; the mast may lean slightly toward the pick. Heavier pick and longer
        radius increase moment and deflection—all expected within design limits.
      </p>
      <p>
        When load decreases, the jib recovers—the tip lifts slightly. Combined with rope stretch this explains upward bucket motion during pour.
        Deflection is usually elastic (no permanent bend); recognize small hook motion during precision work.
      </p>

      <h3 id="module-17-7">Module 17.7 – Tilting Loads</h3>
      <p>
        Wall panels, asymmetric steel, and similar picks may <strong>rotate until COG hangs under the hook</strong>—tilt changes sling angles and
        tension. Contents or assemblies can shift mid-lift.
      </p>
      <p>
        Use <strong>test lifts</strong> inches off the ground to confirm stability; adjust rigging or hook position before height; maintain radio
        contact and readiness to stop.
      </p>

      <h3 id="module-17-8">Module 17.8 – Center of Gravity</h3>
      <p>
        COG is the point where total weight balances. Hook plumb over COG yields a level, stable lift; offset hook causes tilt or rotation until COG
        centers under the pick point—sometimes violently at breakout.
      </p>
      <p>
        Uniform shapes simplify prediction; built-up assemblies may not—use drawings, estimates, and test lifts. Adjust sling points, lengths, or
        lifting beams to manage COG before committing to full travel.
      </p>

      <h3 id="module-17-9">Module 17.9 – Dynamic Load Effects</h3>
      <p>
        Dynamic forces exceed static weight during acceleration, deceleration, swing at bottom of arc, and wind gusts—spiking rope tension and
        structural stress. Causes: fast trolley or slew stops, two-blocking swing energy into the line, snag, or gust.
      </p>
      <p>
        <strong>Mitigation:</strong> gradual control inputs; control swing before it amplifies; respect chart and environmental limits. Chronic
        harsh operation accelerates wear and fatigue.
      </p>

      <h3 id="module-17-10">Module 17.10 – Wind Effects on Load Handling</h3>
      <p>
        Wind speed often increases with height. Broad panels, decking, formwork, and empty buckets create <strong>sail area</strong>—lateral force,
        drift, rotation, and added dynamic swing. Angled rope under lateral load increases effective hoist tension; moment from wind force × radius
        adds to demand on structure (e.g. overturning contribution at the load).
      </p>
      <p>
        A common pressure approximation is <em>P</em> ≈ 0.613 <em>V</em>² N/m² with <em>V</em> in m/s (approximate; see project engineering).
        Multiply by exposed area and drag behavior for order-of-magnitude lateral force. Manufacturers and <cite>CSA Z248</cite> set operational and
        out-of-service wind limits—monitor anemometer; stop lifting and secure loads when exceeded; weathervane out of service per manual.
      </p>
      <p>
        LMIs compute moment from weight and radius; sophisticated systems may incorporate wind or conservative margins—do not ignore visible load
        instability.
      </p>

      <h3 id="module-17-11">Module 17.11 – Communication Between Operator and Riggers</h3>
      <p>
        Confused signals cause incidents. <strong>One designated signalperson</strong> directs the operator; anyone may give emergency stop.
        Standard hand signals when in sight; radio when blind or distant—call sign, concise commands, read-backs for critical moves.
      </p>
      <p>
        Blind lifts: signalperson maintains continuous observation and talk-through. Multi-crane jobs: dedicated channels, lift path coordination,
        anti-collision discipline. Tight placements need incremental &ldquo;nudge&rdquo; commands for hoist, trolley, and slew together.
      </p>

      <h3 id="section-17-summary">Section summary</h3>
      <p>
        Loads pendulate—master smooth control, catching and walking, elasticity in rope and jib, COG and dynamics, wind sail, and single-chain
        communication. These habits keep tower lifting predictable on dense, tall, and wind-exposed sites.
      </p>
    </>
  );
}
