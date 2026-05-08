"use client";

import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";
import {mapBlogSlugToLocale} from "@/lib/blog-slug-map";

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
    <Button
      variant="outline"
      onClick={() => router.replace(getTargetPath() as never, {locale: targetLocale})}
      aria-label={locale === "en" ? t("switchToFrench") : t("switchToEnglish")}
    >
      {locale === "en" ? "FR" : "EN"}
    </Button>
  );
}
