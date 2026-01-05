import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Calendar, Crown, Scissors, Percent, Users } from "lucide-react";

const Clube = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const plans = [
    {
      name: "Clube Paradise Premium",
      subtitle: "(ILIMITADO)",
      availability: "SEGUNDA A SÁBADO",
      featured: true,
      options: [
        { service: "Corte + Barba", price: "R$199,90", period: "/mês" },
        { service: "Corte", price: "R$129,90", period: "/mês" },
        { service: "Barba", price: "R$129,90", period: "/mês" },
      ],
    },
    {
      name: "Clube Paradise Basic",
      subtitle: "(LIMITADO)",
      availability: "SEGUNDA A QUARTA",
      options: [
        { service: "Corte + Barba", price: "R$169,90", period: "/mês" },
        { service: "Corte", price: "R$109,90", period: "/mês" },
        { service: "Barba", price: "R$109,90", period: "/mês" },
      ],
    },
  ];

  const faqs = [
    {
      question: "Como funciona?",
      answer: "O Clube Paradise é um serviço de assinatura recorrente para os amantes da Barbearia Paradise, dividido em 2 opções: Premium e Basic.",
    },
    {
      question: "Possui limite de uso?",
      answer: "Planos Premium: quantas vezes quiser de segunda a sábado. Planos Basic: quantas vezes quiser, apenas de segunda a quarta.",
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "A mensalidade da assinatura é realizada apenas via cartão de crédito, sem prejudicar o limite.",
    },
    {
      question: "Possui taxa de adesão/fidelidade?",
      answer: "Sem cobranças adicionais. Você pode entrar e sair quando quiser e sem pagar nem um centavo a mais por isso!",
    },
    {
      question: "A assinatura é feita apenas pelo site?",
      answer: "Você pode assinar o clube tanto na unidade física quanto on-line.",
    },
    {
      question: "Terceiros podem utilizar o meu plano?",
      answer: "Não. A assinatura é individual e instransferível.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-muted/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative z-10">
          <div className="text-center animate-fade-up">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Já pensou em assinar uma{" "}
              <span className="text-primary">barbearia?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Corte o cabelo e faça a barba <strong className="text-foreground">quantas vezes quiser</strong>{" "}
              sem pagar a mais por isso.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Quero ser membro
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-background rounded-2xl p-8 border transition-all duration-300 hover:scale-105 animate-fade-up ${
                  plan.featured 
                    ? "border-primary shadow-lg" 
                    : "border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Recomendado
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{plan.subtitle}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  {plan.options.map((option) => (
                    <div key={option.service} className="text-center py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm block mb-1">{option.service}</span>
                      <span className="font-display text-3xl font-bold text-primary">{option.price}</span>
                      <span className="text-muted-foreground text-sm">{option.period}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center py-4 bg-secondary/50 rounded-lg mb-6">
                  <span className="text-sm font-semibold text-foreground">{plan.availability}</span>
                  <div className="flex justify-center gap-4 mt-2">
                    <Scissors className="w-5 h-5 text-muted-foreground" />
                    <Scissors className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                
                <Button variant="hero" className="w-full" asChild>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                    Assinar agora
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-xl border border-border animate-fade-up">
              <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Não compromete o limite do cartão</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border animate-fade-up" style={{ animationDelay: "100ms" }}>
              <Percent className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">10% de desconto em produtos</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Check className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Sem taxa de adesão</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Scissors className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Serviços ilimitados</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center animate-fade-up">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Sabemos que economizar e estar em sua melhor versão são fatores indispensáveis...
            </h3>
            <p className="text-lg text-foreground font-semibold mb-6">
              Por esse motivo, os assinantes do Clube Paradise recebem{" "}
              <span className="text-primary">10% de desconto em todos os produtos/serviços avulsos.</span>
            </p>
          </div>

          <div className="mt-12 text-center animate-fade-up">
            <p className="text-muted-foreground mb-6">
              Além de benefícios em + de 30 mil estabelecimentos parceiros (solicitar ativação)
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-bold text-muted-foreground">Drogasil</span>
              <span className="text-lg font-bold text-muted-foreground">Araujo</span>
              <span className="text-lg font-bold text-muted-foreground">Philips</span>
              <span className="text-lg font-bold text-muted-foreground">Zé Delivery</span>
              <span className="text-lg font-bold text-muted-foreground">Burger King</span>
              <span className="text-lg font-bold text-muted-foreground">Petz</span>
              <span className="text-lg font-bold text-muted-foreground">Coco Bambu</span>
              <span className="text-lg font-bold text-muted-foreground">Cineart</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              É muito simples se tornar membro do nosso Clube
            </h2>
            <p className="text-muted-foreground mb-8">
              Você pode assinar através do nosso site, presencialmente em nossa unidade ou pelo aplicativo.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Assinar agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {index + 1}) {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
