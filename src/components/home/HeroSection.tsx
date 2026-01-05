import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-11 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Paradise Barbearia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-apple text-white">
        <p className="eyebrow-apple text-white/70 mb-4 animate-fade-up">
          Barbearia Paradise
        </p>
        
        <h1 className="headline-apple text-white mb-6 animate-fade-up delay-100">
          Tradição encontra<br />estilo moderno.
        </h1>
        
        <p className="subheadline-apple text-white/80 max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
          Uma experiência única em cortes masculinos e barba, inspirada nas clássicas barbearias nova-iorquinas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a 
            href={bookingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-apple-primary"
          >
            Agendar agora
          </a>
          <Link to="/servicos" className="link-apple text-white hover:text-white/80">
            Ver serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
