import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Barbearia+Paradise+Belo+Horizonte";

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            COMO <span className="text-primary">CHEGAR</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos em uma localização privilegiada, fácil de encontrar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[400px] bg-muted shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.902449158641!2d-43.94371108451619!3d-19.9322935864036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c7fd3a9e3f%3A0x8138cbeb8138cbeb!2sRua%20Juiz%20de%20Fora%2C%201374%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
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
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 uppercase">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Rua Juiz de Fora, 1374<br />
                    Santo Agostinho, Belo Horizonte - MG<br />
                    CEP 30180-061
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 uppercase">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 09h - 20h<br />
                    Sábado: 09h - 15h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 uppercase">
                    Contato
                  </h3>
                  <p className="text-muted-foreground">
                    @barbearia.paradise
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="hero" size="lg" asChild>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                  <Phone size={18} />
                  AGENDAR AGORA
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation size={18} />
                  ABRIR NO MAPS
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