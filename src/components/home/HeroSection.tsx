import { Button } from "@/components/ui/button";
import { Calendar, Scissors } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Barbearia Paradise - Ambiente Premium" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-up">
            <Scissors size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Barbearia Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-up delay-100">
            SEU ESTILO,{" "}
            <span className="text-primary">NOSSO RITUAL</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Transformamos cada visita em uma experiência única. Profissionais especializados, 
            ambiente premium e resultados impecáveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Calendar size={20} />
                AGENDAR AGORA
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="text-background border-background/60 hover:bg-background/10" asChild>
              <a href="#servicos">
                VER SERVIÇOS
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;