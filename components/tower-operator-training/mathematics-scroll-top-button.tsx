"use client";

import {ArrowUp} from "lucide-react";
import {useEffect, useState} from "react";

import {cn} from "@/lib/utils";

const SHOW_AFTER_PX = 480;

/** Fixed control for very long syllabus pages — avoids thumb-scrolling hundreds of formulae sections. */
export function MathematicsScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={cn(
        "fixed bottom-28 right-4 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg ring-1 ring-foreground/10 transition-opacity duration-200 hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 max-xl:bottom-36 sm:right-6 sm:size-12",
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }}
    >
      <ArrowUp className="size-5 sm:size-[1.35rem]" strokeWidth={2.25} aria-hidden />
    </button>
  );
}
