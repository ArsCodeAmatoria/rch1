import {Link} from "@/i18n/navigation";

export function SectionMathematics() {
  return (
    <>
      <h2 id="section-2">Section 2 – Mathematics for Tower Crane Operators</h2>
      <h3 id="module-4">Module 4 – Core Crane Mathematics</h3>
      <p>
        A professional operator does not rely on instinct alone: you <strong>calculate</strong>, you <strong>verify</strong>, you understand{" "}
        <em>why</em> the machine behaves as it does. In this trade, math is not abstract—it is stability, safety, structural integrity, and
        judgment.
      </p>
      <p>
        The law of the lever—<em>moments in balance</em>—governs every tower crane. When you read a{" "}
        <Link href="/tower-cranes/operator-training-program/load-charts-capacity" className="font-medium text-primary no-underline hover:underline">
          load chart (Section 3)
        </Link>
        , you apply the same mechanical logic operators have used for generations, now embedded in CSA and ASME-based practice (
        <Link href="/tower-cranes/operator-training-program/regulatory-standards" className="text-primary no-underline hover:underline">
          regulatory framework
        </Link>
        ).
      </p>
      <p>
        Today&apos;s computers assist—but <strong>do not replace</strong> understanding. Those fundamentals feed directly into chart use,
        rigging geometry, and site communication; see also{" "}
        <Link href="/rigging" className="text-primary no-underline hover:underline">
          rigging topics
        </Link>{" "}
        and{" "}
        <Link href="/redtc/test" className="text-primary no-underline hover:underline">
          REDTC practice questions
        </Link>{" "}
        for trade-style reinforcement.
      </p>

      <h4>Arithmetic Mastery</h4>
      <p>Before advanced crane math, you must master the fundamentals. Arithmetic errors cause real-world incidents. A misplaced decimal point can overload a crane.</p>

      <h4>Fractions, Decimals, and Percentages</h4>
      <p>Operators constantly convert between forms:</p>
      <ul>
        <li>½ tonne = 0.5 tonne = 50%</li>
        <li>¾ = 0.75</li>
        <li>1.25 tonnes = 1,250 kg</li>
      </ul>
      <p>You must be able to:</p>
      <ul>
        <li>Add and subtract mixed numbers</li>
        <li>Convert fractions to decimals quickly</li>
        <li>Calculate percentages of rated capacity</li>
        <li>Estimate mentally for reasonableness</li>
      </ul>
      <p>
        <strong>Capacity Percentage Example:</strong> Rated capacity at radius = 10,000 kg; actual load = 8,500 kg;
        8500 ÷ 10000 = 0.85 = 85%. You are operating at 85% of capacity.
      </p>
      <p>
        Understanding percentage is critical because most engineered lift plans and &ldquo;critical lift&rdquo; thresholds are defined by
        percentage of rated capacity—not raw weight.
      </p>

      <h4>Unit Conversions</h4>
      <p>
        Canadian crane operators work in a metric regulatory environment, but imperial components, American manufacturers, and older
        documentation still appear regularly. You must move between systems without hesitation.
      </p>
      <p>
        <strong>kN to kg:</strong> Load charts often list capacity in kilonewtons (kN), a unit of force. 1 kN ≈ 101.97 kg. Practical field
        approximation: 1 kN ≈ 100 kg. Example: 50 kN × 100 ≈ 5,000 kg (exact value = 5,098 kg). Understanding that kN is a force
        reminds you that gravity is built into the calculation.
      </p>
      <p>
        <strong>kg to lbs:</strong> 1 kg = 2.2046 lbs. Example: 1,000 kg × 2.2 ≈ 2,200 lbs. This conversion becomes critical when working
        with shackles, slings, and hardware rated in pounds.
      </p>
      <p>
        <strong>m to ft:</strong> 1 metre = 3.281 feet. Example: 30 m × 3.28 ≈ 98.4 ft. Radius miscalculations due to unit confusion have
        historically contributed to overload incidents. Unit discipline is professional discipline.
      </p>

      <h4>Algebra for Operators</h4>
      <p>Algebra is simply solving for the unknown value. In crane operation, the unknown is usually radius, load, or allowable moment.</p>
      <p>
        <strong>Solving for Unknown Radius:</strong> Moment = Load × Radius. Rearranged: Radius = Moment ÷ Load. If maximum allowable moment
        is 200 kNm and load is 10 kN: Radius = 200 ÷ 10 = 20 m. This shows directly that radius determines allowable load.
      </p>
      <p>
        <strong>Solving for Unknown Load:</strong> Load = Moment ÷ Radius. As radius increases, allowable load decreases proportionally.
        This is the logic behind every load chart ever printed.
      </p>
      <p>
        Early crane operators used slide rules and manual calculations before electronic load moment indicators existed. Understanding
        algebra reconnects you to that foundational competence.
      </p>

      <h4>Moments and Stability</h4>
      <p>The entire stability of a tower crane revolves around moment.</p>
      <p>Moment (kNm) = Load (kN) × Radius (m)</p>
      <p>Moment represents rotational force about the crane&apos;s base or slew ring.</p>
      <p>Key principles:</p>
      <ul>
        <li>Increasing radius increases overturning force</li>
        <li>Doubling radius doubles moment</li>
        <li>Small radius changes create large structural effects</li>
        <li>Structural components are designed around maximum moment limits</li>
      </ul>
      <p>
        A crane does not fail because it is &ldquo;too heavy.&rdquo; It fails because the moment exceeds structural or stability limits.
      </p>
      <p>
        Modern load moment indicators calculate this continuously. However, understanding the principle allows you to anticipate
        restrictions before alarms activate.
      </p>

      <h4>Trigonometry – Critical for Luffing Cranes</h4>
      <p>
        Flat-top and hammerhead cranes operate with fixed jibs. Luffing cranes introduce variable geometry. Trigonometry becomes
        essential.
      </p>
      <p>Radius = Boom Length × cos(angle); Height = Boom Length × sin(angle)</p>
      <p>As boom angle increases (luffs upward):</p>
      <ul>
        <li>Radius decreases</li>
        <li>Hook height increases</li>
        <li>Capacity increases</li>
      </ul>
      <p>
        Historically, naval artillery and early bridge builders relied on trigonometry to calculate angles and spans. Tower crane
        operators use the same mathematics daily when understanding luffing geometry.
      </p>
      <p>If you understand sine and cosine, you understand how your crane&apos;s working envelope changes dynamically.</p>

      <h4>Sling Angle Formula</h4>
      <p>Rigging mathematics is inseparable from crane mathematics.</p>
      <p>For a two-leg sling: Tension = Load ÷ (2 × cos θ), where θ is the angle from vertical.</p>
      <p>Key implications:</p>
      <ul>
        <li>As sling angle decreases, tension increases dramatically</li>
        <li>At 60° from horizontal (30° from vertical), leg tension nearly doubles</li>
        <li>Low sling angles create hidden overload risk even when crane capacity is sufficient</li>
      </ul>
      <p>
        Many rigging failures historically occurred not because cranes were overloaded—but because sling angle multiplied tension beyond
        rated capacity.
      </p>

      <h4>Wind Load Consideration</h4>
      <p>Wind creates horizontal force on the load, the boom, the tower, and formwork and panel assemblies.</p>
      <p>Basic formula: Wind Force = Pressure × Projected Area</p>
      <p>
        Large flat objects act like sails. Even if the vertical load is within chart capacity, wind can create side loading, increased
        moment, oscillation, and shock loading.
      </p>
      <p>
        Engineering codes evolved significantly after mid-twentieth-century structural failures highlighted the importance of lateral
        wind forces. Modern crane design integrates these lessons—but operators must still exercise judgment in gusting conditions.
      </p>

      <h4>Dynamic Load Amplification</h4>
      <p>Crane charts assume static load conditions. Real lifts are rarely static.</p>
      <p>Dynamic forces occur due to:</p>
      <ul>
        <li>Sudden hoist acceleration or braking</li>
        <li>Load swing</li>
        <li>Rapid slewing</li>
        <li>Tag line release</li>
        <li>Wind gusts</li>
        <li>Two-block events</li>
      </ul>
      <p>
        Dynamic amplification can increase effective loading by 10–30% under normal conditions, and significantly more during shock
        events.
      </p>
      <p>
        Historically, many lifting accidents were attributed not to static overload but to dynamic shock. Smooth operation is not merely
        aesthetic—it is structural preservation.
      </p>

      <h4>Critical Lift Determination</h4>
      <p>A lift becomes critical as it approaches structural limits. Industry guidance commonly defines thresholds such as:</p>
      <ul>
        <li>75% capacity – heightened attention</li>
        <li>85% capacity – engineered review recommended</li>
        <li>90% capacity – formal critical lift procedure</li>
      </ul>
      <p>Critical lifts may require:</p>
      <ul>
        <li>Engineered lift plan</li>
        <li>Wind speed limitations</li>
        <li>Dedicated signal person</li>
        <li>Supervisory oversight</li>
        <li>Reduced operational speeds</li>
      </ul>
      <p>Understanding the mathematics allows you to recognize when routine lifting transitions into engineered lifting.</p>

      <h4>The Professional Standard</h4>
      <p>Mathematics governs stability, structural loading, rigging safety, wind forces, mechanical wear, and human decision-making.</p>
      <p>
        The tower crane operator who understands the numbers behind the machine is operating at a higher professional level. You are not
        merely moving material. You are managing forces, moments, geometry, and structural limits in real time.
      </p>
      <p>
        That knowledge places you in the lineage of engineers and mathematicians who formalized these laws centuries ago. The machine may
        be modern. The mathematics is timeless.
      </p>
    </>
  );
}
