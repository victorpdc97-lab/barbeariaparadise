import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { ParticleButton } from "@/components/ui/particle-button";
import SpiralAnimation from "@/components/SpiralAnimation";

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Spiral Animation Background */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 container-clean pb-20 pt-40 md:pb-28 mb-[20vh]">
        <div className="max-w-2xl">
          <div className="gold-line mb-6 opacity-0 animate-fade-up" />
          
          <h1 className="headline-hero text-white mb-6 opacity-0 animate-fade-up delay-100">
            Sua melhor<br />
            <AnimatedText
              text="versão"
              textClassName="italic text-white/90"
              underlineClassName="h-3 text-white/70"
              underlineDuration={1.5}
            />
          </h1>
          
          <p className="text-base md:text-lg text-white/70 max-w-lg mb-10 opacity-0 animate-fade-up delay-200 leading-relaxed">
            Onde tradição e modernidade se encontram. Experiência única em cortes 
            masculinos e barba, com profissionais especializados.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
