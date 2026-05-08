import {notFound} from "next/navigation";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {JsonLd} from "@/components/seo/JsonLd";
import {SITE_URL} from "@/lib/seo";
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

const toc = [
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

export default async function TowerTopicPage({params}: {params: Promise<{topic: string}>}) {
  const {topic: slug} = await params;
  const locale = (await getLocale()) as "en" | "fr";
  const topic = getTowerTopic(locale, slug);

  if (!topic) return notFound();

  const idx = getTowerTopicIndex(locale, slug);
  const all = towerKnowledge[locale];
  const previous = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/${slug}`;
  const entities = ["Tower crane", "Luffing jib crane", "Flat top crane", "Wind restriction", "Critical lift", "Exclusion zone", "Lift planning"];
  const faqItems = [
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
  ];
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: topic.title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildFAQPageSchema(faqItems)} />
      <JsonLd data={buildHowToSchema({name: `${topic.title} Operations`, description: topic.summary, steps: topic.procedureSteps})} />
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
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> / <span className="text-foreground">{topic.title}</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Tower Crane Technical Reference</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{topic.title}</h1>
        <p className="max-w-5xl text-muted-foreground">{topic.summary}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <section id="summary" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Technical Summary</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This page outlines tower crane operating controls, inspection priorities, communication protocols, and standards-aware field execution practices.
            </p>
          </section>

          <section id="takeaways" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Key Takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {topic.keyControls.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section id="definitions" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Definitions</h2>
            <dl className="mt-3 grid gap-3 text-sm">
              <div><dt className="font-semibold">Tower crane</dt><dd className="text-muted-foreground">A fixed or climbing crane system used for high-rise and dense-site lifting operations.</dd></div>
              <div><dt className="font-semibold">Exclusion zone</dt><dd className="text-muted-foreground">A designated no-entry area that protects personnel from suspended load and swing hazards.</dd></div>
              <div><dt className="font-semibold">Lift planning</dt><dd className="text-muted-foreground">A documented sequence defining load, path, controls, and communication requirements before movement.</dd></div>
            </dl>
          </section>

          <section id="context" className="scroll-mt-24">
            <CraneOperationNotice objective={topic.operationalContext} />
            <div className="mt-4">
              <TechnicalSafetyCallout summary="The lift director shall verify command authority, equipment condition, and path controls prior to any hoisting sequence." />
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
            items={[
              "Confirm load and rigging mass against active chart configuration before authorization.",
              "Validate airspace and access controls for all travel and landing zones.",
              "No personnel shall enter suspended load zones during active movement."
            ]}
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
              {toc.map((entry) => (
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
