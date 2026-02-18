import teamJonathan from "@/assets/team-jonathan.png";
import teamLucas from "@/assets/team-lucas.jpg";
import teamTariki from "@/assets/team-tariki.jpg";

const team = [
  { name: "Jonathan", role: "Barbeiro", specialty: "Cortes Modernos", description: "Apaixonado por degradês e linhas precisas. Sempre atualizado com as tendências internacionais.", image: teamJonathan, instagram: "https://www.instagram.com/barbeariaparadise/" },
  { name: "Lucas", role: "Barbeiro", specialty: "Cortes Clássicos", description: "O cara dos cortes atemporais. Combina a técnica tradicional com o toque moderno que o cliente quer.", image: teamLucas, instagram: "https://www.instagram.com/barbeariaparadise/" },
  { name: "Tariki", role: "Barbeiro", specialty: "Especialista em Barba", description: "Mestre na navalha e no ritual da barba. Cada cliente sai com o rosto impecável e relaxado.", image: teamTariki, instagram: "https://www.instagram.com/barbeariaparadise/" },
];

const TeamSection = () => {
  return (
    <section className="section-clean bg-background">
      <div className="container-clean">
        <div className="text-center mb-14 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">Nossa Equipe</p>
          <h2 className="headline-section text-foreground">Quem cuida de você</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {team.map((member, index) => (
            <div key={member.name} className="group opacity-0 animate-fade-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">{member.specialty}</p>
                <h3 className="font-display text-2xl text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
