export const BLOG_TRANSLATIONS = {
  "wind-restrictions": {
    en: "tower-crane-wind-restrictions",
    fr: "restrictions-de-vent-grue-a-tour"
  },
  "critical-lifts": {
    en: "critical-lift-communication-framework",
    fr: "cadre-de-communication-des-levages-critiques"
  },
  "rigging-inspection": {
    en: "rigging-inspection-documentation-system",
    fr: "systeme-de-documentation-inspection-elingage"
  },
  "standards-brief": {
    en: "worksafebc-csa-asme-b30-reference-brief",
    fr: "note-de-reference-worksafebc-csa-asme-b30"
  }
} as const;

export function mapBlogSlugToLocale(currentSlug: string, targetLocale: "en" | "fr") {
  const entry = Object.values(BLOG_TRANSLATIONS).find((item) => item.en === currentSlug || item.fr === currentSlug);
  return entry ? entry[targetLocale] : null;
}
