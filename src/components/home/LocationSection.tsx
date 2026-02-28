import { MapPin, Clock } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useDownloadApp } from "@/contexts/DownloadAppContext";
import { ADDRESS, HOURS, GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

const LocationSection = () => {
  const { openDownloadModal } = useDownloadApp();

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
                    {ADDRESS.street}<br />
                    {ADDRESS.neighborhood}, {ADDRESS.city} - {ADDRESS.state}
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
                    {HOURS.weekdays}<br />
                    {HOURS.saturday}
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-up delay-200">
              <InteractiveHoverButton onClick={openDownloadModal} text="Agendar Agora" className="w-56" />
            </div>
          </div>

          {/* Right — Map */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden opacity-0 animate-fade-up delay-200 min-h-[350px] lg:min-h-[450px]">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
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
