"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { botanicalConcepts } from "@/data/botanical-concepts"

export function BotanicalConcepts() {
  const [activeTab, setActiveTab] = useState("tallo")
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
      <h2
        className={`text-3xl font-bold text-amber-700 dark:text-amber-500 mb-4 ${isVisible ? "animate-fade-in" : ""}`}
      >
        Conceptos Botánicos
      </h2>
      <p
        className={`text-gray-600 dark:text-gray-300 mb-6 max-w-3xl ${isVisible ? "animate-fade-in" : ""}`}
        style={{ animationDelay: "0.1s" }}
      >
        Aprende los conceptos fundamentales de la botánica para entender mejor el mundo de las plantas.
      </p>

      <Tabs
        defaultValue="tallo"
        className={`w-full ${isVisible ? "animate-fade-in" : ""}`}
        style={{ animationDelay: "0.2s" }}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
          <TabsTrigger
            value="tallo"
            className="transition-all duration-300 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Tallo
          </TabsTrigger>
          <TabsTrigger
            value="raices"
            className="transition-all duration-300 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Raíces
          </TabsTrigger>
          <TabsTrigger
            value="hojas"
            className="transition-all duration-300 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Hojas
          </TabsTrigger>
          <TabsTrigger
            value="flores"
            className="transition-all duration-300 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Flores
          </TabsTrigger>
          <TabsTrigger
            value="reproduccion"
            className="transition-all duration-300 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
          >
            Reproducción
          </TabsTrigger>
        </TabsList>

        {Object.entries(botanicalConcepts).map(([key, concept]) => (
          <TabsContent
            key={key}
            value={key}
            className={`mt-4 transition-all duration-500 ${activeTab === key ? "animate-fade-in" : ""}`}
          >
            <Card className="transition-all duration-500 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{concept.title}</CardTitle>
                <CardDescription>{concept.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{concept.description}</p>
                    <h4 className="font-bold mb-2">Características principales:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {concept.characteristics.map((char, index) => (
                        <li
                          key={index}
                          className="transition-all duration-300 hover:translate-x-1"
                          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                        >
                          {char}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-bold mb-2">Funciones:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.functions.map((func, index) => (
                        <li
                          key={index}
                          className="transition-all duration-300 hover:translate-x-1"
                          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                        >
                          {func}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href={concept.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                      >
                        Más información en Wikipedia
                      </a>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden group">
                    <Image
                      src={concept.imageUrl || "/placeholder.svg?height=400&width=600"}
                      alt={concept.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback para imágenes con error
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=600"
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                      {concept.imageCaption}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
