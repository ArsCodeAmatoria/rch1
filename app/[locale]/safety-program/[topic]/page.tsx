import {notFound} from "next/navigation";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {JsonLd} from "@/components/seo/JsonLd";
import {getSafetyTopic, getSafetyTopicIndex, safetyProgramTopics} from "@/lib/safety-program";
import {SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildFAQPageSchema, buildHowToSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {
  CommunicationProtocol,
  CraneOperationNotice,
  CriticalLiftBox,
  EmergencyActionPanel,
  ExclusionZoneNotice,
  InspectionChecklist,
  LiftPlanningNotice,
  ProcedureSequence,
  RiggingConfiguration,
  SiteCoordinationBox,
  StandardsReference,
  TechnicalSafetyCallout,
  WarningBox,
  WindRestrictionAlert
} from "@/components/sections/safety-manual-components";

type SectionDef = { id: string; label: string };

const toc: SectionDef[] = [
  {id: "summary", label: "Technical Summary"},
  {id: "takeaways", label: "Key Takeaways"},
  {id: "definitions", label: "Definitions"},
  {id: "objective", label: "Objective"},
  {id: "procedure", label: "Procedure Sequence"},
  {id: "inspection", label: "Inspection Checklist"},
  {id: "communication", label: "Communication Protocol"},
  {id: "planning", label: "Lift Planning"},
  {id: "coordination", label: "Site Coordination"},
  {id: "standards", label: "Standards Reference"},
  {id: "emergency", label: "Emergency Actions"},
  {id: "faq", label: "Operational FAQ"},
  {id: "related", label: "Related Procedures"}
];

export default async function SafetyTopicPage({params}: {params: Promise<{topic: string}>}) {
  const {topic: slug} = await params;
  const locale = (await getLocale()) as "en" | "fr";
  const topic = getSafetyTopic(locale, slug);

  if (!topic) return notFound();

  const index = getSafetyTopicIndex(locale, slug);
  const all = safetyProgramTopics[locale];
  const previous = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const pageUrl = `${SITE_URL}/${locale}/safety-program/${slug}`;
  const entities = [
    "Tower crane",
    "Rigging",
    "Hoisting",
    "Critical lift",
    "Exclusion zone",
    "Lift director",
    "Signalperson",
    "WorkSafeBC",
    "Technical Safety BC",
    "CSA standards",
    "ASME B30"
  ];
  const faqItems = [
    {
      question: `What is the primary objective of ${topic.title}?`,
      answer: topic.objective
    },
    {
      question: "How are exclusion zones established around suspended load operations?",
      answer:
        "Exclusion zones are defined before lifting starts, access control points are assigned, and no personnel enter suspended load zones during movement."
    },
    {
      question: "What documentation is required before hoisting operations?",
      answer:
        "Teams verify approved lift plans, field hazard assessments, inspection records, communication assignments, and current standards/manufacturer references."
    }
  ];
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Safety Program", url: `${SITE_URL}/${locale}/safety-program`},
    {name: topic.title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildFAQPageSchema(faqItems)} />
      <JsonLd data={buildHowToSchema({name: `${topic.title} Procedure`, description: topic.summary, steps: topic.procedureSequence})} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: topic.title,
          description: topic.summary,
          url: pageUrl,
          locale,
          keywords: [...entities, ...topic.standardsReferences],
          about: entities,
          mentions: topic.relatedProcedures.map((item) => item.replace(/-/g, " "))
        })}
      />
      <JsonLd data={buildWebPageSchema({name: topic.title, description: topic.summary, url: pageUrl, locale, breadcrumb})} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> / {" "}
        <a href={`/${locale}/safety-program`} className="hover:text-primary">Safety Program</a> / <span className="text-foreground">{topic.title}</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Tower Crane & Rigging Procedure</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{topic.title}</h1>
        <p className="max-w-5xl text-muted-foreground">{topic.summary}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <section id="summary" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Technical Summary</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This procedure defines operational controls for crane safety, rigging and hoisting execution, and standards-aware construction coordination.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Prior to hoisting operations, teams confirm lift planning assumptions, communication hierarchy, exclusion boundaries, and equipment readiness.
            </p>
          </section>

          <section id="takeaways" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Key Takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {topic.warnings.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">Standards referenced include WorkSafeBC, Technical Safety BC, CSA standards, ASME B30, and manufacturer procedures.</p>
          </section>

          <section id="definitions" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Definitions</h2>
            <dl className="mt-3 grid gap-3 text-sm">
              <div>
                <dt className="font-semibold">Critical lift</dt>
                <dd className="text-muted-foreground">A lift sequence requiring elevated controls due to complexity, consequence, or constrained conditions.</dd>
              </div>
              <div>
                <dt className="font-semibold">Exclusion zone</dt>
                <dd className="text-muted-foreground">A controlled no-entry boundary around crane movement and suspended load trajectories.</dd>
              </div>
              <div>
                <dt className="font-semibold">Lift director</dt>
                <dd className="text-muted-foreground">The field authority responsible for verifying readiness and directing lift execution controls.</dd>
              </div>
            </dl>
          </section>

          <section id="objective" className="scroll-mt-24">
            <CraneOperationNotice objective={topic.objective} />
            <div className="mt-4">
              <TechnicalSafetyCallout summary="Prior to hoisting operations, verify command authority, documentation status, and exclusion-zone readiness for the full movement sequence." />
            </div>
          </section>

          <section id="procedure" className="scroll-mt-24">
            <ProcedureSequence steps={topic.procedureSequence} />
          </section>

          <section id="inspection" className="scroll-mt-24">
            <InspectionChecklist items={topic.inspectionChecklist} />
          </section>

          <section id="communication" className="scroll-mt-24">
            <CommunicationProtocol items={topic.communicationProtocol} />
          </section>

          <section id="planning" className="scroll-mt-24 space-y-4">
            <LiftPlanningNotice items={topic.liftPlanningNotes} />
            <RiggingConfiguration items={topic.equipmentRequirements} />
            <CriticalLiftBox notes={topic.warnings} />
            <ExclusionZoneNotice items={["Exclusion zones shall be maintained at all phases of suspended load movement.", "No personnel shall enter suspended load zones.", "Access control points shall be assigned to spotters and supervision."]} />
            <WindRestrictionAlert items={["Crane operators must confirm wind readings before and during lifting.", "Tag lines shall be utilized where required by load behavior and path constraints.", "Suspend operations when wind thresholds or weather triggers are exceeded."]} />
          </section>

          <section id="coordination" className="scroll-mt-24">
            <SiteCoordinationBox items={topic.siteCoordination} />
          </section>

          <section id="standards" className="scroll-mt-24">
            <StandardsReference items={topic.standardsReferences} />
          </section>

          <section id="emergency" className="scroll-mt-24">
            <EmergencyActionPanel items={topic.emergencyActions} />
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
            <h2 className="text-lg font-semibold">Related Procedures</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cross-reference linked procedures for integrated crane and rigging controls.</p>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {topic.relatedProcedures.map((relatedSlug) => (
                <li key={relatedSlug}>
                  <a href={`/${locale}/safety-program/${relatedSlug}`} className="text-primary hover:underline">
                    {relatedSlug.split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ")}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <nav className="grid gap-3 sm:grid-cols-2">
            {previous ? (
              <a href={`/${locale}/safety-program/${previous.slug}`} className="rounded-lg border border-border bg-card p-4 hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Previous Procedure</p>
                <p className="mt-1 font-semibold">{previous.title}</p>
              </a>
            ) : <div />}
            {next ? (
              <a href={`/${locale}/safety-program/${next.slug}`} className="rounded-lg border border-border bg-card p-4 text-right hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Next Procedure</p>
                <p className="mt-1 font-semibold">{next.title}</p>
              </a>
            ) : <div />}
          </nav>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Table of Contents</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="text-foreground/85 hover:text-primary">{entry.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <WarningBox items={topic.warnings} />
        </aside>
      </div>
    </article>
  );
}

