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
    <div className="md:hidden">
      <Button
        size="icon"
        variant="outline"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-50 border-b border-border bg-background px-4 py-4 shadow-sm">
          <nav aria-label={t("mobileNavigation")}>
            <ul className="space-y-2">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm ${
                        isActive ? "bg-accent text-accent-foreground" : "text-foreground/85 hover:bg-accent"
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
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
