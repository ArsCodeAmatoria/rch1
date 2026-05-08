import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {Link} from "@/i18n/navigation";

export function Section9Module96SkytrainTransit() {
  return (
    <>
      <h3 id="module-9-6">Module 9.6 – SkyTrain &amp; Transit Infrastructure (Metro Vancouver)</h3>
      <p>
        <strong>Transit corridors</strong> (guideways, traction power, passengers) are among the most controlled interfaces for cranes. Link planning
        to{" "}
        <Link href="/tower-cranes/operator-training-program/public-safety-traffic-emergency" className="font-medium text-primary no-underline hover:underline">
          Section 18 – Public safety &amp; traffic
        </Link>
        , rail concepts in{" "}
        <Link
          href={"/tower-cranes/operator-training-program/airspace-property-infrastructure#module-9-2" as never}
          className="text-primary no-underline hover:underline"
        >
          Module 9.2 – Railway proximity
        </Link>
        , and metro urban density in{" "}
        <Link href="/tower-cranes/operator-training-program/advanced-urban-compliance" className="text-primary no-underline hover:underline">
          Section 11 – Advanced urban compliance
        </Link>
        .
      </p>
      <p>
        Elevated guideways and energized traction create a regulatory environment comparable to—and sometimes stricter than—conventional freight
        rail.
      </p>
      <p>
        In Metro Vancouver, transit infrastructure is governed by{" "}
        <ExternalLink href={AUTHORITY_URLS.transLink}>TransLink</ExternalLink>, which oversees the region&apos;s public transportation
        network, including the SkyTrain automated rapid transit system and the electric trolley bus <strong>Trolley Overhead (TOH)</strong> network.
      </p>
      <p>
        Introduced in 1985 ahead of Expo 86, SkyTrain was among the first fully automated driverless rapid transit systems in the world. Its
        elevated concrete guideways, linear induction technology, and energized power systems run through high-density zones in Vancouver,
        Burnaby, New Westminster, Surrey, and Richmond. As intensification accelerated along the Millennium and Canada Line corridors, crane
        coordination near guideways became routine—not occasional.
      </p>
      <p>Transit infrastructure is classified as critical public transportation infrastructure. Crane operations nearby are subject to formal coordination, engineering review, and strict operational controls.</p>

      <h4>Authority &amp; Oversight</h4>
      <p>
        <strong>Primary authority:</strong> <ExternalLink href={AUTHORITY_URLS.transLink}>TransLink</ExternalLink> regulates construction
        encroachments, guideway protection, trolley overhead proximity,
        and operational coordination within its rights-of-way.
      </p>
      <p>
        <strong>Additional oversight may involve:</strong>{" "}
        <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink> for occupational safety; municipal engineering for adjacent road and
        structural access.
      </p>
      <p>Transit authority approval is mandatory prior to crane erection, climbing, dismantling, or lifting within defined proximity zones.</p>

      <h4>Historical Context &amp; Regulatory Evolution</h4>
      <p>
        Globally, rapid transit expansion in London, Tokyo, Chicago, and New York forced regulators to address construction adjacency.
        Incidents involving debris, overswing, structural strikes, and electrification contact led to encroachment permits and track protection
        systems. In Canada, development along elevated corridors intensified in the late 1990s and 2000s. In Metro Vancouver, projects adjacent
        to Millennium Line guideways reinforced engineered clearance review, defined lift windows, and centralized transit communication.
      </p>
      <p>Modern automated systems operate within narrow tolerances; minor interference can halt thousands of passengers and cascade operationally and financially.</p>

      <h4>Trolley Overhead (TOH) – Specialized Electrification Hazard</h4>
      <p>
        TOH is the <strong>600-volt DC</strong> energized overhead wire system for Metro Vancouver&apos;s electric trolley buses, including running
        wires, feeder cables, span wires, poles, and guy systems—primarily in Vancouver and Burnaby within mixed traffic and pedestrian zones.
      </p>
      <p>
        Where crane operations approach within <strong>three metres</strong> of any TOH component, coordination with{" "}
        <ExternalLink href={AUTHORITY_URLS.transLink}>TransLink</ExternalLink>&apos;s adjacent works
        program is required. Entry within defined Limits of Approach requires an{" "}
        <strong>Independent Qualified Safety Watcher (IQSW)</strong>.
      </p>
      <p>
        <strong>TC Utility Services (TCUS)</strong> is recognized as the authorized IQSW provider for TOH-related work. Safety watchers monitor
        proximity, maintain communication, and ensure clearance compliance—reflecting North American experience with arc flash and indirect
        contact on energized overhead systems.
      </p>

      <h4>Engineering Clearance Review</h4>
      <p>Prior to approval, transit authorities require engineering review of:</p>
      <ul>
        <li>Horizontal clearance from guideway</li>
        <li>Vertical clearance above track structure</li>
        <li>Collapse zone analysis</li>
        <li>Swing radius and overswing potential</li>
        <li>Wind-induced drift and boom deflection</li>
      </ul>
      <p>
        The protected envelope includes guideway beams and piers, traction power, signal and communication infrastructure, and emergency egress.
        Even minor contact may affect alignment or automated train control.
      </p>

      <h4>Overswing Restrictions</h4>
      <p>
        No overswing of boom, jib, hoist line, or suspended load over SkyTrain infrastructure is permitted without{" "}
        <strong>
          written authorization from <ExternalLink href={AUTHORITY_URLS.transLink}>TransLink</ExternalLink>
        </strong>
        . Approval typically requires an engineered lift plan, defined time window, assigned
        safety watchers or flaggers, and documented emergency protocol. Unauthorized overswing may bring immediate stop-work orders, penalties,
        and loss of crane privileges.
      </p>

      <h4>Operational Controls &amp; Lift Windows</h4>
      <p>Transit authorities may impose night-only or weekend-only lifting, reduced wind thresholds, and limited-duration access. Windows follow transit scheduling—not construction convenience. Central transit operations must be notified in advance; real-time communication must be maintained during lifting.</p>

      <h4>Flagging &amp; Safety Watchers</h4>
      <p>May include certified rail flaggers, dedicated spotters, IQSW (including TCUS for TOH), and on-site transit operations liaison. They provide active monitoring and communication with transit control. Spotters supplement—but never replace—engineered clearance.</p>

      <h4>Power Rail &amp; Traction Awareness</h4>
      <p>
        SkyTrain uses energized traction systems within the guideway. Configurations differ by line; energized components must be treated as
        high-voltage hazards. Operators must understand: traction power present; absolute prohibition of structural or load contact; induced
        voltage risk through conductive crane components. Contact presents hazards comparable to high-voltage transmission lines.
      </p>

      <h4>Emergency Contact Procedures</h4>
      <p>
        Operators must know: transit emergency numbers; <strong>Transit Communications (TCOMM)</strong> notification protocol; site supervisory
        chain; immediate stop-work procedures.
      </p>
      <p>
        If a load contacts or falls near guideway infrastructure: stop operations immediately; notify transit control without delay; do not
        remove load without authorization; secure the area pending instruction. Incidents may trigger system-wide responses.
      </p>

      <h4>International &amp; Canadian Context</h4>
      <p>
        Transit proximity regulation reflects global lessons on guideway interference, automated train control, electrification, and passenger
        density. Brentwood, New Westminster downtown, and Surrey City Centre illustrate transit-adjacent crane planning as a specialized,
        documented discipline.
      </p>

      <h4>Professional Standard</h4>
      <p>
        Operating near SkyTrain and TOH demands engineered planning, written authorization, strict lift windows, real-time communication, and
        qualified safety oversight where electrification is present. Transit is essential mobility infrastructure serving hundreds of thousands
        daily—crane work nearby must reflect that through disciplined planning and compliance.
      </p>
    </>
  );
}
