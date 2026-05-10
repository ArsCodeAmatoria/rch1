import type {ReactNode} from "react";

import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";

const rk = String.raw;

function Answer({children}: {children: ReactNode}) {
  return (
    <details className="not-prose mt-2 rounded-md border border-border/80 bg-muted/25 px-3 py-2 text-sm">
      <summary className="cursor-pointer font-medium text-foreground">Answer</summary>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </details>
  );
}

/** Section 11 — test weight / proof loads; Section 12 — polygons & circles (swing zones, pads). */
export function CraneRiggingMathematicsSections11And12() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <h2 id="section-11-test-weight">Section 11 — Test weight calculations</h2>

      <h4 id="tw-11-1-simple">11.1 What this means (start simple)</h4>
      <p>
        Before relying on a crane, many programs require a proof test with a <strong>known mass</strong>. That checks capacity, chart alignment, and the full hoisting path—
        but the percentage you read on the test brief applies to the <em>test weight</em>, not everything the hook lifts.
      </p>

      <h4 id="tw-11-2-big">11.2 The big idea</h4>
      <KaTeXBlock tex={rk`W_{\mathrm{test}} = W_{\mathrm{rated}}\times\text{(test factor)} \qquad\text{e.g.\ }1{,}05,\ 1{,}10,\ 1{,}25`} />
      <KaTeXBlock tex={rk`W_{\mathrm{total}} = W_{\mathrm{test}}+W_{\mathrm{block}}+W_{\mathrm{kicker}}+W_{\mathrm{rigging}}`} />
      <p>
        The test percentage attaches to <strong>W_test</strong> only; capacity checks must use everything below the hook unless your procedure
        explicitly says otherwise.
      </p>

      <h4 id="tw-11-3-definitions">11.3 Key definitions</h4>
      <ul>
        <li>
          <strong>Rated load</strong> (<KaTeXInline tex={rk`W_{\mathrm{rated}}`} />) — chart allowable at tested configuration.</li>
        <li>
          <strong>Test load</strong> (<KaTeXInline tex={rk`W_{\mathrm{test}}`} />) — proof mass derived from rated load × factor.</li>
        <li>
          <strong>Block weight</strong> — hook block / overhaul as lifted.</li>
        <li>
          <strong>Kicker weight</strong> — stabilization added to block (percentage of block in simplified models).</li>
        <li>
          <strong>Total load</strong> — crane hook sees the sum above.</li>
      </ul>

      <h4 id="tw-11-4-standard-pct">11.4 Standard test percentages</h4>
      <KaTeXBlock tex={rk`105\%\Rightarrow W_{\mathrm{test}}=W_{\mathrm{rated}}\cdot 1{,}05,\quad 110\%\Rightarrow \cdot 1{,}10,\quad 125\%\Rightarrow \cdot 1{,}25`} />
      <p>
        Example <KaTeXInline tex={rk`W_{\mathrm{rated}} = 10{,}000\ \mathrm{kg}`} />:
      </p>
      <KaTeXBlock tex={rk`1{,}05\rightarrow 10{,}500\ \mathrm{kg};\quad 1{,}10\rightarrow 11{,}000\ \mathrm{kg};\quad 1{,}25\rightarrow 12{,}500\ \mathrm{kg}`} />

      <h4 id="tw-11-5-kickers">11.5 Kickers (block stabilization)</h4>
      <KaTeXBlock tex={rk`W_{\mathrm{kicker}} \approx (0{,}05\ \text{to}\ 0{,}10)\times W_{\mathrm{block}}`} />
      <p>
        Example block <KaTeXInline tex={rk`2000\ \mathrm{kg}`} /> → <KaTeXInline tex={rk`100\ \text{to}\ 200\ \mathrm{kg}`} /> kicker band.
      </p>

      <h4 id="tw-11-6-total">11.6 Total system load (what the crane feels)</h4>
      <KaTeXBlock tex={rk`W_{\mathrm{total}} = W_{\mathrm{test}}+W_{\mathrm{block}}+W_{\mathrm{kicker}}+W_{\mathrm{rigging}}`} />
      <p>
        Example (110% brief): <KaTeXInline tex={rk`W_{\mathrm{test}}=11{,}000`} />, block 2000, kicker 200, rigging 300 →{" "}
        <KaTeXInline tex={rk`W_{\mathrm{total}}=13{,}500\ \mathrm{kg}`} />. The brief still says &ldquo;110%&rdquo; on the test mass; the hook load is larger.
      </p>

      <h4 id="tw-11-7-percent">11.7 Percent calculation (test level check)</h4>
      <KaTeXBlock tex={rk`\% = \frac{W_{\mathrm{test}}}{W_{\mathrm{rated}}}\times 100`} />
      <p>
        Example <KaTeXInline tex={rk`11{,}000/10{,}000\times 100 = 110\%`} />.
      </p>

      <h4 id="tw-11-8-diff">11.8 Difference (accuracy check)</h4>
      <KaTeXBlock tex={rk`\%\,\text{Difference} = \frac{W_{\mathrm{calc}}-W_{\mathrm{actual}}}{W_{\mathrm{actual}}}\times 100`} />
      <p>
        Example: calc <KaTeXInline tex={rk`11{,}000\ \mathrm{kg}`} />, actual <KaTeXInline tex={rk`10{,}800\ \mathrm{kg}`} /> →{" "}
        <KaTeXInline tex={rk`\approx 1{,}85\%`} />.
      </p>

      <h4 id="tw-11-9-worked">11.9 Full worked example</h4>
      <p>Rated 8000 kg, 110% test, block 1500 kg, kicker 5% of block, rigging 200 kg, actual measured test mass 8700 kg.</p>
      <ol className="list-decimal space-y-1 pl-6 text-sm">
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{test}}=8000\cdot 1{,}10=8800\ \mathrm{kg}`} />
        </li>
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{kicker}}=1500\cdot 0{,}05=75\ \mathrm{kg}`} />
        </li>
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{total}}=8800+1500+75+200=10{,}575\ \mathrm{kg}`} />
        </li>
        <li>
          <KaTeXInline tex={rk`8800/8000\times 100=110\%`} />
        </li>
        <li>
          Difference on test mass:{" "}
          <KaTeXInline tex={rk`(8800-8700)/8700\times 100\approx 1{,}15\%`} />
        </li>
      </ol>

      <h4 id="tw-11-10-compare-levels">11.10 Comparing test levels</h4>
      <div className="not-prose my-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-md border-collapse text-left text-sm text-foreground [&_th]:text-foreground [&_td]:font-medium [&_td]:text-foreground [&_.katex]:text-foreground!">
          <thead>
            <tr className="border-b border-border bg-muted/50 dark:bg-muted/45">
              <th className="px-3 py-2 font-semibold">Test level</th>
              <th className="px-3 py-2 font-semibold">
                <KaTeXInline tex={rk`W_{\mathrm{test}}`} /> (rated 8000 kg)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2 tabular-nums">105%</td>
              <td className="px-3 py-2 tabular-nums">8400 kg</td>
            </tr>
            <tr className="border-b border-border/70">
              <td className="px-3 py-2 tabular-nums">110%</td>
              <td className="px-3 py-2 tabular-nums">8800 kg</td>
            </tr>
            <tr>
              <td className="px-3 py-2 tabular-nums">125%</td>
              <td className="px-3 py-2 tabular-nums">10,000 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 id="tw-11-11-field-rule">11.11 Critical field rule</h4>
      <KaTeXBlock tex={rk`W_{\mathrm{test}}=W_{\mathrm{rated}}\cdot\text{factor};\quad W_{\mathrm{total}}=W_{\mathrm{test}}+W_{\mathrm{block}}+W_{\mathrm{kicker}}+W_{\mathrm{rigging}}`} />
      <p>Kickers are not part of the named test percentage—they still hang on the hook and count in gross load.</p>

      <h4 id="tw-11-12-mistakes">11.12 Common mistakes</h4>
      <ul>
        <li>Treating <KaTeXInline tex={rk`W_{\mathrm{test}}`} /> as the only mass the crane lifts</li>
        <li>Omitting kickers, block, or rigging</li>
        <li>Mixing calculated vs measured baselines without stating which</li>
      </ul>

      <h4 id="tw-11-13-final">11.13 Final understanding</h4>
      <ul>
        <li>Test loads scale from rated capacity</li>
        <li>Total hook load includes all suspended components</li>
        <li>Percent verifies test level; difference tracks certification accuracy</li>
      </ul>

      <h4 id="tw-11-14-big">11.14 The big idea</h4>
      <p>You proof the <strong>system</strong>—test plates, block, rigging, kickers—not a single abstract percentage in isolation.</p>

      <h3 id="section-11-practice">Section 11 — Practice questions</h3>
      <p className="text-sm text-muted-foreground">
        Use the same symbols as above. For combined items, percent difference compares <strong>calculated test load</strong> to <strong>actual measured test weight</strong> where both are given.
      </p>

      <h4 className="mt-8">Part A — Test load (percentage)</h4>
      <ol className="list-decimal space-y-6 pl-6">
        <li>
          105% test; <KaTeXInline tex={rk`W_{\mathrm{rated}}=12{,}000\ \mathrm{kg}`} />. Find <KaTeXInline tex={rk`W_{\mathrm{test}}`} />.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{test}}=12{,}000\times 1{,}05=12{,}600\ \mathrm{kg}`} />
          </Answer>
        </li>
        <li>
          110% test; <KaTeXInline tex={rk`W_{\mathrm{rated}}=8500\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{test}}=8500\times 1{,}10=9350\ \mathrm{kg}`} />
          </Answer>
        </li>
        <li>
          125% test; <KaTeXInline tex={rk`W_{\mathrm{rated}}=6400\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{test}}=6400\times 1{,}25=8000\ \mathrm{kg}`} />
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part B — Kicker weight</h4>
      <ol className="list-decimal space-y-6 pl-6" start={4}>
        <li>
          Kicker 5%; block <KaTeXInline tex={rk`1800\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{kicker}}=1800\times 0{,}05=90\ \mathrm{kg}`} />
          </Answer>
        </li>
        <li>
          Kicker 10%; block <KaTeXInline tex={rk`2200\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{kicker}}=2200\times 0{,}10=220\ \mathrm{kg}`} />
          </Answer>
        </li>
        <li>
          Block <KaTeXInline tex={rk`3000\ \mathrm{kg}`} />; kicker range 5–10%.
          <Answer>
            Min <KaTeXInline tex={rk`150\ \mathrm{kg}`} />, max <KaTeXInline tex={rk`300\ \mathrm{kg}`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part C — Total load (full system)</h4>
      <ol className="list-decimal space-y-6 pl-6" start={7}>
        <li>
          110% test; rated <KaTeXInline tex={rk`10{,}000\ \mathrm{kg}`} />, block 2000, kicker 10% of block, rigging 300.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{test}}=11{,}000`} />, kicker 200,{" "}
            <KaTeXInline tex={rk`W_{\mathrm{total}}=11{,}000+2000+200+300=13{,}500\ \mathrm{kg}`} />.
          </Answer>
        </li>
        <li>
          125% test; rated 8000, block 1500, kicker 5%, rigging 250.
          <Answer>
            <KaTeXInline tex={rk`W_{\mathrm{test}}=10{,}000`} />, kicker 75,{" "}
            <KaTeXInline tex={rk`W_{\mathrm{total}}=10{,}000+1500+75+250=11{,}825\ \mathrm{kg}`} />.
          </Answer>
        </li>
        <li>
          Rated 9000, 110%, block 1800, kicker 10%, rigging 400. Find (a) test load (b) total load.
          <Answer>
            (a) <KaTeXInline tex={rk`W_{\mathrm{test}}=9900\ \mathrm{kg}`} />
            {" "}(b) kicker 180,{" "}
            <KaTeXInline tex={rk`W_{\mathrm{total}}=9900+1800+180+400=12{,}280\ \mathrm{kg}`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part D — Percent calculations</h4>
      <ol className="list-decimal space-y-6 pl-6" start={10}>
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{test}}=13{,}200\ \mathrm{kg}`} />, <KaTeXInline tex={rk`W_{\mathrm{rated}}=12{,}000\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`13{,}200/12{,}000\times 100=110\%`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{test}}=11{,}000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`W_{\mathrm{rated}}=10{,}000\ \mathrm{kg}`} />. Identify test level.
          <Answer>
            <KaTeXInline tex={rk`110\%`} /> — 110% test.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part E — Difference (accuracy)</h4>
      <ol className="list-decimal space-y-6 pl-6" start={12}>
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{calc}}=10{,}500`} />, <KaTeXInline tex={rk`W_{\mathrm{actual}}=10{,}200\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`(300/10{,}200)\times 100\approx 2{,}94\%`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`W_{\mathrm{calc}}=12{,}000`} />, <KaTeXInline tex={rk`W_{\mathrm{actual}}=11{,}400\ \mathrm{kg}`} />.
          <Answer>
            <KaTeXInline tex={rk`(600/11{,}400)\times 100\approx 5{,}26\%`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part F — Combined problems</h4>
      <ol className="list-decimal space-y-6 pl-6" start={14}>
        <li>
          110%; rated 7000; block 1200; kicker 5%; rigging 300; actual measured test weight 7600 kg. Find (a)–(d).
          <Answer>
            (a) <KaTeXInline tex={rk`W_{\mathrm{test}}=7700\ \mathrm{kg}`} />
            {" "}(b) kicker <KaTeXInline tex={rk`60\ \mathrm{kg}`} />
            {" "}(c){" "}
            <KaTeXInline tex={rk`W_{\mathrm{total}}=7700+1200+60+300=9260\ \mathrm{kg}`} />
            {" "}(d){" "}
            <KaTeXInline tex={rk`(7700-7600)/7600\times 100\approx 1{,}32\%`} /> (calc vs actual test mass).
          </Answer>
        </li>
        <li>
          125%; rated 9500; block 2000; kicker 10%; rigging 500; actual measured 12,000 kg. Find (a)–(c).
          <Answer>
            (a) <KaTeXInline tex={rk`W_{\mathrm{test}}=9500\times 1{,}25=11{,}875\ \mathrm{kg}`} />
            {" "}(b){" "}
            <KaTeXInline tex={rk`W_{\mathrm{total}}=11{,}875+2000+200+500=14{,}575\ \mathrm{kg}`} />
            {" "}(c) using test-mass check:{" "}
            <KaTeXInline tex={rk`(11{,}875-12{,}000)/12{,}000\times 100\approx -1{,}04\%`} /> (actual test mass heavier than calculation).
          </Answer>
        </li>
        <li>
          Rated 10,000; block 1800; kicker 5%; rigging 400. Total load for 105%, 110%, and 125% (use respective test factors; same kicker rule).
          <Answer>
            Kicker <KaTeXInline tex={rk`90\ \mathrm{kg}`} />; fixed sum block+kicker+rigging = <KaTeXInline tex={rk`2290\ \mathrm{kg}`} />. (a){" "}
            <KaTeXInline tex={rk`10{,}500+2290=12{,}790\ \mathrm{kg}`} /> (b) <KaTeXInline tex={rk`13{,}290\ \mathrm{kg}`} /> (c){" "}
            <KaTeXInline tex={rk`14{,}790\ \mathrm{kg}`} />.
          </Answer>
        </li>
      </ol>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-12-polygons-circles">Section 12 — Polygons and circular calculations</h2>

      <h4 id="pc-12-1-simple">12.1 What this means (start simple)</h4>
      <p>Crane work uses round footprints, swing arcs, tanks, and multi-sided pads—need perimeter/circumference and area consistently.</p>

      <h4 id="pc-12-2-big">12.2 The big idea</h4>
      <p>Perimeter (or circumference) = distance around; area = surface covered inside the boundary.</p>

      <h4 id="pc-12-3-circles">12.3 Circles</h4>
      <KaTeXBlock tex={rk`C = 2\pi r \qquad A = \pi r^2 \qquad (\pi \approx 3{,}1416)`} />
      <p>
        Example <KaTeXInline tex={rk`r = 5\ \mathrm{m}`} /> → <KaTeXInline tex={rk`C \approx 31{,}42\ \mathrm{m}`} />,{" "}
        <KaTeXInline tex={rk`A \approx 78{,}54\ \mathrm{m}^2`} />.
      </p>

      <h4 id="pc-12-4-diameter">12.4 Diameter relationship</h4>
      <KaTeXBlock tex={rk`d = 2r;\qquad C=\pi d;\qquad A=\frac{\pi d^2}{4}`} />

      <h4 id="pc-12-5-applications">12.5 Real crane applications (circles)</h4>
      <ul>
        <li>
          <strong>Swing clearance / hazard zone</strong> — circumference traces the rotating load path at radius <KaTeXInline tex={rk`r`} />.</li>
        <li>
          <strong>Circular loads</strong> — tanks, vessels, rounds.</li>
        <li>
          <strong>Pad coverage</strong> — <KaTeXInline tex={rk`A=\pi r^2`} /> for bearing area approximations when circular.</li>
      </ul>

      <h4 id="pc-12-6-polygons">12.6 Polygons (multi-sided shapes)</h4>
      <p>Regular polygon perimeter:</p>
      <KaTeXBlock tex={rk`P = n\cdot s`} />
      <p>
        Example octagon side <KaTeXInline tex={rk`2\ \mathrm{m}`} />, <KaTeXInline tex={rk`n=8`} /> → <KaTeXInline tex={rk`P=16\ \mathrm{m}`} />.
      </p>

      <h4 id="pc-12-7-polygon-area">12.7 Area of regular polygons</h4>
      <KaTeXBlock tex={rk`A = \tfrac{1}{2} P a`} />
      <p>
        <KaTeXInline tex={rk`a`} /> = apothem (center to flat side). Example <KaTeXInline tex={rk`P=16\ \mathrm{m}`} />, <KaTeXInline tex={rk`a=2\ \mathrm{m}`} /> →{" "}
        <KaTeXInline tex={rk`A=16\ \mathrm{m}^2`} />.
      </p>

      <h4 id="pc-12-8-approx">12.8 Approximating circles with polygons</h4>
      <p>Many sides → shape approaches a circle—useful for intuition and mesh-style estimates.</p>

      <h4 id="pc-12-9-composite">12.9 Composite shapes</h4>
      <KaTeXBlock tex={rk`A_{\mathrm{total}} = A_1 + A_2 + A_3 + \cdots`} />
      <p>Example: circle 50 m² + rectangle 30 m² → 80 m² total footprint (sketch overlaps carefully in real lifts).</p>

      <h4 id="pc-12-10-swing-example">12.10 Worked example (crane swing area)</h4>
      <p>
        <KaTeXInline tex={rk`r = 10\ \mathrm{m}`} /> → <KaTeXInline tex={rk`C \approx 62{,}83\ \mathrm{m}`} />, <KaTeXInline tex={rk`A \approx 314{,}16\ \mathrm{m}^2`} />.
      </p>

      <h4 id="pc-12-11-mistakes">12.11 Common mistakes</h4>
      <ul>
        <li>Radius vs diameter swap</li>
        <li>Forgetting <KaTeXInline tex={rk`r^2`} /> in area</li>
        <li>Mixing perimeter with area units</li>
        <li>Wrong <KaTeXInline tex={rk`n`} /> for polygon counts</li>
      </ul>

      <h4 id="pc-12-12-final">12.12 Final understanding</h4>
      <ul>
        <li>Circles: radius-based <KaTeXInline tex={rk`C`} /> and <KaTeXInline tex={rk`A`} /></li>
        <li>Regular polygons: <KaTeXInline tex={rk`P=ns`} />, <KaTeXInline tex={rk`A=\tfrac12 Pa`} /></li>
      </ul>

      <h4 id="pc-12-13-big">12.13 The big idea</h4>
      <p>Geometry on the ground and in plan view sets swing limits, exclusion zones, and bearing patches—same math as Section 2, now with explicit π and polygon tools.</p>
    </>
  );
}
