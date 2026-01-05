import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const services = [
  { name: "Corte", price: "R$ 65,00", duration: "00:30" },
  { name: "Barba", price: "R$ 50,00", duration: "00:30" },
  { name: "Corte + Barba", price: "R$ 115,00", duration: "00:40" },
  { name: "Selagem (a partir de)", price: "R$ 100,00", duration: "00:30" },
  { name: "Acabamento", price: "R$ 20,00", duration: "00:15" },
  { name: "Depilação Cera", price: "R$ 25,00", duration: "00:20" },
  { name: "Sobrancelha Navalha", price: "R$ 20,00", duration: "00:15" },
  { name: "Sobrancelha Pinça", price: "R$ 30,00", duration: "00:30" },
  { name: "Hidratação Cabelo", price: "R$ 35,00", duration: "00:30" },
  { name: "Hidratação Barba", price: "R$ 35,00", duration: "00:30" },
  { name: "Escova", price: "R$ 25,00", duration: "00:15" },
  { name: "Camuflagem (a partir de)", price: "R$ 40,00", duration: "00:30" },
  { name: "Pigmentação de Barba (a partir de)", price: "R$ 30,00", duration: "00:15" },
  { name: "Tintura (a partir de)", price: "R$ 60,00", duration: "01:30" },
  { name: "Luzes (a partir de)", price: "R$ 80,00", duration: "01:30" },
  { name: "Platinado (a partir de)", price: "R$ 200,00", duration: "02:00" },
  { name: "Banho Vestiário Paradise", price: "R$ 15,00", duration: "00:15" },
  { name: "Máscara de Limpeza", price: "R$ 25,00", duration: "00:15" },
  { name: "Corte Feminino Curto (a partir de)", price: "R$ 90,00", duration: "01:15" },
  { name: "Abordagem Visagismo", price: "R$ 120,00", duration: "01:00" },
];

const ServicosPage = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider mb-6">
              BARBA & CABELO
            </h1>
            <div className="divider-ornament max-w-md mx-auto">
              <span className="text-muted-foreground text-sm tracking-widest">SERVIÇOS</span>
            </div>
          </div>
        </section>

        {/* Services Table */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <div className="vintage-card">
                {services.map((service, index) => (
                  <div
                    key={service.name}
                    className={`flex items-center justify-between p-5 ${
                      index !== services.length - 1 ? "border-b border-border/50" : ""
                    } hover:bg-muted/30 transition-colors`}
                  >
                    <div className="flex-1">
                      <span className="text-foreground font-light tracking-wide">
                        {service.name}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                        <Clock size={12} />
                        {service.duration}
                      </div>
                    </div>
                    <span className="font-display text-xl text-foreground tracking-wider">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <Button size="lg" className="px-12" asChild>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                    AGENDAR AGORA
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-4">
              PRONTO PARA TRANSFORMAR SEU VISUAL?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-light">
              Agende seu horário agora mesmo e venha viver a experiência Paradise.
            </p>
            <Button size="lg" className="px-12" asChild>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                AGENDAR HORÁRIO
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicosPage;
