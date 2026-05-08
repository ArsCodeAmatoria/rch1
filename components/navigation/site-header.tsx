"use client";

import {useTranslations} from "next-intl";
import {ChevronDown} from "lucide-react";
import {Link, usePathname} from "@/i18n/navigation";
import {navigationLinks} from "@/lib/navigation-links";
import {ThemeToggle} from "./theme-toggle";
import {LanguageSwitcher} from "./language-switcher";
import {MobileNav} from "./mobile-nav";

export function SiteHeader() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const primaryLinks = navigationLinks.filter((item) => !["/hoisting", "/knowledge", "/redtc", "/blog"].includes(item.href));
  const dropdownLinks = navigationLinks.filter((item) => ["/hoisting", "/knowledge", "/redtc", "/blog"].includes(item.href));
  const dropdownActive = dropdownLinks.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  return (
    <header className="sticky top-0 z-40 bg-neutral-950 text-white print:hidden">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-[220px] shrink-0">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded bg-primary text-base font-black tracking-wider">R1</span>
            <span className="leading-tight">
              <span className="block text-xl font-black tracking-[0.08em]">RCH1</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">Safety Systems</span>
            </span>
          </Link>
        </div>

        <nav aria-label={t("primaryNavigation")} className="hidden flex-1 px-4 xl:block">
          <ul className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.04em] xl:gap-3">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex min-h-10 w-[108px] items-center justify-center rounded-sm px-2 py-1 text-center leading-tight whitespace-normal transition-colors ${
                    pathname === item.href
                      ? "text-white underline decoration-primary underline-offset-6"
                      : "text-white/90 hover:text-white"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.key === "standards" ? (
                    <span>
                      <span className="block whitespace-nowrap">Standards &</span>
                      <span className="block whitespace-nowrap">Compliance</span>
                    </span>
                  ) : (
                    t(item.key)
                  )}
                </Link>
              </li>
            ))}
            <li className="group relative">
              <button
                type="button"
                className={`inline-flex min-h-10 w-[108px] items-center justify-center gap-1 rounded-sm px-2 py-1 text-center leading-tight transition-colors ${
                  dropdownActive ? "text-white underline decoration-primary underline-offset-6" : "text-white/90 hover:text-white"
                }`}
                aria-haspopup="menu"
              >
                More
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-3 w-56 rounded-md bg-neutral-950 p-2 opacity-0 shadow-lg ring-1 ring-white/20 transition-all group-hover:visible group-hover:opacity-100">
                <ul className="space-y-1 normal-case tracking-normal">
                  {dropdownLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded px-3 py-2 text-sm transition-colors ${
                          pathname === item.href ? "bg-primary text-primary-foreground" : "text-white/90 hover:bg-neutral-900 hover:text-white"
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="hidden w-[240px] shrink-0 items-center justify-end gap-2 xl:flex [&_button]:border-white/30 [&_button]:bg-neutral-950 [&_button]:text-white [&_button]:hover:bg-neutral-900">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
