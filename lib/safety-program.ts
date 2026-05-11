export type SafetyLocale = "en";

export type SafetyTopic = {
  slug: string;
  title: string;
  summary: string;
  objective: string;
  warnings: string[];
  procedureSequence: string[];
  inspectionChecklist: string[];
  communicationProtocol: string[];
  equipmentRequirements: string[];
  liftPlanningNotes: string[];
  siteCoordination: string[];
  emergencyActions: string[];
  standardsReferences: string[];
  relatedProcedures: string[];
};

const standardsBase = [
  "WorkSafeBC OHSR applicable crane and rigging provisions",
  "CSA crane, rigging, and safety management standards",
  "ASME B30 series relevant to crane operations and below-the-hook devices",
  "EN standards and FEM guidance where project specifications require",
  "Technical Safety BC directives and equipment registration requirements",
  "Manufacturer operating, assembly, and maintenance procedures"
];

const slugs = [
  "field-level-hazard-assessment",
  "safe-work-procedures",
  "emergency-response",
  "site-documentation",
  "lift-planning",
  "crane-communication",
  "exclusion-zones",
  "critical-lifts",
  "crane-inspections",
  "rigging-inspections",
  "wind-management",
  "self-erect-procedures",
  "climbing-procedures",
  "assembly-disassembly",
  "overhead-powerlines",
  "ground-bearing-pressure",
  "hoisting-procedures",
  "load-securement",
  "tagline-procedures",
  "personnel-responsibilities",
  "radio-communication",
  "lift-director-procedures",
  "operator-evaluations",
  "equipment-documentation"
] as const;

function headingFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function genericTopic(slug: string): SafetyTopic {
  const title = headingFromSlug(slug);
  return {
    slug,
    title,
    summary:
      "Technical operating controls for tower crane, rigging, and hoisting activities executed under site-specific engineered constraints.",
    objective:
      "Establish repeatable field procedures that control load movement risk, maintain communications, and align execution with approved engineering documentation.",
    warnings: [
      "Prior to hoisting operations, the lift director shall verify that all controls and approvals are active for the planned sequence.",
      "No personnel shall enter suspended load zones or crane swing radius boundaries unless explicitly authorized and protected.",
      "Manufacturer requirements take precedence where applicable."
    ],
    procedureSequence: [
      "Review approved lift plan, crane configuration, and rigging arrangement before mobilization.",
      "Confirm competency assignments for operator, rigger, signaler, and lift director responsibilities.",
      "Inspect crane systems, rigging hardware, and communication devices for serviceability and traceability.",
      "Establish exclusion zones, travel path controls, and multi-trade coordination boundaries.",
      "Execute trial lift, verify load stability and COG behavior, then proceed with planned sequence.",
      "Record completion notes, deviations, and corrective actions in site documentation logs."
    ],
    inspectionChecklist: [
      "Crane setup matches approved configuration, radius envelope, and outrigger/tie-in conditions.",
      "All rigging hardware must be inspected for ID, WLL, condition, and compatibility.",
      "Load weight and rigging weight are verified against chart capacity and operating radius.",
      "Communication channels confirmed with dedicated call signs and standard command language.",
      "Exclusion-zone barriers and spotter assignments are in place before lifting starts.",
      "Weather limits and stop-work triggers are briefed and acknowledged by the crew."
    ],
    communicationProtocol: [
      "The lift director shall verify a single command source for all critical movement commands.",
      "Operators and signalers must confirm each command by readback before movement.",
      "Radio traffic uses standardized phrases: hoist, lower, trolley, slew, stop, hold position.",
      "Loss of communication requires immediate stop and controlled hold pending reconfirmation.",
      "Blind lifts require redundant communication and defined checkpoint confirmations."
    ],
    equipmentRequirements: [
      "Current crane load charts and operator manual available at operating station.",
      "Inspected slings, shackles, hooks, blocks, master links, and tag lines suitable for duty.",
      "Calibrated anemometer and wind monitoring interface operational.",
      "Barricade equipment, signage, and access control barriers for exclusion zones.",
      "Dedicated radios with spare power source for crane team and lift director."
    ],
    liftPlanningNotes: [
      "Confirm total lifted mass including rigging, below-the-hook devices, and dynamic factors.",
      "Validate radius, boom/jib geometry, and travel path against obstructions and overhead hazards.",
      "Assess blind zones, crane interference points, and sequence constraints for adjacent trades.",
      "Define hold points for verification of load attitude, path clearance, and communication status.",
      "Site-specific engineered requirements shall be followed."
    ],
    siteCoordination: [
      "Coordinate crane activity windows with concrete, steel, facade, and logistics teams.",
      "Integrate traffic management and pedestrian routing with exclusion-zone boundaries.",
      "Issue pre-lift briefing to all affected trades before each high-risk sequence.",
      "Escalate unresolved interface conflicts to supervision prior to execution."
    ],
    emergencyActions: [
      "Initiate stop-work and secure suspended load to safest available stable condition.",
      "Activate emergency communication hierarchy and notify site supervision immediately.",
      "Isolate area, enforce evacuation perimeter, and suspend non-essential site movement.",
      "Capture incident data, witness statements, and equipment status for reporting.",
      "Current regulations must always be verified."
    ],
    standardsReferences: standardsBase,
    relatedProcedures: [
      "lift-planning",
      "exclusion-zones",
      "radio-communication",
      "critical-lifts",
      "rigging-inspections"
    ]
  };
}

const bySlug: Record<string, Partial<SafetyTopic>> = {
  "field-level-hazard-assessment": {
    title: "Field Level Hazard Assessment",
    summary:
      "Structured FLHA execution for suspended-load work, blind picks, and multi-trade crane operations.",
    objective:
      "Identify and control dynamic hazards before each lift sequence, with explicit accountability for supervision, operator, and rigging roles.",
    procedureSequence: [
      "Prior to hoisting operations, perform pre-lift review with operator, lift director, riggers, and affected trades.",
      "Identify suspended load hazards, pinch points, blind lifts, and swing radius conflicts in the lift corridor.",
      "Assess powerline proximity, overhead obstructions, underground services, and crane setup hazards.",
      "Evaluate wind conditions, precipitation, visibility, and weather-related stop-work triggers.",
      "Define exclusion zone requirements, spotter positions, and access restrictions for each movement phase.",
      "Record control measures, assign responsibilities, and obtain crew acknowledgement before start."
    ],
    inspectionChecklist: [
      "Suspended-load path clear of unauthorized personnel and mobile equipment.",
      "Pinch-point and crush-zone controls identified at load pickup, travel, and landing points.",
      "Blind lift communication checkpoints assigned and tested.",
      "Powerline approach limits defined with visual controls and observer assignment.",
      "Swing radius hazards marked with barricades and warning signage.",
      "Underground service and setup footprint confirmed before crane loading."
    ],
    siteCoordination: [
      "Supervisor responsibilities: enforce controls, resolve trade conflicts, and authorize start.",
      "Operator responsibilities: confirm crane condition, chart compliance, and command clarity.",
      "Rigging responsibilities: verify hardware, sling geometry, and stable load connection.",
      "Multi-trade coordination: freeze conflicting access routes during critical movement windows."
    ],
    relatedProcedures: [
      "lift-planning",
      "crane-communication",
      "exclusion-zones",
      "wind-management",
      "rigging-inspections"
    ]
  },
  "safe-work-procedures": {
    title: "Safe Work Procedures",
    summary: "Operational safe work procedures for tower crane operation, rigging setup, signaling, and controlled hoisting.",
    procedureSequence: [
      "Apply approved SWP for tower crane operations and hoisting activities prior to task commencement.",
      "Verify rigging setup, signaling procedures, and radio communication protocol before first movement.",
      "Control suspended loads using approved load path management and exclusion boundary enforcement.",
      "For climbing operations, assembly/disassembly, or self-erect cranes, use dedicated engineered sequence plans.",
      "For lifting personnel where applicable, enforce regulatory criteria and engineered safeguards.",
      "Confirm crane travel restrictions and site interface constraints at each stage of execution."
    ]
  },
  "emergency-response": {
    title: "Emergency Response",
    summary: "Emergency control framework for suspended load events, rigging failures, powerline contact, and weather shutdown.",
    emergencyActions: [
      "Suspended load emergency: stop movement, hold stable position, clear zone, and establish command.",
      "Rigging failure response: isolate area, secure secondary hazards, and prevent uncontrolled access.",
      "Powerline contact: maintain operator position unless imminent danger, restrict approach, notify utility and authorities.",
      "Crane shutdown procedures: execute controlled stop and park sequence according to manufacturer guidance.",
      "Weather shutdown procedures: apply wind-triggered stop criteria and out-of-service configuration.",
      "Emergency lowering performed only under approved conditions with qualified personnel and direct supervision.",
      "Activate evacuation zones, rescue coordination, and incident reporting hierarchy without delay."
    ]
  },
  "site-documentation": {
    title: "Site Documentation",
    summary: "Document-control framework for lift planning, certification, inspection, maintenance, and regulatory evidence.",
    inspectionChecklist: [
      "Lift plans and engineered lift studies current and approved.",
      "Crane inspection records and rigging inspection records complete and legible.",
      "Operator certifications and evaluator sign-offs available on site.",
      "Equipment logs and maintenance records reflect current condition status.",
      "Assembly/disassembly procedures and climbing records accessible to field supervision.",
      "Manufacturer manuals, WorkSafeBC documentation, and Technical Safety BC requirements maintained.",
      "Site orientation records include crane-zone hazard briefings for relevant trades."
    ]
  },
  "lift-planning": {
    title: "Lift Planning",
    summary: "Engineered lift planning controls covering capacity, geometry, sequencing, and communication.",
    liftPlanningNotes: [
      "Calculate load weights, rigging weights, and center of gravity with documented assumptions.",
      "Confirm crane configuration and radius calculations against current chart edition.",
      "For multi-crane lifts and critical lifts, complete engineered review and approval process.",
      "Plan exclusion zone boundaries and route control before mobilization.",
      "Define communication planning, command authority, and readback protocol.",
      "Integrate wind restrictions and weather contingency controls into sequence planning.",
      "Issue lift sequencing steps with verification hold points for each transition."
    ]
  },
  "critical-lifts": {
    title: "Critical Lifts",
    summary: "High-risk lift controls for tandem picks, near-capacity operations, blind lifts, and occupied-area constraints.",
    warnings: [
      "Critical lift category includes tandem lifts, high-risk lifts, near-capacity lifts, and blind lifts.",
      "Lifts over occupied areas require additional engineered controls and strict access isolation.",
      "The lift director shall verify contingency plans before authorizing motion."
    ],
    relatedProcedures: [
      "lift-planning",
      "exclusion-zones",
      "crane-communication",
      "wind-management",
      "rigging-inspections"
    ]
  },
  "overhead-powerlines": {
    title: "Overhead Powerlines",
    summary: "Powerline hazard control procedures for crane boom, load line, and suspended load clearances.",
    warnings: [
      "Powerline approach limits shall be defined and physically marked prior to work.",
      "Dedicated powerline observer required where proximity risk exists.",
      "No movement shall proceed when minimum clearance cannot be confirmed."
    ]
  },
  "ground-bearing-pressure": {
    title: "Ground Bearing Pressure",
    summary: "Ground support verification for crane loading, outrigger reaction, and foundation stability.",
    inspectionChecklist: [
      "Ground bearing calculations reviewed for planned crane loading and phase conditions.",
      "Subsurface conditions and underground services confirmed with current utility information.",
      "Crane mats, pads, and support media installed per engineered requirements.",
      "Settlement monitoring plan defined for high-load or variable soil locations."
    ]
  },
  "equipment-documentation": {
    title: "Equipment Documentation",
    summary: "Traceable equipment records for crane assets, rigging gear, maintenance, and regulatory conformance.",
    inspectionChecklist: [
      "Asset registry includes serial numbers, model details, and operating limitations.",
      "Inspection intervals and maintenance actions current for each crane and rigging device.",
      "Defect records include disposition, corrective action, and return-to-service authorization.",
      "Document package includes manuals, service bulletins, and manufacturer revisions."
    ]
  }
};

export const safetyProgramTopics: Record<SafetyLocale, SafetyTopic[]> = {
  en: slugs.map((slug) => ({...genericTopic(slug), ...bySlug[slug]} as SafetyTopic))
};

export function getSafetyTopic(locale: SafetyLocale, slug: string) {
  return safetyProgramTopics[locale].find((topic) => topic.slug === slug);
}

export function getSafetyTopicIndex(locale: SafetyLocale, slug: string) {
  return safetyProgramTopics[locale].findIndex((topic) => topic.slug === slug);
}

