import type {Metadata} from "next";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {ProgramOverviewSections} from "@/components/tower-operator-training/program-overview";
import {TrainingArticleLayout} from "@/components/tower-operator-training/training-article-layout";
import {TrainingSectionNav} from "@/components/tower-operator-training/training-section-nav";
import {Link} from "@/i18n/navigation";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes/operator-training-program",
    title: "Tower Crane Operator Training Program",
    description:
      "BC regulatory framework, CSA/ASME, mathematics, load charts, climbing, inspection, urban overlap, transit, advanced compliance, remote operation, self-erect cranes, hoist, testing, foundations, load swing, public safety and traffic, and cab controls.",
    keywords: [
      "tower crane operator training",
      "BC crane regulation",
      "CSA Z248",
      "ASME B30.3",
      "WorkSafeBC cranes",
      "tower crane mathematics",
      "load chart interpretation"
    ]
  });
}

export default async function OperatorTrainingProgramPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes/operator-training-program`;
  const title = "Tower Crane Operator Training Program";
  const description =
    "British Columbia regulatory framework, CSA, ASME, Red Seal knowledge preparation, and advanced mechanical systems.";

  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Tower Cranes", url: `${SITE_URL}/${locale}/tower-cranes`},
    {name: title, url: pageUrl}
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-7xl">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: title,
          description,
          url: pageUrl,
          locale,
          keywords: ["tower crane", "operator training", "WorkSafeBC", "CSA Z248", "ASME B30.3"]
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
        / <span className="text-foreground">{title}</span>
      </nav>

      <header className="space-y-2">
        <Badge className="w-fit">Knowledge program</Badge>
        {locale === "fr" && (
          <p className="text-sm text-muted-foreground">
            La version française de ce programme est en préparation; le contenu affiché est actuellement en anglais.
          </p>
        )}
      </header>

      <TrainingArticleLayout>
        <ProgramOverviewSections />
      </TrainingArticleLayout>

      <Separator className="my-10" />

      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Program sections</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              href="/tower-cranes/operator-training-program/regulatory-standards"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 1 – Regulatory and standards framework</span>
              <span className="mt-1 block text-sm text-muted-foreground">BC legislation, CSA Z248, ASME B30.3</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/mathematics"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 2 – Mathematics</span>
              <span className="mt-1 block text-sm text-muted-foreground">Core crane mathematics and load dynamics</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/load-charts-capacity"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 3 – Load charts &amp; capacity</span>
              <span className="mt-1 block text-sm text-muted-foreground">Moment, configuration types, wind, responsibility</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/mechanical-systems"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 4 – Mechanical systems</span>
              <span className="mt-1 block text-sm text-muted-foreground">Hoist, slew, luffing, VFD appendix</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/climbing-procedures"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 5 – Climbing (jumping)</span>
              <span className="mt-1 block text-sm text-muted-foreground">Hydraulics, tie-ins, wind, CSA/ASME climbing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/inspection-maintenance"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 6 – Inspection &amp; maintenance</span>
              <span className="mt-1 block text-sm text-muted-foreground">Categories, logbooks, Appendices A–B, weather vane</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/urban-operations"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 7 – Urban operations</span>
              <span className="mt-1 block text-sm text-muted-foreground">Luffers, flat tops, collision zones, public protection</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/overlap-right-of-way"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 8 – Overlap &amp; right of way</span>
              <span className="mt-1 block text-sm text-muted-foreground">Overlap procedure, radio (incl. OHSR 14.49), signals, hands-free, equipment sign-offs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/airspace-property-infrastructure"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 9 – Airspace, property &amp; infrastructure</span>
              <span className="mt-1 block text-sm text-muted-foreground">Overswing, rail, bridges, aviation, electrical MAD, SkyTrain and TOH</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/regulatory-knowledge-requirements"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 10 – Regulatory knowledge requirements</span>
              <span className="mt-1 block text-sm text-muted-foreground">OHSR Parts 14 and 15, BC Crane Safety, logs, wind, overlap, riggers</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/advanced-urban-compliance"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 11 – Advanced urban compliance</span>
              <span className="mt-1 block text-sm text-muted-foreground">Anti-collision culture, lighting, public protection, blind picks</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/remote-operation"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 12 – Remote operation</span>
              <span className="mt-1 block text-sm text-muted-foreground">BC remote-control rules, hazards, when remote use fits the site</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/self-erect-tower-cranes"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 13 – Self-erect tower cranes</span>
              <span className="mt-1 block text-sm text-muted-foreground">SETC regulation, hydraulics, erection, ballast risks, remote integration</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/hoist-systems-wire-rope"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 14 – Hoist systems &amp; wire rope</span>
              <span className="mt-1 block text-sm text-muted-foreground">Drum, D/d, wraps, brakes, limits, rope records, fleet angle appendix</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/test-blocks-load-testing"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 15 – Test blocks &amp; load testing</span>
              <span className="mt-1 block text-sm text-muted-foreground">Proof tests, kickers, LMI verification, documentation</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/tower-crane-bases-foundations"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 16 – Bases, foundations &amp; support</span>
              <span className="mt-1 block text-sm text-muted-foreground">Anchor frames, ballast, rails, tie-ins, soil, BC inspection</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/load-handling-swing-control"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 17 – Load handling &amp; swing control</span>
              <span className="mt-1 block text-sm text-muted-foreground">Pendulum, walking loads, buckets, wind, signals</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/public-safety-traffic-emergency"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 18 – Public safety &amp; traffic</span>
              <span className="mt-1 block text-sm text-muted-foreground">TCPs, lane closures, pedestrians, exclusion, DEP</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tower-cranes/operator-training-program/tower-crane-controls-monitoring"
              className="block rounded-lg bg-card p-4 transition-colors hover:bg-muted/60"
            >
              <span className="font-semibold">Section 19 – Controls &amp; monitoring</span>
              <span className="mt-1 block text-sm text-muted-foreground">Joysticks, LMI, sensors, cameras, motion limits, closing notes</span>
            </Link>
          </li>
        </ul>
      </div>

      <TrainingSectionNav current="/tower-cranes/operator-training-program" />
    </section>
  );
}
