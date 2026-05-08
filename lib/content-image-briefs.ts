/**
 * Editorial / design briefs for photos or illustrations still to produce.
 * Shown via ContentImagePlaceholder; also surfaced in <meta name="rch1:placeholder_*"> for searchability in raw HTML.
 */
export type ContentImageBrief = {
  /** Stable id (snake-ish). */
  id: string;
  /** Save final asset next to favicon/static files, e.g. content/training/regulatory-standards--hero.webp */
  suggestedPublicPath: string;
  /** Target pixel dimensions @2x-ready; composer may export 1600-wide master. */
  width: number;
  height: number;
  aspectRatio: string;
  /** Final alt text when replaced. */
  alt: string;
  /** Visible card title */
  headline: string;
  /** What must appear / communicate in the asset. */
  briefing: string;
  /** Composition keywords */
  subjects?: string[];
  /** Palette / realism / illustration vs photo */
  visualStyle?: string[];
};

export const CONTENT_IMAGE_BRIEFS = {
  "home-hero": {
    id: "home-hero",
    suggestedPublicPath: "images/home.png",
    width: 1600,
    height: 900,
    aspectRatio: "16:9",
    alt: "Modern construction crane and safety-professional context on active Canadian jobsite.",
    headline: "Home hero — crane safety platform",
    briefing:
      "Wide hero usable behind text overlay: tower crane silhouette or mid-rise jobsite Vancouver/BC vibe, helmets, disciplined site—not stock cliché yelling workers. Prefer golden-hour or clean documentary light.",
    subjects: ["Tower crane at distance", "Urban high-rise shell", "PPE-visible crew optional", "RCH1 brand-adjacent cool neutrals"],
    visualStyle: ["Photo or photoreal CGI", "No watermarks", "High contrast readable at 1200px wide"]
  },
  "hub-tower-cranes": {
    id: "hub-tower-cranes",
    suggestedPublicPath: "images/tower-crane.png",
    width: 1400,
    height: 788,
    aspectRatio: "16:9",
    alt: "Tower crane operations reference — multi-crane city construction environment.",
    headline: "Tower crane knowledge hub",
    briefing:
      "Illustrates operator-facing reference content: cockpit POV acceptable, or ground view of crane on dense site—emphasis on envelope, signaling, paperwork on clipboard secondary.",
    subjects: ["Two cranes overlapping optional", "Radio / clipboard subtle", "BC-style concrete high-rise"],
    visualStyle: ["Documentary realism", "Horizontal composition"]
  },
  "hub-rigging": {
    id: "hub-rigging",
    suggestedPublicPath: "content/hubs/rigging--hooks-slings-cover.webp",
    width: 1400,
    height: 788,
    aspectRatio: "16:9",
    alt: "Rigging hardware — hooks, shackles, and sling angles on staged lift planning surface.",
    headline: "Rigging & hoisting hub",
    briefing:
      "Close-to-mid shot of rigging tabletop or staged hardware: shackles, synthetic/web slings with tags legible-ish, sling angle sketch or tablet—communicates engineered rigging not random chain pile.",
    subjects: ["Tagged slings", "Spreader beam optional", "Protractor graphic subtle"],
    visualStyle: ["Clean studio OR jobsite tarp", "Sharp focus on hitch geometry"]
  },
  "hub-standards": {
    id: "hub-standards",
    suggestedPublicPath: "content/hubs/standards--code-books-digital.webp",
    width: 1400,
    height: 788,
    aspectRatio: "16:9",
    alt: "Standards shelf — CSA, ASME, and regulatory references with workstation.",
    headline: "Standards & compliance hub",
    briefing:
      "Metaphorical: binders or tablet showing CSA Z248/B30 document covers (fair use abstraction—no verbatim cover art if unsure), helmet, scales-of-justice subtle optional. Communicates structured compliance reading.",
    subjects: ["Neutral desk", "Code stack", "Searchable OHSR on laptop optional"],
    visualStyle: ["Editorial illustration OR photo composite", "Cool grey + one accent colour"]
  },
  "hub-safety-program": {
    id: "hub-safety-program",
    suggestedPublicPath: "content/hubs/safety-program--field-docs.webp",
    width: 1400,
    height: 788,
    aspectRatio: "16:9",
    alt: "Field safety paperwork — FLHA, lift plan, and inspection checklist on clipboard.",
    headline: "Safety program hub",
    briefing:
      "Jobsite-tailgate vibe: laminated lift plan, JSA clipboard, STOP card—readable layout blocks without tiny text. Sense of disciplined pre-task planning.",
    subjects: ["Printed checklist", "Hi-vis strip", "Crane blurred in BG optional"],
    visualStyle: ["Photo", "Muted depth of field"]
  },
  "hub-knowledge": {
    id: "hub-knowledge",
    suggestedPublicPath: "content/hubs/knowledge-library--diagram-network.webp",
    width: 1200,
    height: 675,
    aspectRatio: "16:9",
    alt: "Knowledge library — networked topics linking crane, rigging, and standards hubs.",
    headline: "Knowledge library index",
    briefing:
      "Abstract diagram OR isometric shelves connecting four hubs—less literal photo, more IA map. Suitable small width on `/knowledge` page.",
    subjects: ["Four nodes labeled Safety / Tower / Rigging / Standards", "Thin lines, icon scale"],
    visualStyle: ["Vector-friendly illustration"]
  },
  "hub-hoisting": {
    id: "hub-hoisting",
    suggestedPublicPath: "content/hubs/hoisting--controlled-lift.webp",
    width: 1200,
    height: 675,
    aspectRatio: "16:9",
    alt: "Hoisting — controlled vertical lift with exclusion tape and banksman silhouette.",
    headline: "Ho procedures page",
    briefing:
      "Single-line hoist path emphasized: suspended load modest weight, cones/tape perimeter, distant signal person visible. Reinforces exclusion + control vocabulary.",
    subjects: ["Lift line vertical", "Exclusion ribbon", "Tag line optional"],
    visualStyle: ["Photo composite acceptable"]
  },
  "hub-redtc": {
    id: "hub-redtc",
    suggestedPublicPath: "content/redtc/redtc-practice-hub--exam-charts.webp",
    width: 1400,
    height: 788,
    aspectRatio: "16:9",
    alt: "REDTC crane exam prep — practice UI and overlaid simplified load-chart graphic.",
    headline: "REDTC practice landing",
    briefing:
      "Split visual: muted quiz UI mock + inset of PDF load-chart curve (generic not OEM IP). Signals exam prep plus chart literacy.",
    subjects: ["Progress meter", "Timer optional", "Chart inset desaturated"],
    visualStyle: ["UI mock flat + photographic chart snippet"]
  },
  "hub-blog": {
    id: "hub-blog",
    suggestedPublicPath: "content/site/blog-hub--featured-editorial.webp",
    width: 1400,
    height: 700,
    aspectRatio: "2:1",
    alt: "Technical article hub — crane safety editorial layout with blueprint texture.",
    headline: "Blog / technical articles index",
    briefing:
      "Editorial masthead vibe: typography-forward, subtle crane line-art watermark, suggesting long-form BC construction safety journalism—not stock photo workers.",
    subjects: ["Newspaper rule lines", "Category chips", "Soft blueprint grid"],
    visualStyle: ["Illustration or hybrid photo-graphic"]
  },

  "redtc-load-charts-catalog": {
    id: "redtc-load-charts-catalog",
    suggestedPublicPath: "content/redtc/load-charts--pdf-grid.webp",
    width: 1400,
    height: 600,
    aspectRatio: "~7:3",
    alt: "Grid of crane manufacturer PDF thumbnails for practice browsing.",
    headline: "Load chart catalog",
    briefing:
      "Hero for load-charts listing: orderly grid of generic chart thumbnails—brand-neutral wireframe cranes as icons if needed.",
    subjects: ["Card grid UI", "Search bar silhouette"],
    visualStyle: ["Screenshot-like mock"]
  },

  "operator-training-overview": {
    id: "operator-training-overview",
    suggestedPublicPath: "content/education/tower-training--program-matrix.webp",
    width: 1600,
    height: 900,
    aspectRatio: "16:9",
    alt: "Tower crane operator training program roadmap — sectional modules infographic.",
    headline: "Operator training program overview",
    briefing:
      "Infographic rail or circular timeline with section numbers S1–S18 motifs (icons: law book, wrench, skyline, joystick). Editorial not cluttered—paired with prose on `/operator-training-program`.",
    subjects: ["Module glyphs", "BC map pin subtle"],
    visualStyle: ["Flat vector infographic"]
  },

  "training-regulatory-standards": {
    id: "training-regulatory-standards",
    suggestedPublicPath: "content/education/training-section-01-regulatory.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Regulatory layering — provincial OHS + CSA tower standard + ASME B30 conceptual stack.",
    headline: "§1 Regulatory & standards",
    briefing:
      "Layered shields or translucent panels labeled WorkSafeBC / CSA Z248 / ASME B30.3—diagram feel, minimal fine print. Establish hierarchy of norms.",
    subjects: ["Maple leaf subtle", "Document layers receding"],
    visualStyle: ["Isometric or flat collage"]
  },
  "training-mathematics": {
    id: "training-mathematics",
    suggestedPublicPath: "content/education/training-section-02-math-moment.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Load moment sketch — radius lines, cosine of sling angle, wind delta annotations.",
    headline: "§2 Mathematics",
    briefing:
      "Whiteboard-clean vector: moment equation M=W×a, triangle for sling angle cosine, gust factor annotation—readable at 960px crop.",
    subjects: ["Chord diagram crane boom", "Graph paper subtle"],
    visualStyle: ["Technical illustration monochrome + accent"]
  },
  "training-load-charts-capacity": {
    id: "training-load-charts-capacity",
    suggestedPublicPath: "content/education/training-section-03-load-chart-curves.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Composite load chart excerpt with radius axes and structural vs stability arcs.",
    headline: "§3 Load charts",
    briefing:
      "Generic curved capacity lines vs radius—fabricated plausible chart snippet (no real OEM stamped values). Highlight stability line crossing structural line.",
    subjects: ["Radius axis", "Hoist icon pointer"],
    visualStyle: ["Diagram over subtle grid"]
  },
  "training-mechanical-systems": {
    id: "training-mechanical-systems",
    suggestedPublicPath: "content/education/training-section-04-mechanical-cutaway.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Tower crane mechanical cutaway — hoist drum, slew ring, luffing reeving.",
    headline: "§4 Mechanical systems",
    briefing:
      "Simplified cutaway: slew bearing ring highlighted, hoist drum + luff drum, VFD cabinet ghost outline. Educational not patent-level detail.",
    subjects: ["Arrows torque path", "Brake callout"],
    visualStyle: ["Technical cutaway illustration"]
  },
  "training-climbing-procedures": {
    id: "training-climbing-procedures",
    suggestedPublicPath: "content/education/training-section-05-climbing-jack.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Hydraulic climbing frame on tower mast during jump sequence.",
    headline: "§5 Climbing",
    briefing:
      "Climbing cage / hydraulic jack straddling mast ties—mid-lift moment. Show safety lanyard route and alignment pins if visible.",
    subjects: ["Worker scale reference", "Tie-in collar"],
    visualStyle: ["Photo or high-detail render"]
  },
  "training-inspection-maintenance": {
    id: "training-inspection-maintenance",
    suggestedPublicPath: "content/education/training-section-06-inspection-checklist.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Operator pre-shift inspection at cab — checklist tablet and limit lamp panel.",
    headline: "§6 Inspection & maintenance",
    briefing:
      "Interior cab wide: gloved hand on tablet checklist, limit LEDs in soft focus, hook block visible through glass. Communicates daily inspection discipline.",
    subjects: ["Tablet UI blocks", "Anti-collision screen optional"],
    visualStyle: ["Photo POV warm light"]
  },
  "training-urban-operations": {
    id: "training-urban-operations",
    suggestedPublicPath: "content/education/training-section-07-urban-skyline.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Dense urban tower crane over street canyons with overswing boundary graphic.",
    headline: "§7 Urban operations",
    briefing:
      "High angle city crane with translucent arc showing swing limit over property line; transit bus tiny for scale. Emphasize airspace negotiation.",
    subjects: ["Property line dashed", "Pedestrian canopy optional"],
    visualStyle: ["Photo + vector overlay"]
  },
  "training-overlap-right-of-way": {
    id: "training-overlap-right-of-way",
    suggestedPublicPath: "content/education/training-section-08-overlap-zones.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Two tower cranes with vertical separation zones and anti-collision envelope.",
    headline: "§8 Overlap & right of way",
    briefing:
      "Diagrammatic two-crane airspace: lowest-crane priority annotation, vertical buffer dimension line, anti-collision sensor icons.",
    subjects: ["Colour-coded shells", "Dimension callouts"],
    visualStyle: ["Clean vector engineering diagram"]
  },
  "training-airspace-property-infrastructure": {
    id: "training-airspace-property-infrastructure",
    suggestedPublicPath: "content/education/training-section-09-airspace-rail-skytrain.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Composite hazards — aircraft OLS cone, railway corridor, SkyTrain guideway cross-section.",
    headline: "§9 Airspace & infrastructure",
    briefing:
      "Three-panel triptych OR layered scene: Nav Canada style surface wedge abstract, rail ballast with clearance marker, transit guideway power rail warning stripe—teaches multi-regulator mental model.",
    subjects: ["Warning iconography", "Silhouette aircraft optional"],
    visualStyle: ["Editorial composite illustration"]
  },
  "training-advanced-urban-compliance": {
    id: "training-advanced-urban-compliance",
    suggestedPublicPath: "content/education/training-section-11-anti-collision-lmi.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Cab display — anti-collision zones and LMI parameters on glass cockpit.",
    headline: "§11 Advanced urban compliance",
    briefing:
      "Close-up modern LMI enforcing slew zone—coloured wedges on crane icon. Signals digital compliance overlays.",
    subjects: ["Joystick edge", "Zoning preset label"],
    visualStyle: ["Screen photo permissible with fake UI overlay"]
  },
  "training-remote-operation": {
    id: "training-remote-operation",
    suggestedPublicPath: "content/education/training-section-12-remote-station.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Remote operating station with multimonitor crane view and latency indicator.",
    headline: "§12 Remote operation",
    briefing:
      "Desk with ergonomic seat, joystick, triple monitors showing crane CCTV + telemetry strip; latency ms badge fictional. Future-forward but grounded.",
    subjects: ["Ethernet cable routed", "E-stop mushroom"],
    visualStyle: ["Photo staging"]
  },
  "training-self-erect-tower-cranes": {
    id: "training-self-erect-tower-cranes",
    suggestedPublicPath: "content/education/training-section-13-self-erector-folded.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Self-erecting tower crane in folded travel configuration on slab.",
    headline: "§13 Self-erect cranes",
    briefing:
      "Compact self-erector with outriggers / ballast crates visible—contrast versus hammerhead silhouette in ghost outline.",
    subjects: ["Truck delivery optional", "Urban infill alley"],
    visualStyle: ["Daylight documentary"]
  },
  "training-hoist-systems-wire-rope": {
    id: "training-hoist-systems-wire-rope",
    suggestedPublicPath: "content/education/training-section-14-rope-drums.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Multi-layer hoist rope spooling detail with broken wire magnification inset.",
    headline: "§14 Hoist & wire rope",
    briefing:
      "Macro rope on drum groove + inset magnifier illustrating birdcaging / broken wires—education on discard triggers.",
    subjects: ["Tape measure cue", "Lubrication sheen subtle"],
    visualStyle: ["Macro photo composite"]
  },
  "training-test-blocks-load-testing": {
    id: "training-test-blocks-load-testing",
    suggestedPublicPath: "content/education/training-section-15-test-blocks.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Certified test weights staged for crane commissioning load test.",
    headline: "§15 Test blocks & load testing",
    briefing:
      "Stack of painted test blocks with certificate tag readable-ish, calibrated scale icon. Communicates commissioning evidence trail.",
    subjects: ["Dyneema sling connection", "Engineer clipboard"],
    visualStyle: ["Photo"]
  },
  "training-tower-crane-bases-foundations": {
    id: "training-tower-crane-bases-foundations",
    suggestedPublicPath: "content/education/training-section-16-foundation-anchor.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Tower crane footing — anchor bolts cage and pier form before concrete pour illustration.",
    headline: "§16 Bases & foundations",
    briefing:
      "Exploded footing diagram: bolts template, reinforcing cage, punching shear cone shaded—engineering textbook clarity.",
    subjects: ["Elevator pit adjacency optional", "Moment arrows"],
    visualStyle: ["Vector technical"]
  },
  "training-load-handling-swing-control": {
    id: "training-load-handling-swing-control",
    suggestedPublicPath: "content/education/training-section-17-swing-taglines.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Long-radius swing arc with worker managing tag lines on suspended panel.",
    headline: "§17 Load handling & swing",
    briefing:
      "Wide pick of flat panel drifting under control—shows tag line geometry, inertia arc lines. Communicate swing damping skill.",
    subjects: ["Swing path ghost line", "Distant signaler"],
    visualStyle: ["Photo wide angle"]
  },
  "training-public-safety-traffic-emergency": {
    id: "training-public-safety-traffic-emergency",
    suggestedPublicPath: "content/education/training-section-18-traffic-dep.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Dedicated emergency platform DEP graphic with traffic closure cones and TCP.",
    headline: "§18 Public safety & traffic",
    briefing:
      "Street-level scene: hoarding walkway, crane overswing netting edge, ambulance route arrow, STOP slow paddle—multi-agency choreography.",
    subjects: ["Concrete pump boom blurred far BG", "Flashing amber"],
    visualStyle: ["Illustrated OR photo mashup"]
  },
  "training-tower-crane-controls-monitoring": {
    id: "training-tower-crane-controls-monitoring",
    suggestedPublicPath: "content/education/training-section-19-cab-controls.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Tower crane cab multifunction joysticks, pedal, keypad and load moment limit display.",
    headline: "§19 Cab controls & monitoring",
    briefing:
      "Symmetrical cab console POV shallow DOF — highlight dual joysticks, emergency stop mushroom, monochrome LMI numbers legible-ish.",
    subjects: ["Joystick icons labeled subtle", "Seat mesh texture"],
    visualStyle: ["Photo interior"]
  },
  "training-regulatory-knowledge-requirements": {
    id: "training-regulatory-knowledge-requirements",
    suggestedPublicPath: "content/education/training-section-10-reg-knowledge.webp",
    width: 1440,
    height: 810,
    aspectRatio: "16:9",
    alt: "Collage — electrical clearance, crane certification emblem, ICAO airspace wedge abstract.",
    headline: "§10 Regulatory knowledge",
    briefing:
      "Patchwork illustrating breadth: BC statute book corner, MAD electrical diagram snippet, crane cert card prop—signals exam-style breadth topic.",
    subjects: ["Icon grid", "Colour-coded domains"],
    visualStyle: ["Collage editorial"]
  }
} as const satisfies Record<string, ContentImageBrief>;

export type ContentImageBriefId = keyof typeof CONTENT_IMAGE_BRIEFS;

export function getContentImageBrief(id: ContentImageBriefId): ContentImageBrief {
  return CONTENT_IMAGE_BRIEFS[id];
}

/** Folder name under `operator-training-program/{folder}/page.tsx` → brief id */
export const OPERATOR_TRAINING_PAGE_PLACEHOLDER = {
  "regulatory-standards": "training-regulatory-standards",
  mathematics: "training-mathematics",
  "load-charts-capacity": "training-load-charts-capacity",
  "mechanical-systems": "training-mechanical-systems",
  "climbing-procedures": "training-climbing-procedures",
  "inspection-maintenance": "training-inspection-maintenance",
  "urban-operations": "training-urban-operations",
  "overlap-right-of-way": "training-overlap-right-of-way",
  "airspace-property-infrastructure": "training-airspace-property-infrastructure",
  "advanced-urban-compliance": "training-advanced-urban-compliance",
  "remote-operation": "training-remote-operation",
  "self-erect-tower-cranes": "training-self-erect-tower-cranes",
  "hoist-systems-wire-rope": "training-hoist-systems-wire-rope",
  "test-blocks-load-testing": "training-test-blocks-load-testing",
  "tower-crane-bases-foundations": "training-tower-crane-bases-foundations",
  "load-handling-swing-control": "training-load-handling-swing-control",
  "public-safety-traffic-emergency": "training-public-safety-traffic-emergency",
  "tower-crane-controls-monitoring": "training-tower-crane-controls-monitoring",
  "regulatory-knowledge-requirements": "training-regulatory-knowledge-requirements"
} as const satisfies Record<string, ContentImageBriefId>;

export type OperatorTrainingSectionSlug = keyof typeof OPERATOR_TRAINING_PAGE_PLACEHOLDER;
