"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Truck, Award, Palette, Shield } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Ručni Rad",
    description:
      "Svaka korpa je pažljivo ručno izrađena od strane naših majstora sa višegodišnjim iskustvom.",
    color: "bg-gradient-to-br from-pink-100 to-rose-50",
    iconColor: "text-pink-500",
    borderHover: "hover:border-pink-200",
  },
  {
    icon: Leaf,
    title: "Prirodni Materijali",
    description:
      "Koristimo isključivo prirodne i ekološki prihvatljive materijale za izradu naših korpi.",
    color: "bg-gradient-to-br from-emerald-100 to-green-50",
    iconColor: "text-emerald-500",
    borderHover: "hover:border-emerald-200",
  },
  {
    icon: Truck,
    title: "Brza Dostava",
    description:
      "Besplatna dostava za sve narudžbe preko 50 KM. Isporuka u roku od 2-3 radna dana.",
    color: "bg-gradient-to-br from-blue-100 to-sky-50",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-200",
  },
  {
    icon: Award,
    title: "Premium Kvalitet",
    description:
      "Garantujemo najviši kvalitet svakog proizvoda. Vaše zadovoljstvo je naš prioritet.",
    color: "bg-gradient-to-br from-amber-100 to-yellow-50",
    iconColor: "text-amber-500",
    borderHover: "hover:border-amber-200",
  },
  {
    icon: Palette,
    title: "Personalizacija",
    description:
      "Prilagodite svoju korpu prema vašim željama - boje, veličina, dodaci i gravura.",
    color: "bg-gradient-to-br from-violet-100 to-purple-50",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-200",
  },
  {
    icon: Shield,
    title: "Garancija",
    description:
      "30 dana garancija na sve proizvode. Niste zadovoljni? Vratite bez problema.",
    color: "bg-gradient-to-br from-teal-100 to-cyan-50",
    iconColor: "text-teal-500",
    borderHover: "hover:border-teal-200",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="o-nama" className="relative overflow-hidden bg-cream py-24">
      {/* Decorative blobs */}
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-pink-100/60 to-purple-100/40 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gradient-to-br from-teal-100/60 to-yellow-100/40 blur-3xl" />

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
              Zašto Mi
            </span>
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Zašto Odabrati Korpice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Spajamo tradiciju i moderan dizajn kako bismo vam donijeli
            proizvode koji će uljepšati svaki trenutak.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group rounded-2xl border-2 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${feature.borderHover}`}
            >
              <div
                className={`inline-flex rounded-2xl p-4 ${feature.color}`}
              >
                <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-text-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats - Vibrant gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 gap-8 rounded-3xl bg-gradient-to-r from-primary via-secondary to-teal p-10 text-white shadow-2xl md:grid-cols-4"
        >
          {[
            { value: "500+", label: "Zadovoljnih Kupaca" },
            { value: "1000+", label: "Prodatih Korpi" },
            { value: "50+", label: "Dizajnova" },
            { value: "5★", label: "Prosječna Ocjena" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
