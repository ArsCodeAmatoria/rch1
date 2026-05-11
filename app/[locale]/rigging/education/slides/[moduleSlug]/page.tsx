import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {
  RIGGING_MODULE_1_CUSTOM_SLIDE_COUNT,
  RiggingEducationModule1CustomSlideLesson
} from "@/components/rigging/education/module-1-custom-slides";
import {
  RIGGING_MODULE_2_CUSTOM_SLIDE_COUNT,
  RiggingEducationModule2CustomSlideLesson
} from "@/components/rigging/education/module-2-custom-slides";
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
  const title = `Slide lesson · ${config.headline.replace(/\s*\|\s*Rigging Education$/u, "")}`;
  const description = `Presenter-friendly slide view of this rigging education module. Use arrow keys or a slide remote. Article: ${SITE_URL}/${locale}/rigging/education/${moduleSlug}.`;

  return buildPageMetadata({
    locale,
    path: `/rigging/education/slides/${moduleSlug}`,
    title,
    description
  });
}

export default async function RiggingEducationSlidePage({
  params,
  searchParams
}: {
  params: Promise<{locale: string; moduleSlug: string}>;
  searchParams: Promise<{last?: string}>;
}) {
  const {moduleSlug} = await params;
  if (!isRiggingSlideModuleSlug(moduleSlug)) notFound();

  const localeTyped = "en";
  const moduleNumber = parseRiggingSlideModuleSlug(moduleSlug);
  if (moduleNumber === null) notFound();

  const config = RIGGING_SLIDE_MODULE_BY_SLUG[moduleSlug];
  const prev =
    moduleNumber > 1 ? riggingSlideSlugForModuleNumber(moduleNumber - 1)! : null;
  const next =
    moduleNumber < 25 ? riggingSlideSlugForModuleNumber(moduleNumber + 1)! : null;

  const sp = await searchParams;
  const slideCountForLast =
    moduleSlug === "module-1"
      ? RIGGING_MODULE_1_CUSTOM_SLIDE_COUNT
      : moduleSlug === "module-2"
        ? RIGGING_MODULE_2_CUSTOM_SLIDE_COUNT
        : config.toc.length;
  const initialSlideIndex = sp.last === "1" ? slideCountForLast - 1 : 0;

  if (moduleSlug === "module-1") {
    return (
      <RiggingEducationModule1CustomSlideLesson
        key={`${moduleSlug}-${initialSlideIndex}`}
        moduleSlug={moduleSlug}
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
        key={`${moduleSlug}-${initialSlideIndex}`}
        moduleSlug={moduleSlug}
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
      key={`${moduleSlug}-${initialSlideIndex}`}
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
