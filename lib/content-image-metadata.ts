import type {Metadata} from "next";
import type {ContentImageBriefId} from "@/lib/content-image-briefs";
import {getContentImageBrief, OPERATOR_TRAINING_PAGE_PLACEHOLDER} from "@/lib/content-image-briefs";
import type {OperatorTrainingSectionSlug} from "@/lib/content-image-briefs";

/** Append machine-readable cues so “View Source” / crawlers expose pending art direction. */
export function mergePlaceholderImageMeta(briefId: ContentImageBriefId, metadata: Metadata): Metadata {
  const brief = getContentImageBrief(briefId);
  const specCore = JSON.stringify({
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

  const prev =
    metadata.other && typeof metadata.other === "object" && !Array.isArray(metadata.other)
      ? {...(metadata.other as Record<string, string | number>)}
      : {};

  return {
    ...metadata,
    other: {
      ...prev,
      rch1_placeholder_image: brief.id,
      rch1_placeholder_spec: specCore.length > 2500 ? `${specCore.slice(0, 2498)}…` : specCore
    }
  };
}

export function mergePlaceholderForTrainingSection(section: OperatorTrainingSectionSlug, metadata: Metadata): Metadata {
  return mergePlaceholderImageMeta(OPERATOR_TRAINING_PAGE_PLACEHOLDER[section], metadata);
}
