import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-20 bg-neutral-950 text-neutral-100 print:hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 text-base text-neutral-300 lg:col-span-2">
          <p>{t("disclaimer")}</p>
          <p>{t("verification")}</p>
        </div>
        <div className="space-y-3 text-base">
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-primary">Knowledge Hubs</h2>
          <Link href="/safety-program" className="block text-neutral-200 transition-colors hover:text-primary">Safety Program</Link>
          <Link href="/tower-cranes" className="block text-neutral-200 transition-colors hover:text-primary">Tower Cranes</Link>
          <Link href="/rigging" className="block text-neutral-200 transition-colors hover:text-primary">Rigging & Hoisting</Link>
          <Link href="/standards" className="block text-neutral-200 transition-colors hover:text-primary">Standards</Link>
        </div>
        <div className="space-y-3 text-base">
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-primary">Publication</h2>
          <Link href="/knowledge" className="block text-neutral-200 transition-colors hover:text-primary">Knowledge Library</Link>
          <Link href="/blog" className="block text-neutral-200 transition-colors hover:text-primary">Technical Articles</Link>
          <Link href="/hoisting" className="block text-neutral-200 transition-colors hover:text-primary">Hoisting</Link>
        </div>
      </div>
    </footer>
  );
}
