import type {Metadata} from "next";
import Image from "next/image";
import {CONTENT_IMAGE_BRIEFS} from "@/lib/content-image-briefs";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {towerKnowledge} from "@/lib/tower-knowledge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema} from "@/lib/schema";
import {KnowledgeSidebar} from "@/components/layout/knowledge-sidebar";
import {Link} from "@/i18n/navigation";

const TOWER_HUB_ALT = CONTENT_IMAGE_BRIEFS["hub-tower-cranes"].alt;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/tower-cranes",
    title: "Tower Crane Operations Knowledge Hub",
    description:
      "Technical tower crane operations reference covering operator responsibilities, pre-operational inspection, wind restrictions, load handling, and communication systems.",
    keywords: ["tower crane operations", "crane safety", "construction safety documentation"],
    image: "/images/tower-crane.png",
    imageAlt: TOWER_HUB_ALT
  });
}

export default async function TowerCranesPage() {
  const locale = await getLocale();
  const topics = towerKnowledge.en;
  const pageUrl = `${SITE_URL}/${locale}/tower-cranes`;

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema([{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Tower Cranes", url: pageUrl}])} />
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Tower Crane Knowledge Hub",
          description: "Collection of tower crane operation and field control references.",
          url: pageUrl,
          locale,
          breadcrumb: [{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Tower Cranes", url: pageUrl}]
        })}
      />
      <header className="space-y-4 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Tower Crane Knowledge Hub</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tower Crane Operations and Field Controls</h1>
        <p className="max-w-4xl text-muted-foreground">
          Professional reference library for operator execution, crane configuration management, urban lifting controls, communication systems, and risk-governed load handling.
        </p>

        <figure className="not-prose mt-8 max-w-4xl overflow-hidden rounded-lg border border-border bg-muted/30 shadow-sm">
          <Image
            src="/images/tower-crane.png"
            alt={TOWER_HUB_ALT}
            width={1400}
            height={788}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </figure>
      </header>

      <div className="rounded-xl bg-muted/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Structured program</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight">Tower Crane Operator Training Program</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          BC regulatory framework, CSA and ASME alignment, mathematics, load charts, mechanical systems, climbing, inspection and maintenance, urban operations, multi-crane overlap, airspace and infrastructure (including transit), advanced urban compliance, remote operation, self-erect tower cranes, hoist and wire rope, load testing, tower foundations, load handling, public safety and traffic control, and cab controls—organized into nineteen reference sections.
        </p>
        <Link
          href="/tower-cranes/operator-training-program"
          className="mt-4 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Open the training program overview
        </Link>
      </div>

      <Separator />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => (
            <a
              key={topic.slug}
              href={`/${locale}/tower-cranes/${topic.slug}`}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <p className="text-xs text-muted-foreground">Knowledge Topic {index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold">{topic.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{topic.summary}</p>
            </a>
          ))}
        </div>
        <KnowledgeSidebar
          title="Tower Crane Context"
          intro="Structured references for operator execution, inspection readiness, wind controls, and communication systems."
          quickLinks={[
            {href: `/${locale}/tower-cranes/operator-training-program`, label: "Operator training program"},
            {href: `/${locale}/tower-cranes/wind-restrictions`, label: "Tower crane wind restrictions"},
            {href: `/${locale}/tower-cranes/pre-operational-inspection`, label: "Pre-operational inspection"},
            {href: `/${locale}/tower-cranes/load-handling`, label: "Load handling controls"},
            {href: `/${locale}/safety-program/exclusion-zones`, label: "Exclusion-zone procedure"}
          ]}
        />
      </div>
    </section>
  );
}
