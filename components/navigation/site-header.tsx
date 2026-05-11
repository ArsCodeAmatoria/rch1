"use client";

import {useTranslations} from "next-intl";
import {ChevronDown} from "lucide-react";
import {Link, usePathname} from "@/i18n/navigation";
import {navigationLinks} from "@/lib/navigation-links";
import {ThemeToggle} from "./theme-toggle";
import {MobileNav} from "./mobile-nav";

export function SiteHeader() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const primaryLinks = navigationLinks.filter((item) => !["/hoisting", "/knowledge", "/redtc", "/blog"].includes(item.href));
  const dropdownLinks = navigationLinks.filter((item) => ["/hoisting", "/knowledge", "/redtc", "/blog"].includes(item.href));
  const dropdownActive = dropdownLinks.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  return (
    <header className="sticky top-0 z-40 bg-neutral-950 text-white print:hidden">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center px-3 sm:h-16 sm:px-5 lg:px-8">
        <div className="w-[156px] shrink-0 sm:w-[174px]">
          <Link href="/" className="inline-flex items-center gap-2 text-white sm:gap-2.5">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary text-xs font-black tracking-wider sm:h-9 sm:w-9 sm:text-sm">
              R1
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-base font-black tracking-[0.08em] sm:text-lg">RCH1</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[10px] sm:tracking-[0.16em]">
                Safety Systems
              </span>
            </span>
          </Link>
        </div>

        <nav aria-label={t("primaryNavigation")} className="hidden flex-1 px-2 xl:block xl:px-4">
          <ul className="flex items-center justify-center gap-2 font-bold uppercase tracking-[0.04em] xl:gap-3">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex min-h-8 max-w-[100px] items-center justify-center rounded-sm px-2 py-0.5 text-center text-[9px] leading-tight whitespace-normal transition-colors xl:max-w-[108px] xl:text-[10px] ${
                    pathname === item.href
                      ? "text-white underline decoration-primary underline-offset-4"
                      : "text-white/90 hover:text-white"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.key === "standards" ? (
                    <span className="inline-flex flex-col gap-px leading-none">
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
                className={`inline-flex min-h-8 w-[92px] max-w-[100px] items-center justify-center gap-0.5 rounded-sm px-2 py-0.5 text-center text-[9px] uppercase leading-tight transition-colors xl:w-[108px] xl:text-[10px] ${
                  dropdownActive ? "text-white underline decoration-primary underline-offset-4" : "text-white/90 hover:text-white"
                }`}
                aria-haspopup="menu"
              >
                More
                <ChevronDown className="h-3 w-3" strokeWidth={2} aria-hidden />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-2 w-52 rounded-md bg-neutral-950 p-1.5 opacity-0 shadow-lg ring-1 ring-white/20 transition-all group-hover:visible group-hover:opacity-100">
                <ul className="space-y-0.5 normal-case tracking-normal">
                  {dropdownLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded px-2 py-1.5 text-xs transition-colors ${
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

        <div className="hidden w-[200px] shrink-0 items-center justify-end gap-1.5 xl:flex [&_button]:h-8 [&_button]:w-8 [&_button]:border-white/30 [&_button]:bg-neutral-950 [&_button]:text-white [&_button]:hover:bg-neutral-900 [&_svg]:h-3.5 [&_svg]:w-3.5">
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
