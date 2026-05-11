export type Locale = "en";

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  procedure: string[];
  references: string[];
};

export const sections = {
  en: [
    {href: "/safety-program", label: "Safety Program"},
    {href: "/tower-cranes", label: "Tower Cranes"},
    {href: "/rigging", label: "Rigging"},
    {href: "/hoisting", label: "Hoisting"},
    {href: "/standards", label: "Standards"},
    {href: "/knowledge", label: "Knowledge"}
  ]
} as const;

export const safetyProgramTopics: Record<Locale, Topic[]> = {
  en: [
    {slug: "flha", title: "Field Level Hazard Assessment (FLHA)", summary: "Structured field hazard identification before each task.", procedure: ["Review scope and sequence of work.", "Identify hazards, controls, and stop-work triggers.", "Confirm crew communication and sign-off prior to start."], references: ["WorkSafeBC OHSR Part 4", "Employer Safety Program"]},
    {slug: "swp", title: "Safe Work Procedures (SWP)", summary: "Task-specific procedural controls and mandatory hold points.", procedure: ["Reference approved SWP revision.", "Verify competent persons and required PPE.", "Document variances and approvals before execution."], references: ["CSA Z1000 guidance", "Company SWP repository"]},
    {slug: "emergency-response", title: "Emergency Response", summary: "Site response matrix for crane, rigging, and medical incidents.", procedure: ["Confirm emergency contacts and channels.", "Define rescue and exclusion perimeters.", "Run drills and capture corrective actions."], references: ["Site ERP", "Technical Safety BC incident guidance"]},
    {slug: "site-documentation", title: "Site Documentation", summary: "Control of permits, lift plans, inspections, and handover records.", procedure: ["Maintain revision-controlled documents on site.", "Verify permits and signatures before critical work.", "Archive daily records for compliance audit."], references: ["Project QA manual", "Prime contractor requirements"]},
    {slug: "crane-procedures", title: "Crane Procedures", summary: "Operational checks, communication protocol, and load path control.", procedure: ["Complete pre-operational inspection.", "Confirm signaler and radio channel assignment.", "Control exclusion zones and suspended load path."], references: ["ASME B30 series", "Manufacturer operating manual"]},
    {slug: "rigging-procedures", title: "Rigging Procedures", summary: "Slinging, hardware verification, and engineered lift setup.", procedure: ["Validate rigging capacity and D/d ratios.", "Inspect slings, shackles, hooks, and master links.", "Use trial lift and controlled movement plan."], references: ["ASME B30.9", "CSA rigging guidance"]}
  ]
};

export const towerTopics: Record<Locale, Topic[]> = {
  en: [
    {slug: "operator-responsibilities", title: "Operator Responsibilities", summary: "Core competency and authority boundaries for safe operations.", procedure: ["Operate within certification and site orientation limits.", "Refuse unsafe instructions and document stop-work decisions.", "Maintain communication discipline with lifting team."], references: ["WorkSafeBC operator duty", "Manufacturer operating handbook"]},
    {slug: "pre-operational-inspection", title: "Pre-Operational Inspection", summary: "Daily inspection sequence before energizing and lifting.", procedure: ["Inspect structure, ropes, hooks, and controls.", "Confirm limit switches, brakes, and anemometer.", "Record deficiencies and lock out unsafe equipment."], references: ["CSA inspection provisions", "Technical Safety BC inspection notes"]},
    {slug: "wind-restrictions", title: "Wind Restrictions", summary: "Wind-speed thresholds, out-of-service actions, and weather planning.", procedure: ["Monitor wind speed with calibrated instruments.", "Apply lift derating per load chart and jib configuration.", "Follow out-of-service weather vane procedure."], references: ["Manufacturer wind policy", "ASME B30.3"]},
    {slug: "self-erect-cranes", title: "Self-Erect Cranes", summary: "Setup controls, stability limits, and deployment sequencing.", procedure: ["Verify ground bearing and setup envelope.", "Control erection sequence with exclusion area.", "Confirm anchors and leveling tolerances."], references: ["Manufacturer erection manual", "Site engineering notes"]},
    {slug: "luffing-jib-cranes", title: "Luffing Jib Cranes", summary: "Luffing movement controls and high-density urban operations.", procedure: ["Coordinate luffing range with adjacent structures.", "Use anti-collision and zoning systems.", "Plan overlap protocols with neighboring cranes."], references: ["Urban crane plan", "Anti-collision system documentation"]},
    {slug: "flat-top-cranes", title: "Flat Top Cranes", summary: "Modular top configuration and interference management.", procedure: ["Validate tie-ins and free-standing limits.", "Coordinate multi-crane radii and heights.", "Review dismantle sequencing with engineered method."], references: ["Manufacturer technical files", "Project lift strategy"]},
    {slug: "communication-signals", title: "Communication Signals", summary: "Standard hand/radio signals and communication hierarchy.", procedure: ["Use one designated signal person unless transferred.", "Repeat critical commands and verify confirmation.", "Stop operations on ambiguous communication."], references: ["CSA signal conventions", "Site lifting protocol"]},
    {slug: "load-handling", title: "Load Handling", summary: "Load stability, center of gravity control, and path management.", procedure: ["Confirm rigging method and load weight.", "Perform trial lift to verify balance and brakes.", "Move loads over clear, controlled paths only."], references: ["ASME B30 load handling", "Lift plan"]},
    {slug: "exclusion-zones", title: "Exclusion Zones", summary: "Restricted zones around suspended loads and critical operations.", procedure: ["Define barriers and access points before lifting.", "Assign spotters for pinch-point boundaries.", "Enforce zero-entry under suspended loads."], references: ["Site traffic control plan", "Prime contractor safety rules"]}
  ]
};

export const riggingTopics: Record<Locale, Topic[]> = {
  en: ["basic-rigging","advanced-rigging","sling-selection","tag-lines","lift-planning","critical-lifts","multi-crane-lifts","load-control"].map((slug) => ({
    slug,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    summary: "Engineered rigging control focused on predictable load behavior.",
    procedure: ["Confirm load weight, COG, and route constraints.", "Select and inspect all rigging hardware.", "Execute under documented lift plan and communication controls."],
    references: ["ASME B30.9", "WorkSafeBC lifting guidance"]
  }))
};

export const standardsTopics: Record<Locale, Topic[]> = {
  en: [
    "worksafebc-ohsr",
    "csa",
    "asme-b30",
    "en-standards",
    "fem",
    "technical-safety-bc",
    "manufacturer-requirements"
  ].map((slug) => ({
    slug,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    summary: "Reference framework for legal and technical compliance decision-making.",
    procedure: ["Identify applicable jurisdiction and code edition.", "Cross-check project method against current standard.", "Record interpretation notes and engineer/manufacturer approvals."],
    references: ["Project compliance matrix", "Authority having jurisdiction"]
  }))
};
