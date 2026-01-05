import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import barberAtWork from "@/assets/barber-at-work.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";

const services = [
  {
    title: "Corte de Cabelo",
    description: "Degradê, social, moderno ou clássico. O corte perfeito para seu estilo.",
    price: "A partir de R$ 50",
    image: fadeHaircut,
  },
  {
    title: "Barba Completa",
    description: "Modelagem, alinhamento e hidratação com produtos premium.",
    price: "A partir de R$ 35",
    image: beardTrim,
  },
  {
    title: "Cabelo + Barba",
    description: "Pacote completo para transformação total do visual.",
    price: "A partir de R$ 75",
    image: barberAtWork,
  },
];

const ServicesSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            NOSSOS <span className="text-primary">SERVIÇOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada serviço é executado com precisão e atenção aos detalhes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-card"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    {service.price}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10" asChild>
                    <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                      Agendar
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link to="/servicos">
              VER TODOS OS SERVIÇOS
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;