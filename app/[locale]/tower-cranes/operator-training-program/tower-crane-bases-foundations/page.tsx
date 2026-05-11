import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section16TowerCraneBasesFoundations} from "@/components/tower-operator-training/section-16-tower-crane-bases-foundations";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/tower-crane-bases-foundations",
    title: "Tower Crane Bases & Foundations (BC)",
    description:
      "Anchor frames, ballast bases, rail travel, structural mounts, tie-ins, geotech bearing, BC foundation inspection, failure risks, CSA Z248.",
    keywords: [
      "tower crane foundation",
      "CSA Z248 foundation",
      "crane overturning moment",
      "anchor cage tower crane",
      "BC tower crane base"
    ]
  });
}

export default async function TowerCraneBasesFoundationsPage() {
  const locale = await getLocale();
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/tower-crane-bases-foundations`;
  const title = "Tower Crane Bases, Foundations, and Support Systems";
  const description =
    "Section 16: concrete pads, anchor frames, ballast and rail systems, building-supported cranes, tie-ins, soil capacity, BC inspections, and foundation risk.";

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
          headline: `${title} | RCH1`,
          description,
          url: pageUrl,
          locale,
          keywords: ["tower crane foundation", "CSA Z248", "overturning moment"]
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
        <Badge>Section 16</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <Section16TowerCraneBasesFoundations />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/tower-crane-bases-foundations" />
    </article>
  );
}
