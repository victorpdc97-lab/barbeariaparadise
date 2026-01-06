const PricingSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const services = [
    { name: "Corte Masculino", price: "R$ 50", duration: "45 min" },
    { name: "Barba Completa", price: "R$ 35", duration: "30 min" },
    { name: "Cabelo + Barba", price: "R$ 75", duration: "1h 15min" },
    { name: "Acabamento", price: "R$ 25", duration: "15 min" },
    { name: "Design de Sobrancelha", price: "R$ 20", duration: "15 min" },
    { name: "Pigmentação de Barba", price: "R$ 80", duration: "1h" },
  ];

  return (
    <section className="section-cinema bg-secondary">
      <div className="container-cinema">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="eyebrow mb-4 opacity-0 animate-fade-up">Tabela de Preços</p>
            <h2 className="headline-section mb-6 opacity-0 animate-fade-up delay-100">
              VALORES<br />
              <span className="text-muted-foreground">TRANSPARENTES</span>
            </h2>
            <p className="body-text mb-10 opacity-0 animate-fade-up delay-200">
              Qualidade premium com preços acessíveis. Cada serviço é executado com 
              a excelência que você merece.
            </p>
            
            <a 
              href={bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary opacity-0 animate-fade-up delay-300"
            >
              Agendar Agora
            </a>
          </div>

          {/* Right - Pricing Table */}
          <div className="card-cinema opacity-0 animate-fade-up delay-200">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex items-center justify-between px-6 py-5 ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/50 transition-colors`}
              >
                <div>
                  <span className="text-foreground font-medium block">
                    {service.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {service.duration}
                  </span>
                </div>
                <span className="font-display text-xl text-foreground">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
