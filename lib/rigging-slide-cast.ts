/** Stable id for BroadcastChannel instances (same-origin tabs/windows). */
export const RIGGING_SLIDE_CAST_CHANNEL_PREFIX = "rch1-rigging-slide-cast:";

export type RiggingSlideCastMessage =
  | {readonly type: "sync"; readonly index: number; readonly total: number}
  | {readonly type: "request-sync"};

export function riggingSlideCastChannelId(moduleSlug: string): string {
  return `${RIGGING_SLIDE_CAST_CHANNEL_PREFIX}${moduleSlug}`;
}
