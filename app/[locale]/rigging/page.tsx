import type {Metadata} from "next";

import {ContentImagePlaceholder} from "@/components/media/content-image-placeholder";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {riggingKnowledge} from "@/lib/rigging-knowledge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema} from "@/lib/schema";
import {KnowledgeSidebar} from "@/components/layout/knowledge-sidebar";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderImageMeta(
    "hub-rigging",
    buildPageMetadata({
      locale,
      path: "/rigging",
      title: "Rigging and Hoisting Knowledge Hub",
      description:
        "Professional rigging and hoisting reference for sling selection, load control, tag lines, critical lifts, and multi-crane lift planning in construction operations.",
      keywords: ["rigging and hoisting", "crane safety", "construction safety program"]
    })
  );
}

export default async function RiggingPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const topics = riggingKnowledge[locale];
  const pageUrl = `${SITE_URL}/${locale}/rigging`;

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
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
      <header className="space-y-4 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging & Hoisting Knowledge Hub</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Rigging Operations and Hoisting Control Systems</h1>
        <p className="max-w-4xl text-muted-foreground">
          Professional field reference for rigging setup, sling strategy, exclusion controls, communication protocols, and high-risk lift execution.
        </p>

        <div className="mt-6 max-w-4xl">
          <ContentImagePlaceholder id="hub-rigging" />
        </div>

        <div className="not-prose mt-6 max-w-4xl rounded-lg border border-primary/25 bg-primary/6 p-5 dark:bg-primary/10">
          <p className="text-sm font-semibold text-foreground">Crane rigging &amp; advanced rigging — education</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Structured introduction: purpose, industry context, standards awareness, areas of study, and how this library supports trade
            learning and technical reference.
          </p>
          <div className="not-prose mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/rigging/education" className="font-medium text-primary underline-offset-4 hover:underline">
              Educational overview
            </Link>
            <Link href="/rigging/education/module-1" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 1 — Regulations &amp; standards
            </Link>
            <Link href="/rigging/education/module-2" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 2 — Rigging equipment
            </Link>
            <Link href="/rigging/education/module-3" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 3 — Inspection &amp; removal
            </Link>
            <Link href="/rigging/education/module-4" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 4 — Crane awareness
            </Link>
            <Link href="/rigging/education/module-5" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 5 — Basic rigging
            </Link>
            <Link href="/rigging/education/module-6" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 6 — Rigging math
            </Link>
            <Link href="/rigging/education/module-7" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 7 — Communication
            </Link>
            <Link href="/rigging/education/module-8" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 8 — Advanced sling geometry
            </Link>
            <Link href="/rigging/education/module-9" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 9 — Advanced load control
            </Link>
            <Link href="/rigging/education/module-10" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 10 — Chainfalls &amp; lever hoists
            </Link>
            <Link href="/rigging/education/module-11" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 11 — Tandem lifts
            </Link>
            <Link href="/rigging/education/module-12" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 12 — Specialty BTH devices
            </Link>
            <Link href="/rigging/education/module-13" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 13 — Crane physics
            </Link>
            <Link href="/rigging/education/module-14" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 14 — Environment &amp; site
            </Link>
            <Link href="/rigging/education/module-15" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 15 — Lift planning
            </Link>
            <Link href="/rigging/education/module-16" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 16 — Field rigging
            </Link>
            <Link href="/rigging/education/module-17" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 17 — Safety culture
            </Link>
            <Link href="/rigging/education/module-18" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 18 — Reference tables
            </Link>
            <Link href="/rigging/education/module-19" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 19 — Glossary
            </Link>
            <Link href="/rigging/education/module-20" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 20 — Integration
            </Link>
            <Link href="/rigging/education/module-21" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 21 — Rope &amp; knots
            </Link>
            <Link href="/rigging/education/module-22" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 22 — Block &amp; tackle
            </Link>
            <Link href="/rigging/education/module-23" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 23 — Heavy lift
            </Link>
            <Link href="/rigging/education/module-24" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 24 — Tower cranes
            </Link>
            <Link href="/rigging/education/module-25" className="font-medium text-primary underline-offset-4 hover:underline">
              Module 25 — Incidents
            </Link>
            <Link href="/rigging/education/appendix-a" className="font-medium text-primary underline-offset-4 hover:underline">
              Appendix A — Hand signals
            </Link>
            <Link href="/rigging/education/appendix-b" className="font-medium text-primary underline-offset-4 hover:underline">
              Appendix B — Rigging math
            </Link>
            <Link href="/rigging/education/appendix-c" className="font-medium text-primary underline-offset-4 hover:underline">
              Appendix C — Hardware ID
            </Link>
            <Link href="/rigging/education/appendix-d" className="font-medium text-primary underline-offset-4 hover:underline">
              Appendix D — Crane types
            </Link>
            <Link href="/rigging/education/appendix-e" className="font-medium text-primary underline-offset-4 hover:underline">
              Appendix E — BC compliance
            </Link>
          </div>
        </div>
      </header>

      <Separator />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
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
