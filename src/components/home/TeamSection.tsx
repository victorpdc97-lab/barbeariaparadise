import teamJonathan from "@/assets/team-jonathan.png";
import teamKelwin from "@/assets/team-kelwin.png";
import teamLucas from "@/assets/team-lucas.jpg";
import teamTariki from "@/assets/team-tariki.jpg";

const team = [
  {
    name: "Jonathan",
    role: "Barbeiro",
    specialty: "Cortes Modernos",
    description: "Apaixonado por degradês e linhas precisas. Sempre atualizado com as tendências internacionais.",
    image: teamJonathan,
    instagram: "https://www.instagram.com/barbeariaparadise/",
  },
  {
    name: "Kelwin",
    role: "Barbeiro",
    specialty: "Degradê & Barba",
    description: "Perfeccionista nos detalhes. Seus degradês são reconhecidos como referência na cidade.",
    image: teamKelwin,
    instagram: "https://www.instagram.com/barbeariaparadise/",
  },
  {
    name: "Lucas",
    role: "Barbeiro",
    specialty: "Cortes Clássicos",
    description: "O cara dos cortes atemporais. Combina a técnica tradicional com o toque moderno que o cliente quer.",
    image: teamLucas,
    instagram: "https://www.instagram.com/barbeariaparadise/",
  },
  {
    name: "Tariki",
    role: "Barbeiro",
    specialty: "Especialista em Barba",
    description: "Mestre na navalha e no ritual da barba. Cada cliente sai com o rosto impecável e relaxado.",
    image: teamTariki,
    instagram: "https://www.instagram.com/barbeariaparadise/",
  },
];

const TeamSection = () => {
  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        {/* Header — centered */}
        <div className="text-center mb-14 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">Nossa Equipe</p>
          <h2 className="headline-section text-foreground">
            Quem cuida de você
          </h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group opacity-0 animate-fade-up ${
                index % 2 === 1 ? "sm:mt-8" : ""
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay with Instagram */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    @paradise
                  </a>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[hsl(var(--gold))] mb-1">
                  {member.specialty}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-1">
                  {member.name}
                </h3>
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
