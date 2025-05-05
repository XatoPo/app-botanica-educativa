"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Asegurarse de que el tema se aplique correctamente
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Forzar el modo claro/oscuro para depuración y asegurar que funcione
  React.useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        document.documentElement.classList.toggle("dark", savedTheme === "dark")
      }

      // Observar cambios en el tema
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            const isDark = document.documentElement.classList.contains("dark")
            localStorage.setItem("theme", isDark ? "dark" : "light")
          }
        })
      })

      observer.observe(document.documentElement, { attributes: true })

      return () => {
        observer.disconnect()
      }
    }
  }, [mounted])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
