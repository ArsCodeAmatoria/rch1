import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {Link} from "@/i18n/navigation";

export function Section9Module92Railway() {
  return (
    <>
      <h3 id="module-9-2">Module 9.2 – Railway Proximity</h3>
      <p>
        <strong>Rail-adjacent construction</strong> is treated as critical infrastructure protection. In Canada, rail history and federal rail law add
        layers beyond ordinary site risk. Coordinate with{" "}
        <Link
          href={"/tower-cranes/operator-training-program/airspace-property-infrastructure#section-9" as never}
          className="font-medium text-primary no-underline hover:underline"
        >
          Section 9 overview
        </Link>
        , urban traffic control in{" "}
        <Link href="/tower-cranes/operator-training-program/public-safety-traffic-emergency" className="text-primary no-underline hover:underline">
          Section 18 – Public safety &amp; traffic
        </Link>
        , and overlap clearances in{" "}
        <Link href="/tower-cranes/operator-training-program/overlap-right-of-way" className="text-primary no-underline hover:underline">
          Section 8 – Overlap
        </Link>
        .
      </p>
      <p>
        Railways were central to industrial expansion; today active track beside a crane introduces operational, structural, and public safety
        exposure beyond ordinary construction risk.
      </p>
      <p>
        In British Columbia and Canada, railway proximity is governed by federal rail legislation, engineering standards, and individual rail
        authority rules—in addition to occupational safety law.
      </p>

      <h4>Canadian &amp; BC Regulatory Context</h4>
      <ul>
        <li>
          Federally regulated railways: <ExternalLink href={AUTHORITY_URLS.transportCanada}>Transport Canada</ExternalLink> under the Railway Safety
          Act.
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.bcCraneSafety}>BC Crane Safety</ExternalLink>: planning documentation must identify proximity hazards
          including adjacent rail.
        </li>
        <li>
          <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink>: documented hazard assessment and controls under OHSR where
          occupational risk is present.
        </li>
        <li>
          Lower Mainland: coordination with <ExternalLink href={AUTHORITY_URLS.transLink}>TransLink</ExternalLink> for SkyTrain or West Coast Express
          corridors.
        </li>
        <li>Rail authorities maintain engineering clearance standards superseding site convenience.</li>
      </ul>

      <h4>Mandatory Requirements When Operating Near Railways</h4>
      <p>Clearance coordination is mandatory; engineering review is required; rail authority approval is required prior to erection or operation; emergency contact protocol must be posted in the cab.</p>
      <p>
        Clearance coordination includes horizontal distance from track centerline, vertical clearance above catenary (if electrified), and
        dynamic envelopes accounting for train sway and aerodynamic effects.
      </p>
      <p>
        Engineering review typically addresses: base location vs. right-of-way; maximum boom/jib geometry; swing encroachment; collapse
        zone; wind deflection. Derailments and load drops near corridors have shaped zero-tolerance clearance doctrine.
      </p>

      <h4>Operational Restrictions</h4>
      <p>Standard practice: no load over active rail without written approval; no boom swing into rail clearance envelope; wind evaluated for drift over track.</p>
      <p>
        The clearance envelope includes track width, train sway, overhead electrical systems, and evacuation buffer Operators must consider
        dynamic variables: gusts, pendulum, line drift. Minor oscillation can penetrate protected envelope. Permitted over-rail lifts are
        usually governed by formal plans signed by engineering and rail authority.
      </p>

      <h4>Rail Authority-Imposed Controls</h4>
      <p>May include: trackside flaggers; pre-approved lift windows vs. train schedules; dedicated spotters; load tethering/tag lines; engineered restraint in high-risk scenarios.</p>

      <h4>Flagging, Windows, Spotters, Tethering</h4>
      <p>Qualified railway flaggers may halt or slow traffic during lift windows. Time-restricted lifting reduces active-traffic exposure. Independent spotters may be required where corridor visibility is partial. Tethering reduces swing amplitude.</p>

      <h4>International Historical Perspective</h4>
      <p>Major centres—London, Tokyo, Chicago, Toronto—have recorded incidents near rail that influenced regulation. Cranes or loads striking OCS caused shutdowns and large claims. Canadian freight corridors maintain strict encroachment policies. Condo towers near commuter rail in Vancouver and Toronto intensified coordination from the early 2000s. Railways prioritize service continuity and public protection; construction is subordinate within proximity zones.</p>

      <h4>Emergency Protocol</h4>
      <p>Posted in cab and at site: rail authority emergency number; superintendent; dropped load or strike procedure; immediate shutdown sequence.</p>
      <p>
        If load contacts OCS or rail infrastructure: stop immediately; do not free load without instruction; notify rail authority without
        delay; follow lockout and evacuation. Delayed reporting escalates consequences.
      </p>

      <h4>Operator Responsibility</h4>
      <p>Confirm clearance envelope before shift; verify wind before rail-adjacent lifts; refuse lifts violating documented approval; maintain awareness of train movement. Override of programmed swing limits near rail is prohibited unless explicitly authorized in writing and coordinated with the rail authority.</p>

      <h4>Civil &amp; Infrastructure Liability</h4>
      <p>Railway incidents may involve federal investigation, repair costs, delay claims, passenger litigation, contract termination. Rail corridors are national arteries—professional conduct near them is foundational to lawful operation.</p>
    </>
  );
}
