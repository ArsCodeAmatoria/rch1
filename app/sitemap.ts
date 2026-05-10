import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/seo";
import {getAllBlogArticles} from "@/lib/blog";
import {safetyProgramTopics} from "@/lib/safety-program";
import {towerKnowledge} from "@/lib/tower-knowledge";
import {riggingKnowledge} from "@/lib/rigging-knowledge";
import {standardsKnowledge} from "@/lib/standards-knowledge";

const staticPages = [
  "",
  "/safety-program",
  "/tower-cranes",
  "/tower-cranes/operator-training-program",
  "/tower-cranes/operator-training-program/regulatory-standards",
  "/tower-cranes/operator-training-program/mathematics",
  "/tower-cranes/operator-training-program/load-charts-capacity",
  "/tower-cranes/operator-training-program/mechanical-systems",
  "/tower-cranes/operator-training-program/climbing-procedures",
  "/tower-cranes/operator-training-program/inspection-maintenance",
  "/tower-cranes/operator-training-program/urban-operations",
  "/tower-cranes/operator-training-program/overlap-right-of-way",
  "/tower-cranes/operator-training-program/airspace-property-infrastructure",
  "/tower-cranes/operator-training-program/regulatory-knowledge-requirements",
  "/tower-cranes/operator-training-program/advanced-urban-compliance",
  "/tower-cranes/operator-training-program/remote-operation",
  "/tower-cranes/operator-training-program/self-erect-tower-cranes",
  "/tower-cranes/operator-training-program/hoist-systems-wire-rope",
  "/tower-cranes/operator-training-program/test-blocks-load-testing",
  "/tower-cranes/operator-training-program/tower-crane-bases-foundations",
  "/tower-cranes/operator-training-program/load-handling-swing-control",
  "/tower-cranes/operator-training-program/public-safety-traffic-emergency",
  "/tower-cranes/operator-training-program/tower-crane-controls-monitoring",
  "/rigging",
  "/rigging/education",
  "/rigging/education/module-1",
  "/rigging/education/module-2",
  "/rigging/education/module-3",
  "/rigging/education/module-4",
  "/rigging/education/module-5",
  "/rigging/education/module-6",
  "/rigging/education/module-7",
  "/rigging/education/module-8",
  "/rigging/education/module-9",
  "/rigging/education/module-10",
  "/rigging/education/module-11",
  "/rigging/education/module-12",
  "/rigging/education/module-13",
  "/rigging/education/module-14",
  "/rigging/education/module-15",
  "/rigging/education/module-16",
  "/rigging/education/module-17",
  "/rigging/education/module-18",
  "/rigging/education/module-19",
  "/rigging/education/module-20",
  "/rigging/education/module-21",
  "/rigging/education/module-22",
  "/rigging/education/module-23",
  "/rigging/education/module-24",
  "/rigging/education/module-25",
  "/rigging/education/appendix-a",
  "/rigging/education/appendix-b",
  "/rigging/education/appendix-c",
  "/rigging/education/appendix-d",
  "/rigging/education/appendix-e",
  "/hoisting",
  "/standards",
  "/knowledge",
  "/blog"
];

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
