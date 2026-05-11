"use client";

import type {ReactNode} from "react";
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import type {LucideIcon} from "lucide-react";
import {BookOpen, ChevronLeft, ChevronRight, Download, Keyboard, Maximize2, Minimize2, MonitorPlay, X} from "lucide-react";
import {useLocale} from "next-intl";

import {
  RIGGING_SLIDE_CYCLIC_ICONS,
  riggingSlideDeckProseFrameClass
} from "@/components/rigging/education/rigging-slide-shared";
import {useRiggingSlideShellRef} from "@/components/rigging/education/rigging-slide-shell";
import {Link, useRouter} from "@/i18n/navigation";
import {openRiggingAudienceDisplayWindow} from "@/lib/open-rigging-audience-window";
import {useRiggingSlideCastPublisher, useRiggingSlideCastSubscriber} from "@/lib/use-rigging-slide-cast";
import {cn} from "@/lib/utils";

const SLIDE_CACHE_NAME = "rigging-education-slides-v1";
const SHELL_Z = "z-[200]";

export type RiggingSlidePageDefinition = {
  readonly anchorId: string;
  readonly label: string;
  readonly content: ReactNode;
  /** Override for the left rail; defaults to a shared cyclic icon list. */
  readonly icon?: LucideIcon;
};

/** "Module 1 — Regulations…" → "Regulations…"; omit second line when nothing remains. */
function deckNavSubtitle(shortTitle: string): string | null {
  const em = shortTitle.match(/^Module\s+\d+\s*[—–-]\s*(.+)$/u);
  if (em?.[1]?.trim()) return em[1].trim();
  const stripped = shortTitle.replace(/^Module\s+\d+\s*/iu, "").trim();
  return stripped.length > 0 ? stripped : null;
}

type SlideChrome = "standard" | "hero" | "deck";

type Props = {
  readonly moduleSlug: string;
  readonly castRole?: "presenter" | "audience";
  readonly moduleNumber: number;
  readonly deckTitle: string;
  readonly slides: readonly RiggingSlidePageDefinition[];
  readonly articleHref: string;
  readonly prevModuleSlug: string | null;
  readonly nextModuleSlug: string | null;
  readonly initialSlideIndex: number;
  /** `deck` matches TOC slide layout (hero rail + prose). `hero` retains the compact progress chrome. */
  readonly slideChrome?: SlideChrome;
};

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
    /* noop */
  }
}

async function exitFullscreen() {
  const d = document as Document & {webkitExitFullscreen?: () => Promise<void>};
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (d.webkitExitFullscreen) await d.webkitExitFullscreen();
  } catch {
    /* noop */
  }
}

export function RiggingCustomSlidePresenter({
  moduleSlug,
  castRole = "presenter",
  moduleNumber,
  deckTitle,
  slides,
  articleHref,
  prevModuleSlug,
  nextModuleSlug,
  initialSlideIndex,
  slideChrome = "standard"
}: Props) {
  const router = useRouter();
  const locale = useLocale();
  const isAudience = castRole === "audience";
  const clampedInitial = slides.length === 0 ? 0 : Math.min(Math.max(0, initialSlideIndex), slides.length - 1);
  const [index, setIndex] = useState(clampedInitial);
  const [viewportW, setViewportW] = useState(0);
  const [cacheMessage, setCacheMessage] = useState<string | null>(null);
  const [browserFs, setBrowserFs] = useState(false);
  /** Delay fullscreen detection until mount so SSR and first client paint match (avoids hydration mismatch). */
  const [mountedWithFsProbe, setMountedWithFsProbe] = useState(false);

  const sharedShellRef = useRiggingSlideShellRef();
  const localShellRef = useRef<HTMLDivElement>(null);
  const shellRef = sharedShellRef ?? localShellRef;
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

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

  useRiggingSlideCastPublisher(moduleSlug, !isAudience && slides.length > 0, index, slides.length);
  useRiggingSlideCastSubscriber(moduleSlug, isAudience && slides.length > 0, slides.length, setIndex);

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
    if (index < slides.length - 1) {
      setIndex((j) => j + 1);
      return;
    }
    if (nextModuleSlug) {
      router.push(`/rigging/education/slides/${nextModuleSlug}` as never);
    }
  }, [index, nextModuleSlug, router, slides.length]);

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
          setIndex(Math.max(0, slides.length - 1));
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
  }, [closeAudienceWindow, goArticle, goNext, goPrev, isAudience, slides.length]);

  const cacheOffline = async () => {
    setCacheMessage(null);
    try {
      if (typeof window === "undefined" || !("caches" in window)) {
        setCacheMessage("Offline save is not supported in this browser.");
        return;
      }
      await caches.open(SLIDE_CACHE_NAME).then((c) => c.add(new Request(window.location.href, {credentials: "same-origin"})));
      setCacheMessage("Lesson saved for offline (best-effort cache for this URL).");
    } catch {
      setCacheMessage("Could not save offline. Try again when you are online.");
    }
  };

  const slide = slides[index];
  const translatePx = viewportW > 0 ? -(index * viewportW) : 0;
  const deckReady = viewportW > 0 && slides.length > 0;
  const canFs = mountedWithFsProbe && fsSupported();
  const shortTitle = deckTitle.replace(/\s*\|\s*Rigging Education$/u, "");
  const navSubtitle = deckNavSubtitle(shortTitle);
  const isHeroSlides = slideChrome === "hero";
  const isDeckSlides = slideChrome === "deck";
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
      <header className="flex shrink-0 items-start gap-2 border-b border-zinc-200 bg-white py-1.5 pl-4 pr-3 shadow-sm sm:items-center sm:gap-3 sm:py-2 sm:pl-8 sm:pr-5">
        <div className="min-w-0 shrink leading-tight sm:py-px">
          {isAudience ? (
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Audience</span>
              <span className="font-mono text-[10px] tabular-nums text-zinc-500">
                {index + 1}/{slides.length}
              </span>
              <span className="min-w-0 truncate text-xs font-medium text-zinc-700">{slide?.label}</span>
            </div>
          ) : (
            <div className="flex min-w-0 flex-col gap-0.5">
              <h1 className="text-[10px] font-semibold leading-none tracking-tight text-zinc-900 sm:text-[11px]">Module {moduleNumber}</h1>
              {navSubtitle ? (
                <p
                  className="min-w-0 truncate text-[9px] font-medium leading-none tracking-tight text-zinc-600 sm:text-[10px]"
                  title={navSubtitle}>
                  {navSubtitle}
                </p>
              ) : null}
              <p className="shrink-0 font-mono text-[10px] tabular-nums text-zinc-500" title="Current slide / total">
                {index + 1}/{slides.length}
              </p>
              {slide?.label ? <p className="truncate text-[11px] font-medium text-zinc-700 sm:text-xs">{slide.label}</p> : null}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-0.5 border-l border-zinc-200 pl-2 sm:pl-3">
          <button
            type="button"
            onClick={() => void (isAudience ? closeAudienceWindow() : goArticle())}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            aria-label={isAudience ? "Close audience window" : "Close presenter and open article"}>
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
          {canFs ? (
            <button
              type="button"
              onClick={() => void toggleFs()}
              className="hidden h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex"
              aria-label={browserFs ? "Exit browser fullscreen" : "Browser fullscreen"}
              title="Fullscreen (presentation)">
              {browserFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          ) : null}
          {!isAudience ? (
            <button
              type="button"
              onClick={() => void openAudienceDisplay()}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Open audience screen window"
              title="Audience screen (second monitor)">
              <MonitorPlay className="h-4 w-4" strokeWidth={2} />
            </button>
          ) : null}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-0.5 sm:gap-1">
          {isAudience ? (
            <button
              type="button"
              onClick={() => void closeAudienceWindow()}
              className="inline-flex h-8 items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 text-[11px] font-medium text-zinc-700 hover:bg-zinc-100 sm:h-9 sm:px-3 sm:text-xs">
              Close
            </button>
          ) : (
            <>
              <details className="group relative">
                <summary
                  className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 outline-none hover:bg-zinc-100 hover:text-zinc-900 sm:h-9 sm:w-9 [&::-webkit-details-marker]:hidden"
                  title="Keyboard shortcuts">
                  <Keyboard className="h-4 w-4" aria-hidden />
                  <span className="sr-only">Keyboard shortcuts</span>
                </summary>
                <div
                  className="absolute right-0 top-[calc(100%+6px)] z-[300] w-[min(calc(100vw-1.5rem),17.5rem)] rounded-xl border border-zinc-200 bg-white p-3 text-left shadow-lg shadow-zinc-400/25"
                  onClick={(e) => e.stopPropagation()}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Shortcuts</p>
                  <ul className="mt-2 space-y-1.5 text-[11px] leading-snug text-zinc-700">
                    <li>
                      <span className="font-mono text-zinc-900">← → ↑ ↓</span> <span className="text-zinc-500">·</span> previous / next slide
                    </li>
                    <li>
                      <span className="font-mono text-zinc-900">Space</span> <span className="text-zinc-500">·</span> next slide
                    </li>
                    <li>
                      <span className="font-mono text-zinc-900">PgUp PgDn</span> <span className="text-zinc-500">·</span> previous / next
                    </li>
                    <li>
                      <span className="font-mono text-zinc-900">Home End</span> <span className="text-zinc-500">·</span> first / last slide
                    </li>
                    <li>
                      <span className="font-mono text-zinc-900">Esc</span> <span className="text-zinc-500">·</span> exit fullscreen, or close and open
                      article
                    </li>
                  </ul>
                  <p className="mt-2.5 border-t border-zinc-200 pt-2 text-[10px] text-zinc-500">Designed slide deck · custom layout</p>
                </div>
              </details>
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 sm:h-9 sm:w-9"
                title="Previous slide"
                aria-label="Previous slide">
                <ChevronLeft className="h-4 w-4 shrink-0" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 sm:h-9 sm:w-9"
                title="Next slide"
                aria-label="Next slide">
                <ChevronRight className="h-4 w-4 shrink-0" />
              </button>
              <Link
                href={articleHref as never}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 sm:h-9 sm:w-9"
                title="Open article"
                aria-label="Open article">
                <BookOpen className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={cacheOffline}
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 md:inline-flex"
                title="Save for offline"
                aria-label="Save for offline">
                <Download className="h-4 w-4" />
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

      <div className="mx-auto flex min-h-0 w-full max-w-[1920px] flex-1 flex-col px-2 py-2 sm:px-4 sm:py-3">
        <div
          ref={viewportRef}
          className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-300/30 ring-1 ring-zinc-200/80"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${deckTitle} slides`}
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
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white text-sm text-zinc-500">Loading deck…</div>
          ) : null}

          <div
            className={cn(
              "flex h-full min-h-0 flex-row transition-transform duration-500 ease-out motion-reduce:transition-none",
              !deckReady && "pointer-events-none opacity-0"
            )}
            style={{
              width: viewportW > 0 ? viewportW * slides.length : "100%",
              transform: viewportW > 0 ? `translateX(${translatePx}px)` : undefined
            }}>
            {slides.map((s, i) => {
              const pct = slides.length === 0 ? 0 : ((i + 1) / slides.length) * 100;
              const RailIcon = s.icon ?? RIGGING_SLIDE_CYCLIC_ICONS[i % RIGGING_SLIDE_CYCLIC_ICONS.length];
              const sectionHash = `${articleHref}#${s.anchorId}` as const;

              return (
                <div
                  key={`${s.anchorId}-${i}`}
                  className={cn(
                    "flex h-full min-h-0 shrink-0 flex-col overflow-hidden",
                    (isHeroSlides || slideChrome === "standard") && "p-6 sm:p-8 lg:p-10",
                    isHeroSlides && "gap-3"
                  )}
                  style={{width: viewportW > 0 ? viewportW : "100%"}}
                  aria-hidden={i !== index}>
                  {isDeckSlides ? (
                    <div className="grid h-full min-h-0 shrink-0 grid-cols-1 content-stretch gap-6 overflow-hidden px-4 py-5 sm:px-8 sm:py-7 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-8 xl:gap-x-16">
                      <div className="flex min-h-0 shrink-0 flex-col items-center justify-center gap-5 rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white px-6 py-8 text-center shadow-inner shadow-zinc-200/70 lg:min-h-0 lg:py-12">
                        <span className="inline-flex rounded-2xl border border-primary/30 bg-primary/10 p-5 text-primary shadow-sm shadow-zinc-300/40">
                          <RailIcon className="h-24 w-24 sm:h-28 sm:w-28 lg:h-[6.85rem] lg:w-[6.85rem]" strokeWidth={1.15} aria-hidden />
                        </span>
                        <p className="text-balance text-[1.35rem] font-black uppercase leading-tight tracking-tight text-zinc-900 sm:text-2xl xl:text-[1.95rem]">
                          {s.label}
                        </p>
                      </div>
                      <div className="flex min-h-0 min-w-0 flex-col gap-6">
                        <div className={cn(riggingSlideDeckProseFrameClass(), "min-h-0 flex-1")}>{s.content}</div>
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
                  ) : isHeroSlides ? (
                    <>
                      <div
                        className="h-1 w-full shrink-0 overflow-hidden rounded-full bg-zinc-200"
                        role="progressbar"
                        aria-valuenow={i + 1}
                        aria-valuemin={1}
                        aria-valuemax={slides.length}
                        aria-label={`Slide ${i + 1} of ${slides.length}`}>
                        <div
                          className="h-full rounded-full bg-zinc-900 transition-[width] duration-500 ease-out motion-reduce:transition-none"
                          style={{width: `${pct}%`}}
                        />
                      </div>

                      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-inner shadow-zinc-200/50 ring-1 ring-zinc-200/70">
                        <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
                          <div className="relative flex min-h-full flex-1 flex-col text-zinc-800 text-[1.15rem] leading-relaxed sm:text-[1.3rem] lg:text-[1.35rem]">
                            {s.content}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="relative flex min-h-0 flex-1 flex-col text-zinc-800 text-[1.2rem] leading-relaxed sm:text-[1.35rem] lg:text-xl">
                      {s.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

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

