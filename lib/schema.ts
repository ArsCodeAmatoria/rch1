import {SITE_NAME, SITE_URL} from "@/lib/seo";

type BreadcrumbItem = {name: string; url: string};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og/rch1-default-og.jpg`,
    description: "Professional crane, rigging, hoisting, and construction safety knowledge website.",
    sameAs: ["https://example.com/rch1-linkedin", "https://example.com/rch1-youtube"],
    areaServed: ["Canada", "British Columbia"],
    knowsAbout: [
      "Tower crane safety",
      "Rigging and hoisting",
      "Construction safety programs",
      "WorkSafeBC OHSR",
      "Technical Safety BC",
      "CSA standards",
      "ASME B30",
      "Lift planning",
      "Crane documentation"
    ]
  };
}

export function buildWebSiteSchema({locale}: {locale: string}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Technical crane and construction safety knowledge system.",
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/${locale}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildWebPageSchema({
  name,
  description,
  url,
  locale,
  breadcrumb,
  dateModified
}: {
  name: string;
  description: string;
  url: string;
  locale: string;
  breadcrumb?: BreadcrumbItem[];
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL
    },
    ...(breadcrumb ? {breadcrumb: buildBreadcrumbSchema(breadcrumb)} : {})
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  url,
  locale,
  breadcrumb
}: {
  name: string;
  description: string;
  url: string;
  locale: string;
  breadcrumb: BreadcrumbItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
    isPartOf: {"@type": "WebSite", name: SITE_NAME, url: SITE_URL},
    breadcrumb: buildBreadcrumbSchema(breadcrumb)
  };
}

export function buildArticleSchema({
  headline,
  description,
  image,
  author,
  publisher,
  datePublished,
  dateModified,
  articleSection,
  keywords,
  locale,
  url
}: {
  headline: string;
  description: string;
  image: string;
  author: string;
  publisher?: string;
  datePublished: string;
  dateModified: string;
  articleSection: string;
  keywords: string[];
  locale: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${SITE_URL}${image}`,
    author: {"@type": "Person", name: author},
    publisher: {
      "@type": "Organization",
      name: publisher ?? SITE_NAME,
      logo: {"@type": "ImageObject", url: `${SITE_URL}/og/rch1-default-og.jpg`}
    },
    datePublished,
    dateModified,
    articleSection,
    keywords,
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
    mainEntityOfPage: {"@type": "WebPage", "@id": url}
  };
}

export function buildTechArticleSchema({
  headline,
  description,
  url,
  locale,
  proficiencyLevel = "Professional",
  dependencies = ["WorkSafeBC", "CSA", "ASME B30", "Technical Safety BC"],
  keywords = [],
  about = [],
  mentions = []
}: {
  headline: string;
  description: string;
  url: string;
  locale: string;
  proficiencyLevel?: string;
  dependencies?: string[];
  keywords?: string[];
  about?: string[];
  mentions?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline,
    description,
    url,
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
    proficiencyLevel,
    dependencies,
    keywords,
    about: about.map((item) => ({"@type": "Thing", name: item})),
    mentions: mentions.map((item) => ({"@type": "Thing", name: item})),
    isPartOf: {"@type": "WebSite", name: SITE_NAME, url: SITE_URL}
  };
}

export function buildFAQPageSchema(items: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function buildHowToSchema({
  name,
  description,
  steps
}: {
  name: string;
  description: string;
  steps: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      text: step
    }))
  };
}
