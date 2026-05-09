import {KaTeXBlock, KaTeXInline} from "@/components/katex/katex-math";

const rk = String.raw;

/** Crane & Rigging Mathematics Program — Section 2 (geometry) and Section 4 (triangles / trigonometry). */
export function CraneRiggingMathematicsGeometryTrig() {
  return (
    <>
      <hr className="not-prose my-16 border-border" />

      <h2 id="section-2-geometry-load-shapes">Section 2 — Geometry and load shapes</h2>
      <p className="not-prose text-lg text-muted-foreground">
        Understanding shape, measurement, and calculation in rigging.
      </p>

      <h4 id="geometry-2-1">2.1 Geometry in rigging</h4>
      <p>
        Geometry <strong>measures:</strong>
      </p>
      <ul>
        <li>
          Distance → perimeter
        </li>
        <li>
          Surface → area
        </li>
        <li>
          Space → volume
        </li>
      </ul>

      <h5 id="geometry-what-means">What geometry means</h5>
      <p>
        Geometry is the mathematical language used to describe physical objects in space. Every load—no matter how complex—can be reduced to measurable shapes.
      </p>

      <h5 id="geometry-historical">Historical context</h5>
      <p>
        The word <em>geometry</em> comes from &ldquo;earth measurement.&rdquo; Ancient builders, including those who constructed the Great Pyramid of Giza, used geometry to control shape, alignment, and mass without modern tools.
      </p>

      <h5 id="geometry-why-rigging">Why it matters in rigging</h5>
      <p>Modern riggers use the same principles to:</p>
      <ul>
        <li>Estimate load size</li>
        <li>Calculate weight</li>
        <li>Determine rigging requirements</li>
        <li>Prevent overload and failure</li>
      </ul>

      <h5 id="geometry-workflow">Core workflow</h5>
      <p className="font-medium text-foreground">Shape → Dimensions → Formula → Calculation → Result</p>

      <h4 id="geometry-2-2-perimeter">2.2 Perimeter (distance around)</h4>
      <p>Perimeter is the total distance around the outside of a shape.</p>

      <h5 id="perimeter-represents">What it represents</h5>
      <ul>
        <li>The path a sling travels around a load</li>
        <li>The total edge length of an object</li>
        <li>The required wrap distance for rigging</li>
      </ul>

      <h5 id="perimeter-why">Why it matters</h5>
      <p>Incorrect perimeter calculations can result in:</p>
      <ul>
        <li>Slings that are too short</li>
        <li>Improper rigging configurations</li>
        <li>Increased sling angles and forces</li>
      </ul>

      <p>
        <strong>Square</strong> — where <KaTeXInline tex={rk`s`} /> = side length.
      </p>
      <p>
        Example <KaTeXInline tex={rk`s = 3\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`P = 4 \times 3 = 12\ \mathrm{m}`} />

      <p>
        <strong>Rectangle</strong> — <KaTeXInline tex={rk`l`} /> = length, <KaTeXInline tex={rk`w`} /> = width.
      </p>
      <p>
        Example <KaTeXInline tex={rk`l = 8\ \mathrm{m},\ w = 3\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`P = 2(8 + 3) = 22\ \mathrm{m}`} />

      <p>
        <strong>Triangle</strong> — <KaTeXInline tex={rk`a,\ b,\ c`} /> = side lengths.
      </p>
      <KaTeXBlock tex={rk`a + b + c = 3 + 4 + 5 = 12\ \mathrm{m}\ \text{(example)}`} />

      <p>
        <strong>Circle (circumference)</strong> — <KaTeXInline tex={rk`r`} /> = radius (using <KaTeXInline tex={rk`\pi \approx 3.14`} /> as in field rounding).
      </p>
      <p>
        Example <KaTeXInline tex={rk`r = 1.2\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`C = 2 \times 3.14 \times 1.2 = 7.54\ \mathrm{m}`} />

      <h5 id="perimeter-rigger-insight">Rigger insight</h5>
      <p>Perimeter ≈ minimum sling length required to wrap a load safely.</p>

      <h4 id="geometry-2-2a-polygons">2.2A Polygons (multi-sided shapes)</h4>
      <p>A polygon is any shape with straight sides.</p>

      <h5 id="polygons-meaning">What this means</h5>
      <p>Polygons are commonly used in construction because they:</p>
      <ul>
        <li>Distribute load across multiple edges</li>
        <li>Provide structural stability</li>
        <li>Are easier to fabricate than curved shapes</li>
      </ul>

      <p>
        <strong>Common types:</strong> triangle (3 sides), square (4 sides), hexagon (6 sides), octagon (8 sides).
      </p>

      <p>
        <strong>Stop sign (octagon)</strong> — a <em>regular</em> polygon: equal sides, equal angles—symmetry lets loads distribute evenly around the shape.
      </p>

      <p>
        <strong>Polygon perimeter formula:</strong> <KaTeXInline tex={rk`n`} /> = number of sides, <KaTeXInline tex={rk`s`} /> = side length →{" "}
        <KaTeXInline tex={rk`P = n \times s`} />.
      </p>
      <p>
        Worked example <KaTeXInline tex={rk`n = 8,\ s = 1.5\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`P = 8 \times 1.5 = 12\ \mathrm{m}`} />

      <h5 id="polygons-rigger-insight">Rigger insight</h5>
      <p>As the number of sides increases, the shape behaves more like a circle: smoother load distribution and reduced edge stress.</p>

      <h4 id="geometry-2-3-area">2.3 Area (surface)</h4>
      <p>Area measures the surface inside a shape.</p>

      <h5 id="area-represents">What area represents</h5>
      <p>Contact surface between load and ground, structure, or rigging interface.</p>

      <h5 id="area-why">Why it matters</h5>
      <KaTeXBlock tex={rk`\text{Pressure} = \mathrm{Load} \div \mathrm{Area}`} />
      <ul>
        <li>Smaller area → higher pressure → higher failure risk</li>
        <li>Larger area → lower pressure → safer distribution</li>
      </ul>

      <p>
        <strong>Square:</strong> <KaTeXInline tex={rk`s = 4\ \mathrm{m}`} /> →{" "}
      </p>
      <KaTeXBlock tex={rk`A = s^2 = 4^2 = 16\ \mathrm{m}^2`} />

      <p>
        <strong>Rectangle:</strong> <KaTeXInline tex={rk`l = 6\ \mathrm{m},\ w = 3\ \mathrm{m}`} /> →
      </p>
      <KaTeXBlock tex={rk`A = l \times w = 6 \times 3 = 18\ \mathrm{m}^2`} />

      <p>
        <strong>Triangle:</strong> <KaTeXInline tex={rk`b = 4\ \mathrm{m},\ h = 3\ \mathrm{m}`} /> →
      </p>
      <KaTeXBlock tex={rk`A = \tfrac{1}{2} \times b \times h = \tfrac{1}{2} \times 4 \times 3 = 6\ \mathrm{m}^2`} />

      <p>
        <strong>Circle:</strong> <KaTeXInline tex={rk`r = 2\ \mathrm{m}`} />, using <KaTeXInline tex={rk`\pi \approx 3.14`} />:
      </p>
      <KaTeXBlock tex={rk`A = 3.14 \times r^2 = 3.14 \times 4 = 12.56\ \mathrm{m}^2`} />

      <h5 id="area-rigger-insight">Rigger insight</h5>
      <p>Area determines whether the ground or structure can safely support the load.</p>

      <h4 id="geometry-2-4-volume">2.4 Volume (3D space)</h4>
      <p>Volume measures how much space an object occupies—how much material is present if solid.</p>

      <h5 id="volume-matters">Why it matters</h5>
      <KaTeXBlock tex={rk`\text{Weight} = \text{Volume} \times \text{Density}`} />

      <p>
        <strong>Cube:</strong> <KaTeXInline tex={rk`s = 2\ \mathrm{m}`} /> →
      </p>
      <KaTeXBlock tex={rk`V = s^3 = 2^3 = 8\ \mathrm{m}^3`} />

      <p>
        <strong>Rectangular prism:</strong>
      </p>
      <KaTeXBlock tex={rk`V = 2 \times 1 \times 0.5 = 1\ \mathrm{m}^3`} />

      <p>
        <strong>Cylinder:</strong> <KaTeXInline tex={rk`r = 0.5\ \mathrm{m},\ h = 6\ \mathrm{m}`} />, <KaTeXInline tex={rk`\pi \approx 3.14`} />:
      </p>
      <KaTeXBlock tex={rk`V = \pi r^2 h = 3.14 \times 0.25 \times 6 = 4.71\ \mathrm{m}^3`} />

      <h5 id="volume-rigger-insight">Rigger insight</h5>
      <p>Volume without material type is incomplete—density must always be considered.</p>

      <h4 id="geometry-2-5-hollow">2.5 Hollow shapes</h4>
      <p>Most engineered objects are hollow to reduce weight while maintaining strength.</p>

      <KaTeXBlock tex={rk`V_{\mathrm{material}} = V_{\mathrm{outer}} - V_{\mathrm{inner}}`} />
      <p>
        Example: outer = <KaTeXInline tex={rk`5.0\ \mathrm{m}^3`} />, inner = <KaTeXInline tex={rk`3.2\ \mathrm{m}^3`} /> →
      </p>
      <KaTeXBlock tex={rk`\text{Material} = 5.0 - 3.2 = 1.8\ \mathrm{m}^3`} />

      <h5 id="hollow-rigger-insight">Rigger insight</h5>
      <p>Always confirm whether a load is solid or hollow—this drastically affects weight.</p>

      <h4 id="geometry-2-6-composite">2.6 Composite shapes</h4>
      <p>Real-world loads combine multiple shapes—break them into simple known forms.</p>

      <p>
        <strong>Example</strong>
      </p>
      <ul>
        <li>
          Base: <KaTeXInline tex={rk`2 \times 2 \times 0.5 = 2\ \mathrm{m}^3`} />
        </li>
        <li>
          Cylinder: <KaTeXInline tex={rk`3.14 \times (0.5^2) \times 2 = 1.57\ \mathrm{m}^3`} />
        </li>
      </ul>
      <KaTeXBlock tex={rk`V_{\mathrm{total}} = 2 + 1.57 = 3.57\ \mathrm{m}^3`} />

      <h5 id="composite-rigger-insight">Rigger insight</h5>
      <p>Breaking shapes down reduces error and increases calculation accuracy.</p>

      <h4 id="geometry-2-7-practice">2.7 Practice (showing formulas)</h4>
      <ol className="space-y-6">
        <li>
          <strong>Rectangle perimeter:</strong> <KaTeXInline tex={rk`l = 10\ \mathrm{m},\ w = 4\ \mathrm{m}`} />
          <KaTeXBlock tex={rk`P = 2(l + w) = 2(10 + 4) = 28\ \mathrm{m}`} />
        </li>
        <li>
          <strong>Hexagon perimeter:</strong> <KaTeXInline tex={rk`n = 6,\ s = 2\ \mathrm{m}`} />
          <KaTeXBlock tex={rk`P = 6 \times 2 = 12\ \mathrm{m}`} />
        </li>
        <li>
          <strong>Square area:</strong> <KaTeXInline tex={rk`s = 3\ \mathrm{m}`} /> → <KaTeXBlock tex={rk`A = s^2 = 9\ \mathrm{m}^2`} />
        </li>
        <li>
          <strong>Cylinder volume:</strong> <KaTeXInline tex={rk`r = 1\ \mathrm{m},\ h = 5\ \mathrm{m}`} />
          <KaTeXBlock tex={rk`V = 3.14 \times r^2 \times h = 3.14 \times 1 \times 5 = 15.7\ \mathrm{m}^3`} />
        </li>
      </ol>

      <h4 id="geometry-2-8-takeaways">2.8 Core takeaways</h4>
      <ul>
        <li>Every shape has a formula</li>
        <li>Every formula has a physical meaning</li>
        <li>Every result affects a real rigging decision</li>
      </ul>

      <h3 id="section-2-final-rigger">Final — think like a rigger</h3>
      <p>A load is always:</p>
      <ul>
        <li>A shape</li>
        <li>With dimensions</li>
        <li>That can be calculated</li>
      </ul>
      <p>
        <strong>Mental model:</strong> identify the shape → apply the formula → interpret the result → estimate weight, select rigging, plan lifts safely.
      </p>

      <hr className="not-prose my-16 border-border" />

      <h2 id="section-4-triangles-trigonometry">Section 4 — Triangles and trigonometry</h2>
      <p className="not-prose text-lg text-muted-foreground">Understanding angles, distances, and forces in rigging.</p>

      <h4 id="trig-4-1-why">4.1 Why triangles matter</h4>
      <p>
        Triangles are the most important shape in rigging—two-leg slings, three-leg bridles, and the boom–load line form triangles.
      </p>

      <h5 id="trig-why-critical">Why triangles are critical</h5>
      <ul>
        <li>They do not change shape under load (structurally determinate)</li>
        <li>They transfer forces predictably</li>
        <li>They allow calculation of unknown distances and angles</li>
      </ul>

      <h5 id="trig-rigger-insight-41">Rigger insight</h5>
      <p>All rigging forces are solved using triangles.</p>

      <h4 id="trig-4-2-right-triangles">4.2 Right triangles</h4>
      <p>A right triangle has one <KaTeXInline tex={rk`90^{\circ}`} /> angle, two legs, and a hypotenuse (longest side).</p>
      <ul>
        <li>
          <KaTeXInline tex={rk`a`} /> = base (horizontal)
        </li>
        <li>
          <KaTeXInline tex={rk`b`} /> = height (vertical)
        </li>
        <li>
          <KaTeXInline tex={rk`c`} /> = hypotenuse
        </li>
      </ul>

      <h5 id="pythagorean">Pythagorean theorem</h5>
      <p>The square of the hypotenuse equals the sum of squares of the other two sides.</p>
      <KaTeXBlock tex={rk`c^2 = a^2 + b^2 \quad\Rightarrow\quad c = \sqrt{a^2 + b^2}`} />

      <p>
        <strong>Worked example:</strong> <KaTeXInline tex={rk`a = 15\ \mathrm{m},\ b = 15\ \mathrm{m}`} />.
      </p>
      <KaTeXBlock tex={rk`\begin{aligned} a^2 &= 225,\quad b^2 = 225 \\ 225 + 225 &= 450 \\ c &= \sqrt{450} \approx 21.21\ \mathrm{m} \end{aligned}`} />

      <h5 id="pythagorean-interpret">Interpretation</h5>
      <p>The hypotenuse models sling length, boom/reach distance, or diagonal clearances.</p>

      <h5 id="pythagorean-rigger-insight">Rigger insight</h5>
      <p>Use this to find sling lengths, calculate reach, and determine clearances.</p>

      <h4 id="trig-4-3-functions">4.3 Trigonometric functions</h4>
      <p>For angle <KaTeXInline tex={rk`\theta`} /> in a right triangle:</p>
      <KaTeXBlock tex={rk`\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}},\quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}},\quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}`} />

      <h5 id="trig-what-means">What each function means (field language)</h5>
      <ul>
        <li>
          <strong>Sine</strong> — vertical vs. hypotenuse
        </li>
        <li>
          <strong>Cosine</strong> — horizontal vs. hypotenuse
        </li>
        <li>
          <strong>Tangent</strong> — slope / steepness (opposite ÷ adjacent)
        </li>
      </ul>

      <h5 id="triangle-reference">Triangle reference</h5>
      <p>Opposite (vertical), adjacent (horizontal), hypotenuse (longest side).</p>

      <h4 id="trig-4-4-use">4.4 How riggers use trigonometry</h4>

      <p>
        <strong>1. Solve for unknown sides</strong> — given an angle and one side, find the rest.
      </p>
      <p>
        <strong>Example — sling height:</strong> length = <KaTeXInline tex={rk`10\ \mathrm{m}`} />, <KaTeXInline tex={rk`\theta = 30^{\circ}`} /> (from horizontal or as given in your sketch—here follow your model with sine):
      </p>
      <KaTeXBlock tex={rk`\sin 30^{\circ} = \frac{\mathrm{height}}{\mathrm{hypotenuse}} = \frac{\mathrm{height}}{10} = 0.5 \quad\Rightarrow\quad \mathrm{height} = 5\ \mathrm{m}`} />
      <p>The vertical component of the sling path is <KaTeXInline tex={rk`5\ \mathrm{m}`} /> in this setup.</p>

      <p>
        <strong>2. Solve for angles</strong> — given two sides:
      </p>
      <KaTeXBlock tex={rk`\mathrm{opposite} = 5,\ \mathrm{adjacent} = 10 \quad\Rightarrow\quad \tan\theta = \frac{5}{10} = 0.5 \quad\Rightarrow\quad \theta \approx 26.6^{\circ}`} />

      <p>
        <strong>3. Combined right-triangle solution:</strong> base = <KaTeXInline tex={rk`12\ \mathrm{m}`} />, height = <KaTeXInline tex={rk`5\ \mathrm{m}`} />:
      </p>
      <KaTeXBlock tex={rk`\begin{aligned} c &= \sqrt{12^2 + 5^2} = \sqrt{169} = 13\ \mathrm{m} \\ \tan\theta &= \frac{5}{12} \quad\Rightarrow\quad \theta \approx 22.6^{\circ} \end{aligned}`} />

      <p>Interpretation: sling/diagonal length ≈ <KaTeXInline tex={rk`13\ \mathrm{m}`} />; angle ≈ <KaTeXInline tex={rk`22.6^{\circ}`} /> (per your measurement convention).</p>

      <h4 id="trig-4-5-angles-critical">4.5 Why angles are critical in rigging</h4>
      <p>
        <strong>Key principle:</strong> as a sling angle becomes flatter (relative to the direction that increases horizontal component), tension in the leg increases.
      </p>
      <p>A flatter leg often carries more tension for the same vertical load—small angle changes produce large force swings.</p>

      <h5 id="angles-rigger-insight">Rigger insight</h5>
      <p>Angle errors are a common contributor to sling overload and failure—Section 5 turns these triangles into sling tensions and capacities.</p>

      <h4 id="trig-4-6-practice">4.6 Practice (with formulas)</h4>
      <ol className="space-y-6">
        <li>
          <strong>Hypotenuse:</strong> <KaTeXInline tex={rk`a = 9\ \mathrm{m},\ b = 12\ \mathrm{m}`} />
          <KaTeXBlock tex={rk`81 + 144 = 225 \quad\Rightarrow\quad c = 15\ \mathrm{m}`} />
        </li>
        <li>
          <strong>Height with sine:</strong> <KaTeXInline tex={rk`\theta = 30^{\circ}`} />, hypotenuse = <KaTeXInline tex={rk`8\ \mathrm{m}`} />
          <KaTeXBlock tex={rk`0.5 = \frac{\mathrm{opposite}}{8} \quad\Rightarrow\quad \mathrm{opposite} = 4\ \mathrm{m}`} />
        </li>
        <li>
          <strong>Angle with tangent:</strong> opposite = 6, adjacent = 8 →
          <KaTeXBlock tex={rk`\tan\theta = 0.75 \quad\Rightarrow\quad \theta \approx 36.9^{\circ}`} />
        </li>
      </ol>

      <h4 id="trig-4-7-takeaways">4.7 Core takeaways</h4>
      <ul>
        <li>Triangles are the foundation of rigging math</li>
        <li>Pythagoras finds distances</li>
        <li>Trig links angles and lengths</li>
        <li>Angles directly affect forces</li>
      </ul>

      <h3 id="section-4-final-rigger">Final — think like a rigger</h3>
      <p>You are not solving abstract problems—you are determining sling lengths, load angles, and force directions.</p>
      <p>
        <strong>Mental model:</strong> two sides → find the third; one side + one angle → solve the rest of the triangle.
      </p>

    </>
  );
}
