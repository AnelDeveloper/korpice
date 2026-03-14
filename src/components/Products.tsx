"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: "sve", label: "Sve", color: "from-gray-500 to-gray-700" },
  { id: "rodjendanske", label: "Rođendanske", color: "from-pink-500 to-rose-600" },
  { id: "bozicne", label: "Božićne", color: "from-red-500 to-green-600" },
  { id: "bajramske", label: "Bajramske", color: "from-emerald-500 to-teal-600" },
  { id: "vaskrsne", label: "Vaskrsne", color: "from-yellow-400 to-purple-500" },
  { id: "custom", label: "Custom", color: "from-violet-500 to-fuchsia-600" },
];

const products = [
  // ROĐENDANSKE
  {
    id: 1,
    name: "Rođendansko Iznenađenje",
    category: "rodjendanske",
    price: 55,
    originalPrice: 70,
    image: "/products/birthday1.jpg",
    badge: "Najprodavanije",
    badgeColor: "bg-gradient-to-r from-pink-500 to-rose-500",
    borderColor: "hover:border-pink-300",
    tagColor: "text-pink-500",
    description:
      "Savršena korpa za rođendansku proslavu sa slatkim iznenađenjima, balonima i personaliziranom čestitkom.",
  },
  {
    id: 2,
    name: "Sreća u Korpi",
    category: "rodjendanske",
    price: 45,
    image: "/products/birthday2.jpg",
    borderColor: "hover:border-pink-300",
    tagColor: "text-pink-500",
    description:
      "Vesela rođendanska korpa puna slatkiša, čokolade i malih poklona za vaše najdraže.",
  },
  {
    id: 3,
    name: "Rođendanska Torta Korpa",
    category: "rodjendanske",
    price: 70,
    image: "/products/birthday3.jpg",
    badge: "Novo",
    badgeColor: "bg-gradient-to-r from-orange-400 to-pink-500",
    borderColor: "hover:border-pink-300",
    tagColor: "text-pink-500",
    description:
      "Spektakularna korpa sa mini tortom, svjećicama, konfetama i personaliziranim baloncima.",
  },
  // BOŽIĆNE
  {
    id: 4,
    name: "Božićna Čarolija",
    category: "bozicne",
    price: 65,
    image: "/products/christmas1.jpg",
    badge: "Sezonski Hit",
    badgeColor: "bg-gradient-to-r from-red-500 to-green-600",
    borderColor: "hover:border-red-300",
    tagColor: "text-red-500",
    description:
      "Tradicionalna božićna korpa sa kuvanim vinom, kolačima, ukrasima i toplim šalom.",
  },
  {
    id: 5,
    name: "Zimska Bajka",
    category: "bozicne",
    price: 75,
    originalPrice: 90,
    image: "/products/christmas2.jpg",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-amber-500 to-red-500",
    borderColor: "hover:border-red-300",
    tagColor: "text-red-500",
    description:
      "Luksuzna božićna korpa sa premium čokoladom, svjećama, ornamentima i toplim čajem.",
  },
  {
    id: 6,
    name: "Božićni Premium Set",
    category: "bozicne",
    price: 95,
    image: "/products/christmas3.jpg",
    badge: "Limitirano",
    badgeColor: "bg-gradient-to-r from-red-600 to-amber-500",
    borderColor: "hover:border-red-300",
    tagColor: "text-red-500",
    description:
      "Limitirano izdanje božićne korpe sa premium poklonima, šampanjcem i ručno rađenim ukrasom.",
  },
  // BAJRAMSKE
  {
    id: 7,
    name: "Bajramska Radost",
    category: "bajramske",
    price: 60,
    image: "/products/bayram1.jpg",
    badge: "Tradicija",
    badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    borderColor: "hover:border-emerald-300",
    tagColor: "text-emerald-600",
    description:
      "Bajramska korpa sa tradicionalnim slatkišima, hurmama, baklavom i posebnim čajem.",
  },
  {
    id: 8,
    name: "Eid Mubarak Korpa",
    category: "bajramske",
    price: 50,
    image: "/products/bayram2.jpg",
    borderColor: "hover:border-emerald-300",
    tagColor: "text-emerald-600",
    description:
      "Elegantna korpa sa hurmama, turskom kahvom, lokumima i zlatnim detaljima.",
  },
  // VASKRSNE
  {
    id: 9,
    name: "Vaskrsnja Korpa",
    category: "vaskrsne",
    price: 55,
    image: "/products/easter1.jpg",
    badge: "Sezonski",
    badgeColor: "bg-gradient-to-r from-yellow-400 to-purple-500",
    borderColor: "hover:border-purple-300",
    tagColor: "text-purple-500",
    description:
      "Šarena vaskrsnja korpa sa farbenim jajima, čokoladnim zečićima i proljetnim cvijećem.",
  },
  {
    id: 10,
    name: "Proljetni Poklon",
    category: "vaskrsne",
    price: 40,
    image: "/products/easter2.jpg",
    borderColor: "hover:border-purple-300",
    tagColor: "text-purple-500",
    description:
      "Vesela korpa sa proljetnim motivima, slatkišima i šarenim ukrasima za cijelu porodicu.",
  },
  // CUSTOM
  {
    id: 11,
    name: "Tvoja Jedinstvena Korpa",
    category: "custom",
    price: 80,
    image: "/products/custom1.jpg",
    badge: "Personaliziraj",
    badgeColor: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    borderColor: "hover:border-fuchsia-300",
    tagColor: "text-fuchsia-500",
    description:
      "Potpuno prilagodljiva korpa — ti biraš boje, sadržaj, veličinu i personaliziranu poruku.",
  },
  {
    id: 12,
    name: "Luxury Custom Box",
    category: "custom",
    price: 120,
    originalPrice: 150,
    image: "/products/custom2.jpg",
    badge: "VIP",
    badgeColor: "bg-gradient-to-r from-amber-500 to-fuchsia-500",
    borderColor: "hover:border-fuchsia-300",
    tagColor: "text-fuchsia-500",
    description:
      "Premium custom korpa sa luksuznim materijalima, gravurom i ekskluzivnim sadržajem po vašem izboru.",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("sve");

  const filteredProducts =
    activeCategory === "sve"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="proizvodi" className="relative overflow-hidden bg-white py-24">
      {/* Colorful background decorations */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest">
            <span className="bg-gradient-to-r from-primary via-secondary to-teal bg-clip-text text-transparent">
              Kolekcija
            </span>
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Naše Poklon Korpe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Za svaki poseban trenutak — od rođendana do praznika. Izaberite
            kategoriju ili kreirajte svoju jedinstvenu korpu.
          </p>
        </motion.div>

        {/* Category Filter - Colorful Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : "bg-gray-100 text-text-light hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group overflow-hidden rounded-2xl border-2 border-transparent bg-white shadow-sm transition-all duration-300 hover:shadow-2xl ${product.borderColor}`}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {product.badge && (
                    <span
                      className={`absolute left-4 top-4 z-10 rounded-full ${product.badgeColor} px-3 py-1 text-xs font-bold text-white shadow-md`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110">
                      <Eye className="h-5 w-5 text-text" />
                    </button>
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110">
                      <Heart className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className={`text-xs font-bold uppercase tracking-wider ${product.tagColor}`}>
                    {categories.find((c) => c.id === product.category)?.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        {product.price} <span className="text-base">KM</span>
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-text-lighter line-through">
                          {product.originalPrice} KM
                        </span>
                      )}
                    </div>
                    <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110">
                      <ShoppingCart className="h-4 w-4" />
                      Dodaj
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-secondary-light px-10 py-4 text-base font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:shadow-xl hover:brightness-110"
          >
            Naruči Custom Korpu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
