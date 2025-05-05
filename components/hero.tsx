"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white overflow-hidden">
      <div
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-all duration-1000 ${isLoaded ? "scale-100" : "scale-110"}`}
      ></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            Descubre el fascinante mundo de la botánica
          </h1>
          <p
            className={`text-xl mb-8 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Explora información detallada sobre árboles frutales, flores y conceptos botánicos en esta aplicación
            educativa interactiva.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <Link href="#arboles-frutales">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Árboles Frutales
              </Button>
            </Link>
            <Link href="#flores">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Flores
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
