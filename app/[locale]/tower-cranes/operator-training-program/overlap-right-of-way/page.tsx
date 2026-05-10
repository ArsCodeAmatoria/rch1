import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section8OverlapRightOfWay} from "@/components/tower-operator-training/section-8-overlap";
import {Section8Modules8386} from "@/components/tower-operator-training/section-8-modules-83-86";
import {Section8SummaryPrinciples} from "@/components/tower-operator-training/section-8-summary-principles";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/overlap-right-of-way",
    title: "Crane Overlap, Right of Way & Communication",
    description:
      "Multi-crane overlap, radio standards (OHSR 14.49), hand signals, hands-free protocol, equipment sign-offs, WorkSafeBC frequency coordination.",
    keywords: [
      "crane overlap",
      "tower crane radio WorkSafeBC",
      "OHSR 14.49",
      "crane hand signals BC",
      "hands free crane radio",
      "multi-crane Vancouver"
    ]
  });
}

export default async function OverlapRightOfWayPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/overlap-right-of-way`;
  const title = "Crane Overlap, Right of Way & Communication Control";
  const description =
    "Modules 8.1–8.6 plus summary principles: overlap, radio, signals, hands-free, equipment sign-offs, and priority/stop rules bridging to airspace regulation.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: `${title} | RCH1`, description, url: pageUrl, locale, keywords: ["overlap", "right of way", "ASME B30.3"]})} />
      <JsonLd data={buildWebPageSchema({name: title, description, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> /{" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> /{" "}
        <a href={`/${locale}/tower-cranes/operator-training-program`} className="hover:text-primary">Operator training</a> /{" "}
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mb-8 space-y-2">
        <Badge>Section 8</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>}
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <Section8OverlapRightOfWay />
        <Section8Modules8386 />
        <Section8SummaryPrinciples />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/overlap-right-of-way" />
    </article>
  );
}
