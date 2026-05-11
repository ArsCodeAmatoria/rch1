"use client";

import {useState} from "react";
import {Menu, X} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {navigationLinks} from "@/lib/navigation-links";
import {Button} from "@/components/ui/button";
import {ThemeToggle} from "./theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");

  return (
    <div className="xl:hidden">
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 border-white/30 bg-neutral-950 text-white hover:bg-neutral-900 [&_svg]:h-3.5 [&_svg]:w-3.5"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-14 z-50 bg-neutral-950 px-3 py-3 shadow-sm sm:top-16 sm:px-4 sm:py-3.5">
          <nav aria-label={t("mobileNavigation")}>
            <ul className="space-y-1">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-2 py-1.5 text-xs ${
                        isActive ? "bg-primary text-primary-foreground" : "text-white/85 hover:bg-neutral-900 hover:text-white"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-white/20 pt-3">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
