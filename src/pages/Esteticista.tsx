import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";
const services = [{
  name: "Manicure (Masculino)",
  price: "R$ 30,00",
  duration: "00:30"
}, {
  name: "Pedicure (Masculino)",
  price: "R$ 30,00",
  duration: "00:30"
}, {
  name: "Manicure (Feminino)",
  price: "R$ 35,00",
  duration: "00:40"
}, {
  name: "Pedicure (Feminino)",
  price: "R$ 35,00",
  duration: "00:40"
}, {
  name: "Quick massage",
  price: "R$ 40,00",
  duration: "00:15"
}, {
  name: "Depilação cera região (a partir de)",
  price: "R$ 45,00",
  duration: "00:15"
}, {
  name: "Spa dos pés",
  price: "R$ 60,00",
  duration: "01:00"
}, {
  name: "Massagem (Relaxante)",
  price: "R$ 130,00",
  duration: "01:00"
}, {
  name: "Massagem (Reflexologia)",
  price: "R$ 150,00",
  duration: "01:00"
}, {
  name: "Massagem (Modeladora)",
  price: "R$ 180,00",
  duration: "01:00"
}, {
  name: "Drenagem Linfática",
  price: "R$ 180,00",
  duration: "01:00"
}, {
  name: "Clean face",
  price: "R$ 150,00",
  duration: "00:50"
}, {
  name: "Esfoliação Corporal",
  price: "R$ 200,00",
  duration: "01:00"
}, {
  name: "Limpeza de Pele (Costas)",
  price: "R$ 200,00",
  duration: "01:00"
}, {
  name: "Microagulhamento",
  price: "R$ 250,00",
  duration: "00:40"
}, {
  name: "4 Massagens (Relaxantes)",
  price: "R$ 450,00",
  duration: "01:00"
}, {
  name: "4 Massagens (Reflexologia)",
  price: "R$ 520,00",
  duration: "01:00"
}, {
  name: "4 Massagens (Modeladora)",
  price: "R$ 620,00",
  duration: "01:00"
}];
const EsteticsistaPage = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20de%20Estética%20na%20Paradise.";
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient-gold">Esteticista</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cuide de você com nossos serviços de estética. Relaxamento, beleza e bem-estar em um só lugar.
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
                    <th className="text-left py-4 px-6 font-display font-semibold text-primary">​TEMPO</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => <tr key={service.name} className={`border-b border-border last:border-b-0 hover:bg-card/50 transition-colors ${index % 2 === 0 ? "bg-background" : "bg-card/30"}`}>
                      <td className="py-4 px-6 text-foreground font-medium">{service.name}</td>
                      <td className="py-4 px-6 text-primary font-semibold">{service.price}</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          {service.duration}
                        </div>
                      </td>
                    </tr>)}
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
              Pronto para <span className="text-gradient-gold">Relaxar</span>?
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
    </div>;
};
export default EsteticsistaPage;