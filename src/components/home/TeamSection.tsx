import { Instagram } from "lucide-react";
import barber1 from "@/assets/barber-portrait-1.jpg";
import barber2 from "@/assets/barber-portrait-2.jpg";
import barber3 from "@/assets/barber-portrait-3.jpg";

const team = [
  {
    name: "Rafael Costa",
    role: "Barbeiro Master",
    image: barber1,
    instagram: "#",
  },
  {
    name: "Lucas Mendes",
    role: "Barbeiro Senior",
    image: barber2,
    instagram: "#",
  },
  {
    name: "Carlos Silva",
    role: "Barbeiro Fundador",
    image: barber3,
    instagram: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
            NOSSA EQUIPE
          </h2>
          <div className="divider-ornament mt-6 max-w-md mx-auto">
            <span className="text-muted-foreground text-sm tracking-widest">PROFISSIONAIS</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative mb-6 mx-auto aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-foreground/50 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl tracking-wider text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
