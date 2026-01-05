import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Award, Heart, Target, Users } from "lucide-react";
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
  const bookingLink = "https://agendamentos.bestbarbers.app/barbershop/paradise";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider mb-6">
              NOSSA MARCA
            </h1>
            <div className="divider-ornament max-w-md mx-auto">
              <span className="text-muted-foreground text-sm tracking-widest">PARADISE</span>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-8">
                  NOSSA HISTÓRIA
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Inspirada nas antigas barbearias nova-iorquinas típicas das décadas de 40, 50 e 60, 
                    a Barbearia Paradise chega com a intenção de resgatar a cultura masculina, perdida 
                    ao longo dos anos.
                  </p>
                  <p>
                    Um espaço onde os homens se encontram para fazer a barba à navalha e cortar os 
                    cabelos enquanto fumam seus charutos, bebem e conversam.
                  </p>
                  <p>
                    Entre toalhas quentes e massagem facial, os melhores cremes e espumas preparam 
                    o rosto dos nossos clientes. E hoje, eles ainda podem aproveitar o espaço da 
                    nossa cervejaria.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden aspect-[4/3]">
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
        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-6">
                NOSSOS VALORES
              </h2>
              <div className="divider-ornament max-w-md mx-auto">
                <span className="text-muted-foreground text-sm tracking-widest">PILARES</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="vintage-card p-8 text-center hover-glow"
                >
                  <div className="w-14 h-14 border border-border flex items-center justify-center mx-auto mb-6">
                    <value.icon size={24} className="text-foreground" />
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-6">
                NOSSO AMBIENTE
              </h2>
              <div className="divider-ornament max-w-md mx-auto">
                <span className="text-muted-foreground text-sm tracking-widest">ESPAÇO</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden aspect-video">
                <img
                  src={barbershopInterior}
                  alt="Área de espera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden aspect-video">
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
        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-6">
                NOSSA EQUIPE
              </h2>
              <div className="divider-ornament max-w-md mx-auto">
                <span className="text-muted-foreground text-sm tracking-widest">PROFISSIONAIS</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Rafael Costa", role: "Barbeiro Master", experience: "10+ anos", image: barber1 },
                { name: "Lucas Mendes", role: "Barbeiro Senior", experience: "7 anos", image: barber2 },
                { name: "Carlos Silva", role: "Barbeiro Fundador", experience: "20+ anos", image: barber3 },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="aspect-[3/4] overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm tracking-wide">{member.role}</p>
                  <p className="text-muted-foreground/60 text-xs">{member.experience} de experiência</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-4">
              VENHA NOS CONHECER
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-light">
              Estamos esperando você para uma experiência única de cuidado masculino.
            </p>
            <Button size="lg" className="px-12" asChild>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                AGENDAR VISITA
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
