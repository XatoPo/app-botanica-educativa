"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setIsTyping(true)

    // Resetear el estado de typing después de un tiempo
    const timeout = setTimeout(() => {
      setIsTyping(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }

  return (
    <div
      className={`relative transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <Search
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 ${isTyping ? "text-green-500 scale-110" : ""}`}
      />
      <Input
        type="text"
        placeholder="Buscar plantas..."
        value={searchTerm}
        onChange={handleChange}
        className="pl-10 transition-all duration-300 focus:border-green-500 focus:ring-green-500"
      />
    </div>
  )
}
