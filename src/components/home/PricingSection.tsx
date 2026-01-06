import { Check } from "lucide-react";

const PricingSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  const services = [
    { name: "Corte Masculino", price: "R$ 50", duration: "45 min" },
    { name: "Barba Completa", price: "R$ 35", duration: "30 min" },
    { name: "Cabelo + Barba", price: "R$ 75", duration: "1h 15min", featured: true },
    { name: "Acabamento", price: "R$ 25", duration: "15 min" },
    { name: "Design de Sobrancelha", price: "R$ 20", duration: "15 min" },
    { name: "Pigmentação de Barba", price: "R$ 80", duration: "1h" },
  ];

  return (
    <section className="section-clean bg-gradient-soft">
      <div className="container-clean">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="eyebrow mb-4 block opacity-0 animate-fade-up">Tabela de Preços</span>
            <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-up delay-100">
              VALORES TRANSPARENTES
            </h2>
            <p className="body-text mb-8 opacity-0 animate-fade-up delay-200">
              Qualidade premium com preços acessíveis. Cada serviço é executado com 
              a excelência que você merece.
            </p>
            
            <ul className="space-y-3 mb-10 opacity-0 animate-fade-up delay-300">
              {["Produtos de alta qualidade", "Ambiente climatizado", "Atendimento personalizado", "Café e água disponíveis"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href={bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary opacity-0 animate-fade-up delay-400"
            >
              Agendar Agora
            </a>
          </div>

          {/* Right - Pricing Table */}
          <div className="card-clean bg-white opacity-0 animate-fade-up delay-200">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex items-center justify-between px-6 py-5 ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                } ${service.featured ? "bg-primary/5" : ""} hover:bg-primary/5 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  {service.featured && (
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  )}
                  <div>
                    <span className="text-foreground font-medium block">
                      {service.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                </div>
                <span className="text-xl font-bold text-primary">
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
