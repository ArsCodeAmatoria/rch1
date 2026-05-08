import {cn} from "@/lib/utils";

export function TrainingProse({className, children}: {className?: string; children: React.ReactNode}) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none dark:prose-invert",
        "prose-headings:font-bold prose-h2:mt-12 prose-h2:text-2xl prose-h2:scroll-mt-28 prose-h2:tracking-tight",
        "prose-h3:mt-8 prose-h3:text-xl prose-h3:scroll-mt-28",
        "prose-h4:mt-6 prose-h4:text-lg",
        "prose-p:leading-relaxed prose-p:text-foreground/90",
        "prose-li:leading-relaxed prose-li:text-foreground/90",
        "prose-strong:text-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
