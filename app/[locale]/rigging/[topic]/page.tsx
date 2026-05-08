import {notFound} from "next/navigation";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {JsonLd} from "@/components/seo/JsonLd";
import {getRiggingTopic, getRiggingTopicIndex, riggingKnowledge} from "@/lib/rigging-knowledge";
import {SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildFAQPageSchema, buildHowToSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {
  CommunicationProtocol,
  ExclusionZoneNotice,
  InspectionChecklist,
  LiftPlanningNotice,
  ProcedureSequence,
  StandardsReference,
  TechnicalSafetyCallout,
  WarningBox
} from "@/components/sections/safety-manual-components";

const toc = [
  {id: "summary", label: "Technical Summary"},
  {id: "takeaways", label: "Key Takeaways"},
  {id: "definitions", label: "Definitions"},
  {id: "context", label: "Operations Context"},
  {id: "planning", label: "Planning Callout"},
  {id: "inspection", label: "Inspection Callout"},
  {id: "communication", label: "Communication Callout"},
  {id: "exclusion", label: "Exclusion Zones Callout"},
  {id: "control", label: "Lift Control Callout"},
  {id: "procedure", label: "Procedure Sequence"},
  {id: "standards", label: "Standards"},
  {id: "faq", label: "Operational FAQ"},
  {id: "related", label: "Related Procedures"}
] as const;

export default async function RiggingTopicPage({params}: {params: Promise<{topic: string}>}) {
  const {topic: slug} = await params;
  const locale = (await getLocale()) as "en" | "fr";
  const topic = getRiggingTopic(locale, slug);
  if (!topic) return notFound();

  const index = getRiggingTopicIndex(locale, slug);
  const all = riggingKnowledge[locale];
  const previous = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const pageUrl = `${SITE_URL}/${locale}/rigging/${slug}`;
  const entities = ["Rigging", "Hoisting", "Sling selection", "Critical lift", "Tag lines", "Exclusion zone", "Lift director"];
  const faqItems = [
    {
      question: "How are rigging inspections conducted before lifting operations?",
      answer:
        "Rigging inspections verify identification, rated capacity, condition, and compatibility of all hardware before load is applied."
    },
    {
      question: "What is the role of exclusion zones in rigging and hoisting?",
      answer:
        "Exclusion zones prevent personnel exposure to suspended load trajectories, rotation hazards, and pinch-point zones during movement."
    },
    {
      question: "What are lift director responsibilities during rigging operations?",
      answer:
        "The lift director confirms planning controls, communication authority, readiness checks, and stop-work triggers for each lift phase."
    }
  ];
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: `${SITE_URL}/${locale}/rigging`},
    {name: topic.title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildFAQPageSchema(faqItems)} />
      <JsonLd data={buildHowToSchema({name: `${topic.title} Procedure`, description: topic.summary, steps: topic.procedureSteps})} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: topic.title,
          description: topic.summary,
          url: pageUrl,
          locale,
          keywords: [...entities, ...topic.standardsReferences],
          about: entities,
          mentions: topic.related.map((item) => item.replace(/-/g, " "))
        })}
      />
      <JsonLd data={buildWebPageSchema({name: topic.title, description: topic.summary, url: pageUrl, locale, breadcrumb})} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> / {" "}
        <a href={`/${locale}/rigging`} className="hover:text-primary">Rigging</a> / <span className="text-foreground">{topic.title}</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging & Hoisting Procedure Reference</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{topic.title}</h1>
        <p className="max-w-5xl text-muted-foreground">{topic.summary}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <section id="summary" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Technical Summary</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This page covers rigging and hoisting controls for planning, inspection, communication, exclusion boundaries, and load behavior management.
            </p>
          </section>

          <section id="takeaways" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Key Takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {topic.liftControlCallout.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section id="definitions" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Definitions</h2>
            <dl className="mt-3 grid gap-3 text-sm">
              <div><dt className="font-semibold">Rigging</dt><dd className="text-muted-foreground">The method and hardware configuration used to connect, control, and move loads safely.</dd></div>
              <div><dt className="font-semibold">Hoisting</dt><dd className="text-muted-foreground">The controlled vertical and travel movement of loads using crane and rigging systems.</dd></div>
              <div><dt className="font-semibold">Critical lift</dt><dd className="text-muted-foreground">A high-risk lift requiring enhanced planning, communication, and control verification.</dd></div>
            </dl>
          </section>

          <section id="context" className="scroll-mt-24">
            <TechnicalSafetyCallout summary={topic.operationsContext} />
          </section>

          <section id="planning" className="scroll-mt-24">
            <LiftPlanningNotice items={topic.planningCallout} />
          </section>

          <section id="inspection" className="scroll-mt-24">
            <InspectionChecklist items={topic.inspectionCallout} />
          </section>

          <section id="communication" className="scroll-mt-24">
            <CommunicationProtocol items={topic.communicationCallout} />
          </section>

          <section id="exclusion" className="scroll-mt-24">
            <ExclusionZoneNotice items={topic.exclusionZonesCallout} />
          </section>

          <section id="control" className="scroll-mt-24">
            <WarningBox items={topic.liftControlCallout} />
          </section>

          <section id="procedure" className="scroll-mt-24">
            <ProcedureSequence steps={topic.procedureSteps} />
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
            <h2 className="text-lg font-semibold">Related Rigging Procedures</h2>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {topic.related.map((relatedSlug) => (
                <li key={relatedSlug}>
                  <a href={`/${locale}/rigging/${relatedSlug}`} className="text-primary hover:underline">
                    {relatedSlug.split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ")}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <nav className="grid gap-3 sm:grid-cols-2">
            {previous ? (
              <a href={`/${locale}/rigging/${previous.slug}`} className="rounded-lg border border-border bg-card p-4 hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Previous Topic</p>
                <p className="mt-1 font-semibold">{previous.title}</p>
              </a>
            ) : <div />}
            {next ? (
              <a href={`/${locale}/rigging/${next.slug}`} className="rounded-lg border border-border bg-card p-4 text-right hover:border-primary/50">
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
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="text-foreground/85 hover:text-primary">{entry.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <WarningBox items={topic.liftControlCallout} />
        </aside>
      </div>
    </article>
  );
}
