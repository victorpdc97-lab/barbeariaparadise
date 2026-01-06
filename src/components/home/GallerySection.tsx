import galleryBarbearia from "@/assets/gallery-barbearia.jpg";
import galleryBar from "@/assets/gallery-bar.jpg";
import galleryBanheiro from "@/assets/gallery-banheiro.jpg";
import galleryLoja from "@/assets/gallery-loja.jpg";
import galleryOutlet from "@/assets/gallery-outlet.jpg";

const galleryImages = [
  { src: galleryBarbearia, alt: "Área de corte", span: "col-span-2 row-span-2" },
  { src: galleryBar, alt: "Bar e sinuca", span: "" },
  { src: galleryBanheiro, alt: "Banheiro", span: "" },
  { src: galleryLoja, alt: "Loja de roupas", span: "col-span-2" },
  { src: galleryOutlet, alt: "Outlet", span: "" },
];

const GallerySection = () => {
  return (
    <section className="section-clean bg-gradient-soft">
      <div className="container-clean">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block opacity-0 animate-fade-up">Galeria</span>
          <h2 className="headline-section text-foreground opacity-0 animate-fade-up delay-100">
            NOSSO AMBIENTE
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl group cursor-pointer opacity-0 animate-fade-up shadow-sm hover:shadow-lg transition-shadow ${image.span}`}
              style={{ animationDelay: `${(index + 2) * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-center text-muted-foreground mt-12 opacity-0 animate-fade-up delay-400">
          Um espaço pensado para sua experiência ser única
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
