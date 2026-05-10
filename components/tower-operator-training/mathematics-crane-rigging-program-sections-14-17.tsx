import type {ReactNode} from "react";

import {Link} from "@/i18n/navigation";
import {MathDidYouKnow, MathTip} from "@/components/tower-operator-training/training-content-callouts";
import {
  CraneRiggingDesmosFigure,
  type CraneRiggingDesmosFigureKey,
} from "@/components/desmos/crane-rigging-desmos-figures";
import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";
import {cn} from "@/lib/utils";

const rk = String.raw;

/** Accessible in-page anchors and cross-links inside the mathematics route. */
const pageA =
  "font-medium text-primary underline-offset-[3px] decoration-primary/55 hover:text-primary hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

/** External calculator / docs — opens in new tab. */
function ExternalDocsLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(pageA, className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

/** Figure chrome reused for interactive Desmos blocks (readable in light/dark). */
function DesmosFigureFrame({
  variant,
  children,
  calculatorLabel = "Interactive graph — Desmos",
}: {
  variant: CraneRiggingDesmosFigureKey;
  children: ReactNode;
  calculatorLabel?: string;
}) {
  return (
    <figure className="not-prose my-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm ring-1 ring-foreground/6 dark:ring-foreground/10">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/55 px-4 py-2.5 dark:bg-muted/40">
        <span className="text-xs font-medium text-foreground">{calculatorLabel}</span>
        <span className="text-xs font-normal text-foreground/80">
          <ExternalDocsLink href="https://www.desmos.com/calculator">Desmos calculator</ExternalDocsLink>
          {" · "}
          <ExternalDocsLink href="https://www.desmos.com/api/v1.8/docs/">embed API docs</ExternalDocsLink>
        </span>
      </div>
      <CraneRiggingDesmosFigure variant={variant} />
      <figcaption className="border-t border-border bg-muted/20 px-4 py-3 text-sm leading-relaxed text-foreground/90 dark:text-foreground/92 [&_.katex]:text-foreground">
        {children}
      </figcaption>
    </figure>
  );
}

function Answer({children}: {children: ReactNode}) {
  return (
    <details className="not-prose group mt-2 rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm shadow-sm ring-1 ring-border/60 dark:bg-muted/35 dark:ring-border/80 [&_summary::-webkit-details-marker]:hidden">
      <summary className="cursor-pointer list-none rounded-sm font-semibold tracking-tight text-foreground [&::before]:mr-2 [&::before]:inline-block [&::before]:text-foreground/70 [&::before]:transition-transform [&::before]:content-['▸'] group-open:[&::before]:rotate-90">
        Answer &amp; explanation
      </summary>
      <div className="mt-2 border-t border-dashed border-border/80 pt-2 text-foreground/90 dark:text-foreground/90">{children}</div>
    </details>
  );
}

/** Sections 14–17: bearing pressure (+ appendix & practice), load moment, torsion, deflection scaling. */
export function CraneRiggingMathematicsSections14Through17() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <nav
        aria-labelledby="training-math-crane-module14-toc-heading"
        className="not-prose my-8 rounded-xl border border-border bg-muted/55 p-5 shadow-sm ring-1 ring-border/80 dark:bg-muted/38"
      >
        <p id="training-math-crane-module14-toc-heading" className="text-sm font-semibold text-foreground">
          On this page — Sections 14–17 (crane &amp; rigging mathematics)
        </p>
        <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-3 [&_li]:leading-snug">
          <li>
            <a className={pageA} href="#section-14-ground-bearing">
              Section 14 — Ground bearing pressure
            </a>
          </li>
          <li>
            <a className={pageA} href="#appendix-outrigger-pad-sizing">
              Appendix — Outrigger pad sizing
            </a>
          </li>
          <li>
            <a className={pageA} href="#section-14-practice">
              Section 14 — Practice answers
            </a>
          </li>
          <li>
            <a className={pageA} href="#section-15-load-moment">
              Section 15 — Load moment
            </a>
          </li>
          <li>
            <a className={pageA} href="#section-16-torsion">
              Section 16 — Torsion
            </a>
          </li>
          <li>
            <a className={pageA} href="#section-17-deflection">
              Section 17 — Deflection (scaling)
            </a>
          </li>
        </ul>
        <div className="mt-5 border-t border-dashed border-border pt-4">
          <p className="text-xs font-medium text-foreground/90">Related earlier in this chapter</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a className={pageA} href="#section-5-rigging-tension">
                Section 5 — Rigging tension
              </a>
            </li>
            <li>
              <a className={pageA} href="#section-7-load-chart-math">
                Section 7 — Load chart mathematics
              </a>
            </li>
            <li>
              <a className={pageA} href="#section-13-wind-force">
                Section 13 — Wind force
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs font-medium text-foreground/90">Related training modules</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <Link className={pageA} href="/tower-cranes/operator-training-program/load-charts-capacity">
                Load charts &amp; capacity
              </Link>
            </li>
            <li>
              <Link className={pageA} href="/tower-cranes/operator-training-program/tower-crane-bases-foundations">
                Bases &amp; foundations
              </Link>
            </li>
            <li>
              <Link className={pageA} href="/tower-cranes/operator-training-program/load-handling-swing-control">
                Load handling &amp; swing control
              </Link>
            </li>
            <li>
              <Link className={pageA} href="/rigging">
                Rigging hub
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <h2 id="section-14-ground-bearing">Section 14 — Ground bearing pressure</h2>

      <h4 id="gb-14-1">14.1 What this means</h4>
      <p>
        Crane reactions pass into the soil through outrigger pads, crawlers (track footprint), or wheel groups. Ground bearing pressure quantifies stress on that bearing interface. For how reactions reach engineered bases and mats, see also our{" "}
        <Link className={pageA} href="/tower-cranes/operator-training-program/tower-crane-bases-foundations">
          tower crane bases &amp; foundations
        </Link>{" "}
        module.
      </p>

      <h4 id="gb-14-2">14.2 The big idea</h4>
      <p>Same force over smaller area ⇒ higher pressure. Spread the force over larger effective area ⇒ lower pressure.</p>

      <MathTip>
        Crawler tracks, outrigger pads, and engineered mats are the <em>only</em> spreading path between crane reactions and the soil—if that interface is under-sized, the failure mode is bearing or punch, not &ldquo;hook overload&rdquo; on the chart.
      </MathTip>

      <h4 id="gb-14-3">14.3 Ground pressure formula</h4>
      <KaTeXBlock tex={rk`P = \frac{F}{A}`} />
      <ul className="text-sm">
        <li>
          <KaTeXInline tex={rk`P`} /> — pressure; <KaTeXInline tex={rk`F`} /> — normal force (<KaTeXInline tex={rk`\mathrm{N}`} /> or <KaTeXInline tex={rk`\mathrm{kN}`} />)</li>
        <li>
          <KaTeXInline tex={rk`A`} /> — bearing area (<KaTeXInline tex={rk`\mathrm{m}^2`} />)</li>
        <li>Pa = N/m²; kPa often used as kN/m² (<KaTeXInline tex={rk`1\ \mathrm{kPa}=1000\ \mathrm{Pa}`} />)</li>
      </ul>

      <h4 id="gb-14-4">14.4 Simple explanation</h4>
      <p>Same body weight—snowshoes vs stiletto heels—inverse area controls sinkage risk.</p>

      <MathDidYouKnow>
        Civil mats and temporary roads use the same mental model: engineers trade increased footprint (or geogrid / compacted lift thickness) for lower contact stress so soft subgrades do not shear under rolling equipment.
      </MathDidYouKnow>

      <h4 id="gb-14-5">14.5 Worked example</h4>
      <KaTeXBlock tex={rk`P = \frac{10{,}000\ \mathrm{N}}{2\ \mathrm{m}^2}=5000\ \mathrm{N}/\mathrm{m}^2 = 5\ \mathrm{kPa}`} />

      <h4 id="gb-14-6">14.6 Crane applications</h4>
      <ul>
        <li>
          Outrigger: <KaTeXInline tex={rk`P = F_{\mathrm{out}}/A_{\mathrm{pad}}`} />
        </li>
        <li>
          Tracks: divide by effective track footprint <KaTeXInline tex={rk`A_{\mathrm{tracks}}`} />
        </li>
        <li>Load shares shift—worst-leg reactions often exceed symmetric splits during slewing/near-capacity picks.</li>
      </ul>

      <h4 id="gb-14-7">14.7 Area calculations</h4>
      <KaTeXBlock tex={rk`A_{\mathrm{square}}=s^2;\quad A_{\mathrm{rect}}=L\cdot W;\quad A_{\mathrm{circle}}=\pi r^2`} />

      <h4 id="gb-14-8">14.8 Worked example (square outrigger pad)</h4>
      <KaTeXBlock tex={rk`F=50\ \mathrm{kN},\quad A=1{,}5^2=2{,}25\ \mathrm{m}^2\quad\Rightarrow\quad P=\frac{50}{2{,}25}\approx 22{,}22\ \mathrm{kPa}`} />

      <h4 id="gb-14-9">14.9 Effect of area</h4>
      <KaTeXBlock tex={rk`50\ \mathrm{kN}/1\ \mathrm{m}^2=50\ \mathrm{kPa};\quad 50\ \mathrm{kN}/2\ \mathrm{m}^2=25\ \mathrm{kPa}`} />

      <DesmosFigureFrame variant="pressure-vs-area">
        Fixed teaching case: <KaTeXInline tex={rk`F=50\ \mathrm{kN}`} /> on pad area <KaTeXInline tex={rk`A`} /> (m²), so <KaTeXInline tex={rk`P=F/A`} /> traces <KaTeXInline tex={rk`y=50/x`} />—pressure drops as the footprint widens. See also the{" "}
        <a className={pageA} href="#appendix-outrigger-pad-sizing">
          appendix on pad sizing
        </a>
        .
      </DesmosFigureFrame>

      <h4 id="gb-14-10">14.10 Soil capacity</h4>
      <p>
        Typical illustrative bands (must be confirmed by geotech / mat design for each site): soft ~50–100 kPa; firm ~100–300 kPa; granular gravel mats ~300–600 kPa. Practitioners document allowable bearing and slabs in engineered packages—see discussion of bases in{" "}
        <Link className={pageA} href="/tower-cranes/operator-training-program/tower-crane-bases-foundations">
          bases &amp; foundations
        </Link>{" "}
        and CSA / geotechnical scopes from your jurisdiction.
      </p>
      <p>
        <strong>Safe when</strong> <KaTeXInline tex={rk`P_{\mathrm{actual}} \le P_{\mathrm{allowable}}`} /> per approved method.
      </p>

      <h4 id="gb-14-11">14.11 Factor of safety</h4>
      <KaTeXBlock tex={rk`P_{\mathrm{design}} = \frac{P_{\mathrm{allowable}}}{\mathrm{FoS}}\qquad\text{then size pads using }P_{\mathrm{design}}\text{.}`} />

      <h4 id="gb-14-12">14.12 Combined loads</h4>
      <KaTeXBlock tex={rk`F_{\mathrm{total}} = W_{\mathrm{load}}+W_{\mathrm{rigging}}+W_{\mathrm{block}}+(\ldots\ \mathrm{dead\ weight\ reactions\ per\ engineered\ diagram})`} />
      <p>
        Breaking out vertical hook-side masses matches the sling-side logic in{" "}
        <a className={pageA} href="#section-5-rigging-tension">
          Section 5 — Rigging tension
        </a>
        .
      </p>

      <h4 id="gb-14-13">14.13 Common mistakes</h4>
      <ul>
        <li>Wrong pad footprint or partial engagement</li>
        <li>Unit mix-ups (N vs kN vs Pa)</li>
        <li>Assuming identical leg reactions</li>
        <li>Ignoring allowable bearing from investigation</li>
      </ul>

      <h4 id="gb-14-14">14.14 Real-world insight</h4>
      <p>Small pads concentrate reaction—large spreader mats or engineered slabs reduce crest pressure.</p>

      <h4 id="gb-14-15">14.15 Final understanding</h4>
      <ul className="border-l-4 border-emerald-500/35 pl-4 text-sm leading-relaxed text-foreground/90 [&_.katex]:text-foreground dark:border-emerald-400/30">
        <li>Pressure is force divided by spreading area.</li>
        <li>Growing footprint lowers pressure linearly when <KaTeXInline tex={rk`F`} /> holds.</li>
        <li>Maintain clearance to soil-bearing failure and rotational stability—not just hoist chart margin.</li>
      </ul>

      <h4 id="gb-14-16">14.16 The big idea</h4>
      <p>The crane always pushes downward through its bearing path—ground pressure math tells whether the strata or mat accepts that impulse.</p>

      <hr className="not-prose my-12 border-border" />

      <h2 id="appendix-outrigger-pad-sizing">Appendix — Outrigger pad sizing calculations</h2>

      <h4 id="pad-a1">A.1 What this is</h4>
      <p>Pads enlarge bearing area so <KaTeXInline tex={rk`P=F/A`} /> stays under allowable soil—or under a reduced design pressure when using a factor of safety.</p>
      <h4 id="pad-a2">A.2 Core relationships</h4>
      <KaTeXBlock tex={rk`P=\frac{F}{A}\quad\Rightarrow\quad A_{\mathrm{req}}\ge\frac{F}{P_{\mathrm{design}}}`} />

      <DesmosFigureFrame variant="pressure-vs-allowable">
        Fixed teaching case: blue <KaTeXInline tex={rk`P=F/A`} /> with <KaTeXInline tex={rk`F=120\ \mathrm{kN}`} /> so <KaTeXInline tex={rk`y=120/x`} />; red line <KaTeXInline tex={rk`P=60\ \mathrm{kPa}`} /> (design/allowable illustration). Crossing area <KaTeXInline tex={rk`A\approx 2\ \mathrm{m}^2`} /> matches{" "}
        <KaTeXInline tex={rk`A_{\mathrm{req}}\ge F/P`} />—compare that horizontal ceiling to{" "}
        <a className={pageA} href="#gb-14-11">
          design pressure after factor of safety
        </a>
        .
      </DesmosFigureFrame>

      <h4 id="pad-a4">A.4 Working forward</h4>
      <KaTeXBlock tex={rk`F=80\ \mathrm{kN},\quad 2{\times}2\ \mathrm{m}\Rightarrow A=4\ \mathrm{m}^2,\quad P=20\ \mathrm{kPa}\ (<100)\ \Rightarrow\ \mathrm{SAFE\ (illustrative)}`} />

      <h4 id="pad-a5">A.5 Working backward</h4>
      <KaTeXBlock tex={rk`F=120\ \mathrm{kN},\quad P_{\mathrm{allow}}=60\ \mathrm{kPa}\Rightarrow A=2\ \mathrm{m}^2,\quad s=\sqrt{A}\approx1{,}41\ \mathrm{m}`} />

      <h4 id="pad-a6">A.6 Factor of safety</h4>
      <KaTeXBlock tex={rk`P_{\mathrm{design}}=\frac{P_{\mathrm{allowable}}}{\mathrm{FoS}};\qquad A_{\mathrm{req}}\ge\frac{F}{P_{\mathrm{design}}}`} />

      <h4 id="pad-a7">A.7 Worked example (with FoS)</h4>
      <p>
        Allowable bearing <KaTeXInline tex={rk`150\ \mathrm{kPa}`} />, <KaTeXInline tex={rk`\mathrm{FoS}=1{,}5`} />, outrigger reaction{" "}
        <KaTeXInline tex={rk`F=150\ \mathrm{kN}`} />:
      </p>
      <KaTeXBlock tex={rk`P_{\mathrm{design}}=\frac{150}{1{,}5}=100\ \mathrm{kPa};\quad A=\frac{150}{100}=1{,}5\ \mathrm{m}^2;\quad s=\sqrt{1{,}5}\approx1{,}22\ \mathrm{m}`} />

      <h4 id="pad-a8">A.8–A.9 Worst outrigger &amp; full system sketch</h4>
      <KaTeXBlock tex={rk`F_{\mathrm{out\,worst}} \approx 0{,}75\,F_{\mathrm{total}}\ (\text{conservative planner rule—replace with FE/diagram})\quad \Rightarrow\quad F=150\ \mathrm{kN},\ A_{\mathrm{req}}=1{,}5\ \mathrm{m}^2\text{ when }100\ \mathrm{kPa}`} />

      <h4 id="pad-a10">A.10 Round pads</h4>
      <KaTeXBlock tex={rk`A=\pi r^2\quad\Rightarrow\quad r=\sqrt{\frac{A}{\pi}}\quad\text{e.g.\ } A=2\Rightarrow r\approx0{,}80\ \mathrm{m}`} />

      <h4 id="pad-a11">A.11 Multiple pads</h4>
      <p>Summed area can look generous, yet <strong>each</strong> outrigger footprint must satisfy <KaTeXInline tex={rk`P=F_i/A_i`} /> for its local reaction <KaTeXInline tex={rk`F_i`} />.</p>

      <h4 id="pad-a12-a15">A.12–A.15 Field checks</h4>
      <ul className="text-sm">
        <li>Never size from total crane mass alone without worst-leg fraction unless your drawing says so.</li>
        <li>Apply FoS to allowable pressure before sizing for capacity-limited soils.</li>
        <li>Quick cycle: estimate worst-leg force → compute <KaTeXInline tex={rk`A`} /> → verify <KaTeXInline tex={rk`P`} /> vs <KaTeXInline tex={rk`P_{\mathrm{allow}}`} />.</li>
      </ul>

      <h4 id="pad-a16">A.16 Big idea</h4>
      <p>Pads enlarge <KaTeXInline tex={rk`A`} /> deliberately—math shows why undersized footprints fail soils before hook capacity does.</p>

      <hr className="not-prose my-12 border-border" />

      <h3 id="section-14-practice">Section 14 — Practice (answers)</h3>

      <h4 className="mt-6">Part A — Basic pressure</h4>
      <ol className="list-decimal space-y-6 pl-6">
        <li>
          <KaTeXInline tex={rk`F=12{,}000\ \mathrm{N}`} />, <KaTeXInline tex={rk`A=3\ \mathrm{m}^2`} />.
          <Answer>
            <KaTeXInline tex={rk`P=4000\ \mathrm{Pa}`} />.
          </Answer>
        </li>
        <li>
          Express <KaTeXInline tex={rk`5000\ \mathrm{Pa}`} /> in kPa (<KaTeXInline tex={rk`1\ \mathrm{kPa}=1000\ \mathrm{Pa}`} />).
          <Answer>
            <KaTeXInline tex={rk`5\ \mathrm{kPa}`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`F=40\ \mathrm{kN}`} />, <KaTeXInline tex={rk`A=2\ \mathrm{m}^2`} />.
          <Answer>
            <KaTeXInline tex={rk`P=20\ \mathrm{kPa}`} /> (kN/m² ≡ kPa).
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part B — Areas</h4>
      <ol className="list-decimal space-y-6 pl-6" start={4}>
        <li>
          Square side <KaTeXInline tex={rk`1{,}5\ \mathrm{m}`} />.
          <Answer>
            <KaTeXInline tex={rk`A=2{,}25\ \mathrm{m}^2`} />.
          </Answer>
        </li>
        <li>
          Rectangle <KaTeXInline tex={rk`2\ \mathrm{m}\times 1{,}2\ \mathrm{m}`} />.
          <Answer>
            <KaTeXInline tex={rk`A=2{,}4\ \mathrm{m}^2`} />.
          </Answer>
        </li>
        <li>
          Circle <KaTeXInline tex={rk`r=0{,}8\ \mathrm{m}`} /> (<KaTeXInline tex={rk`\pi\approx 3{,}1416`} />).
          <Answer>
            <KaTeXInline tex={rk`A\approx2{,}01\ \mathrm{m}^2`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part C — Safe checks</h4>
      <ol className="list-decimal space-y-6 pl-6" start={7}>
        <li>
          <KaTeXInline tex={rk`F=60\ \mathrm{kN}`} />, pad <KaTeXInline tex={rk`2{\times}2\ \mathrm{m}`} />, soil <KaTeXInline tex={rk`50\ \mathrm{kPa}`} />.
          <Answer>
            <KaTeXInline tex={rk`P=15\ \mathrm{kPa}<50`} /> → illustrative safe.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`F=80\ \mathrm{kN}`} />, <KaTeXInline tex={rk`r=1\ \mathrm{m}`} />, soil <KaTeXInline tex={rk`100\ \mathrm{kPa}`} />.
          <Answer>
            <KaTeXInline tex={rk`A=\pi,\ P\approx25{,}46\ \mathrm{kPa}<100`} /> → safe.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part D — Pad sizing</h4>
      <ol className="list-decimal space-y-6 pl-6" start={9}>
        <li>
          <KaTeXInline tex={rk`F=100\ \mathrm{kN}`} />, allowable <KaTeXInline tex={rk`50\ \mathrm{kPa}`} />.
          <Answer>
            <KaTeXInline tex={rk`A=2\ \mathrm{m}^2`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`A=2{,}25\ \mathrm{m}^2`} />, square side?
          <Answer>
            <KaTeXInline tex={rk`s=1{,}5\ \mathrm{m}`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`A=3\ \mathrm{m}^2`} />, circular radius?
          <Answer>
            <KaTeXInline tex={rk`r=\sqrt{3/\pi}\approx 0{,}98\ \mathrm{m}`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part E — Factor of safety</h4>
      <ol className="list-decimal space-y-6 pl-6" start={12}>
        <li>
          Allowable <KaTeXInline tex={rk`120\ \mathrm{kPa}`} />, <KaTeXInline tex={rk`\mathrm{FoS}=2`} />.
          <Answer>
            <KaTeXInline tex={rk`P_{\mathrm{design}}=60\ \mathrm{kPa}`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`F=150\ \mathrm{kN}`} />, allowable <KaTeXInline tex={rk`120\ \mathrm{kPa}`} />, <KaTeXInline tex={rk`\mathrm{FoS}=2`} />.
          <Answer>
            <KaTeXInline tex={rk`P_{\mathrm{design}}=60\ \mathrm{kPa},\ A=2{,}5\ \mathrm{m}^2`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part F — Outrigger load</h4>
      <ol className="list-decimal space-y-6 pl-6" start={14}>
        <li>
          Total <KaTeXInline tex={rk`200\ \mathrm{kN}`} />, use <KaTeXInline tex={rk`75\%`} /> worst leg rule.
          <Answer>
            <KaTeXInline tex={rk`F_{\mathrm{out}}=150\ \mathrm{kN}`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`F=150\ \mathrm{kN}`} />, soil <KaTeXInline tex={rk`75\ \mathrm{kPa}`} />.
          <Answer>
            <KaTeXInline tex={rk`A=2\ \mathrm{m}^2`} />.
          </Answer>
        </li>
      </ol>

      <h4 className="mt-8">Part G — Full system</h4>
      <ol className="list-decimal space-y-6 pl-6" start={16}>
        <li>
          Total crane reaction model <KaTeXInline tex={rk`240\ \mathrm{kN}`} />, pad <KaTeXInline tex={rk`1{,}5{\times}1{,}5\ \mathrm{m}`} />, allowable{" "}
          <KaTeXInline tex={rk`100\ \mathrm{kPa}`} />.
          <Answer>
            <KaTeXInline tex={rk`F_{\mathrm{out}}=180\ \mathrm{kN}`} />, <KaTeXInline tex={rk`P=180/2{,}25=80\ \mathrm{kPa}<100`} />.
          </Answer>
        </li>
        <li>
          <KaTeXInline tex={rk`F=180\ \mathrm{kN}`} />, soil <KaTeXInline tex={rk`90\ \mathrm{kPa}`} />—minimum square side?
          <Answer>
            <KaTeXInline tex={rk`A=2\ \mathrm{m}^2,\ s=\sqrt{2}\approx1{,}41\ \mathrm{m}`} />.
          </Answer>
        </li>
        <li>
          Round pad: <KaTeXInline tex={rk`F=120\ \mathrm{kN}`} />, <KaTeXInline tex={rk`80\ \mathrm{kPa}`} /> allowable.
          <Answer>
            <KaTeXInline tex={rk`A=1{,}5\ \mathrm{m}^2,\ r=\sqrt{A/\pi}\approx0{,}69\ \mathrm{m}`} />.
          </Answer>
        </li>
        <li>
          Compare pads for <KaTeXInline tex={rk`F=100\ \mathrm{kN}`} />: Pad A <KaTeXInline tex={rk`A=1\ \mathrm{m}^2`} /> vs Pad B{" "}
          <KaTeXInline tex={rk`A=2\ \mathrm{m}^2`} />.
          <Answer>
            <KaTeXInline tex={rk`P_A=100\ \mathrm{kPa},\ P_B=50\ \mathrm{kPa}`} /> — larger pad wins.
          </Answer>
        </li>
        <li>
          Given <KaTeXInline tex={rk`P=60\ \mathrm{kPa}`} />, <KaTeXInline tex={rk`A=2\ \mathrm{m}^2`} />—infer force.
          <Answer>
            <KaTeXInline tex={rk`F=P\cdot A=120\ \mathrm{kN}`} />.
          </Answer>
        </li>
      </ol>

      <h4 id="section-14-practice-summary" className="mt-10">
        Practice takeaway
      </h4>
      <ul className="border-l-4 border-primary/35 pl-4 text-sm leading-relaxed text-foreground/90 dark:text-foreground/90 [&_.katex]:text-foreground">
        <li>Compute <KaTeXInline tex={rk`F`} /> and <KaTeXInline tex={rk`A`} /> → <KaTeXInline tex={rk`P`} /> → compare to soil or <KaTeXInline tex={rk`P_{\mathrm{design}}`} />.</li>
        <li>Size worst outrigger deliberately; ground failure is exceeding bearing pressure, not misunderstanding hook load alone.</li>
      </ul>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-15-load-moment">Section 15 — Load moment</h2>
      <h4 id="lm-15-1">15.1 What this means</h4>
      <p>Loads at radius create tipping tendency about the crane pivot—tracked as overturning moment in chart/LMI terminology.</p>

      <h4 id="lm-15-2">15.2 The big idea</h4>
      <p>Moment scales with both force and distance—heavy near or light far can match moderating moment until both grow together.</p>

      <h4 id="lm-15-3">15.3 Load moment formula</h4>
      <KaTeXBlock tex={rk`M = F\cdot d`} />
      <p>For hook load about the slew centreline, commonly <KaTeXInline tex={rk`d`} /> is horizontal radius so <KaTeXInline tex={rk`M=F\cdot\text{radius}`} /> tracks chart moment logic.</p>

      <h4 id="lm-15-4">15.4 Simple explanation</h4>
      <p>Radius acts like sitting farther out on a seesaw—same weight, longer lever arm ⇒ larger turning effect.</p>

      <h4 id="lm-15-5">15.5 Crane application</h4>
      <p>
        Plan radius is the horizontal moment arm in the basic teaching model—verify your procedure for jib flex, offset reeving, and tolerance bands. Read this together with{" "}
        <a className={pageA} href="#section-7-load-chart-math">
          Section 7 — Crane load chart mathematics
        </a>{" "}
        and the operator programme page on{" "}
        <Link className={pageA} href="/tower-cranes/operator-training-program/load-charts-capacity">
          load charts &amp; capacity
        </Link>
        .
      </p>

      <h4 id="lm-15-6">15.6–15.9 Effects &amp; critical relationship</h4>
      <KaTeXBlock tex={rk`M=10{\cdot}5=50\ \mathrm{kN\,m};\quad M=10{\cdot}10=100\ \mathrm{kN\,m};\quad F=\frac{M}{d}`} />

      <DesmosFigureFrame variant="moment-vs-radius">
        Fixed teaching lines: <KaTeXInline tex={rk`M=F\cdot r`} /> with radius <KaTeXInline tex={rk`r`} /> (m). Blue uses <KaTeXInline tex={rk`F=10\ \mathrm{kN}`} /> (<KaTeXInline tex={rk`y=10x`} />), orange uses <KaTeXInline tex={rk`F=20\ \mathrm{kN}`} /> (<KaTeXInline tex={rk`y=20x`} />)—doubling hook load doubles the moment slope at every radius (
        <a className={pageA} href="#section-16-torsion">
          Section 16 — Torsion
        </a>{" "}
        reuses the same force-times-lever arithmetic for twisting about an axis).
      </DesmosFigureFrame>

      <h4 id="lm-15-11">15.11 Reverse example</h4>
      <KaTeXBlock tex={rk`M=120\ \mathrm{kN\,m},\ d=6\ \mathrm{m}\quad\Rightarrow\quad F=20\ \mathrm{kN}`} />

      <h4 id="lm-15-12">15.12 Total load</h4>
      <KaTeXBlock tex={rk`M = F_{\mathrm{total}}\cdot d;\quad F_{\mathrm{total}}=W_{\mathrm{load}}+W_{\mathrm{rigging}}+W_{\mathrm{block}}`} />

      <p className="text-sm leading-relaxed text-foreground/90 dark:text-foreground/88">
        Charts limit moment—allowable hook load falls as radius grows even if structure “feels” strong at short radius alone. See{" "}
        <Link className={pageA} href="/tower-cranes/operator-training-program/load-charts-capacity">
          load charts &amp; capacity
        </Link>{" "}
        for how manufacturers publish those limits.
      </p>

      <h4 id="lm-15-13">15.13 Common mistakes</h4>
      <ul className="text-sm">
        <li>Ignoring radius growth when comparing pick plans</li>
        <li>Omitting rigging mass from <KaTeXInline tex={rk`F_{\mathrm{total}}`} /></li>
        <li>Treating capacity as weight-only, not moment-governed</li>
      </ul>

      <h4 id="lm-15-15">15.15 The big idea</h4>
      <p className="text-sm leading-relaxed text-foreground/90 dark:text-foreground/88">
        Cranes typically stop on <strong className="text-foreground">moment</strong> before dead weight alone exceeds individual member tension—radius is not “just distance,” it is leverage.
      </p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-16-torsion">Section 16 — Torsion</h2>
      <h4 id="tor-16-1">16.1 What this means</h4>
      <p>Torsion twists structural members or drive trains about their axis—as distinct from tipping due to overturning moments in the boom plane illustration.</p>
      <h4 id="tor-16-3">16.3 Torsion formula (magnitude cue)</h4>
      <KaTeXBlock tex={rk`T_{\mathrm{torsion}} = F\cdot r_{\perp}`} />
      <p>
        Same multiplication pattern as tipping moment arithmetic (see{" "}
        <a className={pageA} href="#lm-15-3">
          load moment formula
        </a>
        ), different failure mode: <strong className="text-foreground">tipping vs twist</strong> in shafts, slew drives, or asymmetric paths.
      </p>
      <h4 id="tor-16-6">16.6–16.8 Scaling</h4>
      <KaTeXBlock tex={rk`5{\cdot}2=10\ \mathrm{kN\,m};\quad 5{\cdot}4=20\ \mathrm{kN\,m};\quad F=\frac{T}{r}`} />
      <h4 id="tor-16-12">16.12 Reverse</h4>
      <KaTeXBlock tex={rk`T=40\ \mathrm{kN\,m},\ r=4\ \mathrm{m}\Rightarrow F=10\ \mathrm{kN}`} />

      <p className="mt-6 text-sm leading-relaxed text-foreground/90 dark:text-foreground/88">
        Off-center rigs, asymmetric wind, and snaggy slews couple torsion into members even when tipping checks pass—inspect procedures cover both. Cross-check wind-side math in{" "}
        <a className={pageA} href="#section-13-wind-force">
          Section 13 — Wind force
        </a>
        .
      </p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-17-deflection">Section 17 — Deflection (scaling)</h2>
      <h4 id="def-17-1">17.1 What this means</h4>
      <p>Booms, jibs, and tower lines sag under hoist and lateral components—elastic deflection changes hook geometry and oscillation tendencies.</p>
      <h4 id="def-17-2">17.2 The big idea</h4>
      <p>Deflection rises with force, spans effective length sharply (cubic scaling in simple beams), and falls with stiffness.</p>

      <h4 id="def-17-3">17.3 Deflection proportionality</h4>
      <KaTeXBlock tex={rk`\delta \propto \frac{F\cdot L^3}{E\cdot I}`} />
      <p>
        Exact coefficients depend on support/boom model—lesson goal is directional use: stiffness <KaTeXInline tex={rk`EI`} /> resists curvature; span{" "}
        <KaTeXInline tex={rk`L`} /> enters sharply as <KaTeXInline tex={rk`L^3`} /> in Euler–Bernoulli-style bending proportionality (see{" "}
        <ExternalDocsLink href="https://en.wikipedia.org/wiki/Euler%E2%80%93Bernoulli_beam_theory">Euler–Bernoulli beam theory</ExternalDocsLink>{" "}
        for textbook context—field work still defers to manufacturer data).
      </p>

      <h4 id="def-17-5">17.5 Comparison ratio (<KaTeXInline tex={rk`EI`} /> unchanged)</h4>
      <KaTeXBlock tex={rk`\frac{\delta_2}{\delta_1} = \frac{F_2}{F_1}\left(\frac{L_2}{L_1}\right)^3`} />

      <DesmosFigureFrame variant="deflection-length-cubed">
        With <KaTeXInline tex={rk`F`} /> and <KaTeXInline tex={rk`EI`} /> held conceptually fixed, the simple beam proportionality <KaTeXInline tex={rk`\delta \propto L^{3}`} /> means the plotted ratio behaves like{" "}
        <KaTeXInline tex={rk`\left(L_{2}/L_{1}\right)^{3}`} />. Hover near <KaTeXInline tex={rk`x=2`} />—the dashed guide marks “double span” ⇒ about <KaTeXInline tex={rk`8\times`} /> deflection growth in this model. Combined with sideways effects from{" "}
        <a className={pageA} href="#section-13-wind-force">
          wind on the hook load
        </a>
        , total lateral demand can worsen perceived sag and swing.
      </DesmosFigureFrame>

      <h4 id="def-17-6">17.6–17.8 Worked ratios</h4>
      <KaTeXBlock tex={rk`\text{Same }F\text{: }(10/5)^3=8;\quad \frac{20}{10}\Big(\frac{10}{5}\Big)^3 = 16`} />

      <h4 id="def-17-11">17.11 Field mental rules</h4>
      <ul className="text-sm">
        <li>
          Doubling boom/reach surrogate length with same stiffness → roughly <strong>8×</strong> deflection growth for same force (scaling law above).
        </li>
        <li>Doubling load at same geometry → doubling deflection (linear in <KaTeXInline tex={rk`F`} /> here).</li>
      </ul>
      <KaTeXBlock tex={rk`\text{Boom outreach }6\to12\ \mathrm{m}\Rightarrow (12/6)^3 = 8`} />

      <h4 id="def-17-14">17.14–17.16</h4>
      <p>
        Deflection ramps quickly with span—combined long radius, heavy nominal load, and crosswind worsen hook wander and inertia coupling; run within manufacturer/lattice guidance—not hand formulas alone. Practice procedures in{" "}
        <Link className={pageA} href="/tower-cranes/operator-training-program/load-handling-swing-control">
          load handling &amp; swing control
        </Link>{" "}
        align with damping hook swing when geometry is soft.
      </p>
    </>
  );
}
