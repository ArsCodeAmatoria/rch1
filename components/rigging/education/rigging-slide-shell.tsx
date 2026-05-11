"use client";

import type {ReactNode} from "react";
import {createContext, useContext, useEffect, useRef, useState} from "react";

import {cn} from "@/lib/utils";

const RiggingSlideShellRefContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export function useRiggingSlideShellRef(): React.RefObject<HTMLDivElement | null> | null {
  return useContext(RiggingSlideShellRefContext);
}

const SHELL_Z = "z-[200]";

/**
 * Persists across `/rigging/education/slides/[moduleSlug]` navigations so browser fullscreen stays active when changing modules.
 */
export function RiggingSlideShell({children}: Readonly<{children: ReactNode}>) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [browserFs, setBrowserFs] = useState(false);

  useEffect(() => {
    const onFs = () => setBrowserFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  return (
    <RiggingSlideShellRefContext.Provider value={shellRef}>
      <div
        ref={shellRef}
        className={cn(
          "fixed inset-0 flex min-h-[100dvh] flex-col overscroll-none bg-zinc-100 text-zinc-900",
          SHELL_Z,
          browserFs && "!z-[2147483646]"
        )}>
        {children}
      </div>
    </RiggingSlideShellRefContext.Provider>
  );
}
