import { ShoppingBag, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold">Korpice</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium ručno rađene korpe za svaki poseban trenutak.
              Od rođendana do Bajrama — mi imamo savršen poklon.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Brzi Linkovi
            </h3>
            <ul className="mt-4 space-y-3">
              {["Početna", "O nama", "Proizvodi", "Recenzije"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Kategorije
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Rođendanske Korpe",
                "Božićne Korpe",
                "Bajramske Korpe",
                "Vaskrsne Korpe",
                "Custom Korpe",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#proizvodi"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-pink-400" />
                info@korpice.ba
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-green-400" />
                +387 61 123 456
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-blue-400" />
                Sarajevo, Bosna i Hercegovina
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Korpice. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
