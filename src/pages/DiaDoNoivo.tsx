import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Scissors, Sparkles, Wine, Car, Users, DollarSign } from "lucide-react";

import diaNoivo1 from "@/assets/dia-noivo-1.webp";
import diaNoivo2 from "@/assets/dia-noivo-2.webp";
import diaNoivo3 from "@/assets/dia-noivo-3.webp";
import diaNoivo4 from "@/assets/dia-noivo-4.webp";
import diaNoivo5 from "@/assets/dia-noivo-5.webp";
import diaNoivo6 from "@/assets/dia-noivo-6.webp";
import diaNoivo7 from "@/assets/dia-noivo-7.webp";
import diaNoivo8 from "@/assets/dia-noivo-8.webp";

const services = [
  { icon: Scissors, text: "Cortes de cabelo" },
  { icon: Sparkles, text: "Barba" },
  { icon: Sparkles, text: "Sobrancelha" },
  { icon: Sparkles, text: "Limpeza de pele" },
  { icon: Sparkles, text: "Massagem" },
  { icon: Sparkles, text: "Finalização" },
];

const experience = [
  { icon: Sparkles, text: "Tratamentos completos por profissionais especializados" },
  { icon: Wine, text: "Bar completo e sinuca à vontade para os convidados" },
  { icon: Car, text: "Estacionamento na porta para sua comodidade" },
  { icon: Users, text: "Consultoria exclusiva para o noivo, cada detalhe perfeito" },
];

const galleryImages = [
  { src: diaNoivo1, alt: "Dia do Noivo, Capa do pacote especial Barbearia Paradise" },
  { src: diaNoivo2, alt: "Paradise, Marca de moda masculina fundada em 2013" },
  { src: diaNoivo3, alt: "Barbearia Paradise, Espaço moderno e diferenciado" },
  { src: diaNoivo4, alt: "Dia do Noivo no Paraíso, Experiência exclusiva para o casamento" },
  { src: diaNoivo5, alt: "Experiência, Bar, sinuca, vestiário e tratamentos completos" },
  { src: diaNoivo6, alt: "Serviços inclusos, Corte, barba, massagem, limpeza de pele e mais" },
  { src: diaNoivo7, alt: "Valores, R$150 por pessoa, formato Day Use" },
  { src: diaNoivo8, alt: "Agendamento, Reserve sua data pelo WhatsApp" },
];

const DiaDoNoivo = () => {
  usePageMeta({
    title: "Dia do Noivo | Barbearia Paradise",
    description:
      "Pacote especial Dia do Noivo. Experiência exclusiva para o noivo e padrinhos com corte, barba, massagem e mais. Grupos a partir de 3 pessoas. R$150/pessoa.",
  });

  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho interesse no pacote Dia do Noivo. Gostaria de saber mais detalhes e agendar uma data."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-foreground">
        <div className="relative z-10 container-clean py-16 lg:py-24">
          <div className="max-w-2xl">
            <div
              className="gold-line mb-6 animate-fade-up"
              style={{ background: "hsl(0 0% 100%)" }}
            />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50 mb-4 animate-fade-up delay-100">
              Pacote Especial
            </p>
            <h1 className="headline-hero text-primary-foreground mb-6 animate-fade-up delay-200">
              Dia do<br />
              <span className="italic text-primary-foreground/90">Noivo</span>
            </h1>
            <p className="text-base text-primary-foreground/60 max-w-lg mb-10 animate-fade-up delay-300 leading-relaxed">
              Uma experiência exclusiva para o noivo e seus padrinhos. Sem
              stress, sem imprevistos, apenas cuidado e preparação para um dos
              dias mais especiais da vida.
            </p>
            <div className="animate-fade-up delay-400">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton
                  text="Agendar pelo WhatsApp"
                  className="w-64 border-foreground/20 bg-primary-foreground text-foreground"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços + Experiência */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-up">
              <div className="gold-line mb-5" />
              <h2 className="headline-section text-foreground mb-3">
                Serviços<br />
                <span className="italic">inclusos</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Formato Day Use para grupos a partir de 3 pessoas.
              </p>
              <ul className="space-y-4">
                {services.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="icon-container flex-shrink-0">
                      <item.icon size={16} />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up delay-200">
              <div className="gold-line mb-5" />
              <h2 className="headline-section text-foreground mb-8">
                A<br />
                <span className="italic">experiência</span>
              </h2>
              <ul className="space-y-4">
                {experience.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="icon-container flex-shrink-0">
                      <item.icon size={16} />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valor */}
      <section className="section-tight bg-gradient-soft relative grain">
        <div className="container-clean relative z-10">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <div className="card-clean p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-sm bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <DollarSign size={28} className="text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    R$150,00 por pessoa
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pacote completo no formato Day Use. Grupos a partir de 3
                    pessoas. Clube Paradise não disponível para este serviço.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-14 animate-fade-up">
            <p className="eyebrow mb-4">Conheça o projeto</p>
            <h2 className="headline-section text-foreground">
              Apresentação completa
            </h2>
          </div>
          <div className="flex flex-col gap-3 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                loading={index < 2 ? "eager" : "lazy"}
                className="w-full h-auto rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-clean bg-foreground">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-primary-foreground/10 mb-6 animate-fade-up">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4 animate-fade-up delay-100">
              Reserve sua data
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-8 animate-fade-up delay-200">
              Entre em contato pelo WhatsApp para agendar o Dia do Noivo e
              garantir uma experiência inesquecível.
            </p>
            <div className="animate-fade-up delay-300">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton
                  text="Agendar pelo WhatsApp"
                  className="w-64 border-foreground/20 bg-primary-foreground text-foreground"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DiaDoNoivo;
