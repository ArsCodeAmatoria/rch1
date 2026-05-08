"use client";

import {useState} from "react";
import {Menu, X} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {navigationLinks} from "@/lib/navigation-links";
import {Button} from "@/components/ui/button";
import {LanguageSwitcher} from "./language-switcher";
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
        className="border-white/30 bg-neutral-950 text-white hover:bg-neutral-900"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-20 z-50 bg-neutral-950 px-4 py-4 shadow-sm">
          <nav aria-label={t("mobileNavigation")}>
            <ul className="space-y-2">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm ${
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
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/20 pt-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
