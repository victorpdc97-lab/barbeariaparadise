import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, Scissors } from "lucide-react";
import clubeHeroMan from "@/assets/clube-hero-man.png";
import heroImage from "@/assets/hero-barbershop.jpg";

const Clube = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const plans = [
    {
      name: "CLUBE PARADISE",
      subtitle: "PREMIUM",
      tag: "ILIMITADO",
      availability: "SEGUNDA A SÁBADO",
      featured: true,
      options: [
        { service: "CORTE + BARBA", price: "R$199,90" },
        { service: "CORTE", price: "R$129,90" },
        { service: "BARBA", price: "R$129,90" },
      ],
    },
    {
      name: "CLUBE PARADISE",
      subtitle: "BASIC",
      tag: "LIMITADO",
      availability: "SEGUNDA A QUARTA",
      options: [
        { service: "CORTE + BARBA", price: "R$169,90" },
        { service: "CORTE", price: "R$109,90" },
        { service: "BARBA", price: "R$109,90" },
      ],
    },
  ];

  const benefits = [
    "Economia garantida todos os meses",
    "Agenda flexível conforme sua rotina",
    "Sem burocracia ou taxas escondidas",
    "Cancele quando quiser",
    "10% de desconto em produtos",
  ];

  const partners = [
    "Drogasil", "Araujo", "Droga Raia", "Philips", "Zé Delivery", 
    "Burger King", "Petz", "Coco Bambu", "Cineart"
  ];

  const faqs = [
    {
      question: "COMO FUNCIONA?",
      answer: "O Clube Paradise é um serviço de assinatura recorrente para os amantes da Barbearia Paradise, dividido em 2 opções: Premium e Basic.",
    },
    {
      question: "POSSUI LIMITE DE USO?",
      answer: "Planos Premium: quantas vezes quiser de segunda a sábado. Planos Basic: quantas vezes quiser, apenas de segunda a quarta.",
    },
    {
      question: "QUAIS AS FORMAS DE PAGAMENTO?",
      answer: "A mensalidade da assinatura é realizada apenas via cartão de crédito, sem prejudicar o limite.",
    },
    {
      question: "POSSUI TAXA DE ADESÃO/FIDELIDADE?",
      answer: "Sem cobranças adicionais. Você pode entrar e sair quando quiser e sem pagar nem um centavo a mais por isso!",
    },
    {
      question: "A ASSINATURA É FEITA APENAS PELO SITE?",
      answer: "Você pode assinar o clube tanto na unidade física quanto on-line.",
    },
    {
      question: "TERCEIROS PODEM UTILIZAR O MEU PLANO?",
      answer: "Não. A assinatura é individual e intransferível.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-fullscreen pt-24 relative">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Clube Paradise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container-narrow relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="hidden lg:flex justify-center animate-fade-up">
              <img 
                src={clubeHeroMan} 
                alt="Clube Paradise" 
                className="h-[500px] w-auto object-contain"
              />
            </div>

            {/* Right - Text */}
            <div className="text-center lg:text-right animate-fade-up delay-200">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-wider">
                JÁ PENSOU EM<br />
                ASSINAR UMA<br />
                BARBEARIA?
              </h1>
              <p className="text-muted-foreground mt-6 text-lg font-light max-w-md ml-auto">
                Com o Clube Paradise, você paga um valor fixo por mês e corta o cabelo e/ou barba quantas vezes quiser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
              ESCOLHA SEU PLANO
            </h2>
            <div className="divider-ornament mt-6 max-w-md mx-auto">
              <span className="text-muted-foreground text-sm tracking-widest">ASSINATURA</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.subtitle}
                className={`vintage-card p-8 animate-fade-up ${
                  plan.featured ? "border-foreground" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Tag */}
                <div className="text-center mb-6">
                  <span className="text-xs tracking-widest text-muted-foreground">
                    {plan.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-sm tracking-widest text-muted-foreground">
                    {plan.name}
                  </h3>
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wider">
                    {plan.subtitle}
                  </span>
                </div>
                
                {/* Options */}
                <div className="space-y-4 mb-8">
                  {plan.options.map((option) => (
                    <div key={option.service} className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground text-sm tracking-wide">{option.service}</span>
                      <span className="font-display text-2xl text-foreground">{option.price}<span className="text-sm text-muted-foreground">/MÊS</span></span>
                    </div>
                  ))}
                </div>
                
                {/* Availability */}
                <div className="text-center py-4 bg-muted/50 mb-8">
                  <span className="text-sm tracking-widest text-foreground">
                    {plan.availability}
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 tracking-widest"
                  size="lg"
                  asChild
                >
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                    ASSINAR AGORA
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wider mb-8">
                BENEFÍCIOS
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 border border-foreground flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-foreground" />
                    </div>
                    <span className="text-foreground/80 font-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up delay-200">
              <p className="text-muted-foreground font-light text-sm mb-6 tracking-wide">
                ALÉM DE BENEFÍCIOS EM + DE 30 MIL ESTABELECIMENTOS PARCEIROS
              </p>
              <div className="flex flex-wrap gap-3">
                {partners.map((partner) => (
                  <span 
                    key={partner} 
                    className="px-4 py-2 border border-border text-xs tracking-widest text-muted-foreground"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
              PERGUNTAS FREQUENTES
            </h2>
            <div className="divider-ornament mt-6 max-w-md mx-auto">
              <span className="text-muted-foreground text-sm tracking-widest">FAQ</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-fade-up border-b border-border/50 pb-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg tracking-wider text-foreground mb-3">
                  {index + 1}. {faq.question}
                </h3>
                <p className="text-muted-foreground font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Clube;
