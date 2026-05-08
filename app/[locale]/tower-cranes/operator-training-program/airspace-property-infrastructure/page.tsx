import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section9Module91Overswing} from "@/components/tower-operator-training/section-9-m91-overswing";
import {Section9Module92Railway} from "@/components/tower-operator-training/section-9-m92-railway";
import {Section9Module93Bridges} from "@/components/tower-operator-training/section-9-m93-bridges";
import {Section9Module94AviationAndAddendum} from "@/components/tower-operator-training/section-9-m94-aviation-addendum";
import {Section9Module95Electrical} from "@/components/tower-operator-training/section-9-m95-electrical";
import {Section9Module96SkytrainTransit} from "@/components/tower-operator-training/section-9-m96-skytrain-transit";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/airspace-property-infrastructure",
    title: "Airspace, Property & Infrastructure Regulation",
    description:
      "Overswing, railways, bridges, aviation, electrical MAD, SkyTrain and TransLink TOH coordination, IQSW and TCUS.",
    keywords: [
      "tower crane overswing BC",
      "crane railway clearance",
      "NAV CANADA crane",
      "YVR crane height",
      "minimum approach distance crane BC",
      "OHSR Part 19 electrical"
    ]
  });
}

export default async function AirspacePropertyInfrastructurePage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/airspace-property-infrastructure`;
  const title = "Airspace, Property & Infrastructure Regulation";
  const description =
    "Section 9: overswing, rail, bridges, aviation, electrical hazards, and SkyTrain/TransLink transit corridors—including TOH, IQSW, and TCUS.";

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
          keywords: ["airspace", "TransLink", "Transport Canada", "Technical Safety BC", "MAD electrical"]
        })}
      />
      <JsonLd data={buildWebPageSchema({name: title, description, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> /{" "}
        <a href={`/${locale}/tower-cranes`} className="hover:text-primary">Tower Cranes</a> /{" "}
        <a href={`/${locale}/tower-cranes/operator-training-program`} className="hover:text-primary">Operator training</a> /{" "}
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mb-8 space-y-2">
        <Badge>Section 9</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>}
      </header>

      <TrainingProse>
        <Section9Module91Overswing />
        <Section9Module92Railway />
        <Section9Module93Bridges />
        <Section9Module94AviationAndAddendum />
        <Section9Module95Electrical />
        <Section9Module96SkytrainTransit />
      </TrainingProse>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/airspace-property-infrastructure" />
    </article>
  );
}
