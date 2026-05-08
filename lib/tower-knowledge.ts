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
    summary:
      "Luffing-jib tower cranes change load radius by pivoting the jib, not by trolley travel alone—ideal for tight urban footprints, overswing limits, and complex airspace. Success depends on chart-correct luffing sequences, limit-respected jib arcs, and anti-collision systems that model luffing height and radius together with slewing.",
    operationalContext:
      "On constrained sites the luffing crane trades horizontal reach for vertical compactness: the jib can be raised to clear neighboring buildings, transit, or another crane’s envelope, then lowered for picks—each move shifts both moment and tip elevation. That coupling makes interference control harder than on a hammerhead: slew, luff, and sometimes hoist must stay inside the engineered study, zoning map, and manufacturer’s approved configuration (counterweight, jib insert, reeving).",
    keyControls: [
      "Operative capacity and radius come from the luffing chart for the exact in-service configuration—never assume a hammerhead or outdated chart family.",
      "Minimum and maximum luffing angles, two-block protection limits, and emergency-stop behavior must match the stamped lift plan and manufacturer limits; limit switches are not advisory.",
      "Anti-collision / zoning must include luffing motion (tip path and height), not only slew and trolley; update profiles after climbing, jib changes, or tie-in moves.",
      "Wind and out-of-service weathervane rules are configuration-specific; parked jib attitude must satisfy manufacturer and site storm plan.",
      "Blind luffing or congested picks require positive radio discipline, agreed hold points, and a single signal authority.",
      "Neighboring trades, hoists, or public corridors under changing radius need re-briefed exclusion and overswing agreements when the jib arc changes materially."
    ],
    procedureSteps: [
      "Confirm active chart booklet: jib length, counterweight package, reeving, rope falls, and any regional chart addendum match the physical crane and posted configuration.",
      "Plot the planned luffing arc against structure, hoist line, and load path; compare to the latest interference drawing—note any sector where luffing lowers the tip into another crane’s space.",
      "Wake anti-collision / zoning: verify encoder references, forbidden sectors, and that luffing axes are enabled and match field geometry after any climb or jib change.",
      "Walk limit checks pertinent to luffing: upper/lower boom limits, drum layers, two-block zones at extreme luff, and any cut-out that alters combined hoist/luff motion.",
      "Execute luffing in smooth stages with agreed verbal calls at interference approach; hold before crossing engineered lines or when line-of-sight is lost.",
      "After significant weather or shutdown, re-confirm wind speed, chart validity, and that parked jib complies with weathervane or storm pins per manual and site plan.",
      "Log configuration changes, near-limit events, and any bypass or override with time, supervisor, and follow-up—enforcement and insurers increasingly expect traceable records."
    ],
    inspectionFocus: [
      "Luffing winch, brake, and emergency lowering path; rope spooling, fleet angles, and discard criteria on luff ropes",
      "Pivot / pendant pins, boom hinge, articulation clearances, and structural crack indicators per OEM intervals",
      "Encoders, cable reels, or sensors that feed radius and boom angle to limits and anti-collision",
      "Function test of combined motions used in production: hoist + luff, slew + luff near limits (without live overload)",
      "Bolts and alignment on boom connection after jumps or boom extensions"
    ],
    communicationProtocol: [
      "Assign crane call sign and luff-lead voice before picks that combine luff with slew near structures; read back hold and clear.",
      "When two cranes share airspace, agree explicit priority and whether luff-up/luff-down is permitted while the other crane loads—no simultaneous conflicting envelope entry.",
      "Signal team states planned jib attitude before each critical radius change; operator repeats and holds if ambiguity exists.",
      "Radio failure or garbled handoff: stop motion, re-establish single control point, then resume—no coasting through overlap on momentum."
    ],
    coordinationRequirements: [
      "Structural steel, facade, hoist cars, and tower mast: sequence luffing windows so swing arc changes do not surprise platform landings or mast climbers.",
      "Integrate municipal or crane consultant overswing agreements when jib tip path changes elevation materially vs. the last permitted drawing.",
      "Coordinate with lift director on picks where minimum radius is set by chart: luff-out combined with slew may be the only way to stay inside capacity—verify before committing hook.",
      "For rail, transit, or energized corridors: re-validate clearance after any boom angle change that shifts the tip path over the corridor."
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

/** Full French copy for topics where we publish complete translation (avoid stub “en préparation”). */
const luffingTopicFr: TowerTopic = {
  slug: "luffing-jib-cranes",
  title: "Grues à flèche pivotante (luffing)",
  summary:
    "Les grues à tour à flèche pivotante modifient le rayon de levage en orientant la flèche, et non seulement en chariotant — adaptées aux emprises réduites, aux limites de survol et aux sites denses. La conformité repose sur les abaques luffing, les arcs de flèche autorisés et les anticollisions qui modélisent ensemble le levage, le rayon et la hauteur de pointe.",
  operationalContext:
    "Sur emprise étroite, la grue luffing échange du débattement horizontal contre un gabarit plus vertical : on peut remonter la flèche pour dégager des bâtiments voisins, le transit ou l’enveloppe d’une autre grue, puis la baisser pour approcher la charge — chaque mouvement modifie à la fois le moment et l’altitude du bout de flèche. Cette liaison impose une maîtrise des interférences plus exigeante que sur une grue à flèche horizontale : lacet, luffing et parfois levage doivent rester dans l’étude d’ingénierie, le profil de zonage et la configuration homologuée par le fabricant (contre-poids, flèche, réeving).",
  keyControls: [
    "Capacité et rayon : utiliser exclusivement l’abaque luffing correspondant à la configuration réellement en service — jamais un abaque type marteau ou une édition périmée.",
    "Angles de flèche mini/maxi, protection anti-deux blocs et arrêts d’urgence : respecter le plan de levage approuvé et les limites constructeur ; les fins de course ne sont pas indicatives.",
    "Anticollision / zonage : inclure le mouvement de luffing (trajectoire de pointe et hauteur), pas seulement lacet et chariot ; mettre à jour après saut, rallonge de flèche ou changement d’ancrage.",
    "Règles vent et position tempête hors service : l’attitude de flèche au repos doit suivre fabricant et plan chantier.",
    "Levée en angle mort ou en zone dense : radio structurée, jalons d’arrêt convenus et une seule autorité de signalisation.",
    "Parties prenantes voisines : réviser zones d’exclusion et accords de survol quand l’arc de flèche change sensiblement."
  ],
  procedureSteps: [
    "Valider la boîte à abaques : longueur de flèche, contre-poids, réeving, nombre de brins — et tout addendum régional conforme à la grue en place.",
    "Tracer l’arc de luffing prévu vs. ouvrages, ligne de moufle et trajectoire de charge ; comparer au dernier plan d’interférences.",
    "Réveiller anticollision / zonage : cotes codeurs, secteurs interdits, axes luffing actifs et cohérents après saut ou reconfiguration.",
    "Tester les limites liées au luffing : butées bas/haut flèche, couches au tambour, zones deux blocs aux extrêmes, coupures hoist/luff.",
    "Luffer par paliers avec appels convenus aux approches d’interférence ; arrêt avant ligne ingénierie ou perte de vue.",
    "Après intempéries ou arrêt : revérifier vent, validité d’abaques et position de flèche (weathervane, consignes tempête).",
    "Journaliser changements de configuration, approches de limite et tout contournement avec heure, responsable et suivi."
  ],
  inspectionFocus: [
    "Treuil de luffing, frein et fil d’urgence ; spire, angle de passage et critères d’élimination des cordages de luffing",
    "Axes pendantifs, fiche d’articulation, jeu et structure visible selon intervalle OEM",
    "Codeurs, enrouleurs ou capteurs d’angle / rayon alimentant fins de course et anticollision",
    "Essais de mouvements combinés utilisés en production près des limites (sans surcharge)",
    "Boulons et alignement de raccord de flèche après saut ou extension"
  ],
  communicationProtocol: [
    "Indicatif de grue et discipline radio avant levées combinant luffing et lacet près des ouvrages ; répétition des « hold » et « clear ».",
    "En multi-grues : priorité et autorisation de luffer pendant chargement de l’autre — pas d’intrusion simultanée d’enveloppes.",
    "L’équipe signale l’attitude de flèche prévue avant changements de rayon critiques ; l’opérateur répète et s’arrête en cas d’ambiguïté.",
    "Perte radio : arrêt, reprise d’un point de commande unique, pas d’inertie à travers les zones de chevauchement."
  ],
  coordinationRequirements: [
    "Structure, façade, monte-charges et monte-mat : fenêtres de luffing pour ne pas surprendre les accostages ou plates-formes.",
    "Respect des accords municipal / consultant de survol si l’altitude de pointe évolue nettement vs. le dernier dossier.",
    "Avec le chef de levage, valider les levées où le rayon minimum impose luff + lacet pour rester dans l’abaque.",
    "Voies ferrées, traction ou lignes : revérifier après tout changement d’angle modifiant la trajectoire au-dessus du corridor."
  ],
  standardsReferences: commonStandards,
  related: ["city-cranes", "communication-signals", "load-handling"]
};

export const towerKnowledge: Record<TowerLocale, TowerTopic[]> = {
  en: topicsEn,
  fr: topicsEn.map((topic) =>
    topic.slug === "luffing-jib-cranes"
      ? {...luffingTopicFr, title: `${luffingTopicFr.title} (FR)`}
      : {
          ...topic,
          title: `${topic.title} (FR)`,
          summary: `Version francaise en preparation. ${topic.summary}`
        }
  )
};

export function getTowerTopic(locale: TowerLocale, slug: string) {
  return towerKnowledge[locale].find((topic) => topic.slug === slug);
}

export function getTowerTopicIndex(locale: TowerLocale, slug: string) {
  return towerKnowledge[locale].findIndex((topic) => topic.slug === slug);
}
