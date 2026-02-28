import useCountUp from "@/hooks/useCountUp";

const steps = [
  { title: "Agendamento", description: "Reserve pelo app ou site em segundos. Escolha seu barbeiro, horário e serviço preferido." },
  { title: "Consultoria", description: "Conversa inicial para entender seu estilo, formato do rosto e rotina de cuidados." },
  { title: "Execução", description: "Corte com técnicas modernas e clássicas, usando produtos premium selecionados." },
  { title: "Finalização", description: "Styling perfeito, dicas personalizadas e um café para fechar a experiência." },
];

const CountStat = ({ end, decimals = 0, suffix = "", prefix = "", label }: { end: number; decimals?: number; suffix?: string; prefix?: string; label: string }) => {
  const { ref, display, started } = useCountUp({ end, decimals, suffix, prefix, duration: 2000 });
  return (
    <div className="text-center">
      <span ref={ref} className={`font-display text-4xl md:text-5xl font-bold text-foreground block transition-opacity duration-500 ${started ? "opacity-100" : "opacity-0"}`}>
        {display}
      </span>
      <span className="text-xs text-muted-foreground tracking-wide uppercase mt-1 block">{label}</span>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="section-clean bg-background relative grain">
      <div className="container-clean relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mb-16 animate-fade-up">
          <CountStat end={10} suffix="+" label="Anos de experiência" />
          <CountStat end={4.9} decimals={1} label="Nota no Google" />
          <CountStat end={5000} suffix="+" label="Clientes atendidos" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-up">
            <div className="gold-line mb-5" />
            <h2 className="headline-section text-foreground mb-8">
              Mais de uma década<br />
              <span className="italic">cuidando do seu estilo</span>
            </h2>
            <p className="body-text mb-8 leading-loose">
              A Paradise se tornou referência em Belo Horizonte. Compromisso
              com cada detalhe do atendimento ao acabamento final.
            </p>
          </div>

          <div className="animate-fade-up delay-200">
            <p className="eyebrow mb-8">Como funciona</p>
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center text-xs font-medium text-foreground/60 group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && <div className="w-px h-full bg-border min-h-[60px]" />}
                  </div>
                  <div className="pb-10">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
