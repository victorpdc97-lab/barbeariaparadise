const PricingSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const services = [
    { name: "Corte Masculino", price: "R$ 50" },
    { name: "Barba Completa", price: "R$ 35" },
    { name: "Cabelo + Barba", price: "R$ 75" },
    { name: "Acabamento", price: "R$ 25" },
    { name: "Design de Sobrancelha", price: "R$ 20" },
    { name: "Pigmentação de Barba", price: "R$ 80" },
  ];

  return (
    <section className="section-apple bg-background">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow-apple mb-4 animate-fade-up">Serviços</p>
          <h2 className="headline-apple animate-fade-up delay-100">
            Valores que cabem<br />no seu bolso.
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex items-center justify-between px-8 py-5 ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/50 transition-colors animate-fade-up`}
                style={{ animationDelay: `${(index + 2) * 0.05}s` }}
              >
                <span className="text-foreground font-medium">
                  {service.name}
                </span>
                <span className="text-muted-foreground font-semibold text-lg">
                  {service.price}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 animate-fade-up delay-400">
            <a 
              href={bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-apple-primary"
            >
              Agendar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
