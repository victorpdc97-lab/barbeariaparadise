import { Link } from "react-router-dom";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";

const services = [
  {
    title: "Corte Masculino",
    description: "Precisão em cada detalhe. Cortes modernos com técnicas clássicas.",
    image: fadeHaircut,
    badge: "PARADISE LAB",
  },
  {
    title: "Barba Completa",
    description: "O ritual clássico da navalha. Tratamento premium para sua barba.",
    image: beardTrim,
    badge: "PARADISE LAB",
  },
  {
    title: "Combo Completo",
    description: "Cabelo + barba + hidratação. A experiência completa Paradise.",
    image: barbershopInterior,
    badge: "PARADISE LAB",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-cinema bg-background">
      <div className="container-cinema">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4 opacity-0 animate-fade-up">O Que Oferecemos</p>
          <h2 className="headline-section opacity-0 animate-fade-up delay-100">
            NOSSOS<br />
            <span className="text-muted-foreground">SERVIÇOS</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid-services">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card aspect-[4/5] opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="service-card-content">
                <span className="badge-accent mb-3 inline-block">{service.badge}</span>
                <h3 className="headline-card mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center body-text max-w-2xl mx-auto mt-16 opacity-0 animate-fade-up delay-400">
          Cada serviço é cuidadosamente executado em nosso espaço, garantindo que cada detalhe 
          capture a essência da sua visão com precisão e estilo artístico.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
