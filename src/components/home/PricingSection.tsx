import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const services = [
    { name: "Corte Masculino", price: "R$ 50" },
    { name: "Barba Completa", price: "R$ 35" },
    { name: "Cabelo + Barba", price: "R$ 75" },
    { name: "Acabamento (Pezinho)", price: "R$ 25" },
    { name: "Design de Sobrancelha", price: "R$ 20" },
    { name: "Pigmentação de Barba", price: "R$ 80" },
    { name: "Hidratação Capilar", price: "R$ 45" },
    { name: "Platinado Completo", price: "R$ 150" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
            SERVIÇOS & VALORES
          </h2>
          <div className="divider-ornament mt-6 max-w-md mx-auto">
            <span className="text-muted-foreground text-sm tracking-widest">TABELA</span>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="max-w-2xl mx-auto">
          <div className="vintage-card">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex items-center justify-between p-6 ${
                  index !== services.length - 1 ? "border-b border-border/50" : ""
                } hover:bg-muted/30 transition-colors`}
              >
                <span className="text-foreground font-light tracking-wide">
                  {service.name}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm">............</span>
                  <span className="text-foreground font-display text-xl tracking-wider">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-up">
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 text-sm tracking-widest px-12"
              size="lg"
              asChild
            >
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                AGENDAR AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
