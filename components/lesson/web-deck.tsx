"use client";

import {type ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {ChevronLeft, ChevronRight, Expand, Minimize} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

export type WebDeckPage = {
  id?: string;
  title: string;
  content: ReactNode;
};

type WebDeckProps = {
  pages: WebDeckPage[];
  className?: string;
  initialPage?: number;
  onPageChange?: (pageIndex: number) => void;
};

export function WebDeck({pages, className, initialPage = 0, onPageChange}: WebDeckProps) {
  const tLesson = useTranslations("lessonControls");
  const tCommon = useTranslations("common");
  const totalPages = pages.length;
  const [index, setIndex] = useState(Math.max(0, Math.min(initialPage, Math.max(totalPages - 1, 0))));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const canGoPrevious = index > 0;
  const canGoNext = index < totalPages - 1;

  const previous = useCallback(() => {
    setIndex((value) => (value > 0 ? value - 1 : value));
  }, []);

  const next = useCallback(() => {
    setIndex((value) => (value < totalPages - 1 ? value + 1 : value));
  }, [totalPages]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore browser fullscreen permission errors.
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      }
      if (event.key.toLowerCase() === "f") {
        event.preventDefault();
        void toggleFullscreen();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous, toggleFullscreen]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    onPageChange?.(index);
  }, [index, onPageChange]);

  const progress = useMemo(() => {
    if (totalPages === 0) return 0;
    return Math.round(((index + 1) / totalPages) * 100);
  }, [index, totalPages]);

  const currentPage = pages[index];

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        next();
      } else {
        previous();
      }
    }
    setTouchStartX(null);
  };

  if (totalPages === 0) {
    return (
      <section className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground" aria-label="Web lesson deck">
        {tLesson("noPages")}
      </section>
    );
  }

  return (
    <section className={`space-y-4 rounded-lg border border-border bg-card p-4 sm:p-6 ${className ?? ""}`} aria-label={tLesson("deckLabel")}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">{tCommon("page")} {index + 1} {tCommon("of")} {totalPages}</p>
        <Button variant="outline" size="icon" onClick={() => void toggleFullscreen()} aria-label={tLesson("toggleFullscreen")}>
          {isFullscreen ? <Minimize className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
        </Button>
      </div>

      <div className="h-2 w-full rounded bg-secondary" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded bg-primary transition-all" style={{width: `${progress}%`}} />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPage.id ?? index}
          initial={{opacity: 0, y: 10, filter: "blur(2px)"}}
          animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
          exit={{opacity: 0, y: -10, filter: "blur(2px)"}}
          transition={{duration: 0.22, ease: "easeOut"}}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <Card className="min-h-48 p-6">
            <h3 className="text-lg font-semibold">{currentPage.title}</h3>
            <div className="mt-3 leading-relaxed text-muted-foreground">{currentPage.content}</div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={previous} disabled={!canGoPrevious} className="min-h-11 px-5">
          <ChevronLeft className="mr-1 h-4 w-4" />
          {tCommon("previous")}
        </Button>
        <Button onClick={next} disabled={!canGoNext} className="min-h-11 px-5">
          {tCommon("next")}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
