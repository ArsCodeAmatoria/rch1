import type {Metadata} from "next";

import {ContentImagePlaceholder} from "@/components/media/content-image-placeholder";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema} from "@/lib/schema";
import {KnowledgeSidebar} from "@/components/layout/knowledge-sidebar";

const links = [
  {href: "/safety-program", title: "Safety Program Library"},
  {href: "/tower-cranes", title: "Tower Crane Technical Library"},
  {href: "/rigging", title: "Rigging and Hoisting Library"},
  {href: "/standards", title: "Standards and Compliance Library"}
];

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderImageMeta(
    "hub-knowledge",
    buildPageMetadata({
      locale,
      path: "/knowledge",
      title: "Construction Safety Knowledge Library",
      description:
        "Structured internal knowledge library linking crane safety procedures, tower crane operations, rigging and hoisting controls, and standards/compliance references.",
      keywords: ["construction safety program", "crane safety", "rigging and hoisting", "construction safety documentation"]
    })
  );
}

export default async function KnowledgePage() {
  const locale = await getLocale();
  const pageUrl = `${SITE_URL}/${locale}/knowledge`;
  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema([{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Knowledge", url: pageUrl}])} />
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Knowledge Library",
          description: "Collection of crane, rigging, standards, and safety program knowledge references.",
          url: pageUrl,
          locale,
          breadcrumb: [{name: "Home", url: `${SITE_URL}/${locale}`}, {name: "Knowledge", url: pageUrl}]
        })}
      />
      <h1 className="text-3xl font-bold">Knowledge Library</h1>
      <p className="text-muted-foreground">Structured internal linking across safety program modules, crane operations guidance, rigging references, and standards interpretation.</p>

      <ContentImagePlaceholder id="hub-knowledge" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid gap-4 md:grid-cols-2">
          {links.map((item) => (
            <a key={item.href} href={`/${locale}${item.href}`} className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Open section</p>
            </a>
          ))}
        </div>
        <KnowledgeSidebar
          title="Knowledge Navigation"
          intro="Use this sidebar for direct access to core safety manuals, tower crane guidance, rigging procedures, and standards references."
          quickLinks={[
            {href: `/${locale}/safety-program`, label: "Safety program procedures"},
            {href: `/${locale}/tower-cranes`, label: "Tower crane knowledge hub"},
            {href: `/${locale}/rigging`, label: "Rigging and hoisting hub"},
            {href: `/${locale}/blog`, label: "Technical articles"}
          ]}
        />
      </div>
    </section>
  );
}
