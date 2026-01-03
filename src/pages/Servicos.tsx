import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, ArrowRight } from "lucide-react";
import barberAtWork from "@/assets/barber-at-work.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";

const services = [
  {
    title: "Corte de Cabelo",
    description: "Seja degradê, social, moderno ou clássico, nossos especialistas dominam todas as técnicas para entregar o corte perfeito que combina com seu estilo e personalidade.",
    duration: "45 min",
    price: "R$ 50",
    image: fadeHaircut,
  },
  {
    title: "Barba Completa",
    description: "Modelagem precisa, alinhamento perfeito e hidratação com produtos premium. Sua barba merece esse tratamento especial.",
    duration: "30 min",
    price: "R$ 35",
    image: beardTrim,
  },
  {
    title: "Cabelo + Barba",
    description: "Pacote completo para quem quer transformação total. Economize tempo e dinheiro cuidando de tudo em uma única sessão.",
    duration: "1h 15min",
    price: "R$ 75",
    image: barberAtWork,
  },
  {
    title: "Acabamento (Pezinho)",
    description: "Manutenção rápida para manter o corte alinhado entre as visitas. Ideal para quem gosta de estar sempre impecável.",
    duration: "15 min",
    price: "R$ 25",
    image: fadeHaircut,
  },
  {
    title: "Design de Sobrancelha",
    description: "Sobrancelhas bem definidas fazem toda a diferença. Modelagem masculina natural e harmônica com seu rosto.",
    duration: "15 min",
    price: "R$ 20",
    image: barberAtWork,
  },
  {
    title: "Pigmentação de Barba",
    description: "Cobertura de falhas e uniformização da cor. Resultado natural que realça sua barba sem parecer artificial.",
    duration: "1h",
    price: "R$ 80",
    image: beardTrim,
  },
  {
    title: "Hidratação Capilar",
    description: "Tratamento profundo que revitaliza os fios, traz brilho e maciez. Ideal para cabelos ressecados ou danificados.",
    duration: "30 min",
    price: "R$ 45",
    image: barbershopInterior,
  },
  {
    title: "Platinado Completo",
    description: "Transformação completa com descoloração e tonalização. Nossos especialistas garantem o tom perfeito para você.",
    duration: "2h",
    price: "R$ 150",
    image: fadeHaircut,
  },
];

const ServicosPage = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20na%20Barbearia%20Paradise.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="text-gradient-gold">Serviços</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada serviço é executado com precisão, atenção aos detalhes e produtos de primeira linha. 
              Escolha o seu e agende agora.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="lg:w-1/3 aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={16} className="text-primary" />
                        {service.duration}
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                    <Button variant="whatsapp" size="lg" className="w-fit" asChild>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={18} />
                        Agendar Este Serviço
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para <span className="text-gradient-gold">Transformar</span> seu Visual?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Agende seu horário agora mesmo pelo WhatsApp e venha viver a experiência Paradise.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar no WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicosPage;
