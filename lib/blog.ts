import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogLocale = "en" | "fr";

export const BLOG_CATEGORIES = [
  "Tower Cranes",
  "Rigging",
  "Hoisting",
  "Safety Programs",
  "Standards",
  "Inspections",
  "Lift Planning",
  "Site Procedures",
  "Equipment",
  "Industry Knowledge"
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogFrontmatter = {
  title: string;
  description: string;
  slug?: string;
  category: BlogCategory;
  tags: string[];
  publishedDate: string;
  updatedDate?: string;
  featuredImage: string;
  featured?: boolean;
  author: string;
  language: BlogLocale;
  translationKey: string;
  canonical?: string;
  draft?: boolean;
  noindex?: boolean;
};

export type BlogArticle = BlogFrontmatter & {
  slug: string;
  locale: BlogLocale;
  content: string;
  readingMinutes: number;
  headings: {id: string; text: string; level: number}[];
};

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractHeadings(mdx: string) {
  return mdx
    .split("\n")
    .map((line) => {
      const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
      if (!match) return null;
      const level = match[1].length;
      const text = match[2].trim();
      return {id: slugifyHeading(text), text, level};
    })
    .filter((v): v is {id: string; text: string; level: number} => Boolean(v));
}

export function getBlogArticle(locale: BlogLocale, slug: string): BlogArticle | null {
  const filePath = path.join(BLOG_ROOT, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const parsed = matter(file);
  const frontmatter = parsed.data as BlogFrontmatter;
  const stats = readingTime(parsed.content);

  if (frontmatter.draft) return null;

  return {
    ...frontmatter,
    slug: frontmatter.slug ?? slug,
    locale,
    content: parsed.content,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    headings: extractHeadings(parsed.content)
  };
}

export function getAllBlogArticles(locale: BlogLocale): BlogArticle[] {
  const localeDir = path.join(BLOG_ROOT, locale);
  if (!fs.existsSync(localeDir)) return [];

  return fs
    .readdirSync(localeDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .map((slug) => getBlogArticle(locale, slug))
    .filter((item): item is BlogArticle => Boolean(item))
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getRelatedArticles(locale: BlogLocale, article: BlogArticle, limit = 3) {
  return getAllBlogArticles(locale)
    .filter((item) => item.slug !== article.slug)
    .map((item) => {
      const sharedTags = item.tags.filter((tag) => article.tags.includes(tag)).length;
      const sharedCategory = item.category === article.category ? 1 : 0;
      return {item, score: sharedTags * 2 + sharedCategory};
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item);
}

export function getAdjacentArticles(locale: BlogLocale, slug: string) {
  const all = getAllBlogArticles(locale);
  const idx = all.findIndex((item) => item.slug === slug);
  return {
    previous: idx > 0 ? all[idx - 1] : null,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null
  };
}

export function getLocalizedArticleSlug(targetLocale: BlogLocale, translationKey: string) {
  const article = getAllBlogArticles(targetLocale).find((item) => item.translationKey === translationKey);
  return article?.slug ?? null;
}
