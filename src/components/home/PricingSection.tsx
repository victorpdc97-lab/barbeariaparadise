import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useDownloadApp } from "@/contexts/DownloadAppContext";

const PricingSection = () => {
  const { openDownloadModal } = useDownloadApp();
  const services = [
    { name: "Corte", price: "R$ 65", duration: "30 min" },
    { name: "Barba", price: "R$ 50", duration: "30 min" },
    { name: "Corte + Barba", price: "R$ 115", duration: "50 min", featured: true },
    { name: "Acabamento", price: "R$ 20", duration: "15 min" },
    { name: "Sobrancelha Navalha", price: "R$ 20", duration: "15 min" },
    { name: "Pigmentação de Barba", price: "a partir de R$ 30", duration: "15 min" },
  ];

  return (
    <section className="section-tight bg-gradient-soft relative grain">
      <div className="container-clean relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 opacity-0 animate-fade-up">
            
            <h2 className="headline-section text-foreground">Valores</h2>
          </div>

          <div className="card-clean bg-card opacity-0 animate-fade-up delay-100">
            {services.map((service, index) => (
              <div key={service.name} className={`flex items-center justify-between px-6 py-5 transition-colors hover:bg-muted/50 ${index !== services.length - 1 ? "border-b border-border" : ""}`}>
                <div>
                  <span className={`text-foreground block ${service.featured ? "font-semibold" : "font-normal"}`}>{service.name}</span>
                  <span className="text-xs text-muted-foreground">{service.duration}</span>
                </div>
                <span className={`font-display text-xl ${service.featured ? "text-foreground font-bold" : "text-foreground"}`}>{service.price}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 opacity-0 animate-fade-up delay-300 flex justify-center">
            <InteractiveHoverButton onClick={openDownloadModal} text="Agendar Agora" className="w-56" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
