import type {RiggingSlidePageDefinition} from "@/components/rigging/education/rigging-custom-slide-presenter";

/**
 * Matches `RiggingEducationModule2EquipmentProse` wording—one slide chunk per viewport-friendly block.
 */
export const RIGGING_MODULE_2_ARTICLE_ALIGNED_SLIDES = [
  {
    anchorId: "system-fundamentals",
    label: "System fundamentals · typical system",
    content: (
      <>
        <p>A rigging system typically consists of:</p>
        <ul>
          <li>Connection hardware</li>
          <li>Sling systems</li>
          <li>Load attachment points</li>
          <li>Below-the-hook devices</li>
          <li>Crane hook interfaces</li>
          <li>Load control components</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "system-fundamentals",
    label: "System fundamentals · rules",
    content: (
      <>
        <p>Each component within the lifting system must be:</p>
        <ul>
          <li>Compatible</li>
          <li>Properly rated</li>
          <li>Correctly configured</li>
          <li>Inspected before use</li>
          <li>Appropriate for the intended lift</li>
        </ul>
        <p>Rigging systems are only as strong as their weakest component.</p>
      </>
    )
  },
  {
    anchorId: "wll",
    label: "WLL · rating terms",
    content: (
      <>
        <p>Most rigging equipment is assigned a:</p>
        <ul>
          <li>Working Load Limit (WLL)</li>
          <li>Rated Capacity</li>
          <li>Safe Working Load (SWL)</li>
        </ul>
        <p>These ratings indicate the maximum load the equipment is designed to support under specific conditions.</p>
      </>
    )
  },
  {
    anchorId: "wll",
    label: "WLL · what changes capacity",
    content: (
      <>
        <p>Capacity ratings may change depending on:</p>
        <ul>
          <li>Sling angle</li>
          <li>Hitch configuration</li>
          <li>Loading direction</li>
          <li>Environmental conditions</li>
          <li>Shock loading</li>
          <li>Dynamic movement</li>
        </ul>
        <p>Equipment must never be loaded beyond manufacturer limitations.</p>
      </>
    )
  },
  {
    anchorId: "identification",
    label: "Identification & markings",
    content: (
      <>
        <p>Rigging equipment commonly includes identification markings such as:</p>
        <ul>
          <li>Manufacturer name</li>
          <li>Size</li>
          <li>Grade</li>
          <li>Capacity</li>
          <li>Serial number</li>
          <li>Inspection tags</li>
          <li>Certification markings</li>
        </ul>
        <p>Missing or illegible identification may render equipment unsuitable for use depending on site requirements and applicable standards.</p>
      </>
    )
  },
  {
    anchorId: "shackles",
    label: "Shackles · role",
    content: (
      <p>
        Shackles are among the most common rigging connection devices and are used to connect slings, hardware, and lifting components.
      </p>
    )
  },
  {
    anchorId: "shackles",
    label: "Shackles · types",
    content: (
      <>
        <h3>Common shackle types</h3>
        <h4>Anchor shackles</h4>
        <p>Designed for multi-directional loading and commonly used in lifting applications.</p>
        <h4>Chain shackles</h4>
        <p>Typically designed for in-line loading applications.</p>
      </>
    )
  },
  {
    anchorId: "shackles",
    label: "Shackles · pins",
    content: (
      <>
        <h3>Shackle pin types</h3>
        <h4>Screw pin shackles</h4>
        <p>Used for temporary or frequently adjusted connections.</p>
        <h4>Bolt-type shackles</h4>
        <p>Used where long-term or vibration-prone connections exist.</p>
      </>
    )
  },
  {
    anchorId: "shackles",
    label: "Shackles · considerations",
    content: (
      <>
        <h3>Shackle considerations</h3>
        <ul>
          <li>Side loading can reduce capacity</li>
          <li>Pin engagement must be correct</li>
          <li>Threads must be undamaged</li>
          <li>Bow orientation matters</li>
          <li>Improper pin substitution is hazardous</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "eyebolts",
    label: "Eyebolts · overview",
    content: <p>Eyebolts provide lifting attachment points for loads and structures.</p>
  },
  {
    anchorId: "eyebolts",
    label: "Eyebolts · types",
    content: (
      <>
        <h3>Types of eyebolts</h3>
        <h4>Shoulder eyebolts</h4>
        <p>Designed to handle limited angular loading.</p>
        <h4>Non-shoulder eyebolts</h4>
        <p>Designed primarily for vertical loading only.</p>
      </>
    )
  },
  {
    anchorId: "eyebolts",
    label: "Eyebolts · hazards",
    content: (
      <>
        <h3>Eyebolt hazards</h3>
        <ul>
          <li>Angular loading may reduce capacity</li>
          <li>Improper seating can cause bending</li>
          <li>Thread engagement is critical</li>
          <li>Side loading can cause failure</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "hoist-rings",
    label: "Hoist rings · overview",
    content: (
      <p>Hoist rings are engineered lifting attachment points designed to rotate and align with load direction.</p>
    )
  },
  {
    anchorId: "hoist-rings",
    label: "Hoist rings · advantages",
    content: (
      <>
        <p>
          <strong>Advantages include:</strong>
        </p>
        <ul>
          <li>Reduced side loading</li>
          <li>Multi-directional movement</li>
          <li>Improved alignment</li>
          <li>Increased flexibility during lifting</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "hoist-rings",
    label: "Hoist rings · common uses",
    content: (
      <>
        <p>Hoist rings are commonly used in:</p>
        <ul>
          <li>Heavy fabrication</li>
          <li>Machinery movement</li>
          <li>Engineered lifting systems</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "hooks",
    label: "Hooks · overview",
    content: <p>Hooks connect crane blocks and lifting systems to rigging assemblies.</p>
  },
  {
    anchorId: "hooks",
    label: "Hooks · components",
    content: (
      <>
        <h3>Hook components</h3>
        <ul>
          <li>Hook body</li>
          <li>Safety latch</li>
          <li>Saddle area</li>
          <li>Throat opening</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "hooks",
    label: "Hooks · hazards",
    content: (
      <>
        <h3>Hook hazards</h3>
        <ul>
          <li>Excessive throat opening</li>
          <li>Twisting</li>
          <li>Cracking</li>
          <li>Heat damage</li>
          <li>Missing safety latches</li>
          <li>Point loading</li>
        </ul>
        <p>Hooks are designed to support loads within the saddle, not on the tip.</p>
      </>
    )
  },
  {
    anchorId: "master-links",
    label: "Master links",
    content: (
      <>
        <p>Master links act as primary connection points between slings and crane hooks.</p>
        <p>They are commonly used in:</p>
        <ul>
          <li>Multi-leg sling assemblies</li>
          <li>Engineered rigging systems</li>
          <li>Chain sling configurations</li>
        </ul>
        <p>Improper loading angles may introduce unintended forces into master links and connecting hardware.</p>
      </>
    )
  },
  {
    anchorId: "turnbuckles",
    label: "Turnbuckles · purposes",
    content: (
      <>
        <p>Turnbuckles are adjustable tensioning devices used to:</p>
        <ul>
          <li>Adjust rigging length</li>
          <li>Apply tension</li>
          <li>Align loads</li>
          <li>Stabilize systems</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "turnbuckles",
    label: "Turnbuckles · where found",
    content: (
      <>
        <p>They are commonly found in:</p>
        <ul>
          <li>Structural support systems</li>
          <li>Guying systems</li>
          <li>Temporary stabilization assemblies</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "sling-systems",
    label: "Sling systems",
    content: (
      <>
        <p>Slings form the primary load-supporting component within many lifting systems.</p>
        <p>Different sling types are selected based on:</p>
        <ul>
          <li>Load characteristics</li>
          <li>Weight</li>
          <li>Surface conditions</li>
          <li>Environmental exposure</li>
          <li>Flexibility requirements</li>
          <li>Abrasion risk</li>
          <li>Temperature exposure</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "wire-rope-slings",
    label: "Wire rope slings · uses",
    content: (
      <>
        <p>Wire rope slings are commonly used for:</p>
        <ul>
          <li>Heavy lifting</li>
          <li>Abrasion resistance</li>
          <li>Structural steel handling</li>
          <li>Harsh environments</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "wire-rope-slings",
    label: "Wire rope slings · advantages",
    content: (
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Durable</li>
          <li>High strength</li>
          <li>Heat resistance</li>
          <li>Abrasion resistance</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "wire-rope-slings",
    label: "Wire rope slings · limitations",
    content: (
      <>
        <h3>Limitations</h3>
        <ul>
          <li>Reduced flexibility</li>
          <li>Potential for broken wires</li>
          <li>Susceptible to kinking</li>
          <li>Crushing damage possible</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "chain-slings",
    label: "Chain slings · overview",
    content: <p>Chain slings are widely used in industrial and heavy construction applications.</p>
  },
  {
    anchorId: "chain-slings",
    label: "Chain slings · advantages",
    content: (
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Durable</li>
          <li>Adjustable</li>
          <li>Heat resistant</li>
          <li>Suitable for rugged environments</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "chain-slings",
    label: "Chain slings · grades",
    content: (
      <>
        <h3>Chain grades</h3>
        <p>Common lifting chain grades may include:</p>
        <ul>
          <li>Grade 80</li>
          <li>Grade 100</li>
          <li>Grade 120</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "chain-slings",
    label: "Chain slings · hazards",
    content: (
      <>
        <h3>Chain sling hazards</h3>
        <ul>
          <li>Stretching</li>
          <li>Cracking</li>
          <li>Bent links</li>
          <li>Side loading</li>
          <li>Shock loading</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "synthetic-web-slings",
    label: "Web slings · typical uses",
    content: (
      <>
        <p>Synthetic web slings are lightweight and flexible slings commonly used for:</p>
        <ul>
          <li>Fragile loads</li>
          <li>Finished materials</li>
          <li>Sensitive surfaces</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "synthetic-web-slings",
    label: "Web slings · advantages",
    content: (
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Lightweight</li>
          <li>Flexible</li>
          <li>Easy to handle</li>
          <li>Reduced surface damage</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "synthetic-web-slings",
    label: "Web slings · limitations",
    content: (
      <>
        <h3>Limitations</h3>
        <ul>
          <li>Susceptible to cuts</li>
          <li>UV degradation</li>
          <li>Chemical damage</li>
          <li>Heat sensitivity</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "round-slings",
    label: "Round slings · overview",
    content: <p>Round slings contain internal load-bearing fibers protected by an outer sleeve.</p>
  },
  {
    anchorId: "round-slings",
    label: "Round slings · advantages",
    content: (
      <>
        <h3>Advantages</h3>
        <ul>
          <li>Flexible</li>
          <li>Lightweight</li>
          <li>Good load distribution</li>
          <li>Reduced load damage</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "round-slings",
    label: "Round slings · hazards",
    content: (
      <>
        <h3>Hazards</h3>
        <ul>
          <li>Hidden internal damage</li>
          <li>Abrasion</li>
          <li>Chemical exposure</li>
          <li>Heat damage</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "synthetic-rope-hmpe",
    label: "HMPE / synthetic rope · materials",
    content: (
      <>
        <p>Modern lifting operations may use high-performance synthetic fibers such as:</p>
        <ul>
          <li>Dyneema</li>
          <li>HMPE systems</li>
          <li>Specialized synthetic lifting rope</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "synthetic-rope-hmpe",
    label: "HMPE · benefits",
    content: (
      <>
        <p>These materials offer:</p>
        <ul>
          <li>High strength-to-weight ratios</li>
          <li>Reduced handling weight</li>
          <li>Flexibility</li>
          <li>Corrosion resistance</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "synthetic-rope-hmpe",
    label: "HMPE · cautions",
    content: (
      <>
        <p>However, they may also introduce:</p>
        <ul>
          <li>Heat sensitivity</li>
          <li>Abrasion concerns</li>
          <li>Specialized inspection requirements</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "below-the-hook",
    label: "Below-the-hook devices",
    content: (
      <p>
        Below-the-hook devices are lifting attachments positioned between the crane hook and the load. These devices are often engineered for
        specific lifting applications.
      </p>
    )
  },
  {
    anchorId: "spreader-bars",
    label: "Spreader bars",
    content: (
      <>
        <p>Spreader bars distribute forces across multiple lifting points while reducing sling angle forces.</p>
        <p>They are commonly used for:</p>
        <ul>
          <li>Long loads</li>
          <li>Fragile loads</li>
          <li>Wide lifting points</li>
          <li>Structural steel assemblies</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "lifting-beams",
    label: "Lifting beams",
    content: (
      <p>
        Lifting beams support loads directly beneath the beam structure and are commonly used where headroom is limited, precise load support is
        required, or sling angle reduction is necessary.
      </p>
    )
  },
  {
    anchorId: "plate-clamps",
    label: "Plate clamps · overview",
    content: <p>Plate clamps are specialized devices used to lift steel plate and structural components.</p>
  },
  {
    anchorId: "plate-clamps",
    label: "Plate clamps · hazards",
    content: (
      <>
        <h3>Hazards</h3>
        <ul>
          <li>Improper engagement</li>
          <li>Surface contamination</li>
          <li>Side loading</li>
          <li>Inadequate clamping force</li>
        </ul>
        <p>Plate clamps must be used according to manufacturer specifications.</p>
      </>
    )
  },
  {
    anchorId: "magnets",
    label: "Magnets · uses",
    content: (
      <>
        <p>Lifting magnets are used for:</p>
        <ul>
          <li>Steel plate handling</li>
          <li>Fabrication shops</li>
          <li>Material movement</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "magnets",
    label: "Magnets · considerations",
    content: (
      <>
        <h3>Magnet considerations</h3>
        <ul>
          <li>Surface condition affects holding strength</li>
          <li>Air gaps reduce capacity</li>
          <li>Electrical failure may create hazards</li>
          <li>Sudden release is possible</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "concrete-buckets",
    label: "Concrete buckets · context",
    content: <p>Concrete buckets are frequently used in tower crane operations to move concrete throughout construction sites.</p>
  },
  {
    anchorId: "concrete-buckets",
    label: "Concrete buckets · hazards",
    content: (
      <>
        <h3>Hazards</h3>
        <ul>
          <li>Dynamic loading</li>
          <li>Gate failure</li>
          <li>Load shift</li>
          <li>Swing hazards</li>
          <li>Overloading</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "clamshell-buckets",
    label: "Clamshell buckets · uses",
    content: (
      <>
        <p>Clamshell buckets are commonly used for:</p>
        <ul>
          <li>Excavation</li>
          <li>Bulk material handling</li>
          <li>Marine operations</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "clamshell-buckets",
    label: "Clamshell buckets · considerations",
    content: (
      <>
        <p>These systems introduce additional considerations related to:</p>
        <ul>
          <li>Dynamic movement</li>
          <li>Swing control</li>
          <li>Ground personnel exposure</li>
        </ul>
      </>
    )
  },
  {
    anchorId: "compatibility",
    label: "Compatibility · assemblies",
    content: <p>Rigging systems must be compatible as complete assemblies.</p>
  },
  {
    anchorId: "compatibility",
    label: "Compatibility · checklist",
    content: (
      <>
        <p>Compatibility considerations include:</p>
        <ul>
          <li>Capacity ratings</li>
          <li>Connection geometry</li>
          <li>Pin sizing</li>
          <li>Material compatibility</li>
          <li>Angular loading limitations</li>
          <li>Environmental exposure</li>
        </ul>
        <p>Mixing incompatible components may create unintended stresses or failure points.</p>
      </>
    )
  },
  {
    anchorId: "manufacturer-specs",
    label: "Manufacturer specs · mandate",
    content: <p>Rigging equipment must always be used according to manufacturer instructions and engineering limitations.</p>
  },
  {
    anchorId: "manufacturer-specs",
    label: "Manufacturer specs · documentation",
    content: (
      <>
        <p>Manufacturer documentation may include:</p>
        <ul>
          <li>Capacity charts</li>
          <li>Angle limitations</li>
          <li>Inspection criteria</li>
          <li>Environmental limitations</li>
          <li>Assembly procedures</li>
          <li>Maintenance requirements</li>
        </ul>
        <p>Ignoring manufacturer specifications may create unsafe lifting conditions and invalidate equipment ratings.</p>
      </>
    )
  }
] satisfies RiggingSlidePageDefinition[];
