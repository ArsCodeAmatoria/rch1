import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {riggingKnowledge} from "@/lib/rigging-knowledge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema} from "@/lib/schema";
import {KnowledgeSidebar} from "@/components/layout/knowledge-sidebar";

const RIGGING_EDUCATION_MODULES: {n: number; title: string}[] = [
  {n: 1, title: "Regulations & standards"},
  {n: 2, title: "Rigging equipment"},
  {n: 3, title: "Inspection & removal"},
  {n: 4, title: "Crane awareness"},
  {n: 5, title: "Basic rigging"},
  {n: 6, title: "Rigging math"},
  {n: 7, title: "Communication"},
  {n: 8, title: "Advanced sling geometry"},
  {n: 9, title: "Advanced load control"},
  {n: 10, title: "Chainfalls & lever hoists"},
  {n: 11, title: "Tandem lifts"},
  {n: 12, title: "Specialty BTH devices"},
  {n: 13, title: "Crane physics"},
  {n: 14, title: "Environment & site"},
  {n: 15, title: "Lift planning"},
  {n: 16, title: "Field rigging"},
  {n: 17, title: "Safety culture"},
  {n: 18, title: "Reference tables"},
  {n: 19, title: "Glossary"},
  {n: 20, title: "Integration"},
  {n: 21, title: "Rope & knots"},
  {n: 22, title: "Block & tackle"},
  {n: 23, title: "Heavy lift"},
  {n: 24, title: "Tower cranes"},
  {n: 25, title: "Incidents"}
];

const RIGGING_EDUCATION_APPENDICES: {letter: string; slug: string; title: string}[] = [
  {letter: "A", slug: "appendix-a", title: "Hand signals"},
  {letter: "B", slug: "appendix-b", title: "Rigging math"},
  {letter: "C", slug: "appendix-c", title: "Hardware ID"},
  {letter: "D", slug: "appendix-d", title: "Crane types"},
  {letter: "E", slug: "appendix-e", title: "BC compliance"}
];

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/rigging",
    title: "Rigging and Hoisting Knowledge Hub",
    description:
      "Professional rigging and hoisting reference for sling selection, load control, tag lines, critical lifts, and multi-crane lift planning in construction operations.",
    keywords: ["rigging and hoisting", "crane safety", "construction safety program"]
  });
}

export default async function RiggingPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const topics = riggingKnowledge[locale];
  const pageUrl = `${SITE_URL}/${locale}/rigging`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema([{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Rigging", url: pageUrl}])} />
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Rigging and Hoisting Knowledge Hub",
          description: "Collection of rigging and hoisting technical procedures.",
          url: pageUrl,
          locale,
          breadcrumb: [{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Rigging", url: pageUrl}]
        })}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-10">
        <div className="min-w-0 space-y-8">
          <header className="space-y-4 rounded-xl border border-border bg-card p-6">
            <Badge className="w-fit">Rigging & Hoisting Knowledge Hub</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Rigging Operations and Hoisting Control Systems</h1>
            <p className="text-muted-foreground">
              Professional field reference for rigging setup, sling strategy, exclusion controls, communication protocols, and high-risk lift execution.
            </p>

            <div className="not-prose mt-6 w-full rounded-lg border border-primary/25 bg-primary/6 p-5 dark:bg-primary/10">
              <div className="border-b border-primary/20 pb-4">
                <p className="text-sm font-semibold text-foreground">Crane rigging &amp; advanced rigging — education</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Structured introduction: purpose, industry context, standards awareness, areas of study, and how this library supports trade
                  learning and technical reference.
                </p>
                <Link
                  href="/rigging/education"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Educational overview
                </Link>
              </div>

              <div className="mt-5 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Modules 1–25</p>
                <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {RIGGING_EDUCATION_MODULES.map(({n, title}) => (
                    <li key={n}>
                      <Link
                        href={`/rigging/education/module-${n}` as never}
                        className="group flex gap-3 rounded-lg border border-border/80 bg-background/60 px-3 py-2.5 text-sm shadow-sm transition-colors hover:border-primary/45 hover:bg-accent/60"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold tabular-nums text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary">
                          {n}
                        </span>
                        <span className="min-w-0 flex-1 leading-snug">
                          <span className="sr-only">Module {n} — </span>
                          <span className="font-medium text-foreground">{title}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-3 border-t border-primary/20 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Appendices</p>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {RIGGING_EDUCATION_APPENDICES.map(({letter, slug, title}) => (
                    <li key={slug}>
                      <Link
                        href={`/rigging/education/${slug}` as never}
                        className="group flex gap-3 rounded-lg border border-border/80 bg-background/60 px-3 py-2.5 text-sm shadow-sm transition-colors hover:border-primary/45 hover:bg-accent/60"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-bold text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary">
                          {letter}
                        </span>
                        <span className="min-w-0 flex-1 leading-snug">
                          <span className="sr-only">Appendix {letter} — </span>
                          <span className="font-medium text-foreground">{title}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <Separator />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic, index) => (
              <a
                key={topic.slug}
                href={`/${locale}/rigging/${topic.slug}`}
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <p className="text-xs text-muted-foreground">Rigging Topic {index + 1}</p>
                <h2 className="mt-2 text-lg font-semibold">{topic.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{topic.summary}</p>
              </a>
            ))}
          </div>
        </div>

        <KnowledgeSidebar
          title="Rigging and Hoisting Context"
          intro="Field controls for sling selection, load control, tag line usage, and critical lift execution."
          quickLinks={[
            {href: `/${locale}/rigging/education`, label: "Crane rigging & advanced rigging (education)"},
            {href: `/${locale}/rigging/education/module-1`, label: "Module 1 — Regulations & standards"},
            {href: `/${locale}/rigging/education/module-2`, label: "Module 2 — Rigging equipment"},
            {href: `/${locale}/rigging/education/module-3`, label: "Module 3 — Inspection & removal"},
            {href: `/${locale}/rigging/education/module-4`, label: "Module 4 — Crane awareness (riggers)"},
            {href: `/${locale}/rigging/education/module-5`, label: "Module 5 — Basic rigging practices"},
            {href: `/${locale}/rigging/education/module-6`, label: "Module 6 — Rigging math & load calculations"},
            {href: `/${locale}/rigging/education/module-7`, label: "Module 7 — Communication & signaling"},
            {href: `/${locale}/rigging/education/module-8`, label: "Module 8 — Advanced sling geometry & load behavior"},
            {href: `/${locale}/rigging/education/module-9`, label: "Module 9 — Advanced load control"},
            {href: `/${locale}/rigging/education/module-10`, label: "Module 10 — Chainfalls, lever hoists & tensioning"},
            {href: `/${locale}/rigging/education/module-11`, label: "Module 11 — Multiple crane & tandem lifts"},
            {href: `/${locale}/rigging/education/module-12`, label: "Module 12 — Specialty lifting devices & attachments"},
            {href: `/${locale}/rigging/education/module-13`, label: "Module 13 — Crane physics for riggers"},
            {href: `/${locale}/rigging/education/module-14`, label: "Module 14 — Environmental & site hazards"},
            {href: `/${locale}/rigging/education/module-15`, label: "Module 15 — Lift planning & critical lifts"},
            {href: `/${locale}/rigging/education/module-16`, label: "Module 16 — Practical rigging & field operations"},
            {href: `/${locale}/rigging/education/module-17`, label: "Module 17 — Safety culture & human factors"},
            {href: `/${locale}/rigging/education/module-18`, label: "Module 18 — Reference tables & field guidelines"},
            {href: `/${locale}/rigging/education/module-19`, label: "Module 19 — Crane & rigging glossary"},
            {href: `/${locale}/rigging/education/module-20`, label: "Module 20 — Final integration & readiness"},
            {href: `/${locale}/rigging/education/module-21`, label: "Module 21 — Knots, hitches & rope"},
            {href: `/${locale}/rigging/education/module-22`, label: "Module 22 — Block & tackle & reeving"},
            {href: `/${locale}/rigging/education/module-23`, label: "Module 23 — Heavy lift engineering"},
            {href: `/${locale}/rigging/education/module-24`, label: "Module 24 — Tower crane rigging"},
            {href: `/${locale}/rigging/education/module-25`, label: "Module 25 — Incident case studies"},
            {href: `/${locale}/rigging/education/appendix-a`, label: "Appendix A — Standard hand signals"},
            {href: `/${locale}/rigging/education/appendix-b`, label: "Appendix B — Basic rigging math & formulas"},
            {href: `/${locale}/rigging/education/appendix-c`, label: "Appendix C — Equipment identification & hardware"},
            {href: `/${locale}/rigging/education/appendix-d`, label: "Appendix D — Crane types & operational characteristics"},
            {href: `/${locale}/rigging/education/appendix-e`, label: "Appendix E — BC regulations & compliance quick reference"},
            {href: `/${locale}/rigging/sling-selection`, label: "Sling selection guide"},
            {href: `/${locale}/rigging/load-control`, label: "Load control procedures"},
            {href: `/${locale}/rigging/critical-lifts`, label: "Critical lift controls"},
            {href: `/${locale}/safety-program/rigging-inspections`, label: "Rigging inspections"}
          ]}
        />
      </div>
    </section>
  );
}
