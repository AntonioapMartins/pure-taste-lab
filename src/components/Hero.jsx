import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-rural.jpg";
import alojamentoImage from "@/assets/alojamento.jpg";
import kartodromoImage from "@/assets/kartodromo.jpg";
import restauranteImage from "@/assets/restaurante.jpg";

const slides = [heroImage, alojamentoImage, kartodromoImage, restauranteImage];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      {/* Title */}
      <div className="text-center py-8 bg-background">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground tracking-wide">
          RILHADAS <span className="text-primary">TURISMO</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-2 italic font-serif">
          …nos seus desejos, nascem as nossas melhores ideias.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide}
              alt={`Rilhadas Turismo ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
