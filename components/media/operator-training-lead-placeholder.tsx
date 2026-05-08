import type {OperatorTrainingSectionSlug} from "@/lib/content-image-briefs";
import {OPERATOR_TRAINING_PAGE_PLACEHOLDER} from "@/lib/content-image-briefs";
import {ContentImagePlaceholder} from "@/components/media/content-image-placeholder";

export function OperatorTrainingLeadPlaceholder({section}: {section: OperatorTrainingSectionSlug}) {
  const id = OPERATOR_TRAINING_PAGE_PLACEHOLDER[section];
  return <ContentImagePlaceholder id={id} className="mb-8" />;
}
