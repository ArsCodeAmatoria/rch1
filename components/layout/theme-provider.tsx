"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  const resolved = theme === "system" ? getSystemTheme() : theme;
  root.classList.toggle("dark", resolved === "dark");
  return resolved;
}

function subscribeToSystemThemeChange(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useSystemTheme(): "light" | "dark" {
  return React.useSyncExternalStore(
    subscribeToSystemThemeChange,
    getSystemTheme,
    () => "light"
  );
}

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "system";
    }
    return (localStorage.getItem("theme") as Theme | null) ?? "system";
  });
  const systemTheme = useSystemTheme();
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  React.useEffect(() => {
    applyThemeClass(theme);
  }, [theme, systemTheme]);

  const setTheme = React.useCallback((nextTheme: Theme) => {
    localStorage.setItem("theme", nextTheme);
    setThemeState(nextTheme);
  }, []);

  return <ThemeContext.Provider value={{theme, resolvedTheme, setTheme}}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
