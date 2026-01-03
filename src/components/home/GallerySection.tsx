import barberAtWork from "@/assets/barber-at-work.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import heroImage from "@/assets/hero-barbershop.jpg";
import barber1 from "@/assets/barber-portrait-1.jpg";

const galleryImages = [
  { src: barbershopInterior, alt: "Ambiente interno da barbearia", span: "col-span-2 row-span-2" },
  { src: fadeHaircut, alt: "Corte degradê moderno", span: "col-span-1 row-span-1" },
  { src: beardTrim, alt: "Trabalho de barba", span: "col-span-1 row-span-1" },
  { src: barberAtWork, alt: "Barbeiro trabalhando", span: "col-span-1 row-span-1" },
  { src: heroImage, alt: "Vista da barbearia", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossa <span className="text-gradient-gold">Galeria</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um pouco do nosso trabalho e do ambiente que preparamos para você.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden rounded-xl group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
