import type { BotanicalConcept } from "@/types/plants"

export const botanicalConcepts: Record<string, BotanicalConcept> = {
  tallo: {
    title: "El Tallo",
    subtitle: "Estructura de soporte y transporte",
    description:
      "El tallo es el órgano de las plantas que crece en sentido contrario a la raíz y sirve de sostén a las hojas, flores y frutos. Además, conduce la savia bruta desde la raíz hasta las hojas y la savia elaborada desde las hojas al resto de la planta.",
    characteristics: [
      "Puede ser herbáceo (blando y verde) o leñoso (duro y marrón)",
      "Crece en dirección a la luz (fototropismo positivo)",
      "Puede ser aéreo, subterráneo o acuático",
      "Presenta nudos y entrenudos",
    ],
    functions: [
      "Soporte mecánico para hojas, flores y frutos",
      "Transporte de agua, nutrientes y productos de la fotosíntesis",
      "Almacenamiento de sustancias de reserva",
      "En algunos casos, realiza fotosíntesis",
    ],
    imageUrl: "https://muebleslufe.com/blog/wp-content/uploads/2018/03/Muebles-LUFE-madera-maciza-lowcost-caracteristicas.jpg",
    imageCaption: "Tallo leñoso de un árbol mostrando sus anillos de crecimiento",
    wikiUrl: "https://es.wikipedia.org/wiki/Tallo",
  },
  raices: {
    title: "Las Raíces",
    subtitle: "El sistema de anclaje y absorción",
    description:
      "La raíz es el órgano generalmente subterráneo de las plantas vasculares, cuyas funciones principales son fijar la planta al suelo y absorber agua y nutrientes minerales disueltos.",
    characteristics: [
      "Crecen en dirección opuesta al tallo (geotropismo positivo)",
      "No presentan clorofila ni realizan fotosíntesis",
      "Pueden ser primarias, secundarias o adventicias",
      "Poseen pelos absorbentes que aumentan la superficie de absorción",
    ],
    functions: [
      "Anclaje de la planta al sustrato",
      "Absorción de agua y nutrientes minerales",
      "Almacenamiento de sustancias de reserva",
      "En algunos casos, reproducción vegetativa",
    ],
    imageUrl: "https://herograespeciales.com/wp-content/uploads/2020/04/partes-de-una-raz_opt.jpg",
    imageCaption: "Sistema radicular de una planta mostrando raíces principales y secundarias",
    wikiUrl: "https://es.wikipedia.org/wiki/Ra%C3%ADz_(bot%C3%A1nica)",
  },
  hojas: {
    title: "Las Hojas",
    subtitle: "Fábricas de alimento por fotosíntesis",
    description:
      "Las hojas son los órganos vegetales especializados en la fotosíntesis, proceso mediante el cual las plantas transforman la energía luminosa en energía química, produciendo oxígeno y compuestos orgánicos.",
    characteristics: [
      "Generalmente son aplanadas y de color verde por la presencia de clorofila",
      "Presentan estomas para el intercambio gaseoso",
      "Pueden tener formas, tamaños y disposiciones muy variadas",
      "Se componen de limbo (lámina), pecíolo y, en algunos casos, estípulas",
    ],
    functions: [
      "Realización de la fotosíntesis",
      "Intercambio gaseoso (respiración y transpiración)",
      "En algunas especies, almacenamiento de agua o nutrientes",
      "En plantas carnívoras, captura de insectos",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Diagram_of_simple_leaf-es.svg/1200px-Diagram_of_simple_leaf-es.svg.png",
    imageCaption: "Hoja mostrando su nervadura y estructura laminar",
    wikiUrl: "https://es.wikipedia.org/wiki/Hoja",
  },
  flores: {
    title: "Las Flores",
    subtitle: "Órganos reproductores de las angiospermas",
    description:
      "La flor es el órgano reproductor característico de las plantas angiospermas. Está formada por hojas modificadas que se disponen en verticilos o ciclos. Su función principal es producir semillas a través de la reproducción sexual.",
    characteristics: [
      "Compuestas por sépalos, pétalos, estambres y pistilo",
      "Los sépalos y pétalos son estructuras estériles de protección y atracción",
      "Los estambres (órganos masculinos) producen polen",
      "El pistilo (órgano femenino) contiene los óvulos",
    ],
    functions: [
      "Reproducción sexual de las plantas",
      "Atracción de polinizadores",
      "Protección de los órganos reproductores",
      "Tras la fecundación, desarrollo del fruto y las semillas",
    ],
    imageUrl: "https://images.unsplash.com/photo-1464982326199-86f32f81b211?q=80&w=2070&auto=format&fit=crop",
    imageCaption: "Flor mostrando sus estructuras reproductivas",
    wikiUrl: "https://es.wikipedia.org/wiki/Flor",
  },
  reproduccion: {
    title: "Reproducción Vegetal",
    subtitle: "Mecanismos de perpetuación de las especies",
    description:
      "Las plantas han desarrollado diversos mecanismos de reproducción que les permiten perpetuarse. Estos se dividen principalmente en reproducción sexual (que implica la fusión de gametos) y asexual o vegetativa (que no requiere gametos).",
    characteristics: [
      "La reproducción sexual implica polinización, fecundación y formación de semillas",
      "La reproducción asexual puede ocurrir por estolones, rizomas, bulbos, etc.",
      "La reproducción sexual favorece la variabilidad genética",
      "La reproducción asexual produce individuos genéticamente idénticos (clones)",
    ],
    functions: [
      "Perpetuación de la especie",
      "Generación de variabilidad genética (reproducción sexual)",
      "Colonización rápida de hábitats favorables (reproducción asexual)",
      "Adaptación a diferentes condiciones ambientales",
    ],
    imageUrl: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2090&auto=format&fit=crop",
    imageCaption: "Semillas, resultado de la reproducción sexual de las plantas",
    wikiUrl: "https://es.wikipedia.org/wiki/Reproducci%C3%B3n_vegetal",
  },
}
