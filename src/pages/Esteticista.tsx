import usePageMeta from "@/hooks/usePageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useDownloadApp } from "@/contexts/DownloadAppContext";

type Service = { name: string; price: string; note?: string };
type Category = { title: string; subtitle?: string; services: Service[] };

const categories: Category[] = [
  { title: "Massagens & Terapias", subtitle: "Assinantes do Clube Paradise têm 10% de desconto", services: [
    { name: "Massagem Facial", price: "R$ 130,00", note: "Clube: -10%" },
    { name: "Massagem Relaxante", price: "R$ 130,00", note: "Clube: -10%" },
    { name: "Massagem Terapêutica", price: "R$ 130,00", note: "Clube: -10%" },
    { name: "Massagem Craniocervical", price: "R$ 130,00", note: "Clube: -10%" },
    { name: "Ventosaterapia", price: "R$ 130,00", note: "Clube: -10%" },
    { name: "Auriculoterapia", price: "R$ 45,00", note: "Clube: -10%" },
  ]},
  { title: "Combos", services: [
    { name: "Terapêutica + Ventosaterapia", price: "R$ 180,00" },
    { name: "Ventosaterapia + Relaxante", price: "R$ 180,00" },
    { name: "Craniocervical + Relaxante", price: "R$ 180,00" },
    { name: "Limpeza de Pele + Massagem", price: "R$ 220,00" },
  ]},
  { title: "Pacotes", services: [
    { name: "Bem Estar", price: "R$ 250,00", note: "2 massagens" },
    { name: "Relaxar", price: "R$ 430,00", note: "4 massagens" },
  ]},
  { title: "Vale Presente", subtitle: "Presenteie quem você ama. Ele(a) decide como e quando utilizar!", services: [
    { name: "Vale Presente", price: "R$ 300,00" },
    { name: "Vale Presente", price: "R$ 500,00" },
    { name: "Vale Presente", price: "R$ 1.000,00" },
  ]},
];

const EsteticsistaPage = () => {
  usePageMeta({ title: "Estética e Bem-estar | Barbearia Paradise", description: "Massagens, ventosaterapia, auriculoterapia, combos, pacotes e vale presente. Cuide de você na Estética Paradise." });
  const { openDownloadModal } = useDownloadApp();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-20 bg-foreground">
          <div className="container-narrow text-center">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight mb-4">Estética</h1>
            <p className="text-primary-foreground/60 text-sm max-w-none mx-auto whitespace-nowrap">Cuide de você com nossos serviços de estética, massagem e bem-estar</p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto space-y-12">
              {categories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="font-display text-2xl text-foreground">{category.title}</h2>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  {category.subtitle && <p className="text-muted-foreground text-sm mb-4">{category.subtitle}</p>}
                  {!category.subtitle && <div className="mb-4" />}
                  <div className="space-y-0">
                    {category.services.map((service, index) => (
                      <div key={`${service.name}-${service.price}`} className={`flex items-center justify-between py-4 ${index !== category.services.length - 1 ? "border-b border-border/50" : ""} hover:bg-muted/30 transition-colors px-4 -mx-4 rounded-sm`}>
                        <div className="flex-1">
                          <span className="text-foreground font-light tracking-wide">{service.name}</span>
                          {service.note && <div className="text-muted-foreground text-xs mt-0.5">{service.note}</div>}
                        </div>
                        <span className="font-display text-lg text-foreground">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Pronto para relaxar?</h2>
            <p className="text-primary-foreground/60 text-sm max-w-md mx-auto mb-8">Agende seu horário e venha viver a experiência Paradise.</p>
            <InteractiveHoverButton onClick={openDownloadModal} text="Agendar Horário" className="w-56 border-white/20 bg-white/5 text-primary-foreground" />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EsteticsistaPage;
