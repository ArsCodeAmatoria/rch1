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
  imageAlt,
  type = "website",
  article
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  /** Improves accessibility and some crawler/LLM image context for OG previews. */
  imageAlt?: string;
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
}): NonNullable<Metadata["openGraph"]> {
  const ogImageUrl = image ? `${SITE_URL}${image}` : `${SITE_URL}${defaultOgBySection.default}`;
  return {
    type,
    siteName: SITE_NAME,
    title,
    description,
    url,
    images: [imageAlt ? {url: ogImageUrl, alt: imageAlt} : {url: ogImageUrl}],
    locale: "en_CA",
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
  imageAlt,
  site = DEFAULT_TWITTER,
  creator = DEFAULT_TWITTER
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  site?: string;
  creator?: string;
}): NonNullable<Metadata["twitter"]> {
  const twUrl = image ? `${SITE_URL}${image}` : `${SITE_URL}${defaultOgBySection.default}`;
  return {
    card: "summary_large_image",
    title,
    description,
    images: imageAlt ? [{url: twUrl, alt: imageAlt}] : [twUrl],
    site,
    creator
  };
}

export function buildMetadata({
  title,
  description,
  canonicalPath,
  enPath,
  image,
  imageAlt,
  keywords,
  noindex,
  section = "default",
  type = "website",
  article
}: {
  title: string;
  description: string;
  canonicalPath: string;
  enPath: string;
  image?: string;
  imageAlt?: string;
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
  const canonical = `${SITE_URL}${canonicalPath}`;
  const imageToUse = image ?? defaultOgBySection[section] ?? defaultOgBySection.default;
  const href = `${SITE_URL}${enPath}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...(keywords ?? [])],
    alternates: {
      canonical,
      languages: {
        "en-CA": href,
        "x-default": href
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
      imageAlt,
      type,
      article
    }),
    twitter: buildTwitterCard({
      title: `${title} | ${SITE_NAME}`,
      description,
      image: imageToUse,
      imageAlt
    })
  };
}

export function buildPageMetadata(args: {
  locale?: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Absolute path under `public/`, e.g. `/cranes/photo.png` */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  article?: Parameters<typeof buildMetadata>[0]["article"];
}) {
  const canonicalPath = `/en${args.path === "/" ? "" : args.path}`;
  const enPath = canonicalPath;
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
    title: args.title,
    description: args.description,
    canonicalPath,
    enPath,
    keywords: args.keywords,
    image: args.image,
    imageAlt: args.imageAlt,
    type: args.type ?? "website",
    article: args.article,
    section
  });
}
