import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {MathKeyIdea} from "@/components/tower-operator-training/training-content-callouts";

const rk = String.raw;

/**
 * Crane & Rigging Mathematics — Section 5 (rigging tension) plus Appendices 1–2 (L/H ratios; non-symmetrical rigs).
 */
export function CraneRiggingMathematicsSection5Tension() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <h2 id="section-5-rigging-tension">Section 5 — Rigging tension calculations</h2>

      <h4 id="tension-purpose">Purpose</h4>
      <p>This section develops the ability to:</p>
      <ul>
        <li>Calculate sling tension</li>
        <li>Understand how angles affect force</li>
        <li>Break forces into vertical and horizontal components</li>
        <li>Apply multipliers and reduction factors</li>
        <li>Work forward and backward between load, tension, and capacity</li>
      </ul>

      <h4 id="tension-history-trig">Historical context — trigonometry</h4>
      <p>
        The mathematics used in rigging comes from trigonometry, developed over thousands of years.
      </p>
      <ul>
        <li>
          <strong>Pythagoras</strong> (c. 500 BC): relationships in right triangles—foundation of geometry.
        </li>
        <li>
          <strong>Hipparchus</strong> (c. 150 BC): chord tables (early sine ideas)—often credited as deepening systematic trig.
        </li>
        <li>
          <strong>Aryabhata</strong> (c. 500 AD): formalized sine in forms closer to modern practice.
        </li>
        <li>
          <strong>Al-Khwarizmi</strong> and later Islamic scholars: expanded trig into practical tools for astronomy and engineering.
        </li>
      </ul>
      <p>These developments enable modern riggers to predict angled-sling forces, load sharing, and overload risk.</p>

      <h4 id="tension-two-leg-symmetrical">Two-leg sling system (symmetrical)</h4>
      <p>
        <strong>Tension per leg</strong> (<KaTeXInline tex={rk`W`} /> = total load; <KaTeXInline tex={rk`\theta`} /> measured from horizontal; <KaTeXInline tex={rk`T`} /> =
        tension per sling):
      </p>

      <MathKeyIdea>
        A flatter sling leg (smaller angle measured the way your procedure defines it) increases axial tension in the leg even when the lifted weight is unchanged—always align your sketch, chart, and calculator to the <em>same</em> angle convention.
      </MathKeyIdea>

      <KaTeXBlock tex={rk`T = \frac{W}{2\sin\theta}`} />

      <h5 id="two-leg-vars">Variables</h5>
      <ul>
        <li><KaTeXInline tex={rk`W`} /> = total load</li>
        <li><KaTeXInline tex={rk`\theta`} /> = sling angle from horizontal</li>
        <li><KaTeXInline tex={rk`T`} /> = tension per sling leg</li>
      </ul>

      <p>
        As sling angle decreases (flatter sling relative to horizontal), sling tension rises, vertical lifting efficiency drops, and horizontal forces rise.
      </p>

      <h5 id="two-leg-key-behaviour">Key behaviour (qualitative)</h5>
      <ul>
        <li><KaTeXInline tex={rk`90^{\circ}`} /> → evenly shared compression of vertical component</li>
        <li><KaTeXInline tex={rk`60^{\circ}`} /> → moderate increase in tension multiplier</li>
        <li><KaTeXInline tex={rk`30^{\circ}`} /> → ~each sling approaches full load portion (inspect multipliers)</li>
        <li>Below ~<KaTeXInline tex={rk`30^{\circ}`} /> → rapid multiplier growth (critical zone)</li>
      </ul>

      <h5 id="calculator-field-method">Calculator use (field method)</h5>
      <p>
        <strong>Step 1 — mode:</strong> set <strong>DEG</strong> (degrees).
      </p>
      <p>
        <strong>Step 2 — reference:</strong>
      </p>
      <KaTeXBlock tex={rk`\sin 30^{\circ}=0{,}5,\quad \sin 60^{\circ}\approx 0{,}866,\quad \cos 30^{\circ}\approx 0{,}866`} />

      <p>
        <strong>Step 3 — apply:</strong>
      </p>
      <ul>
        <li>Divide load share by <KaTeXInline tex={rk`\sin\theta`} /> → tension (multiplier <KaTeXInline tex={rk`1/\sin\theta`} />).</li>
        <li>Multiply by <KaTeXInline tex={rk`\sin\theta`} /> → vertical component share.</li>
        <li>Multiply by <KaTeXInline tex={rk`\cos\theta`} /> → horizontal component magnitude.</li>
      </ul>

      <h5 id="angle-multiplier-table">Angle multipliers &amp; reductions</h5>
      <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-md border-collapse text-left text-sm text-foreground [&_th]:text-foreground [&_td]:font-medium [&_td]:text-foreground [&_.katex]:text-foreground!">
          <thead>
            <tr className="border-b border-border bg-muted/50 dark:bg-muted/45">
              <th className="px-3 py-2 font-semibold">Angle</th>
              <th className="px-3 py-2 font-semibold">
                <KaTeXInline tex={rk`\sin\theta`} />
              </th>
              <th className="px-3 py-2 font-semibold">Multiplier <KaTeXInline tex={rk`1/\sin\theta`} /></th>
              <th className="px-3 py-2 font-semibold">Reduction <KaTeXInline tex={rk`\sin\theta`} /></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2 tabular-nums"><KaTeXInline tex={rk`90^{\circ}`} /></td>
              <td className="px-3 py-2 tabular-nums">1.000</td>
              <td className="px-3 py-2 tabular-nums">1.000</td>
              <td className="px-3 py-2 tabular-nums">1.000</td>
            </tr>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2 tabular-nums"><KaTeXInline tex={rk`60^{\circ}`} /></td>
              <td className="px-3 py-2 tabular-nums">0.866</td>
              <td className="px-3 py-2 tabular-nums">1.155</td>
              <td className="px-3 py-2 tabular-nums">0.866</td>
            </tr>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2 tabular-nums"><KaTeXInline tex={rk`45^{\circ}`} /></td>
              <td className="px-3 py-2 tabular-nums">0.707</td>
              <td className="px-3 py-2 tabular-nums">1.414</td>
              <td className="px-3 py-2 tabular-nums">0.707</td>
            </tr>
            <tr>
              <td className="px-3 py-2 tabular-nums"><KaTeXInline tex={rk`30^{\circ}`} /></td>
              <td className="px-3 py-2 tabular-nums">0.500</td>
              <td className="px-3 py-2 tabular-nums">2.000</td>
              <td className="px-3 py-2 tabular-nums">0.500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Interpretation:</strong> multiplier shows how much tension grows vs the ideal vertical leg; reduction shows how much <em>usable</em> sling capacity shrinks at that angle.
      </p>

      <h5 id="key-trig-complement">Key trig relationship</h5>
      <KaTeXBlock tex={rk`\cos\theta = \sin(90^{\circ}-\theta)`} />
      <p>Examples:</p>
      <KaTeXBlock tex={rk`\cos 30^{\circ} = \sin 60^{\circ} \approx 0{,}866;\quad \cos 60^{\circ} = \sin 30^{\circ} = 0{,}5;\quad \cos 45^{\circ} = \sin 45^{\circ} \approx 0{,}707`} />
      <p>
        In a right triangle the two acute angles sum to <KaTeXInline tex={rk`90^{\circ}`} />; which side is &ldquo;opposite&rdquo; vs &ldquo;adjacent&rdquo; depends on which angle you reference.
      </p>
      <p>
        <strong>Rigging:</strong> vertical contribution follows <KaTeXInline tex={rk`\sin\theta`} />; horizontal follows <KaTeXInline tex={rk`\cos\theta`} /> (for the same angle convention). Complementary angles swap the numeric roles of sine and cosine.
      </p>
      <p>
        At <KaTeXInline tex={rk`30^{\circ}`} /> from horizontal: vertical factor <KaTeXInline tex={rk`0{,}5`} />, horizontal <KaTeXInline tex={rk`\approx 0{,}866`} />—much of the leg force can pull sideways into connections and bending.
      </p>

      <h5 id="tension-worked-ex-1">Worked example 1 — kg</h5>
      <p>
        Load = <KaTeXInline tex={rk`1000\ \mathrm{kg}`} />; <KaTeXInline tex={rk`\theta = 60^{\circ}`} />; multiplier ≈ <KaTeXInline tex={rk`1{,}155`} />.
      </p>
      <KaTeXBlock tex={rk`\begin{aligned} &\textbf{Step 1: }\frac{1000}{2}=500\ \mathrm{kg\ per\ leg\ (share)}\\ &\textbf{Step 2: }500 \times 1{,}155 \approx 577{,}5\ \mathrm{kg}\ \text{tension per sling} \end{aligned}`} />

      <h5 id="tension-worked-ex-2">Worked example 2 — kN</h5>
      <p>
        Load ≈ <KaTeXInline tex={rk`10{,}000\ \mathrm{kg} \Rightarrow 100\ \mathrm{kN}`} />; <KaTeXInline tex={rk`30^{\circ}`} />; tension multiplier = <KaTeXInline tex={rk`1/\sin 30^{\circ} = 2`} />.
      </p>
      <KaTeXBlock tex={rk`\frac{100}{2}=50\ \mathrm{kN};\quad 50 \times 2 = 100\ \mathrm{kN}\ \text{per sling}`} />
      <p>
        <strong>Interpretation:</strong> at <KaTeXInline tex={rk`30^{\circ}`} />, each sling&apos;s tension equals the full half-share before multiplier—field teams treat this as a red-flag angle band.
      </p>

      <h4 id="multi-leg-systems">Multi-leg systems</h4>
      <p>
        <strong>Planning assumptions (conservative):</strong> for a 3-leg bridle, often plan as if <strong>two</strong> legs carry the load; for 4-leg, plan for <strong>two or three</strong> legs—uneven lengths, load shift, and slack legs leave legs unloaded.
      </p>

      <h5 id="force-components">Force components from a known leg tension</h5>
      <KaTeXBlock tex={rk`V = T\sin\theta \qquad H = T\cos\theta`} />
      <p>
        Example: <KaTeXInline tex={rk`T = 100\ \mathrm{kN}`} />, <KaTeXInline tex={rk`\theta = 30^{\circ}`} />:
      </p>
      <KaTeXBlock tex={rk`V = 100 \times 0{,}5 = 50\ \mathrm{kN};\quad H = 100 \times 0{,}866 \approx 86{,}6\ \mathrm{kN}`} />
      <p>Vertical lifts the load; horizontal squeezes connections, beams, and hardware.</p>

      <h5 id="capacity-reduction">Capacity reduction method</h5>
      <KaTeXBlock tex={rk`\text{Reduction factor} = \sin\theta;\quad \text{Usable capacity} \approx \text{Rated capacity} \times \sin\theta`} />
      <p>
        Example: sling rated <KaTeXInline tex={rk`1000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`60^{\circ}`} /> → <KaTeXInline tex={rk`1000 \times 0{,}866 = 866\ \mathrm{kg}`} /> usable (for that angle convention and manufacturer rules).
      </p>

      <h5 id="reverse-calculations">Reverse calculations</h5>
      <p>
        <strong>Load from measured tension:</strong>
      </p>
      <KaTeXBlock tex={rk`W = 2T\sin\theta`} />
      <p>
        Example: <KaTeXInline tex={rk`T = 800\ \mathrm{kg}`} />, <KaTeXInline tex={rk`60^{\circ}`} /> →{" "}
        <KaTeXInline tex={rk`W = 2 \times 800 \times 0{,}866 \approx 1385{,}6\ \mathrm{kg}`} />.
      </p>
      <p>
        <strong>Multiplier from reduction:</strong> if reduction = <KaTeXInline tex={rk`0{,}5`} />, multiplier = <KaTeXInline tex={rk`1 \div 0{,}5 = 2`} />.
      </p>
      <p>
        <strong>Max load from sling capacity (symmetric two-leg, quick check):</strong> sling <KaTeXInline tex={rk`1000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`45^{\circ}`} />:
      </p>
      <KaTeXBlock tex={rk`\frac{1000}{1{,}414}\approx 707\ \mathrm{kg\ per-leg share};\quad 707 \times 2 \approx 1414\ \mathrm{kg}\ \text{total load (model-dependent)}`} />

      <h5 id="mixed-units">Mixed unit application</h5>
      <p>Field shortcuts (gravity-rounded):</p>
      <KaTeXBlock tex={rk`1000\ \mathrm{kg} \approx 10\ \mathrm{kN};\quad 10{,}000\ \mathrm{kg} \approx 100\ \mathrm{kN}`} />
      <p>
        Example: <KaTeXInline tex={rk`5000\ \mathrm{kg} \Rightarrow 50\ \mathrm{kN}`} />—then apply the same angle multipliers and division steps in consistent force units.
      </p>

      <h4 id="practical-rules-s5">Practical rules</h4>
      <ol>
        <li>
          <strong>Avoid low angles</strong> — below <KaTeXInline tex={rk`30^{\circ}`} /> is often a critical band for tension growth.
        </li>
        <li>
          <strong>Use multipliers</strong> — faster than re-deriving trig on every pick.
        </li>
        <li>
          <strong>Check both directions</strong> — leg tension and rated capacity after reduction.
        </li>
        <li>
          <strong>Assume fewer legs carry</strong> — especially on site-fabricated bridles.
        </li>
        <li>
          <strong>Watch horizontal force</strong> — often the failure mode at connections, not pure vertical overload.
        </li>
      </ol>

      <hr className="not-prose my-16 border-border" />

      <h2 id="appendix-1-lh-tension-reduction">Appendix 1 — Core relationship: length, height, tension, and reduction</h2>
      <h4 id="appendix-1-purpose">Purpose</h4>
      <p>
        Link measurable rigging dimensions—sling length <KaTeXInline tex={rk`L`} /> (hypotenuse) and vertical height <KaTeXInline tex={rk`H`} />—to tension multiplier and capacity reduction without first writing <KaTeXInline tex={rk`\theta`} />.
      </p>

      <h4 id="appendix-1-ratios">1. The fundamental ratios</h4>
      <p>From the rigging triangle (same angle convention as above):</p>
      <KaTeXBlock tex={rk`\text{Tension multiplier} = \frac{L}{H};\qquad \text{Reduction factor} = \frac{H}{L}`} />
      <p>
        Multiplier scales each leg&apos;s share into true tension; reduction scales rated capacity to usable capacity at that geometry. As <KaTeXInline tex={rk`H`} /> drops (same <KaTeXInline tex={rk`L`} />), multiplier rises and reduction falls.
      </p>
      <p>
        Example: <KaTeXInline tex={rk`L = 10\ \mathrm{m}`} />, <KaTeXInline tex={rk`H = 8{,}66\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`\frac{L}{H} = \frac{10}{8{,}66} \approx 1{,}155;\quad \frac{H}{L} \approx 0{,}866`} />
      <p>Each sling carries ~1.155× its nominal share; the sling operates at ~86.6% of vertical rating (angle-adjusted models).</p>

      <h4 id="appendix-1-inverse">2. Mathematical connection</h4>
      <KaTeXBlock tex={rk`\frac{L}{H} = \frac{1}{H/L}\quad\Rightarrow\quad \text{Multiplier} = \frac{1}{\text{Reduction}}`} />
      <p>They are reciprocals—force growth and capacity loss stay locked together.</p>

      <h4 id="appendix-1-trig-link">3. Connection to trigonometry</h4>
      <KaTeXBlock tex={rk`\sin\theta = \frac{H}{L}\quad\Rightarrow\quad \text{Reduction}=\sin\theta,\ \ \text{Multiplier}=\frac{1}{\sin\theta}`} />
      <p>
        Example <KaTeXInline tex={rk`60^{\circ}`} />: <KaTeXInline tex={rk`\sin 60^{\circ} \approx 0{,}866`} />, multiplier ≈ <KaTeXInline tex={rk`1{,}155`} />.
      </p>

      <h4 id="appendix-1-field-method">4. Practical field method</h4>
      <ol>
        <li>Measure <KaTeXInline tex={rk`L`} /> and <KaTeXInline tex={rk`H`} />.</li>
        <li>
          <KaTeXInline tex={rk`L \div H`} /> → tension multiplier; <KaTeXInline tex={rk`H \div L`} /> → reduction.
        </li>
        <li>Multiply load share by multiplier for tension; multiply sling rating by reduction for quick usable capacity.</li>
      </ol>

      <h4 id="appendix-1-worked-complete">5. Complete worked example</h4>
      <p>
        Total load <KaTeXInline tex={rk`1000\ \mathrm{kg}`} />, two-leg sling, <KaTeXInline tex={rk`L = 10\ \mathrm{m}`} />, <KaTeXInline tex={rk`H = 8{,}66\ \mathrm{m}`} />.
      </p>
      <KaTeXBlock tex={rk`\begin{aligned} &\text{Share: }1000/2=500\ \mathrm{kg}\\ &\text{Multiplier: }10/8{,}66\approx 1{,}155\\ &\text{Tension: }500\times 1{,}155\approx 577{,}5\ \mathrm{kg}\\ &\text{Capacity check: }1000\times 0{,}866=866\ \mathrm{kg} \end{aligned}`} />
      <p>
        Tension per sling ≈ <strong>577.5 kg</strong>; quick reduction check leaves <strong>866 kg</strong> usable on a 1000 kg rated leg at that geometry—system appears within limits for this simplified model (always apply manufacturer WLL rules and rigging plan).
      </p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="appendix-2-non-symmetrical">Appendix 2 — Non-symmetrical sling calculations</h2>
      <h4 id="appendix-2-purpose">Purpose</h4>
      <p>Analyze lifts where leg angles, lengths, or pick geometry differ—objective: tensions, components, and which leg governs.</p>

      <h5 id="appendix-2-step-1">Step 1 — Symmetrical baseline</h5>
      <p>Equal legs, equal angles: load shared evenly—<KaTeXInline tex={rk`T = W/(2\sin\theta)`} /> for the shared angle.</p>

      <h5 id="appendix-2-step-2">Step 2 — What changes on site</h5>
      <p>One leg flattens, one steepens: load share departs from 50/50—steeper angles (higher vertical factor for that leg) vs flatter legs increase tension demand on the flatter leg in typical bridles (always sketch vectors).</p>

      <h5 id="appendix-2-step-3">Step 3 — Equilibrium (must always hold)</h5>
      <KaTeXBlock tex={rk`T_1\sin\theta_1 + T_2\sin\theta_2 = W \qquad \text{(vertical balance)}`} />
      <KaTeXBlock tex={rk`T_1\cos\theta_1 = T_2\cos\theta_2 \qquad \text{(horizontal balance)}`} />
      <p>Upward components must support <KaTeXInline tex={rk`W`} />; horizontal components must cancel or the load walks sideways.</p>

      <h5 id="appendix-2-step-4">Step 4 — Why one leg can dominate</h5>
      <p>
        Compare sine factors: e.g. <KaTeXInline tex={rk`\sin 70^{\circ} \approx 0{,}94`} /> vs <KaTeXInline tex={rk`\sin 30^{\circ} = 0{,}5`} />—leg geometry changes how efficiently each leg carries vertical load; the leg with the smaller vertical factor per unit tension must pull harder to contribute.
      </p>

      <h5 id="appendix-2-step-5">Step 5 — Solving the system</h5>
      <p>From horizontal balance:</p>
      <KaTeXBlock tex={rk`T_1 = T_2 \frac{\cos\theta_2}{\cos\theta_1}`} />
      <p>Substitute into vertical balance to solve for <KaTeXInline tex={rk`T_2`} />, then back-solve <KaTeXInline tex={rk`T_1`} />.</p>

      <h5 id="appendix-2-step-6-shortcut">Step 6 — Direct formulas (shortcut)</h5>
      <KaTeXBlock tex={rk`T_1 = \frac{W\cos\theta_2}{\sin(\theta_1+\theta_2)},\qquad T_2 = \frac{W\cos\theta_1}{\sin(\theta_1+\theta_2)}`} />

      <h5 id="appendix-2-step-7-example">Step 7 — Worked example (foundation case)</h5>
      <p>
        <KaTeXInline tex={rk`W = 1000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`\theta_1 = 30^{\circ}`} />, <KaTeXInline tex={rk`\theta_2 = 60^{\circ}`} />:
      </p>
      <KaTeXBlock tex={rk`\theta_1+\theta_2 = 90^{\circ}\Rightarrow \sin(\theta_1+\theta_2)=1`} />
      <KaTeXBlock tex={rk`T_1 = 1000\cdot \cos 60^{\circ} = 500\ \mathrm{kg};\quad T_2 = 1000\cdot \cos 30^{\circ} \approx 866\ \mathrm{kg}`} />
      <p>
        <strong>Check:</strong> with these formulas, <strong>the leg at <KaTeXInline tex={rk`\theta_2=60^{\circ}`} /> carries the larger tension (~866 kg)</strong>; always label angles on your diagram and confirm they match the formulas you use.
      </p>

      <h5 id="appendix-2-step-8-general">Step 8 — Worked example (general case)</h5>
      <p>
        <KaTeXInline tex={rk`W = 2000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`\theta_1 = 40^{\circ}`} />, <KaTeXInline tex={rk`\theta_2 = 70^{\circ}`} />:
      </p>
      <KaTeXBlock tex={rk`\sin(110^{\circ}) \approx 0{,}9397`} />
      <KaTeXBlock tex={rk`T_1 \approx \frac{2000\cdot \cos 70^{\circ}}{0{,}9397} \approx 728\ \mathrm{kg};\quad T_2 \approx \frac{2000\cdot \cos 40^{\circ}}{0{,}9397} \approx 1630\ \mathrm{kg}`} />
      <p>One leg is heavily loaded—identify it in the lift plan and hardware selection.</p>

      <h5 id="appendix-2-step-9-check">Step 9 — Checking your answer</h5>
      <KaTeXBlock tex={rk`T_1\sin\theta_1 + T_2\sin\theta_2 \stackrel{?}{=} W,\qquad T_1\cos\theta_1 \stackrel{?}{=} T_2\cos\theta_2`} />

      <h5 id="appendix-2-step-10-no-angle">Step 10 — Field form without angles</h5>
      <KaTeXBlock tex={rk`\sin\theta_i=\frac{H_i}{L_i},\qquad \cos\theta_i=\frac{B_i}{L_i}\ \ (\text{horizontal span } B_i\text{ consistent with sketch})`} />
      <p>Vertical equilibrium:</p>
      <KaTeXBlock tex={rk`T_1\frac{H_1}{L_1}+T_2\frac{H_2}{L_2}=W;\qquad \text{Horizontal: }\ T_1\frac{B_1}{L_1}=T_2\frac{B_2}{L_2}`} />

      <h5 id="appendix-2-step-11-measured">Step 11 — Worked ratios (measurements supplied)</h5>
      <p>
        Load <KaTeXInline tex={rk`1200\ \mathrm{kg}`} />. Leg 1: <KaTeXInline tex={rk`L_1=8\ \mathrm{m}`} />, <KaTeXInline tex={rk`H_1=4\ \mathrm{m}`} /> → <KaTeXInline tex={rk`H_1/L_1=0{,}5`} />. Leg 2:{" "}
        <KaTeXInline tex={rk`L_2=6\ \mathrm{m}`} />, <KaTeXInline tex={rk`H_2=5\ \mathrm{m}`} /> → <KaTeXInline tex={rk`H_2/L_2\approx 0{,}833`} />.
      </p>
      <p>
        Solve the horizontal and vertical simultaneous equations above for <KaTeXInline tex={rk`T_1`} /> and <KaTeXInline tex={rk`T_2`} /> once <KaTeXInline tex={rk`B_i`} /> is known from pick geometry (spreadsheet algebra is typical on site plans).
      </p>

      <h5 id="appendix-2-step-12-limit">Step 12 — Extreme case</h5>
      <KaTeXBlock tex={rk`\theta \to 0^{\circ}\ (\text{sling flattening})\quad\Rightarrow\quad\sin\theta \to 0^{+}\quad\Rightarrow\quad T\to \infty\ \ (\text{unbounded tension in idealized model})`} />
      <p>Real rigs bind, slip, or fail before ∞—but the limiting behaviour is why shallow angles are barred in many specs.</p>

      <h5 id="appendix-2-step-13-practical">Step 13 — Practical application</h5>
      <ul>
        <li>Off-center loads, uneven pick points, different leg lengths.</li>
        <li>Shows numerically which leg is overstressed versus symmetric planning assumptions.</li>
      </ul>

      <h3 id="appendix-2-summary">Appendix summary</h3>
      <ul>
        <li>
          <strong>Core rule:</strong> lower vertical factor (<KaTeXInline tex={rk`\sin\theta`} />) ⇒ higher multiplier on that leg&apos;s tension for a given lifted weight.
        </li>
        <li>Load splits are rarely equal outside symmetric mats.</li>
        <li>Vertical and horizontal checks confirm equilibrium.</li>
        <li>Lowest-/least-efficient angle leg usually governs—as shown by comparative tension outputs once angles are plugged.</li>
      </ul>
      <p>
        <strong>Final drill:</strong> if two legs differ geometrically, one always works harder on paper—calculate which and by how much before committing hardware.
      </p>
    </>
  );
}
