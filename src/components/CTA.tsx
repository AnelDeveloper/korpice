"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section id="kontakt" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-teal p-10 text-white shadow-2xl sm:p-16"
        >
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute right-1/3 top-1/2 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Budite Prvi koji će Saznati
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Prijavite se na naš newsletter i dobijte{" "}
              <span className="font-bold text-accent-light">10% popusta</span>{" "}
              na prvu narudžbu, plus ekskluzivne ponude i novosti o novim
              kolekcijama.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="flex-1 rounded-full bg-white/15 px-6 py-4 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Prijavi se
              </button>
            </form>
            <p className="mt-4 text-sm text-white/50">
              Nikad nećemo dijeliti vaš email. Odjavite se bilo kada.
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: Phone,
              title: "Telefon",
              text: "+387 61 123 456",
              subtext: "Pon - Pet, 9:00 - 17:00",
              gradient: "from-pink-500 to-rose-500",
              bg: "bg-pink-50",
            },
            {
              icon: Mail,
              title: "Email",
              text: "info@korpice.ba",
              subtext: "Odgovaramo u roku 24h",
              gradient: "from-blue-500 to-indigo-500",
              bg: "bg-blue-50",
            },
            {
              icon: MapPin,
              title: "Lokacija",
              text: "Sarajevo, BiH",
              subtext: "Dostava širom BiH",
              gradient: "from-emerald-500 to-teal-500",
              bg: "bg-emerald-50",
            },
            {
              icon: Clock,
              title: "Radno Vrijeme",
              text: "Pon - Pet: 9-17h",
              subtext: "Sub: 10-14h",
              gradient: "from-amber-500 to-orange-500",
              bg: "bg-amber-50",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 rounded-2xl ${item.bg} p-6 transition-all hover:shadow-md`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {item.text}
                </p>
                <p className="text-xs text-text-lighter">{item.subtext}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
