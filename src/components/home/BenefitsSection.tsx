import { Clock, Award, Sparkles, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Atendimento com hora marcada. Seu tempo é valioso.",
  },
  {
    icon: Award,
    title: "Profissionais Expert",
    description: "Especialistas em cortes modernos, degradê e barba.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Premium",
    description: "Espaço confortável e sofisticado para relaxar.",
  },
  {
    icon: Shield,
    title: "Produtos de Qualidade",
    description: "Utilizamos apenas produtos profissionais premium.",
  },
  {
    icon: Users,
    title: "Atendimento Exclusivo",
    description: "Experiência personalizada para cada cliente.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            POR QUE ESCOLHER A <span className="text-primary">PARADISE</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais do que um corte, oferecemos uma experiência completa de cuidado masculino.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 uppercase">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;