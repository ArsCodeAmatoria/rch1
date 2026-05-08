import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {Link} from "@/i18n/navigation";

export function Module3AsmeStandards() {
  return (
    <>
      <h2 id="module-3">Module 3 – ASME Standards (International Reference)</h2>
      <p className="text-sm text-muted-foreground">Published by: American Society of Mechanical Engineers</p>
      <p>
        <strong>CSA</strong> governs Canadian practice; <strong>ASME B30</strong> provides the principal U.S. reference. Operators in cross-border or OEM
        documentation must understand <em>both</em> systems—compare{" "}
        <Link
          href={"/tower-cranes/operator-training-program/regulatory-standards#module-2" as never}
          className="font-medium text-primary no-underline hover:underline"
        >
          Module 2 – CSA (above)
        </Link>{" "}
        and the{" "}
        <Link href="/standards" className="text-primary no-underline hover:underline">
          standards overview
        </Link>
        ; apply chart markings through{" "}
        <Link href="/tower-cranes/operator-training-program/load-charts-capacity" className="text-primary no-underline hover:underline">
          Section 3 – Load charts
        </Link>
        .
      </p>

      <h3>Primary Standard: ASME B30.3 – Tower Cranes</h3>
      <p>
        <ExternalLink href={AUTHORITY_URLS.asmeB303TowerCranes}>ASME B30.3 – Tower Cranes</ExternalLink> establishes safety standards in the U.S.
        and in jurisdictions adopting ASME codes. Publisher hub: <ExternalLink href={AUTHORITY_URLS.asmeOrg}>ASME</ExternalLink>.
      </p>
      <h4>Coverage Includes:</h4>
      <ul>
        <li>Construction and structural integrity requirements</li>
        <li>Mechanical and electrical system provisions</li>
        <li>Load-handling component standards</li>
        <li>Safety device requirements</li>
        <li>Operational limitations</li>
      </ul>

      <h4>Load Rating and Marking</h4>
      <p>ASME B30.3 defines requirements for:</p>
      <ul>
        <li>Rated capacity markings</li>
        <li>Load chart presentation</li>
        <li>Warning signage</li>
        <li>Operator visibility of rated capacities</li>
      </ul>
      <p>
        The load rating philosophy reflects U.S. engineering practice and differs in terminology and presentation from CSA standards.
      </p>

      <h4>Inspection Classification</h4>
      <p>ASME B30.3 defines inspection categories:</p>
      <ul>
        <li>Frequent inspections</li>
        <li>Periodic inspections</li>
      </ul>
      <p>
        While structurally similar to CSA classifications, interval definitions and documentation expectations may differ.
      </p>

      <h4>Operational Safety Requirements</h4>
      <p>Operational provisions address:</p>
      <ul>
        <li>Operator responsibilities</li>
        <li>Wind limitations</li>
        <li>Communication and signalperson coordination</li>
        <li>Prohibited practices</li>
        <li>Authority to refuse unsafe lifts</li>
      </ul>

      <h4>Maintenance Standards</h4>
      <p>Maintenance provisions include:</p>
      <ul>
        <li>Scheduled inspections</li>
        <li>Component replacement thresholds</li>
        <li>Structural condition monitoring</li>
        <li>Documentation retention</li>
      </ul>

      <h4>Climbing Procedures</h4>
      <p>
        Climbing operations must follow manufacturer instructions and engineered procedures. Structural verification and supervision
        requirements are defined to ensure system stability during mast insertion or removal.
      </p>

      <h4>Testing and Load Verification</h4>
      <p>Testing requirements include:</p>
      <ul>
        <li>Functional testing</li>
        <li>Load verification</li>
        <li>Post-assembly testing</li>
      </ul>
      <p>Documentation must demonstrate compliance with ASME requirements.</p>

      <h3>Comparative Training – CSA Z248 and ASME B30.3</h3>
      <p>Structured comparison includes:</p>
      <ul>
        <li>Canadian versus U.S. load rating philosophy</li>
        <li>Inspection interval differences</li>
        <li>Documentation and recordkeeping expectations</li>
        <li>Engineering approval requirements</li>
        <li>Enforcement structure distinctions</li>
      </ul>
      <p>
        In Canada, CSA standards are incorporated directly into provincial regulation and enforced through statutory authority. In the
        United States, enforcement typically occurs through occupational safety agencies adopting ASME standards, resulting in
        jurisdictional variation.
      </p>
    </>
  );
}
