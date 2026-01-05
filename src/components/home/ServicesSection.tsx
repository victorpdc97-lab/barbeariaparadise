import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import beardTrim from "@/assets/beard-trim.jpg";

const ServicesSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={beardTrim} 
          alt="Barba & Cabelo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Description */}
            <div className="animate-fade-up order-2 lg:order-1">
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light mb-8">
                Entre toalhas quentes e massagem facial, os melhores cremes e espumas preparam 
                o rosto dos nossos clientes. E hoje, eles e nossos visitantes ainda podem 
                aproveitar o espaço da nossa cervejaria.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 text-sm tracking-widest px-8"
                  size="lg"
                  asChild
                >
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                    AGENDAR HORÁRIO
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-foreground/30 text-foreground hover:bg-foreground/10 text-sm tracking-widest px-8"
                  size="lg"
                  asChild
                >
                  <Link to="/servicos">
                    VER SERVIÇOS
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Title */}
            <div className="animate-fade-up order-1 lg:order-2 text-right">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none tracking-wider">
                BARBA &
              </h2>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none tracking-wider">
                CABELO
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
