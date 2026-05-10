import type {ReactNode} from "react";

import {cn} from "@/lib/utils";

type CalloutBaseProps = {
  children: ReactNode;
  className?: string;
};

const asideBase =
  "not-prose my-8 rounded-r-xl border py-4 pl-[1.125rem] pr-4 shadow-sm [&_ul]:my-3 [&_ul]:space-y-1 [&_li]:text-[0.975rem] [&_li]:leading-relaxed [&_p]:text-[0.975rem] [&_p]:leading-relaxed [&_strong]:font-semibold";

function Label({
  eyebrow,
  title,
  titleClassName
}: {
  eyebrow?: string;
  title: string;
  titleClassName?: string;
}) {
  return (
    <header className="space-y-0.5">
      {eyebrow ? <p className="text-[0.72rem] font-semibold text-foreground/65">{eyebrow}</p> : null}
      <p className={cn("text-[0.95rem] font-extrabold tracking-tight text-foreground sm:text-base", titleClassName)}>{title}</p>
    </header>
  );
}

/** Field-friendly habit or shortcut (amber rail). */
export function MathTip({children, className}: CalloutBaseProps) {
  return (
    <aside
      className={cn(
        asideBase,
        "border-border border-l-[5px] border-l-amber-500 bg-amber-500/[0.08] dark:border-l-amber-400 dark:bg-amber-400/[0.09]",
        className
      )}
      role="note"
    >
      <Label title="Tip" titleClassName="text-amber-950 dark:text-amber-50" />
      <div className="mt-2.5 text-foreground/95 [&_strong]:text-foreground">{children}</div>
    </aside>
  );
}

/** Fascinating connector to real lifts / history / trade culture (sky rail). */
export function MathDidYouKnow({children, className}: CalloutBaseProps) {
  return (
    <aside
      className={cn(
        asideBase,
        "border-border border-l-[5px] border-l-sky-600 bg-sky-600/[0.07] dark:border-l-sky-400 dark:bg-sky-400/[0.08]",
        className
      )}
      role="note"
    >
      <Label title="Did you know?" titleClassName="text-sky-950 dark:text-sky-50" />
      <div className="mt-2.5 text-foreground/95 [&_strong]:text-foreground">{children}</div>
    </aside>
  );
}

/** One-screen summary of why a subsection matters (primary rail). */
export function MathKeyIdea({children, className}: CalloutBaseProps) {
  return (
    <aside
      className={cn(
        asideBase,
        "border-border border-l-[5px] border-l-primary bg-primary/[0.07] ring-1 ring-primary/10 dark:bg-primary/[0.12]",
        className
      )}
      role="note"
    >
      <Label eyebrow="Big picture" title="Key idea" />
      <div className="mt-2.5 font-medium text-foreground/95 [&_p]:font-normal [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </aside>
  );
}
