import {cn} from "@/lib/utils";

type TrainingTrack = "default" | "mathematics";

/** Shared readable typography for operator-training content (headings, lists, emphasis, nesting). */
export function TrainingProse({
  className,
  children,
  track = "default"
}: {
  className?: string;
  children: React.ReactNode;
  /** `mathematics` — larger prose, bolder section headings, hooks for enlarged KaTeX (see globals.css `.math-training-prose`). */
  track?: TrainingTrack;
}) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none dark:prose-invert",
        track === "mathematics" ? "prose-lg" : "prose-base",
        "prose-headings:text-foreground prose-headings:tracking-tight",
        track === "mathematics"
          ? "prose-headings:font-extrabold math-training-prose"
          : "prose-headings:font-bold",
        "prose-h1:mb-5 prose-h1:mt-0 prose-h1:text-balance prose-h1:text-3xl prose-h1:font-black sm:prose-h1:text-4xl",
        track === "mathematics"
          ? "prose-h2:scroll-mt-32 prose-h2:mt-14 prose-h2:mb-8 prose-h2:border-b-2 prose-h2:border-primary/35 prose-h2:border-l-[5px] prose-h2:border-l-primary/50 prose-h2:pb-3 prose-h2:pl-4 prose-h2:text-[1.6rem] prose-h2:font-extrabold prose-h2:leading-tight sm:prose-h2:text-[1.92rem]"
          : "prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/60 prose-h2:pb-3 prose-h2:text-2xl prose-h2:scroll-mt-32",
        track === "mathematics"
          ? "prose-h3:scroll-mt-32 prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-[1.3rem] prose-h3:font-bold sm:prose-h3:text-[1.45rem]"
          : "prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-xl prose-h3:scroll-mt-32",
        track === "mathematics"
          ? "prose-h4:scroll-mt-32 prose-h4:mt-10 prose-h4:mb-4 prose-h4:border-l-[3px] prose-h4:border-l-foreground/25 prose-h4:pl-3 prose-h4:text-[1.1rem] prose-h4:font-bold sm:prose-h4:text-[1.2rem]"
          : "prose-h4:mt-10 prose-h4:mb-3 prose-h4:text-lg prose-h4:font-semibold prose-h4:scroll-mt-32",
        track === "mathematics"
          ? "prose-h5:scroll-mt-32 prose-h5:mt-9 prose-h5:mb-3 prose-h5:text-[1.02rem] prose-h5:font-bold prose-h5:leading-snug prose-h5:text-foreground"
          : "prose-h5:mt-8 prose-h5:mb-2 prose-h5:text-base prose-h5:font-semibold prose-h5:leading-snug prose-h5:text-foreground/95 prose-h5:scroll-mt-32",
        /* Air between paragraphs (stacked p, not first after heading — margins on p handle flow) */
        track === "mathematics"
          ? "prose-p:mb-7 prose-p:mt-0 prose-p:leading-[1.72] prose-p:text-foreground/93"
          : "prose-p:mb-7 prose-p:mt-0 prose-p:leading-[1.75] prose-p:text-foreground/90",
        "prose-strong:font-semibold prose-strong:text-foreground",
        "prose-em:italic prose-em:text-foreground/95",
        "prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        /* Lists: clear bullets vs numbers, spacing, nested indent */
        "prose-ul:my-6 prose-ol:my-6 prose-ul:list-disc prose-ol:list-decimal",
        "prose-ul:pl-6 prose-ol:pl-6 [&_ul]:marker:text-muted-foreground [&_ol]:marker:text-muted-foreground",
        track === "mathematics"
          ? "prose-li:my-2 prose-li:pl-1 prose-li:leading-relaxed prose-li:text-foreground/93"
          : "prose-li:my-2 prose-li:pl-1 prose-li:leading-relaxed prose-li:text-foreground/90",
        "[&_li>ul]:mt-3 [&_li>ol]:mt-3 [&_li>ul]:mb-2 [&_li>ol]:mb-2",
        "[&_li>ul]:list-disc [&_li>ol]:list-decimal [&_li>ul]:pl-6 [&_li>ol]:pl-6",
        "[&_li>ul_ul]:pl-5 [&_li>ol_ol]:pl-5 [&_li>ul_ul]:mt-2 [&_li>ol_ol]:mt-2",
        "prose-blockquote:my-8 prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:text-foreground/85",
        track === "mathematics"
          ? "prose-hr:my-14 prose-hr:border-border prose-hr:border-t-2"
          : "prose-hr:my-12 prose-hr:border-border",
        className
      )}
    >
      {children}
    </div>
  );
}
