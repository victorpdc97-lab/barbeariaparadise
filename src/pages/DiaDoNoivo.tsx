import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart } from "lucide-react";

import diaNoivo1 from "@/assets/dia-noivo-1.png";
import diaNoivo2 from "@/assets/dia-noivo-2.png";
import diaNoivo3 from "@/assets/dia-noivo-3.png";
import diaNoivo4 from "@/assets/dia-noivo-4.png";
import diaNoivo5 from "@/assets/dia-noivo-5.png";
import diaNoivo6 from "@/assets/dia-noivo-6.png";
import diaNoivo7 from "@/assets/dia-noivo-7.png";
import diaNoivo8 from "@/assets/dia-noivo-8.png";

const DiaDoNoivo = () => {
  const whatsappLink = "https://wa.me/553186595481?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Dia%20do%20Noivo";

  const images = [
    diaNoivo1,
    diaNoivo2,
    diaNoivo3,
    diaNoivo4,
    diaNoivo5,
    diaNoivo6,
    diaNoivo7,
    diaNoivo8,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-clean text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Experiência Exclusiva</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Dia do Noivo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Uma experiência única e inesquecível para o seu grande dia. 
              Preparamos tudo para que você esteja impecável no momento mais importante da sua vida.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-12">
          <div className="container-clean">
            <div className="flex flex-col gap-0">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Dia do Noivo - Imagem ${index + 1}`}
                  className="w-full h-auto"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container-clean text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agende seu Dia do Noivo
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Entre em contato conosco e garanta uma experiência premium para o seu casamento.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DiaDoNoivo;
