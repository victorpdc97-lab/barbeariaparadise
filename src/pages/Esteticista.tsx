import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
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
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider mb-6">
              Estética
            </h1>
            <div className="divider-ornament max-w-md mx-auto">
              <span className="text-muted-foreground text-sm tracking-widest">BEM-ESTAR</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6 font-light">
              Cuide de você com nossos serviços de estética. Relaxamento, beleza e bem-estar em um só lugar.
            </p>
          </div>
        </section>

        {/* Services Table */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <div className="vintage-card">
                {services.map((service, index) => <div key={service.name} className={`flex items-center justify-between p-5 ${index !== services.length - 1 ? "border-b border-border/50" : ""} hover:bg-muted/30 transition-colors`}>
                    <div className="flex-1">
                      <span className="text-foreground font-light tracking-wide">
                        {service.name}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                        <Clock size={12} />
                        {service.duration}
                      </div>
                    </div>
                    <span className="font-display text-xl text-foreground tracking-wider">
                      {service.price}
                    </span>
                  </div>)}
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <Button size="lg" className="px-12" asChild>
                  
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-4">
              PRONTO PARA RELAXAR?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-light">
              Agende seu horário e venha viver a experiência Paradise.
            </p>
            <Button size="lg" className="px-12" asChild>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                AGENDAR HORÁRIO
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