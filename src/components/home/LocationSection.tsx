import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
            LOCALIZAÇÃO
          </h2>
          <div className="divider-ornament mt-6 max-w-md mx-auto">
            <span className="text-muted-foreground text-sm tracking-widest">ENCONTRE-NOS</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] animate-fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2099387897287!2d-43.93919108449647!3d-19.91719434350752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e3f04d9b81%3A0x99a54a0919a0c7e8!2sR.%20Juiz%20de%20Fora%2C%201374%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia Paradise"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8 animate-fade-up delay-200">
            {/* Address */}
            <div className="flex gap-6">
              <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg tracking-wider text-foreground mb-2">ENDEREÇO</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Rua Juiz de Fora, 1374<br />
                  Santo Agostinho, Belo Horizonte - MG<br />
                  CEP 30180-061
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg tracking-wider text-foreground mb-2">HORÁRIOS</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Segunda a Sexta: 09h - 20h<br />
                  Sábado: 09h - 15h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-6">
              <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg tracking-wider text-foreground mb-2">CONTATO</h3>
                <p className="text-muted-foreground font-light">
                  (31) 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
