import type {Metadata} from "next";

import {OperatorTrainingLeadPlaceholder} from "@/components/media/operator-training-lead-placeholder";
import {mergePlaceholderForTrainingSection} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Module1BcFramework} from "@/components/tower-operator-training/regulatory/module-1-bc";
import {Module2CsaStandards} from "@/components/tower-operator-training/regulatory/module-2-csa";
import {Module3AsmeStandards} from "@/components/tower-operator-training/regulatory/module-3-asme";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderForTrainingSection("regulatory-standards", buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/regulatory-standards",
    title: "Regulatory & Standards Framework – Tower Crane Training",
    description:
      "British Columbia OHSR, critical lifts, certification, CSA Z248, related CSA standards, and ASME B30.3 reference for tower crane operators.",
    keywords: ["OHSR Part 14", "CSA Z248", "ASME B30.3", "critical lift BC", "BC crane certification"]
  }));
}

export default async function RegulatoryStandardsTrainingPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/regulatory-standards`;
  const title = "Regulatory and Standards Framework";
  const description = "BC statutory regime, OHSR crane and rigging requirements, CSA tower crane code, and ASME cross-reference.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: `${title} | Tower Crane Training`,
          description,
          url: pageUrl,
          locale,
          keywords: ["WorkSafeBC", "CSA Z248", "ASME B30.3", "OHSR"]
        })}
      />
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
        <Badge>Section 1</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>
        )}
      </header>

      <OperatorTrainingLeadPlaceholder section="regulatory-standards" />

      <TrainingArticleLayout>
      <TrainingProse>
        <Module1BcFramework />
        <Module2CsaStandards />
        <Module3AsmeStandards />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/regulatory-standards" />
    </article>
  );
}
