"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export function VisitCounter() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Obtener el contador de visitas del localStorage
    const storedCount = localStorage.getItem("visitCount")
    const initialCount = storedCount ? Number.parseInt(storedCount, 10) : 0

    // Incrementar el contador
    const newCount = initialCount + 1
    setCount(newCount)

    // Guardar el nuevo contador en localStorage
    localStorage.setItem("visitCount", newCount.toString())

    // Animación de entrada
    setTimeout(() => {
      setIsVisible(true)
    }, 300)
  }, [])

  return (
    <div
      className={`flex items-center justify-center bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <Users
        className={`h-5 w-5 text-green-600 dark:text-green-400 mr-2 transition-all duration-500 ${isVisible ? "animate-bounce" : ""}`}
      />
      <p className="text-gray-700 dark:text-gray-300">
        Esta página ha sido visitada <span className="font-bold text-green-600 dark:text-green-400">{count}</span>{" "}
        veces.
      </p>
    </div>
  )
}
