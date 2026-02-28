import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Crown, Calendar, Sparkles, Percent, X, Smartphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PricingCards from "@/components/ui/pricing-component";
import clubeHeroModel from "@/assets/clube-hero-model.png";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/detectOS";
import { ParticleButton } from "@/components/ui/particle-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useDownloadApp } from "@/contexts/DownloadAppContext";

const Clube = () => {
  const { openDownloadModal } = useDownloadApp();

  const handleSubscribe = () => {
    openDownloadModal();
  };

  const plans = [
    { name: "Clube Paradise", subtitle: "Premium", tag: "Ilimitado", availability: "Segunda a Sábado", featured: true, options: [{ service: "Corte + Barba", price: "R$199,90" }, { service: "Corte", price: "R$129,90" }, { service: "Barba", price: "R$129,90" }] },
    { name: "Clube Paradise", subtitle: "Basic", tag: "Ilimitado", availability: "Segunda a Quarta", featured: false, options: [{ service: "Corte + Barba", price: "R$169,90" }, { service: "Corte", price: "R$109,90" }, { service: "Barba", price: "R$109,90" }] },
  ];

  const benefits = [
    { icon: Sparkles, text: "Economia garantida todos os meses" },
    { icon: Calendar, text: "Agenda flexível conforme sua rotina" },
    { icon: X, text: "Sem burocracia ou taxas escondidas" },
    
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
              <div className="opacity-0 animate-fade-up delay-300">
                <InteractiveHoverButton onClick={handleSubscribe} text="Assinar Agora" className="w-56 border-foreground/20 bg-primary-foreground text-foreground" />
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-24 opacity-0 animate-fade-up delay-200">
              <div className="absolute inset-0 scale-125 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)] pointer-events-none" />
              <img src={clubeHeroModel} alt="Modelo Paradise Barber" className="relative z-10 max-h-[480px] lg:max-h-[600px] w-auto object-contain drop-shadow-2xl" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }} />
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
          <div className="opacity-0 animate-fade-up delay-200">
            <PricingCards onSubscribe={handleSubscribe} />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-300">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton text="App Store" className="w-56 border-white/20 bg-white/5 text-primary-foreground" />
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton text="Google Play" className="w-56 border-white/20 bg-white/5 text-primary-foreground" />
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
