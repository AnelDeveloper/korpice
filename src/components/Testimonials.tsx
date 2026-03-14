"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amina Hadžić",
    location: "Sarajevo",
    rating: 5,
    text: "Naručila sam bajramsku korpu za svekrvu i bila je oduševljena! Kvalitet je izvanredan, a pažnja prema detaljima je nevjerovatna. Definitivno ću naručiti ponovo.",
    initial: "A",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
  },
  {
    name: "Mirza Begović",
    location: "Tuzla",
    rating: 5,
    text: "Već sam naručio 3 custom korpe za različite prilike. Svaki put sam bio zadovoljan kvalitetom i brzinom dostave. Preporučujem svima!",
    initial: "M",
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    name: "Selma Kovačević",
    location: "Mostar",
    rating: 5,
    text: "Rođendanska korpa koju sam naručila za sestru je bila savršena! Personalizirana poruka i predivan sadržaj. Hvala vam na predivnom iskustvu!",
    initial: "S",
    gradient: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    name: "Emir Delić",
    location: "Zenica",
    rating: 5,
    text: "Božićna korpa je bila hit na porodičnom okupljanju! Svi su pitali odakle. Odličan odnos kvaliteta i cijene, a dostava je stigla dan ranije.",
    initial: "E",
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
];

export default function Testimonials() {
  return (
    <section id="recenzije" className="relative overflow-hidden py-24">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" />
      <div className="absolute -left-20 top-1/2 h-60 w-60 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute -right-20 top-1/3 h-60 w-60 rounded-full bg-orange-200/30 blur-3xl" />

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
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Recenzije
            </span>
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Šta Kažu Naši Kupci
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Vaše zadovoljstvo je naša najveća nagrada. Evo šta naši kupci
            kažu o iskustvu sa Korpice.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border-2 ${testimonial.borderColor} ${testimonial.bgColor} p-8 transition-all duration-300 hover:shadow-xl`}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-black/5" />

              {/* Decorative corner gradient */}
              <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-10`} />

              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="mt-4 text-base leading-relaxed text-text-light">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white shadow-md`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-light">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
