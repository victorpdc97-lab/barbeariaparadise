import { Scissors, Clock, Award, Check } from "lucide-react";

const stats = [
  { icon: Clock, value: "10 anos+", label: "Experiência Barbeiros" },
  { icon: Scissors, value: "1000+", label: "Clientes Atendidos" },
  { icon: Award, value: "100%", label: "Satisfação" },
];

const process = [
  {
    step: "01",
    title: "Agendamento",
    description: "Reserve seu horário online ou pelo WhatsApp",
  },
  {
    step: "02",
    title: "Consultoria",
    description: "Conversa inicial para entender seu estilo",
  },
  {
    step: "03",
    title: "Execução",
    description: "Corte com técnicas modernas e clássicas",
  },
  {
    step: "04",
    title: "Finalização",
    description: "Produtos premium e styling perfeito",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-clean bg-gradient-soft">
      <div className="container-clean">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block opacity-0 animate-fade-up">Nosso Processo</span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
            COMO FUNCIONA
          </h2>
          <p className="body-text max-w-xl mx-auto mt-6 opacity-0 animate-fade-up delay-200">
            Uma experiência simples e agradável do início ao fim
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-primary/20" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="relative text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Step number */}
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10">
                  <span className="font-display text-2xl">{item.step}</span>
                </div>
                
                <h3 className="headline-card text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="stat-item opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 5) * 0.1}s` }}
            >
              <div className="icon-container mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
