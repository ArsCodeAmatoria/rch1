import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {compileMDX} from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import {getLocale} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {mdxComponents} from "@/components/blog/mdx-components";
import {buildMetadata, SITE_URL} from "@/lib/seo";
import {
  getAdjacentArticles,
  getAllBlogArticles,
  getBlogArticle,
  getLocalizedArticleSlug,
  getRelatedArticles
} from "@/lib/blog";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildArticleSchema, buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

export async function generateStaticParams() {
  const en = getAllBlogArticles("en").map((article) => ({locale: "en", slug: article.slug}));
  const fr = getAllBlogArticles("fr").map((article) => ({locale: "fr", slug: article.slug}));
  return [...en, ...fr];
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}): Promise<Metadata> {
  const {locale, slug} = await params;
  const article = getBlogArticle(locale as "en" | "fr", slug);
  if (!article) return {};

  const canonicalPath = article.canonical ?? `/${locale}/blog/${slug}`;
  const enSlug = getLocalizedArticleSlug("en", article.translationKey) ?? (locale === "en" ? slug : slug);
  const frSlug = getLocalizedArticleSlug("fr", article.translationKey) ?? (locale === "fr" ? slug : slug);

  return buildMetadata({
    locale: locale as "en" | "fr",
    title: article.title,
    description: article.description,
    canonicalPath,
    enPath: `/en/blog/${enSlug}`,
    frPath: `/fr/blog/${frSlug}`,
    image: article.featuredImage,
    keywords: [article.category, ...article.tags],
    noindex: Boolean(article.noindex),
    section: "blog",
    type: "article",
    article: {
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate ?? article.publishedDate,
      authors: [article.author],
      section: article.category,
      tags: article.tags
    }
  });
}

export default async function BlogArticlePage({params}: {params: Promise<{slug: string}>}) {
  const locale = (await getLocale()) as "en" | "fr";
  const {slug} = await params;
  const article = getBlogArticle(locale, slug);
  if (!article) return notFound();

  const {content} = await compileMDX({
    source: article.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug]
      }
    },
    components: mdxComponents
  });

  const related = getRelatedArticles(locale, article, 3);
  const adjacent = getAdjacentArticles(locale, slug);

  const articleUrl = `${SITE_URL}/${locale}/blog/${slug}`;
  const breadcrumb = buildBreadcrumbSchema([
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Blog", url: `${SITE_URL}/${locale}/blog`},
    {name: article.title, url: articleUrl}
  ]);
  const articleSchema = buildArticleSchema({
    headline: article.title,
    description: article.description,
    image: article.featuredImage,
    author: article.author,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    articleSection: article.category,
    keywords: article.tags,
    locale,
    url: articleUrl
  });
  const pageSchema = buildWebPageSchema({
    name: article.title,
    description: article.description,
    url: articleUrl,
    locale,
    breadcrumb: [
      {name: "Home", url: `${SITE_URL}/${locale}`},
      {name: "Blog", url: `${SITE_URL}/${locale}/blog`},
      {name: article.title, url: articleUrl}
    ],
    dateModified: article.updatedDate ?? article.publishedDate
  });
  const techArticleSchema = buildTechArticleSchema({
    headline: article.title,
    description: article.description,
    url: articleUrl,
    locale
  });

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 print:bg-white">
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleSchema} />
      <JsonLd data={pageSchema} />
      <JsonLd data={techArticleSchema} />

      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground print:hidden">
        <a href={`/${locale}/`} className="hover:text-primary">Home</a> / {" "}
        <a href={`/${locale}/blog`} className="hover:text-primary">Blog</a> / <span className="text-foreground">{article.title}</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">{article.category}</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>
        <p className="max-w-4xl text-muted-foreground">{article.description}</p>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span>Published {article.publishedDate}</span>
          <span>Updated {article.updatedDate ?? article.publishedDate}</span>
          <span>{article.readingMinutes} min read</span>
          <span>By {article.author}</span>
        </div>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <section className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl print:prose-black">
            {content}
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-semibold">Related Articles</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {related.map((entry) => (
                <a key={entry.slug} href={`/${locale}/blog/${entry.slug}`} className="rounded-lg border border-border bg-card p-4 hover:border-primary/50">
                  <p className="text-sm font-semibold">{entry.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{entry.category}</p>
                </a>
              ))}
            </div>
          </section>

          <nav className="mt-6 grid gap-3 sm:grid-cols-2 print:hidden">
            {adjacent.previous ? (
              <a href={`/${locale}/blog/${adjacent.previous.slug}`} className="rounded-lg border border-border bg-card p-4 hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Previous article</p>
                <p className="mt-1 font-semibold">{adjacent.previous.title}</p>
              </a>
            ) : <div />}
            {adjacent.next ? (
              <a href={`/${locale}/blog/${adjacent.next.slug}`} className="rounded-lg border border-border bg-card p-4 text-right hover:border-primary/50">
                <p className="text-xs text-muted-foreground">Next article</p>
                <p className="mt-1 font-semibold">{adjacent.next.title}</p>
              </a>
            ) : <div />}
          </nav>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit print:hidden">
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Table of Contents</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {article.headings.map((heading) => (
                <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}>
                  <a href={`#${heading.id}`} className="text-foreground/85 hover:text-primary">{heading.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
