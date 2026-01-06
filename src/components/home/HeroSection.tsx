import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="hero-section hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-clean py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 opacity-0 animate-fade-up">
              ✂️ Barbearia Premium em BH
            </span>
            
            <h1 className="headline-hero text-white mb-6 opacity-0 animate-fade-up delay-100">
              SUA MELHOR<br />
              <span className="text-white/80">VERSÃO</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg mb-10 opacity-0 animate-fade-up delay-200">
              Tradição encontra estilo moderno. Uma experiência única em cortes masculinos 
              e barba, com profissionais especializados e ambiente acolhedor.
            </p>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up delay-300">
              <a 
                href={bookingLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Agendar Agora
              </a>
              <Link 
                to="/servicos" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all bg-transparent border-2 border-white/50 text-white hover:bg-white/10"
              >
                Ver Serviços
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block opacity-0 animate-fade-up delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
              <img 
                src={heroImage} 
                alt="Paradise Barbearia" 
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
