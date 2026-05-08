import {AUTHORITY_URLS, ExternalLink} from "@/components/tower-operator-training/external-link";
import {Link} from "@/i18n/navigation";

export function Section10RegulatoryKnowledge() {
  return (
    <>
      <h2 id="section-10">Section 10 – Tower Crane Regulatory Knowledge Requirements</h2>
      <p>
        Tower crane operations in British Columbia exist within <strong>one of the most structured regulatory frameworks</strong> in North America. The
        modern environment is the product of industrial evolution, catastrophic failures, legal reform, and professional standardization—from
        nineteenth-century steam derricks to electronically monitored luffing systems with <em>VFD-controlled</em> hoists. BC&apos;s landscape
        strengthened after high-profile incidents in the 2000s, expanded oversight, and independent certification bodies.
      </p>
      <p>
        Regulatory alignment is centered on:{" "}
        <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink>,{" "}
        <ExternalLink href={AUTHORITY_URLS.bcCraneSafety}>BC Crane Safety</ExternalLink>,{" "}
        <ExternalLink href={AUTHORITY_URLS.csaGroup}>CSA Group</ExternalLink>, and{" "}
        <ExternalLink href={AUTHORITY_URLS.asmeOrg}>ASME</ExternalLink>—each with distinct but interconnected roles in enforcement, certification,
        standards, and technical guidance.
      </p>
      <p>
        <strong>Related on this site:</strong> the statutory baseline in{" "}
        <Link href="/tower-cranes/operator-training-program/regulatory-standards" className="font-medium text-primary no-underline hover:underline">
          Section 1 – Regulatory and standards framework
        </Link>
        ; overlap and anti-collision culture in{" "}
        <Link href="/tower-cranes/operator-training-program/overlap-right-of-way" className="text-primary no-underline hover:underline">
          Section 8 – Overlap &amp; right of way
        </Link>
        ; field documentation in{" "}
        <Link href="/tower-cranes/operator-training-program/inspection-maintenance" className="text-primary no-underline hover:underline">
          Section 6 – Inspection &amp; maintenance
        </Link>
        ; and exam-style review in{" "}
        <Link href="/redtc/test" className="font-semibold text-primary no-underline hover:underline">
          REDTC practice tests
        </Link>{" "}
        and{" "}
        <Link href="/redtc" className="text-primary no-underline hover:underline">
          REDTC home
        </Link>
        .
      </p>

      <h3>Regulatory alignment: historical context</h3>
      <p>
        <ExternalLink href={AUTHORITY_URLS.workSafeBc}>WorkSafeBC</ExternalLink> administers the Workers Compensation Act and OHSR. Its authority
        traces to early twentieth-century workers&apos; compensation reform—shifting injury responsibility toward insurance and prevention systems.
      </p>
      <p>
        <ExternalLink href={AUTHORITY_URLS.bcCraneSafety}>BC Crane Safety</ExternalLink> addresses gaps in crane-specific oversight—operator
        certification, equipment registration, and incident investigation—marking a shift toward specialization.
      </p>
      <p>
        <ExternalLink href={AUTHORITY_URLS.csaGroup}>CSA Group</ExternalLink> develops consensus standards such as{" "}
        <ExternalLink href={AUTHORITY_URLS.csaZ248Product}>CSA Z248</ExternalLink>, reflecting Canadian climate, wind, seismic, and cold-weather
        realities while aligning with international practice.
      </p>
      <p>
        <ExternalLink href={AUTHORITY_URLS.asmeOrg}>ASME</ExternalLink> publishes{" "}
        <ExternalLink href={AUTHORITY_URLS.asmeB303TowerCranes}>ASME B30.3</ExternalLink> and related B30 volumes. The B30 series dates to the 1920s
        and has evolved with metallurgy, structural engineering, and controls. U.S. standards strongly influence Canadian practice.
      </p>

      <h3>What every tower crane operator must know (BC specific)</h3>
      <p>
        A BC tower crane operator carries legal, regulatory, and professional accountability—not merely machine operation.
      </p>

      <h4>OHSR Part 14 – Operational limits</h4>
      <p>
        Operators must understand <strong>rated capacity</strong>, <strong>manufacturer restrictions</strong>, <strong>wind thresholds</strong>, and the{" "}
        <strong>prohibition on bypassing safety devices</strong>. These limits are legally binding.
      </p>
      <p>
        Operating beyond chart capacity is <em>non-compliance</em> and may result in penalties or prosecution.
      </p>

      <h4>Certification requirements</h4>
      <p>
        Valid certification through <strong>BC Crane Safety</strong> follows standardized theory and practical testing. Investigations have found inconsistent
        verification of credentials across projects.
      </p>
      <p>
        Operating without proper certification <strong>violates regulation</strong>.
      </p>

      <h4>Logbook obligations</h4>
      <p>Accurate daily logs must capture hours, weather, maintenance observations, and unusual events or shutdowns.</p>
      <p>
        Logbooks are <strong>legal documents</strong>—they are often subpoenaed in investigations.
      </p>

      <h4>Daily inspection requirements</h4>
      <p>
        Documented pre-use inspection covers limit switches, visible rope from cab and drum, brakes, anti-collision systems, and wind monitoring where applicable.
      </p>
      <p>Failure to document may breach regulation even when no incident occurs.</p>

      <h4>Refusal of unsafe work</h4>
      <p>
        Workers have both the <strong>right and the obligation</strong> to refuse work that is unsafe: for example when wind limits are exceeded, loads are unverified,
        rigging is improper, or communication is inadequate.
      </p>
      <p>This expectation reflects broader Canadian labour reform emphasizing worker empowerment in hazard prevention.</p>

      <h4>Wind shutdown criteria</h4>
      <p>
        In coastal BC, wind-loading decisions rely on manufacturer <em>in-service</em> limits, <em>out-of-service</em> thresholds, weather-vane configuration, and the
        distinction between gusting and sustained wind.
      </p>
      <p>Global wind-related collapses underscore the importance of correct parked configuration.</p>

      <h4>Climbing documentation requirements</h4>
      <p>
        For internal or external climbing, documentation must support engineering approval, tie-in validation, freestanding height confirmation, wind restrictions, and hydraulic frame inspection records.
      </p>
      <p>Inadequate documentation has contributed to serious incidents internationally.</p>

      <h4>Critical lift thresholds</h4>
      <p>
        Typical triggers include a high percentage of chart capacity, tandem operations, restricted clearance, or a high-risk public interface.
      </p>
      <p>Planning must be <strong>documented and communicated</strong> to everyone involved.</p>

      <h4>Overlap procedures</h4>
      <p>
        In dense Metro Vancouver environments, coordination covers right-of-way, anti-collision limits, cab-to-cab communication, and documented sign-offs.
      </p>
      <p>Overlap coordination failures have caused structural contact between cranes in jurisdictions worldwide.</p>

      <h4>Overswing legal implications</h4>
      <p>
        Overswing into adjacent properties may constitute <strong>trespass</strong>, create <strong>civil liability</strong>, violate insurance conditions, and breach municipal requirements—risks heightened by Lower Mainland urban density.
      </p>

      <h4>Anti-collision programming compliance</h4>
      <p>Systems must be configured and calibrated to site geometry and must not be bypassed without authorization.</p>
      <p>Programmable logic can create a false sense of security when limits are misconfigured or overridden.</p>

      <h4>Emergency stop authority</h4>
      <p>
        The operator has <strong>ultimate authority</strong> to activate emergency stop; that authority cannot be overridden by production pressure. Safety overrides schedule.
      </p>

      <h3>What every tower crane rigger must know</h3>
      <p>
        Rigger responsibilities are governed primarily by <strong>OHSR Part 15</strong>. While the operator controls the machine,{" "}
        <strong>the rigger controls the load</strong>.
      </p>

      <h4>OHSR Part 15 – Rigging</h4>
      <p>
        Part 15 governs rigging hardware, slings, attachment methods, and signalperson duties. Rigging failures account for a significant share of crane-related incidents.
      </p>

      <h4>Sling inspection standards</h4>
      <p>Inspect for broken wires, kinks, crushing, heat damage, and worn fittings—aligned with CSA and ASME guidance.</p>

      <h4>Load weight verification</h4>
      <p>
        <strong>Never assume weight.</strong> Verify via documentation, calculation, or engineered drawings.
      </p>
      <p>Misjudged weight remains a leading cause of overload.</p>

      <h4>Center of gravity assessment</h4>
      <p>
        Improper identification of the <strong>centre of gravity</strong> risks sudden shift, shock loading, sling failure, or collapse—demanding sound spatial judgment and experience.
      </p>

      <h4>Signalperson designation rules</h4>
      <p>Only designated, competent signalpersons provide direction to the operator.</p>
      <p>Multiple simultaneous sources of direction are prohibited unless clearly structured in the lift plan.</p>

      <h4>Communication requirements</h4>
      <p>Confirm radio channels, agree on hand signals where used, and establish backup communication before the lift.</p>
      <p>Ambiguity multiplies hazard.</p>

      <h4>Powerline approach distances</h4>
      <p>
        <strong>Minimum approach distance (MAD)</strong> to energized lines is strictly regulated. Electrical contact remains among the most lethal crane hazards; these rules reflect decades of case history across North America.
      </p>

      <h4>Tagline control under wind</h4>
      <p>Taglines help control load rotation without placing workers in the line of fire.</p>
      <p>Wind adds dynamic loading and unpredictable swing—plan accordingly.</p>

      <h4>Dynamic loading hazards</h4>
      <p>Motion creates forces beyond static weight: sudden stops, gusts, and snagging increase line tension.</p>
      <p>Recognizing dynamic effects separates competent riggers from inexperienced personnel.</p>

      <h4>Authority to issue stop command</h4>
      <p>
        Any competent rigger or signalperson may <strong>stop operations</strong> to prevent catastrophic escalation—a core idea in Canadian OHS: every worker may intervene.
      </p>

      <h4>Concluding principle</h4>
      <p>
        These requirements are not bureaucratic formalities—they are accumulated lessons of industrial history. BC tower crane work is a
        discipline grounded in engineering, statute, and ethics. Regulatory literacy is as essential as mechanical skill for operators and
        riggers alike.
      </p>
    </>
  );
}
