import type {Metadata} from "next";

import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildWebPageSchema} from "@/lib/schema";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/hoisting",
    title: "Hoisting Procedures and Field Controls",
    description:
        "Hoisting operations reference aligned to rigging strategy, communication protocols, exclusion zones, and controlled load movement for construction sites.",
    keywords: ["rigging and hoisting", "crane safety", "construction safety documentation"]
    });
}

export default function HoistingPage() {
  return <HoistingPageContent />;
}

async function HoistingPageContent() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/hoisting`;
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema([{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Hoisting", url: pageUrl}])} />
      <JsonLd
        data={buildWebPageSchema({
          name: "Hoisting Procedures and Field Controls",
          description: "Hoisting operational guidance for rigging, communication, and load movement control.",
          url: pageUrl,
          locale,
          breadcrumb: [{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Hoisting", url: pageUrl}]
        })}
      />
      <h1 className="text-3xl font-bold">Hoisting</h1>
      <p className="text-muted-foreground">Hoisting practices are integrated with rigging planning, communication controls, and lift execution procedures.</p>

      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        Use the rigging library for detailed hoisting procedures, including sling selection, critical lift controls, and load control strategies.
        <div className="mt-4"><Link href="/rigging" className="text-primary hover:underline">Open rigging and hoisting topics</Link></div>
      </div>
    </section>
  );
}
