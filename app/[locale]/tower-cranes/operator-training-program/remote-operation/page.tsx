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
import {Section12RemoteOperation} from "@/components/tower-operator-training/section-12-remote-operation";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderForTrainingSection("remote-operation", buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/remote-operation",
    title: "Remote Operation of Tower Cranes (BC)",
    description:
      "OHSR Part 14 remote control, fail-safe and LMI, hazards vs. cab operation, when remote use is appropriate for self-erectors and urban sites.",
    keywords: ["remote tower crane", "BC OHSR Part 14 crane", "radio crane remote", "self erect crane remote"]
  }));
}

export default async function RemoteOperationPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/remote-operation`;
  const title = "Remote Operation of Tower Cranes";
  const description =
    "Section 12: regulatory considerations, hazard profile of ground-based control, and decision criteria for when remote operation is appropriate in British Columbia.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: `${title} | RCH1`, description, url: pageUrl, locale, keywords: ["remote crane", "OHSR"]})} />
      <JsonLd data={buildWebPageSchema({name: title, description, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> /{" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> /{" "}
        <a href={`/${locale}/tower-cranes/operator-training-program`} className="hover:text-primary">Operator training</a> /{" "}
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mb-8 space-y-2">
        <Badge>Section 12</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>}
      </header>

      <OperatorTrainingLeadPlaceholder section="remote-operation" />

      <TrainingArticleLayout>
      <TrainingProse>
        <Section12RemoteOperation />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/remote-operation" />
    </article>
  );
}
