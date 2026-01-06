import barberAtWork from "@/assets/barber-at-work.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import fadeHaircut from "@/assets/fade-haircut.jpg";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import heroImage from "@/assets/hero-barbershop.jpg";

const galleryImages = [
  { src: barbershopInterior, alt: "Ambiente interno", span: "col-span-2 row-span-2" },
  { src: fadeHaircut, alt: "Corte degradê", span: "" },
  { src: beardTrim, alt: "Barba", span: "" },
  { src: barberAtWork, alt: "Barbeiro trabalhando", span: "col-span-2" },
  { src: heroImage, alt: "Vista da barbearia", span: "" },
];

const GallerySection = () => {
  return (
    <section className="section-cinema bg-secondary">
      <div className="container-cinema">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4 opacity-0 animate-fade-up">Galeria</p>
          <h2 className="headline-section opacity-0 animate-fade-up delay-100">
            NOSSO<br />
            <span className="text-muted-foreground">AMBIENTE</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl group cursor-pointer opacity-0 animate-fade-up ${image.span}`}
              style={{ animationDelay: `${(index + 2) * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-center text-muted-foreground italic mt-12 opacity-0 animate-fade-up delay-400">
          "Cenários diversos, estilos únicos — tudo criado com nossa expertise"
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
