import {TrainingTableOfContents} from "@/components/tower-operator-training/training-table-of-contents";
import {OPERATOR_TRAINING_ARTICLE_ID} from "@/components/tower-operator-training/training-article-id";

/** Wide column + optional sticky section nav (desktop). Mobile: collapsible “On this page” above the body. */
export function TrainingArticleLayout({
  children,
  tocTone = "default"
}: {
  children: React.ReactNode;
  /** High-contrast TOC links for equation-heavy pages (e.g. mathematics). */
  tocTone?: "default" | "math";
}) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-start xl:gap-10 2xl:gap-14">
      <aside className="order-1 shrink-0 empty:hidden xl:order-2 xl:w-[min(17rem,30vw)] xl:pt-1">
        <TrainingTableOfContents tone={tocTone} />
      </aside>
      <div id={OPERATOR_TRAINING_ARTICLE_ID} className="order-2 min-w-0 flex-1 xl:order-1">
        {children}
      </div>
    </div>
  );
}
