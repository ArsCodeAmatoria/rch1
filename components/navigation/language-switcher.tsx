"use client";

import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";
import {mapBlogSlugToLocale} from "@/lib/blog-slug-map";
import {cn} from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("language");
  const pathname = usePathname();
  const router = useRouter();
  const targetLocale = locale === "en" ? "fr" : "en";

  const getTargetPath = () => {
    const current = pathname as string;
    const blogMatch = /^\/blog\/([^/]+)$/.exec(current);
    if (!blogMatch) return current;
    const mappedSlug = mapBlogSlugToLocale(blogMatch[1], targetLocale);
    return mappedSlug ? `/blog/${mappedSlug}` : current;
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={locale === "fr"}
      onClick={() => router.replace(getTargetPath() as never, {locale: targetLocale})}
      aria-label={locale === "en" ? t("switchToFrench") : t("switchToEnglish")}
      className={cn(
        "relative inline-flex h-9 w-[92px] items-center rounded-full border border-white/30 bg-neutral-900 p-1 text-xs font-bold tracking-wide text-white transition-colors",
        locale === "fr" ? "justify-end" : "justify-start"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1 h-7 w-10 rounded-full bg-primary transition-all",
          locale === "fr" ? "left-[46px]" : "left-1"
        )}
      />
      <span className="relative z-10 w-1/2 text-center">EN</span>
      <span className="relative z-10 w-1/2 text-center">FR</span>
    </button>
  );
}
