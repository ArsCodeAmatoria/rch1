import type {Metadata} from "next";
import {BookText, FileSearch, ShieldCheck, Scale, Wrench, Newspaper} from "lucide-react";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {buildMetadata, SITE_URL} from "@/lib/seo";
import {getAllBlogArticles, BLOG_CATEGORIES} from "@/lib/blog";
import {ContentImagePlaceholder} from "@/components/media/content-image-placeholder";
import {BlogSearch} from "@/components/blog/blog-search";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildCollectionPageSchema, buildWebPageSchema} from "@/lib/schema";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderImageMeta(
    "hub-blog",
    buildMetadata({
      locale: locale as "en" | "fr",
      title: "Crane and Rigging Technical Articles",
      description:
        "RCH1 technical safety publication for crane operations, rigging and hoisting procedures, standards updates, inspections, and construction safety documentation.",
      canonicalPath: `/${locale}/blog`,
      enPath: "/en/blog",
      frPath: "/fr/blog",
      image: "/og/rch1-blog-og.jpg",
      keywords: ["crane safety", "tower crane operations", "rigging and hoisting", "construction safety documentation"],
      section: "blog"
    })
  );
}

const icons = [BookText, FileSearch, ShieldCheck, Scale, Wrench, Newspaper];

export default async function BlogPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const articles = getAllBlogArticles(locale).filter((item) => !item.noindex);
  const featured = articles.find((item) => item.featured) ?? articles[0];
  const latest = articles.slice(0, 6);

  const pageUrl = `${SITE_URL}/${locale}/blog`;
  const breadcrumb = buildBreadcrumbSchema([
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Blog", url: pageUrl}
  ]);
  const collectionSchema = buildCollectionPageSchema({
    name: "RCH1 Technical Articles",
    description: "Technical publication for crane and rigging safety knowledge.",
    url: pageUrl,
    locale,
    breadcrumb: [
      {name: "Home", url: `${SITE_URL}/${locale}`},
      {name: "Blog", url: pageUrl}
    ]
  });
  const webPageSchema = buildWebPageSchema({
    name: "Crane and Construction Safety Articles",
    description: "Professional technical articles for crane operations, rigging, hoisting, and standards.",
    url: pageUrl,
    locale,
    breadcrumb: [
      {name: "Home", url: `${SITE_URL}/${locale}`},
      {name: "Blog", url: pageUrl}
    ]
  });

  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumb} />
      <JsonLd data={collectionSchema} />
      <JsonLd data={webPageSchema} />
      <header className="space-y-4 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">RCH1 Technical Publication</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Crane and Construction Safety Articles</h1>
        <p className="max-w-4xl text-muted-foreground">
          Industry knowledge center for tower crane operations, rigging and hoisting procedures, standards references, and field-ready safety documentation.
        </p>

        <div className="mt-6 max-w-4xl">
          <ContentImagePlaceholder id="hub-blog" />
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div className="space-y-6">
          {featured && (
            <article className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Featured technical article</p>
              <h2 className="mt-2 text-2xl font-semibold">{featured.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <a href={`/${locale}/blog/${featured.slug}`} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">Read featured article</a>
            </article>
          )}

          <section>
            <h2 className="text-2xl font-semibold">Latest Articles</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {latest.map((article) => (
                <Card key={article.slug}>
                  <CardHeader>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 pt-0 text-sm text-muted-foreground">
                    <p>{article.description}</p>
                    <p>{article.readingMinutes} min read</p>
                    <a href={`/${locale}/blog/${article.slug}`} className="text-primary hover:underline">Open article</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold">Category Grid</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_CATEGORIES.map((category, index) => {
                const Icon = icons[index % icons.length];
                const count = articles.filter((a) => a.category === category).length;
                return (
                  <div key={category} className="rounded-lg border border-border bg-card p-4">
                    <p className="flex items-center gap-2 font-semibold"><Icon className="h-4 w-4 text-primary" />{category}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{count} technical articles</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <Card><CardHeader><CardTitle className="text-base">Standards Updates</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Standards interpretation briefs and compliance-aware implementation notes.</CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Knowledge Highlights</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Engineering-focused lift planning, rigging methods, and inspection controls.</CardContent></Card>
            <Card><CardHeader><CardTitle className="text-base">Safety Insights</CardTitle></CardHeader><CardContent className="pt-0 text-sm text-muted-foreground">Field lessons from crane operations, communication systems, and exclusion strategy.</CardContent></Card>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <BlogSearch
            locale={locale}
            articles={articles.map((item) => ({
              slug: item.slug,
              title: item.title,
              description: item.description,
              category: item.category,
              tags: item.tags
            }))}
          />
        </aside>
      </div>
    </section>
  );
}
