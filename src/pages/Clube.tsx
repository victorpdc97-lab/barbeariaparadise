import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check } from "lucide-react";
import clubeHeroMan from "@/assets/clube-hero-man.png";

const Clube = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const plans = [
    {
      name: "Clube Paradise",
      subtitle: "Premium",
      tag: "Ilimitado",
      availability: "Segunda a Sábado",
      featured: true,
      options: [
        { service: "Corte + Barba", price: "R$199,90" },
        { service: "Corte", price: "R$129,90" },
        { service: "Barba", price: "R$129,90" },
      ],
    },
    {
      name: "Clube Paradise",
      subtitle: "Basic",
      tag: "Limitado",
      availability: "Segunda a Quarta",
      options: [
        { service: "Corte + Barba", price: "R$169,90" },
        { service: "Corte", price: "R$109,90" },
        { service: "Barba", price: "R$109,90" },
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
      answer: "Sem cobranças adicionais. Você pode entrar e sair quando quiser sem pagar nada a mais!",
    },
    {
      question: "A assinatura é feita apenas pelo site?",
      answer: "Você pode assinar o clube tanto na unidade física quanto online.",
    },
    {
      question: "Terceiros podem utilizar o meu plano?",
      answer: "Não. A assinatura é individual e intransferível.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-11 bg-[#0a0a0a]">
        <div className="container-apple-wide py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left animate-fade-up">
              <p className="eyebrow-apple text-white/50 mb-4">
                Clube Paradise
              </p>
              <h1 className="headline-apple text-white mb-6">
                Já pensou em assinar<br />uma barbearia?
              </h1>
              <p className="subheadline-apple text-white/60 max-w-lg mb-8">
                Com o Clube Paradise, você paga um valor fixo por mês e corta o cabelo e/ou barba quantas vezes quiser.
              </p>
              <a 
                href={bookingLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-apple-primary"
              >
                Assinar agora
              </a>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center animate-fade-up delay-200">
              <img 
                src={clubeHeroMan} 
                alt="Clube Paradise" 
                className="h-[400px] lg:h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-apple bg-background">
        <div className="container-apple">
          <div className="text-center mb-16">
            <p className="eyebrow-apple mb-4 animate-fade-up">Escolha seu plano</p>
            <h2 className="headline-apple animate-fade-up delay-100">
              O plano ideal<br />para você.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.subtitle}
                className={`bg-card rounded-3xl p-8 animate-fade-up ${
                  plan.featured ? "ring-2 ring-[hsl(var(--apple-blue))]" : ""
                }`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Tag */}
                <div className="mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    plan.featured 
                      ? "bg-[hsl(var(--apple-blue))] text-white" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {plan.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">{plan.name}</p>
                  <h3 className="text-3xl font-semibold text-foreground">
                    {plan.subtitle}
                  </h3>
                </div>
                
                {/* Options */}
                <div className="space-y-4 mb-6">
                  {plan.options.map((option) => (
                    <div key={option.service} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{option.service}</span>
                      <span className="font-semibold text-foreground">
                        {option.price}<span className="text-xs text-muted-foreground">/mês</span>
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Availability */}
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.availability}
                </p>
                
                <a 
                  href={bookingLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={plan.featured ? "btn-apple-primary w-full" : "btn-apple-secondary w-full"}
                >
                  Assinar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-apple bg-secondary">
        <div className="container-apple">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-up">
              <p className="eyebrow-apple mb-4">Benefícios</p>
              <h2 className="headline-apple mb-8">
                Vantagens de<br />ser membro.
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-[hsl(var(--apple-blue))] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up delay-200">
              <p className="text-muted-foreground text-sm mb-6">
                Além de benefícios em +30 mil estabelecimentos parceiros
              </p>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <span 
                    key={partner} 
                    className="px-4 py-2 bg-card rounded-full text-sm text-muted-foreground"
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
      <section className="section-apple bg-background">
        <div className="container-apple">
          <div className="text-center mb-16">
            <p className="eyebrow-apple mb-4 animate-fade-up">FAQ</p>
            <h2 className="headline-apple animate-fade-up delay-100">
              Perguntas frequentes.
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.08}s` }}
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
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
