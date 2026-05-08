export type StandardsLocale = "en" | "fr";

export type StandardsTopic = {
  slug: string;
  title: string;
  summary: string;
  scope: string;
  referencesInclude: string[];
  operationalApplication: string[];
  verificationRequirements: string[];
  documentationExpectations: string[];
  coordinationNotes: string[];
  related: string[];
};

const baseDisclaimer = [
  "References may include applicable acts, regulations, standards, and authority bulletins relevant to the project jurisdiction.",
  "Employers must verify current regulatory requirements, edition dates, and authority interpretations before execution.",
  "Manufacturer instructions and site-specific engineering requirements must always be followed.",
  "This knowledge hub is an operational reference and does not provide legal advice or legal determinations."
];

const topicsEn: StandardsTopic[] = [
  {
    slug: "worksafebc-ohsr",
    title: "WorkSafeBC OHSR",
    summary: "Operational reference context for WorkSafeBC OHSR provisions affecting crane, rigging, and hoisting activities.",
    scope:
      "This topic supports field teams with practical mapping of OHSR-aligned controls for planning, supervision, inspection, and execution in British Columbia operations.",
    referencesInclude: [
      "OHSR provisions relevant to lifting, material handling, and high-risk construction activities",
      "Employer, supervisor, and worker duty alignment for controlled crane and rigging operations",
      "Requirements affecting hazard assessment, safe work procedures, and documentation"
    ],
    operationalApplication: [
      "Integrate OHSR-aligned controls into lift planning, pre-task hazard assessment, and exclusion-zone management.",
      "Use supervision checkpoints to confirm procedural controls are active before hoisting operations.",
      "Apply stop-work controls where planned conditions diverge from approved safe work methods."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Maintain FLHA records, SWP references, pre-lift briefings, and inspection logs tied to task execution.",
      "Retain evidence of corrective actions, hold points, and supervisory approvals.",
      "Ensure records are revision-controlled and accessible for site verification."
    ],
    coordinationNotes: [
      "Coordinate with prime contractor and site supervision on regulatory control boundaries.",
      "Align crane schedules with trade interfaces to prevent conflicting high-risk activities."
    ],
    related: ["technical-safety-bc", "manufacturer-requirements", "csa"]
  },
  {
    slug: "csa",
    title: "CSA",
    summary: "CSA standards reference context for crane operations, rigging methods, and safety management integration.",
    scope: "CSA materials are used as technical references for planning controls, inspection criteria, and execution discipline.",
    referencesInclude: [
      "CSA standards applicable to crane operation, lifting equipment, and safety program integration",
      "Competency and procedural governance references for field-level implementation",
      "Inspection and maintenance guidance for lifting systems"
    ],
    operationalApplication: [
      "Translate CSA reference requirements into project-specific lifting procedures.",
      "Use CSA-aligned inspection criteria for crane and rigging readiness checks.",
      "Apply CSA-informed control logic to communication and exclusion-zone planning."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Document which CSA references are adopted within site procedures.",
      "Record deviations and engineering justifications where alternate methods are applied.",
      "Maintain current edition references in controlled document libraries."
    ],
    coordinationNotes: [
      "Coordinate CSA reference adoption with project engineering and safety leadership.",
      "Verify compatibility with jurisdictional requirements before release to field teams."
    ],
    related: ["asme-b30", "worksafebc-ohsr", "manufacturer-requirements"]
  },
  {
    slug: "asme-b30",
    title: "ASME B30",
    summary: "ASME B30 reference framework for crane operations, below-the-hook devices, and rigging interfaces.",
    scope: "ASME B30 content supports technical execution controls for equipment, rigging, and load-handling methods.",
    referencesInclude: [
      "Series elements applicable to lifting devices, hooks, slings, and operational controls",
      "Inspection and removal-from-service expectations for rigging components",
      "Execution guidance for safe lifting behavior and command discipline"
    ],
    operationalApplication: [
      "Apply ASME B30-aligned rigging checks before critical lifting sequences.",
      "Integrate B30 references into lift director hold points and pre-lift validation.",
      "Use B30 terminology in procedural language for consistency across teams."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Track B30-referenced inspection intervals and equipment condition evidence.",
      "Record inspection findings with disposition and return-to-service status.",
      "Retain supporting method statements for engineered lifting activities."
    ],
    coordinationNotes: [
      "Coordinate B30 reference implementation with crane supplier and engineered lift reviewers.",
      "Ensure site-specific restrictions are integrated into operating instructions."
    ],
    related: ["csa", "manufacturer-requirements", "technical-safety-bc"]
  },
  {
    slug: "en-standards",
    title: "EN Standards",
    summary: "EN standards reference context for projects requiring European-aligned crane and lifting system guidance.",
    scope: "EN references are used where contractual, manufacturer, or engineering requirements specify European standard alignment.",
    referencesInclude: [
      "EN materials relevant to lifting equipment design, operation, and inspection",
      "Load handling and safety system expectations under EN references",
      "Project-specific technical annexes and conformity notes"
    ],
    operationalApplication: [
      "Map EN reference requirements to site lifting procedures and method statements.",
      "Coordinate equipment conformity information with supplier technical documentation.",
      "Apply EN-aligned verification logic during pre-task and post-task checks."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Maintain EN reference matrix in project compliance files.",
      "Record jurisdictional applicability checks and engineering approvals.",
      "Archive conformity declarations and technical data sheets."
    ],
    coordinationNotes: [
      "Coordinate EN adoption with project engineering authority and regulatory advisors.",
      "Confirm compatibility with local jurisdictional requirements before field application."
    ],
    related: ["fem", "manufacturer-requirements", "csa"]
  },
  {
    slug: "fem",
    title: "FEM",
    summary: "FEM guideline reference for crane duty classification, usage intensity, and lifecycle-informed controls.",
    scope: "FEM guidance supports technical interpretation of crane duty demands and operational wear considerations.",
    referencesInclude: [
      "FEM duty classification frameworks",
      "Service and utilization interpretation for operational planning",
      "Maintenance and lifecycle sensitivity context"
    ],
    operationalApplication: [
      "Use FEM-informed duty context when evaluating high-cycle lifting plans.",
      "Coordinate maintenance strategy with expected crane utilization profile.",
      "Incorporate utilization awareness into operational risk reviews."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Document duty assumptions used in lift sequencing and operational planning.",
      "Retain maintenance and inspection records aligned to duty profile.",
      "Track utilization exceptions requiring engineering reassessment."
    ],
    coordinationNotes: [
      "Coordinate FEM interpretation with crane supplier technical specialists.",
      "Escalate duty-related concerns through engineering review channels."
    ],
    related: ["en-standards", "manufacturer-requirements", "technical-safety-bc"]
  },
  {
    slug: "technical-safety-bc",
    title: "Technical Safety BC",
    summary: "Operational compliance reference context for Technical Safety BC equipment and oversight requirements.",
    scope: "This topic addresses field-facing documentation and verification expectations associated with regulated lifting equipment in BC.",
    referencesInclude: [
      "Technical Safety BC directives, bulletins, and equipment requirements",
      "Registration and inspection expectations for regulated systems",
      "Incident and compliance-reporting context"
    ],
    operationalApplication: [
      "Confirm regulated equipment status and required records before site deployment.",
      "Integrate authority requirements into inspection and readiness workflows.",
      "Use structured escalation for compliance anomalies identified in the field."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Maintain authority-facing records including inspection evidence and corrective actions.",
      "Retain registration and equipment identity information for traceability.",
      "Document communication and disposition of authority-related findings."
    ],
    coordinationNotes: [
      "Coordinate with equipment owners, suppliers, and project leadership on authority requirements.",
      "Ensure field teams are briefed on current authority directives affecting operations."
    ],
    related: ["worksafebc-ohsr", "manufacturer-requirements", "csa"]
  },
  {
    slug: "manufacturer-requirements",
    title: "Manufacturer Requirements",
    summary: "Technical priority framework for OEM instructions, limitations, and engineered operating constraints.",
    scope: "Manufacturer instructions are primary execution documents for equipment use, maintenance, and specialized operations.",
    referencesInclude: [
      "OEM operation manuals and load chart constraints",
      "Assembly/disassembly and climbing procedure requirements",
      "Service bulletins and model-specific safety notices"
    ],
    operationalApplication: [
      "Apply manufacturer instructions at every phase of operation and maintenance.",
      "Use model-specific limitations to govern lift planning and execution controls.",
      "Escalate deviations for engineering review prior to field implementation."
    ],
    verificationRequirements: baseDisclaimer,
    documentationExpectations: [
      "Keep current manuals, bulletins, and revision histories on site or controlled digital access.",
      "Document operator and supervisor acknowledgement of critical manufacturer updates.",
      "Track compliance with OEM inspection and maintenance intervals."
    ],
    coordinationNotes: [
      "Coordinate OEM guidance with project engineering and site procedure authors.",
      "Verify instruction compatibility with jurisdictional requirements before release."
    ],
    related: ["technical-safety-bc", "asme-b30", "worksafebc-ohsr"]
  }
];

export const standardsKnowledge: Record<StandardsLocale, StandardsTopic[]> = {
  en: topicsEn,
  fr: topicsEn.map((topic) => ({
    ...topic,
    title: `${topic.title} (FR)`,
    summary: `Version francaise en preparation. ${topic.summary}`
  }))
};

export function getStandardsTopic(locale: StandardsLocale, slug: string) {
  return standardsKnowledge[locale].find((topic) => topic.slug === slug);
}

export function getStandardsTopicIndex(locale: StandardsLocale, slug: string) {
  return standardsKnowledge[locale].findIndex((topic) => topic.slug === slug);
}
