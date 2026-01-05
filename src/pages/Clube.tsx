import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Calendar, Scissors, DollarSign, ClipboardCheck } from "lucide-react";
import clubeHeroMan from "@/assets/clube-hero-man.png";

const Clube = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const plans = [
    {
      name: "CLUBE PARADISE PREMIUM",
      subtitle: "( ILIMITADO )",
      availability: "SEGUNDA A SÁBADO",
      featured: true,
      options: [
        { service: "CORTE + BARBA", price: "R$199,90", period: "/MÊS" },
        { service: "CORTE", price: "R$129,90", period: "/MÊS" },
        { service: "BARBA", price: "R$129,90", period: "/MÊS" },
      ],
    },
    {
      name: "CLUBE PARADISE BASIC",
      subtitle: "( LIMITADO )",
      availability: "SEGUNDA A QUARTA",
      options: [
        { service: "CORTE + BARBA", price: "R$169,90", period: "/MÊS" },
        { service: "CORTE", price: "R$109,90", period: "/MÊS" },
        { service: "BARBA", price: "R$109,90", period: "/MÊS" },
      ],
    },
  ];

  const benefits = [
    { icon: DollarSign, text: "Economia garantida" },
    { icon: Calendar, text: "Agenda flexível" },
    { icon: ClipboardCheck, text: "Sem burocracia" },
    { icon: Scissors, text: "Serviços ilimitados" },
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
      answer: "Não. A assinatura é individual e instransferível.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-background">
        {/* Watermark text */}
        <div className="absolute left-0 top-1/4 -translate-y-1/2 overflow-hidden pointer-events-none select-none">
          <div className="watermark-text -ml-8">
            PLANO<br />PLANO<br />PLANO
          </div>
        </div>
        
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Image placeholder (using gradient as reference shows a man) */}
            <div className="relative hidden lg:flex justify-center items-end">
              <div className="relative">
                <div className="w-80 h-[500px] bg-gradient-to-t from-primary/20 to-transparent rounded-t-full overflow-hidden flex items-end justify-center">
                  <div className="text-center text-primary-foreground/50 text-lg">
                    {/* Placeholder for barber image */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="text-right animate-fade-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                JÁ PENSOU EM<br />
                ASSINAR UMA<br />
                BARBEARIA?
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background -mt-32 pt-48 relative z-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 shadow-card transition-all duration-300 hover:scale-105 animate-fade-up ${
                  plan.featured 
                    ? "border-2 border-primary" 
                    : "border border-border"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{plan.subtitle}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  {plan.options.map((option) => (
                    <div key={option.service} className="text-center py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm block mb-1">{option.service}</span>
                      <span className="font-display text-3xl md:text-4xl font-bold text-primary">{option.price}</span>
                      <span className="text-muted-foreground text-xs">{option.period}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center py-4 bg-secondary rounded-lg mb-6">
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {plan.availability}
                  </span>
                  <div className="flex justify-center gap-4 mt-2">
                    <Scissors className="w-5 h-5 text-muted-foreground" />
                    <Scissors className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                
                <Button variant="hero" className="w-full" asChild>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                    ASSINAR AGORA
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Icons Section */}
      <section className="py-12 bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-16 bg-secondary">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              SABEMOS QUE<br />
              ECONOMIZAR E ESTAR<br />
              EM SUA MELHOR VERSÃO<br />
              SÃO FATORES INDISPENSÁVEIS...
            </h3>
            <p className="text-lg md:text-xl text-foreground font-bold mt-6">
              POR ESSE MOTIVO, OS ASSINANTES<br />
              DO CLUBE PARADISE RECEBEM <span className="text-primary">10% DE<br />
              DESCONTO EM TODOS OS PRODUTOS/SERVIÇOS AVULSOS.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="container-narrow">
          <div className="text-center animate-fade-up">
            <p className="text-foreground font-bold uppercase text-sm mb-8">
              Além de benefícios em + de 30 mil estabelecimentos parceiros<br />
              (Solicitar ativação)
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-70">
              {partners.map((partner) => (
                <span 
                  key={partner} 
                  className="text-sm md:text-base font-bold text-muted-foreground uppercase"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute right-0 top-1/4 overflow-hidden pointer-events-none select-none opacity-10">
          <div className="font-display text-[150px] md:text-[200px] font-bold text-primary-foreground leading-none">
            PLANO<br />PLANO
          </div>
        </div>

        <div className="container-narrow relative z-10">
          <div className="text-left mb-12 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              PERGUNTAS<br />FREQUENTES
            </h2>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg md:text-xl font-bold text-primary-foreground mb-2">
                  {index + 1}) {faq.question}
                </h3>
                <p className="text-primary-foreground/80 text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Logo Section */}
      <section className="py-16 bg-background">
        <div className="container-narrow text-center">
          <div className="inline-block">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">CLUBE</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              PARADISE
            </h3>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Clube;