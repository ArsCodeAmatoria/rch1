import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";

const rk = String.raw;

/** Section 13 — simplified wind-on-area model for crane awareness (Teaching form F = C A V²; V in m/s). */
export function CraneRiggingMathematicsSection13Wind() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <h2 id="section-13-wind-force">Section 13 — Wind force</h2>

      <h4 id="wind-13-1-means">13.1 What this means</h4>
      <p>Wind is moving air, but on the hook it behaves as a lateral force pushing on exposed area.</p>
      <ul>
        <li>Side load on picks and swinging masses</li>
        <li>Extra effective tension in legs and pennants when combined with inertia</li>
        <li>Reduced stability margins on tall or light systems</li>
      </ul>
      <p>Quantifying approximate wind thrust uses the variables below—always reconcile with employer procedures, meteorology limits, and manufacturer guidance.</p>

      <h4 id="wind-13-2-big">13.2 The big idea</h4>
      <ul>
        <li>
          <strong>Area (<KaTeXInline tex={rk`A`} />)</strong> — how much surface catches the wind.</li>
        <li>
          <strong>Speed (<KaTeXInline tex={rk`V`} />)</strong> — how fast the air moves (<strong>squared</strong> in this model).</li>
        <li>
          <strong>Coefficient (<KaTeXInline tex={rk`C`} />)</strong> — how streamlined or “sail-like” the shape is.</li>
      </ul>

      <h4 id="wind-13-3-formula">13.3 Wind force formula</h4>
      <KaTeXBlock tex={rk`F = C\cdot A\cdot V^2`} />
      <ul className="text-sm">
        <li>
          <KaTeXInline tex={rk`F`} /> — wind force (newtons, N), in this teaching form</li>
        <li>
          <KaTeXInline tex={rk`C`} /> — dimensionless coefficient (shape / blockage)</li>
        <li>
          <KaTeXInline tex={rk`A`} /> — exposed area (m²)</li>
        <li>
          <KaTeXInline tex={rk`V`} /> — wind speed (m/s)</li>
      </ul>
      <p>
        <strong>Critical insight — <KaTeXInline tex={rk`V^2`} />:</strong> doubling speed → <strong>4×</strong> force; tripling speed →{" "}
        <strong>9×</strong> force—in this simplified relationship, speed dominates quickly.
      </p>

      <h4 id="wind-13-4-ms">13.4 What is m/s (meters per second)</h4>
      <p>
        <KaTeXInline tex={rk`\mathrm{m}/\mathrm{s}`} /> = metres travelled per second. Example:{" "}
        <KaTeXInline tex={rk`10\ \mathrm{m}/\mathrm{s}`} /> means the air parcel conceptually traverses <KaTeXInline tex={rk`10\ \mathrm{m}`} /> in one second (
        instantaneous field description, not pedestrian walking pace).
      </p>

      <h4 id="wind-13-5-kmh">13.5 Converting km/h to m/s</h4>
      <KaTeXBlock tex={rk`V_{(\mathrm{m}/\mathrm{s})} = \frac{V_{(\mathrm{km}/\mathrm{h})}}{3{,}6}`} />
      <p>
        Because <KaTeXInline tex={rk`1\ \mathrm{km}/\mathrm{h} = 1000\ \mathrm{m}/3600\ \mathrm{s}`} />.
      </p>
      <KaTeXBlock tex={rk`36\ \mathrm{km/h} = 10\ \mathrm{m}/\mathrm{s};\quad 72\ \mathrm{km/h} = 20\ \mathrm{m}/\mathrm{s}`} />
      <p>
        Convert wind reports to <strong>m/s</strong> before using <KaTeXInline tex={rk`F=CAV^2`} /> in this workbook.
      </p>

      <p className="text-sm text-muted-foreground">
        Engineering wind pressure often uses air density ρ and dynamic pressure; here <KaTeXInline tex={rk`C`} /> is treated as capturing shape and any
        hidden constants required for class problems—follow site-approved methods for formal lift-engineering submissions.
      </p>

      <h4 id="wind-13-6-variables">13.6 Understanding each variable</h4>
      <p>
        <strong>1 — Area (<KaTeXInline tex={rk`A`} />).</strong> Projected (“sail”) area facing the wind, e.g.{" "}
        <KaTeXInline tex={rk`A = 4\times 3 = 12\ \mathrm{m}^2`} /> for a rectangular panel approximation. Larger <KaTeXInline tex={rk`A`} /> → larger{" "}
        <KaTeXInline tex={rk`F`} />.
      </p>
      <p>
        <strong>2 — Wind speed (<KaTeXInline tex={rk`V`} />).</strong> In m/s and squared in the formula. Example:{" "}
        <KaTeXInline tex={rk`10^2 = 100`} />, <KaTeXInline tex={rk`20^2 = 400`} /> — small ΔV ⇒ large ΔF.
      </p>
      <p>
        <strong>3 — Coefficient (<KaTeXInline tex={rk`C`} />).</strong> Typical teaching ranges given in your outline:
      </p>
      <ul>
        <li>Flat plate–like obstruction: roughly <KaTeXInline tex={rk`1{,}2\text{–}2{,}0`} /></li>
        <li>Cylinder / rounded member: roughly <KaTeXInline tex={rk`\approx 0{,}7`} /></li>
        <li>Open lattice / permeable truss: roughly <KaTeXInline tex={rk`0{,}3\text{–}0{,}6`} /></li>
      </ul>

      <h4 id="wind-13-7-worked">13.7 Worked example</h4>
      <p>
        <KaTeXInline tex={rk`A = 10\ \mathrm{m}^2`} />, wind <KaTeXInline tex={rk`36\ \mathrm{km}/\mathrm{h}`} />, <KaTeXInline tex={rk`C = 1{,}2`} />.
      </p>
      <KaTeXBlock tex={rk`\begin{aligned} &V = 36/3{,}6 = 10\ \mathrm{m}/\mathrm{s} \\ &V^2 = 100 \\ &F = 1{,}2\cdot 10\cdot 100 = 1200\ \mathrm{N}=1{,}2\ \mathrm{kN} \end{aligned}`} />

      <h4 id="wind-13-8-applications">13.8 Real crane applications</h4>
      <ol>
        <li>
          <strong>Horizontal load component</strong> — lateral push <KaTeXInline tex={rk`H\approx F`} /> toward leeward side of plan unless directionally relieved.
        </li>
        <li>
          <strong>Overturning tendency</strong> — moment scales with centroid height approximated as{" "}
          <KaTeXInline tex={rk`\text{Moment} \approx F\cdot h`} /> when <KaTeXInline tex={rk`h`} /> is sensible vertical lever from pivot.
        </li>
        <li>
          <strong>High-risk payloads</strong> — tall panels, precast walls, formwork sails—large <KaTeXInline tex={rk`A`} /> and blunt <KaTeXInline tex={rk`C`} />
          .
        </li>
      </ol>

      <h4 id="wind-13-9-speed-effect">13.9 Effect of wind speed (critical)</h4>
      <KaTeXBlock tex={rk`(5\ \mathrm{m}/\mathrm{s})^2 = 25;\qquad (10\ \mathrm{m}/\mathrm{s})^2 = 100`} />
      <p>
        Doubling speed → four times the squared term → four times <KaTeXInline tex={rk`F`} /> in this model.
      </p>

      <h4 id="wind-13-10-combined">13.10 Combined effect</h4>
      <p>Force climbs with bigger area, higher speed, blunter coefficient—worst-case teaching picture: big flat shield + gusty winds.</p>

      <h4 id="wind-13-11-mistakes">13.11 Common mistakes</h4>
      <ul>
        <li>
          Using km/h directly in <KaTeXInline tex={rk`V^2`} />
        </li>
        <li>
          Forgetting ÷ <KaTeXInline tex={rk`3{,}6`} />
        </li>
        <li>
          Using <KaTeXInline tex={rk`V`} /> instead of <KaTeXInline tex={rk`V^2`} />
        </li>
        <li>
          Ignoring <KaTeXInline tex={rk`C`} /> or underestimating <KaTeXInline tex={rk`A`} />
        </li>
      </ul>

      <h4 id="wind-13-12-final">13.12 Final understanding</h4>
      <ul>
        <li>
          <KaTeXInline tex={rk`F`} /> scales with <KaTeXInline tex={rk`A`} />, <KaTeXInline tex={rk`C`} />, and{" "}
          <KaTeXInline tex={rk`V^2`} /> in this workbook form
        </li>
        <li>
          Always use <strong>m/s</strong> for <KaTeXInline tex={rk`V`} /> here
        </li>
        <li>Speed dominates because of squaring—wind limits exist for good reason</li>
      </ul>

      <h4 id="wind-13-13-big">13.13 The big idea</h4>
      <p>
        Wind is a force that ramps sharply with gust speed once you square <KaTeXInline tex={rk`V`} />. Converting meteorology bands to <strong>m/s</strong>{" "}
        and computing <KaTeXInline tex={rk`F`} /> grounds
        the conversation in something you can weigh against allowable lateral load and crane wind policies—still never a substitute for the approved lift-specific plan.
      </p>
    </>
  );
}
