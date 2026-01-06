import barber1 from "@/assets/barber-portrait-1.jpg";
import barber2 from "@/assets/barber-portrait-2.jpg";
import barber3 from "@/assets/barber-portrait-3.jpg";

const team = [
  {
    name: "Rafael Costa",
    nickname: "O Mestre da Tesoura",
    role: "Barbeiro Master",
    bounty: "R$ 8.500",
    description: "Notório por transformar cortes simples em experiências extraordinárias. Aborde com cautela - níveis perigosos de visão criativa.",
    image: barber1,
  },
  {
    name: "Lucas Mendes",
    nickname: "O Ladrão de Looks",
    role: "Barbeiro Senior",
    bounty: "R$ 6.200",
    description: "Procurado por roubar briefings impossíveis e transformá-los em obras-primas premiadas. Armado com pensamento estratégico.",
    image: barber2,
  },
  {
    name: "Carlos Silva",
    nickname: "O Fundador Fora da Lei",
    role: "Fundador & CEO",
    bounty: "R$ 11.800",
    description: "Líder de operações revolucionárias, orquestrando crimes de estilo elaborados. Procurado por métodos disruptivos.",
    image: barber3,
  },
];

const TeamSection = () => {
  return (
    <section className="section-cinema bg-secondary">
      <div className="container-cinema">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4 opacity-0 animate-fade-up">Conheça os Foras da Lei</p>
          <h2 className="headline-section opacity-0 animate-fade-up delay-100">
            PROCURADOS<br />
            <span className="text-muted-foreground">VIVOS</span>
          </h2>
          <p className="body-text max-w-xl mt-6 opacity-0 animate-fade-up delay-200">
            Altamente qualificados e criativamente perigosos
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="wanted-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Wanted Header */}
              <div className="wanted-header">PROCURADO</div>

              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">{member.nickname}</p>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[hsl(var(--red-accent))] mb-4">
                  RECOMPENSA: {member.bounty}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
