import {Link} from "@/i18n/navigation";
import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";

/** In-page links use descriptive anchor text for readers, crawlers, and topical clarity (avoid generic “click here”). */
export function ProgramOverviewSections() {
  return (
    <TrainingProse>
      <h1 className="text-balance">Tower Crane Operator Training Program</h1>
      <p className="lead text-muted-foreground not-prose text-lg">
        <strong className="text-foreground">British Columbia</strong> regulatory framework, alignment with{" "}
        <ExternalLink href={AUTHORITY_URLS.csaGroup} className="text-foreground/90">
          CSA Group
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href={AUTHORITY_URLS.asmeOrg} className="text-foreground/90">
          ASME
        </ExternalLink>
        , <em className="text-foreground/95">Red Seal</em>–oriented knowledge, and advanced mechanical systems for tower crane operators.
      </p>

      <h2>Governing and Referenced Authorities</h2>
      <p>
        This program is built from the{" "}
        <strong>statutory, regulatory, and industry frameworks</strong> that govern tower crane operations in British Columbia and
        across North America. It reflects technical standards, regulatory expectations, and industry practice recognized by:
      </p>
      <ul>
        <li>
          <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink> — provincial OHS enforcement &amp; OHSR
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.bcCraneSafety}>BC Crane Safety</ExternalLink> — crane operator certification (BC)
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.skilledTradesBc}>SkilledTradesBC</ExternalLink> — apprenticeship &amp; credentials
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.redSeal}>Red Seal Program</ExternalLink> — interprovincial standards
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.csaGroup}>CSA Group</ExternalLink> — standards including Z248
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.asmeOrg}>American Society of Mechanical Engineers</ExternalLink> — B30 series
        </li>
        <li>Fulford Certification (industry credentialing — verify current provider with your employer or BC Crane Safety)</li>
      </ul>
      <p>
        For broader context on how codes fit together on site, see our{" "}
        <Link href="/standards" className="font-medium text-primary no-underline hover:underline">
          standards and code family overview
        </Link>{" "}
        and the{" "}
        <Link href="/tower-cranes" className="font-medium text-primary no-underline hover:underline">
          tower cranes knowledge hub
        </Link>
        . The detailed program track for legislation and adopted standards is{" "}
        <Link
          href="/tower-cranes/operator-training-program/regulatory-standards"
          className="font-medium text-primary no-underline hover:underline"
        >
          Section 1 – Regulatory and standards framework (BC, CSA Z248, ASME B30.3)
        </Link>
        .
      </p>

      <h2>Program Objective</h2>
      <p>
        The objective is to develop <strong>competent, mechanically literate, safety-focused</strong> tower crane operators who understand the
        technical and regulatory environment in BC and North America.
      </p>
      <p>
        <em>Core themes</em> in this program include:
      </p>
      <ul>
        <li>
          <strong>Regulatory awareness</strong> — aligned with{" "}
          <Link
            href="/tower-cranes/operator-training-program/regulatory-knowledge-requirements"
            className="text-primary no-underline hover:underline"
          >
            OHSR-focused regulatory knowledge (Section 10)
          </Link>
        </li>
        <li>
          <strong>Mechanical and structural understanding</strong> — see{" "}
          <Link href="/tower-cranes/operator-training-program/mechanical-systems" className="text-primary no-underline hover:underline">
            Section 4 – Mechanical systems (hoist, slew, luffing)
          </Link>
        </li>
        <li>
          <strong>Lifting physics and mathematics</strong> —{" "}
          <Link href="/tower-cranes/operator-training-program/mathematics" className="text-primary no-underline hover:underline">
            Section 2 – Mathematics for tower crane operators
          </Link>
        </li>
        <li>
          <strong>Load charts and capacity</strong> —{" "}
          <Link href="/tower-cranes/operator-training-program/load-charts-capacity" className="text-primary no-underline hover:underline">
            Section 3 – Load charts &amp; capacity interpretation
          </Link>
        </li>
        <li>
          <strong>Rigging and load path awareness</strong> — companion material on{" "}
          <Link href="/rigging" className="text-primary no-underline hover:underline">
            rigging fundamentals
          </Link>{" "}
          and{" "}
          <Link href="/hoisting" className="text-primary no-underline hover:underline">
            hoisting practice
          </Link>
        </li>
        <li>
          <strong>Documentation and site coordination</strong> — ties to{" "}
          <Link href="/safety-program" className="text-primary no-underline hover:underline">
            site safety program topics
          </Link>{" "}
          and inspection discipline in{" "}
          <Link href="/tower-cranes/operator-training-program/inspection-maintenance" className="text-primary no-underline hover:underline">
            Section 6 – Inspection &amp; maintenance
          </Link>
        </li>
      </ul>
      <p>
        This curriculum is <em>not</em> a certification substitute; it supports the knowledge base expected for industry qualifications and
        continuing development. The{" "}
        <Link href="/knowledge" className="font-medium text-primary no-underline hover:underline">
          knowledge library
        </Link>{" "}
        collects related crane and rigging articles for deeper reading.
      </p>
      <p>
        For exam-style practice and chart-based drills, use this site&apos;s{" "}
        <Link href="/redtc/test" className="font-semibold text-primary no-underline hover:underline">
          REDTC practice tests
        </Link>
        ,{" "}
        <Link href="/redtc/load-charts" className="font-semibold text-primary no-underline hover:underline">
          REDTC PDF load chart exercises
        </Link>
        , and the{" "}
        <Link href="/redtc" className="font-medium text-primary no-underline hover:underline">
          REDTC home (all tower crane study modes)
        </Link>
        — structured practice for Red Seal–style and trade-review preparation.
      </p>
      <p>
        Together, instruction, field experience, and study develop professionals capable of <strong>safe, effective lifting</strong> on complex
        construction projects.
      </p>
    </TrainingProse>
  );
}
