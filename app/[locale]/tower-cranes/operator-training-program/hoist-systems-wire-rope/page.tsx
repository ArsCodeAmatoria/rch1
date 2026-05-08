import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {TrainingProse} from "@/components/tower-operator-training/training-prose";
import {Section14HoistSystemsWireRope} from "@/components/tower-operator-training/section-14-hoist-systems-wire-rope";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program/hoist-systems-wire-rope",
    title: "Hoist Systems, Drum & Wire Rope (BC)",
    description:
      "Hoist overview, D/d, wraps, brakes, limits, LMI, terminations, rope removal, rope records, lessons learned, Appendix A fleet angle, OHSR criteria.",
    keywords: [
      "tower crane hoist",
      "wire rope inspection BC",
      "D/d ratio crane",
      "drum wraps hoist",
      "OHSR wire rope",
      "anti two block",
      "load moment indicator"
    ]
  });
}

export default async function HoistSystemsWireRopePage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program/hoist-systems-wire-rope`;
  const title = "Hoist Systems, Drum Mechanics & Wire Rope Management";
  const description =
    "Section 14: hoist forces, D/d, wraps, brakes, limits, LMI, terminations, rope types, removal criteria, rope records, misadventures, and Appendix A fleet angle.";

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
          keywords: ["hoist brake", "wire rope", "tower crane", "D/d", "OHSR"]
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
        <Badge>Section 14</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">La traduction française est en préparation (contenu en anglais).</p>
        )}
      </header>

      <TrainingProse>
        <Section14HoistSystemsWireRope />
      </TrainingProse>

      <TrainingSectionNav current="/tower-cranes/operator-training-program/hoist-systems-wire-rope" />
    </article>
  );
}
