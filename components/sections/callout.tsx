import {AlertTriangle} from "lucide-react";

export function Callout({title, text}: {title: string; text: string}) {
  return (
    <aside className="rounded-lg border border-primary/35 bg-primary/5 p-4">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-primary"><AlertTriangle className="h-4 w-4" />{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </aside>
  );
}
