"use client";

import {ImageIcon} from "lucide-react";
import type {ContentImageBrief, ContentImageBriefId} from "@/lib/content-image-briefs";
import {getContentImageBrief} from "@/lib/content-image-briefs";
import {cn} from "@/lib/utils";

type Props = {
  id: ContentImageBriefId;
  className?: string;
};

/** Visible production placeholder + JSON meta for tooling (replace with next/image using `suggestedPublicPath`). */
export function ContentImagePlaceholder({id, className}: Props) {
  const brief: ContentImageBrief = getContentImageBrief(id);
  const specJson = JSON.stringify({
    id: brief.id,
    suggestedPublicPath: brief.suggestedPublicPath,
    dimensions: `${brief.width}×${brief.height}`,
    aspectRatio: brief.aspectRatio,
    alt: brief.alt,
    headline: brief.headline,
    briefing: brief.briefing,
    ...(brief.subjects?.length ? {subjects: brief.subjects} : {}),
    ...(brief.visualStyle?.length ? {visualStyle: brief.visualStyle} : {})
  });

  const ratio = `${brief.width} / ${brief.height}`;

  return (
    <figure
      aria-label={`Image placeholder: ${brief.alt}`}
      className={cn(
        "not-prose overflow-hidden rounded-xl border-2 border-dashed border-amber-500/70 bg-linear-to-br from-amber-50/80 to-muted/40 text-foreground dark:from-amber-950/50 dark:to-muted/50",
        className
      )}
      data-placeholder-image-root="true"
      data-placeholder-id={brief.id}
      data-image-spec={specJson}
    >
      <div className="flex items-start justify-between gap-3 border-b border-amber-500/40 bg-amber-100/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide dark:bg-amber-950/60">
        <span className="flex items-center gap-2">
          <ImageIcon aria-hidden className="size-3.5" />
          Image placeholder — replace with asset
        </span>
        <span className="font-mono text-[10px] normal-case opacity-90">{brief.id}</span>
      </div>

      <div className="grid gap-0 md:grid-cols-[minmax(0,1.05fr)_minmax(0,220px)]">
        <div
          className="flex min-h-[140px] flex-col items-center justify-center gap-2 bg-muted/30 p-8 text-center text-sm text-muted-foreground md:min-h-[220px]"
          style={{aspectRatio: ratio}}
        >
          <span className="rounded-md border bg-background/80 px-3 py-1 font-mono text-xs">{brief.aspectRatio}</span>
          <p className="max-w-lg font-medium text-foreground">{brief.headline}</p>
          <p>{brief.width} × {brief.height}px target</p>
        </div>
        <dl className="space-y-2 border-t border-border p-4 text-xs leading-snug md:border-l md:border-t-0 md:text-[11px]">
          <div>
            <dt className="font-semibold uppercase tracking-[0.08em] text-muted-foreground">File</dt>
            <dd className="mt-0.5 font-mono break-all">{`public/${brief.suggestedPublicPath}`}</dd>
          </div>
          <div>
            <dt className="font-semibold uppercase tracking-[0.08em] text-muted-foreground">Alt (final)</dt>
            <dd className="mt-0.5">{brief.alt}</dd>
          </div>
          <div>
            <dt className="font-semibold uppercase tracking-[0.08em] text-muted-foreground">Brief</dt>
            <dd className="mt-0.5 text-muted-foreground">{brief.briefing}</dd>
          </div>
          {brief.subjects?.length ? (
            <div>
              <dt className="font-semibold uppercase tracking-[0.08em] text-muted-foreground">Subjects</dt>
              <dd className="mt-0.5">{brief.subjects.join(" · ")}</dd>
            </div>
          ) : null}
          {brief.visualStyle?.length ? (
            <div>
              <dt className="font-semibold uppercase tracking-[0.08em] text-muted-foreground">Style</dt>
              <dd className="mt-0.5">{brief.visualStyle.join(" · ")}</dd>
            </div>
          ) : null}
        </dl>
      </div>
      <figcaption className="sr-only">
        Producer note: structured image specification is mirrored in meta tags rch1_placeholder_image and rch1_placeholder_spec and in{" "}
        data-image-spec on this figure.
      </figcaption>
    </figure>
  );
}
