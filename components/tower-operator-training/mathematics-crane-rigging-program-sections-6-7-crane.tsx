import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";

const rk = String.raw;

/** Crane & rigging mathematics — Section 6 (crane boom geometry) and Section 7 (load chart / interpolation). */
export function CraneRiggingMathematicsSections6And7Crane() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <h2 id="section-6-crane-geometry">Section 6 — Crane geometry calculations</h2>

      <h4 id="crane-6-1-simple">6.1 What this means (start simple)</h4>
      <p>Imagine a crane boom as a long stick. One end is on the crane; the other end is up in the air (the hook).</p>
      <p>That forms a triangle:</p>
      <ul>
        <li><strong>Boom</strong> — the long slanted side (the actual crane arm length in the plane of the hook)</li>
        <li><strong>Radius</strong> — how far out the hook is (horizontal reach)</li>
        <li><strong>Height</strong> — how high the hook is (vertical lift in that same plane)</li>
      </ul>
      <p>
        <strong>Think:</strong> radius = reach out; height = lift up; boom = the slant along the boom line.
      </p>

      <h4 id="crane-6-2-triangle-rule">6.2 The triangle rule</h4>
      <KaTeXBlock tex={rk`\mathrm{Boom}^2 = \mathrm{Height}^2 + \mathrm{Radius}^2`} />
      <p>You always have a right triangle in this simplified model: if you know two sides, you find the third with Pythagoras.</p>

      <h4 id="crane-6-3-angle">6.3 Understanding the angle (<KaTeXInline tex={rk`\theta`} />)</h4>
      <p>
        <KaTeXInline tex={rk`\theta`} /> describes how steep the boom is relative to horizontal (convention matches your crane/trigonometry sketch).
      </p>
      <ul>
        <li>Small angle → boom flatter → more reach (radius), less height—same boom length, different split.</li>
        <li>Large angle → boom steeper → less radius, more height.</li>
      </ul>

      <h4 id="crane-6-4-key-relationships">6.4 The two key relationships</h4>
      <KaTeXBlock tex={rk`\cos\theta = \frac{\mathrm{Radius}}{\mathrm{Boom}},\qquad \sin\theta = \frac{\mathrm{Height}}{\mathrm{Boom}}`} />
      <p>
        The boom vector splits into horizontal and vertical parts: <strong>cosine</strong> gives the horizontal fraction (radius direction), <strong>sine</strong> gives the vertical fraction (height direction).
      </p>

      <h4 id="crane-6-5-sin-cos-radius-height">6.5 Using sin and cos to find radius and height</h4>
      <p>You &ldquo;break&rdquo; the boom into sideways and upward parts:</p>
      <KaTeXBlock tex={rk`\mathrm{Radius} = \mathrm{Boom}\times\cos\theta \qquad \mathrm{Height} = \mathrm{Boom}\times\sin\theta`} />
      <p>
        <strong>Cosine</strong> answers: how much boom length goes sideways? <strong>Sine</strong> answers: how much goes up?
      </p>

      <h4 id="crane-6-6-why-works">6.6 Why this works</h4>
      <p>These are rearrangements of the same ratios:</p>
      <KaTeXBlock tex={rk`\cos\theta=\frac{\mathrm{Radius}}{\mathrm{Boom}}\ \Rightarrow\ \mathrm{Radius}=\mathrm{Boom}\cos\theta;\qquad \sin\theta=\frac{\mathrm{Height}}{\mathrm{Boom}}\ \Rightarrow\ \mathrm{Height}=\mathrm{Boom}\sin\theta`} />

      <h4 id="crane-6-7-worked">6.7 Worked examples — seeing the boom split</h4>

      <h5 id="crane-ex-1-steep">Example 1 — Steeper boom</h5>
      <p>
        Boom = <KaTeXInline tex={rk`20\ \mathrm{m}`} />; <KaTeXInline tex={rk`\theta = 60^{\circ}`} /> (
        <KaTeXInline tex={rk`\cos 60^{\circ}=0{,}5`} />, <KaTeXInline tex={rk`\sin 60^{\circ}\approx 0{,}866`} />
        ).
      </p>
      <KaTeXBlock tex={rk`\mathrm{Radius}=20\times 0{,}5=10\ \mathrm{m};\qquad \mathrm{Height}=20\times 0{,}866\approx 17{,}32\ \mathrm{m}`} />
      <p>Most of this 20 m boom is working in the <strong>vertical</strong> direction—the angle is steep.</p>

      <h5 id="crane-ex-2-flat">Example 2 — Flatter boom</h5>
      <p>
        Boom = <KaTeXInline tex={rk`20\ \mathrm{m}`} />; <KaTeXInline tex={rk`\theta = 30^{\circ}`} /> (
        <KaTeXInline tex={rk`\cos 30^{\circ}\approx 0{,}866`} />, <KaTeXInline tex={rk`\sin 30^{\circ}=0{,}5`} />
        ).
      </p>
      <KaTeXBlock tex={rk`\mathrm{Radius}\approx 20\times 0{,}866\approx 17{,}32\ \mathrm{m};\qquad \mathrm{Height}=20\times 0{,}5=10\ \mathrm{m}`} />
      <p>Same boom length, flatter configuration: more reach out, less lift up.</p>

      <h4 id="crane-6-8-pattern">6.8 Pattern you must remember</h4>
      <ul>
        <li>Low angle → large radius, small height</li>
        <li>High angle → small radius, large height</li>
        <li>Same boom, different shape—same triangle rule.</li>
      </ul>

      <h4 id="crane-6-9-check">6.9 Checking your work (very important)</h4>
      <KaTeXBlock tex={rk`\mathrm{Boom}^2 \stackrel{?}{=} \mathrm{Height}^2 + \mathrm{Radius}^2`} />
      <p>
        <strong>Check example 1:</strong> <KaTeXInline tex={rk`20^2 = 400`} />; <KaTeXInline tex={rk`17{,}32^2 + 10^2 \approx 299{,}98 + 100 \approx 400`} />.
      </p>
      <p>
        <strong>Check example 2:</strong> <KaTeXInline tex={rk`10^2 + 17{,}32^2 \approx 100 + 299{,}98 \approx 400`} />.
      </p>
      <p>If the triangle does not close, do not trust the numbers—recheck angle convention, boom length, and inputs.</p>

      <h4 id="crane-6-10-final">6.10 Final understanding</h4>
      <ul>
        <li>The boom line is the longest side in this right-triangle slice</li>
        <li>Radius = horizontal reach; height = vertical lift</li>
        <li>Cosine finds radius; sine finds height</li>
        <li>The Pythagorean check must balance</li>
      </ul>

      <h4 id="crane-6-11-big-idea">6.11 The big idea</h4>
      <p>
        A crane boom is a line segment in the working plane. Sin and cos tell you how much of that line goes <strong>out</strong> and how much goes <strong>up</strong>. Master that split and you master basic crane geometry for chart reading and reach planning.
      </p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-7-load-chart-math">Section 7 — Crane load chart mathematics</h2>

      <h4 id="chart-7-1-simple">7.1 What this means (start simple)</h4>
      <p>
        A load chart states how much the crane may lift at a given radius and configuration. Real picks rarely sit exactly on tabulated points—so we use math to interpolate, to include rigging, and to express how much of the rated capacity is used.
      </p>

      <h4 id="chart-7-2-definitions">7.2 Key definitions</h4>
      <dl className="not-prose space-y-4 text-sm">
        <div>
          <dt className="font-semibold text-foreground">Interpolation</dt>
          <dd className="mt-1 text-muted-foreground">
            Finding a value <em>between</em> two known chart entries (e.g. capacity between two radii).
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Rated capacity</dt>
          <dd className="mt-1 text-muted-foreground">Maximum allowable load at that radius and configuration per the chart/manufacturer rules.</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Load (net load)</dt>
          <dd className="mt-1 text-muted-foreground">Weight of the lifted object alone.</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Rigging weight</dt>
          <dd className="mt-1 text-muted-foreground">Slings, hooks, shackles, blocks, spreader—everything hanging from the hook.</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Total load (gross load)</dt>
          <dd className="mt-1 text-muted-foreground">
            <KaTeXInline tex={rk`\text{Total load} = \text{Load weight} + \text{Rigging weight}`} /> — what the crane &ldquo;feels.&rdquo;
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Percent capacity</dt>
          <dd className="mt-1 text-muted-foreground">Share of rated capacity used at the interpolated or tabulated limit—always based on consistent units.</dd>
        </div>
      </dl>

      <h4 id="chart-7-3-core-calc">7.3 The three core calculations</h4>
      <ul>
        <li><strong>Interpolation</strong> — fill in between chart points</li>
        <li><strong>Percent capacity</strong> — how hard the crane is working vs limit</li>
        <li><strong>Adjusted (total) load</strong> — object + rigging</li>
      </ul>

      <h4 id="chart-7-4-interpolation">7.4 Interpolation (finding between values)</h4>
      <KaTeXBlock tex={rk`C = C_1 + (C_2-C_1)\times\frac{R-R_1}{R_2-R_1}`} />
      <p>
        <KaTeXInline tex={rk`C`} /> = capacity at actual radius <KaTeXInline tex={rk`R`} />; <KaTeXInline tex={rk`C_1,\,C_2`} /> = capacities at bracketing radii{" "}
        <KaTeXInline tex={rk`R_1,\,R_2`} />.
      </p>
      <p>
        Example: <KaTeXInline tex={rk`10\ \mathrm{m} \Rightarrow 5000\ \mathrm{kg}`} />; <KaTeXInline tex={rk`12\ \mathrm{m} \Rightarrow 4000\ \mathrm{kg}`} />; actual{" "}
        <KaTeXInline tex={rk`R = 11\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`C = 5000 + (4000-5000)\times\frac{11-10}{12-10} = 5000 - 500 = 4500\ \mathrm{kg}`} />
      <p>Halfway in radius between 10 and 12 m moves capacity halfway between the two tabulated capacities in this linear model.</p>

      <h4 id="chart-7-5-percent">7.5 Percent capacity</h4>
      <KaTeXBlock tex={rk`\% = \frac{\text{Total load}}{\text{Rated capacity}}\times 100`} />
      <p>
        Always use <strong>total</strong> load (object + rigging) in the numerator when comparing to hook capacity at that radius.
      </p>
      <p>
        Example: total load = <KaTeXInline tex={rk`4000\ \mathrm{kg}`} />, rated capacity = <KaTeXInline tex={rk`5000\ \mathrm{kg}`} /> →
      </p>
      <KaTeXBlock tex={rk`\frac{4000}{5000}\times 100 = 80\%`} />

      <h4 id="chart-7-6-total-load">7.6 Adjusted load (total load)</h4>
      <KaTeXBlock tex={rk`\text{Total load} = \text{Load weight} + \text{Rigging weight}`} />
      <p>
        Example: load <KaTeXInline tex={rk`2000\ \mathrm{kg}`} />, rigging <KaTeXInline tex={rk`300\ \mathrm{kg}`} /> →{" "}
        <KaTeXInline tex={rk`\text{Total} = 2300\ \mathrm{kg}`} />.
      </p>

      <h4 id="chart-7-7-full-worked">7.7 Full worked example</h4>
      <p>
        Chart: <KaTeXInline tex={rk`10\ \mathrm{m} \to 5000\ \mathrm{kg}`} />, <KaTeXInline tex={rk`12\ \mathrm{m} \to 4000\ \mathrm{kg}`} />. Actual radius{" "}
        <KaTeXInline tex={rk`11\ \mathrm{m}`} />. Load <KaTeXInline tex={rk`3800\ \mathrm{kg}`} />, rigging <KaTeXInline tex={rk`200\ \mathrm{kg}`} />.
      </p>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          Interpolation → <KaTeXInline tex={rk`C \approx 4500\ \mathrm{kg}`} /> (as in §7.4).
        </li>
        <li>
          Total load → <KaTeXInline tex={rk`3800+200=4000\ \mathrm{kg}`} />.
        </li>
        <li>
          Percent capacity → <KaTeXInline tex={rk`\frac{4000}{4500}\times 100 \approx 88{,}9\%`} />.
        </li>
      </ol>
      <p>Limit ≈ 4500 kg; you lift ≈ 4000 kg—about 89% of the tabulated allowance in this simplified exercise (apply real chart zones, deductions, and manufacturer rules on site).</p>

      <h4 id="chart-7-8-patterns">7.8 Patterns you must remember</h4>
      <ul>
        <li>Interpolation when you are between tabulated radii (or other chart axes)</li>
        <li>Capacity generally falls as radius grows—verify on the actual chart</li>
        <li>Percent capacity uses <strong>total</strong> load; never exceed 100% of the applicable limit</li>
        <li>Always add rigging to get the load the crane truly sees</li>
      </ul>

      <h4 id="chart-7-9-mistakes">7.9 Common mistakes</h4>
      <ul>
        <li>Omitting rigging weight</li>
        <li>Using net load only in percent-capacity checks</li>
        <li>Guessing instead of interpolating</li>
        <li>Assuming a single table value applies without configuration, reeving, and radius checks</li>
      </ul>

      <h4 id="chart-7-10-final">7.10 Final understanding</h4>
      <ul>
        <li>Charts set limits; math places you between or on those limits</li>
        <li>Every lift plan should account for rigging in gross load</li>
        <li>Interpolation fills gaps between printed points</li>
        <li>Percent capacity is your margin language against the rated value at that point</li>
      </ul>

      <h4 id="chart-7-11-big-idea">7.11 The big idea</h4>
      <p>
        The chart draws the boundary. Interpolation finds your point on that boundary curve (in one axis). Total load is the real physical demand. Percent capacity is how close you are. Control all four and you can read and apply tower and mobile chart logic systematically—then cross-check with the manufacturer&apos;s full procedure and LMI readout.
      </p>
    </>
  );
}
