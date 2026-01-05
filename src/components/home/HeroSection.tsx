import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-barbershop.jpg";
import barberAtWork from "@/assets/barber-at-work.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import logoParadise from "@/assets/logo-paradise.png";

const slides = [
  {
    image: heroImage,
    title: "PARADISE",
    subtitle: "BARBEARIA",
  },
  {
    image: barberAtWork,
    title: "TRADIÇÃO",
    subtitle: "& ESTILO",
  },
  {
    image: barbershopInterior,
    title: "EXPERIÊNCIA",
    subtitle: "PREMIUM",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-fullscreen">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center">
        <img 
          src={logoParadise} 
          alt="Paradise Barbearia" 
          className="h-40 md:h-56 lg:h-72 w-auto mx-auto animate-fade-up"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-foreground w-8" 
                : "bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
