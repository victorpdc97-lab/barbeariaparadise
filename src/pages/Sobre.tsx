import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Heart, Target, Users } from "lucide-react";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import heroImage from "@/assets/hero-barbershop.jpg";
import barber1 from "@/assets/barber-portrait-1.jpg";
import barber2 from "@/assets/barber-portrait-2.jpg";
import barber3 from "@/assets/barber-portrait-3.jpg";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Cada corte é tratado como uma obra de arte. Não descansamos até atingir a perfeição.",
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Amamos o que fazemos. Essa paixão se reflete em cada detalhe do nosso trabalho.",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Técnica impecável aliada aos melhores produtos do mercado.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Mais do que clientes, construímos relacionamentos duradouros.",
  },
];

const SobrePage = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá,%20quero%20agendar%20um%20horário%20na%20Barbearia%20Paradise.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient-gold">Paradise</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça nossa história, nossos valores e o que nos torna a escolha certa para cuidar do seu visual.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nossa <span className="text-gradient-gold">História</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A Barbearia Paradise nasceu da visão de criar mais do que um simples salão de barbearia. 
                    Queríamos construir um espaço onde cada homem pudesse se sentir especial, onde o 
                    cuidado pessoal fosse tratado como um ritual de autocuidado.
                  </p>
                  <p>
                    Fundada por profissionais apaixonados pela arte de barbear, nossa barbearia combina 
                    técnicas tradicionais com as tendências mais modernas do mercado. Cada membro da 
                    nossa equipe é cuidadosamente selecionado não apenas pela habilidade técnica, mas 
                    também pela capacidade de criar conexões genuínas com nossos clientes.
                  </p>
                  <p>
                    Hoje, somos referência em cortes masculinos, barba e cuidados pessoais, sempre 
                    mantendo nosso compromisso com a excelência e o atendimento humanizado.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Interior da Barbearia Paradise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos <span className="text-gradient-gold">Valores</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Os pilares que guiam cada decisão e cada atendimento na Paradise.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environment */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nosso <span className="text-gradient-gold">Ambiente</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Um espaço pensado para seu conforto e relaxamento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src={barbershopInterior}
                  alt="Área de espera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src={heroImage}
                  alt="Estações de trabalho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossa <span className="text-gradient-gold">Equipe</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Profissionais dedicados que fazem a diferença.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Rafael Costa", role: "Barbeiro Master", experience: "10+ anos", image: barber1 },
                { name: "Lucas Mendes", role: "Barbeiro Senior", experience: "7 anos", image: barber2 },
                { name: "Carlos Silva", role: "Barbeiro Fundador", experience: "20+ anos", image: barber3 },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience} de experiência</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Venha <span className="text-gradient-gold">Nos Conhecer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Estamos esperando você para uma experiência única de cuidado masculino.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar Visita
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

export default SobrePage;
