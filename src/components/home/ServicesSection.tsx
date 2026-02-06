import { Link } from "react-router-dom";
import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceCombo from "@/assets/service-combo.jpg";
import manicurePedicure from "@/assets/manicure-pedicure.png";

const services = [
  { title: "Consultoria de Moda", description: "Consultores especializados em moda que elaboram looks sob medida para cada ocasião, do casual ao formal.", image: serviceHaircut, badge: "Looks", span: "md:col-span-2 md:row-span-2" },
  { title: "Vestiário para Banho", description: "Desfrute de um banho relaxante com nosso vestiário completo, toalhas e produtos premium.", image: serviceBeard, badge: "Relax", span: "" },
  { title: "Sinuca & Bar", description: "Mesa de sinuca profissional, cerveja artesanal e drinks para curtir enquanto espera ou após o corte.", image: serviceCombo, badge: "Entretenimento", span: "" },
  { title: "Manicure, Pedicure e Massagem", description: "Relaxe com nossos serviços de manicure, pedicure e massagem para renovar corpo e mente.", image: manicurePedicure, badge: "Beleza", span: "md:col-span-2" },
];

const ServicesSection = () => {
  return (
    <section className="section-tight bg-gradient-soft relative grain">
      <div className="container-clean relative z-10">
        <div className="mb-12 opacity-0 animate-fade-up">
          <div className="gold-line mb-5" />
          <h2 className="headline-section text-foreground">
            O que nos torna<br /><span className="italic">diferentes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {services.map((service, index) => (
            <div key={service.title} className={`group relative overflow-hidden rounded-lg cursor-pointer opacity-0 animate-fade-up ${service.span}`} style={{ animationDelay: `${(index + 2) * 0.08}s` }}>
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 mb-1.5 block">{service.badge}</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 opacity-0 animate-fade-up delay-400">
          <Link to="/servicos" className="btn-outline">Ver Todos os Serviços</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
