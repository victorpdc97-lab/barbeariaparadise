import { MapPin, Clock, Phone, Calendar } from "lucide-react";

const LocationSection = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <section className="section-cinema bg-background">
      <div className="container-cinema">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4 opacity-0 animate-fade-up">Vamos Criar Juntos</p>
          <h2 className="headline-section opacity-0 animate-fade-up delay-100">
            PRONTO PARA<br />
            <span className="text-muted-foreground">BRILHAR?</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mt-6 opacity-0 animate-fade-up delay-200">
            Agende uma visita para conhecer nosso espaço e transformar seu visual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Booking Card */}
          <div className="card-cinema p-8 opacity-0 animate-fade-up delay-200">
            <h3 className="headline-card mb-2">AGENDE SUA VISITA</h3>
            <p className="text-muted-foreground mb-6">30 minutos • Consulta gratuita</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Agendamento Online</h4>
                  <p className="text-sm text-muted-foreground">Reserve seu horário em poucos cliques</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Localização Premium</h4>
                  <p className="text-sm text-muted-foreground">Rua Juiz de Fora, 1374 - Santo Agostinho</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Horários Flexíveis</h4>
                  <p className="text-sm text-muted-foreground">Seg-Sex: 09h-20h • Sáb: 09h-15h</p>
                </div>
              </div>
            </div>

            <a 
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Agendar Agora
            </a>
          </div>

          {/* Right - Map */}
          <div className="aspect-video lg:aspect-auto lg:min-h-[450px] rounded-2xl overflow-hidden opacity-0 animate-fade-up delay-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2099387897287!2d-43.93919108449647!3d-19.91719434350752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e3f04d9b81%3A0x99a54a0919a0c7e8!2sR.%20Juiz%20de%20Fora%2C%201374%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia Paradise"
              className="min-h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
