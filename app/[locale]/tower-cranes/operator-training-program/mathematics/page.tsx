import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {MathematicsQuickReference} from "@/components/tower-operator-training/mathematics-quick-reference";
import {MathematicsScrollTopButton} from "@/components/tower-operator-training/mathematics-scroll-top-button";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {SectionMathematics} from "@/components/tower-operator-training/section-mathematics";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/mathematics",
    title: "Mathematics for Tower Crane Operators",
    description:
      "Crane and rigging mathematics program: conversions, ratios, algebra, force vs mass, and kN; plus operator arithmetic, moments, trigonometry, sling angles, and critical-lift judgment.",
    keywords: ["crane mathematics", "rigging math", "load moment", "sling angle tension", "tower crane trigonometry"]
  });
}

export default async function MathematicsTrainingPage() {
  const locale = await getLocale();
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/mathematics`;
  const title = "Mathematics for Tower Crane Operators";
  const description =
    "Foundations-first crane and rigging math (forces, prefixes, conversions) plus tower-operator curriculum: moments, charts logic, geometry, wind, and critical lifts.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: title, description, url: pageUrl, locale, keywords: ["crane math", "moment", "rigging"]})} />
      <JsonLd data={buildWebPageSchema({name: title, description, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">
          Home
        </a>{" "}
        /{" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">
          Tower Cranes
        </a>{" "}
        /{" "}
        <a href={`/${locale}/tower-cranes/operator-training-program`} className="hover:text-primary">
          Operator training
        </a>{" "}
        / <span className="text-foreground">{title}</span>
      </nav>

      <header className="mb-8 space-y-2">
        <Badge>Section 2</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>

      <TrainingArticleLayout tocTone="math">
        <TrainingProse track="mathematics">
          <MathematicsQuickReference />
          <SectionMathematics />
        </TrainingProse>
      </TrainingArticleLayout>

      <MathematicsScrollTopButton />
      <TrainingSectionNav current="/tower-cranes/operator-training-program/mathematics" />
    </article>
  );
}
