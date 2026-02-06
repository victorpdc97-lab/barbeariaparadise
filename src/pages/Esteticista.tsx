import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock } from "lucide-react";

const categories = [
  { title: "Mãos & Pés", services: [
    { name: "Manicure (Masculino)", price: "R$ 30,00", duration: "00:30" },
    { name: "Pedicure (Masculino)", price: "R$ 30,00", duration: "00:30" },
    { name: "Manicure (Feminino)", price: "R$ 35,00", duration: "00:40" },
    { name: "Pedicure (Feminino)", price: "R$ 35,00", duration: "00:40" },
    { name: "Spa dos pés", price: "R$ 60,00", duration: "01:00" },
  ]},
  { title: "Massagens", services: [
    { name: "Quick massage", price: "R$ 40,00", duration: "00:15" },
    { name: "Massagem Relaxante", price: "R$ 130,00", duration: "01:00" },
    { name: "Massagem Reflexologia", price: "R$ 150,00", duration: "01:00" },
    { name: "Massagem Modeladora", price: "R$ 180,00", duration: "01:00" },
    { name: "Drenagem Linfática", price: "R$ 180,00", duration: "01:00" },
  ]},
  { title: "Pacotes de Massagem", services: [
    { name: "4 Massagens Relaxantes", price: "R$ 450,00", duration: "01:00 cada" },
    { name: "4 Massagens Reflexologia", price: "R$ 520,00", duration: "01:00 cada" },
    { name: "4 Massagens Modeladora", price: "R$ 620,00", duration: "01:00 cada" },
  ]},
  { title: "Tratamentos Faciais & Corporais", services: [
    { name: "Clean face", price: "R$ 150,00", duration: "00:50" },
    { name: "Esfoliação Corporal", price: "R$ 200,00", duration: "01:00" },
    { name: "Limpeza de Pele (Costas)", price: "R$ 200,00", duration: "01:00" },
    { name: "Microagulhamento", price: "R$ 250,00", duration: "00:40" },
    { name: "Depilação cera região", price: "a partir de R$ 45", duration: "00:15" },
  ]},
];

const EsteticsistaPage = () => {
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-20 bg-foreground">
          <div className="container-narrow text-center">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight mb-4">Estética</h1>
            <p className="text-primary-foreground/60 text-sm max-w-md mx-auto">Cuide de você com nossos serviços de estética, massagem e bem-estar</p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto space-y-12">
              {categories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-2xl text-foreground">{category.title}</h2>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="space-y-0">
                    {category.services.map((service, index) => (
                      <div key={service.name} className={`flex items-center justify-between py-4 ${index !== category.services.length - 1 ? "border-b border-border/50" : ""} hover:bg-muted/30 transition-colors px-4 -mx-4 rounded-sm`}>
                        <div className="flex-1">
                          <span className="text-foreground font-light tracking-wide">{service.name}</span>
                          <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5"><Clock size={11} />{service.duration}</div>
                        </div>
                        <span className="font-display text-lg text-foreground">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-foreground">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">Pronto para relaxar?</h2>
            <p className="text-primary-foreground/60 text-sm max-w-md mx-auto mb-8">Agende seu horário e venha viver a experiência Paradise.</p>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Horário</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EsteticsistaPage;
