import type {Metadata} from "next";

import {ContentImagePlaceholder} from "@/components/media/content-image-placeholder";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
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
