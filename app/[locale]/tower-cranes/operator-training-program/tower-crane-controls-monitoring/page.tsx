import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section19TowerCraneControlsMonitoring} from "@/components/tower-operator-training/section-19-tower-crane-controls-monitoring";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/tower-crane-controls-monitoring",
    title: "Tower Crane Controls & Monitoring (BC)",
    description:
      "Tower crane LMI, sensor inputs, cab displays, cameras, motion limiting, joysticks, brakes, e-stop, weathervane, operator responsibility.",
    keywords: [
      "tower crane joystick",
      "LMI tower crane",
      "crane weather vane mode",
      "tower crane slew brake",
      "emergency stop crane"
    ]
  });
}

export default async function TowerCraneControlsMonitoringPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/tower-crane-controls-monitoring`;
  const title = "Tower Crane Controls, Operator Interface, and Monitoring Systems";
  const description =
    "Section 19: joysticks, brakes, e-stop, weathervane, LMI and sensors, cab displays, hook height estimates, cameras, motion limiters, and operator responsibility.";

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
          keywords: ["tower crane controls", "LMI", "e-stop"]
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
        <Badge>Section 19</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>
        )}
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <Section19TowerCraneControlsMonitoring />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/tower-crane-controls-monitoring" />
    </article>
  );
}
