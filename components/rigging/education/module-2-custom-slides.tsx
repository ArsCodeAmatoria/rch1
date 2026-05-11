"use client";

import {Gauge} from "lucide-react";

import type {RiggingSlidePageDefinition} from "@/components/rigging/education/rigging-custom-slide-presenter";
import {RiggingCustomSlidePresenter} from "@/components/rigging/education/rigging-custom-slide-presenter";
import {RIGGING_MODULE_2_ARTICLE_ALIGNED_SLIDES} from "@/components/rigging/education/rigging-education-module-2-slide-bodies";
import {Module2EducationIntroNarrative} from "@/components/rigging/education/rigging-education-module-2-equipment-prose";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";

/** Typography matches Module 1 custom deck (`module-1-custom-slides`). */
const HERO = "text-balance font-black tracking-tight text-zinc-950";
const LEAD = "text-lg sm:text-xl font-semibold leading-snug text-zinc-800";

function M2DeckWelcome() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center gap-4">
      <Badge className="w-fit border border-zinc-300 bg-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-800 sm:text-sm">
        Rigging education
      </Badge>
      <h2 className={`${HERO} mt-2 text-3xl leading-[1.08] sm:text-4xl xl:text-[2.75rem]`}>
        Module 2 · <span className="text-primary">Rigging equipment knowledge</span>
      </h2>
      <p className={`${LEAD} mt-4 max-w-3xl border-l-4 border-primary/80 pl-5`}>
        Article-aligned slides covering hardware, WLL &amp; markings, fittings, sling families, below-the-hook devices, compatibility, and
        OEM specs—the same progression as the full lesson article.
      </p>
    </div>
  );
}

function M2NextModuleSlide() {
  return (
    <div className="flex min-h-full min-h-0 flex-1 flex-col justify-center">
      <Card className="border-2 border-primary/70 bg-white text-zinc-900 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.15)]">
        <CardContent className="flex flex-wrap items-start justify-between gap-8 px-8 py-10 sm:items-center sm:px-12 sm:py-12">
          <span className="flex items-center gap-4 text-lg font-black uppercase tracking-[0.18em] text-primary sm:text-xl">
            <Gauge className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" strokeWidth={1.2} />
            Next · Module&nbsp;3
          </span>
          <span className="max-w-lg text-base font-semibold leading-snug text-zinc-700">
            Inspection &amp; removal criteria—carry the presenter remote forward when you&apos;re ready to continue.
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

const MODULE_2_CUSTOM_SLIDES: readonly RiggingSlidePageDefinition[] = [
  {anchorId: "introduction", label: "Welcome", content: <M2DeckWelcome />},
  {
    anchorId: "introduction",
    label: "Introduction",
    content: <Module2EducationIntroNarrative />
  },
  ...RIGGING_MODULE_2_ARTICLE_ALIGNED_SLIDES,
  {anchorId: "manufacturer-specs", label: "Next lesson", content: <M2NextModuleSlide />}
];

export const RIGGING_MODULE_2_CUSTOM_SLIDE_COUNT = MODULE_2_CUSTOM_SLIDES.length;

type Module2LessonProps = {
  readonly moduleSlug: string;
  readonly moduleNumber: number;
  readonly deckTitle: string;
  readonly articleHref: string;
  readonly prevModuleSlug: string | null;
  readonly nextModuleSlug: string | null;
  readonly initialSlideIndex: number;
  readonly castRole?: "presenter" | "audience";
};

export function RiggingEducationModule2CustomSlideLesson({
  moduleSlug,
  moduleNumber,
  deckTitle,
  articleHref,
  prevModuleSlug,
  nextModuleSlug,
  initialSlideIndex,
  castRole = "presenter"
}: Module2LessonProps) {
  return (
    <RiggingCustomSlidePresenter
      moduleSlug={moduleSlug}
      castRole={castRole}
      moduleNumber={moduleNumber}
      deckTitle={deckTitle}
      slides={MODULE_2_CUSTOM_SLIDES}
      articleHref={articleHref}
      prevModuleSlug={prevModuleSlug}
      nextModuleSlug={nextModuleSlug}
      initialSlideIndex={initialSlideIndex}
      slideChrome="deck"
    />
  );
}
