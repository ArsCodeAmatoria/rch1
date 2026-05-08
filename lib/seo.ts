import type {Metadata} from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rch1.local";
export const SITE_NAME = "RCH1";
export const DEFAULT_TWITTER = "@RCH1Safety";

const defaultKeywords = [
  "crane safety",
  "tower crane operations",
  "construction safety program",
  "rigging and hoisting",
  "WorkSafeBC crane safety",
  "Technical Safety BC crane requirements",
  "CSA crane standards",
  "ASME B30 rigging and hoisting",
  "tower crane inspection",
  "lift planning",
  "crane safety documentation"
];

const defaultOgBySection: Record<string, string> = {
  default: "/og/rch1-default-og.jpg",
  blog: "/og/rch1-blog-og.jpg",
  standards: "/og/rch1-standards-og.jpg",
  tower: "/og/rch1-tower-crane-og.jpg",
  rigging: "/og/rch1-rigging-og.jpg"
};

export function buildOpenGraph({
  title,
  description,
  url,
  image,
  locale,
  type = "website",
  article
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  locale: "en_CA" | "fr_CA";
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
}): NonNullable<Metadata["openGraph"]> {
  return {
    type,
    siteName: SITE_NAME,
    title,
    description,
    url,
    images: [{url: image ? `${SITE_URL}${image}` : `${SITE_URL}${defaultOgBySection.default}`}],
    locale,
    alternateLocale: locale === "en_CA" ? "fr_CA" : "en_CA",
    ...(type === "article"
      ? {
          publishedTime: article?.publishedTime,
          modifiedTime: article?.modifiedTime,
          authors: article?.authors,
          section: article?.section,
          tags: article?.tags
        }
      : {})
  };
}

export function buildTwitterCard({
  title,
  description,
  image,
  site = DEFAULT_TWITTER,
  creator = DEFAULT_TWITTER
}: {
  title: string;
  description: string;
  image?: string;
  site?: string;
  creator?: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image ? `${SITE_URL}${image}` : `${SITE_URL}${defaultOgBySection.default}`],
    site,
    creator
  };
}

function toLocaleTag(locale: string) {
  return locale === "fr" ? "fr_CA" : "en_CA";
}

export function buildMetadata({
  locale,
  title,
  description,
  canonicalPath,
  enPath,
  frPath,
  image,
  keywords,
  noindex,
  section = "default",
  type = "website",
  article
}: {
  locale: "en" | "fr";
  title: string;
  description: string;
  canonicalPath: string;
  enPath: string;
  frPath: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  section?: keyof typeof defaultOgBySection;
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
}): Metadata {
  const localeTag = toLocaleTag(locale);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const imageToUse = image ?? defaultOgBySection[section] ?? defaultOgBySection.default;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...(keywords ?? [])],
    alternates: {
      canonical,
      languages: {
        "en-CA": `${SITE_URL}${enPath}`,
        "fr-CA": `${SITE_URL}${frPath}`,
        "x-default": `${SITE_URL}/en`
      }
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: buildOpenGraph({
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      image: imageToUse,
      locale: localeTag,
      type,
      article
    }),
    twitter: buildTwitterCard({
      title: `${title} | ${SITE_NAME}`,
      description,
      image: imageToUse
    })
  };
}

export function buildPageMetadata(args: {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}) {
  const locale = (args.locale === "fr" ? "fr" : "en") as "en" | "fr";
  const canonicalPath = `/${locale}${args.path === "/" ? "" : args.path}`;
  const enPath = `/en${args.path === "/" ? "" : args.path}`;
  const frPath = `/fr${args.path === "/" ? "" : args.path}`;
  const section = args.path.startsWith("/blog")
    ? "blog"
    : args.path.startsWith("/standards")
      ? "standards"
      : args.path.startsWith("/tower-cranes")
        ? "tower"
        : args.path.startsWith("/rigging")
          ? "rigging"
          : "default";

  return buildMetadata({
    locale,
    title: args.title,
    description: args.description,
    canonicalPath,
    enPath,
    frPath,
    keywords: args.keywords,
    section
  });
}
