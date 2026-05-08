import {notFound} from "next/navigation";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {JsonLd} from "@/components/seo/JsonLd";
import {
  getStandardsTopic,
  getStandardsTopicIndex,
  standardsKnowledge
} from "@/lib/standards-knowledge";
import {SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildFAQPageSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {
  InspectionChecklist,
  LiftPlanningNotice,
  SiteCoordinationBox,
  StandardsReference,
  TechnicalSafetyCallout,
  WarningBox
} from "@/components/sections/safety-manual-components";

const toc = [
  {id: "summary", label: "Technical Summary"},
  {id: "takeaways", label: "Key Takeaways"},
  {id: "scope", label: "Scope"},
  {id: "references", label: "References May Include"},
  {id: "application", label: "Operational Application"},
  {id: "verification", label: "Verification Requirements"},
  {id: "documentation", label: "Documentation Expectations"},
  {id: "coordination", label: "Coordination Notes"},
  {id: "faq", label: "Operational FAQ"},
  {id: "related", label: "Related References"}
] as const;

export default async function StandardsTopicPage({params}: {params: Promise<{topic: string}>}) {
  const {topic: slug} = await params;
  const locale = (await getLocale()) as "en" | "fr";
  const topic = getStandardsTopic(locale, slug);
  if (!topic) return notFound();

  const index = getStandardsTopicIndex(locale, slug);
  const all = standardsKnowledge[locale];
  const previous = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const pageUrl = `${SITE_URL}/${locale}/standards/${slug}`;
  const entities = ["WorkSafeBC", "Technical Safety BC", "CSA standards", "ASME B30", "EN standards", "FEM", "Manufacturer requirements"];
  const faqItems = [
    {
      question: "What documentation is required for crane operations compliance?",
      answer:
        "Documentation typically includes inspection records, lift planning evidence, competency records, and manufacturer/engineering instructions relevant to the operation."
    },
    {
      question: "How should standards references be applied in field procedures?",
      answer:
        "Standards references are mapped into site procedures, verified for current applicability, and coordinated with engineering and supervisory controls."
    },
    {
      question: "Do standards references replace manufacturer instructions?",
      answer:
        "No. Manufacturer instructions and site-specific engineering requirements must always be followed where applicable."
    }
  ];
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Standards", url: `${SITE_URL}/${locale}/standards`},
    {name: topic.title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildFAQPageSchema(faqItems)} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: topic.title,
          description: topic.summary,
          url: pageUrl,
          locale,
          keywords: [...entities, ...topic.referencesInclude],
          about: entities,
          mentions: topic.related.map((item) => item.replace(/-/g, " "))
        })}
      />
      <JsonLd data={buildWebPageSchema({name: topic.title, description: topic.summary, url: pageUrl, locale, breadcrumb})} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> / {" "}
        <a href={`/${locale}/standards`} className="hover:text-primary">Standards</a> / <span className="text-foreground">{topic.title}</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Standards & Compliance Reference</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{topic.title}</h1>
        <p className="max-w-5xl text-muted-foreground">{topic.summary}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-5">
          <section id="summary" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Technical Summary</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This page provides standards-aware implementation guidance for crane and rigging operations, emphasizing verification, documentation, and operational applicability.
            </p>
          </section>

          <section id="takeaways" className="scroll-mt-24 rounded-lg border border-border bg-card p-5">
            <h2 className="text-lg font-semibold">Key Takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {topic.verificationRequirements.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section id="scope" className="scroll-mt-24">
            <TechnicalSafetyCallout summary={topic.scope} />
          </section>

          <section id="references" className="scroll-mt-24">
            <StandardsReference items={topic.referencesInclude} />
          </section>

          <section id="application" className="scroll-mt-24">
            <LiftPlanningNotice items={topic.operationalApplication} />
          </section>

          <section id="verification" className="scroll-mt-24">
            <WarningBox items={topic.verificationRequirements} />
          </section>

          <section id="documentation" className="scroll-mt-24">
            <InspectionChecklist items={topic.documentationExpectations} />
          </section>

          <section id="coordination" className="scroll-mt-24">
            <SiteCoordinationBox items={topic.coordinationNotes} />
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
            <h2 className="text-lg font-semibold">Related Reference Topics</h2>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {topic.related.map((relatedSlug) => (
                <li key={relatedSlug}>
                  <a href={`/${locale}/standards/${relatedSlug}`} className="text-primary hover:underline">
                    {relatedSlug.split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ")}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <nav className="grid gap-3 sm:grid-cols-2">
            {previous ? (
              <a href={`/${locale}/standards/${previous.slug}`} className="rounded-lg border border-border bg-card p-4 hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Previous Topic</p>
                <p className="mt-1 font-semibold">{previous.title}</p>
              </a>
            ) : <div />}
            {next ? (
              <a href={`/${locale}/standards/${next.slug}`} className="rounded-lg border border-border bg-card p-4 text-right hover:border-primary/50">
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
          <WarningBox items={topic.verificationRequirements} />
        </aside>
      </div>
    </article>
  );
}
