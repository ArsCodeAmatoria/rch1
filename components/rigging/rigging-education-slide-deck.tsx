"use client";

import type {ReactNode} from "react";
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight, Maximize2, Minimize2, MonitorPlay, X} from "lucide-react";
import {useLocale} from "next-intl";

import {
  RIGGING_SLIDE_CYCLIC_ICONS,
  riggingSlideDeckProseFrameClass
} from "@/components/rigging/education/rigging-slide-shared";
import {useRiggingSlideShellRef} from "@/components/rigging/education/rigging-slide-shell";
import {Link, useRouter} from "@/i18n/navigation";
import type {RiggingSlideTocEntry} from "@/lib/rigging-education-slide-data";
import {openRiggingAudienceDisplayWindow} from "@/lib/open-rigging-audience-window";
import {useRiggingSlideCastPublisher, useRiggingSlideCastSubscriber} from "@/lib/use-rigging-slide-cast";
import {cn} from "@/lib/utils";

const SLIDE_CACHE_NAME = "rigging-education-slides-v1";
const SHELL_Z = "z-[200]";

type Props = {
  readonly moduleSlug: string;
  readonly castRole?: "presenter" | "audience";
  readonly moduleNumber: number;
  readonly headline: string;
  readonly toc: readonly RiggingSlideTocEntry[];
  readonly articleHref: string;
  readonly prevModuleSlug: string | null;
  readonly nextModuleSlug: string | null;
  readonly initialSlideIndex: number;
  readonly children: ReactNode;
};

function stripIds(root: DocumentFragment) {
  root.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
}

function cloneSectionRange(article: HTMLElement, startId: string, endId: string | null): DocumentFragment | null {
  const start = article.querySelector(`#${CSS.escape(startId)}`);
  if (!(start instanceof HTMLElement)) return null;
  const end = endId ? article.querySelector(`#${CSS.escape(endId)}`) : null;
  const range = document.createRange();
  range.setStartBefore(start);
  if (end instanceof HTMLElement) {
    range.setEndBefore(end);
  } else if (article.lastChild) {
    range.setEndAfter(article.lastChild);
  } else {
    range.setEndAfter(start);
  }
  const frag = range.cloneContents();
  stripIds(frag);
  return frag;
}

function fsSupported(): boolean {
  if (typeof document === "undefined") return false;
  const el = document.documentElement as unknown as {requestFullscreen?: unknown; webkitRequestFullscreen?: unknown};
  return Boolean(el.requestFullscreen || el.webkitRequestFullscreen);
}

async function enterFullscreen(el: HTMLElement) {
  const wk = el as unknown as {webkitRequestFullscreen?: () => Promise<void>};
  try {
    if (el.requestFullscreen) await el.requestFullscreen();
    else if (wk.webkitRequestFullscreen) await wk.webkitRequestFullscreen();
  } catch {
    /* user gesture may be required */
  }
}

async function exitFullscreen() {
  const d = document as Document & {
    webkitExitFullscreen?: () => Promise<void>;
  };
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (d.webkitExitFullscreen) await d.webkitExitFullscreen();
  } catch {
    /* ignore */
  }
}

export function RiggingEducationSlideDeck({
  moduleSlug,
  castRole = "presenter",
  moduleNumber,
  headline,
  toc,
  articleHref,
  prevModuleSlug,
  nextModuleSlug,
  initialSlideIndex,
  children
}: Props) {
  const router = useRouter();
  const locale = useLocale();
  const isAudience = castRole === "audience";
  const [index, setIndex] = useState(initialSlideIndex);
  const [viewportW, setViewportW] = useState(0);
  const [clonesReady, setClonesReady] = useState(false);
  const [cloneFailures, setCloneFailures] = useState(0);
  const [cacheMessage, setCacheMessage] = useState<string | null>(null);
  const [browserFs, setBrowserFs] = useState(false);
  /** Fullscreen control only after mount — `fsSupported()` differs SSR vs client without this. */
  const [mountedWithFsProbe, setMountedWithFsProbe] = useState(false);

  const sharedShellRef = useRiggingSlideShellRef();
  const localShellRef = useRef<HTMLDivElement>(null);
  const shellRef = sharedShellRef ?? localShellRef;
  const sourceRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const hostsRef = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const strip = (s: string) => s.replace(/\s*\|\s*Rigging Education$/u, "");
  const shortTitle = strip(headline);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    queueMicrotask(() => setMountedWithFsProbe(true));
  }, []);

  useRiggingSlideCastPublisher(moduleSlug, !isAudience && toc.length > 0, index, toc.length);
  useRiggingSlideCastSubscriber(moduleSlug, isAudience && toc.length > 0, toc.length, setIndex);

  useEffect(() => {
    const onFs = () => setBrowserFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const apply = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setViewportW(w);
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const outer = viewportRef.current;
    const article = sourceRef.current?.querySelector(".rigging-education-article");
    if (!(outer instanceof HTMLElement) || !(article instanceof HTMLElement)) return;

    let w = outer.getBoundingClientRect().width;
    if (w <= 0) w = outer.offsetWidth;
    if (w > 0) setViewportW(w);

    let failures = 0;
    toc.forEach((entry, i) => {
      const host = hostsRef.current[i];
      if (!host) return;
      const nextId = toc[i + 1]?.id ?? null;
      const frag = cloneSectionRange(article, entry.id, nextId);
      host.replaceChildren();
      if (!frag || frag.childNodes.length === 0) {
        failures += 1;
        const p = document.createElement("p");
        p.className = "text-sm text-zinc-400";
        p.textContent = "This section could not be loaded into the slide. Use Article view for the full content.";
        host.appendChild(p);
        return;
      }
      host.appendChild(frag);
    });
    setCloneFailures(failures);
    setClonesReady(true);
  }, [toc, moduleNumber]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/rigging-education-slide-worker.js").catch(() => {});
  }, []);

  const goArticle = useCallback(async () => {
    await exitFullscreen();
    router.push(articleHref as never);
  }, [articleHref, router]);

  const closeAudienceWindow = useCallback(async () => {
    await exitFullscreen();
    window.close();
    window.setTimeout(() => {
      router.push(articleHref as never);
    }, 200);
  }, [articleHref, router]);

  const openAudienceDisplay = useCallback(async () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    await openRiggingAudienceDisplayWindow(`${origin}/${locale}/rigging/education/slides/${moduleSlug}/cast`);
  }, [locale, moduleSlug]);

  const goNext = useCallback(() => {
    if (index < toc.length - 1) {
      setIndex((j) => j + 1);
      return;
    }
    if (nextModuleSlug) {
      router.push(`/rigging/education/slides/${nextModuleSlug}` as never);
    }
  }, [index, nextModuleSlug, router, toc.length]);

  const goPrev = useCallback(() => {
    if (index > 0) {
      setIndex((j) => j - 1);
      return;
    }
    if (prevModuleSlug) {
      router.push(`/rigging/education/slides/${prevModuleSlug}?last=1` as never);
    }
  }, [index, prevModuleSlug, router]);

  async function toggleFs() {
    const shell = shellRef.current;
    if (!shell || !fsSupported()) return;
    if (document.fullscreenElement) await exitFullscreen();
    else await enterFullscreen(shell);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("last") !== "1") return;
    params.delete("last");
    const next = params.toString();
    window.history.replaceState({}, "", window.location.pathname + (next ? `?${next}` : ""));
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, [contenteditable=true]")) return;
      if (isAudience && event.key !== "Escape") return;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ": {
          event.preventDefault();
          goNext();
          break;
        }
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp": {
          event.preventDefault();
          goPrev();
          break;
        }
        case "Home": {
          event.preventDefault();
          setIndex(0);
          break;
        }
        case "End": {
          event.preventDefault();
          setIndex(toc.length - 1);
          break;
        }
        case "Escape": {
          event.preventDefault();
          if (document.fullscreenElement) {
            void exitFullscreen();
            return;
          }
          if (isAudience) void closeAudienceWindow();
          else void goArticle();
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAudienceWindow, goArticle, goNext, goPrev, isAudience, toc.length]);

  const cacheOffline = async () => {
    setCacheMessage(null);
    try {
      if (typeof window === "undefined" || !("caches" in window)) {
        setCacheMessage("Offline save is not supported in this browser.");
        return;
      }
      await caches.open(SLIDE_CACHE_NAME).then((c) => c.add(new Request(window.location.href, {credentials: "same-origin"})));
      setCacheMessage("Lesson saved for offline. Same URL loads from cache when the network is unavailable (best effort).");
    } catch {
      setCacheMessage("Could not save offline. Try again when you are online.");
    }
  };

  const slideProseClass = cn(
    riggingSlideDeckProseFrameClass(),
    "overflow-hidden",
    "[&_p]:line-clamp-[14] [&_li]:line-clamp-5",
    "[&_h2]:line-clamp-4 [&_h3]:line-clamp-3"
  );

  const translatePx = viewportW > 0 ? -(index * viewportW) : 0;
  const deckReady = clonesReady && viewportW > 0;
  const canFs = mountedWithFsProbe && fsSupported();
  const useSharedFullscreenShell = Boolean(sharedShellRef);

  const dialogProps = {
    role: "dialog" as const,
    "aria-modal": true as const,
    "aria-label": isAudience ? (`Audience slides: Module ${moduleNumber}` as const) : (`Slide presenter: Module ${moduleNumber}` as const)
  };

  const frameClass = cn(
    "flex min-h-0 flex-1 flex-col overscroll-none text-zinc-900",
    !useSharedFullscreenShell && [
      "fixed inset-0 min-h-[100dvh] bg-zinc-100",
      SHELL_Z,
      browserFs && "!z-[2147483646]"
    ]
  );

  return (
    <div
      {...dialogProps}
      ref={useSharedFullscreenShell ? undefined : localShellRef}
      className={frameClass}>
      {/* Off-screen article source — used only for Range cloning */}
      <div
        ref={sourceRef}
        className="pointer-events-none fixed left-[-10000px] top-0 z-[-1] w-[1100px] max-w-[100vw] opacity-0 [&_.rigging-education-article]:max-w-none"
        aria-hidden>
        {children}
      </div>

      {/* Toolbar */}
      <header className="flex shrink-0 flex-wrap items-center gap-3 border-b border-zinc-200 bg-white px-3 py-2 shadow-sm sm:px-4">
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => void (isAudience ? closeAudienceWindow() : goArticle())}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            aria-label={isAudience ? "Close audience window" : "Close presenter and open article"}>
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
          {canFs ? (
            <button
              type="button"
              onClick={() => void toggleFs()}
              className="hidden h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex"
              aria-label={browserFs ? "Exit browser fullscreen" : "Browser fullscreen"}
              title="Fullscreen (presentation)">
              {browserFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          ) : null}
          {!isAudience ? (
            <button
              type="button"
              onClick={() => void openAudienceDisplay()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Open audience screen window"
              title="Audience screen (second monitor)">
              <MonitorPlay className="h-5 w-5" strokeWidth={2} />
            </button>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium uppercase tracking-wider text-zinc-500">
            {isAudience
              ? `Audience · Module ${moduleNumber} · Slide ${index + 1} / ${toc.length}`
              : `Module ${moduleNumber} · Slide ${index + 1} / ${toc.length}`}
          </p>
          <h1 className="truncate text-base font-bold tracking-tight text-zinc-900 sm:text-lg">{shortTitle}</h1>
          <p className="truncate text-sm text-zinc-600 sm:text-base">{toc[index]?.label}</p>
        </div>

        <div className="ml-auto flex shrink-0 flex-wrap items-center justify-end gap-1.5 sm:gap-2">
          {isAudience ? (
            <button
              type="button"
              onClick={() => void closeAudienceWindow()}
              className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-100 sm:text-sm">
              Close window
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-9 items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-100 sm:text-sm">
                <ChevronLeft className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-9 items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-100 sm:text-sm">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </button>
              <Link
                href={articleHref as never}
                className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-800 hover:bg-zinc-100 sm:text-sm">
                Article
              </Link>
              <button
                type="button"
                onClick={cacheOffline}
                className="hidden h-9 items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-600 hover:bg-zinc-100 md:inline-flex">
                Save offline
              </button>
            </>
          )}
        </div>
      </header>

      {cacheMessage ? (
        <p className="shrink-0 border-b border-amber-200 bg-amber-50 px-4 py-1.5 text-center text-xs text-amber-900" role="status">
          {cacheMessage}
        </p>
      ) : null}
      {cloneFailures > 0 ? (
        <p className="shrink-0 border-b border-amber-200/80 bg-amber-50 px-4 py-1 text-center text-[11px] text-amber-900" role="status">
          {cloneFailures} section(s) did not split cleanly — use Article for full text.
        </p>
      ) : null}

      <div className="mx-auto flex min-h-0 w-full max-w-[1920px] flex-1 flex-col px-2 py-2 sm:px-4 sm:py-3">
        {!isAudience ? (
          <p className="mb-1 hidden shrink-0 text-[11px] text-zinc-600 lg:block">
            ← → Page Up/Down · Space next · Home/End · Esc exits fullscreen or closes · Swipe
          </p>
        ) : null}

        <div
          ref={viewportRef}
          className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-300/30 ring-1 ring-zinc-200/80"
          role="region"
          aria-roledescription="carousel"
          aria-label="Lesson slides"
          onTouchStart={
            isAudience
              ? undefined
              : (e) => {
                  touchStartX.current = e.targetTouches[0]?.clientX ?? null;
                }
          }
          onTouchEnd={
            isAudience
              ? undefined
              : (e) => {
                  const start = touchStartX.current;
                  touchStartX.current = null;
                  if (start == null) return;
                  const endX = e.changedTouches[0]?.clientX;
                  if (endX == null) return;
                  const dx = endX - start;
                  if (dx < -48) goNext();
                  else if (dx > 48) goPrev();
                }
          }>
          {!deckReady ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white text-sm text-zinc-500">
              Preparing slides…
            </div>
          ) : null}

          <div
            className={cn(
              "flex h-full min-h-0 flex-row transition-transform duration-500 ease-out motion-reduce:transition-none",
              !deckReady && "pointer-events-none opacity-0"
            )}
            style={{
              width: viewportW > 0 ? viewportW * toc.length : "100%",
              transform: viewportW > 0 ? `translateX(${translatePx}px)` : undefined
            }}>
            {toc.map((entry, i) => {
              const Icon = RIGGING_SLIDE_CYCLIC_ICONS[i % RIGGING_SLIDE_CYCLIC_ICONS.length];
              const sectionHash = `${articleHref}#${entry.id}`;

              return (
                <div
                  key={entry.id}
                  className="grid h-full min-h-0 shrink-0 grid-cols-1 content-stretch gap-6 overflow-hidden px-4 py-5 sm:px-8 sm:py-7 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-8 xl:gap-x-16"
                  style={{width: viewportW > 0 ? viewportW : "100%"}}
                  aria-hidden={i !== index}
                  data-slide-index={i}>
                  <div className="flex min-h-0 shrink-0 flex-col items-center justify-center gap-5 rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white px-6 py-8 text-center shadow-inner shadow-zinc-200/70 lg:min-h-0 lg:py-12">
                    <span className="inline-flex rounded-2xl border border-primary/30 bg-primary/10 p-5 text-primary shadow-sm shadow-zinc-300/40">
                      <Icon className="h-24 w-24 sm:h-28 sm:w-28 lg:h-[6.85rem] lg:w-[6.85rem]" strokeWidth={1.15} aria-hidden />
                    </span>
                    <p className="text-balance text-[1.35rem] font-black uppercase leading-tight tracking-tight text-zinc-900 sm:text-2xl xl:text-[1.95rem]">
                      {entry.label}
                    </p>
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-col gap-6">
                    <div
                      ref={(el) => {
                        hostsRef.current[i] = el;
                      }}
                      className={cn(slideProseClass, "min-h-0 flex-1")}
                    />
                    {!isAudience ? (
                      <div className="shrink-0 border-t border-zinc-200 pt-4">
                        <Link
                          href={sectionHash as never}
                          className="text-base font-semibold text-primary underline decoration-primary decoration-2 underline-offset-[6px] hover:text-primary/85 hover:decoration-primary/85">
                          Open full section in article view
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!isAudience ? (
          <div className="mt-3 flex shrink-0 justify-center">
            <Link
              href={"/rigging/education" as never}
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-900 hover:underline">
              All education modules
            </Link>
          </div>
        ) : null}
      </div>

      {/* Mobile offline */}
      {!isAudience ? (
        <div className="shrink-0 border-t border-zinc-200 bg-white px-3 py-2 text-center md:hidden">
          <button type="button" onClick={cacheOffline} className="text-xs text-zinc-600 underline">
            Save for offline
          </button>
        </div>
      ) : null}
    </div>
  );
}
