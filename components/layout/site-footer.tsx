import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-16 border-t border-border bg-card print:hidden">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3 text-sm text-muted-foreground lg:col-span-2">
          <p>{t("disclaimer")}</p>
          <p>{t("verification")}</p>
        </div>
        <div className="space-y-2 text-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Knowledge Hubs</h2>
          <Link href="/safety-program" className="block text-foreground/85 transition-colors hover:text-primary">Safety Program</Link>
          <Link href="/tower-cranes" className="block text-foreground/85 transition-colors hover:text-primary">Tower Cranes</Link>
          <Link href="/rigging" className="block text-foreground/85 transition-colors hover:text-primary">Rigging & Hoisting</Link>
          <Link href="/standards" className="block text-foreground/85 transition-colors hover:text-primary">Standards</Link>
        </div>
        <div className="space-y-2 text-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Publication</h2>
          <Link href="/knowledge" className="block text-foreground/85 transition-colors hover:text-primary">Knowledge Library</Link>
          <Link href="/blog" className="block text-foreground/85 transition-colors hover:text-primary">Technical Articles</Link>
          <Link href="/hoisting" className="block text-foreground/85 transition-colors hover:text-primary">Hoisting</Link>
        </div>
      </div>
    </footer>
  );
}
