import { Link } from "react-router-dom";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceCombo from "@/assets/service-combo.jpg";
import manicurePedicure from "@/assets/manicure-pedicure.png";

const services = [{
  title: "Consultoria de Moda",
  description: "Consultores especializados em moda que elaboram looks sob medida para cada ocasião.",
  image: serviceHaircut,
  badge: "Looks"
}, {
  title: "Vestiário para Banho",
  description: "Desfrute de um banho relaxante.",
  image: serviceBeard,
  badge: "Relax"
}, {
  title: "Sinuca",
  description: "Experiência completa Paradise.",
  image: serviceCombo,
  badge: "Entretenimento"
}, {
  title: "Manicure, Pedicure e Massagista",
  description: "Cuidados completos para suas mãos e pés em um ambiente relaxante.",
  image: manicurePedicure,
  badge: "Beleza"
}];
const ServicesSection = () => {
  return <section className="section-clean bg-background">
      <div className="container-clean">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block opacity-0 animate-fade-up">O Que Oferecemos</span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
            NOSSOS DIFERENCIAIS
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-6 opacity-0 animate-fade-up delay-200">
            Cada serviço é cuidadosamente executado garantindo a excelência que você merece
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-services">
          {services.map((service, index) => <div key={service.title} className="card-clean group opacity-0 animate-fade-up" style={{
          animationDelay: `${(index + 2) * 0.1}s`
        }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="badge-primary mb-3 inline-block">{service.badge}</span>
                <h3 className="headline-card text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>)}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 opacity-0 animate-fade-up delay-400">
          <Link to="/servicos" className="btn-outline">
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>;
};
export default ServicesSection;