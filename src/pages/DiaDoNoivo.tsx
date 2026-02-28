import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { WHATSAPP_URL } from "@/lib/constants";

import diaNoivo1 from "@/assets/dia-noivo-1.png";
import diaNoivo2 from "@/assets/dia-noivo-2.png";
import diaNoivo3 from "@/assets/dia-noivo-3.png";
import diaNoivo4 from "@/assets/dia-noivo-4.png";
import diaNoivo5 from "@/assets/dia-noivo-5.png";
import diaNoivo6 from "@/assets/dia-noivo-6.png";
import diaNoivo7 from "@/assets/dia-noivo-7.png";
import diaNoivo8 from "@/assets/dia-noivo-8.png";

const DiaDoNoivo = () => {
  usePageMeta({ title: "Dia do Noivo | Barbearia Paradise", description: "Pacote especial Dia do Noivo. Cuide de cada detalhe para o grande dia com a Barbearia Paradise." });

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
      
      <main className="pt-20">
        {/* Page Title */}
        <section className="py-8 bg-background">
          <div className="container-clean">
            <h1 className="text-3xl font-bold text-foreground">Dia do Noivo</h1>
          </div>
        </section>

        {/* Images Section */}
        <section className="pb-8">
          <div className="container-clean">
            <div className="flex flex-col gap-0">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Dia do Noivo - Imagem ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto"
                />
              ))}
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-8 text-center flex justify-center">
              <InteractiveHoverButton href={WHATSAPP_URL} target="_blank" text="Fale conosco pelo WhatsApp" className="w-72" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DiaDoNoivo;
