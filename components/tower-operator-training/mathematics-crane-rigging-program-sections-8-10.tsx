import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";

const rk = String.raw;

/** Sections 8–10: rigging hardware tension/WLL, mechanical advantage, parts of line / drum torque. */
export function CraneRiggingMathematicsSections8Through10() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <h2 id="section-8-rigging-hardware-math">Section 8 — Rigging hardware mathematics</h2>

      <h4 id="hw-8-1-simple">8.1 What this means (start simple)</h4>
      <p>Lift force does not live in a single sling shackle or hook—it divides across slings, shackles, hooks, and blocks.</p>
      <p>This section answers: how much is on each leg? how do angles change tension? how do we reduce rated capacity consistently?</p>

      <h4 id="hw-8-2-definitions">8.2 Key definitions</h4>
      <dl className="not-prose space-y-4 text-sm">
        <div>
          <dt className="font-semibold text-foreground">Working Load Limit (WLL)</dt>
          <dd className="mt-1 text-muted-foreground">Manufacturer-rated safe maximum for that component in its rated configuration.</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Load distribution</dt>
          <dd className="mt-1 text-muted-foreground">How gross load splits across legs that are actually loaded.</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Effective load-bearing legs</dt>
          <dd className="mt-1 text-muted-foreground">
            Count of legs that truly share load—often &lt; nominal legs on site bridles.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Angle factor / multiplier</dt>
          <dd className="mt-1 text-muted-foreground">Scales tension above the nominal vertical share when slings flatten (same convention as Section 5).</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Reduction factor</dt>
          <dd className="mt-1 text-muted-foreground">Factor (often <KaTeXInline tex={rk`\sin\theta`} /> for angled single-leg tension checks) applied to rated WLL.</dd>
        </div>
      </dl>

      <h4 id="hw-8-3-distribution">8.3 Load distribution</h4>
      <KaTeXBlock tex={rk`\text{Load per leg} = \frac{W}{n}`} />
      <p>
        <KaTeXInline tex={rk`W`} /> = total load; <KaTeXInline tex={rk`n`} /> = effective bearing legs.
      </p>
      <p>
        Example: <KaTeXInline tex={rk`W = 2000\ \mathrm{kg}`} />, 2-leg share →{" "}
        <KaTeXInline tex={rk`2000/2 = 1000\ \mathrm{kg}`} /> per leg <em>before</em> angle effects.
      </p>

      <h4 id="hw-8-4-angle-factor">8.4 Angle factor (real tension)</h4>
      <p>
        With <KaTeXInline tex={rk`\theta`} /> measured from horizontal (as in Section 5):
      </p>
      <KaTeXBlock tex={rk`T = \frac{\text{Load per leg}}{\sin\theta}`} />
      <p>Slings pull sideways as well as up—same vertical support demands higher axial tension when <KaTeXInline tex={rk`\sin\theta`} /> shrinks.</p>
      <p>
        Example: load per leg = <KaTeXInline tex={rk`1000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`30^{\circ}`} />,{" "}
        <KaTeXInline tex={rk`\sin 30^{\circ}=0{,}5`} /> →
      </p>
      <KaTeXBlock tex={rk`T = \frac{1000}{0{,}5} = 2000\ \mathrm{kg}`} />
      <p>Each leg &ldquo;sees&rdquo; <strong>2000 kg</strong> axial tension despite 1000 kg vertical share—a classic angle trap.</p>
      <ul>
        <li>Lower angle → higher tension</li>
        <li>Higher angle → lower tension</li>
      </ul>

      <h4 id="hw-8-5-multipliers">8.5 Using multipliers (faster method)</h4>
      <KaTeXBlock tex={rk`\text{Multiplier} = \frac{1}{\sin\theta};\quad T = (\text{load per leg})\times\text{Multiplier}`} />
      <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-md border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-3 py-2 font-semibold">Angle</th>
              <th className="px-3 py-2 font-semibold">
                <KaTeXInline tex={rk`\sin\theta`} />
              </th>
              <th className="px-3 py-2 font-semibold">Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2"><KaTeXInline tex={rk`30^{\circ}`} /></td>
              <td className="px-3 py-2">0.500</td>
              <td className="px-3 py-2">2.000</td>
            </tr>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2"><KaTeXInline tex={rk`45^{\circ}`} /></td>
              <td className="px-3 py-2">0.707</td>
              <td className="px-3 py-2">1.414</td>
            </tr>
            <tr>
              <td className="px-3 py-2"><KaTeXInline tex={rk`60^{\circ}`} /></td>
              <td className="px-3 py-2">0.866</td>
              <td className="px-3 py-2">1.155</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Example: 500 kg per leg at <KaTeXInline tex={rk`60^{\circ}`} /> → <KaTeXInline tex={rk`500 \times 1{,}155 \approx 577{,}5\ \mathrm{kg}`} /> tension.
      </p>

      <h4 id="hw-8-6-reduction">8.6 Reduction factors (capacity loss)</h4>
      <KaTeXBlock tex={rk`\text{Adjusted WLL} = \mathrm{WLL} \times \text{Reduction factor}`} />
      <p>Often reduction = <KaTeXInline tex={rk`\sin\theta`} /> for the same angled-leg model.</p>
      <p>
        Example: WLL = <KaTeXInline tex={rk`2000\ \mathrm{kg}`} />, reduction = <KaTeXInline tex={rk`0{,}866`} /> → adjusted ≈{" "}
        <KaTeXInline tex={rk`1732\ \mathrm{kg}`} />.
      </p>

      <h4 id="hw-8-7-two-views">8.7 Tension vs reduction (two views of the same risk)</h4>
      <KaTeXBlock tex={rk`\textbf{Scale load: }\ T=\frac{\text{load per leg}}{\sin\theta} \qquad \textbf{Scale capacity: }\ \text{Adj.}=\mathrm{WLL}\cdot\sin\theta`} />
      <p>
        At <KaTeXInline tex={rk`60^{\circ}`} />: <KaTeXInline tex={rk`\sin\theta\approx 0{,}866`} />, <KaTeXInline tex={rk`1/\sin\theta\approx 1{,}155`} />—inflated tension vs shrunk capacity; same go/no-go after you compare consistently.
      </p>

      <h4 id="hw-8-8-worked">8.8 Full worked example</h4>
      <p>
        Load <KaTeXInline tex={rk`2400\ \mathrm{kg}`} />, 2-leg sling, <KaTeXInline tex={rk`30^{\circ}`} />, sling WLL <KaTeXInline tex={rk`1500\ \mathrm{kg}`} />.
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Load per leg: <KaTeXInline tex={rk`2400/2 = 1200\ \mathrm{kg}`} />.</li>
        <li>Tension: <KaTeXInline tex={rk`T = 1200/0{,}5 = 2400\ \mathrm{kg}`} />.</li>
        <li>
          Compare: <KaTeXInline tex={rk`2400 > 1500`} /> → <strong>unsafe</strong> vs WLL.
        </li>
      </ol>
      <p>Reduction check: adjusted WLL <KaTeXInline tex={rk`= 1500 \times 0{,}5 = 750\ \mathrm{kg}`} />; required share 1200 kg exceeds 750 kg effective—same conclusion.</p>

      <h4 id="hw-8-9-patterns">8.9 Patterns you must remember</h4>
      <ul>
        <li>Share load across effective legs first</li>
        <li>Angle multiplies tension (or divides WLL)</li>
        <li>Flatter slings are more demanding</li>
        <li>Final tension vs adjusted WLL is the safety decision</li>
      </ul>

      <h4 id="hw-8-10-mistakes">8.10 Common mistakes</h4>
      <ul>
        <li>Assuming all nominal legs carry equally</li>
        <li>Ignoring angle</li>
        <li>Using catalogue WLL with no reduction</li>
        <li>Forgetting flat angle → high tension</li>
      </ul>

      <h4 id="hw-8-11-final">8.11 Final understanding</h4>
      <ul>
        <li>WLL is the starting limit</li>
        <li>Load splits across effective legs</li>
        <li>Angle scales force or capacity</li>
        <li>Final comparison governs safety</li>
      </ul>

      <h4 id="hw-8-12-big-idea">8.12 The big idea</h4>
      <p>Rigging math tracks how force changes: splitting load, changing angle, adjusting capacity—control those three and you can screen most hardware-limited lifts.</p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-9-mechanical-advantage">Section 9 — Mechanical advantage</h2>

      <h4 id="ma-9-1-simple">9.1 What this means (start simple)</h4>
      <p>Mechanical advantage (MA) describes how pulleys, blocks, and fall lines let you trade longer rope travel for lower effort on the haul line.</p>

      <h4 id="ma-9-2-trade">9.2 The big idea</h4>
      <p>
        <strong>Trade effort for distance.</strong> Pull softer → pull more rope (idealized statement; friction and rope weight complicate it).
      </p>

      <h4 id="ma-9-3-definitions">9.3 Key definitions</h4>
      <ul>
        <li>
          <strong>MA</strong> — <KaTeXInline tex={rk`\mathrm{MA} = \mathrm{Load}/\mathrm{Effort}`} /> (idealized ratio).
        </li>
        <li>
          <strong>Effort</strong> — force on the free end you pull.
        </li>
        <li>
          <strong>Load</strong> — weight to be raised (often grossed up with rigging and rope).
        </li>
        <li>
          <strong>Efficiency η</strong> — accounts for bend losses, friction, sheave condition.
        </li>
        <li>
          <strong>Supporting lines</strong> — rope parts that share the suspended load.
        </li>
        <li>
          <strong>Rope in system</strong> — stored length scales with falls and lift height.
        </li>
        <li>
          <strong>Rope weight</strong> — adds to what the hoist must raise.
        </li>
      </ul>

      <h4 id="ma-9-4-ideal-ma">9.4 Ideal mechanical advantage</h4>
      <KaTeXBlock tex={rk`\mathrm{MA} = \frac{W}{F_{\mathrm{effort}}}\quad\Rightarrow\quad F_{\mathrm{effort}}=\frac{W}{\mathrm{MA}}`} />

      <h4 id="ma-9-5-pulley">9.5 Pulley systems</h4>
      <p>
        Ideal model: <KaTeXInline tex={rk`\mathrm{MA} = n`} /> where <KaTeXInline tex={rk`n`} /> = number of supporting rope parts (count practice per drawing).
      </p>

      <h4 id="ma-9-6-effort">9.6 Effort force</h4>
      <KaTeXBlock tex={rk`F_{\mathrm{effort}} = \frac{W}{\mathrm{MA}},\qquad F_{\mathrm{effort}} = \frac{W}{\mathrm{MA}\cdot\eta}\ \ (\text{with efficiency})`} />

      <h4 id="ma-9-7-distance">9.7 Distance relationship</h4>
      <KaTeXBlock tex={rk`d_{\mathrm{effort}} = \mathrm{MA}\cdot d_{\mathrm{load}}`} />
      <p>More advantage ⇒ more rope speed / length for the same load travel.</p>

      <h4 id="ma-9-8-rope-length">9.8 Rope length in the system</h4>
      <p>Conceptually, total rope movement at the hauling end ≈ MA × load movement; staged rope in the reeving scales with falls and lift height.</p>
      <KaTeXBlock tex={rk`\text{Rope length in system } \approx n \times \text{(characteristic lift height segment)}`} />
      <p>
        Example sketch: lift <KaTeXInline tex={rk`5\ \mathrm{m}`} />, <KaTeXInline tex={rk`\mathrm{MA}=4`} /> → order-of-magnitude <KaTeXInline tex={rk`4\times 5=20\ \mathrm{m}`} /> of rope path in the working falls (layout-dependent).
      </p>

      <h4 id="ma-9-9-rope-weight">9.9 Rope weight (added load)</h4>
      <KaTeXBlock tex={rk`\text{Total load} = \text{Load} + \text{Rigging} + \text{Rope weight};\quad \text{Rope weight} \approx \text{length}\times\text{kg/m}`} />
      <p>
        Example: 20 m at 2 kg/m → <KaTeXInline tex={rk`40\ \mathrm{kg}`} /> added.
      </p>

      <h4 id="ma-9-10-worked">9.10 Full worked example</h4>
      <p>
        Load <KaTeXInline tex={rk`2000\ \mathrm{kg}`} />, MA = 4, <KaTeXInline tex={rk`\eta = 0{,}8`} />, lift <KaTeXInline tex={rk`5\ \mathrm{m}`} />, rope 2 kg/m.
      </p>
      <ol className="list-decimal space-y-2 pl-6 text-sm">
        <li>Rope length (order-of-magnitude): <KaTeXInline tex={rk`4\times 5 = 20\ \mathrm{m}`} />.</li>
        <li>Rope weight: <KaTeXInline tex={rk`20\times 2 = 40\ \mathrm{kg}`} />.</li>
        <li>Total suspended mass (load + rope only here): <KaTeXInline tex={rk`2000+40=2040\ \mathrm{kg}`} />.</li>
        <li>
          Effort (mass-style field number): <KaTeXInline tex={rk`F \approx 2040/(4\times 0{,}8)=2040/3{,}2\approx 637{,}5\ \mathrm{kg}`} /> equivalent—convert to newtons for engineering calcs.
        </li>
      </ol>

      <h4 id="ma-9-11-patterns">9.11 Key patterns</h4>
      <ul>
        <li>More falls → more rope → more rope weight</li>
        <li>Rope weight raises total load and effort</li>
        <li>Higher MA lowers ideal effort but lengthens rope demand</li>
        <li>Efficiency losses always hurt real performance</li>
      </ul>

      <h4 id="ma-9-12-mistakes">9.12 Common mistakes</h4>
      <ul>
        <li>Ignoring rope weight on tall multi-part picks</li>
        <li>Forgetting rope length scales with MA</li>
        <li>Using net load only</li>
        <li>Assuming η = 1</li>
      </ul>

      <h4 id="ma-9-13-final">9.13 Final understanding</h4>
      <ul>
        <li>MA reduces effort in the ideal limit</li>
        <li>Rope length and weight are part of the machine</li>
        <li>η knocks real effort back up</li>
        <li>Model the whole suspended system</li>
      </ul>

      <h4 id="ma-9-14-big-idea">9.14 The big idea</h4>
      <p>You spread work across more rope and distance; the system lowers pull force but adds weight and loss—account for both sides.</p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-10-parts-of-line">Section 10 — Parts of line (reeving)</h2>

      <h4 id="pol-10-1-simple">10.1 What this means (start simple)</h4>
      <p>Hoist rope is reeved through sheaves creating multiple supporting parts of line—load shares across rope segments while the drum converts motor torque into rope pull.</p>

      <h4 id="pol-10-2-big">10.2 The big idea</h4>
      <p>Lifting capability couples: <strong>parts of line</strong>, <strong>efficiency</strong>, and <strong>drum geometry (effective radius)</strong>.</p>

      <h4 id="pol-10-3-definitions">10.3 Key definitions</h4>
      <ul>
        <li>
          <strong>Parts of line (<KaTeXInline tex={rk`n`} />)</strong> — segments supporting the hook load path.
        </li>
        <li>
          <strong>Line tension (<KaTeXInline tex={rk`T`} />)</strong> — pull in each active rope segment (idealized uniform).
        </li>
        <li>
          <strong>Load (<KaTeXInline tex={rk`W`} />)</strong> — include load, rigging, and hook block where applicable:{" "}
          <KaTeXInline tex={rk`W=\text{Load}+\text{Rigging}+\text{Block}`} />.
        </li>
        <li>
          <strong>Efficiency η</strong> — sheave friction and fleet angle effects.
        </li>
        <li>
          <strong>Drum radius r</strong> — moment arm from drum axis to rope centerline on the active layer.
        </li>
        <li>
          <strong>Torque τ</strong> — motor/gearbox couple available at the drum.
        </li>
      </ul>

      <h4 id="pol-10-4-line-tension">10.4 Line tension</h4>
      <KaTeXBlock tex={rk`T=\frac{W}{n}\ \ (\text{ideal});\qquad T=\frac{W}{n\cdot\eta}\ \ (\text{with efficiency})`} />
      <p>More supporting lines → lower ideal tension per rope; friction raises it.</p>

      <h4 id="pol-10-5-drum-torque">10.5 Drum force and torque relationship</h4>
      <KaTeXBlock tex={rk`\tau = F\cdot r \quad\Rightarrow\quad F = \frac{\tau}{r}`} />
      <p>
        For a given available drum torque <KaTeXInline tex={rk`\tau`} />, rope pull <KaTeXInline tex={rk`F`} /> scales <strong>inversely</strong> with effective drum
        radius <KaTeXInline tex={rk`r`} />: smaller wrapping radius → larger line pull; larger radius → smaller line pull.
      </p>

      <h4 id="pol-10-6-drum-size">10.6 Drum size and lifting capacity</h4>
      <p>
        Hoist motors deliver limited torque; changing layer radius changes how that torque appears as rope tension—<strong>geometry sets the force limit</strong>, not a mysterious loss of motor power.
      </p>

      <h4 id="pol-10-7-layers">10.7 Drum layer effect (real crane condition)</h4>
      <KaTeXBlock tex={rk`r_{\mathrm{eff}} \approx r_{\mathrm{drum}} + (\text{layer index})\times d_{\mathrm{rope}}`} />
      <p>First layers wrap on the smallest radius (highest pull for given τ); outer layers increase radius and reduce available pull per the same τ.</p>

      <h4 id="pol-10-8-effect-line">10.8 Effect on line force</h4>
      <p>
        Pattern: <strong>increasing</strong> effective drum radius → <strong>lower</strong> achievable rope pull for fixed τ;
        decreasing radius → higher pull capability (watch other limits).
      </p>

      <h4 id="pol-10-9-combined">10.9 Combined with parts of line</h4>
      <KaTeXBlock tex={rk`T=\frac{W}{n\cdot\eta}`} />
      <p>Rope-part sharing sets tension demand; drum torque sets what the hoist can supply at radius r via <KaTeXInline tex={rk`F=\tau/r`} />.</p>

      <h5 id="pol-worked-example">Worked example</h5>
      <p>
        <KaTeXInline tex={rk`W = 12{,}000\ \mathrm{kg}`} /> (consistent mass units for illustration),{" "}
        <KaTeXInline tex={rk`n = 6`} />, <KaTeXInline tex={rk`\eta = 0{,}85`} />:
      </p>
      <KaTeXBlock tex={rk`T = \frac{12000}{6\cdot 0{,}85} = \frac{12000}{5{,}1} \approx 2353\ \mathrm{kg}`} />
      <p>Convert to force (standard gravity illustration):</p>
      <KaTeXBlock tex={rk`F \approx 2353\times 9{,}81 \approx 23{,}080\ \mathrm{N}`} />
      <p>
        If that line pull is developed at drum radius <KaTeXInline tex={rk`r=0{,}5\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`\tau = F\cdot r \approx 23{,}080\times 0{,}5 \approx 11{,}540\ \mathrm{N\,m}`} />
      <p>
        Doubling drum radius to <KaTeXInline tex={rk`1{,}0\ \mathrm{m}`} /> with the <em>same</em> τ →{" "}
        <KaTeXInline tex={rk`F = \tau/r \approx 11{,}540\ \mathrm{N}`} />—half the available line pull, matching the inverse-radius rule.
      </p>

      <h4 id="pol-10-10-behavior">10.10 Practical crane behavior</h4>
      <ul>
        <li>While hoisting up, rope may build onto larger effective radius → available pull can drop layer-to-layer.</li>
        <li>While lowering, inner layers can increase pull capacity for the same τ.</li>
        <li>Treat charts and LMI limits as authoritative—this section is explanatory math.</li>
      </ul>

      <h4 id="pol-10-11-patterns">10.11 Key patterns</h4>
      <ul>
        <li>More parts of line → lower ideal tension per rope</li>
        <li>Lower η → higher tension demand</li>
        <li>Smaller drum radius (inner layers) → higher F for fixed τ</li>
        <li>Outer layers → larger r → lower F for fixed τ</li>
      </ul>

      <h4 id="pol-10-12-mistakes">10.12 Common mistakes</h4>
      <ul>
        <li>Ignoring radius growth with wraps</li>
        <li>Assuming constant hoist line pull across layers</li>
        <li>Forgetting block + rigging in W</li>
      </ul>

      <h4 id="pol-10-13-final">10.13 Final understanding</h4>
      <ul>
        <li>Load shares across parts of line; friction modifies each segment tension</li>
        <li>Drum torque and radius translate motor effort to rope pull</li>
        <li>Layered rope changes geometry and thus force capability</li>
      </ul>

      <h4 id="pol-10-14-big-idea">10.14 The big idea</h4>
      <p>
        Reeving is not “just more rope”—it is how force is shared, how friction taxes the system, and how drum geometry caps what reaches the hook. The crane does not arbitrarily weaken; <strong>the effective lever arm changes</strong>.
      </p>
    </>
  );
}
