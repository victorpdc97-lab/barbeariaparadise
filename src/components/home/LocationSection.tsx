import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20na%20Barbearia%20Paradise.";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Barbearia+Paradise";

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como <span className="text-gradient-gold">Chegar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos em uma localização privilegiada, fácil de encontrar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[400px] bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333684!2d-46.65512368447647!3d-23.563207167614647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barbearia Paradise"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Rua das Barbearias, 123<br />
                    Centro, São Paulo - SP<br />
                    CEP 00000-000
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 09h - 20h<br />
                    Sábado: 09h - 18h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Contato
                  </h3>
                  <p className="text-muted-foreground">
                    WhatsApp: (00) 00000-0000<br />
                    @barbearia.paradise
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone size={18} />
                  Fale Conosco
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation size={18} />
                  Abrir no Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
