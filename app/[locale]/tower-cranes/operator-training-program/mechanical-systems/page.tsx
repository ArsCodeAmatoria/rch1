import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Module5HoistSystem} from "@/components/tower-operator-training/mechanical/module-5-hoist";
import {Module6SlewSystem} from "@/components/tower-operator-training/mechanical/module-6-slew";
import {Module7LuffingMechanism} from "@/components/tower-operator-training/mechanical/module-7-luffing";
import {AppendixVfdExplained} from "@/components/tower-operator-training/mechanical/appendix-vfd";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/mechanical-systems",
    title: "Mechanical Systems – Hoist, Slew, Luffing",
    description:
      "Hoist drive, VFD, brakes, rope and drum; slew ring, gearing, bolts; luffing geometry; plain-language VFD appendix for tower cranes.",
    keywords: ["tower crane hoist", "slewing ring", "luffing jib", "VFD crane", "wire rope inspection"]
  });
}

export default async function MechanicalSystemsTrainingPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/mechanical-systems`;
  const title = "Mechanical Systems";
  const description = "Hoist, slew, and luffing subsystems plus regulatory alignment under CSA Z248 and ASME B30.3.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: `${title} | Tower Crane Training`, description, url: pageUrl, locale, keywords: ["hoist", "slew", "luffing"]})} />
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
        <Badge>Section 4</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>
        )}
      </header>

      <TrainingProse>
        <h2 id="section-4">Section 4 – Mechanical Systems</h2>
        <p>
          This section moves from vertical lifting through rotation to geometry control on luffing machines, closing with a plain-language
          explanation of variable-frequency drives used across modern hoist and slew systems.
        </p>
        <Module5HoistSystem />
        <Module6SlewSystem />
        <Module7LuffingMechanism />
        <AppendixVfdExplained />
      </TrainingProse>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/mechanical-systems" />
    </article>
  );
}
