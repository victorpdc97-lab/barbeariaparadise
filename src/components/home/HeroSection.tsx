import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="hero-fullscreen">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Paradise Barbearia" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-cinema">
        <div className="max-w-4xl">
          <h1 className="headline-hero text-foreground mb-8 opacity-0 animate-fade-up">
            BARBEARIA<br />
            <span className="text-muted-foreground">SEM LIMITES</span>
          </h1>
          
          <p className="body-text max-w-xl mb-10 opacity-0 animate-fade-up delay-200">
            Tradição encontra estilo moderno. Uma experiência única em cortes masculinos 
            e barba, inspirada nas clássicas barbearias nova-iorquinas.
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up delay-300">
            <a 
              href={bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Agora
            </a>
            <Link to="/servicos" className="btn-outline">
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-500">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
