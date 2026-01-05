import barberAtWork from "@/assets/barber-at-work.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import heroImage from "@/assets/hero-barbershop.jpg";

const galleryImages = [
  { src: barbershopInterior, alt: "Ambiente interno da barbearia" },
  { src: fadeHaircut, alt: "Corte degradê moderno" },
  { src: beardTrim, alt: "Trabalho de barba" },
  { src: barberAtWork, alt: "Barbeiro trabalhando" },
  { src: heroImage, alt: "Vista da barbearia" },
  { src: barbershopInterior, alt: "Detalhes do ambiente" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider">
            GALERIA
          </h2>
          <div className="divider-ornament mt-6 max-w-md mx-auto">
            <span className="text-muted-foreground text-sm tracking-widest">NOSSO TRABALHO</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
