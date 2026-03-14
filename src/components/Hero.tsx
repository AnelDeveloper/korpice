"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Prekrasne poklon korpe"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay with gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Colorful accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-24 text-center lg:w-1/2 lg:pt-0 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-accent-light" />
            <span className="text-white">
              Ručno rađeno sa ljubavlju
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Unikatne{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-light via-primary-light to-accent bg-clip-text text-transparent">
                Korpice
              </span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-gradient-to-r from-accent-light/30 via-primary-light/30 to-accent/30 lg:bottom-2 lg:h-4" />
            </span>{" "}
            za Svaki Povod
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80 lg:mx-0 lg:text-xl">
            Od rođendana do Bajrama, od Božića do Vaskrsa — kreiramo
            posebne poklon korpe koje ostavljaju bez daha. Svaka je
            ručno izrađena sa pažnjom i ljubavlju.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#proizvodi"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
            >
              Pogledaj Kolekciju
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#o-nama"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              Saznaj Više
            </a>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {[
                "from-primary to-pink-400",
                "from-secondary to-purple-400",
                "from-teal to-emerald-400",
                "from-accent to-yellow-400",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-gradient-to-br ${gradient} text-xs font-bold text-white shadow-md`}
                >
                  {["A", "M", "S", "E"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent-light text-accent-light"
                  />
                ))}
              </div>
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">500+</span>{" "}
                zadovoljnih kupaca
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Featured product card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 lg:mt-0 lg:w-1/2"
        >
          <div className="relative mx-auto aspect-square max-w-lg">
            {/* Glowing ring behind */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 blur-2xl" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl backdrop-blur-sm">
              <Image
                src="/hero-product.jpg"
                alt="Premium poklon korpa sa cvijećem i poklonima"
                width={800}
                height={533}
                className="aspect-square object-cover"
                priority
              />
              {/* Subtle color overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Label on image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="font-serif text-xl font-semibold text-white">
                  Premium Kolekcija 2025
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Ručno rađene korpe za svaku priliku
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-1/4 rounded-2xl border border-white/20 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-text-lighter">Cijena od</p>
              <p className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-xl font-bold text-transparent">
                15 KM
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-1/4 rounded-2xl border border-white/20 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-text-lighter">Dostava</p>
              <p className="text-xl font-bold text-teal">Besplatna</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-8 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-2 text-sm font-bold text-white shadow-lg"
            >
              Novo 2025!
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
