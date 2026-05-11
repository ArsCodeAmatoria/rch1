import type {Metadata} from "next";
import Image from "next/image";
import {notFound} from "next/navigation";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Link} from "@/i18n/navigation";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {getTowerTopic, getTowerTopicIndex, towerKnowledge} from "@/lib/tower-knowledge";
import {buildBreadcrumbSchema, buildFAQPageSchema, buildHowToSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {
  CommunicationProtocol,
  CraneOperationNotice,
  InspectionChecklist,
  LiftPlanningNotice,
  ProcedureSequence,
  SiteCoordinationBox,
  StandardsReference,
  TechnicalSafetyCallout,
  WarningBox
} from "@/components/sections/safety-manual-components";

const tocBase = [
  {id: "summary", label: "Technical Summary"},
  {id: "takeaways", label: "Key Takeaways"},
  {id: "definitions", label: "Definitions"},
  {id: "luffing-geometry", label: "Luffing geometry & charts"},
  {id: "luffing-wind", label: "Wind & multi-crane"},
  {id: "context", label: "Operational Context"},
  {id: "controls", label: "Key Controls"},
  {id: "sequence", label: "Procedure Sequence"},
  {id: "inspection", label: "Inspection Focus"},
  {id: "communication", label: "Communication Protocol"},
  {id: "coordination", label: "Site Coordination"},
  {id: "standards", label: "Standards Reference"},
  {id: "faq", label: "Operational FAQ"},
  {id: "related", label: "Related Topics"}
] as const;

const tocBaseDefault = [
  {id: "summary", label: "Technical Summary"},
  {id: "takeaways", label: "Key Takeaways"},
  {id: "definitions", label: "Definitions"},
  {id: "context", label: "Operational Context"},
  {id: "controls", label: "Key Controls"},
  {id: "sequence", label: "Procedure Sequence"},
  {id: "inspection", label: "Inspection Focus"},
  {id: "communication", label: "Communication Protocol"},
  {id: "coordination", label: "Site Coordination"},
  {id: "standards", label: "Standards Reference"},
  {id: "faq", label: "Operational FAQ"},
  {id: "related", label: "Related Topics"}
] as const;

function tableOfContents(isLuffing: boolean) {
  return isLuffing ? tocBase : tocBaseDefault;
}

/** Public asset: place file at `public/cranes/potainluffing.png` (rename if the extension was saved as `.ong`). */
const LUFFING_HERO_IMAGE = "/cranes/potainluffing.png";

const LUFFING_META = {
  title: "Luffing Jib Tower Cranes",
  description:
    "Potain-style luffing jib tower cranes: variable jib angle, tight-site lifting, overswing and anti-collision controls, alignment with WorkSafeBC OHSR, CSA Z248, and ASME B30.3. Technical reference for operators and lift planners in British Columbia and Canada.",
  keywords: [
    "luffing jib tower crane",
    "Potain luffing crane",
    "variable jib angle",
    "urban tower crane",
    "tower crane anti-collision",
    "BC tower crane operations",
    "CSA Z248 tower crane",
    "luffing envelope",
    "high-density construction crane"
  ],
  imageAlt: "Potain luffing-jib tower crane suitable for confined urban construction sites"
} as const;

const GENERIC_FAQ = [
  {
    question: "What are tower crane wind restrictions in field operations?",
    answer:
      "Wind restrictions are operating thresholds that require reduced lift envelopes, hold conditions, or shutdown based on manufacturer limits and project controls."
  },
  {
    question: "How are tower crane exclusion zones established?",
    answer:
      "Exclusion zones are defined around swing radius, suspended load path, and landing area, with access controls enforced before movement."
  },
  {
    question: "What documentation supports tower crane operations?",
    answer:
      "Operations rely on inspection records, lift plans, communication assignments, and applicable standards/manufacturer references."
  }
] as const;

const luffingFaq = [
  {
    question: "Why does the rated load change as I luff in or out—even at a similar hook height?",
    answer:
      "Luffing changes boom geometry: moment arm to the tower mast, rope line pull, and sometimes reeving geometry. Capacity is read from the luffing chart for the active jib angle and radius family—never from habit or a trolley-style mental model. When in doubt, use the chart stamped for your counterweight set and boom length."
  },
  {
    question: "When must anti-collision or zoning be updated after a configuration change?",
    answer:
      "After any event that shifts tip path or mast height relative to other cranes or structures—climbing (jumping), jib inserts or removes, tie-level changes, reconfiguration of counterweight, or revision to the engineered interference drawing. The model must represent luffing motion in three dimensions together with slew."
  },
  {
    question: "How can wind affect luffing cranes differently than hammerhead cranes?",
    answer:
      "Projected sail area and jib attitude change with luff angle. A jib raised for clearance presents different wind thrust and out-of-service weathervane torque than a level hammerhead jib. Follow manufacturer gust tables, site wind plan, and any requirement to pin or feather the jib for named storms—treat “parked” as a defined configuration, not operator preference."
  }
] as const;

const luffingTechnicalSummary = [
  "This page is written for supervisors and operators running luffing-jib tower cranes on tight or stacked sites—where boom angle, not trolley travel alone, sets working radius and where every luff move shifts both moment and tip height. It ties together chart discipline, limit-switch reality, anti-collision modeling that includes luffing, and the coordination rhythms BC high-rise jobs increasingly expect.",
  "Use it alongside the manufacturer’s operation and maintenance manual, the stamped lift plan, and the applicable regulatory framework for your jurisdiction. Nothing here relieves the duty to follow OEM guarding, engineered drawings, and site-specific wind and interference programs."
] as const;

const luffingDefinitions = [
  {
    term: "Luffing",
    def: "Pivoting the jib (boom) to raise or lower the working angle, which changes horizontal reach and the load path relative to the mast—distinct from trolley travel along a level jib."
  },
  {
    term: "Luffing chart / family",
    def: "Manufacturer capacity tables indexed by boom angle, radius, and configuration (counterweight, boom length, reeving). Must match the physical setup posted in the cab or turnover package."
  },
  {
    term: "Tip path / interference envelope",
    def: "The three-dimensional curve the jib nose and hook block follow under combined slew, luff, and hoist motion—what anti-collision and overswing studies must reproduce."
  },
  {
    term: "Jib attitude (parked)",
    def: "Approved boom angle and slew position for out-of-service conditions—often engineered for weathervane, storm pinning, or minimum sail; not an informal choice."
  }
] as const;

const luffingSafetyCallout =
  "Before authorizing combined luff-and-slew moves near structures, overlapping cranes, or public corridors, the lift team shall confirm chart margin, zoning, and signal plan against the current boom insert and counterweight package—not yesterday’s configuration.";

const luffingLiftPlanningNotice = [
  "Verify luffing chart line for the exact boom angle and radius before relieving hook brakes at the structure face or over a blind edge.",
  "Any climb, boom change, or reeving adjustment invalidates prior zoning screenshots—re-field-verify limits and radios before production picks resume.",
  "Where minimum-radius picks drive the plan, sequence luff before aggressive slew so the hook does not pin the load against the building during radius change."
] as const;

const luffingGeometrySection = {
  title: "Luffing geometry & load charts",
  paragraphs: [
    "On a luffing-jib tower crane, trolley travel—if fitted—does not tell the whole story: changing boom angle swings the load through space. Tip height, hook radius, and overturning moment can all move when you luff. Capacity comes from the manufacturer’s luffing charts for the exact boom length, counterweight, and reeving in service; mixing chart families or guessing from “hook height feels safe” is how overloads occur on otherwise well-run sites.",
    "Each approved setup carries limits: minimum and maximum boom angles, zones where pendant or heel components approach mechanical stops, and often interlocks between hoist and luff motion. Those limits assume the crane matches its engineered and inspected condition—tie-ins, pins, inserts, and limit calibration included.",
    "For edge picks, clarify up front whether capacity demands luffing out for radius or luffing in for headroom; sequence slew and luff so the load cannot scrape curtain wall or scaffold during the transition. Where a project issues interference drawings, treat the published envelopes as movement boundaries for tip and load path—not rough guidance."
  ]
} as const;

const luffingWindSection = {
  title: "Wind, weathervane & multi-crane envelopes",
  paragraphs: [
    "Luffing changes exposed sail as the boom angles. Gust response differs from a fixed-level hammerhead jib: the same wind speed can produce different tipping and structural demand depending on attitude. Use manufacturer wind tables for in-service limits and follow the site wind-management plan for holds, feathering, or shutdown. Out-of-service positioning is an engineered state—follow pins, vane orientation, or storm luff angles specified for your model.",
    "When several tower cranes overlap, luffing is not a solo-axis move: it shifts tip elevation while radius changes, which can cross another crane’s zoning shell even if slew speed looks modest. Anti-collision equipment and procedural call-offs must treat combined slew-plus-luff paths as first-class inputs. After any jump or boom change, re-verify that encoders and zoning software still match field geometry—especially if the cab display shows boom angle in a different reference than the modeling team used."
  ]
} as const;

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; topic: string}>;
}): Promise<Metadata> {
  const {locale: localeParam, topic: slug} = await params;
  const topic = getTowerTopic("en", slug);
  if (!topic) return {};

  const isLuffing = slug === "luffing-jib-cranes";
  const cleanTitle = topic.title.replace(/\s*\(FR\)\s*$/u, "").trim();

  return buildPageMetadata({
    locale: localeParam,
    path: `/tower-cranes/${slug}`,
    title: isLuffing ? LUFFING_META.title : cleanTitle,
    description: isLuffing ? LUFFING_META.description : topic.summary,
    keywords: isLuffing ? [...LUFFING_META.keywords] : undefined,
    image: isLuffing ? LUFFING_HERO_IMAGE : undefined,
    imageAlt: isLuffing ? LUFFING_META.imageAlt : undefined,
    type: isLuffing ? "article" : "website",
    article: isLuffing
      ? {
          section: "Tower crane operations",
          tags: [...LUFFING_META.keywords]
        }
      : undefined
  });
}

export default async function TowerTopicPage({params}: {params: Promise<{locale: string; topic: string}>}) {
  const {topic: slug, locale: localeParam} = await params;
  const locale = localeParam;
  const topic = getTowerTopic("en", slug);

  if (!topic) return notFound();

  const idx = getTowerTopicIndex("en", slug);
  const all = towerKnowledge.en;
  const previous = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/${slug}`;
  const isLuffingPage = slug === "luffing-jib-cranes";
  const entities = isLuffingPage
    ? [
        "Luffing jib tower crane",
        "Potain crane",
        "Variable jib angle",
        "Tower crane anti-collision",
        "Urban tower crane",
        "CSA Z248",
        "WorkSafeBC OHSR",
        "Lift planning"
      ]
    : ["Tower crane", "Luffing jib crane", "Flat top crane", "Wind restriction", "Critical lift", "Exclusion zone", "Lift planning"];
  const faqItems = [...(isLuffingPage ? luffingFaq : GENERIC_FAQ)];
  const pageDisplayTitle = isLuffingPage ? LUFFING_META.title : topic.title;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: pageDisplayTitle, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildFAQPageSchema(faqItems)} />
      <JsonLd data={buildHowToSchema({name: `${pageDisplayTitle} Operations`, description: topic.summary, steps: topic.procedureSteps})} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: isLuffingPage ? LUFFING_META.title : topic.title.replace(/\s*\(FR\)\s*$/u, "").trim(),
          description: isLuffingPage ? LUFFING_META.description : topic.summary,
          url: pageUrl,
          locale,
          keywords: [...entities, ...topic.standardsReferences, ...(isLuffingPage ? LUFFING_META.keywords : [])],
          about: entities,
          mentions: topic.related.map((item) => item.replace(/-/g, " ")),
          image: isLuffingPage ? LUFFING_HERO_IMAGE : undefined
        })}
      />
      <JsonLd
        data={buildWebPageSchema({
          name: pageDisplayTitle,
          description: isLuffingPage ? LUFFING_META.description : topic.summary,
          url: pageUrl,
          locale,
          breadcrumb
        })}
      />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> / {" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> /{" "}
        <span className="text-foreground">{pageDisplayTitle}</span>
      </nav>

      <header className="space-y-4 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Tower Crane Technical Reference</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{pageDisplayTitle}</h1>
        <p className="max-w-5xl text-muted-foreground">{topic.summary}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 space-y-5">
          {isLuffingPage ? (
            <figure className="not-prose overflow-hidden rounded-lg border border-border bg-muted/40">
              <Image
                src={LUFFING_HERO_IMAGE}
                alt={LUFFING_META.imageAlt}
                width={900}
                height={506}
                className="h-auto w-full max-w-full object-cover"
                sizes="(max-width: 1023px) 100vw, (min-width: 1024px) min(56rem, 100%)"
                priority
              />
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                Illustration: luffing-jib tower crane — variable jib angle for constrained sites and controlled overswing geometry.
              </figcaption>
            </figure>
          ) : null}
          <section id="summary" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Technical Summary</h2>
            <div className="mt-2 space-y-3 text-sm text-muted-foreground">
              {isLuffingPage ? (
                luffingTechnicalSummary.map((para, idx) => <p key={idx}>{para}</p>)
              ) : (
                <p>
                  This page outlines tower crane operating controls, inspection priorities, communication protocols, and standards-aware field
                  execution practices.
                </p>
              )}
            </div>
          </section>

          <section id="takeaways" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Key Takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {(isLuffingPage ? topic.keyControls : topic.keyControls.slice(0, 3)).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="definitions" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Definitions</h2>
            <dl className="mt-3 grid gap-3 text-sm">
              {isLuffingPage ? (
                luffingDefinitions.map((row) => (
                  <div key={row.term}>
                    <dt className="font-semibold">{row.term}</dt>
                    <dd className="text-muted-foreground">{row.def}</dd>
                  </div>
                ))
              ) : (
                <>
                  <div>
                    <dt className="font-semibold">Tower crane</dt>
                    <dd className="text-muted-foreground">
                      A fixed or climbing crane system used for high-rise and dense-site lifting operations.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Exclusion zone</dt>
                    <dd className="text-muted-foreground">
                      A designated no-entry area that protects personnel from suspended load and swing hazards.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Lift planning</dt>
                    <dd className="text-muted-foreground">
                      A documented sequence defining load, path, controls, and communication requirements before movement.
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </section>

          {isLuffingPage ? (
            <>
              <section id="luffing-geometry" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
                <h2 className="text-lg font-semibold">{luffingGeometrySection.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {luffingGeometrySection.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p>
                    For mechanism-level detail (luff winch, ropes, limits), see the training module{" "}
                    <Link
                      href="/tower-cranes/operator-training-program/mechanical-systems"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Mechanical systems — hoist, slew &amp; luffing
                    </Link>
                    ; for chart reading and load moment, see{" "}
                    <Link
                      href="/tower-cranes/operator-training-program/load-charts-capacity"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Load charts &amp; capacity
                    </Link>
                    .
                  </p>
                </div>
              </section>
              <section id="luffing-wind" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
                <h2 className="text-lg font-semibold">{luffingWindSection.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {luffingWindSection.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p>
                    See also{" "}
                    <Link
                      href="/tower-cranes/operator-training-program/overlap-right-of-way"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Overlap &amp; right of way
                    </Link>{" "}
                    and{" "}
                    <Link href="/tower-cranes/operator-training-program/urban-operations" className="font-medium text-primary underline-offset-4 hover:underline">
                      Urban operations
                    </Link>{" "}
                    for multi-crane coordination on dense sites.
                  </p>
                </div>
              </section>
            </>
          ) : null}

          <section id="context" className="scroll-mt-24">
            <CraneOperationNotice objective={topic.operationalContext} />
            <div className="mt-4">
              <TechnicalSafetyCallout
                summary={isLuffingPage ? luffingSafetyCallout : "The lift director shall verify command authority, equipment condition, and path controls prior to any hoisting sequence."}
              />
            </div>
          </section>

          <section id="controls" className="scroll-mt-24">
            <WarningBox items={topic.keyControls} />
          </section>

          <section id="sequence" className="scroll-mt-24">
            <ProcedureSequence steps={topic.procedureSteps} />
          </section>

          <section id="inspection" className="scroll-mt-24">
            <InspectionChecklist items={topic.inspectionFocus} />
          </section>

          <section id="communication" className="scroll-mt-24">
            <CommunicationProtocol items={topic.communicationProtocol} />
          </section>

          <section id="coordination" className="scroll-mt-24">
            <SiteCoordinationBox items={topic.coordinationRequirements} />
          </section>

          <section id="standards" className="scroll-mt-24">
            <StandardsReference items={topic.standardsReferences} />
          </section>

          <section id="faq" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Operational FAQ</h2>
            <div className="mt-3 space-y-3 text-sm">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-1 text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="related" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Related Tower Crane Topics</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cross-reference linked guidance for integrated crane operation controls.</p>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {topic.related.map((relatedSlug) => (
                <li key={relatedSlug}>
                  <a href={`/${locale}/tower-cranes/${relatedSlug}`} className="text-primary hover:underline">
                    {relatedSlug.split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ")}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <LiftPlanningNotice
            items={
              isLuffingPage
                ? [...luffingLiftPlanningNotice]
                : [
                    "Confirm load and rigging mass against active chart configuration before authorization.",
                    "Validate airspace and access controls for all travel and landing zones.",
                    "No personnel shall enter suspended load zones during active movement."
                  ]
            }
          />

          <Separator />

          <nav className="grid gap-3 sm:grid-cols-2">
            {previous ? (
              <a href={`/${locale}/tower-cranes/${previous.slug}`} className="rounded-lg border border-border bg-card p-4 hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Previous Topic</p>
                <p className="mt-1 font-semibold">{previous.title}</p>
              </a>
            ) : <div />}
            {next ? (
              <a href={`/${locale}/tower-cranes/${next.slug}`} className="rounded-lg border border-border bg-card p-4 text-right hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Next Topic</p>
                <p className="mt-1 font-semibold">{next.title}</p>
              </a>
            ) : <div />}
          </nav>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Table of Contents</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {tableOfContents(isLuffingPage).map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="text-foreground/85 hover:text-primary">{entry.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <WarningBox items={topic.keyControls} />
        </aside>
      </div>
    </article>
  );
}
