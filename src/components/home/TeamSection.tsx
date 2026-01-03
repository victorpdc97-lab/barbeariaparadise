import { Instagram } from "lucide-react";
import barber1 from "@/assets/barber-portrait-1.jpg";
import barber2 from "@/assets/barber-portrait-2.jpg";
import barber3 from "@/assets/barber-portrait-3.jpg";

const team = [
  {
    name: "Rafael Costa",
    role: "Barbeiro Master",
    bio: "10+ anos de experiência. Especialista em degradê e cortes modernos.",
    image: barber1,
    instagram: "#",
  },
  {
    name: "Lucas Mendes",
    role: "Barbeiro Senior",
    bio: "Mestre em barbas e estilos clássicos. Atenção impecável aos detalhes.",
    image: barber2,
    instagram: "#",
  },
  {
    name: "Carlos Silva",
    role: "Barbeiro Fundador",
    bio: "20+ anos transformando estilos. A experiência que você merece.",
    image: barber3,
    instagram: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossa <span className="text-gradient-gold">Equipe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profissionais apaixonados pelo que fazem, prontos para transformar seu visual.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 rounded-full bg-background flex items-center justify-center"
                  >
                    <Instagram size={20} className="text-foreground" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
