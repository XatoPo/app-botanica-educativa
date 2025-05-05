"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  username: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => void
  register: (username: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Verificar si hay un usuario en localStorage al cargar
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Error parsing stored user:", error)
        localStorage.removeItem("currentUser")
      }
    }
  }, [])

  const login = (username: string, password: string) => {
    // Obtener usuarios registrados
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Buscar el usuario
    const foundUser = users.find(
      (u: { username: string; password: string }) => u.username === username && u.password === password,
    )

    if (!foundUser) {
      throw new Error("Credenciales incorrectas")
    }

    // Guardar usuario actual en localStorage
    const userInfo = { username: foundUser.username }
    localStorage.setItem("currentUser", JSON.stringify(userInfo))
    setUser(userInfo)
  }

  const register = (username: string, password: string) => {
    // Obtener usuarios existentes
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Verificar si el usuario ya existe
    if (users.some((u: { username: string }) => u.username === username)) {
      throw new Error("El nombre de usuario ya existe")
    }

    // Añadir nuevo usuario
    const newUser = { username, password }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // No iniciamos sesión automáticamente después del registro
  }

  const logout = () => {
    localStorage.removeItem("currentUser")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}
