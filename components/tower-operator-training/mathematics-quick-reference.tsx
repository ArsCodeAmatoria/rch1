import {KaTeXInline} from "@/components/katex/katex-math";

const rk = String.raw;

/** Collapsible notation hints for the long-form mathematics curriculum page. */
export function MathematicsQuickReference() {
  return (
    <details className="group not-prose mb-12 rounded-xl border border-primary/30 bg-linear-to-br from-primary/[0.07] to-transparent px-4 py-3 shadow-sm ring-1 ring-primary/15 dark:border-primary/25 dark:from-primary/10 dark:to-transparent [&_summary::-webkit-details-marker]:hidden">
      <summary className="cursor-pointer list-none rounded-md px-1 py-1 text-sm font-semibold text-foreground [&::before]:mr-2 [&::before]:inline-block [&::before]:text-primary [&::before]:transition-transform [&::before]:content-['▸'] [&::marker]:hidden group-open:[&::before]:rotate-90">
        Quick reference — symbols &amp; habits
      </summary>
      <div className="mt-4 space-y-3 border-t border-dashed border-border pt-4 text-sm leading-relaxed text-foreground/93">
        <p>
          <strong className="text-foreground">Angles.</strong> In rigging sling sections,{" "}
          <KaTeXInline tex={rk`\theta`} /> is measured from horizontal unless a diagram says otherwise. Keep calculators in{" "}
          <strong>DEG</strong>.
        </p>
        <p>
          <strong className="text-foreground">Forces vs mass.</strong> Use SI force in newtons (<KaTeXInline tex={rk`\mathrm{N}`} /> or{" "}
          <KaTeXInline tex={rk`\mathrm{kN}`} />) whenever you multiply mass by gravitational acceleration — do not casually swap kg for kN across a checklist.
        </p>
        <p>
          <strong className="text-foreground">Ground pressure.</strong> <KaTeXInline tex={rk`\mathrm{kPa}`} /> lines up cleanly with{" "}
          <KaTeXInline tex={rk`\mathrm{kN}/\mathrm{m}^2`} /> for pad sizing intuition.
        </p>
        <p>
          <strong className="text-foreground">Study flow.</strong> Use the sidebar <strong className="text-foreground">On this page (all sections)</strong> jump list to practise in syllabus order—from conversions and sling angles through chart math, lifting hardware, wind, ground pressure/moment/deflection—and only then skim the legacy tower-crane appendix at the bottom if you need it.
        </p>
      </div>
    </details>
  );
}
