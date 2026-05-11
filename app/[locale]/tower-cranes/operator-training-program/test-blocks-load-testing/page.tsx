import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section15TestBlocksLoadTesting} from "@/components/tower-operator-training/section-15-test-blocks-load-testing";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/test-blocks-load-testing",
    title: "Test Blocks, Kickers & Load Testing (BC)",
    description:
      "Static and dynamic proof tests, kicker weights, LMI verification, test block engineering, testing radius, documentation, CSA Z248 and ASME B30.3 context.",
    keywords: [
      "tower crane load test",
      "proof load 125 percent",
      "kicker weight crane",
      "CSA Z248 testing",
      "BC Crane Safety",
      "LMI calibration test"
    ]
  });
}

export default async function TestBlocksLoadTestingPage() {
  const locale = await getLocale();
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/test-blocks-load-testing`;
  const title = "Test Blocks, Kickers, and Load Testing";
  const description =
    "Section 15: engineered test weights, static and dynamic verification, kickers for overload thresholds, safety systems checked, records, and operator role during testing.";

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
          keywords: ["load test", "test block", "tower crane", "CSA Z248"]
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
        <Badge>Section 15</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <Section15TestBlocksLoadTesting />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/test-blocks-load-testing" />
    </article>
  );
}
