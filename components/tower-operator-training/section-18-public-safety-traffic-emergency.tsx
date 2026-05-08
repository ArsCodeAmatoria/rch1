import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {Link} from "@/i18n/navigation";

export function Section18PublicSafetyTrafficEmergency() {
  return (
    <>
      <h2 id="section-18">Section 18 – Public Safety, Traffic Control, and Emergency Response</h2>
      <p className="text-sm text-muted-foreground">Tower crane operations – British Columbia</p>

      <h3 id="section-18-purpose">Purpose</h3>
      <p>
        <strong>Urban lifts</strong> occur beside roads, sidewalks, transit, and occupied buildings. Suspended loads and swing zones demand traffic control,
        pedestrian protection, exclusion buffers, municipal permits, and emergency readiness—including{" "}
        <strong>Dedicated Emergency Platform (DEP)</strong> rescue. Coordination involves operators, riggers, TCPs, supervision, municipalities,
        and responders. Primary BC reference: <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink>{" "}
        <cite>OHSR Part 14 – Cranes and Hoists</cite> (see also the{" "}
        <ExternalLink href={AUTHORITY_URLS.workSafeBcOhsRegulations}>searchable OHSR</ExternalLink>).
      </p>
      <p>
        Connect planning with{" "}
        <Link href="/tower-cranes/operator-training-program/urban-operations" className="font-medium text-primary no-underline hover:underline">
          Section 7 – Urban operations
        </Link>
        ,{" "}
        <Link href="/tower-cranes/operator-training-program/advanced-urban-compliance" className="text-primary no-underline hover:underline">
          Section 11 – Advanced urban compliance
        </Link>
        , regulatory expectations in{" "}
        <Link href="/tower-cranes/operator-training-program/regulatory-knowledge-requirements" className="text-primary no-underline hover:underline">
          Section 10 – Regulatory knowledge
        </Link>
        , and site-wide themes in our{" "}
        <Link href="/safety-program" className="text-primary no-underline hover:underline">
          safety program library
        </Link>
        .
      </p>

      <h3 id="module-18-1">Module 18.1 – Tower Cranes in Urban Environments</h3>
      <p>
        BC cities (Vancouver, Surrey, Burnaby, Victoria, etc.) squeeze cranes next to streets, bridges, bike lanes, and occupied towers. Plan for
        swing radius, load path, traffic lanes, pedestrian routes, utilities, and emergency access. Typical mitigations: lane or road closures,
        detours, covered walks, hoarding, TCPs, barricades, exclusion zones. Operators follow approved lift paths and avoid unauthorized overswing
        of public areas; site informs operators of restrictions.
      </p>

      <h3 id="module-18-2">Module 18.2 – Lane Closures</h3>
      <p>
        Closures buffer traffic from swing and staging—needed for erect/dismantle, heavy picks, oversize moves, or work beside live lanes. Municipal
        approval usually requires a Traffic Management Plan (TMP) / Traffic Control Plan (TCP): limits, duration, timing, detours, pedestrian
        routing, emergency access—often restricted to off-peak or nights.
      </p>
      <p>
        Use approved devices in sequence: advance warning, transition (cones/channelizers), buffer, work zone. Coordinate lifts with active
        closure—may need to <strong>hold traffic</strong> during critical swings.
      </p>

      <h3 id="module-18-3">Module 18.3 – Traffic Control Personnel</h3>
      <p>
        <strong>Traffic Control Persons (TCPs)</strong> direct public traffic at work zone interfaces—stop/slow paddles, hand signals, radio links
        to site and crane crew. During lifts near roads, TCPs may stop vehicles so nothing passes under or beside suspended load. Stay alert to
        drivers, site changes, and weather; update TCPs when lift sequencing changes.
      </p>

      <h3 id="module-18-4">Module 18.4 – Police-Assisted Traffic Control</h3>
      <p>
        Major routes—bridges, ramps, arterials, complex intersections—may need <strong>police</strong> for legal, multi-intersection holds or
        enforced diversions beyond TCP scope. Planned with contractor, municipality, police, and safety management: time window, stop duration,
        detours, radio protocol. Confirm road secured before lifting. Often scheduled low-traffic hours.
      </p>

      <h3 id="module-18-5">Module 18.5 – Pedestrian Protection</h3>
      <p>
        Pedestrians are vulnerable—use <strong>covered walkways</strong> (engineered load/debris resistance), <strong>hoarding</strong> to
        define routes, sidewalk closures with signed <strong>detours</strong> (municipal approval). Coordinate with lift plans; add precautions
        when swinging near foot traffic.
      </p>

      <h3 id="module-18-6">Module 18.6 – Public Exclusion Zones</h3>
      <p>
        Barricades, fencing, signage, and TCPs keep uninvolved people out of drop and swing envelopes during heavy lifts, erect/dismantle, or
        picks over/near public areas. Size zones from load, height, radius, swing, and proximity to sidewalks/roads. Hold lifts until the zone is
        verified clear—no crane motion until boundaries are secure.
      </p>

      <h3 id="module-18-7">Module 18.7 – Dedicated Emergency Platform (DEP)</h3>
      <p>
        A <strong>DEP</strong> is a crane-lifted platform for evacuating injured workers when stairs, hoists, or aerial means are inadequate—
        critical lift: personnel on the hook. Engineered box platform with rated rigging, guardrails, fall anchors; stretcher, straps, blankets;
        rescue team coordinates with operator for smooth placement and lowering.
      </p>
      <p>
        <strong>Use only for emergency rescue</strong>—not routine man-riding unless jurisdiction and program allow. May require specific
        operator authorization per local rules.
      </p>

      <h3 id="module-18-8">Module 18.8 – DEP Preparation and Testing</h3>
      <p>
        Pre-plan: certify/inspect platform and rigging; verify rescue kit; <strong>trial lifts</strong> to practice reach to plausible rescue
        levels (floors, cab access, roof); brief crane crew and first aid. Reduces delay when seconds matter.
      </p>

      <h3 id="module-18-9">Module 18.9 – Operator Awareness</h3>
      <p>
        Operators monitor public conditions: avoid loads over active public where plans prohibit; confirm exclusion/TCP measures before
        critical moves; obey signalperson; <strong>stop</strong> if pedestrians, errant vehicles, barrier failure, or emergency access conflict
        arises. Emergency stop from anyone must be honored. Urban operation demands constant situational awareness inside and outside the fence.
      </p>

      <h3 id="section-18-summary">Section summary</h3>
      <p>
        Urban tower work integrates TMPs, TCPs, police when needed, pedestrian covers and detours, exclusion zones, and DEP for vertical rescue.
        Public protection and emergency readiness are core to BC crane programs operating beside active city infrastructure.
      </p>
    </>
  );
}
