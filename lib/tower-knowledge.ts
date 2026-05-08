export type TowerLocale = "en" | "fr";

export type TowerTopic = {
  slug: string;
  title: string;
  summary: string;
  operationalContext: string;
  keyControls: string[];
  procedureSteps: string[];
  inspectionFocus: string[];
  communicationProtocol: string[];
  coordinationRequirements: string[];
  standardsReferences: string[];
  related: string[];
};

const commonStandards = [
  "WorkSafeBC OHSR tower crane and lifting provisions",
  "CSA requirements applicable to crane operation and inspection",
  "ASME B30 guidance for crane and below-the-hook activities",
  "Technical Safety BC directives and equipment compliance requirements",
  "Manufacturer operation, erection, and maintenance manuals"
];

const topicsEn: TowerTopic[] = [
  {
    slug: "operator-responsibilities",
    title: "Operator Responsibilities",
    summary: "Operational authority, limits, and execution accountability for tower crane operators in active construction sites.",
    operationalContext:
      "The operator controls movement authority and must maintain chart compliance, communication discipline, and stop-work authority where risk is unresolved.",
    keyControls: [
      "Crane operators must confirm chart selection matches active jib and counterweight configuration.",
      "No movement is initiated without clear command source and verified communication path.",
      "Operator stop-work authority applies when visibility, communication, or load behavior is uncertain."
    ],
    procedureSteps: [
      "Confirm shift handover notes, unresolved defects, and out-of-service status from previous operation.",
      "Verify wind readings, visibility constraints, and operational envelope restrictions before first pick.",
      "Run functional checks for brakes, limits, anti-collision systems, and communication devices.",
      "Validate lift sequence with lift director and signal team before hoisting operations begin.",
      "Record deviations, interruptions, and hold points in operator log at end of shift."
    ],
    inspectionFocus: [
      "Controls and emergency stop response",
      "Hook block condition and line reeving status",
      "Limit switch functionality and indicator readings"
    ],
    communicationProtocol: [
      "Single command authority must be established before each lift sequence.",
      "Readback is mandatory for travel commands and blind lift checkpoints.",
      "Ambiguous commands require immediate stop and reconfirmation."
    ],
    coordinationRequirements: [
      "Coordinate lift windows with steel, concrete, and logistics teams.",
      "Confirm exclusion-zone controls are active before load travel.",
      "Escalate unresolved interface risk to supervision before motion authorization."
    ],
    standardsReferences: commonStandards,
    related: ["pre-operational-inspection", "load-handling", "communication-signals"]
  },
  {
    slug: "pre-operational-inspection",
    title: "Pre-Operational Inspection",
    summary: "Daily inspection workflow for tower cranes before load handling and production lifting.",
    operationalContext: "Inspection controls verify crane readiness, detect defects early, and prevent operation with unresolved risk conditions.",
    keyControls: [
      "All safety systems must be tested prior to hoisting operations.",
      "Defect findings require lockout and supervisory escalation where required.",
      "Inspection records must be completed before operational release."
    ],
    procedureSteps: [
      "Inspect mast, ties, jib, counter-jib, and access systems for visible defects.",
      "Verify ropes, sheaves, hooks, and blocks for wear, deformation, and proper reeving.",
      "Test braking systems, limit switches, emergency stops, and anti-collision functions.",
      "Confirm anemometer operation and monitor baseline wind conditions.",
      "Document findings and sign off only when all critical items are acceptable."
    ],
    inspectionFocus: ["Structural condition", "Hoisting mechanism", "Limit and braking systems"],
    communicationProtocol: [
      "Inspection status shall be communicated to lift director prior to first lift.",
      "Any out-of-service item must be formally transferred to maintenance and supervision."
    ],
    coordinationRequirements: [
      "Pre-lift production activities remain on hold until inspection release is confirmed.",
      "Maintenance windows are coordinated with site logistics and affected trades."
    ],
    standardsReferences: commonStandards,
    related: ["operator-responsibilities", "wind-restrictions", "load-handling"]
  },
  {
    slug: "wind-restrictions",
    title: "Wind Restrictions",
    summary: "Wind management controls for operational limits, weather shutdown, and out-of-service configuration.",
    operationalContext: "Wind speed and gust behavior directly affect load stability, crane structure loading, and operational safety margins.",
    keyControls: [
      "Crane operators must confirm live wind readings before each lift cycle.",
      "Operations cease when threshold criteria or gust triggers are exceeded.",
      "Out-of-service configuration must align with manufacturer weather-vane instructions."
    ],
    procedureSteps: [
      "Verify calibrated wind monitoring system and location-specific readings.",
      "Apply reduced operational limits for sail-area-sensitive loads.",
      "Suspend blind or critical lifts when variable gust patterns are present.",
      "Initiate weather shutdown sequence and secure crane in out-of-service mode.",
      "Record wind event, hold point timing, and restart authorization."
    ],
    inspectionFocus: ["Anemometer status", "Weather trend data", "Out-of-service controls"],
    communicationProtocol: [
      "Wind-triggered hold calls are announced to all impacted trades.",
      "Restart authorization is issued only after supervision confirms acceptable conditions."
    ],
    coordinationRequirements: [
      "Coordinate weather shutdown impact with concrete placements and logistics schedules.",
      "Maintain exclusion controls during wind hold periods for suspended or unsecured components."
    ],
    standardsReferences: commonStandards,
    related: ["critical-lifts", "load-handling", "communication-signals"]
  },
  {
    slug: "self-erect-cranes",
    title: "Self-Erect Cranes",
    summary: "Field controls for setup, leveling, and operating envelope management of self-erect systems.",
    operationalContext: "Self-erect crane deployment requires strict setup geometry, support verification, and controlled assembly sequence execution.",
    keyControls: [
      "Ground support must be verified against equipment reactions before deployment.",
      "Self-erect sequence follows manufacturer steps without shortcut operations.",
      "Exclusion zones are maintained during erection and dismantle phases."
    ],
    procedureSteps: [
      "Verify setup location, clearance envelope, and access control perimeter.",
      "Install supports and leveling controls according to engineered setup requirements.",
      "Execute erection sequence under qualified supervision and documented hold points.",
      "Run post-erection operational checks before release to production lifting.",
      "Document setup parameters and inspection results in equipment records."
    ],
    inspectionFocus: ["Support stability", "Level tolerance", "Erection component condition"],
    communicationProtocol: [
      "Erection commands are controlled by designated lead with dedicated radio channel.",
      "No concurrent trade activity inside setup exclusion boundary during sequence execution."
    ],
    coordinationRequirements: [
      "Coordinate delivery, setup crane access, and traffic control for deployment area.",
      "Notify adjacent trades of erection timing and no-entry boundaries."
    ],
    standardsReferences: commonStandards,
    related: ["assembly-disassembly", "ground-bearing-pressure", "operator-responsibilities"]
  },
  {
    slug: "luffing-jib-cranes",
    title: "Luffing Jib Cranes",
    summary: "Operational controls for luffing jib cranes in constrained and high-density urban construction environments.",
    operationalContext: "Luffing motion management is critical where airspace conflicts, adjacent structures, and multiple crane operations are present.",
    keyControls: [
      "Luffing range limits and anti-collision zones are verified each shift.",
      "Overlapping crane envelopes require coordinated movement protocols.",
      "Blind sectors require dedicated signal strategy and checkpoint controls."
    ],
    procedureSteps: [
      "Review luffing envelope against adjacent structures and crane interference maps.",
      "Confirm anti-collision system status and active zoning profiles.",
      "Sequence luffing and slewing movement using controlled command cadence.",
      "Execute hold points before passing interference thresholds.",
      "Capture deviations and controller interventions in operations log."
    ],
    inspectionFocus: ["Luffing mechanism", "Control response", "Anti-collision status"],
    communicationProtocol: [
      "Multi-crane coordination call signs are assigned before shift startup.",
      "Movement through overlap zones requires explicit clearance confirmation."
    ],
    coordinationRequirements: [
      "Coordinate with neighboring crane teams and tower supervisors.",
      "Maintain active communication with logistics and facade installation operations."
    ],
    standardsReferences: commonStandards,
    related: ["city-cranes", "communication-signals", "load-handling"]
  },
  {
    slug: "flat-top-cranes",
    title: "Flat Top Cranes",
    summary: "Technical operation and interface controls for flat top crane configurations on multi-crane projects.",
    operationalContext: "Flat top cranes are frequently selected for overlap compatibility and modular erection in restricted construction zones.",
    keyControls: [
      "Tie-in and freestanding limits must match active structure stage and engineering approval.",
      "Inter-crane height and radius coordination is maintained through current clash matrix.",
      "Dismantle sequencing is pre-planned with dedicated interface controls."
    ],
    procedureSteps: [
      "Verify tie-in status and structural support conditions against approved plans.",
      "Confirm operational envelope relative to adjacent crane geometries.",
      "Apply controlled movement sequence through overlap sectors.",
      "Coordinate heavy picks with lift director and interference observers.",
      "Update coordination matrix after significant project geometry changes."
    ],
    inspectionFocus: ["Tie-in hardware", "Mast condition", "Overlap-zone control systems"],
    communicationProtocol: [
      "Adjacent crane operators maintain continuous channel monitoring during overlap operations.",
      "Lift director confirms movement windows for high-risk picks near interference boundaries."
    ],
    coordinationRequirements: [
      "Coordinate erection, tie-in changes, and dismantle windows with structural contractor.",
      "Issue updated crane interaction briefings after reconfiguration."
    ],
    standardsReferences: commonStandards,
    related: ["luffing-jib-cranes", "city-cranes", "pre-operational-inspection"]
  },
  {
    slug: "city-cranes",
    title: "City Cranes",
    summary: "Urban crane operations framework for congested sites, restricted airspace, and high public interface risk.",
    operationalContext: "City crane work requires enhanced controls for logistics interfaces, neighboring properties, and municipal restrictions.",
    keyControls: [
      "Public interface boundaries and overhead protections are verified before operations.",
      "Municipal permit restrictions and time windows are integrated into lift schedules.",
      "Overflight and adjacent property constraints are controlled by approved movement plans."
    ],
    procedureSteps: [
      "Review municipal constraints, permit conditions, and roadway occupation limits.",
      "Confirm tower crane operating envelope against neighboring structures and public corridors.",
      "Implement controlled delivery sequencing to prevent congestion conflicts.",
      "Apply enhanced communication and spotter coverage in blind and high-traffic zones.",
      "Track daily exceptions and authority notifications for compliance records."
    ],
    inspectionFocus: ["Perimeter controls", "Public protection measures", "Permit condition compliance"],
    communicationProtocol: [
      "Coordinate with traffic control and logistics teams before each major lift sequence.",
      "Escalate any public-interface deviation to site leadership immediately."
    ],
    coordinationRequirements: [
      "Integrate crane windows with road closures, delivery routes, and public movement controls.",
      "Coordinate emergency access corridors throughout active lifting periods."
    ],
    standardsReferences: commonStandards,
    related: ["luffing-jib-cranes", "flat-top-cranes", "load-handling"]
  },
  {
    slug: "load-handling",
    title: "Load Handling",
    summary: "Controlled load movement procedures for stable hoisting, travel path discipline, and secure landing.",
    operationalContext: "Load handling reliability depends on correct rigging geometry, predictable load behavior, and controlled travel path execution.",
    keyControls: [
      "The lift director shall verify load weight, rigging method, and path clearance before release.",
      "Tag lines shall be utilized where required to control rotation and drift.",
      "No personnel shall enter suspended load zones."
    ],
    procedureSteps: [
      "Verify load weight and center-of-gravity assumptions against lift plan.",
      "Confirm rigging selection, hitch arrangement, and hook engagement integrity.",
      "Execute trial lift and hold for stability and braking confirmation.",
      "Travel load through designated path with active exclusion control.",
      "Land and secure load under controlled signal direction and clear final positioning checks."
    ],
    inspectionFocus: ["Rigging condition", "Load attachment points", "Path clearance controls"],
    communicationProtocol: [
      "Signal sequence is maintained without concurrent conflicting commands.",
      "Stop command has immediate priority regardless of command source."
    ],
    coordinationRequirements: [
      "Coordinate receiving area readiness before initiating travel.",
      "Confirm downstream trade access remains restricted until load is landed and stable."
    ],
    standardsReferences: commonStandards,
    related: ["communication-signals", "pre-operational-inspection", "operator-responsibilities"]
  },
  {
    slug: "communication-signals",
    title: "Communication Signals",
    summary: "Signal and radio command framework for safe crane operations, blind lifts, and critical movement control.",
    operationalContext: "Communication reliability is a primary risk control in crane operations and is managed through standardized command language and hierarchy.",
    keyControls: [
      "One designated signal source is maintained unless formal transfer is acknowledged.",
      "Radio phraseology and hand signals follow site-approved standard format.",
      "Unclear instructions trigger immediate stop-work until clarified."
    ],
    procedureSteps: [
      "Assign signal authority and backup roles during pre-lift briefing.",
      "Test radio clarity and channel isolation before movement authorization.",
      "Use concise standardized commands with readback confirmation.",
      "Apply additional checkpoints for blind lifts and overlap zones.",
      "Log communication interruptions and corrective actions after shift."
    ],
    inspectionFocus: ["Radio function", "Signal visibility", "Command consistency"],
    communicationProtocol: [
      "Primary commands: hoist, lower, slew, trolley, hold, stop.",
      "All stop commands are treated as immediate hold until cleared by lift director.",
      "Blind movement requires checkpoint acknowledgements at defined intervals."
    ],
    coordinationRequirements: [
      "Integrate signal plan with rigging team and receiving area supervisors.",
      "Coordinate overlapping crane communication in multi-crane sectors."
    ],
    standardsReferences: commonStandards,
    related: ["load-handling", "operator-responsibilities", "city-cranes"]
  }
];

export const towerKnowledge: Record<TowerLocale, TowerTopic[]> = {
  en: topicsEn,
  fr: topicsEn.map((topic) => ({
    ...topic,
    title: `${topic.title} (FR)`,
    summary: `Version francaise en preparation. ${topic.summary}`
  }))
};

export function getTowerTopic(locale: TowerLocale, slug: string) {
  return towerKnowledge[locale].find((topic) => topic.slug === slug);
}

export function getTowerTopicIndex(locale: TowerLocale, slug: string) {
  return towerKnowledge[locale].findIndex((topic) => topic.slug === slug);
}
