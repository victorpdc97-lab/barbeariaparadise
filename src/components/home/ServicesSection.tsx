import { Link } from "react-router-dom";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";

const services = [
  {
    title: "Corte",
    subtitle: "Precisão em cada detalhe.",
    image: fadeHaircut,
    link: "/servicos",
  },
  {
    title: "Barba",
    subtitle: "O ritual clássico da navalha.",
    image: beardTrim,
    link: "/servicos",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background section-apple">
      <div className="container-apple-wide">
        <div className="tile-grid grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-apple relative min-h-[500px] md:min-h-[580px] flex flex-col items-center justify-end p-8 md:p-12 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10 text-center text-white">
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-white/70 mb-4">
                  {service.subtitle}
                </p>
                <Link to={service.link} className="link-apple text-white hover:text-white/80">
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
