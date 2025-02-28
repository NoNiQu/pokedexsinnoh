import { useState, useEffect } from "react";

type Theme = "diamond" | "pearl" | "platinum" | "system";

export function useDarkMode() {

  // El código es el de JE pero con algunos cambios para añadir los 3 temas. Puede que haga falta quitar algo, porque quité el tema system.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "diamond"; // Evita errores en SSR
    return (localStorage.getItem("theme") as Theme) || "diamond";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: diamond)");

    const applyTheme = () => {
      if (theme === "platinum") {
        document.documentElement.classList.add("platinum");
        document.documentElement.classList.remove("pearl");
      } else if (theme === "diamond") {
        document.documentElement.classList.remove("platinum");
        document.documentElement.classList.remove("pearl");
      } else if (theme === "pearl"){
        document.documentElement.classList.add("pearl");
        document.documentElement.classList.remove("platinum");
      } else {
        document.documentElement.classList.toggle("platinum", mediaQuery.matches);
      }
      localStorage.setItem("theme", theme);
    };

    applyTheme();

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "diamond") {
        document.documentElement.classList.toggle("platinum", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "diamond" ? "pearl" : prev === "pearl" ? "platinum" : "diamond"
    );
  };

  return { theme, toggleTheme };
}