import galleryInterior from "@/assets/gallery-interior.jpg";

const steps = [
  { title: "Agendamento", description: "Reserve pelo app ou site em segundos. Escolha seu barbeiro, horário e serviço preferido." },
  { title: "Consultoria", description: "Conversa inicial para entender seu estilo, formato do rosto e rotina de cuidados." },
  { title: "Execução", description: "Corte com técnicas modernas e clássicas, usando produtos premium selecionados." },
  { title: "Finalização", description: "Styling perfeito, dicas personalizadas e um café para fechar a experiência." },
];

const BenefitsSection = () => {
  return (
    <section className="section-clean bg-background relative grain">
      <div className="container-clean relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="opacity-0 animate-fade-up">
            <div className="gold-line mb-5" />
            <h2 className="headline-section text-foreground mb-8">
              Mais de uma década<br />
              <span className="italic">cuidando do seu estilo</span>
            </h2>
            <p className="body-text mb-8 leading-loose">
              Com mais de <strong className="text-foreground">10 anos de experiência</strong> e{" "}
              <strong className="text-foreground">milhares de clientes atendidos</strong>,
              a Paradise se tornou referência em Belo Horizonte. Nossa nota de{" "}
              <strong className="text-foreground">4.9 no Google</strong> reflete o compromisso
              com cada detalhe — do atendimento ao acabamento final.
            </p>
            <div className="rounded-lg overflow-hidden aspect-[16/9] opacity-0 animate-fade-up delay-200">
              <img src={galleryInterior} alt="Interior da barbearia" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="opacity-0 animate-fade-up delay-200">
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
