import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Send, PhoneCall, Gift, TrendingUp } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Envie o contato",
    description:
      "Nos envie o contato de quem você deseja indicar para o Clube Paradise.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Nossa equipe entra em contato",
    description:
      "O time comercial entrará em contato com o indicado, sinalizando sua indicação e explicando os planos, serviços e o espaço.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Ganhe R$100 de desconto",
    description:
      "Se o indicado se tornar assinante do Clube, você ganha automaticamente R$100,00 de desconto na sua próxima cobrança.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Desconto cumulativo",
    description:
      "Os R$100 são cumulativos por pessoa indicada. Quanto mais amigos indicar, mais desconto você terá.",
  },
];

const Afiliados = () => {
  usePageMeta({
    title: "Programa de Afiliados | Clube Paradise",
    description:
      "Indique amigos para o Clube Paradise e ganhe R$100 de desconto cumulativo para cada indicação que se tornar assinante.",
  });

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de indicar alguém para o Clube Paradise."
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
              Programa de Afiliados
            </p>
            <h1 className="headline-hero text-primary-foreground mb-6 animate-fade-up delay-200">
              Indique e<br />
              <span className="italic text-primary-foreground/90">Ganhe</span>
            </h1>
            <p className="text-base text-primary-foreground/60 max-w-lg mb-10 animate-fade-up delay-300 leading-relaxed">
              Indique amigos para o Clube Paradise e ganhe descontos reais na sua
              assinatura. Simples, direto e sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-14 animate-fade-up">
            <p className="eyebrow mb-4">Como funciona</p>
            <h2 className="headline-section text-foreground">
              4 passos simples
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 md:gap-8 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <step.icon size={20} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2 min-h-[40px]" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pb-10 ${index === steps.length - 1 ? "pb-0" : ""}`}
                >
                  <span className="text-sm font-bold text-foreground tracking-wider">
                    PASSO {step.number}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-clean bg-foreground">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-primary-foreground/10 mb-6 animate-fade-up">
              <Gift className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4 animate-fade-up delay-100">
              Qual amigo adoraria fazer parte?
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-8 animate-fade-up delay-200">
              Envie o contato pelo WhatsApp e comece a acumular descontos agora
              mesmo.
            </p>
            <div className="animate-fade-up delay-300">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton
                  text="Indicar pelo WhatsApp"
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

export default Afiliados;
