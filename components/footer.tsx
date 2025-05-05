"use client"

import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`bg-green-800 text-white py-12 mt-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={isVisible ? "animate-fade-in" : ""} style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4">Botánica Educativa</h3>
            <p className="text-green-100 mb-4">
              Una aplicación web educativa sobre árboles frutales, flores y conceptos botánicos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-green-200 transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-200 transition-colors duration-300 hover:scale-110 transform"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-200 transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className={isVisible ? "animate-fade-in" : ""} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#arboles-frutales"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Árboles Frutales
                </Link>
              </li>
              <li>
                <Link
                  href="#flores"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Flores
                </Link>
              </li>
              <li>
                <Link
                  href="#conceptos-botanicos"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Conceptos Botánicos
                </Link>
              </li>
            </ul>
          </div>

          <div className={isVisible ? "animate-fade-in" : ""} style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/Bot%C3%A1nica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Wikipedia: Botánica
                </a>
              </li>
              <li>
                <a
                  href="https://www.rjb.csic.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Real Jardín Botánico (CSIC)
                </a>
              </li>
              <li>
                <a
                  href="https://www.kew.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Royal Botanic Gardens, Kew
                </a>
              </li>
              <li>
                <a
                  href="https://www.bgci.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Botanic Gardens Conservation International
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-green-700 mt-8 pt-8 text-center text-green-200 ${isVisible ? "animate-fade-in" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <p>&copy; {new Date().getFullYear()} Botánica Educativa. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Desarrollado con fines educativos. Las imágenes utilizadas pertenecen a sus respectivos autores.
          </p>
        </div>
      </div>
    </footer>
  )
}
