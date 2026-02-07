import { MapPin, Clock } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const LocationSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left — Info card overlapping */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="opacity-0 animate-fade-up">
              <div className="gold-line mb-5" />
              <h2 className="headline-section text-foreground mb-8">
                Venha nos<br />
                <span className="italic">visitar</span>
              </h2>
            </div>

            <div className="space-y-6 mb-8 opacity-0 animate-fade-up delay-100">
              <div className="flex items-start gap-4">
                <div className="icon-container flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">Endereço</h4>
                  <p className="text-sm text-muted-foreground">
                    Rua Juiz de Fora, 1374<br />
                    Santo Agostinho, Belo Horizonte - MG
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-container flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">Horário</h4>
                  <p className="text-sm text-muted-foreground">
                    Seg-Sex: 09h – 20h<br />
                    Sábado: 09h – 15h
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-up delay-200">
              <InteractiveHoverButton href={bookingLink} target="_blank" text="Agendar Agora" className="w-56" />
            </div>
          </div>

          {/* Right — Map */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden opacity-0 animate-fade-up delay-200 min-h-[350px] lg:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2099387897287!2d-43.93919108449647!3d-19.91719434350752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e3f04d9b81%3A0x99a54a0919a0c7e8!2sR.%20Juiz%20de%20Fora%2C%201374%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia Paradise"
              className="min-h-[350px] lg:min-h-[450px] grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
