import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock } from "lucide-react";
import { ParticleButton } from "@/components/ui/particle-button";

const categories = [
  {
    title: "Corte & Barba",
    services: [
      { name: "Corte", price: "R$ 65,00", duration: "00:30" },
      { name: "Barba", price: "R$ 50,00", duration: "00:30" },
      { name: "Corte + Barba", price: "R$ 115,00", duration: "00:40", featured: true },
      { name: "Acabamento", price: "R$ 20,00", duration: "00:15" },
    ],
  },
  {
    title: "Sobrancelha & Depilação",
    services: [
      { name: "Sobrancelha Navalha", price: "R$ 20,00", duration: "00:15" },
      { name: "Sobrancelha Pinça", price: "R$ 30,00", duration: "00:30" },
      { name: "Depilação Cera", price: "R$ 25,00", duration: "00:20" },
    ],
  },
  {
    title: "Tratamentos",
    services: [
      { name: "Selagem", price: "a partir de R$ 100", duration: "00:30" },
      { name: "Hidratação Cabelo", price: "R$ 35,00", duration: "00:30" },
      { name: "Hidratação Barba", price: "R$ 35,00", duration: "00:30" },
      { name: "Escova", price: "R$ 25,00", duration: "00:15" },
      { name: "Máscara de Limpeza", price: "R$ 25,00", duration: "00:15" },
    ],
  },
  {
    title: "Coloração",
    services: [
      { name: "Camuflagem", price: "a partir de R$ 40", duration: "00:30" },
      { name: "Pigmentação de Barba", price: "a partir de R$ 30", duration: "00:15" },
      { name: "Tintura", price: "a partir de R$ 60", duration: "01:30" },
      { name: "Luzes", price: "a partir de R$ 80", duration: "01:30" },
      { name: "Platinado", price: "a partir de R$ 200", duration: "02:00" },
    ],
  },
  {
    title: "Outros",
    services: [
      { name: "Banho Vestiário Paradise", price: "R$ 15,00", duration: "00:15" },
      { name: "Corte Feminino Curto", price: "a partir de R$ 90", duration: "01:15" },
      { name: "Abordagem Visagismo", price: "R$ 120,00", duration: "01:00" },
    ],
  },
];

const ServicosPage = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-20 bg-foreground">
          <div className="container-narrow text-center">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight mb-4">
              Barba & Cabelo
            </h1>
            <p className="text-primary-foreground/60 text-sm">Nossos serviços e valores</p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto space-y-12">
              {categories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-2xl text-foreground">{category.title}</h2>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="space-y-0">
                    {category.services.map((service, index) => (
                      <div key={service.name} className={`flex items-center justify-between py-4 ${index !== category.services.length - 1 ? "border-b border-border/50" : ""} hover:bg-muted/30 transition-colors px-4 -mx-4 rounded-sm`}>
                        <div className="flex-1">
                          <span className={`text-foreground ${service.featured ? "font-medium" : "font-light"} tracking-wide`}>{service.name}</span>
                          <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
                            <Clock size={11} />
                            {service.duration}
                          </div>
                        </div>
                        <span className={`font-display text-lg text-foreground ${service.featured ? "font-bold" : ""}`}>{service.price}</span>
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
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Pronto para transformar seu visual?</h2>
            <p className="text-primary-foreground/60 text-sm max-w-md mx-auto mb-8">Agende seu horário e venha viver a experiência Paradise.</p>
            <ParticleButton href={bookingLink} target="_blank" className="btn-primary">Agendar Horário</ParticleButton>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicosPage;
