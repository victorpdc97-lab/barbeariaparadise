import { Button } from "@/components/ui/button";
import { MessageCircle, Scissors } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20na%20Barbearia%20Paradise.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barbearia Paradise - Ambiente Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-up">
            <Scissors size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Barbearia Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Seu Estilo,{" "}
            <span className="text-gradient-gold">Nosso Ritual</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Transformamos cada visita em uma experiência única. Profissionais especializados, 
            ambiente premium e resultados impecáveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar no WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#servicos">
                Ver Serviços
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
