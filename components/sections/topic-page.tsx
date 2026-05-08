import {Topic} from "@/lib/content";
import {Callout} from "./callout";

export function TopicPage({topic, backHref, backText}: {topic: Topic; backHref: string; backText: string}) {
  return (
    <article className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <a href={backHref} className="text-sm text-primary hover:underline">{backText}</a>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{topic.title}</h1>
        <p className="text-muted-foreground">{topic.summary}</p>
      </header>
      <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4 rounded-lg border border-border bg-card p-5">
          <h2 className="font-semibold">Procedure</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {topic.procedure.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
        <div className="space-y-4">
          <Callout title="Field Note" text="Validate controls with the current site conditions before each lift or rigging operation." />
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="font-semibold">References</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {topic.references.map((ref) => <li key={ref}>{ref}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
