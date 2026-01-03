import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, Smartphone, CreditCard, Calendar, Crown } from "lucide-react";

const Clube = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20saber%20mais%20sobre%20o%20Clube%20Paradise.";

  const plans = [
    {
      name: "Plano Flex",
      description: "Serviço disponível uma vez na semana de segunda a sábado.",
      options: [
        { service: "Corte e Barba", price: "R$ 220,00" },
        { service: "Corte", price: "R$ 132,00" },
        { service: "Barba", price: "R$ 132,00" },
      ],
    },
    {
      name: "Plano Essencial",
      description: "Serviços disponíveis de segunda a sábado.",
      featured: true,
      options: [
        { service: "Corte e Barba", price: "R$ 275,00" },
        { service: "Corte", price: "R$ 165,00" },
        { service: "Barba", price: "R$ 165,00" },
      ],
    },
    {
      name: "Clube One",
      description: "Serviço disponível uma vez por mês em qualquer dia da semana.",
      options: [
        { service: "Corte", price: "R$ 70,00" },
      ],
    },
  ];

  const benefits = [
    "A assinatura não tem fidelidade",
    "O valor não compromete o limite do seu cartão",
    "Planos ilimitados e limitados de acordo com a sua preferência",
  ];

  const faqs = [
    {
      question: "O Clube possui taxa de adesão ou fidelidade?",
      answer: "A assinatura não tem cobranças adicionais.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartão de crédito com débito automático mensal.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, não há fidelidade. Você pode cancelar quando quiser.",
    },
    {
      question: "Os serviços são realmente ilimitados?",
      answer: "Sim! Nos planos Flex e Essencial você pode usar quantas vezes quiser dentro das regras do plano.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-muted/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                <span className="text-primary">Clube</span>
                <br />
                <span className="text-foreground">Paradise</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Corte o cabelo e faça a barba <strong className="text-foreground">quantas vezes quiser</strong>{" "}
                <span className="underline decoration-primary">sem pagar a mais por isso.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Quero ser membro
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-up delay-200 hidden lg:block">
              <div className="relative">
                {/* Mock App Screenshots */}
                <div className="flex justify-center gap-4">
                  <div className="w-48 h-96 bg-card rounded-3xl border border-border shadow-card p-4 transform -rotate-6">
                    <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="w-48 h-96 bg-card rounded-3xl border border-border shadow-card p-4 transform rotate-6 -translate-y-8">
                    <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Tudo que você precisa
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              O <span className="text-primary">Clube Paradise</span> foi criado para aqueles que desejam ficar sempre na régua!
            </h2>
            <p className="text-muted-foreground text-lg">
              Conheça nossos planos e escolha o que mais combina com você:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                    Popular
                  </div>
                )}
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {plan.name.split(" ")[0]}{" "}
                  <span className="text-primary">{plan.name.split(" ")[1]}</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="space-y-4">
                  {plan.options.map((option) => (
                    <div key={option.service} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{option.service}</span>
                      <span className="font-display text-xl font-bold text-primary">{option.price}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="hero" className="w-full mt-8" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Somos a primeira barbearia por assinatura da região.
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border animate-fade-up delay-200">
              <CreditCard className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                É muito simples se tornar membro do nosso Clube
              </h3>
              <p className="text-muted-foreground mb-6">
                Você pode assinar através do WhatsApp, presencialmente em nossa unidade ou baixando nosso aplicativo.
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card">
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
                className="bg-background rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {index + 1} - {faq.question}
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
