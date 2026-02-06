import { lazy, Suspense } from "react";
import heroImage from "@/assets/barbearia-3.jpg";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { ParticleButton } from "@/components/ui/particle-button";

import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceCombo from "@/assets/service-combo.jpg";
import manicurePedicure from "@/assets/manicure-pedicure.png";

const InfiniteGallery = lazy(() => import("@/components/ui/3d-gallery-photography"));

const galleryImages = [
  serviceHaircut,
  serviceBeard,
  serviceCombo,
  manicurePedicure,
];

const HeroSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* 3D Gallery Background */}
      <Suspense
        fallback={
          <img
            src={heroImage}
            alt="Interior da Paradise Barber"
            className="absolute inset-0 w-full h-full object-cover"
          />
        }
      >
        <div className="absolute inset-0">
          <InfiniteGallery
            images={galleryImages}
            className="w-full h-full"
            speed={0.8}
            visibleCount={6}
          />
        </div>
      </Suspense>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 container-clean pb-20 pt-40 md:pb-28">
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
