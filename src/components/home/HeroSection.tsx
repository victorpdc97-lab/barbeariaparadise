import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";
import heroImage from "@/assets/hero-barbearia.jpg";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.2 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: particle.left,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  return <section className="hero-section min-h-[85vh] flex items-center justify-center overflow-hidden relative">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Interior da Paradise Barber" 
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns" 
        />
      </div>
      
      {/* Animated Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 animate-breathe" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-white/15 rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-white/10 rounded-full" />
        
        {/* Large decorative scissors icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <Scissors className="w-[500px] h-[500px] rotate-45" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-clean py-20 text-center">
        
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-up delay-100 tracking-tight">
          SUA MELHOR<br />
          <span className="text-white/85">VERSÃO</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-200 leading-relaxed">
          Tradição encontra estilo moderno. Uma experiência única em cortes masculinos 
          e barba, com profissionais especializados e ambiente acolhedor.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
          <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105">
            Agendar Agora
          </a>
          <Link to="/servicos" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60">
            Ver Serviços
          </Link>
        </div>
      </div>
    </section>;
};
export default HeroSection;