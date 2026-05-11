import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {safetyProgramTopics} from "@/lib/safety-program";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema} from "@/lib/schema";
import {KnowledgeSidebar} from "@/components/layout/knowledge-sidebar";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/safety-program",
    title: "Tower Crane and Rigging Safety Program",
    description:
        "Field-ready construction safety program with procedural controls for lift planning, crane communication, exclusion zones, inspections, and critical lift execution.",
    keywords: ["construction safety program", "crane safety", "construction safety documentation"]
    });
}

export default async function SafetyProgramPage() {
  const locale = (await getLocale()) as "en";
  const topics = safetyProgramTopics[locale];
  const pageUrl = `${SITE_URL}/${locale}/safety-program`;

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema([{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Safety Program", url: pageUrl}])} />
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Safety Program",
          description: "Collection of tower crane and rigging safety procedures.",
          url: pageUrl,
          locale,
          breadcrumb: [{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Safety Program", url: pageUrl}]
        })}
      />
      <header className="space-y-4 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Tower Crane & Rigging Safety Program</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">RCH1 Field Operations Safety Manual</h1>
        <p className="max-w-4xl text-muted-foreground">
          Engineering-oriented crane operations guidance covering lift planning, rigging inspection, exclusion control, communication protocol, and documentation systems for field execution.
        </p>
        <p className="max-w-4xl text-sm text-muted-foreground">
          Structured for supervisory teams, lift directors, operators, and riggers requiring procedural consistency and standards-aware execution controls.
        </p>
      </header>

      <Separator />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => (
            <a
              key={topic.slug}
              href={`/${locale}/safety-program/${topic.slug}`}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <p className="text-xs text-muted-foreground">Procedure {index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold">{topic.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{topic.summary}</p>
            </a>
          ))}
        </div>
        <KnowledgeSidebar
          title="Safety Manual Context"
          intro="Use this index as a field-ready map of procedures covering planning, inspections, communication, and emergency controls."
          quickLinks={[
            {href: `/${locale}/safety-program/lift-planning`, label: "Lift planning procedure"},
            {href: `/${locale}/safety-program/critical-lifts`, label: "Critical lift procedure"},
            {href: `/${locale}/safety-program/exclusion-zones`, label: "Exclusion-zone procedure"},
            {href: `/${locale}/standards/worksafebc-ohsr`, label: "WorkSafeBC reference"}
          ]}
        />
      </div>
    </section>
  );
}

