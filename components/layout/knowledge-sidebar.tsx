import {BookOpenText, HardHat, Cable, ClipboardCheck, ShieldCheck} from "lucide-react";

type SidebarLink = {href: string; label: string};

export function KnowledgeSidebar({
  title,
  intro,
  quickLinks,
  standards = ["WorkSafeBC", "Technical Safety BC", "CSA standards", "ASME B30"]
}: {
  title: string;
  intro: string;
  quickLinks: SidebarLink[];
  standards?: string[];
}) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-lg border border-border bg-card p-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{intro}</p>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="text-sm font-semibold">Quick Internal Links</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-foreground/85 transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="text-sm font-semibold">Operational Focus</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><HardHat className="h-4 w-4 text-primary" />Field execution controls</li>
          <li className="flex items-center gap-2"><Cable className="h-4 w-4 text-primary" />Rigging and hoisting interfaces</li>
          <li className="flex items-center gap-2"><ClipboardCheck className="h-4 w-4 text-primary" />Inspection and documentation</li>
          <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Standards-aware procedures</li>
          <li className="flex items-center gap-2"><BookOpenText className="h-4 w-4 text-primary" />Knowledge cross-linking</li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="text-sm font-semibold">Standards Referenced</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {standards.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </aside>
  );
}
