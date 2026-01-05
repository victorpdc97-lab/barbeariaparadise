import barber1 from "@/assets/barber-portrait-1.jpg";
import barber2 from "@/assets/barber-portrait-2.jpg";
import barber3 from "@/assets/barber-portrait-3.jpg";

const team = [
  {
    name: "Rafael Costa",
    role: "Barbeiro Master",
    image: barber1,
  },
  {
    name: "Lucas Mendes",
    role: "Barbeiro Senior",
    image: barber2,
  },
  {
    name: "Carlos Silva",
    role: "Fundador",
    image: barber3,
  },
];

const TeamSection = () => {
  return (
    <section className="section-apple bg-secondary">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow-apple mb-4 animate-fade-up">Nossa Equipe</p>
          <h2 className="headline-apple animate-fade-up delay-100">
            Profissionais<br />que fazem a diferença.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground">
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
