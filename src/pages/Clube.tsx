import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DownloadAppModal from "@/components/DownloadAppModal";
import { Check, Crown, Calendar, Sparkles, Percent, X, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import clubeBarberMan from "@/assets/clube-barber-man.png";
import { detectOS, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/detectOS";

const Clube = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleSubscribe = () => {
    const os = detectOS();
    if (os === 'ios') {
      window.open(APP_STORE_URL, '_blank');
    } else if (os === 'android') {
      window.open(PLAY_STORE_URL, '_blank');
    } else {
      setShowDownloadModal(true);
    }
  };

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
    answer: "O Clube Paradise é um serviço de assinatura recorrente para os amantes da Barbearia Paradise, dividido em 2 opções: Premium e Basic. Para assinar, basta baixar nosso app (disponível na App Store e Google Play) e fazer sua assinatura diretamente por lá."
  }, {
    question: "Como faço para assinar?",
    answer: "A assinatura é feita exclusivamente pelo nosso aplicativo. Baixe o app Paradise na App Store (iPhone) ou Google Play (Android), crie sua conta e escolha o plano que melhor atende suas necessidades."
  }, {
    question: "Possui limite de uso?",
    answer: "Planos Premium: quantas vezes quiser de segunda a sábado. Planos Basic: quantas vezes quiser, apenas de segunda a quarta."
  }, {
    question: "Quais as formas de pagamento?",
    answer: "A mensalidade da assinatura é realizada apenas via cartão de crédito através do app, sem prejudicar o limite."
  }, {
    question: "Possui taxa de adesão/fidelidade?",
    answer: "Sem cobranças adicionais. Você pode entrar e sair quando quiser sem pagar nada a mais!"
  }, {
    question: "Terceiros podem utilizar o meu plano?",
    answer: "Não. A assinatura é individual e intransferível."
  }];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DownloadAppModal open={showDownloadModal} onOpenChange={setShowDownloadModal} />
      
      {/* Hero Section */}
      <section className="hero-section hero-gradient relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={barbershopInterior} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>

        {/* Barber Man Image - Left Side */}
        <div className="absolute left-0 bottom-0 z-10 hidden lg:block">
          <img 
            src={clubeBarberMan} 
            alt="Barbeiro" 
            className="h-[400px] xl:h-[500px] w-auto object-contain object-bottom"
          />
        </div>

        <div className="relative z-10 container-clean py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center lg:ml-auto lg:mr-0 lg:text-left lg:pl-48">
            
            <h1 className="headline-hero text-white mb-6 opacity-0 animate-fade-up delay-100">
              JÁ PENSOU EM<br />
              <span className="text-white/90">ASSINAR UMA BARBEARIA?</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl mb-10 opacity-0 animate-fade-up delay-200">
              Com o Clube Paradise, você paga um valor fixo por mês e corta o cabelo 
              e/ou barba quantas vezes quiser. Sem limites!
            </p>

            <button 
              onClick={handleSubscribe}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all bg-white text-primary hover:bg-white/90 shadow-lg opacity-0 animate-fade-up delay-300"
            >
              Assinar Agora
            </button>
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
            {plans.map((plan, index) => (
              <div 
                key={plan.subtitle} 
                className={`relative bg-card-light rounded-3xl p-8 border-2 transition-all hover:shadow-xl opacity-0 animate-fade-up ${plan.featured ? "border-primary shadow-lg" : "border-border hover:border-primary/30"}`} 
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-lg">
                      <Crown size={14} />
                      MAIS POPULAR
                    </span>
                  </div>
                )}

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
                  {plan.options.map(option => (
                    <div key={option.service} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{option.service}</span>
                      <span className="font-bold text-foreground text-lg">
                        {option.price}
                        <span className="text-xs font-normal text-muted-foreground">/mês</span>
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Availability */}
                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-mint" />
                  {plan.availability}
                </div>
                
                <button 
                  onClick={handleSubscribe}
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all ${plan.featured ? "btn-primary" : "btn-outline"}`}
                >
                  Assinar
                </button>
              </div>
            ))}
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
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="icon-container">
                      <benefit.icon size={18} />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="opacity-0 animate-fade-up delay-200">
              <div className="card-clean p-8">
                <p className="text-muted-foreground text-sm mb-6 font-medium">
                  Além de benefícios em +30 mil estabelecimentos parceiros
                </p>
                <div className="flex flex-wrap gap-2">
                  {partners.map(partner => (
                    <span key={partner} className="px-4 py-2 bg-background rounded-full text-sm text-foreground font-medium border border-border hover:border-primary/30 transition-colors">
                      {partner}
                    </span>
                  ))}
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
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="card-clean px-6 border-none opacity-0 animate-fade-up" 
                  style={{ animationDelay: `${(index + 2) * 0.08}s` }}
                >
                  <AccordionTrigger className="text-foreground font-semibold hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="section-clean bg-gradient-to-br from-primary to-secondary">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8 opacity-0 animate-fade-up">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="headline-section text-white mb-6 opacity-0 animate-fade-up delay-100">
              ASSINE PELO APP
            </h2>
            
            <p className="text-lg text-white/80 mb-10 opacity-0 animate-fade-up delay-200">
              Faça sua assinatura e gerencie seu plano diretamente pelo aplicativo Paradise
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-300">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-foreground rounded-xl hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Disponível na</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-foreground rounded-xl hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Disponível no</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
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

export default Clube;
