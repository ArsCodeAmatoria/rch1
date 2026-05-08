import {cn} from "@/lib/utils";

/** Shared readable typography for operator-training content (headings, lists, emphasis, nesting). */
export function TrainingProse({className, children}: {className?: string; children: React.ReactNode}) {
  return (
    <div
      className={cn(
        "prose prose-slate prose-base max-w-none dark:prose-invert",
        "prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight",
        "prose-h1:mb-5 prose-h1:mt-0 prose-h1:text-balance prose-h1:text-3xl prose-h1:font-black sm:prose-h1:text-4xl",
        "prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/60 prose-h2:pb-3 prose-h2:text-2xl prose-h2:scroll-mt-32",
        "prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-xl prose-h3:scroll-mt-32",
        "prose-h4:mt-10 prose-h4:mb-3 prose-h4:text-lg prose-h4:font-semibold prose-h4:scroll-mt-32",
        "prose-h5:mt-8 prose-h5:mb-2 prose-h5:text-base prose-h5:font-semibold prose-h5:leading-snug prose-h5:text-foreground/95 prose-h5:scroll-mt-32",
        /* Air between paragraphs (stacked p, not first after heading — margins on p handle flow) */
        "prose-p:mb-7 prose-p:mt-0 prose-p:leading-[1.75] prose-p:text-foreground/90",
        "prose-strong:font-semibold prose-strong:text-foreground",
        "prose-em:italic prose-em:text-foreground/95",
        "prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        /* Lists: clear bullets vs numbers, spacing, nested indent */
        "prose-ul:my-6 prose-ol:my-6 prose-ul:list-disc prose-ol:list-decimal",
        "prose-ul:pl-6 prose-ol:pl-6 [&_ul]:marker:text-muted-foreground [&_ol]:marker:text-muted-foreground",
        "prose-li:my-2 prose-li:pl-1 prose-li:leading-relaxed prose-li:text-foreground/90",
        "[&_li>ul]:mt-3 [&_li>ol]:mt-3 [&_li>ul]:mb-2 [&_li>ol]:mb-2",
        "[&_li>ul]:list-disc [&_li>ol]:list-decimal [&_li>ul]:pl-6 [&_li>ol]:pl-6",
        "[&_li>ul_ul]:pl-5 [&_li>ol_ol]:pl-5 [&_li>ul_ul]:mt-2 [&_li>ol_ol]:mt-2",
        "prose-blockquote:my-8 prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:text-foreground/85",
        "prose-hr:my-12 prose-hr:border-border",
        className
      )}
    >
      {children}
    </div>
  );
}
