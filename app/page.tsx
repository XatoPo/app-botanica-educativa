"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FruitTreesSection } from "@/components/fruit-trees-section"
import { FlowersSection } from "@/components/flowers-section"
import { BotanicalConcepts } from "@/components/botanical-concepts"
import { Footer } from "@/components/footer"
import { LoginModal } from "@/components/login-modal"
import { VisitCounter } from "@/components/visit-counter"
import { SearchBar } from "@/components/search-bar"
import { ScrollToTop } from "@/components/scroll-to-top"
import { fruitTrees, flowers } from "@/data/plants-data"

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFruitTrees, setFilteredFruitTrees] = useState(fruitTrees)
  const [filteredFlowers, setFilteredFlowers] = useState(flowers)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simular carga de la página
    setTimeout(() => {
      setIsLoaded(true)
    }, 300)
  }, [])

  useEffect(() => {
    if (searchTerm) {
      setFilteredFruitTrees(fruitTrees.filter((tree) => tree.name.toLowerCase().includes(searchTerm.toLowerCase())))
      setFilteredFlowers(flowers.filter((flower) => flower.name.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setFilteredFruitTrees(fruitTrees)
      setFilteredFlowers(flowers)
    }
  }, [searchTerm])

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <Hero />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2
            className={`text-2xl font-bold text-green-800 dark:text-green-500 mb-4 md:mb-0 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            Explora nuestro catálogo botánico
          </h2>
          <div
            className={`w-full md:w-1/3 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <VisitCounter />

        <div id="arboles-frutales" className="scroll-mt-20">
          <FruitTreesSection fruitTrees={filteredFruitTrees} />
        </div>

        <div id="flores" className="scroll-mt-20 mt-16">
          <FlowersSection flowers={filteredFlowers} />
        </div>

        <div id="conceptos-botanicos" className="scroll-mt-20 mt-16">
          <BotanicalConcepts />
        </div>
      </div>

      <Footer />
      <ScrollToTop />

      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </main>
  )
}
