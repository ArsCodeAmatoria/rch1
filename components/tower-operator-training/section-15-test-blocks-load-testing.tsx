export function Section15TestBlocksLoadTesting() {
  return (
    <>
      <h2 id="section-15">Section 15 – Test Blocks, Kickers, and Load Testing</h2>

      <h3 id="section-15-purpose">Purpose</h3>
      <p>
        Test blocks and kicker weights verify structural integrity and safety systems—hoist, LMI, overload protection, brakes, limits—under
        controlled loading. Commissioning, major repair, and calibration depend on known weights. Practice draws on ASME B30.3, CSA Z248, and
        in BC enforcement through WorkSafeBC with certification coordination by BC Crane Safety.
      </p>

      <h3 id="module-15-1">Module 15.1 – Historical Development of Crane Load Testing</h3>
      <p>
        Early twentieth-century testing was informal—lifting site steel or timber—unrepeatable and risky. As cranes grew, inadequate verification
        led to failures. ASME B30 evolved formal guidance; B30.3 structures tower crane inspection and testing. Proof testing at{" "}
        <strong>125% of rated capacity</strong> became widely accepted to confirm margin above service loads. Postwar European OEMs (Liebherr,
        Potain, Wolffkran) advanced modular designs and documentation. Canada adopted CSA Z248; BC urban growth (e.g. Vancouver high-rise from
        the 1970s) increased crane density and oversight—WorkSafeBC and BC Crane Safety now frame commissioning including load testing.
      </p>

      <h3 id="module-15-2">Module 15.2 – Definition of Test Blocks</h3>
      <p>
        Engineered weights with <strong>known mass</strong>, rated lifting points, durable construction (often reinforced concrete or steel),
        and <strong>marked identification</strong>. Verified on certified scales or by calculation; markings and records follow the block through
        commissioning, post-repair tests, and overload system checks. Improvised weights are unacceptable—inaccurate mass invalidates LMI
        calibration and can create unsafe belief in system performance.
      </p>

      <h3 id="module-15-3">Module 15.3 – Static Load Testing</h3>
      <p>
        <strong>Static proof test</strong> (~<strong>125% rated load</strong> at test configuration): rig known weight, hoist clear, hold
        suspended, observe structure and brakes with minimal slewing/trolley to limit dynamics. Verifies strength of tower, pins, jib
        connections, brake hold, foundation/ballast, overall load path. Elastic deflection is expected; <strong>permanent deformation</strong>,
        instability, brake slip, or safety device failure = out of service until corrected. 125% confirms margin above chart while avoiding
        needless whole-crane overstress. Component proofs (hooks, some rigging) may use higher percentages per applicable standard—whole-crane
        commissioning typically stays at 125%.
      </p>

      <h3 id="module-15-4">Module 15.4 – Dynamic Load Testing</h3>
      <p>
        After successful static test, <strong>dynamic</strong> testing uses ~<strong>110% rated</strong> load while operating hoist, trolley,
        slew, and combined motions—evaluates drives, brakes, controls, limits under working-like conditions. Jerk, vibration, delayed brakes, or
        bad controls warrant investigation. Dynamic always follows static; together they cover strength and operability.
      </p>

      <h3 id="module-15-5">Module 15.5 – Daily Limit Testing</h3>
      <p>
        Electronic LMI and overload paths should be checked on a routine basis per manufacturer and site program—often using a known weight
        near rated to confirm warnings/cutouts. Operators remove cranes from service for inaccurate LMI, late alarms, erratic displays, or faulty
        overload devices until qualified technicians correct calibration.
      </p>

      <h3 id="module-15-6">Module 15.6 – Kicker Weights</h3>
      <p>
        A <strong>kicker</strong> is a secondary mass rigged to the primary test block but <strong>grounded</strong> initially; as the main
        block is hoisted slightly, the kicker lifts off, adding ~<strong>5% or 10%</strong> of rated load incrementally. This finesse-tests overload
        threshold without slamming structure with a large sudden overload. Referenced in CSA Z248 / ASME B30.3 practice; BC oversight as above.
      </p>

      <h3 id="module-15-7">Module 15.7 – Purpose of Kickers</h3>
      <p>
        Confirms LMI and overload devices trip at the correct moment. Grounded kicker can also damp swing during outdoor tests so radius—and
        moment—stays stable for reliable readings.
      </p>

      <h3 id="module-15-8">Module 15.8 – Safety Systems Verified by Test Blocks</h3>
      <p>
        <strong>LMI</strong> (load × radius = moment)—warnings, alarms, motion limits. <strong>Overload protection</strong>—hoist/trolley
        restrictions. <strong>Hoist line pull limits</strong> vs. parts of line. <strong>Hoist brake</strong> hold during suspended test. Integrated
        test confirms structure, sensors, and mechanics work together.
      </p>

      <h3 id="module-15-9">Module 15.9 – Test Block Engineering</h3>
      <p>
        Blocks are engineered lifting devices: embedded or welded padeyes, rated shackles, verified weight cast or stamped on block, traceable ID.
        No scrap concrete or unweighed bundles—precision matters for calibration validity.
      </p>

      <h3 id="module-15-10">Module 15.10 – Testing Radius</h3>
      <p>
        Tests are often performed at or near the <strong>maximum moment</strong> condition—commonly long radius where chart capacity is lowest
        and overturning and structural demand peak. Verifies jib, slew ring, mast, tie-ins or base at worst-case chart condition; if safe there,
        shorter radii are generally less demanding structurally for that configuration.
      </p>

      <h3 id="module-15-11">Module 15.11 – Inspection During Load Test</h3>
      <p>
        Under known load, watch mast, jib bolts, ties, slew connection for abnormal movement or noise; elastic deflection OK, permanent not.
        Mechanical: hoist, brake, drum, gearbox. Electrical: LMI accuracy, alarms, limits. Defects mean stop, correct, re-verify.
      </p>

      <h3 id="module-15-12">Module 15.12 – Documentation and Records</h3>
      <p>
        Record block weights, radius, reeving, sequence, structural and system results, weather if relevant, crane ID; PE/inspector sign-off as
        program requires. Records support compliance, certification, maintenance history, and post-incident review.
      </p>

      <h3 id="module-15-13">Module 15.13 – Operator Responsibilities During Testing</h3>
      <p>
        Slow, smooth moves at commanded radius; monitor LMI and alarms; clear communication with test director; report anomalies immediately;
        <strong>never bypass</strong> safety devices to &ldquo;complete&rdquo; a test. Operator skill directly affects validity and safety of the
        lift.
      </p>

      <h3 id="section-15-summary">Section summary</h3>
      <p>
        Accurate test blocks and controlled static/dynamic/kicker procedures verify structure and electronics before service. International and
        Canadian standards, enforced in BC through WorkSafeBC and BC Crane Safety, aim to ensure cranes entering service can perform construction
        lifts within engineered margins for workers and the public.
      </p>
    </>
  );
}
