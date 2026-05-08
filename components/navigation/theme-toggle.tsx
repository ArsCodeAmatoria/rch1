"use client";

import {useTranslations} from "next-intl";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "@/components/layout/theme-provider";
import {Button} from "@/components/ui/button";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const t = useTranslations("theme");
  const dark = resolvedTheme === "dark";

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
