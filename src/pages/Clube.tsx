import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Crown, Calendar, Sparkles, Percent, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
const Clube = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  const plans = [{
    name: "Clube Paradise",
    subtitle: "Premium",
    tag: "Ilimitado",
    availability: "Segunda a Sábado",
    featured: true,
    options: [{
      service: "Corte + Barba",
      price: "R$199,90"
    }, {
      service: "Corte",
      price: "R$129,90"
    }, {
      service: "Barba",
      price: "R$129,90"
    }]
  }, {
    name: "Clube Paradise",
    subtitle: "Basic",
    tag: "Ilimitado",
    availability: "Segunda a Quarta",
    featured: false,
    options: [{
      service: "Corte + Barba",
      price: "R$169,90"
    }, {
      service: "Corte",
      price: "R$109,90"
    }, {
      service: "Barba",
      price: "R$109,90"
    }]
  }];
  const benefits = [{
    icon: Sparkles,
    text: "Economia garantida todos os meses"
  }, {
    icon: Calendar,
    text: "Agenda flexível conforme sua rotina"
  }, {
    icon: X,
    text: "Sem burocracia ou taxas escondidas"
  }, {
    icon: Check,
    text: "Cancele quando quiser"
  }, {
    icon: Percent,
    text: "10% de desconto em produtos"
  }];
  const partners = ["Drogasil", "Araujo", "Droga Raia", "Philips", "Zé Delivery", "Burger King", "Petz", "Coco Bambu", "Cineart"];
  const faqs = [{
    question: "Como funciona?",
    answer: "O Clube Paradise é um serviço de assinatura recorrente para os amantes da Barbearia Paradise, dividido em 2 opções: Premium e Basic."
  }, {
    question: "Possui limite de uso?",
    answer: "Planos Premium: quantas vezes quiser de segunda a sábado. Planos Basic: quantas vezes quiser, apenas de segunda a quarta."
  }, {
    question: "Quais as formas de pagamento?",
    answer: "A mensalidade da assinatura é realizada apenas via cartão de crédito, sem prejudicar o limite."
  }, {
    question: "Possui taxa de adesão/fidelidade?",
    answer: "Sem cobranças adicionais. Você pode entrar e sair quando quiser sem pagar nada a mais!"
  }, {
    question: "A assinatura é feita apenas pelo site?",
    answer: "Você pode assinar o clube tanto na unidade física quanto online."
  }, {
    question: "Terceiros podem utilizar o meu plano?",
    answer: "Não. A assinatura é individual e intransferível."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section hero-gradient relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={barbershopInterior} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>

        <div className="relative z-10 container-clean py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            
            
            <h1 className="headline-hero text-white mb-6 opacity-0 animate-fade-up delay-100">
              JÁ PENSOU EM<br />
              <span className="text-white/90">ASSINAR UMA BARBEARIA?</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 opacity-0 animate-fade-up delay-200">
              Com o Clube Paradise, você paga um valor fixo por mês e corta o cabelo 
              e/ou barba quantas vezes quiser. Sem limites!
            </p>

            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all bg-white text-primary hover:bg-white/90 shadow-lg opacity-0 animate-fade-up delay-300">
              Assinar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 block opacity-0 animate-fade-up">Escolha seu plano</span>
            <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
              O PLANO IDEAL PARA VOCÊ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => <div key={plan.subtitle} className={`relative bg-card-light rounded-3xl p-8 border-2 transition-all hover:shadow-xl opacity-0 animate-fade-up ${plan.featured ? "border-primary shadow-lg" : "border-border hover:border-primary/30"}`} style={{
            animationDelay: `${(index + 2) * 0.1}s`
          }}>
                {/* Featured Badge */}
                {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-lg">
                      <Crown size={14} />
                      MAIS POPULAR
                    </span>
                  </div>}

                {/* Tag */}
                <div className="mb-6 mt-2">
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${plan.featured ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {plan.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">{plan.name}</p>
                  <h3 className="text-3xl font-bold text-foreground">
                    {plan.subtitle}
                  </h3>
                </div>
                
                {/* Options */}
                <div className="space-y-4 mb-6">
                  {plan.options.map(option => <div key={option.service} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{option.service}</span>
                      <span className="font-bold text-foreground text-lg">
                        {option.price}
                        <span className="text-xs font-normal text-muted-foreground">/mês</span>
                      </span>
                    </div>)}
                </div>
                
                {/* Availability */}
                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-mint" />
                  {plan.availability}
                </div>
                
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all ${plan.featured ? "btn-primary" : "btn-outline"}`}>
                  Assinar
                </a>
              </div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-clean bg-gradient-soft">
        <div className="container-clean">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="opacity-0 animate-fade-up">
              <span className="eyebrow mb-4 block">Benefícios</span>
              <h2 className="headline-section text-foreground mb-8">
                VANTAGENS DE<br />SER MEMBRO
              </h2>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => <li key={index} className="flex items-center gap-4">
                    <div className="icon-container">
                      <benefit.icon size={18} />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </li>)}
              </ul>
            </div>

            <div className="opacity-0 animate-fade-up delay-200">
              <div className="card-clean p-8">
                <p className="text-muted-foreground text-sm mb-6 font-medium">
                  Além de benefícios em +30 mil estabelecimentos parceiros
                </p>
                <div className="flex flex-wrap gap-2">
                  {partners.map(partner => <span key={partner} className="px-4 py-2 bg-background rounded-full text-sm text-foreground font-medium border border-border hover:border-primary/30 transition-colors">
                      {partner}
                    </span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 block opacity-0 animate-fade-up">FAQ</span>
            <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
              PERGUNTAS FREQUENTES
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="card-clean px-6 border-none opacity-0 animate-fade-up" style={{
              animationDelay: `${(index + 2) * 0.08}s`
            }}>
                  <AccordionTrigger className="text-foreground font-semibold hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>;
};
export default Clube;