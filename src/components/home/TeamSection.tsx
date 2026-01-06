import teamJonathan from "@/assets/team-jonathan.png";
import teamKelwin from "@/assets/team-kelwin.png";
import teamLucas from "@/assets/team-lucas.jpg";
import teamTariki from "@/assets/team-tariki.jpg";

const team = [
  {
    name: "Jonathan",
    role: "Barbeiro",
    specialty: "Cortes Modernos",
    description: "Especialista em técnicas modernas e cortes personalizados.",
    image: teamJonathan,
  },
  {
    name: "Kelwin",
    role: "Barbeiro",
    specialty: "Degradê & Barba",
    description: "Mestre em degradês perfeitos e acabamentos impecáveis.",
    image: teamKelwin,
  },
  {
    name: "Lucas",
    role: "Barbeiro",
    specialty: "Cortes Clássicos",
    description: "Une tradição e estilo em cada atendimento.",
    image: teamLucas,
  },
  {
    name: "Tariki",
    role: "Barbeiro",
    specialty: "Especialista em Barba",
    description: "Mestre no ritual da navalha e barba perfeita.",
    image: teamTariki,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="card-clean group opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                {/* Teal overlay */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 
                                transition-opacity duration-500 group-hover:opacity-0" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale 
                             transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Subtle inner border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 z-20" />
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
