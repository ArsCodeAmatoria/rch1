import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section10RegulatoryKnowledge} from "@/components/tower-operator-training/section-10-regulatory-knowledge";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/regulatory-knowledge-requirements",
    title: "Tower Crane Regulatory Knowledge (BC)",
    description:
      "WorkSafeBC, BC Crane Safety, CSA and ASME context; operator duties under OHSR Part 14; rigger duties under Part 15; certification, logs, wind, overlap.",
    keywords: ["OHSR Part 14", "OHSR Part 15", "BC Crane Safety", "tower crane logbook", "refuse unsafe work BC"]
  });
}

export default async function RegulatoryKnowledgeRequirementsPage() {
  const locale = await getLocale();
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/regulatory-knowledge-requirements`;
  const title = "Tower Crane Regulatory Knowledge Requirements";
  const description =
    "Section 10: historical alignment of regulators and standards, BC-specific operator knowledge, and rigger knowledge under Parts 14 and 15.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: `${title} | RCH1`, description, url: pageUrl, locale, keywords: ["WorkSafeBC", "OHSR", "rigger"]})} />
      <JsonLd data={buildWebPageSchema({name: title, description, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> /{" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> /{" "}
        <a href={`/${locale}/tower-cranes/operator-training-program`} className="hover:text-primary">Operator training</a> /{" "}
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mb-8 space-y-2">
        <Badge>Section 10</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <Section10RegulatoryKnowledge />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/regulatory-knowledge-requirements" />
    </article>
  );
}
