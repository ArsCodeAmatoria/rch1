import type {Metadata} from "next";
import {ShieldCheck, FileText, HardHat, Cable, ClipboardCheck, Construction} from "lucide-react";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {buildPageMetadata} from "@/lib/seo";

const authorityCards = [
  {
    icon: Construction,
    title: "Tower Crane Operations",
    summary: "Operational planning, pre-lift controls, communication protocol, and load path discipline for tower crane work."
  },
  {
    icon: Cable,
    title: "Rigging & Hoisting",
    summary: "Engineered rigging methods, sling selection, critical lift sequencing, and controlled load movement."
  },
  {
    icon: FileText,
    title: "Safety Documentation",
    summary: "Field-ready records for FLHA, SWP, inspections, permits, and verification workflows."
  },
  {
    icon: ClipboardCheck,
    title: "Standards & Compliance",
    summary: "Structured reference mapping for WorkSafeBC OHSR, CSA, ASME B30, and manufacturer requirements."
  }
];

const knowledgeHubs = [
  {
    icon: ShieldCheck,
    title: "Safety Program Hub",
    summary: "Technical procedures for hazard assessment, safe work planning, emergency response, and site controls.",
    href: "/safety-program",
    action: "Open Safety Program"
  },
  {
    icon: HardHat,
    title: "Tower Crane Knowledge Hub",
    summary: "Operator responsibilities, wind restrictions, pre-operational inspections, and exclusion zone controls.",
    href: "/tower-cranes",
    action: "View Tower Crane Knowledge"
  },
  {
    icon: Cable,
    title: "Rigging & Hoisting Hub",
    summary: "Basic and advanced rigging, sling strategy, lift planning, critical lifts, and load control practices.",
    href: "/rigging",
    action: "Explore Rigging Hub"
  },
  {
    icon: ClipboardCheck,
    title: "Standards Hub",
    summary: "Compliance references and interpretation context for legal, technical, and manufacturer requirements.",
    href: "/standards",
    action: "Review Standards Hub"
  }
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/",
    title: "Professional Crane and Construction Safety Programs",
    description:
      "Bilingual crane safety reference covering tower crane operations, rigging and hoisting, construction safety documentation, and standards-aware field procedures.",
    keywords: ["tower crane operations", "construction safety documentation", "rigging and hoisting"]
  });
}

export default async function HomePage() {
  const tHome = await getTranslations("homepage");
  const tButtons = await getTranslations("buttons");
  const tCommon = await getTranslations("common");
  const tHeadings = await getTranslations("headings");

  const authorityCardsLocalized = [
    {...authorityCards[0], title: tHome("authorityCards.towerTitle"), summary: tHome("authorityCards.towerSummary")},
    {...authorityCards[1], title: tHome("authorityCards.riggingTitle"), summary: tHome("authorityCards.riggingSummary")},
    {...authorityCards[2], title: tHome("authorityCards.docsTitle"), summary: tHome("authorityCards.docsSummary")},
    {...authorityCards[3], title: tHome("authorityCards.standardsTitle"), summary: tHome("authorityCards.standardsSummary")}
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-border bg-card p-8 sm:p-10">
        <Badge variant="secondary" className="w-fit">{tHome("badge")}</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          {tHome("headline")}
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          {tHome("subheading")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/safety-program">{tButtons("exploreSafetyProgram")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tower-cranes">{tButtons("viewTowerKnowledge")}</Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <h2 className="text-2xl font-semibold">{tHome("authorityTitle")}</h2>
          <Badge variant="outline">{tCommon("professionalScope")}</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {authorityCardsLocalized.map((item) => (
            <Card key={item.title}>
              <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><item.icon className="h-5 w-5 text-primary" />{item.title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.summary}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <div className="mb-4 flex items-center gap-3">
          <h2 className="text-2xl font-semibold">{tHome("knowledgeTitle")}</h2>
          <Badge variant="outline">{tCommon("technicalHubs")}</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {knowledgeHubs.map((hub) => (
            <Card key={hub.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <hub.icon className="h-5 w-5 text-primary" />
                  {hub.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{hub.summary}</p>
                <Link href={hub.href} className="text-primary hover:underline">{hub.action}</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              {tHome("overviewTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>{tHome("overviewText1")}</p>
            <p>{tHome("overviewText2")}</p>
            <Link href="/knowledge" className="text-primary hover:underline">{tButtons("openKnowledgeLibrary")}</Link>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">{tHome("companyLinksTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {tHome("companyLinksText")}
        </p>
        <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/safety-program" className="text-primary hover:underline">{tHeadings("safetyProgram")}</Link>
          <Link href="/tower-cranes" className="text-primary hover:underline">{tHeadings("towerCrane")}</Link>
          <Link href="/rigging" className="text-primary hover:underline">{tHeadings("rigging")}</Link>
          <Link href="/standards" className="text-primary hover:underline">{tHeadings("standards")}</Link>
        </div>
      </section>
    </div>
  );
}
