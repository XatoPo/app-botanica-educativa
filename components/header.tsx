"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, LogIn, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useAuth } from "@/hooks/use-auth"

interface HeaderProps {
  onLoginClick: () => void
}

export function Header({ onLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { user, logout } = useAuth()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Árboles Frutales", href: "#arboles-frutales" },
    { name: "Flores", href: "#flores" },
    { name: "Conceptos Botánicos", href: "#conceptos-botanicos" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-green-600 dark:text-green-400 text-xl font-bold transition-colors duration-300">
                Botánica Educativa
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:translate-y-[-2px] ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
                }}
                aria-label="Toggle theme"
                className={`transition-transform duration-300 hover:rotate-12 ${isVisible ? "animate-fade-in" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {user ? (
              <div
                className={`flex items-center space-x-2 ${isVisible ? "animate-fade-in" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:inline-block">
                  Hola, {user.username}
                </span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="flex items-center space-x-1 transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span>Salir</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={onLoginClick}
                variant="outline"
                className={`flex items-center space-x-1 transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: "0.6s" }}
              >
                <LogIn className="h-4 w-4 mr-1" />
                <span>Iniciar Sesión</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
                }}
                aria-label="Toggle theme"
                className="mr-2"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {user && (
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 text-green-600 dark:text-green-400"
                aria-label="Usuario"
              >
                <User className="h-5 w-5" />
              </Button>
            )}

            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <Button
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Cerrar Sesión ({user.username})</span>
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    onLoginClick()
                    setIsMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  <span>Iniciar Sesión</span>
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
