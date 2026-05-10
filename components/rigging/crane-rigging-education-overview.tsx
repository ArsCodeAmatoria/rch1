import {Separator} from "@/components/ui/separator";

type Locale = "en" | "fr";

/** Long-form educational introduction: crane rigging & advanced rigging (reference scope, purpose, standards awareness). */
export function CraneRiggingEducationOverview({locale}: {readonly locale: Locale}) {
  const rig = (slug: string) => `/${locale}/rigging/${slug}`;
  const eduModule = (slug: string) => `/${locale}/rigging/education/${slug}`;
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/70 prose-h2:pb-2 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-foreground/90 prose-li:marker:text-muted-foreground">
      <p className="not-prose text-lg font-medium text-muted-foreground">Technical education &amp; reference material</p>

      <section id="introduction" className="not-prose mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
        <p>
          Crane rigging is a critical component of crane and hoisting operations within construction, industrial, marine, infrastructure,
          manufacturing, and heavy lifting environments. Proper rigging practices are essential for maintaining load stability, protecting
          workers, preventing equipment failure, and supporting safe lifting operations.
        </p>
        <p>
          This educational resource provides foundational and advanced knowledge related to rigging systems, lifting hardware, sling
          configurations, load behavior, communication practices, lift planning, and crane awareness. The material is intended to support the
          development of technical understanding for workers involved in lifting operations and those pursuing careers within crane and
          rigging industries.
        </p>
        <p>
          The content combines practical field knowledge with awareness of modern industry standards, regulatory principles, engineering
          concepts, and operational best practices commonly found throughout crane-supported industries.
        </p>
      </section>

      <h2 id="purpose">Purpose of this material</h2>
      <p>The purpose of this material is to provide structured educational information related to crane rigging and advanced rigging operations.</p>
      <p>
        <strong>Topics throughout this resource explore:</strong>
      </p>
      <ul>
        <li>Rigging hardware and sling systems</li>
        <li>Inspection principles and removal criteria</li>
        <li>Load behavior and center of gravity</li>
        <li>Sling forces and rigging calculations</li>
        <li>Crane awareness for riggers</li>
        <li>Communication systems and signaling</li>
        <li>Load control techniques</li>
        <li>Environmental and operational hazards</li>
        <li>Lift planning concepts</li>
        <li>Critical and engineered lift awareness</li>
      </ul>
      <p>
        <strong>The material is designed to support:</strong>
      </p>
      <ul>
        <li>Apprenticeship learning</li>
        <li>Trade education</li>
        <li>Career development</li>
        <li>Technical reference</li>
        <li>Industry awareness</li>
        <li>Continuing education</li>
        <li>Construction safety knowledge</li>
      </ul>

      <h2 id="industry-context">Industry context</h2>
      <p>Rigging operations are used in nearly every sector involving material handling and lifting equipment. Modern rigging work may involve:</p>
      <ul>
        <li>Tower cranes</li>
        <li>Mobile cranes</li>
        <li>Self-erecting cranes</li>
        <li>Overhead cranes</li>
        <li>Gantry systems</li>
        <li>Marine lifting systems</li>
        <li>Industrial hoisting systems</li>
        <li>Specialized engineered lifting devices</li>
      </ul>
      <p>
        Rigging personnel must understand how loads behave during lifting operations and how forces affect equipment, cranes, structures, and
        personnel working around lifting activities.
      </p>
      <p>
        <strong>Even relatively simple lifts may involve:</strong>
      </p>
      <ul>
        <li>Dynamic loading</li>
        <li>Sling angle force amplification</li>
        <li>Load instability</li>
        <li>Environmental effects</li>
        <li>Communication challenges</li>
        <li>Restricted work areas</li>
        <li>Multiple trades working simultaneously</li>
      </ul>
      <p>Because of these variables, rigging requires both technical knowledge and situational awareness.</p>

      <h2 id="standards">Standards, regulations &amp; industry references</h2>
      <p>This educational material references concepts commonly associated with:</p>
      <ul>
        <li>WorkSafeBC Occupational Health &amp; Safety Regulation (OHSR)</li>
        <li>BC Crane Safety guidance</li>
        <li>CSA standards</li>
        <li>ASME B30 standards</li>
        <li>EN and FEM lifting principles</li>
        <li>Manufacturer operating requirements</li>
        <li>Engineered lift planning principles</li>
      </ul>
      <p>
        These references are included for educational and awareness purposes and should always be supplemented by site-specific procedures,
        engineered instructions, manufacturer documentation, and applicable regulatory requirements.
      </p>

      <h2 id="areas-of-study">Areas of study</h2>
      <p>This resource explores both foundational and advanced rigging concepts, including:</p>

      <h3>Rigging fundamentals</h3>
      <ul>
        <li>Rigging hardware</li>
        <li>Sling types</li>
        <li>Hitch configurations</li>
        <li>Inspection principles</li>
        <li>Basic load handling</li>
      </ul>

      <h3>Rigging mathematics &amp; physics</h3>
      <ul>
        <li>Sling angle calculations</li>
        <li>Force vectors</li>
        <li>Center of gravity</li>
        <li>Load distribution</li>
        <li>Dynamic loading effects</li>
      </ul>

      <h3>Crane awareness</h3>
      <ul>
        <li>Radius awareness</li>
        <li>Swing hazards</li>
        <li>Load path considerations</li>
        <li>Powerline hazards</li>
        <li>Environmental limitations</li>
      </ul>

      <h3>Advanced rigging concepts</h3>
      <ul>
        <li>Non-symmetrical loading</li>
        <li>Multiple crane lifts</li>
        <li>Specialized lifting devices</li>
        <li>Load manipulation</li>
        <li>Engineered lifting systems</li>
      </ul>

      <h3>Lift planning concepts</h3>
      <ul>
        <li>Pre-lift planning</li>
        <li>Hazard identification</li>
        <li>Communication systems</li>
        <li>Critical lift awareness</li>
        <li>Contingency considerations</li>
      </ul>

      <h2 id="philosophy">Educational philosophy</h2>
      <p>
        This material is intended to support technical understanding rather than replace field experience, supervision, engineered planning,
        or regulatory requirements.
      </p>
      <p>
        <strong>Safe rigging practices depend on:</strong>
      </p>
      <ul>
        <li>Proper planning</li>
        <li>Competent supervision</li>
        <li>Equipment inspection</li>
        <li>Clear communication</li>
        <li>Situational awareness</li>
        <li>Understanding load behavior</li>
        <li>Adherence to applicable standards and procedures</li>
      </ul>
      <p>
        Rigging is both a technical discipline and a practical field skill developed through continued study, observation, mentorship, and
        experience within lifting operations.
      </p>

      <div className="not-prose my-10 rounded-xl border border-border bg-muted/25 p-6 dark:bg-muted/15">
        <h2 className="text-lg font-semibold text-foreground">Curriculum modules</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Structured units that build on this overview—through math, field practice, and communication—then advanced sling geometry, load
          stability, suspended load control, manual hoists / tensioning, multi-crane / tandem lifts, below-the-hook specialty devices, crane
          physics for riggers, environmental / site hazards, lift planning / critical lifts, practical field rigging applications, and safety
          culture / human factors for operational decision-making, plus reference tables, field guideline awareness, and a glossary of common crane
          and rigging terms, closing with applied integration and operational readiness, Module 21 on knots and rope applications, Module 22 on block and
          tackle / reeving / mechanical advantage, Module 23 on heavy lift engineering and advanced rigging systems, Module 24 on tower crane rigging
          operations, Module 25 on rigging incident case studies and failure analysis, plus Appendix A on standard hand signals, Appendix B on basic rigging
          math and formulas, Appendix C on rigging equipment identification and hardware reference, Appendix D on crane types and operational characteristics,
          and Appendix E on BC regulations, standards, and compliance awareness.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a href={eduModule("module-1")} className="font-medium text-primary hover:underline">
              Module 1 — Regulations, standards &amp; responsibilities
            </a>
          </li>
          <li>
            <a href={eduModule("module-2")} className="font-medium text-primary hover:underline">
              Module 2 — Rigging equipment knowledge
            </a>
          </li>
          <li>
            <a href={eduModule("module-3")} className="font-medium text-primary hover:underline">
              Module 3 — Inspection &amp; removal criteria
            </a>
          </li>
          <li>
            <a href={eduModule("module-4")} className="font-medium text-primary hover:underline">
              Module 4 — Crane awareness for riggers
            </a>
          </li>
          <li>
            <a href={eduModule("module-5")} className="font-medium text-primary hover:underline">
              Module 5 — Basic rigging practices
            </a>
          </li>
          <li>
            <a href={eduModule("module-6")} className="font-medium text-primary hover:underline">
              Module 6 — Rigging math &amp; load calculations
            </a>
          </li>
          <li>
            <a href={eduModule("module-7")} className="font-medium text-primary hover:underline">
              Module 7 — Communication &amp; signaling
            </a>
          </li>
          <li>
            <a href={eduModule("module-8")} className="font-medium text-primary hover:underline">
              Module 8 — Advanced sling geometry &amp; load behavior
            </a>
          </li>
          <li>
            <a href={eduModule("module-9")} className="font-medium text-primary hover:underline">
              Module 9 — Advanced load control
            </a>
          </li>
          <li>
            <a href={eduModule("module-10")} className="font-medium text-primary hover:underline">
              Module 10 — Chainfalls, lever hoists &amp; tensioning devices
            </a>
          </li>
          <li>
            <a href={eduModule("module-11")} className="font-medium text-primary hover:underline">
              Module 11 — Multiple crane &amp; tandem lifts
            </a>
          </li>
          <li>
            <a href={eduModule("module-12")} className="font-medium text-primary hover:underline">
              Module 12 — Specialty lifting devices &amp; attachments
            </a>
          </li>
          <li>
            <a href={eduModule("module-13")} className="font-medium text-primary hover:underline">
              Module 13 — Crane physics for riggers
            </a>
          </li>
          <li>
            <a href={eduModule("module-14")} className="font-medium text-primary hover:underline">
              Module 14 — Environmental &amp; site hazards
            </a>
          </li>
          <li>
            <a href={eduModule("module-15")} className="font-medium text-primary hover:underline">
              Module 15 — Lift planning &amp; critical lifts
            </a>
          </li>
          <li>
            <a href={eduModule("module-16")} className="font-medium text-primary hover:underline">
              Module 16 — Practical rigging applications &amp; field operations
            </a>
          </li>
          <li>
            <a href={eduModule("module-17")} className="font-medium text-primary hover:underline">
              Module 17 — Rigging safety culture, human factors &amp; operational decision-making
            </a>
          </li>
          <li>
            <a href={eduModule("module-18")} className="font-medium text-primary hover:underline">
              Module 18 — Rigging reference tables, field guidelines &amp; operational awareness
            </a>
          </li>
          <li>
            <a href={eduModule("module-19")} className="font-medium text-primary hover:underline">
              Module 19 — Glossary of crane &amp; rigging terms
            </a>
          </li>
          <li>
            <a href={eduModule("module-20")} className="font-medium text-primary hover:underline">
              Module 20 — Final integration: applied rigging knowledge &amp; operational readiness
            </a>
          </li>
          <li>
            <a href={eduModule("module-21")} className="font-medium text-primary hover:underline">
              Module 21 — Knots, hitches &amp; rope applications
            </a>
          </li>
          <li>
            <a href={eduModule("module-22")} className="font-medium text-primary hover:underline">
              Module 22 — Block &amp; tackle, reeving &amp; mechanical advantage systems
            </a>
          </li>
          <li>
            <a href={eduModule("module-23")} className="font-medium text-primary hover:underline">
              Module 23 — Heavy lift engineering &amp; advanced rigging systems
            </a>
          </li>
          <li>
            <a href={eduModule("module-24")} className="font-medium text-primary hover:underline">
              Module 24 — Tower crane rigging operations
            </a>
          </li>
          <li>
            <a href={eduModule("module-25")} className="font-medium text-primary hover:underline">
              Module 25 — Rigging incident case studies &amp; failure analysis
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-a")} className="font-medium text-primary hover:underline">
              Appendix A — Standard hand signals for crane &amp; rigging operations
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-b")} className="font-medium text-primary hover:underline">
              Appendix B — Basic rigging math reference &amp; formulas
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-c")} className="font-medium text-primary hover:underline">
              Appendix C — Rigging equipment identification &amp; hardware reference
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-d")} className="font-medium text-primary hover:underline">
              Appendix D — Crane types &amp; operational characteristics
            </a>
          </li>
          <li>
            <a href={eduModule("appendix-e")} className="font-medium text-primary hover:underline">
              Appendix E — BC regulations, standards &amp; compliance quick reference
            </a>
          </li>
        </ul>
      </div>

      <Separator className="not-prose my-10" />

      <div className="not-prose rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Continue in the rigging library</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Topic pages expand these themes into procedure-oriented summaries, planning callouts, and field controls.
        </p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <li>
            <a href={rig("basic-rigging")} className="font-medium text-primary hover:underline">
              Basic rigging
            </a>
          </li>
          <li>
            <a href={rig("advanced-rigging")} className="font-medium text-primary hover:underline">
              Advanced rigging
            </a>
          </li>
          <li>
            <a href={rig("sling-selection")} className="font-medium text-primary hover:underline">
              Sling selection
            </a>
          </li>
          <li>
            <a href={rig("critical-lifts")} className="font-medium text-primary hover:underline">
              Critical lifts
            </a>
          </li>
          <li>
            <a
              href={`/${locale}/tower-cranes/operator-training-program/mathematics`}
              className="font-medium text-primary hover:underline"
            >
              Crane &amp; rigging mathematics (operator programme)
            </a>
          </li>
          <li>
            <a href={`/${locale}/rigging`} className="font-medium text-primary hover:underline">
              All rigging topics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
