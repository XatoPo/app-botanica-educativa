export interface FruitTree {
  id: number
  name: string
  scientificName: string
  plantingSeason: string
  harvestSeason: string
  fruitType: string
  imageUrl: string
  wikiUrl: string
}

export interface Flower {
  id: number
  name: string
  scientificName: string
  plantingSeason: string
  bloomingSeason: string
  color: string
  imageUrl: string
  wikiUrl: string
}

export interface BotanicalConcept {
  title: string
  subtitle: string
  description: string
  characteristics: string[]
  functions: string[]
  imageUrl: string
  imageCaption: string
  wikiUrl: string
}
