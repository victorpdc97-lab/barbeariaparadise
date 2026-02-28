import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamSection";
import PricingSection from "@/components/home/PricingSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationSection from "@/components/home/LocationSection";

const Index = () => {
  usePageMeta({ title: "Barbearia Paradise | Barbearia Premium em Belo Horizonte", description: "Experiência premium em cortes masculinos, barba e cuidados pessoais em Belo Horizonte. Profissionais especializados no bairro Santo Agostinho." });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <TeamSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
