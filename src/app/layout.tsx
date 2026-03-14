import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Korpice | Premium Handmade Korpe - Tradicionalne Bosanske Korpe",
  description:
    "Otkrijte našu kolekciju premium ručno rađenih korpi. Tradicionalni bosanski dizajn u modernom izdanju. Besplatna dostava za narudžbe preko 50 KM.",
  keywords: [
    "korpice",
    "korpe",
    "ručno rađene korpe",
    "bosanske korpe",
    "tradicionalne korpe",
    "handmade baskets",
    "home decor",
    "poklon korpe",
  ],
  openGraph: {
    title: "Korpice | Premium Handmade Korpe",
    description:
      "Otkrijte našu kolekciju premium ručno rađenih korpi. Tradicionalni bosanski dizajn u modernom izdanju.",
    type: "website",
    locale: "bs_BA",
    siteName: "Korpice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korpice | Premium Handmade Korpe",
    description:
      "Otkrijte našu kolekciju premium ručno rađenih korpi. Tradicionalni bosanski dizajn u modernom izdanju.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
