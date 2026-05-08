"use client";

import {useTranslations} from "next-intl";
import {Construction} from "lucide-react";
import {Link, usePathname} from "@/i18n/navigation";
import {navigationLinks} from "@/lib/navigation-links";
import {ThemeToggle} from "./theme-toggle";
import {LanguageSwitcher} from "./language-switcher";
import {MobileNav} from "./mobile-nav";

export function SiteHeader() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85 print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-foreground">
          <Construction className="h-5 w-5 text-primary" />
          <span>RCH1</span>
        </Link>

        <nav aria-label={t("primaryNavigation")} className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-sm px-1 py-0.5 transition-colors ${
                    pathname === item.href
                      ? "text-primary underline decoration-primary/60 underline-offset-4"
                      : "text-foreground/85 hover:text-primary"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
