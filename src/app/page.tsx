import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Korpice",
            description:
              "Premium ručno rađene korpe. Tradicionalni bosanski dizajn u modernom izdanju.",
            url: "https://korpice.ba",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sarajevo",
              addressCountry: "BA",
            },
            priceRange: "15 KM - 65 KM",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "500",
            },
          }),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
