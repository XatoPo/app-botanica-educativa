"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { FruitTree } from "@/types/plants"

interface FruitTreesSectionProps {
  fruitTrees: FruitTree[]
}

export function FruitTreesSection({ fruitTrees }: FruitTreesSectionProps) {
  const [view, setView] = useState<"cards" | "table">("cards")
  const sectionRef = useRef<HTMLElement>(null)
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className={isVisible ? "animate-fade-in" : ""}>
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-500 mb-2">Árboles Frutales</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Descubre información detallada sobre diferentes árboles frutales, sus períodos de siembra, cosecha y
            características.
          </p>
        </div>
        <div className={`mt-4 md:mt-0 ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.2s" }}>
          <div className="flex space-x-2">
            <button
              onClick={() => setView("cards")}
              className={`px-3 py-1 rounded-md transition-all duration-300 ${
                view === "cards"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Tarjetas
            </button>
            <button
              onClick={() => setView("table")}
              className={`px-3 py-1 rounded-md transition-all duration-300 ${
                view === "table"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Tabla
            </button>
          </div>
        </div>
      </div>

      {fruitTrees.length === 0 ? (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">
            No se encontraron árboles frutales con ese criterio de búsqueda.
          </p>
        </div>
      ) : view === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fruitTrees.map((tree, index) => (
            <Card
              key={tree.id}
              className={`overflow-hidden hover:shadow-lg transition-all duration-500 ${
                isVisible ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={tree.imageUrl || "/placeholder.svg?height=200&width=400"}
                  alt={tree.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    // Fallback para imágenes con error
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=200&width=400"
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">{tree.name}</CardTitle>
                <CardDescription>{tree.scientificName}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Siembra:</span>
                    <span>{tree.plantingSeason}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Cosecha:</span>
                    <span>{tree.harvestSeason}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tipo de fruto:</span>
                    <span>{tree.fruitType}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href={tree.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm transition-colors duration-300"
                >
                  Más información en Wikipedia
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div
          className={`overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Nombre Científico</TableHead>
                <TableHead>Período de Siembra</TableHead>
                <TableHead>Período de Cosecha</TableHead>
                <TableHead>Tipo de Fruto</TableHead>
                <TableHead>Más Info</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fruitTrees.map((tree, index) => (
                <TableRow
                  key={tree.id}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 ${
                    isVisible ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <TableCell className="font-medium">{tree.name}</TableCell>
                  <TableCell className="italic">{tree.scientificName}</TableCell>
                  <TableCell>{tree.plantingSeason}</TableCell>
                  <TableCell>{tree.harvestSeason}</TableCell>
                  <TableCell>{tree.fruitType}</TableCell>
                  <TableCell>
                    <a
                      href={tree.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                    >
                      Wikipedia
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  )
}
