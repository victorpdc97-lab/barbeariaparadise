import { Link } from "react-router-dom";
import heroImage from "@/assets/barbearia-3.jpg";

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Interior da Paradise Barber"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 container-clean pb-20 pt-40 md:pb-28">
        <div className="max-w-2xl">
          <div className="gold-line mb-6 opacity-0 animate-fade-up" />
          
          <h1 className="headline-hero text-white mb-6 opacity-0 animate-fade-up delay-100">
            Sua melhor<br />
            <span className="italic text-white/90">versão</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/70 max-w-lg mb-10 opacity-0 animate-fade-up delay-200 leading-relaxed">
            Onde tradição e modernidade se encontram. Experiência única em cortes 
            masculinos e barba, com profissionais especializados.
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up delay-300">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base"
            >
              Agendar Horário
            </a>
            <Link
              to="/servicos"
              className="btn-outline border-white/30 text-white hover:border-white/60 px-8 py-4 text-base"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
