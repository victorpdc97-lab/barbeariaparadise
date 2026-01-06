import barber1 from "@/assets/barber-portrait-1.jpg";
import barber2 from "@/assets/barber-portrait-2.jpg";
import barber3 from "@/assets/barber-portrait-3.jpg";

const team = [
  {
    name: "Rafael Costa",
    role: "Barbeiro Master",
    specialty: "Especialista em Degradê",
    description: "Mais de 10 anos transformando cortes em arte. Especialista em técnicas modernas.",
    image: barber1,
  },
  {
    name: "Lucas Mendes",
    role: "Barbeiro Senior",
    specialty: "Especialista em Barba",
    description: "Mestre no ritual da navalha. Barba perfeita é sua especialidade.",
    image: barber2,
  },
  {
    name: "Carlos Silva",
    role: "Fundador & CEO",
    specialty: "Cortes Clássicos",
    description: "Fundador da Paradise, une tradição e inovação em cada atendimento.",
    image: barber3,
  },
];

const TeamSection = () => {
  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block opacity-0 animate-fade-up">Nossa Equipe</span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
            PROFISSIONAIS
          </h2>
          <p className="body-text max-w-xl mx-auto mt-6 opacity-0 animate-fade-up delay-200">
            Conheça os especialistas que vão cuidar do seu visual
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="card-clean group opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <span className="badge-mint mb-3 inline-block">{member.specialty}</span>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {member.role}
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
