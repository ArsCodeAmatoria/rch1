import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {SectionLoadCharts} from "@/components/tower-operator-training/section-load-charts";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";
import {Link} from "@/i18n/navigation";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/load-charts-capacity",
    title: "Load Charts & Capacity Interpretation",
    description:
      "Load moment principles, hammerhead, flat top, and luffing charts, structural vs stability limits, wind, incidents, and operator responsibility.",
    keywords: ["tower crane load chart", "load moment", "stability limit", "luffing chart", "Big Blue crane"]
  });
}

export default async function LoadChartsTrainingPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/load-charts-capacity`;
  const title = "Load Charts and Capacity Interpretation";
  const description = "Authoritative chart use: moment logic, configuration specificity, environmental limits, and professional accountability.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: "Operator training", url: `${SITE_URL}/${locale}/tower-cranes/operator-training-program`},
    {name: title, url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd data={buildTechArticleSchema({headline: title, description, url: pageUrl, locale, keywords: ["load chart", "capacity", "moment"]})} />
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
        <Badge>Section 3</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>
        )}
        <p className="text-sm text-muted-foreground">
          For structured chart quizzes and practice, use{" "}
          <Link href="/redtc/load-charts" className="text-primary underline-offset-4 hover:underline">
            REDTC load chart exercises
          </Link>
          .
        </p>
      </header>

      <TrainingArticleLayout>
      <TrainingProse>
        <SectionLoadCharts />
      </TrainingProse>
      </TrainingArticleLayout>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/load-charts-capacity" />
    </article>
  );
}
