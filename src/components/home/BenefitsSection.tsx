import { Scissors, Clock, Award, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Clock, value: "24", label: "Horas por Semana" },
  { icon: Scissors, value: "5-7", label: "Dias de Agenda" },
  { icon: Award, value: "Premium", label: "Qualidade" },
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
  {
    step: "05",
    title: "Satisfação",
    description: "Resultado garantido ou ajustamos na hora",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-cinema bg-background">
      <div className="container-cinema">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4 opacity-0 animate-fade-up">Nos Bastidores</p>
          <h2 className="headline-section opacity-0 animate-fade-up delay-100">
            COMO CRIAMOS<br />
            <span className="text-muted-foreground">A MAGIA</span>
          </h2>
          <p className="body-text max-w-xl mt-6 opacity-0 animate-fade-up delay-200">
            Assista nosso processo se desenrolar passo a passo
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="relative opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="font-display text-xl text-foreground">{item.step}</span>
                </div>
                
                <h3 className="headline-card mb-2 text-center lg:text-left">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center lg:text-left">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="stat-item opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 5) * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
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
