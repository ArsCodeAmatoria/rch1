import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {MathDidYouKnow, MathKeyIdea, MathTip} from "@/components/tower-operator-training/training-content-callouts";

/** KaTeX source with safe backslashes inside JSX (`\mathrm` ≠ `\r` + `mathrm` in JSX attributes). */
const rk = String.raw;

/**
 * Crane & Rigging Mathematics Program — introductory overview and Section 1 (Foundations and Conversions).
 * Rendered ahead of the operator-training Section 2 module on the mathematics training page.
 */
export function CraneRiggingMathematicsProgramFoundations() {
  return (
    <>
      <p className="not-prose text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Crane &amp; Rigging Mathematics Program
      </p>
      <p className="not-prose text-center text-sm font-medium text-muted-foreground">Mathematics-focused training framework</p>

      <h2 id="crane-rigging-math-program-overview">Program overview</h2>
      <p>
        This program develops mathematical competency required for crane operations and rigging. It progresses from basic numerical skills to
        advanced applied calculations involving geometry, trigonometry, force systems, and crane mechanics.
      </p>
      <p>All sections are strictly focused on quantitative relationships, formulas, and calculations.</p>

      <MathKeyIdea>
        Treat each block below as a field checklist: the goal is to recognise which relationship governs the question (weight? angle? radius? bearing pressure?) before you touch a calculator.
      </MathKeyIdea>

      <h2 id="section-1-foundations-conversions">Section 1 — Foundations and conversions</h2>
      <h3 id="foundations-intro">Mathematics through real understanding</h3>

      <h4 id="foundations-1-1">1.1 What is &ldquo;math&rdquo; in crane &amp; rigging?</h4>
      <p>
        Math is the system used to measure real-world conditions and predict outcomes <em>before</em> a lift happens.
      </p>
      <p>Every lift is controlled by relationships:</p>
      <ul>
        <li>More weight → more force</li>
        <li>More distance → more stress on the crane</li>
        <li>More reach → less lifting capacity</li>
      </ul>
      <p>Math allows you to:</p>
      <ul>
        <li>Plan the lift</li>
        <li>Verify safety</li>
        <li>Prevent overload</li>
      </ul>

      <h5 id="jobsite-reality-basic">Jobsite reality</h5>
      <p>A crane operates based on physical laws, not judgment:</p>
      <ul>
        <li>Increasing load increases force</li>
        <li>Increasing radius increases tipping effect</li>
        <li>Reducing support increases ground pressure</li>
      </ul>
      <p>These relationships are always active, whether calculated or not.</p>

      <MathTip>
        When a lift plan lists a &ldquo;ballpark&rdquo; capacity, ask what was included: hook load only, or rigging, block, bucket, wind factors, and dynamic effects? Missing ingredients is how informal math quietly drifts from the engineered case.
      </MathTip>

      <h5 id="what-you-calculate-basic">What you are actually calculating</h5>
      <p>Even in basic lifts, you are working with:</p>
      <ul>
        <li>Total load weight</li>
        <li>Load distribution through rigging</li>
        <li>Force applied to crane components</li>
        <li>Capacity limits based on geometry</li>
      </ul>

      <h5 id="think-rigger-intro">Think like a rigger</h5>
      <p>If you understand the numbers, you control the lift.</p>
      <p>If you don&apos;t, the lift controls you.</p>

      <h4 id="foundations-1-2">1.2 A short history of rigging math</h4>
      <p>The math used today has been applied for thousands of years.</p>

      <h5 id="history-egypt">Ancient Egypt — Pyramids</h5>
      <p>
        Stone blocks ranged from a few tonnes to over <strong>70 tonnes</strong>. Workers used ramps, sleds, rollers, and rope systems.
      </p>
      <p>They observed:</p>
      <ul>
        <li>Heavier loads required more force</li>
        <li>Steeper ramps increased effort</li>
        <li>Surface friction affected movement</li>
      </ul>
      <p>This is early understanding of force, inclined planes, and mechanical advantage.</p>

      <MathDidYouKnow>
        Teams still move multi-hundred-tonne bridge spans and vessels with walking systems, strand jacks, and skid beaches—the control problem is the same as a pyramid block: balance the centre of gravity, stage the reaction path, and never outrun the friction or stability envelope.
      </MathDidYouKnow>

      <h5 id="history-moai">Easter Island — Moai movement</h5>
      <p>
        Statues weighing up to <strong>~80 tonnes</strong>, likely moved using controlled rocking and rope systems. This required control of balance,
        center of gravity, and stability—core concepts in load control and rigging stability today.
      </p>

      <h5 id="history-parthenon">Parthenon</h5>
      <p>
        Constructed using early cranes and pulley systems. Stones were lifted and positioned precisely—they applied force multiplication, geometry,
        and load distribution.
      </p>

      <h5 id="history-why-matters">Why this matters</h5>
      <p>Modern cranes use hydraulics and steel, but the math is unchanged: force still increases with weight; distance still affects capacity; balance still determines stability.</p>

      <h4 id="foundations-1-3">1.3 Basic arithmetic (the foundation)</h4>
      <p>All rigging math is built on four operations: addition, subtraction, multiplication, and division.</p>

      <MathTip>
        Keep one unit system active per scratch path (e.g. stay in kN until the end, or stay in kg force-equivalents with clear labels). Switching kN ↔ kg mid-stream without writing the conversion is the commonest way two competent checkers disagree.
      </MathTip>

      <h5 id="arith-example-load">Jobsite example — total load</h5>
      <p>4 bundles at 500 kg each; rigging weight = 200 kg.</p>
      <p>
        Step 1: <KaTeXInline tex={rk`4 \times 500 = 2000\ \mathrm{kg}`} />
      </p>
      <p>
        Step 2: <KaTeXInline tex={rk`2000 + 200 = 2200\ \mathrm{kg\ (total)}`} />
      </p>
      <h5 id="arith-what-represents">What this represents</h5>
      <p>This number becomes force acting on the crane, load carried by rigging, and pressure transferred to the ground.</p>

      <h5 id="think-rigger-arith">Think like a rigger</h5>
      <p>Rigging weight <strong>is</strong> part of the load. Ignoring it leads to underestimating total force.</p>

      <blockquote>
        <p>
          <strong>Practice:</strong>
        </p>
        <p>5 plates at 300 kg each + 150 kg rigging = ?</p>
        <p>3600 kg split into 3 equal lifts = ?</p>
        <p className="not-prose mt-4 text-sm text-muted-foreground">
          Answers:{" "}
          <KaTeXInline tex={rk`5 \times 300 = 1500`} />
          {" → "}
          <KaTeXInline tex={rk`1500 + 150 = 1650\ \mathrm{kg}`} />;{" "}
          <KaTeXInline tex={rk`3600 \div 3 = 1200\ \mathrm{kg}`} />.
        </p>
      </blockquote>

      <h4 id="foundations-1-4">1.4 Ratios and proportions</h4>
      <p>Ratios describe how loads are shared.</p>

      <h5 id="ratio-example">Jobsite example</h5>
      <p>
        Load = 1000 kg; 2 sling legs. Each carries <KaTeXInline tex={rk`1000 \div 2 = 500\ \mathrm{kg}`} />.
      </p>
      <h5 id="ratio-why">Why it matters</h5>
      <p>Loads are not always evenly shared. Later, sling angles change how forces are distributed.</p>

      <blockquote>
        <p>
          <strong>Practice:</strong> 4000 kg load shared by 4 points—load per point = ?
        </p>
        <p className="not-prose mt-2 text-sm text-muted-foreground">
          Answer: <KaTeXInline tex={rk`1000\ \mathrm{kg}`} />.
        </p>
      </blockquote>

      <h4 id="foundations-1-5">1.5 Algebra (solving for the unknown)</h4>
      <p>Algebra is used to find missing values in a system.</p>

      <h5 id="algebra-example">Jobsite example</h5>
      <p>
        Total load = 3000 kg; 3 equal sling legs. Let <KaTeXInline tex={rk`x`} /> = load per leg:
      </p>
      <KaTeXBlock tex={rk`3x = 3000 \quad\Rightarrow\quad x = 1000\ \mathrm{kg}`} />

      <h5 id="algebra-why">Why this matters</h5>
      <p>Algebra is used later for sling tension, load moment, wind force, and ground pressure.</p>

      <blockquote>
        <p>
          <strong>Practice:</strong> <KaTeXInline tex={rk`4x = 2000`} />
        </p>
        <p className="not-prose mt-2 text-sm text-muted-foreground">
          Answer: <KaTeXInline tex={rk`x = 500`} />.
        </p>
      </blockquote>

      <h4 id="foundations-1-6">1.6 Unit conversions</h4>
      <p>All values must be in consistent units before calculating.</p>

      <p>
        <strong>Length:</strong>
      </p>
      <KaTeXBlock tex={rk`1\ \mathrm{m} = 3.28\ \mathrm{ft} \qquad 1\ \mathrm{ft} = 0.3048\ \mathrm{m}`} />
      <p>Used for radius and boom length.</p>

      <p>
        <strong>Area:</strong>
      </p>
      <KaTeXBlock tex={rk`1\ \mathrm{m}^2 = 10.76\ \mathrm{ft}^2`} />
      <p>Used for ground bearing.</p>

      <p>
        <strong>Volume:</strong>
      </p>
      <KaTeXBlock tex={rk`1\ \mathrm{m}^3 = 35.3\ \mathrm{ft}^3`} />
      <p>Used for concrete and bulk loads.</p>

      <p>
        <strong>Mass:</strong>
      </p>
      <KaTeXBlock tex={rk`1\ \mathrm{kg} = 2.2\ \mathrm{lb} \qquad 1000\ \mathrm{kg} = 1\ \mathrm{tonne}`} />

      <p>
        <strong>Force:</strong>
      </p>
      <KaTeXBlock tex={rk`1\ \mathrm{kN} = 1000\ \mathrm{N}`} />

      <h5 id="metric-prefixes">
        1.6A Metric prefixes (<KaTeXInline tex={rk`\mathrm{kN}`} />, kV, etc.)
      </h5>
      <p>
        Large numbers are simplified using prefixes. <strong>Kilo</strong> (<KaTeXInline tex={rk`\mathrm{k}`} />) means{" "}
        <KaTeXInline tex={rk`1000`} />.
      </p>

      <p>
        <strong>Force example:</strong>
      </p>
      <KaTeXBlock
        tex={rk`1000\ \mathrm{N} = 1\ \mathrm{kN};\quad 5000\ \mathrm{N} = 5\ \mathrm{kN};\quad 24{,}000\ \mathrm{N} = 24\ \mathrm{kN}`}
      />

      <p>
        <strong>Conversion process</strong> (<KaTeXInline tex={rk`\mathrm{N}`} /> to <KaTeXInline tex={rk`\mathrm{kN}`} />
        ): divide by <KaTeXInline tex={rk`1000`} />.
      </p>
      <KaTeXBlock tex={rk`9810\ \mathrm{N} \div 1000 = 9.81\ \mathrm{kN}`} />

      <p>
        <strong>Reverse</strong> (<KaTeXInline tex={rk`\mathrm{kN}`} /> to <KaTeXInline tex={rk`\mathrm{N}`} />
        ): multiply by <KaTeXInline tex={rk`1000`} />.
      </p>
      <KaTeXBlock tex={rk`7.2\ \mathrm{kN} \times 1000 = 7200\ \mathrm{N}`} />

      <p>
        <strong>Voltage example:</strong>
      </p>
      <KaTeXBlock tex={rk`1000\ \mathrm{V} = 1\ \mathrm{kV};\quad 4800\ \mathrm{V} = 4.8\ \mathrm{kV}`} />

      <p>
        Pattern: divide by <KaTeXInline tex={rk`1000`} /> for the larger <KaTeXInline tex={rk`\mathrm{k}`} />‑unit; multiply by{" "}
        <KaTeXInline tex={rk`1000`} /> for the base unit.
      </p>

      <h5 id="prefix-rigger">Think like a rigger</h5>
      <p>Confusing N and kN creates a 1000× error—severe overload risk.</p>

      <h4 id="foundations-1-7">1.7 Mass vs force (critical concept)</h4>
      <p>Mass and force are not the same.</p>
      <ul>
        <li>
          <strong>Mass:</strong> amount of material.
        </li>
        <li>
          <strong>Force:</strong> effect of gravity acting on that mass.
        </li>
      </ul>

      <h5 id="mass-force-core">Core relationship</h5>
      <KaTeXBlock tex={rk`F = m \times g \qquad (F\text{ force;\ } m\text{ mass;\ } g = 9.81\ \mathrm{m}/\mathrm{s}^2)`} />

      <h5 id="mass-force-example">Example</h5>
      <p>Load = 2000 kg:</p>
      <KaTeXBlock
        tex={rk`F = 2000 \times 9.81 = 19{,}620\ \mathrm{N} \quad\Rightarrow\quad 19{,}620 \div 1000 = 19.62\ \mathrm{kN}`}
      />

      <h5 id="mass-force-interp">Interpretation</h5>
      <p>This is the force applied to the crane—what the structure reacts to.</p>

      <h5 id="shortcut-tonne-kn">Jobsite shortcut</h5>
      <p>
        <KaTeXInline tex={rk`1\ \mathrm{tonne} \approx 9.81\ \mathrm{kN}`} /> (using standard gravity).
      </p>

      <h5 id="think-kn-vs-kg">Think like a rigger</h5>
      <p>Cranes react to force, not just catalog “weight”. Incorrect conversion leads directly to unsafe lifts.</p>

      <h4 id="foundations-1-8">1.8 Full conversion flow</h4>
      <p>Example: Load = 2500 kg.</p>
      <KaTeXBlock tex={rk`2500 \times 9.81 = 24{,}525\ \mathrm{N};\quad 24{,}525 \div 1000 = 24.5\ \mathrm{kN}\ \text{(rounded)}`} />

      <blockquote>
        <p>
          <strong>Practice:</strong> Convert 1800 kg → kN; 3 tonnes → kN.
        </p>
        <div className="not-prose mt-3 space-y-2 text-sm text-muted-foreground">
          <p>
            <KaTeXInline tex={rk`1800 \times 9.81 = 17{,}658\ \mathrm{N} \Rightarrow 17.7\ \mathrm{kN}`} /> (rounded).
          </p>
          <p>
            <KaTeXInline tex={rk`3 \times 9.81 = 29.43\ \mathrm{kN}`} />.
          </p>
        </div>
      </blockquote>

      <h4 id="foundations-1-9">1.9 Why this section matters</h4>
      <p>This section supports future calculations including sling tension, load charts, ground pressure, wind loading, and structural limits.</p>

      <h3 id="final-think-rigger-foundations">Final — think like a rigger</h3>
      <p>Every lift comes down to:</p>
      <ul>
        <li>Weight creating force</li>
        <li>Distance changing leverage</li>
        <li>Equipment resisting that force</li>
      </ul>
      <p>
        Math allows you to predict outcomes—with numbers you can defend on the hook, on the pad, and in the briefing.
      </p>
    </>
  );
}
