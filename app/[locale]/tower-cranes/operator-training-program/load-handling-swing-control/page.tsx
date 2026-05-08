import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section17LoadHandlingSwingControl} from "@/components/tower-operator-training/section-17-load-handling-swing-control";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/load-handling-swing-control",
    title: "Load Handling, Swing Control & Deflection (BC)",
    description:
      "Pendulum dynamics, catching swing, walking loads, concrete buckets, jib deflection, center of gravity, dynamic loading, wind sail, signals.",
    keywords: [
      "tower crane load swing",
      "catching the swing",
      "walking the load",
      "crane jib deflection",
      "tower crane wind load",
      "crane signalperson BC"
    ]
  });
}

export default async function LoadHandlingSwingControlPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/load-handling-swing-control`;
  const title = "Load Handling, Swing Control, and Structural Deflection";
  const description =
    "Section 17: suspended-load physics, operational techniques, bucket and deflection behavior, stability, dynamics, wind, and operator–rigger communication.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: `${title} | RCH1`,
          description,
          url: pageUrl,
          locale,
          keywords: ["load swing", "tower crane", "ASME B30.3", "CSA Z248"]
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
        <Badge>Section 17</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>
        )}
      </header>

      <TrainingProse>
        <Section17LoadHandlingSwingControl />
      </TrainingProse>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/load-handling-swing-control" />
    </article>
  );
}
