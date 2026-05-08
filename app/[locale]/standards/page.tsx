import type {Metadata} from "next";

import {ContentImagePlaceholder} from "@/components/media/content-image-placeholder";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {standardsKnowledge} from "@/lib/standards-knowledge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema} from "@/lib/schema";
import {KnowledgeSidebar} from "@/components/layout/knowledge-sidebar";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderImageMeta(
    "hub-standards",
    buildPageMetadata({
      locale,
      path: "/standards",
      title: "Standards and Compliance Reference Hub",
      description:
        "Operational standards reference for WorkSafeBC, CSA standards, ASME B30, Technical Safety BC, and manufacturer requirements in crane and construction safety programs.",
      keywords: ["WorkSafeBC", "CSA standards", "ASME B30", "Technical Safety BC"]
    })
  );
}

export default async function StandardsPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const topics = standardsKnowledge[locale];
  const pageUrl = `${SITE_URL}/${locale}/standards`;

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema([{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Standards", url: pageUrl}])} />
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Standards and Compliance Reference Hub",
          description: "Collection of standards and compliance reference topics for crane and rigging operations.",
          url: pageUrl,
          locale,
          breadcrumb: [{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Standards", url: pageUrl}]
        })}
      />
      <header className="space-y-4 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Standards & Compliance</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Standards and Compliance Reference Hub</h1>
        <p className="max-w-4xl text-muted-foreground">
          References may include WorkSafeBC OHSR, CSA, ASME B30, EN standards, FEM guidance, Technical Safety BC materials, and manufacturer requirements.
        </p>
        <p className="max-w-4xl text-sm text-muted-foreground">
          Employers must verify current regulatory requirements and site applicability before execution. This section provides operational reference context and does not provide legal advice.
        </p>

        <div className="mt-6 max-w-4xl">
          <ContentImagePlaceholder id="hub-standards" />
        </div>
      </header>

      <Separator />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => (
            <a
              key={topic.slug}
              href={`/${locale}/standards/${topic.slug}`}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <p className="text-xs text-muted-foreground">Reference Topic {index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold">{topic.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{topic.summary}</p>
            </a>
          ))}
        </div>
        <KnowledgeSidebar
          title="Compliance Context"
          intro="Reference map for WorkSafeBC, Technical Safety BC, CSA, ASME B30, EN/FEM guidance, and manufacturer procedures."
          quickLinks={[
            {href: `/${locale}/standards/worksafebc-ohsr`, label: "WorkSafeBC OHSR reference"},
            {href: `/${locale}/standards/asme-b30`, label: "ASME B30 reference"},
            {href: `/${locale}/standards/technical-safety-bc`, label: "Technical Safety BC reference"},
            {href: `/${locale}/safety-program/site-documentation`, label: "Site documentation procedure"}
          ]}
        />
      </div>
    </section>
  );
}
