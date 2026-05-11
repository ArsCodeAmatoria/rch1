import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {RiggingEducationModule1CustomSlideLesson} from "@/components/rigging/education/module-1-custom-slides";
import {RiggingEducationModule2CustomSlideLesson} from "@/components/rigging/education/module-2-custom-slides";
import {RiggingEducationSlideDeck} from "@/components/rigging/rigging-education-slide-deck";
import {
  RIGGING_SLIDE_MODULE_BY_SLUG,
  RIGGING_SLIDE_MODULE_ORDER,
  isRiggingSlideModuleSlug,
  parseRiggingSlideModuleSlug,
  riggingSlideSlugForModuleNumber
} from "@/lib/rigging-education-slide-data";
import {RiggingEducationSlideModuleBody} from "@/lib/rigging-education-slide-module-body";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";

export function generateStaticParams() {
  return RIGGING_SLIDE_MODULE_ORDER.map((moduleSlug) => ({moduleSlug}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; moduleSlug: string}>;
}): Promise<Metadata> {
  const {locale, moduleSlug} = await params;
  if (!isRiggingSlideModuleSlug(moduleSlug)) return {};
  const config = RIGGING_SLIDE_MODULE_BY_SLUG[moduleSlug];
  const stripped = config.headline.replace(/\s*\|\s*Rigging Education$/u, "");
  const title = `Audience · ${stripped}`;
  const description = `Slides-only audience view synced from the presenter. Article: ${SITE_URL}/${locale}/rigging/education/${moduleSlug}.`;

  return {
    ...buildPageMetadata({
      locale,
      path: `/rigging/education/slides/${moduleSlug}/cast`,
      title,
      description
    }),
    robots: {index: false, follow: false}
  };
}

export default async function RiggingEducationSlideCastPage({
  params
}: {
  params: Promise<{locale: string; moduleSlug: string}>;
}) {
  const {moduleSlug} = await params;
  if (!isRiggingSlideModuleSlug(moduleSlug)) notFound();

  const localeTyped = "en";
  const moduleNumber = parseRiggingSlideModuleSlug(moduleSlug);
  if (moduleNumber === null) notFound();

  const config = RIGGING_SLIDE_MODULE_BY_SLUG[moduleSlug];
  const prev = moduleNumber > 1 ? riggingSlideSlugForModuleNumber(moduleNumber - 1)! : null;
  const next = moduleNumber < 25 ? riggingSlideSlugForModuleNumber(moduleNumber + 1)! : null;

  const initialSlideIndex = 0;

  if (moduleSlug === "module-1") {
    return (
      <RiggingEducationModule1CustomSlideLesson
        key={`cast-${moduleSlug}-${initialSlideIndex}`}
        moduleSlug={moduleSlug}
        castRole="audience"
        moduleNumber={moduleNumber}
        deckTitle={config.headline}
        articleHref={`/rigging/education/${moduleSlug}`}
        prevModuleSlug={prev}
        nextModuleSlug={next}
        initialSlideIndex={initialSlideIndex}
      />
    );
  }

  if (moduleSlug === "module-2") {
    return (
      <RiggingEducationModule2CustomSlideLesson
        key={`cast-${moduleSlug}-${initialSlideIndex}`}
        moduleSlug={moduleSlug}
        castRole="audience"
        moduleNumber={moduleNumber}
        deckTitle={config.headline}
        articleHref={`/rigging/education/${moduleSlug}`}
        prevModuleSlug={prev}
        nextModuleSlug={next}
        initialSlideIndex={initialSlideIndex}
      />
    );
  }

  const body = await RiggingEducationSlideModuleBody({slug: moduleSlug, locale: localeTyped});

  return (
    <RiggingEducationSlideDeck
      key={`cast-${moduleSlug}-${initialSlideIndex}`}
      castRole="audience"
      moduleSlug={moduleSlug}
      moduleNumber={moduleNumber}
      headline={config.headline}
      toc={config.toc}
      articleHref={`/rigging/education/${moduleSlug}`}
      prevModuleSlug={prev}
      nextModuleSlug={next}
      initialSlideIndex={initialSlideIndex}>
      {body}
    </RiggingEducationSlideDeck>
  );
}
