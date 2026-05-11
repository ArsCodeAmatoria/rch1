"use client";

import {useEffect, useRef} from "react";

import type {RiggingSlideCastMessage} from "@/lib/rigging-slide-cast";
import {riggingSlideCastChannelId} from "@/lib/rigging-slide-cast";

export function useRiggingSlideCastPublisher(moduleSlug: string, enabled: boolean, index: number, total: number) {
  const chRef = useRef<BroadcastChannel | null>(null);
  const idxRef = useRef(index);
  const totRef = useRef(total);

  useEffect(() => {
    idxRef.current = index;
    totRef.current = total;
  }, [index, total]);

  useEffect(() => {
    if (!enabled) {
      chRef.current?.close();
      chRef.current = null;
      return;
    }
    if (typeof BroadcastChannel === "undefined") return;

    const ch = new BroadcastChannel(riggingSlideCastChannelId(moduleSlug));
    chRef.current = ch;

    const broadcast = () => {
      const msg: RiggingSlideCastMessage = {type: "sync", index: idxRef.current, total: totRef.current};
      ch.postMessage(msg);
    };

    const onMessage = (ev: MessageEvent<RiggingSlideCastMessage>) => {
      const d = ev.data;
      if (d?.type === "request-sync") broadcast();
    };

    ch.addEventListener("message", onMessage as EventListener);
    broadcast();

    return () => {
      ch.removeEventListener("message", onMessage as EventListener);
      ch.close();
      chRef.current = null;
    };
  }, [moduleSlug, enabled]);

  useEffect(() => {
    if (!enabled || !chRef.current) return;
    const msg: RiggingSlideCastMessage = {type: "sync", index, total};
    chRef.current.postMessage(msg);
  }, [enabled, index, total]);
}

export function useRiggingSlideCastSubscriber(
  moduleSlug: string,
  enabled: boolean,
  totalSlides: number,
  onIndex: (i: number) => void
): void {
  const onIndexRef = useRef(onIndex);

  useEffect(() => {
    onIndexRef.current = onIndex;
  }, [onIndex]);

  useEffect(() => {
    if (!enabled || typeof BroadcastChannel === "undefined") return;

    const ch = new BroadcastChannel(riggingSlideCastChannelId(moduleSlug));

    const onMessage = (ev: MessageEvent<RiggingSlideCastMessage>) => {
      const d = ev.data;
      if (d?.type !== "sync") return;
      const max = Math.max(0, totalSlides - 1);
      const i = Number.isFinite(d.index) ? Math.max(0, Math.min(max, Math.floor(d.index))) : 0;
      onIndexRef.current(i);
    };

    ch.addEventListener("message", onMessage as EventListener);
    const req: RiggingSlideCastMessage = {type: "request-sync"};
    ch.postMessage(req);

    return () => {
      ch.removeEventListener("message", onMessage as EventListener);
      ch.close();
    };
  }, [moduleSlug, enabled, totalSlides]);
}
