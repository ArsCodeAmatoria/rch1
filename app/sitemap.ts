import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";
import {getAllBlogArticles} from "@/lib/blog";
import {safetyProgramTopics} from "@/lib/safety-program";
import {towerKnowledge} from "@/lib/tower-knowledge";
import {riggingKnowledge} from "@/lib/rigging-knowledge";
import {standardsKnowledge} from "@/lib/standards-knowledge";

const staticPages = ["", "/safety-program", "/tower-cranes", "/rigging", "/hoisting", "/standards", "/knowledge", "/blog"];

function toEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly") {
  const en = `/en${path}`;
  const fr = `/fr${path}`;
  return {
    url: `${SITE_URL}${en}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "en-CA": `${SITE_URL}${en}`,
        "fr-CA": `${SITE_URL}${fr}`
      }
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  staticPages.forEach((page) => {
    entries.push(toEntry(page, page === "" ? 1 : 0.85));
  });

  safetyProgramTopics.en.forEach((topic) => {
    entries.push(toEntry(`/safety-program/${topic.slug}`, 0.8));
  });

  towerKnowledge.en.forEach((topic) => {
    entries.push(toEntry(`/tower-cranes/${topic.slug}`, 0.8));
  });

  riggingKnowledge.en.forEach((topic) => {
    entries.push(toEntry(`/rigging/${topic.slug}`, 0.8));
  });

  standardsKnowledge.en.forEach((topic) => {
    entries.push(toEntry(`/standards/${topic.slug}`, 0.78));
  });

  const enBlog = getAllBlogArticles("en");
  const frBlog = getAllBlogArticles("fr");

  enBlog
    .filter((article) => !article.noindex && !article.draft)
    .forEach((article) => {
      const frEquivalent = frBlog.find((item) => item.translationKey === article.translationKey);
      const enPath = `/en/blog/${article.slug}`;
      const frPath = `/fr/blog/${frEquivalent?.slug ?? article.slug}`;
      entries.push({
        url: `${SITE_URL}${enPath}`,
        lastModified: new Date(article.updatedDate ?? article.publishedDate),
        changeFrequency: "weekly",
        priority: 0.74,
        alternates: {
          languages: {
            "en-CA": `${SITE_URL}${enPath}`,
            "fr-CA": `${SITE_URL}${frPath}`
          }
        }
      });
    });

  return entries;
}
