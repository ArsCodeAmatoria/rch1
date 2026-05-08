import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {Link} from "@/i18n/navigation";

export function Section8OverlapRightOfWay() {
  return (
    <>
      <h2 id="section-8">Section 8 – Crane Overlap, Right of Way &amp; Communication Control</h2>
      <p>
        <strong>Multi-crane environments</strong> are among the most complex challenges in tower crane work. In dense urban construction—Vancouver,
        Toronto, New York, London—overlapping radii are the <em>norm</em>, not the exception.
      </p>
      <p>
        Early postwar operations relied on judgment and radio. Collision histories drove formal right-of-way rules, engineered overlap studies,
        and anti-collision systems. Today overlap management is <strong>codified</strong>, not informal. Pair this section with{" "}
        <Link href="/tower-cranes/operator-training-program/urban-operations" className="font-medium text-primary no-underline hover:underline">
          Section 7 – Urban operations
        </Link>
        ,{" "}
        <Link href="/tower-cranes/operator-training-program/advanced-urban-compliance" className="text-primary no-underline hover:underline">
          Section 11 – Advanced urban compliance
        </Link>
        , and BC duties in{" "}
        <Link href="/tower-cranes/operator-training-program/regulatory-knowledge-requirements" className="text-primary no-underline hover:underline">
          Section 10 – Regulatory knowledge
        </Link>
        .
      </p>

      <h3>Regulatory Alignment</h3>
      <p>Overlap and right-of-way protocols align with:</p>
      <ul>
        <li>
          <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink>
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.bcCraneSafety}>BC Crane Safety</ExternalLink>
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.csaZ248Product}>CSA Group – CSA Z248 Code for Tower Cranes</ExternalLink>
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.asmeB303TowerCranes}>ASME B30.3 Tower Cranes</ExternalLink>
        </li>
      </ul>
      <p>
        In British Columbia, OHSR Part 14 requires employers to eliminate or control hazards from equipment interaction. Multi-crane overlap
        is a foreseeable hazard requiring engineered control.
      </p>

      <h3 id="module-8-1">Module 8.1 – Right of Way in Multi-Crane Operations</h3>

      <h4>General Industry Principle</h4>
      <p>
        The long-standing international principle: <strong>the lowest operating crane has right of way.</strong> Recognized across North
        America and Europe; embedded in site procedures, guidance, and manufacturer recommendations—not always as a single statutory
        sentence.
      </p>

      <h4>Historical Rationale</h4>
      <p>The rule developed from operational physics:</p>
      <ul>
        <li>The lower crane has fewer vertical escape options.</li>
        <li>The upper crane can luff up, raise boom angle, or hoist clear.</li>
        <li>It reduces risk of suspended load passing over another crane&apos;s load path.</li>
      </ul>
      <p>
        During the 1980s boom in Chicago and Hong Kong, near-miss reports documented upper cranes traveling across lower jib paths.
        Investigations concluded vertical clearance authority must be structured and predictable—the &ldquo;lowest crane right of way&rdquo;
        doctrine solidified.
      </p>

      <h4>Engineering Logic</h4>
      <p>Mechanically: the lower crane is constrained by ties and fixed mast geometry; the upper crane has greater hoisting/luffing to create separation; gravity makes falling objects from above catastrophic to those below. Control prioritizes protection of the lower envelope.</p>

      <h4>Important Clarification</h4>
      <p>
        Right of way is <strong>not</strong> automatic without procedure. It is only valid when formally defined within a written overlap
        plan, anti-collision programming, and site-specific safe work procedure. Without these, the concept becomes ambiguous and dangerous.
      </p>

      <h4>BC Regulatory Context</h4>
      <p>
        Under OHSR Part 14, employers must ensure operations do not endanger workers—including preventing crane-to-crane contact, load
        interference, and overswing into adjacent property or public space.
      </p>
      <p>
        BC Crane Safety requires documented engineering review when radii overlap. In Surrey, Burnaby, and other municipalities, engineered
        overlap drawings are routinely required for erection approval.
      </p>
      <p>CSA Z248 requires defined operating limitations, documented coordination, and clear assignment of operational authority.</p>
      <p>ASME B30.3 mandates multiple-crane operations be coordinated by a designated competent person to prevent interference.</p>

      <h4>Responsibility Hierarchy</h4>
      <p>
        <strong>Prime contractor</strong> — Under BC law: develop written overlap procedure; coordinate lift plans; ensure operator
        sign-off; establish communication and emergency stop protocols. Failure may result in orders or penalties.
      </p>
      <p>
        <strong>Crane owner / employer</strong> — Programmable anti-collision systems; height, slew, and radius limits; verify calibration
        matches engineered drawings; maintain functionality and logging.
      </p>
      <p>
        <strong>Operator</strong> — Final authority over movement: maintain programmed limits; refuse unsafe movement; stop on unclear
        instruction; confirm right-of-way before overlap zones. OHSR duty to refuse undue hazard applies to ambiguous overlap instruction.
      </p>
      <p>
        <strong>Rigger / signal person</strong> — Ground-level extension of operator: maintain exclusion zones under overlapping radii;
        ensure suspended loads do not conflict; monitor secondary crane movement; immediate stop if load paths intersect. Riggers need
        360° awareness of all active envelopes.
      </p>

      <h4>International Evolution</h4>
      <p>
        European requirements intensified after crane-to-crane collisions during high-rise expansion. Canada accelerated adoption after
        condominium development in Calgary and Montreal. British Columbia developed structured oversight suited to dense urban and seismic
        design culture.
      </p>

      <h4>Operational Philosophy</h4>
      <p>
        Overlap control is engineering controls, administrative controls, communication clarity, and operator professionalism. The lowest-crane
        principle imposes predictability on a three-dimensional hazard environment. In high-density construction, overlap management is the
        architecture of safe vertical growth.
      </p>

      <h3 id="module-8-2">Module 8.2 – Crane Overlap Procedure (Step-by-Step)</h3>
      <p>
        Multi-crane coordination in British Columbia is engineered, documented, and enforceable. Under{" "}
        <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink> and{" "}
        <ExternalLink href={AUTHORITY_URLS.bcCraneSafety}>BC Crane Safety</ExternalLink>, overlap is a predictable, controllable hazard. In Vancouver, Surrey, and other municipalities, engineered overlap studies are
        reviewed during erection approval. The process below reflects industry practice aligned with CSA Z248 and OHSR Part 14.{" "}
        <strong>No step is discretionary.</strong>
      </p>

      <ol className="list-decimal space-y-3 pl-5">
        <li>
          <strong>Engineering review of crane heights</strong> — Before erection or climbing, a professional engineer reviews free-standing
          mast height, tie-in elevations, jib lengths, maximum hook height, and building progression. Determines operational overlap zones at
          all phases. BC Crane Safety may require stamped drawings where envelopes intersect.
        </li>
        <li>
          <strong>Determine maximum hook block clearances</strong> — Account for maximum hoist-up, two-block limits, boom deflection, line
          stretch, wind pendulum. Clearance is measured at maximum dynamic condition, not at rest.
        </li>
        <li>
          <strong>Establish vertical separation minimum</strong> — Between jib-to-jib, load-to-jib, hook-to-jib—by engineering analysis.
          Incorporate into anti-collision programming, lift planning, and operator training. Separation must allow the upper crane to luff
          or hoist clear without delay in shared airspace.
        </li>
        <li>
          <strong>Define lowest crane priority</strong> — The lowest operating crane has right of way, but priority must be explicit in the
          overlap agreement—including which crane is lowest at each phase, changes after climbing, and temporary reversals if configuration
          changes.
        </li>
        <li>
          <strong>Program anti-collision limits</strong> — Encoders, trolley sensors, mast height, inter-crane communication. Owner
          ensures programming reflects the engineered study: slew, height, and radius zones; dynamic alarms before hard stop. Disabling
          anti-collision without engineered justification may violate regulation. Calibration must match field measurements.
        </li>
        <li>
          <strong>Issue written overlap agreement</strong> — Retained on site: engineered drawings, airspace diagrams, priority rules,
          communication protocol, emergency stop procedure, anti-collision configuration summary. Prime contractor ensures existence and
          communication to affected parties. <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink> may request documentation.
        </li>
        <li>
          <strong>Obtain operator sign-off</strong> — Each operator reviews drawings, confirms priority rules and programmed limits, signs
          confirming awareness. This is legal confirmation under OHSR training and hazard communication obligations.
        </li>
        <li>
          <strong>Conduct coordination meeting</strong> — Before concurrent operation: all operators, signal persons, rigging supervisors,
          prime contractor representative. Clarify right-of-way, radio channels, emergency stops, exclusion zones.
        </li>
        <li>
          <strong>Post airspace diagram in cab</strong> — Current overlap diagram, height relationships, restricted zones, emergency
          contacts—must reflect configuration after climbing or tie-in changes. An outdated diagram is a hazard.
        </li>
      </ol>

      <h4>Emergency Rule</h4>
      <p>
        <strong>If communication fails, all cranes stop.</strong> If radio contact is lost, anti-collision alarms malfunction,
        instructions are unclear, or weather reduces visibility beyond safe threshold—all operators cease motion and hold until communication
        is restored and conditions are confirmed. Movement without communication is uncontrolled risk. Professional operation is disciplined
        restraint; where communication ends, motion ends.
      </p>
    </>
  );
}
