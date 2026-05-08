"use client";

import {useMemo, useState} from "react";
import {Search} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

type ArticleSearchItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
};

export function BlogSearch({
  locale,
  articles
}: {
  locale: string;
  articles: ArticleSearchItem[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((article) => {
      const pool = [article.title, article.description, article.category, ...article.tags].join(" ").toLowerCase();
      return pool.includes(q);
    });
  }, [articles, query]);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base"><Search className="h-4 w-4 text-primary" />Search technical articles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search title, tags, category, summary"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          aria-label="Search blog articles"
        />
        <div className="grid gap-2 text-sm">
          {filtered.slice(0, 8).map((article) => (
            <a key={article.slug} href={`/${locale}/blog/${article.slug}`} className="rounded-md border border-border bg-card px-3 py-2 hover:border-primary/50">
              <p className="font-semibold text-foreground">{article.title}</p>
              <p className="text-xs text-muted-foreground">{article.category}</p>
            </a>
          ))}
          {filtered.length === 0 && <p className="text-xs text-muted-foreground">No matching technical articles.</p>}
        </div>
      </CardContent>
    </Card>
  );
}
