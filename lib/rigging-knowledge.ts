export type RiggingLocale = "en";

export type RiggingTopic = {
  slug: string;
  title: string;
  summary: string;
  operationsContext: string;
  planningCallout: string[];
  inspectionCallout: string[];
  communicationCallout: string[];
  exclusionZonesCallout: string[];
  liftControlCallout: string[];
  procedureSteps: string[];
  standardsReferences: string[];
  related: string[];
};

const standards = [
  "WorkSafeBC OHSR rigging, hoisting, and suspended load requirements",
  "CSA standards for lifting operations, rigging selection, and competency",
  "ASME B30 series for hooks, slings, below-the-hook devices, and crane interface",
  "Technical Safety BC requirements for regulated lifting equipment and records",
  "Manufacturer requirements for rigging hardware and lifting attachments"
];

const topicsEn: RiggingTopic[] = [
  {
    slug: "basic-rigging",
    title: "Basic Rigging",
    summary: "Core field rigging controls for hitch selection, hardware compatibility, and predictable load behavior.",
    operationsContext:
      "Basic rigging establishes the minimum technical baseline for safe load connection, controlled hoisting, and stable landing under routine site conditions.",
    planningCallout: [
      "Confirm load weight, center of gravity assumptions, and lift path before rigging setup.",
      "Select hitch method based on load geometry, attachment points, and travel constraints.",
      "The lift director shall verify that rigging method aligns with approved planning notes."
    ],
    inspectionCallout: [
      "All rigging hardware must be inspected for ID, WLL, wear, and distortion.",
      "Reject slings with broken wires, heat damage, cuts, or illegible tags.",
      "Verify hook latches, shackle pins, and connection orientation before loading."
    ],
    communicationCallout: [
      "Pre-lift briefing confirms signal source, command terms, and stop authority.",
      "Commands are read back before movement on blind or congested lifts.",
      "Ambiguous commands require immediate hold and clarification."
    ],
    exclusionZonesCallout: [
      "No personnel shall enter suspended load zones.",
      "Barricade pickup and landing areas before lifting begins.",
      "Assign spotters where path pinch points and rotating hazards exist."
    ],
    liftControlCallout: [
      "Perform trial lift to confirm balance and hitch behavior.",
      "Tag lines shall be utilized where required for rotation control.",
      "Maintain controlled movement speed through travel and final landing."
    ],
    procedureSteps: [
      "Identify attachment points and verify capacity at load connection interfaces.",
      "Assemble rigging with compatible hardware and correct orientation.",
      "Apply pre-tension checks and confirm even load share where applicable.",
      "Execute trial lift and verify stable load attitude before travel.",
      "Land load on prepared support and release rigging under controlled conditions."
    ],
    standardsReferences: standards,
    related: ["sling-selection", "load-control", "tag-lines"]
  },
  {
    slug: "advanced-rigging",
    title: "Advanced Rigging",
    summary: "Engineered rigging controls for non-standard geometry, offset centers, and constrained site conditions.",
    operationsContext:
      "Advanced rigging procedures apply where standard hitch methods are insufficient and engineered load paths are required for safe execution.",
    planningCallout: [
      "Confirm engineered rigging sketch and calculation package before setup.",
      "Validate COG offset behavior and sling leg loading assumptions.",
      "Sequence movement checkpoints at each geometry transition."
    ],
    inspectionCallout: [
      "Inspect spreader beams, lifting lugs, and custom hardware for certification status.",
      "Verify pin retention systems and shackle side-load restrictions.",
      "Confirm all measurement tolerances used in setup are within plan criteria."
    ],
    communicationCallout: [
      "Assign dedicated radio channel for engineered lift commands.",
      "Use staged command calls at every hold point and rotation transition.",
      "Lift director confirms readiness from rigger, operator, and receiving zone before each move."
    ],
    exclusionZonesCallout: [
      "Expand exclusion zones to account for swing amplification and load articulation.",
      "Control all adjacent access routes during alignment and rotation maneuvers.",
      "No non-essential personnel within engineered lift envelope."
    ],
    liftControlCallout: [
      "Manage dynamic effects with controlled acceleration and deceleration.",
      "Stop and reassess when load attitude deviates from expected behavior.",
      "Maintain tag line control teams at designated positions."
    ],
    procedureSteps: [
      "Review engineered method with full crane and rigging crew.",
      "Set and verify rigging geometry against approved dimensions.",
      "Conduct static load test hold to verify expected behavior.",
      "Advance through staged movement plan with mandatory hold-point confirmations.",
      "Complete post-lift review and capture deviations for engineering follow-up."
    ],
    standardsReferences: standards,
    related: ["critical-lifts", "multi-crane-lifts", "load-control"]
  },
  {
    slug: "sling-selection",
    title: "Sling Selection",
    summary: "Sling type and configuration selection for predictable load control and capacity assurance.",
    operationsContext: "Correct sling selection directly governs load stability, hardware stress distribution, and operational safety margin.",
    planningCallout: [
      "Match sling type to edge condition, temperature, and load surface profile.",
      "Account for sling angle effects and resulting tension amplification.",
      "Confirm D/d and bend radius requirements for sling service life."
    ],
    inspectionCallout: [
      "Inspect synthetic slings for cuts, abrasion, UV degradation, and broken stitching.",
      "Inspect wire rope slings for broken wires, kinks, bird-caging, and crushed sections.",
      "Remove from service any sling with missing or unreadable identification."
    ],
    communicationCallout: [
      "Signaler confirms sling method and orientation before initial hoist tension.",
      "Operator acknowledges test-lift hold before travel command."
    ],
    exclusionZonesCallout: [
      "Maintain clear zone at pickup point until sling seating and stability are confirmed.",
      "Control access around load corners where snap-back risk exists."
    ],
    liftControlCallout: [
      "Use softeners or corner protection to prevent sling damage.",
      "Equalize sling leg loading before full lift commitment.",
      "Abort lift when sling migration or slip is observed."
    ],
    procedureSteps: [
      "Determine required sling category and size from weight and geometry data.",
      "Configure hitch arrangement and verify attachment integrity.",
      "Apply controlled pre-tension and inspect seating.",
      "Perform trial lift and stability hold.",
      "Proceed with controlled movement under active monitoring."
    ],
    standardsReferences: standards,
    related: ["basic-rigging", "load-control", "critical-lifts"]
  },
  {
    slug: "load-control",
    title: "Load Control",
    summary: "Load behavior management for rotation, drift, pendulum effects, and landing precision.",
    operationsContext: "Load control is maintained through rigging geometry, speed discipline, tag line management, and path isolation.",
    planningCallout: [
      "Define travel route, hold points, and receiving area alignment before release.",
      "Identify wind exposure and pathway obstructions likely to induce rotation."
    ],
    inspectionCallout: [
      "Verify attachment points are secure and free from unintended articulation.",
      "Confirm tag lines are serviceable and correctly routed."
    ],
    communicationCallout: [
      "Use short command cadence for travel and rotation control.",
      "Apply hold commands before passing narrow clearances or blind corners."
    ],
    exclusionZonesCallout: [
      "Exclusion zones shall be maintained along the full load path.",
      "Restrict access below, adjacent to, and ahead of travel trajectory."
    ],
    liftControlCallout: [
      "Control acceleration to reduce pendulum and side-loading effects.",
      "Land load onto prepared supports with final inching commands only.",
      "Reassess if rotation exceeds planned correction limits."
    ],
    procedureSteps: [
      "Establish initial load orientation and tag line positions.",
      "Advance load through planned path with controlled speed.",
      "Use hold points to verify clearance and stability.",
      "Align load at landing zone with coordinated signal commands.",
      "Secure and release only when fully stable and supported."
    ],
    standardsReferences: standards,
    related: ["tag-lines", "critical-lifts", "multi-crane-lifts"]
  },
  {
    slug: "tag-lines",
    title: "Tag Lines",
    summary: "Tag line deployment controls for stabilizing suspended loads and reducing uncontrolled rotation.",
    operationsContext: "Tag lines provide directional influence and load attitude control where wind, geometry, or path constraints increase movement risk.",
    planningCallout: [
      "Determine number and position of tag line handlers before lift.",
      "Plan handler movement routes to avoid pinch and snag hazards."
    ],
    inspectionCallout: [
      "Inspect tag lines for fraying, knots, and inadequate length.",
      "Confirm attachment points prevent unintended release."
    ],
    communicationCallout: [
      "Tag line handlers operate on direct signaler instructions only.",
      "Handlers call out obstructions and line fouling immediately."
    ],
    exclusionZonesCallout: [
      "Handlers stay outside direct suspended load footprint.",
      "No crossing beneath load while repositioning tag lines."
    ],
    liftControlCallout: [
      "Maintain light, continuous tension to prevent swing amplification.",
      "Release and re-establish control only on signal command.",
      "Abort movement if tag lines foul or control is lost."
    ],
    procedureSteps: [
      "Assign tag line positions and fallback paths.",
      "Attach lines at approved control points on load.",
      "Execute test movement to confirm handler coordination.",
      "Maintain synchronization with signaler during travel.",
      "Stand down lines only after load is landed and secured."
    ],
    standardsReferences: standards,
    related: ["load-control", "basic-rigging", "critical-lifts"]
  },
  {
    slug: "critical-lifts",
    title: "Critical Lifts",
    summary: "Enhanced controls for high-risk rigging operations including near-capacity, blind, and engineered lifts.",
    operationsContext: "Critical lifts require formal planning, engineered review where needed, and strict command hierarchy through execution.",
    planningCallout: [
      "Critical lift plan includes contingency actions, hold points, and emergency criteria.",
      "Confirm engineered review for near-capacity, tandem, or high consequence lifts.",
      "The lift director shall verify all preconditions before authorization."
    ],
    inspectionCallout: [
      "Conduct expanded pre-lift equipment checks for crane and rigging components.",
      "Verify certification status and recent inspection history for key hardware."
    ],
    communicationCallout: [
      "Dedicated communication channel with no non-essential traffic.",
      "Mandatory readback at all critical transition points."
    ],
    exclusionZonesCallout: [
      "Establish expanded exclusion boundaries including potential load excursion area.",
      "No unauthorized entry into lift corridor during active sequence."
    ],
    liftControlCallout: [
      "Advance through staged movements with stop/verify protocol.",
      "Suspend operations immediately on variance from engineered expectations.",
      "Emergency response triggers are briefed to full crew before start."
    ],
    procedureSteps: [
      "Conduct full critical-lift pre-brief with role confirmation.",
      "Validate engineered assumptions with field verification checks.",
      "Execute trial and staged movement protocol.",
      "Complete controlled final placement and secure load.",
      "Capture full completion report and variance documentation."
    ],
    standardsReferences: standards,
    related: ["multi-crane-lifts", "advanced-rigging", "load-control"]
  },
  {
    slug: "multi-crane-lifts",
    title: "Multi-Crane Lifts",
    summary: "Coordinated lifting procedures for tandem and shared-load operations requiring synchronized crane control.",
    operationsContext:
      "Multi-crane lifts involve complex load sharing and require engineered planning, synchronized movement, and strict inter-operator communication.",
    planningCallout: [
      "Use engineered lift plan defining load share, sequence, and transfer controls.",
      "Assign primary lift director and command hierarchy across all cranes.",
      "Confirm compatible crane capacities through full motion range."
    ],
    inspectionCallout: [
      "Verify both crane systems and all rigging components before shared load engagement.",
      "Confirm equalization devices and connection geometry per engineered design."
    ],
    communicationCallout: [
      "Operators follow synchronized commands from single lift director.",
      "Movement pacing is standardized to prevent shock loading and load transfer drift."
    ],
    exclusionZonesCallout: [
      "Exclusion zones extend across both crane paths and the combined load envelope.",
      "Access control personnel assigned to all perimeter entry points."
    ],
    liftControlCallout: [
      "Perform coordinated pre-tension and load-share verification.",
      "Execute incremental synchronized movement with mandatory hold checks.",
      "Stop immediately if load share deviates beyond planned tolerance."
    ],
    procedureSteps: [
      "Review engineered tandem lift package with both crane teams.",
      "Set rigging and equalization arrangement to specified dimensions.",
      "Perform coordinated test lift and load share confirmation.",
      "Advance through synchronized travel sequence.",
      "Complete controlled landing and staged de-rig procedure."
    ],
    standardsReferences: standards,
    related: ["critical-lifts", "advanced-rigging", "communication-signals"]
  }
];

export const riggingKnowledge: Record<RiggingLocale, RiggingTopic[]> = {
  en: topicsEn
};

export function getRiggingTopic(locale: RiggingLocale, slug: string) {
  return riggingKnowledge[locale].find((topic) => topic.slug === slug);
}

export function getRiggingTopicIndex(locale: RiggingLocale, slug: string) {
  return riggingKnowledge[locale].findIndex((topic) => topic.slug === slug);
}
