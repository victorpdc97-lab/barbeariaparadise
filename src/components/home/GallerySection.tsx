import barberAtWork from "@/assets/barber-at-work.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import heroImage from "@/assets/hero-barbershop.jpg";

const galleryImages = [
  { src: barbershopInterior, alt: "Ambiente interno" },
  { src: fadeHaircut, alt: "Corte degradê" },
  { src: beardTrim, alt: "Barba" },
  { src: barberAtWork, alt: "Barbeiro trabalhando" },
  { src: heroImage, alt: "Vista da barbearia" },
  { src: barbershopInterior, alt: "Detalhes" },
];

const GallerySection = () => {
  return (
    <section className="section-apple bg-secondary">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow-apple mb-4 animate-fade-up">Galeria</p>
          <h2 className="headline-apple animate-fade-up delay-100">
            Conheça nosso<br />ambiente.
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-2xl group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
