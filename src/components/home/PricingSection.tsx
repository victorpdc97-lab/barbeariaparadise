import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const services = [
  { name: "Corte Masculino", duration: "45 min", price: "R$ 50" },
  { name: "Barba Completa", duration: "30 min", price: "R$ 35" },
  { name: "Cabelo + Barba", duration: "1h 15min", price: "R$ 75" },
  { name: "Acabamento (Pezinho)", duration: "15 min", price: "R$ 25" },
  { name: "Design de Sobrancelha", duration: "15 min", price: "R$ 20" },
  { name: "Pigmentação de Barba", duration: "1h", price: "R$ 80" },
  { name: "Hidratação Capilar", duration: "30 min", price: "R$ 45" },
  { name: "Platinado Completo", duration: "2h", price: "R$ 150" },
];

const PricingSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20na%20Barbearia%20Paradise.";

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tabela de <span className="text-gradient-gold">Preços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Investimento justo para resultados excepcionais.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b border-border">
              <span className="font-display font-semibold text-foreground">Serviço</span>
              <span className="font-display font-semibold text-foreground text-center">Duração</span>
              <span className="font-display font-semibold text-foreground text-right">Valor</span>
            </div>

            {/* Table Rows */}
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`grid grid-cols-3 p-4 items-center hover:bg-secondary/30 transition-colors ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-foreground font-medium text-sm md:text-base">
                  {service.name}
                </span>
                <span className="text-muted-foreground text-sm text-center">
                  {service.duration}
                </span>
                <span className="text-primary font-bold text-right">
                  {service.price}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-6">
              * Preços sujeitos a alteração. Consulte disponibilidade.
            </p>
            <Button variant="booking" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar Horário
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
