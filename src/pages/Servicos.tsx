import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";

const services = [
  { name: "Corte", price: "R$ 65,00", duration: "00:30" },
  { name: "Barba", price: "R$ 50,00", duration: "00:30" },
  { name: "Corte + Barba", price: "R$ 115,00", duration: "00:40" },
  { name: "Selagem (a partir de)", price: "R$ 100,00", duration: "00:30" },
  { name: "Acabamento", price: "R$ 20,00", duration: "00:15" },
  { name: "Depilação Cera", price: "R$ 25,00", duration: "00:20" },
  { name: "Sobrancelha Navalha", price: "R$ 20,00", duration: "00:15" },
  { name: "Sobrancelha Pinça", price: "R$ 30,00", duration: "00:30" },
  { name: "Hidratação Cabelo", price: "R$ 35,00", duration: "00:30" },
  { name: "Hidratação Barba", price: "R$ 35,00", duration: "00:30" },
  { name: "Escova", price: "R$ 25,00", duration: "00:15" },
  { name: "Camuflagem (a partir de)", price: "R$ 40,00", duration: "00:30" },
  { name: "Pigmentação de Barba (a partir de)", price: "R$ 30,00", duration: "00:15" },
  { name: "Tintura (a partir de)", price: "R$ 60,00", duration: "01:30" },
  { name: "Luzes (a partir de)", price: "R$ 80,00", duration: "01:30" },
  { name: "Platinado (a partir de)", price: "R$ 200,00", duration: "02:00" },
  { name: "Banho Vestiário Paradise", price: "R$ 15,00", duration: "00:15" },
  { name: "Máscara de Limpeza", price: "R$ 25,00", duration: "00:15" },
  { name: "Corte Feminino Curto (a partir de)", price: "R$ 90,00", duration: "01:15" },
  { name: "Abordagem Visagismo", price: "R$ 120,00", duration: "01:00" },
  { name: "Corte (Clube de Assinatura)", price: "R$ 0,00", duration: "00:30" },
  { name: "Corte + Barba (Clube de Assinatura)", price: "R$ 0,00", duration: "00:50" },
  { name: "Barba (Clube de Assinatura)", price: "R$ 0,00", duration: "00:30" },
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

        {/* Services Table */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-card border-b border-border">
                    <th className="text-left py-4 px-6 font-display font-semibold text-primary">NOME</th>
                    <th className="text-left py-4 px-6 font-display font-semibold text-primary">VALOR</th>
                    <th className="text-left py-4 px-6 font-display font-semibold text-primary">HORÁRIO</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr 
                      key={service.name}
                      className={`border-b border-border last:border-b-0 hover:bg-card/50 transition-colors ${
                        index % 2 === 0 ? "bg-background" : "bg-card/30"
                      }`}
                    >
                      <td className="py-4 px-6 text-foreground font-medium">{service.name}</td>
                      <td className="py-4 px-6 text-primary font-semibold">{service.price}</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          {service.duration}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                  Agendar Agora
                </a>
              </Button>
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
