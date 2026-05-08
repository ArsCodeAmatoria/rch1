"use client";

import {ChevronDown} from "lucide-react";
import {useEffect, useState} from "react";
import {OPERATOR_TRAINING_ARTICLE_ID} from "@/components/tower-operator-training/training-article-id";
import {cn} from "@/lib/utils";

type HeadingEntry = {id: string; text: string; level: number};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function collectHeadings(root: HTMLElement): HeadingEntry[] {
  const used = new Set<string>();
  const out: HeadingEntry[] = [];
  const nodes = root.querySelectorAll("h2, h3, h4, h5");

  nodes.forEach((node) => {
    const el = node as HTMLElement;
    const level = Math.min(5, Math.max(2, Number.parseInt(el.tagName[1], 10) || 2));
    let id = el.id.trim();
    if (!id) {
      let base = slugify(el.textContent || "section");
      if (!base) base = "section";
      let candidate = base;
      let n = 2;
      while (used.has(candidate) || root.querySelector(`#${CSS.escape(candidate)}`)) {
        candidate = `${base}-${n++}`;
      }
      used.add(candidate);
      el.id = candidate;
      id = candidate;
    } else {
      used.add(id);
    }
    out.push({id, text: (el.textContent || "").replace(/\s+/g, " ").trim(), level});
  });

  return out;
}

function NavLinks({
  sections,
  activeId,
  onNavigate,
  className
}: {
  sections: HeadingEntry[];
  activeId: string | null;
  onNavigate: (id: string) => void;
  className?: string;
}) {
  return (
    <nav aria-label="On this page" className={cn("space-y-0.5", className)}>
      {sections.map(({id, text, level}) => {
        const depth = Math.max(0, level - 2);
        return (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "block rounded-r-md border-l-2 py-1.5 text-left text-sm transition-colors",
              depth === 0 && "pl-3",
              depth === 1 && "pl-5",
              depth === 2 && "pl-7",
              depth >= 3 && "pl-9",
              activeId === id
                ? "border-primary bg-primary/5 font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/40 hover:text-foreground"
            )}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(id);
            }}
          >
            <span className="line-clamp-3">{text}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function TrainingTableOfContents() {
  const [sections, setSections] = useState<HeadingEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById(OPERATOR_TRAINING_ARTICLE_ID);
    if (!root) return;
    setSections(collectHeadings(root));
  }, []);

  useEffect(() => {
    if (sections.length === 0) return undefined;
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId((visible[0].target as HTMLElement).id);
      },
      {rootMargin: "-15% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 1]}
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) return;
    const h = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (h && sections.some((s) => s.id === h)) {
      setActiveId(h);
    }
  }, [sections]);

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({behavior: "smooth", block: "start"});
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  if (sections.length === 0) return null;

  return (
    <>
      <details className="group rounded-xl border border-border bg-card/50 p-1 shadow-sm backdrop-blur-sm xl:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
          <span>On this page</span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" aria-hidden />
        </summary>
        <div className="max-h-[min(50vh,22rem)] overflow-y-auto border-t border-border px-2 py-3">
          <NavLinks sections={sections} activeId={activeId} onNavigate={navigate} />
        </div>
      </details>

      <div className="hidden xl:block">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
          <NavLinks sections={sections} activeId={activeId} onNavigate={navigate} />
        </div>
      </div>
    </>
  );
}
