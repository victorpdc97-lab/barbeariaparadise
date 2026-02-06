import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DownloadAppModal from "@/components/DownloadAppModal";
import { Check, Crown, Calendar, Sparkles, Percent, X, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import clubeHeroModel from "@/assets/clube-hero-model.png";
import { detectOS, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/detectOS";
import { ParticleButton } from "@/components/ui/particle-button";

const Clube = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleSubscribe = () => {
    const os = detectOS();
    if (os === "ios") window.open(APP_STORE_URL, "_blank");
    else if (os === "android") window.open(PLAY_STORE_URL, "_blank");
    else setShowDownloadModal(true);
  };

  const plans = [
    { name: "Clube Paradise", subtitle: "Premium", tag: "Ilimitado", availability: "Segunda a Sábado", featured: true, options: [{ service: "Corte + Barba", price: "R$199,90" }, { service: "Corte", price: "R$129,90" }, { service: "Barba", price: "R$129,90" }] },
    { name: "Clube Paradise", subtitle: "Basic", tag: "Ilimitado", availability: "Segunda a Quarta", featured: false, options: [{ service: "Corte + Barba", price: "R$169,90" }, { service: "Corte", price: "R$109,90" }, { service: "Barba", price: "R$109,90" }] },
  ];

  const benefits = [
    { icon: Sparkles, text: "Economia garantida todos os meses" },
    { icon: Calendar, text: "Agenda flexível conforme sua rotina" },
    { icon: X, text: "Sem burocracia ou taxas escondidas" },
    { icon: Check, text: "Cancele quando quiser" },
    { icon: Percent, text: "10% de desconto em produtos" },
  ];

  const partners = ["Drogasil", "Araujo", "Droga Raia", "Philips", "Zé Delivery", "Burger King", "Petz", "Coco Bambu", "Cineart"];

  const faqs = [
    { question: "Como funciona?", answer: "O Clube Paradise é um serviço de assinatura recorrente dividido em 2 opções: Premium e Basic. Para assinar, basta baixar nosso app (disponível na App Store e Google Play) e fazer sua assinatura diretamente por lá." },
    { question: "Como faço para assinar?", answer: "A assinatura é feita exclusivamente pelo nosso aplicativo. Baixe o app Paradise, crie sua conta e escolha o plano ideal." },
    { question: "Possui limite de uso?", answer: "Premium: quantas vezes quiser de segunda a sábado. Basic: quantas vezes quiser de segunda a quarta." },
    { question: "Quais as formas de pagamento?", answer: "A mensalidade é realizada via cartão de crédito através do app, sem prejudicar o limite." },
    { question: "Possui taxa de adesão/fidelidade?", answer: "Sem cobranças adicionais. Você pode entrar e sair quando quiser sem pagar nada a mais!" },
    { question: "Terceiros podem utilizar o meu plano?", answer: "Não. A assinatura é individual e intransferível." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DownloadAppModal open={showDownloadModal} onOpenChange={setShowDownloadModal} />

      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground">
        <div className="relative z-10 container-clean py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <div className="gold-line mb-6 opacity-0 animate-fade-up" style={{ background: 'hsl(0 0% 100%)' }} />
              <h1 className="headline-hero text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
                Já pensou em<br /><span className="italic text-primary-foreground/90">assinar uma barbearia?</span>
              </h1>
              <p className="text-base text-primary-foreground/60 max-w-lg mb-10 opacity-0 animate-fade-up delay-200 leading-relaxed">
                Com o Clube Paradise, você paga um valor fixo por mês e corta o cabelo e/ou barba quantas vezes quiser. Sem limites.
              </p>
              <ParticleButton onClick={handleSubscribe} className="inline-flex items-center justify-center px-10 py-4 rounded-sm font-medium text-base transition-all bg-primary-foreground text-foreground hover:bg-primary-foreground/90 opacity-0 animate-fade-up delay-300">
                Assinar Agora
              </ParticleButton>
            </div>
            <div className="relative flex justify-center lg:justify-end opacity-0 animate-fade-up delay-200">
              <img src={clubeHeroModel} alt="Modelo Paradise Barber" className="max-h-[480px] lg:max-h-[600px] w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-14 opacity-0 animate-fade-up">
            <p className="eyebrow mb-4">Escolha seu plano</p>
            <h2 className="headline-section text-foreground">O plano ideal para você</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div key={plan.subtitle} className={`relative rounded-lg p-8 border-2 transition-all duration-500 opacity-0 animate-fade-up ${plan.featured ? "border-foreground shadow-lg" : "border-border hover:border-foreground/30"}`} style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                {plan.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-foreground text-primary-foreground rounded-sm">
                      <Crown size={12} /> Mais Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 mt-2">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-sm bg-muted text-muted-foreground">{plan.tag}</span>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">{plan.name}</p>
                  <h3 className="font-display text-3xl text-foreground">{plan.subtitle}</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {plan.options.map((option) => (
                    <div key={option.service} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm">{option.service}</span>
                      <span className="font-display text-lg text-foreground">{option.price}<span className="text-xs font-sans text-muted-foreground">/mês</span></span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-6 text-xs text-muted-foreground">
                  <Calendar size={14} /> {plan.availability}
                </div>
                <ParticleButton onClick={handleSubscribe} className={`w-full justify-center ${plan.featured ? "btn-primary" : "btn-outline"} py-4`} variant={plan.featured ? "default" : "outline"}>Assinar</ParticleButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-gradient-soft relative grain">
        <div className="container-clean relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="opacity-0 animate-fade-up">
              <div className="gold-line mb-5" />
              <h2 className="headline-section text-foreground mb-8">Vantagens de<br /><span className="italic">ser membro</span></h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="icon-container flex-shrink-0"><benefit.icon size={16} /></div>
                    <span className="text-foreground text-sm">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="opacity-0 animate-fade-up delay-200">
              <div className="card-clean p-8">
                <p className="text-muted-foreground text-sm mb-5 font-medium">Benefícios em +30 mil estabelecimentos parceiros</p>
                <div className="flex flex-wrap gap-2">
                  {partners.map((partner) => (
                    <span key={partner} className="px-3 py-1.5 bg-background rounded-sm text-xs text-foreground border border-border">{partner}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-clean bg-background">
        <div className="container-clean">
          <div className="text-center mb-14 opacity-0 animate-fade-up">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="headline-section text-foreground">Perguntas frequentes</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 opacity-0 animate-fade-up" style={{ animationDelay: `${(index + 2) * 0.06}s` }}>
                  <AccordionTrigger className="text-foreground text-sm font-medium hover:text-muted-foreground hover:no-underline py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-clean bg-foreground">
        <div className="container-clean">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-primary-foreground/10 mb-6 opacity-0 animate-fade-up">
              <Smartphone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4 opacity-0 animate-fade-up delay-100">Assine pelo app</h2>
            <p className="text-primary-foreground/60 text-sm mb-8 opacity-0 animate-fade-up delay-200">Faça sua assinatura e gerencie seu plano diretamente pelo aplicativo</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-up delay-300">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-primary-foreground/10 text-primary-foreground rounded-sm hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div className="text-left"><div className="text-[10px] opacity-60">Disponível na</div><div className="text-sm font-medium -mt-0.5">App Store</div></div>
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-primary-foreground/10 text-primary-foreground rounded-sm hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                <div className="text-left"><div className="text-[10px] opacity-60">Disponível no</div><div className="text-sm font-medium -mt-0.5">Google Play</div></div>
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
