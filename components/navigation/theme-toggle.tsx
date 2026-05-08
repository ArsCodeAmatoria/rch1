"use client";

import {Moon, Sun} from "lucide-react";
import {useTranslations} from "next-intl";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const t = useTranslations("theme");
  const dark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={dark ? t("switchToLight") : t("switchToDark")}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
