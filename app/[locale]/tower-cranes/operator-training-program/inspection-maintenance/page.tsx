import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section6InspectionCore} from "@/components/tower-operator-training/section-6-inspection-core";
import {Section6AppendixA} from "@/components/tower-operator-training/section-6-appendix-a";
import {Section6AppendixBWeather} from "@/components/tower-operator-training/section-6-appendix-b-weather";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/inspection-maintenance",
    title: "Inspection & Maintenance – Tower Crane Training",
    description:
      "CSA and ASME inspection categories, documentation, proof testing, Appendices A–B: operator/rigger schedules, maintenance, weather vane procedures.",
    keywords: ["tower crane inspection", "pre-shift inspection", "CSA Z248 inspection", "weather vane procedure", "crane logbook BC"]
  });
}

export default async function InspectionMaintenancePage() {
  const locale = await getLocale();
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/inspection-maintenance`;
  const title = "Inspection & Maintenance";
  const description =
    "Layered inspection regimes, documentation ethics, and field appendices for daily through annual control—including weather vane discipline during maintenance.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: `${title} | RCH1`, description, url: pageUrl, locale, keywords: ["inspection", "maintenance", "WorkSafeBC"]})} />
      <JsonLd data={buildWebPageSchema({name: title, description, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> /{" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> /{" "}
        <a href={`/${locale}/tower-cranes/operator-training-program`} className="hover:text-primary">Operator training</a> /{" "}
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mb-8 space-y-2">
        <Badge>Section 6</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <Section6InspectionCore />
        <Section6AppendixA />
        <Section6AppendixBWeather />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/inspection-maintenance" />
    </article>
  );
}
